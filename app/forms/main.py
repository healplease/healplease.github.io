import random

from flask import request
from flask_wtf import FlaskForm
from wtforms import StringField, EmailField, SubmitField, TextAreaField, MultipleFileField, Form, Field, ValidationError
from wtforms.validators import DataRequired, Length

from app.models.main import Message, Author


class MessageForm(FlaskForm):
    name = StringField('Name', validators=[])
    message = TextAreaField('Message', validators=[DataRequired(), Length(max=280)])
    submit = SubmitField()

    def save(self):
        author = Author.objects(remote_addr=request.remote_addr).first()
        if not author:
            author = Author(remote_addr=request.remote_addr)
            author.color = '#' + ''.join([str(hex(int(round(random.random() * 255))))[2:] for _ in range(3)])
        author.name = self.data.get("name")
        author.save()
        message = Message(author=author, message=self.data.get("message"))
        message.save()
