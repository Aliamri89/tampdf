import type { Dictionary } from "../dictionaries";
import type { DeepPartial } from "../merge";

export const tr: DeepPartial<Dictionary> = {
  header: { languageMenu: { ariaLabel: "Dili değiştir" } },
  breadcrumb: { home: "Ana Sayfa" },
  tool: {
    processedClient: "Tarayıcınızda işlenir — dosyalar asla yüklenmez",
    faqHeading: "Sıkça sorulan sorular",
    relatedHeading: "İlgili araçlar",
    metaTitleSuffix: "— Ücretsiz Çevrimiçi Araç",
  },
  article: {
    tocHeading: "İçindekiler",
    readingTime: "{minutes} dk okuma",
    readingTimeOne: "1 dk okuma",
    readingTimeTwo: "2 dk okuma",
    published: "{date} tarihinde yayımlandı",
    updated: "{date} tarihinde güncellendi",
    relatedHeading: "İlgili yazılar",
    previousArticle: "Önceki",
    nextArticle: "Sonraki",
    ctaDefaultHeading: "{tool} aracını denemeye hazır mısınız?",
    ctaCompressPdfButtonLabel: "PDF'yi Ücretsiz Sıkıştır",
  },
  card: { comingSoon: "Yakında" },
  home: {
    heroHighlight: "PDF",
    heroSubtitle: "Ücretsiz, hızlı ve kullanımı kolay PDF araçları",
    toolPicker: {
      trigger: "Bir PDF Aracı Seç",
      ariaLabel: "PDF araçları menüsü",
      loadMore: "Daha fazla araç",
      allShown: "Tüm araçlar gösteriliyor",
    },
    features: { devices: "Her cihazda çalışır", fast: "Hızlı", secure: "Güvenli" },
  },
  footer: {
    rights: "Tüm hakları saklıdır.",
    privacyNote: "Dosyalar güvenli şekilde işlenir ve gerekenden daha uzun süre saklanmaz.",
    moreCount: "+{count} daha",
    company: "Şirket",
    legal: "Yasal",
    aboutUs: "Hakkımızda",
    contactUs: "Bize Ulaşın",
    blog: "Blog",
    faq: "Sıkça sorulan sorular",
    privacyPolicy: "Gizlilik Politikası",
    termsOfService: "Kullanım Şartları",
    cookiePolicy: "Çerez Politikası",
  },
  staticPages: {
    note: "Bu sayfa geçicidir — tam içerik yakında yayınlanacaktır.",
    aboutUs: {
      title: "Hakkımızda",
      intro:
        "TAMPDF, günlük dosya işlerini — PDF, görsel ve belgeleri birleştirme, bölme, sıkıştırma ve dönüştürme — hızlı, özel ve zahmetsiz hale getirmek için oluşturulmuş ücretsiz bir çevrimiçi araç setidir.",
    },
    contactUs: {
      title: "Bize Ulaşın",
      intro: "Bir sorunuz mu var, bir hata mı buldunuz ya da yeni bir araç mı önermek istiyorsunuz? Sizden haber almak isteriz.",
    },
    blog: { title: "Blog", intro: "Dosya biçimleri, üretkenlik ipuçları ve ürün güncellemeleri hakkında yazılar hazırlıyoruz." },
    faq: {
      title: "Sıkça sorulan sorular",
      intro: "TAMPDF hakkında genel yanıtlar yakında burada yayınlanacak. Bu arada her aracın kendi sıkça sorulan soruları vardır.",
    },
    privacyPolicy: {
      title: "Gizlilik Politikası",
      intro: "TAMPDF'nin dosyalarınızı ve verilerinizi nasıl işlediğini tam olarak açıklayan gizlilik politikamız tamamlanmak üzere ve yakında burada yayınlanacaktır.",
    },
    termsOfService: {
      title: "Kullanım Şartları",
      intro: "Bu Kullanım Şartları, garanti reddi ve sorumluluk sınırlamamız dahil olmak üzere TAMPDF'nin araçlarını ve web sitesini kullanımınızı düzenler.",
    },
    cookiePolicy: {
      title: "Çerez Politikası",
      intro: "TAMPDF'nin kullandığı çerezler ve benzer teknolojiler hakkındaki ayrıntılar yakında burada yayınlanacaktır.",
    },
  },
  dropzone: {
    browse: "veya göz atmak için tıklayın",
    defaultLabel: "Dosyanızı buraya sürükleyip bırakın",
    unsupportedType: "{name} desteklenen bir dosya türü değil ve atlandı.",
    unsupportedTypePlural: "{count} dosya desteklenen bir türde değildi ve atlandı.",
    tooLarge: "{name} çok büyük (maks. {max}) ve atlandı.",
    tooLargePlural: "{count} dosya çok büyüktü (maks. {max}) ve atlandı.",
    maxFilesReached: "Bu araç için izin verilen maksimum {max} dosyayı zaten eklediniz.",
    maxFilesExceeded: "Bu araç bir seferde en fazla {max} dosyaya izin verir, bu yüzden dosyalarınızdan yalnızca {added} tanesi eklendi.",
  },
  fileList: { moveUp: "Yukarı taşı", moveDown: "Aşağı taşı", remove: "{name} kaldır" },
  result: {
    ready: "Dosyanız hazır",
    download: "İndir",
    startOver: "Baştan başla",
    smaller: "daha küçük",
    originalSize: "Orijinal boyut",
    newSize: "Yeni boyut",
    reducedBy: "Azaltma oranı",
    spaceSaved: "Kazanılan alan",
  },
  notFound: {
    title: "Sayfa bulunamadı",
    description: "Aradığınız sayfa mevcut değil veya taşınmış olabilir.",
    cta: "Ana sayfaya dön",
  },
};
