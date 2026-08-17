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
  { eyebrow: string; headline: string; subhead: string; cta: string; smart: string; dismiss: string }
> = {
  en: {
    eyebrow: '2026 municipal election',
    headline: 'Re-elect Alan Ho for Markham Regional Councillor',
    subhead: 'A SMART Markham for the next generation.',
    cta: 'Visit the campaign',
    smart: 'S.M.A.R.T. platform',
    dismiss: 'Dismiss',
  },
  fr: {
    eyebrow: 'Élections municipales de 2026',
    headline: 'Réélire Alan Ho comme conseiller régional de Markham',
    subhead: 'Un Markham SMART pour la prochaine génération.',
    cta: 'Visiter le site de campagne',
    smart: 'Plateforme S.M.A.R.T.',
    dismiss: 'Fermer',
  },
  'zh-HK': {
    eyebrow: '2026 年市政選舉',
    headline: '再選何胡景出任萬錦市區域議員',
    subhead: '為下一代建設智慧（SMART）萬錦。',
    cta: '前往競選網站',
    smart: 'S.M.A.R.T. 政綱',
    dismiss: '關閉',
  },
  'zh-CN': {
    eyebrow: '2026 年市政选举',
    headline: '再选何胡景出任万锦市区域议员',
    subhead: '为下一代建设智慧（SMART）万锦。',
    cta: '前往竞选网站',
    smart: 'S.M.A.R.T. 政纲',
    dismiss: '关闭',
  },
};

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
    paused:
      'Weekly editions are paused during the municipal election period. The archive remains available.',
    alsoFiling: 'Also filing',
    latestEditions: 'Latest editions',
    allEvents: 'All events',
    explainers: 'Explainers',
    allExplainers: 'All explainers',
    smartPlatform: 'S.M.A.R.T. platform',
    smartLede: 'Five commitments, each backed by a public record.',
    editionsLede: `${CONTINUITY.editions} consecutive weekly Markham 360 editions since ${CONTINUITY.since}. The 2026 run is indexed here as the newspaper of record.`,
    explainersLede:
      'Articles where the video is the main content: short municipal explainers for residents.',
    weeks: 'weeks',
    backCommunity: 'In the community',
    backExplainers: 'All explainers',
    backPillars: 'All S.M.A.R.T. pillars',
    theRecord: 'The record',
    whatNext: 'What comes next',
    explainer: 'Explainer',
    communityLabel: 'Community',
  },
  fr: {
    subscribe: "S'abonner à Markham 360",
    contact: 'Communiquer avec mon bureau',
    latest: 'Dernière édition',
    archive: 'Toutes les éditions',
    record: 'Le bilan',
    community: 'Dans la communauté',
    video: 'Vidéo',
    about: 'À propos',
    paused:
      'Les éditions hebdomadaires sont suspendues pendant la période électorale municipale. Les archives demeurent accessibles.',
    alsoFiling: 'À lire aussi',
    latestEditions: 'Dernières éditions',
    allEvents: 'Tous les événements',
    explainers: 'Vidéos explicatives',
    allExplainers: 'Toutes les explications',
    smartPlatform: 'Plateforme S.M.A.R.T.',
    smartLede: 'Cinq engagements, chacun appuyé par un bilan public.',
    editionsLede: `${CONTINUITY.editions} éditions hebdomadaires consécutives de Markham 360 depuis ${CONTINUITY.since}. La série de 2026 est conservée ici comme journal de référence.`,
    explainersLede:
      'Des articles où la vidéo est le contenu principal : de courtes explications municipales pour les résidents.',
    weeks: 'semaines',
    backCommunity: 'Dans la communauté',
    backExplainers: 'Toutes les explications',
    backPillars: 'Tous les piliers S.M.A.R.T.',
    theRecord: 'Le bilan',
    whatNext: 'La prochaine étape',
    explainer: 'Explication',
    communityLabel: 'Communauté',
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
    alsoFiling: '同期報道',
    latestEditions: '最新期數',
    allEvents: '所有活動',
    explainers: '解說短片',
    allExplainers: '所有解說',
    smartPlatform: 'S.M.A.R.T. 政綱',
    smartLede: '五項承諾，各有公開工作記錄佐證。',
    editionsLede: `自 ${CONTINUITY.since} 年起連續 ${CONTINUITY.editions} 期《萬錦360》。2026 年各期在此作為公開紀錄存檔。`,
    explainersLede: '以短片為主的市政解說文章，方便居民快速了解議題。',
    weeks: '週',
    backCommunity: '社區活動',
    backExplainers: '所有解說',
    backPillars: '全部 S.M.A.R.T. 政綱',
    theRecord: '工作記錄',
    whatNext: '下一步',
    explainer: '解說',
    communityLabel: '社區',
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
    alsoFiling: '同期报道',
    latestEditions: '最新期数',
    allEvents: '所有活动',
    explainers: '解说短片',
    allExplainers: '所有解说',
    smartPlatform: 'S.M.A.R.T. 政纲',
    smartLede: '五项承诺，各有公开工作记录佐证。',
    editionsLede: `自 ${CONTINUITY.since} 年起连续 ${CONTINUITY.editions} 期《万锦360》。2026 年各期在此作为公开记录存档。`,
    explainersLede: '以短片为主的市政解说文章，方便居民快速了解议题。',
    weeks: '周',
    backCommunity: '社区活动',
    backExplainers: '所有解说',
    backPillars: '全部 S.M.A.R.T. 政纲',
    theRecord: '工作记录',
    whatNext: '下一步',
    explainer: '解说',
    communityLabel: '社区',
  },
};

