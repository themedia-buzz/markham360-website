import { CONTINUITY } from './constants';
import type { Locale } from './i18n';

export type PillarContent = {
  slug: string;
  meaning: string;
  record: string[];
  promise: string;
  body: string[];
};

/**
 * S.M.A.R.T. pillar pages: plain meaning, dated public-record proof,
 * and a forward promise. Informational tone only.
 */
export const PILLAR_CONTENT_EN: Record<string, PillarContent> = {
  'safe-community': {
    slug: 'safe-community',
    meaning:
      'Safer streets: better lighting, active policing partnerships, and watchful neighbourhoods where residents know how to report concerns and look out for one another.',
    record: [
      'Crime Prevention Forum and Seminar (December 2023) with York Regional Police, sharing prevention tips, reporting guidance, and an update on the police camera pilot.',
      'Ongoing partnership with York Regional Police to deter speeding, including “slow down” signs available from the councillor’s office on request.',
      'Home Security Day and related community safety outreach to help residents harden homes and stay alert to scams.',
    ],
    promise:
      'Expand neighbourhood safety work and senior-focused scam prevention so residents have clearer tools, stronger partnerships, and visible follow-through.',
    body: [
      'Safe Community means everyday security you can feel on your street: lighting that works, traffic that slows where people walk, and a clear line to the people who can help when something is wrong.',
      'Markham’s safety story is not a slogan. It is a record of forums, partnerships, and practical tools. In December 2023, the Crime Prevention Forum and Seminar brought residents together with York Regional Police to talk through prevention, reporting, and the camera pilot in plain language. That kind of room matters: officers, councillors, and neighbours in the same conversation.',
      'Speeding remains a stubborn problem. The councillor’s office continues to work with York Regional Police to deter dangerous driving and offers “slow down” signs to households that ask for them. Small interventions stack up when they are consistent and easy to request.',
      'Looking ahead, the work expands toward neighbourhood-scale safety and senior-focused scam prevention. The goal is simple: residents should know what to watch for, who to call, and that their concerns land somewhere that listens.',
    ],
  },
  'moving-people-forward': {
    slug: 'moving-people-forward',
    meaning:
      'Roads that move and transit that reaches you: clearer construction communication, safer intersections, and input into regional transit planning.',
    record: [
      'Regular road-construction transparency in Markham 360 so residents can plan around closures, paving, and seasonal maintenance.',
      'Advocacy on No-Right-Turn-on-Red and related intersection safety questions where local conditions demand careful judgement.',
      'Input into York Region Transit planning consultations, including service-planning feedback channels open to residents.',
    ],
    promise:
      'Better transit connections and reliable winter road maintenance, with continued public reporting on what is changing and why.',
    body: [
      'Moving People Forward is about getting where you need to go without guessing. Construction should be explained before it snarls a commute. Transit should reach the places people actually live and work. Winter roads should be predictable enough to plan a day around.',
      'Through Markham 360, road projects and closures are treated as news residents deserve early: paving windows, lane reductions, and regional corridor work appear in the weekly digest so people can adjust. Transparency is not a press release after the fact; it is a habit of telling you what is coming.',
      'Intersection rules are another pressure point. Advocacy on No-Right-Turn-on-Red and related safety questions reflects a simple test: does the rule fit the street in front of us, and have we heard from the people who walk and drive it?',
      'On transit, the record includes engagement with York Region Transit planning processes so Markham voices are in the room when routes and frequencies are set. The forward promise is clearer connections and winter maintenance residents can rely on, reported in the open.',
    ],
  },
  'accountable-leadership': {
    slug: 'accountable-leadership',
    meaning:
      'You are never left in the dark: weekly updates, without fail, in the languages residents use, with room for feedback that reaches council.',
    record: [
      `${CONTINUITY.editions} consecutive weekly Markham 360 editions from ${CONTINUITY.since} through May 2026, covering City of Markham and York Region affairs.`,
      'Snow Windrow Survey 2026: 1,827 responses collected and brought to council for review.',
      'Multilingual community communication as a standing practice, not a one-off translation.',
    ],
    promise:
      'Resume weekly reporting after the election-period pause, with open, ongoing communication in every language the community needs.',
    body: [
      'Accountable Leadership means you should not have to hunt for decisions that shape your week. The publication of record for that promise is Markham 360: a weekly civic update that ran for three and a half years without missing a week.',
      `${CONTINUITY.editions} consecutive editions is not a marketing line. It is a countable run from ${CONTINUITY.since} through the pause required by municipal election rules in May 2026. Each issue pulled City and Region news into one place and foregrounded the councillor’s own work on the items that mattered that week.`,
      'Accountability also means listening with a method. The 2026 Snow Windrow Survey gathered 1,827 responses and carried those findings into council. That is the pattern: ask clearly, count carefully, report what you heard.',
      'Weekly editions are paused during the election period, as the law requires. The archive remains open. The promise afterward is the same discipline: resume the weekly report and keep communication open in every language residents use.',
    ],
  },
  'resilient-infrastructure': {
    slug: 'resilient-infrastructure',
    meaning:
      'Neighbourhoods built to last and ready for tomorrow: winter assistance that works, stormwater projects that respect local land, and greener streets.',
    record: [
      'Snow-windrow assistance program advocacy and the 2026 resident survey that tested whether the approach still fits community need.',
      'Support for low-impact development and stormwater pilots, including regional projects covered in Markham 360.',
      'Community tree planting and related local climate-readiness efforts that put shade and canopy on the street, not only on a plan.',
    ],
    promise:
      'Clean local power and climate-ready streets, with continued attention to winter operations and water that stays where it belongs.',
    body: [
      'Resilient Infrastructure is the unglamorous work that decides whether a storm or a snow day becomes a crisis. It is windrows cleared for people who cannot dig out, stormwater managed before it floods a basement, and trees planted where heat and pavement meet.',
      'Snow assistance is a standing file. The snow-windrow program and the 2026 survey (1,827 responses) asked residents whether the help still matches the need, then carried that evidence toward council review. Infrastructure policy should start with what people experience at the curb.',
      'Water and climate resilience show up in low-impact development pilots and related regional projects reported through the weekly update. The point is practical: hold water on site where we can, reduce runoff, and treat green infrastructure as part of the street, not a separate brochure.',
      'The forward promise is climate-ready streets and cleaner local power choices, with winter operations and stormwater kept visible in the public record so residents can see progress and gaps alike.',
    ],
  },
  'tax-dollars-that-work': {
    slug: 'tax-dollars-that-work',
    meaning:
      'Careful with your money, clear about the results: restraint where it counts, and reporting that shows what was spent and what it delivered.',
    record: [
      'Markham’s public record on tax restraint and measured budgeting at the local level.',
      'Service as a member of the York Region Audit Committee, bringing scrutiny to regional spending and controls.',
      'Habitual public reporting through Markham 360 so program outcomes and municipal notices are not buried in unread attachments.',
    ],
    promise:
      'Transparent budgeting and visible, reported outcomes so residents can see how dollars translate into services.',
    body: [
      'Tax Dollars That Work is a discipline: ask what a dollar buys, for whom, and how we will know. Residents fund services; they deserve a clear line from the levy to the result on the ground.',
      'Markham’s reputation for tax restraint is part of the civic context this office works in. The point is not austerity for its own sake. It is spending that can be explained in plain language and defended with outcomes.',
      'At the regional table, membership on the York Region Audit Committee puts scrutiny on controls, risk, and whether reported figures match reality. Oversight is quieter than a ribbon cutting, and it is how tax dollars stay honest.',
      'The weekly update is part of the accountability loop: when programs launch or budgets shift, they appear in a digest residents can actually read. The promise ahead is the same standard: transparent budgeting and outcomes reported where people can find them.',
    ],
  },
};

