import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import mdx from '@astrojs/mdx';

// Production deploy target: markham360.ca (apex, base `/`).
// GitHub Pages: add public/CNAME and set Custom domain in repo settings.

export default defineConfig({
  site: 'https://markham360.ca',
  trailingSlash: 'always',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'zh-HK', 'zh-CN'],
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
