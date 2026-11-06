import type { Dictionary } from "../../dictionaries";
import type { DeepPartial } from "../../merge";

/** Translations of the cookie-consent, legal-page, advertising and watermark copy. */
export const extra: DeepPartial<Dictionary> = {
  tool: {
    adLabel: "Werbung"
  },
  workspace: {
    addWatermark: {
      previewLabelImage: "Vorschau — wird auf das Bild angewendet",
      formatsNote: "Unterstützte Dateien: PDF, JPG, PNG und WebP"
    },
    removeWatermark: {
      intro: "Entfernt Wasserzeichen, die als Wasserzeichen-Objekte hinzugefügt wurden: in PDFs (von Adobe Acrobat, TAMPDF und den meisten Editoren) und in Word-Dokumenten (Entwurf ▸ Wasserzeichen). Wasserzeichen, die in die Pixel eines Bildes eingebrannt sind, lassen sich nicht vom Bild trennen; Bilder werden daher nicht unterstützt.",
      formatsNote: "Unterstützte Dateien: PDF und Word (.docx)",
      noneFoundWord: "In diesem Dokument wurde kein Word-Wasserzeichen gefunden. Entfernt werden können nur Wasserzeichen, die mit der Wasserzeichen-Funktion von Word selbst hinzugefügt wurden."
    }
  },
  consent: {
    title: "Cookies und Analyse",
    description: "Wir verwenden Analyse-Cookies (Google Analytics und Microsoft Clarity), um zu verstehen, wie die Website genutzt wird. Sie laufen nur, wenn du zustimmst. Deine Dateien verlassen nie deinen Browser.",
    accept: "Akzeptieren",
    reject: "Ablehnen",
    settings: "Cookie-Einstellungen",
    statusOn: "Analyse-Cookies sind derzeit aktiviert.",
    statusOff: "Analyse-Cookies sind derzeit deaktiviert.",
    close: "Schließen"
  },
  staticPages: {
    privacyPolicy: {
      intro: "Wie TAMPDF mit deinen Dateien und Daten umgeht: Dateien werden in deinem Browser verarbeitet und nie hochgeladen; was Analyse, Cookies und Werbung erfassen; und deine Rechte.",
      updated: "Zuletzt aktualisiert: 6. November 2026.",
      sections: [
        {
          heading: "Überblick",
          text: "TAMPDF (tampdf.com) bietet kostenlose Browser-Tools für PDFs und Bilder. Diese Erklärung beschreibt, was wir erfassen und was nicht."
        },
        {
          heading: "Deine Dateien bleiben auf deinem Gerät",
          text: "Dateien werden lokal in deinem Browser verarbeitet und weder auf unsere Server noch an Dritte hochgeladen, dort gespeichert oder weitergegeben. Wenn du „In Google Drive speichern“ oder „In Dropbox speichern“ wählst, sendet dein Browser das Ergebnis direkt an den Dienst, bei dem du angemeldet bist; wir erhalten es nie."
        },
        {
          heading: "Automatisch erfasste Informationen",
          text: "Um zu verstehen, wie die Website genutzt wird, führen wir einfache eigene Zähler auf unserem Server und nutzen – nur mit deiner Einwilligung, wo diese erforderlich ist – Google Analytics und Microsoft Clarity. Sie können besuchte Seiten, ungefähren Standort, Gerät, Browser, Sprache, Verweisquelle sowie die genutzte Funktion und ihren Erfolg erfassen. Deinen Namen, deine E-Mail-Adresse oder den Inhalt deiner Dateien erfassen wir nie."
        },
        {
          heading: "Cookies und ähnliche Technologien",
          text: "Analyse- und Werbedienste können Cookies setzen oder den lokalen Speicher nutzen. Unsere Cookie-Richtlinie listet sie auf und erklärt, wie du sie steuerst; deine Auswahl kannst du jederzeit über „Cookie-Einstellungen“ im Footer ändern."
        },
        {
          heading: "Deine Rechte",
          text: "Wo Gesetze wie die DSGVO, die britische DSGVO oder der CCPA gelten, kannst du Auskunft über die bei uns gespeicherten personenbezogenen Daten verlangen, sie berichtigen oder löschen lassen, der Verarbeitung widersprechen oder sie einschränken, deine Einwilligung jederzeit widerrufen und dich bei deiner Datenschutzbehörde beschweren. Nutze für Anfragen die Kontaktseite."
        },
        {
          heading: "Speicherdauer",
          text: "Analysedaten werden nur so lange aufbewahrt, wie sie für Statistiken und zur Verbesserung des Dienstes nötig sind, gemäß den Aufbewahrungseinstellungen des jeweiligen Anbieters."
        },
        {
          heading: "Dienste und Links Dritter",
          text: "Die Website kann auf Dienste anderer Unternehmen verlinken oder sie laden (z. B. Google, Microsoft und Dropbox). Diese haben eigene Datenschutzerklärungen, für die wir nicht verantwortlich sind."
        },
        {
          heading: "Kinder",
          text: "TAMPDF richtet sich nicht an Kinder unter 13 Jahren (bzw. unter 16, wo das lokale Recht es verlangt), und wir erfassen wissentlich keine personenbezogenen Daten von Kindern."
        },
        {
          heading: "Sicherheit",
          text: "Dateien werden in deinem Browser verarbeitet und nie an uns gesendet. Die Website wird über HTTPS ausgeliefert."
        },
        {
          heading: "Änderungen dieser Erklärung",
          text: "Wir können diese Erklärung aktualisieren; das Datum „Zuletzt aktualisiert“ zeigt die neueste Fassung. Wenn du die Website weiter nutzt, akzeptierst du die Aktualisierung."
        },
        {
          heading: "Kontakt",
          text: "Fragen zu dieser Erklärung? Bitte nutze die Kontaktseite."
        }
      ]
    },
    cookiePolicy: {
      intro: "Die Cookies und ähnlichen Technologien, die TAMPDF für Einstellungen, Analyse und Werbung nutzt, und wie du sie steuerst.",
      updated: "Zuletzt aktualisiert: 6. November 2026.",
      sections: [
        {
          heading: "Was sind Cookies?",
          text: "Kleine Textdateien, die eine Website auf deinem Gerät speichert. Ähnliche Technologien wie lokaler Speicher und Pixel funktionieren vergleichbar; diese Richtlinie umfasst sie alle."
        },
        {
          heading: "Unbedingt erforderlicher Speicher",
          text: "TAMPDF merkt sich dein helles/dunkles Design und deine Cookie-Auswahl im lokalen Speicher deines Browsers. Sie enthalten keine personenbezogenen Daten und werden nie an uns gesendet."
        },
        {
          heading: "Analyse-Cookies",
          text: "Mit deiner Einwilligung, wo diese erforderlich ist, nutzen wir Google Analytics 4 (Cookies wie _ga und _ga_*) und Microsoft Clarity (wie _clck und _clsk), um den Datenverkehr zu messen und zu verstehen, wie die Website genutzt wird; Clarity kann außerdem anonymisierte Sitzungsaufzeichnungen und Heatmaps erstellen."
        },
        {
          heading: "Deine Auswahl verwalten",
          text: "Wo eine Einwilligung erforderlich ist, kannst du Analyse-Cookies im Banner akzeptieren oder ablehnen und deine Meinung jederzeit über „Cookie-Einstellungen“ im Footer ändern; der Widerruf stoppt die Analyse-Skripte und löscht deren Cookies. Du kannst Cookies auch im Browser blockieren – die Tools funktionieren weiter, da deine Dateien lokal verarbeitet werden."
        },
        {
          heading: "Weitere Möglichkeiten",
          text: "Personalisierte Werbung kannst du unter https://adssettings.google.com oder https://www.aboutads.info/choices ablehnen (in Europa: https://www.youronlinechoices.eu) und Microsoft-Daten unter https://account.microsoft.com/privacy verwalten."
        },
        {
          heading: "Änderungen und Kontakt",
          text: "Wir können diese Richtlinie aktualisieren; das Datum oben zeigt die neueste Fassung. Fragen? Nutze die Kontaktseite."
        }
      ]
    },
    termsOfService: {
      sections: [
        {
          heading: "Annahme der Bedingungen",
          text: "Mit der Nutzung von TAMPDF stimmst du diesen Nutzungsbedingungen zu. Wenn du nicht einverstanden bist, nutze unsere Tools bitte nicht."
        },
        {
          heading: "Der Dienst",
          text: "TAMPDF bietet kostenlose Browser-Tools für die Arbeit mit PDFs und Bildern. Die gesamte Verarbeitung erfolgt lokal in deinem Browser; deine Dateien werden nie auf unsere Server hochgeladen."
        },
        {
          heading: "Gewährleistungsausschluss",
          text: "Die Tools werden „wie besehen“ und „wie verfügbar“ bereitgestellt, ohne Gewährleistung jeglicher Art, weder ausdrücklich noch stillschweigend, einschließlich Richtigkeit, Zuverlässigkeit, Marktgängigkeit oder Eignung für einen bestimmten Zweck. Wir garantieren nicht, dass sie fehlerfrei, unterbrechungsfrei oder mit jeder Datei, jedem Browser oder Gerät kompatibel sind."
        },
        {
          heading: "Haftungsbeschränkung",
          text: "Soweit gesetzlich zulässig, haften TAMPDF und seine Inhaber nicht für mittelbare, zufällige, besondere oder Folgeschäden – einschließlich Datenverlust, Dateibeschädigung oder Betriebsunterbrechung –, die aus der Nutzung oder Nichtnutzbarkeit der Tools entstehen."
        },
        {
          heading: "Deine Dateien",
          text: "Du bist dafür verantwortlich, Sicherungen deiner Originale aufzubewahren und jedes Ergebnis zu prüfen, bevor du dich darauf verlässt. Da die Verarbeitung in deinem Browser stattfindet, können wir weder auf deine Dateien zugreifen noch sie wiederherstellen."
        },
        {
          heading: "Zulässige Nutzung",
          text: "Nutze TAMPDF nur für rechtmäßige Zwecke und nur mit Dateien, die du verarbeiten darfst. Nutze die Tools nicht, um Rechte anderer zu verletzen, um Wasserzeichen oder Schutz von Inhalten zu entfernen, die du nicht ändern darfst, oder um die Website zu stören."
        },
        {
          heading: "Dienste Dritter und Werbung",
          text: "Die Website kann Werbung anzeigen und auf Dienste Dritter verlinken oder sie einbinden (etwa Google AdSense, Google Drive und Dropbox). Wir kontrollieren sie nicht; für ihre Nutzung gelten deren eigene Bedingungen und Datenschutzerklärungen."
        },
        {
          heading: "Geistiges Eigentum",
          text: "Name, Logo, Design, Texte und Code von TAMPDF gehören TAMPDF oder seinen Lizenzgebern. Deine Dateien bleiben deine; wir beanspruchen keine Rechte daran."
        },
        {
          heading: "Änderungen dieser Bedingungen",
          text: "Wir können diese Bedingungen von Zeit zu Zeit aktualisieren. Die weitere Nutzung von TAMPDF nach Veröffentlichung von Änderungen gilt als Zustimmung."
        }
      ]
    },
    adsDisclosure: {
      heading: "Werbung",
      paragraphs: [
        "Wir nutzen Google AdSense, um Anzeigen zu schalten. Google und seine Partner sind Drittanbieter, die Cookies, Web-Beacons und ähnliche Technologien verwenden, um Anzeigen auf Basis deiner früheren Besuche dieser und anderer Websites auszuliefern.",
        "Personalisierte Werbung kannst du in den Google-Anzeigeneinstellungen (https://adssettings.google.com) oder unter https://www.aboutads.info/choices ablehnen; wie Google Daten von Websites nutzt, die seine Dienste verwenden, erfährst du unter https://policies.google.com/technologies/partner-sites.",
        "Im Europäischen Wirtschaftsraum, im Vereinigten Königreich und in der Schweiz werden Anzeigen nur mit deiner Einwilligung personalisiert, die du über den auf der Website angezeigten Einwilligungshinweis erteilen oder widerrufen kannst."
      ]
    }
  }
};
