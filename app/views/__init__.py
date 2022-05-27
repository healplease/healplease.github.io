from flask import Blueprint

from . import main

main_bp = Blueprint('main', __name__)
main_bp.add_url_rule('/', view_func=main.index, endpoint='index')
main_bp.add_url_rule('/about', view_func=main.about, endpoint='about')
main_bp.add_url_rule('/messages', view_func=main.messages, endpoint='messages', methods=['GET', 'POST'])
main_bp.add_url_rule('/messages/<int:page>', view_func=main.messages, endpoint='messages', methods=['GET', 'POST'])
main_bp.add_url_rule('/message/<id>', view_func=main.message, endpoint='message')
main_bp.add_url_rule('/like/<id>', view_func=main.like_message, endpoint='like_message', methods=['POST'])
main_bp.add_url_rule('/dislike/<id>', view_func=main.dislike_message, endpoint='dislike_message', methods=['POST'])
