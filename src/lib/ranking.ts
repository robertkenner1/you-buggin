import { bugs } from '../data/bugs';
import type { Bug, BugGroupSize, BugLocation } from '../data/bugs';
import type { TriageWings } from '../store/triage';

export type RankedBug = { bug: Bug; score: number };

export type RankingInput = {
  where: BugLocation | null;
  count: BugGroupSize | null;
  wings: TriageWings | null;
  month?: number;
};

const SCORE_THRESHOLD = 4;
const MAX_RESULTS = 3;

export function rankBugs({ where, count, wings, month }: RankingInput): RankedBug[] {
  const currentMonth = month ?? new Date().getMonth() + 1;

  const ranked = bugs
    .map((bug) => {
      let score = 0;

      if (where && bug.locations.includes(where)) score += 3;
      if (count && bug.groupSize.includes(count)) score += 2;

      if (wings) {
        if (bug.hasWings === 'sometimes') {
          score += 1;
        } else if (wings === 'yes' && bug.hasWings === 'yes') {
          score += 2;
        } else if (wings === 'no' && bug.hasWings === 'no') {
          score += 2;
        } else if (wings === 'unsure') {
          score += 1;
        }
      }

      if (bug.seasonalPeak.includes(currentMonth)) score += 2;

      return { bug, score };
    })
    .filter((r) => r.score >= SCORE_THRESHOLD)
    .sort((a, b) => b.score - a.score);

  return ranked.slice(0, MAX_RESULTS);
}

export type FocusKey = 'swarmers' | 'wood-pests' | 'tiny-ants' | 'tiny-flies';

type FocusCluster = {
  bugIds: string[];
  headline: string;
};

const FOCUS_CLUSTERS: Record<FocusKey, FocusCluster> = {
  swarmers: {
    bugIds: ['termite-swarmers', 'flying-ants'],
    headline: "It's one of these two.",
  },
  'wood-pests': {
    bugIds: ['subterranean-termite-workers', 'carpenter-ants'],
    headline: 'Probably one of these two.',
  },
  'tiny-ants': {
    bugIds: ['odorous-house-ants', 'pavement-ants', 'carpenter-ants'],
    headline: 'Probably one of these.',
  },
  'tiny-flies': {
    bugIds: ['fruit-flies', 'drain-flies'],
    headline: "It's one of these two.",
  },
};

export function focusBugs(key: FocusKey): RankedBug[] {
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
  // Tiny flies in kitchen or bathroom — most common
  if (
    wings === 'yes' &&
    count === 'group' &&
    (where === 'kitchen' || where === 'bathroom')
  ) {
    return 'tiny-flies';
  }
  // Termite swarmers vs flying ants — winged group elsewhere
  if (wings === 'yes' && count === 'group') {
    return 'swarmers';
  }
  // Tiny indoor ant trail
  if (wings === 'no' && count === 'trail' && (where === 'kitchen' || where === 'floor')) {
    return 'tiny-ants';
  }
  // Termite workers vs carpenter ants in damp wood
  if (wings === 'no' && count === 'few' && (where === 'basement' || where === 'wall' || where === 'floor')) {
    return 'wood-pests';
  }
  return null;
}

