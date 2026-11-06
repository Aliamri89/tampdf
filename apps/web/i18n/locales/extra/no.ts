import type { Dictionary } from "../../dictionaries";
import type { DeepPartial } from "../../merge";

/** Translations of the cookie-consent, legal-page, advertising and watermark copy. */
export const extra: DeepPartial<Dictionary> = {
  tool: {
    adLabel: "Annonse"
  },
  workspace: {
    addWatermark: {
      previewLabelImage: "Forhåndsvisning — brukes på bildet",
      formatsNote: "Støttede filer: PDF, JPG, PNG og WebP"
    },
    removeWatermark: {
      intro: "Fjerner vannmerker som er lagt til som vannmerkeobjekter: i PDF-filer (av Adobe Acrobat, TAMPDF og de fleste redigeringsprogrammer) og i Word-dokumenter (Design ▸ Vannmerke). Vannmerker som er brent inn i pikslene til et bilde, kan ikke skilles fra bildet, så bilder støttes ikke.",
      formatsNote: "Støttede filer: PDF og Word (.docx)",
      noneFoundWord: "Fant ikke noe Word-vannmerke i dette dokumentet. Bare vannmerker lagt til med Words egen vannmerkefunksjon kan fjernes."
    }
  },
  consent: {
    title: "Informasjonskapsler og analyse",
    description: "Vi bruker analyseinformasjonskapsler (Google Analytics og Microsoft Clarity) for å forstå hvordan nettstedet brukes. De kjører bare hvis du godtar. Filene dine forlater aldri nettleseren din.",
    accept: "Godta",
    reject: "Avvis",
    settings: "Innstillinger for informasjonskapsler",
    statusOn: "Analyseinformasjonskapsler er for øyeblikket på.",
    statusOff: "Analyseinformasjonskapsler er for øyeblikket av.",
    close: "Lukk"
  },
  staticPages: {
    privacyPolicy: {
      intro: "Hvordan TAMPDF håndterer filene og dataene dine: filer behandles i nettleseren og lastes aldri opp; hva analyse, informasjonskapsler og annonser samler inn; og rettighetene dine.",
      updated: "Sist oppdatert: 6. november 2026.",
      sections: [
        {
          heading: "Oversikt",
          text: "TAMPDF (tampdf.com) tilbyr gratis nettleserverktøy for PDF-filer og bilder. Denne policyen forklarer hva vi samler inn, og hva vi ikke samler inn."
        },
        {
          heading: "Filene dine blir på enheten din",
          text: "Filer behandles lokalt i nettleseren din og lastes aldri opp til, lagres på eller deles med serverne våre eller tredjeparter. Hvis du velger «Lagre i Google Drive» eller «Lagre i Dropbox», sender nettleseren resultatet direkte til tjenesten du er logget inn på; vi mottar det aldri."
        },
        {
          heading: "Informasjon som samles inn automatisk",
          text: "For å forstå hvordan nettstedet brukes, fører vi enkle egne tellere på serveren vår og bruker — bare med ditt samtykke der det kreves — Google Analytics og Microsoft Clarity. De kan registrere besøkte sider, omtrentlig plassering, enhet, nettleser, språk, henvisende nettsted samt hvilket verktøy du brukte og om det lyktes. Vi samler aldri inn navnet ditt, e-postadressen din eller innholdet i filene dine."
        },
        {
          heading: "Informasjonskapsler og lignende teknologier",
          text: "Analyse- og annonsetjenester kan sette informasjonskapsler eller bruke lokal lagring. Vår retningslinje for informasjonskapsler lister dem opp og forklarer hvordan du styrer dem, og du kan når som helst endre valget ditt via «Innstillinger for informasjonskapsler» i bunnteksten."
        },
        {
          heading: "Rettighetene dine",
          text: "Der lover som GDPR, britisk GDPR eller CCPA gjelder, kan du be om innsyn i, retting eller sletting av personopplysninger vi har om deg, protestere mot eller begrense behandlingen, når som helst trekke tilbake samtykket og klage til din lokale personvernmyndighet. Bruk kontaktsiden for å sende en forespørsel."
        },
        {
          heading: "Lagringstid",
          text: "Analysedata lagres bare så lenge det er nødvendig for statistikk og for å forbedre tjenesten, i tråd med hver leverandørs lagringsinnstillinger."
        },
        {
          heading: "Tredjepartstjenester og lenker",
          text: "Nettstedet kan lenke til eller laste inn tjenester fra andre selskaper (for eksempel Google, Microsoft og Dropbox). De har egne personvernerklæringer, og vi er ikke ansvarlige for dem."
        },
        {
          heading: "Barn",
          text: "TAMPDF er ikke rettet mot barn under 13 år (eller under 16 der lokal lov krever det), og vi samler ikke bevisst inn personopplysninger fra barn."
        },
        {
          heading: "Sikkerhet",
          text: "Filer behandles i nettleseren din og sendes aldri til oss. Nettstedet leveres via HTTPS."
        },
        {
          heading: "Endringer i denne policyen",
          text: "Vi kan oppdatere denne policyen; datoen «Sist oppdatert» viser den nyeste versjonen. Hvis du fortsetter å bruke nettstedet, godtar du oppdateringen."
        },
        {
          heading: "Kontakt",
          text: "Spørsmål om denne policyen? Bruk kontaktsiden."
        }
      ]
    },
    cookiePolicy: {
      intro: "Informasjonskapslene og lignende teknologier TAMPDF bruker til innstillinger, analyse og annonser, og hvordan du styrer dem.",
      updated: "Sist oppdatert: 6. november 2026.",
      sections: [
        {
          heading: "Hva er informasjonskapsler?",
          text: "Små tekstfiler som et nettsted lagrer på enheten din. Lignende teknologier som lokal lagring og piksler fungerer på tilsvarende måte; denne policyen dekker dem alle."
        },
        {
          heading: "Strengt nødvendig lagring",
          text: "TAMPDF husker det lyse/mørke temaet ditt og valget ditt om informasjonskapsler i nettleserens lokale lagring. De inneholder ingen personopplysninger og sendes aldri til oss."
        },
        {
          heading: "Analyseinformasjonskapsler",
          text: "Med ditt samtykke der det kreves bruker vi Google Analytics 4 (informasjonskapsler som _ga og _ga_*) og Microsoft Clarity (som _clck og _clsk) for å måle trafikk og forstå hvordan nettstedet brukes; Clarity kan også lage anonymiserte øktopptak og varmekart."
        },
        {
          heading: "Administrer valget ditt",
          text: "Der samtykke kreves, kan du godta eller avvise analyseinformasjonskapsler i banneret og når som helst ombestemme deg via «Innstillinger for informasjonskapsler» i bunnteksten; å trekke tilbake samtykket stopper analyseskriptene og sletter informasjonskapslene deres. Du kan også blokkere informasjonskapsler i nettleseren — verktøyene fungerer fortsatt fordi filene dine behandles lokalt."
        },
        {
          heading: "Flere valg",
          text: "Du kan velge bort personlig tilpassede annonser på https://adssettings.google.com eller https://www.aboutads.info/choices (https://www.youronlinechoices.eu i Europa) og administrere Microsoft-data på https://account.microsoft.com/privacy."
        },
        {
          heading: "Endringer og kontakt",
          text: "Vi kan oppdatere denne policyen; datoen ovenfor viser den nyeste versjonen. Spørsmål? Bruk kontaktsiden."
        }
      ]
    },
    termsOfService: {
      sections: [
        {
          heading: "Godkjenning av vilkårene",
          text: "Ved å bruke TAMPDF godtar du disse bruksvilkårene. Hvis du ikke godtar dem, må du ikke bruke verktøyene våre."
        },
        {
          heading: "Tjenesten",
          text: "TAMPDF tilbyr gratis nettleserverktøy for å arbeide med PDF-filer og bilder. All behandling skjer lokalt i nettleseren din; filene dine lastes aldri opp til serverne våre."
        },
        {
          heading: "Fraskrivelse av garantier",
          text: "Verktøyene leveres «som de er» og «som tilgjengelige», uten garantier av noe slag, uttrykkelige eller underforståtte, inkludert nøyaktighet, pålitelighet, salgbarhet eller egnethet for et bestemt formål. Vi garanterer ikke at de er feilfrie, uavbrutte eller kompatible med alle filer, nettlesere eller enheter."
        },
        {
          heading: "Ansvarsbegrensning",
          text: "I den grad loven tillater det, er TAMPDF og eierne ikke ansvarlige for indirekte, tilfeldige, spesielle eller følgeskader — inkludert tap av data, filkorrupsjon eller driftsavbrudd — som oppstår ved bruk av eller manglende mulighet til å bruke verktøyene."
        },
        {
          heading: "Filene dine",
          text: "Du er ansvarlig for å ta vare på sikkerhetskopier av originalene dine og for å kontrollere alle resultater før du stoler på dem. Fordi behandlingen skjer i nettleseren din, kan vi verken få tilgang til eller gjenopprette filene dine."
        },
        {
          heading: "Akseptabel bruk",
          text: "Bruk TAMPDF bare til lovlige formål og bare med filer du har rett til å behandle. Ikke bruk verktøyene til å krenke andres rettigheter, fjerne vannmerker eller beskyttelse fra innhold du ikke har lov til å endre, eller forstyrre driften av nettstedet."
        },
        {
          heading: "Tredjepartstjenester og annonser",
          text: "Nettstedet kan vise annonser og lenke til eller integrere tredjepartstjenester (som Google AdSense, Google Drive og Dropbox). Vi kontrollerer dem ikke; bruken din av dem er underlagt deres egne vilkår og personvernerklæringer."
        },
        {
          heading: "Immaterielle rettigheter",
          text: "Navnet, logoen, designet, tekstene og koden til TAMPDF tilhører TAMPDF eller lisensgiverne. Filene dine forblir dine; vi gjør ikke krav på noen rettigheter til dem."
        },
        {
          heading: "Endringer i vilkårene",
          text: "Vi kan oppdatere disse vilkårene fra tid til annen. Hvis du fortsetter å bruke TAMPDF etter at endringer er publisert, godtar du dem."
        }
      ]
    },
    adsDisclosure: {
      heading: "Annonser",
      paragraphs: [
        "Vi bruker Google AdSense til å vise annonser. Google og partnerne er tredjepartsleverandører som bruker informasjonskapsler, web beacons og lignende teknologier til å vise annonser basert på tidligere besøk på dette og andre nettsteder.",
        "Du kan velge bort personlig tilpassede annonser i Googles annonseinnstillinger (https://adssettings.google.com) eller på https://www.aboutads.info/choices, og lese hvordan Google bruker data fra nettsteder som bruker tjenestene deres, på https://policies.google.com/technologies/partner-sites.",
        "I Det europeiske økonomiske samarbeidsområdet, Storbritannia og Sveits tilpasses annonser bare med ditt samtykke, som du kan gi eller trekke tilbake via samtykkemeldingen på nettstedet."
      ]
    }
  }
};
