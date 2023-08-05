from media_platform.lang.serialization import Deserializable


class UploadConfiguration(Deserializable):
    def __init__(self, upload_url, upload_token=None):
        # type: (str, str) -> None
        super(UploadConfiguration, self).__init__()
        self.upload_url = upload_url
        self.upload_token = upload_token

    @classmethod
    def deserialize(cls, data):
        # type: (dict) -> UploadConfiguration
        return UploadConfiguration(data['uploadUrl'], data.get('uploadToken'))
