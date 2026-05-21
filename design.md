---
name: Pieper Pflege-Design
colors:
  surface: '#FFFFFF'
  surface-dim: '#d9d9df'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f9'
  surface-container: '#ededf3'
  surface-container-high: '#e8e8ed'
  surface-container-highest: '#e2e2e8'
  on-surface: '#1a1c20'
  on-surface-variant: '#424750'
  inverse-surface: '#2e3035'
  inverse-on-surface: '#f0f0f6'
  outline: '#737781'
  outline-variant: '#c2c6d1'
  surface-tint: '#305f9b'
  primary: '#00386b'
  on-primary: '#ffffff'
  primary-container: '#1b4f8a'
  on-primary-container: '#9ac2ff'
  inverse-primary: '#a6c8ff'
  secondary: '#156b51'
  on-secondary: '#ffffff'
  secondary-container: '#a4f3d1'
  on-secondary-container: '#1f7156'
  tertiary: '#582c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#793f00'
  on-tertiary-container: '#ffae6b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#a6c8ff'
  on-primary-fixed: '#001c3a'
  on-primary-fixed-variant: '#0e4782'
  secondary-fixed: '#a4f3d1'
  secondary-fixed-dim: '#88d6b6'
  on-secondary-fixed: '#002116'
  on-secondary-fixed-variant: '#00513b'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77e'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#f9f9ff'
  on-background: '#1a1c20'
  surface-variant: '#e2e2e8'
  primary-hover: '#3B82C4'
  primary-soft: '#E6EFF7'
  care-hover: '#4A9272'
  accent-warm: '#F4A261'
  bg-page: '#F8FAFC'
  text-main: '#1E293B'
  text-muted: '#64748B'
  border: '#E2E8F0'
  whatsapp: '#25D366'
  success: '#10B981'
  warning: '#F59E0B'
  danger: '#DC2626'
typography:
  headline-h1:
    fontFamily: Manrope
    fontSize: 56px
    fontWeight: '700'
    lineHeight: '1.15'
  headline-h1-mobile:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.15'
  headline-h2:
    fontFamily: Manrope
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-h2-mobile:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-h3:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  text-lg:
    fontFamily: Inter
    fontSize: 19px
    fontWeight: '400'
    lineHeight: '1.6'
  text-base:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: '400'
    lineHeight: '1.65'
  text-sm:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: '1.5'
  label-xs:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  space-1: 4px
  space-2: 8px
  space-3: 12px
  space-4: 16px
  space-5: 24px
  space-6: 32px
  space-7: 48px
  space-8: 64px
  space-9: 96px
  space-10: 128px
  max-width: 1200px
  gutter: 24px
---

# Design System – Pieper Häusliche Krankenpflege

**Projekt:** Webseiten-Neugestaltung für **Armin & Timo Pieper GbR – Häusliche Krankenpflege**
**Standort:** Cronenberger Straße 383, 42349 Wuppertal-Cronenberg
**Header-Kurzform:** "Pieper · Häusliche Krankenpflege" (volle Firmierung nur in Footer/Impressum)
**Zielgruppe:** Lokale Patienten und pflegende Angehörige in Wuppertal (60+ und Töchter/Söhne 40–60)
**Stand:** Mai 2026
**Status:** Working Draft – Version 1.1

---

## 1. Brand-Identität

### 1.1 Markenkern
Pieper ist ein **familiengeführter Pflegedienst in zweiter Generation** (Vater Armin & Sohn Timo) aus Wuppertal-Cronenberg, seit rund **40 Jahren** zum Stadtbild gehörend. Die Marke steht für **kompetente, persönliche und verlässliche** häusliche Krankenpflege. Der Auftritt soll professionell-medizinisch wirken, dabei aber niemals klinisch-distanziert.

### 1.2 Markenwerte
- **Vertrauen** – über 40 Jahre im Stadtteil gewachsen, Vater-Sohn-Kontinuität
- **Fachlichkeit** – examiniertes Pflegepersonal, MDK-geprüft
- **Empathie** – Menschen, die zuhören und sich kümmern
- **Verlässlichkeit** – pünktlich, erreichbar, planbar

