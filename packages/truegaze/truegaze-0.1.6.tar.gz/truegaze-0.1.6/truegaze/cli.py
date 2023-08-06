#
# Copyright (c) 2019 Nightwatch Cybersecurity.
#
# This file is part of truegaze
# (see https://github.com/nightwatchcybersecurity/truegaze).
#
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
#
import sys

import click
from beautifultable import BeautifulTable

from truegaze.plugins import ACTIVE_PLUGINS
from truegaze.utils import TruegazeUtils


@click.version_option(version=TruegazeUtils.get_version(), prog_name='truegaze')
@click.group()
def cli():
    """
    truegaze - A static analysis tool for Android and iOS applications focusing on security issues
    outside the source code such as resource strings, third party libraries and configuration files.

    Copyright (c) 2019 Nightwatch Cybersecurity.
    Source code: https://github.com/nightwatchcybersecurity/truegaze
    """


@cli.command('list')
def list_plugins():
    """List supported plugins"""
    click.echo("Total active plugins: " + str(len(ACTIVE_PLUGINS)))

    # Get information out of the plugin list into a table
    table = BeautifulTable()
    table.column_headers = ['Name', 'Description', 'Android', 'iOS']
    for plugin in ACTIVE_PLUGINS:
        table.append_row([plugin.name, plugin.desc, plugin.supports_android, plugin.supports_ios])
    click.echo(table)


@cli.command('scan')
@click.argument('filenames', required=True, nargs=-1, type=click.Path(exists=True, dir_okay=False))
@click.option('--online', is_flag=True, help='Run tests requiring online access - make sure you are doing this legally')
def scan(filenames, online):
    """Scan the provided files for vulnerabilities"""

    for filename in filenames:
        click.echo('\nProcessing file: ' + filename)

        # Try to open the provided file as a ZIP, fail otherwise
        zip_file = TruegazeUtils.open_file_as_zip(filename)
        if zip_file is None:
            click.echo('ERROR: Unable to open file - please check to make sure it is an APK or IPA file')
            sys.exit(-1)

        # Detect manifest
        is_android = False
        is_ios = False
        android_manifest = TruegazeUtils.get_android_manifest(zip_file)
        ios_manifest = TruegazeUtils.get_ios_manifest(zip_file)

        # Set flags, error out if no manifest is found
        if android_manifest:
            click.echo('Identified as an Android application via a manifest located at: ' + android_manifest)
            is_android = True
        elif ios_manifest:
            click.echo('Identified as an iOS application via a manifest located at: ' + ios_manifest)
            is_ios = True
        else:
            click.echo('ERROR: Unable to identify the file as an Android or iOS application')
            sys.exit(-2)

        # Pass the filename to the individual modules for scanning
        for PLUGIN in ACTIVE_PLUGINS:
            click.echo()
            click.echo('Scanning using the "' + PLUGIN.name + '" plugin')
            instance = PLUGIN(filename, is_android, is_ios, online)

            # Show error if OS is not supported
            # TODO: Add tests
            if instance.is_os_supported():
                instance.scan()
            else:
                click.echo('-- OS is not supported by this plugin, skipping')

    click.echo("Done!")


if __name__ == '__main__':
    cli(prog_name='truegaze')