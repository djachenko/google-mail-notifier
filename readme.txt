~~~ Codebit ~~~~~~~~~~~~~~~~~~~~~~~
GMail Notifier (an Opera-Extension)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Website: http://codebit.de/oex/google-mail
Author : Tom Schreiber <tom.schreiber@codebit.de>

HISTORY
v3.1.4 (CURRENT STABLE)
FIXED: Google Accounts are not detected proberly

v3.1.3 
Add Simplified Chinese translation (thanks to Yangfei Pu)

v3.1.2 
Add Czech Translation (thanks to Matej Szendi)
FIXED: mailto don't work properly on Gmail-Site

v3.1.1 
Updated Russian Translation
FIXED: With disabled "Message Actions", Message-Links don't work anymore
FIXED: Error in mailto.js, when there is now HTML-Body

v3.1 
Supporting Mail-Actions: mark as read, archive, mark as spam, delete mail
Option to use Gmail-"Basic-Html"-Mode for all links
Option to ignore new mails for specific Accounts
Option to change notification-sound
Option to preview notification-sound
Option to hide gmail-ads
Less script-overhead for gmail-mailto-links
Add Spanish Translation (thanks to J.Pomeyrol)
Improved Tooltips
FIXED: Always use https-links for new tabs
 
v3.0.6
FIXED: Multi-Accounts are not detected properly
FIXED: Message-counter shows wrongs number (still appears with labels 'important' and 'unread')

v3.0.5
FIXED: Deadlock when Mail-Feed-Request is lost

v3.0.4
FIXED: Reports there is no account, if gmail wasn't opened directly yet

v3.0.3
Improved Multi-Account-Handling
Option to get just important unread Messages (per Account)
FIXED: Extension crashes on empty subject or content
FIXED: No Standard-Theme is set at first start
FIXED: "all unread"-option is executed for wrong Account
FIXED: Red counter dont appear, while there are messages

v3.0.2
FIXED: Update-Intervall is not saved properly
FIXED: Error when connection is lost
FIXED: "all unread"-Option is not saved properly

v3.0.1
Using unmodified version of jquery

v3.0
Almost complete code-rewrite (uses own API named 'Grake')
No Authentication needed, detects active GMail-Accounts
New Debugging-System
Some Design-Changes
Fixed some small bugs
Add Turkish Translation(thanks to Yiğit Ateş)
Add Hungarian Translation (thanks to Róbert Tóth)
Uncompleted Russian/Chinese-Translation (need Translators)

v2.4 (CURRENT STABLE WITH OAUTH)
rename to "GMail Notfier with OAuth"
some design-backports from 3.x 
bug-fix-backports from 3.x 

v2.3
Fix wrong message count (thanks to Victor Grischenko)
Serveral text fixes
Some fixes for Opera 12.0

v2.2
Add missing input-field for update-interval in russian localisation
Add Chinese Translation (thanks to 嚮陽)
Add Polish Translation (thanks to Michał Góral)

v2.1
Removed xss-vulnerability
Removed bug when user see no  field for request-code

v2.0
Support up to 5 Accounts
New messages are at top of list
Show Tooltip with Sender-Mail and Subject-Extract in Popup-Menu
Option per Account to show all unread mails or only inbox
Add Rusian-Tranlation (thanks to Роман Каштанов)
Option to give a Update-Intervall manually
Option to open "mailto"-links with GMail
Recognize when paste verfification-code from clipboard to input-field

v1.2
Support of OAuth for Authentification (login/pass removed)
German Translation
New Icons
Auto-Refresh when open button-menu

v1.1
Add optional sound notification
New Icon for better integration in default opera skin
When mail title is too long to display in 2 lines, end it with ellipsis

v1.0
Initial Release

THANKS TO
Roman Kashtanov for russian translation
嚮陽 for Chinese translation
Michał Góral for Polish translation
Patryk Obara for improved icon, error-reporting and fixes
The Mysitemyway Design Team (http://icons.mysitemyway.com/) for the gmail-icon
PC.de (http://pc.de/icons/) for the other icons
