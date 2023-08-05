from datetime import datetime
from collections import defaultdict

from six import StringIO
from nylas.client.restful_model_collection import RestfulModelCollection
from nylas.client.errors import FileUploadError, UnSyncedError
from nylas.utils import timestamp_from_dt

# pylint: disable=attribute-defined-outside-init


def typed_dict_attr(items, attr_name=None):
    if attr_name:
        pairs = [(item["type"], item[attr_name]) for item in items]
    else:
        pairs = [(item["type"], item) for item in items]
    dct = defaultdict(list)
    for key, value in pairs:
        dct[key].append(value)
    return dct


class NylasAPIObject(dict):
    attrs = []
    date_attrs = {}
    datetime_attrs = {}
    datetime_filter_attrs = {}
    typed_dict_attrs = {}
    # The Nylas API holds most objects for an account directly under '/',
    # but some of them are under '/a' (mostly the account-management
    # and billing code). api_root is a tiny metaprogramming hack to let
    # us use the same code for both.
    api_root = "n"

    def __init__(self, cls, api):
        self.id = None
        self.cls = cls
        self.api = api
        super(NylasAPIObject, self).__init__()

    __setattr__ = dict.__setitem__
    __delattr__ = dict.__delitem__
    __getattr__ = dict.get

    @classmethod
    def create(cls, api, **kwargs):
        object_type = kwargs.get("object")
        cls_object_type = getattr(cls, "object_type", cls.__name__.lower())
        if object_type and object_type != cls_object_type and object_type != "account":
            # We were given a specific object type and we're trying to
            # instantiate something different; abort. (Relevant for folders
            # and labels API.)
            # We need a special case for accounts because the /accounts API
            # is different between the open source and hosted API.
            return
        obj = cls(api)  # pylint: disable=no-value-for-parameter
        obj.cls = cls
        for attr in cls.attrs:
            # Support attributes we want to override with properties where
            # the property names overlap with the JSON names (e.g. folders)
            attr_name = attr
            if attr_name.startswith("_"):
                attr = attr_name[1:]
            if attr in kwargs:
                obj[attr_name] = kwargs[attr]
                if attr_name == "from":
                    obj["from_"] = kwargs[attr]
        for date_attr, iso_attr in cls.date_attrs.items():
            if kwargs.get(iso_attr):
                obj[date_attr] = datetime.strptime(kwargs[iso_attr], "%Y-%m-%d").date()
        for dt_attr, ts_attr in cls.datetime_attrs.items():
            if kwargs.get(ts_attr):
                obj[dt_attr] = datetime.utcfromtimestamp(kwargs[ts_attr])
        for attr, value_attr_name in cls.typed_dict_attrs.items():
            obj[attr] = typed_dict_attr(kwargs.get(attr, []), attr_name=value_attr_name)

        if "id" not in kwargs:
            obj["id"] = None

        return obj

    def as_json(self):
        dct = {}
        for attr in self.cls.attrs:
            if hasattr(self, attr):
                dct[attr] = getattr(self, attr)
        for date_attr, iso_attr in self.cls.date_attrs.items():
            if self.get(date_attr):
                dct[iso_attr] = self[date_attr].strftime("%Y-%m-%d")
        for dt_attr, ts_attr in self.cls.datetime_attrs.items():
            if self.get(dt_attr):
                dct[ts_attr] = timestamp_from_dt(self[dt_attr])
        for attr, value_attr in self.cls.typed_dict_attrs.items():
            typed_dict = getattr(self, attr)
            if value_attr:
                dct[attr] = []
                for key, values in typed_dict.items():
                    for value in values:
                        dct[attr].append({"type": key, value_attr: value})
            else:
                dct[attr] = []
                for values in typed_dict.values():
                    for value in values:
                        dct[attr].append(value)
        return dct

    def child_collection(self, cls, **filters):
        return RestfulModelCollection(cls, self.api, **filters)

    def save(self, **kwargs):
        if self.id:
            new_obj = self.api._update_resource(
                self.cls, self.id, self.as_json(), **kwargs
            )
        else:
            new_obj = self.api._create_resource(self.cls, self.as_json(), **kwargs)
        for attr in self.cls.attrs:
            if hasattr(new_obj, attr):
                setattr(self, attr, getattr(new_obj, attr))

    def update(self):
        new_obj = self.api._update_resource(self.cls, self.id, self.as_json())
        for attr in self.cls.attrs:
            if hasattr(new_obj, attr):
                setattr(self, attr, getattr(new_obj, attr))


