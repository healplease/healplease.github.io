from datetime import datetime

from flask import url_for
from flask_mongoengine import Document
from mongoengine import StringField, URLField, BooleanField, DateTimeField, ListField, IntField, ReferenceField


class Author(Document):
    name = StringField(max_length=255, required=True)
    remote_addr = StringField(max_length=255, required=True)
    color = StringField(max_length=255)

    def __str__(self):
        return self.name


class Message(Document):
    author = ReferenceField(Author)
    message = StringField(required=True, max_length=280)
    created_at = DateTimeField(required=True, default=datetime.utcnow)
    likes = ListField(StringField())

    def __str__(self):
        return self.message

    @property
    def url(self):
        return f"/message/{self.id}"

    @property
    def likes_count(self):
        return len(self.likes)