const PILLAR_CONTENT_ZH_HK: Record<string, PillarContent> = {
  'safe-community': {
    slug: 'safe-community',
    meaning:
      '建設更安全的街道：改善照明、積極與警方合作，並建立守望相助的社區，讓居民懂得如何舉報問題和互相照應。',
    record: [
      '2023 年 12 月與約克區警察合辦防罪論壇及講座，分享防罪貼士、舉報指引，以及警方攝影機試驗計劃的最新消息。',
      '持續與約克區警察合作遏止超速；居民可按需要向何胡景議員辦公室索取「減速慢駛」標誌。',
      '舉辦家居保安日及相關社區安全推廣，協助居民加強家居防護並提防詐騙。',
    ],
    promise:
      '擴展鄰里安全工作和以長者為重點的防騙教育，讓居民有更清晰的工具、更穩固的合作網絡，以及看得見的跟進。',
    body: [
      '安全社區，是指你在日常街道上能切實感受到的安全：照明運作正常、車輛在人們步行的地方減速，而且一旦有問題，居民清楚知道可向誰求助。',
      '萬錦的安全工作不是一句口號，而是由論壇、合作關係和實用工具構成的記錄。2023 年 12 月，防罪論壇及講座讓居民與約克區警察聚首一堂，以淺白語言討論防罪、舉報和攝影機試驗計劃。讓警員、議員與鄰里參與同一場對話，十分重要。',
      '超速問題仍然棘手。何胡景議員辦公室繼續與約克區警察合作，遏止危險駕駛，並向提出需要的住戶提供「減速慢駛」標誌。當小型措施持續推行而且容易申請，累積起來便能發揮作用。',
      '展望未來，工作將擴展至鄰里層面的安全措施，以及以長者為重點的防騙工作。目標很簡單：居民應知道要留意甚麼、應致電誰，並確信有人會聆聽和處理他們的關注。',
    ],
  },
  'moving-people-forward': {
    slug: 'moving-people-forward',
    meaning:
      '讓道路暢通、公共交通連接居民：更清晰地交代工程、更安全的路口，並參與區域公共交通規劃。',
    record: [
      '定期透過《萬錦360》公開道路工程資訊，讓居民可因應封路、鋪路和季節性維修預先安排行程。',
      '在本地情況需要審慎判斷時，就紅燈時禁止右轉及相關路口安全議題倡議。',
      '參與約克區公共交通規劃諮詢，包括向居民開放的服務規劃意見渠道。',
    ],
    promise:
      '改善公共交通連接，提供可靠的冬季道路維護，並繼續公開交代有哪些改變及其原因。',
    body: [
      '讓出行更順暢，就是讓你無需猜測也能到達目的地。工程應在令通勤受阻前說明；公共交通應到達人們實際居住和工作的地方；冬季道路狀況亦應足夠可靠，讓居民可據此安排一天。',
      '透過《萬錦360》，道路項目和封路安排被視為居民應及早得知的消息。鋪路時段、行車線縮減和區域走廊工程都會刊載於每週摘要，讓居民作出調整。透明度不是事後才發出的新聞稿，而是養成習慣，預先告訴居民即將發生甚麼。',
      '路口規則是另一個焦點。就紅燈時禁止右轉及相關安全問題所作的倡議，依循一個簡單準則：規則是否切合眼前這條街道，我們又是否聽取了在此步行和駕駛的人士意見？',
      '在公共交通方面，工作記錄包括參與約克區公共交通的規劃程序，確保規劃路線和班次時有萬錦居民的聲音。未來承諾是提供更清晰的連接和居民可依賴的冬季道路維護，並公開報告進展。',
    ],
  },
  'accountable-leadership': {
    slug: 'accountable-leadership',
    meaning:
      '讓你不會蒙在鼓裏：每週從不間斷地以居民使用的語言提供最新資訊，並讓意見有渠道傳達至議會。',
    record: [
      `從 ${CONTINUITY.since} 年至 2026 年 5 月，連續出版 ${CONTINUITY.editions} 期《萬錦360》每週通訊，報道萬錦市和約克區事務。`,
      '2026 年門前雪堆調查：收集 1,827 份回覆，並提交議會審議。',
      '持續以多種語言與社區溝通，而非只作一次性的翻譯。',
    ],
    promise:
      '選舉期暫停後恢復每週報告，並以社區需要的各種語言保持公開而持續的溝通。',
    body: [
      '問責領導，是指你不應費力尋找影響每週生活的決定。實踐這項承諾的公開記錄就是《萬錦360》：這份每週市政通訊連續出版了三年半，從未缺席一週。',
      `連續 ${CONTINUITY.editions} 期不是宣傳口號，而是由 ${CONTINUITY.since} 年開始，直至 2026 年 5 月按市政選舉規則必須暫停為止，可以逐期點算的記錄。每一期都把市和區域消息匯集一處，並重點報道何胡景議員當週在重要事項上的工作。`,
      '問責亦意味着有方法地聆聽。2026 年門前雪堆調查收集了 1,827 份回覆，並把調查結果帶到議會。做法一貫如此：清楚提問、仔細點算、如實報告所聽到的意見。',
      '按照法例規定，每週通訊在選舉期間暫停，過往檔案仍然開放。選舉期後的承諾秉持同一份紀律：恢復每週報告，並以居民使用的各種語言保持溝通暢通。',
    ],
  },
  'resilient-infrastructure': {
    slug: 'resilient-infrastructure',
    meaning:
      '建設持久並為明天做好準備的社區：有效的冬季支援、尊重本地土地環境的雨水項目，以及更綠化的街道。',
    record: [
      '倡議門前雪堆支援計劃，並在 2026 年進行居民調查，檢視現行方式是否仍切合社區需要。',
      '支持低影響開發和雨水管理試驗計劃，包括《萬錦360》報道的區域項目。',
      '推動社區植樹及相關的本地氣候應變工作，把樹蔭和樹冠真正帶到街道，而不只停留在規劃圖上。',
    ],
    promise:
      '推動潔淨本地能源和能應對氣候變化的街道，同時繼續關注冬季作業，並妥善管理雨水。',
    body: [
      '韌性基礎設施，是那些不顯眼、卻決定一場暴風雨或一個下雪天會否演變成危機的工作。這包括為無法自行鏟雪的人清理門前雪堆、在雨水淹進地庫前妥善管理，以及在高溫與路面交界處種植樹木。',
      '雪務支援是一項持續工作。門前雪堆計劃和 2026 年調查共收到 1,827 份回覆，向居民了解支援是否仍切合需要，再把這些證據提交議會審議。基礎設施政策應由居民在路邊的實際體驗出發。',
      '低影響開發試驗和每週通訊報道的相關區域項目，體現了水務和氣候韌性。重點很實際：在可行時讓雨水留在原地、減少地面徑流，並把綠色基礎設施視為街道的一部分，而不是另一本宣傳冊。',
      '未來承諾是建設能應對氣候變化的街道，並提供更潔淨的本地能源選擇。冬季作業和雨水管理會繼續列入公開記錄，讓居民看見進展，也看見仍有不足之處。',
    ],
  },
  'tax-dollars-that-work': {
    slug: 'tax-dollars-that-work',
    meaning:
      '審慎運用你的金錢，清楚交代成果：在關鍵之處保持克制，並透過報告說明款項如何使用和帶來甚麼成果。',
    record: [
      '萬錦在地方層面節制稅務和審慎編製預算的公開記錄。',
      '擔任約克區審計委員會成員，審視區域開支和監控制度。',
      '恆常透過《萬錦360》公開報告，避免計劃成果和市政通知埋沒在無人閱讀的附件中。',
    ],
    promise:
      '推行透明預算，公開並報告可見成果，讓居民了解每一分公帑如何轉化為服務。',
    body: [
      '善用公帑是一項紀律：要問每一元買到甚麼、為誰而用，以及我們如何得知成效。居民出資支持服務，理應清楚看見由徵稅到實際成果之間的連繫。',
      '萬錦在稅務克制方面的聲譽，是何胡景議員辦公室所處的市政背景之一。重點不是為節省而緊縮，而是每項開支都能以淺白語言解釋，並以成果作為理據。',
      '在區域議會層面，擔任約克區審計委員會成員，意味着要審視監控、風險，以及報告數字是否符合實況。監督工作不像剪綵般矚目，卻是確保公帑運用誠實可靠的方法。',
      '每週通訊是問責循環的一部分。當計劃推出或預算改變，相關資料會刊載於居民真正能閱讀的摘要中。未來承諾秉持同一標準：預算透明，並在居民容易找到的地方報告成果。',
    ],
  },
};

