/* Google Mail Notifier - Russian Translation
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * by Роман Каштанов, Dmitry Ryabov

SHORT DESCRIPTION FOR ADDONS.OPERA.COM (max 220):
Простое и быстрое расширение, которое сообщает вам количество непрочитанных сообщений в ящике Gmail и показывает их заголовки.

DETAILED DESCRIPTION FOR ADDONS.OPERA.COM:
Простое и быстрое расширение? которое сообщает вам количество непрочитанных сообщений в ящике Gmail и показывает их заголовки. Расширение может работать с несколькими аккаунтами и позволяет открывать ссылки mailto: с помощью Gmail.

Возможности
* Автоматически определяет учётную запись GMail (не требует ввода имени и пароля)
* Поддержка нескольких учётных записей
* Показ всех непрочитанных писем или только входящих
* Возможность отметить письмо как прочитанное, удалить или архивировать
* Возможность открыть письмо в GMail одним кликом
* Возможность скрыть рекламу на странице GMail
* Звуковое оповещение, темы и многое другое
 
 */


// General Strings for Option-Page
lang.options_update = "Интервал проверки";
lang.options_update_unit = "секунд";
lang.options_sound = "Звуковой сигнал при получении нового сообщения.";
lang.options_enable_messageactions = "Добавть действия с письмом (отметить как прочитанное, удалить ..)";
lang.options_mailto = "Открывать ссылки mailto: при помощи GMail";
lang.options_debugmode = "Включить отладочные сообщения";
lang.options_htmlmode = "Включить режим упрощённого HTML в GMail";
lang.options_adfree = "Убрать рекламу в GMail"
lang.options_tooltip = "Показывать всплывающее окно с подробностями письма при наведении";
lang.options_close = "Применить и закрыть";
lang.options_refresh = "Обновить аккаунты";
lang.options_choose_theme = "Выбрать тему";
lang.options_description = "GMail Notifier это маленькое, простое и быстрое \
расширение, которое показывает количество непрочитанных сообщений в вашем почтовом \
ящике Gmail при помощи значка на тулбаре и их заголовки во всплывающем окне.";
lang.options_description_accounts = "Это расширение автоматически определяет\n\
    ваши учётные записи GMail. Вы должны войти в ваш Google аккаунт, чтобы видеть сообщения. Если вы хотите\n\
    использовать несколько учётных записей одновременно, пожалуйста, используйте <a id='ma_link'>данный метод</a>."

lang.options_dectected_accounts = "Найденные аккаунты:";
lang.options_accounts_header = "Аккаунт(ы) GMail";
lang.options_appearance_header = "Внешний вид";
lang.options_other_header = "Дополнительные настройки";
lang.options_link_operapage = "Страница Opera Extension"
lang.options_link_projectpage = "Страница проекта";
lang.options_link_feedback = "Feedback/Сообщения об ошибках";

// Account-Labels (built-in)
lang.options_label_inbox = "Входящие";
lang.options_label_important = "Важные";
lang.options_label_unread = "Все непрочитанные";
lang.options_label_ignore= "Не проверять";

// Tooltips for Option-Page
lang.options_label_tooltip = "Выберите, из какой папки отображать сообщения";

// Strings for Popup-Page (click on button)
lang.popup_open = "Открыть <strong>GMail</strong> в новой вкладке";
lang.popup_compose = "Написать письмо";
lang.popup_pref = "Настройки";
lang.popup_nomsg = "У вас <strong>нет непрочитанных сообщений</strong>";
lang.popup_onemsg = "У вас <strong>одно непрочитанное сообщение</strong>";
lang.popup_msg_before = "У вас <strong>";
lang.popup_msg_after = " непрочитанных сообщений</strong>";
lang.popup_lastupdate = "Последнее обновление: ";
lang.popup_error_occurred="произошла ошибка";
lang.popup_from = "От: ";
lang.popup_to = "Кому: ";
lang.popup_choose_account = "Выбрать аккаунт: ";

// Tooltip-Strings
lang.tooltip_open = "Открыть";
lang.tooltip_mark = "Отметить как прочитанное";
lang.tooltip_archive = "Архивировать";
lang.tooltip_spam = "В спам";
lang.tooltip_delete = "Удалить";

// Strings for Mails
lang.mail_empty_subject= "(без темы)";
lang.mail_empty_body = "(без текста)";

// Error-Strings
lang.error_noActiveAccount = "<strong>Нет активных аккаунтов Google Mail</strong>, " +
"<br/>пожалуйста <a href='http://mail.google.com'>войдите в вашу учётную запись GMail</a> и попробуйте ещё раз.";

// Localized Links
lang.link_multisession_help = "http://support.google.com/accounts/bin/answer.py?hl=ru&answer=1721977";
