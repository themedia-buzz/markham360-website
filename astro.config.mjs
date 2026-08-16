import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import mdx from '@astrojs/mdx';

// DEMO deploy target. Default: GitHub Pages project URL.
// Option (a) Pages project URL: set `site` below and `base: '/markham360-website'`.
// Option (b) custom demo domain (e.g. markham360.ca): set `site` to the apex,
//            add public/CNAME, and REMOVE `base`.
// See docs/plans/DEPLOY.md (gitignored) for the full decision record.

export default defineConfig({
  site: 'https://passive-influencer-ai.github.io',
  base: '/markham360-website',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-HK', 'zh-CN'],
    routing: { prefixDefaultLocale: false },
  },

  integrations: [
    tailwind({ applyBaseStyles: false }),
    // Sitemap i18n mapping is intentionally omitted: the plugin's i18n block
    // requires locale keys that match URL path segments and errors on this
    // routing setup. hreflang alternates are emitted per-page in BaseLayout.
    sitemap(),
    partytown({ config: { forward: ['dataLayer.push'] } }),
    mdx(),
  ],

  output: 'static',
});
