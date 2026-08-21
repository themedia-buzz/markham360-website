# Markham 360

A local community newspaper for Markham: weekly *Markham 360* editions, community events, and contributors who serve the region. Regional Councillor **Alan Ho** is a founding voice; other authors and organisations publish under their own bylines. Built as a fast, multilingual static site.

## Languages

- English (default)
- Traditional Chinese (繁體) at `/zh-HK/`
- Simplified Chinese (简体) at `/zh-CN/`

## Tech stack

- [Astro](https://astro.build) (static output)
- Tailwind CSS (design tokens via CSS custom properties)
- Astro content collections (editions, events, video, authors)
- Astro built-in i18n
- Deployed to GitHub Pages via GitHub Actions

## Local development

```bash
npm install
npm run build      # production build (verification)
npm run check      # type + content checks
npm run preview    # preview the built site locally
```

> A production build (`npm run build`) is the standard verification step.

## Project structure

```
src/
├── components/     UI components (.astro)
├── layouts/        page layout + <head> (hreflang, JSON-LD)
├── content/        editions, events, video, authors, pages (content collections)
├── pages/          routes (en at root; zh-HK/ and zh-CN/ mirrors)
├── styles/         globals.css (design tokens) + fonts.css
└── utils/          i18n helpers + constants
public/
├── fonts/          self-hosted web fonts
└── images/         editions, events, portrait
```

## Deployment

Pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds the site and publishes it to GitHub Pages.

## Content

Weekly *Markham 360* editions, community events, explainer videos, and author profiles are managed as Markdown/data files under `src/content/`. See `AGENTS.md` for content conventions.

---

© Regional Councillor Alan Ho, City of Markham.
