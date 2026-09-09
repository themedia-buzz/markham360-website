import type { Locale } from './i18n';

/** Councillor identity - used in copy and JSON-LD. Public record. */
export const COUNCILLOR = {
  nameEn: 'Alan Ho',
  nameZh: '何胡景',
  role: 'Regional Councillor, City of Markham',
  roleFr: 'Conseiller régional, Ville de Markham',
  roleZhHK: '萬錦市區域議員',
  roleZhCN: '万锦市区域议员',
  city: 'Markham',
  cityZhHK: '萬錦',
  cityZhCN: '万锦',
  region: 'ON',
  country: 'CA',
  email: 'alan.ho@markham.ca',
  office: 'Markham Civic Centre, 101 Town Centre Boulevard, Markham, Ontario, L3R 9W3',
  officeFr: 'Centre civique de Markham, 101 Town Centre Boulevard, Markham (Ontario) L3R 9W3',
  officeZhHK: '萬錦市政中心，101 Town Centre Boulevard，萬錦，安大略省，L3R 9W3',
  officeZhCN: '万锦市政中心，101 Town Centre Boulevard，万锦，安大略省，L3R 9W3',
} as const;

/** The signature continuity fact. Keep factual; update as the run resumes. */
export const CONTINUITY = {
  editions: 180,
  since: 2022,
  statement:
    'Alan Ho is the Regional Councillor for the City of Markham and has published 180 consecutive weekly community updates.',
  statementFr:
    'Alan Ho est conseiller régional de la Ville de Markham et a publié 180 bulletins communautaires hebdomadaires consécutifs.',
  statementZhHK:
    '何胡景是萬錦市區域議員，已連續發表 180 期每週社區通訊《萬錦360》。',
  statementZhCN:
    '何胡景是万锦市区域议员，已连续发表 180 期每周社区通讯《万锦360》。',
} as const;

export function continuityStatement(locale: Locale): string {
  if (locale === 'fr') return CONTINUITY.statementFr;
  if (locale === 'zh-HK') return CONTINUITY.statementZhHK;
  if (locale === 'zh-CN') return CONTINUITY.statementZhCN;
  return CONTINUITY.statement;
}

/** Primary publication CTAs. */
export const CTA = {
  subscribeUrl: '#subscribe',
  contactEmail: COUNCILLOR.email,
} as const;

/**
 * Campaign funnel banner (demo on). Set enabled: false for Mode A
 * track-record operation; see docs/plans/MODE-A-REFERENCE.md.
 */
export const CAMPAIGN = {
  enabled: true,
  href: 'https://www.re-elect-alanho.ca/',
} as const;

/** Campaign banner copy per locale (DRAFT for zh). */
export const CAMPAIGN_COPY: Record<
  Locale,
  { eyebrow: string; headline: string; subhead: string; cta: string; dismiss: string }
> = {
  en: {
    eyebrow: '2026 municipal election',
    headline: 'Re-elect Alan Ho for Markham Regional Councillor',
    subhead: 'Learn more on the campaign site.',
    cta: 'Visit the campaign',
    dismiss: 'Dismiss',
  },
  fr: {
    eyebrow: 'Élections municipales de 2026',
    headline: 'Réélire Alan Ho comme conseiller régional de Markham',
    subhead: 'En savoir plus sur le site de campagne.',
    cta: 'Visiter le site de campagne',
    dismiss: 'Fermer',
  },
  'zh-HK': {
    eyebrow: '2026 年市政選舉',
    headline: '再選何胡景出任萬錦市區域議員',
    subhead: '詳情請見競選網站。',
    cta: '前往競選網站',
    dismiss: '關閉',
  },
  'zh-CN': {
    eyebrow: '2026 年市政选举',
    headline: '再选何胡景出任万锦市区域议员',
    subhead: '详情请见竞选网站。',
    cta: '前往竞选网站',
    dismiss: '关闭',
  },
};

