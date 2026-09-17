import type { CollectionEntry } from 'astro:content';
import { LOCALE_LANG, type Locale } from './i18n';

type EventEntry = CollectionEntry<'events'>;

function absoluteUrl(site: URL | undefined, path: string): string {
  if (!site) return path;
  return new URL(path.replace(/^\//, ''), site).href;
}

const ATTENDANCE: Record<
  'offline' | 'online' | 'mixed',
  string
> = {
  offline: 'https://schema.org/OfflineEventAttendanceMode',
  online: 'https://schema.org/OnlineEventAttendanceMode',
  mixed: 'https://schema.org/MixedEventAttendanceMode',
};

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
  const mode = entry.data.attendanceMode ?? 'offline';

  const location =
    mode === 'online'
      ? {
          '@type': 'VirtualLocation',
          name: loc.name,
          ...(entry.data.registrationUrl ? { url: entry.data.registrationUrl } : { url: pageUrl }),
        }
      : {
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
        };

  const ld: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: entry.data.title,
    description: entry.data.summary,
    inLanguage: LOCALE_LANG[locale],
    startDate: entry.data.startDate,
    url: pageUrl,
    eventAttendanceMode: ATTENDANCE[mode],
    eventStatus: 'https://schema.org/EventScheduled',
    organizer,
    location,
  };

  if (entry.data.endDate) ld.endDate = entry.data.endDate;
  if (images.length > 0) ld.image = images;
  if (entry.data.free) {
    ld.offers = {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CAD',
      url: entry.data.registrationUrl ?? pageUrl,
      availability: 'https://schema.org/InStock',
    };
  }

  return ld;
}
