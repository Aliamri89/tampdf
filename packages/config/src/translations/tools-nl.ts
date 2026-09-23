import type { ToolTranslationOverride } from "./tools-ar";

export const toolsNl: Record<string, ToolTranslationOverride> = {
  "compress-pdf": {
    name: "PDF comprimeren",
    actionLabel: "PDF comprimeren",
    shortDescription: "Verklein de bestandsgrootte van een PDF voor eenvoudiger delen en uploaden, rechtstreeks in je browser.",
    longDescription: [
      "PDF comprimeren verkleint de bestandsgrootte door ingesloten afbeeldingen opnieuw te coderen en onnodige gegevens te verwijderen, zodat je document makkelijker te e-mailen, uploaden of opslaan is.",
      "Kies een compressieniveau om bestandsgrootte en visuele kwaliteit af te wegen, en vergelijk de grootte voor/na voordat je downloadt.",
    ],
    faq: [
      { question: "Hoeveel kleiner wordt mijn PDF?", answer: "Dat hangt af van de inhoud. PDF's met grote ingesloten afbeeldingen krimpen meestal het meest, soms 50-90%. Tekstrijke PDF's comprimeren minder omdat er minder te optimaliseren valt." },
      { question: "Wordt mijn PDF wazig door compressie?", answer: "Bij de standaardinstelling is het kwaliteitsverlies minimaal. Bij het sterkste compressieniveau worden afbeeldingen agressiever verkleind, wat de scherpte bij inzoomen kan verminderen." },
      { question: "Gebeurt de compressie op de servers van TAMPDF?", answer: "Nee. PDF comprimeren werkt lokaal in je browser, dus je bestand wordt nooit ergens geüpload." },
      { question: "Kan ik een met wachtwoord beveiligde PDF comprimeren?", answer: "Momenteel niet. Verwijder eerst de wachtwoordbeveiliging met een andere tool en comprimeer het bestand daarna." },
    ],
  },
  "pdf-to-jpg": {
    name: "PDF naar JPG",
    actionLabel: "Omzetten naar JPG",
    shortDescription: "Zet elke pagina van een PDF om in een JPG-afbeelding van hoge kwaliteit.",
    longDescription: [
      "PDF naar JPG zet elke pagina van je PDF om in een aparte JPG-afbeelding, klaar om te delen, bewerken of in een presentatie te plaatsen. Een PDF van één pagina wordt als één JPG gedownload; PDF's met meerdere pagina's worden gebundeld in een .zip-bestand.",
      "De omzetting gebeurt rechtstreeks in je browser met PDF.js, dus je document wordt nooit naar een server geüpload.",
    ],
    faq: [
      { question: "Wat als mijn PDF meerdere pagina's heeft?", answer: "Elke pagina wordt een eigen JPG-afbeelding. Bij meer dan één worden ze gebundeld in één .zip-bestand om te downloaden." },
      { question: "Hoe scherp worden de afbeeldingen?", answer: "Pagina's worden weergegeven met een hoge resolutie, geschikt voor schermen en de meeste afdrukbehoeften. Kies het kwaliteitsniveau om scherpte en bestandsgrootte af te wegen." },
      { question: "Wordt mijn PDF ergens geüpload?", answer: "Nee. PDF naar JPG verwerkt elke pagina lokaal in je browser, dus je bestand verlaat je apparaat nooit." },
      { question: "Kan ik maar één pagina converteren in plaats van het hele document?", answer: "Momenteel wordt elke pagina geconverteerd. Gebruik PDF samenvoegen of een PDF-lezer om vooraf één pagina te isoleren als je maar één afbeelding nodig hebt." },
    ],
  },
  "merge-pdf": {
    name: "PDF samenvoegen",
    actionLabel: "PDF's samenvoegen",
    shortDescription: "Combineer meerdere PDF-bestanden tot één document, in de volgorde die je kiest.",
    longDescription: [
      "PDF samenvoegen laat je twee of meer PDF-bestanden combineren tot één document zonder iets te installeren. Voeg je bestanden toe, sleep ze om ze te herschikken, en download één samengevoegde PDF.",
      "Alles gebeurt lokaal in je browser, dus je bestanden worden nooit naar een server geüpload. Dat betekent dat het zelfs werkt met gevoelige contracten, rapporten of persoonlijke documenten.",
    ],
    faq: [
      { question: "Is er een limiet aan het aantal PDF's dat ik kan samenvoegen?", answer: "Geen vaste limiet. Omdat het samenvoegen in je browser gebeurt, is de praktische limiet het geheugen van je apparaat in plaats van een serverquotum." },
      { question: "Kan ik de volgorde van pagina's wijzigen voor het samenvoegen?", answer: "Ja. Nadat je je bestanden hebt toegevoegd, sleep je ze naar de volgorde die je wilt voor het einddocument, voordat je ze samenvoegt." },
      { question: "Worden mijn bestanden geüpload naar de servers van TAMPDF?", answer: "Nee. PDF samenvoegen verwerkt bestanden volledig in je browser met client-side technologie, dus je documenten verlaten je apparaat nooit." },
      { question: "Beïnvloedt samenvoegen de kwaliteit van mijn PDF's?", answer: "Nee. Pagina's worden ongewijzigd gecombineerd, zonder hercompressie, dus tekst, afbeeldingen en opmaak blijven precies zoals in de originelen." },
    ],
  },
  "rotate-pdf": {
    name: "PDF draaien",
    actionLabel: "PDF draaien",
    shortDescription: "Draai losse pagina's of een heel PDF-bestand 90°, 180° of 270°, rechtstreeks in je browser.",
    longDescription: [
      "PDF draaien laat je scheve of ondersteboven staande pagina's in enkele seconden corrigeren. Upload een of meer PDF's, bekijk een miniatuur van elke pagina, en draai dan het hele document in één keer of alleen de pagina's die het nodig hebben.",
      "Alles gebeurt lokaal in je browser, dus je bestanden worden nooit naar een server geüpload. Upload meerdere PDF's tegelijk en elk wordt onafhankelijk gedraaid en teruggegeven.",
    ],
    faq: [
      { question: "Kan ik maar één pagina draaien in plaats van het hele document?", answer: "Ja. Klik op de draaiknop van een pagina om alleen die pagina te draaien, of gebruik de alles-draaien-knoppen om dezelfde rotatie op alle pagina's tegelijk toe te passen." },
      { question: "Welke draaihoeken worden ondersteund?", answer: "Je kunt pagina's 90°, 180° of 270° in beide richtingen draaien." },
      { question: "Kan ik meer dan één PDF tegelijk draaien?", answer: "Ja. Upload meerdere PDF's en elk wordt onafhankelijk gedraaid. Als je meer dan één bestand uploadt, worden de gedraaide PDF's gebundeld in een .zip om te downloaden." },
      { question: "Wordt mijn PDF ergens geüpload?", answer: "Nee. PDF draaien verwerkt alles lokaal in je browser, dus je bestanden verlaten je apparaat nooit." },
    ],
  },
  "compress-image": {
    name: "Afbeelding comprimeren",
    actionLabel: "Afbeeldingen comprimeren",
    shortDescription: "Verklein JPG-, PNG- en WebP-bestanden met behoud van visuele kwaliteit.",
    longDescription: [
      "Afbeelding comprimeren verkleint de bestandsgrootte van je JPG-, PNG- of WebP-foto's, waardoor ze sneller te uploaden, e-mailen en laden op websites zijn.",
      "Compressie gebeurt volledig in je browser via de canvas-API, dus je foto's verlaten je apparaat nooit, en je kunt meerdere afbeeldingen tegelijk comprimeren.",
    ],
    faq: [
      { question: "Welke afbeeldingsformaten worden ondersteund?", answer: "JPG-, PNG- en WebP-afbeeldingen worden zowel als invoer als uitvoer ondersteund." },
      { question: "Kan ik meerdere afbeeldingen tegelijk comprimeren?", answer: "Ja. Voeg zoveel afbeeldingen toe als je wilt en elk wordt gecomprimeerd en gebundeld in één .zip om te downloaden, of individueel gedownload." },
      { question: "Hoeveel kan ik een afbeelding verkleinen zonder kwaliteitsverlies?", answer: "De standaardkwaliteitsinstelling verkleint de bestandsgrootte meestal met 60-80% zonder zichtbaar verschil. Je kunt de kwaliteitsschuif aanpassen voor een andere afweging." },
      { question: "Worden mijn foto's naar een server geüpload?", answer: "Nee. Compressie gebeurt lokaal in je browser via de canvas-API, dus je afbeeldingen worden nooit ergens naartoe gestuurd." },
    ],
  },
  "image-to-pdf": {
    name: "JPG naar PDF",
    actionLabel: "Omzetten naar PDF",
    shortDescription: "Zet een of meer JPG-afbeeldingen om in één PDF-document.",
    longDescription: [
      "JPG naar PDF combineert je JPG-foto's tot één PDF-bestand, één afbeelding per pagina, in de volgorde die je kiest.",
      "Perfect om gescande documenten, bonnen of foto's om te zetten in een deelbare PDF. Alles wordt lokaal in je browser verwerkt voor volledige privacy.",
    ],
    faq: [
      { question: "Kan ik meerdere afbeeldingen combineren tot één PDF?", answer: "Ja. Voeg meerdere afbeeldingen toe en elk wordt een pagina in de resulterende PDF, in de volgorde waarin je ze rangschikt." },
      { question: "Welke paginagrootte wordt voor de PDF gebruikt?", answer: "Elke pagina wordt aangepast aan de afmetingen en oriëntatie van de bronafbeelding, dus er wordt niets bijgesneden of uitgerekt." },
      { question: "Worden mijn afbeeldingen ergens geüpload?", answer: "Nee. De omzetting gebeurt volledig in je browser, dus je afbeeldingen blijven op je apparaat." },
      { question: "Ondersteunt het ook PNG-afbeeldingen?", answer: "Ja, PNG-afbeeldingen worden naast JPG ondersteund. HEIC-foto's van een iPhone worden nog niet ondersteund; zet ze eerst om naar JPG via de deelopties van je telefoon." },
    ],
  },
  "rotate-images": {
    name: "Afbeeldingen draaien",
    actionLabel: "Afbeeldingen draaien",
    shortDescription: "Draai een of meer JPG-, PNG- of WebP-afbeeldingen 90°, 180° of 270°.",
    longDescription: [
      "Afbeeldingen draaien corrigeert scheve of ondersteboven staande foto's in enkele seconden. Upload een of meer afbeeldingen, draai elk afzonderlijk of allemaal tegelijk, en download de resultaten.",
      "Alles gebeurt lokaal in je browser, dus je foto's worden nooit naar een server geüpload. Upload meerdere afbeeldingen tegelijk en elk wordt onafhankelijk gedraaid en teruggegeven.",
    ],
    faq: [
      { question: "Welke afbeeldingsformaten worden ondersteund?", answer: "JPG-, PNG- en WebP-afbeeldingen worden ondersteund. Draaien behoudt het oorspronkelijke formaat." },
      { question: "Kan ik maar één afbeelding draaien in plaats van allemaal?", answer: "Ja. Klik op de draaiknop van een afbeelding om alleen die te draaien, of gebruik de alles-draaien-knoppen om dezelfde rotatie op alle afbeeldingen tegelijk toe te passen." },
      { question: "Welke draaihoeken worden ondersteund?", answer: "Je kunt afbeeldingen 90°, 180° of 270° draaien." },
      { question: "Worden mijn foto's ergens geüpload?", answer: "Nee. Afbeeldingen draaien verwerkt alles lokaal in je browser, dus je foto's verlaten je apparaat nooit." },
    ],
  },
  "split-pdf": {
    name: "PDF splitsen",
    actionLabel: "PDF splitsen",
    shortDescription: "Splits een PDF in meerdere kleinere bestanden op paginabereik of in gelijke delen.",
    longDescription: [
      "PDF splitsen splitst een groot document op in aparte PDF-bestanden zonder de pagina's zelf te wijzigen. Voer bereiken in zoals 1-3, 5, 8-10 om precies de secties te halen die je nodig hebt, of splits het hele document in gelijke delen met een vast aantal pagina's.",
      "Alles gebeurt in je browser — de PDF wordt nooit naar een server geüpload. Eén resultaat wordt als één PDF gedownload; meerdere delen worden gebundeld in een .zip.",
    ],
    faq: [
      { question: "Hoe kies ik welke pagina's in elk bestand komen?", answer: "Gebruik het bereikveld: iets als «1-3, 5, 8-10» levert drie PDF's op — pagina's 1 tot 3, pagina 5 apart, en pagina's 8 tot 10. Of schakel over naar «elke N pagina's» om het document in gelijke delen te snijden." },
      { question: "Behouden de gesplitste bestanden hun oorspronkelijke kwaliteit?", answer: "Ja. Pagina's worden ongewijzigd gekopieerd, zonder hercompressie, dus tekst, afbeeldingen, lettertypen en lay-out zijn identiek aan de bron." },
      { question: "Wordt mijn PDF ergens geüpload?", answer: "Nee. Het splitsen gebeurt volledig in je browser, dus je document verlaat je apparaat nooit." },
      { question: "Wat gebeurt er met formuliervelden of digitale handtekeningen?", answer: "Paginainhoud en formulierwidgets blijven visueel behouden, maar interactief formuliergedrag en handtekeningen worden niet meegenomen in de gesplitste bestanden. Maak ze plat of onderteken opnieuw als je ze nodig hebt." },
    ],
  },
  "delete-pdf-pages": {
    name: "PDF-pagina's verwijderen",
    actionLabel: "Pagina's verwijderen",
    shortDescription: "Verwijder ongewenste pagina's uit een PDF en download het bijgewerkte document.",
    longDescription: [
      "PDF-pagina's verwijderen laat je pagina's die je niet nodig hebt weglaten — blanco scans, voorbladen, dubbele pagina's — en de rest in de oorspronkelijke volgorde behouden. Bekijk een miniatuur van elke pagina, tik de te verwijderen pagina's aan, en download het resultaat.",
      "Het hele proces gebeurt lokaal in je browser, dus je PDF wordt nooit geüpload. De overgebleven pagina's worden gekopieerd zonder hercompressie, dus niets verliest kwaliteit.",
    ],
    faq: [
      { question: "Kan ik meerdere pagina's tegelijk verwijderen?", answer: "Ja. Selecteer zoveel pagina's als je wilt in het miniaturenraster en verwijder ze allemaal in één stap." },
      { question: "Kan ik alle pagina's verwijderen?", answer: "Nee — er moet minstens één pagina overblijven, dus de knop is uitgeschakeld als je ze allemaal hebt geselecteerd." },
      { question: "Verkleint het verwijderen van pagina's de bestandsgrootte?", answer: "Meestal een beetje, omdat de inhoud van de verwijderde pagina's wegvalt. Gedeelde bronnen zoals lettertypen kunnen blijven, gebruik daarna PDF comprimeren als grootte belangrijk is." },
      { question: "Worden mijn bestanden naar een server geüpload?", answer: "Nee. Alles gebeurt in je browser en je PDF verlaat je apparaat nooit." },
    ],
  },
  "reorder-pdf-pages": {
    name: "PDF-pagina's herschikken",
    actionLabel: "Pagina's herschikken",
    shortDescription: "Sleep PDF-pagina's naar een nieuwe volgorde en sla het herschikte document op.",
    longDescription: [
      "PDF-pagina's herschikken toont je een miniatuur van elke pagina die je naar de gewenste volgorde kunt slepen — een pagina naar voren verplaatsen, twee secties wisselen, of het hele document omkeren. Er zijn ook verplaatsknoppen voor precieze wijzigingen, pagina voor pagina.",
      "Herschikken gebeurt volledig in je browser, dus je PDF wordt nooit geüpload. Pagina's worden ongewijzigd gekopieerd, dus kwaliteit en opmaak blijven onaangetast.",
    ],
    faq: [
      { question: "Hoe verplaats ik een pagina?", answer: "Sleep de miniatuur naar de nieuwe positie, of gebruik de omhoog/omlaag-knoppen op elke pagina voor enkele stappen. De nieuwe volgorde wordt opgeslagen als je op de knop klikt." },
      { question: "Kan ik het hele document omkeren?", answer: "Ja — sleep de pagina's in omgekeerde volgorde, of gebruik de verplaatsknoppen. Elk aantal pagina's kan in één keer worden herschikt." },
      { question: "Verandert herschikken de paginainhoud?", answer: "Nee. Alleen de paginavolgorde verandert — tekst, afbeeldingen en lay-out van elke pagina blijven exact hetzelfde." },
      { question: "Wordt de PDF ergens geüpload?", answer: "Nee. Herschikken gebeurt lokaal in je browser en je bestand verlaat je apparaat nooit." },
    ],
  },
  "crop-pdf": {
    name: "PDF bijsnijden",
    actionLabel: "PDF bijsnijden",
    shortDescription: "Snij de marges van elke PDF-pagina bij door boven-, onder- en zijmarges in te stellen.",
    longDescription: [
      "PDF bijsnijden verwijdert ongewenste witruimte of scanranden van de randen van je pagina's. Stel in hoeveel je wilt bijsnijden aan boven-, onder-, links- en rechterkant als percentage, bekijk de live preview, en pas het toe op alle pagina's tegelijk.",
      "Bijsnijden past het zichtbare paginagebied aan zonder inhoud te verwijderen — de bijgesneden delen worden alleen verborgen. Alles gebeurt in je browser, dus je PDF wordt nooit geüpload.",
    ],
    faq: [
      { question: "Verwijdert bijsnijden de inhoud buiten het bijsnijgebied?", answer: "Nee. PDF bijsnijden wijzigt het bijsnijkader van de pagina, wat het buitengebied verbergt in viewers en bij afdrukken. De onderliggende inhoud blijft in het bestand en kan worden hersteld." },
      { question: "Wordt dezelfde bijsnede toegepast op alle pagina's?", answer: "Ja. De marges die je instelt worden op alle pagina's toegepast. Pagina's van verschillende groottes worden elk met hetzelfde percentage bijgesneden." },
      { question: "Kan ik een gescand document bijsnijden om de zwarte rand te verwijderen?", answer: "Ja — dat is een veelvoorkomend gebruik. Verhoog de marges tot de preview alleen de inhoud toont die je wilt behouden." },
      { question: "Wordt mijn bestand naar een server geüpload?", answer: "Nee. Bijsnijden gebeurt volledig in je browser en je PDF blijft op je apparaat." },
    ],
  },
  "resize-pdf": {
    name: "PDF-formaat wijzigen",
    actionLabel: "PDF-formaat wijzigen",
    shortDescription: "Wijzig het paginaformaat van een PDF naar A4, Letter of een aangepaste schaal, met passende, gecentreerde inhoud.",
    longDescription: [
      "PDF-formaat wijzigen verandert het fysieke paginaformaat van je document. Kies een standaardformaat zoals A4 of US Letter en elke pagina wordt passend geschaald en gecentreerd, of gebruik een percentage om de pagina's proportioneel te verkleinen of vergroten.",
      "Formaat wijzigen gebeurt in je browser zonder upload. Inhoud wordt samen met de pagina geschaald, dus er wordt niets afgesneden en de lay-out blijft proportioneel.",
    ],
    faq: [
      { question: "Welke paginaformaten kan ik kiezen?", answer: "A4 en US Letter in staand of liggend, plus A3 en A5. Je kunt ook een schaalpercentage invoeren om het formaat te wijzigen zonder de beeldverhouding te veranderen." },
      { question: "Wordt mijn inhoud uitgerekt?", answer: "Nee. Inhoud wordt gelijkmatig geschaald om in het nieuwe formaat te passen en gecentreerd op de pagina, dus proporties blijven behouden en er wordt niets afgesneden." },
      { question: "Kan ik hiermee de bestandsgrootte van een PDF verkleinen?", answer: "Niet rechtstreeks — dit wijzigt paginaformaten, niet het bestandsgewicht. Gebruik PDF comprimeren om de bestandsgrootte te verkleinen." },
      { question: "Worden mijn bestanden ergens geüpload?", answer: "Nee. Formaat wijzigen gebeurt lokaal in je browser en je PDF verlaat je apparaat nooit." },
    ],
  },
  "png-to-pdf": {
    name: "PNG naar PDF",
    actionLabel: "Omzetten naar PDF",
    shortDescription: "Zet een of meer PNG-afbeeldingen om in één PDF-document, één afbeelding per pagina.",
    longDescription: [
      "PNG naar PDF combineert je PNG-afbeeldingen tot één PDF-bestand, met elke afbeelding op een eigen pagina in de oorspronkelijke resolutie. Voeg meerdere afbeeldingen toe, rangschik hun volgorde, en download één document.",
      "Geweldig om screenshots, diagrammen of geëxporteerde grafieken om te zetten in een deelbare PDF. De omzetting gebeurt volledig in je browser, dus je afbeeldingen worden nooit geüpload. Transparante gebieden worden op een witte achtergrond geplaatst.",
    ],
    faq: [
      { question: "Kan ik meerdere PNG's combineren tot één PDF?", answer: "Ja. Voeg zoveel PNG-afbeeldingen toe als je wilt en elk wordt een pagina in de resulterende PDF, in de volgorde waarin je ze rangschikt." },
      { question: "Welke paginagrootte wordt gebruikt?", answer: "Elke pagina komt overeen met de pixelafmetingen van de bronafbeelding, dus afbeeldingen worden niet bijgesneden of uitgerekt." },
      { question: "Wat gebeurt er met transparante delen van de afbeelding?", answer: "Transparantie wordt afgevlakt op een witte achtergrond zodat de pagina er in elke PDF-viewer hetzelfde uitziet." },
      { question: "Worden mijn afbeeldingen naar een server geüpload?", answer: "Nee. De omzetting gebeurt volledig in je browser en je afbeeldingen blijven op je apparaat." },
    ],
  },
  "extract-pdf-pages": {
    name: "PDF-pagina's extraheren",
    actionLabel: "Pagina's extraheren",
    shortDescription: "Haal gekozen pagina's uit een PDF naar een nieuw bestand — of sla elke pagina op als eigen PDF.",
    longDescription: [
      "PDF-pagina's extraheren laat je precies de pagina's kiezen die je nodig hebt uit een document en ze als nieuwe PDF opslaan. Bekijk een miniatuur van elke pagina, tik de te behouden pagina's aan, en download ze samen — of als aparte PDF's van één pagina in een ZIP.",
      "Je originele bestand blijft ongewijzigd, en pagina's worden ongewijzigd gekopieerd, dus tekst, afbeeldingen en opmaak blijven onaangetast. Alles gebeurt in je browser, dus de PDF wordt nooit geüpload.",
    ],
    faq: [
      { question: "Wat is het verschil tussen extraheren en splitsen?", answer: "Extraheren slaat alleen de geselecteerde pagina's op in een nieuwe PDF. Splitsen splitst het hele document in meerdere delen op paginabereik of vaste grootte." },
      { question: "Kan ik elke geëxtraheerde pagina als apart bestand opslaan?", answer: "Ja. Kies «Aparte PDF's» en elke geselecteerde pagina wordt een eigen PDF, gebundeld in één .zip-download." },
      { question: "Verliezen de geëxtraheerde pagina's kwaliteit?", answer: "Nee. Pagina's worden gekopieerd zonder hercompressie, dus ze zien er precies zo uit als het origineel. Interactieve formuliervelden kunnen gewone paginainhoud worden." },
      { question: "Wordt mijn PDF naar een server geüpload?", answer: "Nee. Pagina's worden lokaal in je browser geëxtraheerd en je bestand verlaat je apparaat nooit." },
    ],
  },
  "add-page-numbers": {
    name: "Paginanummers toevoegen",
    actionLabel: "Paginanummers toevoegen",
    shortDescription: "Nummer de pagina's van een PDF, met zelf gekozen positie, opmaak en startnummer.",
    longDescription: [
      "Paginanummers toevoegen stempelt een nummer op elke pagina van je PDF. Kies uit zes posities, een stijl zoals «1», «1 / 10» of «Pagina 1 van 10», stel het startnummer in, en sla optioneel de voorpagina over.",
      "Nummers worden als echte tekst getekend in een standaardlettertype, dus ze drukken scherp af en blijven rechtop, zelfs op gedraaide pagina's. Het hele proces gebeurt in je browser — je document wordt nooit geüpload.",
    ],
    faq: [
      { question: "Kan ik beginnen met nummeren vanaf een ander getal dan 1?", answer: "Ja. Stel elk startnummer in — handig wanneer je PDF een hoofdstuk of bijlage van een groter document is." },
      { question: "Kan ik de voorpagina zonder nummer laten?", answer: "Ja. Zet «Eerste pagina niet nummeren» aan en de nummering begint op de tweede pagina." },
      { question: "Welke cijfers worden gebruikt?", answer: "Standaardcijfers (1, 2, 3), die correct worden weergegeven in elke PDF-lezer. Labels zoals «Pagina 1 van 10» worden in het Nederlands geschreven." },
      { question: "Wordt mijn bestand geüpload?", answer: "Nee. Paginanummers worden lokaal in je browser toegevoegd en je PDF blijft op je apparaat." },
    ],
  },
  "add-watermark": {
    name: "Watermerk toevoegen",
    actionLabel: "Watermerk toevoegen",
    shortDescription: "Zet tekst zoals VERTROUWELIJK of CONCEPT op elke pagina van een PDF.",
    longDescription: [
      "Watermerk toevoegen plaatst je tekst op elke pagina van een PDF — eenmaal gecentreerd of herhaald over de pagina. Kies de kleur, dekking, grootte en hoek, en bekijk een live preview op je eerste pagina voordat je het toepast.",
      "Nederlands en andere schriften worden volledig ondersteund. Het watermerk wordt opgeslagen als een standaard watermerkobject, en alles gebeurt in je browser, dus je document wordt nooit geüpload.",
    ],
    faq: [
      { question: "Kan ik het watermerk in het Nederlands schrijven?", answer: "Ja. De tekst wordt weergegeven met de lettertypen van je browser, dus Nederlands en andere schriften worden correct weergegeven." },
      { question: "Kan het watermerk over de pagina worden herhaald?", answer: "Ja. Kies de indeling «Herhaald» om de tekst over elke pagina te tegelen, of «Eenmaal, gecentreerd» voor een enkele stempel." },
      { question: "Kan het watermerk later worden verwijderd?", answer: "Het wordt opgeslagen als een standaard watermerkobject, dus tools die watermerken herkennen — waaronder TAMPDF's Watermerk verwijderen — kunnen het verwijderen. Het is geen beveiligingsfunctie." },
      { question: "Wordt mijn PDF ergens geüpload?", answer: "Nee. Het watermerk wordt lokaal in je browser toegepast." },
    ],
  },
  "remove-watermark": {
    name: "Watermerk verwijderen",
    actionLabel: "Watermerk verwijderen",
    shortDescription: "Verwijder watermerken die als watermerkobjecten aan een PDF zijn toegevoegd.",
    longDescription: [
      "Watermerk verwijderen vindt en verwijdert watermerken die als watermerkobjecten zijn toegevoegd — het soort dat Adobe Acrobat, TAMPDF en de meeste PDF-editors maken — samen met watermerkannotaties en lagen genaamd «Watermark». De rest van elke pagina blijft precies zoals het was.",
      "Watermerken die deel uitmaken van een gescande afbeelding of samengevoegd zijn met gewone paginatekst hebben geen markering om ze te onderscheiden van echte inhoud, dus ze kunnen niet automatisch worden verwijderd. Verwijder watermerken alleen uit documenten die je mag bewerken. Verwerking gebeurt in je browser, dus je bestand wordt nooit geüpload.",
    ],
    faq: [
      { question: "Welke watermerken kunnen worden verwijderd?", answer: "Watermerken toegevoegd als watermerkobjecten, watermerkannotaties, of lagen genaamd «Watermark» — inclusief die gemaakt door Adobe Acrobat en TAMPDF's Watermerk toevoegen-tool." },
      { question: "Waarom werd het watermerk in mijn bestand niet verwijderd?", answer: "Als een watermerk deel uitmaakt van een gescande pagina-afbeelding of is platgeslagen in de paginatekst, kan het niet worden gescheiden van de echte inhoud zonder de pagina te beschadigen." },
      { question: "Beïnvloedt het verwijderen van een watermerk de rest van de pagina?", answer: "Nee. Alleen de gemarkeerde watermerkinhoud wordt verwijderd; tekst, afbeeldingen en lay-out blijven onaangetast." },
      { question: "Wordt mijn bestand geüpload?", answer: "Nee. De PDF wordt lokaal in je browser verwerkt." },
    ],
  },
  "pdf-to-images": {
    name: "PDF naar afbeeldingen",
    actionLabel: "Omzetten naar afbeeldingen",
    shortDescription: "Zet elke pagina van een PDF om in PNG-, JPG- of WEBP-afbeeldingen, gedownload als ZIP.",
    longDescription: [
      "PDF naar afbeeldingen geeft elke pagina van je PDF weer als een aparte afbeelding in het formaat dat je kiest: PNG voor de scherpste tekst, JPG voor de kleinste bestanden, of WEBP voor moderne, compacte afbeeldingen. Kies een resolutie en elke pagina wordt geëxporteerd en gebundeld in één .zip.",
      "Weergave gebeurt rechtstreeks in je browser met PDF.js, dus je document wordt nooit naar een server geüpload.",
    ],
    faq: [
      { question: "Welk afbeeldingsformaat moet ik kiezen?", answer: "PNG houdt tekst en lijntekeningen perfect scherp. JPG produceert kleinere bestanden en is geschikt voor foto's. WEBP biedt een goede balans voor gebruik op het web." },
      { question: "Welke resolutie hebben de afbeeldingen?", answer: "Standaard geeft weer op 108 dpi, Hoog op 144 dpi, en Maximaal op 216 dpi — hoog genoeg om de meeste documenten af te drukken." },
      { question: "Hoe krijg ik alle pagina's tegelijk?", answer: "Elke pagina wordt geconverteerd en verpakt in één .zip-bestand. Een PDF van één pagina wordt gedownload als één afbeelding." },
      { question: "Wordt mijn PDF geüpload?", answer: "Nee. Pagina's worden lokaal in je browser weergegeven." },
    ],
  },
  "images-to-pdf": {
    name: "Afbeeldingen naar PDF",
    actionLabel: "PDF maken",
    shortDescription: "Combineer JPG-, PNG- en WEBP-afbeeldingen tot één PDF, in de volgorde die je kiest.",
    longDescription: [
      "Afbeeldingen naar PDF verandert een reeks foto's, scans of screenshots in één PDF-document. Voeg JPG-, PNG- of WEBP-afbeeldingen toe, sleep de miniaturen naar de gewenste volgorde, en kies een A4- of Letter-pagina (met automatische oriëntatie) of pagina's die bij elke afbeelding passen.",
      "Voeg een marge toe voor een nette afgedrukte look. Transparante gebieden worden op wit geplaatst, en de hele omzetting gebeurt in je browser, dus je afbeeldingen worden nooit geüpload.",
    ],
    faq: [
      { question: "Kan ik de volgorde van de afbeeldingen wijzigen?", answer: "Ja. Sleep de miniaturen of gebruik de pijlknoppen om de paginavolgorde in te stellen voordat je de PDF maakt." },
      { question: "Welke afbeeldingsformaten worden ondersteund?", answer: "JPG, PNG en WEBP. Je kunt formaten mengen in dezelfde PDF." },
      { question: "Welke paginagrootte gebruikt de PDF?", answer: "Kies A4 of Letter — elke afbeelding wordt op de pagina aangepast en indien nodig liggend gedraaid — of «Aan afbeelding aanpassen» zodat elke pagina precies de grootte van de afbeelding heeft." },
      { question: "Worden mijn afbeeldingen geüpload?", answer: "Nee. De PDF wordt lokaal in je browser gemaakt." },
    ],
  },
  "flip-pdf": {
    name: "PDF spiegelen",
    actionLabel: "PDF spiegelen",
    shortDescription: "Spiegel de pagina's van een PDF horizontaal of verticaal.",
    longDescription: [
      "PDF spiegelen spiegelt elke pagina van je document — van links naar rechts of van boven naar onder. Handig voor het afdrukken van strijktransfers, het corrigeren van scans die verkeerd om zijn gemaakt, of het voorbereiden van gespiegelde afbeeldingen.",
      "Bekijk het resultaat op je eerste pagina voordat je het toepast. Spiegelen houdt ook rekening met gedraaide pagina's, en alles gebeurt in je browser, dus je bestand wordt nooit geüpload.",
    ],
    faq: [
      { question: "Wat is het verschil tussen spiegelen en draaien?", answer: "Draaien draait een pagina in stappen van 90°. Spiegelen creëert een spiegelbeeld, waardoor tekst achterstevoren leest — wat je nodig hebt voor transfers en sommige afdrukklussen." },
      { question: "Kan ik maar één pagina spiegelen?", answer: "Spiegelen geldt voor alle pagina's. Om één pagina te spiegelen, extraheer je die eerst met PDF-pagina's extraheren." },
      { question: "Vermindert spiegelen de kwaliteit?", answer: "Nee. Pagina's worden getransformeerd, niet opnieuw weergegeven, dus tekst en afbeeldingen blijven net zo scherp als het origineel." },
      { question: "Wordt mijn PDF geüpload?", answer: "Nee. Spiegelen gebeurt lokaal in je browser." },
    ],
  },
  "edit-pdf-metadata": {
    name: "PDF-metadata bewerken",
    actionLabel: "Metadata bewerken",
    shortDescription: "Wijzig de titel, auteur, onderwerp en trefwoorden van een PDF.",
    longDescription: [
      "PDF-metadata bewerken laat je de documenteigenschappen bekijken en wijzigen die in een PDF zijn opgeslagen — titel, auteur, onderwerp, trefwoorden, maker en producent. Dit is wat PDF-lezers, zoekmachines en bestandsbeheerders over je document tonen.",
      "Laat een veld leeg om het te verwijderen. De paginainhoud wordt niet aangeraakt, en de hele bewerking gebeurt in je browser, dus je bestand wordt nooit geüpload.",
    ],
    faq: [
      { question: "Waarom PDF-metadata bewerken?", answer: "Een duidelijke titel en auteur maken documenten makkelijker te vinden en professioneler bij het delen, en zoekmachines kunnen ze gebruiken bij het indexeren van PDF's." },
      { question: "Verandert het bewerken van metadata de inhoud van het document?", answer: "Nee. Alleen de documenteigenschappen veranderen; pagina's, tekst en afbeeldingen blijven precies hetzelfde." },
      { question: "Hoe verwijder ik een eigenschap?", answer: "Maak het veld leeg en sla op. Lege velden worden uit het bestand verwijderd." },
      { question: "Wordt mijn PDF geüpload?", answer: "Nee. De eigenschappen worden lokaal in je browser bewerkt." },
    ],
  },
  "remove-pdf-metadata": {
    name: "PDF-metadata verwijderen",
    actionLabel: "Metadata verwijderen",
    shortDescription: "Verwijder auteur, titel, software en andere verborgen eigenschappen uit een PDF voordat je het deelt.",
    longDescription: [
      "PDF-metadata verwijderen wist de documenteigenschappen en verborgen gegevens die een PDF met zich meedraagt — auteur, titel, onderwerp, trefwoorden, de software die is gebruikt om het te maken, aanmaakdata en ingesloten XMP-metadatapakketten.",
      "Het is een snelle privacystap voordat je een bestand publiek deelt. Paginainhoud blijft onaangetast, en het opschonen gebeurt in je browser, dus je bestand wordt nooit geüpload.",
    ],
    faq: [
      { question: "Welke informatie wordt verwijderd?", answer: "Titel, auteur, onderwerp, trefwoorden, maker- en producentensoftware, aanmaak- en wijzigingsdata, ingesloten XMP-metadata, en applicatie-privégegevens." },
      { question: "Verandert dit hoe het document eruitziet?", answer: "Nee. Alleen verborgen eigenschappen worden verwijderd; elke pagina ziet er precies hetzelfde uit." },
      { question: "Verwijdert dit persoonlijke informatie die op de pagina's is afgedrukt?", answer: "Nee. Het verwijdert alleen metadata. Namen of details die op de pagina's zijn afgedrukt blijven zichtbaar." },
      { question: "Wordt mijn PDF geüpload?", answer: "Nee. Het bestand wordt lokaal in je browser opgeschoond." },
    ],
  },
  "pdf-info": {
    name: "PDF-info",
    actionLabel: "PDF controleren",
    shortDescription: "Bekijk in één oogopslag het aantal pagina's, paginaformaten, versie en eigenschappen van een PDF.",
    longDescription: [
      "PDF-info leest een PDF en toont wat erin zit: het aantal pagina's, de grootte van elke pagina in millimeters met papiernamen zoals A4 of Letter, de PDF-versie, of het versleuteld is of een invulbaar formulier bevat, en de titel, auteur, software en data.",
      "Handig voordat je een bestand afdrukt, indient of converteert. Het document wordt alleen gelezen — nooit gewijzigd — en alles gebeurt in je browser, dus het wordt nooit geüpload.",
    ],
    faq: [
      { question: "Welke details toont PDF-info?", answer: "Aantal pagina's, paginaformaten met papiernamen, PDF-versie, bestandsgrootte, versleuteling, invulbare formulieren, snelle webweergave, en documenteigenschappen zoals titel, auteur en aanmaakdatum." },
      { question: "Wijzigt PDF-info mijn bestand?", answer: "Nee. De PDF wordt alleen gelezen; niets wordt aangepast of opgeslagen." },
      { question: "Kan ik een met wachtwoord beveiligde PDF controleren?", answer: "Bestanden die een wachtwoord nodig hebben om te openen, kunnen niet zonder dat worden gelezen. Bestanden met alleen bewerkingsbeperkingen worden weergegeven als versleuteld." },
      { question: "Wordt mijn PDF geüpload?", answer: "Nee. Het wordt lokaal in je browser gelezen." },
    ],
  },
  "resize-image": {
    name: "Afbeeldingsformaat wijzigen",
    actionLabel: "Formaat afbeeldingen wijzigen",
    shortDescription: "Wijzig breedte en hoogte van JPG-, PNG- en WEBP-afbeeldingen — in percentage of exacte pixels.",
    longDescription: [
      "Afbeeldingsformaat wijzigen verandert de afmetingen van je foto's en grafieken. Schaal op percentage, of typ een exacte breedte en hoogte met vergrendelde beeldverhouding zodat niets uitgerekt lijkt. Wijzig het formaat van meerdere afbeeldingen tegelijk en download ze samen in een .zip.",
      "Afbeeldingen behouden hun oorspronkelijke formaat, en hoogwaardige gladstrijking houdt verkleinde afbeeldingen scherp. Alles gebeurt in je browser, dus je afbeeldingen worden nooit geüpload.",
    ],
    faq: [
      { question: "Wordt mijn afbeelding wazig door het formaat te wijzigen?", answer: "Een afbeelding verkleinen houdt hem scherp. Vergroten voorbij het oorspronkelijke formaat kan geen detail toevoegen, dus grote vergrotingen kunnen zacht lijken." },
      { question: "Kan ik het formaat van meerdere afbeeldingen tegelijk wijzigen?", answer: "Ja. Voeg tot 20 afbeeldingen toe; met vergrendelde beeldverhouding behoudt elke afbeelding zijn eigen proporties bij de breedte die je instelt." },
      { question: "Welk formaat krijgt de aangepaste afbeelding?", answer: "Hetzelfde als het origineel — JPG blijft JPG, PNG blijft PNG, en WEBP blijft WEBP waar je browser het ondersteunt." },
      { question: "Worden mijn afbeeldingen geüpload?", answer: "Nee. Formaat wijzigen gebeurt lokaal in je browser." },
    ],
  },
  "crop-image": {
    name: "Afbeelding bijsnijden",
    actionLabel: "Afbeelding bijsnijden",
    shortDescription: "Snij een afbeelding bij tot het gewenste gebied met een versleepbaar bijsnijdkader.",
    longDescription: [
      "Afbeelding bijsnijden verwijdert ongewenste randen van een foto of screenshot. Sleep het bijsnijdkader of de hoeken ervan over de preview — of verfijn elke rand met een schuifregelaar — en zie de exacte grootte van het resultaat in pixels.",
      "De bijgesneden afbeelding behoudt zijn oorspronkelijke formaat en kwaliteit, en het hele proces gebeurt in je browser, dus je afbeelding wordt nooit geüpload.",
    ],
    faq: [
      { question: "Kan ik bijsnijden tot exacte afmetingen?", answer: "Pas elke rand aan met de schuifregelaars en bekijk hoe de resultaatgrootte in pixels wordt bijgewerkt terwijl je bezig bent." },
      { question: "Vermindert bijsnijden de afbeeldingskwaliteit?", answer: "Nee. De pixels die je behoudt worden ongewijzigd gekopieerd; alleen de delen buiten het kader worden verwijderd." },
      { question: "Welke formaten kan ik bijsnijden?", answer: "JPG, PNG en WEBP. Het resultaat behoudt hetzelfde formaat als het origineel." },
      { question: "Wordt mijn afbeelding geüpload?", answer: "Nee. Bijsnijden gebeurt lokaal in je browser." },
    ],
  },
  "flip-image": {
    name: "Afbeelding spiegelen",
    actionLabel: "Afbeeldingen spiegelen",
    shortDescription: "Spiegel afbeeldingen horizontaal of verticaal — één tegelijk of in bulk.",
    longDescription: [
      "Afbeelding spiegelen creëert een spiegelbeeld van je foto's: van links naar rechts, of van boven naar onder. Handig om selfies gemaakt met de frontcamera te corrigeren, reflecties te maken, of ontwerpen voor te bereiden voor druktransfers.",
      "Spiegel meerdere afbeeldingen tegelijk, bekijk het resultaat direct in de preview, en download ze in hun oorspronkelijke formaat. Alles gebeurt in je browser, dus je afbeeldingen worden nooit geüpload.",
    ],
    faq: [
      { question: "Wat is het verschil tussen spiegelen en draaien?", answer: "Draaien draait een afbeelding in stappen van 90°. Spiegelen weerspiegelt het, zoals kijken in een spiegel." },
      { question: "Kan ik meerdere afbeeldingen tegelijk spiegelen?", answer: "Ja. Voeg tot 20 afbeeldingen toe en ze worden allemaal op dezelfde manier gespiegeld, daarna samen gedownload als een .zip." },
      { question: "Vermindert spiegelen de kwaliteit?", answer: "Geen merkbaar verlies — PNG blijft verliesvrij, en JPG en WEBP worden in hoge kwaliteit opgeslagen." },
      { question: "Worden mijn afbeeldingen geüpload?", answer: "Nee. Spiegelen gebeurt lokaal in je browser." },
    ],
  },
  "png-to-jpg": {
    name: "PNG naar JPG",
    actionLabel: "Omzetten naar JPG",
    shortDescription: "Zet PNG-afbeeldingen om naar JPG voor kleinere en breder compatibele bestanden.",
    longDescription: [
      "PNG naar JPG zet je PNG-afbeeldingen om naar JPG-bestanden, meestal veel kleiner — ideaal voor foto's, e-mailbijlagen en uploadformulieren die alleen JPG accepteren. Converteer meerdere afbeeldingen tegelijk en pas de kwaliteit aan om grootte en scherpte af te wegen.",
      "JPG ondersteunt geen transparantie, dus transparante gebieden worden gevuld met wit. De omzetting gebeurt volledig in je browser, dus je afbeeldingen worden nooit geüpload.",
    ],
    faq: [
      { question: "Waarom PNG naar JPG omzetten?", answer: "JPG-bestanden zijn doorgaans veel kleiner dan PNG's voor foto's en worden vrijwel overal geaccepteerd, van e-mail tot online formulieren." },
      { question: "Wat gebeurt er met transparante achtergronden?", answer: "JPG heeft geen transparantie, dus transparante gebieden worden gevuld met wit." },
      { question: "Kan ik veel PNG's tegelijk converteren?", answer: "Ja. Voeg tot 30 afbeeldingen toe; ze worden samen geconverteerd en gedownload als een .zip." },
      { question: "Worden mijn afbeeldingen geüpload?", answer: "Nee. De omzetting gebeurt lokaal in je browser." },
    ],
  },
  "jpg-to-png": {
    name: "JPG naar PNG",
    actionLabel: "Omzetten naar PNG",
    shortDescription: "Zet JPG-foto's om naar verliesvrije PNG-afbeeldingen.",
    longDescription: [
      "JPG naar PNG zet je JPG- of JPEG-afbeeldingen om naar het PNG-formaat. PNG is verliesvrij, dus de afbeelding verliest geen extra kwaliteit als je hem opnieuw bewerkt en opslaat — handig voor grafieken waar je aan blijft werken, of voor tools en platforms die PNG vereisen.",
      "Converteer meerdere afbeeldingen tegelijk en download ze samen. De omzetting gebeurt volledig in je browser, dus je afbeeldingen worden nooit geüpload.",
    ],
    faq: [
      { question: "Verbetert het omzetten van JPG naar PNG de kwaliteit?", answer: "Nee — detail dat al verloren is gegaan in de JPG kan niet worden hersteld. Maar PNG voorkomt verder verlies wanneer je opnieuw bewerkt en opslaat." },
      { question: "Waarom is de PNG groter dan de JPG?", answer: "PNG slaat elke pixel op zonder verlieslossy compressie, dus foto's worden meestal groter. Dat is de afweging voor verliesvrije kwaliteit." },
      { question: "Kan ik meerdere JPG's tegelijk converteren?", answer: "Ja. Voeg tot 30 afbeeldingen toe en download ze als een .zip." },
      { question: "Worden mijn afbeeldingen geüpload?", answer: "Nee. De omzetting gebeurt lokaal in je browser." },
    ],
  },
  "webp-to-jpg": {
    name: "WEBP naar JPG",
    actionLabel: "Omzetten naar JPG",
    shortDescription: "Zet WEBP-afbeeldingen om naar JPG zodat ze in elke app of website openen.",
    longDescription: [
      "WEBP naar JPG zet moderne WEBP-afbeeldingen — gangbaar op websites — om naar JPG, het formaat dat door vrijwel elke app, apparaat en uploadformulier wordt ondersteund. Converteer één afbeelding of veel tegelijk, en pas de kwaliteit aan om grootte en scherpte af te wegen.",
      "Transparante gebieden worden gevuld met wit, omdat JPG geen transparantie ondersteunt. De omzetting gebeurt volledig in je browser, dus je afbeeldingen worden nooit geüpload.",
    ],
    faq: [
      { question: "Waarom WEBP naar JPG omzetten?", answer: "Sommige oudere apps, editors en uploadformulieren accepteren geen WEBP. JPG werkt bijna overal." },
      { question: "Verlies ik kwaliteit?", answer: "Bij de standaardkwaliteit is het verschil moeilijk te zien. Verhoog de kwaliteitsschuif voor het scherpste resultaat." },
      { question: "Kan ik meerdere WEBP-afbeeldingen tegelijk converteren?", answer: "Ja. Voeg tot 30 afbeeldingen toe en download ze als een .zip." },
      { question: "Worden mijn afbeeldingen geüpload?", answer: "Nee. De omzetting gebeurt lokaal in je browser." },
    ],
  },
  "jpg-to-webp": {
    name: "JPG naar WEBP",
    actionLabel: "Omzetten naar WEBP",
    shortDescription: "Zet JPG-foto's om naar WEBP voor kleinere, sneller ladende afbeeldingen op het web.",
    longDescription: [
      "JPG naar WEBP zet je JPG-afbeeldingen om naar WEBP, een modern formaat dat doorgaans merkbaar kleinere bestanden oplevert bij vergelijkbare visuele kwaliteit — geweldig om websites te versnellen en opslagruimte te besparen.",
      "Pas de kwaliteit aan om de juiste balans te vinden en converteer veel afbeeldingen tegelijk. De omzetting gebeurt volledig in je browser, dus je afbeeldingen worden nooit geüpload. Het maken van WEBP-bestanden vereist een recente versie van Chrome, Edge of Firefox.",
    ],
    faq: [
      { question: "Is WEBP kleiner dan JPG?", answer: "Meestal wel — WEBP bespaart vaak aanzienlijk veel ruimte bij vergelijkbare kwaliteit, wat pagina's sneller laat laden." },
      { question: "Ondersteunen alle browsers WEBP?", answer: "Alle moderne browsers kunnen WEBP weergeven. Het maken van WEBP-bestanden hier vereist een recente versie van Chrome, Edge of Firefox." },
      { question: "Kan ik meerdere JPG's tegelijk converteren?", answer: "Ja. Voeg tot 30 afbeeldingen toe en download ze als een .zip." },
      { question: "Worden mijn afbeeldingen geüpload?", answer: "Nee. De omzetting gebeurt lokaal in je browser." },
    ],
  },
  "webp-to-png": {
    name: "WEBP naar PNG",
    actionLabel: "Omzetten naar PNG",
    shortDescription: "Zet WEBP-afbeeldingen om naar PNG met behoud van transparantie.",
    longDescription: [
      "WEBP naar PNG zet WEBP-afbeeldingen om naar PNG, het verliesvrije formaat dat door elke afbeeldingseditor wordt ondersteund. Transparantie blijft behouden, dus logo's, iconen en uitsneden behouden hun heldere achtergronden.",
      "Converteer meerdere afbeeldingen tegelijk en download ze samen. De omzetting gebeurt volledig in je browser, dus je afbeeldingen worden nooit geüpload.",
    ],
    faq: [
      { question: "Blijft de transparantie behouden?", answer: "Ja. PNG ondersteunt transparantie, dus transparante gebieden in je WEBP-afbeelding blijven transparant." },
      { question: "Waarom WEBP naar PNG omzetten?", answer: "PNG opent in elke editor en ontwerptool en verliest geen kwaliteit wanneer je hem opnieuw bewerkt en opslaat." },
      { question: "Kan ik meerdere WEBP-bestanden tegelijk converteren?", answer: "Ja. Voeg tot 30 afbeeldingen toe en download ze als een .zip." },
      { question: "Worden mijn afbeeldingen geüpload?", answer: "Nee. De omzetting gebeurt lokaal in je browser." },
    ],
  },
  "png-to-webp": {
    name: "PNG naar WEBP",
    actionLabel: "Omzetten naar WEBP",
    shortDescription: "Zet PNG-afbeeldingen om naar WEBP voor kleinere bestanden met behoud van transparantie.",
    longDescription: [
      "PNG naar WEBP zet je PNG-afbeeldingen om naar WEBP, wat bestanden meestal veel kleiner maakt terwijl transparantie behouden blijft — ideaal voor websitegrafiek, iconen en screenshots.",
      "Kies de kwaliteit, converteer veel afbeeldingen tegelijk, en download ze samen. De omzetting gebeurt volledig in je browser, dus je afbeeldingen worden nooit geüpload. Het maken van WEBP-bestanden vereist een recente versie van Chrome, Edge of Firefox.",
    ],
    faq: [
      { question: "Behoudt WEBP de transparantie?", answer: "Ja. WEBP ondersteunt transparantie, dus transparante PNG-gebieden blijven transparant." },
      { question: "Hoeveel kleiner worden mijn afbeeldingen?", answer: "Dat varieert, maar WEBP-bestanden zijn vaak aanzienlijk kleiner dan dezelfde afbeelding opgeslagen als PNG." },
      { question: "Kan ik meerdere PNG's tegelijk converteren?", answer: "Ja. Voeg tot 30 afbeeldingen toe en download ze als een .zip." },
      { question: "Worden mijn afbeeldingen geüpload?", answer: "Nee. De omzetting gebeurt lokaal in je browser." },
    ],
  },
};