### 1.3 Markenversprechen
"Wir sind für Sie da, wenn Sie uns brauchen. Persönlich. Zuverlässig. Seit 40 Jahren in Cronenberg verwurzelt."

---

## 2. Design-Prinzipien

1. **Klarheit vor Cleverness** – jede Information ist sofort auffindbar; keine kryptischen Icons oder Trendeffekte, die ältere Nutzer ausschließen.
2. **Großzügigkeit** – viel Weißraum, große Schrift, atmende Layouts. Pflege braucht Ruhe, nicht Hektik.
3. **Wärme im Detail** – weiche Rundungen (12–16px), warme Akzentfarben und freundliche Bildsprache verhindern den klinischen Eindruck.
4. **Mobile First** – ein großer Teil der Angehörigen recherchiert auf dem Smartphone. Tap-Targets ≥ 48×48 px.
5. **Conversion-orientiert** – jede Seite hat einen klaren primären CTA (Erstberatung, Pflegegradrechner, WhatsApp).
6. **Barrierefrei** – WCAG 2.1 AA als Mindeststandard, nicht als Bonus.

---

## 3. Farbsystem

Die Palette ist aus dem bestehenden Logo-Blau abgeleitet, modernisiert und um eine Pflege-grüne Sekundärfarbe ergänzt.

### 3.1 Primärfarben

| Token              | Hex       | RGB              | Verwendung                                       |
|--------------------|-----------|------------------|--------------------------------------------------|
| `--color-primary`  | `#1B4F8A` | 27, 79, 138      | Header, Hauptbuttons, Headlines-Akzent, Footer   |
| `--color-primary-hover` | `#3B82C4` | 59, 130, 196 | Hover-/Aktiv-Zustände, Links                     |
| `--color-primary-soft`  | `#E6EFF7` | 230, 239, 247 | Hintergrund-Tints, Card-Hover                    |

### 3.2 Sekundärfarben

| Token                | Hex       | RGB              | Verwendung                                       |
|----------------------|-----------|------------------|--------------------------------------------------|
| `--color-care`       | `#5BA88A` | 91, 168, 138     | High-Emotion-CTAs, Pflegegrad-Akzente, Erfolg    |
| `--color-care-hover` | `#4A9272` | 74, 146, 114     | Hover des Care-CTAs                              |
| `--color-accent`     | `#F4A261` | 244, 162, 97     | Sparsame Wärme-Akzente, Highlight-Elemente       |

### 3.3 Neutrale Farben

| Token                | Hex       | Verwendung                              |
|----------------------|-----------|-----------------------------------------|
| `--color-bg`         | `#F8FAFC` | Page-Background, alternierende Sektionen|
| `--color-surface`    | `#FFFFFF` | Cards, Modals, Hero-Overlay             |
| `--color-text`       | `#1E293B` | Body-Text, Headlines                    |
| `--color-text-muted` | `#64748B` | Sekundärtext, Labels                    |
| `--color-border`     | `#E2E8F0` | Trennlinien, Input-Borders              |

### 3.4 Funktionsfarben

| Token             | Hex       | Verwendung                              |
|-------------------|-----------|-----------------------------------------|
| `--color-whatsapp`| `#25D366` | Floating-Button, WhatsApp-Aktionen      |
| `--color-success` | `#10B981` | Erfolgs-Toasts, Häkchen                 |
| `--color-warning` | `#F59E0B` | Hinweise, "wichtig zu wissen"-Boxen     |
| `--color-danger`  | `#DC2626` | Fehler, Validierung                     |

### 3.5 Kontrast-Regeln (WCAG AA)
- Text auf Hintergrund: min. 4.5:1
- Großtext (≥ 24px) und UI-Elemente: min. 3:1
- Primärblau auf Weiß: ✓ 7.4:1
- Care-Grün auf Weiß: ✗ nur als Akzent, **niemals für Body-Text** auf Weiß
- Text-Muted auf BG-Light: ✓ 4.6:1

