---
title: Send a Notification to Microsoft Teams via PowerShell
date: '2018-05-25 19:02:33'
tags:
- powershell
- teams
- microsoft
- scripts
---

> If you're not interested in all the words below, you can jump straight to the script here - [https://github.com/mikeconjoice/Scripts](https://github.com/mikeconjoice/Scripts)

Having recently moved internally, to Microsoft Teams from Slack, we needed to adapt our scripts and monitoring solutions to send our alerts to our new endpoint.

I've created the following small PowerShell function to do all the payload compliation in the background to reduce the work required on your side to just the one simple command!

`Send-toTeams`

Before using the function, you'll need to create a webhook connector in the Microsoft Teams channel as follows.

1. 

Select the required channel and go to the **Connectors** option  
 ![01-3](/assets/images/2018/05/01-3.png)

2. 

Click **Configure** on the **Incoming Webhook** connector  
 ![02-1](/assets/images/2018/05/02-1.png)

3. 

Give the Webhook a name (and an optional image), and click **Create**  
 ![03](/assets/images/2018/05/03.png)

4. 

Copy the URL created to the clipboard and click **Done**  
 ![04](/assets/images/2018/05/04.png)

5. 

The URL will be outputted in the following format (which I have stored in the `$channel` variable here)  
 ![05](/assets/images/2018/05/05.png)

6. 

Run the function with the required paramaters ( **-webhook** , and **-text** ) as described in the script  
 ![SlightLimpChanticleer-max-14mb](/assets/images/2018/05/SlightLimpChanticleer-max-14mb.gif)

7. 

Check your Microsoft Teams channel and all being well you should see your message!  
 ![06](/assets/images/2018/05/06.png)

The code is listed below aswell as being available on my GitHub repo - [https://github.com/mikeconjoice/Scripts](https://github.com/mikeconjoice/Scripts)

<script src="https://gist.github.com/mikeconjoice/4f1da3b2d051c9328433e31271fc6583.js"></script><!--kg-card-end: markdown-->