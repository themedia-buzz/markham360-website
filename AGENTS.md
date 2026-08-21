# Markham 360 Website — Project Context (AGENTS.md)

> Read this on every session to bootstrap context. Keep it concise and current.
> **This is a PUBLIC repository** (served on GitHub Pages). Everything committed here is world-readable. Internal strategy, client context, and planning notes live in `docs/plans/` which is **gitignored** and never committed. Do not paste internal strategy into committed files.

## What This Project Is

**Markham 360** is a local community newspaper for Markham: weekly editions, community events, and articles from contributors and organisations who serve the region. Regional Councillor **Alan Ho** (何胡景) is a founding voice and frequent author; other authors and community groups publish under their own bylines. Three languages: English (root), Traditional Chinese (`/zh-HK/`), Simplified Chinese (`/zh-CN/`).

## Posture (CRITICAL)

- **Local newspaper, not a campaign platform.** Informational tone. Primary CTAs are subscribe and contact. Do not revive S.M.A.R.T. (or any Municipal City–sponsored political platform branding) on this domain.
- **Optional campaign banner.** A feature flag (`CAMPAIGN` in `src/utils/constants.ts`) may show a top banner that links to the external re-election site. The banner must not carry SMART copy or on-site platform links. Flip `CAMPAIGN.enabled` off for Mode A (newspaper-only) operation; see `docs/plans/MODE-A-REFERENCE.md` (gitignored) if present.
- **Multi-author.** Editions, events, and explainers may credit an `author` slug. Each author or community org with published work gets a profile under `/authors/` with website and social links.
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
- Editions are **editorial digests**: a short lead, then the handful of items that matter. Do not paste raw third-party notices wholesale. Cross-posts from partner orgs should attribute the author and link to their site.
- Use **own published words** and real, dated facts. No fabricated claims or statistics.
- **Chinese content is DRAFT** until reviewed by native Mandarin AND Cantonese speakers. Mark drafts clearly in frontmatter (`draft: true`) until reviewed.
- **No AI-fabricated likeness.** Use real photographs or neutral placeholders for portrait/office imagery.
- Place names: "Markham" as a place/council renders in Chinese as 萬錦 / 万锦 (never a phonetic transliteration). The councillor's name in Chinese is 何胡景.

### Accessibility & SEO/AEO
- Semantic HTML headings (one `<h1>` per page, ordered `<h2>`/`<h3>`).
- Descriptive `alt` text on every image.
- One clear, factual sentence near the top of each page (e.g. "Alan Ho is the Regional Councillor for the City of Markham and has published 180 consecutive weekly community updates.").
- JSON-LD structured data (Person, Organization for community authors, Article per edition, Event per community event) via `BaseLayout`.
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
