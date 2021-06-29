---

title: 'Windows Server Core Error - SWbemObjectEx: Invalid index'
date: '2017-01-24 09:03:07'
tags:
- powershell
- hyper-v
- server
- core
---

When trying to edit the network settings of an adapter through `sconfig`, the following error message is received when selecting the interface index required.

`C:\Windows\system32\en-US\sconfig.vbs (696, 21) SWbemObjectEx: Invalid index`

![sconfig error](http://i.imgur.com/qurZt9v.png)

After some investigation, it appears `sconfig` will throw this error if IPv6 is disabled on the selected adapter. (We tend to disable IPv6 as part of the build process internally)

To resolve this, from the PowerShell prompt, run the following:

`Enable-NetAdapterBinding -InterfaceAlias $INTERFACENAME –ComponentID ms_tcpip6`

After running this, you should be able to edit the adapter settings as normal.  
 ![](http://i.imgur.com/ybDczCM.png)  
**Note:** If you want to enable IPv6 on _all_ the adapters, you can run the following instead:

`Get-NetAdapterBinding | Enable-NetAdapterBinding –ComponentID ms_tcpip6`

<!--kg-card-end: markdown-->