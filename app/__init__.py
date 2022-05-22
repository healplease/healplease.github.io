import dotenv
from flask import Flask

from config import environment_configs

dotenv.load_dotenv()

# bootstrap 4.2.1 supports spinners
flask_bootstrap.BOOTSTRAP_VERSION = "4.2.1"
flask_bootstrap.POPPER_VERSION = "1.14.6"
flask_bootstrap.JQUERY_VERSION = "3.6.0"

bootstrap = flask_bootstrap.Bootstrap()


def create_app():
    app = Flask(__name__)
    app.config.from_object(f"config.{environment_configs[app.env].__name__}")

    bootstrap.init_app(app)

    from app.views.main import main_bp
    app.register_blueprint(main_bp)

    return app