const PILLAR_CONTENT_ZH_CN: Record<string, PillarContent> = {
  'safe-community': {
    slug: 'safe-community',
    meaning:
      '建设更安全的街道：改善照明、积极与警方合作，并建立守望相助的社区，让居民懂得如何举报问题和互相照应。',
    record: [
      '2023 年 12 月与约克区警察合办防罪论坛及讲座，分享防罪提示、举报指引，以及警方摄像头试点计划的最新消息。',
      '持续与约克区警察合作遏制超速；居民可按需要向何胡景议员办公室索取“减速慢行”标志。',
      '举办家居安保日及相关社区安全宣传，协助居民加强家居防护并提防诈骗。',
    ],
    promise:
      '扩展邻里安全工作和以长者为重点的防骗教育，让居民有更清晰的工具、更稳固的合作网络，以及看得见的跟进。',
    body: [
      '安全社区，是指你在日常街道上能切实感受到的安全：照明运作正常、车辆在人们步行的地方减速，而且一旦有问题，居民清楚知道可向谁求助。',
      '万锦的安全工作不是一句口号，而是由论坛、合作关系和实用工具构成的记录。2023 年 12 月，防罪论坛及讲座让居民与约克区警察齐聚一堂，以浅白语言讨论防罪、举报和摄像头试点计划。让警员、议员与邻里参与同一场对话，十分重要。',
      '超速问题仍然棘手。何胡景议员办公室继续与约克区警察合作，遏制危险驾驶，并向提出需要的住户提供“减速慢行”标志。当小型措施持续推行而且容易申请，累积起来便能发挥作用。',
      '展望未来，工作将扩展至邻里层面的安全措施，以及以长者为重点的防骗工作。目标很简单：居民应知道要留意什么、应致电谁，并确信有人会聆听和处理他们的关注。',
    ],
  },
  'moving-people-forward': {
    slug: 'moving-people-forward',
    meaning:
      '让道路畅通、公共交通连接居民：更清晰地交代工程、更安全的路口，并参与区域公共交通规划。',
    record: [
      '定期通过《万锦360》公开道路工程信息，让居民可根据封路、铺路和季节性维修预先安排行程。',
      '在本地情况需要审慎判断时，就红灯时禁止右转及相关路口安全议题倡议。',
      '参与约克区公共交通规划咨询，包括向居民开放的服务规划意见渠道。',
    ],
    promise:
      '改善公共交通连接，提供可靠的冬季道路维护，并继续公开交代有哪些改变及其原因。',
    body: [
      '让出行更顺畅，就是让你无需猜测也能到达目的地。工程应在令通勤受阻前说明；公共交通应到达人们实际居住和工作的地方；冬季道路状况也应足够可靠，让居民可据此安排一天。',
      '通过《万锦360》，道路项目和封路安排被视为居民应及早得知的消息。铺路时段、车道缩减和区域走廊工程都会刊载于每周摘要，让居民作出调整。透明度不是事后才发布的新闻稿，而是养成习惯，预先告诉居民即将发生什么。',
      '路口规则是另一个焦点。就红灯时禁止右转及相关安全问题所作的倡议，依循一个简单准则：规则是否切合眼前这条街道，我们又是否听取了在此步行和驾驶的人士意见？',
      '在公共交通方面，工作记录包括参与约克区公共交通的规划程序，确保规划路线和班次时有万锦居民的声音。未来承诺是提供更清晰的连接和居民可依赖的冬季道路维护，并公开报告进展。',
    ],
  },
  'accountable-leadership': {
    slug: 'accountable-leadership',
    meaning:
      '让你不会蒙在鼓里：每周从不间断地以居民使用的语言提供最新信息，并让意见有渠道传达至议会。',
    record: [
      `从 ${CONTINUITY.since} 年至 2026 年 5 月，连续出版 ${CONTINUITY.editions} 期《万锦360》每周通讯，报道万锦市和约克区事务。`,
      '2026 年门前雪堆调查：收集 1,827 份回复，并提交议会审议。',
      '持续以多种语言与社区沟通，而非只作一次性的翻译。',
    ],
    promise:
      '选举期暂停后恢复每周报告，并以社区需要的各种语言保持公开而持续的沟通。',
    body: [
      '问责领导，是指你不应费力寻找影响每周生活的决定。实践这项承诺的公开记录就是《万锦360》：这份每周市政通讯连续出版了三年半，从未缺席一周。',
      `连续 ${CONTINUITY.editions} 期不是宣传口号，而是由 ${CONTINUITY.since} 年开始，直至 2026 年 5 月按市政选举规则必须暂停为止，可以逐期点算的记录。每一期都把市和区域消息汇集一处，并重点报道何胡景议员当周在重要事项上的工作。`,
      '问责也意味着有方法地聆听。2026 年门前雪堆调查收集了 1,827 份回复，并把调查结果带到议会。做法一贯如此：清楚提问、仔细点算、如实报告所听到的意见。',
      '按照法律规定，每周通讯在选举期间暂停，过往档案仍然开放。选举期后的承诺秉持同一份纪律：恢复每周报告，并以居民使用的各种语言保持沟通畅通。',
    ],
  },
  'resilient-infrastructure': {
    slug: 'resilient-infrastructure',
    meaning:
      '建设持久并为明天做好准备的社区：有效的冬季支援、尊重本地土地环境的雨水项目，以及更绿化的街道。',
    record: [
      '倡议门前雪堆支援计划，并在 2026 年进行居民调查，检视现行方式是否仍切合社区需要。',
      '支持低影响开发和雨水管理试点计划，包括《万锦360》报道的区域项目。',
      '推动社区植树及相关的本地气候应变工作，把树荫和树冠真正带到街道，而不只停留在规划图上。',
    ],
    promise:
      '推动清洁本地能源和能应对气候变化的街道，同时继续关注冬季作业，并妥善管理雨水。',
    body: [
      '韧性基础设施，是那些不显眼、却决定一场暴风雨或一个下雪天会否演变成危机的工作。这包括为无法自行铲雪的人清理门前雪堆、在雨水淹进地下室前妥善管理，以及在高温与路面交界处种植树木。',
      '雪务支援是一项持续工作。门前雪堆计划和 2026 年调查共收到 1,827 份回复，向居民了解支援是否仍切合需要，再把这些证据提交议会审议。基础设施政策应由居民在路边的实际体验出发。',
      '低影响开发试点和每周通讯报道的相关区域项目，体现了水务和气候韧性。重点很实际：在可行时让雨水留在原地、减少地面径流，并把绿色基础设施视为街道的一部分，而不是另一本宣传册。',
      '未来承诺是建设能应对气候变化的街道，并提供更清洁的本地能源选择。冬季作业和雨水管理会继续列入公开记录，让居民看见进展，也看见仍有不足之处。',
    ],
  },
  'tax-dollars-that-work': {
    slug: 'tax-dollars-that-work',
    meaning:
      '审慎运用你的金钱，清楚交代成果：在关键之处保持克制，并通过报告说明款项如何使用和带来什么成果。',
    record: [
      '万锦在地方层面节制税务和审慎编制预算的公开记录。',
      '担任约克区审计委员会成员，审视区域开支和监控制度。',
      '持续通过《万锦360》公开报告，避免计划成果和市政通知埋没在无人阅读的附件中。',
    ],
    promise:
      '推行透明预算，公开并报告可见成果，让居民了解每一分公帑如何转化为服务。',
    body: [
      '善用公帑是一项纪律：要问每一元买到什么、为谁而用，以及我们如何得知成效。居民出资支持服务，理应清楚看见由征税到实际成果之间的联系。',
      '万锦在税务克制方面的声誉，是何胡景议员办公室所处的市政背景之一。重点不是为节省而紧缩，而是每项开支都能以浅白语言解释，并以成果作为理据。',
      '在区域议会层面，担任约克区审计委员会成员，意味着要审视监控、风险，以及报告数字是否符合实况。监督工作不像剪彩般瞩目，却是确保公帑运用诚实可靠的方法。',
      '每周通讯是问责循环的一部分。当计划推出或预算改变，相关信息会刊载于居民真正能阅读的摘要中。未来承诺秉持同一标准：预算透明，并在居民容易找到的地方报告成果。',
    ],
  },
};

