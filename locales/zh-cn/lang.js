/* GMail Notifier - Simplified Chinese Translation
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * by PUY (yangfei.pu@gmail.com)

SHORT DESCRIPTION FOR ADDONS.OPERA.COM (max 220):
一款快捷的扩展工具，用于通知你 Gmail 邮箱中有多少未读邮件并可以设定直接对邮件进行存档、删除等操作。该扩展还可以自动检测已登录的 Gmail 帐户。

DETAILED DESCRIPTION FOR ADDONS.OPERA.COM:
GMail Notifier 是一款小巧、简单又快捷的扩展工具，可在界面按钮上显示 Gmail 邮箱中的未读邮件数目，并可在按钮菜单里显示未读邮件标题。此外该扩展还可以设定直接使用 Gmail 来打开 mailto 链接。

特色功能：
* 自动检测已登录的 Gmail 帐户（无需密码或用户名）
* 支持多个帐户登录
* 显示所有未读邮件，或仅显示收件箱中的未读邮件
* 可设定对邮件进行存档、删除或标记为已读等
* 可设定直接使用 Gmail 来打开 mailto 链接
* 可设定隐藏 Gmail 页面上的广告
* 提供新邮件声音提醒、可选择外观主题等
 
 */

// Init Language-Object
// Note: This is only done here, the translation-files under locales/ overrides
// this object (so we have always a fallback for new/untranslated strings)

var lang = new Object();

// General Strings for Option-Page
lang.options_update = "收信间隔";
lang.options_update_unit = "秒";
lang.options_sound = "有新邮件时播放声音提醒";
lang.options_enable_messageactions = "启用邮件管理功能（标记为已读、删除……）";
lang.options_mailto = "使用 Gmail 打开 mailto 链接";
lang.options_debugmode = "启用调试信息";
lang.options_htmlmode = "使用 Gmail \"基本 HTML\" 模式";
lang.options_adfree = "隐藏 Gmail 页面上的广告"
lang.options_tooltip = "显示邮件简要信息（鼠标在邮件上时）";
lang.options_close = "应用并关闭窗口";
lang.options_refresh = "重新整理帐户";
lang.options_choose_theme = "选择主题";
lang.options_description = "GMail Notifier 是一款小巧、简单又快捷\
的扩展工具，可在界面按钮上显示 Gmail 邮箱中的未读邮件数目，\
并可在按钮菜单里显示未读邮件标题。此外本扩展\
还可以设定直接使用 Gmail 来打开 mailto 链接。";
lang.options_description_accounts = "本扩展可自动检测你已\n\
    登录的 Gmail 帐户。必须登录 Gmail 帐户后才能查看收件箱。如果要\n\
    同时登录多个帐户，请使用<a id='ma_link'>多帐户登录方式</a>。"
lang.options_dectected_accounts = "已检测到的帐户：";
lang.options_accounts_header = "Gmail 帐户";
lang.options_appearance_header = "外观";
lang.options_other_header = "其他选项";
lang.options_link_operapage = "Opera 插件网站"
lang.options_link_projectpage = "本项目主页";
lang.options_link_feedback = "反馈/问题报告";

// Account-Labels (built-in)
lang.options_label_inbox = "收件箱";
lang.options_label_important = "重要邮件";
lang.options_label_unread = "未读邮件";
lang.options_label_ignore= "忽略";

// Tooltips for Option-Page
lang.options_label_tooltip = "选择要显示哪些未读的邮件";

// Strings for Popup-Page (click on button)
lang.popup_open = "在新标签页中打开 <strong>Gmail</strong>";
lang.popup_compose = "写邮件";
lang.popup_pref = "偏好设置";
lang.popup_nomsg = "没有 <strong>未读邮件</strong>";
lang.popup_onemsg = "有 <strong>1 封未读邮件</strong>";
lang.popup_msg_before = "有 <strong>";
lang.popup_msg_after = " 封未读邮件</strong>";
lang.popup_lastupdate = "上次检查时间：";
lang.popup_error_occurred="发生错误";
lang.popup_from = "发件人：";
lang.popup_to = "收件人：";
lang.popup_choose_account = "选择帐户：";

// Tooltip-Strings
lang.tooltip_open = "打开邮件";
lang.tooltip_mark = "标记为已读";
lang.tooltip_archive = "存档";
lang.tooltip_spam = "垃圾邮件";
lang.tooltip_delete = "删除";

// Strings for Mails
lang.mail_empty_subject= "（标题为空）";
lang.mail_empty_body = "（内容为空）";

// Error-Strings
lang.error_noActiveAccount = "<strong>未检测到有已登录的 Gmail 帐户</strong>，" +
"<br/>请<a href='http://mail.google.com'>登录你的 Google 帐户</a>并重试。";

// Localized Links
lang.link_multisession_help = "http://support.google.com/accounts/bin/answer.py?hl=en&answer=1721977";