import type { Locale } from './i18n';

/** Councillor identity — used in copy and JSON-LD. Public record. */
export const COUNCILLOR = {
  nameEn: 'Alan Ho',
  nameZh: '何胡景',
  role: 'Regional Councillor, City of Markham',
  city: 'Markham',
  region: 'ON',
  country: 'CA',
  // Public office contact (from published sources).
  email: 'alan.ho@markham.ca',
  office: 'Markham Civic Centre, 101 Town Centre Boulevard, Markham, Ontario, L3R 9W3',
} as const;

/** The signature continuity fact. Keep factual; update as the run resumes. */
export const CONTINUITY = {
  editions: 180,
  since: 2022,
  statement:
    'Alan Ho is the Regional Councillor for the City of Markham and has published 180 consecutive weekly community updates.',
} as const;

/** The five S.M.A.R.T. pillars (slugs used for /record/[pillar]). */
export const PILLARS = [
  { slug: 'safe-community', letter: 'S', title: 'Safe Community' },
  { slug: 'moving-people-forward', letter: 'M', title: 'Moving People Forward' },
  { slug: 'accountable-leadership', letter: 'A', title: 'Accountable Leadership' },
  { slug: 'resilient-infrastructure', letter: 'R', title: 'Resilient Infrastructure' },
  { slug: 'tax-dollars-that-work', letter: 'T', title: 'Tax Dollars That Work' },
] as const;

/** Primary publication CTAs. */
export const CTA = {
  subscribeUrl: '#subscribe', // replace with the confirmed subscribe endpoint
  contactEmail: COUNCILLOR.email,
} as const;

/**
 * Campaign funnel banner (demo on). Set enabled: false for Mode A
 * track-record operation; see docs/plans/MODE-A-REFERENCE.md.
 */
export const CAMPAIGN = {
  enabled: true,
  href: 'https://www.re-elect-alanho.ca/',
  headline: 'Re-elect Alan Ho for Markham Regional Councillor',
  subhead: 'A SMART Markham for the next generation.',
  cta: 'Visit the campaign',
  seriesLabel: 'Election series',
  seriesHref: '/record',
} as const;

/** UI strings per locale. zh values are DRAFT pending native-speaker review. */
export const UI: Record<Locale, Record<string, string>> = {
  en: {
    subscribe: 'Subscribe to Markham 360',
    contact: 'Contact my office',
    latest: 'Latest edition',
    archive: 'All editions',
    record: 'The record',
    community: 'In the community',
    video: 'Video',
    about: 'About',
    paused: 'Weekly editions are paused during the municipal election period. The archive remains available.',
  },
  'zh-HK': {
    subscribe: '訂閱萬錦360',
    contact: '聯絡我的辦公室',
    latest: '最新一期',
    archive: '所有期數',
    record: '工作記錄',
    community: '社區活動',
    video: '影片',
    about: '關於',
    paused: '市政選舉期間，每週通訊暫停發送；過往期數仍可查閱。',
  },
  'zh-CN': {
    subscribe: '订阅万锦360',
    contact: '联系我的办公室',
    latest: '最新一期',
    archive: '所有期数',
    record: '工作记录',
    community: '社区活动',
    video: '视频',
    about: '关于',
    paused: '市政选举期间，每周通讯暂停发送；过往期数仍可查阅。',
  },
};
