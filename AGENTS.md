# Markham 360 Website — Project Context (AGENTS.md)

> Read this on every session to bootstrap context. Keep it concise and current.
> **This is a PUBLIC repository** (served on GitHub Pages). Everything committed here is world-readable. Internal strategy, client context, and planning notes live in `docs/plans/` which is **gitignored** and never committed. Do not paste internal strategy into committed files.

## What This Project Is

The web platform for **Alan Ho**, Regional Councillor, City of Markham. It is a premium, editorial-style home for the **Markham 360** weekly community update (a long-running newsletter), his record on council, and his community activity. Three languages: English (root), Traditional Chinese (`/zh-HK/`), Simplified Chinese (`/zh-CN/`).

## Posture (CRITICAL)

- **Current demo: campaign-funnel mode.** A feature flag (`CAMPAIGN` in `src/utils/constants.ts`) can show a top banner that funnels readers to the re-election campaign while the rest of the site remains a newspaper of record. Special election series may also be featured on this site.
- **Medium / long-term target: Mode A (track record).** Informational tone; primary CTAs are subscribe and contact; no vote/donate solicitation on this domain. Full Mode A rules live in `docs/plans/MODE-A-REFERENCE.md` (gitignored). Flip `CAMPAIGN.enabled` off (or swap the banner to a publication promo) when returning to Mode A.
- **No private-interest content.** Do not add anything about land, development deals, financing, or private ventures.

## Tech Stack (Locked)

Astro (static) · Tailwind CSS (tokens via CSS variables) · Astro i18n (`en`, `zh-HK`, `zh-CN`) · Astro content collections · GitHub Pages via Actions.

## Working Agreements

### Code
- **Canadian English** spelling (honour, labour, colour, centre, recognise, organise).
- **No em-dashes**; restructure sentences instead.
- TypeScript strict mode. Components are `.astro` by default.
- Design tokens live in `src/styles/globals.css`. `--colour-accent` is **Alan Ho's red**: a single swappable variable that recolours the whole site. If the exact hex is not yet confirmed, leave the clearly-marked placeholder; do not guess a final brand value into production.
- Verify with `npm run build` (exit 0) and `npm run check`. Do not rely on a dev server for verification.

### Content
- Editions are **editorial digests**: a short lead in the councillor's voice, then the handful of items that matter, with his own actions foregrounded. Do not paste raw third-party notices wholesale.
- Use the councillor's **own published words** and real, dated facts. No fabricated claims or statistics.
- **Chinese content is DRAFT** until reviewed by native Mandarin AND Cantonese speakers. Mark drafts clearly in frontmatter (`draft: true`) until reviewed.
- **No AI-fabricated likeness.** Use real photographs or neutral placeholders for portrait/office imagery.
- Place names: "Markham" as a place/council renders in Chinese as 萬錦 / 万锦 (never a phonetic transliteration). The councillor's name in Chinese is 何胡景.

### Accessibility & SEO/AEO
- Semantic HTML headings (one `<h1>` per page, ordered `<h2>`/`<h3>`).
- Descriptive `alt` text on every image.
- One clear, factual sentence near the top of each page (e.g. "Alan Ho is the Regional Councillor for the City of Markham and has published 180 consecutive weekly community updates.").
- JSON-LD structured data (Person, Article per edition, Event per community event) via `BaseLayout`.
- `hreflang` alternates for all three locales; canonical URL per page.

## Repository Layout

- `src/` — site source (see README).
- `public/` — static assets (fonts, images, favicon).
- `docs/plans/` — **gitignored** internal notes (build brief, deploy decisions, content harvest plan). Not part of the public site.
- `.github/workflows/deploy.yml` — GitHub Pages build + deploy on push to `main`.

## Reading Order For New Contributors

1. This file (`AGENTS.md`) — working agreements and posture.
2. `DESIGN.md` — the visual system, tokens, and component conventions.
3. `README.md` — setup and structure.
4. `src/styles/globals.css` — design tokens.
5. `src/content/config.ts` — content collection schemas.
6. `docs/plans/BUILD-BRIEF.md` (local only, gitignored) — the full internal build brief, if present.
