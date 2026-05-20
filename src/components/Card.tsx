import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type CardProps = {
  to?: string;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
};

const base = 'card p-4 flex items-center min-h-[56px]';

export function Card({ to, href, onClick, children, className = '' }: CardProps) {
  const cls = `${base} ${className}`.trim();
  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} onClick={onClick} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
