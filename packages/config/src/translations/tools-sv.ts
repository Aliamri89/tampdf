import type { ToolTranslationOverride } from "./tools-ar";

export const toolsSv: Record<string, ToolTranslationOverride> = {
  "compress-pdf": {
    name: "Komprimera PDF",
    actionLabel: "Komprimera PDF",
    shortDescription: "Minska storleken på din PDF-fil för enklare delning och skickande, direkt i webbläsaren.",
    longDescription: [
      "Komprimera PDF minskar filstorleken genom att koda om inbäddade bilder och ta bort onödig data, vilket gör dokumentet lättare att mejla, ladda upp eller lagra.",
      "Välj en komprimeringsnivå för att balansera filstorlek mot visuell kvalitet, och jämför storleken före/efter innan du laddar ner.",
    ],
    faq: [
      { question: "Hur mycket mindre blir min PDF?", answer: "Det beror på innehållet. PDF-filer med stora inbäddade bilder krymper oftast mest, ibland 50-90%. Textrika PDF-filer komprimeras mindre eftersom det finns mindre att optimera." },
      { question: "Blir min PDF suddig av komprimering?", answer: "Med standardinställningarna är kvalitetsförlusten minimal. Väljer du den starkaste komprimeringsnivån skalas bilder ner mer aggressivt, vilket kan minska skärpan vid inzoomning." },
      { question: "Sker komprimeringen på TAMPDFs servrar?", answer: "Nej. Komprimera PDF körs lokalt i din webbläsare, så din fil laddas aldrig upp någonstans." },
      { question: "Kan jag komprimera en lösenordsskyddad PDF?", answer: "Inte just nu. Ta bort lösenordsskyddet med ett annat verktyg först och komprimera sedan filen." },
    ],
  },
  "pdf-to-jpg": {
    name: "PDF till JPG",
    actionLabel: "Konvertera till JPG",
    shortDescription: "Omvandla varje PDF-sida till en JPG-bild i hög kvalitet.",
    longDescription: [
      "PDF till JPG konverterar varje sida i din PDF till en separat JPG-bild, redo att delas, redigeras eller läggas in i en presentation. En PDF med en sida laddas ner som en enda JPG-fil; flersidiga PDF-filer paketeras i en .zip.",
      "Konverteringen sker direkt i din webbläsare med PDF.js, så ditt dokument laddas aldrig upp till en server.",
    ],
    faq: [
      { question: "Vad händer om min PDF har flera sidor?", answer: "Varje sida blir en separat JPG-bild. Om det är mer än en paketeras de i en enda .zip-fil att ladda ner." },
      { question: "Hur skarpa blir bilderna?", answer: "Sidorna renderas i hög upplösning som passar för skärmar och de flesta utskriftsbehov. Välj en kvalitetsnivå för att balansera skärpa mot filstorlek." },
      { question: "Laddas min PDF upp någonstans?", answer: "Nej. PDF till JPG bearbetar varje sida lokalt i din webbläsare, så filen lämnar aldrig din enhet." },
      { question: "Kan jag konvertera bara en sida istället för hela dokumentet?", answer: "Just nu konverteras alla sidor. Använd Sammanfoga PDF eller en PDF-läsare för att extrahera en enda sida först om du bara behöver en bild." },
    ],
  },
  "merge-pdf": {
    name: "Sammanfoga PDF",
    actionLabel: "Sammanfoga PDF-filer",
    shortDescription: "Kombinera flera PDF-filer till ett dokument, i den ordning du väljer.",
    longDescription: [
      "Sammanfoga PDF låter dig kombinera två eller flera PDF-filer till ett dokument utan att installera något. Lägg till filer, dra för att ordna dem och ladda ner en sammanfogad PDF.",
      "Allt körs lokalt i din webbläsare, så filerna laddas aldrig upp till en server. Det betyder att det fungerar även med känsliga avtal, rapporter eller personliga dokument.",
    ],
    faq: [
      { question: "Finns det en gräns för hur många PDF-filer jag kan sammanfoga?", answer: "Det finns ingen fast gräns. Eftersom sammanfogningen sker i din webbläsare är den praktiska begränsningen enhetens minne, inte en servergräns." },
      { question: "Kan jag ändra sidordningen innan jag sammanfogar?", answer: "Ja. När filerna är tillagda drar du dem i den ordning du vill att slutdokumentet ska ha innan du sammanfogar." },
      { question: "Laddas mina filer upp till TAMPDFs servrar?", answer: "Nej. Sammanfoga PDF bearbetar filer helt i din webbläsare med klientsidsteknik, så dokumenten lämnar aldrig din enhet." },
      { question: "Påverkar sammanfogningen kvaliteten på mina PDF-filer?", answer: "Nej. Sidorna kombineras oförändrade, utan omkomprimering, så text, bilder och formatering förblir exakt som originalen." },
    ],
  },
  "rotate-pdf": {
    name: "Rotera PDF",
    actionLabel: "Rotera PDF",
    shortDescription: "Rotera enskilda sidor eller en hel PDF 90°, 180° eller 270°, direkt i webbläsaren.",
    longDescription: [
      "Rotera PDF låter dig fixa sidledes eller upp-och-nervända sidor på några sekunder. Ladda upp en eller flera PDF-filer, se en miniatyrbild av varje sida och rotera sedan hela dokumentet på en gång eller bara de sidor som behövs.",
      "Allt körs lokalt i din webbläsare, så filerna laddas aldrig upp till en server. Ladda upp flera PDF-filer samtidigt så roteras och returneras var och en oberoende.",
    ],
    faq: [
      { question: "Kan jag rotera bara en sida istället för hela dokumentet?", answer: "Ja. Klicka på rotationsknappen på en enskild sida för att rotera bara den, eller använd knapparna för att rotera alla för att tillämpa samma rotation på alla sidor på en gång." },
      { question: "Vilka rotationsvinklar stöds?", answer: "Du kan rotera sidor 90°, 180° eller 270° i valfri riktning." },
      { question: "Kan jag rotera mer än en PDF-fil samtidigt?", answer: "Ja. Ladda upp flera PDF-filer och var och en roteras oberoende. Om du laddar upp mer än en fil paketeras de roterade PDF-filerna i en .zip att ladda ner." },
      { question: "Laddas min PDF upp någonstans?", answer: "Nej. Rotera PDF bearbetar allt lokalt i din webbläsare, så filerna lämnar aldrig din enhet." },
    ],
  },
  "compress-image": {
    name: "Komprimera bild",
    actionLabel: "Komprimera bilder",
    shortDescription: "Minska filstorleken på JPG-, PNG- och WebP-filer samtidigt som visuell kvalitet bevaras.",
    longDescription: [
      "Komprimera bild minskar filstorleken på dina JPG-, PNG- eller WebP-foton, vilket gör dem snabbare att ladda upp, mejla och läsa in på webbplatser.",
      "Komprimeringen sker helt i din webbläsare med canvas-API:et, så dina foton lämnar aldrig din enhet, och du kan komprimera flera bilder på en gång.",
    ],
    faq: [
      { question: "Vilka bildformat stöds?", answer: "JPG-, PNG- och WebP-bilder stöds som både inmatning och utmatning." },
      { question: "Kan jag komprimera flera bilder på en gång?", answer: "Ja. Lägg till så många bilder du vill så komprimeras var och en och paketeras i en enda .zip-fil att ladda ner, eller laddas ner individuellt." },
      { question: "Hur mycket kan jag krympa en bild utan kvalitetsförlust?", answer: "Standardkvalitetsinställningen minskar vanligtvis filstorleken med 60-80% utan synlig skillnad. Du kan justera kvalitetsreglaget för en annan avvägning." },
      { question: "Laddas mina foton upp till en server?", answer: "Nej. Komprimeringen körs lokalt i din webbläsare med canvas-API:et, så bilderna skickas aldrig någonstans." },
    ],
  },
  "image-to-pdf": {
    name: "JPG till PDF",
    actionLabel: "Konvertera till PDF",
    shortDescription: "Omvandla en eller flera JPG-bilder till ett enda PDF-dokument.",
    longDescription: [
      "JPG till PDF kombinerar dina JPG-foton till en enda PDF-fil, ett foto per sida, i den ordning du väljer.",
      "Perfekt för att göra om skannade dokument, kvitton eller foton till en delbar PDF. Allt bearbetas lokalt i din webbläsare för fullständig integritet.",
    ],
    faq: [
      { question: "Kan jag kombinera flera bilder till en PDF?", answer: "Ja. Lägg till flera bilder så blir var och en en sida i den resulterande PDF-filen, i den ordning du ordnar dem." },
      { question: "Vilken sidstorlek används för PDF:en?", answer: "Varje sida passas till källbildens dimensioner och orientering, så inget beskärs eller sträcks." },
      { question: "Laddas mina bilder upp någonstans?", answer: "Nej. Konverteringen sker helt i din webbläsare, så bilderna stannar på din enhet." },
      { question: "Stöder den PNG-bilder också?", answer: "Ja, PNG-bilder stöds tillsammans med JPG. HEIC-foton från iPhone stöds inte ännu; konvertera dem till JPG med telefonens delningsalternativ först." },
    ],
  },
  "rotate-images": {
    name: "Rotera bilder",
    actionLabel: "Rotera bilder",
    shortDescription: "Rotera en eller flera JPG-, PNG- eller WebP-bilder 90°, 180° eller 270°.",
    longDescription: [
      "Rotera bilder fixar sidledes eller upp-och-nervända foton på några sekunder. Ladda upp en eller flera bilder, rotera var och en individuellt eller alla på en gång, och ladda ner resultaten.",
      "Allt körs lokalt i din webbläsare, så foton laddas aldrig upp till en server. Ladda upp flera bilder samtidigt så roteras och returneras var och en oberoende.",
    ],
    faq: [
      { question: "Vilka bildformat stöds?", answer: "JPG-, PNG- och WebP-bilder stöds. Rotation bevarar det ursprungliga formatet." },
      { question: "Kan jag rotera bara en bild istället för alla?", answer: "Ja. Klicka på rotationsknappen på en enskild bild för att rotera bara den, eller använd knapparna för att rotera alla för att tillämpa samma rotation på alla bilder på en gång." },
      { question: "Vilka rotationsvinklar stöds?", answer: "Du kan rotera bilder 90°, 180° eller 270°." },
      { question: "Laddas mina foton upp någonstans?", answer: "Nej. Rotera bilder bearbetar allt lokalt i din webbläsare, så fotona lämnar aldrig din enhet." },
    ],
  },
  "split-pdf": {
    name: "Dela PDF",
    actionLabel: "Dela PDF",
    shortDescription: "Dela en PDF i flera mindre filer efter sidintervall eller i fasta bitar.",
    longDescription: [
      "Dela PDF delar upp ett stort dokument i separata PDF-filer utan att ändra själva sidorna. Ange sidintervall som 1-3, 5, 8-10 för att extrahera exakt de sektioner du behöver, eller dela hela dokumentet i lika stora bitar med ett fast antal sidor.",
      "Allt sker i din webbläsare — din PDF laddas aldrig upp till en server. Ett enda resultat laddas ner som en PDF-fil; flera delar paketeras i en .zip.",
    ],
    faq: [
      { question: "Hur väljer jag vilka sidor som ska gå till vilken fil?", answer: "Använd intervallfältet: något som \"1-3, 5, 8-10\" skapar tre PDF-filer — sidorna 1 till 3, bara sida 5 och sidorna 8 till 10. Eller växla till \"var N:e sida\" för att skära dokumentet i lika bitar." },
      { question: "Behåller de delade filerna originalkvaliteten?", answer: "Ja. Sidorna kopieras oförändrade, utan omkomprimering, så text, bilder, typsnitt och layout är identiska med källan." },
      { question: "Laddas min PDF upp någonstans?", answer: "Nej. Delningen sker helt i din webbläsare, så dokumentet lämnar aldrig din enhet." },
      { question: "Vad händer med formulärfält eller digitala signaturer?", answer: "Sidinnehåll och formulärwidgetar bevaras visuellt, men interaktivt formulärbeteende och signaturer förs inte över till de delade filerna. Platta ut dem eller signera på nytt vid behov." },
    ],
  },
  "delete-pdf-pages": {
    name: "Ta bort PDF-sidor",
    actionLabel: "Ta bort sidor",
    shortDescription: "Ta bort sidor du inte behöver från en PDF och ladda ner ett städat dokument.",
    longDescription: [
      "Ta bort PDF-sidor låter dig kasta sidor du inte behöver — tomma skanningar, försättsblad, dubblettsidor — och behålla resten i ursprunglig ordning. Se en miniatyrbild av varje sida, tryck på de du vill ta bort och ladda ner resultatet.",
      "Hela processen sker lokalt i din webbläsare, så din PDF laddas aldrig upp. De återstående sidorna kopieras utan omkomprimering, så inget förlorar kvalitet.",
    ],
    faq: [
      { question: "Kan jag ta bort mer än en sida på en gång?", answer: "Ja. Välj valfritt antal sidor i miniatyrrutnätet och ta bort dem alla i ett steg." },
      { question: "Kan jag ta bort alla sidor?", answer: "Nej — minst en sida måste finnas kvar, så knappen inaktiveras om du valt alla." },
      { question: "Minskar borttagning av sidor filstorleken?", answer: "Vanligtvis något, eftersom innehållet på de borttagna sidorna kastas. Delade resurser som typsnitt kan finnas kvar, så använd Komprimera PDF efteråt om storleken spelar roll." },
      { question: "Laddas mina filer upp till en server?", answer: "Nej. Allt sker i din webbläsare och din PDF lämnar aldrig din enhet." },
    ],
  },
  "reorder-pdf-pages": {
    name: "Ändra ordning på PDF-sidor",
    actionLabel: "Ändra sidordning",
    shortDescription: "Dra PDF-sidor för att ändra ordningen och spara det omorganiserade dokumentet.",
    longDescription: [
      "Ändra ordning på PDF-sidor visar en miniatyrbild av varje sida som du kan dra till önskad ordning — flytta en sida till början, byta två sektioner eller vända hela dokumentet. Flyttknappar finns också för precisa, en-sida-i-taget-ändringar.",
      "Omorganiseringen sker helt i din webbläsare, så din PDF laddas aldrig upp. Sidorna kopieras oförändrade, så kvalitet och formatering förblir intakta.",
    ],
    faq: [
      { question: "Hur flyttar jag en sida?", answer: "Dra dess miniatyrbild till en ny position, eller använd upp/ner-knapparna på varje sida för enstaka steg. Den nya ordningen sparas när du klickar på knappen." },
      { question: "Kan jag vända hela dokumentet?", answer: "Ja — dra sidorna i omvänd ordning eller använd flyttknapparna. Valfritt antal sidor kan ändras i ett steg." },
      { question: "Ändrar omorganiseringen sidinnehållet?", answer: "Nej. Endast sidordningen ändras — texten, bilderna och layouten på varje sida förblir exakt desamma." },
      { question: "Laddas PDF:en upp någonstans?", answer: "Nej. Omorganiseringen körs lokalt i din webbläsare, och filen lämnar aldrig din enhet." },
    ],
  },
  "crop-pdf": {
    name: "Beskär PDF",
    actionLabel: "Beskär PDF",
    shortDescription: "Beskär marginalerna på varje PDF-sida genom att ange värden från topp, botten och sidor.",
    longDescription: [
      "Beskär PDF tar bort onödigt vitt utrymme eller skanningskanter från sidkanterna. Ställ in hur mycket som ska beskäras från topp, botten, vänster och höger som procent, se en direktuppdaterad förhandsgranskning och tillämpa på alla sidor på en gång.",
      "Beskärningen justerar det synliga sidområdet utan att ta bort något innehåll — de beskurna delarna döljs bara. Allt sker i din webbläsare, så din PDF laddas aldrig upp.",
    ],
    faq: [
      { question: "Tar beskärning bort innehåll utanför det beskurna området?", answer: "Nej. Beskär PDF ändrar sidans beskärningsram, vilket döljer det yttre området i webbläsare och vid utskrift. Det underliggande innehållet finns kvar i filen och kan återställas." },
      { question: "Tillämpas samma beskärning på alla sidor?", answer: "Ja. Marginalerna du ställer in tillämpas på alla sidor. Sidor med olika storlekar beskärs med samma procentandel." },
      { question: "Kan jag beskära ett skannat dokument för att ta bort en svart ram?", answer: "Ja — det är ett vanligt användningsfall. Öka marginalerna tills förhandsgranskningen bara visar innehållet du vill behålla." },
      { question: "Laddas min fil upp till en server?", answer: "Nej. Beskärningen sker helt i din webbläsare, och din PDF stannar på din enhet." },
    ],
  },
  "resize-pdf": {
    name: "Ändra storlek på PDF",
    actionLabel: "Ändra storlek",
    shortDescription: "Ändra storleken på PDF-sidor till A4, Letter eller en egen skala, med innehåll som passas och centreras.",
    longDescription: [
      "Ändra storlek på PDF ändrar den fysiska sidstorleken på ditt dokument. Välj en standardstorlek som A4 eller US Letter så skalas varje sida för att passa och centreras, eller använd en procentandel för att proportionellt krympa eller förstora sidorna.",
      "Storleksändringen sker i din webbläsare utan uppladdning. Innehållet skalas tillsammans med sidan, så inget beskärs och layouten förblir proportionerlig.",
    ],
    faq: [
      { question: "Vilka sidstorlekar kan jag välja?", answer: "A4 och US Letter i stående eller liggande, plus A3 och A5. Du kan också ange en skalprocent för att ändra storlek utan att ändra proportionerna." },
      { question: "Kommer mitt innehåll att sträckas?", answer: "Nej. Innehållet skalas jämnt för att passa den nya storleken och centreras på sidan, så proportionerna bevaras och inget beskärs." },
      { question: "Kan jag använda detta för att minska min PDF-filstorlek?", answer: "Inte direkt — detta ändrar sidmåtten, inte filvikten. Använd Komprimera PDF för att minska filstorleken." },
      { question: "Laddas mina filer upp någonstans?", answer: "Nej. Storleksändringen sker lokalt i din webbläsare, och din PDF lämnar aldrig din enhet." },
    ],
  },
  "png-to-pdf": {
    name: "PNG till PDF",
    actionLabel: "Konvertera till PDF",
    shortDescription: "Omvandla en eller flera PNG-bilder till ett enda PDF-dokument, en bild per sida.",
    longDescription: [
      "PNG till PDF kombinerar PNG-bilder till en enda PDF-fil, med varje bild på sin egen sida i originalupplösning. Lägg till flera bilder, ordna deras ordning och ladda ner ett dokument.",
      "Utmärkt för att göra om skärmdumpar, diagram eller exporterad grafik till en delbar PDF. Konverteringen sker helt i din webbläsare, så bilderna laddas aldrig upp. Transparenta områden placeras på en vit bakgrund.",
    ],
    faq: [
      { question: "Kan jag kombinera flera PNG-filer till en PDF?", answer: "Ja. Lägg till valfritt antal PNG-bilder så blir var och en en sida i den resulterande PDF-filen, i den ordning du ordnar dem." },
      { question: "Vilken sidstorlek används?", answer: "Varje sida matchar källbildens pixeldimensioner, så bilderna beskärs eller sträcks inte." },
      { question: "Vad händer med transparenta delar av bilden?", answer: "Transparens plattas ut till en vit bakgrund så att sidan ser likadan ut i alla PDF-visare." },
      { question: "Laddas mina bilder upp till en server?", answer: "Nej. Konverteringen sker helt i din webbläsare, och bilderna stannar på din enhet." },
    ],
  },
  "extract-pdf-pages": {
    name: "Extrahera PDF-sidor",
    actionLabel: "Extrahera sidor",
    shortDescription: "Extrahera valda sidor från en PDF till en ny fil — eller spara varje sida som en egen PDF.",
    longDescription: [
      "Extrahera PDF-sidor låter dig välja exakt de sidor du behöver från ett dokument och spara dem som en ny PDF. Se en miniatyrbild av varje sida, tryck på de du vill behålla och ladda ner dem tillsammans — eller som separata en-sidiga PDF-filer i en ZIP.",
      "Din originalfil förblir oförändrad, och sidorna kopieras oförändrade, så text, bilder och formatering förblir intakta. Allt sker i din webbläsare, så din PDF laddas aldrig upp.",
    ],
    faq: [
      { question: "Vad är skillnaden mellan att extrahera och dela?", answer: "Extrahering sparar bara de valda sidorna i en ny PDF. Delning delar hela dokumentet i flera delar efter sidintervall eller fasta storlekar." },
      { question: "Kan jag spara varje extraherad sida som en egen fil?", answer: "Ja. Välj \"Separata PDF-filer\" så blir varje vald sida en egen PDF, paketerad i en enda .zip-nedladdning." },
      { question: "Förlorar extraherade sidor kvalitet?", answer: "Nej. Sidorna kopieras utan omkomprimering, så de ser exakt ut som originalet. Interaktiva formulärfält kan bli vanligt sidinnehåll." },
      { question: "Laddas min PDF upp till en server?", answer: "Nej. Sidorna extraheras lokalt i din webbläsare, och filen lämnar aldrig din enhet." },
    ],
  },
  "add-page-numbers": {
    name: "Lägg till sidnummer",
    actionLabel: "Lägg till sidnummer",
    shortDescription: "Numrera PDF-sidor med vald position, format och startnummer.",
    longDescription: [
      "Lägg till sidnummer placerar ett nummer på varje sida i din PDF. Välj en av sex positioner, en stil som \"1\", \"1 / 10\" eller \"Sida 1 av 10\", ställ in ett startnummer och hoppa eventuellt över försättsbladet.",
      "Numren ritas som riktig text i ett standardteckensnitt, så de skrivs ut skarpt och förblir upprätta även på roterade sidor. Hela processen sker i din webbläsare — ditt dokument laddas aldrig upp.",
    ],
    faq: [
      { question: "Kan jag börja numreringen på ett annat nummer än 1?", answer: "Ja. Ställ in valfritt startnummer — användbart när din PDF är ett kapitel eller en bilaga till ett större dokument." },
      { question: "Kan jag lämna försättsbladet utan nummer?", answer: "Ja. Aktivera \"Numrera inte den första sidan\" så börjar numreringen på den andra sidan." },
      { question: "Vilka siffror används?", answer: "Standardsiffror (1, 2, 3) som visas korrekt i alla PDF-läsare. Etiketter som \"Sida 1 av 10\" skrivs på svenska." },
      { question: "Laddas min fil upp?", answer: "Nej. Sidnummer läggs till lokalt i din webbläsare, och din PDF stannar på din enhet." },
    ],
  },
  "add-watermark": {
    name: "Lägg till vattenstämpel",
    actionLabel: "Lägg till vattenstämpel",
    shortDescription: "Placera text som KONFIDENTIELLT eller UTKAST över varje PDF-sida.",
    longDescription: [
      "Lägg till vattenstämpel placerar din text över varje sida i en PDF — en gång i mitten eller upprepad över hela sidan. Välj färg, opacitet, storlek och vinkel, och se en direktuppdaterad förhandsgranskning på den första sidan innan du tillämpar.",
      "Svenska och andra skrifter stöds fullt ut. Vattenstämpeln sparas som ett standardvattenstämpelobjekt, och allt sker i din webbläsare, så ditt dokument laddas aldrig upp.",
    ],
    faq: [
      { question: "Kan jag skriva en vattenstämpel på svenska?", answer: "Ja. Texten renderas med din webbläsares teckensnitt, så svenska och andra skrifter visas korrekt." },
      { question: "Kan vattenstämpeln upprepas över sidan?", answer: "Ja. Välj layouten \"Upprepad\" för att kakla texten över hela sidan, eller \"En gång, centrerad\" för en enda stämpel." },
      { question: "Kan vattenstämpeln tas bort senare?", answer: "Den sparas som ett standardvattenstämpelobjekt, så verktyg som känner igen vattenstämplar — inklusive TAMPDFs Ta bort vattenstämpel — kan ta bort den. Detta är ingen säkerhetsfunktion." },
      { question: "Laddas min PDF upp någonstans?", answer: "Nej. Vattenstämpeln tillämpas lokalt i din webbläsare." },
    ],
  },
  "remove-watermark": {
    name: "Ta bort vattenstämpel",
    actionLabel: "Ta bort vattenstämpel",
    shortDescription: "Ta bort vattenstämplar som lagts till som vattenstämpelobjekt i en PDF.",
    longDescription: [
      "Ta bort vattenstämpel hittar och tar bort vattenstämplar som lagts till som vattenstämpelobjekt — den typ som skapas av Adobe Acrobat, TAMPDF och de flesta PDF-redigerare — tillsammans med vattenstämpelanteckningar och lager med namnet \"Watermark\". Resten av varje sida förblir exakt densamma.",
      "Vattenstämplar som är en del av en skannad bild eller sammanslagna med sidans vanliga text har ingen markör som skiljer dem från riktigt innehåll, så de kan inte tas bort automatiskt. Ta bara bort vattenstämplar från dokument du har rätt att redigera. Bearbetningen sker i din webbläsare, så filen laddas aldrig upp.",
    ],
    faq: [
      { question: "Vilka vattenstämplar kan tas bort?", answer: "Vattenstämplar som lagts till som vattenstämpelobjekt, vattenstämpelanteckningar eller lager med namnet \"Watermark\" — inklusive de som skapats av Adobe Acrobat och TAMPDFs eget verktyg Lägg till vattenstämpel." },
      { question: "Varför togs inte vattenstämpeln bort från min fil?", answer: "Om vattenstämpeln är en del av en skannad sidbild eller har plattats ut i sidans text kan den inte separeras från det riktiga innehållet utan att skada sidan." },
      { question: "Påverkar borttagning av vattenstämpeln resten av sidan?", answer: "Nej. Endast det markerade vattenstämpelinnehållet tas bort; text, bilder och layout förblir intakta." },
      { question: "Laddas min fil upp?", answer: "Nej. PDF:en bearbetas lokalt i din webbläsare." },
    ],
  },
  "pdf-to-images": {
    name: "PDF till bilder",
    actionLabel: "Konvertera till bilder",
    shortDescription: "Omvandla varje PDF-sida till PNG-, JPG- eller WEBP-bilder, nedladdade som ZIP.",
    longDescription: [
      "PDF till bilder renderar varje sida i din PDF som en separat bild i det format du väljer: PNG för den skarpaste texten, JPG för de minsta filerna eller WEBP för moderna, kompakta bilder. Välj en upplösning så exporteras varje sida och paketeras i en enda .zip-fil.",
      "Renderingen sker direkt i din webbläsare med PDF.js, så ditt dokument laddas aldrig upp till en server.",
    ],
    faq: [
      { question: "Vilket bildformat ska jag välja?", answer: "PNG håller text och linjekonst helt skarp. JPG skapar mindre filer och passar för foton. WEBP ger en bra balans för webbanvändning." },
      { question: "Vilken upplösning är bilderna?", answer: "Standard renderar vid 108 dpi, Hög vid 144 dpi och Maximal vid 216 dpi — tillräckligt högt för att skriva ut de flesta dokument." },
      { question: "Hur får jag alla sidor på en gång?", answer: "Varje sida konverteras och paketeras i en enda .zip-fil. En PDF med en sida laddas ner som en enda bild." },
      { question: "Laddas min PDF upp?", answer: "Nej. Sidorna renderas lokalt i din webbläsare." },
    ],
  },
  "images-to-pdf": {
    name: "Bilder till PDF",
    actionLabel: "Skapa PDF",
    shortDescription: "Kombinera JPG-, PNG- och WEBP-bilder till en enda PDF, i den ordning du väljer.",
    longDescription: [
      "Bilder till PDF omvandlar en samling foton, skanningar eller skärmdumpar till ett enda PDF-dokument. Lägg till JPG-, PNG- eller WEBP-bilder, dra miniatyrbilderna till önskad ordning och välj en A4- eller Letter-sida (med automatisk orientering) eller sidor som passar varje bild.",
      "Lägg till en marginal för ett rent utskriftsutseende. Transparenta områden placeras på en vit bakgrund, och hela konverteringen sker i din webbläsare, så bilderna laddas aldrig upp.",
    ],
    faq: [
      { question: "Kan jag ändra ordningen på bilderna?", answer: "Ja. Dra miniatyrbilderna eller använd pilknapparna för att ställa in sidordningen innan du skapar PDF:en." },
      { question: "Vilka bildformat stöds?", answer: "JPG, PNG och WEBP. Du kan blanda format i samma PDF." },
      { question: "Vilken sidstorlek använder PDF:en?", answer: "Välj A4 eller Letter — varje bild passas till sidan och roteras till liggande vid behov — eller \"Passa till bild\" för att varje sida ska ha exakt bildens storlek." },
      { question: "Laddas mina bilder upp?", answer: "Nej. PDF:en skapas lokalt i din webbläsare." },
    ],
  },
  "flip-pdf": {
    name: "Vänd PDF",
    actionLabel: "Vänd PDF",
    shortDescription: "Vänd PDF-sidor horisontellt eller vertikalt.",
    longDescription: [
      "Vänd PDF speglar varje sida i ditt dokument — vänster till höger eller topp till botten. Användbart för att skriva ut värmeöverföringar, fixa skanningar tagna från fel sida eller förbereda speglad grafik.",
      "Förhandsgranska resultatet på den första sidan innan du tillämpar. Vändningen tar hänsyn till roterade sidor också, och allt sker i din webbläsare, så filen laddas aldrig upp.",
    ],
    faq: [
      { question: "Vad är skillnaden mellan att vända och rotera?", answer: "Rotation vrider sidan i steg om 90°. Vändning skapar en spegelbild, så texten läses baklänges — det är vad du behöver för värmeöverföringar och vissa tryckjobb." },
      { question: "Kan jag vända bara en sida?", answer: "Vändningen tillämpas på alla sidor. För att vända en enda sida, extrahera den först med Extrahera PDF-sidor." },
      { question: "Minskar vändningen kvaliteten?", answer: "Nej. Sidorna transformeras, inte renderas om, så text och grafik förblir lika skarpa som originalet." },
      { question: "Laddas min PDF upp?", answer: "Nej. Vändningen sker lokalt i din webbläsare." },
    ],
  },
  "edit-pdf-metadata": {
    name: "Redigera PDF-metadata",
    actionLabel: "Redigera metadata",
    shortDescription: "Ändra titel, författare, ämne och nyckelord för en PDF.",
    longDescription: [
      "Redigera PDF-metadata låter dig visa och ändra dokumentegenskaperna som lagras inuti en PDF — titel, författare, ämne, nyckelord, skapare och producent. Det är den här informationen som PDF-läsare, sökmotorer och filhanterare visar om ditt dokument.",
      "Lämna ett fält tomt för att ta bort det. Sidinnehållet påverkas inte, och all redigering sker i din webbläsare, så filen laddas aldrig upp.",
    ],
    faq: [
      { question: "Varför redigera PDF-metadata?", answer: "En tydlig titel och författare gör dokument lättare att hitta och ser mer professionella ut när de delas, och sökmotorer kan använda dem när de indexerar PDF-filer." },
      { question: "Ändrar redigering av metadata dokumentets innehåll?", answer: "Nej. Endast dokumentegenskaperna ändras; sidor, text och bilder förblir exakt desamma." },
      { question: "Hur tar jag bort en egenskap?", answer: "Rensa fältet och spara. Tomma fält tas bort från filen." },
      { question: "Laddas min PDF upp?", answer: "Nej. Egenskaperna redigeras lokalt i din webbläsare." },
    ],
  },
  "remove-pdf-metadata": {
    name: "Ta bort PDF-metadata",
    actionLabel: "Ta bort metadata",
    shortDescription: "Ta bort författare, titel, programvara och andra dolda egenskaper från en PDF innan du delar den.",
    longDescription: [
      "Ta bort PDF-metadata rensar dokumentegenskaperna och dolda data som en PDF bär med sig — författare, titel, ämne, nyckelord, programvaran som användes för att skapa den, datum för skapande, samt inbäddade XMP-metadatapaket.",
      "Det är ett snabbt steg för att skydda din integritet innan du delar en fil offentligt. Sidinnehållet lämnas orört, och rensningen sker i din webbläsare, så filen laddas aldrig upp.",
    ],
    faq: [
      { question: "Vilken information tas bort?", answer: "Titel, författare, ämne, nyckelord, skapar- och producentprogramvara, datum för skapande och ändring, inbäddad XMP-metadata samt privat programdata." },
      { question: "Ändrar detta hur dokumentet ser ut?", answer: "Nej. Endast dolda egenskaper tas bort; varje sida ser exakt likadan ut." },
      { question: "Tar detta bort personlig information tryckt på sidorna?", answer: "Nej. Det tar bara bort metadata. Namn eller detaljer tryckta på sidorna förblir synliga." },
      { question: "Laddas min PDF upp?", answer: "Nej. Filen rensas lokalt i din webbläsare." },
    ],
  },
  "pdf-info": {
    name: "PDF-information",
    actionLabel: "Inspektera PDF",
    shortDescription: "Se sidantal, sidstorlekar, version och PDF-egenskaper på ett ögonblick.",
    longDescription: [
      "PDF-information läser en PDF-fil och visar vad den innehåller: sidantal, storleken på varje sida i millimeter med pappersnamn som A4 eller Letter, PDF-version, om den är krypterad eller innehåller ett ifyllbart formulär, samt titel, författare, programvara och datum.",
      "Användbart innan du skriver ut, laddar upp eller konverterar en fil. Dokumentet läses bara — aldrig ändrat — och allt sker i din webbläsare, så det laddas aldrig upp.",
    ],
    faq: [
      { question: "Vilka detaljer visar PDF-information?", answer: "Sidantal, sidstorlekar med pappersnamn, PDF-version, filstorlek, kryptering, ifyllbara formulär, snabb webbvisning samt dokumentegenskaper som titel, författare och skapandedatum." },
      { question: "Ändrar PDF-information min fil?", answer: "Nej. PDF:en läses bara; inget ändras eller sparas om." },
      { question: "Kan jag inspektera en lösenordsskyddad PDF?", answer: "Filer som kräver ett lösenord för att öppnas kan inte läsas utan det. Filer med enbart redigeringsbegränsningar visas som krypterade." },
      { question: "Laddas min PDF upp?", answer: "Nej. Den läses lokalt i din webbläsare." },
    ],
  },
  "resize-image": {
    name: "Ändra bildstorlek",
    actionLabel: "Ändra bildstorlek",
    shortDescription: "Ändra bredd och höjd på JPG-, PNG- och WEBP-bilder — som procent eller exakta pixlar.",
    longDescription: [
      "Ändra bildstorlek ändrar dimensionerna på dina foton och grafik. Skala med procent eller ange en exakt bredd och höjd med låst bildförhållande så att inget ser sträckt ut. Ändra storlek på flera bilder på en gång och ladda ner dem tillsammans i en .zip.",
      "Bilder behåller sitt ursprungliga format, och högkvalitativ utjämning håller nedskalade bilder skarpa. Allt sker i din webbläsare, så bilderna laddas aldrig upp.",
    ],
    faq: [
      { question: "Blir min bild suddig av storleksändring?", answer: "Att krympa en bild bevarar dess skärpa. Att förstora bortom originalstorleken kan inte lägga till detaljer, så stora förstoringar kan se mjuka ut." },
      { question: "Kan jag ändra storlek på flera bilder på en gång?", answer: "Ja. Lägg till upp till 20 bilder; med låst bildförhållande behåller var och en sina egna proportioner vid den bredd du ställer in." },
      { question: "Vilket format blir den storleksändrade bilden?", answer: "Samma som originalet — JPG förblir JPG, PNG förblir PNG och WEBP förblir WEBP där din webbläsare stöder det." },
      { question: "Laddas mina bilder upp?", answer: "Nej. Storleksändringen sker lokalt i din webbläsare." },
    ],
  },
  "crop-image": {
    name: "Beskär bild",
    actionLabel: "Beskär bild",
    shortDescription: "Beskär en bild till det område du vill ha med en dragbar beskärningsram.",
    longDescription: [
      "Beskär bild tar bort onödiga kanter från ett foto eller en skärmdump. Dra beskärningsramen eller dess hörn över förhandsgranskningen — eller finjustera varje kant med en reglage — och se den exakta pixelstorleken på resultatet.",
      "Den beskurna bilden behåller originalformat och kvalitet, och hela processen sker i din webbläsare, så bilden laddas aldrig upp.",
    ],
    faq: [
      { question: "Kan jag beskära till exakta dimensioner?", answer: "Justera varje kant med reglagen och se resultatstorleken uppdateras i pixlar allt eftersom." },
      { question: "Minskar beskärning bildkvaliteten?", answer: "Nej. De behållna pixlarna kopieras oförändrade; endast delarna utanför ramen tas bort." },
      { question: "Vilka format kan jag beskära?", answer: "JPG, PNG och WEBP. Resultatet behåller samma format som originalet." },
      { question: "Laddas min bild upp?", answer: "Nej. Beskärningen sker lokalt i din webbläsare." },
    ],
  },
  "flip-image": {
    name: "Vänd bild",
    actionLabel: "Vänd bilder",
    shortDescription: "Vänd bilder horisontellt eller vertikalt — en i taget eller i bulk.",
    longDescription: [
      "Vänd bild skapar en spegelbild av dina foton: vänster till höger eller topp till botten. Användbart för att fixa selfies tagna med frontkameran, skapa reflektioner eller förbereda mönster för tryck.",
      "Vänd flera bilder på en gång, förhandsgranska resultatet omedelbart och ladda ner dem i originalformatet. Allt sker i din webbläsare, så bilderna laddas aldrig upp.",
    ],
    faq: [
      { question: "Vad är skillnaden mellan att vända och rotera?", answer: "Rotation vrider en bild i steg om 90°. Vändning speglar den, som att titta i en spegel." },
      { question: "Kan jag vända flera bilder på en gång?", answer: "Ja. Lägg till upp till 20 bilder så vänds alla på samma sätt och laddas sedan ner tillsammans som en .zip." },
      { question: "Minskar vändning kvaliteten?", answer: "Ingen märkbar kvalitetsförlust — PNG förblir förlustfri, och JPG och WEBP sparas i hög kvalitet." },
      { question: "Laddas mina bilder upp?", answer: "Nej. Vändningen sker lokalt i din webbläsare." },
    ],
  },
  "png-to-jpg": {
    name: "PNG till JPG",
    actionLabel: "Konvertera till JPG",
    shortDescription: "Konvertera PNG-bilder till JPG för mindre, mer kompatibla filer.",
    longDescription: [
      "PNG till JPG konverterar dina PNG-bilder till JPG-filer, vanligtvis betydligt mindre — perfekt för foton, e-postbilagor och uppladdningsformulär som bara accepterar JPG. Konvertera flera bilder på en gång och justera kvaliteten för att balansera storlek mot skärpa.",
      "JPG stöder inte transparens, så transparenta områden fylls med vitt. Konverteringen sker helt i din webbläsare, så bilderna laddas aldrig upp.",
    ],
    faq: [
      { question: "Varför konvertera PNG till JPG?", answer: "JPG-filer är vanligtvis mycket mindre än PNG för foton och accepteras nästan överallt, från e-post till onlineformulär." },
      { question: "Vad händer med en transparent bakgrund?", answer: "JPG har ingen transparens, så transparenta områden fylls med vitt." },
      { question: "Kan jag konvertera flera PNG-filer på en gång?", answer: "Ja. Lägg till upp till 30 bilder; de konverteras tillsammans och laddas ner som en .zip." },
      { question: "Laddas mina bilder upp?", answer: "Nej. Konverteringen sker lokalt i din webbläsare." },
    ],
  },
  "jpg-to-png": {
    name: "JPG till PNG",
    actionLabel: "Konvertera till PNG",
    shortDescription: "Konvertera JPG-foton till PNG-bilder utan kvalitetsförlust.",
    longDescription: [
      "JPG till PNG konverterar dina JPG- eller JPEG-bilder till PNG-format. PNG är förlustfritt, så bilden förlorar ingen ytterligare kvalitet när den redigeras och sparas igen — användbart för grafik du kommer fortsätta arbeta med, eller för verktyg och plattformar som kräver PNG.",
      "Konvertera flera bilder på en gång och ladda ner dem tillsammans. Konverteringen sker helt i din webbläsare, så bilderna laddas aldrig upp.",
    ],
    faq: [
      { question: "Förbättrar konvertering av JPG till PNG kvaliteten?", answer: "Nej — detaljer som redan gått förlorade i JPG kan inte återställas. Men PNG förhindrar ytterligare förlust när du redigerar och sparar igen." },
      { question: "Varför är PNG större än JPG?", answer: "PNG lagrar varje pixel utan förlustkomprimering, så foton blir vanligtvis större. Det är en avvägning för förlustfri kvalitet." },
      { question: "Kan jag konvertera flera JPG-filer på en gång?", answer: "Ja. Lägg till upp till 30 bilder och ladda ner som en .zip." },
      { question: "Laddas mina bilder upp?", answer: "Nej. Konverteringen sker lokalt i din webbläsare." },
    ],
  },
  "webp-to-jpg": {
    name: "WEBP till JPG",
    actionLabel: "Konvertera till JPG",
    shortDescription: "Konvertera WEBP-bilder till JPG så de öppnas i alla appar eller webbplatser.",
    longDescription: [
      "WEBP till JPG konverterar moderna WEBP-bilder — vanliga på webbplatser — till JPG, ett format som stöds av praktiskt taget alla appar, enheter och uppladdningsformulär. Konvertera en bild eller flera på en gång och justera kvaliteten för att balansera storlek mot skärpa.",
      "Transparenta områden fylls med vitt eftersom JPG inte stöder transparens. Konverteringen sker helt i din webbläsare, så bilderna laddas aldrig upp.",
    ],
    faq: [
      { question: "Varför konvertera WEBP till JPG?", answer: "Vissa äldre appar, redigerare och uppladdningsformulär accepterar inte WEBP. JPG fungerar nästan överallt." },
      { question: "Förlorar jag kvalitet?", answer: "Vid standardkvalitet är skillnaden svår att se. Öka kvalitetsreglaget för det skarpaste resultatet." },
      { question: "Kan jag konvertera flera WEBP-bilder på en gång?", answer: "Ja. Lägg till upp till 30 bilder och ladda ner som en .zip." },
      { question: "Laddas mina bilder upp?", answer: "Nej. Konverteringen sker lokalt i din webbläsare." },
    ],
  },
  "jpg-to-webp": {
    name: "JPG till WEBP",
    actionLabel: "Konvertera till WEBP",
    shortDescription: "Konvertera JPG-foton till WEBP för mindre, snabbare webbilder.",
    longDescription: [
      "JPG till WEBP konverterar dina JPG-bilder till WEBP, ett modernt format som vanligtvis ger betydligt mindre filer med liknande visuell kvalitet — bra för att snabba upp webbplatser och spara diskutrymme.",
      "Justera kvaliteten för att hitta rätt balans och konvertera flera bilder på en gång. Konverteringen sker helt i din webbläsare, så bilderna laddas aldrig upp. Att skapa WEBP-filer kräver en nyare version av Chrome, Edge eller Firefox.",
    ],
    faq: [
      { question: "Är WEBP mindre än JPG?", answer: "Vanligtvis ja — WEBP sparar ofta en betydande mängd utrymme vid liknande kvalitet, vilket hjälper webbplatser att ladda snabbare." },
      { question: "Stöder alla webbläsare WEBP?", answer: "Alla moderna webbläsare kan visa WEBP. Att skapa WEBP-filer här kräver en nyare version av Chrome, Edge eller Firefox." },
      { question: "Kan jag konvertera flera JPG-filer på en gång?", answer: "Ja. Lägg till upp till 30 bilder och ladda ner som en .zip." },
      { question: "Laddas mina bilder upp?", answer: "Nej. Konverteringen sker lokalt i din webbläsare." },
    ],
  },
  "webp-to-png": {
    name: "WEBP till PNG",
    actionLabel: "Konvertera till PNG",
    shortDescription: "Konvertera WEBP-bilder till PNG och behåll transparens.",
    longDescription: [
      "WEBP till PNG konverterar WEBP-bilder till PNG, ett förlustfritt format som stöds av varje bildredigerare. Transparens bevaras, så logotyper, ikoner och urklippt grafik behåller sina transparenta bakgrunder.",
      "Konvertera flera bilder på en gång och ladda ner dem tillsammans. Konverteringen sker helt i din webbläsare, så bilderna laddas aldrig upp.",
    ],
    faq: [
      { question: "Bevaras transparens?", answer: "Ja. PNG stöder transparens, så transparenta områden i din WEBP-bild förblir transparenta." },
      { question: "Varför konvertera WEBP till PNG?", answer: "PNG öppnas i alla redigerare och designverktyg och förlorar ingen kvalitet vid ytterligare redigering och sparande." },
      { question: "Kan jag konvertera flera WEBP-filer på en gång?", answer: "Ja. Lägg till upp till 30 bilder och ladda ner som en .zip." },
      { question: "Laddas mina bilder upp?", answer: "Nej. Konverteringen sker lokalt i din webbläsare." },
    ],
  },
  "png-to-webp": {
    name: "PNG till WEBP",
    actionLabel: "Konvertera till WEBP",
    shortDescription: "Konvertera PNG-bilder till WEBP för mindre filer som behåller transparens.",
    longDescription: [
      "PNG till WEBP konverterar dina PNG-bilder till WEBP, vilket vanligtvis krymper filer betydligt samtidigt som transparens bevaras — perfekt för webbgrafik, ikoner och skärmdumpar.",
      "Välj en kvalitet, konvertera flera bilder på en gång och ladda ner dem tillsammans. Konverteringen sker helt i din webbläsare, så bilderna laddas aldrig upp. Att skapa WEBP-filer kräver en nyare version av Chrome, Edge eller Firefox.",
    ],
    faq: [
      { question: "Behåller WEBP transparens?", answer: "Ja. WEBP stöder transparens, så transparenta områden i din PNG förblir transparenta." },
      { question: "Hur mycket mindre blir mina bilder?", answer: "Det varierar, men WEBP-filer är ofta betydligt mindre än samma bild sparad som PNG." },
      { question: "Kan jag konvertera flera PNG-filer på en gång?", answer: "Ja. Lägg till upp till 30 bilder och ladda ner som en .zip." },
      { question: "Laddas mina bilder upp?", answer: "Nej. Konverteringen sker lokalt i din webbläsare." },
    ],
  },
};
