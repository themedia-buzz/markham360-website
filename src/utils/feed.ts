import { getCollection } from 'astro:content';
import {
  contentSlug,
  href,
  includeDraftContent,
  formatDate,
  type Locale,
} from './i18n';
import { UI } from './constants';

export type FeedKind = 'edition' | 'event' | 'video';

export type FeedItem = {
  kind: FeedKind;
  id: string;
  title: string;
  date: Date;
  dateLabel: string;
  dek: string;
  href: string;
  label: string;
  image?: { src: string; alt: string };
  youtubeId?: string;
  episode?: number;
};

/** Best-effort parse of free-text event dates into sortable Date values. */
export function parseEventDate(raw: string): Date | null {
  const direct = Date.parse(raw);
  if (!Number.isNaN(direct)) return new Date(direct);

  const yearMatch = raw.match(/(20\d{2})/);
  const monthNames = [
    ['january', 'janvier'],
    ['february', 'février'],
    ['march', 'mars'],
    ['april', 'avril'],
    ['may', 'mai'],
    ['june', 'juin'],
    ['july', 'juillet'],
    ['august', 'août'],
    ['september', 'septembre'],
    ['october', 'octobre'],
    ['november', 'novembre'],
    ['december', 'décembre'],
  ];
  const lower = raw.toLowerCase();
  const month = monthNames.findIndex((names) => names.some((name) => lower.includes(name)));
  const year = yearMatch ? Number(yearMatch[1]) : 2024;
  if (month >= 0) return new Date(year, month, 15);
  if (yearMatch) return new Date(year, 0, 1);
  return null;
}

export async function buildFeed(base: string, locale: Locale = 'en'): Promise<FeedItem[]> {
  const allowDraft = includeDraftContent(locale);
  const t = UI[locale];

  const [editions, events, videos] = await Promise.all([
    getCollection(
      'editions',
      (e) => e.data.locale === locale && (allowDraft || !e.data.draft)
    ),
    getCollection(
      'events',
      (e) => e.data.locale === locale && (allowDraft || !e.data.draft)
    ),
    getCollection(
      'video',
      (e) => e.data.locale === locale && (allowDraft || !e.data.draft)
    ),
  ]);

  const editionItems: FeedItem[] = editions.map((e) => ({
    kind: 'edition',
    id: e.id,
    title: e.data.title,
    date: e.data.pubDate,
    dateLabel: formatDate(e.data.pubDate, locale),
    dek: e.data.lead,
    href: href(base, locale, `/markham-360/${contentSlug(e.slug)}`),
    label: `EP. ${e.data.episode}`,
    image: e.data.heroImage,
    episode: e.data.episode,
  }));

  const eventItems: FeedItem[] = events.map((e) => ({
    kind: 'event',
    id: e.id,
    title: e.data.title,
    date: parseEventDate(e.data.date) ?? new Date(0),
    dateLabel: e.data.date,
    dek: e.data.summary,
    href: href(base, locale, `/community/${contentSlug(e.slug)}`),
    label: t.communityLabel,
    image: e.data.gallery?.[0],
  }));

  const videoItems: FeedItem[] = videos.map((v) => ({
    kind: 'video',
    id: v.id,
    title: v.data.title,
    date: v.data.pubDate,
    dateLabel: formatDate(v.data.pubDate, locale),
    dek: v.data.lead,
    href: href(base, locale, `/video/${contentSlug(v.slug)}`),
    label: t.explainer,
    youtubeId: v.data.youtubeId,
    image: v.data.youtubeId
      ? {
          src: `https://i.ytimg.com/vi/${v.data.youtubeId}/hqdefault.jpg`,
          alt: v.data.title,
        }
      : undefined,
  }));

  return [...editionItems, ...eventItems, ...videoItems].sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );
}
