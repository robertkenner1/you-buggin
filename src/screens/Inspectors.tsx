import { useMemo } from 'react';
import { Phone } from '@phosphor-icons/react';
import { track } from '@vercel/analytics';
import { inspectors } from '../data/inspectors';
import type { Inspector } from '../data/inspectors';
import { Card } from '../components/Card';
import { CardText } from '../components/CardText';

function shuffle<T>(input: T[]): T[] {
  const arr = [...input];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function Inspectors() {
  const sorted = useMemo(() => shuffle(inspectors), []);

  return (
    <div className="pt-2 pb-6 flex flex-col gap-6">
      <header className="text-center">
        <h1 className="text-xl font-semibold leading-tight">Call an exterminator</h1>
      </header>

      <ul className="flex flex-col gap-2">
        {sorted.map((inspector) => (
          <InspectorRow key={inspector.id} inspector={inspector} />
        ))}
      </ul>
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
    <li>
      <Card href={telHref} onClick={handleCall} className="gap-3">
        <CardText
          title={inspector.name}
          subtitle={`${inspector.city}, ${inspector.state}`}
        />
        <PhoneGlyph />
      </Card>
    </li>
  );
}
