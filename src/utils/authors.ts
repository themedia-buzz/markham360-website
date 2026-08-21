import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import type { Locale } from './i18n';

export const DEFAULT_AUTHOR_SLUG = 'alan-ho';

export type AuthorEntry = CollectionEntry<'authors'>;

export async function getAuthor(slug: string | undefined): Promise<AuthorEntry | undefined> {
  const id = slug?.trim() || DEFAULT_AUTHOR_SLUG;
  try {
    return await getEntry('authors', id);
  } catch {
    return undefined;
  }
}

export async function getAllAuthors(includeDraft = false): Promise<AuthorEntry[]> {
  const authors = await getCollection('authors', (a) => includeDraft || !a.data.draft);
  return authors.sort((a, b) => a.data.name.localeCompare(b.data.name));
}

export function authorDisplayName(author: AuthorEntry, locale: Locale): string {
  if ((locale === 'zh-HK' || locale === 'zh-CN') && author.data.nameZh) {
    return `${author.data.nameZh} · ${author.data.name}`;
  }
  return author.data.name;
}

export function authorBio(author: AuthorEntry, locale: Locale): string {
  if (locale === 'fr' && author.data.bioFr) return author.data.bioFr;
  if (locale === 'zh-HK' && author.data.bioZhHK) return author.data.bioZhHK;
  if (locale === 'zh-CN' && author.data.bioZhCN) return author.data.bioZhCN;
  return author.data.bio;
}

export function authorJsonLd(author: AuthorEntry) {
  const base =
    author.data.type === 'organization'
      ? {
          '@type': 'Organization' as const,
          name: author.data.name,
        }
      : {
          '@type': 'Person' as const,
          name: author.data.name,
        };

  return {
    ...base,
    ...(author.data.nameZh ? { alternateName: author.data.nameZh } : {}),
    ...(author.data.website ? { url: author.data.website } : {}),
    ...(author.data.avatar ? { image: author.data.avatar.src } : {}),
    description: author.data.bio,
  };
}
