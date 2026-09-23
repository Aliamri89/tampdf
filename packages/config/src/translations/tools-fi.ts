import type { ToolTranslationOverride } from "./tools-ar";

export const toolsFi: Record<string, ToolTranslationOverride> = {
  "compress-pdf": {
    name: "Pakkaa PDF",
    actionLabel: "Pakkaa PDF",
    shortDescription: "Pienennä PDF-tiedostosi kokoa jakamisen ja lähettämisen helpottamiseksi, suoraan selaimessa.",
    longDescription: [
      "Pakkaa PDF pienentää tiedostokokoa koodaamalla upotetut kuvat uudelleen ja poistamalla tarpeetonta dataa, jolloin asiakirjaa on helpompi lähettää sähköpostitse, ladata tai tallentaa.",
      "Valitse pakkaustaso tasapainottaaksesi tiedostokokoa ja visuaalista laatua, ja vertaa kokoa ennen/jälkeen ennen lataamista.",
    ],
    faq: [
      { question: "Kuinka paljon pienempi PDF-tiedostostani tulee?", answer: "Se riippuu sisällöstä. PDF-tiedostot, joissa on suuria upotettuja kuvia, kutistuvat yleensä eniten, joskus 50-90%. Tekstipainotteiset PDF-tiedostot pakkautuvat vähemmän, koska optimoitavaa on vähemmän." },
      { question: "Muuttuuko PDF-tiedostoni sumeaksi pakkauksesta?", answer: "Oletusasetuksilla laadun heikkeneminen on minimaalista. Jos valitset voimakkaimman pakkaustason, kuvia pienennetään aggressiivisemmin, mikä voi heikentää terävyyttä lähennettäessä." },
      { question: "Tapahtuuko pakkaus TAMPDFin palvelimilla?", answer: "Ei. Pakkaa PDF toimii paikallisesti selaimessasi, joten tiedostoasi ei koskaan ladata minnekään." },
      { question: "Voinko pakata salasanasuojatun PDF-tiedoston?", answer: "Ei tällä hetkellä. Poista salasanasuojaus ensin toisella työkalulla ja pakkaa sitten tiedosto." },
    ],
  },
  "pdf-to-jpg": {
    name: "PDF JPG:ksi",
    actionLabel: "Muunna JPG:ksi",
    shortDescription: "Muunna jokainen PDF-sivu korkealaatuiseksi JPG-kuvaksi.",
    longDescription: [
      "PDF JPG:ksi muuntaa jokaisen PDF-tiedostosi sivun erilliseksi JPG-kuvaksi, joka on valmis jaettavaksi, muokattavaksi tai lisättäväksi esitykseen. Yksisivuinen PDF ladataan yhtenä JPG-tiedostona; monisivuiset PDF-tiedostot pakataan .zip-tiedostoon.",
      "Muunnos tapahtuu suoraan selaimessasi PDF.js:n avulla, joten asiakirjaasi ei koskaan ladata palvelimelle.",
    ],
    faq: [
      { question: "Entä jos PDF-tiedostossani on useita sivuja?", answer: "Jokaisesta sivusta tulee erillinen JPG-kuva. Jos niitä on useampi kuin yksi, ne pakataan yhteen .zip-tiedostoon ladattavaksi." },
      { question: "Kuinka teräviä kuvat ovat?", answer: "Sivut renderöidään korkealla resoluutiolla, joka sopii näytöille ja useimpiin tulostustarpeisiin. Valitse laatutaso tasapainottaaksesi terävyyttä ja tiedostokokoa." },
      { question: "Ladataanko PDF-tiedostoni jonnekin?", answer: "Ei. PDF JPG:ksi käsittelee jokaisen sivun paikallisesti selaimessasi, joten tiedosto ei koskaan poistu laitteeltasi." },
      { question: "Voinko muuntaa vain yhden sivun koko asiakirjan sijaan?", answer: "Tällä hetkellä kaikki sivut muunnetaan. Käytä Yhdistä PDF -työkalua tai PDF-lukijaa erottaaksesi yhden sivun ensin, jos tarvitset vain yhden kuvan." },
    ],
  },
  "merge-pdf": {
    name: "Yhdistä PDF",
    actionLabel: "Yhdistä PDF-tiedostot",
    shortDescription: "Yhdistä useita PDF-tiedostoja yhdeksi asiakirjaksi, valitsemassasi järjestyksessä.",
    longDescription: [
      "Yhdistä PDF antaa sinun yhdistää kaksi tai useampia PDF-tiedostoja yhdeksi asiakirjaksi asentamatta mitään. Lisää tiedostoja, järjestä ne vetämällä ja lataa yksi yhdistetty PDF.",
      "Kaikki toimii paikallisesti selaimessasi, joten tiedostoja ei koskaan ladata palvelimelle. Tämä tarkoittaa, että se toimii jopa arkaluontoisten sopimusten, raporttien tai henkilökohtaisten asiakirjojen kanssa.",
    ],
    faq: [
      { question: "Onko yhdistettävien PDF-tiedostojen määrälle rajaa?", answer: "Kiinteää rajaa ei ole. Koska yhdistäminen tapahtuu selaimessasi, käytännön rajoitus on laitteen muisti, ei palvelinraja." },
      { question: "Voinko muuttaa sivujärjestystä ennen yhdistämistä?", answer: "Kyllä. Kun tiedostot on lisätty, vedä ne haluamaasi lopulliseen järjestykseen ennen yhdistämistä." },
      { question: "Ladataanko tiedostoni TAMPDFin palvelimille?", answer: "Ei. Yhdistä PDF käsittelee tiedostot kokonaan selaimessasi käyttäen asiakaspuolen teknologiaa, joten asiakirjat eivät koskaan poistu laitteeltasi." },
      { question: "Vaikuttaako yhdistäminen PDF-tiedostojeni laatuun?", answer: "Ei. Sivut yhdistetään muuttumattomina, ilman uudelleenpakkausta, joten teksti, kuvat ja muotoilu pysyvät täsmälleen alkuperäisinä." },
    ],
  },
  "rotate-pdf": {
    name: "Käännä PDF",
    actionLabel: "Käännä PDF",
    shortDescription: "Käännä yksittäisiä sivuja tai koko PDF-tiedosto 90°, 180° tai 270°, suoraan selaimessa.",
    longDescription: [
      "Käännä PDF antaa sinun korjata sivuttain tai ylösalaisin olevat sivut muutamassa sekunnissa. Lataa yksi tai useampi PDF-tiedosto, näe jokaisen sivun pikkukuva ja käännä sitten koko asiakirja kerralla tai vain tarvitsemasi sivut.",
      "Kaikki toimii paikallisesti selaimessasi, joten tiedostoja ei koskaan ladata palvelimelle. Lataa useita PDF-tiedostoja samanaikaisesti, ja jokainen käännetään ja palautetaan itsenäisesti.",
    ],
    faq: [
      { question: "Voinko kääntää vain yhden sivun koko asiakirjan sijaan?", answer: "Kyllä. Napsauta yksittäisen sivun kääntöpainiketta kääntääksesi vain sen, tai käytä käännä kaikki -painikkeita soveltaaksesi samaa kiertoa kaikkiin sivuihin kerralla." },
      { question: "Mitkä kiertokulmat ovat tuettuja?", answer: "Voit kääntää sivuja 90°, 180° tai 270° kumpaankin suuntaan." },
      { question: "Voinko kääntää useamman kuin yhden PDF-tiedoston kerralla?", answer: "Kyllä. Lataa useita PDF-tiedostoja, ja jokainen käännetään itsenäisesti. Jos lataat useamman kuin yhden tiedoston, käännetyt PDF-tiedostot pakataan .zip-tiedostoon ladattavaksi." },
      { question: "Ladataanko PDF-tiedostoni jonnekin?", answer: "Ei. Käännä PDF käsittelee kaiken paikallisesti selaimessasi, joten tiedostot eivät koskaan poistu laitteeltasi." },
    ],
  },
  "compress-image": {
    name: "Pakkaa kuva",
    actionLabel: "Pakkaa kuvat",
    shortDescription: "Pienennä JPG-, PNG- ja WebP-tiedostojen tiedostokokoa säilyttäen visuaalisen laadun.",
    longDescription: [
      "Pakkaa kuva pienentää JPG-, PNG- tai WebP-valokuviesi tiedostokokoa, jolloin niitä on nopeampi ladata, lähettää sähköpostitse ja ladata verkkosivustoille.",
      "Pakkaus tapahtuu kokonaan selaimessasi canvas-API:n avulla, joten valokuvasi eivät koskaan poistu laitteeltasi, ja voit pakata useita kuvia kerralla.",
    ],
    faq: [
      { question: "Mitkä kuvamuodot ovat tuettuja?", answer: "JPG-, PNG- ja WebP-kuvat ovat tuettuja sekä syötteenä että tulosteena." },
      { question: "Voinko pakata useita kuvia kerralla?", answer: "Kyllä. Lisää niin monta kuvaa kuin haluat, ja jokainen pakataan ja pakataan yhteen .zip-tiedostoon ladattavaksi tai ladataan yksitellen." },
      { question: "Kuinka paljon voin pienentää kuvaa laadun heikkenemättä?", answer: "Oletuslaatuasetus pienentää yleensä tiedostokokoa 60-80% ilman havaittavaa eroa. Voit säätää laatuliukusäädintä eri kompromissia varten." },
      { question: "Ladataanko valokuvani palvelimelle?", answer: "Ei. Pakkaus toimii paikallisesti selaimessasi canvas-API:n avulla, joten kuvia ei koskaan lähetetä minnekään." },
    ],
  },
  "image-to-pdf": {
    name: "JPG PDF:ksi",
    actionLabel: "Muunna PDF:ksi",
    shortDescription: "Muunna yksi tai useampi JPG-kuva yhdeksi PDF-asiakirjaksi.",
    longDescription: [
      "JPG PDF:ksi yhdistää JPG-valokuvasi yhdeksi PDF-tiedostoksi, yksi kuva per sivu, valitsemassasi järjestyksessä.",
      "Täydellinen skannattujen asiakirjojen, kuittien tai valokuvien muuttamiseen jaettavaksi PDF-tiedostoksi. Kaikki käsitellään paikallisesti selaimessasi täyden yksityisyyden takaamiseksi.",
    ],
    faq: [
      { question: "Voinko yhdistää useita kuvia yhdeksi PDF-tiedostoksi?", answer: "Kyllä. Lisää useita kuvia, ja jokaisesta tulee sivu syntyvässä PDF-tiedostossa, järjestyksessä jonka valitset." },
      { question: "Mitä sivukokoa PDF-tiedostossa käytetään?", answer: "Jokainen sivu sovitetaan lähdekuvan mittoihin ja suuntaan, joten mitään ei rajata tai venytetä." },
      { question: "Ladataanko kuvani jonnekin?", answer: "Ei. Muunnos tapahtuu kokonaan selaimessasi, joten kuvat pysyvät laitteellasi." },
      { question: "Tukeeko se myös PNG-kuvia?", answer: "Kyllä, PNG-kuvat ovat tuettuja JPG:n ohella. iPhone-puhelimen HEIC-valokuvat eivät vielä ole tuettuja; muunna ne ensin JPG:ksi puhelimen jakotoiminnolla." },
    ],
  },
  "rotate-images": {
    name: "Käännä kuvia",
    actionLabel: "Käännä kuvia",
    shortDescription: "Käännä yksi tai useampi JPG-, PNG- tai WebP-kuva 90°, 180° tai 270°.",
    longDescription: [
      "Käännä kuvia korjaa sivuttain tai ylösalaisin olevat valokuvat muutamassa sekunnissa. Lataa yksi tai useampi kuva, käännä jokainen erikseen tai kaikki kerralla, ja lataa tulokset.",
      "Kaikki toimii paikallisesti selaimessasi, joten valokuvia ei koskaan ladata palvelimelle. Lataa useita kuvia samanaikaisesti, ja jokainen käännetään ja palautetaan itsenäisesti.",
    ],
    faq: [
      { question: "Mitkä kuvamuodot ovat tuettuja?", answer: "JPG-, PNG- ja WebP-kuvat ovat tuettuja. Kääntö säilyttää alkuperäisen muodon." },
      { question: "Voinko kääntää vain yhden kuvan kaikkien sijaan?", answer: "Kyllä. Napsauta yksittäisen kuvan kääntöpainiketta kääntääksesi vain sen, tai käytä käännä kaikki -painikkeita soveltaaksesi samaa kiertoa kaikkiin kuviin kerralla." },
      { question: "Mitkä kiertokulmat ovat tuettuja?", answer: "Voit kääntää kuvia 90°, 180° tai 270°." },
      { question: "Ladataanko valokuvani jonnekin?", answer: "Ei. Käännä kuvia käsittelee kaiken paikallisesti selaimessasi, joten valokuvat eivät koskaan poistu laitteeltasi." },
    ],
  },
  "split-pdf": {
    name: "Jaa PDF",
    actionLabel: "Jaa PDF",
    shortDescription: "Jaa yksi PDF-tiedosto useiksi pienemmiksi tiedostoiksi sivualueiden tai kiinteiden lohkojen mukaan.",
    longDescription: [
      "Jaa PDF jakaa suuren asiakirjan erillisiksi PDF-tiedostoiksi muuttamatta itse sivuja. Kirjoita sivualueet, kuten 1-3, 5, 8-10, poimiaksesi juuri tarvitsemasi osiot, tai jaa koko asiakirja yhtä suuriksi lohkoiksi kiinteällä sivumäärällä.",
      "Kaikki tapahtuu selaimessasi — PDF-tiedostoasi ei koskaan ladata palvelimelle. Yksittäinen tulos ladataan yhtenä PDF-tiedostona; useat osat pakataan .zip-tiedostoon.",
    ],
    faq: [
      { question: "Miten valitsen, mitkä sivut menevät mihinkin tiedostoon?", answer: "Käytä aluekenttää: jotain kuten \"1-3, 5, 8-10\" luo kolme PDF-tiedostoa — sivut 1–3, pelkkä sivu 5 ja sivut 8–10. Tai vaihda \"joka N. sivu\" -tilaan leikataksesi asiakirjan yhtä suuriksi lohkoiksi." },
      { question: "Säilyttävätkö jaetut tiedostot alkuperäisen laadun?", answer: "Kyllä. Sivut kopioidaan muuttumattomina, ilman uudelleenpakkausta, joten teksti, kuvat, fontit ja asettelu ovat identtisiä lähteen kanssa." },
      { question: "Ladataanko PDF-tiedostoni jonnekin?", answer: "Ei. Jakaminen tapahtuu kokonaan selaimessasi, joten asiakirja ei koskaan poistu laitteeltasi." },
      { question: "Mitä lomakekentille tai digitaalisille allekirjoituksille tapahtuu?", answer: "Sivusisältö ja lomake-elementit säilyvät visuaalisesti, mutta interaktiivinen lomaketoiminta ja allekirjoitukset eivät siirry jaettuihin tiedostoihin. Litistä ne tai allekirjoita uudelleen tarvittaessa." },
    ],
  },
  "delete-pdf-pages": {
    name: "Poista PDF-sivuja",
    actionLabel: "Poista sivuja",
    shortDescription: "Poista tarpeettomat sivut PDF-tiedostosta ja lataa siistitty asiakirja.",
    longDescription: [
      "Poista PDF-sivuja antaa sinun hylätä tarpeettomat sivut — tyhjät skannaukset, kansilehdet, kaksoiskappaleet — ja säilyttää loput alkuperäisessä järjestyksessä. Näe jokaisen sivun pikkukuva, napauta poistettavia ja lataa tulos.",
      "Koko prosessi tapahtuu paikallisesti selaimessasi, joten PDF-tiedostoasi ei koskaan ladata. Jäljelle jäävät sivut kopioidaan ilman uudelleenpakkausta, joten mikään ei menetä laatuaan.",
    ],
    faq: [
      { question: "Voinko poistaa useamman kuin yhden sivun kerralla?", answer: "Kyllä. Valitse mikä tahansa määrä sivuja pikkukuvaruudukosta ja poista ne kaikki yhdellä vaiheella." },
      { question: "Voinko poistaa kaikki sivut?", answer: "Ei — vähintään yhden sivun on jäätävä jäljelle, joten painike poistetaan käytöstä, jos olet valinnut kaikki." },
      { question: "Pienentääkö sivujen poistaminen tiedostokokoa?", answer: "Yleensä hieman, koska poistettujen sivujen sisältö hylätään. Jaetut resurssit, kuten fontit, voivat jäädä jäljelle, joten käytä Pakkaa PDF -työkalua jälkikäteen, jos koolla on merkitystä." },
      { question: "Ladataanko tiedostoni palvelimelle?", answer: "Ei. Kaikki tapahtuu selaimessasi, eikä PDF-tiedostosi koskaan poistu laitteeltasi." },
    ],
  },
  "reorder-pdf-pages": {
    name: "Järjestä PDF-sivut uudelleen",
    actionLabel: "Järjestä sivut uudelleen",
    shortDescription: "Vedä PDF-sivuja muuttaaksesi niiden järjestystä ja tallenna uudelleenjärjestetty asiakirja.",
    longDescription: [
      "Järjestä PDF-sivut uudelleen näyttää jokaisen sivun pikkukuvan, jonka voit vetää haluamaasi järjestykseen — siirtää sivun alkuun, vaihtaa kahta osiota tai kääntää koko asiakirjan. Siirtopainikkeet ovat myös saatavilla tarkkoja, sivu kerrallaan tehtäviä muutoksia varten.",
      "Uudelleenjärjestely tapahtuu kokonaan selaimessasi, joten PDF-tiedostoasi ei koskaan ladata. Sivut kopioidaan muuttumattomina, joten laatu ja muotoilu pysyvät ennallaan.",
    ],
    faq: [
      { question: "Miten siirrän sivun?", answer: "Vedä sen pikkukuva uuteen sijaintiin, tai käytä ylös/alas-painikkeita jokaisella sivulla yksittäisiä vaiheita varten. Uusi järjestys tallennetaan, kun napsautat painiketta." },
      { question: "Voinko kääntää koko asiakirjan?", answer: "Kyllä — vedä sivut käänteiseen järjestykseen tai käytä siirtopainikkeita. Mikä tahansa määrä sivuja voidaan muuttaa yhdessä vaiheessa." },
      { question: "Muuttaako uudelleenjärjestely sivusisältöä?", answer: "Ei. Vain sivujärjestys muuttuu — jokaisen sivun teksti, kuvat ja asettelu pysyvät täsmälleen samoina." },
      { question: "Ladataanko PDF-tiedosto jonnekin?", answer: "Ei. Uudelleenjärjestely toimii paikallisesti selaimessasi, eikä tiedosto koskaan poistu laitteeltasi." },
    ],
  },
  "crop-pdf": {
    name: "Rajaa PDF",
    actionLabel: "Rajaa PDF",
    shortDescription: "Rajaa jokaisen PDF-sivun marginaalit asettamalla arvot ylä-, ala- ja sivureunoista.",
    longDescription: [
      "Rajaa PDF poistaa tarpeettoman valkoisen tilan tai skannausreunat sivujen reunoilta. Aseta prosentteina, kuinka paljon rajataan ylhäältä, alhaalta, vasemmalta ja oikealta, näe reaaliaikainen esikatselu ja käytä kaikkiin sivuihin kerralla.",
      "Rajaus säätää näkyvää sivualuetta poistamatta sisältöä — rajatut osat vain piilotetaan. Kaikki tapahtuu selaimessasi, joten PDF-tiedostoasi ei koskaan ladata.",
    ],
    faq: [
      { question: "Poistaako rajaus sisältöä rajatun alueen ulkopuolelta?", answer: "Ei. Rajaa PDF muuttaa sivun rajausruutua, mikä piilottaa ulkoalueen selaimissa ja tulostettaessa. Taustalla oleva sisältö on edelleen tiedostossa ja voidaan palauttaa." },
      { question: "Käytetäänkö samaa rajausta kaikilla sivuilla?", answer: "Kyllä. Asettamasi marginaalit koskevat kaikkia sivuja. Erikokoiset sivut rajataan samalla prosenttiosuudella." },
      { question: "Voinko rajata skannatun asiakirjan poistaakseni mustan reunuksen?", answer: "Kyllä — se on yleinen käyttötapaus. Lisää marginaaleja, kunnes esikatselu näyttää vain sisällön, jonka haluat säilyttää." },
      { question: "Ladataanko tiedostoni palvelimelle?", answer: "Ei. Rajaus tapahtuu kokonaan selaimessasi, ja PDF-tiedostosi pysyy laitteellasi." },
    ],
  },
  "resize-pdf": {
    name: "Muuta PDF:n kokoa",
    actionLabel: "Muuta kokoa",
    shortDescription: "Muuta PDF-sivujen kokoa A4:ksi, Letteriksi tai mukautetuksi mittakaavaksi sisällön sovittamiseksi ja keskittämiseksi.",
    longDescription: [
      "Muuta PDF:n kokoa muuttaa asiakirjasi fyysistä sivukokoa. Valitse vakiokoko, kuten A4 tai US Letter, jolloin jokainen sivu skaalataan sopimaan ja keskitetään, tai käytä prosenttiosuutta sivujen suhteelliseen pienentämiseen tai suurentamiseen.",
      "Koon muuttaminen tapahtuu selaimessasi ilman lataamista. Sisältö skaalataan yhdessä sivun kanssa, joten mitään ei rajata, ja asettelu pysyy suhteellisena.",
    ],
    faq: [
      { question: "Mitä sivukokoja voin valita?", answer: "A4 ja US Letter pysty- tai vaakasuunnassa, sekä A3 ja A5. Voit myös syöttää mittakaavaprosentin muuttaaksesi kokoa muuttamatta suhteita." },
      { question: "Venytetäänkö sisältöäni?", answer: "Ei. Sisältö skaalataan tasaisesti sopimaan uuteen kokoon ja keskitetään sivulle, joten mittasuhteet säilyvät eikä mitään rajata." },
      { question: "Voinko käyttää tätä PDF-tiedostoni koon pienentämiseen?", answer: "Ei suoraan — tämä muuttaa sivun mittoja, ei tiedoston painoa. Käytä Pakkaa PDF -työkalua tiedostokoon pienentämiseen." },
      { question: "Ladataanko tiedostoni jonnekin?", answer: "Ei. Koon muuttaminen tapahtuu paikallisesti selaimessasi, eikä PDF-tiedostosi koskaan poistu laitteeltasi." },
    ],
  },
  "png-to-pdf": {
    name: "PNG PDF:ksi",
    actionLabel: "Muunna PDF:ksi",
    shortDescription: "Muunna yksi tai useampi PNG-kuva yhdeksi PDF-asiakirjaksi, yksi kuva per sivu.",
    longDescription: [
      "PNG PDF:ksi yhdistää PNG-kuvat yhdeksi PDF-tiedostoksi, jokainen kuva omalla sivullaan alkuperäisessä resoluutiossa. Lisää useita kuvia, järjestä niiden järjestys ja lataa yksi asiakirja.",
      "Loistava kuvakaappausten, kaavioiden tai vietyjen grafiikoiden muuttamiseen jaettavaksi PDF-tiedostoksi. Muunnos tapahtuu kokonaan selaimessasi, joten kuvia ei koskaan ladata. Läpinäkyvät alueet sijoitetaan valkoiselle taustalle.",
    ],
    faq: [
      { question: "Voinko yhdistää useita PNG-tiedostoja yhdeksi PDF-tiedostoksi?", answer: "Kyllä. Lisää mikä tahansa määrä PNG-kuvia, ja jokaisesta tulee sivu syntyvässä PDF-tiedostossa, järjestyksessä jonka valitset." },
      { question: "Mitä sivukokoa käytetään?", answer: "Jokainen sivu vastaa lähdekuvan pikselimittoja, joten kuvia ei rajata tai venytetä." },
      { question: "Mitä kuvan läpinäkyville osille tapahtuu?", answer: "Läpinäkyvyys litistetään valkoiselle taustalle, jotta sivu näyttää samalta kaikissa PDF-katseluohjelmissa." },
      { question: "Ladataanko kuvani palvelimelle?", answer: "Ei. Muunnos tapahtuu kokonaan selaimessasi, ja kuvat pysyvät laitteellasi." },
    ],
  },
  "extract-pdf-pages": {
    name: "Poimi PDF-sivut",
    actionLabel: "Poimi sivuja",
    shortDescription: "Poimi valitut sivut PDF-tiedostosta uuteen tiedostoon — tai tallenna jokainen sivu omana PDF-tiedostonaan.",
    longDescription: [
      "Poimi PDF-sivut antaa sinun valita juuri tarvitsemasi sivut asiakirjasta ja tallentaa ne uudeksi PDF-tiedostoksi. Näe jokaisen sivun pikkukuva, napauta säilytettäviä ja lataa ne yhdessä — tai erillisinä yksisivuisina PDF-tiedostoina ZIP-tiedostossa.",
      "Alkuperäinen tiedostosi pysyy muuttumattomana, ja sivut kopioidaan muuttumattomina, joten teksti, kuvat ja muotoilu pysyvät ennallaan. Kaikki tapahtuu selaimessasi, joten PDF-tiedostoasi ei koskaan ladata.",
    ],
    faq: [
      { question: "Mikä on ero poimimisen ja jakamisen välillä?", answer: "Poiminta tallentaa vain valitut sivut uuteen PDF-tiedostoon. Jakaminen jakaa koko asiakirjan useiksi osiksi sivualueiden tai kiinteiden kokojen mukaan." },
      { question: "Voinko tallentaa jokaisen poimitun sivun omana tiedostonaan?", answer: "Kyllä. Valitse \"Erilliset PDF-tiedostot\", ja jokaisesta valitusta sivusta tulee oma PDF-tiedosto, pakattuna yhteen .zip-latauspakettiin." },
      { question: "Menettävätkö poimitut sivut laatuaan?", answer: "Ei. Sivut kopioidaan ilman uudelleenpakkausta, joten ne näyttävät täsmälleen samalta kuin alkuperäinen. Interaktiiviset lomakekentät voivat muuttua tavalliseksi sivusisällöksi." },
      { question: "Ladataanko PDF-tiedostoni palvelimelle?", answer: "Ei. Sivut poimitaan paikallisesti selaimessasi, eikä tiedosto koskaan poistu laitteeltasi." },
    ],
  },
  "add-page-numbers": {
    name: "Lisää sivunumerot",
    actionLabel: "Lisää sivunumerot",
    shortDescription: "Numeroi PDF-sivut valitsemallasi sijainnilla, muodolla ja aloitusnumerolla.",
    longDescription: [
      "Lisää sivunumerot sijoittaa numeron jokaiselle PDF-tiedostosi sivulle. Valitse yksi kuudesta sijainnista, tyyli kuten \"1\", \"1 / 10\" tai \"Sivu 1/10\", aseta aloitusnumero ja ohita kansilehti valinnaisesti.",
      "Numerot piirretään todellisena tekstinä vakiofontilla, joten ne tulostuvat terävinä ja pysyvät pystysuorina jopa käännetyillä sivuilla. Koko prosessi tapahtuu selaimessasi — asiakirjaasi ei koskaan ladata.",
    ],
    faq: [
      { question: "Voinko aloittaa numeroinnin muusta luvusta kuin 1?", answer: "Kyllä. Aseta mikä tahansa aloitusnumero — hyödyllinen, kun PDF-tiedostosi on luku tai liite suuremmasta asiakirjasta." },
      { question: "Voinko jättää kansilehden ilman numeroa?", answer: "Kyllä. Ota käyttöön \"Älä numeroi ensimmäistä sivua\", jolloin numerointi alkaa toiselta sivulta." },
      { question: "Mitä numeroita käytetään?", answer: "Vakiolukuja (1, 2, 3), jotka näkyvät oikein kaikissa PDF-lukijoissa. Merkinnät kuten \"Sivu 1/10\" kirjoitetaan suomeksi." },
      { question: "Ladataanko tiedostoni?", answer: "Ei. Sivunumerot lisätään paikallisesti selaimessasi, ja PDF-tiedostosi pysyy laitteellasi." },
    ],
  },
  "add-watermark": {
    name: "Lisää vesileima",
    actionLabel: "Lisää vesileima",
    shortDescription: "Sijoita teksti, kuten LUOTTAMUKSELLINEN tai LUONNOS, jokaiselle PDF-sivulle.",
    longDescription: [
      "Lisää vesileima sijoittaa tekstisi jokaiselle PDF-tiedoston sivulle — kerran keskelle tai toistuvasti koko sivulle. Valitse väri, läpinäkyvyys, koko ja kulma, ja näe reaaliaikainen esikatselu ensimmäisellä sivulla ennen käyttöä.",
      "Suomi ja muut kirjoitusjärjestelmät ovat täysin tuettuja. Vesileima tallennetaan vakiovesileimaobjektina, ja kaikki tapahtuu selaimessasi, joten asiakirjaasi ei koskaan ladata.",
    ],
    faq: [
      { question: "Voinko kirjoittaa vesileiman suomeksi?", answer: "Kyllä. Teksti renderöidään selaimesi fonteilla, joten suomi ja muut kirjoitusjärjestelmät näkyvät oikein." },
      { question: "Voiko vesileima toistua sivulla?", answer: "Kyllä. Valitse \"Toistuva\" -asettelu kaakeloidaksesi tekstin koko sivulle, tai \"Kerran, keskitetty\" yksittäistä leimaa varten." },
      { question: "Voiko vesileiman poistaa myöhemmin?", answer: "Se tallennetaan vakiovesileimaobjektina, joten vesileimat tunnistavat työkalut — mukaan lukien TAMPDFin oma Poista vesileima -työkalu — voivat poistaa sen. Tämä ei ole turvaominaisuus." },
      { question: "Ladataanko PDF-tiedostoni jonnekin?", answer: "Ei. Vesileima lisätään paikallisesti selaimessasi." },
    ],
  },
  "remove-watermark": {
    name: "Poista vesileima",
    actionLabel: "Poista vesileima",
    shortDescription: "Poista PDF-tiedostoon vesileimaobjekteina lisätyt vesileimat.",
    longDescription: [
      "Poista vesileima löytää ja poistaa vesileimaobjekteina lisätyt vesileimat — tyypin, jonka luovat Adobe Acrobat, TAMPDF ja useimmat PDF-editorit — sekä vesileimamerkinnät ja kerrokset nimeltä \"Watermark\". Jokaisen sivun loppuosa pysyy täsmälleen samana.",
      "Skannatun kuvan osana olevilla tai sivun tavalliseen tekstiin sulautuneilla vesileimoilla ei ole merkkiä, joka erottaisi ne todellisesta sisällöstä, joten niitä ei voida poistaa automaattisesti. Poista vesileimoja vain asiakirjoista, joita sinulla on oikeus muokata. Käsittely tapahtuu selaimessasi, joten tiedostoa ei koskaan ladata.",
    ],
    faq: [
      { question: "Mitkä vesileimat voidaan poistaa?", answer: "Vesileimaobjekteina, vesileimamerkintöinä tai kerroksina nimeltä \"Watermark\" lisätyt vesileimat — mukaan lukien Adobe Acrobatin ja TAMPDFin oman Lisää vesileima -työkalun luomat." },
      { question: "Miksi vesileimaa ei poistettu tiedostostani?", answer: "Jos vesileima on osa skannattua sivukuvaa tai se on litistetty sivun tekstiin, sitä ei voida erottaa todellisesta sisällöstä vahingoittamatta sivua." },
      { question: "Vaikuttaako vesileiman poistaminen sivun muuhun osaan?", answer: "Ei. Vain merkitty vesileimasisältö poistetaan; teksti, kuvat ja asettelu pysyvät ennallaan." },
      { question: "Ladataanko tiedostoni?", answer: "Ei. PDF-tiedosto käsitellään paikallisesti selaimessasi." },
    ],
  },
  "pdf-to-images": {
    name: "PDF kuviksi",
    actionLabel: "Muunna kuviksi",
    shortDescription: "Muunna jokainen PDF-sivu PNG-, JPG- tai WEBP-kuviksi, ladattuna ZIP-tiedostona.",
    longDescription: [
      "PDF kuviksi renderöi jokaisen PDF-tiedostosi sivun erillisenä kuvana valitsemassasi muodossa: PNG terävimmälle tekstille, JPG pienimmille tiedostoille tai WEBP moderneille, kompakteille kuville. Valitse resoluutio, ja jokainen sivu viedään ja pakataan yhteen .zip-tiedostoon.",
      "Renderöinti tapahtuu suoraan selaimessasi PDF.js:n avulla, joten asiakirjaasi ei koskaan ladata palvelimelle.",
    ],
    faq: [
      { question: "Minkä kuvamuodon minun tulisi valita?", answer: "PNG pitää tekstin ja viivagrafiikan täysin terävänä. JPG luo pienempiä tiedostoja ja sopii valokuville. WEBP tarjoaa hyvän tasapainon verkkokäyttöön." },
      { question: "Millä resoluutiolla kuvat ovat?", answer: "Vakio renderöi 108 dpi:llä, Korkea 144 dpi:llä ja Maksimi 216 dpi:llä — riittävän korkealla useimpien asiakirjojen tulostamiseen." },
      { question: "Miten saan kaikki sivut kerralla?", answer: "Jokainen sivu muunnetaan ja pakataan yhteen .zip-tiedostoon. Yksisivuinen PDF ladataan yhtenä kuvana." },
      { question: "Ladataanko PDF-tiedostoni?", answer: "Ei. Sivut renderöidään paikallisesti selaimessasi." },
    ],
  },
  "images-to-pdf": {
    name: "Kuvat PDF:ksi",
    actionLabel: "Luo PDF",
    shortDescription: "Yhdistä JPG-, PNG- ja WEBP-kuvat yhdeksi PDF-tiedostoksi, valitsemassasi järjestyksessä.",
    longDescription: [
      "Kuvat PDF:ksi muuttaa valokuvien, skannausten tai kuvakaappausten kokoelman yhdeksi PDF-asiakirjaksi. Lisää JPG-, PNG- tai WEBP-kuvia, vedä pikkukuvat haluamaasi järjestykseen ja valitse A4- tai Letter-sivu (automaattisella suunnalla) tai kuhunkin kuvaan sovitetut sivut.",
      "Lisää marginaali siistin tulostusulkoasun saavuttamiseksi. Läpinäkyvät alueet sijoitetaan valkoiselle taustalle, ja koko muunnos tapahtuu selaimessasi, joten kuvia ei koskaan ladata.",
    ],
    faq: [
      { question: "Voinko muuttaa kuvien järjestystä?", answer: "Kyllä. Vedä pikkukuvia tai käytä nuolipainikkeita asettaaksesi sivujärjestyksen ennen PDF-tiedoston luomista." },
      { question: "Mitkä kuvamuodot ovat tuettuja?", answer: "JPG, PNG ja WEBP. Voit sekoittaa muotoja samassa PDF-tiedostossa." },
      { question: "Mitä sivukokoa PDF-tiedosto käyttää?", answer: "Valitse A4 tai Letter — jokainen kuva sovitetaan sivulle ja käännetään tarvittaessa vaakasuunnaksi — tai \"Sovita kuvaan\", jolloin jokainen sivu saa täsmälleen kuvansa koon." },
      { question: "Ladataanko kuvani?", answer: "Ei. PDF-tiedosto luodaan paikallisesti selaimessasi." },
    ],
  },
  "flip-pdf": {
    name: "Peilaa PDF",
    actionLabel: "Peilaa PDF",
    shortDescription: "Peilaa PDF-sivut vaaka- tai pystysuunnassa.",
    longDescription: [
      "Peilaa PDF peilaa jokaisen asiakirjasi sivun — vasemmalta oikealle tai ylhäältä alas. Hyödyllinen lämpösiirtokuvien tulostamiseen, väärältä puolelta otettujen skannausten korjaamiseen tai peilatun grafiikan valmisteluun.",
      "Esikatsele tulosta ensimmäisellä sivulla ennen käyttöä. Peilaus ottaa huomioon myös käännetyt sivut, ja kaikki tapahtuu selaimessasi, joten tiedostoa ei koskaan ladata.",
    ],
    faq: [
      { question: "Mikä on ero peilaamisen ja kääntämisen välillä?", answer: "Kääntö kiertää sivua 90° askelin. Peilaus luo peilikuvan, jolloin teksti luetaan takaperin — juuri tätä tarvitset lämpösiirtokuviin ja tiettyihin painotöihin." },
      { question: "Voinko peilata vain yhden sivun?", answer: "Peilaus koskee kaikkia sivuja. Peilataksesi yhden sivun, poimi se ensin Poimi PDF-sivut -työkalulla." },
      { question: "Heikentääkö peilaus laatua?", answer: "Ei. Sivut muunnetaan, ei renderöidä uudelleen, joten teksti ja grafiikka pysyvät yhtä terävinä kuin alkuperäisessä." },
      { question: "Ladataanko PDF-tiedostoni?", answer: "Ei. Peilaus tapahtuu paikallisesti selaimessasi." },
    ],
  },
  "edit-pdf-metadata": {
    name: "Muokkaa PDF-metatietoja",
    actionLabel: "Muokkaa metatietoja",
    shortDescription: "Muuta PDF-tiedoston otsikkoa, tekijää, aihetta ja avainsanoja.",
    longDescription: [
      "Muokkaa PDF-metatietoja antaa sinun tarkastella ja muuttaa PDF-tiedoston sisällä tallennettuja asiakirjaominaisuuksia — otsikkoa, tekijää, aihetta, avainsanoja, luojaa ja tuottajaa. Tämä on tietoa, jonka PDF-lukijat, hakukoneet ja tiedostonhallintaohjelmat näyttävät asiakirjastasi.",
      "Jätä kenttä tyhjäksi poistaaksesi sen. Sivusisältöön ei vaikuteta, ja kaikki muokkaus tapahtuu selaimessasi, joten tiedostoa ei koskaan ladata.",
    ],
    faq: [
      { question: "Miksi muokata PDF-metatietoja?", answer: "Selkeä otsikko ja tekijä tekevät asiakirjoista helpompia löytää ja saavat ne näyttämään ammattimaisemmilta jaettaessa, ja hakukoneet voivat hyödyntää niitä indeksoidessaan PDF-tiedostoja." },
      { question: "Muuttaako metatietojen muokkaaminen asiakirjan sisältöä?", answer: "Ei. Vain asiakirjaominaisuudet muuttuvat; sivut, teksti ja kuvat pysyvät täsmälleen samoina." },
      { question: "Miten poistan ominaisuuden?", answer: "Tyhjennä kenttä ja tallenna. Tyhjät kentät poistetaan tiedostosta." },
      { question: "Ladataanko PDF-tiedostoni?", answer: "Ei. Ominaisuudet muokataan paikallisesti selaimessasi." },
    ],
  },
  "remove-pdf-metadata": {
    name: "Poista PDF-metatiedot",
    actionLabel: "Poista metatiedot",
    shortDescription: "Poista tekijä, otsikko, ohjelmisto ja muut piilotetut ominaisuudet PDF-tiedostosta ennen jakamista.",
    longDescription: [
      "Poista PDF-metatiedot puhdistaa asiakirjaominaisuudet ja piilotetut tiedot, joita PDF-tiedosto kantaa mukanaan — tekijän, otsikon, aiheen, avainsanat, sen luomiseen käytetyn ohjelmiston, luontipäivämäärät ja upotetut XMP-metatietopaketit.",
      "Se on nopea yksityisyysvaihe ennen tiedoston jakamista julkisesti. Sivusisältö jätetään koskemattomaksi, ja puhdistus tapahtuu selaimessasi, joten tiedostoa ei koskaan ladata.",
    ],
    faq: [
      { question: "Mitä tietoja poistetaan?", answer: "Otsikko, tekijä, aihe, avainsanat, luoja- ja tuottaja-ohjelmisto, luonti- ja muokkauspäivämäärät, upotetut XMP-metatiedot ja yksityiset sovellustiedot." },
      { question: "Muuttaako tämä asiakirjan ulkonäköä?", answer: "Ei. Vain piilotetut ominaisuudet poistetaan; jokainen sivu näyttää täsmälleen samalta." },
      { question: "Poistaako tämä sivuille painetut henkilötiedot?", answer: "Ei. Se poistaa vain metatiedot. Sivuille painetut nimet tai tiedot pysyvät näkyvissä." },
      { question: "Ladataanko PDF-tiedostoni?", answer: "Ei. Tiedosto puhdistetaan paikallisesti selaimessasi." },
    ],
  },
  "pdf-info": {
    name: "PDF-tiedot",
    actionLabel: "Tarkasta PDF",
    shortDescription: "Näe sivumäärä, sivukoot, versio ja PDF-ominaisuudet yhdellä silmäyksellä.",
    longDescription: [
      "PDF-tiedot lukee PDF-tiedoston ja näyttää sen sisällön: sivumäärän, jokaisen sivun koon millimetreinä paperinimillä kuten A4 tai Letter, PDF-version, onko se salattu tai sisältääkö se täytettävän lomakkeen, sekä otsikon, tekijän, ohjelmiston ja päivämäärät.",
      "Hyödyllinen ennen tiedoston tulostamista, lataamista tai muuntamista. Asiakirja vain luetaan — ei koskaan muuteta — ja kaikki tapahtuu selaimessasi, joten sitä ei koskaan ladata.",
    ],
    faq: [
      { question: "Mitä tietoja PDF-tiedot näyttää?", answer: "Sivumäärän, sivukoot paperinimillä, PDF-version, tiedostokoon, salauksen, täytettävät lomakkeet, nopean verkkonäytön sekä asiakirjaominaisuudet kuten otsikon, tekijän ja luontipäivämäärän." },
      { question: "Muuttaako PDF-tiedot tiedostoani?", answer: "Ei. PDF-tiedosto vain luetaan; mitään ei muuteta tai tallenneta uudelleen." },
      { question: "Voinko tarkastaa salasanasuojatun PDF-tiedoston?", answer: "Avaamiseen salasanaa vaativia tiedostoja ei voida lukea ilman sitä. Tiedostot, joissa on vain muokkausrajoituksia, näytetään salattuina." },
      { question: "Ladataanko PDF-tiedostoni?", answer: "Ei. Se luetaan paikallisesti selaimessasi." },
    ],
  },
  "resize-image": {
    name: "Muuta kuvan kokoa",
    actionLabel: "Muuta kuvien kokoa",
    shortDescription: "Muuta JPG-, PNG- ja WEBP-kuvien leveyttä ja korkeutta — prosentteina tai tarkkoina pikseleinä.",
    longDescription: [
      "Muuta kuvan kokoa muuttaa valokuviesi ja grafiikkasi mittoja. Skaalaa prosentteina, tai syötä tarkka leveys ja korkeus lukitulla kuvasuhteella, jotta mikään ei näytä venytetyltä. Muuta useiden kuvien kokoa kerralla, ja lataa ne yhdessä .zip-tiedostona.",
      "Kuvat säilyttävät alkuperäisen muotonsa, ja korkealaatuinen pehmennys pitää pienennetyt kuvat terävinä. Kaikki tapahtuu selaimessasi, joten kuvia ei koskaan ladata.",
    ],
    faq: [
      { question: "Muuttuuko kuvani sumeaksi koon muuttamisesta?", answer: "Kuvan pienentäminen säilyttää sen terävyyden. Alkuperäistä kokoa suuremmaksi suurentaminen ei voi lisätä yksityiskohtia, joten suuret suurennokset voivat näyttää pehmeiltä." },
      { question: "Voinko muuttaa useiden kuvien kokoa kerralla?", answer: "Kyllä. Lisää enintään 20 kuvaa; lukitulla kuvasuhteella jokainen säilyttää omat mittasuhteensa asettamallasi leveydellä." },
      { question: "Missä muodossa kokoa muutettu kuva on?", answer: "Sama kuin alkuperäinen — JPG pysyy JPG:nä, PNG pysyy PNG:nä ja WEBP pysyy WEBP:nä, jos selaimesi tukee sitä." },
      { question: "Ladataanko kuvani?", answer: "Ei. Koon muuttaminen tapahtuu paikallisesti selaimessasi." },
    ],
  },
  "crop-image": {
    name: "Rajaa kuva",
    actionLabel: "Rajaa kuva",
    shortDescription: "Rajaa kuva haluamallesi alueelle vedettävällä rajausruudulla.",
    longDescription: [
      "Rajaa kuva poistaa tarpeettomat reunat valokuvasta tai kuvakaappauksesta. Vedä rajausruutua tai sen kulmia esikatselun yli — tai hienosäädä jokaista reunaa liukusäätimellä — ja näe tuloksen tarkka pikselikoko.",
      "Rajattu kuva säilyttää alkuperäisen muodon ja laadun, ja koko prosessi tapahtuu selaimessasi, joten kuvaa ei koskaan ladata.",
    ],
    faq: [
      { question: "Voinko rajata tarkkoihin mittoihin?", answer: "Säädä jokaista reunaa liukusäätimillä ja näe tuloskoon päivittyvän pikseleinä sitä mukaa." },
      { question: "Heikentääkö rajaus kuvan laatua?", answer: "Ei. Säilytetyt pikselit kopioidaan muuttumattomina; vain ruudun ulkopuoliset osat poistetaan." },
      { question: "Mitä muotoja voin rajata?", answer: "JPG, PNG ja WEBP. Tulos säilyttää saman muodon kuin alkuperäinen." },
      { question: "Ladataanko kuvani?", answer: "Ei. Rajaus tapahtuu paikallisesti selaimessasi." },
    ],
  },
  "flip-image": {
    name: "Peilaa kuva",
    actionLabel: "Peilaa kuvat",
    shortDescription: "Peilaa kuvia vaaka- tai pystysuunnassa — yksitellen tai joukkona.",
    longDescription: [
      "Peilaa kuva luo peilikuvan valokuvistasi: vasemmalta oikealle tai ylhäältä alas. Hyödyllinen etukameralla otettujen selfieiden korjaamiseen, heijastusten luomiseen tai kuvioiden valmisteluun painatusta varten.",
      "Peilaa useita kuvia kerralla, esikatsele tulosta välittömästi ja lataa ne alkuperäisessä muodossa. Kaikki tapahtuu selaimessasi, joten kuvia ei koskaan ladata.",
    ],
    faq: [
      { question: "Mikä on ero peilaamisen ja kääntämisen välillä?", answer: "Kääntö kiertää kuvaa 90° askelin. Peilaus peilaa sen, kuin katsoisit peiliin." },
      { question: "Voinko peilata useita kuvia kerralla?", answer: "Kyllä. Lisää enintään 20 kuvaa, ja kaikki peilataan samalla tavalla, ja ladataan sitten yhdessä .zip-tiedostona." },
      { question: "Heikentääkö peilaus laatua?", answer: "Ei havaittavaa laadun heikkenemistä — PNG pysyy häviöttömänä, ja JPG ja WEBP tallennetaan korkealla laadulla." },
      { question: "Ladataanko kuvani?", answer: "Ei. Peilaus tapahtuu paikallisesti selaimessasi." },
    ],
  },
  "png-to-jpg": {
    name: "PNG JPG:ksi",
    actionLabel: "Muunna JPG:ksi",
    shortDescription: "Muunna PNG-kuvat JPG:ksi pienempiä, yhteensopivampia tiedostoja varten.",
    longDescription: [
      "PNG JPG:ksi muuntaa PNG-kuvasi JPG-tiedostoiksi, tyypillisesti merkittävästi pienemmiksi — täydellinen valokuville, sähköpostin liitetiedostoille ja latauslomakkeille, jotka hyväksyvät vain JPG:n. Muunna useita kuvia kerralla ja säädä laatua tasapainottaaksesi kokoa ja terävyyttä.",
      "JPG ei tue läpinäkyvyyttä, joten läpinäkyvät alueet täytetään valkoisella. Muunnos tapahtuu kokonaan selaimessasi, joten kuvia ei koskaan ladata.",
    ],
    faq: [
      { question: "Miksi muuntaa PNG JPG:ksi?", answer: "JPG-tiedostot ovat tyypillisesti paljon pienempiä kuin PNG valokuville ja hyväksytään lähes kaikkialla, sähköpostista verkkolomakkeisiin." },
      { question: "Mitä läpinäkyvälle taustalle tapahtuu?", answer: "JPG:ssä ei ole läpinäkyvyyttä, joten läpinäkyvät alueet täytetään valkoisella." },
      { question: "Voinko muuntaa useita PNG-tiedostoja kerralla?", answer: "Kyllä. Lisää enintään 30 kuvaa; ne muunnetaan yhdessä ja ladataan .zip-tiedostona." },
      { question: "Ladataanko kuvani?", answer: "Ei. Muunnos tapahtuu paikallisesti selaimessasi." },
    ],
  },
  "jpg-to-png": {
    name: "JPG PNG:ksi",
    actionLabel: "Muunna PNG:ksi",
    shortDescription: "Muunna JPG-valokuvat PNG-kuviksi ilman laadun heikkenemistä.",
    longDescription: [
      "JPG PNG:ksi muuntaa JPG- tai JPEG-kuvasi PNG-muotoon. PNG on häviötön, joten kuva ei menetä lisää laatua, kun sitä muokataan ja tallennetaan uudelleen — hyödyllinen grafiikalle, jonka parissa jatkat työskentelyä, tai työkaluille ja alustoille, jotka vaativat PNG:tä.",
      "Muunna useita kuvia kerralla ja lataa ne yhdessä. Muunnos tapahtuu kokonaan selaimessasi, joten kuvia ei koskaan ladata.",
    ],
    faq: [
      { question: "Parantaako JPG:n muuntaminen PNG:ksi laatua?", answer: "Ei — JPG:ssä jo menetettyjä yksityiskohtia ei voida palauttaa. Mutta PNG estää lisämenetyksen, kun muokkaat ja tallennat uudelleen." },
      { question: "Miksi PNG on suurempi kuin JPG?", answer: "PNG tallentaa jokaisen pikselin ilman häviöllistä pakkausta, joten valokuvista tulee tyypillisesti suurempia. Se on kompromissi häviöttömän laadun saavuttamiseksi." },
      { question: "Voinko muuntaa useita JPG-tiedostoja kerralla?", answer: "Kyllä. Lisää enintään 30 kuvaa ja lataa .zip-tiedostona." },
      { question: "Ladataanko kuvani?", answer: "Ei. Muunnos tapahtuu paikallisesti selaimessasi." },
    ],
  },
  "webp-to-jpg": {
    name: "WEBP JPG:ksi",
    actionLabel: "Muunna JPG:ksi",
    shortDescription: "Muunna WEBP-kuvat JPG:ksi, jotta ne avautuvat missä tahansa sovelluksessa tai sivustolla.",
    longDescription: [
      "WEBP JPG:ksi muuntaa modernit WEBP-kuvat — yleisiä verkkosivustoilla — JPG:ksi, muotoon, jota tukee käytännössä jokainen sovellus, laite ja latauslomake. Muunna yksi kuva tai useita kerralla ja säädä laatua tasapainottaaksesi kokoa ja terävyyttä.",
      "Läpinäkyvät alueet täytetään valkoisella, koska JPG ei tue läpinäkyvyyttä. Muunnos tapahtuu kokonaan selaimessasi, joten kuvia ei koskaan ladata.",
    ],
    faq: [
      { question: "Miksi muuntaa WEBP JPG:ksi?", answer: "Jotkin vanhemmat sovellukset, editorit ja latauslomakkeet eivät hyväksy WEBP:tä. JPG toimii lähes kaikkialla." },
      { question: "Menetänkö laatua?", answer: "Vakiolaadulla eroa on vaikea nähdä. Nosta laatuliukusäädintä terävimmän tuloksen saavuttamiseksi." },
      { question: "Voinko muuntaa useita WEBP-kuvia kerralla?", answer: "Kyllä. Lisää enintään 30 kuvaa ja lataa .zip-tiedostona." },
      { question: "Ladataanko kuvani?", answer: "Ei. Muunnos tapahtuu paikallisesti selaimessasi." },
    ],
  },
  "jpg-to-webp": {
    name: "JPG WEBP:ksi",
    actionLabel: "Muunna WEBP:ksi",
    shortDescription: "Muunna JPG-valokuvat WEBP:ksi pienempiä, nopeampia verkkokuvia varten.",
    longDescription: [
      "JPG WEBP:ksi muuntaa JPG-kuvasi WEBP:ksi, moderniksi muodoksi, joka tyypillisesti tuottaa merkittävästi pienempiä tiedostoja samankaltaisella visuaalisella laadulla — hyvä verkkosivustojen nopeuttamiseen ja levytilan säästämiseen.",
      "Säädä laatua löytääksesi oikean tasapainon ja muunna useita kuvia kerralla. Muunnos tapahtuu kokonaan selaimessasi, joten kuvia ei koskaan ladata. WEBP-tiedostojen luominen vaatii uudemman version Chromesta, Edgestä tai Firefoxista.",
    ],
    faq: [
      { question: "Onko WEBP pienempi kuin JPG?", answer: "Tyypillisesti kyllä — WEBP säästää usein merkittävän määrän tilaa samankaltaisella laadulla, mikä auttaa sivustoja latautumaan nopeammin." },
      { question: "Tukevatko kaikki selaimet WEBP:tä?", answer: "Kaikki modernit selaimet voivat näyttää WEBP:tä. WEBP-tiedostojen luominen täällä vaatii uudemman version Chromesta, Edgestä tai Firefoxista." },
      { question: "Voinko muuntaa useita JPG-tiedostoja kerralla?", answer: "Kyllä. Lisää enintään 30 kuvaa ja lataa .zip-tiedostona." },
      { question: "Ladataanko kuvani?", answer: "Ei. Muunnos tapahtuu paikallisesti selaimessasi." },
    ],
  },
  "webp-to-png": {
    name: "WEBP PNG:ksi",
    actionLabel: "Muunna PNG:ksi",
    shortDescription: "Muunna WEBP-kuvat PNG:ksi säilyttäen läpinäkyvyyden.",
    longDescription: [
      "WEBP PNG:ksi muuntaa WEBP-kuvat PNG:ksi, häviöttömäksi muodoksi, jota tukee jokainen kuvankäsittelyohjelma. Läpinäkyvyys säilyy, joten logot, kuvakkeet ja leikatut grafiikat säilyttävät läpinäkyvät taustansa.",
      "Muunna useita kuvia kerralla ja lataa ne yhdessä. Muunnos tapahtuu kokonaan selaimessasi, joten kuvia ei koskaan ladata.",
    ],
    faq: [
      { question: "Säilyykö läpinäkyvyys?", answer: "Kyllä. PNG tukee läpinäkyvyyttä, joten WEBP-kuvasi läpinäkyvät alueet pysyvät läpinäkyvinä." },
      { question: "Miksi muuntaa WEBP PNG:ksi?", answer: "PNG avautuu jokaisessa muokkaus- ja suunnittelutyökalussa eikä menetä laatua lisämuokkauksessa ja tallennuksessa." },
      { question: "Voinko muuntaa useita WEBP-tiedostoja kerralla?", answer: "Kyllä. Lisää enintään 30 kuvaa ja lataa .zip-tiedostona." },
      { question: "Ladataanko kuvani?", answer: "Ei. Muunnos tapahtuu paikallisesti selaimessasi." },
    ],
  },
  "png-to-webp": {
    name: "PNG WEBP:ksi",
    actionLabel: "Muunna WEBP:ksi",
    shortDescription: "Muunna PNG-kuvat WEBP:ksi pienempiä, läpinäkyvyyden säilyttäviä tiedostoja varten.",
    longDescription: [
      "PNG WEBP:ksi muuntaa PNG-kuvasi WEBP:ksi, mikä tyypillisesti kutistaa tiedostoja merkittävästi säilyttäen samalla läpinäkyvyyden — täydellinen verkkografiikoille, kuvakkeille ja kuvakaappauksille.",
      "Valitse laatu, muunna useita kuvia kerralla ja lataa ne yhdessä. Muunnos tapahtuu kokonaan selaimessasi, joten kuvia ei koskaan ladata. WEBP-tiedostojen luominen vaatii uudemman version Chromesta, Edgestä tai Firefoxista.",
    ],
    faq: [
      { question: "Säilyttääkö WEBP läpinäkyvyyden?", answer: "Kyllä. WEBP tukee läpinäkyvyyttä, joten PNG-kuvasi läpinäkyvät alueet pysyvät läpinäkyvinä." },
      { question: "Kuinka paljon pienempiä kuvistani tulee?", answer: "Se vaihtelee, mutta WEBP-tiedostot ovat usein merkittävästi pienempiä kuin sama kuva PNG:nä tallennettuna." },
      { question: "Voinko muuntaa useita PNG-tiedostoja kerralla?", answer: "Kyllä. Lisää enintään 30 kuvaa ja lataa .zip-tiedostona." },
      { question: "Ladataanko kuvani?", answer: "Ei. Muunnos tapahtuu paikallisesti selaimessasi." },
    ],
  },
};
