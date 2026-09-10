# Workflow — Research and Report News From an Author's Perspective

> The end-to-end playbook for producing a Markham 360 community-news article from a source, written in a named author's voice, with images. Designed to run entirely in Cursor: research the facts, write the report from the author's perspective, generate the images, place the files, verify the build.

> Read this with two companions: `docs/persona/<slug>.md` (the author's voice) and `docs/persona/WRITING-STYLE.md` (the style rules and the article file contract). This file is the "how"; those two are the "who" and the "how it must read".

---

## When to use this

Any time the input is "write an article about X in \<author\>'s voice", "report this from Alan Ho's perspective", or a pasted draft/social post that needs to become a proper newspaper article. The output is a standalone community-news article in the `articles` collection (it appears in the unified community section and the homepage feed).

This is for **standalone news articles**, not the numbered Markham 360 newsletter. Newsletter runs live in the `editions` collection; do not give an article an episode number. See `AGENTS.md`.

---

## The five steps

### 1. Research the facts

Establish what is true before writing a word. The article's credibility is its facts.

- **Prefer a primary source:** an official news release (City of Markham, York Region), a public agency page, the organisation's own site, or the author's own office. Capture the URL; it becomes the article's `sourceUrl`.
- **Extract the concrete facts:** names, dates, dollar figures, locations, what was built or decided, who was involved. List them plainly.
- **Do not invent.** If a figure or date is not in a source, leave it out. No fabricated statistics, quotes, or attributions. This rule is absolute for a sitting official's byline.
- **Note the date.** Community news is dated; the article's `pubDate` should reflect when the event happened or when the piece is published.
- **Flag anything uncertain** so it can be confirmed before publish rather than guessed.

Output of this step: a short, sourced fact list plus the source URL.

### 2. Choose the perspective (the author)

Decide whose byline this runs under, then load that persona.

- Read `docs/persona/<slug>.md` in full: who is speaking, tone, register, vocabulary (use / avoid), do / don't, sample lines, Chinese-rendering rules, guardrails.
- The article must read as though that author wrote it. For **Alan Ho**, that means a steady, accountable councillor who reports rather than campaigns, leads with the fact rather than himself, uses first person for duty and thanks, and never solicits or campaigns on this domain.
- Respect the persona's guardrails. For Alan Ho specifically: no campaign-platform branding (no S.M.A.R.T.), no "vote for me", no solicitation, no land/development/private-interest content.

### 3. Write the report from that perspective

Turn the fact list into an article in the author's voice, following `WRITING-STYLE.md` exactly.

- **Open with one clear, quotable factual sentence** (the `lead`): what happened, plainly. Not "I was proud to..." but the news itself.
- **Reserve first person for the author's genuine role:** attendance, duty, thanks. The news leads; the author frames.
- **Structure for scanning:** a short opening, then a bulleted breakdown of the substance under an `##` heading, then a plain-language close. Match the existing articles (`hwy-404-road-crossing`, `dr-jerry-leung-medical-club`) for shape.
- **Strip social-media styling:** no emoji, no hashtags, no exclamation runs. This is a newspaper.
- **Keep every real fact** from the research; drop the promotional adjectives.
- **Close on the author's note** (thanks, what comes next), kept modest.

### 4. Produce all four language versions

Every article ships in four locales: `en` (root), `fr`, `zh-HK` (Traditional), `zh-CN` (Simplified).

- Write EN and FR as final (`draft: false`).
- Write Chinese as `draft: true` until a native Mandarin AND Cantonese speaker reviews it. The site shows drafts on the Chinese locales so they can be reviewed in place.
- Place names: Markham renders 萬錦 / 万锦 (never a transliteration); Alan Ho is 何胡景. Keep proper nouns (people, venues, road names) as they are; do not invent Chinese names for them.

### 5. Generate and place the images

Cursor is good at this; use it, within the rules. **House style is mandatory:** the Markham 360 editorial art style in `AGENTS.md` (section “Markham 360 editorial art style”), with visual references in `public/images/posts/`.

- **Create the image folder:** `public/images/posts/<YYYYMMDD>-<slug>/` (e.g. `public/images/posts/20260905-drjerry/`).
- **Open the reference PNGs** in `public/images/posts/` (Hwy 404 sketches, Dr Jerry sketches, and any later posts) before generating. Match that watercolor-and-ink editorial look, paper texture, soft edges, and brand-aligned palette (paper neutrals, charcoal ink, sparingly used Alan Ho red).
- **Generate a hero image** and, optionally, one or two supporting images for the gallery. Prefer filenames like `*_editorial_sketch.png`.
- **Repurposing a source photo:** restyle it into the same editorial watercolor look; do not publish a photorealistic AI fake of a real person or event as if it were documentary photography.
- **Do NOT fabricate a recognisable likeness of a real person**, and do not present a photorealistic fake of a real place or event as a photo. Real photography for cleared portraits; otherwise clearly-illustrative artwork in house style.
- **Reference the images in frontmatter:** `heroImage` for the primary, `gallery` for the rest (see `WRITING-STYLE.md` for the exact fields). Every image needs descriptive `alt` text.
- **Optimise** large images before committing (multi-MB files should be resized/compressed).

### 6. Place the files and verify

- Article files go in `src/content/articles/<locale>/<slug>.md`, one per locale, same slug across all four.
- Build to verify: `npm run build` (must exit 0) and `npm run check` (0 errors). A successful build confirms the frontmatter validates against the schema and the pages render. Do not rely on a dev server.
- The article then appears automatically in the community section and homepage feed; no route or nav change is needed.

---

## Worked example (already in the repo)

Two articles were produced with this workflow; use them as templates:

- `src/content/articles/*/hwy-404-road-crossing.md` — a single-hero infrastructure story from a York Region release, Alan Ho's voice.
- `src/content/articles/*/dr-jerry-leung-medical-club.md` — a two-image (hero + gallery) local-business story, Alan Ho's voice.

Both show the before/after of the transformation: a social-style draft (emoji, hashtags, "I was proud to...") became a factual newspaper report that leads with the news and reserves first person for duty and thanks.

---

## The non-negotiables (quick reference)

- Facts are real and sourced; nothing fabricated.
- Article reads in the named author's voice (load the persona).
- Newspaper posture: no campaign branding, no solicitation, no attacks, no private-interest content.
- Canadian English, no em-dashes, one clear factual sentence up top (see `WRITING-STYLE.md`).
- Four locales; Chinese is `draft: true` pending native review.
- Images: **Markham 360 editorial art style** (`AGENTS.md` + `public/images/posts/` references); no fabricated real likeness; descriptive `alt`; optimised.
- `npm run build` exits 0 before you consider it done.
