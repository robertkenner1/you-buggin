import { useState } from 'react';
import type { Bug } from '../data/bugs';

type Size = 'sm' | 'md' | 'lg' | 'xl';

const sizeClasses: Record<Size, string> = {
  sm: 'h-20',
  md: 'h-32',
  lg: 'h-48',
  xl: 'aspect-square',
};

// Hash bug id to a stable hue so the fallback placeholder has its own tint.
function hueFor(id: string): number {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) % 360;
  return h;
}

export function Illustration({ bug, size = 'md' }: { bug: Bug; size?: Size }) {
  const [errored, setErrored] = useState(false);
  const containerClasses = `${sizeClasses[size]} w-full rounded-card border border-hairline overflow-hidden`;
  const src = `/illustrations/${bug.id}-square.jpg`;

  if (errored) {
    const hue = hueFor(bug.id);
    const bg = `hsl(${hue} 22% 92%)`;
    const fg = `hsl(${hue} 30% 38%)`;
    const initial = bug.commonName
      .split(' ')
      .slice(0, 2)
      .map((w) => w[0])
      .join('');

    return (
      <div
        className={`${containerClasses} flex items-center justify-center select-none`}
        style={{ background: bg, color: fg }}
        aria-hidden
      >
        <span
          className="font-semibold tracking-wide"
          style={{ fontSize: size === 'lg' ? 28 : size === 'md' ? 20 : 14 }}
        >
          {initial.toUpperCase()}
        </span>
      </div>
    );
  }

  return (
    <div className={containerClasses}>
      <img
        src={src}
        alt={bug.commonName}
        loading="lazy"
        onError={() => setErrored(true)}
        className="w-full h-full object-cover block"
      />
    </div>
  );
}
