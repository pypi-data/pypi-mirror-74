# -*- coding: utf-8 -*-
"""Test suite for the community-developed Python SDK for the DNA Center APIs.

Copyright (c) 2019 Cisco and/or its affiliates.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
"""

import dnacentersdk
from tests.environment import (
    DNA_CENTER_USERNAME, DNA_CENTER_PASSWORD,
    DNA_CENTER_ENCODED_AUTH, DNA_CENTER_VERSION,
)

from dnacentersdk.api.authentication import Authentication
from dnacentersdk.api.v1_2_10.clients import \
    Clients as Clients_v1_2_10
from dnacentersdk.api.v1_2_10.command_runner import \
    CommandRunner as CommandRunner_v1_2_10
from dnacentersdk.api.v1_2_10.devices import \
    Devices as Devices_v1_2_10
from dnacentersdk.api.v1_2_10.fabric_wired import \
    FabricWired as FabricWired_v1_2_10
from dnacentersdk.api.v1_2_10.file import \
    File as File_v1_2_10
from dnacentersdk.api.v1_2_10.network_discovery import \
    NetworkDiscovery as NetworkDiscovery_v1_2_10
from dnacentersdk.api.v1_2_10.networks import \
    Networks as Networks_v1_2_10
from dnacentersdk.api.v1_2_10.non_fabric_wireless import \
    NonFabricWireless as NonFabricWireless_v1_2_10
from dnacentersdk.api.v1_2_10.path_trace import \
    PathTrace as PathTrace_v1_2_10
from dnacentersdk.api.v1_2_10.pnp import \
    Pnp as Pnp_v1_2_10
from dnacentersdk.api.v1_2_10.swim import \
    Swim as Swim_v1_2_10
from dnacentersdk.api.v1_2_10.site_profile import \
    SiteProfile as SiteProfile_v1_2_10
from dnacentersdk.api.v1_2_10.sites import \
    Sites as Sites_v1_2_10
from dnacentersdk.api.v1_2_10.tag import \
    Tag as Tag_v1_2_10
from dnacentersdk.api.v1_2_10.task import \
    Task as Task_v1_2_10
from dnacentersdk.api.v1_2_10.template_programmer import \
    TemplateProgrammer as TemplateProgrammer_v1_2_10
from dnacentersdk.api.v1_3_0.clients import \
    Clients as Clients_v1_3_0
from dnacentersdk.api.v1_3_0.command_runner import \
    CommandRunner as CommandRunner_v1_3_0
from dnacentersdk.api.v1_3_0.devices import \
    Devices as Devices_v1_3_0
from dnacentersdk.api.v1_3_0.fabric_wired import \
    FabricWired as FabricWired_v1_3_0
from dnacentersdk.api.v1_3_0.file import \
    File as File_v1_3_0
from dnacentersdk.api.v1_3_0.network_discovery import \
    NetworkDiscovery as NetworkDiscovery_v1_3_0
from dnacentersdk.api.v1_3_0.networks import \
    Networks as Networks_v1_3_0
from dnacentersdk.api.v1_3_0.non_fabric_wireless import \
    NonFabricWireless as NonFabricWireless_v1_3_0
from dnacentersdk.api.v1_3_0.path_trace import \
    PathTrace as PathTrace_v1_3_0
from dnacentersdk.api.v1_3_0.pnp import \
    Pnp as Pnp_v1_3_0
from dnacentersdk.api.v1_3_0.swim import \
    Swim as Swim_v1_3_0
from dnacentersdk.api.v1_3_0.site_profile import \
    SiteProfile as SiteProfile_v1_3_0
from dnacentersdk.api.v1_3_0.sites import \
    Sites as Sites_v1_3_0
from dnacentersdk.api.v1_3_0.tag import \
    Tag as Tag_v1_3_0
from dnacentersdk.api.v1_3_0.task import \
    Task as Task_v1_3_0
from dnacentersdk.api.v1_3_0.template_programmer import \
    TemplateProgrammer as TemplateProgrammer_v1_3_0
from dnacentersdk.api.v1_3_1.application_policy import \
    ApplicationPolicy as ApplicationPolicy_v1_3_1
from dnacentersdk.api.v1_3_1.clients import \
    Clients as Clients_v1_3_1
from dnacentersdk.api.v1_3_1.command_runner import \
    CommandRunner as CommandRunner_v1_3_1
from dnacentersdk.api.v1_3_1.configuration_templates import \
    ConfigurationTemplates as ConfigurationTemplates_v1_3_1
