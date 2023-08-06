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
def wireless(ctx, obj):
    """DNA Center Wireless API (version: 1.3.3).

    Wraps the DNA Center Wireless API and exposes the API as native Python commands.

    """
    ctx.obj = obj.wireless


@wireless.command()
@click.option('--rf_profile_name', type=str,
              help='''rf-profile-name query parameter.''',
              show_default=True)
@click.option('--headers', type=str, help='''Dictionary of HTTP Headers to send with the Request.''',
              default=None,
              show_default=True)
@click.option('-pp', '--pretty_print', type=int, help='''Pretty print indent''',
              default=None,
              show_default=True)
@click.option('--beep', is_flag=True, help='''Spinner beep (on)''')
@click.pass_obj
def retrieve_rf_profiles(obj, pretty_print, beep,
                         rf_profile_name,
                         headers):
    """Retrieve all RF profiles.
    """
    spinner = init_spinner(beep=beep)
    start_spinner(spinner)
    try:
        if headers is not None:
            headers = json.loads(headers)
        result = obj.retrieve_rf_profiles(
            rf_profile_name=rf_profile_name,
            headers=headers)
        stop_spinner(spinner)
        opprint(result, indent=pretty_print)
    except Exception as e:
        stop_spinner(spinner)
        tbprint()
        eprint('Error:', e)
        click.Context.exit(-1)


@wireless.command()
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
                              headers,
                              payload,
                              active_validation):
    """Creates SSID, updates the SSID to the corresponding site profiles and provision it to the devices matching the given sites.
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
        result = obj.create_and_provision_ssid(
            enableFabric=enablefabric,
            flexConnect=flexconnect,
            managedAPLocations=managedaplocations,
            ssidDetails=ssiddetails,
            ssidType=ssidtype,
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


@wireless.command()
@click.option('--rf_profile_name', type=str,
              help='''rf-profile-name path parameter.''',
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
def delete_rf_profiles(obj, pretty_print, beep,
                       rf_profile_name,
                       headers):
    """Delete RF profile(s).
    """
    spinner = init_spinner(beep=beep)
    start_spinner(spinner)
    try:
        if headers is not None:
            headers = json.loads(headers)
        result = obj.delete_rf_profiles(
            rf_profile_name=rf_profile_name,
            headers=headers)
        stop_spinner(spinner)
        opprint(result, indent=pretty_print)
    except Exception as e:
        stop_spinner(spinner)
        tbprint()
        eprint('Error:', e)
        click.Context.exit(-1)


@wireless.command()
@click.option('--profiledetails', type=str,
              help='''Profile Details, property of the request body.''',
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
def create_wireless_profile(obj, pretty_print, beep,
                            profiledetails,
                            headers,
                            payload,
                            active_validation):
    """Creates Wireless Network Profile on DNAC and associates sites and SSIDs to it.
    """
    spinner = init_spinner(beep=beep)
    start_spinner(spinner)
    try:
        if headers is not None:
            headers = json.loads(headers)
        if payload is not None:
            payload = json.loads(payload)
        if profiledetails is not None:
            profiledetails = json.loads('{}'.format(profiledetails))
        result = obj.create_wireless_profile(
            profileDetails=profiledetails,
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


@wireless.command()
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
def provision_update(obj, pretty_print, beep,
                     headers,
                     payload,
                     active_validation):
    """Updates wireless provisioning.
    """
    spinner = init_spinner(beep=beep)
    start_spinner(spinner)
    try:
        if headers is not None:
            headers = json.loads(headers)
        if payload is not None:
            payload = json.loads(payload)
        result = obj.provision_update(
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


@wireless.command()
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
    """Creates enterprise SSID.
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


@wireless.command()
@click.option('--profile_name', type=str,
              help='''profileName query parameter.''',
              show_default=True)
@click.option('--headers', type=str, help='''Dictionary of HTTP Headers to send with the Request.''',
              default=None,
              show_default=True)
@click.option('-pp', '--pretty_print', type=int, help='''Pretty print indent''',
              default=None,
              show_default=True)
@click.option('--beep', is_flag=True, help='''Spinner beep (on)''')
@click.pass_obj
def get_wireless_profile(obj, pretty_print, beep,
                         profile_name,
                         headers):
    """Gets either one or all the wireless network profiles if no name is provided for network-profile.
    """
    spinner = init_spinner(beep=beep)
    start_spinner(spinner)
    try:
        if headers is not None:
            headers = json.loads(headers)
        result = obj.get_wireless_profile(
            profile_name=profile_name,
            headers=headers)
        stop_spinner(spinner)
        opprint(result, indent=pretty_print)
    except Exception as e:
        stop_spinner(spinner)
        tbprint()
        eprint('Error:', e)
        click.Context.exit(-1)


@wireless.command()
@click.option('--channelwidth', type=str,
              help='''Channel Width, property of the request body.''',
              default=None,
              show_default=True)
@click.option('--defaultrfprofile', type=bool,
              help='''defaultRfProfile, property of the request body.''',
              default=None,
              show_default=True)
@click.option('--enablebrownfield', type=bool,
              help='''enableBrownField, property of the request body.''',
              default=None,
              show_default=True)
