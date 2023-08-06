from airflow.hooks.base_hook import BaseHook
from TM1py.Services import TM1Service

class TM1Hook(BaseHook):
    """
    Interact with IBM Cognos TM1, using the TM1py library.
    """

    def __init__(self, tm1_conn_id='tm1_default'):
        """
        A hook that uses TM1py to connect to a TM1 database.
        :param tm1_conn_id: The name of the TM1 connection to use.
        :type tm1_conn_id: str
        """
        self.tm1_conn_id = tm1_conn_id
        self.conn = None
        self.address = None
        self.port = None
        self.user = None
        self.password = None
        self.db = None
        self.server_version = None

    def get_conn(self):
        """
        Returns the TM1 connection.
        :return: TM1Service
        """
        
        self.conn = self.get_connection(self.tm1_conn_id)
        self.address = self.conn.host
        self.port = self.conn.port
        self.user = self.conn.login
        self.password = self.conn.password

        # check for relevant additional parameters in conn.extra
        extra_arg_names = ["base_url", "decode_b64", "namespace", "ssl", "session_context", "logging", "timeout", "connection_pool_size"]
        extra_args = {name: val for name, val in self.conn.extra_dejson.items() if name in extra_arg_names}

        # Set a default for session context for easier identification in TM1top etc.
        if "session_context" not in extra_args:
            extra_args["session_context"] = "Airflow"

        self.tm1 = TM1Service(
            address=self.address,
            port=self.port,
            user=self.user,
            password=self.password,
            **extra_args
        )

        self.db = self.tm1.server.get_server_name()
        self.server_version = self.tm1.server.get_product_version()

        return self.tm1