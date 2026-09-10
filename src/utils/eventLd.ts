import type { CollectionEntry } from 'astro:content';
import { LOCALE_LANG, type Locale } from './i18n';

type EventEntry = CollectionEntry<'events'>;

function absoluteUrl(site: URL | undefined, path: string): string {
  if (!site) return path;
  return new URL(path.replace(/^\//, ''), site).href;
}

export function eventJsonLd(opts: {
  entry: EventEntry;
  locale: Locale;
  pageUrl: string;
  site: URL | undefined;
  organizer: Record<string, unknown>;
}): Record<string, unknown> {
  const { entry, locale, pageUrl, site, organizer } = opts;
  const loc = entry.data.location;
  const images = (entry.data.gallery ?? []).map((g) => absoluteUrl(site, g.src));

  const ld: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: entry.data.title,
    description: entry.data.summary,
    inLanguage: LOCALE_LANG[locale],
    startDate: entry.data.startDate,
    url: pageUrl,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    organizer,
    location: {
      '@type': 'Place',
      name: loc.name,
      address: {
        '@type': 'PostalAddress',
        ...(loc.streetAddress ? { streetAddress: loc.streetAddress } : {}),
        addressLocality: loc.addressLocality,
        addressRegion: loc.addressRegion,
        ...(loc.postalCode ? { postalCode: loc.postalCode } : {}),
        addressCountry: loc.addressCountry,
      },
    },
  };

  if (entry.data.endDate) ld.endDate = entry.data.endDate;
  if (images.length > 0) ld.image = images;
  if (entry.data.free) {
    ld.offers = {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CAD',
      url: pageUrl,
      availability: 'https://schema.org/InStock',
    };
  }

  return ld;
}
