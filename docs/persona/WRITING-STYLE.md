# Writing Style and Article Contract — Markham 360

> The style rules and the article file contract for Markham 360. Follow this exactly when writing any article. It is the single style reference for the ghostwriting workflow (`docs/persona/WORKFLOW.md`) and it defines the frontmatter every article file must have.

---

## 1. Voice and posture

- **Local newspaper, not a campaign platform.** Articles inform. No "vote for me", no solicitation (donations, volunteers, lawn signs), no campaign-platform branding (including S.M.A.R.T.), no attacks on named individuals, no private-interest content (land, development deals, financing).
- **Author's own voice.** Each article runs under an author byline and must read as that person wrote it. Load `docs/persona/<slug>.md` for the specific voice.
- **Report, do not sell.** Lead with the news, not the author. Reserve first person for the author's genuine role (attendance, duty, thanks).
- **Under-claim.** Specific and modest reads as true; broad and grand reads as spin. Promise effort and presence, never guaranteed outcomes.

## 2. Language and typography (hard rules)

- **Canadian English** spelling: honour, labour, colour, favour, behaviour, centre, metre, recognise, organise, organisation, defence, licence (noun), catalogue, travelled. Not the American variants. (Direct quotations keep their original spelling.)
- **No em-dashes.** Restructure the sentence instead: a colon to introduce, parentheses or commas for an aside, a semicolon or a new sentence to separate clauses. Never use " - " (space-hyphen-space) as a substitute.
- **Hyphens for ranges** (pp. 12-15, 2024-2026), never en-dashes.
- **No negation-then-assertion.** Do not write "This is not X, it is Y." State the positive claim directly.
- **No AI-tell filler:** no "in today's fast-paced world", "it is important to note", "most significantly", rhetorical-question openers, or grandiose words ("transform", "unlock", "leverage", "game-changing", "revolutionary", "synergy").
- **No emoji, no hashtags, no exclamation runs** in article body or frontmatter. (Social-media styling is stripped when a draft becomes an article.)

## 3. Structure (make it scannable)

- **Open with one clear, quotable factual sentence.** This is also the `lead`. What happened, plainly.
- **Break text every two paragraphs** with a list, a subheading, or a short quote. Paragraphs are three to five sentences.
- **Use one `##` section** for the substance (e.g. "What the crossing means for our community", "What the club brings together"), usually a bulleted breakdown. Bold only the lead term of each bullet, not the whole sentence.
- **Close plainly:** the author's modest note (thanks, what comes next).
- **Semantic headings:** one `<h1>` is the title (from frontmatter); body sections are `##`.

## 4. Facts and sources

- Every factual claim (names, dates, dollar figures, locations) must come from a real source. No fabricated statistics, quotes, or attributions.
- Link the primary source via `sourceUrl` / `sourceLabel` in frontmatter (e.g. an official news release).
- If a detail cannot be verified, leave it out and flag it for confirmation.

## 5. Chinese content

- All Chinese output is **DRAFT** (`draft: true`) until a native Mandarin AND Cantonese speaker reviews it. The site renders drafts on the Chinese locales so they can be reviewed in place.
- Markham as a place/council renders 萬錦 (Traditional) / 万锦 (Simplified). Never a phonetic transliteration.
- Alan Ho renders 何胡景. Keep other proper nouns (people, venues, road names) as they appear; do not invent Chinese names.
- A phrase that reads well in Mandarin may scan awkwardly in Cantonese; the review gate exists to catch this.

## 6. Images

- Store under `public/images/posts/<YYYYMMDD>-<slug>/`.
- `heroImage` is the primary; `gallery` holds any additional images shown after the hero.
- Every image needs descriptive `alt` text.
- **No fabricated likeness of a real person, and no photorealistic fake of a real place or event.** Editorial illustration/sketch style is acceptable and should read as illustration, not as a real photo. Prefer real photography for real portraits and scenes when available.
- Optimise large images (multi-MB) before committing.

---

## 7. The article file contract (`articles` collection)

One markdown file per locale at `src/content/articles/<locale>/<slug>.md`, same `slug` across all four locales (`en`, `fr`, `zh-HK`, `zh-CN`).

### Frontmatter fields

| Field | Required | Type | Notes |
|-------|----------|------|-------|
| `title` | yes | string | The headline. No em-dashes. |
| `pubDate` | yes | date | `YYYY-MM-DD`. The event/publication date. |
| `locale` | yes | enum | one of `en`, `fr`, `zh-HK`, `zh-CN`; must match the folder. |
| `lead` | yes | string | The one clear factual sentence (also the meta description and card dek). |
| `heroImage` | no | object | `{ src, alt }`. Primary image. |
| `gallery` | no | array | `[{ src, alt }, ...]`. Additional images after the hero. Defaults to empty. |
| `sourceUrl` | no | url | Link to the primary source (news release, agency page). |
| `sourceLabel` | no | string | Display text for the source link. |
| `tags` | no | string[] | Topic tags. Defaults to empty. |
| `author` | no | string | Author slug from the `authors` collection (e.g. `alan-ho`). Sets the byline. |
| `draft` | no | boolean | `false` for EN/FR final; `true` for Chinese pending native review. Defaults to `false`. |

### Body

Markdown. Opens with the lead sentence as the first paragraph, then a short opening, then one `##` section (usually a bulleted breakdown), then a plain close. Keep it 300-700 words for a standard piece.

### Template

```markdown
---
title: "Headline in the author's register, no em-dashes"
pubDate: 2026-09-05
locale: "en"
lead: "One clear factual sentence: what happened, plainly."
heroImage:
  src: "/images/posts/20260905-slug/hero.png"
  alt: "Descriptive alt text for the hero image."
gallery:
  - src: "/images/posts/20260905-slug/second.png"
    alt: "Descriptive alt text for the second image."
sourceUrl: "https://www.markham.ca/..."
sourceLabel: "Official release title"
tags: [topic-one, topic-two]
author: alan-ho
draft: false
---

The lead sentence, plainly stated as the opening paragraph.

A short paragraph of context in the author's voice, first person reserved for the author's genuine role.

## What this means for our community

- **Lead term:** the rest of the point, factual and specific.
- **Lead term:** another point.
- **Lead term:** another point.

A plain closing paragraph: the author's modest note, thanks, or what comes next.
```

For the Chinese versions, set `locale` and `draft: true`, translate title/lead/alt/body, and render Markham as 萬錦 / 万锦 and Alan Ho as 何胡景.

---

## 8. Verify

Before considering an article done: `pnpm run build` exits 0 (validates frontmatter against the schema and renders the pages) and `pnpm run check` reports 0 errors. Do not rely on a dev server. The article then appears automatically in the community section and homepage feed.
