# superloop
Inspired by a wide array of toolsets (unamed) used and developed by a leading social media tech company in the Bay Area for network automation, I have attempted to create my own version.

Prerequisite:
  1. netmiko - A HUGE thanks and shout out to Kirk Byers for developing the library!
  2. snmp_helper.py - module written by Kirk Byers (https://github.com/ktbyers/pynet/blob/master/snmp/snmp_helper.py).
  3. ciscoconfparse - A library to help parse out Cisco (or similiar) CLI configs (https://pypi.org/project/ciscoconfparse/).

Before we begin, I've constructed this application for easy database management by utilizing the power of YAML files. There are a combination of three YAML files that require management:

  1. nodes.yaml
  2. templates.yaml
  3. encrypted.yaml

nodes.yaml acts as the inventory for all network devices. It must follow the format defined below as the application reads it in a specific method.
```
root@jumpbox:~/superloop# cat nodes.yaml 
---
- hostname: core-fw-superloop-toron
  ip: 10.10.10.10
  username: admin
  password: cGFzc3dvcmQ=
  platform: cisco
  os: ios
  type: firewall
- hostname: core.sw.superloop.sfran
  ip: 20.20.20.20  
  username: admin
  password: cGFzc3dvcmQ=
  platform: cisco
  os: ios
  type: switch 
- hostname: core.rt.superloop.sjose 
  ip: 30.30.30.30 
  username: admin
  password: cGFzc3dvcmQ=
  platform: cisco
  os: ios
  type: router
```  
Most fields are self explainatory except the password. The password is encrypted in base64 format so it's not visible in clear text. The easiest way to generate this hash is via the python interpreter. Assume your password is 'password':
```  
root@jumpbox:~/superloop# python
Python 2.7.6 (default, Nov 23 2017, 15:49:48) 
[GCC 4.8.4] on linux2
Type "help", "copyright", "credits" or "license" for more information.
>>> import base64
>>> password = 'password'
>>> encode = base64.b64encode(password)
>>> encode
'cGFzc3dvcmQ='
>>> 
```
The password is only decrypted during the time the application connects to your device(s). For now, I've only tested this application on Cisco IOS as those are the only equipment I have powering my home network. However, technically it should also be compatible with anything that has a Cisco IOS style of configuration. This includes Juniper Networks Junos, F5 Networks configurations etc.

templates.yaml is a database file that consist of all the jinja2 templates. You will need to include the full path. Here is a sample of how it should look like below. Do not change the format as the application reads it in a specific method. Only change the properties.
```
root@jumpbox:~/superloop# cat templates.yaml 
---
- platform: cisco
  type: firewall
  os: ios
  templates:
  - /templates/cisco/ios/firewall/snmp.jinja2
  - /templates/cisco/ios/firewall/base.jinja2
- platform: cisco
  type: router 
  os: ios
  templates:
  - /templates/cisco/ios/router/base.jinja2
- platform: cisco
  type: switch 
  os: ios
  templates:
  - /templates/cisco/ios/switch/access.jinja2
  - /templates/cisco/ios/switch/services.jinja2
  - /templates/cisco/ios/switch/snmp.jinja2
  - /templates/cisco/ios/switch/hostname.jinja2
  - /templates/cisco/ios/switch/dhcp.jinja2
```
I've structured the hierarchy based on vendor, os and the type. You should do the same in order to keep your templates orderly. Whatever hierarchy you choose, you will need to update/modify in the directory.py file to reflect.

Let's look at a simple jinja2 template as an example.
```
root@jumpbox:~/superloop# cat /templates/cisco/ios/switch/base.jinja2 
{# audit_filter = ['hostname.*'] #}
hostname {{ nodes.hostname }}
```
Notice there is a section called 'audit_filter' at the top of file. This audit filter should be included in all templates. This tells superloop which lines to look for and compare against when rendering the configs. In other words, superloop will look for only lines that begin with 'hostname'. If you have additional lines that you want superloop to look at, simply append strings seperated by a comma like so... 
```
['hostname.*','service.*','username.*']
```

You may also have a template that consist of one or several levels deep like so.
```
root@jumpbox:~/superloop# cat /templates/cisco/ios/switch/dhcp.jinja2
{# audit_filter = ['ip dhcp.*'] #}

ip dhcp excluded-address 10.50.80.1
ip dhcp ping packets 5
!
ip dhcp pool DATA
 network 10.10.20.0 255.255.255.0
 default-router 10.10.20.1 
 dns-server 8.8.8.8 
``` 
Look at 'ip dhcp pool DATA'. The next line of config has an indentation. superloop is inteligent enough to render the remaining 3 lines of configs without having to include it into the audit_filter.

IMPORTANT: To simplify the execution of superloop application, please do the following after installation.

You will want to move the 'superloop.py' file to one of your $PATH directory and remove the *.py extention. Usually this can be '/usr/local/bin/'

```
root@jumpbox:~/superloop# echo $PATH
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games
root@jumpbox:~/superloop# mv superloop.py /usr/local/bin/superloop
```
Now append the following code within '/usr/local/bin/superloop':
```
import sys
sys.path.append('/root/superloop')
```
So it looks like this . . . 
```
#!/usr/bin/env python
# VARIABLES LIKE "--node" OR "--file" ARE HOW IT'S BEING READ WHEN PASSED IN.
# args.node OR args.file IS HOW YOU REFER TO THE USER INPUT
import sys
sys.path.append('/root/superloop')
from auditdiff import auditdiff
from push_cfgs import push_cfgs
...
..
.
<output truncated>
```
This will set the system path of superloop to '/root/superloop'. If you have superloop installed in another directory, change the path accordingly.

Now that I have explained the basic operations, onto the fun stuff!

## superloop audit diff

First and foremost, I would like to introduce to you the 'audit diff' function. This function was designed to compare against the jinja2 templates with your running-configurations to see if they are according to standards. You could imagine if you had hundreds, if not thousands of devices to maintain, standardization would be a nightmare without some form of auditing/automation tool. To paint you an example, say one day, little Amit decides to make an unauthorized manual configuration change on a switch. No one knows about it or what he did. superloop would be able to dive into the device and see if there were any discrepencies againist the template as that is considered the trusted source. If superloop senses a difference, it will provide you the option of remediating. Whatever little Amit decided to configure would essentially be removed without hassel. This works the other way around as well. If configuration(s) on a device(s) does not have the standard rendered configs from the template (configs removed), superloop will determine they are missing and you may proceed to remediate by pushing the rendered configs. 'audit diff' will audit againist ONE or ALL templates belonging to the matched device(s) from the query. If you want to audit against ONE template, simply include the option '-f <template_name>' (exclude extension .jinja2). If you want to audit against ALL templates belonging to the matched device(s) query, do not include the '-f' option. 

![superloop auditcreeper demo](https://github.com/superloopnetwork/superloop/blob/master/gifs/superloop_audit_diff_demo.gif)

In this demo, only one device gets remediated. A parent config was removed from the device. superloop detected the missing configs and prompted the user if they would like to proceed to remediate:

```
[+] [GATHERING RUNNING-CONFIG. STANDBY...]
[!] [DONE] [0:00:09.419225]

Only in the device: -
Only in the generated config: +
core.sw.superloop.sfran
/templates/cisco/ios/switch/base.jinja2 (none)

/templates/cisco/ios/switch/service.jinja2
-no service pad
 service tcp-keepalives-out
 service timestamps debug uptime
 service timestamps log datetime localtime
 service password-encryption

/templates/cisco/ios/switch/dhcp.jinja2
 ip dhcp ping packets 5
 ip dhcp pool DATA
  network 10.50.50.0 255.255.255.0
  default-router 10.50.50.1 
  dns-server 8.8.8.8 
+ip dhcp pool SERVERS
+ network 10.50.30.0 255.255.255.0
+ default-router 10.50.30.1 
+ dns-server 8.8.8.8 
 ip dhcp pool MANAGEMENT
  network 10.50.80.0 255.255.255.0
  default-router 10.50.80.1 
  dns-server 8.8.8.8 
 ip dhcp pool WIRELESS

/templates/cisco/ios/switch/crypto.jinja2 (none)


PROCEED TO REMEDIATE? [Y/N]: y

PUSHING CODE...
[!] [DONE] [0:00:23.397795]
```
'-' indicating a config(s) should be removed
'+' indicating a config(s) should be added
* (none) indicating NO discrepancies.

The demo shows the remediation was successful. 'ip dhcp pool SERVERS' along with it's children configs was reinstated.

## superloop auditcreeper

By leveraging the power of the auditdiff engine, I'm able to extend it's functionality by creating a creeper. The 'auditcreeper' would essentially audit ALL devices in the nodes.yaml file against ALL templates specified in templates.yaml file at a set interval. For example, I may set the 'auditcreeper' to check every 4 hours to ensure standardization. You may modify the timining in second in the auditcreeper.py file. Look for:

```threading.Timer(14400, auditcreeper).start()```

* 14400 seconds = 4 hours

For the sake of this example, I've narrowed down to 5 second to speed things up so you'll have an idea of how it works.

![superloop auditcreeper demo](https://github.com/superloopnetwork/superloop/blob/master/gifs/superloop_auditcreeper.gif)

In this demo, only one device gets remediated. A config was removed and a random config was added. superloop detected the discrepancies and proceeded to remediate:

```
- ip dhcp excluded-address 10.50.40.4
+ ip dhcp excluded-address 10.10.10.10
```
'-' indicating a config(s) was removed
'+' indicating a config(s) was added
  
If there are no discrepancies for a specific template, you should see something like this:

```
/templates/cisco/ios/switch/service.jinja2 (none)
/templates/cisco/ios/switch/hostname.jinja2 (none)
/templates/cisco/ios/switch/dhcp.jinja2 (none)
/templates/cisco/ios/switch/snmp.jinja2 (none)
```
* (none) indicating NO discrepancies.

If there are multiple devices that require remediation, superloop handles remediation concurrently - meaning, superloop connects to all devices in parallel via multithreading.

## superloop push cfgs

The next set of features I developed was 'push cfgs'. 'push cfgs' is simplying pushing a template to a device(s). You may use regular expression in your query to match multiple nodes. This has proven to be very powerful and useful in an organized environment. 

## superloop push local

The 'push local' command allows you to push configs that are stored in a text file to one more multiple nodes. I found this feature to be very useful when performing migrations. For example, if we wanted to drain/undrain traffic from one node, we could pre-configure the set of commands in the text file. At the time of migration, we can push the configs to the selected nodes. This method would eliminate any human error in the process.

## superloop host exec

The 'host exec' (formerly known as 'onscreen') features allow you to execute a command on the device(s) without requiring you to log in. In the example below, the screen on the right is using 'push' and the screen on the left is using 'host exec' to check the changes after.

Here is an example of how you would use it:
```
root@jumpbox:~/superloop# superloop host exec "show ip int brief" -n core.*sw                
core.sw.superloop.sfran: Interface              IP-Address      OK? Method Status                Protocol
core.sw.superloop.sfran: Vlan1                  unassigned      YES NVRAM  administratively down down    
core.sw.superloop.sfran: Vlan120                 10.120.20.1      YES NVRAM  up                    up      
core.sw.superloop.sfran: Vlan130                 10.130.30.1      YES NVRAM  up                    up      
core.sw.superloop.sfran: Vlan140                 10.140.40.1      YES NVRAM  up                    up      
core.sw.superloop.sfran: Vlan150                 10.150.50.1      YES NVRAM  up                    up      
```

![superloop push and onscreen demo](https://github.com/superloopnetwork/superloop/blob/master/gifs/superloop_push_onscreen_demo.gif)

## superloop ssh

Users are now able to take advantage of the 'ssh' menu screen. This feature allows users to quickly search up a device via hostname (doesn't have to be a complete or exactly matched string) and establish a SSH session. It's a very powerful tool in the sense that it support regular expression to filter out certain desired hosts from a lare scale network.

Here is an example of how you would use it:
```
root@jumpbox:~/superloop# superloop ssh core.*
ID      name                    address         platform
1       core-fw-superloop-toron 10.10.10.10     cisco
2       core.sw.superloop.sfran 20.20.20.20     cisco
3       core.rt.superloop.sjose 30.30.30.30     cisco
Enter ID to SSH to: 
```
```
root@jumpbox:~/superloop# python superloop ssh core.*(fw|rt)
ID      name                    address         platform
1       core-fw-superloop-toron 10.10.10.10     cisco
2       core.rt.superloop.sjose 30.30.30.30     cisco
Enter ID to SSH to: 
```
```
root@jumpbox:~/superloop# superloop ssh .*sfran
ID      name                    address         platform
1       core.sw.superloop.sfran 20.20.20.20     cisco
```
* Notice after 'ssh' it expects a positional argument(hostname).

If the search result returns one host, superloop automatically establishes a SSH session.

## superloop host add/remove

When I first built this application, the expectation was to manually populate the nodes.yaml file in order for superloop to execute. That is no longer a requirement. Introducing 'host add'. This function will allow you add hosts to the database file via cli (one line) without the need to manually update the nodes.yaml file. It works like this; when 'superloop host add <management ip address>' command is executed, superloop will connect to the device via snmp. It will pull the neccessary information such as it's hostname to populate it into nodes.yaml. Since there are sentitive information that are required like the username and password of the device, I have decided to create an 'encrypted.yaml' file. This file will store all sensitive information in encrypted format. Let's take a closer look:
```
root@jumpbox:~/staging/superloop#  cat encrypted.yaml 
- username: YWRtaW4= 
  password: cGFzc3dvcmQ= 
  snmp: cGFzc3dvcmQ=
```
'username' and 'password' are the credentials for the node(s). 'snmp' is the community string used to poll device infomation. The default snmp port it uses is UDP 161. This can be modified in the 'snmp.py' file under the varilable' SNMP_PORT = 161'

Let's now look at 'host remove' feature. Just like 'add', 'remove' allows you to remove a node from the database without having to manually edit the nodes.yaml file. Here is how you use it:
```
root@jumpbox:~/superloop# cat nodes.yaml
---
- hostname: core-fw-superloop-toron
  ip: 10.10.10.10
  username: admin
  password: cGFzc3dvcmQ=
  platform: cisco
  os: ios
  type: firewall
- hostname: core.sw.superloop.sfran
  ip: 20.20.20.20  
  username: admin
  password: cGFzc3dvcmQ=
  platform: cisco
  os: ios
  type: switch 
- hostname: core.rt.superloop.sjose 
  ip: 30.30.30.30 
  username: admin
  password: cGFzc3dvcmQ=
  platform: cisco
  os: ios
  type: router
  ```
Say we wanted to blow out the node 'core.sw.superloop.sfran'. Simply use the following command 'superloop host remove core.sw.superloop.sfran' or 'superloop host remove 20.20.20.20'. It supports both hostname and IP address.
```
root@jumpbox:~/superloop# superloop host remove core.sw.superloop.sfran
[+] NODE SUCCESSFULLY REMOVED FROM DATABASE
```
```
root@jumpbox:~/superloop# cat nodes.yaml
---
- hostname: core-fw-superloop-toron
  ip: 10.10.10.10
  os: ios
  password: cGFzc3dvcmQ=
  platform: cisco
  type: firewall
  username: admin
- hostname: core.rt.superloop.sjose
  ip: 30.30.30.30
  os: ios
  password: cGFzc3dvcmQ=
  platform: cisco
  type: router
  username: admin
```
* Noticed how the node 'core.sw.superloop.sfran' has been removed from the database.

## superloop node list

We can now leverage the power of 'superloop host add' by having snmp poll more attributes on the node(s) such as the software version, location, serial number etc. Once we have these details in our database file, we are then able list them in cli. This will give us all the details about a particular node. To use this, simply type 'superloop node list <hostname>'. Regular expressions is supported for this feature so if you have multiple hosts you would like to view, you can match it via regex.
```  
root@jumpbox:~/superloop# superloop node list core.*
[
    {
        "hostname": "core-fw-superloop-toron"
        "os": "ios"
        "platform": "cisco"
        "type": "firewall"
        "data": {
            "managed_configs": {
                   base.jinja2
                   snmp.jinja2
             }
         }
    },
    {
        "hostname": "core.sw.superloop.sfran"
        "os": "ios"
        "platform": "cisco"
        "type": "switch"
        "data": {
            "managed_configs": {
                   base.jinja2
                   service.jinja2
                   dhcp.jinja2
                   snmp.jinja2
             }
         }
    },
    {
        "hostname": "core.rt.superloop.sjose"
        "os": "ios"
        "platform": "cisco"
        "type": "router"
        "data": {
            "managed_configs": {
                   base.jinja2
             }
         }
    }
]
```
Or a particular node...
```
root@jumpbox:~/superloop# superloop node list .*sfran  
[
    {
        "hostname": "core.sw.superloop.sfran"
        "os": "ios"
        "platform": "cisco"
        "type": "switch"
        "data": {
            "managed_configs": {
                   base.jinja2
                   service.jinja2
                   dhcp.jinja2
                   snmp.jinja2
             }
         }
    }
]
```