export const HOME_MEANINGS: Record<Locale, Record<string, string>> = {
  en: {
    'safe-community': 'Safer streets and watchful neighbourhoods.',
    'moving-people-forward': 'Roads that move and transit that reaches you.',
    'accountable-leadership': 'Weekly updates, without fail.',
    'resilient-infrastructure': 'Neighbourhoods built to last.',
    'tax-dollars-that-work': 'Careful with money, clear about results.',
  },
  fr: {
    'safe-community': 'Des rues plus sûres et des quartiers vigilants.',
    'moving-people-forward': 'Des routes fluides et un transport collectif accessible.',
    'accountable-leadership': 'Des nouvelles chaque semaine, sans interruption.',
    'resilient-infrastructure': 'Des quartiers construits pour durer.',
    'tax-dollars-that-work': 'Une gestion prudente et des résultats clairs.',
  },
  'zh-HK': {
    'safe-community': '更安全的街道與守望相助的鄰里。',
    'moving-people-forward': '暢通道路與覆蓋到位的公共交通。',
    'accountable-leadership': '每週更新，從不間斷。',
    'resilient-infrastructure': '經得起時間考驗的社區建設。',
    'tax-dollars-that-work': '善用公帑，成果公開。',
  },
  'zh-CN': {
    'safe-community': '更安全的街道与守望相助的邻里。',
    'moving-people-forward': '畅通道路与覆盖到位的公共交通。',
    'accountable-leadership': '每周更新，从不间断。',
    'resilient-infrastructure': '经得起时间考验的社区建设。',
    'tax-dollars-that-work': '善用公帑，成果公开。',
  },
};

export const PAGE_COPY: Record<
  Locale,
  {
    homeTitle: string;
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
    recordTitle: string;
    recordEyebrow: string;
    recordH1: string;
    recordLede: string;
    videoTitle: string;
    videoH1: string;
    videoLede: string;
    footerCopyright: string;
  }
