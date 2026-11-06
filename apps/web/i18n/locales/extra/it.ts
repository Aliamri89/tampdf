import type { Dictionary } from "../../dictionaries";
import type { DeepPartial } from "../../merge";

/** Translations of the cookie-consent, legal-page, advertising and watermark copy. */
export const extra: DeepPartial<Dictionary> = {
  tool: {
    adLabel: "Pubblicità"
  },
  workspace: {
    addWatermark: {
      previewLabelImage: "Anteprima — applicata all'immagine",
      formatsNote: "File supportati: PDF, JPG, PNG e WebP"
    },
    removeWatermark: {
      intro: "Rimuove le filigrane aggiunte come oggetti filigrana: nei PDF (da Adobe Acrobat, TAMPDF e dalla maggior parte degli editor) e nei documenti Word (Progettazione ▸ Filigrana). Le filigrane incorporate nei pixel di un'immagine non si possono separare dall'immagine, perciò le immagini non sono supportate.",
      formatsNote: "File supportati: PDF e Word (.docx)",
      noneFoundWord: "Nessuna filigrana di Word trovata in questo documento. Si possono rimuovere solo le filigrane aggiunte con la funzione Filigrana di Word."
    }
  },
  consent: {
    title: "Cookie e analisi",
    description: "Usiamo cookie di analisi (Google Analytics e Microsoft Clarity) per capire come viene usato il sito. Funzionano solo se accetti. I tuoi file non lasciano mai il tuo browser.",
    accept: "Accetta",
    reject: "Rifiuta",
    settings: "Impostazioni dei cookie",
    statusOn: "I cookie di analisi sono attualmente attivi.",
    statusOff: "I cookie di analisi sono attualmente disattivati.",
    close: "Chiudi"
  },
  staticPages: {
    privacyPolicy: {
      intro: "Come TAMPDF tratta i tuoi file e i tuoi dati: i file vengono elaborati nel browser e mai caricati; cosa raccolgono analisi, cookie e pubblicità; e i tuoi diritti.",
      updated: "Ultimo aggiornamento: 6 novembre 2026.",
      sections: [
        {
          heading: "Panoramica",
          text: "TAMPDF (tampdf.com) offre strumenti gratuiti nel browser per PDF e immagini. Questa informativa spiega cosa raccogliamo e cosa no."
        },
        {
          heading: "I tuoi file restano sul tuo dispositivo",
          text: "I file vengono elaborati localmente nel tuo browser e non sono mai caricati, archiviati o condivisi con i nostri server o con terzi. Se scegli «Salva su Google Drive» o «Salva su Dropbox», il browser invia il risultato direttamente al servizio a cui hai effettuato l'accesso; noi non lo riceviamo mai."
        },
        {
          heading: "Informazioni raccolte automaticamente",
          text: "Per capire come viene usato il sito teniamo semplici contatori interni sul nostro server e, solo con il tuo consenso dove richiesto, usiamo Google Analytics e Microsoft Clarity. Possono registrare le pagine visitate, la posizione approssimativa, il dispositivo, il browser, la lingua, il sito di provenienza, quale strumento hai usato e se ha funzionato. Non raccogliamo mai il tuo nome, il tuo indirizzo email né il contenuto dei tuoi file."
        },
        {
          heading: "Cookie e tecnologie simili",
          text: "I servizi di analisi e pubblicità possono impostare cookie o usare l'archiviazione locale. La nostra Cookie Policy li elenca e spiega come controllarli, e puoi cambiare la tua scelta in qualsiasi momento con «Impostazioni dei cookie» nel piè di pagina."
        },
        {
          heading: "I tuoi diritti",
          text: "Dove si applicano leggi come il GDPR, il GDPR del Regno Unito o il CCPA, puoi chiedere di accedere ai dati personali che conserviamo su di te, correggerli o cancellarli, opporti al loro trattamento o limitarlo, revocare il consenso in qualsiasi momento e presentare reclamo alla tua autorità per la protezione dei dati. Usa la pagina Contatti per inviare la richiesta."
        },
        {
          heading: "Conservazione dei dati",
          text: "I dati di analisi vengono conservati solo per il tempo necessario alle statistiche e al miglioramento del servizio, secondo le impostazioni di conservazione di ciascun fornitore."
        },
        {
          heading: "Servizi e link di terze parti",
          text: "Il sito può rimandare a servizi di altre aziende o caricarli (ad esempio Google, Microsoft e Dropbox). Hanno le proprie informative sulla privacy e non ne siamo responsabili."
        },
        {
          heading: "Minori",
          text: "TAMPDF non è rivolto ai minori di 13 anni (o di 16 dove la legge locale lo richiede) e non raccogliamo consapevolmente le loro informazioni personali."
        },
        {
          heading: "Sicurezza",
          text: "I file vengono elaborati nel tuo browser e non ci vengono mai inviati. Il sito è servito tramite HTTPS."
        },
        {
          heading: "Modifiche a questa informativa",
          text: "Possiamo aggiornare questa informativa; la data «Ultimo aggiornamento» indica la versione più recente. Continuare a usare il sito significa accettare l'aggiornamento."
        },
        {
          heading: "Contatti",
          text: "Domande su questa informativa? Usa la pagina Contatti."
        }
      ]
    },
    cookiePolicy: {
      intro: "I cookie e le tecnologie simili che TAMPDF usa per preferenze, analisi e pubblicità, e come controllarli.",
      updated: "Ultimo aggiornamento: 6 novembre 2026.",
      sections: [
        {
          heading: "Cosa sono i cookie?",
          text: "Piccoli file di testo che un sito web salva sul tuo dispositivo. Tecnologie simili, come l'archiviazione locale e i pixel, funzionano in modo analogo; questa informativa le comprende tutte."
        },
        {
          heading: "Archiviazione strettamente necessaria",
          text: "TAMPDF ricorda il tuo tema chiaro/scuro e la tua scelta sui cookie nell'archiviazione locale del browser. Non contengono dati personali e non ci vengono mai inviati."
        },
        {
          heading: "Cookie di analisi",
          text: "Con il tuo consenso dove richiesto, usiamo Google Analytics 4 (cookie come _ga e _ga_*) e Microsoft Clarity (come _clck e _clsk) per misurare il traffico e capire come viene usato il sito; Clarity può inoltre creare registrazioni di sessione e mappe di calore anonimizzate."
        },
        {
          heading: "Gestire la tua scelta",
          text: "Dove il consenso è richiesto puoi accettare o rifiutare i cookie di analisi nel banner e cambiare idea in qualsiasi momento con «Impostazioni dei cookie» nel piè di pagina; revocare il consenso interrompe gli script di analisi ed elimina i loro cookie. Puoi anche bloccare i cookie nel browser: gli strumenti continuano a funzionare perché i file sono elaborati localmente."
        },
        {
          heading: "Altri controlli",
          text: "Puoi rifiutare la pubblicità personalizzata su https://adssettings.google.com o https://www.aboutads.info/choices (https://www.youronlinechoices.eu in Europa) e gestire i dati Microsoft su https://account.microsoft.com/privacy."
        },
        {
          heading: "Modifiche e contatti",
          text: "Possiamo aggiornare questa informativa; la data qui sopra indica la versione più recente. Domande? Usa la pagina Contatti."
        }
      ]
    },
    termsOfService: {
      sections: [
        {
          heading: "Accettazione dei termini",
          text: "Usando TAMPDF accetti i presenti Termini di servizio. Se non sei d'accordo, non usare i nostri strumenti."
        },
        {
          heading: "Il servizio",
          text: "TAMPDF offre strumenti gratuiti nel browser per lavorare con PDF e immagini. Tutta l'elaborazione avviene localmente nel tuo browser; i tuoi file non vengono mai caricati sui nostri server."
        },
        {
          heading: "Esclusione di garanzie",
          text: "Gli strumenti sono forniti «così come sono» e «come disponibili», senza garanzie di alcun tipo, espresse o implicite, comprese accuratezza, affidabilità, commerciabilità o idoneità a uno scopo particolare. Non garantiamo che siano privi di errori, ininterrotti o compatibili con ogni file, browser o dispositivo."
        },
        {
          heading: "Limitazione di responsabilità",
          text: "Nella misura massima consentita dalla legge, TAMPDF e i suoi proprietari non sono responsabili di danni indiretti, incidentali, speciali o consequenziali — inclusi perdita di dati, corruzione di file o interruzione dell'attività — derivanti dall'uso o dall'impossibilità di usare gli strumenti."
        },
        {
          heading: "I tuoi file",
          text: "Sei responsabile di conservare copie di backup degli originali e di verificare ogni risultato prima di farvi affidamento. Poiché l'elaborazione avviene nel tuo browser, non possiamo accedere ai tuoi file né recuperarli."
        },
        {
          heading: "Uso consentito",
          text: "Usa TAMPDF solo per scopi leciti e solo con file che hai il diritto di elaborare. Non usare gli strumenti per violare i diritti altrui, per rimuovere filigrane o protezioni da contenuti che non puoi modificare, né per disturbare il sito."
        },
        {
          heading: "Servizi di terze parti e pubblicità",
          text: "Il sito può mostrare pubblicità e rimandare a servizi di terze parti o integrarli (come Google AdSense, Google Drive e Dropbox). Non li controlliamo; il loro uso è regolato dai rispettivi termini e informative sulla privacy."
        },
        {
          heading: "Proprietà intellettuale",
          text: "Il nome, il logo, il design, i testi e il codice di TAMPDF appartengono a TAMPDF o ai suoi licenziatari. I tuoi file restano tuoi; non rivendichiamo alcun diritto su di essi."
        },
        {
          heading: "Modifiche ai termini",
          text: "Possiamo aggiornare questi termini di tanto in tanto. Continuare a usare TAMPDF dopo la pubblicazione delle modifiche significa accettarle."
        }
      ]
    },
    adsDisclosure: {
      heading: "Pubblicità",
      paragraphs: [
        "Usiamo Google AdSense per mostrare annunci. Google e i suoi partner sono fornitori terzi che usano cookie, web beacon e tecnologie simili per pubblicare annunci in base alle tue visite precedenti a questo e ad altri siti web.",
        "Puoi rifiutare la pubblicità personalizzata nelle Impostazioni annunci di Google (https://adssettings.google.com) o su https://www.aboutads.info/choices, e leggere come Google usa i dati dei siti che usano i suoi servizi su https://policies.google.com/technologies/partner-sites.",
        "Nello Spazio economico europeo, nel Regno Unito e in Svizzera gli annunci sono personalizzati solo con il tuo consenso, che puoi dare o revocare tramite il messaggio di consenso mostrato sul sito."
      ]
    }
  }
};
