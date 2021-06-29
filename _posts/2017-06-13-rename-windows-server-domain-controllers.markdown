---

title: Rename Windows Server Domain Controllers
date: '2017-06-13 12:15:00'
tags:
- windows
---

To rename a DC with the name from SERVER-DC01 in the domain.local domain to SERVER-DC02 follow the next steps:

1. 

Open Command Prompt as an Administrator and type:  
`NETDOM computername SERVER-DC01.domain.local /add:SERVER-DC02.domain.local`

2. 

Ensure the computer account updates and DNS registrations are completed, then type:  
`NETDOM computername SERVER-DC01.domain.local /makeprimary:SERVER-DC02.domain.local`

3. 

Restart the computer.

4. 

From the command prompt, type:  
`NETDOM computername SERVER-DC02.domain.local /remove:SERVER-DC01.domain.local`

_Make sure that the changes have successfully been replicated to all remaining DCs._

<!--kg-card-end: markdown-->