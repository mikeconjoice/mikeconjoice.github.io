---

title: Dell 12G Server Stuck at "Initializing Firmware Interfaces...
date: '2017-03-22 07:37:00'
tags:
- dell
- t320
- poweredge
- lifecycle
- firmware
---

We've recently experienced an issue with an old Dell PowerEdge T320 which was taking a long time (30-45 minutes) to boot.

If you look at the progress of the server through the iDrac, it appears to have hung during the initial POST at " **Initializing Firmware Interfaces...**"

![]( __GHOST_URL__ /content/images/2017/03/Initializing-firmware-Interfaces.JPG)

In _our_ case, the issue was related to USB drives being plugged in to the server.

A **full update of all the T320 firmware** through the lifecycle controller appears to have resolved the issue, however, whilst we were troubleshooting, we came across the following workarounds if you are unable to update the firmware for some reason.

1. Unplug the USB drives from the server until POST has completed
2. From within the **lifecycle controller** , under the **iDRAC settings** untick " **Collect hardware inventory on boot**"
<!--kg-card-end: markdown-->