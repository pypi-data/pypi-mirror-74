# -*- coding: utf-8 -*-
"""pytest configuration and top-level fixtures.

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

import pytest

pytest_plugins = [
    'tests.cli',
    'tests.cli.v1_2_10',
    'tests.cli.v1_3_0',
    'tests.cli.v1_3_1',
    'tests.cli.v1_3_3',
    'tests.cli.v2_1_1',
]


def pytest_configure(config):
    config.addinivalue_line(
        "markers", "cli: dnacentercli mark"
    )
    config.addinivalue_line(
        "markers", "application_policy: application_policy wrapper test"
    )
    config.addinivalue_line(
        "markers", "authentication: authentication wrapper test"
    )
    config.addinivalue_line(
        "markers", "clients: clients wrapper test"
    )
    config.addinivalue_line(
        "markers", "command_runner: command_runner wrapper test"
    )
    config.addinivalue_line(
        "markers", "configuration_templates: configuration_templates wrapper test"
    )
    config.addinivalue_line(
        "markers", "custom_caller: custom_caller wrapper test"
    )
    config.addinivalue_line(
        "markers", "device_onboarding_pnp: device_onboarding_pnp wrapper test"
    )
    config.addinivalue_line(
        "markers", "device_replacement: device_replacement wrapper test"
    )
    config.addinivalue_line(
        "markers", "devices: devices wrapper test"
    )
    config.addinivalue_line(
        "markers", "discovery: discovery wrapper test"
    )
    config.addinivalue_line(
        "markers", "event_management: event_management wrapper test"
    )
    config.addinivalue_line(
        "markers", "fabric_wired: fabric_wired wrapper test"
    )
    config.addinivalue_line(
        "markers", "file: file wrapper test"
    )
    config.addinivalue_line(
        "markers", "itsm: itsm wrapper test"
    )
    config.addinivalue_line(
        "markers", "issues: issues wrapper test"
    )
    config.addinivalue_line(
        "markers", "network_discovery: network_discovery wrapper test"
    )
    config.addinivalue_line(
        "markers", "network_settings: network_settings wrapper test"
    )
    config.addinivalue_line(
        "markers", "networks: networks wrapper test"
    )
    config.addinivalue_line(
        "markers", "non_fabric_wireless: non_fabric_wireless wrapper test"
    )
    config.addinivalue_line(
        "markers", "path_trace: path_trace wrapper test"
    )
    config.addinivalue_line(
        "markers", "pnp: pnp wrapper test"
    )
    config.addinivalue_line(
        "markers", "sda: sda wrapper test"
    )
    config.addinivalue_line(
        "markers", "swim: swim wrapper test"
    )
    config.addinivalue_line(
        "markers", "site_design: site_design wrapper test"
    )
    config.addinivalue_line(
        "markers", "site_profile: site_profile wrapper test"
    )
    config.addinivalue_line(
        "markers", "sites: sites wrapper test"
    )
    config.addinivalue_line(
        "markers", "software_image_management_swim: software_image_management_swim wrapper test"
    )
    config.addinivalue_line(
        "markers", "tag: tag wrapper test"
    )
    config.addinivalue_line(
        "markers", "task: task wrapper test"
    )
    config.addinivalue_line(
        "markers", "template_programmer: template_programmer wrapper test"
    )
    config.addinivalue_line(
        "markers", "topology: topology wrapper test"
    )
    config.addinivalue_line(
        "markers", "users: users wrapper test"
    )
    config.addinivalue_line(
        "markers", "wireless: wireless wrapper test"
    )
