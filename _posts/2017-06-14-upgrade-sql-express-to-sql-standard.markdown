---

title: Upgrade SQL Express to SQL Standard
date: '2017-06-14 08:15:00'
tags:
- sql
- upgrade
- microsoft
- windows
---

If you'd like to upgrade a SQL Express instance to a SQL Standard instance via an in place upgrade, it's nice and easy to do through the inbuilt wizard within the SQL Setup GUI.

1. Select Edition Upgrade from the Maintenance menu  
 ![image2021-2-9-15_6_47]( __GHOST_URL__ /content/images/2021/02/image2021-2-9-15_6_47.png)
2. Click Next  
 ![Edition-upgrade-2008-R2-2]( __GHOST_URL__ /content/images/2021/02/Edition-upgrade-2008-R2-2.png)
3. Enter the SQL product key  
 ![image2021-2-9-15_9_11]( __GHOST_URL__ /content/images/2021/02/image2021-2-9-15_9_11.png)
4. Accept the license terms  
 ![image2021-2-9-15_10_31]( __GHOST_URL__ /content/images/2021/02/image2021-2-9-15_10_31.png)
5. Select the required instance (Usually MSSQLSERVER)  
 ![image2021-2-9-15_21_51]( __GHOST_URL__ /content/images/2021/02/image2021-2-9-15_21_51.png)
6. Click Next  
 ![image2021-2-9-15_23_7]( __GHOST_URL__ /content/images/2021/02/image2021-2-9-15_23_7.png)
7. Click Upgrade  
 ![image2021-2-9-15_24_7]( __GHOST_URL__ /content/images/2021/02/image2021-2-9-15_24_7.png)
8. Upgrade Complete!

- Run the following query to confirm the upgrade worked.

    Select @@version

- You should get an output stating the following. Look for the Standard Edition identifier

    Microsoft SQL Server 2008 R2 (RTM) - 10.50.1617.0 (Intel X86) Apr 22 2011 11:57:00 Copyright (c) Microsoft Corporation Standard Edition on Windows NT 5.2 <X86> (Build 3790: Service Pack 2)

<!--kg-card-end: markdown-->