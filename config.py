import os


class Config():
    SECRET_KEY = os.environ.get("FLASK_SECRET_KEY")
    SERVER_NAME = os.environ.get("FLASK_SERVER_NAME")


class LocalConfig(Config):
    DEBUG = True


class HerokuConfig():
    pass


class DevelopmentConfig(HerokuConfig, Config):
    pass


class ProductionConfig(HerokuConfig, Config):
    pass


environment_configs = {
    "local": LocalConfig,
    "development": DevelopmentConfig,
    "production": ProductionConfig
}
