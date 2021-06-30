---
layout: post
title: Maximum number of Exchange accounts in an Outlook profile
date: '2016-06-10 17:58:45'
tags:
- '2010'
- '2013'
- exchange
- microsoft
- outlook
---

Beginning with Microsoft Outlook 2010, you can open more than one Exchange account in your Outlook profile.

Microsoft Outlook 2010 supports up to **15** accounts in your profiles. But, by default it is limited to **5** accounts.

In Outlook 2013 the default is **10** accounts and the maximum allowed is **9999** accounts.

If the administrator wants to allow more (or less) than the default number of accounts, he or she need to edit the registry or apply a group policy.

The relevant key for either Outlook 2010 or Outlook 2013 is:

`HKEY_CURRENT_USER\Software\Policies\Microsoft\Exchange
DWORD: MaxNumExchange`

_Outlook 2010 values_: a number between **1** and **15**

_Outlook 2013 values_: a number between **1** and **9999**

In the Group policy editor, the setting is under **Outlook \> Account Settings\> Exchange \> Set maximum number of accounts per profile**

<!--kg-card-end: markdown-->