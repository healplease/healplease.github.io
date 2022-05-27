from urllib.parse import urlencode

import dotenv
from flask import Flask
import flask_bootstrap
from flask_cors import CORS
from flask_mongoengine import MongoEngine

from config import environment_configs

dotenv.load_dotenv()

# bootstrap 4.2.1 supports spinners
flask_bootstrap.BOOTSTRAP_VERSION = "4.2.1"
flask_bootstrap.POPPER_VERSION = "1.14.6"
flask_bootstrap.JQUERY_VERSION = "3.6.0"

bootstrap = flask_bootstrap.Bootstrap()
cors = CORS()
mongoengine = MongoEngine()


def create_app():
    app = Flask(__name__)
    app.config.from_object(f"config.{environment_configs[app.env].__name__}")

    # setting DB connection URL
    mongodb_settings = app.config.get_namespace("MONGODB_")
    mongodb_settings["port"] = f":{mongodb_settings.get('port')}" if mongodb_settings.get("port") else ""
    mongodb_settings["arguments"] = (
        f"?{urlencode(mongodb_settings.get('arguments'))}" if mongodb_settings.get("arguments") else ""
    )
    app.config["MONGODB_HOST"] = "{protocol}://{username}:{password}@{host}{port}/{db}{arguments}".format(
        **mongodb_settings
    )

    bootstrap.init_app(app)
    cors.init_app(app, resources={r"/*": {"origins": "*"}})
    mongoengine.init_app(app)

    from app.views import main_bp
    app.register_blueprint(main_bp)

    return app
