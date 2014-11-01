/* Google Mail Notifier - Turkish Translation
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * by Yiğit Ateş (celeborn1@myopera.com)

SHORT DESCRIPTION FOR ADDONS.OPERA.COM (max 220):
Gmail hesabınızdaki okunmamış iletiler hakkında sizi bilgilendiren ve yeni iletilerin başlıklarını gösteren basit ve hızlı bir eklenti. Çoklu hesap kontrolü yapabilir ve e-posta bağlantılarını Gmail ile açabilirsiniz.

DETAILED DESCRIPTION FOR ADDONS.OPERA.COM:
GMail Notifier, Gmail hesabınızdaki okunmamış e-posta sayısını ve ufak bir pencerede e-posta başlıklarını gösteren basit ve hızlı bir eklentidir. Ayrıca, bu eklenti sayesinde e-posta bağlantılarına tıkladığınızda doğrudan Gmail arayüzü ile açılmasını sağlayabilirsiniz.

Özellikler:
* Tarayıcıda daha önce girilen Gmail hesaplarını otomatik olarak algılar (kullanıcı adı ve parola gerekmez)
* Çoklu hesap desteği
* Tüm Google hesap türlerini destekler
* Tüm okunmamış iletileri veya yalnızca gelen kutusundaki iletileri gösterebilir
* E-posta bağlantılarını doğrudan GMail arayüzüyle açabilme
* Seçime bağlı sesli bildirim
 
 */

// General Strings for Option-Page
lang.options_update = "Güncelleme Sıklığı";
lang.options_update_unit = "s";
lang.options_sound = "Yeni iletilerde bilgilendirme sesi çal";
lang.options_enable_messageactions = "İleti Eylemlerini Etkinleştir (okundu olarak işaretle, sil, ..)";
lang.options_mailto = "E-posta bağlantılarını Gmail arayüzünde aç";
lang.options_debugmode = "Hata Ayıklama İletilerini Etkinleştir";
lang.options_htmlmode = "Gmail'de \"Temel HTML\" Görümünü Kullan";
lang.options_adfree = "Gmail Web Sayfasındaki Reklamları Gizle"
lang.options_tooltip = "İleti Bilgileri ile Araç İpuçları Göster (fare ile üzerine gelindiğinde)";
lang.options_close = "Uygula & Pencereyi Kapat";
lang.options_refresh = "Hesapları Tazele";
lang.options_choose_theme = "Tema Seç";
lang.options_description = "Google Mail Notifier, Gmail hesabınızdaki \
okunmamış e-posta sayısını ve ufak bir pencerede e-posta başlıklarını gösteren \
basit ve hızlı bir eklentidir. Ayrıca, bu eklenti sayesinde e-posta bağlantılarına tıkladığınızda \
doğrudan Gmail arayüzü ile açılmasını sağlayabilirsiniz.";
lang.options_description_accounts = "Bu eklenti, açık Gmail hesaplarınızı otomatik olarak\n\
    algılar. Gelen kutunuzu görebilmek için Google hesabınız ile tarayıcınızda oturum açmış olmanız gerekir.\n\
    Birden fazla hesap kullanmak istiyorsanız, lütfen <a id='ma_link'>çoklu oturum yöntemi</a>ni kullanın."
lang.options_dectected_accounts = "Algılanan Hesaplar:";
lang.options_accounts_header = "GMail Hesaplarınız";
lang.options_appearance_header = "Görünüm";
lang.options_other_header = "Diğer Seçenekler";
lang.options_link_operapage = "Opera Eklenti Sayfası"
lang.options_link_projectpage = "Proje Ana Sayfası";
lang.options_link_feedback = "Geri Bildirim/Hata Raporlama";

// Account-Labels (built-in)
lang.options_label_inbox = "Gelen Kutusu";
lang.options_label_important = "Önemli";
lang.options_label_unread = "tüm okunmamışlar";
lang.options_label_ignore= "Yoksay";

// Tooltips for Option-Page
lang.options_label_tooltip = "Eklentinin okunmamış iletiler için hangi konumu denetleyeceğini seçin";

// Strings for Popup-Page (click on button)
lang.popup_open = "<strong>GMail</strong>'i yeni sekmede aç";
lang.popup_compose = "E-Posta Yaz";
lang.popup_pref = "Tercihler";
lang.popup_nomsg = "<strong>Okunmamış ileti</strong> yok";
lang.popup_onemsg = "<strong>bir okunmamış ileti</strong> var";
lang.popup_msg_before = " <strong>";
lang.popup_msg_after = " okunmamış ileti</strong>";
lang.popup_lastupdate = "Son Güncelleme : ";
lang.popup_error_occurred="hata oluştu";
lang.popup_from = "Kimden: ";
lang.popup_to = "Kime: ";
lang.popup_choose_account = "Hesabınızı seçin: ";

// Tooltip-Strings
lang.tooltip_open = "İletiyi aç";
lang.tooltip_mark = "Okundu olarak işaretle";
lang.tooltip_archive = "Arşivle";
lang.tooltip_spam = "İstenmeyen olarak bildir";
lang.tooltip_delete = "Sil";

// Strings for Mails
lang.mail_empty_subject= "(Boş Konu)";
lang.mail_empty_body = "(Boş Gövde)";

// Error-Strings
lang.error_noActiveAccount = "<strong>Etkin bir Gmail hesabı yok</strong>, " +
"<br/>lütfen <a href='http://mail.google.com'>Google hesabınız ile oturum açın</a> ve yeniden deneyin.";

// Localized Links
lang.link_multisession_help = "http://support.google.com/accounts/bin/answer.py?hl=tr&hlrm=en&answer=1721977";