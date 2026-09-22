import type { Dictionary } from "../dictionaries";
import type { DeepPartial } from "../merge";

export const de: DeepPartial<Dictionary> = {
  header: { languageMenu: { ariaLabel: "Sprache ändern" } },
  breadcrumb: { home: "Startseite" },
  tool: {
    processedClient: "Verarbeitung in deinem Browser — Dateien werden nie hochgeladen",
    faqHeading: "Häufig gestellte Fragen",
    relatedHeading: "Ähnliche Tools",
    metaTitleSuffix: "— Kostenloses Online-Tool",
  },
  article: {
    tocHeading: "Inhaltsverzeichnis",
    readingTime: "{minutes} Min. Lesezeit",
    readingTimeOne: "1 Min. Lesezeit",
    readingTimeTwo: "2 Min. Lesezeit",
    published: "Veröffentlicht am {date}",
    updated: "Aktualisiert am {date}",
    relatedHeading: "Ähnliche Artikel",
    previousArticle: "Zurück",
    nextArticle: "Weiter",
    ctaDefaultHeading: "Bereit, {tool} auszuprobieren?",
    ctaCompressPdfButtonLabel: "PDF kostenlos komprimieren",
  },
  card: { comingSoon: "Demnächst verfügbar" },
  home: {
    heroHighlight: "PDF",
    heroSubtitle: "Kostenlose, schnelle und einfache PDF-Tools",
    toolPicker: {
      trigger: "PDF-Tool wählen",
      ariaLabel: "PDF-Tools-Menü",
      loadMore: "Weitere Tools",
      allShown: "Alle Tools werden angezeigt",
    },
    features: { devices: "Funktioniert auf jedem Gerät", fast: "Schnell", secure: "Sicher" },
  },
  footer: {
    rights: "Alle Rechte vorbehalten.",
    privacyNote: "Dateien werden sicher verarbeitet und nie länger als nötig gespeichert.",
    moreCount: "+{count} weitere",
    company: "Unternehmen",
    legal: "Rechtliches",
    aboutUs: "Über uns",
    contactUs: "Kontakt",
    blog: "Blog",
    faq: "Häufig gestellte Fragen",
    privacyPolicy: "Datenschutzerklärung",
    termsOfService: "Nutzungsbedingungen",
    cookiePolicy: "Cookie-Richtlinie",
  },
  staticPages: {
    note: "Diese Seite ist ein Platzhalter — der vollständige Inhalt folgt in Kürze.",
    aboutUs: {
      title: "Über uns",
      intro:
        "TAMPDF ist eine kostenlose Online-Toolsammlung, die alltägliche Dateiaufgaben — PDFs, Bilder und Dokumente zusammenführen, aufteilen, komprimieren und konvertieren — schnell, privat und mühelos macht.",
    },
    contactUs: {
      title: "Kontakt",
      intro: "Eine Frage, ein gefundener Fehler oder ein Vorschlag für ein neues Tool? Wir freuen uns, von dir zu hören.",
    },
    blog: { title: "Blog", intro: "Wir arbeiten an Artikeln über Dateiformate, Produktivitätstipps und Produkt-Updates." },
    faq: {
      title: "Häufig gestellte Fragen",
      intro: "Allgemeine Antworten zu TAMPDF werden hier in Kürze veröffentlicht. In der Zwischenzeit hat jede Tool-Seite ihre eigenen FAQ.",
    },
    privacyPolicy: {
      title: "Datenschutzerklärung",
      intro: "Unsere vollständige Datenschutzerklärung, die genau erklärt, wie TAMPDF mit deinen Dateien und Daten umgeht, wird derzeit fertiggestellt und in Kürze hier veröffentlicht.",
    },
    termsOfService: {
      title: "Nutzungsbedingungen",
      intro: "Diese Nutzungsbedingungen regeln deine Nutzung der Tools und der Website von TAMPDF, einschließlich unseres Gewährleistungsausschlusses und der Haftungsbeschränkung.",
    },
    cookiePolicy: {
      title: "Cookie-Richtlinie",
      intro: "Details zu den von TAMPDF verwendeten Cookies und ähnlichen Technologien werden hier in Kürze veröffentlicht.",
    },
  },
  dropzone: {
    browse: "oder klicken zum Durchsuchen",
    defaultLabel: "Datei hierher ziehen",
    unsupportedType: "{name} ist kein unterstützter Dateityp und wurde übersprungen.",
    unsupportedTypePlural: "{count} Dateien hatten keinen unterstützten Typ und wurden übersprungen.",
    tooLarge: "{name} ist zu groß (max. {max}) und wurde übersprungen.",
    tooLargePlural: "{count} Dateien waren zu groß (max. {max}) und wurden übersprungen.",
    maxFilesReached: "Du hast bereits das Maximum von {max} Dateien für dieses Tool hinzugefügt.",
    maxFilesExceeded: "Dieses Tool erlaubt bis zu {max} Dateien gleichzeitig, daher wurden nur {added} deiner Dateien hinzugefügt.",
  },
  fileList: { moveUp: "Nach oben", moveDown: "Nach unten", remove: "{name} entfernen" },
  result: {
    ready: "Deine Datei ist fertig",
    download: "Herunterladen",
    startOver: "Neu starten",
    smaller: "kleiner",
    originalSize: "Ursprüngliche Größe",
    newSize: "Neue Größe",
    reducedBy: "Reduziert um",
    spaceSaved: "Gesparter Speicherplatz",
  },
  notFound: {
    title: "Seite nicht gefunden",
    description: "Die gesuchte Seite existiert nicht oder wurde möglicherweise verschoben.",
    cta: "Zurück zur Startseite",
  },
};
