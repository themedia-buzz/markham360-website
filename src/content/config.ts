import { defineCollection, z } from 'astro:content';

const locale = z.enum(['en', 'zh-HK', 'zh-CN']);

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
    draft: z.boolean().default(false),
  }),
});

/** Community events (photo-led). */
const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(), // free text OK (e.g. "Dec 2025 - Jan 2026")
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

export const collections = { editions, events, video, pages };
