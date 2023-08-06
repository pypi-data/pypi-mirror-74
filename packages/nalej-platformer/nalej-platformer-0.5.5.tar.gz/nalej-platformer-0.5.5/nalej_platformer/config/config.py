import os
import platform
from shutil import which

import yaml
import vistir

from nalej_platformer.utils import print_debug, spinner_ok_message, spinner_ko_message, get_spinner
from nalej_platformer.exceptions import ConfigException
from nalej_platformer.config.defaults import BASE_PATH

HUMAN_READABLE = {
    "resources": "Platform resources",
    "azure": "Azure CLI",
    "kubectl": "Kubernetes CLI"
}

PARAMETER_TRANSFORM = {
    "resources": "resources_path",
    "azure": "az_path",
    "kubectl": "kubectl_path"
}

ENVIRONMENT_CA = {
    "DEVELOPMENT": "letsencrypt_staging.pem",
    "STAGING": "letsencrypt_staging.pem",
    "PRODUCTION": "letsencrypt_prod.pem"
}


class Configuration:
    def __init__(
            self, resources_path=None, az_path=None, kubectl_path=None):
        self.resources_path = resources_path
        self.az_path = az_path
        self.kubectl_path = kubectl_path

    def validate(self):
        for name, arg in PARAMETER_TRANSFORM.items():
            attr = getattr(self, arg, None)
            if attr is None or not os.path.exists(attr):
                error = (
                    f"Can't find or open {HUMAN_READABLE[name]}. "
                    "Please ensure that is in your PATH."
                )
                raise ConfigException(error)

    def is_valid(self):
        return all(
            [
                self.az_path is not None,
                self.kubectl_path is not None,
                self.resources_path is not None
            ]
        )

    def find_missing_binaries(self):
        if not self.is_valid():
            if self.az_path is None:
                self.az_path = which("az")
            if self.kubectl_path is None:
                self.kubectl_path = which("kubectl")

    @classmethod
    def load_from_file(cls, resources_path=None):
        """Loads the configuration file and creates the configuration instance"""

        vistir.path.mkdir_p(BASE_PATH)

        configuration = {}
        if resources_path not in ['', None]:
            configuration['resources_path'] = resources_path
        else:
            raise ConfigException("Resources path is not defined.")

        return cls(**configuration)

    def get_ca_path(self, environment):
        return os.path.join(self.provisioner_resources, "ca", ENVIRONMENT_CA[environment])

    def _get_os_binaries(self):
        os_name = platform.system().lower()
        return os.path.join(self.resources_path, "binaries", os_name)

    def _get_assets(self):
        return os.path.join(self.resources_path, "assets")

    @property
    def provisioner_resources(self):
        return os.path.join(self._get_assets(), "provisioner")

    @property
    def installer_resources(self):
        return os.path.join(self._get_assets(), "installer")

    @property
    def installer_binaries(self):
        return self._get_os_binaries()

    @property
    def provisioner_path(self):
        return os.path.join(self._get_os_binaries(), "provisioner-cli")

    @property
    def installer_path(self):
        return os.path.join(self._get_os_binaries(), "installer-cli")

    @property
    def public_api_path(self):
        return os.path.join(self._get_os_binaries(), "public-api-cli")

    @property
    def signup_path(self):
        return os.path.join(self._get_os_binaries(), "signup-cli")
