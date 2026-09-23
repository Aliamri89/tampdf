import type { ToolTranslationOverride } from "./tools-ar";

export const toolsNo: Record<string, ToolTranslationOverride> = {
  "compress-pdf": {
    name: "Komprimer PDF",
    actionLabel: "Komprimer PDF",
    shortDescription: "Reduser størrelsen på PDF-filen din for enklere deling og sending, direkte i nettleseren.",
    longDescription: [
      "Komprimer PDF reduserer filstørrelsen ved å omkode innebygde bilder og fjerne unødvendige data, slik at dokumentet blir lettere å sende på e-post, laste opp eller lagre.",
      "Velg et komprimeringsnivå for å balansere filstørrelse mot visuell kvalitet, og sammenlign størrelsen før/etter før du laster ned.",
    ],
    faq: [
      { question: "Hvor mye mindre blir PDF-en min?", answer: "Det avhenger av innholdet. PDF-er med store innebygde bilder krymper vanligvis mest, noen ganger 50-90%. Tekstrike PDF-er komprimeres mindre fordi det er mindre å optimalisere." },
      { question: "Blir PDF-en min uskarp av komprimering?", answer: "Med standardinnstillingene er kvalitetstapet minimalt. Velger du det sterkeste komprimeringsnivået, skaleres bilder ned mer aggressivt, noe som kan redusere skarpheten ved innzooming." },
      { question: "Skjer komprimeringen på TAMPDFs servere?", answer: "Nei. Komprimer PDF kjører lokalt i nettleseren din, så filen din blir aldri lastet opp noe sted." },
      { question: "Kan jeg komprimere en passordbeskyttet PDF?", answer: "Ikke for øyeblikket. Fjern passordbeskyttelsen med et annet verktøy først, og komprimer deretter filen." },
    ],
  },
  "pdf-to-jpg": {
    name: "PDF til JPG",
    actionLabel: "Konverter til JPG",
    shortDescription: "Gjør om hver PDF-side til et JPG-bilde i høy kvalitet.",
    longDescription: [
      "PDF til JPG konverterer hver side i PDF-en din til et eget JPG-bilde, klart til å deles, redigeres eller settes inn i en presentasjon. En PDF med én side lastes ned som en enkelt JPG-fil; flersidige PDF-er pakkes i en .zip.",
      "Konverteringen skjer direkte i nettleseren din med PDF.js, så dokumentet ditt blir aldri lastet opp til en server.",
    ],
    faq: [
      { question: "Hva om PDF-en min har flere sider?", answer: "Hver side blir et eget JPG-bilde. Hvis det er mer enn én, pakkes de i en enkelt .zip-fil for nedlasting." },
      { question: "Hvor skarpe blir bildene?", answer: "Sidene gjengis i høy oppløsning som passer for skjermer og de fleste utskriftsbehov. Velg et kvalitetsnivå for å balansere skarphet mot filstørrelse." },
      { question: "Blir PDF-en min lastet opp noe sted?", answer: "Nei. PDF til JPG behandler hver side lokalt i nettleseren din, så filen forlater aldri enheten din." },
      { question: "Kan jeg konvertere bare én side i stedet for hele dokumentet?", answer: "Akkurat nå konverteres alle sider. Bruk Slå sammen PDF eller en PDF-leser for å hente ut én side først hvis du bare trenger ett bilde." },
    ],
  },
  "merge-pdf": {
    name: "Slå sammen PDF",
    actionLabel: "Slå sammen PDF-filer",
    shortDescription: "Kombiner flere PDF-filer til ett dokument, i den rekkefølgen du velger.",
    longDescription: [
      "Slå sammen PDF lar deg kombinere to eller flere PDF-filer til ett dokument uten å installere noe. Legg til filer, dra for å ordne dem, og last ned én sammenslått PDF.",
      "Alt kjører lokalt i nettleseren din, så filene blir aldri lastet opp til en server. Det betyr at det fungerer selv med sensitive kontrakter, rapporter eller personlige dokumenter.",
    ],
    faq: [
      { question: "Er det en grense for hvor mange PDF-er jeg kan slå sammen?", answer: "Det er ingen fast grense. Siden sammenslåingen skjer i nettleseren din, er den praktiske begrensningen enhetens minne, ikke en servergrense." },
      { question: "Kan jeg endre siderekkefølgen før sammenslåing?", answer: "Ja. Når filene er lagt til, drar du dem i rekkefølgen du vil at det endelige dokumentet skal ha før du slår sammen." },
      { question: "Blir filene mine lastet opp til TAMPDFs servere?", answer: "Nei. Slå sammen PDF behandler filer helt i nettleseren din med klientsideteknologi, så dokumentene forlater aldri enheten din." },
      { question: "Påvirker sammenslåing kvaliteten på PDF-ene mine?", answer: "Nei. Sidene kombineres uendret, uten omkomprimering, så tekst, bilder og formatering forblir nøyaktig som originalene." },
    ],
  },
  "rotate-pdf": {
    name: "Roter PDF",
    actionLabel: "Roter PDF",
    shortDescription: "Roter enkeltsider eller en hel PDF 90°, 180° eller 270°, direkte i nettleseren.",
    longDescription: [
      "Roter PDF lar deg fikse sidelengs eller opp-ned sider på noen sekunder. Last opp én eller flere PDF-er, se en miniatyr av hver side, og roter deretter hele dokumentet på én gang eller bare de sidene du trenger.",
      "Alt kjører lokalt i nettleseren din, så filene blir aldri lastet opp til en server. Last opp flere PDF-er samtidig, og hver av dem roteres og returneres uavhengig.",
    ],
    faq: [
      { question: "Kan jeg rotere bare én side i stedet for hele dokumentet?", answer: "Ja. Klikk på rotasjonsknappen på en enkelt side for å bare rotere den, eller bruk knappene for å rotere alle for å bruke samme rotasjon på alle sidene på én gang." },
      { question: "Hvilke rotasjonsvinkler støttes?", answer: "Du kan rotere sider 90°, 180° eller 270° i begge retninger." },
      { question: "Kan jeg rotere mer enn én PDF om gangen?", answer: "Ja. Last opp flere PDF-er, og hver roteres uavhengig. Hvis du laster opp mer enn én fil, pakkes de roterte PDF-ene i en .zip for nedlasting." },
      { question: "Blir PDF-en min lastet opp noe sted?", answer: "Nei. Roter PDF behandler alt lokalt i nettleseren din, så filene forlater aldri enheten din." },
    ],
  },
  "compress-image": {
    name: "Komprimer bilde",
    actionLabel: "Komprimer bilder",
    shortDescription: "Reduser filstørrelsen på JPG-, PNG- og WebP-filer samtidig som visuell kvalitet bevares.",
    longDescription: [
      "Komprimer bilde reduserer filstørrelsen på JPG-, PNG- eller WebP-bildene dine, slik at de er raskere å laste opp, sende på e-post og laste inn på nettsteder.",
      "Komprimeringen skjer helt i nettleseren din med canvas-API-et, så bildene dine forlater aldri enheten din, og du kan komprimere flere bilder på én gang.",
    ],
    faq: [
      { question: "Hvilke bildeformater støttes?", answer: "JPG-, PNG- og WebP-bilder støttes som både inndata og utdata." },
      { question: "Kan jeg komprimere flere bilder på én gang?", answer: "Ja. Legg til så mange bilder du vil, og hver komprimeres og pakkes i en enkelt .zip-fil for nedlasting eller lastes ned individuelt." },
      { question: "Hvor mye kan jeg krympe et bilde uten kvalitetstap?", answer: "Standard kvalitetsinnstilling reduserer vanligvis filstørrelsen med 60-80% uten synlig forskjell. Du kan justere kvalitetsglideren for en annen avveining." },
      { question: "Blir bildene mine lastet opp til en server?", answer: "Nei. Komprimeringen kjører lokalt i nettleseren din med canvas-API-et, så bildene sendes aldri noe sted." },
    ],
  },
  "image-to-pdf": {
    name: "JPG til PDF",
    actionLabel: "Konverter til PDF",
    shortDescription: "Gjør om ett eller flere JPG-bilder til ett PDF-dokument.",
    longDescription: [
      "JPG til PDF kombinerer JPG-bildene dine til én PDF-fil, ett bilde per side, i den rekkefølgen du velger.",
      "Perfekt for å gjøre skannede dokumenter, kvitteringer eller bilder om til en delbar PDF. Alt behandles lokalt i nettleseren din for full personvern.",
    ],
    faq: [
      { question: "Kan jeg kombinere flere bilder til én PDF?", answer: "Ja. Legg til flere bilder, og hvert blir en side i den resulterende PDF-en, i rekkefølgen du ordner dem." },
      { question: "Hvilken sidestørrelse brukes for PDF-en?", answer: "Hver side tilpasses kildebildets dimensjoner og orientering, så ingenting beskjæres eller strekkes." },
      { question: "Blir bildene mine lastet opp noe sted?", answer: "Nei. Konverteringen skjer helt i nettleseren din, så bildene forblir på enheten din." },
      { question: "Støtter den PNG-bilder også?", answer: "Ja, PNG-bilder støttes sammen med JPG. HEIC-bilder fra iPhone støttes ikke ennå; konverter dem til JPG med telefonens delingsalternativ først." },
    ],
  },
  "rotate-images": {
    name: "Roter bilder",
    actionLabel: "Roter bilder",
    shortDescription: "Roter ett eller flere JPG-, PNG- eller WebP-bilder 90°, 180° eller 270°.",
    longDescription: [
      "Roter bilder fikser sidelengs eller opp-ned bilder på noen sekunder. Last opp ett eller flere bilder, roter hvert enkeltvis eller alle på én gang, og last ned resultatene.",
      "Alt kjører lokalt i nettleseren din, så bildene blir aldri lastet opp til en server. Last opp flere bilder samtidig, og hvert av dem roteres og returneres uavhengig.",
    ],
    faq: [
      { question: "Hvilke bildeformater støttes?", answer: "JPG-, PNG- og WebP-bilder støttes. Rotasjon bevarer det opprinnelige formatet." },
      { question: "Kan jeg rotere bare ett bilde i stedet for alle?", answer: "Ja. Klikk på rotasjonsknappen på ett enkelt bilde for å bare rotere det, eller bruk knappene for å rotere alle for å bruke samme rotasjon på alle bildene på én gang." },
      { question: "Hvilke rotasjonsvinkler støttes?", answer: "Du kan rotere bilder 90°, 180° eller 270°." },
      { question: "Blir bildene mine lastet opp noe sted?", answer: "Nei. Roter bilder behandler alt lokalt i nettleseren din, så bildene forlater aldri enheten din." },
    ],
  },
  "split-pdf": {
    name: "Del opp PDF",
    actionLabel: "Del opp PDF",
    shortDescription: "Del én PDF i flere mindre filer etter sideintervaller eller i faste biter.",
    longDescription: [
      "Del opp PDF deler et stort dokument inn i separate PDF-er uten å endre sidene selv. Skriv inn sideintervaller som 1-3, 5, 8-10 for å hente ut nøyaktig de seksjonene du trenger, eller del hele dokumentet i like store biter med et fast antall sider.",
      "Alt skjer i nettleseren din — PDF-en din blir aldri lastet opp til en server. Ett enkelt resultat lastes ned som én PDF; flere deler pakkes i en .zip.",
    ],
    faq: [
      { question: "Hvordan velger jeg hvilke sider som skal gå til hvilken fil?", answer: "Bruk intervallfeltet: noe som «1-3, 5, 8-10» lager tre PDF-er — side 1 til 3, bare side 5, og side 8 til 10. Eller bytt til «hver N. side» for å skjære dokumentet i like biter." },
      { question: "Beholder de oppdelte filene den opprinnelige kvaliteten?", answer: "Ja. Sidene kopieres uendret, uten omkomprimering, så tekst, bilder, skrifter og layout er identisk med kilden." },
      { question: "Blir PDF-en min lastet opp noe sted?", answer: "Nei. Oppdelingen skjer helt i nettleseren din, så dokumentet forlater aldri enheten din." },
      { question: "Hva skjer med skjemafelt eller digitale signaturer?", answer: "Sideinnhold og skjemawidgeter bevares visuelt, men interaktiv skjemaoppførsel og signaturer overføres ikke til de oppdelte filene. Flat dem ut eller signer på nytt ved behov." },
    ],
  },
  "delete-pdf-pages": {
    name: "Slett PDF-sider",
    actionLabel: "Slett sider",
    shortDescription: "Fjern sider du ikke trenger fra en PDF, og last ned et ryddet dokument.",
    longDescription: [
      "Slett PDF-sider lar deg forkaste sider du ikke trenger — tomme skanninger, forsider, dupliserte sider — og beholde resten i opprinnelig rekkefølge. Se en miniatyr av hver side, trykk på dem du vil fjerne, og last ned resultatet.",
      "Hele prosessen skjer lokalt i nettleseren din, så PDF-en din blir aldri lastet opp. De gjenværende sidene kopieres uten omkomprimering, så ingenting mister kvalitet.",
    ],
    faq: [
      { question: "Kan jeg slette mer enn én side om gangen?", answer: "Ja. Velg et hvilket som helst antall sider i miniatyrgriddet, og slett dem alle i ett trinn." },
      { question: "Kan jeg slette alle sidene?", answer: "Nei — minst én side må gjenstå, så knappen deaktiveres hvis du har valgt alle." },
      { question: "Reduserer sletting av sider filstørrelsen?", answer: "Vanligvis litt, siden innholdet på de slettede sidene forkastes. Delte ressurser som skrifter kan bli igjen, så bruk Komprimer PDF etterpå hvis størrelsen betyr noe." },
      { question: "Blir filene mine lastet opp til en server?", answer: "Nei. Alt skjer i nettleseren din, og PDF-en din forlater aldri enheten din." },
    ],
  },
  "reorder-pdf-pages": {
    name: "Endre rekkefølge på PDF-sider",
    actionLabel: "Endre rekkefølge på sider",
    shortDescription: "Dra PDF-sider for å endre rekkefølgen deres, og lagre det omorganiserte dokumentet.",
    longDescription: [
      "Endre rekkefølge på PDF-sider viser en miniatyr av hver side som du kan dra til ønsket rekkefølge — flytt en side til begynnelsen, bytt to seksjoner eller snu hele dokumentet. Flytteknapper er også tilgjengelig for presise endringer, én side om gangen.",
      "Omorganiseringen skjer helt i nettleseren din, så PDF-en din blir aldri lastet opp. Sidene kopieres uendret, så kvalitet og formatering forblir intakt.",
    ],
    faq: [
      { question: "Hvordan flytter jeg en side?", answer: "Dra miniatyren til en ny posisjon, eller bruk opp/ned-knappene på hver side for enkeltsteg. Den nye rekkefølgen lagres når du klikker på knappen." },
      { question: "Kan jeg snu hele dokumentet?", answer: "Ja — dra sidene i omvendt rekkefølge, eller bruk flytteknappene. Et hvilket som helst antall sider kan endres i ett trinn." },
      { question: "Endrer omorganisering sideinnholdet?", answer: "Nei. Bare siderekkefølgen endres — teksten, bildene og layouten på hver side forblir nøyaktig de samme." },
      { question: "Blir PDF-en lastet opp noe sted?", answer: "Nei. Omorganiseringen kjører lokalt i nettleseren din, og filen forlater aldri enheten din." },
    ],
  },
  "crop-pdf": {
    name: "Beskjær PDF",
    actionLabel: "Beskjær PDF",
    shortDescription: "Beskjær margene på hver PDF-side ved å angi verdier fra topp, bunn og sider.",
    longDescription: [
      "Beskjær PDF fjerner unødvendig hvit plass eller skannekanter fra sidekantene. Angi hvor mye som skal beskjæres fra topp, bunn, venstre og høyre som en prosentandel, se en direkte forhåndsvisning, og bruk på alle sider på én gang.",
      "Beskjæringen justerer det synlige sideområdet uten å fjerne noe innhold — de beskårne delene skjules bare. Alt skjer i nettleseren din, så PDF-en din blir aldri lastet opp.",
    ],
    faq: [
      { question: "Fjerner beskjæring innhold utenfor det beskårne området?", answer: "Nei. Beskjær PDF endrer sidens beskjæringsboks, som skjuler det ytre området i nettlesere og ved utskrift. Det underliggende innholdet er fortsatt i filen og kan gjenopprettes." },
      { question: "Brukes samme beskjæring på alle sider?", answer: "Ja. Margene du angir, brukes på alle sider. Sider med forskjellige størrelser beskjæres med samme prosentandel." },
      { question: "Kan jeg beskjære et skannet dokument for å fjerne en svart ramme?", answer: "Ja — det er et vanlig bruksområde. Øk margene til forhåndsvisningen bare viser innholdet du vil beholde." },
      { question: "Blir filen min lastet opp til en server?", answer: "Nei. Beskjæringen skjer helt i nettleseren din, og PDF-en din blir værende på enheten din." },
    ],
  },
  "resize-pdf": {
    name: "Endre størrelse på PDF",
    actionLabel: "Endre størrelse",
    shortDescription: "Endre størrelsen på PDF-sider til A4, Letter eller en tilpasset skala, med innhold tilpasset og sentrert.",
    longDescription: [
      "Endre størrelse på PDF endrer den fysiske sidestørrelsen på dokumentet ditt. Velg en standardstørrelse som A4 eller US Letter, så skaleres hver side for å passe og sentreres, eller bruk en prosentandel for å krympe eller forstørre sidene proporsjonalt.",
      "Størrelsesendringen skjer i nettleseren din uten opplasting. Innholdet skaleres sammen med siden, så ingenting beskjæres, og layouten forblir proporsjonal.",
    ],
    faq: [
      { question: "Hvilke sidestørrelser kan jeg velge?", answer: "A4 og US Letter i stående eller liggende format, pluss A3 og A5. Du kan også skrive inn en skalaprosent for å endre størrelse uten å endre proporsjonene." },
      { question: "Vil innholdet mitt bli strukket?", answer: "Nei. Innholdet skaleres jevnt for å passe den nye størrelsen og sentreres på siden, så proporsjonene bevares, og ingenting beskjæres." },
      { question: "Kan jeg bruke dette til å redusere PDF-filstørrelsen min?", answer: "Ikke direkte — dette endrer sidemålene, ikke filvekten. Bruk Komprimer PDF for å redusere filstørrelsen." },
      { question: "Blir filene mine lastet opp noe sted?", answer: "Nei. Størrelsesendringen skjer lokalt i nettleseren din, og PDF-en din forlater aldri enheten din." },
    ],
  },
  "png-to-pdf": {
    name: "PNG til PDF",
    actionLabel: "Konverter til PDF",
    shortDescription: "Gjør om ett eller flere PNG-bilder til ett PDF-dokument, ett bilde per side.",
    longDescription: [
      "PNG til PDF kombinerer PNG-bilder til én PDF-fil, med hvert bilde på sin egen side i original oppløsning. Legg til flere bilder, ordne rekkefølgen deres, og last ned ett dokument.",
      "Flott for å gjøre skjermbilder, diagrammer eller eksportert grafikk om til en delbar PDF. Konverteringen skjer helt i nettleseren din, så bildene blir aldri lastet opp. Gjennomsiktige områder plasseres på en hvit bakgrunn.",
    ],
    faq: [
      { question: "Kan jeg kombinere flere PNG-filer til én PDF?", answer: "Ja. Legg til et hvilket som helst antall PNG-bilder, og hvert blir en side i den resulterende PDF-en, i rekkefølgen du ordner dem." },
      { question: "Hvilken sidestørrelse brukes?", answer: "Hver side samsvarer med kildebildets pikseldimensjoner, så bildene beskjæres eller strekkes ikke." },
      { question: "Hva skjer med gjennomsiktige deler av bildet?", answer: "Gjennomsiktighet flates ut til en hvit bakgrunn, slik at siden ser lik ut i alle PDF-visere." },
      { question: "Blir bildene mine lastet opp til en server?", answer: "Nei. Konverteringen skjer helt i nettleseren din, og bildene forblir på enheten din." },
    ],
  },
  "extract-pdf-pages": {
    name: "Hent ut PDF-sider",
    actionLabel: "Hent ut sider",
    shortDescription: "Hent ut valgte sider fra en PDF til en ny fil — eller lagre hver side som sin egen PDF.",
    longDescription: [
      "Hent ut PDF-sider lar deg velge nøyaktig de sidene du trenger fra et dokument og lagre dem som en ny PDF. Se en miniatyr av hver side, trykk på dem du vil beholde, og last dem ned sammen — eller som separate énsidige PDF-er i en ZIP.",
      "Den opprinnelige filen din forblir uendret, og sidene kopieres uendret, så tekst, bilder og formatering forblir intakt. Alt skjer i nettleseren din, så PDF-en din blir aldri lastet opp.",
    ],
    faq: [
      { question: "Hva er forskjellen mellom å hente ut og dele opp?", answer: "Uthenting lagrer bare de valgte sidene i en ny PDF. Oppdeling deler hele dokumentet i flere deler etter sideintervaller eller faste størrelser." },
      { question: "Kan jeg lagre hver uthentede side som sin egen fil?", answer: "Ja. Velg «Separate PDF-er», og hver valgte side blir sin egen PDF, pakket i én .zip-nedlasting." },
      { question: "Mister uthentede sider kvalitet?", answer: "Nei. Sidene kopieres uten omkomprimering, så de ser nøyaktig ut som originalen. Interaktive skjemafelt kan bli vanlig sideinnhold." },
      { question: "Blir PDF-en min lastet opp til en server?", answer: "Nei. Sidene hentes ut lokalt i nettleseren din, og filen forlater aldri enheten din." },
    ],
  },
  "add-page-numbers": {
    name: "Legg til sidetall",
    actionLabel: "Legg til sidetall",
    shortDescription: "Nummerer PDF-sider med posisjonen, formatet og startnummeret du velger.",
    longDescription: [
      "Legg til sidetall plasserer et tall på hver side i PDF-en din. Velg mellom seks posisjoner, en stil som «1», «1 / 10» eller «Side 1 av 10», angi et startnummer, og hopp eventuelt over forsiden.",
      "Tallene tegnes som ekte tekst i en standardskrift, så de skrives ut skarpt og forblir oppreist selv på roterte sider. Hele prosessen skjer i nettleseren din — dokumentet ditt blir aldri lastet opp.",
    ],
    faq: [
      { question: "Kan jeg starte nummereringen på et annet tall enn 1?", answer: "Ja. Angi et hvilket som helst startnummer — nyttig når PDF-en din er et kapittel eller vedlegg til et større dokument." },
      { question: "Kan jeg la forsiden være uten tall?", answer: "Ja. Aktiver «Ikke nummerer den første siden», og nummereringen starter på side to." },
      { question: "Hvilke tall brukes?", answer: "Standardtall (1, 2, 3) som vises riktig i alle PDF-lesere. Etiketter som «Side 1 av 10» skrives på norsk." },
      { question: "Blir filen min lastet opp?", answer: "Nei. Sidetall legges til lokalt i nettleseren din, og PDF-en din blir værende på enheten din." },
    ],
  },
  "add-watermark": {
    name: "Legg til vannmerke",
    actionLabel: "Legg til vannmerke",
    shortDescription: "Plasser tekst som KONFIDENSIELT eller UTKAST over hver PDF-side.",
    longDescription: [
      "Legg til vannmerke plasserer teksten din over hver side i en PDF — én gang i midten eller gjentatt over hele siden. Velg farge, gjennomsiktighet, størrelse og vinkel, og se en direkte forhåndsvisning på den første siden før du bruker den.",
      "Norsk og andre skriftsystemer støttes fullt ut. Vannmerket lagres som et standard vannmerkeobjekt, og alt skjer i nettleseren din, så dokumentet ditt blir aldri lastet opp.",
    ],
    faq: [
      { question: "Kan jeg skrive et vannmerke på norsk?", answer: "Ja. Teksten gjengis med nettleserens skrifter, så norsk og andre skriftsystemer vises riktig." },
      { question: "Kan vannmerket gjentas over siden?", answer: "Ja. Velg oppsettet «Gjentatt» for å flislegge teksten over hele siden, eller «Én gang, sentrert» for et enkelt stempel." },
      { question: "Kan vannmerket fjernes senere?", answer: "Det lagres som et standard vannmerkeobjekt, så verktøy som gjenkjenner vannmerker — inkludert TAMPDFs eget Fjern vannmerke — kan fjerne det. Dette er ikke en sikkerhetsfunksjon." },
      { question: "Blir PDF-en min lastet opp noe sted?", answer: "Nei. Vannmerket brukes lokalt i nettleseren din." },
    ],
  },
  "remove-watermark": {
    name: "Fjern vannmerke",
    actionLabel: "Fjern vannmerke",
    shortDescription: "Fjern vannmerker som er lagt til som vannmerkeobjekter i en PDF.",
    longDescription: [
      "Fjern vannmerke finner og fjerner vannmerker lagt til som vannmerkeobjekter — typen som opprettes av Adobe Acrobat, TAMPDF og de fleste PDF-redigerere — sammen med vannmerkeannoteringer og lag med navnet «Watermark». Resten av hver side forblir nøyaktig den samme.",
      "Vannmerker som er en del av et skannet bilde eller slått sammen med sidens vanlige tekst, har ingen markør som skiller dem fra ekte innhold, så de kan ikke fjernes automatisk. Fjern bare vannmerker fra dokumenter du har rett til å redigere. Behandlingen skjer i nettleseren din, så filen blir aldri lastet opp.",
    ],
    faq: [
      { question: "Hvilke vannmerker kan fjernes?", answer: "Vannmerker lagt til som vannmerkeobjekter, vannmerkeannoteringer eller lag med navnet «Watermark» — inkludert de opprettet av Adobe Acrobat og TAMPDFs eget Legg til vannmerke-verktøy." },
      { question: "Hvorfor ble ikke vannmerket fjernet fra filen min?", answer: "Hvis vannmerket er en del av et skannet sidebilde eller har blitt flatet ut i sidens tekst, kan det ikke skilles fra det ekte innholdet uten å skade siden." },
      { question: "Påvirker fjerning av vannmerket resten av siden?", answer: "Nei. Bare det merkede vannmerkeinnholdet fjernes; tekst, bilder og layout forblir intakt." },
      { question: "Blir filen min lastet opp?", answer: "Nei. PDF-en behandles lokalt i nettleseren din." },
    ],
  },
  "pdf-to-images": {
    name: "PDF til bilder",
    actionLabel: "Konverter til bilder",
    shortDescription: "Gjør om hver PDF-side til PNG-, JPG- eller WEBP-bilder, lastet ned som ZIP.",
    longDescription: [
      "PDF til bilder gjengir hver side i PDF-en din som et eget bilde i formatet du velger: PNG for den skarpeste teksten, JPG for de minste filene, eller WEBP for moderne, kompakte bilder. Velg en oppløsning, så eksporteres hver side og pakkes i en enkelt .zip-fil.",
      "Gjengivelsen skjer direkte i nettleseren din med PDF.js, så dokumentet ditt blir aldri lastet opp til en server.",
    ],
    faq: [
      { question: "Hvilket bildeformat bør jeg velge?", answer: "PNG holder tekst og strekgrafikk helt skarp. JPG lager mindre filer og passer for bilder. WEBP gir en god balanse for nettbruk." },
      { question: "Hvilken oppløsning er bildene?", answer: "Standard gjengir ved 108 dpi, Høy ved 144 dpi, og Maksimal ved 216 dpi — høyt nok til å skrive ut de fleste dokumenter." },
      { question: "Hvordan får jeg alle sidene på én gang?", answer: "Hver side konverteres og pakkes i en enkelt .zip-fil. En PDF med én side lastes ned som ett enkelt bilde." },
      { question: "Blir PDF-en min lastet opp?", answer: "Nei. Sidene gjengis lokalt i nettleseren din." },
    ],
  },
  "images-to-pdf": {
    name: "Bilder til PDF",
    actionLabel: "Opprett PDF",
    shortDescription: "Kombiner JPG-, PNG- og WEBP-bilder til én PDF, i den rekkefølgen du velger.",
    longDescription: [
      "Bilder til PDF gjør om en samling bilder, skanninger eller skjermbilder til ett PDF-dokument. Legg til JPG-, PNG- eller WEBP-bilder, dra miniatyrene til ønsket rekkefølge, og velg en A4- eller Letter-side (med automatisk orientering) eller sider tilpasset hvert bilde.",
      "Legg til en marg for et rent utskriftsutseende. Gjennomsiktige områder plasseres på en hvit bakgrunn, og hele konverteringen skjer i nettleseren din, så bildene blir aldri lastet opp.",
    ],
    faq: [
      { question: "Kan jeg endre rekkefølgen på bildene?", answer: "Ja. Dra miniatyrene, eller bruk pilknappene for å angi siderekkefølgen før du oppretter PDF-en." },
      { question: "Hvilke bildeformater støttes?", answer: "JPG, PNG og WEBP. Du kan blande formater i samme PDF." },
      { question: "Hvilken sidestørrelse vil PDF-en bruke?", answer: "Velg A4 eller Letter — hvert bilde tilpasses siden og roteres til liggende ved behov — eller «Tilpass til bilde» slik at hver side får nøyaktig sitt bildes størrelse." },
      { question: "Blir bildene mine lastet opp?", answer: "Nei. PDF-en opprettes lokalt i nettleseren din." },
    ],
  },
  "flip-pdf": {
    name: "Vend PDF",
    actionLabel: "Vend PDF",
    shortDescription: "Vend PDF-sider horisontalt eller vertikalt.",
    longDescription: [
      "Vend PDF speilvender hver side i dokumentet ditt — fra venstre til høyre eller fra topp til bunn. Nyttig for å skrive ut termotrykk, fikse skanninger tatt fra feil side eller forberede speilvendt grafikk.",
      "Forhåndsvis resultatet på den første siden før du bruker det. Vendingen tar også hensyn til roterte sider, og alt skjer i nettleseren din, så filen blir aldri lastet opp.",
    ],
    faq: [
      { question: "Hva er forskjellen mellom å vende og rotere?", answer: "Rotasjon dreier siden i trinn på 90°. Vending skaper et speilbilde, så teksten leses baklengs — det er det du trenger for termotrykk og enkelte trykkejobber." },
      { question: "Kan jeg vende bare én side?", answer: "Vendingen brukes på alle sider. For å vende en enkelt side, hent den ut først med Hent ut PDF-sider." },
      { question: "Reduserer vending kvaliteten?", answer: "Nei. Sidene transformeres, ikke gjengis på nytt, så tekst og grafikk forblir like skarpe som originalen." },
      { question: "Blir PDF-en min lastet opp?", answer: "Nei. Vendingen skjer lokalt i nettleseren din." },
    ],
  },
  "edit-pdf-metadata": {
    name: "Rediger PDF-metadata",
    actionLabel: "Rediger metadata",
    shortDescription: "Endre tittel, forfatter, emne og nøkkelord for en PDF.",
    longDescription: [
      "Rediger PDF-metadata lar deg se og endre dokumentegenskapene som er lagret inne i en PDF — tittel, forfatter, emne, nøkkelord, opphavsperson og produsent. Det er denne informasjonen PDF-lesere, søkemotorer og filbehandlere viser om dokumentet ditt.",
      "La et felt stå tomt for å fjerne det. Sideinnholdet påvirkes ikke, og all redigering skjer i nettleseren din, så filen blir aldri lastet opp.",
    ],
    faq: [
      { question: "Hvorfor redigere PDF-metadata?", answer: "En tydelig tittel og forfatter gjør dokumenter lettere å finne og får dem til å se mer profesjonelle ut når de deles, og søkemotorer kan bruke dem når de indekserer PDF-er." },
      { question: "Endrer redigering av metadata dokumentets innhold?", answer: "Nei. Bare dokumentegenskapene endres; sider, tekst og bilder forblir nøyaktig de samme." },
      { question: "Hvordan fjerner jeg en egenskap?", answer: "Tøm feltet og lagre. Tomme felt fjernes fra filen." },
      { question: "Blir PDF-en min lastet opp?", answer: "Nei. Egenskapene redigeres lokalt i nettleseren din." },
    ],
  },
  "remove-pdf-metadata": {
    name: "Fjern PDF-metadata",
    actionLabel: "Fjern metadata",
    shortDescription: "Fjern forfatter, tittel, programvare og andre skjulte egenskaper fra en PDF før du deler den.",
    longDescription: [
      "Fjern PDF-metadata rydder dokumentegenskapene og skjulte data som en PDF bærer med seg — forfatter, tittel, emne, nøkkelord, programvaren som ble brukt til å opprette den, opprettelsesdatoer og innebygde XMP-metadatapakker.",
      "Det er et raskt personvernsteg før du deler en fil offentlig. Sideinnholdet blir latt urørt, og opprydningen skjer i nettleseren din, så filen blir aldri lastet opp.",
    ],
    faq: [
      { question: "Hvilken informasjon fjernes?", answer: "Tittel, forfatter, emne, nøkkelord, opphavsperson- og produsentprogramvare, opprettelses- og endringsdatoer, innebygd XMP-metadata og private applikasjonsdata." },
      { question: "Endrer dette hvordan dokumentet ser ut?", answer: "Nei. Bare skjulte egenskaper fjernes; hver side ser nøyaktig lik ut." },
      { question: "Fjerner dette personlig informasjon trykt på sidene?", answer: "Nei. Det fjerner bare metadata. Navn eller detaljer trykt på sidene forblir synlige." },
      { question: "Blir PDF-en min lastet opp?", answer: "Nei. Filen ryddes lokalt i nettleseren din." },
    ],
  },
  "pdf-info": {
    name: "PDF-informasjon",
    actionLabel: "Inspiser PDF",
    shortDescription: "Se sideantall, sidestørrelser, versjon og PDF-egenskaper på et øyeblikk.",
    longDescription: [
      "PDF-informasjon leser en PDF-fil og viser hva den inneholder: sideantall, størrelsen på hver side i millimeter med papirnavn som A4 eller Letter, PDF-versjon, om den er kryptert eller inneholder et utfyllbart skjema, samt tittel, forfatter, programvare og datoer.",
      "Nyttig før du skriver ut, laster opp eller konverterer en fil. Dokumentet leses bare — aldri endret — og alt skjer i nettleseren din, så det blir aldri lastet opp.",
    ],
    faq: [
      { question: "Hvilke detaljer viser PDF-informasjon?", answer: "Sideantall, sidestørrelser med papirnavn, PDF-versjon, filstørrelse, kryptering, utfyllbare skjemaer, rask nettvisning, samt dokumentegenskaper som tittel, forfatter og opprettelsesdato." },
      { question: "Endrer PDF-informasjon filen min?", answer: "Nei. PDF-en leses bare; ingenting endres eller lagres på nytt." },
      { question: "Kan jeg inspisere en passordbeskyttet PDF?", answer: "Filer som krever et passord for å åpne, kan ikke leses uten det. Filer med bare redigeringsbegrensninger vises som kryptert." },
      { question: "Blir PDF-en min lastet opp?", answer: "Nei. Den leses lokalt i nettleseren din." },
    ],
  },
  "resize-image": {
    name: "Endre bildestørrelse",
    actionLabel: "Endre bildestørrelse",
    shortDescription: "Endre bredde og høyde på JPG-, PNG- og WEBP-bilder — i prosent eller nøyaktige piksler.",
    longDescription: [
      "Endre bildestørrelse endrer dimensjonene på bildene og grafikken din. Skaler i prosent, eller skriv inn en nøyaktig bredde og høyde med låst bildeforhold slik at ingenting ser strukket ut. Endre størrelse på flere bilder på én gang, og last dem ned sammen i en .zip.",
      "Bilder beholder sitt opprinnelige format, og utjevning av høy kvalitet holder nedskalerte bilder skarpe. Alt skjer i nettleseren din, så bildene blir aldri lastet opp.",
    ],
    faq: [
      { question: "Blir bildet mitt uskarpt av størrelsesendring?", answer: "Å krympe et bilde bevarer skarpheten. Å forstørre utover den opprinnelige størrelsen kan ikke legge til detaljer, så store forstørrelser kan se myke ut." },
      { question: "Kan jeg endre størrelse på flere bilder på én gang?", answer: "Ja. Legg til opptil 20 bilder; med låst bildeforhold beholder hvert sine egne proporsjoner ved bredden du angir." },
      { question: "Hvilket format blir det størrelsesendrede bildet?", answer: "Det samme som originalen — JPG forblir JPG, PNG forblir PNG, og WEBP forblir WEBP der nettleseren din støtter det." },
      { question: "Blir bildene mine lastet opp?", answer: "Nei. Størrelsesendringen skjer lokalt i nettleseren din." },
    ],
  },
  "crop-image": {
    name: "Beskjær bilde",
    actionLabel: "Beskjær bilde",
    shortDescription: "Beskjær et bilde til området du ønsker med en beskjæringsboks du kan dra.",
    longDescription: [
      "Beskjær bilde fjerner unødvendige kanter fra et bilde eller skjermbilde. Dra beskjæringsboksen eller hjørnene over forhåndsvisningen — eller finjuster hver kant med en glidebryter — og se den eksakte pikselstørrelsen på resultatet.",
      "Det beskårne bildet beholder det opprinnelige formatet og kvaliteten, og hele prosessen skjer i nettleseren din, så bildet blir aldri lastet opp.",
    ],
    faq: [
      { question: "Kan jeg beskjære til eksakte dimensjoner?", answer: "Juster hver kant med glidebryterne, og se resultatstørrelsen oppdateres i piksler mens du gjør det." },
      { question: "Reduserer beskjæring bildekvaliteten?", answer: "Nei. De beholdte pikslene kopieres uendret; bare delene utenfor boksen fjernes." },
      { question: "Hvilke formater kan jeg beskjære?", answer: "JPG, PNG og WEBP. Resultatet beholder samme format som originalen." },
      { question: "Blir bildet mitt lastet opp?", answer: "Nei. Beskjæringen skjer lokalt i nettleseren din." },
    ],
  },
  "flip-image": {
    name: "Vend bilde",
    actionLabel: "Vend bilder",
    shortDescription: "Vend bilder horisontalt eller vertikalt — enkeltvis eller i bulk.",
    longDescription: [
      "Vend bilde skaper et speilbilde av bildene dine: fra venstre til høyre eller fra topp til bunn. Nyttig for å fikse selfier tatt med frontkameraet, skape refleksjoner eller forberede mønstre for trykk.",
      "Vend flere bilder på én gang, forhåndsvis resultatet umiddelbart, og last dem ned i det opprinnelige formatet. Alt skjer i nettleseren din, så bildene blir aldri lastet opp.",
    ],
    faq: [
      { question: "Hva er forskjellen mellom å vende og rotere?", answer: "Rotasjon dreier et bilde i trinn på 90°. Vending speilvender det, som å se i et speil." },
      { question: "Kan jeg vende flere bilder på én gang?", answer: "Ja. Legg til opptil 20 bilder, og alle vendes på samme måte, og lastes deretter ned sammen som en .zip." },
      { question: "Reduserer vending kvaliteten?", answer: "Ingen merkbar kvalitetsreduksjon — PNG forblir tapsfri, og JPG og WEBP lagres i høy kvalitet." },
      { question: "Blir bildene mine lastet opp?", answer: "Nei. Vendingen skjer lokalt i nettleseren din." },
    ],
  },
  "png-to-jpg": {
    name: "PNG til JPG",
    actionLabel: "Konverter til JPG",
    shortDescription: "Konverter PNG-bilder til JPG for mindre, mer kompatible filer.",
    longDescription: [
      "PNG til JPG konverterer PNG-bildene dine til JPG-filer, vanligvis betydelig mindre — perfekt for bilder, e-postvedlegg og opplastingsskjemaer som bare godtar JPG. Konverter flere bilder på én gang, og juster kvaliteten for å balansere størrelse mot skarphet.",
      "JPG støtter ikke gjennomsiktighet, så gjennomsiktige områder fylles med hvitt. Konverteringen skjer helt i nettleseren din, så bildene blir aldri lastet opp.",
    ],
    faq: [
      { question: "Hvorfor konvertere PNG til JPG?", answer: "JPG-filer er vanligvis mye mindre enn PNG for bilder og godtas nesten overalt, fra e-post til nettskjemaer." },
      { question: "Hva skjer med en gjennomsiktig bakgrunn?", answer: "JPG har ingen gjennomsiktighet, så gjennomsiktige områder fylles med hvitt." },
      { question: "Kan jeg konvertere flere PNG-filer på én gang?", answer: "Ja. Legg til opptil 30 bilder; de konverteres sammen og lastes ned som en .zip." },
      { question: "Blir bildene mine lastet opp?", answer: "Nei. Konverteringen skjer lokalt i nettleseren din." },
    ],
  },
  "jpg-to-png": {
    name: "JPG til PNG",
    actionLabel: "Konverter til PNG",
    shortDescription: "Konverter JPG-bilder til PNG-bilder uten kvalitetstap.",
    longDescription: [
      "JPG til PNG konverterer JPG- eller JPEG-bildene dine til PNG-format. PNG er tapsfritt, så bildet mister ikke mer kvalitet når det redigeres og lagres på nytt — nyttig for grafikk du fortsatt skal jobbe med, eller for verktøy og plattformer som krever PNG.",
      "Konverter flere bilder på én gang, og last dem ned sammen. Konverteringen skjer helt i nettleseren din, så bildene blir aldri lastet opp.",
    ],
    faq: [
      { question: "Forbedrer konvertering av JPG til PNG kvaliteten?", answer: "Nei — detaljer som allerede er tapt i JPG, kan ikke gjenopprettes. Men PNG forhindrer ytterligere tap når du redigerer og lagrer på nytt." },
      { question: "Hvorfor er PNG større enn JPG?", answer: "PNG lagrer hver piksel uten tapskomprimering, så bilder blir vanligvis større. Det er en avveining for tapsfri kvalitet." },
      { question: "Kan jeg konvertere flere JPG-filer på én gang?", answer: "Ja. Legg til opptil 30 bilder, og last ned som en .zip." },
      { question: "Blir bildene mine lastet opp?", answer: "Nei. Konverteringen skjer lokalt i nettleseren din." },
    ],
  },
  "webp-to-jpg": {
    name: "WEBP til JPG",
    actionLabel: "Konverter til JPG",
    shortDescription: "Konverter WEBP-bilder til JPG slik at de åpnes i enhver app eller nettsted.",
    longDescription: [
      "WEBP til JPG konverterer moderne WEBP-bilder — vanlige på nettsteder — til JPG, et format som støttes av praktisk talt enhver app, enhet og opplastingsskjema. Konverter ett bilde eller flere på én gang, og juster kvaliteten for å balansere størrelse mot skarphet.",
      "Gjennomsiktige områder fylles med hvitt siden JPG ikke støtter gjennomsiktighet. Konverteringen skjer helt i nettleseren din, så bildene blir aldri lastet opp.",
    ],
    faq: [
      { question: "Hvorfor konvertere WEBP til JPG?", answer: "Noen eldre apper, redigerere og opplastingsskjemaer godtar ikke WEBP. JPG fungerer nesten overalt." },
      { question: "Mister jeg kvalitet?", answer: "Ved standardkvalitet er forskjellen vanskelig å se. Øk kvalitetsglideren for det skarpeste resultatet." },
      { question: "Kan jeg konvertere flere WEBP-bilder på én gang?", answer: "Ja. Legg til opptil 30 bilder, og last ned som en .zip." },
      { question: "Blir bildene mine lastet opp?", answer: "Nei. Konverteringen skjer lokalt i nettleseren din." },
    ],
  },
  "jpg-to-webp": {
    name: "JPG til WEBP",
    actionLabel: "Konverter til WEBP",
    shortDescription: "Konverter JPG-bilder til WEBP for mindre, raskere nettbilder.",
    longDescription: [
      "JPG til WEBP konverterer JPG-bildene dine til WEBP, et moderne format som vanligvis gir betydelig mindre filer med lignende visuell kvalitet — bra for å gjøre nettsteder raskere og spare diskplass.",
      "Juster kvaliteten for å finne riktig balanse, og konverter flere bilder på én gang. Konverteringen skjer helt i nettleseren din, så bildene blir aldri lastet opp. Å lage WEBP-filer krever en nyere versjon av Chrome, Edge eller Firefox.",
    ],
    faq: [
      { question: "Er WEBP mindre enn JPG?", answer: "Vanligvis ja — WEBP sparer ofte en betydelig mengde plass ved lignende kvalitet, noe som hjelper nettsteder å laste raskere." },
      { question: "Støtter alle nettlesere WEBP?", answer: "Alle moderne nettlesere kan vise WEBP. Å lage WEBP-filer her krever en nyere versjon av Chrome, Edge eller Firefox." },
      { question: "Kan jeg konvertere flere JPG-filer på én gang?", answer: "Ja. Legg til opptil 30 bilder, og last ned som en .zip." },
      { question: "Blir bildene mine lastet opp?", answer: "Nei. Konverteringen skjer lokalt i nettleseren din." },
    ],
  },
  "webp-to-png": {
    name: "WEBP til PNG",
    actionLabel: "Konverter til PNG",
    shortDescription: "Konverter WEBP-bilder til PNG og behold gjennomsiktighet.",
    longDescription: [
      "WEBP til PNG konverterer WEBP-bilder til PNG, et tapsfritt format som støttes av alle bilderedigerere. Gjennomsiktighet bevares, så logoer, ikoner og utklipt grafikk beholder sine gjennomsiktige bakgrunner.",
      "Konverter flere bilder på én gang, og last dem ned sammen. Konverteringen skjer helt i nettleseren din, så bildene blir aldri lastet opp.",
    ],
    faq: [
      { question: "Bevares gjennomsiktighet?", answer: "Ja. PNG støtter gjennomsiktighet, så gjennomsiktige områder i WEBP-bildet ditt forblir gjennomsiktige." },
      { question: "Hvorfor konvertere WEBP til PNG?", answer: "PNG åpnes i alle redigerings- og designverktøy, og mister ikke kvalitet ved ytterligere redigering og lagring." },
      { question: "Kan jeg konvertere flere WEBP-filer på én gang?", answer: "Ja. Legg til opptil 30 bilder, og last ned som en .zip." },
      { question: "Blir bildene mine lastet opp?", answer: "Nei. Konverteringen skjer lokalt i nettleseren din." },
    ],
  },
  "png-to-webp": {
    name: "PNG til WEBP",
    actionLabel: "Konverter til WEBP",
    shortDescription: "Konverter PNG-bilder til WEBP for mindre filer som beholder gjennomsiktighet.",
    longDescription: [
      "PNG til WEBP konverterer PNG-bildene dine til WEBP, som vanligvis krymper filer betydelig samtidig som gjennomsiktighet bevares — perfekt for nettgrafikk, ikoner og skjermbilder.",
      "Velg en kvalitet, konverter flere bilder på én gang, og last dem ned sammen. Konverteringen skjer helt i nettleseren din, så bildene blir aldri lastet opp. Å lage WEBP-filer krever en nyere versjon av Chrome, Edge eller Firefox.",
    ],
    faq: [
      { question: "Beholder WEBP gjennomsiktighet?", answer: "Ja. WEBP støtter gjennomsiktighet, så gjennomsiktige områder i PNG-en din forblir gjennomsiktige." },
      { question: "Hvor mye mindre blir bildene mine?", answer: "Det varierer, men WEBP-filer er ofte betydelig mindre enn det samme bildet lagret som PNG." },
      { question: "Kan jeg konvertere flere PNG-filer på én gang?", answer: "Ja. Legg til opptil 30 bilder, og last ned som en .zip." },
      { question: "Blir bildene mine lastet opp?", answer: "Nei. Konverteringen skjer lokalt i nettleseren din." },
    ],
  },
};
