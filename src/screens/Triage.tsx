import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Card } from '../components/Card';
import { CardStack } from '../components/CardStack';
import { CardText } from '../components/CardText';
import { useSetPageTitle } from '../components/PageHeader';
import { rankBugs } from '../lib/ranking';
import { useTriage } from '../store/triage';
import type { TriageWings, TriageStep } from '../store/triage';
import type { BugGroupSize, BugLocation } from '../data/bugs';

const stepTransition = { duration: 0.18, ease: [0.2, 0.8, 0.2, 1] as const };

const STEP_ORDER: TriageStep[] = ['where', 'count', 'wings'];

const WHERE_OPTIONS: Array<{ value: BugLocation; label: string }> = [
  { value: 'kitchen', label: 'Kitchen' },
  { value: 'bathroom', label: 'Bathroom' },
  { value: 'basement', label: 'Basement' },
  { value: 'attic', label: 'Attic' },
  { value: 'living-area', label: 'Bedroom or living room' },
  { value: 'exterior', label: 'Window, door, or outside wall' },
];

const COUNT_OPTIONS: Array<{ value: BugGroupSize; label: string }> = [
  { value: 'few', label: 'One or two' },
  { value: 'group', label: 'A few, scattered' },
  { value: 'trail', label: 'Following in a line' },
];

const WINGS_OPTIONS: Array<{ value: TriageWings; label: string }> = [
  { value: 'live-wings', label: 'Had wings' },
  { value: 'shed-wings', label: 'Detached wings' },
  { value: 'no-wings', label: 'No wings' },
  { value: 'unsure', label: "Couldn't tell" },
];

const STEP_LABEL: Record<TriageStep, string> = {
  where: "Where's the bug?",
  count: 'How many were there?',
  wings: 'Any wings or wing pieces?',
};

export default function Triage() {
  const navigate = useNavigate();
  const triage = useTriage();
  const stepName = triage.step;

  const index = STEP_ORDER.indexOf(stepName);
  const isLast = index === STEP_ORDER.length - 1;

  function submit() {
    const { where, count, wings } = useTriage.getState();
    if (!where || !count || !wings) return;
    const result = rankBugs({ where, count, wings });
    const params = new URLSearchParams({ where, count, wings });

    if (result.confidence === 'high' && result.ranked.length > 0) {
      navigate(`/bug/${result.ranked[0].bug.id}`);
      return;
    }
    navigate(`/results?${params.toString()}`);
  }

  function handleSelect<T extends string>(value: T) {
    if (stepName === 'where') triage.setWhere(value as BugLocation);
    if (stepName === 'count') triage.setCount(value as BugGroupSize);
    if (stepName === 'wings') triage.setWings(value as TriageWings);
    if (isLast) {
      submit();
    } else {
      triage.setStep(STEP_ORDER[index + 1]);
    }
  }

  const stepOptions: Array<{ value: string; label: string }> =
    stepName === 'where' ? WHERE_OPTIONS
      : stepName === 'count' ? COUNT_OPTIONS
      : WINGS_OPTIONS;

  useSetPageTitle(STEP_LABEL[stepName]);

  return (
    <div className="pb-6 flex flex-col gap-6">
      <CardStack>
        <AnimatePresence mode="popLayout" initial={false}>
          {stepOptions.map((opt, i) => (
            <motion.div
              key={`slot-${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={stepTransition}
            >
              <Card onClick={() => handleSelect(opt.value)} className="text-left">
                <CardText title={opt.label} />
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </CardStack>
    </div>
  );
}
