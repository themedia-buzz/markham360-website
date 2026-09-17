import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';
import { includeDraftContent, type Locale } from './i18n';

export type EventEntry = CollectionEntry<'events'>;

const TORONTO_TZ = 'America/Toronto';

/** Parse an ISO 8601 event datetime (with optional offset) into a Date. */
export function parseEventStart(iso: string): Date {
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? new Date(0) : d;
}

/** Effective end of an event for upcoming/past filtering. */
export function eventEffectiveEnd(entry: EventEntry): Date {
  if (entry.data.endDate) return parseEventStart(entry.data.endDate);
  return parseEventStart(entry.data.startDate);
}

/** True when the event has not yet ended (America/Toronto wall-clock). */
export function isUpcomingEvent(entry: EventEntry, now: Date = new Date()): boolean {
  return eventEffectiveEnd(entry).getTime() >= now.getTime();
}

export function sortUpcomingFirst(a: EventEntry, b: EventEntry): number {
  return parseEventStart(a.data.startDate).getTime() - parseEventStart(b.data.startDate).getTime();
}

export function sortPastNewestFirst(a: EventEntry, b: EventEntry): number {
  return parseEventStart(b.data.startDate).getTime() - parseEventStart(a.data.startDate).getTime();
}

export async function getLocaleEvents(locale: Locale): Promise<EventEntry[]> {
  const allowDraft = includeDraftContent(locale);
  return getCollection(
    'events',
    (e) => e.data.locale === locale && (allowDraft || !e.data.draft)
  );
}

export async function getUpcomingEvents(
  locale: Locale,
  limit?: number,
  now: Date = new Date()
): Promise<EventEntry[]> {
  const events = await getLocaleEvents(locale);
  const upcoming = events.filter((e) => isUpcomingEvent(e, now)).sort(sortUpcomingFirst);
  return typeof limit === 'number' ? upcoming.slice(0, limit) : upcoming;
}

export async function getPastEvents(locale: Locale, now: Date = new Date()): Promise<EventEntry[]> {
  const events = await getLocaleEvents(locale);
  return events.filter((e) => !isUpcomingEvent(e, now)).sort(sortPastNewestFirst);
}

/** Format a short time label from an ISO datetime for display. */
export function formatEventTime(iso: string, locale: Locale): string {
  const d = parseEventStart(iso);
  if (d.getTime() === 0) return '';
  const localeTag =
    locale === 'fr' ? 'fr-CA' : locale === 'zh-HK' ? 'zh-HK' : locale === 'zh-CN' ? 'zh-CN' : 'en-CA';
  return new Intl.DateTimeFormat(localeTag, {
    timeZone: TORONTO_TZ,
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short',
  }).format(d);
}

/** Compact calendar day for rail / list (e.g. "17 Sep"). */
export function formatEventDay(iso: string, locale: Locale): string {
  const d = parseEventStart(iso);
  if (d.getTime() === 0) return '';
  const localeTag =
    locale === 'fr' ? 'fr-CA' : locale === 'zh-HK' ? 'zh-HK' : locale === 'zh-CN' ? 'zh-CN' : 'en-CA';
  return new Intl.DateTimeFormat(localeTag, {
    timeZone: TORONTO_TZ,
    day: 'numeric',
    month: 'short',
  }).format(d);
}
