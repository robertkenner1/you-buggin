import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useEffect, type ReactNode } from 'react';
import { Card } from '../components/Card';
import { CardText } from '../components/CardText';
import { detectFocus } from '../lib/ranking';
import { useTriage } from '../store/triage';
import type { TriageWings } from '../store/triage';
import type { BugGroupSize, BugLocation } from '../data/bugs';

type StepName = 'where' | 'count' | 'wings';

const STEP_ORDER: StepName[] = ['where', 'count', 'wings'];

const WHERE_OPTIONS: Array<{ value: BugLocation; label: string }> = [
  { value: 'kitchen', label: 'In my kitchen' },
  { value: 'bathroom', label: 'In my bathroom' },
  { value: 'basement', label: 'In the basement' },
  { value: 'attic', label: 'Attic or upstairs' },
];

const COUNT_OPTIONS: Array<{ value: BugGroupSize; label: string }> = [
  { value: 'few', label: 'Just one or two' },
  { value: 'group', label: 'A few, scattered around' },
  { value: 'trail', label: 'Following each other in a line' },
];

const WINGS_OPTIONS: Array<{ value: TriageWings; label: string }> = [
  { value: 'yes', label: 'Yep, wings' },
  { value: 'no', label: 'No wings' },
  { value: 'unsure', label: "Couldn't tell" },
];

const STEP_LABEL: Record<StepName, string> = {
  where: "Where'd you see it?",
  count: 'How many were there?',
  wings: 'Did it have wings?',
};

export default function Triage() {
  const { step } = useParams<{ step?: string }>();
  const navigate = useNavigate();
  const triage = useTriage();

  if (!step || !(STEP_ORDER as string[]).includes(step)) {
    return <Navigate to="/triage/where" replace />;
  }

  const stepName = step as StepName;
  const index = STEP_ORDER.indexOf(stepName);
  const isLast = index === STEP_ORDER.length - 1;

  useEffect(() => {
    if (stepName === 'count' && !triage.where) {
      navigate('/triage/where', { replace: true });
    } else if (stepName === 'wings' && (!triage.where || !triage.count)) {
      navigate(triage.where ? '/triage/count' : '/triage/where', { replace: true });
    }
  }, [stepName, triage.where, triage.count, navigate]);

  function advance(nextStep: StepName | null) {
    if (nextStep) {
      navigate(`/triage/${nextStep}`);
    } else {
      submit();
    }
  }

  function submit() {
    const { where, count, wings } = useTriage.getState();
    if (!where || !count || !wings) {
      navigate('/triage/where', { replace: true });
      return;
    }
    const focus = detectFocus(where, count, wings);
    if (focus) {
      navigate(`/results?focus=${focus}`);
      return;
    }
    const params = new URLSearchParams({ where, count, wings });
    navigate(`/results?${params.toString()}`);
  }

  function handleSelect<T extends string>(value: T) {
    if (stepName === 'where') triage.setWhere(value as BugLocation);
    if (stepName === 'count') triage.setCount(value as BugGroupSize);
    if (stepName === 'wings') triage.setWings(value as TriageWings);
    advance(isLast ? null : STEP_ORDER[index + 1]);
  }

  return (
    <div className="pt-2 pb-6 flex flex-col gap-6">
        <header className="text-center">
          <h1 className="text-xl font-semibold leading-tight">{STEP_LABEL[stepName]}</h1>
        </header>

          {stepName === 'where' && (
            <ChoiceList>
              {WHERE_OPTIONS.map((opt) => (
                <Choice
                  key={opt.value}
                  onClick={() => handleSelect(opt.value)}
                >
                  {opt.label}
                </Choice>
              ))}
            </ChoiceList>
          )}

          {stepName === 'count' && (
            <ChoiceList>
              {COUNT_OPTIONS.map((opt) => (
                <Choice
                  key={opt.value}
                  onClick={() => handleSelect(opt.value)}
                >
                  {opt.label}
                </Choice>
              ))}
            </ChoiceList>
          )}

          {stepName === 'wings' && (
            <ChoiceList>
              {WINGS_OPTIONS.map((opt) => (
                <Choice
                  key={opt.value}
                  onClick={() => handleSelect(opt.value)}
                >
                  {opt.label}
                </Choice>
              ))}
            </ChoiceList>
          )}
    </div>
  );
}

function ChoiceList({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-2">{children}</div>;
}

function Choice({
  onClick,
  children,
}: {
  onClick: () => void;
  children: string;
}) {
  return (
    <Card onClick={onClick} className="text-left">
      <CardText title={children} />
    </Card>
  );
}
