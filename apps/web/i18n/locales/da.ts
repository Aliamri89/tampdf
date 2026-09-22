import type { Dictionary } from "../dictionaries";
import type { DeepPartial } from "../merge";

export const da: DeepPartial<Dictionary> = {
  header: { languageMenu: { ariaLabel: "Skift sprog" } },
  breadcrumb: { home: "Forside" },
  tool: {
    processedClient: "Behandles i din browser — filer uploades aldrig",
    faqHeading: "Ofte stillede spørgsmål",
    relatedHeading: "Relaterede værktøjer",
    metaTitleSuffix: "— Gratis onlineværktøj",
  },
  article: {
    tocHeading: "Indholdsfortegnelse",
    readingTime: "{minutes} min. læsning",
    readingTimeOne: "1 min. læsning",
    readingTimeTwo: "2 min. læsning",
    published: "Udgivet {date}",
    updated: "Opdateret {date}",
    relatedHeading: "Relaterede artikler",
    previousArticle: "Forrige",
    nextArticle: "Næste",
    ctaDefaultHeading: "Klar til at prøve {tool}?",
    ctaCompressPdfButtonLabel: "Komprimer PDF gratis",
  },
  card: { comingSoon: "Kommer snart" },
  home: {
    heroHighlight: "PDF",
    heroSubtitle: "Gratis, hurtige og nemme PDF-værktøjer",
    toolPicker: {
      trigger: "Vælg et PDF-værktøj",
      ariaLabel: "Menu for PDF-værktøjer",
      loadMore: "Flere værktøjer",
      allShown: "Alle værktøjer vises",
    },
    features: { devices: "Virker på alle enheder", fast: "Hurtigt", secure: "Sikkert" },
  },
  footer: {
    rights: "Alle rettigheder forbeholdes.",
    privacyNote: "Filer behandles sikkert og gemmes aldrig længere end nødvendigt.",
    moreCount: "+{count} mere",
    company: "Virksomhed",
    legal: "Juridisk",
    aboutUs: "Om os",
    contactUs: "Kontakt os",
    blog: "Blog",
    faq: "Ofte stillede spørgsmål",
    privacyPolicy: "Privatlivspolitik",
    termsOfService: "Servicevilkår",
    cookiePolicy: "Cookiepolitik",
  },
  staticPages: {
    note: "Denne side er en pladsholder — fuldt indhold kommer snart.",
    aboutUs: {
      title: "Om os",
      intro:
        "TAMPDF er et gratis online værktøjssæt, der gør dagligdags filopgaver — at flette, opdele, komprimere og konvertere PDF'er, billeder og dokumenter — hurtige, private og uden besvær.",
    },
    contactUs: {
      title: "Kontakt os",
      intro: "Har du et spørgsmål, fundet en fejl, eller vil du foreslå et nyt værktøj? Vi vil meget gerne høre fra dig.",
    },
    blog: { title: "Blog", intro: "Vi forbereder artikler om filformater, produktivitetstips og produktopdateringer." },
    faq: {
      title: "Ofte stillede spørgsmål",
      intro: "Generelle svar om TAMPDF udgives her snart. I mellemtiden har hvert værktøj sine egne ofte stillede spørgsmål.",
    },
    privacyPolicy: {
      title: "Privatlivspolitik",
      intro: "Vores fulde privatlivspolitik, der nøje forklarer, hvordan TAMPDF behandler dine filer og data, er ved at blive færdiggjort og udgives her snart.",
    },
    termsOfService: {
      title: "Servicevilkår",
      intro: "Disse servicevilkår regulerer din brug af TAMPDF's værktøjer og hjemmeside, herunder vores ansvarsfraskrivelse og ansvarsbegrænsning.",
    },
    cookiePolicy: {
      title: "Cookiepolitik",
      intro: "Detaljer om de cookies og lignende teknologier, som TAMPDF bruger, udgives her snart.",
    },
  },
  dropzone: {
    browse: "eller klik for at gennemse",
    defaultLabel: "Træk og slip din fil her",
    unsupportedType: "{name} er ikke en understøttet filtype og blev sprunget over.",
    unsupportedTypePlural: "{count} filer havde ikke en understøttet type og blev sprunget over.",
    tooLarge: "{name} er for stor (maks. {max}) og blev sprunget over.",
    tooLargePlural: "{count} filer var for store (maks. {max}) og blev sprunget over.",
    maxFilesReached: "Du har allerede tilføjet det maksimale antal på {max} filer for dette værktøj.",
    maxFilesExceeded: "Dette værktøj tillader op til {max} filer ad gangen, så kun {added} af dine filer blev tilføjet.",
  },
  fileList: { moveUp: "Flyt op", moveDown: "Flyt ned", remove: "Fjern {name}" },
  result: {
    ready: "Din fil er klar",
    download: "Download",
    startOver: "Start forfra",
    smaller: "mindre",
    originalSize: "Oprindelig størrelse",
    newSize: "Ny størrelse",
    reducedBy: "Reduceret med",
    spaceSaved: "Sparet plads",
  },
  notFound: {
    title: "Siden blev ikke fundet",
    description: "Siden, du leder efter, findes ikke eller er måske blevet flyttet.",
    cta: "Tilbage til forsiden",
  },
};
