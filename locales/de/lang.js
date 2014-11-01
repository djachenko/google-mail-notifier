/* GMail Notifier - German Translation
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * by Tom Schreiber (tom@codebit.de)

SHORT DESCRIPTION FOR ADDONS.OPERA.COM (max 220):
Diese Erweiterung informiert Sie über ungelesene Nachrichten in Ihrem GMail-Konto mit der Möglichkeit diese direkt zu archivieren, zu löschen, etc. Ihre Konten werden dabei automatisch erkannt wenn Sie eingeloggt sind.

DETAILED DESCRIPTION FOR ADDONS.OPERA.COM:
Die Erweiterung "GMail Notifier" ist eine kleine und schnelle Erweiterung für Opera, welche die Anzahl der ungelesenen Nachrichten eines oder mehrerer Googlemail-Konten anzeigt. Durch einen Klick sehen sie alle wichtigen Informationen zu den Nachrichten und haben die Möglichkeit diese direkt zu löschen, zu archivieren oder als gelesen zu markieren. Darüber hinaus bietet die Erweiterung noch eine Vielzahl von weiteren Optionen um ihre tägliche Arbeit mit GMail zu erleichtern.

Merkmale:
* Erkennt automatisch die aktiven Google-Konten
* Unterstützt mehrere Konten
* Zeigt alle ungelesenen Nachrichten oder nur die aus dem Posteingang
* Möglichkeit zum direkten Archivieren, Löschen, etc.
* Option zum direkten Öffnen von Mail-Links mit Googlemail 
* Option zm Ausblenden der Werbung auf der GMail-Webseite
* Sound-Benachrichtigung, verschiedene Themen und vieles mehr
 
*/

// General Strings for Option-Page
lang.options_update         = "Aktualisierungszeit";
lang.options_update_unit    = "s";
lang.options_sound          = "Spiele Klangbenachrichtigung bei neuen Nachrichten";
lang.options_enable_messageactions = "Nachrichten-Aktionen zulassen (Archivieren, Löschen, etc.)";
lang.options_mailto         = "Öffne EMail-Links ('mailto:') mit Googlemail";
lang.options_htmlmode       = "\"Einfachen HTML\"-Modus in Google-Mail verwenden";
lang.options_adfree         = "Werbung auf der GMail-Seite ausblenden"
lang.options_tooltip        = "Nachrichtendetails beim Überfahren mit der Maus anzeigen";
lang.options_debugmode      = "Debug-Modus aktivieren";
lang.options_close          = "Einstellungen übernehmen und Fenster schließen";
lang.options_refresh        = "Konten aktualisieren";
lang.options_choose_theme   = "Design auswählen";
lang.options_description    = "GMail Notifier ist eine kleine und schnelle \n\
Erweiterung für Opera, welche die Anzahl der ungelesenen Nachrichten eines oder \n\
mehrerer Googlemail-Konten anzeigt. Durch einen Klick auf den Button können Sie \n\
zudem die Titel der Nachrichten und weitere Informationen anzeigen lassen. Außerdem \n\
haben Sie die Möglichkeit, dass Mail-Links (mailto:) direkt mit Googlemail geöffnet werden.";
lang.options_description_accounts = "Diese Erweiterung erkennt automatisch Ihre aktiven\n\
    Google-Konten. Sie müssen sich deshalb einloggen, um Ihre Nachrichten zu sehen. Falls Sie\n\
    mehrere Konten überwachen wollen, benutzen Sie bitte die offizielle Methode der <a id='ma_link'>Mehrfach-Anmeldung</a>."
lang.options_dectected_accounts = "Erkannte Konten:";
lang.options_accounts_header    = "Google Konten";
lang.options_appearance_header  = "Aussehen";
lang.options_other_header       = "Weitere Optionen";
lang.options_link_operapage     = "Opera Add-ons"
lang.options_link_projectpage   = "Projekt-Homepage";
lang.options_link_feedback      = "Feedback/Fehlerreport";

// Account-Labels (built-in)
lang.options_label_inbox = "Posteingang";
lang.options_label_important = "Wichtig";
lang.options_label_unread = "Alle Ungelesenen";
lang.options_label_ignore = "Ignorieren";

// Tooltips for Option-Page
lang.options_label_tooltip = "Wählen Sie den Ordner aus, der auf ungelesene Nachrichten geprüft werden soll";

// Strings for Popup-Page (click on button)
lang.popup_open     = "<strong>GoogleMail</strong> im neuen Tab öffnen";
lang.popup_compose  = "E-Mail schreiben";
lang.popup_pref     = "Einstellungen";
lang.popup_nomsg        = "Es gibt <strong>keine ungelesene Nachrichten</strong>";
lang.popup_onemsg       = "Es gibt <strong>eine ungelesene Nachricht</strong>";
lang.popup_msg_before   = "Es gibt <strong>";
lang.popup_msg_after    = " ungelesene Nachrichten</strong>";
lang.popup_lastupdate   = "Letztes Update : ";
lang.popup_error_occurred="Fehler ist aufgetreten";
lang.popup_from         = "Von: ";
lang.popup_to           = "An: ";
lang.popup_choose_account = "Wählen Sie Ihr Konto: ";

// Tooltip-Strings
lang.tooltip_open = "Nachricht öffnen";
lang.tooltip_mark = "Als gelesen markieren";
lang.tooltip_archive = "Archivieren";
lang.tooltip_spam = "Spam melden";
lang.tooltip_delete = "Löschen";

// Strings for Mails
lang.mail_empty_subject= "(Kein Betreff)";
lang.mail_empty_body = "(Kein Inhalt)";

// Error-Strings
lang.error_noActiveAccount = "<strong>Es wurde kein aktiver Google-Account gefunden</strong>, " +
"<br/>bitte <a href='http://mail.google.com'>loggen sie sich in ihren Account ein</a>.";

// Localized Links
lang.link_multisession_help = "http://support.google.com/accounts/bin/answer.py?hl=de&answer=1721977";
