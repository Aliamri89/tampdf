import type { Dictionary } from "../dictionaries";
import type { DeepPartial } from "../merge";

export const hi: DeepPartial<Dictionary> = {
  header: { languageMenu: { ariaLabel: "भाषा बदलें" } },
  breadcrumb: { home: "होम" },
  tool: {
    processedClient: "आपके ब्राउज़र में ही प्रोसेस होता है — फ़ाइलें कभी अपलोड नहीं होतीं",
    faqHeading: "अक्सर पूछे जाने वाले सवाल",
    relatedHeading: "संबंधित टूल",
    metaTitleSuffix: "— मुफ़्त ऑनलाइन टूल",
  },
  article: {
    tocHeading: "विषय-सूची",
    readingTime: "{minutes} मिनट का पठन",
    readingTimeOne: "1 मिनट का पठन",
    readingTimeTwo: "2 मिनट का पठन",
    published: "{date} को प्रकाशित",
    updated: "{date} को अपडेट किया गया",
    relatedHeading: "संबंधित लेख",
    previousArticle: "पिछला",
    nextArticle: "अगला",
    ctaDefaultHeading: "{tool} आज़माने के लिए तैयार हैं?",
    ctaCompressPdfButtonLabel: "PDF मुफ़्त में कंप्रेस करें",
  },
  card: { comingSoon: "जल्द आ रहा है" },
  home: {
    heroHighlight: "PDF",
    heroSubtitle: "मुफ़्त, तेज़ और उपयोग में आसान PDF टूल",
    toolPicker: {
      trigger: "एक PDF टूल चुनें",
      ariaLabel: "PDF टूल मेनू",
      loadMore: "और टूल",
      allShown: "सभी टूल दिखाए जा चुके हैं",
    },
    features: { devices: "हर डिवाइस पर काम करता है", fast: "तेज़", secure: "सुरक्षित" },
  },
  footer: {
    rights: "सर्वाधिकार सुरक्षित।",
    privacyNote: "फ़ाइलों को सुरक्षित रूप से प्रोसेस किया जाता है और आवश्यकता से अधिक समय तक संग्रहीत नहीं किया जाता।",
    moreCount: "+{count} और",
    company: "कंपनी",
    legal: "कानूनी",
    aboutUs: "हमारे बारे में",
    contactUs: "संपर्क करें",
    blog: "ब्लॉग",
    faq: "अक्सर पूछे जाने वाले सवाल",
    privacyPolicy: "गोपनीयता नीति",
    termsOfService: "सेवा की शर्तें",
    cookiePolicy: "कुकी नीति",
  },
  staticPages: {
    note: "यह पेज एक प्लेसहोल्डर है — पूरी सामग्री जल्द ही आएगी।",
    aboutUs: {
      title: "हमारे बारे में",
      intro:
        "TAMPDF एक मुफ़्त ऑनलाइन टूलकिट है जो PDF, इमेज और दस्तावेज़ों को मर्ज, स्प्लिट, कंप्रेस और कन्वर्ट करने जैसे रोज़मर्रा के फ़ाइल कार्यों को तेज़, निजी और आसान बनाता है।",
    },
    contactUs: {
      title: "संपर्क करें",
      intro: "कोई सवाल है, कोई बग मिला है, या कोई नया टूल सुझाना चाहते हैं? हमें आपसे सुनकर खुशी होगी।",
    },
    blog: { title: "ब्लॉग", intro: "हम फ़ाइल फ़ॉर्मेट, उत्पादकता टिप्स और प्रोडक्ट अपडेट पर लेख तैयार कर रहे हैं।" },
    faq: {
      title: "अक्सर पूछे जाने वाले सवाल",
      intro: "TAMPDF के बारे में सामान्य जवाब जल्द ही यहाँ प्रकाशित होंगे। इस बीच, हर टूल पेज पर उसका अपना FAQ मौजूद है।",
    },
    privacyPolicy: {
      title: "गोपनीयता नीति",
      intro: "हमारी पूरी गोपनीयता नीति, जो बताती है कि TAMPDF आपकी फ़ाइलों और डेटा को कैसे संभालता है, अंतिम रूप दी जा रही है और जल्द ही यहाँ प्रकाशित होगी।",
    },
    termsOfService: {
      title: "सेवा की शर्तें",
      intro: "ये सेवा की शर्तें TAMPDF के टूल और वेबसाइट के आपके उपयोग को नियंत्रित करती हैं, जिसमें वारंटी अस्वीकरण और देयता सीमा शामिल है।",
    },
    cookiePolicy: {
      title: "कुकी नीति",
      intro: "TAMPDF द्वारा उपयोग की जाने वाली कुकीज़ और समान तकनीकों का विवरण जल्द ही यहाँ प्रकाशित होगा।",
    },
  },
  dropzone: {
    browse: "या ब्राउज़ करने के लिए क्लिक करें",
    defaultLabel: "अपनी फ़ाइल यहाँ खींचें और छोड़ें",
    unsupportedType: "{name} एक समर्थित फ़ाइल प्रकार नहीं है और इसे छोड़ दिया गया।",
    unsupportedTypePlural: "{count} फ़ाइलें समर्थित प्रकार की नहीं थीं और छोड़ दी गईं।",
    tooLarge: "{name} बहुत बड़ी है (अधिकतम {max}) और इसे छोड़ दिया गया।",
    tooLargePlural: "{count} फ़ाइलें बहुत बड़ी थीं (अधिकतम {max}) और छोड़ दी गईं।",
    maxFilesReached: "आपने इस टूल के लिए अधिकतम {max} फ़ाइलें पहले ही जोड़ दी हैं।",
    maxFilesExceeded: "यह टूल एक बार में अधिकतम {max} फ़ाइलों की अनुमति देता है, इसलिए आपकी फ़ाइलों में से केवल {added} ही जोड़ी गईं।",
  },
  fileList: { moveUp: "ऊपर ले जाएं", moveDown: "नीचे ले जाएं", remove: "{name} हटाएं" },
  result: {
    ready: "आपकी फ़ाइल तैयार है",
    download: "डाउनलोड करें",
    startOver: "फिर से शुरू करें",
    smaller: "छोटी",
    originalSize: "मूल आकार",
    newSize: "नया आकार",
    reducedBy: "इतना कम हुआ",
    spaceSaved: "बचाई गई जगह",
  },
  notFound: {
    title: "पेज नहीं मिला",
    description: "आप जिस पेज को खोज रहे हैं वह मौजूद नहीं है या हो सकता है इसे स्थानांतरित कर दिया गया हो।",
    cta: "होमपेज पर वापस जाएं",
  },
};