/** UI strings per locale. zh values are DRAFT pending native-speaker review. */
export const UI: Record<Locale, Record<string, string>> = {
  en: {
    subscribe: 'Subscribe to Markham 360',
    contact: 'Contact my office',
    latest: 'Latest edition',
    archive: 'Markham 360',
    community: 'In the community',
    video: 'Video',
    about: 'About',
    news: 'Community news',
    paused:
      'Weekly editions are paused during the municipal election period. The archive remains available.',
    alsoFiling: 'Also filing',
    latestEditions: 'Markham 360 series',
    allEvents: 'All events',
    allCommunity: 'All community',
    communityLede:
      'Community news and local events: infrastructure, services, food drives, forums, and partner gatherings across Markham.',
    explainers: 'Explainers',
    allExplainers: 'All explainers',
    editionsLede: `${CONTINUITY.editions} consecutive weekly editions since ${CONTINUITY.since}, plus short explainers. One continuous Markham 360 series for residents.`,
    explainersLede:
      'Articles where the video is the main content: short municipal explainers for residents.',
    weeks: 'weeks',
    backCommunity: 'In the community',
    backExplainers: 'All explainers',
    backAuthors: 'All contributors',
    authors: 'Contributors',
    byline: 'By',
    whatNext: 'What comes next',
    explainer: 'Explainer',
    communityLabel: 'Community',
  },
  fr: {
    subscribe: "S'abonner à Markham 360",
    contact: 'Communiquer avec mon bureau',
    latest: 'Dernière édition',
    archive: 'Markham 360',
    community: 'Dans la communauté',
    video: 'Vidéo',
    about: 'À propos',
    news: 'Nouvelles communautaires',
    paused:
      'Les éditions hebdomadaires sont suspendues pendant la période électorale municipale. Les archives demeurent accessibles.',
    alsoFiling: 'À lire aussi',
    latestEditions: 'Série Markham 360',
    allEvents: 'Tous les événements',
    allCommunity: 'Toute la communauté',
    communityLede:
      'Nouvelles communautaires et événements locaux : infrastructures, services, collectes, forums et rassemblements partenaires à Markham.',
    explainers: 'Vidéos explicatives',
    allExplainers: 'Toutes les explications',
    editionsLede: `${CONTINUITY.editions} éditions hebdomadaires consécutives depuis ${CONTINUITY.since}, plus de courtes explications. Une série Markham 360 continue pour les résidents.`,
    explainersLede:
      'Des articles où la vidéo est le contenu principal : de courtes explications municipales pour les résidents.',
    weeks: 'semaines',
    backCommunity: 'Dans la communauté',
    backExplainers: 'Toutes les explications',
    backAuthors: 'Tous les contributeurs',
    authors: 'Contributeurs',
    byline: 'Par',
    whatNext: 'La prochaine étape',
    explainer: 'Explication',
    communityLabel: 'Communauté',
  },
  'zh-HK': {
    subscribe: '訂閱萬錦360',
    contact: '聯絡我的辦公室',
    latest: '最新一期',
    archive: '萬錦360',
    community: '社區',
    video: '影片',
    about: '關於',
    news: '社區新聞',
    paused: '市政選舉期間，每週通訊暫停發送；過往期數仍可查閱。',
    alsoFiling: '同期報道',
    latestEditions: '萬錦360系列',
    allEvents: '所有活動',
    allCommunity: '全部社區內容',
    communityLede: '社區新聞與本地活動：基建、服務、募捐、論壇及合作夥伴聚會。',
    explainers: '解說短片',
    allExplainers: '所有解說',
    editionsLede: `自 ${CONTINUITY.since} 年起連續 ${CONTINUITY.editions} 期通訊，並收錄解說短片。萬錦360為同一連續系列。`,
    explainersLede: '以短片為主的市政解說文章，方便居民快速了解議題。',
    weeks: '週',
    backCommunity: '社區',
    backExplainers: '所有解說',
    backAuthors: '所有作者與社區',
    authors: '作者與社區',
    byline: '作者',
    whatNext: '下一步',
    explainer: '解說',
    communityLabel: '社區',
  },
  'zh-CN': {
    subscribe: '订阅万锦360',
    contact: '联系我的办公室',
    latest: '最新一期',
    archive: '万锦360',
    community: '社区',
    video: '视频',
    about: '关于',
    news: '社区新闻',
    paused: '市政选举期间，每周通讯暂停发送；过往期数仍可查阅。',
    alsoFiling: '同期报道',
    latestEditions: '万锦360系列',
    allEvents: '所有活动',
    allCommunity: '全部社区内容',
    communityLede: '社区新闻与本地活动：基建、服务、募捐、论坛及合作伙伴聚会。',
    explainers: '解说短片',
    allExplainers: '所有解说',
    editionsLede: `自 ${CONTINUITY.since} 年起连续 ${CONTINUITY.editions} 期通讯，并收录解说短片。万锦360为同一连续系列。`,
    explainersLede: '以短片为主的市政解说文章，方便居民快速了解议题。',
    weeks: '周',
    backCommunity: '社区',
    backExplainers: '所有解说',
    backAuthors: '所有作者与社区',
    authors: '作者与社区',
    byline: '作者',
    whatNext: '下一步',
    explainer: '解说',
    communityLabel: '社区',
  },
};

