/* Google Mail Notifier - Spanish Translation
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * by J.Pomeyrol (jpomeyrol@gmail.com)

SHORT DESCRIPTION FOR ADDONS.OPERA.COM (max 220):
Rápida extensión que te informa de nuevos mensajes en tus cuentas de Gmail, con la opción de archivar, marcar como leído, eliminar, etc, de manera directa. Tus cuentas serán detectadas automáticamente cuando estés identificado.

DETAILED DESCRIPTION FOR ADDONS.OPERA.COM:
Google Mail Notifier es una pequeña, simple y rápida extensión que muestra el número de mensajes no leídos en tus cuentas de Gmail. Pulsando el botón se abre un menú donde puedes ver y abrir los asuntos de los mensajes. Además, esta extensión te da la opción de abrir los enlaces de correo electrónico (mailto:) directamente con Gmail.

Características:
* Detecta automáticamente las cuentas de Gmail abiertas (sin introducir la contraseña o el nombre de usuario)
* Soporta múltiples cuentas
* Muestra todos los mensajes no leídos, los importantes o solo la bandeja de entrada
* Opción de eliminar, marcar como leído
* Opción para abrir los enlaces de correo electrónico directamente con Gmail
* Opción de ocultar los anuncio en Gmail
* Notificación de sonido, temas visuales y muchas cosas más
 
*/

// General Strings for Option-Page
lang.options_update = "Tiempo de actualización";
lang.options_update_unit = "s";
lang.options_sound = "Reproducir sonido de notificación con los mensajes nuevos";
lang.options_enable_messageactions = "Habilitar acciones de mensaje (marcar como leído, eliminar, ..)";
lang.options_mailto = "Abrir enlaces de correo electrónico (mailto) con Gmail";
lang.options_debugmode = "Habilitar mensajes de depuración";
lang.options_htmlmode = "Usar modo \"HTML básico\"-en Gmail";
lang.options_adfree = "Ocultar anuncios en Gmail"
lang.options_tooltip = "Mostrar descripción al pasar el ratón por encima de los mensajes";
lang.options_close = "Aplicar y cerrar ventana";
lang.options_refresh = "Actualizar cuentas";
lang.options_choose_theme = "Elegir tema";
lang.options_description = "Google Mail Notifier es una pequeña, simple y rápida \
extensión que muestra el número de mensajes no leídos en tu cuenta de Gmail. Pulsando el \
botón se abre un menú donde puedes ver y abrir los asuntos de los mensajes. Además, esta extensión \
te da la opción de abrir los enlaces de correo electrónico (mailto:) directamente con Gmail.";
lang.options_description_accounts = "Esta extensión detecta automáticamente tus\n\
    cuentas de Gmail abiertas. Debes estar conectado con tu cuenta de Google para ver tu bandeja de entrada. Si quieres\n\
    utilizar más de una cuenta al mismo tiempo, por favor, usa el <a id='ma_link'>Inicio de sesión en varias cuentas a la vez</a>."
lang.options_dectected_accounts = "Cuentas detectadas:";
lang.options_accounts_header = "Tus cuentas de Gmail";
lang.options_appearance_header = "Apariencia";
lang.options_other_header = "Otras opciones";
lang.options_link_operapage = "Página de extensiones de Opera"
lang.options_link_projectpage = "Página del proyecto";
lang.options_link_feedback = "Comentarios/Informe de problemas";

// Account-Labels (built-in)
lang.options_label_inbox = "Bandeja de entrada";
lang.options_label_important = "Importantes";
lang.options_label_unread = "No leídos";
lang.options_label_ignore= "Ignorar";

// Tooltips for Option-Page
lang.options_label_tooltip = "Elija dónde comprueba la extensión mensajes no leídos";

// Strings for Popup-Page (click on button)
lang.popup_open = "Abrir <strong>Gmail</strong> en una nueva pestaña";
lang.popup_compose = "Redactar mensaje";
lang.popup_pref = "Preferencias";
lang.popup_nomsg = "No hay <strong>mensajes no leídos</strong>";
lang.popup_onemsg = "Hay <strong>un mensaje no leído</strong>";
lang.popup_msg_before = "Hay <strong>";
lang.popup_msg_after = " mensajes no leídos</strong>";
lang.popup_lastupdate = "Última actualización : ";
lang.popup_error_occurred="Ha ocurrido un error";
lang.popup_from = "De: ";
lang.popup_to = "Para: ";
lang.popup_choose_account = "Elije tu cuenta: ";

// Tooltip-Strings
lang.tooltip_open = "Abrir mensaje";
lang.tooltip_mark = "Marcar como leído";
lang.tooltip_archive = "Archivar";
lang.tooltip_spam = "Marcar como spam";
lang.tooltip_delete = "Eliminar";

// Strings for Mails
lang.mail_empty_subject= "(Sin asunto)";
lang.mail_empty_body = "(Sin mensaje)";

// Error-Strings
lang.error_noActiveAccount = "<strong>No hay ninguna cuenta de Google Mail activa</strong>, " +
"<br/>por favor <a href='http://mail.google.com'>conéctate en tu cuenta de Google</a> e inténtalo otra vez.";

// Localized Links
lang.link_multisession_help = "http://support.google.com/accounts/bin/answer.py?hl=es&answer=1721977";
