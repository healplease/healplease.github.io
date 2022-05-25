import dotenv
from flask import Flask
import flask_bootstrap
from flask_cors import CORS

from config import environment_configs

dotenv.load_dotenv()

# bootstrap 4.2.1 supports spinners
flask_bootstrap.BOOTSTRAP_VERSION = "4.2.1"
flask_bootstrap.POPPER_VERSION = "1.14.6"
flask_bootstrap.JQUERY_VERSION = "3.6.0"

bootstrap = flask_bootstrap.Bootstrap()
cors = CORS()


def create_app():
    app = Flask(__name__)
    app.config.from_object(f"config.{environment_configs[app.env].__name__}")

    bootstrap.init_app(app)
    cors.init_app(app, resources={r"/*": {"origins": "*"}})

    from app.views import main_bp
    app.register_blueprint(main_bp)

    return app
