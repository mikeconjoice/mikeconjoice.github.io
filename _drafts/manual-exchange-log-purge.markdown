---
layout: post
title: Manual Exchange Log Purge
---

Open Command prompt on selected Exchange server

Run Diskshadow

1. Add volume d:
2. (optional, add one line for each additional drive to include) Add volume e:
3. Begin Backup
4. Create
5. End Backup

At this step you should notice the following events in the application log indicating that the backup was indeed successful and logs will now be deleted.

- ESE Event ID 2005
- ESE – Event ID 2005 – Starting a Full Shadow Copy Backup
- MSExchangeIS Event ID 9811
- MSexchangeIS – Exchange VSS Writer preparation.
- ESE Event ID 224 - Logs being Purged
- ESE Event ID 224 – Logs are now purged
- MSExchangeIS Event ID 9780 - Backup complete
- MSExchangeIS Event ID 9780 – Backup is now complete.
<!--kg-card-end: markdown-->