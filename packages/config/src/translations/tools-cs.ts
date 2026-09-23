import type { ToolTranslationOverride } from "./tools-ar";

export const toolsCs: Record<string, ToolTranslationOverride> = {
  "compress-pdf": {
    name: "Komprimovat PDF",
    actionLabel: "Komprimovat PDF",
    shortDescription: "Zmenšete velikost souboru PDF pro snadnější sdílení a odesílání přímo v prohlížeči.",
    longDescription: [
      "Komprimovat PDF zmenší velikost souboru překódováním vložených obrázků a odstraněním zbytečných dat, díky čemuž je dokument snazší poslat e-mailem, nahrát nebo uložit.",
      "Vyberte úroveň komprese, abyste vyvážili velikost souboru a vizuální kvalitu, a před stažením porovnejte velikost před a po kompresi.",
    ],
    faq: [
      { question: "O kolik se zmenší moje PDF?", answer: "Záleží na obsahu. Soubory PDF s velkými vloženými obrázky se obvykle zmenší nejvíce, někdy o 50-90%. Textově náročné PDF soubory se komprimují méně, protože je méně co optimalizovat." },
      { question: "Rozmaže se moje PDF kompresí?", answer: "Při výchozím nastavení je ztráta kvality minimální. Pokud zvolíte nejsilnější úroveň komprese, obrázky se zmenší agresivněji, což může snížit ostrost při přiblížení." },
      { question: "Probíhá komprese na serverech TAMPDF?", answer: "Ne. Komprimovat PDF běží lokálně ve vašem prohlížeči, takže váš soubor se nikam nenahrává." },
      { question: "Mohu komprimovat PDF chráněné heslem?", answer: "Momentálně ne. Nejprve odstraňte ochranu heslem pomocí jiného nástroje a poté soubor komprimujte." },
    ],
  },
  "pdf-to-jpg": {
    name: "PDF na JPG",
    actionLabel: "Převést na JPG",
    shortDescription: "Převeďte každou stránku PDF na kvalitní obrázek JPG.",
    longDescription: [
      "PDF na JPG převede každou stránku vašeho PDF na samostatný obrázek JPG, připravený ke sdílení, úpravám nebo vložení do prezentace. Jednostránkové PDF se stáhne jako jeden soubor JPG; vícestránkové PDF soubory se zabalí do souboru .zip.",
      "Převod probíhá přímo ve vašem prohlížeči pomocí PDF.js, takže váš dokument se nikdy nenahrává na server.",
    ],
    faq: [
      { question: "Co když má moje PDF více stránek?", answer: "Každá stránka se stane samostatným obrázkem JPG. Pokud je jich více než jedna, zabalí se do jednoho souboru .zip ke stažení." },
      { question: "Jak ostré budou obrázky?", answer: "Stránky se vykreslují ve vysokém rozlišení vhodném pro obrazovky a většinu tiskových potřeb. Vyberte úroveň kvality, abyste vyvážili ostrost a velikost souboru." },
      { question: "Nahrává se moje PDF někam?", answer: "Ne. PDF na JPG zpracovává každou stránku lokálně ve vašem prohlížeči, takže soubor nikdy neopustí vaše zařízení." },
      { question: "Mohu převést pouze jednu stránku místo celého dokumentu?", answer: "V současné době se převádějí všechny stránky. Pokud potřebujete jen jeden obrázek, nejprve extrahujte jednu stránku pomocí Sloučit PDF nebo čtečky PDF." },
    ],
  },
  "merge-pdf": {
    name: "Sloučit PDF",
    actionLabel: "Sloučit PDF soubory",
    shortDescription: "Spojte více souborů PDF do jednoho dokumentu v pořadí, které si vyberete.",
    longDescription: [
      "Sloučit PDF vám umožní spojit dva nebo více souborů PDF do jednoho dokumentu bez instalace čehokoli. Přidejte soubory, přetažením je uspořádejte a stáhněte jedno sloučené PDF.",
      "Vše běží lokálně ve vašem prohlížeči, takže soubory se nikdy nenahrávají na server. To znamená, že to funguje i s citlivými smlouvami, zprávami nebo osobními dokumenty.",
    ],
    faq: [
      { question: "Existuje limit počtu PDF souborů, které mohu sloučit?", answer: "Neexistuje žádný pevný limit. Protože slučování probíhá ve vašem prohlížeči, praktickým omezením je paměť zařízení, nikoli limit serveru." },
      { question: "Mohu před sloučením změnit pořadí stránek?", answer: "Ano. Po přidání souborů je přetáhněte do pořadí, které chcete pro konečný dokument, a poté sloučte." },
      { question: "Nahrávají se moje soubory na servery TAMPDF?", answer: "Ne. Sloučit PDF zpracovává soubory zcela ve vašem prohlížeči pomocí technologie na straně klienta, takže dokumenty nikdy neopustí vaše zařízení." },
      { question: "Ovlivní sloučení kvalitu mých PDF souborů?", answer: "Ne. Stránky se spojují beze změny, bez rekomprese, takže text, obrázky a formátování zůstávají přesně jako v originálech." },
    ],
  },
  "rotate-pdf": {
    name: "Otočit PDF",
    actionLabel: "Otočit PDF",
    shortDescription: "Otočte jednotlivé stránky nebo celé PDF o 90°, 180° nebo 270° přímo v prohlížeči.",
    longDescription: [
      "Otočit PDF vám umožní opravit stránky natočené na bok nebo vzhůru nohama během několika sekund. Nahrajte jeden nebo více souborů PDF, zobrazte náhled každé stránky a poté otočte celý dokument najednou nebo jen potřebné stránky.",
      "Vše běží lokálně ve vašem prohlížeči, takže soubory se nikdy nenahrávají na server. Nahrajte více PDF souborů najednou a každý bude otočen a vrácen nezávisle.",
    ],
    faq: [
      { question: "Mohu otočit pouze jednu stránku místo celého dokumentu?", answer: "Ano. Klikněte na tlačítko otočení u jedné stránky, aby se otočila pouze ona, nebo použijte tlačítka pro otočení všech stránek najednou stejným způsobem." },
      { question: "Jaké úhly otočení jsou podporovány?", answer: "Stránky můžete otočit o 90°, 180° nebo 270° v obou směrech." },
      { question: "Mohu otočit více než jeden PDF soubor najednou?", answer: "Ano. Nahrajte více PDF souborů a každý bude otočen nezávisle. Pokud nahrajete více než jeden soubor, otočené PDF soubory se zabalí do .zip ke stažení." },
      { question: "Nahrává se moje PDF někam?", answer: "Ne. Otočit PDF zpracovává vše lokálně ve vašem prohlížeči, takže soubory nikdy neopustí vaše zařízení." },
    ],
  },
  "compress-image": {
    name: "Komprimovat obrázek",
    actionLabel: "Komprimovat obrázky",
    shortDescription: "Zmenšete velikost souborů JPG, PNG a WebP při zachování vizuální kvality.",
    longDescription: [
      "Komprimovat obrázek zmenší velikost souboru vašich fotografií JPG, PNG nebo WebP, díky čemuž se rychleji nahrávají, posílají e-mailem a načítají na webových stránkách.",
      "Komprese probíhá zcela ve vašem prohlížeči pomocí API canvas, takže vaše fotografie nikdy neopustí vaše zařízení a můžete komprimovat více obrázků najednou.",
    ],
    faq: [
      { question: "Jaké formáty obrázků jsou podporovány?", answer: "Obrázky JPG, PNG a WebP jsou podporovány jak jako vstup, tak jako výstup." },
      { question: "Mohu komprimovat více obrázků najednou?", answer: "Ano. Přidejte tolik obrázků, kolik chcete, a každý se zkomprimuje a zabalí do jednoho souboru .zip ke stažení nebo se stáhne jednotlivě." },
      { question: "O kolik mohu zmenšit obrázek bez ztráty kvality?", answer: "Výchozí nastavení kvality obvykle sníží velikost souboru o 60-80% bez znatelného rozdílu. Můžete upravit posuvník kvality pro jiný kompromis." },
      { question: "Nahrávají se moje fotografie na server?", answer: "Ne. Komprese běží lokálně ve vašem prohlížeči pomocí API canvas, takže obrázky se nikam neodesílají." },
    ],
  },
  "image-to-pdf": {
    name: "JPG na PDF",
    actionLabel: "Převést na PDF",
    shortDescription: "Převeďte jeden nebo více obrázků JPG na jeden dokument PDF.",
    longDescription: [
      "JPG na PDF spojí vaše fotografie JPG do jednoho souboru PDF, jedna fotografie na stránku, v pořadí, které si vyberete.",
      "Ideální pro přeměnu naskenovaných dokumentů, účtenek nebo fotografií na PDF, které lze sdílet. Vše se zpracovává lokálně ve vašem prohlížeči pro úplné soukromí.",
    ],
    faq: [
      { question: "Mohu spojit více obrázků do jednoho PDF?", answer: "Ano. Přidejte více obrázků a každý se stane stránkou ve výsledném PDF, v pořadí, ve kterém je uspořádáte." },
      { question: "Jaká velikost stránky se použije pro PDF?", answer: "Každá stránka se přizpůsobí rozměrům a orientaci zdrojového obrázku, takže se nic neořízne ani nenatáhne." },
      { question: "Nahrávají se moje obrázky někam?", answer: "Ne. Převod probíhá zcela ve vašem prohlížeči, takže obrázky zůstávají na vašem zařízení." },
      { question: "Podporuje také obrázky PNG?", answer: "Ano, obrázky PNG jsou podporovány spolu s JPG. Fotografie HEIC z iPhonu zatím nejsou podporovány; nejprve je převeďte na JPG pomocí funkce sdílení telefonu." },
    ],
  },
  "rotate-images": {
    name: "Otočit obrázky",
    actionLabel: "Otočit obrázky",
    shortDescription: "Otočte jeden nebo více obrázků JPG, PNG nebo WebP o 90°, 180° nebo 270°.",
    longDescription: [
      "Otočit obrázky opraví fotografie natočené na bok nebo vzhůru nohama během několika sekund. Nahrajte jeden nebo více obrázků, otočte každý jednotlivě nebo všechny najednou a stáhněte výsledky.",
      "Vše běží lokálně ve vašem prohlížeči, takže fotografie se nikdy nenahrávají na server. Nahrajte více obrázků najednou a každý bude otočen a vrácen nezávisle.",
    ],
    faq: [
      { question: "Jaké formáty obrázků jsou podporovány?", answer: "Podporovány jsou obrázky JPG, PNG a WebP. Otočení zachovává původní formát." },
      { question: "Mohu otočit pouze jeden obrázek místo všech?", answer: "Ano. Klikněte na tlačítko otočení u jednoho obrázku, aby se otočil pouze on, nebo použijte tlačítka pro otočení všech obrázků najednou stejným způsobem." },
      { question: "Jaké úhly otočení jsou podporovány?", answer: "Obrázky můžete otočit o 90°, 180° nebo 270°." },
      { question: "Nahrávají se moje fotografie někam?", answer: "Ne. Otočit obrázky zpracovává vše lokálně ve vašem prohlížeči, takže fotografie nikdy neopustí vaše zařízení." },
    ],
  },
  "split-pdf": {
    name: "Rozdělit PDF",
    actionLabel: "Rozdělit PDF",
    shortDescription: "Rozdělte jedno PDF na několik menších souborů podle rozsahů stránek nebo na pevné části.",
    longDescription: [
      "Rozdělit PDF rozdělí velký dokument na samostatné soubory PDF bez změny samotných stránek. Zadejte rozsahy stránek jako 1-3, 5, 8-10 a extrahujte přesně ty části, které potřebujete, nebo rozdělte celý dokument na stejně velké části s pevným počtem stránek.",
      "Vše se odehrává ve vašem prohlížeči — vaše PDF se nikdy nenahrává na server. Jeden výsledek se stáhne jako jedno PDF; více částí se zabalí do .zip.",
    ],
    faq: [
      { question: "Jak vyberu, které stránky půjdou do kterého souboru?", answer: "Použijte pole rozsahů: něco jako „1-3, 5, 8-10“ vytvoří tři PDF soubory — stránky 1 až 3, samotnou stránku 5 a stránky 8 až 10. Nebo přepněte na „každou N-tou stránku“ a rozřežte dokument na stejné části." },
      { question: "Zachovají si rozdělené soubory původní kvalitu?", answer: "Ano. Stránky se kopírují beze změny, bez rekomprese, takže text, obrázky, písma a rozvržení jsou totožné se zdrojem." },
      { question: "Nahrává se moje PDF někam?", answer: "Ne. Rozdělení probíhá zcela ve vašem prohlížeči, takže dokument nikdy neopustí vaše zařízení." },
      { question: "Co se stane s poli formuláře nebo digitálními podpisy?", answer: "Obsah stránky a widgety formuláře se zachovají vizuálně, ale interaktivní chování formuláře a podpisy se do rozdělených souborů nepřenesou. V případě potřeby je zploštěte nebo znovu podepište." },
    ],
  },
  "delete-pdf-pages": {
    name: "Odstranit stránky PDF",
    actionLabel: "Odstranit stránky",
    shortDescription: "Odeberte nepotřebné stránky z PDF a stáhněte si vyčištěný dokument.",
    longDescription: [
      "Odstranit stránky PDF vám umožní zahodit nepotřebné stránky — prázdné skeny, titulní stránky, duplicitní stránky — a zachovat zbytek v původním pořadí. Zobrazte náhled každé stránky, klepněte na ty, které chcete odstranit, a stáhněte výsledek.",
      "Celý proces probíhá lokálně ve vašem prohlížeči, takže vaše PDF se nikdy nenahrává. Zbývající stránky se kopírují bez rekomprese, takže nic neztrácí na kvalitě.",
    ],
    faq: [
      { question: "Mohu odstranit více než jednu stránku najednou?", answer: "Ano. V mřížce náhledů vyberte libovolný počet stránek a odstraňte je všechny v jednom kroku." },
      { question: "Mohu odstranit všechny stránky?", answer: "Ne — musí zůstat alespoň jedna stránka, takže pokud vyberete všechny, tlačítko se deaktivuje." },
      { question: "Sníží odstranění stránek velikost souboru?", answer: "Obvykle mírně, protože obsah odstraněných stránek se zahodí. Sdílené prostředky, jako jsou písma, mohou zůstat, takže pokud na velikosti záleží, použijte poté Komprimovat PDF." },
      { question: "Nahrávají se moje soubory na server?", answer: "Ne. Vše probíhá ve vašem prohlížeči a vaše PDF nikdy neopustí vaše zařízení." },
    ],
  },
  "reorder-pdf-pages": {
    name: "Změnit pořadí stránek PDF",
    actionLabel: "Změnit pořadí stránek",
    shortDescription: "Přetáhněte stránky PDF a změňte jejich pořadí, poté uložte upravený dokument.",
    longDescription: [
      "Změnit pořadí stránek PDF zobrazí náhled každé stránky, který můžete přetáhnout do požadovaného pořadí — přesunout stránku na začátek, prohodit dvě sekce nebo obrátit celý dokument. K dispozici jsou také tlačítka pro přesun pro přesné změny po jedné stránce.",
      "Změna pořadí probíhá zcela ve vašem prohlížeči, takže vaše PDF se nikdy nenahrává. Stránky se kopírují beze změny, takže kvalita a formátování zůstávají zachovány.",
    ],
    faq: [
      { question: "Jak přesunu stránku?", answer: "Přetáhněte její náhled na nové místo nebo použijte tlačítka nahoru/dolů u každé stránky pro jednotlivé kroky. Nové pořadí se uloží po kliknutí na tlačítko." },
      { question: "Mohu obrátit celý dokument?", answer: "Ano — přetáhněte stránky v opačném pořadí nebo použijte tlačítka pro přesun. Libovolný počet stránek lze změnit v jednom kroku." },
      { question: "Změní změna pořadí obsah stránek?", answer: "Ne. Mění se pouze pořadí stránek — text, obrázky a rozvržení každé stránky zůstávají přesně stejné." },
      { question: "Nahrává se PDF někam?", answer: "Ne. Změna pořadí běží lokálně ve vašem prohlížeči a soubor nikdy neopustí vaše zařízení." },
    ],
  },
  "crop-pdf": {
    name: "Oříznout PDF",
    actionLabel: "Oříznout PDF",
    shortDescription: "Oříznete okraje každé stránky PDF nastavením hodnot shora, zdola a ze stran.",
    longDescription: [
      "Oříznout PDF odstraní zbytečné bílé místo nebo okraje skenování z hran stránek. Nastavte, kolik se má oříznout shora, zdola, zleva a zprava v procentech, sledujte živý náhled a použijte na všechny stránky najednou.",
      "Oříznutí upraví viditelnou oblast stránky bez odstranění jakéhokoli obsahu — oříznuté části se pouze skryjí. Vše se odehrává ve vašem prohlížeči, takže vaše PDF se nikdy nenahrává.",
    ],
    faq: [
      { question: "Odstraní oříznutí obsah mimo oříznutou oblast?", answer: "Ne. Oříznout PDF změní ořezový rámeček stránky, který skryje vnější oblast v prohlížečích a při tisku. Podkladový obsah je stále v souboru a lze jej obnovit." },
      { question: "Použije se stejné oříznutí na všechny stránky?", answer: "Ano. Okraje, které nastavíte, se použijí na všechny stránky. Stránky různých velikostí se oříznou o stejné procento." },
      { question: "Mohu oříznout naskenovaný dokument a odstranit černý rámeček?", answer: "Ano — to je běžný případ použití. Zvětšujte okraje, dokud náhled nezobrazí pouze obsah, který chcete zachovat." },
      { question: "Nahrává se můj soubor na server?", answer: "Ne. Oříznutí probíhá zcela ve vašem prohlížeči a vaše PDF zůstává na vašem zařízení." },
    ],
  },
  "resize-pdf": {
    name: "Změnit velikost PDF",
    actionLabel: "Změnit velikost",
    shortDescription: "Změňte velikost stránek PDF na A4, Letter nebo vlastní měřítko s obsahem přizpůsobeným a vystředěným.",
    longDescription: [
      "Změnit velikost PDF změní fyzickou velikost stránky vašeho dokumentu. Vyberte standardní velikost, jako je A4 nebo US Letter, a každá stránka se přizpůsobí a vystředí, nebo použijte procento pro proporcionální zmenšení či zvětšení stránek.",
      "Změna velikosti probíhá ve vašem prohlížeči bez nahrávání. Obsah se škáluje spolu se stránkou, takže se nic neoseká a rozvržení zůstává proporcionální.",
    ],
    faq: [
      { question: "Jaké velikosti stránek si mohu vybrat?", answer: "A4 a US Letter na výšku nebo na šířku, plus A3 a A5. Můžete také zadat procento měřítka pro změnu velikosti beze změny proporcí." },
      { question: "Bude můj obsah natažen?", answer: "Ne. Obsah se škáluje rovnoměrně, aby se přizpůsobil nové velikosti a vystředil se na stránce, takže proporce zůstávají zachovány a nic se neořízne." },
      { question: "Mohu to použít ke zmenšení velikosti souboru PDF?", answer: "Ne přímo — tím se mění rozměry stránky, nikoli váha souboru. Pro zmenšení velikosti souboru použijte Komprimovat PDF." },
      { question: "Nahrávají se moje soubory někam?", answer: "Ne. Změna velikosti probíhá lokálně ve vašem prohlížeči a vaše PDF nikdy neopustí vaše zařízení." },
    ],
  },
  "png-to-pdf": {
    name: "PNG na PDF",
    actionLabel: "Převést na PDF",
    shortDescription: "Převeďte jeden nebo více obrázků PNG na jeden dokument PDF, jeden obrázek na stránku.",
    longDescription: [
      "PNG na PDF spojí obrázky PNG do jednoho souboru PDF, přičemž každý obrázek je na vlastní stránce v původním rozlišení. Přidejte více obrázků, uspořádejte jejich pořadí a stáhněte jeden dokument.",
      "Skvělé pro přeměnu snímků obrazovky, diagramů nebo exportované grafiky na PDF, které lze sdílet. Převod probíhá zcela ve vašem prohlížeči, takže obrázky se nikdy nenahrávají. Průhledné oblasti se umístí na bílé pozadí.",
    ],
    faq: [
      { question: "Mohu spojit více souborů PNG do jednoho PDF?", answer: "Ano. Přidejte libovolný počet obrázků PNG a každý se stane stránkou ve výsledném PDF, v pořadí, ve kterém je uspořádáte." },
      { question: "Jaká velikost stránky se použije?", answer: "Každá stránka odpovídá rozměrům zdrojového obrázku v pixelech, takže se obrázky neořezávají ani nenatahují." },
      { question: "Co se stane s průhlednými částmi obrázku?", answer: "Průhlednost se sloučí do bílého pozadí, aby stránka vypadala stejně ve všech prohlížečích PDF." },
      { question: "Nahrávají se moje obrázky na server?", answer: "Ne. Převod probíhá zcela ve vašem prohlížeči a obrázky zůstávají na vašem zařízení." },
    ],
  },
  "extract-pdf-pages": {
    name: "Extrahovat stránky PDF",
    actionLabel: "Extrahovat stránky",
    shortDescription: "Extrahujte vybrané stránky z PDF do nového souboru — nebo uložte každou stránku jako vlastní PDF.",
    longDescription: [
      "Extrahovat stránky PDF vám umožní vybrat přesně stránky, které potřebujete z dokumentu, a uložit je jako nové PDF. Zobrazte náhled každé stránky, klepněte na ty, které chcete zachovat, a stáhněte je společně — nebo jako samostatné jednostránkové PDF soubory v ZIPu.",
      "Váš původní soubor zůstává nezměněn a stránky se kopírují beze změny, takže text, obrázky a formátování zůstávají zachovány. Vše se odehrává ve vašem prohlížeči, takže vaše PDF se nikdy nenahrává.",
    ],
    faq: [
      { question: "Jaký je rozdíl mezi extrakcí a rozdělením?", answer: "Extrakce uloží do nového PDF pouze vybrané stránky. Rozdělení rozdělí celý dokument na několik částí podle rozsahů stránek nebo pevných velikostí." },
      { question: "Mohu uložit každou extrahovanou stránku jako vlastní soubor?", answer: "Ano. Vyberte „Samostatné PDF soubory“ a každá vybraná stránka se stane vlastním PDF, zabaleným do jednoho stažení .zip." },
      { question: "Ztratí extrahované stránky kvalitu?", answer: "Ne. Stránky se kopírují bez rekomprese, takže vypadají přesně jako originál. Interaktivní pole formuláře se mohou stát běžným obsahem stránky." },
      { question: "Nahrává se moje PDF na server?", answer: "Ne. Stránky se extrahují lokálně ve vašem prohlížeči a soubor nikdy neopustí vaše zařízení." },
    ],
  },
  "add-page-numbers": {
    name: "Přidat čísla stránek",
    actionLabel: "Přidat čísla stránek",
    shortDescription: "Očíslujte stránky PDF s pozicí, formátem a počátečním číslem, které zvolíte.",
    longDescription: [
      "Přidat čísla stránek umístí číslo na každou stránku vašeho PDF. Vyberte si jednu ze šesti pozic, styl jako „1“, „1 / 10“ nebo „Strana 1 z 10“, nastavte počáteční číslo a volitelně přeskočte titulní stránku.",
      "Čísla se kreslí jako skutečný text ve standardním písmu, takže se tisknou ostře a zůstávají vzpřímená i na otočených stránkách. Celý proces probíhá ve vašem prohlížeči — váš dokument se nikdy nenahrává.",
    ],
    faq: [
      { question: "Mohu začít číslování jiným číslem než 1?", answer: "Ano. Nastavte libovolné počáteční číslo — užitečné, pokud je vaše PDF kapitolou nebo přílohou většího dokumentu." },
      { question: "Mohu nechat titulní stránku bez čísla?", answer: "Ano. Zapněte „Nečíslovat první stránku“ a číslování začne od druhé stránky." },
      { question: "Jaké číslice se používají?", answer: "Standardní číslice (1, 2, 3), které se správně zobrazují v jakékoli čtečce PDF. Popisky jako „Strana 1 z 10“ jsou psány česky." },
      { question: "Nahrává se můj soubor?", answer: "Ne. Čísla stránek se přidávají lokálně ve vašem prohlížeči a vaše PDF zůstává na vašem zařízení." },
    ],
  },
  "add-watermark": {
    name: "Přidat vodoznak",
    actionLabel: "Přidat vodoznak",
    shortDescription: "Umístěte text, jako DŮVĚRNÉ nebo NÁVRH, na každou stránku PDF.",
    longDescription: [
      "Přidat vodoznak umístí váš text na každou stránku PDF — jednou uprostřed nebo opakovaně po celé stránce. Vyberte barvu, průhlednost, velikost a úhel a před použitím si prohlédněte živý náhled na první stránce.",
      "Čeština a další písma jsou plně podporována. Vodoznak se uloží jako standardní objekt vodoznaku a vše se odehrává ve vašem prohlížeči, takže váš dokument se nikdy nenahrává.",
    ],
    faq: [
      { question: "Mohu napsat vodoznak česky?", answer: "Ano. Text se vykresluje pomocí písem vašeho prohlížeče, takže čeština a další písma se zobrazují správně." },
      { question: "Může se vodoznak opakovat po celé stránce?", answer: "Ano. Vyberte rozvržení „Opakovaně“ a text se rozmístí po celé stránce dlaždicově, nebo „Jednou, uprostřed“ pro jediné razítko." },
      { question: "Lze vodoznak později odstranit?", answer: "Ukládá se jako standardní objekt vodoznaku, takže nástroje rozpoznávající vodoznaky — včetně vlastního nástroje TAMPDF Odstranit vodoznak — jej mohou odstranit. Nejedná se o bezpečnostní funkci." },
      { question: "Nahrává se moje PDF někam?", answer: "Ne. Vodoznak se aplikuje lokálně ve vašem prohlížeči." },
    ],
  },
  "remove-watermark": {
    name: "Odstranit vodoznak",
    actionLabel: "Odstranit vodoznak",
    shortDescription: "Odstraňte vodoznaky přidané jako objekty vodoznaku v PDF.",
    longDescription: [
      "Odstranit vodoznak najde a odstraní vodoznaky přidané jako objekty vodoznaku — typ vytvářený Adobe Acrobat, TAMPDF a většinou editorů PDF — spolu s poznámkami vodoznaku a vrstvami nazvanými „Watermark“. Zbytek každé stránky zůstává přesně stejný.",
      "Vodoznaky, které jsou součástí naskenovaného obrázku nebo sloučené s běžným textem stránky, nemají žádný marker, který by je odlišoval od skutečného obsahu, takže je nelze odstranit automaticky. Odstraňujte vodoznaky pouze z dokumentů, které máte právo upravovat. Zpracování probíhá ve vašem prohlížeči, takže soubor se nikdy nenahrává.",
    ],
    faq: [
      { question: "Jaké vodoznaky lze odstranit?", answer: "Vodoznaky přidané jako objekty vodoznaku, poznámky vodoznaku nebo vrstvy nazvané „Watermark“ — včetně těch vytvořených Adobe Acrobat a vlastním nástrojem TAMPDF Přidat vodoznak." },
      { question: "Proč nebyl vodoznak z mého souboru odstraněn?", answer: "Pokud je vodoznak součástí naskenovaného obrázku stránky nebo byl sloučen do textu stránky, nelze jej oddělit od skutečného obsahu, aniž by se stránka poškodila." },
      { question: "Ovlivní odstranění vodoznaku zbytek stránky?", answer: "Ne. Odstraní se pouze označený obsah vodoznaku; text, obrázky a rozvržení zůstávají zachovány." },
      { question: "Nahrává se můj soubor?", answer: "Ne. PDF se zpracovává lokálně ve vašem prohlížeči." },
    ],
  },
  "pdf-to-images": {
    name: "PDF na obrázky",
    actionLabel: "Převést na obrázky",
    shortDescription: "Převeďte každou stránku PDF na obrázky PNG, JPG nebo WEBP, stažené jako ZIP.",
    longDescription: [
      "PDF na obrázky vykreslí každou stránku vašeho PDF jako samostatný obrázek ve formátu, který zvolíte: PNG pro nejostřejší text, JPG pro nejmenší soubory nebo WEBP pro moderní kompaktní obrázky. Vyberte rozlišení a každá stránka se exportuje a zabalí do jednoho souboru .zip.",
      "Vykreslování probíhá přímo ve vašem prohlížeči pomocí PDF.js, takže váš dokument se nikdy nenahrává na server.",
    ],
    faq: [
      { question: "Jaký formát obrázku bych měl zvolit?", answer: "PNG udrží text a čárovou grafiku dokonale ostré. JPG vytváří menší soubory a hodí se pro fotografie. WEBP nabízí dobrou rovnováhu pro webové použití." },
      { question: "Jaké je rozlišení obrázků?", answer: "Standardní vykresluje při 108 dpi, Vysoké při 144 dpi a Maximální při 216 dpi — dostatečně vysoké pro tisk většiny dokumentů." },
      { question: "Jak získám všechny stránky najednou?", answer: "Každá stránka se převede a zabalí do jednoho souboru .zip. Jednostránkové PDF se stáhne jako jediný obrázek." },
      { question: "Nahrává se moje PDF?", answer: "Ne. Stránky se vykreslují lokálně ve vašem prohlížeči." },
    ],
  },
  "images-to-pdf": {
    name: "Obrázky na PDF",
    actionLabel: "Vytvořit PDF",
    shortDescription: "Spojte obrázky JPG, PNG a WEBP do jednoho PDF v pořadí, které si vyberete.",
    longDescription: [
      "Obrázky na PDF přemění sbírku fotografií, skenů nebo snímků obrazovky na jeden dokument PDF. Přidejte obrázky JPG, PNG nebo WEBP, přetáhněte náhledy do požadovaného pořadí a vyberte stránku A4 nebo Letter (s automatickou orientací) nebo stránky přizpůsobené každému obrázku.",
      "Přidejte okraj pro čistý vzhled při tisku. Průhledné oblasti se umístí na bílé pozadí a celý převod probíhá ve vašem prohlížeči, takže obrázky se nikdy nenahrávají.",
    ],
    faq: [
      { question: "Mohu změnit pořadí obrázků?", answer: "Ano. Přetáhněte náhledy nebo použijte tlačítka se šipkami k nastavení pořadí stránek před vytvořením PDF." },
      { question: "Jaké formáty obrázků jsou podporovány?", answer: "JPG, PNG a WEBP. Formáty můžete kombinovat ve stejném PDF." },
      { question: "Jakou velikost stránky bude PDF používat?", answer: "Vyberte A4 nebo Letter — každý obrázek se přizpůsobí stránce a v případě potřeby otočí na šířku — nebo „Přizpůsobit obrázku“, aby každá stránka měla přesně velikost svého obrázku." },
      { question: "Nahrávají se moje obrázky?", answer: "Ne. PDF se vytváří lokálně ve vašem prohlížeči." },
    ],
  },
  "flip-pdf": {
    name: "Převrátit PDF",
    actionLabel: "Převrátit PDF",
    shortDescription: "Převraťte stránky PDF vodorovně nebo svisle.",
    longDescription: [
      "Převrátit PDF zrcadlí každou stránku vašeho dokumentu — zleva doprava nebo shora dolů. Užitečné pro tisk termotransferů, opravu skenů pořízených ze špatné strany nebo přípravu zrcadlové grafiky.",
      "Před použitím si prohlédněte výsledek na první stránce. Převrácení bere v úvahu i otočené stránky a vše se odehrává ve vašem prohlížeči, takže soubor se nikdy nenahrává.",
    ],
    faq: [
      { question: "Jaký je rozdíl mezi převrácením a otočením?", answer: "Otočení otočí stránku po krocích 90°. Převrácení vytvoří zrcadlový obraz, takže se text čte pozpátku — to je to, co potřebujete pro termotransfery a některé tiskařské práce." },
      { question: "Mohu převrátit pouze jednu stránku?", answer: "Převrácení se použije na všechny stránky. Pro převrácení jedné stránky ji nejprve extrahujte pomocí Extrahovat stránky PDF." },
      { question: "Sníží převrácení kvalitu?", answer: "Ne. Stránky se transformují, nikoli znovu vykreslují, takže text a grafika zůstávají stejně ostré jako originál." },
      { question: "Nahrává se moje PDF?", answer: "Ne. Převrácení probíhá lokálně ve vašem prohlížeči." },
    ],
  },
  "edit-pdf-metadata": {
    name: "Upravit metadata PDF",
    actionLabel: "Upravit metadata",
    shortDescription: "Změňte název, autora, předmět a klíčová slova PDF.",
    longDescription: [
      "Upravit metadata PDF vám umožní zobrazit a změnit vlastnosti dokumentu uložené uvnitř PDF — název, autora, předmět, klíčová slova, tvůrce a producenta. Právě tyto informace zobrazují čtečky PDF, vyhledávače a správci souborů o vašem dokumentu.",
      "Ponechte pole prázdné, chcete-li jej odstranit. Obsah stránky není ovlivněn a veškeré úpravy probíhají ve vašem prohlížeči, takže soubor se nikdy nenahrává.",
    ],
    faq: [
      { question: "Proč upravovat metadata PDF?", answer: "Jasný název a autor usnadňují vyhledávání dokumentů a při sdílení působí profesionálněji, a vyhledávače je mohou využít při indexování PDF souborů." },
      { question: "Změní úprava metadat obsah dokumentu?", answer: "Ne. Mění se pouze vlastnosti dokumentu; stránky, text a obrázky zůstávají přesně stejné." },
      { question: "Jak odstraním vlastnost?", answer: "Vymažte pole a uložte. Prázdná pole se ze souboru odstraní." },
      { question: "Nahrává se moje PDF?", answer: "Ne. Vlastnosti se upravují lokálně ve vašem prohlížeči." },
    ],
  },
  "remove-pdf-metadata": {
    name: "Odstranit metadata PDF",
    actionLabel: "Odstranit metadata",
    shortDescription: "Odstraňte autora, název, software a další skryté vlastnosti z PDF před jeho sdílením.",
    longDescription: [
      "Odstranit metadata PDF vyčistí vlastnosti dokumentu a skrytá data, která PDF nese — autora, název, předmět, klíčová slova, software použitý k jeho vytvoření, data vytvoření a vložené balíčky metadat XMP.",
      "Je to rychlý krok k ochraně soukromí před veřejným sdílením souboru. Obsah stránky zůstává nedotčen a čištění probíhá ve vašem prohlížeči, takže soubor se nikdy nenahrává.",
    ],
    faq: [
      { question: "Jaké informace se odstraní?", answer: "Název, autor, předmět, klíčová slova, software tvůrce a producenta, data vytvoření a úprav, vložená metadata XMP a soukromá data aplikace." },
      { question: "Změní se tím vzhled dokumentu?", answer: "Ne. Odstraní se pouze skryté vlastnosti; každá stránka vypadá naprosto stejně." },
      { question: "Odstraní to osobní údaje vytištěné na stránkách?", answer: "Ne. Odstraňuje pouze metadata. Jména nebo podrobnosti vytištěné na stránkách zůstávají viditelné." },
      { question: "Nahrává se moje PDF?", answer: "Ne. Soubor se čistí lokálně ve vašem prohlížeči." },
    ],
  },
  "pdf-info": {
    name: "Informace o PDF",
    actionLabel: "Zkontrolovat PDF",
    shortDescription: "Zobrazte počet stránek, jejich velikosti, verzi a vlastnosti PDF na první pohled.",
    longDescription: [
      "Informace o PDF přečte soubor PDF a ukáže, co obsahuje: počet stránek, velikost každé stránky v milimetrech s názvy papíru jako A4 nebo Letter, verzi PDF, zda je šifrován nebo obsahuje vyplnitelný formulář, a také název, autora, software a data.",
      "Užitečné před tiskem, nahráváním nebo převodem souboru. Dokument se pouze čte — nikdy se nemění — a vše se odehrává ve vašem prohlížeči, takže se nikdy nenahrává.",
    ],
    faq: [
      { question: "Jaké podrobnosti zobrazuje Informace o PDF?", answer: "Počet stránek, velikosti stránek s názvy papíru, verzi PDF, velikost souboru, šifrování, vyplnitelné formuláře, rychlé webové zobrazení a vlastnosti dokumentu jako název, autor a datum vytvoření." },
      { question: "Změní Informace o PDF můj soubor?", answer: "Ne. PDF se pouze čte; nic se nemění ani znovu neukládá." },
      { question: "Mohu zkontrolovat PDF chráněné heslem?", answer: "Soubory vyžadující heslo pro otevření nelze bez něj číst. Soubory pouze s omezeními úprav se zobrazují jako šifrované." },
      { question: "Nahrává se moje PDF?", answer: "Ne. Čte se lokálně ve vašem prohlížeči." },
    ],
  },
  "resize-image": {
    name: "Změnit velikost obrázku",
    actionLabel: "Změnit velikost obrázků",
    shortDescription: "Změňte šířku a výšku obrázků JPG, PNG a WEBP — v procentech nebo přesných pixelech.",
    longDescription: [
      "Změnit velikost obrázku mění rozměry vašich fotografií a grafiky. Škálujte v procentech nebo zadejte přesnou šířku a výšku se zamčeným poměrem stran, aby nic nevypadalo natažené. Změňte velikost více obrázků najednou a stáhněte je společně v .zip.",
      "Obrázky si zachovávají svůj původní formát a vysoce kvalitní vyhlazování udržuje zmenšené obrázky ostré. Vše se odehrává ve vašem prohlížeči, takže obrázky se nikdy nenahrávají.",
    ],
    faq: [
      { question: "Rozmaže se můj obrázek při změně velikosti?", answer: "Zmenšení obrázku zachovává jeho ostrost. Zvětšení nad původní velikost nemůže přidat detaily, takže velká zvětšení mohou vypadat rozmazaně." },
      { question: "Mohu změnit velikost více obrázků najednou?", answer: "Ano. Přidejte až 20 obrázků; se zamčeným poměrem stran si každý zachová své vlastní proporce při šířce, kterou nastavíte." },
      { question: "V jakém formátu bude obrázek se změněnou velikostí?", answer: "Stejný jako originál — JPG zůstane JPG, PNG zůstane PNG a WEBP zůstane WEBP tam, kde to váš prohlížeč podporuje." },
      { question: "Nahrávají se moje obrázky?", answer: "Ne. Změna velikosti probíhá lokálně ve vašem prohlížeči." },
    ],
  },
  "crop-image": {
    name: "Oříznout obrázek",
    actionLabel: "Oříznout obrázek",
    shortDescription: "Ořízněte obrázek na požadovanou oblast pomocí ořezového rámečku, který lze přetáhnout.",
    longDescription: [
      "Oříznout obrázek odstraní zbytečné okraje z fotografie nebo snímku obrazovky. Přetáhněte ořezový rámeček nebo jeho rohy přes náhled — nebo jemně doladíte každou hranu posuvníkem — a uvidíte přesnou velikost výsledku v pixelech.",
      "Oříznutý obrázek si zachovává původní formát a kvalitu a celý proces probíhá ve vašem prohlížeči, takže se obrázek nikdy nenahrává.",
    ],
    faq: [
      { question: "Mohu oříznout na přesné rozměry?", answer: "Upravte každou hranu pomocí posuvníků a sledujte, jak se velikost výsledku aktualizuje v pixelech." },
      { question: "Sníží oříznutí kvalitu obrázku?", answer: "Ne. Zachované pixely se kopírují beze změny; odstraní se pouze části mimo rámeček." },
      { question: "Jaké formáty mohu oříznout?", answer: "JPG, PNG a WEBP. Výsledek si zachovává stejný formát jako originál." },
      { question: "Nahrává se můj obrázek?", answer: "Ne. Oříznutí probíhá lokálně ve vašem prohlížeči." },
    ],
  },
  "flip-image": {
    name: "Převrátit obrázek",
    actionLabel: "Převrátit obrázky",
    shortDescription: "Převraťte obrázky vodorovně nebo svisle — jednotlivě nebo hromadně.",
    longDescription: [
      "Převrátit obrázek vytvoří zrcadlový obraz vašich fotografií: zleva doprava nebo shora dolů. Užitečné pro opravu selfie pořízených přední kamerou, vytváření odrazů nebo přípravu vzorů pro tisk.",
      "Převraťte více obrázků najednou, okamžitě si prohlédněte výsledek a stáhněte je v původním formátu. Vše se odehrává ve vašem prohlížeči, takže obrázky se nikdy nenahrávají.",
    ],
    faq: [
      { question: "Jaký je rozdíl mezi převrácením a otočením?", answer: "Otočení otočí obrázek po krocích 90°. Převrácení jej zrcadlí, jako byste se dívali do zrcadla." },
      { question: "Mohu převrátit více obrázků najednou?", answer: "Ano. Přidejte až 20 obrázků a všechny se převrátí stejným způsobem a poté se stáhnou společně jako .zip." },
      { question: "Sníží převrácení kvalitu?", answer: "Žádná znatelná ztráta kvality — PNG zůstává bezztrátový a JPG a WEBP se ukládají ve vysoké kvalitě." },
      { question: "Nahrávají se moje obrázky?", answer: "Ne. Převrácení probíhá lokálně ve vašem prohlížeči." },
    ],
  },
  "png-to-jpg": {
    name: "PNG na JPG",
    actionLabel: "Převést na JPG",
    shortDescription: "Převeďte obrázky PNG na JPG pro menší a kompatibilnější soubory.",
    longDescription: [
      "PNG na JPG převede vaše obrázky PNG na soubory JPG, obvykle výrazně menší — ideální pro fotografie, e-mailové přílohy a nahrávací formuláře, které přijímají pouze JPG. Převeďte více obrázků najednou a upravte kvalitu pro vyvážení velikosti a ostrosti.",
      "JPG nepodporuje průhlednost, takže průhledné oblasti se vyplní bílou barvou. Převod probíhá zcela ve vašem prohlížeči, takže obrázky se nikdy nenahrávají.",
    ],
    faq: [
      { question: "Proč převádět PNG na JPG?", answer: "Soubory JPG jsou pro fotografie obvykle mnohem menší než PNG a jsou přijímány téměř všude, od e-mailů po online formuláře." },
      { question: "Co se stane s průhledným pozadím?", answer: "JPG nemá průhlednost, takže průhledné oblasti se vyplní bílou barvou." },
      { question: "Mohu převést více souborů PNG najednou?", answer: "Ano. Přidejte až 30 obrázků; převedou se společně a stáhnou jako .zip." },
      { question: "Nahrávají se moje obrázky?", answer: "Ne. Převod probíhá lokálně ve vašem prohlížeči." },
    ],
  },
  "jpg-to-png": {
    name: "JPG na PNG",
    actionLabel: "Převést na PNG",
    shortDescription: "Převeďte fotografie JPG na obrázky PNG bez ztráty kvality.",
    longDescription: [
      "JPG na PNG převede vaše obrázky JPG nebo JPEG do formátu PNG. PNG je bezztrátový, takže obrázek při dalších úpravách a ukládání neztrácí další kvalitu — užitečné pro grafiku, na které budete dál pracovat, nebo pro nástroje a platformy vyžadující PNG.",
      "Převeďte více obrázků najednou a stáhněte je společně. Převod probíhá zcela ve vašem prohlížeči, takže obrázky se nikdy nenahrávají.",
    ],
    faq: [
      { question: "Zlepší převod JPG na PNG kvalitu?", answer: "Ne — detaily již ztracené v JPG nelze obnovit. Ale PNG zabraňuje dalším ztrátám při dalších úpravách a ukládání." },
      { question: "Proč je PNG větší než JPG?", answer: "PNG ukládá každý pixel bez ztrátové komprese, takže fotografie jsou obvykle větší. Je to kompromis pro bezztrátovou kvalitu." },
      { question: "Mohu převést více souborů JPG najednou?", answer: "Ano. Přidejte až 30 obrázků a stáhněte je jako .zip." },
      { question: "Nahrávají se moje obrázky?", answer: "Ne. Převod probíhá lokálně ve vašem prohlížeči." },
    ],
  },
  "webp-to-jpg": {
    name: "WEBP na JPG",
    actionLabel: "Převést na JPG",
    shortDescription: "Převeďte obrázky WEBP na JPG, aby se otevíraly v jakékoli aplikaci nebo na webu.",
    longDescription: [
      "WEBP na JPG převede moderní obrázky WEBP — běžné na webových stránkách — na JPG, formát podporovaný prakticky jakoukoli aplikací, zařízením a nahrávacím formulářem. Převeďte jeden obrázek nebo více najednou a upravte kvalitu pro vyvážení velikosti a ostrosti.",
      "Průhledné oblasti se vyplní bílou barvou, protože JPG nepodporuje průhlednost. Převod probíhá zcela ve vašem prohlížeči, takže obrázky se nikdy nenahrávají.",
    ],
    faq: [
      { question: "Proč převádět WEBP na JPG?", answer: "Některé starší aplikace, editory a nahrávací formuláře nepřijímají WEBP. JPG funguje téměř všude." },
      { question: "Ztratím kvalitu?", answer: "Při výchozí kvalitě je rozdíl těžko postřehnutelný. Pro nejostřejší výsledek zvyšte posuvník kvality." },
      { question: "Mohu převést více obrázků WEBP najednou?", answer: "Ano. Přidejte až 30 obrázků a stáhněte je jako .zip." },
      { question: "Nahrávají se moje obrázky?", answer: "Ne. Převod probíhá lokálně ve vašem prohlížeči." },
    ],
  },
  "jpg-to-webp": {
    name: "JPG na WEBP",
    actionLabel: "Převést na WEBP",
    shortDescription: "Převeďte fotografie JPG na WEBP pro menší a rychleji se načítající webové obrázky.",
    longDescription: [
      "JPG na WEBP převede vaše obrázky JPG na WEBP, moderní formát, který obvykle vytváří výrazně menší soubory s podobnou vizuální kvalitou — vhodné pro zrychlení webových stránek a úsporu místa na disku.",
      "Upravte kvalitu, abyste našli správnou rovnováhu, a převeďte více obrázků najednou. Převod probíhá zcela ve vašem prohlížeči, takže obrázky se nikdy nenahrávají. Vytváření souborů WEBP vyžaduje novější verzi prohlížeče Chrome, Edge nebo Firefox.",
    ],
    faq: [
      { question: "Je WEBP menší než JPG?", answer: "Obvykle ano — WEBP často ušetří značné množství místa při podobné kvalitě, což pomáhá webovým stránkám rychleji se načítat." },
      { question: "Podporují WEBP všechny prohlížeče?", answer: "Všechny moderní prohlížeče umí zobrazit WEBP. Vytváření souborů WEBP zde vyžaduje novější verzi prohlížeče Chrome, Edge nebo Firefox." },
      { question: "Mohu převést více souborů JPG najednou?", answer: "Ano. Přidejte až 30 obrázků a stáhněte je jako .zip." },
      { question: "Nahrávají se moje obrázky?", answer: "Ne. Převod probíhá lokálně ve vašem prohlížeči." },
    ],
  },
  "webp-to-png": {
    name: "WEBP na PNG",
    actionLabel: "Převést na PNG",
    shortDescription: "Převeďte obrázky WEBP na PNG a zachovejte průhlednost.",
    longDescription: [
      "WEBP na PNG převede obrázky WEBP na PNG, bezztrátový formát podporovaný každým editorem obrázků. Průhlednost je zachována, takže loga, ikony a vystřižená grafika si zachovávají svá průhledná pozadí.",
      "Převeďte více obrázků najednou a stáhněte je společně. Převod probíhá zcela ve vašem prohlížeči, takže obrázky se nikdy nenahrávají.",
    ],
    faq: [
      { question: "Zachová se průhlednost?", answer: "Ano. PNG podporuje průhlednost, takže průhledné oblasti ve vašem obrázku WEBP zůstávají průhledné." },
      { question: "Proč převádět WEBP na PNG?", answer: "PNG se otevírá v každém editoru a nástroji pro návrh a neztrácí kvalitu při dalších úpravách a ukládání." },
      { question: "Mohu převést více souborů WEBP najednou?", answer: "Ano. Přidejte až 30 obrázků a stáhněte je jako .zip." },
      { question: "Nahrávají se moje obrázky?", answer: "Ne. Převod probíhá lokálně ve vašem prohlížeči." },
    ],
  },
  "png-to-webp": {
    name: "PNG na WEBP",
    actionLabel: "Převést na WEBP",
    shortDescription: "Převeďte obrázky PNG na WEBP pro menší soubory zachovávající průhlednost.",
    longDescription: [
      "PNG na WEBP převede vaše obrázky PNG na WEBP, což obvykle výrazně zmenší soubory při zachování průhlednosti — ideální pro webovou grafiku, ikony a snímky obrazovky.",
      "Vyberte kvalitu, převeďte více obrázků najednou a stáhněte je společně. Převod probíhá zcela ve vašem prohlížeči, takže obrázky se nikdy nenahrávají. Vytváření souborů WEBP vyžaduje novější verzi prohlížeče Chrome, Edge nebo Firefox.",
    ],
    faq: [
      { question: "Zachová WEBP průhlednost?", answer: "Ano. WEBP podporuje průhlednost, takže průhledné oblasti ve vašem PNG zůstávají průhledné." },
      { question: "O kolik se zmenší moje obrázky?", answer: "To se liší, ale soubory WEBP jsou často výrazně menší než stejný obrázek uložený jako PNG." },
      { question: "Mohu převést více souborů PNG najednou?", answer: "Ano. Přidejte až 30 obrázků a stáhněte je jako .zip." },
      { question: "Nahrávají se moje obrázky?", answer: "Ne. Převod probíhá lokálně ve vašem prohlížeči." },
    ],
  },
};