@click.option('--enablecustom', type=bool,
              help='''enableCustom, property of the request body.''',
              default=None,
              show_default=True)
@click.option('--enableradiotypea', type=bool,
              help='''enableRadioTypeA, property of the request body.''',
              default=None,
              show_default=True)
@click.option('--enableradiotypeb', type=bool,
              help='''enableRadioTypeB, property of the request body.''',
              default=None,
              show_default=True)
@click.option('--name', type=str,
              help='''Name, property of the request body.''',
              default=None,
              show_default=True)
@click.option('--radiotypeaproperties', type=str,
              help='''Radio Type AProperties, property of the request body.''',
              default=None,
              show_default=True)
@click.option('--radiotypebproperties', type=str,
              help='''Radio Type BProperties, property of the request body.''',
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
def create_or_update_rf_profile(obj, pretty_print, beep,
                                channelwidth,
                                defaultrfprofile,
                                enablebrownfield,
                                enablecustom,
                                enableradiotypea,
                                enableradiotypeb,
                                name,
                                radiotypeaproperties,
                                radiotypebproperties,
                                headers,
                                payload,
                                active_validation):
    """Create or Update RF profile.
    """
    spinner = init_spinner(beep=beep)
    start_spinner(spinner)
    try:
        if headers is not None:
            headers = json.loads(headers)
        if payload is not None:
            payload = json.loads(payload)
        if radiotypeaproperties is not None:
            radiotypeaproperties = json.loads('{}'.format(radiotypeaproperties))
        if radiotypebproperties is not None:
            radiotypebproperties = json.loads('{}'.format(radiotypebproperties))
        result = obj.create_or_update_rf_profile(
            channelWidth=channelwidth,
            defaultRfProfile=defaultrfprofile,
            enableBrownField=enablebrownfield,
            enableCustom=enablecustom,
            enableRadioTypeA=enableradiotypea,
            enableRadioTypeB=enableradiotypeb,
            name=name,
            radioTypeAProperties=radiotypeaproperties,
            radioTypeBProperties=radiotypebproperties,
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


@wireless.command()
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
    """Deletes given enterprise SSID.
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


@wireless.command()
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
    """Gets either one or all the enterprise SSID.
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


@wireless.command()
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
def provision(obj, pretty_print, beep,
              headers,
              payload,
              active_validation):
    """Provision wireless devices.
    """
    spinner = init_spinner(beep=beep)
    start_spinner(spinner)
    try:
        if headers is not None:
            headers = json.loads(headers)
        if payload is not None:
            payload = json.loads(payload)
        result = obj.provision(
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


@wireless.command()
@click.option('--profiledetails', type=str,
              help='''Profile Details, property of the request body.''',
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
def update_wireless_profile(obj, pretty_print, beep,
                            profiledetails,
                            headers,
                            payload,
                            active_validation):
    """Updates the wireless Network Profile with updated details provided. All sites to be present in the network profile should be provided.
    """
    spinner = init_spinner(beep=beep)
    start_spinner(spinner)
    try:
        if headers is not None:
            headers = json.loads(headers)
        if payload is not None:
            payload = json.loads(payload)
        if profiledetails is not None:
            profiledetails = json.loads('{}'.format(profiledetails))
        result = obj.update_wireless_profile(
            profileDetails=profiledetails,
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


@wireless.command()
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
def ap_provision(obj, pretty_print, beep,
                 headers,
                 payload,
                 active_validation):
    """Provision wireless Access points.
    """
    spinner = init_spinner(beep=beep)
    start_spinner(spinner)
    try:
        if headers is not None:
            headers = json.loads(headers)
        if payload is not None:
            payload = json.loads(payload)
        result = obj.ap_provision(
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


@wireless.command()
@click.option('--wireless_profile_name', type=str,
              help='''wirelessProfileName path parameter.''',
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
def delete_wireless_profile(obj, pretty_print, beep,
                            wireless_profile_name,
                            headers):
    """Delete the Wireless Profile from DNAC whose name is provided.
    """
    spinner = init_spinner(beep=beep)
    start_spinner(spinner)
    try:
        if headers is not None:
            headers = json.loads(headers)
        result = obj.delete_wireless_profile(
            wireless_profile_name=wireless_profile_name,
            headers=headers)
        stop_spinner(spinner)
        opprint(result, indent=pretty_print)
    except Exception as e:
        stop_spinner(spinner)
        tbprint()
        eprint('Error:', e)
        click.Context.exit(-1)


@wireless.command()
@click.option('--ssid_name', type=str,
              help='''ssidName path parameter.''',
              required=True,
              show_default=True)
@click.option('--managed_aplocations', type=str,
              help='''managedAPLocations path parameter.''',
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
def delete_ssid_and_provision_it_to_devices(obj, pretty_print, beep,
                                            ssid_name,
                                            managed_aplocations,
                                            headers):
    """Removes SSID or WLAN from the network profile, reprovision the device(s) and deletes the SSID or WLAN from DNA Center.
    """
    spinner = init_spinner(beep=beep)
    start_spinner(spinner)
    try:
        if headers is not None:
            headers = json.loads(headers)
        result = obj.delete_ssid_and_provision_it_to_devices(
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