from dnacentersdk.api.v1_3_1.device_onboarding_pnp import \
    DeviceOnboardingPnp as DeviceOnboardingPnp_v1_3_1
from dnacentersdk.api.v1_3_1.devices import \
    Devices as Devices_v1_3_1
from dnacentersdk.api.v1_3_1.event_management import \
    EventManagement as EventManagement_v1_3_1
from dnacentersdk.api.v1_3_1.fabric_wired import \
    FabricWired as FabricWired_v1_3_1
from dnacentersdk.api.v1_3_1.file import \
    File as File_v1_3_1
from dnacentersdk.api.v1_3_1.issues import \
    Issues as Issues_v1_3_1
from dnacentersdk.api.v1_3_1.network_discovery import \
    NetworkDiscovery as NetworkDiscovery_v1_3_1
from dnacentersdk.api.v1_3_1.network_settings import \
    NetworkSettings as NetworkSettings_v1_3_1
from dnacentersdk.api.v1_3_1.non_fabric_wireless import \
    NonFabricWireless as NonFabricWireless_v1_3_1
from dnacentersdk.api.v1_3_1.path_trace import \
    PathTrace as PathTrace_v1_3_1
from dnacentersdk.api.v1_3_1.site_design import \
    SiteDesign as SiteDesign_v1_3_1
from dnacentersdk.api.v1_3_1.sites import \
    Sites as Sites_v1_3_1
from dnacentersdk.api.v1_3_1.software_image_management_swim import \
    SoftwareImageManagementSwim as SoftwareImageManagementSwim_v1_3_1
from dnacentersdk.api.v1_3_1.tag import \
    Tag as Tag_v1_3_1
from dnacentersdk.api.v1_3_1.task import \
    Task as Task_v1_3_1
from dnacentersdk.api.v1_3_1.topology import \
    Topology as Topology_v1_3_1
from dnacentersdk.api.v1_3_1.users import \
    Users as Users_v1_3_1
from dnacentersdk.api.v1_3_3.application_policy import \
    ApplicationPolicy as ApplicationPolicy_v1_3_3
from dnacentersdk.api.v1_3_3.clients import \
    Clients as Clients_v1_3_3
from dnacentersdk.api.v1_3_3.command_runner import \
    CommandRunner as CommandRunner_v1_3_3
from dnacentersdk.api.v1_3_3.configuration_templates import \
    ConfigurationTemplates as ConfigurationTemplates_v1_3_3
from dnacentersdk.api.v1_3_3.device_onboarding_pnp import \
    DeviceOnboardingPnp as DeviceOnboardingPnp_v1_3_3
from dnacentersdk.api.v1_3_3.devices import \
    Devices as Devices_v1_3_3
from dnacentersdk.api.v1_3_3.discovery import \
    Discovery as Discovery_v1_3_3
from dnacentersdk.api.v1_3_3.event_management import \
    EventManagement as EventManagement_v1_3_3
from dnacentersdk.api.v1_3_3.file import \
    File as File_v1_3_3
from dnacentersdk.api.v1_3_3.issues import \
    Issues as Issues_v1_3_3
from dnacentersdk.api.v1_3_3.network_settings import \
    NetworkSettings as NetworkSettings_v1_3_3
from dnacentersdk.api.v1_3_3.path_trace import \
    PathTrace as PathTrace_v1_3_3
from dnacentersdk.api.v1_3_3.sda import \
    Sda as Sda_v1_3_3
from dnacentersdk.api.v1_3_3.site_design import \
    SiteDesign as SiteDesign_v1_3_3
from dnacentersdk.api.v1_3_3.sites import \
    Sites as Sites_v1_3_3
from dnacentersdk.api.v1_3_3.software_image_management_swim import \
    SoftwareImageManagementSwim as SoftwareImageManagementSwim_v1_3_3
from dnacentersdk.api.v1_3_3.tag import \
    Tag as Tag_v1_3_3
from dnacentersdk.api.v1_3_3.task import \
    Task as Task_v1_3_3
from dnacentersdk.api.v1_3_3.topology import \
    Topology as Topology_v1_3_3
from dnacentersdk.api.v1_3_3.users import \
    Users as Users_v1_3_3
from dnacentersdk.api.v1_3_3.wireless import \
    Wireless as Wireless_v1_3_3
from dnacentersdk.api.v2_1_1.application_policy import \
    ApplicationPolicy as ApplicationPolicy_v2_1_1
