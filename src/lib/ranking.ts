import { bugs } from '../data/bugs';
import type { Bug, BugGroupSize, BugLocation } from '../data/bugs';
import type { TriageWings } from '../store/triage';

export type RankedBug = { bug: Bug; score: number };

export type Confidence = 'high' | 'medium' | 'low' | 'none';

export type FocusKey = 'swarmers' | 'wood-pests' | 'tiny-ants' | 'tiny-flies';

export type RankingResult = {
  ranked: RankedBug[];
  confidence: Confidence;
  focus: FocusKey | null;
};

export type RankingInput = {
  where: BugLocation | null;
  count: BugGroupSize | null;
  wings: TriageWings | null;
  month?: number;
};

const SCORE_THRESHOLD = 4;
const MAX_RESULTS = 3;
const HIGH_CONFIDENCE_GAP = 3;

function wingsAllows(bug: Bug, wings: TriageWings | null): boolean {
  if (!wings || wings === 'unsure') return true;
  if (wings === 'shed-wings') return bug.shedsWings;
  if (wings === 'live-wings') return bug.hasWings === 'yes' || bug.hasWings === 'sometimes';
  if (wings === 'no-wings') return bug.hasWings === 'no' || bug.hasWings === 'sometimes';
  return true;
}

function scoreBug(
  bug: Bug,
  where: BugLocation | null,
  count: BugGroupSize | null,
  month: number
): number {
  let score = 0;
  if (where && bug.locations.includes(where)) score += 3;
  if (count && bug.groupSize.includes(count)) score += 2;
  if (bug.seasonalPeak.includes(month)) score += 2;
  return score;
}

function computeConfidence(ranked: RankedBug[]): Confidence {
  if (ranked.length === 0) return 'none';
  if (ranked.length === 1) return 'high';
  const gap = ranked[0].score - ranked[1].score;
  if (gap >= HIGH_CONFIDENCE_GAP) return 'high';
  if (ranked.length === 2) return 'medium';
  return 'low';
}

type FocusCluster = {
  bugIds: string[];
  headline: string;
};

const FOCUS_CLUSTERS: Record<FocusKey, FocusCluster> = {
  swarmers: {
    bugIds: ['termite-swarmers', 'flying-ants'],
    headline: 'Which one are you seeing?',
  },
  'wood-pests': {
    bugIds: ['subterranean-termite-workers', 'carpenter-ants'],
    headline: 'Which one are you seeing?',
  },
  'tiny-ants': {
    bugIds: ['odorous-house-ants', 'pavement-ants', 'carpenter-ants'],
    headline: 'Which one are you seeing?',
  },
  'tiny-flies': {
    bugIds: ['fruit-flies', 'drain-flies'],
    headline: 'Which one are you seeing?',
  },
};

function focusBugs(key: FocusKey): RankedBug[] {
  const cluster = FOCUS_CLUSTERS[key];
  return cluster.bugIds
    .map((id) => bugs.find((b) => b.id === id))
    .filter((b): b is Bug => b !== undefined)
    .map((bug) => ({ bug, score: 99 }));
}

export function focusHeadline(key: FocusKey): string {
  return FOCUS_CLUSTERS[key].headline;
}

export function detectFocus(
  where: BugLocation | null,
  count: BugGroupSize | null,
  wings: TriageWings | null
): FocusKey | null {
  if (!where || !count || !wings) return null;
  if (wings === 'shed-wings') return 'swarmers';
  if (
    wings === 'live-wings' &&
    count === 'group' &&
    (where === 'kitchen' || where === 'bathroom')
  ) {
    return 'tiny-flies';
  }
  if (wings === 'live-wings' && count === 'group') return 'swarmers';
  if (wings === 'no-wings' && count === 'trail' && where === 'kitchen') return 'tiny-ants';
  if (wings === 'no-wings' && count === 'few' && where === 'basement') return 'wood-pests';
  return null;
}

export function rankBugs({ where, count, wings, month }: RankingInput): RankingResult {
  const currentMonth = month ?? new Date().getMonth() + 1;

  const focus = detectFocus(where, count, wings);
  if (focus) {
    return {
      ranked: focusBugs(focus),
      confidence: 'medium',
      focus,
    };
  }

  const ranked = bugs
    .filter((bug) => wingsAllows(bug, wings))
    .map((bug) => ({ bug, score: scoreBug(bug, where, count, currentMonth) }))
    .filter((r) => r.score >= SCORE_THRESHOLD)
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_RESULTS);

  return {
    ranked,
    confidence: computeConfidence(ranked),
    focus: null,
  };
}
