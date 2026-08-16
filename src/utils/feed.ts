import { getCollection } from 'astro:content';

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

const fmtDate = (d: Date) =>
  d.toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' });

/** Best-effort parse of free-text event dates into sortable Date values. */
function parseEventDate(raw: string): Date {
  const direct = Date.parse(raw);
  if (!Number.isNaN(direct)) return new Date(direct);

  const yearMatch = raw.match(/(20\d{2})/);
  const monthNames = [
    'january', 'february', 'march', 'april', 'may', 'june',
    'july', 'august', 'september', 'october', 'november', 'december',
  ];
  const lower = raw.toLowerCase();
  const month = monthNames.findIndex((m) => lower.includes(m));
  const year = yearMatch ? Number(yearMatch[1]) : 2024;
  if (month >= 0) return new Date(year, month, 15);
  return new Date(year, 0, 1);
}

export async function buildFeed(base: string, locale: 'en' | 'zh-HK' | 'zh-CN' = 'en'): Promise<FeedItem[]> {
  const [editions, events, videos] = await Promise.all([
    getCollection('editions', (e) => e.data.locale === locale && !e.data.draft),
    getCollection('events', (e) => e.data.locale === locale && !e.data.draft),
    getCollection('video', (e) => e.data.locale === locale && !e.data.draft),
  ]);

  const editionItems: FeedItem[] = editions.map((e) => ({
    kind: 'edition',
    id: e.id,
    title: e.data.title,
    date: e.data.pubDate,
    dateLabel: fmtDate(e.data.pubDate),
    dek: e.data.lead,
    href: `${base}/markham-360/${e.slug.replace(/^en\//, '')}`,
    label: `EP. ${e.data.episode}`,
    image: e.data.heroImage,
    episode: e.data.episode,
  }));

  const eventItems: FeedItem[] = events.map((e) => ({
    kind: 'event',
    id: e.id,
    title: e.data.title,
    date: parseEventDate(e.data.date),
    dateLabel: e.data.date,
    dek: e.data.summary,
    href: `${base}/community/${e.slug.replace(/^en\//, '')}`,
    label: 'Community',
    image: e.data.gallery?.[0],
  }));

  const videoItems: FeedItem[] = videos.map((v) => ({
    kind: 'video',
    id: v.id,
    title: v.data.title,
    date: v.data.pubDate,
    dateLabel: fmtDate(v.data.pubDate),
    dek: v.data.lead,
    href: `${base}/video/${v.slug.replace(/^en\//, '')}`,
    label: 'Explainer',
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