from dnacentersdk.api.v2_1_1.clients import \
    Clients as Clients_v2_1_1
from dnacentersdk.api.v2_1_1.command_runner import \
    CommandRunner as CommandRunner_v2_1_1
from dnacentersdk.api.v2_1_1.configuration_templates import \
    ConfigurationTemplates as ConfigurationTemplates_v2_1_1
from dnacentersdk.api.v2_1_1.device_onboarding_pnp import \
    DeviceOnboardingPnp as DeviceOnboardingPnp_v2_1_1
from dnacentersdk.api.v2_1_1.device_replacement import \
    DeviceReplacement as DeviceReplacement_v2_1_1
from dnacentersdk.api.v2_1_1.devices import \
    Devices as Devices_v2_1_1
from dnacentersdk.api.v2_1_1.discovery import \
    Discovery as Discovery_v2_1_1
from dnacentersdk.api.v2_1_1.event_management import \
    EventManagement as EventManagement_v2_1_1
from dnacentersdk.api.v2_1_1.file import \
    File as File_v2_1_1
from dnacentersdk.api.v2_1_1.itsm import \
    Itsm as Itsm_v2_1_1
from dnacentersdk.api.v2_1_1.issues import \
    Issues as Issues_v2_1_1
from dnacentersdk.api.v2_1_1.network_settings import \
    NetworkSettings as NetworkSettings_v2_1_1
from dnacentersdk.api.v2_1_1.path_trace import \
    PathTrace as PathTrace_v2_1_1
from dnacentersdk.api.v2_1_1.sda import \
    Sda as Sda_v2_1_1
from dnacentersdk.api.v2_1_1.site_design import \
    SiteDesign as SiteDesign_v2_1_1
from dnacentersdk.api.v2_1_1.sites import \
    Sites as Sites_v2_1_1
from dnacentersdk.api.v2_1_1.software_image_management_swim import \
    SoftwareImageManagementSwim as SoftwareImageManagementSwim_v2_1_1
from dnacentersdk.api.v2_1_1.tag import \
    Tag as Tag_v2_1_1
from dnacentersdk.api.v2_1_1.task import \
    Task as Task_v2_1_1
from dnacentersdk.api.v2_1_1.topology import \
    Topology as Topology_v2_1_1
from dnacentersdk.api.v2_1_1.users import \
    Users as Users_v2_1_1
from dnacentersdk.api.v2_1_1.wireless import \
    Wireless as Wireless_v2_1_1
from dnacentersdk.api.custom_caller import CustomCaller

from tests.config import (
    DEFAULT_VERIFY,
    DEFAULT_SINGLE_REQUEST_TIMEOUT,
    DEFAULT_WAIT_ON_RATE_LIMIT
)
import pytest


