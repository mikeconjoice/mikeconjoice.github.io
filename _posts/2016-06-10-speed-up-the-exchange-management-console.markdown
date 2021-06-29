---

title: Speed Up The Exchange Management Console
date: '2016-06-10 18:04:53'
tags:
- '2010'
- '2013'
- exchange
- microsoft
---

> BE ADVISED THAT THE FOLLOWING IS A SECURITY RISK. IF YOU WISH TO PROCEED, DISABLE IT ONLY FROM THE MACHINE WHERE YOU ARE USING THE EXCHANGE MANAGEMENT CONSOLE IN A SECURE ENVIRONMENT AND NOT ON THE EXCHANGE SERVERS THEMSELVES.

On startup, the Exchange Management Console (EMC), and the Exchange Management Shell (EMS) try to connect to the Certificate Revocation List to verify any SSL certificates in use.

By disabling this check (in a secure environment), you can significantly decrease the time it takes to load the EMC or EMS. In my testing, load up times have decreased by around 75%.

To disable the CRL check:

1. 

Within Internet Explorer, click on **Tools \> Internet Options\> Advanced**

2. 

Scroll down until you see the **Security** section

3. 

Uncheck both **“Check for publisher’s certificate revocation”** and **“Check for server certificate revocation”**

<iframe src="https://gfycat.com/ifr/ColorfulWearyChafer" frameborder="0" scrolling="no" width="640" height="480" allowfullscreen></iframe><!--kg-card-end: markdown-->