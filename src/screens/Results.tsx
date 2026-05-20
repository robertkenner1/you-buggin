import { Link, useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';
import { rankBugs, focusHeadline } from '../lib/ranking';
import type { BugGroupSize, BugLocation } from '../data/bugs';
import type { TriageWings } from '../store/triage';
import { Card } from '../components/Card';
import { CardText } from '../components/CardText';
import { Silhouette } from '../components/Silhouette';

const LOCATIONS: BugLocation[] = [
  'kitchen',
  'bathroom',
  'basement',
  'attic',
  'living-area',
  'exterior',
];
const GROUPS: BugGroupSize[] = ['few', 'group', 'trail', 'swarm'];
const WINGS: TriageWings[] = ['live-wings', 'shed-wings', 'no-wings', 'unsure'];

function asLocation(v: string | null): BugLocation | null {
  return v && (LOCATIONS as string[]).includes(v) ? (v as BugLocation) : null;
}
function asGroup(v: string | null): BugGroupSize | null {
  return v && (GROUPS as string[]).includes(v) ? (v as BugGroupSize) : null;
}
function asWings(v: string | null): TriageWings | null {
  return v && (WINGS as string[]).includes(v) ? (v as TriageWings) : null;
}

export default function Results() {
  const [params] = useSearchParams();
  const where = asLocation(params.get('where'));
  const count = asGroup(params.get('count'));
  const wings = asWings(params.get('wings'));

  const result = useMemo(() => rankBugs({ where, count, wings }), [where, count, wings]);
  const { ranked, confidence, focus } = result;

  const recap = focus
    ? focusHeadline(focus)
    : confidence === 'medium'
    ? 'Which one are you seeing?'
    : ranked.length === 1
    ? 'It might be this.'
    : "It could be one of these.";

  return (
    <div className="pt-2 pb-6 flex flex-col gap-6">
        <header className="text-center">
          <h1 className="text-xl font-semibold leading-tight">{recap}</h1>
        </header>

        {ranked.length === 0 ? (
          <div className="card p-5 flex flex-col gap-3">
            <p className="text-base font-medium">Nothing's a clean match.</p>
            <p className="text-sm text-muted leading-relaxed">
              When the match isn't clean, the people who deal with this all day are usually the next step.
            </p>
            <div className="flex flex-col gap-2 pt-2">
              <Link to="/inspectors" className="btn-primary">
                See who's nearby
              </Link>
              <Link to="/triage" className="btn-secondary self-center">
                Change my answers
              </Link>
            </div>
          </div>
        ) : (
          <ul className="flex flex-col gap-3">
            {ranked.map(({ bug }) => (
              <li key={bug.id}>
                <Card to={`/bug/${bug.id}`} className="gap-8">
                  <CardText title={bug.commonName} subtitle={bug.whatItMeans} />
                  <Silhouette
                    bugId={bug.id}
                    className="w-16 h-16 shrink-0"
                  />
                </Card>
              </li>
            ))}
            <li>
              <Card to="/inspectors" className="text-left">
                <CardText title="It's none of these" />
              </Card>
            </li>
          </ul>
        )}

    </div>
  );
}