class Message(NylasAPIObject):
    attrs = [
        "bcc",
        "body",
        "cc",
        "date",
        "events",
        "files",
        "from",
        "id",
        "account_id",
        "object",
        "snippet",
        "starred",
        "subject",
        "thread_id",
        "to",
        "unread",
        "starred",
        "_folder",
        "_labels",
        "headers",
        "reply_to",
    ]
    datetime_attrs = {"received_at": "date"}
    datetime_filter_attrs = {
        "received_before": "received_before",
        "received_after": "received_after",
    }
    collection_name = "messages"

    def __init__(self, api):
        NylasAPIObject.__init__(self, Message, api)

    @property
    def attachments(self):
        return self.child_collection(File, message_id=self.id)

    @property
    def folder(self):
        # Instantiate a Folder object from the API response
        if self._folder:
            return Folder.create(self.api, **self._folder)

    @property
    def labels(self):
        if self._labels:
            return [Label.create(self.api, **l) for l in self._labels]
        return []

    def update_folder(self, folder_id):
        update = {"folder": folder_id}
        new_obj = self.api._update_resource(self.cls, self.id, update)
        for attr in self.cls.attrs:
            if hasattr(new_obj, attr):
                setattr(self, attr, getattr(new_obj, attr))
        return self.folder

    def update_labels(self, label_ids=None):
        label_ids = label_ids or []
        update = {"labels": label_ids}
        new_obj = self.api._update_resource(self.cls, self.id, update)
        for attr in self.cls.attrs:
            if hasattr(new_obj, attr):
                setattr(self, attr, getattr(new_obj, attr))
        return self.labels

    def add_labels(self, label_ids=None):
        label_ids = label_ids or []
        labels = [l.id for l in self.labels]
        labels = list(set(labels).union(set(label_ids)))
        return self.update_labels(labels)

    def add_label(self, label_id):
        return self.add_labels([label_id])

    def remove_labels(self, label_ids=None):
        label_ids = label_ids or []
        labels = [l.id for l in self.labels]
        labels = list(set(labels) - set(label_ids))
        return self.update_labels(labels)

    def remove_label(self, label_id):
        return self.remove_labels([label_id])

    def mark_as_seen(self):
        self.mark_as_read()

    def mark_as_read(self):
        update = {"unread": False}
        self.api._update_resource(self.cls, self.id, update)
        self.unread = False

    def mark_as_unread(self):
        update = {"unread": True}
        self.api._update_resource(self.cls, self.id, update)
        self.unread = True

    def star(self):
        update = {"starred": True}
        self.api._update_resource(self.cls, self.id, update)
        self.starred = True

    def unstar(self):
        update = {"starred": False}
        self.api._update_resource(self.cls, self.id, update)
        self.starred = False

    @property
    def raw(self):
        headers = {"Accept": "message/rfc822"}
        response = self.api._get_resource_raw(Message, self.id, headers=headers)
        if response.status_code == 202:
            raise UnSyncedError(response.content)
        return response.content


class Folder(NylasAPIObject):
    attrs = ["id", "display_name", "name", "object", "account_id"]
    collection_name = "folders"

    def __init__(self, api):
        NylasAPIObject.__init__(self, Folder, api)

    @property
    def threads(self):
        return self.child_collection(Thread, folder_id=self.id)

    @property
    def messages(self):
        return self.child_collection(Message, folder_id=self.id)


class Label(NylasAPIObject):
    attrs = ["id", "display_name", "name", "object", "account_id"]
    collection_name = "labels"

    def __init__(self, api):
        NylasAPIObject.__init__(self, Label, api)

    @property
    def threads(self):
        return self.child_collection(Thread, label_id=self.id)

    @property
    def messages(self):
        return self.child_collection(Message, label_id=self.id)


