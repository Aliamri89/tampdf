import type { Dictionary } from "../../dictionaries";
import type { DeepPartial } from "../../merge";

/** Translations of the cookie-consent, legal-page, advertising and watermark copy. */
export const extra: DeepPartial<Dictionary> = {
  tool: {
    adLabel: "Reklam"
  },
  workspace: {
    addWatermark: {
      previewLabelImage: "Önizleme — görsele uygulanır",
      formatsNote: "Desteklenen dosyalar: PDF, JPG, PNG ve WebP"
    },
    removeWatermark: {
      intro: "Filigran nesnesi olarak eklenen filigranları kaldırır: PDF'lerde (Adobe Acrobat, TAMPDF ve çoğu düzenleyici tarafından eklenenler) ve Word belgelerinde (Tasarım ▸ Filigran). Bir görselin piksellerine işlenmiş filigranlar görselden ayrılamaz; bu yüzden görseller desteklenmez.",
      formatsNote: "Desteklenen dosyalar: PDF ve Word (.docx)",
      noneFoundWord: "Bu belgede Word filigranı bulunamadı. Yalnızca Word'ün kendi Filigran özelliğiyle eklenen filigranlar kaldırılabilir."
    }
  },
  consent: {
    title: "Çerezler ve analiz",
    description: "Sitenin nasıl kullanıldığını anlamak için analiz çerezleri (Google Analytics ve Microsoft Clarity) kullanıyoruz. Yalnızca kabul ederseniz çalışırlar. Dosyalarınız tarayıcınızdan asla çıkmaz.",
    accept: "Kabul et",
    reject: "Reddet",
    settings: "Çerez ayarları",
    statusOn: "Analiz çerezleri şu anda açık.",
    statusOff: "Analiz çerezleri şu anda kapalı.",
    close: "Kapat"
  },
  staticPages: {
    privacyPolicy: {
      intro: "TAMPDF dosyalarınızı ve verilerinizi nasıl işler: dosyalar tarayıcınızda işlenir ve asla yüklenmez; analiz, çerez ve reklamların topladıkları; ve haklarınız.",
      updated: "Son güncelleme: 6 Kasım 2026.",
      sections: [
        {
          heading: "Genel bakış",
          text: "TAMPDF (tampdf.com), PDF'ler ve görseller için ücretsiz, tarayıcı tabanlı araçlar sunar. Bu politika neleri topladığımızı ve neleri toplamadığımızı açıklar."
        },
        {
          heading: "Dosyalarınız cihazınızda kalır",
          text: "Dosyalar tarayıcınızda yerel olarak işlenir; sunucularımıza veya üçüncü taraflara asla yüklenmez, orada saklanmaz ya da paylaşılmaz. “Google Drive'a kaydet” veya “Dropbox'a kaydet” seçeneğini seçerseniz tarayıcınız sonucu doğrudan oturum açtığınız hizmete gönderir; biz onu hiçbir zaman almayız."
        },
        {
          heading: "Otomatik toplanan bilgiler",
          text: "Sitenin nasıl kullanıldığını anlamak için sunucumuzda basit kendi sayaçlarımızı tutuyor ve yalnızca gerektiğinde onayınızla Google Analytics ile Microsoft Clarity'yi kullanıyoruz. Ziyaret edilen sayfaları, yaklaşık konumu, cihazı, tarayıcıyı, dili, yönlendiren siteyi, hangi aracı kullandığınızı ve işlemin başarılı olup olmadığını kaydedebilirler. Adınızı, e-posta adresinizi veya dosyalarınızın içeriğini asla toplamayız."
        },
        {
          heading: "Çerezler ve benzer teknolojiler",
          text: "Analiz ve reklam hizmetleri çerez bırakabilir veya yerel depolamayı kullanabilir. Çerez Politikamız bunları listeler ve nasıl kontrol edeceğinizi açıklar; seçiminizi istediğiniz zaman alt bilgideki “Çerez ayarları” ile değiştirebilirsiniz."
        },
        {
          heading: "Haklarınız",
          text: "GDPR, Birleşik Krallık GDPR'ı veya CCPA gibi yasaların geçerli olduğu yerlerde, hakkınızda tuttuğumuz kişisel verilere erişmeyi, düzeltmeyi veya silmeyi isteyebilir, işlenmesine itiraz edebilir veya sınırlandırılmasını talep edebilir, onayınızı istediğiniz zaman geri çekebilir ve yerel veri koruma otoritenize şikâyette bulunabilirsiniz. Talebiniz için İletişim sayfasını kullanın."
        },
        {
          heading: "Veri saklama",
          text: "Analiz verileri yalnızca istatistikler ve hizmeti geliştirmek için gerektiği kadar, her sağlayıcının saklama ayarlarına göre tutulur."
        },
        {
          heading: "Üçüncü taraf hizmetler ve bağlantılar",
          text: "Site, diğer şirketlerin hizmetlerine bağlantı verebilir veya onları yükleyebilir (örneğin Google, Microsoft ve Dropbox). Bunların kendi gizlilik politikaları vardır ve onlardan sorumlu değiliz."
        },
        {
          heading: "Çocuklar",
          text: "TAMPDF 13 yaşın altındaki (veya yerel yasanın gerektirdiği yerlerde 16 yaşın altındaki) çocuklara yönelik değildir ve onların kişisel bilgilerini bilerek toplamayız."
        },
        {
          heading: "Güvenlik",
          text: "Dosyalar tarayıcınızda işlenir ve bize asla gönderilmez. Site HTTPS üzerinden sunulur."
        },
        {
          heading: "Bu politikadaki değişiklikler",
          text: "Bu politikayı güncelleyebiliriz; “Son güncelleme” tarihi en yeni sürümü gösterir. Siteyi kullanmaya devam etmeniz güncellemeyi kabul ettiğiniz anlamına gelir."
        },
        {
          heading: "İletişim",
          text: "Bu politika hakkında sorularınız mı var? Lütfen İletişim sayfasını kullanın."
        }
      ]
    },
    cookiePolicy: {
      intro: "TAMPDF'nin tercihler, analiz ve reklam için kullandığı çerezler ve benzer teknolojiler ile bunları nasıl kontrol edeceğiniz.",
      updated: "Son güncelleme: 6 Kasım 2026.",
      sections: [
        {
          heading: "Çerez nedir?",
          text: "Bir web sitesinin cihazınızda sakladığı küçük metin dosyalarıdır. Yerel depolama ve piksel gibi benzer teknolojiler de aynı şekilde çalışır; bu politika hepsini kapsar."
        },
        {
          heading: "Kesinlikle gerekli depolama",
          text: "TAMPDF, açık/koyu tema ve çerez seçiminizi tarayıcınızın yerel depolamasında hatırlar. Kişisel veri içermezler ve bize asla gönderilmezler."
        },
        {
          heading: "Analiz çerezleri",
          text: "Gerektiğinde onayınızla, trafiği ölçmek ve sitenin nasıl kullanıldığını anlamak için Google Analytics 4 (_ga ve _ga_* gibi çerezler) ile Microsoft Clarity'yi (_clck ve _clsk gibi) kullanıyoruz; Clarity ayrıca anonimleştirilmiş oturum kayıtları ve ısı haritaları oluşturabilir."
        },
        {
          heading: "Seçiminizi yönetme",
          text: "Onayın gerektiği yerlerde analiz çerezlerini bannerdan kabul edebilir veya reddedebilir, fikrinizi istediğiniz zaman alt bilgideki “Çerez ayarları” ile değiştirebilirsiniz; onayı geri çekmek analiz betiklerini durdurur ve çerezlerini siler. Çerezleri tarayıcınızdan da engelleyebilirsiniz — dosyalarınız yerel olarak işlendiği için araçlar çalışmaya devam eder."
        },
        {
          heading: "Diğer kontroller",
          text: "Kişiselleştirilmiş reklamları https://adssettings.google.com veya https://www.aboutads.info/choices adresinden (Avrupa'da https://www.youronlinechoices.eu) reddedebilir, Microsoft verilerini https://account.microsoft.com/privacy adresinden yönetebilirsiniz."
        },
        {
          heading: "Değişiklikler ve iletişim",
          text: "Bu politikayı güncelleyebiliriz; yukarıdaki tarih en yeni sürümü gösterir. Sorularınız mı var? İletişim sayfasını kullanın."
        }
      ]
    },
    termsOfService: {
      sections: [
        {
          heading: "Şartların kabulü",
          text: "TAMPDF'yi kullanarak bu Hizmet Şartları'nı kabul etmiş olursunuz. Kabul etmiyorsanız lütfen araçlarımızı kullanmayın."
        },
        {
          heading: "Hizmet",
          text: "TAMPDF, PDF'ler ve görsellerle çalışmak için ücretsiz, tarayıcı tabanlı araçlar sunar. Tüm işlem tarayıcınızda yerel olarak gerçekleşir; dosyalarınız sunucularımıza asla yüklenmez."
        },
        {
          heading: "Garanti reddi",
          text: "Araçlar, doğruluk, güvenilirlik, ticari elverişlilik veya belirli bir amaca uygunluk dahil, açık ya da zımni hiçbir garanti olmaksızın “olduğu gibi” ve “mevcut olduğu şekilde” sunulur. Hatasız, kesintisiz veya her dosya, tarayıcı ya da cihazla uyumlu olacaklarını garanti etmeyiz."
        },
        {
          heading: "Sorumluluğun sınırlandırılması",
          text: "Yasaların izin verdiği azami ölçüde, TAMPDF ve sahipleri; araçları kullanmanızdan veya kullanamamanızdan kaynaklanan dolaylı, arızi, özel veya sonuç olarak ortaya çıkan zararlardan — veri kaybı, dosya bozulması veya iş kesintisi dahil — sorumlu değildir."
        },
        {
          heading: "Dosyalarınız",
          text: "Orijinallerinizin yedeğini almak ve herhangi bir çıktıya güvenmeden önce kontrol etmek sizin sorumluluğunuzdadır. İşlem tarayıcınızda gerçekleştiği için dosyalarınıza erişemez veya onları kurtaramayız."
        },
        {
          heading: "Kabul edilebilir kullanım",
          text: "TAMPDF'yi yalnızca yasal amaçlarla ve işleme hakkınız olan dosyalarla kullanın. Araçları başkalarının haklarını ihlal etmek, değiştirme hakkınız olmayan içeriklerden filigran veya koruma kaldırmak ya da web sitesinin işleyişini bozmak için kullanmayın."
        },
        {
          heading: "Üçüncü taraf hizmetler ve reklamlar",
          text: "Site reklam gösterebilir ve üçüncü taraf hizmetlere (Google AdSense, Google Drive ve Dropbox gibi) bağlantı verebilir veya onlarla entegre olabilir. Bunları biz kontrol etmeyiz; kullanımınız kendi şartlarına ve gizlilik politikalarına tabidir."
        },
        {
          heading: "Fikri mülkiyet",
          text: "TAMPDF adı, logosu, tasarımı, metinleri ve kodu TAMPDF'ye veya lisans verenlerine aittir. Dosyalarınız size ait kalır; üzerlerinde hak iddia etmeyiz."
        },
        {
          heading: "Bu şartlardaki değişiklikler",
          text: "Bu şartları zaman zaman güncelleyebiliriz. Değişiklikler yayımlandıktan sonra TAMPDF'yi kullanmaya devam etmeniz bunları kabul ettiğiniz anlamına gelir."
        }
      ]
    },
    adsDisclosure: {
      heading: "Reklamlar",
      paragraphs: [
        "Reklam göstermek için Google AdSense kullanıyoruz. Google ve iş ortakları, bu ve diğer web sitelerine yaptığınız önceki ziyaretlere göre reklam sunmak için çerezler, web işaretçileri ve benzer teknolojiler kullanan üçüncü taraf sağlayıcılardır.",
        "Kişiselleştirilmiş reklamları Google Reklam Ayarları'ndan (https://adssettings.google.com) veya https://www.aboutads.info/choices adresinden reddedebilir; Google'ın hizmetlerini kullanan sitelerden gelen verileri nasıl kullandığını https://policies.google.com/technologies/partner-sites adresinde okuyabilirsiniz.",
        "Avrupa Ekonomik Alanı, Birleşik Krallık ve İsviçre'de reklamlar yalnızca sitede gösterilen onay mesajı üzerinden verebileceğiniz veya geri çekebileceğiniz onayınızla kişiselleştirilir."
      ]
    }
  }
};
