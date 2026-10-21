# Mein Finanzplan

Persönliche Finanz-App als einzelne HTML-Datei: Tagesbudget, Fixkosten, Sparziele,
50/30/20-Aufteilung und Monatsrückblick. Läuft offline und lässt sich auf dem Handy wie eine
App auf den Startbildschirm legen.

## Datenschutz

**Deine Finanzdaten kommen nie in dieses Repository und nie ins Internet.**

- Alles, was du in der App einträgst, liegt ausschließlich im Speicher des Browsers auf
  deinem Gerät (`localStorage`). Es gibt keinen Server, kein Konto und keine Synchronisierung.
- Dieses Repository enthält nur den Programmcode. Wer den Code oder die Seite aufruft, sieht
  eine leere App mit Beispieldaten, nie deine Zahlen.
- Die einzige Verbindung nach außen ist das einmalige Laden der Schriftart von Google Fonts.
  Dabei werden keine Daten aus der App übertragen.

Weil die Daten nur auf dem Gerät liegen: In der App unter **Einstellungen → Deine Daten**
regelmäßig **„Sicherung speichern"** tippen. Die Datei bewahrst du privat auf (nicht in dieses
Repository hochladen). Auf einem neuen Handy holst du alles mit **„Sicherung laden"** zurück.

## Aufs Handy bringen

1. Unter *Settings → Pages* als Quelle **Deploy from a branch**, Branch `main`, Ordner `/ (root)` wählen.
2. Nach ein bis zwei Minuten ist die App unter `https://<benutzername>.github.io/Finanzplan/` erreichbar.
3. Auf dem Handy öffnen:
   - **iPhone (Safari):** Teilen → „Zum Home-Bildschirm"
   - **Android (Chrome):** Menü ⋮ → „App installieren"
4. Ab dann startet die App vom Startbildschirm und funktioniert auch ohne Internet.

## Aktualisieren

Nach Änderungen an Dateien in `sw.js` die Zeile `VERSION` hochzählen, damit Handys die neue
Fassung laden.
