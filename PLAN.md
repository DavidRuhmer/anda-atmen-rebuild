# Rebuild-Plan: anda-atmen.at (SEO-optimiert)

## Projekt-Übersicht

**Ziel:** 1:1 Nachbau der Homepage mit vollständiger SEO-Optimierung basierend auf der SEO-Analyse.

**Tech-Stack:**
- Next.js 14 (App Router) - für beste SEO & Performance
- Tailwind CSS - für schnelles Styling
- TypeScript - für Typsicherheit
- Vercel - für Hosting & Deployment

---

## Phase 1: Projekt-Setup

### 1.1 Verzeichnisstruktur
```
anda-atmen-rebuild/
├── app/
│   ├── layout.tsx          # Root Layout mit Meta-Tags
│   ├── page.tsx             # Homepage (1:1 Nachbau)
│   ├── ratgeber/
│   │   ├── page.tsx         # Ratgeber-Übersicht
│   │   ├── was-ist-holotropes-atmen/page.tsx
│   │   ├── wirkung-und-erfahrungen/page.tsx
│   │   └── risiken-und-nebenwirkungen/page.tsx
│   ├── faq/page.tsx         # FAQ-Seite
│   ├── team/page.tsx        # Dedizierte Team-Seite
│   ├── termine/page.tsx     # Dedizierte Termine-Seite
│   ├── holotropes-atmen-wien/page.tsx      # Local Landing Page
│   ├── holotropes-atmen-oesterreich/page.tsx # Local Landing Page
│   ├── impressum/page.tsx
│   ├── datenschutz/page.tsx
│   ├── robots.ts            # Dynamische robots.txt
│   └── sitemap.ts           # Dynamische Sitemap
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── TeamSection.tsx
│   ├── TermineSection.tsx
│   ├── CookieBanner.tsx     # DSGVO-konform
│   ├── SchemaOrg.tsx        # Structured Data
│   └── ...
├── public/
│   ├── images/              # Alle Bilder
│   └── fonts/               # Jost & Cardo Fonts
├── styles/
│   └── globals.css
└── lib/
    └── schema.ts            # Schema.org Helpers
```

---

## Phase 2: SEO-Optimierungen (aus der Analyse)

### 2.1 Meta-Tags (KRITISCH)
```tsx
// app/layout.tsx
export const metadata = {
  title: 'Holotropes Atmen Österreich | Seminare Wien & Kitzbühel | Anda-Atmen',
  description: 'Holotropes Atmen Seminare in Österreich. Erfahrene Therapeuten begleiten Sie in Wien, Kitzbühel & Baden. Nächste Termine 2026. Jetzt anmelden!',
  keywords: 'holotropes atmen, holotropes atmen wien, holotropes atmen österreich, atemtherapie, breathwork',
  // ...
}
```

### 2.2 Structured Data (Schema.org)
- **LocalBusiness** - Für das Unternehmen
- **Event** - Für jeden Seminar-Termin
- **Person** - Für Team-Mitglieder
- **FAQPage** - Für FAQ-Seite
- **Article** - Für Ratgeber-Artikel
- **BreadcrumbList** - Für Navigation

### 2.3 Technische Optimierungen
- [x] Canonical Tags
- [x] Open Graph Tags
- [x] Twitter Cards
- [x] Hreflang (de-AT)
- [x] robots.txt
- [x] sitemap.xml
- [x] Alt-Tags für alle Bilder

### 2.4 Cookie-Banner (DSGVO)
- Consent-Management
- Keine Cookies vor Zustimmung
- Opt-in für Analytics

---

## Phase 3: Content-Erweiterungen

### 3.1 Ratgeber-Artikel (Blog)
1. **Was ist Holotropes Atmen?** (~1500 Wörter)
   - Geschichte (Stanislav Grof)
   - Methode erklärt
   - Ablauf einer Session

2. **Wirkung und Erfahrungen** (~1200 Wörter)
   - Wissenschaftliche Erkenntnisse
   - Erfahrungsberichte
   - Was passiert im Körper?

3. **Risiken und Nebenwirkungen** (~1000 Wörter)
   - Kontraindikationen
   - Sicherheitsvorkehrungen
   - Wann nicht teilnehmen?

### 3.2 FAQ-Seite
- Was kostet ein Seminar?
- Wie bereite ich mich vor?
- Ist Holotropes Atmen gefährlich?
- Brauche ich Vorkenntnisse?
- Was soll ich mitbringen?
- Wie lange dauert eine Session?
- etc.

### 3.3 Landing Pages (Local SEO)
- **/holotropes-atmen-wien/** - Fokus auf Wien & Umgebung
- **/holotropes-atmen-oesterreich/** - Österreich-weite Übersicht

---

## Phase 4: Design-Spezifikationen (1:1)

### Farben
```css
:root {
  --primary: #f00069;      /* Neon-Pink */
  --background: #0f0e17;   /* Dunkelblau */
  --text: #fffffe;         /* Weiß */
  --accent: #f00069;
  --beige: #e9dcd1;
}
```

### Fonts
```css
/* Jost - Headlines */
font-family: 'Jost', sans-serif;

/* Cardo - Body */
font-family: 'Cardo', serif;
```

### Buttons
```css
.btn-primary {
  background: #f00069;
  color: white;
  border-radius: 9999px;
  padding: 0.8rem 1.6rem;
  font-family: 'Jost', sans-serif;
  font-weight: 500;
}
```

---

## Phase 5: Deployment

### 5.1 Git Repository
```bash
git init
git add .
git commit -m "Initial commit: SEO-optimized rebuild of anda-atmen.at"
git remote add origin <github-url>
git push -u origin main
```

### 5.2 Vercel Deployment
```bash
vercel deploy
vercel --prod
```

---

## Checkliste

### Kritische SEO-Fixes (aus Analyse)
- [ ] Title Tag optimiert
- [ ] Meta Description vorhanden
- [ ] Canonical Tags
- [ ] Alt-Tags für alle Bilder
- [ ] Cookie-Banner implementiert
- [ ] Impressum vollständig
- [ ] Schema.org (LocalBusiness, Event, Person)
- [ ] robots.txt korrekt
- [ ] sitemap.xml vorhanden

### Content-Erweiterungen
- [ ] 3 Ratgeber-Artikel
- [ ] FAQ-Seite mit Schema
- [ ] Team-Seite (dediziert)
- [ ] Termine-Seite (dediziert)
- [ ] Landing Page Wien
- [ ] Landing Page Österreich

### Technisch
- [ ] Next.js 14 Setup
- [ ] Tailwind CSS
- [ ] Responsive Design
- [ ] Performance optimiert
- [ ] Git Repository
- [ ] Vercel deployed

---

## Zeitplan

| Phase | Aufgabe | Status |
|-------|---------|--------|
| 1 | Projekt-Setup & Assets | ⏳ |
| 2 | Homepage 1:1 Nachbau | ⏳ |
| 3 | SEO-Grundlagen | ⏳ |
| 4 | Schema.org | ⏳ |
| 5 | Ratgeber-Artikel | ⏳ |
| 6 | FAQ & Landing Pages | ⏳ |
| 7 | Cookie-Banner | ⏳ |
| 8 | Git & Vercel | ⏳ |
