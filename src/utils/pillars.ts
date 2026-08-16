import { CONTINUITY } from './constants';

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
export const PILLAR_CONTENT: Record<string, PillarContent> = {
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
