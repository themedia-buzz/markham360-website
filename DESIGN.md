# Markham 360 — Design System (DESIGN.md)

The visual language for the Markham 360 platform. The feel is an **editorial civic publication**: serif headlines with authority, generous whitespace, photography treated as content, a calm paper-and-ink base, and a single confident red accent. It should read like a well-made magazine, not a campaign flyer.

## Design Principles

1. **Editorial, not promotional.** Serif display, measured spacing, quiet confidence.
2. **The record breathes.** Whitespace over density. Let content have room.
3. **One accent, used sparingly.** Red marks issue numbers, links, section rules, and the "360" in the masthead. Never large red fills.
4. **Photography earns its place.** Real images with tight captions; no decorative stock.
5. **Legible in three languages.** Editorial serif for CJK display reinforces the publication feel.

## Design Tokens

All tokens are CSS custom properties in `src/styles/globals.css` and mapped into Tailwind (`tailwind.config.mjs`). Change a token once; the whole site updates.

### Colour

| Token | Draft value | Use |
|-------|-------------|-----|
| `--colour-ink` | `#1a1a1a` | Primary text |
| `--colour-paper` | `#faf8f4` | Primary background (warm off-white) |
| `--colour-white` | `#ffffff` | Cards, insets |
| `--colour-rule` | `#e2ddd3` | Hairlines, section rules |
| `--colour-muted` | `#6b6660` | Metadata, captions, secondary text |
| `--colour-accent` | **`#c8102e` (PLACEHOLDER)** | Alan Ho's red: issue numbers, links, masthead "360", primary CTA |
| `--colour-accent-ink` | **`#9e0c24` (PLACEHOLDER)** | Accent hover / text on light red |

> **`--colour-accent` is a placeholder.** Sample the exact red from Alan Ho's existing assets and replace both accent values in `globals.css`. Everything else recolours automatically.

### Typography

| Role | Font | Notes |
|------|------|-------|
| Display / masthead | Editorial serif (Fraunces / Newsreader / Source Serif 4 — confirm) | Headlines, masthead, issue titles |
| Body | Humanist sans or serif (Inter / Newsreader) | Article body, UI |
| Labels / meta | JetBrains Mono | "EP. 181", dates, section tags (uppercase, tracked) |
| zh-HK 繁體 | Noto Serif TC (display), Noto Sans TC (UI) | ~10% heavier than Latin |
| zh-CN 简体 | Noto Serif SC (display), Noto Sans SC (UI) | ~10% heavier than Latin |

Self-host all fonts under `public/fonts/` (privacy + performance + discoverability). Declare faces in `src/styles/fonts.css`.

### Spacing, width, radius

- Spacing scale (base 4px): 4, 8, 12, 16, 24, 32, 48, 64, 80, 96px.
- Content max width `1120px`; article measure `680px`; section gap ~`72px`.
- Radius is restrained (editorial, not bubbly): `--radius-sm 2px`, `--radius-md 6px`, `--radius-lg 10px`. **No pill-shaped CTAs** (reads campaign-y); use a squared, ruled button.

## Component Inventory

| Component | Purpose |
|-----------|---------|
| `Masthead` | "Markham 360" wordmark; "360" in the red accent |
| `Nav` | Site nav with `LanguagePicker` |
| `LanguagePicker` | en / zh-HK / zh-CN switch |
| `IssueCard` | Edition preview (EP number in red, date in mono, lead excerpt, image) |
| `IssueDetail` | Full edition (headline, EP stamp, hero, sectioned digest, prev/next) |
| `Byline` | Author or community credit linking to `/authors/[slug]` |
| `EventCard` | Community event (photo-led) |
| `VideoCard` | Explainer video (youtube-nocookie lite embed) |
| `ContinuityStat` | "180 consecutive weekly editions" — the signature proof |
| `PausedBanner` | Dignified election-period notice (archive browsable; sends paused) |
| `EditorLead` | Blockquote for the editor's lead / the accountability statement |
| `CTAButton` | Squared, ruled button (Subscribe / Contact). Not a pill. |
| `Footer` | Contact + office info + JSON-LD boilerplate |

## Layout Notes

- **Home:** masthead-first, magazine-cover style; lead story and filing rail, then editions, community, and explainers.
- **Archive:** editions as an editorial index grouped by year; the unbroken run visible.
- **Article:** serif headline, red EP stamp, hero image, sectioned digest, tight captions; byline when author is set.
- **Community:** photo-led grid; events may credit a person or organisation author.
- **Authors:** profile pages for people and community organisations (bio, website, social links, their posts).
- Alternate section surfaces (paper → white) with hairline rules.

## What To Avoid

- No poster-scale campaign type or badge illustrations.
- No large red fills or partisan styling; no "vote"/"donate" buttons.
- No stock imagery; use real photography or neutral placeholders.
- No heavy motion; subtle and considered only.