> = {
  en: {
    homeTitle: 'Markham 360 - Regional Councillor Alan Ho',
    homeDescription:
      'Markham 360: weekly community updates and the record of Regional Councillor Alan Ho, City of Markham.',
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
    archiveTitle: 'Markham 360 - All editions',
    archiveLede:
      'Weekly community updates on the City of Markham and York Region. Every edition, since 2022.',
    communityTitle: 'In the Community - Alan Ho',
    communityLede:
      'Food drives, charity concerts, community picnics, safety forums, and more.',
    recordTitle: 'The Record - S.M.A.R.T. - Alan Ho',
    recordEyebrow: 'The record',
    recordH1: 'A SMART Markham for the next generation',
    recordLede:
      'Five commitments, each backed by a record of work and a promise for what comes next.',
    videoTitle: 'Explainers - Markham 360',
    videoH1: 'Explainers',
    videoLede:
      'Short articles where the video is the main content: municipal issues explained for residents.',
    footerCopyright: `Regional Councillor ${COUNCILLOR.nameEn}, City of Markham.`,
  },
  fr: {
    homeTitle: 'Markham 360 - Conseiller régional Alan Ho',
    homeDescription:
      'Markham 360 : les nouvelles communautaires hebdomadaires et le bilan du conseiller régional Alan Ho, Ville de Markham.',
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
    archiveTitle: 'Markham 360 - Toutes les éditions',
    archiveLede:
      'Nouvelles communautaires hebdomadaires sur la Ville de Markham et la région de York. Toutes les éditions depuis 2022.',
    communityTitle: 'Dans la communauté - Alan Ho',
    communityLede:
      'Collectes de denrées, concerts-bénéfice, pique-niques communautaires, forums sur la sécurité et plus encore.',
    recordTitle: 'Le bilan - S.M.A.R.T. - Alan Ho',
    recordEyebrow: 'Le bilan',
    recordH1: 'Un Markham SMART pour la prochaine génération',
    recordLede:
      'Cinq engagements, chacun appuyé par un bilan de travail et une promesse pour la suite.',
    videoTitle: 'Vidéos explicatives - Markham 360',
    videoH1: 'Vidéos explicatives',
    videoLede:
      'De courts articles où la vidéo explique les enjeux municipaux aux résidents.',
    footerCopyright: `Conseiller régional ${COUNCILLOR.nameEn}, Ville de Markham.`,
  },
  'zh-HK': {
    homeTitle: '萬錦360 - 區域議員何胡景',
    homeDescription: '萬錦360：區域議員何胡景的每週社區通訊與工作記錄。',
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
    archiveTitle: '萬錦360 - 所有期數',
    archiveLede: '關於萬錦市與約克區的每週社區通訊。自 2022 年起每期可查。',
    communityTitle: '社區活動 - 何胡景',
    communityLede: '食物募捐、慈善音樂會、社區野餐、安全論壇等。',
    recordTitle: '工作記錄 - S.M.A.R.T. - 何胡景',
    recordEyebrow: '工作記錄',
    recordH1: '為下一代建設智慧（SMART）萬錦',
    recordLede: '五項承諾，各有工作記錄與前瞻承諾。',
    videoTitle: '解說短片 - 萬錦360',
    videoH1: '解說短片',
    videoLede: '以短片為主的市政解說，協助居民掌握議題。',
    footerCopyright: `萬錦市區域議員${COUNCILLOR.nameZh}。`,
  },
  'zh-CN': {
    homeTitle: '万锦360 - 区域议员何胡景',
    homeDescription: '万锦360：区域议员何胡景的每周社区通讯与工作记录。',
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
    archiveTitle: '万锦360 - 所有期数',
    archiveLede: '关于万锦市与约克区的每周社区通讯。自 2022 年起每期可查。',
    communityTitle: '社区活动 - 何胡景',
    communityLede: '食物募捐、慈善音乐会、社区野餐、安全论坛等。',
    recordTitle: '工作记录 - S.M.A.R.T. - 何胡景',
    recordEyebrow: '工作记录',
    recordH1: '为下一代建设智慧（SMART）万锦',
    recordLede: '五项承诺，各有工作记录与前瞻承诺。',
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