const PILLAR_CONTENT_FR: Record<string, PillarContent> = {
  'safe-community': {
    slug: 'safe-community',
    meaning:
      'Des rues plus sûres grâce à un meilleur éclairage, à des partenariats policiers actifs et à des quartiers où les résidents savent signaler leurs préoccupations et veiller les uns sur les autres.',
    record: [
      'Forum sur la prévention du crime de décembre 2023 avec la Police régionale de York, portant sur la prévention, le signalement et le projet pilote de caméras.',
      'Collaboration continue avec la Police régionale de York pour décourager les excès de vitesse, avec des panneaux de ralentissement offerts sur demande.',
      'Journée de la sécurité résidentielle et activités connexes pour aider les résidents à protéger leur domicile et à reconnaître les fraudes.',
    ],
    promise:
      'Élargir le travail de sécurité de quartier et la prévention des fraudes visant les aînés afin de fournir des outils clairs, de solides partenariats et un suivi visible.',
    body: [
      'Une communauté sûre, c’est une sécurité que l’on ressent au quotidien : un éclairage qui fonctionne, des véhicules qui ralentissent près des piétons et une voie claire pour obtenir de l’aide.',
      'La sécurité à Markham repose sur un bilan concret de forums, de partenariats et d’outils pratiques. En décembre 2023, le Forum sur la prévention du crime a réuni résidents, policiers et élus pour discuter clairement de prévention, de signalement et du projet pilote de caméras.',
      'Les excès de vitesse demeurent un problème persistant. Le bureau du conseiller continue de travailler avec la Police régionale de York et offre des panneaux de ralentissement aux ménages qui en font la demande.',
      'La prochaine étape consiste à renforcer la sécurité à l’échelle des quartiers et la prévention des fraudes visant les aînés. Les résidents doivent savoir quoi surveiller, qui appeler et où leurs préoccupations seront entendues.',
    ],
  },
  'moving-people-forward': {
    slug: 'moving-people-forward',
    meaning:
      'Des routes qui circulent et un transport collectif accessible : des communications claires sur les travaux, des intersections plus sûres et une voix dans la planification régionale.',
    record: [
      'Information régulière sur les travaux routiers dans Markham 360 afin que les résidents puissent prévoir les fermetures, le pavage et l’entretien saisonnier.',
      'Interventions sur l’interdiction de tourner à droite au feu rouge et sur les questions de sécurité aux intersections.',
      'Participation aux consultations de planification du transport en commun de la région de York.',
    ],
    promise:
      'Améliorer les correspondances de transport collectif et assurer un entretien hivernal fiable, tout en expliquant publiquement les changements et leurs raisons.',
    body: [
      'Faire avancer les gens, c’est leur permettre de se déplacer sans deviner. Les travaux doivent être annoncés avant de perturber les déplacements, et le transport collectif doit rejoindre les lieux où les gens vivent et travaillent.',
      'Markham 360 traite les travaux routiers et les fermetures comme des nouvelles que les résidents méritent de recevoir tôt. Les périodes de pavage, les réductions de voies et les travaux régionaux y sont présentés pour faciliter la planification.',
      'Les règles aux intersections exigent aussi un jugement local. Pour chaque interdiction de tourner à droite au feu rouge, il faut demander si la règle convient à la rue et si les piétons et conducteurs ont été entendus.',
      'Le bilan comprend une participation aux processus de planification du transport de la région de York. La promesse est d’obtenir de meilleures correspondances et un entretien hivernal sur lequel les résidents peuvent compter.',
    ],
  },
  'accountable-leadership': {
    slug: 'accountable-leadership',
    meaning:
      'Ne jamais laisser les résidents dans le noir : des nouvelles hebdomadaires dans les langues utilisées par la communauté et des moyens de transmettre les commentaires au conseil.',
    record: [
      `${CONTINUITY.editions} éditions hebdomadaires consécutives de Markham 360 depuis ${CONTINUITY.since}, couvrant les affaires de la Ville de Markham et de la région de York.`,
      'Sondage 2026 sur les andains de neige : 1 827 réponses recueillies et présentées au conseil.',
      'Communication communautaire multilingue comme pratique régulière.',
    ],
    promise:
      'Reprendre les comptes rendus hebdomadaires après la pause électorale et maintenir une communication ouverte dans les langues dont la communauté a besoin.',
    body: [
      'Un leadership responsable signifie que les résidents ne devraient pas avoir à chercher les décisions qui façonnent leur semaine. Markham 360 constitue le registre public de cet engagement.',
      `${CONTINUITY.editions} éditions consécutives forment un bilan vérifiable depuis ${CONTINUITY.since} jusqu’à la pause imposée par les règles électorales en mai 2026. Chaque numéro rassemblait les nouvelles municipales et régionales en un seul endroit.`,
      'La responsabilité exige aussi une méthode d’écoute. Le sondage 2026 sur les andains de neige a recueilli 1 827 réponses et transmis les résultats au conseil : poser une question claire, compter soigneusement et rendre compte de ce qui a été entendu.',
      'Les éditions hebdomadaires sont suspendues pendant la période électorale, mais les archives demeurent ouvertes. La promesse est de reprendre le même rythme et de garder les communications accessibles.',
    ],
  },
  'resilient-infrastructure': {
    slug: 'resilient-infrastructure',
    meaning:
      'Des quartiers construits pour durer : une aide hivernale efficace, une gestion responsable des eaux pluviales et des rues plus vertes.',
    record: [
      'Défense du programme d’aide au déneigement des andains et sondage de 2026 auprès des résidents.',
      'Soutien aux projets pilotes de développement à faible impact et de gestion des eaux pluviales.',
      'Plantation communautaire d’arbres et efforts locaux d’adaptation climatique.',
    ],
    promise:
      'Favoriser une énergie locale propre et des rues adaptées au climat, tout en gardant les opérations hivernales et la gestion de l’eau dans le bilan public.',
    body: [
      'Une infrastructure résiliente est le travail discret qui détermine si une tempête ou une chute de neige devient une crise. Elle comprend le déneigement pour les personnes qui ne peuvent pas pelleter, la gestion des eaux pluviales et la plantation d’arbres.',
      'L’aide hivernale demeure un dossier actif. Le programme d’andains et le sondage de 2026 ont vérifié si l’aide répond toujours aux besoins, puis ont transmis cette expérience au conseil.',
      'La résilience de l’eau et du climat apparaît dans les projets à faible impact signalés dans le bulletin hebdomadaire : retenir l’eau sur place, réduire le ruissellement et intégrer l’infrastructure verte à la rue.',
      'La promesse est de construire des rues adaptées au climat et d’offrir des choix énergétiques plus propres, avec des résultats que les résidents peuvent suivre publiquement.',
    ],
  },
  'tax-dollars-that-work': {
    slug: 'tax-dollars-that-work',
    meaning:
      'Une gestion prudente de l’argent public et des résultats clairs : de la retenue là où elle compte et des rapports qui montrent ce que les dépenses produisent.',
    record: [
      'Bilan public de Markham en matière de retenue fiscale et de budgétisation mesurée.',
      'Service au Comité de vérification de la région de York pour examiner les dépenses et les contrôles.',
      'Rapports publics réguliers dans Markham 360 afin que les résultats ne restent pas enfouis dans des annexes.',
    ],
    promise:
      'Des budgets transparents et des résultats visibles afin que les résidents puissent voir comment les fonds publics se transforment en services.',
    body: [
      'Des fonds publics efficaces exigent une discipline : demander ce qu’un dollar achète, pour qui et comment le résultat sera mesuré. Les résidents financent les services et méritent un lien clair entre la taxe et le résultat.',
      'La retenue fiscale fait partie du contexte civique de Markham. Il ne s’agit pas de réduire pour le principe, mais de pouvoir expliquer chaque dépense en langage clair et la défendre par ses résultats.',
      'Au palier régional, le travail au Comité de vérification porte sur les contrôles, les risques et l’exactitude des chiffres publiés. Cette surveillance est moins visible qu’une inauguration, mais elle protège les fonds publics.',
      'Le bulletin hebdomadaire complète la boucle de responsabilité. Lorsque des programmes sont lancés ou que les budgets changent, les résidents doivent pouvoir trouver une explication lisible et des résultats mesurables.',
    ],
  },
};

