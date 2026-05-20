import { create } from 'zustand';
import type { BugGroupSize, BugLocation } from '../data/bugs';

export type TriageWings = 'live-wings' | 'shed-wings' | 'no-wings' | 'unsure';

type TriageState = {
  where: BugLocation | null;
  count: BugGroupSize | null;
  wings: TriageWings | null;
  setWhere: (v: BugLocation) => void;
  setCount: (v: BugGroupSize) => void;
  setWings: (v: TriageWings) => void;
  reset: () => void;
};

export const useTriage = create<TriageState>((set) => ({
  where: null,
  count: null,
  wings: null,
  setWhere: (v) => set({ where: v }),
  setCount: (v) => set({ count: v }),
  setWings: (v) => set({ wings: v }),
  reset: () => set({ where: null, count: null, wings: null }),
}));
