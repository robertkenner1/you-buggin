import { create } from 'zustand';
import type { BugGroupSize, BugLocation } from '../data/bugs';

export type TriageWings = 'live-wings' | 'shed-wings' | 'no-wings' | 'unsure';
export type TriageStep = 'where' | 'count' | 'wings';

type TriageState = {
  step: TriageStep;
  where: BugLocation | null;
  count: BugGroupSize | null;
  wings: TriageWings | null;
  setStep: (v: TriageStep) => void;
  setWhere: (v: BugLocation) => void;
  setCount: (v: BugGroupSize) => void;
  setWings: (v: TriageWings) => void;
  reset: () => void;
};

const initialState = {
  step: 'where' as TriageStep,
  where: null,
  count: null,
  wings: null,
};

export const useTriage = create<TriageState>((set) => ({
  ...initialState,
  setStep: (v) => set({ step: v }),
  setWhere: (v) => set({ where: v }),
  setCount: (v) => set({ count: v }),
  setWings: (v) => set({ wings: v }),
  reset: () => set(initialState),
}));