---

## 4. Typografie

### 4.1 Schriftfamilien

```css
--font-heading: 'Manrope', 'Inter', system-ui, -apple-system, sans-serif;
--font-body:    'Inter', system-ui, -apple-system, sans-serif;
```

Beide Fonts via Google Fonts oder lokal selbst gehostet (DSGVO-konform – **lokales Hosting empfohlen**).

### 4.2 Typografische Skala

| Token       | Desktop      | Mobile      | Weight | Line-Height | Verwendung               |
|-------------|--------------|-------------|--------|-------------|--------------------------|
| `--text-h1` | 56px / 3.5rem| 32px / 2rem | 700    | 1.15        | Hero-Headlines           |
| `--text-h2` | 36px / 2.25rem| 28px / 1.75rem | 700 | 1.2         | Section-Headlines        |
| `--text-h3` | 24px / 1.5rem| 22px / 1.375rem | 600 | 1.3         | Card-Titles, Subheadings|
| `--text-h4` | 20px / 1.25rem| 18px       | 600    | 1.4         | Mini-Headlines           |
| `--text-lg` | 19px / 1.1875rem | 18px    | 400    | 1.6         | Lead-Paragraphen         |
| `--text-base`| 17px / 1.0625rem| 16px    | 400    | 1.65        | Body-Text                |
| `--text-sm` | 15px / 0.9375rem | 14px    | 400    | 1.5         | Captions, Helper         |
| `--text-xs` | 13px / 0.8125rem | 13px    | 500    | 1.4         | Labels, Tags             |

### 4.3 Lesbarkeits-Regeln
- Body-Text **nie unter 16px** – Zielgruppe 60+ braucht große Schrift.
- Zeilenlänge **max. 70 Zeichen** (ca. 600px Container).
- **Niemals zentrierter Fließtext** über mehr als 3 Zeilen.
- Fett nur für Emphase, nicht zur Strukturierung (dafür sind Headlines da).

---

## 5. Spacing & Layout

### 5.1 Spacing-Skala (8px-Basis)

```
--space-1:  4px      --space-6:  32px
--space-2:  8px      --space-7:  48px
--space-3:  12px     --space-8:  64px
--space-4:  16px     --space-9:  96px
--space-5:  24px     --space-10: 128px
```

### 5.2 Container & Grid
- Max-Content-Breite: **1200px**
- Mobile-Padding: 20px
- Tablet-Padding: 32px
- Desktop-Padding: 64px
- 12-Spalten-Grid mit 24px Gutters

### 5.3 Sektions-Spacing
- Vertikaler Abstand zwischen Sektionen: **96px Desktop / 64px Mobile**
- Innen-Padding der Sektionen: **64px Desktop / 48px Mobile**

### 5.4 Border-Radius
- Buttons: `8px`
- Cards: `16px`
- Input-Felder: `8px`
- Modal/Dialog: `20px`
- Pill/Badge: `999px` (vollrund)

### 5.5 Shadows

```css
--shadow-sm:  0 1px 2px rgba(15, 23, 42, 0.06);
--shadow-md:  0 4px 12px rgba(15, 23, 42, 0.08);
--shadow-lg:  0 12px 32px rgba(15, 23, 42, 0.12);
--shadow-xl:  0 24px 64px rgba(15, 23, 42, 0.16);
```

---

## 6. Komponenten

### 6.1 Buttons

| Variante       | Hintergrund            | Text            | Border     | Verwendung                     |
|----------------|------------------------|-----------------|------------|--------------------------------|
| Primary        | `--color-primary`      | weiß            | –          | Hauptaktion (max. 1 pro Section)|
| Care CTA       | `--color-care`         | weiß            | –          | Emotionale CTAs (Erstberatung) |
| Secondary      | transparent            | `--color-primary`| 2px Primär| Sekundäre Aktion               |
| Ghost          | transparent            | `--color-primary`| –         | Tertiäre Aktion, Inline-Links  |
| Phone          | weiß                   | `--color-primary`| 1px Border| Click-to-Call im Header        |

