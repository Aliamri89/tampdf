import type { Dictionary } from "../dictionaries";
import type { DeepPartial } from "../merge";

export const fi: DeepPartial<Dictionary> = {
  header: { languageMenu: { ariaLabel: "Vaihda kieli" } },
  breadcrumb: { home: "Etusivu" },
  tool: {
    processedClient: "Käsitellään selaimessasi — tiedostoja ei koskaan ladata palvelimelle",
    faqHeading: "Usein kysytyt kysymykset",
    relatedHeading: "Vastaavat työkalut",
    metaTitleSuffix: "— Ilmainen verkkotyökalu",
  },
  article: {
    tocHeading: "Sisällysluettelo",
    readingTime: "{minutes} min lukuaika",
    readingTimeOne: "1 min lukuaika",
    readingTimeTwo: "2 min lukuaika",
    published: "Julkaistu {date}",
    updated: "Päivitetty {date}",
    relatedHeading: "Vastaavat artikkelit",
    previousArticle: "Edellinen",
    nextArticle: "Seuraava",
    ctaDefaultHeading: "Valmiina kokeilemaan {tool}?",
    ctaCompressPdfButtonLabel: "Pakkaa PDF ilmaiseksi",
  },
  card: { comingSoon: "Tulossa pian" },
  home: {
    heroHighlight: "PDF",
    heroSubtitle: "Ilmaisia, nopeita ja helppokäyttöisiä PDF-työkaluja",
    toolPicker: {
      trigger: "Valitse PDF-työkalu",
      ariaLabel: "PDF-työkaluvalikko",
      loadMore: "Lisää työkaluja",
      allShown: "Kaikki työkalut näytetty",
    },
    features: { devices: "Toimii kaikilla laitteilla", fast: "Nopea", secure: "Turvallinen" },
  },
  footer: {
    rights: "Kaikki oikeudet pidätetään.",
    privacyNote: "Tiedostot käsitellään turvallisesti eikä niitä säilytetä tarpeettoman kauan.",
    moreCount: "+{count} lisää",
    company: "Yritys",
    legal: "Lakiasiat",
    aboutUs: "Tietoa meistä",
    contactUs: "Ota yhteyttä",
    blog: "Blogi",
    faq: "Usein kysytyt kysymykset",
    privacyPolicy: "Tietosuojakäytäntö",
    termsOfService: "Käyttöehdot",
    cookiePolicy: "Evästekäytäntö",
  },
  staticPages: {
    note: "Tämä sivu on tilapäinen — täysi sisältö julkaistaan pian.",
    aboutUs: {
      title: "Tietoa meistä",
      intro:
        "TAMPDF on ilmainen verkkotyökalusarja, joka tekee arkisista tiedostotehtävistä — PDF-tiedostojen, kuvien ja asiakirjojen yhdistämisestä, jakamisesta, pakkaamisesta ja muuntamisesta — nopeita, yksityisiä ja vaivattomia.",
    },
    contactUs: {
      title: "Ota yhteyttä",
      intro: "Onko sinulla kysyttävää, löysitkö virheen vai haluatko ehdottaa uutta työkalua? Kuulemme mielellämme sinusta.",
    },
    blog: { title: "Blogi", intro: "Valmistelemme artikkeleita tiedostomuodoista, tuottavuusvinkeistä ja tuotepäivityksistä." },
    faq: {
      title: "Usein kysytyt kysymykset",
      intro: "Yleiset vastaukset TAMPDF:stä julkaistaan täällä pian. Sillä välin jokaisella työkalulla on omat usein kysytyt kysymyksensä.",
    },
    privacyPolicy: {
      title: "Tietosuojakäytäntö",
      intro: "Täysi tietosuojakäytäntömme, joka selittää tarkasti, miten TAMPDF käsittelee tiedostojasi ja tietojasi, viimeistellään ja julkaistaan täällä pian.",
    },
    termsOfService: {
      title: "Käyttöehdot",
      intro: "Nämä käyttöehdot koskevat TAMPDF:n työkalujen ja verkkosivuston käyttöäsi, mukaan lukien takuuvastuun rajoitus ja vastuunrajoitus.",
    },
    cookiePolicy: {
      title: "Evästekäytäntö",
      intro: "Tiedot TAMPDF:n käyttämistä evästeistä ja vastaavista tekniikoista julkaistaan täällä pian.",
    },
  },
  dropzone: {
    browse: "tai napsauta selataksesi",
    defaultLabel: "Vedä ja pudota tiedostosi tähän",
    unsupportedType: "{name} ei ole tuettu tiedostotyyppi, ja se ohitettiin.",
    unsupportedTypePlural: "{count} tiedostoa ei ollut tuettua tyyppiä, ja ne ohitettiin.",
    tooLarge: "{name} on liian suuri (enintään {max}), ja se ohitettiin.",
    tooLargePlural: "{count} tiedostoa oli liian suuria (enintään {max}), ja ne ohitettiin.",
    maxFilesReached: "Olet jo lisännyt enimmäismäärän {max} tiedostoa tälle työkalulle.",
    maxFilesExceeded: "Tämä työkalu sallii enintään {max} tiedostoa kerrallaan, joten vain {added} tiedostoistasi lisättiin.",
  },
  fileList: { moveUp: "Siirrä ylös", moveDown: "Siirrä alas", remove: "Poista {name}" },
  result: {
    ready: "Tiedostosi on valmis",
    download: "Lataa",
    startOver: "Aloita alusta",
    smaller: "pienempi",
    originalSize: "Alkuperäinen koko",
    newSize: "Uusi koko",
    reducedBy: "Pienennetty",
    spaceSaved: "Säästetty tila",
  },
  notFound: {
    title: "Sivua ei löytynyt",
    description: "Etsimääsi sivua ei ole olemassa, tai se on saatettu siirtää.",
    cta: "Takaisin etusivulle",
  },
};
