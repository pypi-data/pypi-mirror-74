import abc
from typing import Optional, Union
from datalogue.models.datastore import CredentialType
from datalogue.errors import _enum_parse_error, DtlError
from datalogue.models.s3encryption import Encryption
from datalogue.dtl_utils import SerializableStringEnum
from uuid import UUID


class CredentialsReference:
    def __init__(self, ref_id: UUID, name: Optional[str], ref_type: CredentialType):
        self.id = ref_id
        self.name = name
        self.type = ref_type

    def __eq__(self, other: 'CredentialsReference'):
        if isinstance(self, other.__class__):
            return self.id == other.id and self.name == other.name and self.type == other.type
        return False

    def __repr__(self):
        return f'{self.__class__.__name__}(id: {self.id}, name: {self.name!r}, type: {self.type!r})'


def _credentials_ref_from_payload(json: dict) -> Union[DtlError, CredentialsReference]:
    ref_id = json.get("id")
    if not isinstance(ref_id, str):
        return DtlError("A credentials reference needs an 'id' field")
    else:
        ref_id = UUID(ref_id)

    ref_type = json.get("type")
    if not isinstance(ref_type, str):
        return DtlError("A credentials reference needs a '_type' field")
    else:
        ref_type = CredentialType.credential_type_from_str(ref_type)

    name = json.get("name")
    return CredentialsReference(ref_id, name, ref_type)


class Credentials(abc.ABC):

    type_field = "type"

    def __init__(self, definition_type: CredentialType):
        self.type = definition_type

    def _base_payload(self) -> dict:
        return dict([(Credentials.type_field, self.type.value)])

    def __eq__(self, other: 'Credentials'):
        if isinstance(self, other.__class__):
            return self._as_payload() == other._as_payload()
        return False

    @abc.abstractmethod
    def _as_payload(self) -> dict:
        """
        Dictionary representation of the object
        :return:
        """


class S3Credentials(Credentials):
    type_str = CredentialType.S3

    def __init__(self, region: str,
                 client_id: Optional[str] = None,
                 client_secret: Optional[str] = None,
                 endpoint: Optional[str] = None,
                 encryption: Optional[Encryption] = None):
        Credentials.__init__(self, S3Credentials.type_str)
        self.region = region
        is_client_id_set = client_id is not None
        is_client_secret_set = client_secret is not None
        if is_client_id_set != is_client_secret_set:
            raise ValueError("Client id and client secret must but set, or both can't be set")
        if is_client_id_set and is_client_secret_set:
            self.client_id = client_id
            self.client_secret = client_secret
        self.endpoint = endpoint
        self.encryption = encryption

    def __repr__(self):
        return f'{self.__class__.__name__}(region: {self.region!r}, client_id: {self.client_id!r}, client_secret: ****, endpoint: {self.endpoint!r})'

    def _as_payload(self) -> dict:
        """
        Dictionary representation of the object
        :return:
        """
        base = self._base_payload()
        base["region"] = self.region
        if self.client_id is not None and self.client_secret is not None:
            base["clientId"] = self.client_id
            base["clientSecret"] = self.client_secret
        if self.endpoint is not None:
            base["endpoint"] = self.endpoint
        if self.encryption is not None:
            base["encryption"] = self.encryption._as_payload()
        return base


class S3ACredentials(S3Credentials):
    type_str = CredentialType.Hadoop

    def __init__(self, region: str, client_id: str, client_secret: str, endpoint: str):
        S3Credentials.__init__(self, region, client_id, client_secret, endpoint)
        self.type = S3ACredentials.type_str


class AzureBlobType(SerializableStringEnum):
    Block = "Block"
    Append = "Append"

    @staticmethod
    def parse_error(s: str) -> str:
        return _enum_parse_error("azure blob type", s)

    @staticmethod
    def from_payload(json: str) -> Union[DtlError, 'AzureBlobType']:
        return SerializableStringEnum.from_str(AzureBlobType)(json)


class AzureEndpointProtocol(SerializableStringEnum):
    Https = "Https"
    Http = "Http"

    @staticmethod
    def parse_error(s: str) -> str:
        return _enum_parse_error("azure blob type", s)

    @staticmethod
    def from_payload(json: str) -> Union[DtlError, 'AzureBlobType']:
        return SerializableStringEnum.from_str(AzureEndpointProtocol)(json)


class AzureCredentials(Credentials):
    type_str = CredentialType.Azure

    def __init__(self, account_name: str, account_key: str, endpoint_protocol: AzureEndpointProtocol,
                 blob_type: AzureBlobType):
        Credentials.__init__(self, AzureCredentials.type_str)
        self.account_name = account_name
        self.account_key = account_key
        self.endpoint_protocol = endpoint_protocol
        self.blob_type = blob_type

    def __repr__(self):
        return f'{self.__class__.__name__}(account_name: {self.account_name!r},' \
               f' endpoint_protocol: {self.endpoint_protocol!r}, blob_type: {self.blob_type!r}, account_key: ****)'

    def _as_payload(self) -> dict:
        """
        Dictionary representation of the object
        :return:
        """
        base = self._base_payload()
        base["accountName"] = self.account_name
        base["accountKey"] = self.account_key
        base["endpointProtocol"] = self.endpoint_protocol.value
        base["blobType"] = self.blob_type.value
        return base

