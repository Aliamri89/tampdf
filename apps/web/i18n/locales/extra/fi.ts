import type { Dictionary } from "../../dictionaries";
import type { DeepPartial } from "../../merge";

/** Translations of the cookie-consent, legal-page, advertising and watermark copy. */
export const extra: DeepPartial<Dictionary> = {
  tool: {
    adLabel: "Mainos"
  },
  workspace: {
    addWatermark: {
      previewLabelImage: "Esikatselu — käytetään kuvaan",
      formatsNote: "Tuetut tiedostot: PDF, JPG, PNG ja WebP"
    },
    removeWatermark: {
      intro: "Poistaa vesileimaobjekteina lisätyt vesileimat: PDF-tiedostoista (Adobe Acrobatin, TAMPDFin ja useimpien muokkausohjelmien lisäämät) ja Word-asiakirjoista (Rakenne ▸ Vesileima). Kuvan pikseleihin poltettuja vesileimoja ei voi erottaa kuvasta, joten kuvia ei tueta.",
      formatsNote: "Tuetut tiedostot: PDF ja Word (.docx)",
      noneFoundWord: "Tästä asiakirjasta ei löytynyt Word-vesileimaa. Vain Wordin oman Vesileima-toiminnon lisäämät vesileimat voidaan poistaa."
    }
  },
  consent: {
    title: "Evästeet ja analytiikka",
    description: "Käytämme analytiikkaevästeitä (Google Analytics ja Microsoft Clarity) ymmärtääksemme, miten sivustoa käytetään. Ne toimivat vain, jos hyväksyt. Tiedostosi eivät koskaan poistu selaimestasi.",
    accept: "Hyväksy",
    reject: "Hylkää",
    settings: "Evästeasetukset",
    statusOn: "Analytiikkaevästeet ovat tällä hetkellä käytössä.",
    statusOff: "Analytiikkaevästeet ovat tällä hetkellä pois käytöstä.",
    close: "Sulje"
  },
  staticPages: {
    privacyPolicy: {
      intro: "Miten TAMPDF käsittelee tiedostojasi ja tietojasi: tiedostot käsitellään selaimessa eikä niitä koskaan lähetetä; mitä analytiikka, evästeet ja mainokset keräävät; ja oikeutesi.",
      updated: "Päivitetty viimeksi: 6. marraskuuta 2026.",
      sections: [
        {
          heading: "Yleiskatsaus",
          text: "TAMPDF (tampdf.com) tarjoaa ilmaisia selaimessa toimivia työkaluja PDF-tiedostoille ja kuville. Tämä käytäntö kertoo, mitä keräämme ja mitä emme kerää."
        },
        {
          heading: "Tiedostosi pysyvät laitteellasi",
          text: "Tiedostot käsitellään paikallisesti selaimessasi, eikä niitä koskaan lähetetä palvelimillemme tai kolmansille osapuolille, tallenneta sinne tai jaeta. Jos valitset ”Tallenna Google Driveen” tai ”Tallenna Dropboxiin”, selain lähettää tuloksen suoraan palveluun, johon olet kirjautunut; emme koskaan vastaanota sitä."
        },
        {
          heading: "Automaattisesti kerättävät tiedot",
          text: "Ymmärtääksemme sivuston käyttöä pidämme palvelimellamme yksinkertaisia omia laskureita ja käytämme — vain suostumuksellasi, kun sitä vaaditaan — Google Analyticsia ja Microsoft Clarityä. Ne voivat tallentaa vierailtuja sivuja, likimääräisen sijainnin, laitteen, selaimen, kielen, viittaavan sivuston sekä käytetyn työkalun ja sen onnistumisen. Emme koskaan kerää nimeäsi, sähköpostiosoitettasi tai tiedostojesi sisältöä."
        },
        {
          heading: "Evästeet ja vastaavat tekniikat",
          text: "Analytiikka- ja mainospalvelut voivat asettaa evästeitä tai käyttää paikallista tallennustilaa. Evästekäytäntömme luettelee ne ja kertoo, miten voit hallita niitä; voit muuttaa valintaasi milloin tahansa alatunnisteen ”Evästeasetukset”-linkistä."
        },
        {
          heading: "Oikeutesi",
          text: "Kun esimerkiksi GDPR, Yhdistyneen kuningaskunnan GDPR tai CCPA on sovellettavissa, voit pyytää pääsyä sinusta pitämiimme henkilötietoihin, niiden oikaisua tai poistamista, vastustaa käsittelyä tai rajoittaa sitä, peruuttaa suostumuksesi milloin tahansa ja tehdä valituksen paikalliselle tietosuojaviranomaiselle. Tee pyyntö Yhteystiedot-sivun kautta."
        },
        {
          heading: "Tietojen säilytys",
          text: "Analytiikkatietoja säilytetään vain niin kauan kuin tilastoihin ja palvelun parantamiseen tarvitaan, kunkin palveluntarjoajan säilytysasetusten mukaisesti."
        },
        {
          heading: "Kolmansien osapuolten palvelut ja linkit",
          text: "Sivusto voi linkittää muiden yritysten palveluihin tai ladata niitä (esimerkiksi Google, Microsoft ja Dropbox). Niillä on omat tietosuojakäytäntönsä, emmekä vastaa niistä."
        },
        {
          heading: "Lapset",
          text: "TAMPDF ei ole suunnattu alle 13-vuotiaille (tai alle 16-vuotiaille, kun paikallinen laki sitä vaatii), emmekä tietoisesti kerää lasten henkilötietoja."
        },
        {
          heading: "Tietoturva",
          text: "Tiedostot käsitellään selaimessasi, eikä niitä koskaan lähetetä meille. Sivusto tarjotaan HTTPS-yhteyden kautta."
        },
        {
          heading: "Muutokset tähän käytäntöön",
          text: "Voimme päivittää tätä käytäntöä; ”Päivitetty viimeksi” -päivämäärä osoittaa uusimman version. Sivuston käytön jatkaminen tarkoittaa, että hyväksyt päivityksen."
        },
        {
          heading: "Yhteystiedot",
          text: "Kysyttävää tästä käytännöstä? Käytä Yhteystiedot-sivua."
        }
      ]
    },
    cookiePolicy: {
      intro: "Evästeet ja vastaavat tekniikat, joita TAMPDF käyttää asetuksiin, analytiikkaan ja mainontaan, sekä niiden hallinta.",
      updated: "Päivitetty viimeksi: 6. marraskuuta 2026.",
      sections: [
        {
          heading: "Mitä evästeet ovat?",
          text: "Pieniä tekstitiedostoja, joita verkkosivusto tallentaa laitteellesi. Vastaavat tekniikat, kuten paikallinen tallennustila ja pikselit, toimivat samankaltaisesti; tämä käytäntö kattaa ne kaikki."
        },
        {
          heading: "Ehdottoman välttämätön tallennus",
          text: "TAMPDF muistaa vaalean/tumman teemasi ja evästevalintasi selaimen paikallisessa tallennustilassa. Ne eivät sisällä henkilötietoja, eikä niitä koskaan lähetetä meille."
        },
        {
          heading: "Analytiikkaevästeet",
          text: "Suostumuksellasi, kun sitä vaaditaan, käytämme Google Analytics 4:ää (evästeet kuten _ga ja _ga_*) ja Microsoft Clarityä (kuten _clck ja _clsk) liikenteen mittaamiseen ja sivuston käytön ymmärtämiseen; Clarity voi myös luoda anonymisoituja istuntotallenteita ja lämpökarttoja."
        },
        {
          heading: "Valintasi hallinta",
          text: "Missä suostumus vaaditaan, voit hyväksyä tai hylätä analytiikkaevästeet bannerissa ja muuttaa mielesi milloin tahansa alatunnisteen ”Evästeasetukset”-linkistä; suostumuksen peruuttaminen pysäyttää analytiikkaskriptit ja poistaa niiden evästeet. Voit myös estää evästeet selaimessasi — työkalut toimivat edelleen, koska tiedostosi käsitellään paikallisesti."
        },
        {
          heading: "Lisää hallintakeinoja",
          text: "Voit kieltäytyä personoidusta mainonnasta osoitteessa https://adssettings.google.com tai https://www.aboutads.info/choices (Euroopassa https://www.youronlinechoices.eu) ja hallita Microsoft-tietoja osoitteessa https://account.microsoft.com/privacy."
        },
        {
          heading: "Muutokset ja yhteystiedot",
          text: "Voimme päivittää tätä käytäntöä; yllä oleva päivämäärä osoittaa uusimman version. Kysyttävää? Käytä Yhteystiedot-sivua."
        }
      ]
    },
    termsOfService: {
      sections: [
        {
          heading: "Ehtojen hyväksyminen",
          text: "Käyttämällä TAMPDFää hyväksyt nämä käyttöehdot. Jos et hyväksy niitä, älä käytä työkalujamme."
        },
        {
          heading: "Palvelu",
          text: "TAMPDF tarjoaa ilmaisia selaimessa toimivia työkaluja PDF-tiedostojen ja kuvien käsittelyyn. Kaikki käsittely tapahtuu paikallisesti selaimessasi; tiedostojasi ei koskaan lähetetä palvelimillemme."
        },
        {
          heading: "Takuiden vastuuvapauslauseke",
          text: "Työkalut tarjotaan ”sellaisinaan” ja ”saatavuuden mukaan” ilman minkäänlaisia nimenomaisia tai oletettuja takuita, mukaan lukien tarkkuus, luotettavuus, kaupallinen soveltuvuus tai sopivuus tiettyyn tarkoitukseen. Emme takaa, että ne ovat virheettömiä, keskeytymättömiä tai yhteensopivia kaikkien tiedostojen, selainten tai laitteiden kanssa."
        },
        {
          heading: "Vastuunrajoitus",
          text: "Lain sallimassa laajimmassa määrin TAMPDF ja sen omistajat eivät vastaa välillisistä, satunnaisista, erityisistä tai seuraamuksellisista vahingoista — mukaan lukien tietojen menetys, tiedostojen vioittuminen tai liiketoiminnan keskeytyminen — jotka johtuvat työkalujen käytöstä tai käyttökyvyttömyydestä."
        },
        {
          heading: "Tiedostosi",
          text: "Olet vastuussa alkuperäisten tiedostojesi varmuuskopioinnista ja kaikkien tulosten tarkistamisesta ennen niihin luottamista. Koska käsittely tapahtuu selaimessasi, emme voi päästä tiedostoihisi emmekä palauttaa niitä."
        },
        {
          heading: "Hyväksyttävä käyttö",
          text: "Käytä TAMPDFää vain lainmukaisiin tarkoituksiin ja vain tiedostoihin, joita sinulla on oikeus käsitellä. Älä käytä työkaluja toisten oikeuksien loukkaamiseen, vesileimojen tai suojausten poistamiseen sisällöstä, jota et saa muokata, tai sivuston toiminnan häiritsemiseen."
        },
        {
          heading: "Kolmansien osapuolten palvelut ja mainonta",
          text: "Sivusto voi näyttää mainoksia ja linkittää kolmansien osapuolten palveluihin tai integroitua niihin (kuten Google AdSense, Google Drive ja Dropbox). Emme hallitse niitä; niiden käyttöön sovelletaan niiden omia ehtoja ja tietosuojakäytäntöjä."
        },
        {
          heading: "Immateriaalioikeudet",
          text: "TAMPDFin nimi, logo, ulkoasu, tekstit ja koodi kuuluvat TAMPDFille tai sen lisenssinantajille. Tiedostosi pysyvät sinun; emme vaadi niihin mitään oikeuksia."
        },
        {
          heading: "Ehtojen muutokset",
          text: "Voimme päivittää näitä ehtoja ajoittain. TAMPDFin käytön jatkaminen muutosten julkaisun jälkeen tarkoittaa, että hyväksyt ne."
        }
      ]
    },
    adsDisclosure: {
      heading: "Mainonta",
      paragraphs: [
        "Käytämme Google AdSensea mainosten näyttämiseen. Google ja sen kumppanit ovat kolmannen osapuolen toimittajia, jotka käyttävät evästeitä, web beacon -merkkejä ja vastaavia tekniikoita näyttääkseen mainoksia aiempien vierailujesi perusteella tällä ja muilla sivustoilla.",
        "Voit kieltäytyä personoidusta mainonnasta Googlen mainosasetuksissa (https://adssettings.google.com) tai osoitteessa https://www.aboutads.info/choices ja lukea, miten Google käyttää palvelujaan käyttävien sivustojen tietoja, osoitteessa https://policies.google.com/technologies/partner-sites.",
        "Euroopan talousalueella, Yhdistyneessä kuningaskunnassa ja Sveitsissä mainokset personoidaan vain suostumuksellasi, jonka voit antaa tai peruuttaa sivustolla näytettävän suostumusviestin kautta."
      ]
    }
  }
};
