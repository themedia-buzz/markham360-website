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
- **Portraits and real events:** prefer real photographs for identifiable people and documentary scenes. When generating or stylising post art, use the **Markham 360 editorial art style** below (not photorealistic fakes of real people or events).
- Place names: "Markham" as a place/council renders in Chinese as 萬錦 / 万锦 (never a phonetic transliteration). The councillor's name in Chinese is 何胡景.

### Accessibility & SEO/AEO
- Semantic HTML headings (one `<h1>` per page, ordered `<h2>`/`<h3>`).
- Descriptive `alt` text on every image.
- One clear, factual sentence near the top of each page (e.g. "Alan Ho is the Regional Councillor for the City of Markham and has published 180 consecutive weekly community updates.").
- JSON-LD structured data (Person, Organization for community authors, Article per edition, Event per community event) via `BaseLayout`.
- `hreflang` alternates for all three locales; canonical URL per page.

## Ghostwriting an article by an author

Markham 360 is a multi-author newspaper. When asked to **ghostwrite an article by \<name\>** (e.g. "ghostwrite an article by Alan Ho"), **report this from \<name\>'s perspective**, or turn a release/draft into a newspaper piece under a byline:

**Run the full workflow in `docs/persona/WORKFLOW.md`** (local; may be present on the contributor machine). Companions: `docs/persona/<slug>.md` (voice) and `docs/persona/WRITING-STYLE.md` (style + frontmatter contract). Summary:

1. **Research the facts.** Prefer a primary source (City of Markham / York Region release, official page). Capture names, dates, figures, locations, and the source URL. Never fabricate.
2. **Load the author's persona.** Read `docs/persona/<slug>.md` for voice, tone, register, vocabulary, sample lines, Chinese-rendering rules, and guardrails:
   - Alan Ho (何胡景) — `docs/persona/alan-ho.md`
   - Scott Xie (谢绍国) — `docs/persona/scott-xie.md`
   - Mark Lin (林) — `docs/persona/mark-lin.md`
3. **Write in that author's voice**, following newspaper rules in this file and `WRITING-STYLE.md` when present: Canadian English, no em-dashes, lead with the fact, scannable structure, no emoji/hashtags, no campaign solicitation.
4. **Produce four locales** (`en`, `fr`, `zh-HK`, `zh-CN`). EN/FR final; Chinese `draft: true` pending native Mandarin AND Cantonese review.
5. **Generate or restyle images** into `public/images/posts/<YYYYMMDD>-<slug>/` using the **Markham 360 editorial art style** below. Reference them via `heroImage` and optional `gallery`. Descriptive `alt` on every image; optimise large files.
6. **Place and verify.** Files go in `src/content/articles/<locale>/<slug>.md`; run `npm run build` (exit 0) and `npm run check`. The article then appears in the community section and homepage feed.

**Standalone article vs newsletter:** a standalone community-news article lives in the `articles` collection (`/news/`, dated, no episode number). The numbered Markham 360 newsletter lives in `editions` (`/markham-360/`). Do not file a standalone article as an edition.

Persona files are publication-safe author voice guides. They contain no campaign strategy. Full index: `docs/persona/README.md`. Worked examples: `src/content/articles/*/hwy-404-road-crossing.md` and related posts under `public/images/posts/`.

## Markham 360 editorial art style (post images)

**Canonical references:** every generated or restyled post image must match the look of the files already in [`public/images/posts/`](public/images/posts/) (e.g. `20260905-404-crossing/`, `20260905-drjerry/`). Open those PNGs before generating; treat them as the house style, not optional inspiration.

When ghostwriting produces art, or when a source photo is **repurposed** for the site, render it in this style so Markham 360 has one visual voice across community news.

### Look
- **Medium:** editorial **watercolor and ink wash** on textured paper. Soft pigment blooms, visible paper grain, light charcoal or ink linework. Feels hand-made and magazine-ready, not stock photo and not hard vector flat design.
- **Edges:** often a **soft vignette or deckled / bleeding edge** that fades into off-white paper, not a hard full-bleed photo crop.
- **Line:** organic, slightly sketchy outlines; architecture and maps stay legible; figures stay proportional but clearly illustrated.
- **Light:** soft, even, overcast daylight. No harsh flash, no cinematic neon, no heavy drop shadows.
- **Maps / diagrams:** same watercolor-paper treatment (see the Hwy 404 map sketch): muted land washes, hand-drawn roads, charcoal labels, legend on the page; brand red/orange only for the “new” or focal elements.

### Palette (align with site tokens)
Ground the image in the site’s paper-and-ink system from `src/styles/globals.css` / `DESIGN.md`:
- **Paper / neutrals:** warm off-white, cream, soft grey (`--colour-paper`, `--colour-rule`).
- **Ink:** charcoal / near-black for line and type (`--colour-ink`), muted grey for secondary detail (`--colour-muted`).
- **Accent:** Alan Ho’s red (`--colour-accent`, placeholder `#c8102e`) used sparingly for ribbons, “new” map lines, or a single focal prop. Do not flood the frame with red.
- **Support colours:** desaturated navy, sage/olive greens, soft sky blue, warm wood/ochre. Low overall saturation; calm civic editorial mood.

### Do / don’t
- **Do** illustrate places, openings, infrastructure, maps, and community scenes in this watercolor editorial style.
- **Do** restyle a source photograph into this look when the piece needs art and a real photo cannot be published as-is.
- **Do not** output photorealistic AI fakes of real people, real ribbon-cuttings, or real buildings presented as documentary photos.
- **Do not** use purple-gradient AI defaults, glossy 3D, meme stickers, or campaign-poster bombast.
- **Do not** invent a recognisable likeness of a real person; if a portrait is required, use a cleared real photograph (or omit the face and keep the scene illustrative).

### Placement
- Folder: `public/images/posts/<YYYYMMDD>-<slug>/`
- Prefer descriptive filenames ending in `_editorial_sketch` (or similar) so the asset is obviously illustration.
- Wire via article frontmatter `heroImage` + `gallery`; every image needs descriptive `alt` text.

## Repository Layout

- `src/` — site source (see README).
- `public/` — static assets (fonts, images, favicon). Post editorial art lives under `public/images/posts/`.
- `docs/persona/` — author voice guides and ghostwriting workflow (`README.md`, `WORKFLOW.md`, `WRITING-STYLE.md`, one file per author). May be local-only depending on repo ignore rules; still the source of truth when present.
- `docs/plans/` — **gitignored** internal notes (build brief, deploy decisions, content harvest plan). Not part of the public site.
- `.github/workflows/deploy.yml` — GitHub Pages build + deploy on push to `main`.

## Reading Order For New Contributors

1. This file (`AGENTS.md`) — working agreements, posture, ghostwriting, and editorial art style.
2. `DESIGN.md` — the visual system, tokens, and component conventions.
3. `README.md` — setup and structure.
4. `docs/persona/README.md` — author voice guides for ghostwriting under a named byline.
5. `docs/persona/WORKFLOW.md` — research-and-report workflow; `docs/persona/WRITING-STYLE.md` — style rules and the article file contract.
6. `public/images/posts/` — visual reference for generated post art.
7. `src/styles/globals.css` — design tokens.
8. `src/content/config.ts` — content collection schemas.
9. `docs/plans/BUILD-BRIEF.md` (local only, gitignored) — the full internal build brief, if present.
