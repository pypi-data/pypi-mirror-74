import re

from cloudshell.snmp.autoload.domain.snmpv2_data import SnmpV2MibData


class SnmpGeneralInfo(object):
    DEVICE_MODEL_PATTERN = re.compile(r"::(?P<model>\S+$)")
    OS_VERSION_PATTERN = re.compile(r"Version (?P<os_version>[^\s,]+)")

    def __init__(self, snmp_handler, logger):
        self._snmp_handler = snmp_handler
        self._logger = logger
        self._device_model_pattern = self.DEVICE_MODEL_PATTERN
        self._os_version_pattern = self.DEVICE_MODEL_PATTERN
        self._snmp_v2_obj = SnmpV2MibData(snmp_handler, logger)

    def set_device_model_pattern(self, device_model_pattern):
        if isinstance(device_model_pattern, str):
            self._device_model_pattern = re.compile(device_model_pattern)
        elif device_model_pattern:
            self._device_model_pattern = device_model_pattern

    def set_os_version_pattern(self, os_version_pattern):
        if isinstance(os_version_pattern, str):
            self._os_version_pattern = re.compile(os_version_pattern)
        elif os_version_pattern:
            self._os_version_pattern = os_version_pattern

    def is_valid_device_os(self, supported_os):
        """Validate device OS using snmp.

        :param supported_os: list of str or re._pattern_type.
         Certain regexp pattern to identify exact device OS.
        :return: True or False
        """
        supported_os_pattern = supported_os
        if isinstance(supported_os_pattern, str):
            supported_os_pattern = re.compile(
                supported_os_pattern, re.IGNORECASE | re.DOTALL
            )
        if isinstance(supported_os_pattern, list):
            supported_os_pattern = re.compile(
                "|".join(supported_os_pattern), re.IGNORECASE | re.DOTALL
            )

        system_description = self._snmp_v2_obj.get_system_description()
        self._logger.debug(
            "Detected system description: '{0}'".format(system_description)
        )
        if system_description:
            result = supported_os_pattern.search(str(system_description))

            if result:
                return True
            else:
                error_message = (
                    "Incompatible driver! Please use this driver for '{0}' "
                    "operation system(s)".format(supported_os_pattern.pattern)
                )
        else:
            error_message = "Unable to identify device firmware type"

        self._logger.error(error_message)
        return False

    def _get_device_model(self):
        """Get device model from the SNMPv2 mib.

        :return: device model
        :rtype: str
        """
        result = ""
        sys_description = str(self._snmp_v2_obj.get_system_object_id())
        match_name = self._device_model_pattern.search(sys_description)
        if match_name:
            result = match_name.group("model")

        return result

    def _get_device_os_version(self):
        """Get device OS Version form snmp SNMPv2 mib.

        :return: device model
        :rtype: str
        """
        result = ""
        matched = self._os_version_pattern.search(
            str(self._snmp_v2_obj.get_system_description())
        )
        if matched:
            result = matched.groupdict().get("os_version", "")
        return result

    def fill_attributes(self, resource):
        """Get root element attributes.

        :type resource: cloudshell.shell_standards.autoload_generic_models.GenericResourceModel  # noqa: E501
        """
        self._logger.info("Building Root started")

        resource.contact_name = self._snmp_v2_obj.get_system_contact()
        resource.system_name = self._snmp_v2_obj.get_system_name()
        resource.location = self._snmp_v2_obj.get_system_location()
        resource.os_version = self._get_device_os_version()
        resource.model = self._get_device_model()
        resource.model_name = resource.model

        self._logger.info("Building Root completed")
