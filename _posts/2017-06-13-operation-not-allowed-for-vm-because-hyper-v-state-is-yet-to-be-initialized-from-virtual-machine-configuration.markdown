---
layout: post
title: Hyper-V Storage Migration Failed
date: '2017-06-13 09:00:00'
tags:
- hyper-v
- powershell
---

Whilst trying to migrate the storage location of a 2012 Hyper-V VM, you may encounter the following error:

_Storage Migration “Operation not allowed for VM because Hyper-V State is yet to be initialized from Virtual Machine Configuration” (0x80070015)_

![Storage Migration “Operation not allowed for VM because Hyper-V State is yet to be initialized from Virtual Machine Configuration” (0x80070015)](assets/images/2017/06/428422-2.jpg)

To resolve the issue, simply restart the VM Management Service on the Hyper-V host by running the following PowerShell command:

`Restart-Service VMMS`

Then retry the migration and the task should complete successfully.

<!--kg-card-end: markdown-->