**Größen:**
- L (Hero-CTAs): 56px Höhe, 28px Horizontal-Padding, `--text-lg`
- M (Standard): 48px Höhe, 24px Horizontal-Padding, `--text-base`
- S (Inline): 40px Höhe, 20px Horizontal-Padding, `--text-sm`

**Hover/Active-Verhalten:** +2px Lift, `--shadow-md` → `--shadow-lg`, 150ms Transition.

### 6.2 Cards

```
- Hintergrund: --color-surface
- Border-Radius: 16px
- Schatten: --shadow-sm
- Padding: 32px
- Hover: --shadow-md, translateY(-4px), 200ms ease
- Optional: 1px Border --color-border bei "flachen" Card-Varianten
```

**Service-Card:** Icon (40px, Primärblau) → Title (`--text-h3`) → Description (`--text-base`, gray) → Mehr-erfahren-Link.

### 6.3 Formulare

**Input:**
- Höhe: 52px
- Border: 1.5px solid `--color-border`
- Border-Radius: 8px
- Padding: 14px 16px
- Focus: 2px Outline `--color-primary`, Border-Color → Primär
- Label: 14px, weight 500, 8px Margin-Bottom
- Helper-Text: 13px, `--color-text-muted`, 6px Margin-Top
- Fehler: Border `--color-danger`, Helper-Text rot

**Checkbox/Radio:** min. 24×24px, klickbarer Bereich inkl. Label min. 48px hoch.

### 6.4 Header

- Sticky, beim Scroll-Übergang von transparent zu `--color-surface` mit `--shadow-md`
- Höhe: 80px Desktop / 64px Mobile
- Logo links (max. 200px breit)
- Nav zentriert (Desktop), Burger-Menu rechts (Mobile)
- Phone-CTA + Rückruf-Button rechts
- Mobile-Menü: Vollbild-Overlay mit großen Tap-Targets

### 6.5 Footer