export const PAGE_COPY: Record<
  Locale,
  {
    /** Browser tab + link-share card title (newsletter angle). */
    homeTitle: string;
    /** Open Graph / Twitter share description (newsletter angle). */
    homeShareDescription: string;
    /** Meta description for search / AEO (local-news identity). */
    homeDescription: string;
    aboutTitle: string;
    aboutH1: string;
    aboutIntro: string;
    aboutRolesH2: string;
    aboutRoles: string[];
    aboutNote: string;
    contactTitle: string;
    contactH1: string;
    contactSubscribeH2: string;
    contactSubscribeP: string;
    archiveTitle: string;
    archiveLede: string;
    communityTitle: string;
    communityLede: string;
    newsTitle: string;
    newsLede: string;
    authorsTitle: string;
    authorsLede: string;
    videoTitle: string;
    videoH1: string;
    videoLede: string;
    footerCopyright: string;
  }
> = {
  en: {
    homeTitle: 'Markham 360 - Weekly e-newsletter from Councillor Alan Ho',
    homeShareDescription:
      'A weekly e-newsletter from York Regional Councillor Alan Ho. City and York Region updates for Markham residents.',
    homeDescription:
      'Markham 360 is a local community newspaper covering Markham: weekly editions, community events, and contributors who serve the region.',
    aboutTitle: 'About - Regional Councillor Alan Ho',
    aboutH1: 'About Alan Ho',
    aboutIntro: `${COUNCILLOR.nameEn} (${COUNCILLOR.nameZh}) is the Regional Councillor for the City of Markham, with 16 years of service to the community. He has published ${CONTINUITY.editions} consecutive weekly Markham 360 community updates, keeping residents informed on City and York Region affairs in multiple languages.`,
    aboutRolesH2: 'Roles on council',
    aboutRoles: [
      'Chair, Culture & Economic Development Committee (City of Markham)',
      'Chair, Markham Subcommittee (City of Markham)',
      'Director, Housing York Inc. Board (York Region)',
      'Member, Audit Committee (York Region)',
      'Member, Accessibility Advisory Committee (York Region)',
    ],
    aboutNote:
      'Replace this placeholder with the full biography. No AI-generated likeness; use real photography.',
    contactTitle: 'Contact - Regional Councillor Alan Ho',
    contactH1: 'Contact my office',
    contactSubscribeH2: 'Subscribe to Markham 360',
    contactSubscribeP:
      'Get weekly community updates when regular editions resume. (Connect the subscribe form endpoint here.)',
    archiveTitle: 'Markham 360 - Series',
    archiveLede:
      'Weekly editions and short explainers on the City of Markham and York Region. One continuous Markham 360 series since 2022.',
    communityTitle: 'In the Community - Markham 360',
    communityLede:
      'Community news and local events: infrastructure, services, food drives, forums, and partner gatherings across Markham.',
    newsTitle: 'Community News - Markham 360',
    newsLede:
      'Independent community-news articles on the City of Markham and York Region: infrastructure, services, and local developments that affect residents.',
    authorsTitle: 'Contributors - Markham 360',
    authorsLede:
      'People and community organisations whose work appears in Markham 360.',
    videoTitle: 'Explainers - Markham 360',
    videoH1: 'Explainers',
    videoLede:
      'Short articles where the video is the main content: municipal issues explained for residents.',
    footerCopyright: `Regional Councillor ${COUNCILLOR.nameEn}, City of Markham.`,
  },
  fr: {
    homeTitle: 'Markham 360 - Bulletin électronique hebdomadaire du conseiller Alan Ho',
    homeShareDescription:
      'Un bulletin électronique hebdomadaire du conseiller régional de York Alan Ho. Nouvelles de la Ville et de la région de York pour les résidents de Markham.',
    homeDescription:
      'Markham 360 est un journal communautaire local sur Markham : éditions hebdomadaires, événements et contributeurs au service de la région.',
    aboutTitle: 'À propos - Conseiller régional Alan Ho',
    aboutH1: 'À propos d’Alan Ho',
    aboutIntro: `${COUNCILLOR.nameEn} (${COUNCILLOR.nameZh}) est conseiller régional de la Ville de Markham et compte 16 années de service communautaire. Il a publié ${CONTINUITY.editions} éditions hebdomadaires consécutives de Markham 360 pour informer les résidents des affaires de la Ville et de la région de York dans plusieurs langues.`,
    aboutRolesH2: 'Fonctions au conseil',
    aboutRoles: [
      'Président, Comité de la culture et du développement économique (Ville de Markham)',
      'Président, Sous-comité de Markham (Ville de Markham)',
      'Administrateur, conseil de Housing York Inc. (Région de York)',
      'Membre, Comité de vérification (Région de York)',
      'Membre, Comité consultatif sur l’accessibilité (Région de York)',
    ],
    aboutNote:
      'Remplacer ce texte provisoire par la biographie complète. Utiliser une photographie réelle, jamais un portrait généré par IA.',
    contactTitle: 'Coordonnées - Conseiller régional Alan Ho',
    contactH1: 'Communiquer avec mon bureau',
    contactSubscribeH2: "S'abonner à Markham 360",
    contactSubscribeP:
      'Recevez les nouvelles communautaires hebdomadaires lorsque les éditions régulières reprendront. (Brancher ici le formulaire d’abonnement.)',
    archiveTitle: 'Markham 360 - Série',
    archiveLede:
      'Éditions hebdomadaires et courtes explications sur la Ville de Markham et la région de York. Une série Markham 360 continue depuis 2022.',
    communityTitle: 'Dans la communauté - Markham 360',
    communityLede:
      'Nouvelles communautaires et événements locaux : infrastructures, services, collectes, forums et rassemblements partenaires à Markham.',
    newsTitle: 'Nouvelles communautaires - Markham 360',
    newsLede:
      'Articles de nouvelles communautaires indépendants sur la Ville de Markham et la région de York : infrastructures, services et projets locaux qui touchent les résidents.',
    authorsTitle: 'Contributeurs - Markham 360',
    authorsLede:
      'Personnes et organisations communautaires dont le travail paraît dans Markham 360.',
    videoTitle: 'Vidéos explicatives - Markham 360',
    videoH1: 'Vidéos explicatives',
    videoLede:
      'De courts articles où la vidéo explique les enjeux municipaux aux résidents.',
    footerCopyright: `Conseiller régional ${COUNCILLOR.nameEn}, Ville de Markham.`,
  },
  'zh-HK': {
    homeTitle: '萬錦360 - 區域議員何胡景的每週電子通訊',
    homeShareDescription:
      '約克區區域議員何胡景的每週電子通訊。為萬錦居民報道市府與約克區事務。',
    homeDescription: '萬錦360是報道萬錦事務的本地社區報紙：每週通訊、社區活動，以及服務本區的作者與社區組織。',
    aboutTitle: '關於 - 區域議員何胡景',
    aboutH1: '關於何胡景',
    aboutIntro: `${COUNCILLOR.nameZh}（${COUNCILLOR.nameEn}）是萬錦市區域議員，服務社區逾十六年。他已連續發表 ${CONTINUITY.editions} 期《萬錦360》每週通訊，以多語向居民通報市府與約克區事務。`,
    aboutRolesH2: '議會職務',
    aboutRoles: [
      '主席，文化及經濟發展委員會（萬錦市）',
      '主席，萬錦小組委員會（萬錦市）',
      '董事，Housing York Inc. 董事會（約克區）',
      '成員，審計委員會（約克區）',
      '成員，無障礙諮詢委員會（約克區）',
    ],
    aboutNote: '肖像須用真實照片，不可使用 AI 生成人像。',
    contactTitle: '聯絡 - 區域議員何胡景',
    contactH1: '聯絡我的辦公室',
    contactSubscribeH2: '訂閱萬錦360',
    contactSubscribeP: '通訊恢復後即可收取每週社區更新。（請在此接上訂閱表單端點。）',
    archiveTitle: '萬錦360 - 系列',
    archiveLede: '每週通訊與解說短片，報道萬錦市與約克區事務。自 2022 年起為同一連續系列。',
    communityTitle: '社區 - 萬錦360',
    communityLede: '社區新聞與本地活動：基建、服務、募捐、論壇及合作夥伴聚會。',
    newsTitle: '社區新聞 - 萬錦360',
    newsLede: '關於萬錦市與約克區的獨立社區新聞：基建、服務及影響居民的本地發展。',
    authorsTitle: '作者與社區 - 萬錦360',
    authorsLede: '在萬錦360發表內容的個人與社區組織。',
    videoTitle: '解說短片 - 萬錦360',
    videoH1: '解說短片',
    videoLede: '以短片為主的市政解說，協助居民掌握議題。',
    footerCopyright: `萬錦市區域議員${COUNCILLOR.nameZh}。`,
  },
  'zh-CN': {
    homeTitle: '万锦360 - 区域议员何胡景的每周电子通讯',
    homeShareDescription:
      '约克区区域议员何胡景的每周电子通讯。为万锦居民报道市府与约克区事务。',
    homeDescription: '万锦360是报道万锦事务的本地社区报纸：每周通讯、社区活动，以及服务本区的作者与社区组织。',
    aboutTitle: '关于 - 区域议员何胡景',
    aboutH1: '关于何胡景',
    aboutIntro: `${COUNCILLOR.nameZh}（${COUNCILLOR.nameEn}）是万锦市区域议员，服务社区逾十六年。他已连续发表 ${CONTINUITY.editions} 期《万锦360》每周通讯，以多语向居民通报市府与约克区事务。`,
    aboutRolesH2: '议会职务',
    aboutRoles: [
      '主席，文化及经济发展委员会（万锦市）',
      '主席，万锦小组委员会（万锦市）',
      '董事，Housing York Inc. 董事会（约克区）',
      '成员，审计委员会（约克区）',
      '成员，无障碍咨询委员会（约克区）',
    ],
    aboutNote: '肖像须用真实照片，不可使用 AI 生成人像。',
    contactTitle: '联系 - 区域议员何胡景',
    contactH1: '联系我的办公室',
    contactSubscribeH2: '订阅万锦360',
    contactSubscribeP: '通讯恢复后即可收取每周社区更新。（请在此接上订阅表单端点。）',
    archiveTitle: '万锦360 - 系列',
    archiveLede: '每周通讯与解说短片，报道万锦市与约克区事务。自 2022 年起为同一连续系列。',
    communityTitle: '社区 - 万锦360',
    communityLede: '社区新闻与本地活动：基建、服务、募捐、论坛及合作伙伴聚会。',
    newsTitle: '社区新闻 - 万锦360',
    newsLede: '关于万锦市与约克区的独立社区新闻：基建、服务及影响居民的本地发展。',
    authorsTitle: '作者与社区 - 万锦360',
    authorsLede: '在万锦360发表内容的个人与社区组织。',
    videoTitle: '解说短片 - 万锦360',
    videoH1: '解说短片',
    videoLede: '以短片为主的市政解说，协助居民掌握议题。',
    footerCopyright: `万锦市区域议员${COUNCILLOR.nameZh}。`,
  },
};

export function councillorRole(locale: Locale): string {
  if (locale === 'fr') return COUNCILLOR.roleFr;
  if (locale === 'zh-HK') return COUNCILLOR.roleZhHK;
  if (locale === 'zh-CN') return COUNCILLOR.roleZhCN;
  return COUNCILLOR.role;
}

export function councillorOffice(locale: Locale): string {
  if (locale === 'fr') return COUNCILLOR.officeFr;
  if (locale === 'zh-HK') return COUNCILLOR.officeZhHK;
  if (locale === 'zh-CN') return COUNCILLOR.officeZhCN;
  return COUNCILLOR.office;
}
