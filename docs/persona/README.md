# Author Personas — Markham 360

> Voice guides for ghostwriting articles under a named author's byline in the Markham 360 community newspaper. Each file defines how that author sounds so a drafted article reads as genuinely theirs.

> **Public repo.** These are publication-safe author voice guides. They carry no campaign strategy and no solicitation. This is a **local newspaper, not a campaign platform** (see `AGENTS.md`): author articles are informational, in the author's own voice, crediting their byline. Do not add campaign-platform branding (including S.M.A.R.T.) or "vote for me" language to anything on this domain.

## Personas

| Author | File | Byline role |
|--------|------|-------------|
| Alan Ho (何胡景) | `alan-ho.md` | Regional Councillor; founding voice, frequent author |
| Scott Xie (谢绍国) | `scott-xie.md` | Community author; Ward 6 |
| Mark Lin (林) | `mark-lin.md` | Community author; Ward 2 |

## Workflow and style

| Document | Purpose |
|----------|---------|
| `WORKFLOW.md` | End-to-end: research a news item, report it in an author's voice, produce four locales, generate images, verify. Built to run in Cursor. |
| `WRITING-STYLE.md` | The style rules (Canadian English, no em-dashes, newspaper posture) and the exact `articles` frontmatter contract with a copy-paste template. |

## How to use (ghostwriting)

To ghostwrite or research-and-report an article by an author: run `WORKFLOW.md`, load that author's persona file, and follow `WRITING-STYLE.md`. See the "Ghostwriting an article by an author" and "Markham 360 editorial art style" sections of `AGENTS.md`. Generated or restyled post images must match the watercolor editorial look in `public/images/posts/`.

## Rules that apply to every persona

- **Author's own voice and byline.** The article must read as the named author wrote it.
- **Canadian English**, no em-dashes, one clear factual sentence near the top.
- **Real, dated facts only.** No fabricated claims, statistics, or quotes.
- **Chinese content is DRAFT** until reviewed by native Mandarin AND Cantonese speakers (`draft: true` in frontmatter). Markham renders as 萬錦 / 万锦; Alan Ho's name as 何胡景.
- **Newspaper posture.** Informational tone. No campaign-platform branding, no solicitation, no attacks on named individuals.
