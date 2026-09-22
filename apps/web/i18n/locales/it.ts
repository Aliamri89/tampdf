import type { Dictionary } from "../dictionaries";
import type { DeepPartial } from "../merge";

export const it: DeepPartial<Dictionary> = {
  header: { languageMenu: { ariaLabel: "Cambia lingua" } },
  breadcrumb: { home: "Home" },
  tool: {
    processedClient: "Elaborato nel tuo browser — i file non vengono mai caricati",
    faqHeading: "Domande frequenti",
    relatedHeading: "Strumenti correlati",
    metaTitleSuffix: "— Strumento gratuito online",
  },
  article: {
    tocHeading: "Indice",
    readingTime: "{minutes} min di lettura",
    readingTimeOne: "1 min di lettura",
    readingTimeTwo: "2 min di lettura",
    published: "Pubblicato il {date}",
    updated: "Aggiornato il {date}",
    relatedHeading: "Articoli correlati",
    previousArticle: "Precedente",
    nextArticle: "Successivo",
    ctaDefaultHeading: "Pronto a provare {tool}?",
    ctaCompressPdfButtonLabel: "Comprimi PDF gratis",
  },
  card: { comingSoon: "Prossimamente" },
  home: {
    heroHighlight: "PDF",
    heroSubtitle: "Strumenti PDF gratuiti, veloci e facili da usare",
    toolPicker: {
      trigger: "Scegli uno strumento PDF",
      ariaLabel: "Menu degli strumenti PDF",
      loadMore: "Altri strumenti",
      allShown: "Tutti gli strumenti sono mostrati",
    },
    features: { devices: "Funziona su ogni dispositivo", fast: "Veloce", secure: "Sicuro" },
  },
  footer: {
    rights: "Tutti i diritti riservati.",
    privacyNote: "I file vengono elaborati in modo sicuro e non vengono mai conservati più a lungo del necessario.",
    moreCount: "+{count} altri",
    company: "Azienda",
    legal: "Legale",
    aboutUs: "Chi siamo",
    contactUs: "Contattaci",
    blog: "Blog",
    faq: "Domande frequenti",
    privacyPolicy: "Informativa sulla privacy",
    termsOfService: "Termini di servizio",
    cookiePolicy: "Politica sui cookie",
  },
  staticPages: {
    note: "Questa pagina è un segnaposto — il contenuto completo arriverà presto.",
    aboutUs: {
      title: "Chi siamo",
      intro:
        "TAMPDF è una raccolta di strumenti online gratuiti pensata per rendere veloci, private e senza sforzo le attività quotidiane sui file — unire, dividere, comprimere e convertire PDF, immagini e documenti.",
    },
    contactUs: {
      title: "Contattaci",
      intro: "Hai una domanda, hai trovato un bug o vuoi suggerire un nuovo strumento? Ci farebbe piacere sentirti.",
    },
    blog: { title: "Blog", intro: "Stiamo lavorando ad articoli su formati di file, consigli di produttività e aggiornamenti del prodotto." },
    faq: {
      title: "Domande frequenti",
      intro: "A breve pubblicheremo qui risposte generali su TAMPDF. Nel frattempo, ogni strumento ha le proprie domande frequenti.",
    },
    privacyPolicy: {
      title: "Informativa sulla privacy",
      intro: "La nostra informativa sulla privacy completa, che spiega esattamente come TAMPDF gestisce i tuoi file e dati, è in fase di completamento e sarà pubblicata qui a breve.",
    },
    termsOfService: {
      title: "Termini di servizio",
      intro: "Questi Termini di servizio regolano l'uso degli strumenti e del sito TAMPDF, inclusa la nostra esclusione di garanzie e limitazione di responsabilità.",
    },
    cookiePolicy: {
      title: "Politica sui cookie",
      intro: "I dettagli sui cookie e sulle tecnologie simili utilizzate da TAMPDF saranno pubblicati qui a breve.",
    },
  },
  dropzone: {
    browse: "o clicca per sfogliare",
    defaultLabel: "Trascina qui il tuo file",
    unsupportedType: "{name} non è un tipo di file supportato ed è stato ignorato.",
    unsupportedTypePlural: "{count} file non avevano un tipo supportato e sono stati ignorati.",
    tooLarge: "{name} è troppo grande (max {max}) ed è stato ignorato.",
    tooLargePlural: "{count} file erano troppo grandi (max {max}) e sono stati ignorati.",
    maxFilesReached: "Hai già aggiunto il massimo di {max} file per questo strumento.",
    maxFilesExceeded: "Questo strumento consente fino a {max} file alla volta, quindi sono stati aggiunti solo {added} dei tuoi file.",
  },
  fileList: { moveUp: "Sposta su", moveDown: "Sposta giù", remove: "Rimuovi {name}" },
  result: {
    ready: "Il tuo file è pronto",
    download: "Scarica",
    startOver: "Ricomincia",
    smaller: "più piccolo",
    originalSize: "Dimensione originale",
    newSize: "Nuova dimensione",
    reducedBy: "Ridotto del",
    spaceSaved: "Spazio risparmiato",
  },
  notFound: {
    title: "Pagina non trovata",
    description: "La pagina che stai cercando non esiste o potrebbe essere stata spostata.",
    cta: "Torna alla home",
  },
};