class HadoopAzureCredentials(Credentials):
    type_str = CredentialType.HadoopAzure

    def __init__(self, account_name: str, account_key: str):
        Credentials.__init__(self, HadoopAzureCredentials.type_str)
        self.account_name = account_name
        self.account_key = account_key

    def __repr__(self):
        return f'{self.__class__.__name__}(account_name: {self.account_name!r},' \
               f' account_key: ****)'

    def _as_payload(self) -> dict:
        """
        Dictionary representation of the object
        :return:
        """
        base = self._base_payload()
        base["accountName"] = self.account_name
        base["accountKey"] = self.account_key
        return base

class AzureSASCredentials(Credentials):
    type_str = CredentialType.Azure

    def __init__(self, sas_token: str, endpoint: str):
        Credentials.__init__(self, AzureSASCredentials.type_str)
        self.sas_token = sas_token
        self.endpoint = endpoint

    def __repr__(self):
        return f'{self.__class__.__name__}(sas_token: ****,' \
               f' endpoint: {self.endpoint!r})'

    def _as_payload(self) -> dict:
        """
        Dictionary representation of the object
        :return:
        """
        base = self._base_payload()
        base["sas_token"] = self.sas_token
        base["endpoint"] = self.endpoint
        return base

class GCS(Credentials):
    type_str = CredentialType.GCS

    def __init__(self, client_email: str, private_key: str):
        Credentials.__init__(self, GCS.type_str)
        self.client_email = client_email
        self.private_key = private_key

    def __repr__(self):
        return f'{self.__class__.__name__}(client_email: {self.client_email!r}, private_key: ****)'

    def _as_payload(self) -> dict:
        """
        Dictionary representation of the object
        :return:
        """
        base = self._base_payload()
        base["clientEmail"] = self.client_email
        base["privateKey"] = self.private_key
        return base


class JdbcCredentials(Credentials):
    type_str = CredentialType.JDBC

    def __init__(self, url: str, schema: str, user: str, password: str):
        Credentials.__init__(self, JdbcCredentials.type_str)
        self.url = url
        self.schema = schema
        self.user = user
        self.password = password

    def __repr__(self):
        return f'{self.__class__.__name__}(url: {self.url!r}, schema: {self.schema!r}, user: {self.user!r}, password: ****)'

    def _as_payload(self) -> dict:
        """
        Dictionary representation of the object
        :return:
        """
        base = self._base_payload()
        base["url"] = self.url
        base["schema"] = self.schema
        base["user"] = self.user
        base["password"] = self.password
        return base


class MongoCredentials(Credentials):
    type_str = CredentialType.Mongo

    def __init__(self, url: str, database: str, user: str, password: str):
        Credentials.__init__(self, MongoCredentials.type_str)
        self.url = url
        self.database = database
        self.user = user
        self.password = password

    def __repr__(self):
        return f'{self.__class__.__name__}(url: {self.url!r}, database: {self.database!r}, user: {self.user!r}, password: ****)'

    def _as_payload(self) -> dict:
        """
        Dictionary representation of the object
        :return:
        """
        base = self._base_payload()
        base["url"] = self.url
        base["database"] = self.database
        base["user"] = self.user
        base["password"] = self.password
        return base


class SocrataCredentials(Credentials):
    type_str = CredentialType.Socrata

    def __init__(self, domain: str, token: str):
        Credentials.__init__(self, SocrataCredentials.type_str)
        self.domain = domain
        self.token = token

    def __repr__(self):
        return f'{self.__class__.__name__}(domain: {self.domain!r}, token: ****)'

    def _as_payload(self) -> dict:
        """
        Dictionary representation of the object
        :return:
        """
        base = self._base_payload()
        base["domain"] = self.domain
        base["token"] = self.token
        return base

class KinesisCredentials(Credentials):
    type_str = CredentialType.Kinesis

    def __init__(self, region: str, client_id: str, client_secret: str):
        Credentials.__init__(self, KinesisCredentials.type_str)
        self.region = region
        self.client_id = client_id
        self.client_secret = client_secret

    def __repr__(self):
        return f'{self.__class__.__name__}(region: {self.region!r}, client_id: {self.client_id!r}, client_secret: ****)'
    
    def _as_payload(self):
        """
        Dictionary representation of the object
        :return:
        """
        base = self._base_payload()
        base["region"] = self.region
        base["clientId"] = self.client_id
        base["clientSecret"] = self.client_secret
        return base

class KafkaCredentials(Credentials):
    type_str = CredentialType.Kafka

    def __init__(self, bootstrap_server: str):
        Credentials.__init__(self, KafkaCredentials.type_str)
        self.bootstrap_server = bootstrap_server

    def __repr__(self):
        return f'{self.__class__.__name__}(bootstrap_server: {self.bootstrap_server!r})'

    def _as_payload(self):
        """
        Dictionary representation of the object
        :return:
        """
        base = self._base_payload()
        base["bootstrapServer"] = self.bootstrap_server
        return base
