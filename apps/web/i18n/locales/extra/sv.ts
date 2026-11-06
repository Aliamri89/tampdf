import type { Dictionary } from "../../dictionaries";
import type { DeepPartial } from "../../merge";

/** Translations of the cookie-consent, legal-page, advertising and watermark copy. */
export const extra: DeepPartial<Dictionary> = {
  tool: {
    adLabel: "Annons"
  },
  workspace: {
    addWatermark: {
      previewLabelImage: "Förhandsvisning — tillämpas på bilden",
      formatsNote: "Filer som stöds: PDF, JPG, PNG och WebP"
    },
    removeWatermark: {
      intro: "Tar bort vattenstämplar som lagts till som vattenstämpelobjekt: i PDF-filer (av Adobe Acrobat, TAMPDF och de flesta redigerare) och i Word-dokument (Design ▸ Vattenstämpel). Vattenstämplar som är inbakade i en bilds pixlar går inte att skilja från bilden, så bilder stöds inte.",
      formatsNote: "Filer som stöds: PDF och Word (.docx)",
      noneFoundWord: "Ingen Word-vattenstämpel hittades i dokumentet. Bara vattenstämplar som lagts till med Words egen vattenstämpelfunktion kan tas bort."
    }
  },
  consent: {
    title: "Cookies och analys",
    description: "Vi använder analyscookies (Google Analytics och Microsoft Clarity) för att förstå hur webbplatsen används. De körs bara om du godkänner. Dina filer lämnar aldrig din webbläsare.",
    accept: "Godkänn",
    reject: "Avvisa",
    settings: "Cookieinställningar",
    statusOn: "Analyscookies är för närvarande på.",
    statusOff: "Analyscookies är för närvarande av.",
    close: "Stäng"
  },
  staticPages: {
    privacyPolicy: {
      intro: "Hur TAMPDF hanterar dina filer och uppgifter: filer behandlas i webbläsaren och laddas aldrig upp; vad analys, cookies och annonser samlar in; och dina rättigheter.",
      updated: "Senast uppdaterad: 6 november 2026.",
      sections: [
        {
          heading: "Översikt",
          text: "TAMPDF (tampdf.com) erbjuder kostnadsfria webbläsarverktyg för PDF-filer och bilder. Den här policyn förklarar vad vi samlar in och inte samlar in."
        },
        {
          heading: "Dina filer stannar på din enhet",
          text: "Filer behandlas lokalt i din webbläsare och laddas aldrig upp till, lagras på eller delas med våra servrar eller någon tredje part. Om du väljer ”Spara i Google Drive” eller ”Spara i Dropbox” skickar webbläsaren resultatet direkt till tjänsten du är inloggad i; vi tar aldrig emot det."
        },
        {
          heading: "Information som samlas in automatiskt",
          text: "För att förstå hur webbplatsen används för vi enkla egna räknare på vår server och använder, endast med ditt samtycke där det krävs, Google Analytics och Microsoft Clarity. De kan registrera besökta sidor, ungefärlig plats, enhet, webbläsare, språk, hänvisande webbplats samt vilket verktyg du använde och om det lyckades. Vi samlar aldrig in ditt namn, din e-postadress eller innehållet i dina filer."
        },
        {
          heading: "Cookies och liknande teknik",
          text: "Analys- och annonstjänster kan sätta cookies eller använda lokal lagring. Vår cookiepolicy listar dem och förklarar hur du styr dem, och du kan ändra ditt val när som helst via ”Cookieinställningar” i sidfoten."
        },
        {
          heading: "Dina rättigheter",
          text: "Där lagar som GDPR, brittiska GDPR eller CCPA gäller kan du begära tillgång till, rättelse eller radering av personuppgifter vi har om dig, invända mot eller begränsa behandlingen, när som helst återkalla ditt samtycke och klaga hos din lokala dataskyddsmyndighet. Använd kontaktsidan för att göra en begäran."
        },
        {
          heading: "Lagringstid",
          text: "Analysdata sparas bara så länge som behövs för statistik och för att förbättra tjänsten, enligt varje leverantörs lagringsinställningar."
        },
        {
          heading: "Tredjepartstjänster och länkar",
          text: "Webbplatsen kan länka till eller läsa in tjänster från andra företag (till exempel Google, Microsoft och Dropbox). De har egna integritetspolicyer och vi ansvarar inte för dem."
        },
        {
          heading: "Barn",
          text: "TAMPDF riktar sig inte till barn under 13 år (eller under 16 där lokal lag kräver det) och vi samlar inte medvetet in personuppgifter från barn."
        },
        {
          heading: "Säkerhet",
          text: "Filer behandlas i din webbläsare och skickas aldrig till oss. Webbplatsen levereras via HTTPS."
        },
        {
          heading: "Ändringar av policyn",
          text: "Vi kan uppdatera policyn; datumet ”Senast uppdaterad” visar den senaste versionen. Om du fortsätter använda webbplatsen godkänner du uppdateringen."
        },
        {
          heading: "Kontakt",
          text: "Frågor om den här policyn? Använd kontaktsidan."
        }
      ]
    },
    cookiePolicy: {
      intro: "De cookies och liknande tekniker som TAMPDF använder för inställningar, analys och annonser, och hur du styr dem.",
      updated: "Senast uppdaterad: 6 november 2026.",
      sections: [
        {
          heading: "Vad är cookies?",
          text: "Små textfiler som en webbplats sparar på din enhet. Liknande tekniker, som lokal lagring och pixlar, fungerar på ett jämförbart sätt; den här policyn omfattar dem alla."
        },
        {
          heading: "Absolut nödvändig lagring",
          text: "TAMPDF minns ditt ljusa/mörka tema och ditt cookieval i webbläsarens lokala lagring. De innehåller inga personuppgifter och skickas aldrig till oss."
        },
        {
          heading: "Analyscookies",
          text: "Med ditt samtycke där det krävs använder vi Google Analytics 4 (cookies som _ga och _ga_*) och Microsoft Clarity (som _clck och _clsk) för att mäta trafik och förstå hur webbplatsen används; Clarity kan också skapa anonymiserade sessionsinspelningar och värmekartor."
        },
        {
          heading: "Hantera ditt val",
          text: "Där samtycke krävs kan du godkänna eller avvisa analyscookies i bannern och ändra dig när som helst via ”Cookieinställningar” i sidfoten; att återkalla samtycket stoppar analysskripten och raderar deras cookies. Du kan också blockera cookies i webbläsaren — verktygen fortsätter fungera eftersom dina filer behandlas lokalt."
        },
        {
          heading: "Fler alternativ",
          text: "Du kan välja bort personanpassade annonser på https://adssettings.google.com eller https://www.aboutads.info/choices (https://www.youronlinechoices.eu i Europa) och hantera Microsoft-data på https://account.microsoft.com/privacy."
        },
        {
          heading: "Ändringar och kontakt",
          text: "Vi kan uppdatera policyn; datumet ovan visar den senaste versionen. Frågor? Använd kontaktsidan."
        }
      ]
    },
    termsOfService: {
      sections: [
        {
          heading: "Godkännande av villkoren",
          text: "Genom att använda TAMPDF godkänner du dessa användarvillkor. Om du inte godkänner dem, använd inte våra verktyg."
        },
        {
          heading: "Tjänsten",
          text: "TAMPDF erbjuder kostnadsfria webbläsarverktyg för att arbeta med PDF-filer och bilder. All behandling sker lokalt i din webbläsare; dina filer laddas aldrig upp till våra servrar."
        },
        {
          heading: "Friskrivning från garantier",
          text: "Verktygen tillhandahålls ”i befintligt skick” och ”i mån av tillgänglighet”, utan garantier av något slag, uttryckliga eller underförstådda, inklusive riktighet, tillförlitlighet, säljbarhet eller lämplighet för ett visst ändamål. Vi garanterar inte att de är felfria, oavbrutna eller kompatibla med alla filer, webbläsare eller enheter."
        },
        {
          heading: "Ansvarsbegränsning",
          text: "I den utsträckning lagen tillåter ansvarar TAMPDF och dess ägare inte för indirekta, tillfälliga, särskilda eller följdskador — inklusive dataförlust, filskador eller avbrott i verksamhet — som uppstår av att du använder eller inte kan använda verktygen."
        },
        {
          heading: "Dina filer",
          text: "Du ansvarar för att behålla säkerhetskopior av dina original och för att kontrollera allt resultat innan du förlitar dig på det. Eftersom behandlingen sker i din webbläsare kan vi varken komma åt eller återställa dina filer."
        },
        {
          heading: "Tillåten användning",
          text: "Använd TAMPDF endast för lagliga ändamål och endast med filer du har rätt att behandla. Använd inte verktygen för att kränka andras rättigheter, ta bort vattenstämplar eller skydd från innehåll du inte får ändra, eller störa webbplatsens funktion."
        },
        {
          heading: "Tredjepartstjänster och annonser",
          text: "Webbplatsen kan visa annonser och länka till eller integrera tredjepartstjänster (som Google AdSense, Google Drive och Dropbox). Vi kontrollerar dem inte; din användning av dem styrs av deras egna villkor och integritetspolicyer."
        },
        {
          heading: "Immateriella rättigheter",
          text: "Namnet, logotypen, designen, texterna och koden för TAMPDF tillhör TAMPDF eller dess licensgivare. Dina filer förblir dina; vi gör inga anspråk på dem."
        },
        {
          heading: "Ändringar av villkoren",
          text: "Vi kan uppdatera dessa villkor då och då. Om du fortsätter använda TAMPDF efter att ändringar publicerats godkänner du dem."
        }
      ]
    },
    adsDisclosure: {
      heading: "Annonser",
      paragraphs: [
        "Vi använder Google AdSense för att visa annonser. Google och dess partner är tredjepartsleverantörer som använder cookies, webbfyrar och liknande teknik för att visa annonser baserat på dina tidigare besök på den här och andra webbplatser.",
        "Du kan välja bort personanpassade annonser i Googles annonsinställningar (https://adssettings.google.com) eller på https://www.aboutads.info/choices, och läsa hur Google använder data från webbplatser som använder dess tjänster på https://policies.google.com/technologies/partner-sites.",
        "I Europeiska ekonomiska samarbetsområdet, Storbritannien och Schweiz personanpassas annonser bara med ditt samtycke, som du kan ge eller återkalla via samtyckesmeddelandet på webbplatsen."
      ]
    }
  }
};
