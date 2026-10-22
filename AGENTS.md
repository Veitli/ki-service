# Homepage-Bearbeitung

## Projektzuordnung
- Repository: Veitli/ki-service
- Website: https://www.ki-service.org
- https://ki-service.org leitet auf die www-Adresse weiter.
- Produktives Vercel-Projekt: ki-service-osne
- Produktionsbranch: main
- Zweites Vercel-Projekt: ki-service (ebenfalls mit diesem Repository verbunden; nicht als isolierte Testumgebung behandeln).
- Website-Dateien: web/ (statisches HTML, CSS und JavaScript).

## Arbeitsregeln
- Vor Änderungen Git-Status und aktuellen Remote-Stand prüfen. Fremde Änderungen nicht überschreiben.
- Auf einem separaten Branch arbeiten, niemals direkt auf main.
- Veröffentlichungen bzw. Merge nach main nur nach ausdrücklicher Freigabe des Nutzers.
- Vorschauen dürfen vorbereitet und geprüft werden; Infrastruktur, Domains, Zugänge und Projektlöschungen benötigen gesonderte Freigabe.
- Bestehendes Design erhalten, sofern der Auftrag keine Designänderung enthält.
- Keine Preise, Referenzen, Qualifikationen oder Leistungsversprechen erfinden.
- Rechtstexte, Formulare und technische Einstellungen nicht ohne passenden Auftrag verändern.
- Keine Zugangsdaten in Git, Protokollen oder Chat speichern.

## Inhaltsprüfung
- Inhalte stehen sowohl in HTML-Dateien als auch in web/assets/data/content.json.
- Vor Textänderungen tatsächliche Browserdarstellung und Verhalten von web/assets/js/main.js prüfen; nicht annehmen, dass JSON-Werte automatisch angezeigt werden.
- Änderungen lokal und in der Vorschau kontrollieren: Desktop, Mobilansicht, Navigation, betroffene Links und Bilder, Browserfehler.
- Keine nicht existierenden Build- oder Testbefehle behaupten: vorhandene Projektwerkzeuge zuerst prüfen.
- Vor Veröffentlichung Ausgangscommit dokumentieren; danach Deploymentstatus und Live-Inhalte prüfen.
- Eine Rücknahme kann später durch einen gezielten Revert erfolgen; auch dieser Produktionsschritt benötigt Freigabe.
