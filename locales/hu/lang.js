/* Google Mail Notifier - Hungarian Translation
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * by Róbert Tóth (nekomajin42@gmail.com)

SHORT DESCRIPTION FOR ADDONS.OPERA.COM (max 220):
Egyszerû és gyors kiegészítõ, ami értesít, ha új üzeneted érkezik a GMail fiókodba. Több fiókot is képes kezelni, és beállítható az is, hogy az email linkek (mailto:) közvetlenül a GMailben nyíljanak meg.

DETAILED DESCRIPTION FOR ADDONS.OPERA.COM:
A GMail Notifier egy kis méretû, egyszerû és gyors kiegészítõ, ami egy eszköztáron elhelyezett gomb segítségével értesít, ha új leveled érkezik a GMail fiókjaidba. A gombon mutatja az olvasatlan levelek számát, a lenyíló panelen pedig kilistázza a levelek tárgyát. Ezen túl egy olyan opciót is tartalmaz, amivel az email linkek (mailto:) közvetlenül a GMailben nyílnak meg.
 
Funkciók:
* Automatikusan felismeri a GMail fiókokat, amikbe be vagy jelentkezve. (Nem kell felhasználónevet és jelszót megadni!)
* Támogatja a Google többfiókos bejelentkezését.
* Minden Google fiókot kezelni tud.
* Beállítható, hogy minden olvasatlan levelet jelezzen, vagy csak a "beérkezõ levelek" mappában lévõket.
* Beállítható, hogy az email címre mutató linkek (mailto:) közvetlenül a GMailben nyíljanak meg.
* Beállítható, hogy az értesítéskor hangjelzést is adjon.
* Beállítható, hogy a fiók "alap HTML" módban nyíljon meg.
* Beállítható, hogy a fiókban ne jelenjenek meg a reklámok.
* A lenyíló panelen alapvetõ mûveleteket is el tud végezni a levelekkel (olvasottnak jelölés, törlés, stb).
 
*/

// Init Language-Object
// Note: This is only done here, the translation-files under locales/ overrides
// this object (so we have always a fallback for new/untranslated strings)

var lang = new Object();

// General Strings for Option-Page
lang.options_update = "Frissítési idõköz";
lang.options_update_unit = "másodperc";
lang.options_sound = "Hangjelzés új üzenet érkezésekor";
lang.options_enable_messageactions = "Levél mûveletek engedélyezése (Megjelölés olvasottként, törlés, stb)";
lang.options_mailto = "Az email címekre mutató linkek (mailto:) megnyitása GMailben";
lang.options_debugmode = "Debug-üzenetek engedélyezése";
lang.options_htmlmode = "\"Alap HTML nézet\" használata";
lang.options_adfree = "Hirdetések elrejtése a GMail oldalon"
lang.options_tooltip = "Levél információk mutatása, ha az egeret az üzenet fölé viszem";
lang.options_close = "Mentés és a beállítások bezárása";
lang.options_refresh = "Fiókok frissítése";
lang.options_choose_theme = "Megjelenés kiválasztása:";
lang.options_description = "A Google Mail Notifier egy kis méretû, egyszerû és gyors kiegészítõ, \
ami egy eszköztáron elhelyezett gomb segítségével értesít, ha új leveled érkezik a GMail fiókodba. \
A gombon mutatja az olvasatlan levelek számát, a lenyíló panelen pedig kilistázza a levelek tárgyát, \
és megjelenít néhány alapvetõ levél mûveletet. \
Ezen túl olyan opciókat is tartalmaz, mint például az email linkek (mailto:) közvetlen megnyitása a GMailben, \
a hangjelzés új üzenet érkezésekor vagy a fiók HTML módban történõ betöltése.";
lang.options_description_accounts = "A kiegészítõ automatikusan felismeri azokat a GMail fiókokat, amibe be vagy jelentkezve. \
A kiegészítõ mûködéséhez tehát be kell jelentkezned a GMail fiókodba. \
Ha egyszerre több fiókba is szeretnél bejelentkezni, akkor használd a <a id='ma_link'>több fiókos bejelentkezést</a>!";
lang.options_dectected_accounts = "Észlelt fiókok:";
lang.options_accounts_header = "GMail fiókjaid";
lang.options_appearance_header = "Megjelenés";
lang.options_other_header = "További beállítások";
lang.options_link_operapage = "Opera Kiegészítõ Oldal";
lang.options_link_projectpage = "Projekt Weboldal";
lang.options_link_feedback = "Visszajelzés / Hibajelentés";

// Account-Labels (built-in)
lang.options_label_inbox = "Beérkezõ levelek";
lang.options_label_important = "Fontos";
lang.options_label_unread = "Minden olvasatlan";
lang.options_label_ignore= "Fiók figyelmen kívül hagyása";

// Tooltips for Option-Page
lang.options_label_tooltip = "Állítsd be, hogy milyen üzenetekrõl kérsz értesítést!";

// Strings for Popup-Page (click on button)
lang.popup_open = "<strong>GMail</strong> megnyitása új fülön";
lang.popup_compose = "Levél írása";
lang.popup_pref = "Beállítások";
lang.popup_nomsg = "<strong>Nincs</strong> olvasatlan leveled.";
lang.popup_onemsg = "<strong>1</strong> olvasatlan leveled van.";
lang.popup_msg_before = "<strong>";
lang.popup_msg_after = "</strong> olvasatlan leveled van.";
lang.popup_lastupdate = "Utolsó frissítés: ";
lang.popup_error_occurred = "Hiba történt!";
lang.popup_from = "Feladó: ";
lang.popup_to = "Címzett: ";
lang.popup_choose_account = "Válassz fiókot: ";

// Tooltip-Strings
lang.tooltip_open = "Levél megnyitása";
lang.tooltip_mark = "Megjelölés olvasottként";
lang.tooltip_archive = "Archiválás";
lang.tooltip_spam = "Spam bejelentése";
lang.tooltip_delete = "Törlés";

// Strings for Mails
lang.mail_empty_subject= "(Nincs megadva tárgy.)";
lang.mail_empty_body = "(A levél nem tartalmaz szöveget.)";

// Error-Strings
lang.error_noActiveAccount = "<strong>Nem észlelek aktív GMail fiókot.</strong>" +
"<br/><a href='http://mail.google.com'>Jelentkezz be a GMail fiókodba</a>, és próbáld újra!";

// Localized Links
lang.link_multisession_help = "http://support.google.com/accounts/bin/answer.py?hl=hu&answer=1721977";