class Thread(NylasAPIObject):
    attrs = [
        "draft_ids",
        "id",
        "message_ids",
        "account_id",
        "object",
        "participants",
        "snippet",
        "subject",
        "subject_date",
        "last_message_timestamp",
        "first_message_timestamp",
        "last_message_received_timestamp",
        "last_message_sent_timestamp",
        "unread",
        "starred",
        "version",
        "_folders",
        "_labels",
        "received_recent_date",
        "has_attachments",
    ]
    datetime_attrs = {
        "first_message_at": "first_message_timestamp",
        "last_message_at": "last_message_timestamp",
        "last_message_received_at": "last_message_received_timestamp",
        "last_message_sent_at": "last_message_sent_timestamp",
    }
    datetime_filter_attrs = {
        "last_message_before": "last_message_before",
        "last_message_after": "last_message_after",
        "started_before": "started_before",
        "started_after": "started_after",
    }
    collection_name = "threads"

    def __init__(self, api):
        NylasAPIObject.__init__(self, Thread, api)

    @property
    def messages(self):
        return self.child_collection(Message, thread_id=self.id)

    @property
    def drafts(self):
        return self.child_collection(Draft, thread_id=self.id)

    @property
    def folders(self):
        if self._folders:
            return [Folder.create(self.api, **f) for f in self._folders]
        return []

    @property
    def labels(self):
        if self._labels:
            return [Label.create(self.api, **l) for l in self._labels]
        return []

    def update_folder(self, folder_id):
        update = {"folder": folder_id}
        new_obj = self.api._update_resource(self.cls, self.id, update)
        for attr in self.cls.attrs:
            if hasattr(new_obj, attr):
                setattr(self, attr, getattr(new_obj, attr))
        return self.folder

    def update_labels(self, label_ids=None):
        label_ids = label_ids or []
        update = {"labels": label_ids}
        new_obj = self.api._update_resource(self.cls, self.id, update)
        for attr in self.cls.attrs:
            if hasattr(new_obj, attr):
                setattr(self, attr, getattr(new_obj, attr))
        return self.labels

    def add_labels(self, label_ids=None):
        label_ids = label_ids or []
        labels = [l.id for l in self.labels]
        labels = list(set(labels).union(set(label_ids)))
        return self.update_labels(labels)

    def add_label(self, label_id):
        return self.add_labels([label_id])

    def remove_labels(self, label_ids=None):
        label_ids = label_ids or []
        labels = [l.id for l in self.labels]
        labels = list(set(labels) - set(label_ids))
        return self.update_labels(labels)

    def remove_label(self, label_id):
        return self.remove_labels([label_id])

    def mark_as_seen(self):
        self.mark_as_read()

    def mark_as_read(self):
        update = {"unread": False}
        self.api._update_resource(self.cls, self.id, update)
        self.unread = False

    def mark_as_unread(self):
        update = {"unread": True}
        self.api._update_resource(self.cls, self.id, update)
        self.unread = True

    def star(self):
        update = {"starred": True}
        self.api._update_resource(self.cls, self.id, update)
        self.starred = True

    def unstar(self):
        update = {"starred": False}
        self.api._update_resource(self.cls, self.id, update)
        self.starred = False

    def create_reply(self):
        draft = self.drafts.create()
        draft.thread_id = self.id
        draft.subject = self.subject
        return draft


# This is a dummy class that allows us to use the create_resource function
# and pass in a 'Send' object that will translate into a 'send' endpoint.
class Send(Message):
    collection_name = "send"

    def __init__(self, api):  # pylint: disable=super-init-not-called
        NylasAPIObject.__init__(
            self, Send, api
        )  # pylint: disable=non-parent-init-called


class Draft(Message):
    attrs = [
        "bcc",
        "cc",
        "body",
        "date",
        "files",
        "from",
        "id",
        "account_id",
        "object",
        "subject",
        "thread_id",
        "to",
        "unread",
        "version",
        "file_ids",
        "reply_to_message_id",
        "reply_to",
        "starred",
        "snippet",
        "tracking",
    ]
    datetime_attrs = {"last_modified_at": "date"}
    collection_name = "drafts"

    def __init__(self, api, thread_id=None):  # pylint: disable=unused-argument
        Message.__init__(self, api)
        NylasAPIObject.__init__(
            self, Thread, api
        )  # pylint: disable=non-parent-init-called
        self.file_ids = []

    def attach(self, file):
        if not file.id:
            file.save()

        self.file_ids.append(file.id)

    def detach(self, file):
        if file.id in self.file_ids:
            self.file_ids.remove(file.id)

    def send(self):
        if not self.id:
            data = self.as_json()
        else:
            data = {"draft_id": self.id}
            if hasattr(self, "version"):
                data["version"] = self.version

        msg = self.api._create_resource(Send, data)
        if msg:
            return msg

    def delete(self):
        if self.id and self.version is not None:
            data = {"version": self.version}
            self.api._delete_resource(self.cls, self.id, data=data)


class File(NylasAPIObject):
    attrs = [
        "content_type",
        "filename",
        "id",
        "content_id",
        "account_id",
        "object",
        "size",
        "message_ids",
    ]
    collection_name = "files"

    def save(self):  # pylint: disable=arguments-differ
        stream = getattr(self, "stream", None)
        if not stream:
            data = getattr(self, "data", None)
            if data:
                stream = StringIO(data)

        if not stream:
            message = (
                "File object not properly formatted, "
                "must provide either a stream or data."
            )
            raise FileUploadError(message)

        file_info = (self.filename, stream, self.content_type, {})  # upload headers

        new_obj = self.api._create_resources(File, {"file": file_info})
        new_obj = new_obj[0]
        for attr in self.attrs:
            if hasattr(new_obj, attr):
                setattr(self, attr, getattr(new_obj, attr))

    def download(self):
        if not self.id:
            message = "Can't download a file that hasn't been uploaded."
            raise FileUploadError(message)

        return self.api._get_resource_data(File, self.id, extra="download")

    def __init__(self, api):
        NylasAPIObject.__init__(self, File, api)


