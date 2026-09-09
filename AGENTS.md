# Markham 360 Website — Project Context (AGENTS.md)

> Read this on every session to bootstrap context. Keep it concise and current.
> **This is a PUBLIC repository** (served on GitHub Pages). Everything committed here is world-readable. Internal strategy, client context, and planning notes live in `docs/plans/` which is **gitignored** and never committed. Do not paste internal strategy into committed files.

## What This Project Is

**Markham 360** is a local community newspaper for Markham: weekly editions, community events, and articles from contributors and organisations who serve the region. Regional Councillor **Alan Ho** (何胡景) is a founding voice and frequent author; other authors and community groups publish under their own bylines. Three languages: English (root), Traditional Chinese (`/zh-HK/`), Simplified Chinese (`/zh-CN/`).

## Posture (CRITICAL)

- **Local newspaper, not a campaign platform.** Informational tone. Primary CTAs are subscribe and contact. Do not revive S.M.A.R.T. (or any Municipal City–sponsored political platform branding) on this domain.
- **Optional campaign banner.** A feature flag (`CAMPAIGN` in `src/utils/constants.ts`) may show a top banner that links to the external re-election site. The banner must not carry SMART copy or on-site platform links. Flip `CAMPAIGN.enabled` off for Mode A (newspaper-only) operation; see `docs/plans/MODE-A-REFERENCE.md` (gitignored) if present.
- **Multi-author.** Editions, articles, events, and explainers may credit an `author` slug. Each author or community org with published work gets a profile under `/authors/` with website and social links.
- **Two public pillars.** The homepage hero includes all content kinds; the newest item by date is always the lead. Nav and homepage bands present two pillars: **Community** (`articles` news + `events` under `/news` and `/community`) above **Markham 360 series** (`editions` + `video` explainers under `/markham-360` and `/video`). Detail URL families stay separate; collections stay separate.
- **Two kinds of writing.** The numbered **Markham 360 newsletter** run lives in the `editions` collection (`/markham-360/`, episode-numbered, preserves the 180-week continuity). A **standalone community-news article** that is NOT part of the newsletter lives in the `articles` collection (`/news/`, dated, no episode number). Do not file a standalone article as an edition, and do not give it an episode number. Explainers (`video`) belong to the Markham 360 series; events belong with community news.
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

## Ghostwriting an article by an author

Markham 360 is a multi-author newspaper. To **ghostwrite an article by \<name\>** (e.g. "ghostwrite an article by Alan Ho", "ghostwrite an article by Scott Xie", "ghostwrite an article by Mark Lin"):

1. **Load the author's persona.** Read `docs/persona/<slug>.md` for their voice, tone, register, vocabulary, sample lines, and Chinese-rendering rules. Available personas:
   - Alan Ho (何胡景) — `docs/persona/alan-ho.md`
   - Scott Xie (谢绍国) — `docs/persona/scott-xie.md`
   - Mark Lin (林) — `docs/persona/mark-lin.md`
2. **Draft in that author's voice**, crediting their byline (`author` slug). The article must read as though the named author wrote it.
3. **Apply the newspaper rules** in this file: Canadian English, no em-dashes, one clear factual sentence near the top, real dated facts only, semantic headings, descriptive `alt` text, JSON-LD.
4. **Stay in newspaper posture.** Informational tone. No campaign-platform branding (including S.M.A.R.T.), no "vote for me", no solicitation, no attacks on named individuals. If the request implies campaign messaging, keep it off this domain (that belongs on an author's own external campaign site, not here).
5. **Chinese output is DRAFT** (`draft: true`) until native Mandarin AND Cantonese review.
6. The author (or their office) approves before publish.

Persona files are publication-safe author voice guides. They contain no campaign strategy. Full index: `docs/persona/README.md`.

## Repository Layout

- `src/` — site source (see README).
- `public/` — static assets (fonts, images, favicon).
- `docs/persona/` — **public** author voice guides for ghostwriting under a named byline (`README.md` + one file per author).
- `docs/plans/` — **gitignored** internal notes (build brief, deploy decisions, content harvest plan). Not part of the public site.
- `.github/workflows/deploy.yml` — GitHub Pages build + deploy on push to `main`.

## Reading Order For New Contributors

1. This file (`AGENTS.md`) — working agreements and posture.
2. `DESIGN.md` — the visual system, tokens, and component conventions.
3. `README.md` — setup and structure.
4. `docs/persona/README.md` — author voice guides for ghostwriting under a named byline.
5. `src/styles/globals.css` — design tokens.
6. `src/content/config.ts` — content collection schemas.
7. `docs/plans/BUILD-BRIEF.md` (local only, gitignored) — the full internal build brief, if present.