- Hintergrund: `--color-primary` (#1B4F8A)
- Text: weiß / weiß-80%-Alpha für Sekundärtext
- 4 Spalten Desktop / 1 Spalte Mobile gestapelt:
  1. Logo + Adresse + Notruf-Telefon
  2. Quick-Links (Leistungen, Karriere, Kontakt)
  3. Rechtliches (Impressum, Datenschutz, AGB)
  4. Kontakt + Social + Trust-Badges (IK-Nummer, MDK-Note, Pflegekassen)
- Untere Leiste: Copyright, kleine Google-Map-Vorschau

### 6.6 WhatsApp-Floating-Button

- Position: `fixed`, bottom: 24px, right: 24px
- Größe: 60×60px Kreis
- Hintergrund: `--color-whatsapp` (#25D366)
- Icon: weißes WhatsApp-Logo, 28px
- Schatten: `--shadow-lg`
- Erste 3 Sekunden nach Pageload: dezente Pulse-Animation
- Hover: Tooltip "Schreiben Sie uns auf WhatsApp"
- Mobile: zusätzlich zur Sticky-Bottom-Bar mit Phone+WhatsApp+Mail

### 6.7 Pflegegradrechner-Wizard

- Progress-Bar oben (6 Steps), aktiver Step in Care-Grün
- Frage als `--text-h2`, kompakt
- Antwort-Optionen als große Radio-Karten (min. 80px hoch, Icon + Text)
- "Zurück"/"Weiter" am unteren Rand der Karten-Section
- Result-Screen: großer Kreis mit Pflegegrad-Zahl (Care-Grün), monatlicher Pflegegeld-Betrag, klare Empfehlung + CTA

---

## 7. Bildsprache

### 7.1 Stil-Richtlinien
- **Authentisch, nicht gestellt** – Pflegekraft & Patient im echten Moment, nicht im Studio
- **Hände im Fokus** – sie erzählen die Geschichte der Pflege ohne Gesichts-Privacy-Probleme
- **Helle, warme Lichtstimmung** – natürliches Tageslicht, keine kalten Krankenhaus-Neonröhren
- **Diversität** – verschiedene Altersgruppen, Geschlechter, kulturelle Hintergründe
- **Keine Stockfoto-Klischees** – kein Daumen-Hoch, keine Power-Pose, keine plakativen Stethoskope

### 7.2 Phasen
- **Launch (Phase 1):** kuratierte hochwertige Stockfotos (z.B. von Cavan Images, Westend61). Auswahl-Kriterien: ältere Menschen mit Pflegekräften, Hände, alltägliche Situationen.
- **Phase 2 (3–6 Monate nach Launch):** professionelles Fotoshooting beim Team in Cronenberg – Praxisaußenansicht, Team-Portrait, dokumentarische Pflegeszenen mit Einverständnis.

### 7.3 Bildbearbeitung
- Leichter Warm-Filter (+3–5 Temperatur)
- Sanftes Blue-Gradient-Overlay für Hero-Bilder zur Text-Lesbarkeit
- Maximale Bildbreite: 2560px (für Retina), WebP/AVIF mit JPG-Fallback

### 7.4 Iconografie
- **Stil:** Linien-Icons, 2px Strichstärke, abgerundete Enden
- **Library:** Lucide Icons oder Phosphor Icons (Light/Regular)
- **Größen:** 20px / 24px / 32px / 40px
- **Farbe:** `--color-primary` (Default), `--color-care` (Highlight), `--color-text-muted` (sekundär)
- **Niemals:** gemischte Icon-Stile (kein Mix aus Filled + Outline)

---

## 8. Tonalität (Voice & Tone)

### 8.1 Grundprinzipien
- **Sie-Ansprache** durchgängig
- **Klar, einfach, freundlich** – keine Behörden- oder Marketingsprache
- **Empathisch, nicht mitleidig** – auf Augenhöhe mit Patienten und Angehörigen
- **Konkret statt abstrakt** – "wir kommen zu Ihnen nach Hause" statt "ambulante Versorgungsleistungen"
- **Aktive Sprache** – "Wir kümmern uns" statt "Es wird sich gekümmert"

### 8.2 Beispiele

| ❌ Schlecht                                       | ✅ Besser                                          |
|----------------------------------------------------|---------------------------------------------------|
| "Wir bieten umfassende ambulante Versorgungsleistungen." | "Wir pflegen Sie zu Hause – kompetent und mit Herz." |
| "Pflegegradberatung gem. § 37 Abs. 3 SGB XI"       | "Wir helfen Ihnen, den richtigen Pflegegrad zu beantragen." |
| "Kontaktieren Sie uns für ein Beratungsgespräch."  | "Lassen Sie uns reden – kostenlos und unverbindlich." |
| "24/7-Erreichbarkeit"                              | "Wir sind rund um die Uhr für Sie da."            |

### 8.3 Wortwahl
- **Verwenden:** Pflege, betreuen, kümmern, begleiten, da sein, zuhören, helfen, zu Hause
- **Vermeiden:** Klient, Fall, Versorgungseinheit, Patient (nur wenn medizinisch nötig), Service, Dienstleistung

---

## 9. Layout-Patterns pro Seite

### 9.1 Startseite
1. Hero (80vh) mit zwei CTAs
2. Trust-Strip (Pflegekassen, 24h, Team, Persönlich)
3. Leistungen (3×2 Card-Grid)
4. Pflegegradrechner-Teaser (Care-Grün-Sektion)
5. Über-uns-Teaser (2-Spalten Bild+Text)
6. Erstberatung-Form (Inline-Banner)
7. Ratgeber-Teaser (3 Article-Cards)
8. Testimonials (Slider)
9. Einzugsgebiet (Karte + Districts-Liste)
10. Karriere-Teaser (Deep-Blue-CTA-Banner)

### 9.2 Standard-Unterseiten
1. Compact-Hero (40vh) mit Breadcrumb
2. Hauptinhalt (2/3 Breite, 1/3 Sidebar oder Full-Width)
3. Sekundär-CTA-Sektion
4. Cross-Link-Sektion (verwandte Themen)
5. Final-CTA (meist Erstberatung oder Kontakt)

---

## 10. Barrierefreiheit (Accessibility)

### 10.1 Pflicht-Anforderungen (WCAG 2.1 AA)
- Alle Bilder mit `alt`-Attribut (sinnvoll, nicht "Bild1")
- Alle Buttons/Links mit erkennbarem Aktionsziel (auch ohne Kontext)
- Tastaturnavigation: alle interaktiven Elemente per Tab erreichbar, sichtbarer Focus-Ring
- Skip-to-Content-Link am Seitenanfang
- Korrekte Heading-Hierarchie (kein H4 ohne vorheriges H3)
- Form-Labels immer sichtbar (kein reiner Placeholder als Label)
- ARIA-Labels für Icon-Only-Buttons
- Kontrast min. 4.5:1 für Text

### 10.2 Senior-Friendly Extras
- Optional: Schriftgrößen-Schalter (A / A+ / A++) im Header
- Reduzierte Animationen respektieren (`prefers-reduced-motion`)
- Keine Auto-Play-Videos
- Genug Abstand zwischen klickbaren Elementen (min. 8px)

---

## 11. Performance-Vorgaben

| Metric                    | Ziel        |
|---------------------------|-------------|
| Largest Contentful Paint  | < 2.5s      |
| First Input Delay         | < 100ms     |
| Cumulative Layout Shift   | < 0.1       |
| Total Page Weight (Mobile)| < 1.5 MB    |
| Lighthouse Score (alle)   | ≥ 90        |

**Maßnahmen:**
- Bilder: WebP/AVIF, lazy-load, responsive `srcset`
- Fonts: lokal gehostet, `font-display: swap`, nur 2 Familien × max 3 Weights
- JS: kein jQuery, kein Bootstrap-Komplettpaket; nur was wirklich gebraucht wird
- CSS: Kritisches CSS inline, Rest defer

---

## 12. SEO-Grundlagen

- **Meta-Title-Pattern:** `[Seitentitel] | Pieper – Häusliche Krankenpflege Wuppertal-Cronenberg`
- **Meta-Description:** 150–160 Zeichen, mit Hauptkeyword + Standort + USP
- **Strukturierte Daten (Schema.org):** `LocalBusiness`, `MedicalOrganization`, `Service`, `BreadcrumbList`, `FAQPage` (für Ratgeber)
- **Lokale SEO:** Google Business Profile gepflegt, NAP-Konsistenz (Name/Adresse/Phone) auf allen Plattformen
- **Einzugsgebiet (für lokale SEO-Landingpages):** Cronenberg, Küllenhahn, Sudberg, Kohlfurth, Hahnerberg, Ronsdorf, Lichtscheid (~5–8 km Radius)
- **Hauptkeywords:**
  - Pflegedienst Wuppertal
  - Pflegedienst Cronenberg
  - Häusliche Krankenpflege Wuppertal
  - Ambulante Pflege Wuppertal
  - Pflegedienst Küllenhahn / Ronsdorf / Lichtscheid (lokale Long-Tail)
  - Pflegegradrechner (Long-Tail-Trafficmagnet)

---

## 13. Datenschutz & Recht

- **DSGVO-konform** – keine Tracker, die Consent erfordern, ohne Cookie-Banner
- **Lokales Font-Hosting** – keine Google-Fonts-CDN-Aufrufe
- **Kontaktformular:** Datenschutz-Checkbox, Verschlüsselung, klare Datenverwendungs-Hinweise
- **WhatsApp-Hinweis:** kurzer Vermerk bei WhatsApp-Button "Es gelten die WhatsApp-Datenschutzbestimmungen"
- **Pflichtseiten:** Impressum, Datenschutzerklärung, Cookie-Hinweis
- **Pflege-spezifisch:** §11 Heilmittelwerbegesetz beachten – keine irreführenden Heilversprechen

---

## 14. Tech-Stack-Empfehlung

### Option A – Pragmatisch (empfohlen für selbstgepflegte Inhalte)
- **CMS:** WordPress mit Custom-Theme (kein Page-Builder)
- **Framework:** Tailwind CSS 3 oder eigenes CSS
- **Hosting:** All-Inkl, Raidboxes oder Hetzner – DSGVO-konform, deutscher Server
- **Pflegegradrechner:** Custom React-Component oder ACF-basiertes Multi-Step-Form

### Option B – Modern Headless (empfohlen für maximale Performance)
- **Frontend:** Astro oder Next.js (statisch generiert)
- **CMS:** Sanity, Strapi oder Storyblok
- **Hosting:** Vercel oder Netlify
- **Pflegegradrechner:** React-Komponente mit lokaler State-Logic

### Pflichtfeatures Tech-seitig
- HTTPS-Pflicht, HSTS-Header
- Sitemap.xml + robots.txt
- 301-Redirects von alter zur neuen Seite (alle bestehenden URLs!)
- Server-seitige Form-Verarbeitung (kein Mailto-Link)
- Bot-Schutz (Honeypot, kein reCAPTCHA → Datenschutz)

---

## 15. Roadmap & Nächste Schritte

1. ✅ **Discovery & Briefing** (abgeschlossen)
2. ⏳ **Design-Phase** mit Google Stitch (Prompt liegt vor)
3. ⏳ **Logo-Redesign** (parallel)
4. ⏳ **Inhaltserstellung** – SEO-Texte, Service-Beschreibungen
5. ⏳ **Foto-Konzept** – Stockfoto-Auswahl + spätere Shooting-Planung
6. ⏳ **Pflegegradrechner-Logik** – Frageset nach NBA-Modulen entwickeln
7. ⏳ **Tech-Stack-Entscheidung** & Entwicklung
8. ⏳ **QA, Accessibility-Audit, Performance-Audit**
9. ⏳ **Launch + 301-Redirects**
10. ⏳ **Phase 2** – eigenes Foto-Shooting, A/B-Tests, Content-Erweiterung

---

## 16. Offene Punkte (zu klären)

- [x] Tech-Stack: **Astro 4 statisch** mit Tailwind 3, React-Islands für Pflegegradrechner
- [x] Domain-Strategie: alte `pieper-wagner.de` wird komplett ersetzt durch neue Domain (Favorit: `pflegedienst-pieper.de`, Verfügbarkeit zu prüfen)
- [x] Pflegegradrechner: **Eigenentwicklung**, zweistufig (Quick-Check → Voll-NBA mit 6 Modulen)
- [x] Einzugsgebiet final: Cronenberg, Küllenhahn, Sudberg, Kohlfurth, Hahnerberg, Ronsdorf, Lichtscheid
- [ ] Telefonnummer Pieper (für Header/Footer)
- [ ] IK-Nummer (für Footer-Trust-Badge & Impressum)
- [ ] MDK-Pflegenote (Datum letzte Prüfung)
- [ ] Aufsichtsbehörde konkret (Bezirksregierung Düsseldorf vs. Stadt Wuppertal)
- [ ] Konkrete Pflegekassen-Liste oder "alle gesetzlichen"-Wording
- [ ] Anzahl Mitarbeiter und PDL-Name (für Über-uns-Seite)
- [ ] Öffnungszeiten / 24h-Bereitschaftsregelung
- [ ] Logo-Briefing: 2 Entwürfe (A "Hand-Symbol", B "Geometrisch") durch Pixelschmied
- [ ] Foto-Shooting-Termin in Phase 2 (3–6 Monate nach Launch)
- [ ] Hosting-Wahl: Netlify vs. Hetzner Static (deutscher Server-Standort)
- [ ] Google-Business-Profil-Zugang
- [ ] E-Mail-Adressen-Liste (`info@`, `karriere@`, …)
- [ ] Datenschutz-Einwilligungsvorlagen vom Pflegeverband (BPA/AWO/Caritas), falls Mitgliedschaft

---

*Dieses Design-Dokument wird mit dem Projektfortschritt erweitert. Letzte Aktualisierung: Mai 2026.*
