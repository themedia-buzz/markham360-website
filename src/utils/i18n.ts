export type Locale = 'en' | 'fr' | 'zh-HK' | 'zh-CN';

export const LOCALES: Locale[] = ['en', 'fr', 'zh-HK', 'zh-CN'];
export const DEFAULT_LOCALE: Locale = 'en';
export const ZH_LOCALES: Locale[] = ['zh-HK', 'zh-CN'];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  'zh-HK': '繁體',
  'zh-CN': '简体',
};

/** BCP-47 tags for the html lang attribute and hreflang. */
export const LOCALE_LANG: Record<Locale, string> = {
  en: 'en-CA',
  fr: 'fr-CA',
  'zh-HK': 'zh-Hant-HK',
  'zh-CN': 'zh-Hans-CN',
};

/** hreflang value per locale (plus x-default handled at call site). */
export const LOCALE_HREFLANG: Record<Locale, string> = {
  en: 'en',
  fr: 'fr-CA',
  'zh-HK': 'zh-Hant',
  'zh-CN': 'zh-Hans',
};

/**
 * Prefix a path for a given locale. `en` lives at the root; the others are
 * prefixed (/zh-HK/, /zh-CN/). Does not include the site `base`.
 */
export function localizePath(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === DEFAULT_LOCALE) return clean === '' ? '/' : clean;
  return `/${locale}${clean === '/' ? '' : clean}`;
}

/** Join Astro `BASE_URL` with a site path (handles trailing slashes). */
export function withBase(base: string, path: string): string {
  const b = base.replace(/\/$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${b}${p}`;
}

/** Locale-aware href including site base. */
export function href(base: string, locale: Locale, path: string): string {
  return withBase(base, localizePath(path, locale));
}

/** Strip collection locale folder prefix from an entry slug. */
export function contentSlug(slug: string): string {
  // Astro lowercases content slugs, so zh-HK folders become `zh-hk/...`.
  return slug.replace(/^(en|fr|zh-hk|zh-cn)\//i, '');
}

/** Detect the locale from a pathname (best-effort). */
export function localeFromPath(pathname: string): Locale {
  if (pathname.includes('/zh-HK')) return 'zh-HK';
  if (pathname.includes('/zh-CN')) return 'zh-CN';
  if (pathname.includes('/fr')) return 'fr';
  return 'en';
}

/**
 * Path without site base or locale prefix, suitable for LanguagePicker
 * alternates (e.g. `/about`, `/markham-360/ep-181`).
 */
export function pathWithoutLocale(pathname: string, base = '/'): string {
  let p = pathname;
  const b = base.replace(/\/$/, '');
  if (b && b !== '' && p.startsWith(b)) {
    p = p.slice(b.length) || '/';
  }
  p = p
    .replace(/^\/zh-HK(?=\/|$)/, '')
    .replace(/^\/zh-CN(?=\/|$)/, '')
    .replace(/^\/fr(?=\/|$)/, '');
  if (!p.startsWith('/')) p = `/${p}`;
  p = p.replace(/\/index\.html$/, '/').replace(/\/$/, '') || '/';
  return p;
}

/**
 * English hides drafts. Chinese locales include drafts so demo/review
 * content marked `draft: true` still renders until native review clears it.
 */
export function includeDraftContent(locale: Locale): boolean {
  return locale === 'zh-HK' || locale === 'zh-CN';
}

export function dateLocale(locale: Locale): string {
  if (locale === 'fr') return 'fr-CA';
  if (locale === 'zh-HK') return 'zh-HK';
  if (locale === 'zh-CN') return 'zh-CN';
  return 'en-CA';
}

export function formatDate(d: Date, locale: Locale): string {
  return d.toLocaleDateString(dateLocale(locale), {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
