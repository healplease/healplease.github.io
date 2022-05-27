import os


class Config():
    SECRET_KEY = os.environ.get("FLASK_SECRET_KEY")
    SERVER_NAME = os.environ.get("FLASK_SERVER_NAME")
    
    MONGODB_USERNAME = os.environ.get("FLASK_MONGODB_USER")
    MONGODB_PASSWORD = os.environ.get("FLASK_MONGODB_PASSWORD")
    MONGODB_HOST = os.environ.get("FLASK_MONGODB_HOST")
    MONGODB_PORT = os.environ.get("FLASK_MONGODB_PORT")
    MONGODB_DB = "healplease.github.io.local"
    MONGODB_PROTOCOL = "mongodb+srv"
    MONGODB_ARGUMENTS = {"retryWrites": "true", "w": "majority"}



class LocalConfig(Config):
    DEBUG = True


class HerokuConfig():
    pass


class DevelopmentConfig(HerokuConfig, Config):
    pass


class ProductionConfig(HerokuConfig, Config):
    MONGODB_DB = "healplease.github.io"


environment_configs = {
    "local": LocalConfig,
    "development": DevelopmentConfig,
    "production": ProductionConfig
}
