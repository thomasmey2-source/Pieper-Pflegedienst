# Google Stitch Prompt – Pieper Häusliche Krankenpflege

> **Hinweis Mai 2026:** Firmierung wurde aktualisiert. Volle Firmierung lautet jetzt
> **"Armin & Timo Pieper GbR – Häusliche Krankenpflege"** (Familienbetrieb Vater & Sohn,
> ~40 Jahre Bestehen). Im Header/Logo wird die Kurzform **"Pieper · Häusliche Krankenpflege"**
> verwendet, die volle GbR-Firmierung erscheint nur in Footer und Impressum.

> Verwende diesen Prompt in Google Stitch (https://stitch.withgoogle.com).
> Tipp: Stitch arbeitet seitenbasiert. Du kannst ihm zuerst den **Brand-Block** (Farben/Typo/Stil) geben und dann pro Page einen **Page-Block** nachschieben – oder alles am Stück. Beides wird unten geliefert.

---

## TEIL 1 – KOMPLETTPROMPT (alles auf einmal)

```
Design a modern, trust-evoking website for "Pieper – Häusliche Krankenpflege"
(legal entity: Armin & Timo Pieper GbR; family-run for ~40 years, father & son),
a home-care nursing service located in Wuppertal-Cronenberg, Germany
(Cronenberger Straße 383, 42349 Wuppertal). German language UI. Target audience:
elderly patients and their relatives in Wuppertal looking for ambulant care.

DESIGN STYLE
- Clean, modern, medical-professional. Visual reference: abucura-pflegedienst.de
  (clean, lots of whitespace, calm, professional). Avoid clinical/cold feel —
  add warmth through soft rounded corners (radius 12–16px) and friendly imagery.
- Generous whitespace, large readable typography (base 17–18px),
  high contrast for accessibility (WCAG AA), readable for users 60+.
- Mobile-first responsive layout.

COLOR PALETTE
- Primary Deep Blue:    #1B4F8A   (header, primary buttons, headlines accent)
- Primary Mid Blue:     #3B82C4   (hover states, links)
- Care Green:           #5BA88A   (secondary CTAs, pflegegradrechner accents,
                                   highlighted icons)
- Background Light:     #F8FAFC   (page background, alternating sections)
- Surface White:        #FFFFFF   (cards, hero overlay)
- Text Dark:            #1E293B   (body copy, headlines)
- Text Muted:           #64748B   (subtitles, helper text)
- Border / Divider:     #E2E8F0
- WhatsApp Green:       #25D366   (floating WhatsApp button only)
- Accent Warm:          #F4A261   (sparingly — care-relative empathy moments)

TYPOGRAPHY
- Headlines: "Inter" or "Manrope", weight 600–700, generous line-height 1.2
- Body: "Inter", weight 400, line-height 1.6, base size 17px
- Use clear hierarchy (H1: 48–56px desktop / 32–36px mobile, H2: 32–36px,
  H3: 22–24px)

GLOBAL ELEMENTS (present on every page)
1. Sticky transparent-to-solid header on scroll. Contains:
   - Logo left ("Pieper · Häusliche Krankenpflege" — short form for header)
   - Nav center: Startseite, Leistungen, Pflegegradrechner, Über uns,
     Karriere, Ratgeber, Kontakt
   - Right side: prominent phone button "📞 0202 / XXX XXX" (Click-to-Call,
     primary blue) + secondary outlined button "Rückruf anfordern"
2. Floating WhatsApp button bottom-right (#25D366), with hover tooltip
   "Schreiben Sie uns auf WhatsApp"
3. Footer (deep blue #1B4F8A, white text):
   - Address block (Cronenberger Straße 383, 42349 Wuppertal-Cronenberg)
   - Quick links (Impressum, Datenschutz, AGB, Karriere)
   - Opening hours, Phone, Email
   - Trust badges: "Pflegekassen-zugelassen", "MDK-geprüft", IK-Nummer
   - Small Google Map snippet of Cronenberger Straße 383

PAGES TO DESIGN

═══════════════════════════════════════════════════════════════════
PAGE 1 — STARTSEITE / HOMEPAGE
═══════════════════════════════════════════════════════════════════
- HERO: Full-width hero (80vh). Background: warm photo of an elderly
  patient hand being held by a caring nurse, soft blue gradient overlay
  bottom-left for legibility. Headline (white, bold, 56px):
  "Häusliche Pflege in Wuppertal – mit Herz und Kompetenz."
  Subtitle: "Wir sind für Sie da, wenn Sie uns brauchen.
  Persönlich. Zuverlässig. Seit Jahren in Cronenberg verwurzelt."
  Two CTAs side by side:
    • Primary (Care Green): "Kostenlose Erstberatung anfordern"
    • Secondary (white outline): "Pflegegrad jetzt berechnen"
  Trust strip below hero: small horizontal row with icons + text:
    "✓ Alle Pflegekassen" · "✓ 24h erreichbar" · "✓ Examiniertes Team"
    · "✓ Persönliche Ansprechpartner"

- SECTION 2 — UNSERE LEISTINGEN (3-column card grid):
  Headline: "Unsere Pflegeleistungen"
  Subhead: "Von der Grundpflege bis zur Behandlungspflege –
  wir betreuen Sie nach Ihren individuellen Bedürfnissen."
  6 cards (2 rows × 3) with soft shadow, rounded corners, icon top:
    1. Grundpflege  2. Behandlungspflege  3. Verhinderungspflege
    4. Beratungseinsätze nach §37.3 SGB XI  5. Hauswirtschaftliche
    Versorgung  6. Palliativpflege
  Each card: icon (line style, primary blue), title, 2-line description,
  "Mehr erfahren →" link.

- SECTION 3 — PFLEGEGRADRECHNER TEASER (full-width, Care Green background):
  Split layout. Left: large headline "Welcher Pflegegrad steht Ihnen zu?"
  + 2-3 sentence empathetic paragraph + big white CTA "Jetzt kostenlos
  berechnen →". Right: stylized illustration of the calculator interface
  preview / progress steps.

- SECTION 4 — ÜBER UNS / TEAM TEASER:
  Two columns. Left: warm photo of the team (smiling, in scrubs, in front
  of the building or patient setting). Right: Headline "Ein Team, das
  Sie kennt." + paragraph about the family-run history, location in
  Cronenberg, values. CTA "Lernen Sie uns kennen →"

- SECTION 5 — KOSTENLOSE ERSTBERATUNG (full-width banner):
  Centered headline "Unsicher, was zu Ihnen passt? Lassen Sie uns reden."
  Below: simple inline form (Name, Telefon, optional Anliegen) with
  prominent submit button "Beratungstermin anfragen". Note below form:
  "100% unverbindlich · Wir melden uns innerhalb von 24 Stunden."

- SECTION 6 — RATGEBER FÜR ANGEHÖRIGE (3-card teaser):
  Headline: "Wissen für pflegende Angehörige"
  3 article cards: "Pflegegrad beantragen – Schritt für Schritt",
  "Verhinderungspflege erklärt", "Entlastungsbetrag richtig nutzen"
  (image, title, 2-line excerpt, "Weiterlesen →")

- SECTION 7 — TESTIMONIALS / BEWERTUNGEN:
  Slider with 3 visible testimonial cards. Quote, name, "Tochter eines
  Patienten", 5-star rating. Background: light gray (#F8FAFC).

- SECTION 8 — EINZUGSGEBIET:
  Headline: "Wir pflegen in Ihrer Nachbarschaft."
  Two columns: left = Wuppertal map (highlighted area: Cronenberg +
  surrounding districts like Sudberg, Cronenfeld, Kohlfurth, Hahnerberg,
  Küllenhahn). Right = list of covered districts as chips/tags.

- SECTION 9 — KARRIERE TEASER (deep blue background):
  Headline white: "Werden Sie Teil unseres Teams."
  Short paragraph + CTA "Offene Stellen ansehen". Right side: photo of
  smiling nurse.

- FOOTER (as defined globally)

═══════════════════════════════════════════════════════════════════
PAGE 2 — LEISTUNGEN (Services overview)
═══════════════════════════════════════════════════════════════════
- Compact hero (40vh): headline "Unsere Pflegeleistungen", subline,
  small breadcrumb.
- Filter/anchor nav: jump-links for each service category.
- For each service (alternating left/right image-text layout):
  large icon, headline, full description, what's included, who pays
  for it (Pflegekasse §...), CTA "Beratung zu dieser Leistung anfragen".
  Services: Grundpflege, Behandlungspflege (SGB V),
  Verhinderungspflege, Kurzzeitpflege-Vorbereitung, Beratungseinsatz
  §37.3, Hauswirtschaftliche Versorgung, Palliativpflege, 24h-Pflege.
- Bottom: full-width "Sie wissen nicht, welche Leistung passt?"
  with link to Erstberatung and Pflegegradrechner.

═══════════════════════════════════════════════════════════════════
PAGE 3 — PFLEGEGRADRECHNER (interactive tool page)
═══════════════════════════════════════════════════════════════════
- Hero: headline "Pflegegradrechner – kostenlos & unverbindlich"
  + reassuring subline "Beantworten Sie 6 Fragen und erfahren Sie
  in 3 Minuten Ihren voraussichtlichen Pflegegrad."
- Trust row: "Anonym · DSGVO-konform · Keine Anmeldung nötig"
- Multi-step wizard component (6 steps with progress bar at top):
  Step 1: Mobilität · Step 2: Kognitive/kommunikative Fähigkeiten ·
  Step 3: Verhaltensweisen · Step 4: Selbstversorgung ·
  Step 5: Bewältigung von krankheitsbedingten Anforderungen ·
  Step 6: Gestaltung des Alltags
  Each step: clear question, large radio buttons (touch-friendly,
  min 56px height), "Zurück" + "Weiter" buttons, progress indicator.
- Result screen: Estimated Pflegegrad displayed in big circle (1–5),
  short explanation what it means, monthly Pflegegeld amount,
  CTA "Wir helfen Ihnen bei der Antragstellung – Termin vereinbaren"
  + secondary "Ergebnis per E-Mail erhalten" (lead capture).
- Sidebar (desktop) / Bottom (mobile): FAQ "Wie genau ist das Ergebnis?"
  "Was kostet ein Antrag?" "Wer hilft mir beim MD-Gutachten?"

═══════════════════════════════════════════════════════════════════
PAGE 4 — ÜBER UNS / TEAM
═══════════════════════════════════════════════════════════════════
- Hero with team photo + headline "Menschen, die sich kümmern."
- Section "Unsere Geschichte": text + photo of building/Cronenberg
  street view, founding story, values.
- Section "Unsere Werte": 4 value cards with icons
  (Vertrauen, Fachlichkeit, Empathie, Verlässlichkeit).
- Section "Unser Team": grid of team member cards (photo, name,
  role e.g. "Pflegedienstleitung", short bio on hover).
  Featured at top: Armin Pieper + Timo Pieper (Geschäftsführung, Vater & Sohn).
- Section "Qualität & Zertifizierungen": list of MDK-Note,
  Pflegekassen-Zulassung, IK-Nummer, fortbildungen.
- CTA bottom: "Lernen Sie uns persönlich kennen –
  vereinbaren Sie ein Erstgespräch."

═══════════════════════════════════════════════════════════════════
PAGE 5 — KARRIERE
═══════════════════════════════════════════════════════════════════
- Hero: "Pflege mit Sinn – arbeiten Sie bei Pieper."
- "Warum bei uns?" benefit grid (6 cards): faire Bezahlung,
  Dienstplan-Mitsprache, kleines familiäres Team, Fortbildungen,
  Dienstwagen, betriebliche Altersvorsorge.
- Open positions list (cards with title, location, type, "Jetzt
  bewerben" button). Filter by Vollzeit/Teilzeit.
- "Initiativbewerbung"-Bereich mit Upload-Formular
  (Name, Email, Lebenslauf-Upload, Nachricht).
- Testimonial slider: Stimmen aus dem Team.

═══════════════════════════════════════════════════════════════════
PAGE 6 — RATGEBER (Knowledge hub for relatives)
═══════════════════════════════════════════════════════════════════
- Hero: "Ratgeber für pflegende Angehörige" + Suchleiste
- Topic categories as large image cards: "Pflegegrade verstehen",
  "Anträge & Bürokratie", "Finanzielle Hilfen",
  "Pflege im Alltag", "Demenz & Begleitung",
  "Verhinderungs- & Kurzzeitpflege".
- Latest articles grid (3-col).
- Inline CTA: "Persönliche Beratung statt Suchen?
  Sprechen Sie uns an."

═══════════════════════════════════════════════════════════════════
PAGE 7 — KONTAKT
═══════════════════════════════════════════════════════════════════
- Hero compact: "So erreichen Sie uns"
- Two-column layout:
  Left: Contact methods stacked as large clickable cards:
    📞 Telefon (immer prominent oben), groß, click-to-call
    💬 WhatsApp (Care Green button)
    ✉️ E-Mail
    📍 Adresse + Karte
    🕐 Öffnungszeiten / Erreichbarkeit (24h Bereitschaft hervorheben)
  Right: Kontaktformular (Name, Telefon, Email, Anliegen-Dropdown,
  Nachricht, Datenschutz-Checkbox, Submit "Nachricht senden")
- Vollbreite: Large embedded Google Map of Cronenberger Straße 383
- Below map: Anfahrt-Hinweise (ÖPNV + Parkplätze).

GLOBAL UI COMPONENTS TO DEFINE
- Primary Button (filled, deep blue, white text, 16px padding y, 28px x,
  radius 12px, hover lifts +2px shadow)
- Secondary Button (outlined deep blue, transparent bg)
- CTA Button Care (filled Care Green for high-emotion CTAs)
- Card (white bg, radius 16px, soft shadow,
  hover: shadow grows + 4px lift)
- Form Inputs (52px tall, radius 8px, 1px border #E2E8F0,
  focus ring blue)
- Floating WhatsApp Bubble (60px circle, fixed bottom-right 24px,
  pulsing animation on first scroll)

ACCESSIBILITY NOTES
- Min font size 16px, body 17px
- Tap targets min 48×48
- Focus states visible (2px outline)
- Aria-labels on icon-only buttons
- High contrast for older users (4.5:1 minimum)
```

---

## TEIL 2 – AUFGETEILTE PROMPTS (falls Stitch das Komplettpaket abschneidet)

Wenn Stitch nur eine begrenzte Promptlänge akzeptiert, gib zuerst nur den **Brand-Block** + **Globale Elemente** ein, dann pro Seite einzeln. Reihenfolge:

1. Brand-Block (Farben, Typo, Stil, Header, Footer, WhatsApp-Button)
2. Page 1: Startseite
3. Page 2: Leistungen
4. Page 3: Pflegegradrechner
5. Page 4: Über uns / Team
6. Page 5: Karriere
7. Page 6: Ratgeber
8. Page 7: Kontakt

---

## TIPPS FÜR DIE ARBEIT MIT STITCH

- **Iteriere klein:** Lass dir zuerst die Startseite generieren, gib Feedback ("Hero-Bild wirkt zu klinisch, mache es wärmer", "Verschiebe den CTA mehr in die obere Hälfte"), bevor du weitere Seiten anstößt – sonst wird inkonsistent.
- **Fixiere die Brand:** Sobald die Farben/Typo/Header in Stitch stehen, kann er sie über alle weiteren Seiten weiterverwenden.
- **Bilder nachträglich tauschen:** Stitch generiert Platzhalter-Bilder. Plane ein Foto-Shooting im Pflegealltag (Patientenbesuch mit Einverständnis, Team-Aufnahme vor dem Cronenberger Standort) für den finalen Launch.
- **Export:** Stitch exportiert nach Figma. Plan: Stitch → Figma → Übergabe an Entwickler (oder direkt Code-Export).

---

## NÄCHSTE SCHRITTE NACH STITCH

1. Logo-Redesign (parallel) – Vorschlag: minimalistische Wortmarke + symbolisches Element (Hand/Herz oder geometrisches Pflege-Symbol).
2. Foto-Shooting beim Pieper-Team in Cronenberg.
3. Pflegegradrechner-Logik: entweder Eigenentwicklung (React/Vue Wizard mit Score-Berechnung nach NBA) oder fertiges Drittanbieter-Widget (z.B. von Pflege.de) einbinden.
4. Texterstellung (SEO-optimiert für "Pflegedienst Wuppertal Cronenberg").
5. Tech-Stack-Entscheidung: WordPress (kontinuierlich pflegbar) vs. Headless (Next.js/Astro mit Sanity-CMS) – je nachdem, wer die Inhalte später pflegt.
