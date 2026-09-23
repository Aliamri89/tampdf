import type { ToolTranslationOverride } from "./tools-ar";

export const toolsIt: Record<string, ToolTranslationOverride> = {
  "compress-pdf": {
    name: "Comprimi PDF",
    actionLabel: "Comprimi PDF",
    shortDescription: "Riduci la dimensione di un PDF per condividerlo e caricarlo più facilmente, direttamente nel tuo browser.",
    longDescription: [
      "Comprimi PDF riduce la dimensione del file ricodificando le immagini incorporate ed eliminando dati non necessari, così il tuo documento è più facile da inviare via email, caricare o archiviare.",
      "Scegli un livello di compressione per bilanciare dimensione e qualità visiva, e confronta la dimensione prima/dopo prima di scaricare.",
    ],
    faq: [
      { question: "Di quanto si ridurrà il mio PDF?", answer: "Dipende dal contenuto. I PDF con immagini grandi incorporate di solito si riducono di più, a volte del 50-90%. I PDF ricchi di testo si comprimono meno perché c'è meno da ottimizzare." },
      { question: "La compressione renderà sfocato il mio PDF?", answer: "Con l'impostazione predefinita, la perdita di qualità è minima. Con il livello di compressione più forte, le immagini vengono ridotte più aggressivamente, il che può ridurre la nitidezza con lo zoom." },
      { question: "La compressione avviene sui server di TAMPDF?", answer: "No. Comprimi PDF funziona localmente nel tuo browser, quindi il tuo file non viene mai caricato da nessuna parte." },
      { question: "Posso comprimere un PDF protetto da password?", answer: "Non attualmente. Rimuovi prima la protezione con un altro strumento, poi comprimi il file." },
    ],
  },
  "pdf-to-jpg": {
    name: "Da PDF a JPG",
    actionLabel: "Converti in JPG",
    shortDescription: "Trasforma ogni pagina di un PDF in un'immagine JPG di alta qualità.",
    longDescription: [
      "Da PDF a JPG converte ogni pagina del tuo PDF in un'immagine JPG separata, pronta per essere condivisa, modificata o inserita in una presentazione. Un PDF di una pagina si scarica come un JPG; i PDF a più pagine vengono raggruppati in un file .zip.",
      "La conversione avviene direttamente nel tuo browser tramite PDF.js, quindi il tuo documento non viene mai caricato su un server.",
    ],
    faq: [
      { question: "Cosa succede se il mio PDF ha più pagine?", answer: "Ogni pagina diventa una propria immagine JPG. Se ce n'è più di una, vengono raggruppate in un unico file .zip da scaricare." },
      { question: "Quanto saranno nitide le immagini?", answer: "Le pagine vengono renderizzate ad alta risoluzione, adatta a schermi e alla maggior parte delle esigenze di stampa. Scegli il livello di qualità per bilanciare nitidezza e dimensione file." },
      { question: "Il mio PDF viene caricato da qualche parte?", answer: "No. Da PDF a JPG elabora ogni pagina localmente nel tuo browser, quindi il tuo file non lascia mai il tuo dispositivo." },
      { question: "Posso convertire solo una pagina invece di tutto il documento?", answer: "Attualmente vengono convertite tutte le pagine. Usa Unisci PDF o un lettore PDF per isolare prima una singola pagina se ti serve solo un'immagine." },
    ],
  },
  "merge-pdf": {
    name: "Unisci PDF",
    actionLabel: "Unisci PDF",
    shortDescription: "Combina più file PDF in un unico documento, nell'ordine che preferisci.",
    longDescription: [
      "Unisci PDF ti permette di combinare due o più file PDF in un unico documento senza installare nulla. Aggiungi i tuoi file, trascinali per riordinarli, e scarica un unico PDF unito.",
      "Tutto funziona localmente nel tuo browser, quindi i tuoi file non vengono mai caricati su un server. Questo significa che funziona anche con contratti, report o documenti personali sensibili.",
    ],
    faq: [
      { question: "C'è un limite al numero di PDF che posso unire?", answer: "Nessun limite fisso. Poiché l'unione avviene nel tuo browser, il limite pratico è la memoria del tuo dispositivo, non una quota del server." },
      { question: "Posso cambiare l'ordine delle pagine prima di unire?", answer: "Sì. Dopo aver aggiunto i tuoi file, trascinali nell'ordine che vuoi che segua il documento finale prima di unirli." },
      { question: "I miei file vengono caricati sui server di TAMPDF?", answer: "No. Unisci PDF elabora i file interamente nel tuo browser con tecnologia lato client, quindi i tuoi documenti non lasciano mai il tuo dispositivo." },
      { question: "L'unione influirà sulla qualità dei miei PDF?", answer: "No. Le pagine vengono combinate così come sono, senza ricompressione, quindi testo, immagini e formattazione restano esattamente come negli originali." },
    ],
  },
  "rotate-pdf": {
    name: "Ruota PDF",
    actionLabel: "Ruota PDF",
    shortDescription: "Ruota singole pagine o un intero PDF di 90°, 180° o 270°, direttamente nel tuo browser.",
    longDescription: [
      "Ruota PDF ti permette di correggere pagine storte o capovolte in pochi secondi. Carica uno o più PDF, visualizza una miniatura di ogni pagina, poi ruota l'intero documento in una volta o solo le pagine che ne hanno bisogno.",
      "Tutto funziona localmente nel tuo browser, quindi i tuoi file non vengono mai caricati su un server. Carica più PDF contemporaneamente e ognuno viene ruotato e restituito indipendentemente.",
    ],
    faq: [
      { question: "Posso ruotare solo una pagina invece di tutto il documento?", answer: "Sì. Clicca sul pulsante di rotazione di una pagina per ruotare solo quella, oppure usa i pulsanti ruota-tutto per applicare la stessa rotazione a tutte le pagine contemporaneamente." },
      { question: "Quali angoli di rotazione sono supportati?", answer: "Puoi ruotare le pagine di 90°, 180° o 270° in entrambe le direzioni." },
      { question: "Posso ruotare più di un PDF alla volta?", answer: "Sì. Carica più PDF e ognuno viene ruotato indipendentemente. Se carichi più di un file, i PDF ruotati vengono raggruppati in un .zip da scaricare." },
      { question: "Il mio PDF viene caricato da qualche parte?", answer: "No. Ruota PDF elabora tutto localmente nel tuo browser, quindi i tuoi file non lasciano mai il tuo dispositivo." },
    ],
  },
  "compress-image": {
    name: "Comprimi immagine",
    actionLabel: "Comprimi immagini",
    shortDescription: "Riduci la dimensione di file JPG, PNG e WebP mantenendo intatta la qualità visiva.",
    longDescription: [
      "Comprimi immagine riduce la dimensione dei tuoi file JPG, PNG o WebP, rendendoli più veloci da caricare, inviare via email e caricare sui siti web.",
      "La compressione avviene interamente nel tuo browser usando l'API canvas, quindi le tue foto non lasciano mai il tuo dispositivo, e puoi comprimere più immagini contemporaneamente.",
    ],
    faq: [
      { question: "Quali formati di immagine sono supportati?", answer: "Le immagini JPG, PNG e WebP sono supportate sia in input che in output." },
      { question: "Posso comprimere più immagini alla volta?", answer: "Sì. Aggiungi tutte le immagini che vuoi e verranno ciascuna compressa e raggruppata in un unico .zip da scaricare, o scaricate individualmente." },
      { question: "Di quanto posso ridurre un'immagine senza perdere qualità?", answer: "L'impostazione di qualità predefinita di solito riduce la dimensione del file del 60-80% senza differenza visibile. Puoi regolare il cursore della qualità per un compromesso diverso." },
      { question: "Le mie foto vengono caricate su un server?", answer: "No. La compressione avviene localmente nel tuo browser usando l'API canvas, quindi le tue immagini non vengono mai inviate da nessuna parte." },
    ],
  },
  "image-to-pdf": {
    name: "Da JPG a PDF",
    actionLabel: "Converti in PDF",
    shortDescription: "Trasforma una o più immagini JPG in un unico documento PDF.",
    longDescription: [
      "Da JPG a PDF combina le tue foto JPG in un unico file PDF, un'immagine per pagina, nell'ordine che preferisci.",
      "Perfetto per trasformare documenti scansionati, ricevute o foto in un PDF facile da condividere. Tutto viene elaborato localmente nel tuo browser per la massima privacy.",
    ],
    faq: [
      { question: "Posso combinare più immagini in un unico PDF?", answer: "Sì. Aggiungi più immagini e ciascuna diventerà una pagina nel PDF risultante, nell'ordine in cui le organizzi." },
      { question: "Che formato di pagina viene usato per il PDF?", answer: "Ogni pagina viene dimensionata in base alle dimensioni e all'orientamento dell'immagine di origine, così nulla viene ritagliato o allungato." },
      { question: "Le mie immagini vengono caricate da qualche parte?", answer: "No. La conversione avviene interamente nel tuo browser, quindi le tue immagini restano sul tuo dispositivo." },
      { question: "Supporta anche le immagini PNG?", answer: "Sì, le immagini PNG sono supportate insieme a JPG. Le foto HEIC di un iPhone non sono ancora supportate; convertile prima in JPG usando le opzioni di condivisione del tuo telefono." },
    ],
  },
  "rotate-images": {
    name: "Ruota immagini",
    actionLabel: "Ruota immagini",
    shortDescription: "Ruota una o più immagini JPG, PNG o WebP di 90°, 180° o 270°.",
    longDescription: [
      "Ruota immagini corregge foto storte o capovolte in pochi secondi. Carica una o più immagini, ruota ciascuna individualmente o tutte insieme, e scarica i risultati.",
      "Tutto funziona localmente nel tuo browser, quindi le tue foto non vengono mai caricate su un server. Carica più immagini contemporaneamente e ciascuna viene ruotata e restituita indipendentemente.",
    ],
    faq: [
      { question: "Quali formati di immagine sono supportati?", answer: "Sono supportate le immagini JPG, PNG e WebP. La rotazione preserva il formato originale." },
      { question: "Posso ruotare solo un'immagine invece di tutte?", answer: "Sì. Clicca sul pulsante di rotazione di un'immagine per ruotare solo quella, oppure usa i pulsanti ruota-tutto per applicare la stessa rotazione a tutte contemporaneamente." },
      { question: "Quali angoli di rotazione sono supportati?", answer: "Puoi ruotare le immagini di 90°, 180° o 270°." },
      { question: "Le mie foto vengono caricate da qualche parte?", answer: "No. Ruota immagini elabora tutto localmente nel tuo browser, quindi le tue foto non lasciano mai il tuo dispositivo." },
    ],
  },
  "split-pdf": {
    name: "Dividi PDF",
    actionLabel: "Dividi PDF",
    shortDescription: "Dividi un PDF in più file più piccoli per intervalli di pagine o in parti di dimensione fissa.",
    longDescription: [
      "Dividi PDF separa un documento grande in file PDF distinti senza modificare le pagine stesse. Inserisci intervalli come 1-3, 5, 8-10 per estrarre esattamente le sezioni di cui hai bisogno, oppure dividi l'intero documento in parti uguali con un numero fisso di pagine.",
      "Tutto funziona nel tuo browser — il PDF non viene mai caricato su un server. Un unico output si scarica come un PDF; più parti vengono raggruppate in un .zip.",
    ],
    faq: [
      { question: "Come scelgo quali pagine vanno in ciascun file?", answer: "Usa il campo degli intervalli: qualcosa come «1-3, 5, 8-10» produce tre PDF — pagine da 1 a 3, la pagina 5 da sola, e pagine da 8 a 10. Oppure passa a «ogni N pagine» per tagliare il documento in parti uguali." },
      { question: "I file divisi mantengono la qualità originale?", answer: "Sì. Le pagine vengono copiate così come sono, senza ricompressione, quindi testo, immagini, font e layout sono identici all'origine." },
      { question: "Il mio PDF viene caricato da qualche parte?", answer: "No. La divisione avviene interamente nel tuo browser, quindi il tuo documento non lascia mai il tuo dispositivo." },
      { question: "Cosa succede ai campi modulo o alle firme digitali?", answer: "Il contenuto delle pagine e i widget dei moduli vengono preservati visivamente, ma il comportamento interattivo dei moduli e le firme non vengono trasferiti nei file divisi. Appiattiscili o firmali di nuovo dopo, se necessario." },
    ],
  },
  "delete-pdf-pages": {
    name: "Elimina pagine PDF",
    actionLabel: "Elimina pagine",
    shortDescription: "Rimuovi le pagine indesiderate da un PDF e scarica il documento ridotto.",
    longDescription: [
      "Elimina pagine PDF ti permette di scartare le pagine che non ti servono — scansioni vuote, copertine, pagine duplicate — e mantenere il resto nell'ordine originale. Visualizza una miniatura di ogni pagina, tocca quelle da rimuovere, e scarica il risultato.",
      "L'intero processo avviene localmente nel tuo browser, quindi il tuo PDF non viene mai caricato. Le pagine rimanenti vengono copiate senza ricompressione, così nulla perde qualità.",
    ],
    faq: [
      { question: "Posso eliminare più di una pagina alla volta?", answer: "Sì. Seleziona tutte le pagine che vuoi nella griglia delle miniature, poi eliminale tutte in un unico passaggio." },
      { question: "Posso rimuovere tutte le pagine?", answer: "No — almeno una pagina deve rimanere, quindi il pulsante è disabilitato se le hai selezionate tutte." },
      { question: "Eliminare pagine riduce la dimensione del file?", answer: "Di solito un po', poiché il contenuto delle pagine rimosse viene eliminato. Le risorse condivise come i font potrebbero rimanere, quindi usa Comprimi PDF dopo se la dimensione è importante." },
      { question: "I miei file vengono caricati su un server?", answer: "No. Tutto avviene nel tuo browser e il tuo PDF non lascia mai il tuo dispositivo." },
    ],
  },
  "reorder-pdf-pages": {
    name: "Riordina pagine PDF",
    actionLabel: "Riordina pagine",
    shortDescription: "Trascina le pagine di un PDF in un nuovo ordine e salva il documento riorganizzato.",
    longDescription: [
      "Riordina pagine PDF ti mostra una miniatura di ogni pagina che puoi trascinare nell'ordine desiderato — spostare una pagina all'inizio, scambiare due sezioni, o invertire l'intero documento. Ci sono anche pulsanti di spostamento per modifiche precise, pagina per pagina.",
      "Il riordino avviene interamente nel tuo browser, quindi il tuo PDF non viene mai caricato. Le pagine vengono copiate così come sono, quindi qualità e formattazione restano intatte.",
    ],
    faq: [
      { question: "Come sposto una pagina?", answer: "Trascina la sua miniatura nella nuova posizione, oppure usa i pulsanti su/giù su ciascuna pagina per passi singoli. Il nuovo ordine viene salvato quando clicchi sul pulsante." },
      { question: "Posso invertire l'intero documento?", answer: "Sì — trascina le pagine in ordine inverso, oppure usa i pulsanti di spostamento. Qualsiasi numero di pagine può essere riorganizzato in un unico passaggio." },
      { question: "Il riordino cambierà il contenuto delle pagine?", answer: "No. Cambia solo l'ordine delle pagine — testo, immagini e layout di ciascuna pagina restano esattamente gli stessi." },
      { question: "Il PDF viene caricato da qualche parte?", answer: "No. Il riordino avviene localmente nel tuo browser e il tuo file non lascia mai il tuo dispositivo." },
    ],
  },
  "crop-pdf": {
    name: "Ritaglia PDF",
    actionLabel: "Ritaglia PDF",
    shortDescription: "Ritaglia i margini di ogni pagina del PDF impostando i valori superiore, inferiore e laterali.",
    longDescription: [
      "Ritaglia PDF rimuove spazio bianco indesiderato o bordi di scansione dai margini delle tue pagine. Imposta quanto ritagliare in alto, in basso, a sinistra e a destra come percentuale, osserva l'anteprima in tempo reale, e applica a tutte le pagine contemporaneamente.",
      "Il ritaglio regola l'area visibile della pagina senza eliminare alcun contenuto — le parti ritagliate vengono semplicemente nascoste. Tutto funziona nel tuo browser, quindi il tuo PDF non viene mai caricato.",
    ],
    faq: [
      { question: "Il ritaglio elimina il contenuto fuori dall'area ritagliata?", answer: "No. Ritaglia PDF cambia il riquadro di ritaglio della pagina, che nasconde l'area esterna nei visualizzatori e in stampa. Il contenuto sottostante resta nel file e può essere ripristinato." },
      { question: "Lo stesso ritaglio viene applicato a tutte le pagine?", answer: "Sì. I margini che imposti vengono applicati a tutte le pagine. Le pagine di dimensioni diverse vengono ciascuna ritagliate della stessa percentuale." },
      { question: "Posso ritagliare un documento scansionato per rimuovere il bordo nero?", answer: "Sì — è un uso comune. Aumenta i margini finché l'anteprima non mostra solo il contenuto che vuoi conservare." },
      { question: "Il mio file viene caricato su un server?", answer: "No. Il ritaglio avviene interamente nel tuo browser e il tuo PDF resta sul tuo dispositivo." },
    ],
  },
  "resize-pdf": {
    name: "Ridimensiona PDF",
    actionLabel: "Ridimensiona PDF",
    shortDescription: "Cambia il formato pagina del PDF in A4, Letter o una scala personalizzata, con il contenuto adattato e centrato.",
    longDescription: [
      "Ridimensiona PDF cambia il formato fisico delle pagine del tuo documento. Scegli un formato standard come A4 o US Letter e ogni pagina viene scalata per adattarsi e centrata, oppure usa una percentuale per ridurre o ingrandire le pagine proporzionalmente.",
      "Il ridimensionamento avviene nel tuo browser senza caricamento. Il contenuto viene scalato insieme alla pagina, quindi nulla viene tagliato e il layout resta proporzionale.",
    ],
    faq: [
      { question: "Quali formati di pagina posso scegliere?", answer: "A4 e US Letter in verticale o orizzontale, più A3 e A5. Puoi anche inserire una percentuale di scala per ridimensionare senza cambiare le proporzioni." },
      { question: "Il mio contenuto verrà distorto?", answer: "No. Il contenuto viene scalato uniformemente per adattarsi al nuovo formato e centrato sulla pagina, così le proporzioni sono preservate e nulla viene tagliato." },
      { question: "Posso ridurre la dimensione del file di un PDF con questo?", answer: "Non direttamente — questo cambia le dimensioni della pagina, non il peso del file. Usa Comprimi PDF per ridurre la dimensione del file." },
      { question: "I miei file vengono caricati da qualche parte?", answer: "No. Il ridimensionamento avviene localmente nel tuo browser e il tuo PDF non lascia mai il tuo dispositivo." },
    ],
  },
  "png-to-pdf": {
    name: "Da PNG a PDF",
    actionLabel: "Converti in PDF",
    shortDescription: "Trasforma una o più immagini PNG in un unico documento PDF, un'immagine per pagina.",
    longDescription: [
      "Da PNG a PDF combina le tue immagini PNG in un unico file PDF, con ogni immagine sulla propria pagina alla risoluzione originale. Aggiungi più immagini, disponi il loro ordine, e scarica un unico documento.",
      "Ottimo per trasformare screenshot, diagrammi o grafica esportata in un PDF facile da condividere. La conversione avviene interamente nel tuo browser, quindi le tue immagini non vengono mai caricate. Le aree trasparenti vengono poste su uno sfondo bianco.",
    ],
    faq: [
      { question: "Posso combinare più PNG in un unico PDF?", answer: "Sì. Aggiungi tutte le immagini PNG che vuoi e ciascuna diventerà una pagina nel PDF risultante, nell'ordine in cui le organizzi." },
      { question: "Che formato di pagina viene usato?", answer: "Ogni pagina corrisponde alle dimensioni in pixel dell'immagine di origine, così le immagini non vengono ritagliate o allungate." },
      { question: "Cosa succede alle parti trasparenti dell'immagine?", answer: "La trasparenza viene appiattita su uno sfondo bianco così la pagina appare uguale in tutti i visualizzatori PDF." },
      { question: "Le mie immagini vengono caricate su un server?", answer: "No. La conversione avviene interamente nel tuo browser e le tue immagini restano sul tuo dispositivo." },
    ],
  },
  "extract-pdf-pages": {
    name: "Estrai pagine PDF",
    actionLabel: "Estrai pagine",
    shortDescription: "Estrai le pagine scelte da un PDF in un nuovo file, oppure salva ogni pagina come PDF a sé stante.",
    longDescription: [
      "Estrai pagine PDF ti permette di scegliere esattamente le pagine di cui hai bisogno da un documento e salvarle come nuovo PDF. Visualizza una miniatura di ogni pagina, tocca quelle da conservare, e scaricale insieme — oppure come PDF separati di una pagina in un file ZIP.",
      "Il tuo file originale resta invariato, e le pagine vengono copiate così come sono, quindi testo, immagini e formattazione restano intatti. Tutto avviene nel tuo browser, quindi il PDF non viene mai caricato.",
    ],
    faq: [
      { question: "Qual è la differenza tra estrarre e dividere?", answer: "Estrarre salva solo le pagine selezionate in un nuovo PDF. Dividere separa l'intero documento in più parti per intervalli di pagine o dimensioni fisse." },
      { question: "Posso salvare ogni pagina estratta come file separato?", answer: "Sì. Scegli «PDF separati» e ogni pagina selezionata diventa il proprio PDF, raggruppati in un unico download .zip." },
      { question: "Le pagine estratte perderanno qualità?", answer: "No. Le pagine vengono copiate senza ricompressione, quindi appaiono esattamente come l'originale. I campi modulo interattivi potrebbero diventare contenuto di pagina normale." },
      { question: "Il mio PDF viene caricato su un server?", answer: "No. Le pagine vengono estratte localmente nel tuo browser e il tuo file non lascia mai il tuo dispositivo." },
    ],
  },
  "add-page-numbers": {
    name: "Aggiungi numeri di pagina",
    actionLabel: "Aggiungi numeri di pagina",
    shortDescription: "Numera le pagine di un PDF, scegliendo posizione, formato e numero iniziale.",
    longDescription: [
      "Aggiungi numeri di pagina applica un numero su ogni pagina del tuo PDF. Scegli tra sei posizioni, uno stile come «1», «1 / 10» o «Pagina 1 di 10», imposta il numero iniziale, e salta opzionalmente la copertina.",
      "I numeri vengono disegnati come testo reale in un font standard, così si stampano nitidamente e restano dritti anche su pagine ruotate. L'intero processo avviene nel tuo browser — il tuo documento non viene mai caricato.",
    ],
    faq: [
      { question: "Posso iniziare la numerazione da un numero diverso da 1?", answer: "Sì. Imposta qualsiasi numero iniziale — utile quando il tuo PDF è un capitolo o appendice di un documento più grande." },
      { question: "Posso lasciare la copertina senza numero?", answer: "Sì. Attiva «Non numerare la prima pagina» e la numerazione inizia dalla seconda pagina." },
      { question: "Quali cifre vengono usate?", answer: "Cifre standard (1, 2, 3), che si visualizzano correttamente in ogni lettore PDF. Etichette come «Pagina 1 di 10» sono scritte in italiano." },
      { question: "Il mio file viene caricato?", answer: "No. I numeri di pagina vengono aggiunti localmente nel tuo browser e il tuo PDF resta sul tuo dispositivo." },
    ],
  },
  "add-watermark": {
    name: "Aggiungi filigrana",
    actionLabel: "Aggiungi filigrana",
    shortDescription: "Applica un testo come RISERVATO o BOZZA su ogni pagina di un PDF.",
    longDescription: [
      "Aggiungi filigrana posiziona il tuo testo su ogni pagina di un PDF — una volta al centro o ripetuto su tutta la pagina. Scegli colore, opacità, dimensione e angolo, e vedi un'anteprima dal vivo sulla prima pagina prima di applicarlo.",
      "L'italiano e altre scritture sono pienamente supportati. La filigrana viene salvata come oggetto filigrana standard, e tutto avviene nel tuo browser, quindi il tuo documento non viene mai caricato.",
    ],
    faq: [
      { question: "Posso scrivere la filigrana in italiano?", answer: "Sì. Il testo viene renderizzato con i font del tuo browser, quindi l'italiano e altre scritture vengono rappresentati correttamente." },
      { question: "La filigrana può essere ripetuta sulla pagina?", answer: "Sì. Scegli il layout «Ripetuto» per disporre il testo a mosaico su ogni pagina, oppure «Una volta, centrato» per un singolo timbro." },
      { question: "La filigrana può essere rimossa in seguito?", answer: "Viene salvata come oggetto filigrana standard, quindi strumenti che riconoscono le filigrane — incluso Rimuovi filigrana di TAMPDF — possono rimuoverla. Non è una misura di sicurezza." },
      { question: "Il mio PDF viene caricato da qualche parte?", answer: "No. La filigrana viene applicata localmente nel tuo browser." },
    ],
  },
  "remove-watermark": {
    name: "Rimuovi filigrana",
    actionLabel: "Rimuovi filigrana",
    shortDescription: "Rimuovi le filigrane aggiunte come oggetti filigrana in un PDF.",
    longDescription: [
      "Rimuovi filigrana trova ed elimina le filigrane aggiunte come oggetti filigrana — il tipo creato da Adobe Acrobat, TAMPDF e la maggior parte degli editor PDF — insieme ad annotazioni filigrana e livelli chiamati «Watermark». Il resto di ogni pagina resta esattamente com'era.",
      "Le filigrane che fanno parte di un'immagine scansionata o fuse nel testo normale della pagina non hanno alcun marcatore che le distingua dal contenuto reale, quindi non possono essere rimosse automaticamente. Rimuovi filigrane solo da documenti che hai il diritto di modificare. L'elaborazione avviene nel tuo browser, quindi il tuo file non viene mai caricato.",
    ],
    faq: [
      { question: "Quali filigrane possono essere rimosse?", answer: "Filigrane aggiunte come oggetti filigrana, annotazioni filigrana, o livelli chiamati «Watermark» — incluse quelle create da Adobe Acrobat e dallo strumento Aggiungi filigrana di TAMPDF." },
      { question: "Perché la filigrana nel mio file non è stata rimossa?", answer: "Se una filigrana fa parte dell'immagine scansionata di una pagina o è stata appiattita nel testo della pagina, non può essere separata dal contenuto reale senza danneggiare la pagina." },
      { question: "Rimuovere una filigrana influisce sul resto della pagina?", answer: "No. Viene rimosso solo il contenuto marcato come filigrana; testo, immagini e layout restano intatti." },
      { question: "Il mio file viene caricato?", answer: "No. Il PDF viene elaborato localmente nel tuo browser." },
    ],
  },
  "pdf-to-images": {
    name: "Da PDF a immagini",
    actionLabel: "Converti in immagini",
    shortDescription: "Converti ogni pagina di un PDF in immagini PNG, JPG o WEBP, scaricate come file ZIP.",
    longDescription: [
      "Da PDF a immagini renderizza ogni pagina del tuo PDF come immagine separata nel formato che scegli: PNG per il testo più nitido, JPG per i file più piccoli, o WEBP per immagini moderne e compatte. Scegli una risoluzione e ogni pagina viene esportata e raggruppata in un unico .zip.",
      "Il rendering avviene direttamente nel tuo browser tramite PDF.js, quindi il tuo documento non viene mai caricato su un server.",
    ],
    faq: [
      { question: "Quale formato immagine dovrei scegliere?", answer: "PNG mantiene testo e grafica perfettamente nitidi. JPG produce file più piccoli ed è adatto alle foto. WEBP offre un buon equilibrio per l'uso sul web." },
      { question: "Che risoluzione hanno le immagini?", answer: "Standard renderizza a 108 dpi, Alta a 144 dpi, e Massima a 216 dpi — abbastanza per stampare la maggior parte dei documenti." },
      { question: "Come ottengo tutte le pagine in una volta?", answer: "Ogni pagina viene convertita e impacchettata in un file .zip. Un PDF di una pagina si scarica come una singola immagine." },
      { question: "Il mio PDF viene caricato?", answer: "No. Le pagine vengono renderizzate localmente nel tuo browser." },
    ],
  },
  "images-to-pdf": {
    name: "Da immagini a PDF",
    actionLabel: "Crea PDF",
    shortDescription: "Combina immagini JPG, PNG e WEBP in un unico PDF, nell'ordine che preferisci.",
    longDescription: [
      "Da immagini a PDF trasforma un insieme di foto, scansioni o screenshot in un unico documento PDF. Aggiungi immagini JPG, PNG o WEBP, trascina le miniature nell'ordine desiderato, e scegli una pagina A4 o Letter (con orientamento automatico) o pagine che corrispondono a ogni immagine.",
      "Aggiungi un margine per un aspetto stampato pulito. Le aree trasparenti vengono poste su bianco, e l'intera conversione avviene nel tuo browser, quindi le tue immagini non vengono mai caricate.",
    ],
    faq: [
      { question: "Posso cambiare l'ordine delle immagini?", answer: "Sì. Trascina le miniature o usa i pulsanti freccia per impostare l'ordine delle pagine prima di creare il PDF." },
      { question: "Quali formati immagine sono supportati?", answer: "JPG, PNG e WEBP. Puoi mescolare formati nello stesso PDF." },
      { question: "Che formato pagina userà il PDF?", answer: "Scegli A4 o Letter — ogni immagine viene adattata alla pagina e ruotata in orizzontale quando necessario — oppure «Adatta all'immagine» per far sì che ogni pagina abbia esattamente la dimensione della sua immagine." },
      { question: "Le mie immagini vengono caricate?", answer: "No. Il PDF viene creato localmente nel tuo browser." },
    ],
  },
  "flip-pdf": {
    name: "Capovolgi PDF",
    actionLabel: "Capovolgi PDF",
    shortDescription: "Specchia le pagine di un PDF orizzontalmente o verticalmente.",
    longDescription: [
      "Capovolgi PDF specchia ogni pagina del tuo documento — da sinistra a destra o dall'alto in basso. Utile per stampare transfer termoadesivi, correggere scansioni fatte dal lato sbagliato, o preparare grafiche speculari.",
      "Visualizza in anteprima il risultato sulla prima pagina prima di applicarlo. Il capovolgimento rispetta anche le pagine ruotate, e tutto avviene nel tuo browser, quindi il tuo file non viene mai caricato.",
    ],
    faq: [
      { question: "Qual è la differenza tra capovolgere e ruotare?", answer: "Ruotare gira una pagina a passi di 90°. Capovolgere crea un'immagine speculare, quindi il testo si legge al contrario — che è ciò che serve per i transfer e alcuni lavori di stampa." },
      { question: "Posso capovolgere solo una pagina?", answer: "Il capovolgimento si applica a tutte le pagine. Per capovolgere una singola pagina, estraila prima con Estrai pagine PDF." },
      { question: "Il capovolgimento riduce la qualità?", answer: "No. Le pagine vengono trasformate, non renderizzate di nuovo, quindi testo e grafica restano nitidi come l'originale." },
      { question: "Il mio PDF viene caricato?", answer: "No. Il capovolgimento avviene localmente nel tuo browser." },
    ],
  },
  "edit-pdf-metadata": {
    name: "Modifica metadati PDF",
    actionLabel: "Modifica metadati",
    shortDescription: "Cambia titolo, autore, oggetto e parole chiave di un PDF.",
    longDescription: [
      "Modifica metadati PDF ti permette di vedere e cambiare le proprietà del documento memorizzate all'interno di un PDF — titolo, autore, oggetto, parole chiave, creatore e produttore. Questo è ciò che i lettori PDF, i motori di ricerca e i gestori file mostrano del tuo documento.",
      "Lascia un campo vuoto per rimuoverlo. Il contenuto della pagina non viene toccato, e l'intera modifica avviene nel tuo browser, quindi il tuo file non viene mai caricato.",
    ],
    faq: [
      { question: "Perché modificare i metadati di un PDF?", answer: "Un titolo e un autore chiari rendono i documenti più facili da trovare e più professionali quando condivisi, e i motori di ricerca possono usarli per indicizzare i PDF." },
      { question: "Modificare i metadati cambierà il contenuto del documento?", answer: "No. Cambiano solo le proprietà del documento; pagine, testo e immagini restano esattamente gli stessi." },
      { question: "Come rimuovo una proprietà?", answer: "Svuota il campo e salva. I campi vuoti vengono rimossi dal file." },
      { question: "Il mio PDF viene caricato?", answer: "No. Le proprietà vengono modificate localmente nel tuo browser." },
    ],
  },
  "remove-pdf-metadata": {
    name: "Rimuovi metadati PDF",
    actionLabel: "Rimuovi metadati",
    shortDescription: "Elimina autore, titolo, software e altre proprietà nascoste da un PDF prima di condividerlo.",
    longDescription: [
      "Rimuovi metadati PDF cancella le proprietà del documento e i dati nascosti che un PDF porta con sé — autore, titolo, oggetto, parole chiave, il software usato per crearlo, date di creazione e pacchetti di metadati XMP incorporati.",
      "È un rapido passaggio di privacy prima di condividere un file pubblicamente. Il contenuto della pagina resta intatto, e la pulizia avviene nel tuo browser, quindi il tuo file non viene mai caricato.",
    ],
    faq: [
      { question: "Quali informazioni vengono rimosse?", answer: "Titolo, autore, oggetto, parole chiave, software di creazione e produzione, date di creazione e modifica, metadati XMP incorporati, e dati privati dell'applicazione." },
      { question: "Cambia l'aspetto del documento?", answer: "No. Vengono rimosse solo le proprietà nascoste; ogni pagina appare esattamente uguale." },
      { question: "Questo rimuove informazioni personali stampate sulle pagine?", answer: "No. Rimuove solo i metadati. Nomi o dettagli stampati sulle pagine restano visibili." },
      { question: "Il mio PDF viene caricato?", answer: "No. Il file viene pulito localmente nel tuo browser." },
    ],
  },
  "pdf-info": {
    name: "Info PDF",
    actionLabel: "Controlla PDF",
    shortDescription: "Visualizza in un colpo d'occhio numero di pagine, dimensioni, versione e proprietà di un PDF.",
    longDescription: [
      "Info PDF legge un PDF e mostra cosa contiene: il numero di pagine, la dimensione di ogni pagina in millimetri con nomi carta come A4 o Letter, la versione del PDF, se è crittografato o contiene un modulo compilabile, e il suo titolo, autore, software e date.",
      "Utile prima di stampare, inviare o convertire un file. Il documento viene solo letto — mai modificato — e tutto avviene nel tuo browser, quindi non viene mai caricato.",
    ],
    faq: [
      { question: "Quali dettagli mostra Info PDF?", answer: "Numero di pagine, dimensioni pagina con nomi carta, versione PDF, dimensione file, crittografia, moduli compilabili, visualizzazione web rapida, e proprietà del documento come titolo, autore e data di creazione." },
      { question: "Info PDF modifica il mio file?", answer: "No. Il PDF viene solo letto; nulla viene modificato o salvato." },
      { question: "Posso controllare un PDF protetto da password?", answer: "I file che richiedono una password per aprirsi non possono essere letti senza di essa. I file con solo restrizioni di modifica vengono mostrati come crittografati." },
      { question: "Il mio PDF viene caricato?", answer: "No. Viene letto localmente nel tuo browser." },
    ],
  },
  "resize-image": {
    name: "Ridimensiona immagine",
    actionLabel: "Ridimensiona immagini",
    shortDescription: "Cambia larghezza e altezza di immagini JPG, PNG e WEBP, in percentuale o in pixel esatti.",
    longDescription: [
      "Ridimensiona immagine cambia le dimensioni delle tue foto e grafiche. Scala in percentuale, oppure digita una larghezza e altezza esatte con le proporzioni bloccate così nulla appare allungato. Ridimensiona più immagini contemporaneamente e scaricale insieme in un .zip.",
      "Le immagini mantengono il formato originale, e uno smoothing di alta qualità mantiene nitide le immagini ridotte. Tutto funziona nel tuo browser, quindi le tue immagini non vengono mai caricate.",
    ],
    faq: [
      { question: "Il ridimensionamento renderà sfocata la mia immagine?", answer: "Rimpicciolire un'immagine la mantiene nitida. Ingrandirla oltre la dimensione originale non può aggiungere dettaglio, quindi grandi aumenti possono apparire sfocati." },
      { question: "Posso ridimensionare più immagini alla volta?", answer: "Sì. Aggiungi fino a 20 immagini; con le proporzioni bloccate, ciascuna mantiene le proprie proporzioni alla larghezza che imposti." },
      { question: "Che formato avrà l'immagine ridimensionata?", answer: "Lo stesso dell'originale — JPG resta JPG, PNG resta PNG, e WEBP resta WEBP dove il tuo browser lo supporta." },
      { question: "Le mie immagini vengono caricate?", answer: "No. Il ridimensionamento avviene localmente nel tuo browser." },
    ],
  },
  "crop-image": {
    name: "Ritaglia immagine",
    actionLabel: "Ritaglia immagine",
    shortDescription: "Ritaglia un'immagine nell'area desiderata con un riquadro di ritaglio trascinabile.",
    longDescription: [
      "Ritaglia immagine elimina i bordi indesiderati da una foto o screenshot. Trascina il riquadro di ritaglio o i suoi angoli sull'anteprima — oppure regola ogni bordo con un cursore — e vedi la dimensione esatta del risultato in pixel.",
      "L'immagine ritagliata mantiene il formato e la qualità originali, e l'intero processo avviene nel tuo browser, quindi la tua immagine non viene mai caricata.",
    ],
    faq: [
      { question: "Posso ritagliare a dimensioni esatte?", answer: "Regola ogni bordo con i cursori e osserva la dimensione del risultato aggiornarsi in pixel man mano che procedi." },
      { question: "Il ritaglio riduce la qualità dell'immagine?", answer: "No. I pixel che conservi vengono copiati così come sono; vengono rimosse solo le parti fuori dal riquadro." },
      { question: "Quali formati posso ritagliare?", answer: "JPG, PNG e WEBP. Il risultato mantiene lo stesso formato dell'originale." },
      { question: "La mia immagine viene caricata?", answer: "No. Il ritaglio avviene localmente nel tuo browser." },
    ],
  },
  "flip-image": {
    name: "Capovolgi immagine",
    actionLabel: "Capovolgi immagini",
    shortDescription: "Specchia le immagini orizzontalmente o verticalmente, una alla volta o in blocco.",
    longDescription: [
      "Capovolgi immagine crea un'immagine speculare delle tue foto: da sinistra a destra, o dall'alto in basso. Utile per correggere selfie scattati con la fotocamera frontale, creare riflessi, o preparare design per transfer di stampa.",
      "Capovolgi più immagini contemporaneamente, visualizza il risultato istantaneamente in anteprima, e scaricale nel loro formato originale. Tutto avviene nel tuo browser, quindi le tue immagini non vengono mai caricate.",
    ],
    faq: [
      { question: "Qual è la differenza tra capovolgere e ruotare?", answer: "Ruotare gira un'immagine a passi di 90°. Capovolgere la specchia, come guardarsi in uno specchio." },
      { question: "Posso capovolgere più immagini alla volta?", answer: "Sì. Aggiungi fino a 20 immagini e vengono tutte capovolte allo stesso modo, poi scaricate insieme come .zip." },
      { question: "Il capovolgimento riduce la qualità?", answer: "Nessuna perdita evidente — PNG resta senza perdita, e JPG e WEBP vengono salvati con alta qualità." },
      { question: "Le mie immagini vengono caricate?", answer: "No. Il capovolgimento avviene localmente nel tuo browser." },
    ],
  },
  "png-to-jpg": {
    name: "Da PNG a JPG",
    actionLabel: "Converti in JPG",
    shortDescription: "Converti immagini PNG in JPG per file più piccoli e più compatibili.",
    longDescription: [
      "Da PNG a JPG converte le tue immagini PNG in file JPG, solitamente molto più piccoli — ideale per foto, allegati email e moduli di caricamento che accettano solo JPG. Converti più immagini contemporaneamente e regola la qualità per bilanciare dimensione e nitidezza.",
      "JPG non supporta la trasparenza, quindi le aree trasparenti vengono riempite di bianco. La conversione avviene interamente nel tuo browser, quindi le tue immagini non vengono mai caricate.",
    ],
    faq: [
      { question: "Perché convertire PNG in JPG?", answer: "I file JPG sono tipicamente molto più piccoli dei PNG per le foto e sono accettati quasi ovunque, dall'email ai moduli online." },
      { question: "Cosa succede agli sfondi trasparenti?", answer: "JPG non ha trasparenza, quindi le aree trasparenti vengono riempite di bianco." },
      { question: "Posso convertire molti PNG alla volta?", answer: "Sì. Aggiungi fino a 30 immagini; vengono convertite insieme e scaricate come .zip." },
      { question: "Le mie immagini vengono caricate?", answer: "No. La conversione avviene localmente nel tuo browser." },
    ],
  },
  "jpg-to-png": {
    name: "Da JPG a PNG",
    actionLabel: "Converti in PNG",
    shortDescription: "Converti foto JPG in immagini PNG senza perdita di qualità.",
    longDescription: [
      "Da JPG a PNG converte le tue immagini JPG o JPEG nel formato PNG. PNG è senza perdita, quindi l'immagine non perderà ulteriore qualità quando la modifichi e la salvi di nuovo — utile per grafiche su cui continuerai a lavorare, o per strumenti e piattaforme che richiedono PNG.",
      "Converti più immagini contemporaneamente e scaricale insieme. La conversione avviene interamente nel tuo browser, quindi le tue immagini non vengono mai caricate.",
    ],
    faq: [
      { question: "Convertire JPG in PNG migliorerà la qualità?", answer: "No — il dettaglio già perso nel JPG non può essere ripristinato. Ma PNG previene ulteriori perdite quando modifichi e salvi di nuovo." },
      { question: "Perché il PNG è più grande del JPG?", answer: "PNG memorizza ogni pixel senza compressione con perdita, quindi le foto di solito diventano più grandi. È il compromesso per la qualità senza perdita." },
      { question: "Posso convertire più JPG alla volta?", answer: "Sì. Aggiungi fino a 30 immagini e scaricale come .zip." },
      { question: "Le mie immagini vengono caricate?", answer: "No. La conversione avviene localmente nel tuo browser." },
    ],
  },
  "webp-to-jpg": {
    name: "Da WEBP a JPG",
    actionLabel: "Converti in JPG",
    shortDescription: "Converti immagini WEBP in JPG così che si aprano in qualsiasi app o sito web.",
    longDescription: [
      "Da WEBP a JPG converte immagini WEBP moderne — comuni sui siti web — in JPG, il formato supportato praticamente da ogni app, dispositivo e modulo di caricamento. Converti un'immagine o molte alla volta, e regola la qualità per bilanciare dimensione e nitidezza.",
      "Le aree trasparenti vengono riempite di bianco, poiché JPG non supporta la trasparenza. La conversione avviene interamente nel tuo browser, quindi le tue immagini non vengono mai caricate.",
    ],
    faq: [
      { question: "Perché convertire WEBP in JPG?", answer: "Alcune app, editor e moduli di caricamento più vecchi non accettano WEBP. JPG funziona quasi ovunque." },
      { question: "Perderò qualità?", answer: "Con la qualità predefinita la differenza è difficile da notare. Aumenta il cursore della qualità per il risultato più nitido." },
      { question: "Posso convertire più immagini WEBP alla volta?", answer: "Sì. Aggiungi fino a 30 immagini e scaricale come .zip." },
      { question: "Le mie immagini vengono caricate?", answer: "No. La conversione avviene localmente nel tuo browser." },
    ],
  },
  "jpg-to-webp": {
    name: "Da JPG a WEBP",
    actionLabel: "Converti in WEBP",
    shortDescription: "Converti foto JPG in WEBP per immagini più leggere e più veloci da caricare sul web.",
    longDescription: [
      "Da JPG a WEBP converte le tue immagini JPG in WEBP, un formato moderno che tipicamente produce file notevolmente più piccoli con qualità visiva simile — ottimo per velocizzare i siti web e risparmiare spazio di archiviazione.",
      "Regola la qualità per trovare il giusto equilibrio e converti molte immagini alla volta. La conversione avviene interamente nel tuo browser, quindi le tue immagini non vengono mai caricate. Creare file WEBP richiede una versione recente di Chrome, Edge o Firefox.",
    ],
    faq: [
      { question: "WEBP è più piccolo di JPG?", answer: "Solitamente sì — WEBP spesso risparmia una quantità significativa di spazio con qualità simile, il che aiuta le pagine a caricarsi più velocemente." },
      { question: "Tutti i browser supportano WEBP?", answer: "Tutti i browser moderni possono visualizzare WEBP. Creare file WEBP qui richiede una versione recente di Chrome, Edge o Firefox." },
      { question: "Posso convertire più JPG alla volta?", answer: "Sì. Aggiungi fino a 30 immagini e scaricale come .zip." },
      { question: "Le mie immagini vengono caricate?", answer: "No. La conversione avviene localmente nel tuo browser." },
    ],
  },
  "webp-to-png": {
    name: "Da WEBP a PNG",
    actionLabel: "Converti in PNG",
    shortDescription: "Converti immagini WEBP in PNG mantenendo la trasparenza.",
    longDescription: [
      "Da WEBP a PNG converte immagini WEBP in PNG, il formato senza perdita supportato da ogni editor di immagini. La trasparenza viene preservata, così loghi, icone e grafiche ritagliate mantengono i loro sfondi trasparenti.",
      "Converti più immagini contemporaneamente e scaricale insieme. La conversione avviene interamente nel tuo browser, quindi le tue immagini non vengono mai caricate.",
    ],
    faq: [
      { question: "La trasparenza viene mantenuta?", answer: "Sì. PNG supporta la trasparenza, quindi le aree trasparenti nella tua immagine WEBP restano trasparenti." },
      { question: "Perché convertire WEBP in PNG?", answer: "PNG si apre in ogni editor e strumento di design e non perderà qualità quando lo modifichi e lo salvi di nuovo." },
      { question: "Posso convertire più file WEBP alla volta?", answer: "Sì. Aggiungi fino a 30 immagini e scaricale come .zip." },
      { question: "Le mie immagini vengono caricate?", answer: "No. La conversione avviene localmente nel tuo browser." },
    ],
  },
  "png-to-webp": {
    name: "Da PNG a WEBP",
    actionLabel: "Converti in WEBP",
    shortDescription: "Converti immagini PNG in WEBP per file più piccoli che mantengono la trasparenza.",
    longDescription: [
      "Da PNG a WEBP converte le tue immagini PNG in WEBP, il che di solito rende i file molto più piccoli mantenendo la trasparenza — ideale per grafiche di siti web, icone e screenshot.",
      "Scegli la qualità, converti molte immagini alla volta, e scaricale insieme. La conversione avviene interamente nel tuo browser, quindi le tue immagini non vengono mai caricate. Creare file WEBP richiede una versione recente di Chrome, Edge o Firefox.",
    ],
    faq: [
      { question: "WEBP mantiene la trasparenza?", answer: "Sì. WEBP supporta la trasparenza, quindi le aree trasparenti del PNG restano trasparenti." },
      { question: "Di quanto si ridurranno le mie immagini?", answer: "Varia, ma i file WEBP sono spesso significativamente più piccoli della stessa immagine salvata come PNG." },
      { question: "Posso convertire più PNG alla volta?", answer: "Sì. Aggiungi fino a 30 immagini e scaricale come .zip." },
      { question: "Le mie immagini vengono caricate?", answer: "No. La conversione avviene localmente nel tuo browser." },
    ],
  },
};
