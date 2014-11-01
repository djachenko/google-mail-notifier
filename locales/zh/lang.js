/* Google Mail Notifier - Traditional Chinese Translation
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * by 嚮陽 (t7yang, http://t7yang.blogspot.com)

SHORT DESCRIPTION FOR ADDONS.OPERA.COM (max 220):
一個簡單又快速的延伸套件提醒你 Gmail 帳號中有多少尚未讀取的郵件和顯示郵件的標題。你可以設定多個要檢查的帳號還有設定直接用 Gmail 來開啟郵件連結。

DETAILED DESCRIPTION FOR ADDONS.OPERA.COM:
GMail Notifier 是一個小巧、易用又快速的延伸套件，它可以讓你透過按鈕和選單的方式來顯示你的 Gmail 帳號中未讀取的郵件和郵件的標題。除此之外，這個延伸套件還可以讓你選擇自動使用 Gmail 來開啟郵件連結（mailto:）。

特色功能
* 自動偵測 GMail 帳號（無須密碼或使用者名稱）
* 支援偵測多組帳號
* 支援所有 Google 帳號
* 顯示所有未讀取訊息或收件匣的未讀訊息
* 提供已 GMail 開啟郵件連結的選項
* 提供音效提示選項
 
 */
 
var lang = new Object();

// General Strings for Option-Page
lang.options_update = "檢查間隔";
lang.options_update_unit = "秒";
lang.options_sound = "當有新的郵件時播放提示音效";
lang.options_enable_messageactions = "啟用郵件管理動作（標記為已讀取、刪除……）";
lang.options_mailto = "使用 Gmail 開啟郵件連結（mailto）";
lang.options_debugmode = "啟用偵錯訊息";
lang.options_htmlmode = "開啟 \"基本 HTML\"-模式的 GMail";
lang.options_adfree = "隱藏 Gmail 網頁中的廣告"
lang.options_tooltip = "顯示郵件內容的簡易訊息（當滑鼠停留在郵件上）";
lang.options_close = "套用並關閉視窗";
lang.options_refresh = "重新整理帳號";
lang.options_choose_theme = "選擇主題";
lang.options_description = "Google Mail Notifier 是一個小巧、易用又快速\
的延伸套件，它可以讓你透過按鈕和選單的方式來顯示你的 Gmail 帳號中未讀取的郵件和郵件的標題。\
除此之外，這個延伸套件還可以讓你選擇自動使用 Gmail 來開啟郵件連結（mailto:）。";
lang.options_description_accounts = "這個延伸套件會自動偵測你所開啟的\n\
    GMail 帳號。你必須要登入 Google 帳號才能檢視你的收件匣。如果你想要\n\
    同時偵測多個帳號，請使用<a id='ma_link'>多帳戶登入</a>.";
lang.options_dectected_accounts = "已偵測的帳號：";
lang.options_accounts_header = "你的 Gmail 帳號";
lang.options_appearance_header = "外觀";
lang.options_other_header = "其他選項";
lang.options_link_operapage = "Opera 延伸套件中心"
lang.options_link_projectpage = "專案首頁";
lang.options_link_feedback = "回饋/問題回報";

// Account-Labels (built-in)
lang.options_label_inbox = "收件匣";
lang.options_label_important = "重要郵件";
lang.options_label_unread = "未讀郵件";
lang.options_label_ignore= "忽略";

// Tooltips for Option-Page
lang.options_label_tooltip = "選擇套件要顯示哪些未讀的郵件";

// Strings for Popup-Page (click on button)
lang.popup_open = "在新的分頁開啟 <strong>GMail</strong>";
lang.popup_compose = "撰寫郵件";
lang.popup_pref = "偏好設定";
lang.popup_nomsg = "沒有<strong>未讀取的郵件</strong>";
lang.popup_onemsg = "有<strong>一封未讀取的郵件</strong>";
lang.popup_msg_before = "有<strong>";
lang.popup_msg_after = "封未讀取的郵件</strong>";
lang.popup_lastupdate = "上次檢查於：";
lang.popup_error_occurred = "發生錯誤";
lang.popup_from = "寄件者：";
lang.popup_to = "收件者：";
lang.popup_choose_account = "選擇你的帳號";

// Tooltip-Strings
lang.tooltip_open = "開啟郵件";
lang.tooltip_mark = "標記為已讀";
lang.tooltip_archive = "封存";
lang.tooltip_spam = "垃圾內容";
lang.tooltip_delete = "刪除";
// Strings for Mails
lang.mail_empty_subject= "(空的主旨)";
lang.mail_empty_body = "(空的內容)";

// Error-Strings
lang.error_noActiveAccount = "<strong>未偵測到任何 Google Mail 帳號</strong>，" +
"<br/>請登入你的 Google 帳號並重試。";

// Localized Links
lang.link_multisession_help = "http://support.google.com/accounts/bin/answer.py?hl=en&answer=1721977";