class Contact(NylasAPIObject):
    attrs = [
        "id",
        "object",
        "account_id",
        "given_name",
        "middle_name",
        "surname",
        "suffix",
        "nickname",
        "company_name",
        "job_title",
        "manager_name",
        "office_location",
        "notes",
        "picture_url",
    ]
    date_attrs = {"birthday": "birthday"}
    typed_dict_attrs = {
        "emails": "email",
        "im_addresses": "im_address",
        "physical_addresses": None,
        "phone_numbers": "number",
        "web_pages": "url",
    }
    collection_name = "contacts"

    def __init__(self, api):
        NylasAPIObject.__init__(self, Contact, api)

    def get_picture(self):
        if not self.get("picture_url", None):
            return None

        response = self.api._get_resource_raw(
            Contact, self.id, extra="picture", stream=True
        )
        response.raise_for_status()
        return response.raw


class Calendar(NylasAPIObject):
    attrs = ["id", "account_id", "name", "description", "read_only", "object"]
    collection_name = "calendars"

    def __init__(self, api):
        NylasAPIObject.__init__(self, Calendar, api)

    @property
    def events(self):
        return self.child_collection(Event, calendar_id=self.id)


class Event(NylasAPIObject):
    attrs = [
        "id",
        "account_id",
        "title",
        "description",
        "location",
        "read_only",
        "when",
        "busy",
        "participants",
        "calendar_id",
        "recurrence",
        "status",
        "master_event_id",
        "owner",
        "original_start_time",
        "object",
        "message_id",
        "ical_uid",
    ]
    datetime_attrs = {"original_start_at": "original_start_time"}
    collection_name = "events"

    def __init__(self, api):
        NylasAPIObject.__init__(self, Event, api)

    def as_json(self):
        dct = NylasAPIObject.as_json(self)
        # Filter some parameters we got from the API
        if dct.get("when"):
            # Currently, the event (self) and the dict (dct) share the same
            # reference to the `'when'` dict.  We need to clone the dict so
            # that when we remove the object key, the original event's
            # `'when'` reference is unmodified.
            dct["when"] = dct["when"].copy()
            dct["when"].pop("object", None)

        return dct

    def rsvp(self, status, comment=None):
        if not self.message_id:
            raise ValueError(
                "This event was not imported from an iCalendar invite, and so it is not possible to RSVP via Nylas"
            )
        if status not in {"yes", "no", "maybe"}:
            raise ValueError("invalid status: {status}".format(status=status))

        url = "{api_server}/send-rsvp".format(api_server=self.api.api_server)
        data = {
            "event_id": self.id,
            "status": status,
            "comment": comment,
        }
        response = self.api.session.post(url, json=data)
        response.raise_for_status()
        result = response.json()
        return Event.create(self, **result)


class RoomResource(NylasAPIObject):
    attrs = [
        "object",
        "email",
        "name",
    ]
    object_type = "room_resource"
    collection_name = "resources"

    def __init__(self, api):
        NylasAPIObject.__init__(self, RoomResource, api)


class Namespace(NylasAPIObject):
    attrs = [
        "account",
        "email_address",
        "id",
        "account_id",
        "object",
        "provider",
        "name",
        "organization_unit",
    ]
    collection_name = "n"

    def __init__(self, api):
        NylasAPIObject.__init__(self, Namespace, api)

    def child_collection(self, cls, **filters):
        return RestfulModelCollection(cls, self.api, self.id, **filters)


class Account(NylasAPIObject):
    api_root = "a"

    attrs = [
        "account_id",
        "billing_state",
        "email",
        "id",
        "namespace_id",
        "provider",
        "sync_state",
        "trial",
    ]

    collection_name = "accounts"

    def __init__(self, api):
        NylasAPIObject.__init__(self, Account, api)

    def as_json(self):
        dct = NylasAPIObject.as_json(self)
        return dct

    def upgrade(self):
        return self.api._call_resource_method(self, self.account_id, "upgrade", None)

    def downgrade(self):
        return self.api._call_resource_method(self, self.account_id, "downgrade", None)

    def delete(self):
        raise NotImplementedError


class APIAccount(NylasAPIObject):
    attrs = [
        "account_id",
        "email_address",
        "id",
        "name",
        "object",
        "organization_unit",
        "provider",
        "sync_state",
    ]
    datetime_attrs = {"linked_at": "linked_at"}

    collection_name = "accounts"

    def __init__(self, api):
        NylasAPIObject.__init__(self, APIAccount, api)

    def as_json(self):
        dct = NylasAPIObject.as_json(self)
        return dct


class SingletonAccount(APIAccount):
    # This is an APIAccount that lives under /account.
    collection_name = "account"
