# -*- coding: utf-8 -*-
import click
import json
from ..utils.spinner import (
    init_spinner,
    start_spinner,
    stop_spinner,
)
from ..utils.print import (
    tbprint,
    eprint,
    oprint,
    opprint,
)


@click.group()
@click.pass_obj
@click.pass_context
def non_fabric_wireless(ctx, obj):
    """DNA Center Non-Fabric Wireless API (version: 1.2.10).

    Wraps the DNA Center Non-Fabric Wireless API and exposes the API as native Python commands.

    """
    ctx.obj = obj.non_fabric_wireless


@non_fabric_wireless.command()
@click.option('--ssid_name', type=str,
              help='''Enter the SSID name to be deleted.''',
              required=True,
              show_default=True)
@click.option('--managed_aplocations', type=str,
              help='''Enter complete site hierarchy to remove the SSID from the devices found in it. To enter more than one site hierarchy, use comma delimiter without extra space.''',
              required=True,
              show_default=True)
@click.option('--headers', type=str, help='''Dictionary of HTTP Headers to send with the Request.''',
              default=None,
              show_default=True)
@click.option('-pp', '--pretty_print', type=int, help='''Pretty print indent''',
              default=None,
              show_default=True)
@click.option('--beep', is_flag=True, help='''Spinner beep (on)''')
@click.pass_obj
def delete_and_provision_ssid(obj, pretty_print, beep,
                              ssid_name,
                              managed_aplocations,
                              headers):
    """**Beta** - Removes SSID from the given site profile and provisions these changes to devices matching the site profile.
    """
    spinner = init_spinner(beep=beep)
    start_spinner(spinner)
    try:
        if headers is not None:
            headers = json.loads(headers)
        result = obj.delete_and_provision_ssid(
            ssid_name=ssid_name,
            managed_aplocations=managed_aplocations,
            headers=headers)
        stop_spinner(spinner)
        opprint(result, indent=pretty_print)
    except Exception as e:
        stop_spinner(spinner)
        tbprint()
        eprint('Error:', e)
        click.Context.exit(-1)


@non_fabric_wireless.command()
@click.option('--enablebroadcastssid', type=bool,
              help='''enableBroadcastSSID, property of the request body.''',
              default=None,
              show_default=True)
@click.option('--enablefastlane', type=bool,
              help='''enableFastLane, property of the request body.''',
              default=None,
              show_default=True)
@click.option('--enablemacfiltering', type=bool,
              help='''enableMACFiltering, property of the request body.''',
              default=None,
              show_default=True)
@click.option('--fasttransition', type=str,
              help='''Fast Transition, property of the request body. Available values are 'Adaptive', 'Enable' and 'Disable'.''',
              default=None,
              show_default=True)
@click.option('--name', type=str,
              help='''Enter SSID Name, property of the request body. ConstraintsmaxLength set to 32.''',
              default=None,
              show_default=True)
@click.option('--passphrase', type=str,
              help='''Pass Phrase (Only applicable for SSID with PERSONAL security level), property of the request body. ConstraintsmaxLength set to 63 and minLength set to 8.''',
              default=None,
              show_default=True)
@click.option('--radiopolicy', type=str,
              help='''Radio Policy, property of the request body. Available values are 'Dual band operation (2.4GHz and 5GHz)', 'Dual band operation with band select', '5GHz only' and '2.4GHz only'.''',
              default=None,
              show_default=True)
@click.option('--securitylevel', type=str,
              help='''Security Level, property of the request body. Available values are 'WPA2_ENTERPRISE', 'WPA2_PERSONAL' and 'OPEN'.''',
              default=None,
              show_default=True)
@click.option('--traffictype', type=str,
              help='''Traffic Type, property of the request body. Available values are 'voicedata' and 'data'.''',
              default=None,
              show_default=True)
@click.option('--headers', type=str, help='''Dictionary of HTTP Headers to send with the Request.''',
              default=None,
              show_default=True)
@click.option('--payload', type=str, help='''A JSON serializable Python object to send in the body of the Request.''',
              default=None,
              show_default=True)
@click.option('--active_validation', type=bool, help='''Enable/Disable payload validation.''',
              default=True,
              show_default=True)
@click.option('-pp', '--pretty_print', type=int, help='''Pretty print indent''',
              default=None,
              show_default=True)
@click.option('--beep', is_flag=True, help='''Spinner beep (on)''')
@click.pass_obj
def create_enterprise_ssid(obj, pretty_print, beep,
                           enablebroadcastssid,
                           enablefastlane,
                           enablemacfiltering,
                           fasttransition,
                           name,
                           passphrase,
                           radiopolicy,
                           securitylevel,
                           traffictype,
                           headers,
                           payload,
                           active_validation):
    """**Beta** - Creates enterprise SSID.
    """
    spinner = init_spinner(beep=beep)
    start_spinner(spinner)
    try:
        if headers is not None:
            headers = json.loads(headers)
        if payload is not None:
            payload = json.loads(payload)
        result = obj.create_enterprise_ssid(
            enableBroadcastSSID=enablebroadcastssid,
            enableFastLane=enablefastlane,
            enableMACFiltering=enablemacfiltering,
            fastTransition=fasttransition,
            name=name,
            passphrase=passphrase,
            radioPolicy=radiopolicy,
            securityLevel=securitylevel,
            trafficType=traffictype,
            headers=headers,
            payload=payload,
            active_validation=active_validation)
        stop_spinner(spinner)
        opprint(result, indent=pretty_print)
    except Exception as e:
        stop_spinner(spinner)
        tbprint()
        eprint('Error:', e)
        click.Context.exit(-1)


