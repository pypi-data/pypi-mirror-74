# truegaze
[![PyPI version](https://badge.fury.io/py/truegaze.svg)](https://badge.fury.io/py/truegaze)
[![Build Status](https://github.com/nightwatchcybersecurity/truegaze/workflows/Test%20package/badge.svg?branch=master)](https://github.com/nightwatchcybersecurity/truegaze/actions)
[![codecov](https://codecov.io/gh/nightwatchcybersecurity/truegaze/branch/master/graph/badge.svg)](https://codecov.io/gh/nightwatchcybersecurity/truegaze)
![GitHub](https://img.shields.io/github/license/nightwatchcybersecurity/truegaze.svg)

A static analysis tool for Android and iOS applications focusing on security issues outside the
source code such as resource strings, third party libraries and configuration files.

## Requirements
Python 3 is required and you can find all required modules in the **requirements.txt** file.
Only tested on Python 3.7 but should work on other 3.x releases. No plans to 2.x support at
this time.

## Installation
You can install this via PIP as follows:
```
pip install truegaze
truegaze
```
To download and run manually, do the following:
```
git clone https://github.com/nightwatchcybersecurity/truegaze.git
cd truegaze
pip install -r requirements.txt
python -m truegaze.cli
```

## How to use 
To list modules:
```
truegaze list
```
To scan an application:
```
truegaze scan test.apk
truegaze scan test.ipa
```
To scan multiple applications:
```
truegaze scan *.apk
truegaze scan *.ipa
```

## Sample output
Listing modules:
```
user@localhost:~/$ truegaze list
Total active plugins: 3
+----------------+-------------------------------------------+---------+-------+
|      Name      |               Description                 | Android | iOS   |
+----------------+-------------------------------------------+---------+-------+
| AdobeMobileSdk | Detection of incorrect SSL configuration  |  True   | True  |
|                |          in the Adobe Mobile SDK          |         |       |
+----------------+-------------------------------------------+---------+-------+
| FirebasePlugin | Detection of insecure Firebase databases  |  True   | False |
|                |          and GCP storage buckets          |         |       |
+----------------+-------------------------------------------+---------+-------+
| WeakKeyPlugin  |  Detection of weak Android signing keys   |  True   | False |
+----------------+-------------------------------------------+---------+-------+
```

Scanning an application:
```
user@localhost:~/$ truegaze scan ~/test.ipa
Identified as an iOS application via a manifest located at: Payload/IPAPatch-DummyApp.app/Info.plist
Scanning using the "AdobeMobileSdk" plugin
-- Found 1 configuration file(s)
-- Scanning "Payload/IPAPatch-DummyApp.app/Base.lproj/ADBMobileConfig.json'
---- FOUND: The ["analytics"]["ssl"] setting is missing or false - SSL is not being used
---- FOUND: The ["remotes"]["analytics.poi"] URL doesn't use SSL: http://assets.example.com/c234243g4g4rg.json
---- FOUND: The ["remotes"]["messages"] URL doesn't use SSL: http://assets.example.com/b34343443egerg.json
---- FOUND: A "templateurl" in ["messages"]["payload"] doesn't use SSL: http://my.server.com/?user={user.name}&zip={user.zip}&c16={%sdkver%}&c27=cln,{a.PrevSessionLength}
---- FOUND: A "templateurl" in ["messages"]["payload"] doesn't use SSL: http://my.43434server.com/?user={user.name}&zip={user.zip}&c16={%sdkver%}&c27=cln,{a.PrevSessionLength}
Done!
```

Display installed version:
```
user@localhost:~/$ truegaze version
Current version: v0.2
```

## Online scans
Most of the scans are run offline and do not need access to the Internet. In order to run the scans that
require online access, use the "--online" option. Please use legally.

# Development Information

## Structure
The application is command line and will consist of several modules that check for various
vulnerabilities. Each module does its own scanning, and all results get printed to command line.

## Reporting bugs and feature requests
Please use the GitHub issue tracker to report issues or suggest features:
https://github.com/nightwatchcybersecurity/truegaze

You can also send emai to ***research /at/ nightwatchcybersecurity [dot] com***

## Wishlist
   * More unit test coverage for code that interacts with Click 
   * Ability to extract additional files from online source
   * Ability to check if a particular vulnerability is exploitable
   * Ability to produce JSON or XML output that can feed into other tools
   * More modules!

## About the name
"True Gaze" or "Истинное Зрение" is a magical spell that reveals the invisible (from the book "Last Watch" by Sergei Lukyanenko)