@pytest.mark.dnacentersdk
class TestDNACenterSDK:
    """Test the package-level code."""

    def test_package_contents(self):
        """Ensure the package contains the correct top-level objects."""
        # DNA Center API Wrapper
        assert hasattr(dnacentersdk, "DNACenterAPI")

        # Exceptions
        assert hasattr(dnacentersdk, "AccessTokenError")
        assert hasattr(dnacentersdk, "ApiError")
        assert hasattr(dnacentersdk, "dnacentersdkException")
        assert hasattr(dnacentersdk, "DownloadFailure")
        assert hasattr(dnacentersdk, "MalformedRequest")
        assert hasattr(dnacentersdk, "RateLimitError")
        assert hasattr(dnacentersdk, "RateLimitWarning")
        assert hasattr(dnacentersdk, "VersionError")

        # Data Models
        assert hasattr(dnacentersdk, "mydict_data_factory")
        assert hasattr(dnacentersdk, "json_schema_validate")

    @pytest.mark.dnacentersdk
    def test_default_base_url(self, api, base_url):
        assert api.base_url == base_url

    @pytest.mark.dnacentersdk
    def test_custom_base_url(self):
        custom_url = "https://custom.domain.com/v1/"
        with pytest.raises(dnacentersdk.exceptions.ApiError):
            dnacentersdk.DNACenterAPI(username=DNA_CENTER_USERNAME,
                                      password=DNA_CENTER_PASSWORD,
                                      encoded_auth=DNA_CENTER_ENCODED_AUTH,
                                      base_url=custom_url,
                                      verify=DEFAULT_VERIFY,
                                      version=DNA_CENTER_VERSION)

    @pytest.mark.dnacentersdk
    def test_default_single_request_timeout(self, api):
        assert api.single_request_timeout == \
            DEFAULT_SINGLE_REQUEST_TIMEOUT

    @pytest.mark.dnacentersdk
    def test_custom_single_request_timeout(self, base_url):
        custom_timeout = 10
        connection_object = dnacentersdk.DNACenterAPI(username=DNA_CENTER_USERNAME,
                                                      password=DNA_CENTER_PASSWORD,
                                                      encoded_auth=DNA_CENTER_ENCODED_AUTH,
                                                      base_url=base_url,
                                                      single_request_timeout=custom_timeout,
                                                      verify=DEFAULT_VERIFY,
                                                      version=DNA_CENTER_VERSION)
        assert connection_object.single_request_timeout == custom_timeout

    @pytest.mark.dnacentersdk
    def test_default_wait_on_rate_limit(self, api):
        assert api.wait_on_rate_limit == \
            DEFAULT_WAIT_ON_RATE_LIMIT

    @pytest.mark.dnacentersdk
    def test_non_default_wait_on_rate_limit(self, base_url):
        connection_object = dnacentersdk.DNACenterAPI(username=DNA_CENTER_USERNAME,
                                                      password=DNA_CENTER_PASSWORD,
                                                      encoded_auth=DNA_CENTER_ENCODED_AUTH,
                                                      base_url=base_url,
                                                      wait_on_rate_limit=not DEFAULT_WAIT_ON_RATE_LIMIT,
                                                      verify=DEFAULT_VERIFY,
                                                      version=DNA_CENTER_VERSION)
        assert connection_object.wait_on_rate_limit != \
            DEFAULT_WAIT_ON_RATE_LIMIT

    @pytest.mark.dnacentersdk
    def test_api_object_creation(self, api):
        assert isinstance(api.authentication, Authentication)
        assert isinstance(api.custom_caller, CustomCaller)
        if api.version == '1.2.10':
            assert isinstance(api.clients, Clients_v1_2_10)
            assert isinstance(api.command_runner, CommandRunner_v1_2_10)
            assert isinstance(api.devices, Devices_v1_2_10)
            assert isinstance(api.fabric_wired, FabricWired_v1_2_10)
            assert isinstance(api.file, File_v1_2_10)
            assert isinstance(api.network_discovery, NetworkDiscovery_v1_2_10)
            assert isinstance(api.networks, Networks_v1_2_10)
            assert isinstance(api.non_fabric_wireless, NonFabricWireless_v1_2_10)
            assert isinstance(api.path_trace, PathTrace_v1_2_10)
            assert isinstance(api.pnp, Pnp_v1_2_10)
            assert isinstance(api.swim, Swim_v1_2_10)
            assert isinstance(api.site_profile, SiteProfile_v1_2_10)
            assert isinstance(api.sites, Sites_v1_2_10)
            assert isinstance(api.tag, Tag_v1_2_10)
            assert isinstance(api.task, Task_v1_2_10)
            assert isinstance(api.template_programmer, TemplateProgrammer_v1_2_10)
        if api.version == '1.3.0':
            assert isinstance(api.clients, Clients_v1_3_0)
            assert isinstance(api.command_runner, CommandRunner_v1_3_0)
            assert isinstance(api.devices, Devices_v1_3_0)
            assert isinstance(api.fabric_wired, FabricWired_v1_3_0)
            assert isinstance(api.file, File_v1_3_0)
            assert isinstance(api.network_discovery, NetworkDiscovery_v1_3_0)
            assert isinstance(api.networks, Networks_v1_3_0)
            assert isinstance(api.non_fabric_wireless, NonFabricWireless_v1_3_0)
            assert isinstance(api.path_trace, PathTrace_v1_3_0)
            assert isinstance(api.pnp, Pnp_v1_3_0)
            assert isinstance(api.swim, Swim_v1_3_0)
            assert isinstance(api.site_profile, SiteProfile_v1_3_0)
            assert isinstance(api.sites, Sites_v1_3_0)
            assert isinstance(api.tag, Tag_v1_3_0)
            assert isinstance(api.task, Task_v1_3_0)
            assert isinstance(api.template_programmer, TemplateProgrammer_v1_3_0)
        if api.version == '1.3.1':
            assert isinstance(api.application_policy, ApplicationPolicy_v1_3_1)
            assert isinstance(api.clients, Clients_v1_3_1)
            assert isinstance(api.command_runner, CommandRunner_v1_3_1)
            assert isinstance(api.configuration_templates, ConfigurationTemplates_v1_3_1)
            assert isinstance(api.device_onboarding_pnp, DeviceOnboardingPnp_v1_3_1)
            assert isinstance(api.devices, Devices_v1_3_1)
            assert isinstance(api.event_management, EventManagement_v1_3_1)
            assert isinstance(api.fabric_wired, FabricWired_v1_3_1)
            assert isinstance(api.file, File_v1_3_1)
            assert isinstance(api.issues, Issues_v1_3_1)
            assert isinstance(api.network_discovery, NetworkDiscovery_v1_3_1)
            assert isinstance(api.network_settings, NetworkSettings_v1_3_1)
            assert isinstance(api.non_fabric_wireless, NonFabricWireless_v1_3_1)
            assert isinstance(api.path_trace, PathTrace_v1_3_1)
            assert isinstance(api.site_design, SiteDesign_v1_3_1)
            assert isinstance(api.sites, Sites_v1_3_1)
            assert isinstance(api.software_image_management_swim, SoftwareImageManagementSwim_v1_3_1)
            assert isinstance(api.tag, Tag_v1_3_1)
            assert isinstance(api.task, Task_v1_3_1)
            assert isinstance(api.topology, Topology_v1_3_1)
            assert isinstance(api.users, Users_v1_3_1)
        if api.version == '1.3.3':
            assert isinstance(api.application_policy, ApplicationPolicy_v1_3_3)
            assert isinstance(api.clients, Clients_v1_3_3)
            assert isinstance(api.command_runner, CommandRunner_v1_3_3)
            assert isinstance(api.configuration_templates, ConfigurationTemplates_v1_3_3)
            assert isinstance(api.device_onboarding_pnp, DeviceOnboardingPnp_v1_3_3)
            assert isinstance(api.devices, Devices_v1_3_3)
            assert isinstance(api.discovery, Discovery_v1_3_3)
            assert isinstance(api.event_management, EventManagement_v1_3_3)
            assert isinstance(api.file, File_v1_3_3)
            assert isinstance(api.issues, Issues_v1_3_3)
            assert isinstance(api.network_settings, NetworkSettings_v1_3_3)
            assert isinstance(api.path_trace, PathTrace_v1_3_3)
            assert isinstance(api.sda, Sda_v1_3_3)
            assert isinstance(api.site_design, SiteDesign_v1_3_3)
            assert isinstance(api.sites, Sites_v1_3_3)
            assert isinstance(api.software_image_management_swim, SoftwareImageManagementSwim_v1_3_3)
            assert isinstance(api.tag, Tag_v1_3_3)
            assert isinstance(api.task, Task_v1_3_3)
            assert isinstance(api.topology, Topology_v1_3_3)
            assert isinstance(api.users, Users_v1_3_3)
            assert isinstance(api.wireless, Wireless_v1_3_3)
        if api.version == '2.1.1':
            assert isinstance(api.application_policy, ApplicationPolicy_v2_1_1)
            assert isinstance(api.clients, Clients_v2_1_1)
            assert isinstance(api.command_runner, CommandRunner_v2_1_1)
            assert isinstance(api.configuration_templates, ConfigurationTemplates_v2_1_1)
            assert isinstance(api.device_onboarding_pnp, DeviceOnboardingPnp_v2_1_1)
            assert isinstance(api.device_replacement, DeviceReplacement_v2_1_1)
            assert isinstance(api.devices, Devices_v2_1_1)
            assert isinstance(api.discovery, Discovery_v2_1_1)
            assert isinstance(api.event_management, EventManagement_v2_1_1)
            assert isinstance(api.file, File_v2_1_1)
            assert isinstance(api.itsm, Itsm_v2_1_1)
            assert isinstance(api.issues, Issues_v2_1_1)
            assert isinstance(api.network_settings, NetworkSettings_v2_1_1)
            assert isinstance(api.path_trace, PathTrace_v2_1_1)
            assert isinstance(api.sda, Sda_v2_1_1)
            assert isinstance(api.site_design, SiteDesign_v2_1_1)
            assert isinstance(api.sites, Sites_v2_1_1)
            assert isinstance(api.software_image_management_swim, SoftwareImageManagementSwim_v2_1_1)
            assert isinstance(api.tag, Tag_v2_1_1)
            assert isinstance(api.task, Task_v2_1_1)
            assert isinstance(api.topology, Topology_v2_1_1)
            assert isinstance(api.users, Users_v2_1_1)
            assert isinstance(api.wireless, Wireless_v2_1_1)
