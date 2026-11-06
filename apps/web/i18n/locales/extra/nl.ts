import type { Dictionary } from "../../dictionaries";
import type { DeepPartial } from "../../merge";

/** Translations of the cookie-consent, legal-page, advertising and watermark copy. */
export const extra: DeepPartial<Dictionary> = {
  tool: {
    adLabel: "Advertentie"
  },
  workspace: {
    addWatermark: {
      previewLabelImage: "Voorbeeld — wordt op de afbeelding toegepast",
      formatsNote: "Ondersteunde bestanden: PDF, JPG, PNG en WebP"
    },
    removeWatermark: {
      intro: "Verwijdert watermerken die als watermerkobjecten zijn toegevoegd: in pdf's (door Adobe Acrobat, TAMPDF en de meeste editors) en in Word-documenten (Ontwerp ▸ Watermerk). Watermerken die in de pixels van een afbeelding zijn ingebakken, zijn niet van de afbeelding te scheiden; afbeeldingen worden daarom niet ondersteund.",
      formatsNote: "Ondersteunde bestanden: PDF en Word (.docx)",
      noneFoundWord: "In dit document is geen Word-watermerk gevonden. Alleen watermerken die met de Watermerk-functie van Word zelf zijn toegevoegd, kunnen worden verwijderd."
    }
  },
  consent: {
    title: "Cookies en analyse",
    description: "We gebruiken analysecookies (Google Analytics en Microsoft Clarity) om te begrijpen hoe de site wordt gebruikt. Ze werken alleen als je accepteert. Je bestanden verlaten nooit je browser.",
    accept: "Accepteren",
    reject: "Weigeren",
    settings: "Cookie-instellingen",
    statusOn: "Analysecookies staan momenteel aan.",
    statusOff: "Analysecookies staan momenteel uit.",
    close: "Sluiten"
  },
  staticPages: {
    privacyPolicy: {
      intro: "Hoe TAMPDF met je bestanden en gegevens omgaat: bestanden worden in je browser verwerkt en nooit geüpload; wat analyse, cookies en advertenties verzamelen; en je rechten.",
      updated: "Laatst bijgewerkt: 6 november 2026.",
      sections: [
        {
          heading: "Overzicht",
          text: "TAMPDF (tampdf.com) biedt gratis browsertools voor pdf's en afbeeldingen. Dit beleid legt uit wat we wel en niet verzamelen."
        },
        {
          heading: "Je bestanden blijven op je apparaat",
          text: "Bestanden worden lokaal in je browser verwerkt en nooit geüpload naar, opgeslagen op of gedeeld met onze servers of derden. Kies je “Opslaan in Google Drive” of “Opslaan in Dropbox”, dan stuurt je browser het resultaat rechtstreeks naar de dienst waarbij je bent ingelogd; wij ontvangen het nooit."
        },
        {
          heading: "Automatisch verzamelde informatie",
          text: "Om te begrijpen hoe de site wordt gebruikt, houden we eenvoudige eigen tellers bij op onze server en gebruiken we, alleen met je toestemming waar die vereist is, Google Analytics en Microsoft Clarity. Zij kunnen bezochte pagina's, geschatte locatie, apparaat, browser, taal, verwijzende site en de gebruikte tool en of die werkte vastleggen. We verzamelen nooit je naam, e-mailadres of de inhoud van je bestanden."
        },
        {
          heading: "Cookies en vergelijkbare technologieën",
          text: "Analyse- en advertentiediensten kunnen cookies plaatsen of lokale opslag gebruiken. Ons Cookiebeleid somt ze op en legt uit hoe je ze beheert; je kunt je keuze op elk moment wijzigen via “Cookie-instellingen” in de footer."
        },
        {
          heading: "Je rechten",
          text: "Waar wetten zoals de AVG, de Britse AVG of de CCPA van toepassing zijn, kun je vragen om inzage in, correctie of verwijdering van persoonsgegevens die we over je hebben, bezwaar maken tegen of beperking vragen van de verwerking, je toestemming op elk moment intrekken en een klacht indienen bij je gegevensbeschermingsautoriteit. Gebruik de contactpagina voor een verzoek."
        },
        {
          heading: "Bewaartermijn",
          text: "Analysegegevens worden alleen bewaard zolang nodig is voor statistieken en om de dienst te verbeteren, volgens de bewaarinstellingen van elke aanbieder."
        },
        {
          heading: "Diensten en links van derden",
          text: "De site kan linken naar of diensten laden van andere bedrijven (bijvoorbeeld Google, Microsoft en Dropbox). Zij hebben hun eigen privacybeleid en wij zijn daar niet verantwoordelijk voor."
        },
        {
          heading: "Kinderen",
          text: "TAMPDF is niet gericht op kinderen jonger dan 13 jaar (of 16 waar de lokale wet dat vereist) en we verzamelen niet bewust hun persoonsgegevens."
        },
        {
          heading: "Beveiliging",
          text: "Bestanden worden in je browser verwerkt en nooit naar ons gestuurd. De site wordt via HTTPS geleverd."
        },
        {
          heading: "Wijzigingen in dit beleid",
          text: "We kunnen dit beleid bijwerken; de datum “Laatst bijgewerkt” toont de nieuwste versie. Als je de site blijft gebruiken, accepteer je de wijziging."
        },
        {
          heading: "Contact",
          text: "Vragen over dit beleid? Gebruik de contactpagina."
        }
      ]
    },
    cookiePolicy: {
      intro: "De cookies en vergelijkbare technologieën die TAMPDF gebruikt voor voorkeuren, analyse en advertenties, en hoe je ze beheert.",
      updated: "Laatst bijgewerkt: 6 november 2026.",
      sections: [
        {
          heading: "Wat zijn cookies?",
          text: "Kleine tekstbestanden die een website op je apparaat opslaat. Vergelijkbare technologieën, zoals lokale opslag en pixels, werken op dezelfde manier; dit beleid omvat ze allemaal."
        },
        {
          heading: "Strikt noodzakelijke opslag",
          text: "TAMPDF onthoudt je lichte/donkere thema en je cookiekeuze in de lokale opslag van je browser. Ze bevatten geen persoonsgegevens en worden nooit naar ons gestuurd."
        },
        {
          heading: "Analysecookies",
          text: "Met je toestemming waar die vereist is, gebruiken we Google Analytics 4 (cookies zoals _ga en _ga_*) en Microsoft Clarity (zoals _clck en _clsk) om verkeer te meten en te begrijpen hoe de site wordt gebruikt; Clarity kan ook geanonimiseerde sessieopnames en heatmaps maken."
        },
        {
          heading: "Je keuze beheren",
          text: "Waar toestemming vereist is, kun je analysecookies accepteren of weigeren in de banner en je op elk moment bedenken via “Cookie-instellingen” in de footer; intrekken van toestemming stopt de analysescripts en verwijdert hun cookies. Je kunt cookies ook in je browser blokkeren — de tools blijven werken omdat je bestanden lokaal worden verwerkt."
        },
        {
          heading: "Meer opties",
          text: "Je kunt gepersonaliseerde advertenties weigeren op https://adssettings.google.com of https://www.aboutads.info/choices (in Europa https://www.youronlinechoices.eu) en Microsoft-gegevens beheren op https://account.microsoft.com/privacy."
        },
        {
          heading: "Wijzigingen en contact",
          text: "We kunnen dit beleid bijwerken; de datum hierboven toont de nieuwste versie. Vragen? Gebruik de contactpagina."
        }
      ]
    },
    termsOfService: {
      sections: [
        {
          heading: "Aanvaarding van de voorwaarden",
          text: "Door TAMPDF te gebruiken ga je akkoord met deze Servicevoorwaarden. Ga je niet akkoord, gebruik onze tools dan niet."
        },
        {
          heading: "De dienst",
          text: "TAMPDF biedt gratis browsertools om met pdf's en afbeeldingen te werken. Alle verwerking gebeurt lokaal in je browser; je bestanden worden nooit naar onze servers geüpload."
        },
        {
          heading: "Uitsluiting van garanties",
          text: "De tools worden geleverd “zoals ze zijn” en “zoals beschikbaar”, zonder enige garantie, uitdrukkelijk of stilzwijgend, waaronder nauwkeurigheid, betrouwbaarheid, verkoopbaarheid of geschiktheid voor een bepaald doel. We garanderen niet dat ze foutloos, ononderbroken of compatibel met elk bestand, elke browser of elk apparaat zijn."
        },
        {
          heading: "Beperking van aansprakelijkheid",
          text: "Voor zover wettelijk toegestaan zijn TAMPDF en zijn eigenaren niet aansprakelijk voor indirecte, incidentele, bijzondere of gevolgschade — waaronder gegevensverlies, beschadigde bestanden of bedrijfsonderbreking — voortvloeiend uit het gebruik van of het niet kunnen gebruiken van de tools."
        },
        {
          heading: "Je bestanden",
          text: "Je bent zelf verantwoordelijk voor back-ups van je originelen en voor het controleren van elk resultaat voordat je erop vertrouwt. Omdat de verwerking in je browser plaatsvindt, hebben we geen toegang tot je bestanden en kunnen we ze niet herstellen."
        },
        {
          heading: "Aanvaardbaar gebruik",
          text: "Gebruik TAMPDF alleen voor wettige doeleinden en alleen met bestanden die je mag verwerken. Gebruik de tools niet om rechten van anderen te schenden, om watermerken of beveiliging te verwijderen van inhoud die je niet mag wijzigen, of om de website te verstoren."
        },
        {
          heading: "Diensten van derden en advertenties",
          text: "De site kan advertenties tonen en linken naar of integreren met diensten van derden (zoals Google AdSense, Google Drive en Dropbox). We beheersen die niet; voor het gebruik ervan gelden hun eigen voorwaarden en privacybeleid."
        },
        {
          heading: "Intellectueel eigendom",
          text: "De naam, het logo, het ontwerp, de teksten en de code van TAMPDF zijn eigendom van TAMPDF of zijn licentiegevers. Je bestanden blijven van jou; we claimen er geen rechten op."
        },
        {
          heading: "Wijzigingen in deze voorwaarden",
          text: "We kunnen deze voorwaarden van tijd tot tijd bijwerken. Als je TAMPDF blijft gebruiken nadat wijzigingen zijn gepubliceerd, aanvaard je ze."
        }
      ]
    },
    adsDisclosure: {
      heading: "Advertenties",
      paragraphs: [
        "We gebruiken Google AdSense om advertenties te tonen. Google en zijn partners zijn externe leveranciers die cookies, webbakens en vergelijkbare technologieën gebruiken om advertenties te tonen op basis van je eerdere bezoeken aan deze en andere websites.",
        "Je kunt gepersonaliseerde advertenties weigeren in de Advertentie-instellingen van Google (https://adssettings.google.com) of op https://www.aboutads.info/choices, en lezen hoe Google gegevens gebruikt van sites die zijn diensten gebruiken op https://policies.google.com/technologies/partner-sites.",
        "In de Europese Economische Ruimte, het Verenigd Koninkrijk en Zwitserland worden advertenties alleen met je toestemming gepersonaliseerd, die je kunt geven of intrekken via het toestemmingsbericht op de site."
      ]
    }
  }
};
