import type { Dictionary } from "../dictionaries";
import type { DeepPartial } from "../merge";

export const sv: DeepPartial<Dictionary> = {
  header: { languageMenu: { ariaLabel: "Byt språk" } },
  breadcrumb: { home: "Hem" },
  tool: {
    processedClient: "Bearbetas i din webbläsare — filer laddas aldrig upp",
    faqHeading: "Vanliga frågor",
    relatedHeading: "Relaterade verktyg",
    metaTitleSuffix: "— Gratis onlineverktyg",
  },
  article: {
    tocHeading: "Innehållsförteckning",
    readingTime: "{minutes} min läsning",
    readingTimeOne: "1 min läsning",
    readingTimeTwo: "2 min läsning",
    published: "Publicerad {date}",
    updated: "Uppdaterad {date}",
    relatedHeading: "Relaterade artiklar",
    previousArticle: "Föregående",
    nextArticle: "Nästa",
    ctaDefaultHeading: "Redo att prova {tool}?",
    ctaCompressPdfButtonLabel: "Komprimera PDF gratis",
  },
  card: { comingSoon: "Kommer snart" },
  home: {
    heroHighlight: "PDF",
    heroSubtitle: "Gratis, snabba och lättanvända PDF-verktyg",
    toolPicker: {
      trigger: "Välj ett PDF-verktyg",
      ariaLabel: "Meny för PDF-verktyg",
      loadMore: "Fler verktyg",
      allShown: "Alla verktyg visas",
    },
    features: { devices: "Fungerar på alla enheter", fast: "Snabbt", secure: "Säkert" },
  },
  footer: {
    rights: "Alla rättigheter förbehållna.",
    privacyNote: "Filer bearbetas säkert och lagras aldrig längre än nödvändigt.",
    moreCount: "+{count} till",
    company: "Företag",
    legal: "Juridiskt",
    aboutUs: "Om oss",
    contactUs: "Kontakta oss",
    blog: "Blogg",
    faq: "Vanliga frågor",
    privacyPolicy: "Integritetspolicy",
    termsOfService: "Användarvillkor",
    cookiePolicy: "Cookiepolicy",
  },
  staticPages: {
    note: "Den här sidan är en platshållare — fullständigt innehåll kommer snart.",
    aboutUs: {
      title: "Om oss",
      intro:
        "TAMPDF är en gratis uppsättning onlineverktyg som gör vardagliga filuppgifter — att slå ihop, dela upp, komprimera och konvertera PDF-filer, bilder och dokument — snabba, privata och enkla.",
    },
    contactUs: {
      title: "Kontakta oss",
      intro: "Har du en fråga, hittat en bugg eller vill föreslå ett nytt verktyg? Vi vill gärna höra från dig.",
    },
    blog: { title: "Blogg", intro: "Vi förbereder artiklar om filformat, produktivitetstips och produktuppdateringar." },
    faq: {
      title: "Vanliga frågor",
      intro: "Allmänna svar om TAMPDF publiceras här inom kort. Under tiden har varje verktyg sina egna vanliga frågor.",
    },
    privacyPolicy: {
      title: "Integritetspolicy",
      intro: "Vår fullständiga integritetspolicy, som exakt förklarar hur TAMPDF hanterar dina filer och data, färdigställs och publiceras här inom kort.",
    },
    termsOfService: {
      title: "Användarvillkor",
      intro: "Dessa användarvillkor reglerar din användning av TAMPDF:s verktyg och webbplats, inklusive vår friskrivning från garantier och begränsning av ansvar.",
    },
    cookiePolicy: {
      title: "Cookiepolicy",
      intro: "Detaljer om de cookies och liknande tekniker som TAMPDF använder publiceras här inom kort.",
    },
  },
  dropzone: {
    browse: "eller klicka för att bläddra",
    defaultLabel: "Dra och släpp din fil här",
    unsupportedType: "{name} är inte en filtyp som stöds och hoppades över.",
    unsupportedTypePlural: "{count} filer hade inte en filtyp som stöds och hoppades över.",
    tooLarge: "{name} är för stor (max {max}) och hoppades över.",
    tooLargePlural: "{count} filer var för stora (max {max}) och hoppades över.",
    maxFilesReached: "Du har redan lagt till max {max} filer för det här verktyget.",
    maxFilesExceeded: "Det här verktyget tillåter upp till {max} filer åt gången, så bara {added} av dina filer lades till.",
  },
  fileList: { moveUp: "Flytta upp", moveDown: "Flytta ner", remove: "Ta bort {name}" },
  result: {
    ready: "Din fil är klar",
    download: "Ladda ner",
    startOver: "Börja om",
    smaller: "mindre",
    originalSize: "Ursprunglig storlek",
    newSize: "Ny storlek",
    reducedBy: "Minskad med",
    spaceSaved: "Sparat utrymme",
  },
  notFound: {
    title: "Sidan hittades inte",
    description: "Sidan du letar efter finns inte eller kan ha flyttats.",
    cta: "Tillbaka till startsidan",
  },
};
