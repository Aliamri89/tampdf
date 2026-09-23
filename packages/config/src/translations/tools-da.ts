import type { ToolTranslationOverride } from "./tools-ar";

export const toolsDa: Record<string, ToolTranslationOverride> = {
  "compress-pdf": {
    name: "Komprimer PDF",
    actionLabel: "Komprimer PDF",
    shortDescription: "Reducer størrelsen på din PDF-fil, så den er nemmere at dele og sende, direkte i browseren.",
    longDescription: [
      "Komprimer PDF reducerer filstørrelsen ved at genkode indlejrede billeder og fjerne unødvendige data, så dokumentet bliver lettere at maile, uploade eller gemme.",
      "Vælg et komprimeringsniveau for at afveje filstørrelse mod visuel kvalitet, og sammenlign størrelsen før/efter, inden du downloader.",
    ],
    faq: [
      { question: "Hvor meget mindre bliver min PDF?", answer: "Det afhænger af indholdet. PDF-filer med store indlejrede billeder skrumper som regel mest, nogle gange 50-90%. Tekstsvære PDF-filer komprimeres mindre, fordi der er mindre at optimere." },
      { question: "Bliver min PDF sløret af komprimeringen?", answer: "Med standardindstillingerne er kvalitetstabet minimalt. Vælger du det stærkeste komprimeringsniveau, nedskaleres billeder mere aggressivt, hvilket kan reducere skarpheden ved indzoomning." },
      { question: "Foregår komprimeringen på TAMPDFs servere?", answer: "Nej. Komprimer PDF kører lokalt i din browser, så din fil bliver aldrig uploadet nogen steder." },
      { question: "Kan jeg komprimere en adgangskodebeskyttet PDF?", answer: "Ikke i øjeblikket. Fjern adgangskodebeskyttelsen med et andet værktøj først, og komprimer derefter filen." },
    ],
  },
  "pdf-to-jpg": {
    name: "PDF til JPG",
    actionLabel: "Konverter til JPG",
    shortDescription: "Omdan hver PDF-side til et JPG-billede i høj kvalitet.",
    longDescription: [
      "PDF til JPG konverterer hver side i din PDF til et separat JPG-billede, klar til at blive delt, redigeret eller sat ind i en præsentation. En PDF med én side downloades som en enkelt JPG-fil; PDF-filer med flere sider pakkes i en .zip.",
      "Konverteringen sker direkte i din browser med PDF.js, så dit dokument bliver aldrig uploadet til en server.",
    ],
    faq: [
      { question: "Hvad hvis min PDF har flere sider?", answer: "Hver side bliver til et separat JPG-billede. Hvis der er mere end én, pakkes de i en enkelt .zip-fil til download." },
      { question: "Hvor skarpe bliver billederne?", answer: "Siderne gengives i høj opløsning, der passer til skærme og de fleste udskrivningsbehov. Vælg et kvalitetsniveau for at afveje skarphed mod filstørrelse." },
      { question: "Bliver min PDF uploadet nogen steder?", answer: "Nej. PDF til JPG behandler hver side lokalt i din browser, så filen forlader aldrig din enhed." },
      { question: "Kan jeg konvertere kun én side i stedet for hele dokumentet?", answer: "Lige nu konverteres alle sider. Brug Flet PDF eller en PDF-læser til at udtrække en enkelt side først, hvis du kun har brug for ét billede." },
    ],
  },
  "merge-pdf": {
    name: "Flet PDF",
    actionLabel: "Flet PDF-filer",
    shortDescription: "Kombiner flere PDF-filer til ét dokument, i den rækkefølge du vælger.",
    longDescription: [
      "Flet PDF lader dig kombinere to eller flere PDF-filer til ét dokument uden at installere noget. Tilføj filer, træk for at arrangere dem, og download én samlet PDF.",
      "Alt kører lokalt i din browser, så filerne bliver aldrig uploadet til en server. Det betyder, at det fungerer selv med følsomme kontrakter, rapporter eller personlige dokumenter.",
    ],
    faq: [
      { question: "Er der en grænse for, hvor mange PDF-filer jeg kan flette?", answer: "Der er ingen fast grænse. Da fletningen sker i din browser, er den praktiske begrænsning enhedens hukommelse, ikke en servergrænse." },
      { question: "Kan jeg ændre siderækkefølgen inden fletning?", answer: "Ja. Når filerne er tilføjet, trækker du dem i den rækkefølge, du vil have det endelige dokument, inden du fletter." },
      { question: "Bliver mine filer uploadet til TAMPDFs servere?", answer: "Nej. Flet PDF behandler filer helt i din browser med klientside-teknologi, så dokumenterne forlader aldrig din enhed." },
      { question: "Påvirker fletning kvaliteten af mine PDF-filer?", answer: "Nej. Siderne kombineres uændret, uden genkomprimering, så tekst, billeder og formatering forbliver præcis som originalerne." },
    ],
  },
  "rotate-pdf": {
    name: "Roter PDF",
    actionLabel: "Roter PDF",
    shortDescription: "Roter enkelte sider eller en hel PDF 90°, 180° eller 270°, direkte i browseren.",
    longDescription: [
      "Roter PDF lader dig rette sidevendte eller omvendte sider på få sekunder. Upload en eller flere PDF-filer, se en miniature af hver side, og roter derefter hele dokumentet på én gang eller kun de sider, du har brug for.",
      "Alt kører lokalt i din browser, så filerne bliver aldrig uploadet til en server. Upload flere PDF-filer samtidig, og hver af dem roteres og returneres uafhængigt.",
    ],
    faq: [
      { question: "Kan jeg rotere kun én side i stedet for hele dokumentet?", answer: "Ja. Klik på rotationsknappen på en enkelt side for kun at rotere den, eller brug knapperne til at rotere alle for at anvende den samme rotation på alle sider på én gang." },
      { question: "Hvilke rotationsvinkler understøttes?", answer: "Du kan rotere sider 90°, 180° eller 270° i begge retninger." },
      { question: "Kan jeg rotere mere end én PDF-fil ad gangen?", answer: "Ja. Upload flere PDF-filer, og hver roteres uafhængigt. Hvis du uploader mere end én fil, pakkes de roterede PDF-filer i en .zip til download." },
      { question: "Bliver min PDF uploadet nogen steder?", answer: "Nej. Roter PDF behandler alt lokalt i din browser, så filerne forlader aldrig din enhed." },
    ],
  },
  "compress-image": {
    name: "Komprimer billede",
    actionLabel: "Komprimer billeder",
    shortDescription: "Reducer filstørrelsen på JPG-, PNG- og WebP-filer, mens den visuelle kvalitet bevares.",
    longDescription: [
      "Komprimer billede reducerer filstørrelsen på dine JPG-, PNG- eller WebP-fotos, så de er hurtigere at uploade, maile og indlæse på hjemmesider.",
      "Komprimeringen sker helt i din browser ved hjælp af canvas-API'et, så dine fotos forlader aldrig din enhed, og du kan komprimere flere billeder på én gang.",
    ],
    faq: [
      { question: "Hvilke billedformater understøttes?", answer: "JPG-, PNG- og WebP-billeder understøttes som både input og output." },
      { question: "Kan jeg komprimere flere billeder på én gang?", answer: "Ja. Tilføj lige så mange billeder, du vil, og hver komprimeres og pakkes i en enkelt .zip-fil til download eller downloades individuelt." },
      { question: "Hvor meget kan jeg skrumpe et billede uden kvalitetstab?", answer: "Standardkvalitetsindstillingen reducerer typisk filstørrelsen med 60-80% uden synlig forskel. Du kan justere kvalitetsskyderen for en anden afvejning." },
      { question: "Bliver mine fotos uploadet til en server?", answer: "Nej. Komprimeringen kører lokalt i din browser ved hjælp af canvas-API'et, så billederne bliver aldrig sendt nogen steder." },
    ],
  },
  "image-to-pdf": {
    name: "JPG til PDF",
    actionLabel: "Konverter til PDF",
    shortDescription: "Omdan et eller flere JPG-billeder til ét PDF-dokument.",
    longDescription: [
      "JPG til PDF kombinerer dine JPG-fotos til én PDF-fil, ét foto pr. side, i den rækkefølge du vælger.",
      "Perfekt til at lave scannede dokumenter, kvitteringer eller fotos om til en delbar PDF. Alt behandles lokalt i din browser for fuld privatliv.",
    ],
    faq: [
      { question: "Kan jeg kombinere flere billeder til én PDF?", answer: "Ja. Tilføj flere billeder, og hver bliver til en side i den resulterende PDF, i den rækkefølge du arrangerer dem." },
      { question: "Hvilken sidestørrelse bruges til PDF'en?", answer: "Hver side tilpasses kildebilledets dimensioner og orientering, så intet beskæres eller strækkes." },
      { question: "Bliver mine billeder uploadet nogen steder?", answer: "Nej. Konverteringen sker helt i din browser, så billederne bliver på din enhed." },
      { question: "Understøtter den også PNG-billeder?", answer: "Ja, PNG-billeder understøttes sammen med JPG. HEIC-fotos fra iPhone understøttes endnu ikke; konverter dem til JPG med telefonens delingsfunktion først." },
    ],
  },
  "rotate-images": {
    name: "Roter billeder",
    actionLabel: "Roter billeder",
    shortDescription: "Roter et eller flere JPG-, PNG- eller WebP-billeder 90°, 180° eller 270°.",
    longDescription: [
      "Roter billeder retter sidevendte eller omvendte fotos på få sekunder. Upload et eller flere billeder, roter hvert enkelt eller alle på én gang, og download resultaterne.",
      "Alt kører lokalt i din browser, så fotos bliver aldrig uploadet til en server. Upload flere billeder samtidig, og hver af dem roteres og returneres uafhængigt.",
    ],
    faq: [
      { question: "Hvilke billedformater understøttes?", answer: "JPG-, PNG- og WebP-billeder understøttes. Rotation bevarer det oprindelige format." },
      { question: "Kan jeg rotere kun ét billede i stedet for alle?", answer: "Ja. Klik på rotationsknappen på et enkelt billede for kun at rotere det, eller brug knapperne til at rotere alle for at anvende den samme rotation på alle billeder på én gang." },
      { question: "Hvilke rotationsvinkler understøttes?", answer: "Du kan rotere billeder 90°, 180° eller 270°." },
      { question: "Bliver mine fotos uploadet nogen steder?", answer: "Nej. Roter billeder behandler alt lokalt i din browser, så fotos forlader aldrig din enhed." },
    ],
  },
  "split-pdf": {
    name: "Opdel PDF",
    actionLabel: "Opdel PDF",
    shortDescription: "Opdel én PDF i flere mindre filer efter sideintervaller eller i faste bidder.",
    longDescription: [
      "Opdel PDF opdeler et stort dokument i separate PDF-filer uden at ændre selve siderne. Indtast sideintervaller som 1-3, 5, 8-10 for at udtrække netop de afsnit, du har brug for, eller opdel hele dokumentet i lige store bidder med et fast antal sider.",
      "Alt sker i din browser — din PDF bliver aldrig uploadet til en server. Et enkelt resultat downloades som én PDF; flere dele pakkes i en .zip.",
    ],
    faq: [
      { question: "Hvordan vælger jeg, hvilke sider der skal gå til hvilken fil?", answer: "Brug intervalfeltet: noget som \"1-3, 5, 8-10\" opretter tre PDF-filer — side 1 til 3, kun side 5 og side 8 til 10. Eller skift til \"hver N. side\" for at skære dokumentet i lige store bidder." },
      { question: "Bevarer de opdelte filer den originale kvalitet?", answer: "Ja. Siderne kopieres uændret, uden genkomprimering, så tekst, billeder, skrifttyper og layout er identisk med kilden." },
      { question: "Bliver min PDF uploadet nogen steder?", answer: "Nej. Opdelingen sker helt i din browser, så dokumentet forlader aldrig din enhed." },
      { question: "Hvad sker der med formularfelter eller digitale signaturer?", answer: "Sideindhold og formularwidgets bevares visuelt, men interaktiv formularadfærd og signaturer overføres ikke til de opdelte filer. Fladgør dem eller signer igen efter behov." },
    ],
  },
  "delete-pdf-pages": {
    name: "Slet PDF-sider",
    actionLabel: "Slet sider",
    shortDescription: "Fjern sider, du ikke har brug for, fra en PDF, og download et ryddet dokument.",
    longDescription: [
      "Slet PDF-sider lader dig kassere sider, du ikke har brug for — tomme scanninger, forsider, dublerede sider — og beholde resten i den oprindelige rækkefølge. Se en miniature af hver side, tryk på dem, du vil fjerne, og download resultatet.",
      "Hele processen foregår lokalt i din browser, så din PDF bliver aldrig uploadet. De resterende sider kopieres uden genkomprimering, så intet mister kvalitet.",
    ],
    faq: [
      { question: "Kan jeg slette mere end én side ad gangen?", answer: "Ja. Vælg et hvilket som helst antal sider i miniaturegitteret, og slet dem alle i ét trin." },
      { question: "Kan jeg slette alle sider?", answer: "Nej — mindst én side skal blive tilbage, så knappen deaktiveres, hvis du har valgt dem alle." },
      { question: "Reducerer sletning af sider filstørrelsen?", answer: "Normalt lidt, da indholdet på de slettede sider kasseres. Delte ressourcer som skrifttyper kan blive tilbage, så brug Komprimer PDF bagefter, hvis størrelsen betyder noget." },
      { question: "Bliver mine filer uploadet til en server?", answer: "Nej. Alt sker i din browser, og din PDF forlader aldrig din enhed." },
    ],
  },
  "reorder-pdf-pages": {
    name: "Omorganiser PDF-sider",
    actionLabel: "Omorganiser sider",
    shortDescription: "Træk PDF-sider for at ændre deres rækkefølge, og gem det omorganiserede dokument.",
    longDescription: [
      "Omorganiser PDF-sider viser en miniature af hver side, som du kan trække til den ønskede rækkefølge — flyt en side til begyndelsen, byt to afsnit eller vend hele dokumentet. Der er også flytteknapper til præcise ændringer, en side ad gangen.",
      "Omorganiseringen sker helt i din browser, så din PDF bliver aldrig uploadet. Siderne kopieres uændret, så kvalitet og formatering forbliver intakt.",
    ],
    faq: [
      { question: "Hvordan flytter jeg en side?", answer: "Træk dens miniature til en ny position, eller brug op/ned-knapperne på hver side til enkelte trin. Den nye rækkefølge gemmes, når du klikker på knappen." },
      { question: "Kan jeg vende hele dokumentet?", answer: "Ja — træk siderne i omvendt rækkefølge, eller brug flytteknapperne. Et hvilket som helst antal sider kan ændres i ét trin." },
      { question: "Ændrer omorganisering sideindholdet?", answer: "Nej. Kun siderækkefølgen ændres — teksten, billederne og layoutet på hver side forbliver præcis de samme." },
      { question: "Bliver PDF'en uploadet nogen steder?", answer: "Nej. Omorganiseringen kører lokalt i din browser, og filen forlader aldrig din enhed." },
    ],
  },
  "crop-pdf": {
    name: "Beskær PDF",
    actionLabel: "Beskær PDF",
    shortDescription: "Beskær margenerne på hver PDF-side ved at indstille værdier fra top, bund og sider.",
    longDescription: [
      "Beskær PDF fjerner unødvendig hvid plads eller scanningskanter fra sidernes kanter. Indstil, hvor meget der skal beskæres fra top, bund, venstre og højre som en procentdel, se en live forhåndsvisning, og anvend på alle sider på én gang.",
      "Beskæringen justerer det synlige sideområde uden at fjerne noget indhold — de beskårne dele skjules bare. Alt sker i din browser, så din PDF bliver aldrig uploadet.",
    ],
    faq: [
      { question: "Fjerner beskæring indhold uden for det beskårne område?", answer: "Nej. Beskær PDF ændrer sidens beskæringsboks, hvilket skjuler det ydre område i browsere og ved udskrivning. Det underliggende indhold er stadig i filen og kan gendannes." },
      { question: "Anvendes den samme beskæring på alle sider?", answer: "Ja. De margener, du indstiller, anvendes på alle sider. Sider med forskellige størrelser beskæres med samme procentdel." },
      { question: "Kan jeg beskære et scannet dokument for at fjerne en sort ramme?", answer: "Ja — det er et almindeligt anvendelsesscenarie. Øg margenerne, indtil forhåndsvisningen kun viser det indhold, du vil beholde." },
      { question: "Bliver min fil uploadet til en server?", answer: "Nej. Beskæringen sker helt i din browser, og din PDF forbliver på din enhed." },
    ],
  },
  "resize-pdf": {
    name: "Skift størrelse på PDF",
    actionLabel: "Skift størrelse",
    shortDescription: "Skift størrelsen på PDF-sider til A4, Letter eller en tilpasset skala, med indhold tilpasset og centreret.",
    longDescription: [
      "Skift størrelse på PDF ændrer den fysiske sidestørrelse på dit dokument. Vælg en standardstørrelse som A4 eller US Letter, så skaleres hver side, så den passer og centreres, eller brug en procentdel til at skrumpe eller forstørre siderne proportionalt.",
      "Størrelsesændringen sker i din browser uden upload. Indholdet skaleres sammen med siden, så intet beskæres, og layoutet forbliver proportionelt.",
    ],
    faq: [
      { question: "Hvilke sidestørrelser kan jeg vælge?", answer: "A4 og US Letter i stående eller liggende format, plus A3 og A5. Du kan også indtaste en skalaprocent for at ændre størrelsen uden at ændre proportionerne." },
      { question: "Vil mit indhold blive strakt?", answer: "Nej. Indholdet skaleres jævnt, så det passer til den nye størrelse og centreres på siden, så proportionerne bevares, og intet beskæres." },
      { question: "Kan jeg bruge dette til at reducere min PDF-filstørrelse?", answer: "Ikke direkte — dette ændrer sidemålene, ikke filvægten. Brug Komprimer PDF til at reducere filstørrelsen." },
      { question: "Bliver mine filer uploadet nogen steder?", answer: "Nej. Størrelsesændringen sker lokalt i din browser, og din PDF forlader aldrig din enhed." },
    ],
  },
  "png-to-pdf": {
    name: "PNG til PDF",
    actionLabel: "Konverter til PDF",
    shortDescription: "Omdan et eller flere PNG-billeder til ét PDF-dokument, ét billede pr. side.",
    longDescription: [
      "PNG til PDF kombinerer PNG-billeder til én PDF-fil, med hvert billede på sin egen side i den oprindelige opløsning. Tilføj flere billeder, arranger deres rækkefølge, og download ét dokument.",
      "Fantastisk til at lave skærmbilleder, diagrammer eller eksporteret grafik om til en delbar PDF. Konverteringen sker helt i din browser, så billederne bliver aldrig uploadet. Transparente områder placeres på en hvid baggrund.",
    ],
    faq: [
      { question: "Kan jeg kombinere flere PNG-filer til én PDF?", answer: "Ja. Tilføj et hvilket som helst antal PNG-billeder, og hver bliver til en side i den resulterende PDF, i den rækkefølge du arrangerer dem." },
      { question: "Hvilken sidestørrelse bruges?", answer: "Hver side matcher kildebilledets pixeldimensioner, så billederne beskæres eller strækkes ikke." },
      { question: "Hvad sker der med transparente dele af billedet?", answer: "Transparens fladgøres til en hvid baggrund, så siden ser ens ud i alle PDF-læsere." },
      { question: "Bliver mine billeder uploadet til en server?", answer: "Nej. Konverteringen sker helt i din browser, og billederne forbliver på din enhed." },
    ],
  },
  "extract-pdf-pages": {
    name: "Udtræk PDF-sider",
    actionLabel: "Udtræk sider",
    shortDescription: "Udtræk udvalgte sider fra en PDF til en ny fil — eller gem hver side som sin egen PDF.",
    longDescription: [
      "Udtræk PDF-sider lader dig vælge netop de sider, du har brug for, fra et dokument og gemme dem som en ny PDF. Se en miniature af hver side, tryk på dem, du vil beholde, og download dem sammen — eller som separate en-sides PDF-filer i en ZIP.",
      "Din originale fil forbliver uændret, og siderne kopieres uændret, så tekst, billeder og formatering forbliver intakt. Alt sker i din browser, så din PDF bliver aldrig uploadet.",
    ],
    faq: [
      { question: "Hvad er forskellen mellem udtrækning og opdeling?", answer: "Udtrækning gemmer kun de valgte sider i en ny PDF. Opdeling deler hele dokumentet i flere dele efter sideintervaller eller faste størrelser." },
      { question: "Kan jeg gemme hver udtrukket side som sin egen fil?", answer: "Ja. Vælg \"Separate PDF-filer\", og hver valgte side bliver til sin egen PDF, pakket i én .zip-download." },
      { question: "Mister udtrukne sider kvalitet?", answer: "Nej. Siderne kopieres uden genkomprimering, så de ser præcis ud som originalen. Interaktive formularfelter kan blive til almindeligt sideindhold." },
      { question: "Bliver min PDF uploadet til en server?", answer: "Nej. Siderne udtrækkes lokalt i din browser, og filen forlader aldrig din enhed." },
    ],
  },
  "add-page-numbers": {
    name: "Tilføj sidetal",
    actionLabel: "Tilføj sidetal",
    shortDescription: "Nummerer PDF-sider med den position, det format og det startnummer, du vælger.",
    longDescription: [
      "Tilføj sidetal placerer et tal på hver side i din PDF. Vælg mellem seks positioner, en stil som \"1\", \"1 / 10\" eller \"Side 1 af 10\", indstil et startnummer, og spring eventuelt forsiden over.",
      "Tallene tegnes som rigtig tekst i en standardskrifttype, så de udskrives skarpt og forbliver opretstående selv på roterede sider. Hele processen foregår i din browser — dit dokument bliver aldrig uploadet.",
    ],
    faq: [
      { question: "Kan jeg starte nummereringen på et andet tal end 1?", answer: "Ja. Indstil et hvilket som helst startnummer — nyttigt, når din PDF er et kapitel eller bilag til et større dokument." },
      { question: "Kan jeg lade forsiden være uden tal?", answer: "Ja. Aktivér \"Nummerer ikke den første side\", og nummereringen starter på anden side." },
      { question: "Hvilke tal bruges?", answer: "Standardtal (1, 2, 3), der vises korrekt i enhver PDF-læser. Etiketter som \"Side 1 af 10\" skrives på dansk." },
      { question: "Bliver min fil uploadet?", answer: "Nej. Sidetal tilføjes lokalt i din browser, og din PDF forbliver på din enhed." },
    ],
  },
  "add-watermark": {
    name: "Tilføj vandmærke",
    actionLabel: "Tilføj vandmærke",
    shortDescription: "Placer tekst som FORTROLIGT eller UDKAST hen over hver PDF-side.",
    longDescription: [
      "Tilføj vandmærke placerer din tekst hen over hver side i en PDF — én gang i midten eller gentaget hen over hele siden. Vælg farve, gennemsigtighed, størrelse og vinkel, og se en live forhåndsvisning på den første side, inden du anvender det.",
      "Dansk og andre skriftsystemer understøttes fuldt ud. Vandmærket gemmes som et standard vandmærkeobjekt, og alt sker i din browser, så dit dokument bliver aldrig uploadet.",
    ],
    faq: [
      { question: "Kan jeg skrive et vandmærke på dansk?", answer: "Ja. Teksten gengives med din browsers skrifttyper, så dansk og andre skriftsystemer vises korrekt." },
      { question: "Kan vandmærket gentages hen over siden?", answer: "Ja. Vælg layoutet \"Gentaget\" for at flisebelægge teksten hen over hele siden, eller \"Én gang, centreret\" for et enkelt stempel." },
      { question: "Kan vandmærket fjernes senere?", answer: "Det gemmes som et standard vandmærkeobjekt, så værktøjer, der genkender vandmærker — herunder TAMPDFs eget Fjern vandmærke — kan fjerne det. Dette er ikke en sikkerhedsfunktion." },
      { question: "Bliver min PDF uploadet nogen steder?", answer: "Nej. Vandmærket anvendes lokalt i din browser." },
    ],
  },
  "remove-watermark": {
    name: "Fjern vandmærke",
    actionLabel: "Fjern vandmærke",
    shortDescription: "Fjern vandmærker, der er tilføjet som vandmærkeobjekter i en PDF.",
    longDescription: [
      "Fjern vandmærke finder og fjerner vandmærker, der er tilføjet som vandmærkeobjekter — den type, der oprettes af Adobe Acrobat, TAMPDF og de fleste PDF-redigeringsprogrammer — sammen med vandmærkeannoteringer og lag med navnet \"Watermark\". Resten af hver side forbliver præcis den samme.",
      "Vandmærker, der er en del af et scannet billede eller flettet ind i sidens almindelige tekst, har ingen markør, der adskiller dem fra rigtigt indhold, så de kan ikke fjernes automatisk. Fjern kun vandmærker fra dokumenter, du har ret til at redigere. Behandlingen sker i din browser, så filen bliver aldrig uploadet.",
    ],
    faq: [
      { question: "Hvilke vandmærker kan fjernes?", answer: "Vandmærker tilføjet som vandmærkeobjekter, vandmærkeannoteringer eller lag med navnet \"Watermark\" — herunder dem, der er oprettet af Adobe Acrobat og TAMPDFs eget Tilføj vandmærke-værktøj." },
      { question: "Hvorfor blev vandmærket ikke fjernet fra min fil?", answer: "Hvis vandmærket er en del af et scannet sidebillede eller er blevet fladgjort ind i sidens tekst, kan det ikke adskilles fra det rigtige indhold uden at beskadige siden." },
      { question: "Påvirker fjernelse af vandmærket resten af siden?", answer: "Nej. Kun det markerede vandmærkeindhold fjernes; tekst, billeder og layout forbliver intakte." },
      { question: "Bliver min fil uploadet?", answer: "Nej. PDF'en behandles lokalt i din browser." },
    ],
  },
  "pdf-to-images": {
    name: "PDF til billeder",
    actionLabel: "Konverter til billeder",
    shortDescription: "Omdan hver PDF-side til PNG-, JPG- eller WEBP-billeder, downloadet som ZIP.",
    longDescription: [
      "PDF til billeder gengiver hver side i din PDF som et separat billede i det format, du vælger: PNG for den skarpeste tekst, JPG for de mindste filer eller WEBP for moderne, kompakte billeder. Vælg en opløsning, og hver side eksporteres og pakkes i en enkelt .zip-fil.",
      "Gengivelsen sker direkte i din browser med PDF.js, så dit dokument bliver aldrig uploadet til en server.",
    ],
    faq: [
      { question: "Hvilket billedformat skal jeg vælge?", answer: "PNG holder tekst og linjegrafik helt skarp. JPG skaber mindre filer og passer til fotos. WEBP tilbyder en god balance til webbrug." },
      { question: "Hvilken opløsning er billederne?", answer: "Standard gengiver ved 108 dpi, Høj ved 144 dpi, og Maksimal ved 216 dpi — højt nok til at udskrive de fleste dokumenter." },
      { question: "Hvordan får jeg alle sider på én gang?", answer: "Hver side konverteres og pakkes i en enkelt .zip-fil. En PDF med én side downloades som et enkelt billede." },
      { question: "Bliver min PDF uploadet?", answer: "Nej. Siderne gengives lokalt i din browser." },
    ],
  },
  "images-to-pdf": {
    name: "Billeder til PDF",
    actionLabel: "Opret PDF",
    shortDescription: "Kombiner JPG-, PNG- og WEBP-billeder til én PDF, i den rækkefølge du vælger.",
    longDescription: [
      "Billeder til PDF omdanner en samling fotos, scanninger eller skærmbilleder til ét PDF-dokument. Tilføj JPG-, PNG- eller WEBP-billeder, træk miniaturerne til den ønskede rækkefølge, og vælg en A4- eller Letter-side (med automatisk retning) eller sider tilpasset hvert billede.",
      "Tilføj en margen for et rent udskriftsudseende. Transparente områder placeres på en hvid baggrund, og hele konverteringen sker i din browser, så billederne bliver aldrig uploadet.",
    ],
    faq: [
      { question: "Kan jeg ændre rækkefølgen på billederne?", answer: "Ja. Træk miniaturerne, eller brug pileknapperne til at indstille siderækkefølgen, inden du opretter PDF'en." },
      { question: "Hvilke billedformater understøttes?", answer: "JPG, PNG og WEBP. Du kan blande formater i den samme PDF." },
      { question: "Hvilken sidestørrelse vil PDF'en bruge?", answer: "Vælg A4 eller Letter — hvert billede tilpasses siden og roteres til liggende format efter behov — eller \"Tilpas til billede\", så hver side får præcis sit billedes størrelse." },
      { question: "Bliver mine billeder uploadet?", answer: "Nej. PDF'en oprettes lokalt i din browser." },
    ],
  },
  "flip-pdf": {
    name: "Vend PDF",
    actionLabel: "Vend PDF",
    shortDescription: "Vend PDF-sider vandret eller lodret.",
    longDescription: [
      "Vend PDF spejlvender hver side i dit dokument — fra venstre til højre eller fra top til bund. Nyttigt til at udskrive termotryk, rette scanninger taget fra den forkerte side eller forberede spejlvendt grafik.",
      "Forhåndsvis resultatet på den første side, inden du anvender det. Vendingen tager også højde for roterede sider, og alt sker i din browser, så filen bliver aldrig uploadet.",
    ],
    faq: [
      { question: "Hvad er forskellen mellem at vende og rotere?", answer: "Rotation drejer siden i trin på 90°. Vending skaber et spejlbillede, så teksten læses baglæns — det er det, du har brug for til termotryk og visse trykopgaver." },
      { question: "Kan jeg vende kun én side?", answer: "Vendingen anvendes på alle sider. For at vende en enkelt side skal du først udtrække den med Udtræk PDF-sider." },
      { question: "Reducerer vending kvaliteten?", answer: "Nej. Siderne transformeres, ikke gengives på ny, så tekst og grafik forbliver lige så skarpe som originalen." },
      { question: "Bliver min PDF uploadet?", answer: "Nej. Vendingen sker lokalt i din browser." },
    ],
  },
  "edit-pdf-metadata": {
    name: "Rediger PDF-metadata",
    actionLabel: "Rediger metadata",
    shortDescription: "Skift titel, forfatter, emne og nøgleord for en PDF.",
    longDescription: [
      "Rediger PDF-metadata lader dig se og ændre de dokumentegenskaber, der er gemt inde i en PDF — titel, forfatter, emne, nøgleord, opretter og producent. Det er denne information, som PDF-læsere, søgemaskiner og filhåndteringer viser om dit dokument.",
      "Lad et felt stå tomt for at fjerne det. Sideindholdet påvirkes ikke, og al redigering sker i din browser, så filen bliver aldrig uploadet.",
    ],
    faq: [
      { question: "Hvorfor redigere PDF-metadata?", answer: "En klar titel og forfatter gør dokumenter lettere at finde og få dem til at fremstå mere professionelle, når de deles, og søgemaskiner kan bruge dem, når de indekserer PDF-filer." },
      { question: "Ændrer redigering af metadata dokumentets indhold?", answer: "Nej. Kun dokumentegenskaberne ændres; sider, tekst og billeder forbliver præcis de samme." },
      { question: "Hvordan fjerner jeg en egenskab?", answer: "Ryd feltet og gem. Tomme felter fjernes fra filen." },
      { question: "Bliver min PDF uploadet?", answer: "Nej. Egenskaberne redigeres lokalt i din browser." },
    ],
  },
  "remove-pdf-metadata": {
    name: "Fjern PDF-metadata",
    actionLabel: "Fjern metadata",
    shortDescription: "Fjern forfatter, titel, software og andre skjulte egenskaber fra en PDF, inden du deler den.",
    longDescription: [
      "Fjern PDF-metadata rydder de dokumentegenskaber og skjulte data, som en PDF bærer med sig — forfatter, titel, emne, nøgleord, den software der blev brugt til at oprette den, oprettelsesdatoer og indlejrede XMP-metadatapakker.",
      "Det er et hurtigt privatlivsskridt, inden du deler en fil offentligt. Sideindholdet efterlades urørt, og oprydningen sker i din browser, så filen bliver aldrig uploadet.",
    ],
    faq: [
      { question: "Hvilke oplysninger fjernes?", answer: "Titel, forfatter, emne, nøgleord, opretter- og producentsoftware, oprettelses- og ændringsdatoer, indlejret XMP-metadata og private applikationsdata." },
      { question: "Ændrer dette, hvordan dokumentet ser ud?", answer: "Nej. Kun skjulte egenskaber fjernes; hver side ser præcis den samme ud." },
      { question: "Fjerner dette personlige oplysninger trykt på siderne?", answer: "Nej. Det fjerner kun metadata. Navne eller detaljer trykt på siderne forbliver synlige." },
      { question: "Bliver min PDF uploadet?", answer: "Nej. Filen ryddes lokalt i din browser." },
    ],
  },
  "pdf-info": {
    name: "PDF-oplysninger",
    actionLabel: "Inspicer PDF",
    shortDescription: "Se sideantal, sidestørrelser, version og PDF-egenskaber på et øjeblik.",
    longDescription: [
      "PDF-oplysninger læser en PDF-fil og viser, hvad den indeholder: sideantal, størrelsen på hver side i millimeter med papirnavne som A4 eller Letter, PDF-version, om den er krypteret eller indeholder en formular, der kan udfyldes, samt titel, forfatter, software og datoer.",
      "Nyttigt inden du udskriver, uploader eller konverterer en fil. Dokumentet læses kun — aldrig ændret — og alt sker i din browser, så det bliver aldrig uploadet.",
    ],
    faq: [
      { question: "Hvilke detaljer viser PDF-oplysninger?", answer: "Sideantal, sidestørrelser med papirnavne, PDF-version, filstørrelse, kryptering, formularer der kan udfyldes, hurtig webvisning samt dokumentegenskaber som titel, forfatter og oprettelsesdato." },
      { question: "Ændrer PDF-oplysninger min fil?", answer: "Nej. PDF'en læses kun; intet ændres eller gemmes igen." },
      { question: "Kan jeg inspicere en adgangskodebeskyttet PDF?", answer: "Filer, der kræver en adgangskode for at åbne, kan ikke læses uden den. Filer med kun redigeringsbegrænsninger vises som krypterede." },
      { question: "Bliver min PDF uploadet?", answer: "Nej. Den læses lokalt i din browser." },
    ],
  },
  "resize-image": {
    name: "Skift billedstørrelse",
    actionLabel: "Skift billedstørrelse",
    shortDescription: "Skift bredde og højde på JPG-, PNG- og WEBP-billeder — i procent eller nøjagtige pixels.",
    longDescription: [
      "Skift billedstørrelse ændrer dimensionerne på dine fotos og grafik. Skaler i procent, eller indtast en nøjagtig bredde og højde med låst billedforhold, så intet ser strakt ud. Skift størrelse på flere billeder på én gang, og download dem sammen i en .zip.",
      "Billeder beholder deres oprindelige format, og udjævning af høj kvalitet holder nedskalerede billeder skarpe. Alt sker i din browser, så billederne bliver aldrig uploadet.",
    ],
    faq: [
      { question: "Bliver mit billede sløret af størrelsesændringen?", answer: "At skrumpe et billede bevarer dets skarphed. At forstørre ud over den oprindelige størrelse kan ikke tilføje detaljer, så store forstørrelser kan se bløde ud." },
      { question: "Kan jeg skifte størrelse på flere billeder på én gang?", answer: "Ja. Tilføj op til 20 billeder; med låst billedforhold bevarer hver sine egne proportioner ved den bredde, du indstiller." },
      { question: "Hvilket format bliver det størrelsesændrede billede?", answer: "Det samme som originalen — JPG forbliver JPG, PNG forbliver PNG, og WEBP forbliver WEBP, hvor din browser understøtter det." },
      { question: "Bliver mine billeder uploadet?", answer: "Nej. Størrelsesændringen sker lokalt i din browser." },
    ],
  },
  "crop-image": {
    name: "Beskær billede",
    actionLabel: "Beskær billede",
    shortDescription: "Beskær et billede til det ønskede område med en beskæringsboks, du kan trække.",
    longDescription: [
      "Beskær billede fjerner unødvendige kanter fra et foto eller skærmbillede. Træk beskæringsboksen eller dens hjørner over forhåndsvisningen — eller finjuster hver kant med en skyder — og se den nøjagtige pixelstørrelse på resultatet.",
      "Det beskårne billede bevarer det oprindelige format og kvalitet, og hele processen sker i din browser, så billedet bliver aldrig uploadet.",
    ],
    faq: [
      { question: "Kan jeg beskære til nøjagtige dimensioner?", answer: "Juster hver kant med skyderne, og se resultatstørrelsen opdateres i pixels, mens du gør det." },
      { question: "Reducerer beskæring billedkvaliteten?", answer: "Nej. De bevarede pixels kopieres uændret; kun delene uden for boksen fjernes." },
      { question: "Hvilke formater kan jeg beskære?", answer: "JPG, PNG og WEBP. Resultatet bevarer det samme format som originalen." },
      { question: "Bliver mit billede uploadet?", answer: "Nej. Beskæringen sker lokalt i din browser." },
    ],
  },
  "flip-image": {
    name: "Vend billede",
    actionLabel: "Vend billeder",
    shortDescription: "Vend billeder vandret eller lodret — enkeltvis eller i bulk.",
    longDescription: [
      "Vend billede skaber et spejlbillede af dine fotos: fra venstre til højre eller fra top til bund. Nyttigt til at rette selfies taget med frontkameraet, skabe refleksioner eller forberede mønstre til tryk.",
      "Vend flere billeder på én gang, forhåndsvis resultatet med det samme, og download dem i det oprindelige format. Alt sker i din browser, så billederne bliver aldrig uploadet.",
    ],
    faq: [
      { question: "Hvad er forskellen mellem at vende og rotere?", answer: "Rotation drejer et billede i trin på 90°. Vending spejlvender det, som at se i et spejl." },
      { question: "Kan jeg vende flere billeder på én gang?", answer: "Ja. Tilføj op til 20 billeder, og alle vendes på samme måde, og downloades derefter sammen som en .zip." },
      { question: "Reducerer vending kvaliteten?", answer: "Intet mærkbart kvalitetstab — PNG forbliver tabsfri, og JPG og WEBP gemmes i høj kvalitet." },
      { question: "Bliver mine billeder uploadet?", answer: "Nej. Vendingen sker lokalt i din browser." },
    ],
  },
  "png-to-jpg": {
    name: "PNG til JPG",
    actionLabel: "Konverter til JPG",
    shortDescription: "Konverter PNG-billeder til JPG for mindre, mere kompatible filer.",
    longDescription: [
      "PNG til JPG konverterer dine PNG-billeder til JPG-filer, typisk betydeligt mindre — perfekt til fotos, e-mailvedhæftninger og uploadformularer, der kun accepterer JPG. Konverter flere billeder på én gang, og juster kvaliteten for at afveje størrelse mod skarphed.",
      "JPG understøtter ikke gennemsigtighed, så transparente områder fyldes med hvidt. Konverteringen sker helt i din browser, så billederne bliver aldrig uploadet.",
    ],
    faq: [
      { question: "Hvorfor konvertere PNG til JPG?", answer: "JPG-filer er typisk meget mindre end PNG for fotos og accepteres næsten overalt, fra e-mail til onlineformularer." },
      { question: "Hvad sker der med en transparent baggrund?", answer: "JPG har ingen gennemsigtighed, så transparente områder fyldes med hvidt." },
      { question: "Kan jeg konvertere flere PNG-filer på én gang?", answer: "Ja. Tilføj op til 30 billeder; de konverteres sammen og downloades som en .zip." },
      { question: "Bliver mine billeder uploadet?", answer: "Nej. Konverteringen sker lokalt i din browser." },
    ],
  },
  "jpg-to-png": {
    name: "JPG til PNG",
    actionLabel: "Konverter til PNG",
    shortDescription: "Konverter JPG-fotos til PNG-billeder uden kvalitetstab.",
    longDescription: [
      "JPG til PNG konverterer dine JPG- eller JPEG-billeder til PNG-format. PNG er tabsfrit, så billedet mister ikke yderligere kvalitet, når det redigeres og gemmes igen — nyttigt til grafik, du vil blive ved med at arbejde på, eller til værktøjer og platforme, der kræver PNG.",
      "Konverter flere billeder på én gang, og download dem sammen. Konverteringen sker helt i din browser, så billederne bliver aldrig uploadet.",
    ],
    faq: [
      { question: "Forbedrer konvertering af JPG til PNG kvaliteten?", answer: "Nej — detaljer, der allerede er tabt i JPG, kan ikke gendannes. Men PNG forhindrer yderligere tab, når du redigerer og gemmer igen." },
      { question: "Hvorfor er PNG større end JPG?", answer: "PNG gemmer hver pixel uden tabsgivende komprimering, så fotos bliver typisk større. Det er en afvejning for tabsfri kvalitet." },
      { question: "Kan jeg konvertere flere JPG-filer på én gang?", answer: "Ja. Tilføj op til 30 billeder, og download som en .zip." },
      { question: "Bliver mine billeder uploadet?", answer: "Nej. Konverteringen sker lokalt i din browser." },
    ],
  },
  "webp-to-jpg": {
    name: "WEBP til JPG",
    actionLabel: "Konverter til JPG",
    shortDescription: "Konverter WEBP-billeder til JPG, så de åbner i enhver app eller hjemmeside.",
    longDescription: [
      "WEBP til JPG konverterer moderne WEBP-billeder — almindelige på hjemmesider — til JPG, et format der understøttes af stort set enhver app, enhed og uploadformular. Konverter ét billede eller flere på én gang, og juster kvaliteten for at afveje størrelse mod skarphed.",
      "Transparente områder fyldes med hvidt, da JPG ikke understøtter gennemsigtighed. Konverteringen sker helt i din browser, så billederne bliver aldrig uploadet.",
    ],
    faq: [
      { question: "Hvorfor konvertere WEBP til JPG?", answer: "Nogle ældre apps, redigeringsprogrammer og uploadformularer accepterer ikke WEBP. JPG virker næsten overalt." },
      { question: "Mister jeg kvalitet?", answer: "Ved standardkvalitet er forskellen svær at se. Øg kvalitetsskyderen for det skarpeste resultat." },
      { question: "Kan jeg konvertere flere WEBP-billeder på én gang?", answer: "Ja. Tilføj op til 30 billeder, og download som en .zip." },
      { question: "Bliver mine billeder uploadet?", answer: "Nej. Konverteringen sker lokalt i din browser." },
    ],
  },
  "jpg-to-webp": {
    name: "JPG til WEBP",
    actionLabel: "Konverter til WEBP",
    shortDescription: "Konverter JPG-fotos til WEBP for mindre, hurtigere webbilleder.",
    longDescription: [
      "JPG til WEBP konverterer dine JPG-billeder til WEBP, et moderne format der typisk giver betydeligt mindre filer med lignende visuel kvalitet — godt til at gøre hjemmesider hurtigere og spare diskplads.",
      "Juster kvaliteten for at finde den rette balance, og konverter flere billeder på én gang. Konverteringen sker helt i din browser, så billederne bliver aldrig uploadet. Oprettelse af WEBP-filer kræver en nyere version af Chrome, Edge eller Firefox.",
    ],
    faq: [
      { question: "Er WEBP mindre end JPG?", answer: "Typisk ja — WEBP sparer ofte en betydelig mængde plads ved lignende kvalitet, hvilket hjælper hjemmesider med at indlæse hurtigere." },
      { question: "Understøtter alle browsere WEBP?", answer: "Alle moderne browsere kan vise WEBP. Oprettelse af WEBP-filer her kræver en nyere version af Chrome, Edge eller Firefox." },
      { question: "Kan jeg konvertere flere JPG-filer på én gang?", answer: "Ja. Tilføj op til 30 billeder, og download som en .zip." },
      { question: "Bliver mine billeder uploadet?", answer: "Nej. Konverteringen sker lokalt i din browser." },
    ],
  },
  "webp-to-png": {
    name: "WEBP til PNG",
    actionLabel: "Konverter til PNG",
    shortDescription: "Konverter WEBP-billeder til PNG og bevar gennemsigtighed.",
    longDescription: [
      "WEBP til PNG konverterer WEBP-billeder til PNG, et tabsfrit format der understøttes af ethvert billedredigeringsprogram. Gennemsigtighed bevares, så logoer, ikoner og udklippet grafik beholder deres transparente baggrunde.",
      "Konverter flere billeder på én gang, og download dem sammen. Konverteringen sker helt i din browser, så billederne bliver aldrig uploadet.",
    ],
    faq: [
      { question: "Bevares gennemsigtighed?", answer: "Ja. PNG understøtter gennemsigtighed, så transparente områder i dit WEBP-billede forbliver transparente." },
      { question: "Hvorfor konvertere WEBP til PNG?", answer: "PNG åbner i ethvert redigerings- og designværktøj og mister ikke kvalitet ved yderligere redigering og gemning." },
      { question: "Kan jeg konvertere flere WEBP-filer på én gang?", answer: "Ja. Tilføj op til 30 billeder, og download som en .zip." },
      { question: "Bliver mine billeder uploadet?", answer: "Nej. Konverteringen sker lokalt i din browser." },
    ],
  },
  "png-to-webp": {
    name: "PNG til WEBP",
    actionLabel: "Konverter til WEBP",
    shortDescription: "Konverter PNG-billeder til WEBP for mindre filer, der bevarer gennemsigtighed.",
    longDescription: [
      "PNG til WEBP konverterer dine PNG-billeder til WEBP, hvilket typisk skrumper filer betydeligt, mens gennemsigtighed bevares — perfekt til webgrafik, ikoner og skærmbilleder.",
      "Vælg en kvalitet, konverter flere billeder på én gang, og download dem sammen. Konverteringen sker helt i din browser, så billederne bliver aldrig uploadet. Oprettelse af WEBP-filer kræver en nyere version af Chrome, Edge eller Firefox.",
    ],
    faq: [
      { question: "Bevarer WEBP gennemsigtighed?", answer: "Ja. WEBP understøtter gennemsigtighed, så transparente områder i din PNG forbliver transparente." },
      { question: "Hvor meget mindre bliver mine billeder?", answer: "Det varierer, men WEBP-filer er ofte betydeligt mindre end det samme billede gemt som PNG." },
      { question: "Kan jeg konvertere flere PNG-filer på én gang?", answer: "Ja. Tilføj op til 30 billeder, og download som en .zip." },
      { question: "Bliver mine billeder uploadet?", answer: "Nej. Konverteringen sker lokalt i din browser." },
    ],
  },
};
