import { defineCollection, z } from 'astro:content';

const locale = z.enum(['en', 'fr', 'zh-HK', 'zh-CN']);

const socialLink = z.object({
  label: z.string(),
  href: z.string().url(),
});

const avatar = z.object({
  src: z.string(),
  alt: z.string(),
});

/**
 * Markham 360 weekly editions. Rendered as editorial digests, not raw
 * newsletter dumps. `episode` preserves the canonical run so the
 * 180-week continuity stays verifiable.
 */
const editions = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    episode: z.number(),
    pubDate: z.date(),
    locale,
    lead: z.string(), // editor's-lead excerpt
    heroImage: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    sections: z
      .array(
        z.object({
          heading: z.string(),
          items: z.array(z.string()),
        })
      )
      .optional(),
    /** Optional editorial series tag (e.g. election specials). */
    series: z.string().optional(),
    /** Author slug from the authors collection; defaults to alan-ho in templates. */
    author: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

/**
 * Standalone community-news articles. Independent of the numbered
 * Markham 360 newsletter run (`editions`); a single dated news piece
 * with a hero image and prose body, credited to an author byline.
 */
const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    locale,
    lead: z.string(), // one clear factual sentence / standfirst
    heroImage: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    /** Additional images shown in the article body after the hero. */
    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
        })
      )
      .default([]),
    /** Optional source link (e.g. an official news release). */
    sourceUrl: z.string().url().optional(),
    sourceLabel: z.string().optional(),
    tags: z.array(z.string()).default([]),
    /** Author slug from the authors collection; defaults to alan-ho in templates. */
    author: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

/** ISO 8601 date, year-month, year, or datetime with offset (Event JSON-LD). */
const iso8601 = z
  .string()
  .regex(
    /^\d{4}(-\d{2}(-\d{2}(T\d{2}:\d{2}(:\d{2})?([+-]\d{2}:\d{2}|Z)?)?)?)?$/,
    'ISO 8601 date or datetime'
  );

const eventLocation = z.object({
  name: z.string(),
  streetAddress: z.string().optional(),
  addressLocality: z.string().default('Markham'),
  addressRegion: z.string().default('ON'),
  postalCode: z.string().optional(),
  addressCountry: z.string().default('CA'),
});

/** Community events (photo-led). */
const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(), // display label; free text OK (e.g. "Dec 2025 - Jan 2026")
    /** Machine start for Event JSON-LD. Never copy the display `date` string. */
    startDate: iso8601,
    endDate: iso8601.optional(),
    location: eventLocation,
    /** When true, emit a $0 CAD Offer. Omit when admission is unknown. */
    free: z.boolean().optional(),
    locale,
    summary: z.string(),
    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
        })
      )
      .default([]),
    /** Author slug from the authors collection; defaults to alan-ho in templates. */
    author: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

/**
 * Video explainers as articles: the video is the hero media;
 * the body explains why it exists.
 */
const video = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    locale,
    lead: z.string(),
    youtubeId: z.string().optional(),
    order: z.number().default(0),
    /** Author slug from the authors collection; defaults to alan-ho in templates. */
    author: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

/**
 * People and community organisations who contribute to Markham 360.
 * One JSON file per author; slug is the filename.
 */
const authors = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    nameZh: z.string().optional(),
    type: z.enum(['person', 'organization']),
    bio: z.string(),
    bioFr: z.string().optional(),
    bioZhHK: z.string().optional(),
    bioZhCN: z.string().optional(),
    website: z.string().url().optional(),
    social: z.array(socialLink).default([]),
    avatar: avatar.optional(),
    draft: z.boolean().default(false),
  }),
});

/** Structured page content blocks. */
const pages = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    locale,
  }),
});

export const collections = { editions, articles, events, video, authors, pages };
