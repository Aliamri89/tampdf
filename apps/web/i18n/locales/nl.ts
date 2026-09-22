import type { Dictionary } from "../dictionaries";
import type { DeepPartial } from "../merge";

export const nl: DeepPartial<Dictionary> = {
  header: { languageMenu: { ariaLabel: "Taal wijzigen" } },
  breadcrumb: { home: "Home" },
  tool: {
    processedClient: "Verwerkt in je browser — bestanden worden nooit geüpload",
    faqHeading: "Veelgestelde vragen",
    relatedHeading: "Gerelateerde tools",
    metaTitleSuffix: "— Gratis online tool",
  },
  article: {
    tocHeading: "Inhoudsopgave",
    readingTime: "{minutes} min. leestijd",
    readingTimeOne: "1 min. leestijd",
    readingTimeTwo: "2 min. leestijd",
    published: "Gepubliceerd op {date}",
    updated: "Bijgewerkt op {date}",
    relatedHeading: "Gerelateerde artikelen",
    previousArticle: "Vorige",
    nextArticle: "Volgende",
    ctaDefaultHeading: "Klaar om {tool} te proberen?",
    ctaCompressPdfButtonLabel: "PDF gratis comprimeren",
  },
  card: { comingSoon: "Binnenkort beschikbaar" },
  home: {
    heroHighlight: "PDF",
    heroSubtitle: "Gratis, snelle en eenvoudige PDF-tools",
    toolPicker: {
      trigger: "Kies een PDF-tool",
      ariaLabel: "PDF-toolsmenu",
      loadMore: "Meer tools",
      allShown: "Alle tools worden getoond",
    },
    features: { devices: "Werkt op elk apparaat", fast: "Snel", secure: "Veilig" },
  },
  footer: {
    rights: "Alle rechten voorbehouden.",
    privacyNote: "Bestanden worden veilig verwerkt en nooit langer bewaard dan nodig.",
    moreCount: "+{count} meer",
    company: "Bedrijf",
    legal: "Juridisch",
    aboutUs: "Over ons",
    contactUs: "Contact",
    blog: "Blog",
    faq: "Veelgestelde vragen",
    privacyPolicy: "Privacybeleid",
    termsOfService: "Servicevoorwaarden",
    cookiePolicy: "Cookiebeleid",
  },
  staticPages: {
    note: "Deze pagina is een tijdelijke aanduiding — volledige inhoud volgt binnenkort.",
    aboutUs: {
      title: "Over ons",
      intro:
        "TAMPDF is een gratis online toolkit die alledaagse bestandstaken — PDF's, afbeeldingen en documenten samenvoegen, splitsen, comprimeren en converteren — snel, privé en moeiteloos maakt.",
    },
    contactUs: {
      title: "Contact",
      intro: "Heb je een vraag, een bug gevonden of wil je een nieuwe tool voorstellen? We horen graag van je.",
    },
    blog: { title: "Blog", intro: "We werken aan artikelen over bestandsformaten, productiviteitstips en productupdates." },
    faq: {
      title: "Veelgestelde vragen",
      intro: "Algemene antwoorden over TAMPDF worden hier binnenkort gepubliceerd. Elke tool heeft intussen zijn eigen FAQ.",
    },
    privacyPolicy: {
      title: "Privacybeleid",
      intro: "Ons volledige privacybeleid, dat precies uitlegt hoe TAMPDF met je bestanden en gegevens omgaat, wordt afgerond en binnenkort hier gepubliceerd.",
    },
    termsOfService: {
      title: "Servicevoorwaarden",
      intro: "Deze servicevoorwaarden regelen je gebruik van de tools en website van TAMPDF, inclusief onze garantie-uitsluiting en aansprakelijkheidsbeperking.",
    },
    cookiePolicy: {
      title: "Cookiebeleid",
      intro: "Details over de cookies en vergelijkbare technologieën die TAMPDF gebruikt, worden hier binnenkort gepubliceerd.",
    },
  },
  dropzone: {
    browse: "of klik om te bladeren",
    defaultLabel: "Sleep je bestand hierheen",
    unsupportedType: "{name} is geen ondersteund bestandstype en is overgeslagen.",
    unsupportedTypePlural: "{count} bestanden hadden geen ondersteund type en zijn overgeslagen.",
    tooLarge: "{name} is te groot (max. {max}) en is overgeslagen.",
    tooLargePlural: "{count} bestanden waren te groot (max. {max}) en zijn overgeslagen.",
    maxFilesReached: "Je hebt al het maximum van {max} bestanden voor deze tool toegevoegd.",
    maxFilesExceeded: "Deze tool staat maximaal {max} bestanden tegelijk toe, dus zijn slechts {added} van je bestanden toegevoegd.",
  },
  fileList: { moveUp: "Omhoog", moveDown: "Omlaag", remove: "{name} verwijderen" },
  result: {
    ready: "Je bestand is klaar",
    download: "Downloaden",
    startOver: "Opnieuw beginnen",
    smaller: "kleiner",
    originalSize: "Oorspronkelijke grootte",
    newSize: "Nieuwe grootte",
    reducedBy: "Verkleind met",
    spaceSaved: "Bespaarde ruimte",
  },
  notFound: {
    title: "Pagina niet gevonden",
    description: "De pagina die je zoekt bestaat niet of is mogelijk verplaatst.",
    cta: "Terug naar home",
  },
};
