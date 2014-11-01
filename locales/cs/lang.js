/* GMail Notifier - Czech Translation
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * by Matej Szendi

SHORT DESCRIPTION FOR ADDONS.OPERA.COM (max 220):
Rychlé rozšíření informující o nepřečtených e-mailech s náhledem odesílatele a předmětu na všech GMail účtech s možností jejich archivace, smazání, aj. Pokud jste přihlášeni, budou účty automaticky detekovány.

DETAILED DESCRIPTION FOR ADDONS.OPERA.COM:
GMail Notifier je malé, jednoduché a rychlé rozšíření ukazující počet nepřečtených e-mailů vedle tlačítka. Po jeho stisknutí se zobrazí náhled e-mailů s informací o odesílateli a předmětu. Navíc toto rozšíření přidává možnost otevírat e-mailové odkazy (mailto:) přímo prostřednictvím GMailu.

Features:
* Automaticka detekce GMail účtů (není vyžadováno heslo ani přihlašovací jméno)
* Podpora pro více účtů najednou
* Zobrazuje všechny nepřečtené e-maily nebo pouze z doručených
* Možnost archivovat, smazat nebo označit jako přečtené
* Možnost otevírat e-mailové odkazy přímo prostřednictvím GMail
* Možnost skrýt reklamy na webové stránce GMail
* Zvukové upozornění, výběr vzhledu a mnohem více
*/

// Init Language-Object
// Note: This is only done here, the translation-files under locales/ overrides
// this object (so we have always a fallback for new/untranslated strings)

var lang = new Object();

// General Strings for Option-Page
lang.options_update = "Kontrolovat každých";
lang.options_update_unit = "s";
lang.options_sound = "Přehrát zvuk upozornění při doručení nové zprávy";
lang.options_enable_messageactions = "Zobrazovat tlačítka u náhledu zpráv (označit za přečtené, smazat, ..)";
lang.options_mailto = "Otevírat e-mailové odkazy (mailto:) prostřednictvím GMailu";
lang.options_debugmode = "Zobrazovat ladící informace";
lang.options_htmlmode = "Použít mód \"Základní HTML\" na stránce GMail";
lang.options_adfree = "Skrýt reklamy na stránce GMail"
lang.options_tooltip = "Zobrazit místní nápovědu s informacemi o e-mailu (po najetí myší)";
lang.options_close = "Použít & zavřít okno";
lang.options_refresh = "Obnovit účty";
lang.options_choose_theme = "Motiv vzhledu";
lang.options_description = "GMail Notifier je malé, jednoduché a rychlé \
rozšíření ukazující počet nepřečtených e-mailů vedle \
tlačítka. Po jeho stisknutí se zobrazí náhled e-mailů s informací o odesílateli a předmětu. Navíc toto rozšíření \
přidává možnost otevírat e-mailové odkazy (mailto:) prostřednictvím GMailu.";
lang.options_description_accounts = "Toto rozšíření automaticky detekuje vaše\n\
    GMail účty. Pro zobrazení schránek musíte být přihlášeni k vašemu Google účtu. Pokud chcete\n\
    používat více účtů najednou, použijte prosím <a id='ma_link'>Přihlášení k více účtům najednou</a>."
lang.options_dectected_accounts = "Detekované účty:";
lang.options_accounts_header = "Vaše GMail účty";
lang.options_appearance_header = "Vzhled";
lang.options_other_header = "Další možnosti";
lang.options_link_operapage = "Rozšíření Opery"
lang.options_link_projectpage = "O projektu";
lang.options_link_feedback = "Zpětná vazba / nahlášení chyby";

// Account-Labels (built-in)
lang.options_label_inbox = "Doručené";
lang.options_label_important = "Důležité";
lang.options_label_unread = "Všechny nepřečtené";
lang.options_label_ignore= "Ignorované";

// Tooltips for Option-Page
lang.options_label_tooltip = "Kde bude rozšíření kontrolovat nepřečtené e-maily";

// Strings for Popup-Page (click on button)
lang.popup_open = "Otevřít <strong>GMail</strong> v novém listu";
lang.popup_compose = "Napsat e-mail";
lang.popup_pref = "Nastavení";
lang.popup_nomsg = "<strong>Žádné nové e-maily</strong>";
lang.popup_onemsg = "<strong>Jeden nepřečtený e-mail</strong>";
lang.popup_msg_before = "<strong>";
lang.popup_msg_after = " nepřečtených e-mailů</strong>";
lang.popup_lastupdate = "Poslední aktualizace:";
lang.popup_error_occurred="nastala chyba";
lang.popup_from = "Od: ";
lang.popup_to = "Komu: ";
lang.popup_choose_account = "Vyberte účet: ";

// Tooltip-Strings
lang.tooltip_open = "Otevřít";
lang.tooltip_mark = "Označit jako přečtené";
lang.tooltip_archive = "Archivovat";
lang.tooltip_spam = "Nahlásit spam";
lang.tooltip_delete = "Smazat";

// Strings for Mails
lang.mail_empty_subject= "(Bez předmětu)";
lang.mail_empty_body = "(Bez obsahu)";

// Error-Strings
lang.error_noActiveAccount = "<strong>Nenalezen žádný aktivní účet Google Mail</strong>, " +
    "<br/>prosím <a href='http://mail.google.com'>přihlašte se ke svému účtu Google</a> a zkuste to znovu.";

// Localized Links
lang.link_multisession_help = "http://support.google.com/accounts/bin/answer.py?hl=en&answer=1721977";
