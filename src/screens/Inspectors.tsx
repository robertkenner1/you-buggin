import { useMemo } from 'react';
import { Phone } from '@phosphor-icons/react';
import { track } from '@vercel/analytics';
import { inspectors } from '../data/inspectors';
import type { Inspector, InspectorCounty } from '../data/inspectors';
import { Card } from '../components/Card';
import { CardStack } from '../components/CardStack';
import { CardText } from '../components/CardText';
import { useSetPageTitle } from '../components/PageHeader';

const COUNTY_ORDER: InspectorCounty[] = ['Westchester', 'Rockland', 'Putnam', 'Fairfield'];

function shuffle<T>(input: T[]): T[] {
  const arr = [...input];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function pickOnePerCounty(all: Inspector[]): Inspector[] {
  return COUNTY_ORDER.flatMap((county) => {
    const pool = all.filter((i) => i.county === county);
    return shuffle(pool).slice(0, 1);
  });
}

export default function Inspectors() {
  const sorted = useMemo(() => pickOnePerCounty(inspectors), []);
  useSetPageTitle('Call an exterminator');

  return (
    <div className="pb-6 flex flex-col gap-6">
      <CardStack>
        {sorted.map((inspector) => (
          <InspectorRow key={inspector.id} inspector={inspector} />
        ))}
      </CardStack>
    </div>
  );
}

function PhoneGlyph() {
  return (
    <Phone
      size={20}
      weight="regular"
      className="shrink-0 text-muted opacity-50"
      aria-hidden
    />
  );
}

function InspectorRow({ inspector }: { inspector: Inspector }) {
  const telHref = `tel:${inspector.phone.replace(/[^0-9]/g, '')}`;
  const handleCall = () => {
    track('call_clicked', {
      id: inspector.id,
      name: inspector.name,
      city: inspector.city,
      state: inspector.state,
    });
  };
  return (
    <Card href={telHref} onClick={handleCall} className="gap-3">
      <CardText
        title={inspector.name}
        subtitle={`${inspector.city}, ${inspector.state}`}
      />
      <PhoneGlyph />
    </Card>
  );
}