const PILLAR_CONTENT_BY_LOCALE: Record<Locale, Record<string, PillarContent>> = {
  en: PILLAR_CONTENT_EN,
  fr: PILLAR_CONTENT_FR,
  'zh-HK': PILLAR_CONTENT_ZH_HK,
  'zh-CN': PILLAR_CONTENT_ZH_CN,
};

const PILLAR_TITLES: Record<Locale, Record<string, string>> = {
  en: {
    'safe-community': 'Safe Community',
    'moving-people-forward': 'Moving People Forward',
    'accountable-leadership': 'Accountable Leadership',
    'resilient-infrastructure': 'Resilient Infrastructure',
    'tax-dollars-that-work': 'Tax Dollars That Work',
  },
  fr: {
    'safe-community': 'Communauté sûre',
    'moving-people-forward': 'Faire avancer les gens',
    'accountable-leadership': 'Leadership responsable',
    'resilient-infrastructure': 'Infrastructure résiliente',
    'tax-dollars-that-work': 'Des fonds publics efficaces',
  },
  'zh-HK': {
    'safe-community': '安全社區',
    'moving-people-forward': '讓出行更順暢',
    'accountable-leadership': '問責領導',
    'resilient-infrastructure': '韌性基礎設施',
    'tax-dollars-that-work': '善用公帑',
  },
  'zh-CN': {
    'safe-community': '安全社区',
    'moving-people-forward': '让出行更顺畅',
    'accountable-leadership': '问责领导',
    'resilient-infrastructure': '韧性基础设施',
    'tax-dollars-that-work': '善用公帑',
  },
};

/** Backward-compatible English map for callers not yet passing a locale. */
export const PILLAR_CONTENT = PILLAR_CONTENT_EN;

export function getPillarContent(slug: string, locale: Locale): PillarContent {
  const content = PILLAR_CONTENT_BY_LOCALE[locale][slug];
  if (!content) throw new Error(`Unknown pillar slug: ${slug}`);
  return content;
}

export function pillarTitle(slug: string, locale: Locale): string {
  return PILLAR_TITLES[locale][slug] ?? slug;
}
