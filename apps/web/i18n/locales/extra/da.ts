import type { Dictionary } from "../../dictionaries";
import type { DeepPartial } from "../../merge";

/** Translations of the cookie-consent, legal-page, advertising and watermark copy. */
export const extra: DeepPartial<Dictionary> = {
  tool: {
    adLabel: "Annonce"
  },
  workspace: {
    addWatermark: {
      previewLabelImage: "Forhåndsvisning — anvendes på billedet",
      formatsNote: "Understøttede filer: PDF, JPG, PNG og WebP"
    },
    removeWatermark: {
      intro: "Fjerner vandmærker, der er tilføjet som vandmærkeobjekter: i PDF-filer (af Adobe Acrobat, TAMPDF og de fleste editorer) og i Word-dokumenter (Design ▸ Vandmærke). Vandmærker, der er brændt ind i et billedes pixels, kan ikke adskilles fra billedet, så billeder understøttes ikke.",
      formatsNote: "Understøttede filer: PDF og Word (.docx)",
      noneFoundWord: "Der blev ikke fundet noget Word-vandmærke i dokumentet. Kun vandmærker tilføjet med Words egen vandmærkefunktion kan fjernes."
    }
  },
  consent: {
    title: "Cookies og analyse",
    description: "Vi bruger analysecookies (Google Analytics og Microsoft Clarity) til at forstå, hvordan webstedet bruges. De kører kun, hvis du accepterer. Dine filer forlader aldrig din browser.",
    accept: "Acceptér",
    reject: "Afvis",
    settings: "Cookieindstillinger",
    statusOn: "Analysecookies er i øjeblikket slået til.",
    statusOff: "Analysecookies er i øjeblikket slået fra.",
    close: "Luk"
  },
  staticPages: {
    privacyPolicy: {
      intro: "Hvordan TAMPDF håndterer dine filer og data: filer behandles i browseren og uploades aldrig; hvad analyse, cookies og annoncer indsamler; og dine rettigheder.",
      updated: "Sidst opdateret: 6. november 2026.",
      sections: [
        {
          heading: "Overblik",
          text: "TAMPDF (tampdf.com) tilbyder gratis browserværktøjer til PDF-filer og billeder. Denne politik forklarer, hvad vi indsamler, og hvad vi ikke indsamler."
        },
        {
          heading: "Dine filer bliver på din enhed",
          text: "Filer behandles lokalt i din browser og uploades, lagres eller deles aldrig med vores servere eller tredjeparter. Hvis du vælger “Gem i Google Drive” eller “Gem i Dropbox”, sender din browser resultatet direkte til den tjeneste, du er logget ind på; vi modtager det aldrig."
        },
        {
          heading: "Oplysninger, der indsamles automatisk",
          text: "For at forstå, hvordan webstedet bruges, fører vi enkle egne tællere på vores server og bruger — kun med dit samtykke, hvor det kræves — Google Analytics og Microsoft Clarity. De kan registrere besøgte sider, omtrentlig placering, enhed, browser, sprog, henvisende websted samt hvilket værktøj du brugte, og om det lykkedes. Vi indsamler aldrig dit navn, din e-mailadresse eller dine filers indhold."
        },
        {
          heading: "Cookies og lignende teknologier",
          text: "Analyse- og annonceringstjenester kan sætte cookies eller bruge lokal lagring. Vores cookiepolitik oplister dem og forklarer, hvordan du styrer dem, og du kan til enhver tid ændre dit valg via “Cookieindstillinger” i sidefoden."
        },
        {
          heading: "Dine rettigheder",
          text: "Hvor love som GDPR, britisk GDPR eller CCPA gælder, kan du bede om indsigt i, berigtigelse eller sletning af personoplysninger, vi har om dig, gøre indsigelse mod eller begrænse behandlingen, til enhver tid trække dit samtykke tilbage og klage til din lokale databeskyttelsesmyndighed. Brug kontaktsiden til at sende en anmodning."
        },
        {
          heading: "Opbevaring",
          text: "Analysedata opbevares kun så længe, det er nødvendigt for statistik og for at forbedre tjenesten, i overensstemmelse med hver udbyders opbevaringsindstillinger."
        },
        {
          heading: "Tredjepartstjenester og links",
          text: "Webstedet kan linke til eller indlæse tjenester fra andre virksomheder (f.eks. Google, Microsoft og Dropbox). De har deres egne privatlivspolitikker, og vi er ikke ansvarlige for dem."
        },
        {
          heading: "Børn",
          text: "TAMPDF henvender sig ikke til børn under 13 år (eller under 16, hvor lokal lovgivning kræver det), og vi indsamler ikke bevidst personoplysninger om børn."
        },
        {
          heading: "Sikkerhed",
          text: "Filer behandles i din browser og sendes aldrig til os. Webstedet leveres via HTTPS."
        },
        {
          heading: "Ændringer af denne politik",
          text: "Vi kan opdatere denne politik; datoen “Sidst opdateret” viser den nyeste version. Hvis du fortsætter med at bruge webstedet, accepterer du opdateringen."
        },
        {
          heading: "Kontakt",
          text: "Spørgsmål om denne politik? Brug kontaktsiden."
        }
      ]
    },
    cookiePolicy: {
      intro: "De cookies og lignende teknologier, TAMPDF bruger til præferencer, analyse og annoncer, og hvordan du styrer dem.",
      updated: "Sidst opdateret: 6. november 2026.",
      sections: [
        {
          heading: "Hvad er cookies?",
          text: "Små tekstfiler, som et websted gemmer på din enhed. Lignende teknologier som lokal lagring og pixels fungerer på tilsvarende måde; denne politik omfatter dem alle."
        },
        {
          heading: "Strengt nødvendig lagring",
          text: "TAMPDF husker dit lyse/mørke tema og dit cookievalg i browserens lokale lagring. De indeholder ingen personoplysninger og sendes aldrig til os."
        },
        {
          heading: "Analysecookies",
          text: "Med dit samtykke, hvor det kræves, bruger vi Google Analytics 4 (cookies som _ga og _ga_*) og Microsoft Clarity (som _clck og _clsk) til at måle trafik og forstå, hvordan webstedet bruges; Clarity kan også oprette anonymiserede sessionsoptagelser og varmekort."
        },
        {
          heading: "Administrer dit valg",
          text: "Hvor samtykke kræves, kan du acceptere eller afvise analysecookies i banneret og til enhver tid skifte mening via “Cookieindstillinger” i sidefoden; tilbagetrækning af samtykke stopper analyseskripterne og sletter deres cookies. Du kan også blokere cookies i din browser — værktøjerne virker stadig, fordi dine filer behandles lokalt."
        },
        {
          heading: "Flere muligheder",
          text: "Du kan fravælge personlig annoncering på https://adssettings.google.com eller https://www.aboutads.info/choices (https://www.youronlinechoices.eu i Europa) og administrere Microsoft-data på https://account.microsoft.com/privacy."
        },
        {
          heading: "Ændringer og kontakt",
          text: "Vi kan opdatere denne politik; datoen ovenfor viser den nyeste version. Spørgsmål? Brug kontaktsiden."
        }
      ]
    },
    termsOfService: {
      sections: [
        {
          heading: "Accept af vilkår",
          text: "Ved at bruge TAMPDF accepterer du disse servicevilkår. Hvis du ikke accepterer dem, skal du ikke bruge vores værktøjer."
        },
        {
          heading: "Tjenesten",
          text: "TAMPDF tilbyder gratis browserværktøjer til at arbejde med PDF-filer og billeder. Al behandling sker lokalt i din browser; dine filer uploades aldrig til vores servere."
        },
        {
          heading: "Ansvarsfraskrivelse for garantier",
          text: "Værktøjerne leveres “som de er” og “som tilgængelige” uden nogen form for garanti, hverken udtrykkelig eller stiltiende, herunder nøjagtighed, pålidelighed, salgbarhed eller egnethed til et bestemt formål. Vi garanterer ikke, at de er fejlfri, uafbrudte eller kompatible med alle filer, browsere eller enheder."
        },
        {
          heading: "Ansvarsbegrænsning",
          text: "I videst muligt omfang efter loven er TAMPDF og dets ejere ikke ansvarlige for indirekte, tilfældige, særlige eller følgeskader — herunder datatab, filkorruption eller driftsforstyrrelser — der opstår ved brug af eller manglende mulighed for at bruge værktøjerne."
        },
        {
          heading: "Dine filer",
          text: "Du er ansvarlig for at beholde sikkerhedskopier af dine originaler og for at kontrollere ethvert resultat, før du stoler på det. Da behandlingen sker i din browser, kan vi hverken få adgang til eller gendanne dine filer."
        },
        {
          heading: "Acceptabel brug",
          text: "Brug kun TAMPDF til lovlige formål og kun med filer, du har ret til at behandle. Brug ikke værktøjerne til at krænke andres rettigheder, til at fjerne vandmærker eller beskyttelse fra indhold, du ikke må ændre, eller til at forstyrre webstedets drift."
        },
        {
          heading: "Tredjepartstjenester og annoncer",
          text: "Webstedet kan vise annoncer og linke til eller integrere tredjepartstjenester (som Google AdSense, Google Drive og Dropbox). Vi kontrollerer dem ikke; din brug af dem er underlagt deres egne vilkår og privatlivspolitikker."
        },
        {
          heading: "Immaterielle rettigheder",
          text: "TAMPDF's navn, logo, design, tekster og kode tilhører TAMPDF eller dets licensgivere. Dine filer forbliver dine; vi gør ikke krav på nogen rettigheder til dem."
        },
        {
          heading: "Ændringer af vilkårene",
          text: "Vi kan opdatere disse vilkår fra tid til anden. Hvis du fortsætter med at bruge TAMPDF, efter ændringer er offentliggjort, accepterer du dem."
        }
      ]
    },
    adsDisclosure: {
      heading: "Annoncer",
      paragraphs: [
        "Vi bruger Google AdSense til at vise annoncer. Google og dets partnere er tredjepartsleverandører, der bruger cookies, webfyr og lignende teknologier til at vise annoncer baseret på dine tidligere besøg på dette og andre websteder.",
        "Du kan fravælge personlig annoncering i Googles annonceindstillinger (https://adssettings.google.com) eller på https://www.aboutads.info/choices og læse, hvordan Google bruger data fra websteder, der bruger dets tjenester, på https://policies.google.com/technologies/partner-sites.",
        "I Det Europæiske Økonomiske Samarbejdsområde, Storbritannien og Schweiz personaliseres annoncer kun med dit samtykke, som du kan give eller trække tilbage via samtykkemeddelelsen på webstedet."
      ]
    }
  }
};
