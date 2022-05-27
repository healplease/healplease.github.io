from flask import render_template, redirect, url_for, request

from app.models.main import Message, Author
from app.forms.main import MessageForm

def index():
    return redirect(url_for('main.messages', page=1))

def messages(page: int = 1):
    form = MessageForm()

    if form.validate_on_submit():
        form.save()
        return redirect(url_for('main.messages', page=1))

    messages = Message.objects.order_by('-created_at').paginate(page=page, per_page=25)
    author = Author.objects(remote_addr=request.remote_addr).first()
    return render_template(
        'messages.html',
        title="Leave me a message",
        form=form,
        messages=messages,
        author=author
    )

def message(id: int):
    message = Message.objects(id=id).first_or_404()
    return render_template(
        'message.html',
        title=f"Message from {message.name}",
        message=message
    )

def about():
    return render_template(
        'about.html',
         title="About"
    )

def like_message(id: int, page: int = 1):
    message = Message.objects(id=id).first_or_404()
    if request.remote_addr not in message.likes:
        message.likes.append(request.remote_addr)
    message.save()
    return redirect(url_for('main.messages', page=page))

def dislike_message(id: int, page: int = 1):
    message = Message.objects(id=id).first_or_404()
    if request.remote_addr in message.likes:
        message.likes.remove(request.remote_addr)
    message.save()
    return redirect(url_for('main.messages', page=page))
