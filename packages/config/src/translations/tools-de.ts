import type { ToolTranslationOverride } from "./tools-ar";

export const toolsDe: Record<string, ToolTranslationOverride> = {
  "compress-pdf": {
    name: "PDF komprimieren",
    actionLabel: "PDF komprimieren",
    shortDescription: "Verkleinere die Dateigröße eines PDFs für einfacheres Teilen und Hochladen, direkt in deinem Browser.",
    longDescription: [
      "PDF komprimieren verkleinert die Dateigröße, indem eingebettete Bilder neu codiert und unnötige Daten entfernt werden, damit dein Dokument leichter per E-Mail versendet, hochgeladen oder gespeichert werden kann.",
      "Wähle eine Komprimierungsstufe, um Dateigröße und visuelle Qualität abzuwägen, und vergleiche die Größe vorher/nachher, bevor du herunterlädst.",
    ],
    faq: [
      { question: "Um wie viel wird mein PDF kleiner?", answer: "Das hängt vom Inhalt ab. PDFs mit großen eingebetteten Bildern schrumpfen meist am stärksten, manchmal um 50-90 %. Textlastige PDFs komprimieren weniger, da es weniger zu optimieren gibt." },
      { question: "Wird mein PDF durch die Komprimierung unscharf?", answer: "Bei der Standardeinstellung ist der Qualitätsverlust minimal. Bei der stärksten Komprimierungsstufe werden Bilder aggressiver herunterskaliert, was die Schärfe bei starkem Zoom verringern kann." },
      { question: "Erfolgt die Komprimierung auf den Servern von TAMPDF?", answer: "Nein. PDF komprimieren läuft lokal in deinem Browser, deine Datei wird also nie irgendwohin hochgeladen." },
      { question: "Kann ich ein passwortgeschütztes PDF komprimieren?", answer: "Derzeit nicht. Entferne den Passwortschutz zuerst mit einem anderen Tool und komprimiere die Datei danach." },
    ],
  },
  "pdf-to-jpg": {
    name: "PDF zu JPG",
    actionLabel: "Zu JPG konvertieren",
    shortDescription: "Wandle jede Seite eines PDFs in ein hochwertiges JPG-Bild um.",
    longDescription: [
      "PDF zu JPG wandelt jede Seite deines PDFs in ein eigenes JPG-Bild um, bereit zum Teilen, Bearbeiten oder Einfügen in eine Präsentation. Ein einseitiges PDF wird als ein JPG heruntergeladen; mehrseitige PDFs werden in eine .zip-Datei gepackt.",
      "Die Umwandlung erfolgt direkt in deinem Browser mit PDF.js, sodass dein Dokument nie auf einen Server hochgeladen wird.",
    ],
    faq: [
      { question: "Was, wenn mein PDF mehrere Seiten hat?", answer: "Jede Seite wird zu einem eigenen JPG-Bild. Bei mehr als einer Seite werden sie zum Download in einer einzigen .zip-Datei gebündelt." },
      { question: "Wie scharf werden die Bilder?", answer: "Seiten werden in hoher Auflösung gerendert, geeignet für Bildschirme und die meisten Druckanforderungen. Wähle die Qualitätsstufe, um Schärfe und Dateigröße abzuwägen." },
      { question: "Wird mein PDF irgendwohin hochgeladen?", answer: "Nein. PDF zu JPG rendert jede Seite lokal in deinem Browser, deine Datei verlässt dein Gerät also nie." },
      { question: "Kann ich nur eine Seite statt des ganzen Dokuments konvertieren?", answer: "Derzeit wird jede Seite konvertiert. Nutze PDF zusammenführen oder einen PDF-Reader, um vorher eine einzelne Seite zu isolieren, wenn du nur ein Bild brauchst." },
    ],
  },
  "merge-pdf": {
    name: "PDF zusammenführen",
    actionLabel: "PDFs zusammenführen",
    shortDescription: "Kombiniere mehrere PDF-Dateien zu einem Dokument, in der Reihenfolge deiner Wahl.",
    longDescription: [
      "PDF zusammenführen lässt dich zwei oder mehr PDF-Dateien zu einem Dokument kombinieren, ganz ohne Installation. Füge deine Dateien hinzu, ziehe sie in die gewünschte Reihenfolge und lade ein einziges zusammengeführtes PDF herunter.",
      "Alles läuft lokal in deinem Browser, deine Dateien werden also nie auf einen Server hochgeladen. Das funktioniert auch mit sensiblen Verträgen, Berichten oder persönlichen Dokumenten.",
    ],
    faq: [
      { question: "Gibt es eine Grenze, wie viele PDFs ich zusammenführen kann?", answer: "Keine feste Grenze. Da das Zusammenführen im Browser erfolgt, ist der praktische Grenzwert der Speicher deines Geräts, nicht ein Server-Kontingent." },
      { question: "Kann ich die Reihenfolge der Seiten vor dem Zusammenführen ändern?", answer: "Ja. Nachdem du deine Dateien hinzugefügt hast, ziehe sie in die Reihenfolge, in der das Enddokument erscheinen soll, bevor du sie zusammenführst." },
      { question: "Werden meine Dateien auf die Server von TAMPDF hochgeladen?", answer: "Nein. PDF zusammenführen verarbeitet Dateien vollständig in deinem Browser mit clientseitiger Technologie, deine Dokumente verlassen dein Gerät also nie." },
      { question: "Beeinträchtigt das Zusammenführen die Qualität meiner PDFs?", answer: "Nein. Seiten werden unverändert kombiniert, ohne erneute Komprimierung, sodass Text, Bilder und Formatierung genau wie in den Originalen bleiben." },
    ],
  },
  "rotate-pdf": {
    name: "PDF drehen",
    actionLabel: "PDF drehen",
    shortDescription: "Drehe einzelne Seiten oder ein ganzes PDF um 90°, 180° oder 270°, direkt in deinem Browser.",
    longDescription: [
      "PDF drehen lässt dich seitwärts oder auf dem Kopf stehende Seiten in Sekunden korrigieren. Lade ein oder mehrere PDFs hoch, sieh eine Miniaturansicht jeder Seite, und drehe dann das gesamte Dokument auf einmal oder nur die betroffenen Seiten.",
      "Alles läuft lokal in deinem Browser, deine Dateien werden also nie auf einen Server hochgeladen. Lade mehrere PDFs gleichzeitig hoch, jedes wird unabhängig gedreht und zurückgegeben.",
    ],
    faq: [
      { question: "Kann ich nur eine Seite statt des ganzen Dokuments drehen?", answer: "Ja. Klicke auf die Drehen-Schaltfläche einer Seite, um nur diese zu drehen, oder nutze die Alle-drehen-Schaltflächen, um dieselbe Drehung auf alle Seiten gleichzeitig anzuwenden." },
      { question: "Welche Drehwinkel werden unterstützt?", answer: "Du kannst Seiten um 90°, 180° oder 270° in beide Richtungen drehen." },
      { question: "Kann ich mehr als ein PDF gleichzeitig drehen?", answer: "Ja. Lade mehrere PDFs hoch und jedes wird unabhängig gedreht. Bei mehr als einer Datei werden die gedrehten PDFs zum Download in einer .zip-Datei gebündelt." },
      { question: "Wird mein PDF irgendwohin hochgeladen?", answer: "Nein. PDF drehen verarbeitet alles lokal in deinem Browser, deine Dateien verlassen dein Gerät also nie." },
    ],
  },
  "compress-image": {
    name: "Bild komprimieren",
    actionLabel: "Bilder komprimieren",
    shortDescription: "Reduziere JPG-, PNG- und WebP-Dateigrößen bei erhaltener visueller Qualität.",
    longDescription: [
      "Bild komprimieren verkleinert die Dateigröße deiner JPG-, PNG- oder WebP-Fotos, sodass sie schneller hochgeladen, per E-Mail versendet und auf Websites geladen werden können.",
      "Die Komprimierung erfolgt vollständig in deinem Browser über die Canvas-API, deine Fotos verlassen dein Gerät also nie, und du kannst mehrere Bilder gleichzeitig komprimieren.",
    ],
    faq: [
      { question: "Welche Bildformate werden unterstützt?", answer: "JPG-, PNG- und WebP-Bilder werden sowohl als Eingabe als auch als Ausgabe unterstützt." },
      { question: "Kann ich mehrere Bilder gleichzeitig komprimieren?", answer: "Ja. Füge so viele Bilder hinzu, wie du möchtest — sie werden jeweils komprimiert und zum Download in einer .zip-Datei gebündelt, oder einzeln heruntergeladen." },
      { question: "Wie stark kann ich ein Bild verkleinern, ohne Qualität zu verlieren?", answer: "Die Standard-Qualitätseinstellung reduziert die Dateigröße meist um 60-80 % ohne sichtbaren Unterschied. Du kannst den Qualitätsregler für einen anderen Kompromiss anpassen." },
      { question: "Werden meine Fotos auf einen Server hochgeladen?", answer: "Nein. Die Komprimierung läuft lokal in deinem Browser über die Canvas-API, deine Bilder werden also nie irgendwohin gesendet." },
    ],
  },
  "image-to-pdf": {
    name: "JPG zu PDF",
    actionLabel: "Zu PDF konvertieren",
    shortDescription: "Wandle ein oder mehrere JPG-Bilder in ein einziges PDF-Dokument um.",
    longDescription: [
      "JPG zu PDF kombiniert deine JPG-Fotos zu einer einzigen PDF-Datei, ein Bild pro Seite, in der Reihenfolge deiner Wahl.",
      "Perfekt, um gescannte Dokumente, Belege oder Fotos in ein teilbares PDF zu verwandeln. Alles wird lokal in deinem Browser verarbeitet, für vollständige Privatsphäre.",
    ],
    faq: [
      { question: "Kann ich mehrere Bilder zu einem PDF kombinieren?", answer: "Ja. Füge mehrere Bilder hinzu und jedes wird zu einer Seite im resultierenden PDF, in der Reihenfolge, in der du sie anordnest." },
      { question: "Welche Seitengröße wird für das PDF verwendet?", answer: "Jede Seite wird an die Abmessungen und Ausrichtung ihres Quellbilds angepasst, sodass nichts zugeschnitten oder gestreckt wird." },
      { question: "Werden meine Bilder irgendwohin hochgeladen?", answer: "Nein. Die Umwandlung erfolgt vollständig in deinem Browser, deine Bilder bleiben also auf deinem Gerät." },
      { question: "Werden auch PNG-Bilder unterstützt?", answer: "Ja, PNG-Bilder werden zusätzlich zu JPG unterstützt. HEIC-Fotos von einem iPhone werden noch nicht unterstützt; konvertiere sie zuerst über die Teilen-Optionen deines Telefons in JPG." },
    ],
  },
  "rotate-images": {
    name: "Bilder drehen",
    actionLabel: "Bilder drehen",
    shortDescription: "Drehe ein oder mehrere JPG-, PNG- oder WebP-Bilder um 90°, 180° oder 270°.",
    longDescription: [
      "Bilder drehen korrigiert seitwärts oder auf dem Kopf stehende Fotos in Sekunden. Lade ein oder mehrere Bilder hoch, drehe jedes einzeln oder alle auf einmal, und lade die Ergebnisse herunter.",
      "Alles läuft lokal in deinem Browser, deine Fotos werden also nie auf einen Server hochgeladen. Lade mehrere Bilder gleichzeitig hoch, jedes wird unabhängig gedreht und zurückgegeben.",
    ],
    faq: [
      { question: "Welche Bildformate werden unterstützt?", answer: "JPG-, PNG- und WebP-Bilder werden unterstützt. Beim Drehen bleibt das Originalformat erhalten." },
      { question: "Kann ich nur ein Bild statt aller drehen?", answer: "Ja. Klicke auf die Drehen-Schaltfläche eines Bildes, um nur dieses zu drehen, oder nutze die Alle-drehen-Schaltflächen, um dieselbe Drehung auf alle Bilder gleichzeitig anzuwenden." },
      { question: "Welche Drehwinkel werden unterstützt?", answer: "Du kannst Bilder um 90°, 180° oder 270° drehen." },
      { question: "Werden meine Fotos irgendwohin hochgeladen?", answer: "Nein. Bilder drehen verarbeitet alles lokal in deinem Browser, deine Fotos verlassen dein Gerät also nie." },
    ],
  },
  "split-pdf": {
    name: "PDF aufteilen",
    actionLabel: "PDF aufteilen",
    shortDescription: "Teile ein PDF anhand von Seitenbereichen oder in gleich große Teile in mehrere kleinere Dateien auf.",
    longDescription: [
      "PDF aufteilen zerlegt ein großes Dokument in separate PDF-Dateien, ohne die Seiten selbst zu verändern. Gib Seitenbereiche wie 1-3, 5, 8-10 ein, um genau die Abschnitte herauszuziehen, die du brauchst, oder teile das gesamte Dokument in gleich große Teile mit einer festen Seitenzahl.",
      "Alles läuft in deinem Browser — das PDF wird nie auf einen Server hochgeladen. Ein einzelnes Ergebnis wird als ein PDF heruntergeladen; mehrere Teile werden in eine .zip-Datei gebündelt.",
    ],
    faq: [
      { question: "Wie wähle ich, welche Seiten in welche Datei kommen?", answer: "Nutze das Bereichsfeld: etwas wie „1-3, 5, 8-10\" erzeugt drei PDFs — Seiten 1 bis 3, Seite 5 allein, und Seiten 8 bis 10. Oder wechsle zu „Alle N Seiten\", um das Dokument in gleiche Teile zu schneiden." },
      { question: "Behalten die geteilten Dateien ihre ursprüngliche Qualität?", answer: "Ja. Seiten werden unverändert kopiert, ohne erneute Komprimierung, sodass Text, Bilder, Schriftarten und Layout identisch mit der Quelle sind." },
      { question: "Wird mein PDF irgendwohin hochgeladen?", answer: "Nein. Das Aufteilen erfolgt vollständig in deinem Browser, dein Dokument verlässt dein Gerät also nie." },
      { question: "Was passiert mit Formularfeldern oder digitalen Signaturen?", answer: "Seiteninhalt und Formular-Widgets bleiben visuell erhalten, aber interaktives Formularverhalten und Signaturen werden nicht in die geteilten Dateien übernommen. Wandle sie danach bei Bedarf um oder signiere erneut." },
    ],
  },
  "delete-pdf-pages": {
    name: "PDF-Seiten löschen",
    actionLabel: "Seiten löschen",
    shortDescription: "Entferne unerwünschte Seiten aus einem PDF und lade das bereinigte Dokument herunter.",
    longDescription: [
      "PDF-Seiten löschen lässt dich Seiten entfernen, die du nicht brauchst — leere Scans, Deckblätter, doppelte Seiten — und den Rest in ursprünglicher Reihenfolge behalten. Sieh eine Miniaturansicht jeder Seite, tippe die zu entfernenden an und lade das Ergebnis herunter.",
      "Der gesamte Vorgang läuft lokal in deinem Browser, dein PDF wird also nie hochgeladen. Die verbleibenden Seiten werden ohne erneute Komprimierung kopiert, sodass nichts an Qualität verliert.",
    ],
    faq: [
      { question: "Kann ich mehrere Seiten gleichzeitig löschen?", answer: "Ja. Wähle so viele Seiten wie gewünscht im Miniaturraster aus und lösche sie alle in einem Schritt." },
      { question: "Kann ich alle Seiten entfernen?", answer: "Nein — mindestens eine Seite muss übrig bleiben, daher ist die Schaltfläche deaktiviert, wenn du alle ausgewählt hast." },
      { question: "Verkleinert das Löschen von Seiten die Dateigröße?", answer: "Meist etwas, da der Inhalt der entfernten Seiten wegfällt. Gemeinsam genutzte Ressourcen wie Schriftarten können erhalten bleiben, nutze danach also PDF komprimieren, wenn die Größe wichtig ist." },
      { question: "Werden meine Dateien auf einen Server hochgeladen?", answer: "Nein. Alles geschieht in deinem Browser und dein PDF verlässt dein Gerät nie." },
    ],
  },
  "reorder-pdf-pages": {
    name: "PDF-Seiten neu anordnen",
    actionLabel: "Seiten neu anordnen",
    shortDescription: "Ziehe PDF-Seiten in eine neue Reihenfolge und speichere das umsortierte Dokument.",
    longDescription: [
      "PDF-Seiten neu anordnen zeigt dir eine Miniaturansicht jeder Seite, die du in die gewünschte Reihenfolge ziehen kannst — eine Seite nach vorne verschieben, zwei Abschnitte tauschen, oder das ganze Dokument umkehren. Verschiebe-Schaltflächen gibt es auch für präzise Änderungen Seite für Seite.",
      "Das Umordnen erfolgt vollständig in deinem Browser, dein PDF wird also nie hochgeladen. Seiten werden unverändert kopiert, Qualität und Formatierung bleiben also unangetastet.",
    ],
    faq: [
      { question: "Wie verschiebe ich eine Seite?", answer: "Ziehe ihre Miniaturansicht an die neue Position, oder nutze die Auf/Ab-Schaltflächen an jeder Seite für einzelne Schritte. Die neue Reihenfolge wird gespeichert, wenn du auf die Schaltfläche klickst." },
      { question: "Kann ich das ganze Dokument umkehren?", answer: "Ja — ziehe die Seiten in umgekehrter Reihenfolge, oder nutze die Verschiebe-Schaltflächen. Beliebig viele Seiten können in einem Durchgang neu geordnet werden." },
      { question: "Ändert das Neuanordnen den Seiteninhalt?", answer: "Nein. Nur die Seitenreihenfolge ändert sich — Text, Bilder und Layout jeder Seite bleiben genau gleich." },
      { question: "Wird das PDF irgendwohin hochgeladen?", answer: "Nein. Das Neuanordnen läuft lokal in deinem Browser und deine Datei verlässt dein Gerät nie." },
    ],
  },
  "crop-pdf": {
    name: "PDF zuschneiden",
    actionLabel: "PDF zuschneiden",
    shortDescription: "Schneide die Ränder jeder PDF-Seite zu, indem du Werte für oben, unten und die Seiten festlegst.",
    longDescription: [
      "PDF zuschneiden entfernt unerwünschten Leerraum oder Scan-Ränder von den Kanten deiner Seiten. Lege fest, wie viel oben, unten, links und rechts als Prozentsatz zugeschnitten werden soll, beobachte die Live-Vorschau und wende es auf alle Seiten gleichzeitig an.",
      "Der Zuschnitt passt den sichtbaren Seitenbereich an, ohne Inhalt zu löschen — die zugeschnittenen Teile werden nur verborgen. Alles läuft in deinem Browser, dein PDF wird also nie hochgeladen.",
    ],
    faq: [
      { question: "Löscht der Zuschnitt den Inhalt außerhalb des Zuschnittbereichs?", answer: "Nein. PDF zuschneiden ändert die Zuschneidebox der Seite, was den äußeren Bereich in Anzeigeprogrammen und beim Drucken verbirgt. Der zugrunde liegende Inhalt bleibt in der Datei und kann wiederhergestellt werden." },
      { question: "Wird derselbe Zuschnitt auf alle Seiten angewendet?", answer: "Ja. Die von dir festgelegten Ränder werden auf alle Seiten angewendet. Seiten unterschiedlicher Größe werden jeweils um denselben Prozentsatz zugeschnitten." },
      { question: "Kann ich ein gescanntes Dokument zuschneiden, um den schwarzen Rand zu entfernen?", answer: "Ja — das ist ein häufiger Anwendungsfall. Erhöhe die Ränder, bis die Vorschau nur den Inhalt zeigt, den du behalten möchtest." },
      { question: "Wird meine Datei auf einen Server hochgeladen?", answer: "Nein. Der Zuschnitt erfolgt vollständig in deinem Browser und dein PDF bleibt auf deinem Gerät." },
    ],
  },
  "resize-pdf": {
    name: "PDF-Größe ändern",
    actionLabel: "PDF-Größe ändern",
    shortDescription: "Ändere die PDF-Seitengröße auf A4, Letter oder eine eigene Skalierung, mit angepasstem, zentriertem Inhalt.",
    longDescription: [
      "PDF-Größe ändern ändert die physische Seitengröße deines Dokuments. Wähle eine Standardgröße wie A4 oder US Letter und jede Seite wird passend skaliert und zentriert, oder nutze einen Prozentsatz, um die Seiten proportional zu verkleinern oder zu vergrößern.",
      "Die Größenänderung läuft in deinem Browser ohne Upload. Der Inhalt wird zusammen mit der Seite skaliert, sodass nichts abgeschnitten wird und das Layout proportional bleibt.",
    ],
    faq: [
      { question: "Welche Seitengrößen kann ich wählen?", answer: "A4 und US Letter im Hoch- oder Querformat, plus A3 und A5. Du kannst auch einen Skalierungsprozentsatz eingeben, um die Größe zu ändern, ohne das Seitenverhältnis zu verändern." },
      { question: "Wird mein Inhalt gestreckt?", answer: "Nein. Der Inhalt wird gleichmäßig skaliert, um zur neuen Größe zu passen, und auf der Seite zentriert, sodass Proportionen erhalten bleiben und nichts abgeschnitten wird." },
      { question: "Kann ich damit die Dateigröße eines PDFs verkleinern?", answer: "Nicht direkt — dies ändert die Seitenabmessungen, nicht das Dateigewicht. Nutze PDF komprimieren, um die Dateigröße zu reduzieren." },
      { question: "Werden meine Dateien irgendwohin hochgeladen?", answer: "Nein. Die Größenänderung erfolgt lokal in deinem Browser und dein PDF verlässt dein Gerät nie." },
    ],
  },
  "png-to-pdf": {
    name: "PNG zu PDF",
    actionLabel: "Zu PDF konvertieren",
    shortDescription: "Wandle ein oder mehrere PNG-Bilder in ein einziges PDF-Dokument um, ein Bild pro Seite.",
    longDescription: [
      "PNG zu PDF kombiniert deine PNG-Bilder zu einer PDF-Datei, wobei jedes Bild auf seiner eigenen Seite in Originalauflösung steht. Füge mehrere Bilder hinzu, ordne ihre Reihenfolge und lade ein einziges Dokument herunter.",
      "Ideal, um Screenshots, Diagramme oder exportierte Grafiken in ein teilbares PDF zu verwandeln. Die Umwandlung erfolgt vollständig in deinem Browser, deine Bilder werden also nie hochgeladen. Transparente Bereiche werden auf weißem Hintergrund platziert.",
    ],
    faq: [
      { question: "Kann ich mehrere PNGs zu einem PDF kombinieren?", answer: "Ja. Füge so viele PNG-Bilder hinzu, wie du möchtest, und jedes wird zu einer Seite im resultierenden PDF, in der Reihenfolge, in der du sie anordnest." },
      { question: "Welche Seitengröße wird verwendet?", answer: "Jede Seite entspricht den Pixelabmessungen ihres Quellbilds, sodass Bilder nicht zugeschnitten oder gestreckt werden." },
      { question: "Was passiert mit transparenten Teilen des Bildes?", answer: "Die Transparenz wird auf weißem Hintergrund geglättet, sodass die Seite in jedem PDF-Betrachter gleich aussieht." },
      { question: "Werden meine Bilder auf einen Server hochgeladen?", answer: "Nein. Die Umwandlung erfolgt vollständig in deinem Browser und deine Bilder bleiben auf deinem Gerät." },
    ],
  },
  "extract-pdf-pages": {
    name: "PDF-Seiten extrahieren",
    actionLabel: "Seiten extrahieren",
    shortDescription: "Zieh ausgewählte Seiten aus einem PDF in eine neue Datei — oder speichere jede Seite als eigenes PDF.",
    longDescription: [
      "PDF-Seiten extrahieren lässt dich genau die Seiten auswählen, die du aus einem Dokument brauchst, und als neues PDF speichern. Sieh eine Miniaturansicht jeder Seite, tippe die zu behaltenden an und lade sie zusammen herunter — oder als separate einseitige PDFs in einer ZIP-Datei.",
      "Deine Originaldatei bleibt unverändert, und Seiten werden unverändert kopiert, sodass Text, Bilder und Formatierung unangetastet bleiben. Alles geschieht in deinem Browser, das PDF wird also nie hochgeladen.",
    ],
    faq: [
      { question: "Was ist der Unterschied zwischen Extrahieren und Aufteilen?", answer: "Extrahieren speichert nur die ausgewählten Seiten in einem neuen PDF. Aufteilen unterteilt das gesamte Dokument in mehrere Teile nach Seitenbereichen oder fester Größe." },
      { question: "Kann ich jede extrahierte Seite als separate Datei speichern?", answer: "Ja. Wähle „Separate PDFs\" und jede ausgewählte Seite wird zu ihrem eigenen PDF, gebündelt in einem einzigen .zip-Download." },
      { question: "Verlieren die extrahierten Seiten an Qualität?", answer: "Nein. Seiten werden ohne erneute Komprimierung kopiert, sodass sie genau wie das Original aussehen. Interaktive Formularfelder können zu regulärem Seiteninhalt werden." },
      { question: "Wird mein PDF auf einen Server hochgeladen?", answer: "Nein. Seiten werden lokal in deinem Browser extrahiert und deine Datei verlässt dein Gerät nie." },
    ],
  },
  "add-page-numbers": {
    name: "Seitenzahlen hinzufügen",
    actionLabel: "Seitenzahlen hinzufügen",
    shortDescription: "Nummeriere die Seiten eines PDFs, mit frei wählbarer Position, Format und Startnummer.",
    longDescription: [
      "Seitenzahlen hinzufügen stempelt eine Zahl auf jede Seite deines PDFs. Wähle eine von sechs Positionen, einen Stil wie „1\", „1 / 10\" oder „Seite 1 von 10\", lege die Startnummer fest und überspringe optional das Deckblatt.",
      "Zahlen werden als echter Text in einer Standardschrift gezeichnet, sodass sie scharf gedruckt werden und auch auf gedrehten Seiten aufrecht bleiben. Der gesamte Vorgang läuft in deinem Browser — dein Dokument wird nie hochgeladen.",
    ],
    faq: [
      { question: "Kann ich die Nummerierung bei einer anderen Zahl als 1 beginnen?", answer: "Ja. Lege jede beliebige Startnummer fest — nützlich, wenn dein PDF ein Kapitel oder Anhang eines größeren Dokuments ist." },
      { question: "Kann ich das Deckblatt ohne Nummer lassen?", answer: "Ja. Aktiviere „Erste Seite nicht nummerieren\" und die Nummerierung beginnt auf der zweiten Seite." },
      { question: "Welche Ziffern werden verwendet?", answer: "Standardziffern (1, 2, 3), die in jedem PDF-Reader korrekt angezeigt werden. Beschriftungen wie „Seite 1 von 10\" werden auf Deutsch geschrieben." },
      { question: "Wird meine Datei hochgeladen?", answer: "Nein. Seitenzahlen werden lokal in deinem Browser hinzugefügt und dein PDF bleibt auf deinem Gerät." },
    ],
  },
  "add-watermark": {
    name: "Wasserzeichen hinzufügen",
    actionLabel: "Wasserzeichen hinzufügen",
    shortDescription: "Setze Text wie VERTRAULICH oder ENTWURF auf jede Seite eines PDFs.",
    longDescription: [
      "Wasserzeichen hinzufügen platziert deinen Text auf jeder Seite eines PDFs — einmal zentriert oder wiederholt über die Seite. Wähle Farbe, Deckkraft, Größe und Winkel, und sieh eine Live-Vorschau auf deiner ersten Seite, bevor du es anwendest.",
      "Deutsch und andere Schriften werden vollständig unterstützt. Das Wasserzeichen wird als Standard-Wasserzeichenobjekt gespeichert, und alles geschieht in deinem Browser, dein Dokument wird also nie hochgeladen.",
    ],
    faq: [
      { question: "Kann ich das Wasserzeichen auf Deutsch schreiben?", answer: "Ja. Der Text wird mit den Schriften deines Browsers gerendert, Deutsch und andere Schriften werden also korrekt dargestellt." },
      { question: "Kann das Wasserzeichen über die Seite wiederholt werden?", answer: "Ja. Wähle das Layout „Wiederholt\", um den Text über jede Seite zu kacheln, oder „Einmal, zentriert\" für einen einzelnen Stempel." },
      { question: "Kann das Wasserzeichen später entfernt werden?", answer: "Es wird als Standard-Wasserzeichenobjekt gespeichert, sodass Tools, die Wasserzeichen erkennen — einschließlich TAMPDFs Wasserzeichen entfernen — es entfernen können. Es ist keine Sicherheitsfunktion." },
      { question: "Wird mein PDF irgendwohin hochgeladen?", answer: "Nein. Das Wasserzeichen wird lokal in deinem Browser angewendet." },
    ],
  },
  "remove-watermark": {
    name: "Wasserzeichen entfernen",
    actionLabel: "Wasserzeichen entfernen",
    shortDescription: "Entferne Wasserzeichen, die als Wasserzeichen-Objekte in ein PDF eingefügt wurden.",
    longDescription: [
      "Wasserzeichen entfernen findet und löscht Wasserzeichen, die als Wasserzeichenobjekte hinzugefügt wurden — die Art, die Adobe Acrobat, TAMPDF und die meisten PDF-Editoren erstellen — zusammen mit Wasserzeichen-Anmerkungen und Ebenen namens „Watermark\". Der Rest jeder Seite bleibt genau erhalten.",
      "Wasserzeichen, die Teil eines gescannten Bildes sind oder in normalen Seitentext eingebettet wurden, haben keinen Marker, der sie vom echten Inhalt unterscheidet, sie können also nicht automatisch entfernt werden. Bitte entferne Wasserzeichen nur aus Dokumenten, die du bearbeiten darfst. Die Verarbeitung erfolgt in deinem Browser, deine Datei wird also nie hochgeladen.",
    ],
    faq: [
      { question: "Welche Wasserzeichen können entfernt werden?", answer: "Als Wasserzeichenobjekte, Wasserzeichen-Anmerkungen oder Ebenen namens „Watermark\" hinzugefügte Wasserzeichen — einschließlich solcher, die von Adobe Acrobat und TAMPDFs Wasserzeichen-hinzufügen-Tool erstellt wurden." },
      { question: "Warum wurde das Wasserzeichen in meiner Datei nicht entfernt?", answer: "Wenn ein Wasserzeichen Teil eines gescannten Seitenbildes ist oder in den Seitentext eingeflacht wurde, kann es nicht ohne Beschädigung der Seite vom echten Inhalt getrennt werden." },
      { question: "Beeinträchtigt das Entfernen eines Wasserzeichens den Rest der Seite?", answer: "Nein. Nur der markierte Wasserzeicheninhalt wird entfernt; Text, Bilder und Layout bleiben unberührt." },
      { question: "Wird meine Datei hochgeladen?", answer: "Nein. Das PDF wird lokal in deinem Browser verarbeitet." },
    ],
  },
  "pdf-to-images": {
    name: "PDF zu Bildern",
    actionLabel: "Zu Bildern konvertieren",
    shortDescription: "Wandle jede Seite eines PDFs in PNG-, JPG- oder WEBP-Bilder um, heruntergeladen als ZIP.",
    longDescription: [
      "PDF zu Bildern rendert jede Seite deines PDFs als eigenes Bild im gewünschten Format: PNG für den schärfsten Text, JPG für die kleinsten Dateien, oder WEBP für moderne, kompakte Bilder. Wähle eine Auflösung und jede Seite wird exportiert und in eine einzige .zip-Datei gepackt.",
      "Das Rendern erfolgt direkt in deinem Browser mit PDF.js, sodass dein Dokument nie auf einen Server hochgeladen wird.",
    ],
    faq: [
      { question: "Welches Bildformat sollte ich wählen?", answer: "PNG hält Text und Grafiken perfekt scharf. JPG erzeugt kleinere Dateien und eignet sich für Fotos. WEBP bietet ein gutes Gleichgewicht für die Nutzung im Web." },
      { question: "Welche Auflösung haben die Bilder?", answer: "Standard rendert mit 108 dpi, Hoch mit 144 dpi, und Maximal mit 216 dpi — hoch genug zum Drucken der meisten Dokumente." },
      { question: "Wie bekomme ich alle Seiten auf einmal?", answer: "Jede Seite wird konvertiert und in eine .zip-Datei gepackt. Ein einseitiges PDF wird als einzelnes Bild heruntergeladen." },
      { question: "Wird mein PDF hochgeladen?", answer: "Nein. Seiten werden lokal in deinem Browser gerendert." },
    ],
  },
  "images-to-pdf": {
    name: "Bilder zu PDF",
    actionLabel: "PDF erstellen",
    shortDescription: "Kombiniere JPG-, PNG- und WEBP-Bilder zu einem PDF, in der Reihenfolge deiner Wahl.",
    longDescription: [
      "Bilder zu PDF verwandelt eine Reihe von Fotos, Scans oder Screenshots in ein einziges PDF-Dokument. Füge JPG-, PNG- oder WEBP-Bilder hinzu, ziehe die Miniaturansichten in die gewünschte Reihenfolge, und wähle eine A4- oder Letter-Seite (mit automatischem Hoch- oder Querformat) oder Seiten, die zu jedem Bild passen.",
      "Füge einen Rand für ein sauberes Druckbild hinzu. Transparente Bereiche werden auf Weiß platziert, und die gesamte Umwandlung läuft in deinem Browser, sodass deine Bilder nie hochgeladen werden.",
    ],
    faq: [
      { question: "Kann ich die Reihenfolge der Bilder ändern?", answer: "Ja. Ziehe die Miniaturansichten oder nutze die Pfeiltasten, um die Seitenreihenfolge vor dem Erstellen des PDFs festzulegen." },
      { question: "Welche Bildformate werden unterstützt?", answer: "JPG, PNG und WEBP. Du kannst Formate im selben PDF mischen." },
      { question: "Welche Seitengröße wird das PDF verwenden?", answer: "Wähle A4 oder Letter — jedes Bild wird an die Seite angepasst und bei Bedarf ins Querformat gedreht — oder „An Bild anpassen\", damit jede Seite genau die Größe ihres Bildes hat." },
      { question: "Werden meine Bilder hochgeladen?", answer: "Nein. Das PDF wird lokal in deinem Browser erstellt." },
    ],
  },
  "flip-pdf": {
    name: "PDF spiegeln",
    actionLabel: "PDF spiegeln",
    shortDescription: "Spiegle die Seiten eines PDFs horizontal oder vertikal.",
    longDescription: [
      "PDF spiegeln spiegelt jede Seite deines Dokuments — von links nach rechts oder von oben nach unten. Nützlich zum Drucken von Bügelbildtransfers, zum Korrigieren von Scans, die von der falschen Seite gemacht wurden, oder zur Vorbereitung gespiegelter Grafiken.",
      "Sieh dir das Ergebnis auf deiner ersten Seite an, bevor du es anwendest. Das Spiegeln berücksichtigt auch gedrehte Seiten, und alles läuft in deinem Browser, deine Datei wird also nie hochgeladen.",
    ],
    faq: [
      { question: "Was ist der Unterschied zwischen Spiegeln und Drehen?", answer: "Drehen dreht eine Seite in 90°-Schritten. Spiegeln erzeugt ein Spiegelbild, sodass Text rückwärts erscheint — was du für Transfers und manche Druckaufträge brauchst." },
      { question: "Kann ich nur eine Seite spiegeln?", answer: "Das Spiegeln gilt für alle Seiten. Um eine einzelne Seite zu spiegeln, extrahiere sie zuerst mit PDF-Seiten extrahieren." },
      { question: "Verringert das Spiegeln die Qualität?", answer: "Nein. Seiten werden transformiert, nicht neu gerendert, sodass Text und Grafiken so scharf wie das Original bleiben." },
      { question: "Wird mein PDF hochgeladen?", answer: "Nein. Das Spiegeln erfolgt lokal in deinem Browser." },
    ],
  },
  "edit-pdf-metadata": {
    name: "PDF-Metadaten bearbeiten",
    actionLabel: "Metadaten bearbeiten",
    shortDescription: "Ändere Titel, Autor, Betreff und Schlagwörter eines PDFs.",
    longDescription: [
      "PDF-Metadaten bearbeiten lässt dich die im PDF gespeicherten Dokumenteigenschaften ansehen und ändern — Titel, Autor, Betreff, Schlagwörter, Ersteller und Produzent. Das ist es, was PDF-Reader, Suchmaschinen und Dateimanager über dein Dokument anzeigen.",
      "Lasse ein Feld leer, um es zu entfernen. Der Seiteninhalt wird nicht berührt, und die gesamte Bearbeitung erfolgt in deinem Browser, deine Datei wird also nie hochgeladen.",
    ],
    faq: [
      { question: "Warum PDF-Metadaten bearbeiten?", answer: "Ein klarer Titel und Autor machen Dokumente leichter auffindbar und professioneller beim Teilen, und Suchmaschinen können sie beim Indexieren von PDFs nutzen." },
      { question: "Ändert das Bearbeiten der Metadaten den Inhalt des Dokuments?", answer: "Nein. Nur die Dokumenteigenschaften ändern sich; Seiten, Text und Bilder bleiben genau gleich." },
      { question: "Wie entferne ich eine Eigenschaft?", answer: "Leere das Feld und speichere. Leere Felder werden aus der Datei entfernt." },
      { question: "Wird mein PDF hochgeladen?", answer: "Nein. Die Eigenschaften werden lokal in deinem Browser bearbeitet." },
    ],
  },
  "remove-pdf-metadata": {
    name: "PDF-Metadaten entfernen",
    actionLabel: "Metadaten entfernen",
    shortDescription: "Entferne Autor, Titel, Software und andere versteckte Eigenschaften aus einem PDF, bevor du es teilst.",
    longDescription: [
      "PDF-Metadaten entfernen löscht die Dokumenteigenschaften und versteckten Daten, die ein PDF mit sich trägt — Autor, Titel, Betreff, Schlagwörter, die zur Erstellung verwendete Software, Erstellungsdaten und eingebettete XMP-Metadatenpakete.",
      "Das ist ein schneller Datenschutzschritt vor dem öffentlichen Teilen einer Datei. Der Seiteninhalt bleibt unberührt, und das Bereinigen erfolgt in deinem Browser, deine Datei wird also nie hochgeladen.",
    ],
    faq: [
      { question: "Welche Informationen werden entfernt?", answer: "Titel, Autor, Betreff, Schlagwörter, Ersteller- und Produzentensoftware, Erstellungs- und Änderungsdaten, eingebettete XMP-Metadaten und anwendungsinterne Daten." },
      { question: "Ändert das, wie das Dokument aussieht?", answer: "Nein. Nur versteckte Eigenschaften werden entfernt; jede Seite sieht genau gleich aus." },
      { question: "Entfernt das persönliche Informationen, die auf den Seiten gedruckt sind?", answer: "Nein. Es entfernt nur Metadaten. Auf den Seiten gedruckte Namen oder Details bleiben sichtbar." },
      { question: "Wird mein PDF hochgeladen?", answer: "Nein. Die Datei wird lokal in deinem Browser bereinigt." },
    ],
  },
  "pdf-info": {
    name: "PDF-Info",
    actionLabel: "PDF prüfen",
    shortDescription: "Sieh Seitenanzahl, Seitengrößen, Version und Dokumenteigenschaften eines PDFs auf einen Blick.",
    longDescription: [
      "PDF-Info liest ein PDF und zeigt, was darin steckt: die Seitenanzahl, die Größe jeder Seite in Millimetern mit Papiernamen wie A4 oder Letter, die PDF-Version, ob es verschlüsselt ist oder ein ausfüllbares Formular enthält, sowie Titel, Autor, Software und Daten.",
      "Praktisch vor dem Drucken, Einreichen oder Konvertieren einer Datei. Das Dokument wird nur gelesen — nie geändert — und alles geschieht in deinem Browser, sodass es nie hochgeladen wird.",
    ],
    faq: [
      { question: "Welche Details zeigt PDF-Info?", answer: "Seitenanzahl, Seitengrößen mit Papiernamen, PDF-Version, Dateigröße, Verschlüsselung, ausfüllbare Formulare, schnelle Webansicht, und Dokumenteigenschaften wie Titel, Autor und Erstellungsdatum." },
      { question: "Ändert PDF-Info meine Datei?", answer: "Nein. Das PDF wird nur gelesen; nichts wird geändert oder gespeichert." },
      { question: "Kann ich ein passwortgeschütztes PDF prüfen?", answer: "Dateien, die zum Öffnen ein Passwort benötigen, können ohne dieses nicht gelesen werden. Dateien mit nur Bearbeitungseinschränkungen werden als verschlüsselt angezeigt." },
      { question: "Wird mein PDF hochgeladen?", answer: "Nein. Es wird lokal in deinem Browser gelesen." },
    ],
  },
  "resize-image": {
    name: "Bildgröße ändern",
    actionLabel: "Bildgröße ändern",
    shortDescription: "Ändere Breite und Höhe von JPG-, PNG- und WEBP-Bildern — prozentual oder in genauen Pixeln.",
    longDescription: [
      "Bildgröße ändern ändert die Abmessungen deiner Fotos und Grafiken. Skaliere prozentual, oder gib eine exakte Breite und Höhe mit gesperrtem Seitenverhältnis ein, damit nichts gestreckt aussieht. Ändere die Größe mehrerer Bilder gleichzeitig und lade sie zusammen als .zip herunter.",
      "Bilder behalten ihr Originalformat, und hochwertige Glättung hält verkleinerte Bilder scharf. Alles läuft in deinem Browser, deine Bilder werden also nie hochgeladen.",
    ],
    faq: [
      { question: "Wird die Größenänderung mein Bild unscharf machen?", answer: "Ein Bild zu verkleinern hält es scharf. Über die Originalgröße hinaus zu vergrößern kann keine Details hinzufügen, sodass große Vergrößerungen weich wirken können." },
      { question: "Kann ich mehrere Bilder gleichzeitig in der Größe ändern?", answer: "Ja. Füge bis zu 20 Bilder hinzu; mit gesperrtem Seitenverhältnis behält jedes seine eigenen Proportionen bei der von dir festgelegten Breite." },
      { question: "Welches Format hat das größenveränderte Bild?", answer: "Dasselbe wie das Original — JPG bleibt JPG, PNG bleibt PNG, und WEBP bleibt WEBP, wo dein Browser es unterstützt." },
      { question: "Werden meine Bilder hochgeladen?", answer: "Nein. Die Größenänderung erfolgt lokal in deinem Browser." },
    ],
  },
  "crop-image": {
    name: "Bild zuschneiden",
    actionLabel: "Bild zuschneiden",
    shortDescription: "Schneide ein Bild mit einem verschiebbaren Rahmen auf den gewünschten Bereich zu.",
    longDescription: [
      "Bild zuschneiden entfernt unerwünschte Ränder von einem Foto oder Screenshot. Ziehe den Zuschneiderahmen oder seine Ecken über die Vorschau — oder feinjustiere jede Kante mit einem Regler — und sieh die genaue Größe des Ergebnisses in Pixeln.",
      "Das zugeschnittene Bild behält sein Originalformat und seine Qualität, und der gesamte Vorgang läuft in deinem Browser, dein Bild wird also nie hochgeladen.",
    ],
    faq: [
      { question: "Kann ich auf genaue Abmessungen zuschneiden?", answer: "Passe jede Kante mit den Reglern an und beobachte, wie sich die Ergebnisgröße in Pixeln aktualisiert." },
      { question: "Verringert das Zuschneiden die Bildqualität?", answer: "Nein. Die beibehaltenen Pixel werden unverändert kopiert; nur die Teile außerhalb des Rahmens werden entfernt." },
      { question: "Welche Formate kann ich zuschneiden?", answer: "JPG, PNG und WEBP. Das Ergebnis behält dasselbe Format wie das Original." },
      { question: "Wird mein Bild hochgeladen?", answer: "Nein. Das Zuschneiden erfolgt lokal in deinem Browser." },
    ],
  },
  "flip-image": {
    name: "Bild spiegeln",
    actionLabel: "Bilder spiegeln",
    shortDescription: "Spiegle Bilder horizontal oder vertikal — einzeln oder im Stapel.",
    longDescription: [
      "Bild spiegeln erzeugt ein Spiegelbild deiner Fotos: von links nach rechts, oder von oben nach unten. Praktisch, um Selfies mit der Frontkamera zu korrigieren, Spiegelungen zu erzeugen, oder Designs für Drucktransfers vorzubereiten.",
      "Spiegle mehrere Bilder gleichzeitig, sieh das Ergebnis sofort in der Vorschau, und lade sie in ihrem Originalformat herunter. Alles läuft in deinem Browser, deine Bilder werden also nie hochgeladen.",
    ],
    faq: [
      { question: "Was ist der Unterschied zwischen Spiegeln und Drehen?", answer: "Drehen dreht ein Bild in 90°-Schritten. Spiegeln erzeugt ein Spiegelbild, wie beim Blick in einen Spiegel." },
      { question: "Kann ich mehrere Bilder gleichzeitig spiegeln?", answer: "Ja. Füge bis zu 20 Bilder hinzu und sie werden alle auf die gleiche Weise gespiegelt, dann zusammen als .zip heruntergeladen." },
      { question: "Verringert das Spiegeln die Qualität?", answer: "Kein merklicher Verlust — PNG bleibt verlustfrei, und JPG und WEBP werden in hoher Qualität gespeichert." },
      { question: "Werden meine Bilder hochgeladen?", answer: "Nein. Das Spiegeln erfolgt lokal in deinem Browser." },
    ],
  },
  "png-to-jpg": {
    name: "PNG zu JPG",
    actionLabel: "Zu JPG konvertieren",
    shortDescription: "Wandle PNG-Bilder in JPG um, für kleinere und weiter verbreitet kompatible Dateien.",
    longDescription: [
      "PNG zu JPG wandelt deine PNG-Bilder in JPG-Dateien um, die meist deutlich kleiner sind — ideal für Fotos, E-Mail-Anhänge und Upload-Formulare, die nur JPG akzeptieren. Konvertiere mehrere Bilder gleichzeitig und passe die Qualität an, um Größe und Schärfe abzuwägen.",
      "JPG unterstützt keine Transparenz, transparente Bereiche werden also mit Weiß gefüllt. Die Umwandlung erfolgt vollständig in deinem Browser, deine Bilder werden also nie hochgeladen.",
    ],
    faq: [
      { question: "Warum PNG in JPG umwandeln?", answer: "JPG-Dateien sind bei Fotos meist deutlich kleiner als PNGs und werden fast überall akzeptiert, von E-Mail bis zu Online-Formularen." },
      { question: "Was passiert mit transparenten Hintergründen?", answer: "JPG hat keine Transparenz, transparente Bereiche werden also mit Weiß gefüllt." },
      { question: "Kann ich viele PNGs auf einmal konvertieren?", answer: "Ja. Füge bis zu 30 Bilder hinzu; sie werden gemeinsam konvertiert und als .zip heruntergeladen." },
      { question: "Werden meine Bilder hochgeladen?", answer: "Nein. Die Umwandlung erfolgt lokal in deinem Browser." },
    ],
  },
  "jpg-to-png": {
    name: "JPG zu PNG",
    actionLabel: "Zu PNG konvertieren",
    shortDescription: "Wandle JPG-Fotos verlustfrei in PNG-Bilder um.",
    longDescription: [
      "JPG zu PNG wandelt deine JPG- oder JPEG-Bilder in das PNG-Format um. PNG ist verlustfrei, das Bild verliert also beim erneuten Bearbeiten und Speichern keine weitere Qualität — nützlich für Grafiken, an denen du weiterarbeitest, oder für Tools und Plattformen, die PNG erfordern.",
      "Konvertiere mehrere Bilder gleichzeitig und lade sie zusammen herunter. Die Umwandlung erfolgt vollständig in deinem Browser, deine Bilder werden also nie hochgeladen.",
    ],
    faq: [
      { question: "Verbessert die Umwandlung von JPG zu PNG die Qualität?", answer: "Nein — bereits im JPG verlorene Details können nicht wiederhergestellt werden. Aber PNG verhindert weiteren Verlust beim erneuten Bearbeiten und Speichern." },
      { question: "Warum ist das PNG größer als das JPG?", answer: "PNG speichert jedes Pixel ohne verlustbehaftete Komprimierung, Fotos werden also meist größer. Das ist der Kompromiss für verlustfreie Qualität." },
      { question: "Kann ich mehrere JPGs gleichzeitig konvertieren?", answer: "Ja. Füge bis zu 30 Bilder hinzu und lade sie als .zip herunter." },
      { question: "Werden meine Bilder hochgeladen?", answer: "Nein. Die Umwandlung erfolgt lokal in deinem Browser." },
    ],
  },
  "webp-to-jpg": {
    name: "WEBP zu JPG",
    actionLabel: "Zu JPG konvertieren",
    shortDescription: "Wandle WEBP-Bilder in JPG um, damit sie in jeder App oder Website geöffnet werden können.",
    longDescription: [
      "WEBP zu JPG wandelt moderne WEBP-Bilder — verbreitet auf Websites — in JPG um, das Format, das praktisch jede App, jedes Gerät und jedes Upload-Formular unterstützt. Konvertiere ein Bild oder viele auf einmal, und passe die Qualität an, um Größe und Schärfe abzuwägen.",
      "Transparente Bereiche werden mit Weiß gefüllt, da JPG keine Transparenz unterstützt. Die Umwandlung erfolgt vollständig in deinem Browser, deine Bilder werden also nie hochgeladen.",
    ],
    faq: [
      { question: "Warum WEBP in JPG umwandeln?", answer: "Manche älteren Apps, Editoren und Upload-Formulare akzeptieren kein WEBP. JPG funktioniert fast überall." },
      { question: "Verliere ich an Qualität?", answer: "Bei der Standardqualität ist der Unterschied kaum zu sehen. Erhöhe den Qualitätsregler für das schärfste Ergebnis." },
      { question: "Kann ich mehrere WEBP-Bilder gleichzeitig konvertieren?", answer: "Ja. Füge bis zu 30 Bilder hinzu und lade sie als .zip herunter." },
      { question: "Werden meine Bilder hochgeladen?", answer: "Nein. Die Umwandlung erfolgt lokal in deinem Browser." },
    ],
  },
  "jpg-to-webp": {
    name: "JPG zu WEBP",
    actionLabel: "Zu WEBP konvertieren",
    shortDescription: "Wandle JPG-Fotos in WEBP um, für kleinere, schneller ladende Bilder im Web.",
    longDescription: [
      "JPG zu WEBP wandelt deine JPG-Bilder in WEBP um, ein modernes Format, das meist deutlich kleinere Dateien bei ähnlicher visueller Qualität erzeugt — großartig, um Websites zu beschleunigen und Speicherplatz zu sparen.",
      "Passe die Qualität an, um das richtige Gleichgewicht zu finden, und konvertiere viele Bilder auf einmal. Die Umwandlung erfolgt vollständig in deinem Browser, deine Bilder werden also nie hochgeladen. Das Erstellen von WEBP-Dateien erfordert eine aktuelle Version von Chrome, Edge oder Firefox.",
    ],
    faq: [
      { question: "Ist WEBP kleiner als JPG?", answer: "Meist ja — WEBP spart oft deutlich Platz bei ähnlicher Qualität, was Seiten schneller laden lässt." },
      { question: "Unterstützen alle Browser WEBP?", answer: "Alle modernen Browser können WEBP anzeigen. Das Erstellen von WEBP-Dateien erfordert hier eine aktuelle Version von Chrome, Edge oder Firefox." },
      { question: "Kann ich mehrere JPGs gleichzeitig konvertieren?", answer: "Ja. Füge bis zu 30 Bilder hinzu und lade sie als .zip herunter." },
      { question: "Werden meine Bilder hochgeladen?", answer: "Nein. Die Umwandlung erfolgt lokal in deinem Browser." },
    ],
  },
  "webp-to-png": {
    name: "WEBP zu PNG",
    actionLabel: "Zu PNG konvertieren",
    shortDescription: "Wandle WEBP-Bilder in PNG um und behalte dabei die Transparenz bei.",
    longDescription: [
      "WEBP zu PNG wandelt WEBP-Bilder in PNG um, das verlustfreie Format, das von jedem Bildeditor unterstützt wird. Transparenz bleibt erhalten, sodass Logos, Icons und Freistellungen ihre klaren Hintergründe behalten.",
      "Konvertiere mehrere Bilder gleichzeitig und lade sie zusammen herunter. Die Umwandlung erfolgt vollständig in deinem Browser, deine Bilder werden also nie hochgeladen.",
    ],
    faq: [
      { question: "Bleibt die Transparenz erhalten?", answer: "Ja. PNG unterstützt Transparenz, transparente Bereiche in deinem WEBP-Bild bleiben also transparent." },
      { question: "Warum WEBP in PNG umwandeln?", answer: "PNG öffnet sich in jedem Editor und Design-Tool und verliert beim erneuten Bearbeiten und Speichern keine Qualität." },
      { question: "Kann ich mehrere WEBP-Dateien gleichzeitig konvertieren?", answer: "Ja. Füge bis zu 30 Bilder hinzu und lade sie als .zip herunter." },
      { question: "Werden meine Bilder hochgeladen?", answer: "Nein. Die Umwandlung erfolgt lokal in deinem Browser." },
    ],
  },
  "png-to-webp": {
    name: "PNG zu WEBP",
    actionLabel: "Zu WEBP konvertieren",
    shortDescription: "Wandle PNG-Bilder in WEBP um, für kleinere Dateien mit erhaltener Transparenz.",
    longDescription: [
      "PNG zu WEBP wandelt deine PNG-Bilder in WEBP um, was Dateien meist deutlich kleiner macht, während die Transparenz erhalten bleibt — ideal für Website-Grafiken, Icons und Screenshots.",
      "Wähle die Qualität, konvertiere viele Bilder auf einmal, und lade sie zusammen herunter. Die Umwandlung erfolgt vollständig in deinem Browser, deine Bilder werden also nie hochgeladen. Das Erstellen von WEBP-Dateien erfordert eine aktuelle Version von Chrome, Edge oder Firefox.",
    ],
    faq: [
      { question: "Bleibt bei WEBP die Transparenz erhalten?", answer: "Ja. WEBP unterstützt Transparenz, transparente PNG-Bereiche bleiben also transparent." },
      { question: "Um wie viel werden meine Bilder kleiner?", answer: "Das variiert, aber WEBP-Dateien sind oft deutlich kleiner als dasselbe Bild als PNG gespeichert." },
      { question: "Kann ich mehrere PNGs gleichzeitig konvertieren?", answer: "Ja. Füge bis zu 30 Bilder hinzu und lade sie als .zip herunter." },
      { question: "Werden meine Bilder hochgeladen?", answer: "Nein. Die Umwandlung erfolgt lokal in deinem Browser." },
    ],
  },
};
