from flask import Blueprint

from . import main

main_bp = Blueprint('main', __name__)
main_bp.add_url_rule('/', view_func=main.index)
main_bp.add_url_rule('/about', view_func=main.about)
