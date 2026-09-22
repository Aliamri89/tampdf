import type { Dictionary } from "../dictionaries";
import type { DeepPartial } from "../merge";

export const no: DeepPartial<Dictionary> = {
  header: { languageMenu: { ariaLabel: "Endre språk" } },
  breadcrumb: { home: "Hjem" },
  tool: {
    processedClient: "Behandles i nettleseren din — filer lastes aldri opp",
    faqHeading: "Ofte stilte spørsmål",
    relatedHeading: "Relaterte verktøy",
    metaTitleSuffix: "— Gratis nettverktøy",
  },
  article: {
    tocHeading: "Innholdsfortegnelse",
    readingTime: "{minutes} min lesing",
    readingTimeOne: "1 min lesing",
    readingTimeTwo: "2 min lesing",
    published: "Publisert {date}",
    updated: "Oppdatert {date}",
    relatedHeading: "Relaterte artikler",
    previousArticle: "Forrige",
    nextArticle: "Neste",
    ctaDefaultHeading: "Klar til å prøve {tool}?",
    ctaCompressPdfButtonLabel: "Komprimer PDF gratis",
  },
  card: { comingSoon: "Kommer snart" },
  home: {
    heroHighlight: "PDF",
    heroSubtitle: "Gratis, raske og enkle PDF-verktøy",
    toolPicker: {
      trigger: "Velg et PDF-verktøy",
      ariaLabel: "Meny for PDF-verktøy",
      loadMore: "Flere verktøy",
      allShown: "Alle verktøy vises",
    },
    features: { devices: "Fungerer på alle enheter", fast: "Raskt", secure: "Sikkert" },
  },
  footer: {
    rights: "Med enerett.",
    privacyNote: "Filer behandles sikkert og lagres aldri lenger enn nødvendig.",
    moreCount: "+{count} til",
    company: "Selskap",
    legal: "Juridisk",
    aboutUs: "Om oss",
    contactUs: "Kontakt oss",
    blog: "Blogg",
    faq: "Ofte stilte spørsmål",
    privacyPolicy: "Personvernerklæring",
    termsOfService: "Vilkår for bruk",
    cookiePolicy: "Informasjonskapsler",
  },
  staticPages: {
    note: "Denne siden er en plassholder — fullt innhold kommer snart.",
    aboutUs: {
      title: "Om oss",
      intro:
        "TAMPDF er et gratis nettbasert verktøysett laget for å gjøre hverdagslige filoppgaver — å slå sammen, dele opp, komprimere og konvertere PDF-er, bilder og dokumenter — raske, private og enkle.",
    },
    contactUs: {
      title: "Kontakt oss",
      intro: "Har du et spørsmål, funnet en feil, eller vil foreslå et nytt verktøy? Vi vil gjerne høre fra deg.",
    },
    blog: { title: "Blogg", intro: "Vi forbereder artikler om filformater, produktivitetstips og produktoppdateringer." },
    faq: {
      title: "Ofte stilte spørsmål",
      intro: "Generelle svar om TAMPDF publiseres her snart. I mellomtiden har hvert verktøy sine egne ofte stilte spørsmål.",
    },
    privacyPolicy: {
      title: "Personvernerklæring",
      intro: "Vår fullstendige personvernerklæring, som nøyaktig forklarer hvordan TAMPDF behandler filene og dataene dine, blir ferdigstilt og publiseres her snart.",
    },
    termsOfService: {
      title: "Vilkår for bruk",
      intro: "Disse vilkårene for bruk regulerer din bruk av TAMPDFs verktøy og nettsted, inkludert vår ansvarsfraskrivelse og ansvarsbegrensning.",
    },
    cookiePolicy: {
      title: "Informasjonskapsler",
      intro: "Detaljer om informasjonskapslene og lignende teknologier TAMPDF bruker, publiseres her snart.",
    },
  },
  dropzone: {
    browse: "eller klikk for å bla gjennom",
    defaultLabel: "Dra og slipp filen din her",
    unsupportedType: "{name} er ikke en støttet filtype og ble hoppet over.",
    unsupportedTypePlural: "{count} filer hadde ikke en støttet type og ble hoppet over.",
    tooLarge: "{name} er for stor (maks {max}) og ble hoppet over.",
    tooLargePlural: "{count} filer var for store (maks {max}) og ble hoppet over.",
    maxFilesReached: "Du har allerede lagt til maksimalt {max} filer for dette verktøyet.",
    maxFilesExceeded: "Dette verktøyet tillater opptil {max} filer om gangen, så bare {added} av filene dine ble lagt til.",
  },
  fileList: { moveUp: "Flytt opp", moveDown: "Flytt ned", remove: "Fjern {name}" },
  result: {
    ready: "Filen din er klar",
    download: "Last ned",
    startOver: "Start på nytt",
    smaller: "mindre",
    originalSize: "Opprinnelig størrelse",
    newSize: "Ny størrelse",
    reducedBy: "Redusert med",
    spaceSaved: "Spart plass",
  },
  notFound: {
    title: "Siden ble ikke funnet",
    description: "Siden du leter etter finnes ikke, eller den kan ha blitt flyttet.",
    cta: "Tilbake til forsiden",
  },
};
