import type { ReactNode } from 'react';

type CardStackProps = {
  children: ReactNode;
  className?: string;
};

export function CardStack({ children, className = '' }: CardStackProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`.trim()}>
      {children}
    </div>
  );
}
