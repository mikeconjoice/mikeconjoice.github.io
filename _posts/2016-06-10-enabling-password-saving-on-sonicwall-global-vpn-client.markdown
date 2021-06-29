---

title: Enabling Password Saving on SonicWall Global VPN Client
date: '2016-06-10 17:56:33'
tags:
- sonicwall
- vpn
---

If your users are complaining about having to type in their username and password each time they want to connect to your corporate network, there is a simple solution.

By default, when users access the **Properties** page of their VPN connection, then click on the **User Authentication tab** , they’ll see the following:

![](https://cdn-images-1.medium.com/max/800/0*kpZhUaq1X06KWnDv.png)

To enable users to persistently save their usernames and passwords for this connection, make the following changes to your Sonicwall VPN Policy.

- 

Within the SonicWall Web Interface, click on **VPN** \> **Settings**

- 

Under **VPN Policies** \> Click on the **edit** button of **WAN GroupVPN**.

- 

Click on the **Client** tab.

- 

Under the **User Name and Password Caching** section, edit the option titled: **Cache XAUTH User Name and Password on Client:**

- 

By default it is set to **“Never”**. From the drop down box, simply change it to **“Always”**

<!--kg-card-end: markdown-->