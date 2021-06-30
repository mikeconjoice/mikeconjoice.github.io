---
layout: post
title: A Simple Way to Upgrade Your Standalone or Clustered ESXi Servers
date: '2017-01-04 09:58:00'
tags:
- esxi
- vmware
- upgrade
- 6-0u2
- 5-5
- 5-1
- ssh
- shell
---

 **Important Note - update your VCSA before your ESXi Servers!**

1. 

Open an SSH session to your ESXi server

2. 

Put your system into Maintenance Mode and allow the VMs to migrate or suspend

     esxcli system maintenanceMode set --enable true

3. 

Show available images from the VMware update server and select the one you require

     esxcli software sources profile list -d https://hostupdate.vmware.com/software/VUM/PRODUCTION/main/vmw-depot-index.xml | sort -r

4. 

The following line will enable http connections through the ESXi server firewall to allow the update to take place

     esxcli network firewall ruleset set -e true -r httpClient

5. 

Run the following command in the SSH session, replacing **ESXi-6.0.0-20161104001-standard** with the update package you require from step 3. This may take a while depending on download speed etc.

     esxcli software profile update -p ESXi-6.0.0-20161104001-standard -d https://hostupdate.vmware.com/software/VUM/PRODUCTION/main/vmw-depot-index.xml

6. 

Once complete, we can re-enable the firewall

     esxcli network firewall ruleset set -e false -r httpClient

7. 

Reboot your ESXi server with the `reboot` command

8. 

Once your server comes back up, we can now disable Maintenance Mode.

     esxcli system maintenanceMode set --enable true

Once complete, all you VMs should redistribute themselves (if you are running a DRS cluster) or resume and you can continue to upgrade the remaining hosts within your cluster.

<!--kg-card-end: markdown-->