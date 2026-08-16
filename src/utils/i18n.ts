export type Locale = 'en' | 'zh-HK' | 'zh-CN';

export const LOCALES: Locale[] = ['en', 'zh-HK', 'zh-CN'];
export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  'zh-HK': '繁體中文',
  'zh-CN': '简体中文',
};

/** BCP-47 tags for the html lang attribute and hreflang. */
export const LOCALE_LANG: Record<Locale, string> = {
  en: 'en-CA',
  'zh-HK': 'zh-Hant-HK',
  'zh-CN': 'zh-Hans-CN',
};

/** hreflang value per locale (plus x-default handled at call site). */
export const LOCALE_HREFLANG: Record<Locale, string> = {
  en: 'en',
  'zh-HK': 'zh-Hant',
  'zh-CN': 'zh-Hans',
};

/**
 * Prefix a path for a given locale. `en` lives at the root; the others are
 * prefixed (/zh-HK/, /zh-CN/). Does not include the site `base`; use
 * Astro's built-in helpers or import.meta.env.BASE_URL for that.
 */
export function localizePath(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === DEFAULT_LOCALE) return clean;
  return `/${locale}${clean === '/' ? '' : clean}`;
}

/** Detect the locale from a pathname (best-effort). */
export function localeFromPath(pathname: string): Locale {
  if (pathname.includes('/zh-HK')) return 'zh-HK';
  if (pathname.includes('/zh-CN')) return 'zh-CN';
  return 'en';
}