@non_fabric_wireless.command()
@click.option('--enablefabric', type=bool,
              help='''enableFabric, property of the request body.''',
              default=None,
              show_default=True)
@click.option('--flexconnect', type=str,
              help='''Flex Connect - Applicable for non fabric profile, property of the request body.''',
              default=None,
              show_default=True)
@click.option('--managedaplocations', type=str, multiple=True,
              help='''Managed AP Locations (Enter entire Site(s) hierarchy), property of the request body (list of strings).''',
              default=None,
              show_default=True)
@click.option('--ssiddetails', type=str,
              help='''SsidDetails, property of the request body.''',
              default=None,
              show_default=True)
@click.option('--ssidtype', type=str,
              help='''SSID Type, property of the request body. Available values are 'Guest' and 'Enterprise'.''',
              default=None,
              show_default=True)
@click.option('--vlananddynamicinterfacedetails', type=str,
              help='''VLAN And Dynamic Interface Details, property of the request body.''',
              default=None,
              show_default=True)
@click.option('--headers', type=str, help='''Dictionary of HTTP Headers to send with the Request.''',
              default=None,
              show_default=True)
@click.option('--payload', type=str, help='''A JSON serializable Python object to send in the body of the Request.''',
              default=None,
              show_default=True)
@click.option('--active_validation', type=bool, help='''Enable/Disable payload validation.''',
              default=True,
              show_default=True)
@click.option('-pp', '--pretty_print', type=int, help='''Pretty print indent''',
              default=None,
              show_default=True)
@click.option('--beep', is_flag=True, help='''Spinner beep (on)''')
@click.pass_obj
def create_and_provision_ssid(obj, pretty_print, beep,
                              enablefabric,
                              flexconnect,
                              managedaplocations,
                              ssiddetails,
                              ssidtype,
                              vlananddynamicinterfacedetails,
                              headers,
                              payload,
                              active_validation):
    """**Beta** - Creates SSID, adds it to the corresponding site profiles and provisions to devices matching the site profile.
    """
    spinner = init_spinner(beep=beep)
    start_spinner(spinner)
    try:
        if headers is not None:
            headers = json.loads(headers)
        if payload is not None:
            payload = json.loads(payload)
        if flexconnect is not None:
            flexconnect = json.loads('{}'.format(flexconnect))
        managedaplocations = list(managedaplocations)
        managedaplocations = managedaplocations if len(managedaplocations) > 0 else None
        if ssiddetails is not None:
            ssiddetails = json.loads('{}'.format(ssiddetails))
        if vlananddynamicinterfacedetails is not None:
            vlananddynamicinterfacedetails = json.loads('{}'.format(vlananddynamicinterfacedetails))
        result = obj.create_and_provision_ssid(
            enableFabric=enablefabric,
            flexConnect=flexconnect,
            managedAPLocations=managedaplocations,
            ssidDetails=ssiddetails,
            ssidType=ssidtype,
            vlanAndDynamicInterfaceDetails=vlananddynamicinterfacedetails,
            headers=headers,
            payload=payload,
            active_validation=active_validation)
        stop_spinner(spinner)
        opprint(result, indent=pretty_print)
    except Exception as e:
        stop_spinner(spinner)
        tbprint()
        eprint('Error:', e)
        click.Context.exit(-1)


@non_fabric_wireless.command()
@click.option('--ssid_name', type=str,
              help='''Enter the SSID name to be deleted.''',
              required=True,
              show_default=True)
@click.option('--headers', type=str, help='''Dictionary of HTTP Headers to send with the Request.''',
              default=None,
              show_default=True)
@click.option('-pp', '--pretty_print', type=int, help='''Pretty print indent''',
              default=None,
              show_default=True)
@click.option('--beep', is_flag=True, help='''Spinner beep (on)''')
@click.pass_obj
def delete_enterprise_ssid(obj, pretty_print, beep,
                           ssid_name,
                           headers):
    """**Beta** - Deletes given enterprise SSID.
    """
    spinner = init_spinner(beep=beep)
    start_spinner(spinner)
    try:
        if headers is not None:
            headers = json.loads(headers)
        result = obj.delete_enterprise_ssid(
            ssid_name=ssid_name,
            headers=headers)
        stop_spinner(spinner)
        opprint(result, indent=pretty_print)
    except Exception as e:
        stop_spinner(spinner)
        tbprint()
        eprint('Error:', e)
        click.Context.exit(-1)


@non_fabric_wireless.command()
@click.option('--ssid_name', type=str,
              help='''Enter the enterprise SSID name that needs to be retrieved. If not entered, all the enterprise SSIDs will be retrieved.''',
              show_default=True)
@click.option('--headers', type=str, help='''Dictionary of HTTP Headers to send with the Request.''',
              default=None,
              show_default=True)
@click.option('-pp', '--pretty_print', type=int, help='''Pretty print indent''',
              default=None,
              show_default=True)
@click.option('--beep', is_flag=True, help='''Spinner beep (on)''')
@click.pass_obj
def get_enterprise_ssid(obj, pretty_print, beep,
                        ssid_name,
                        headers):
    """**Beta** - Gets either one or all the enterprise SSID.
    """
    spinner = init_spinner(beep=beep)
    start_spinner(spinner)
    try:
        if headers is not None:
            headers = json.loads(headers)
        result = obj.get_enterprise_ssid(
            ssid_name=ssid_name,
            headers=headers)
        stop_spinner(spinner)
        opprint(result, indent=pretty_print)
    except Exception as e:
        stop_spinner(spinner)
        tbprint()
        eprint('Error:', e)
        click.Context.exit(-1)
