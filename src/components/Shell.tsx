import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Bug } from '@phosphor-icons/react';

type ShellProps = {
  children: ReactNode;
};

export function Shell({ children }: ShellProps) {
  return (
    <div className="app-shell">
      <header className="pt-6 pb-3 flex justify-center">
        <Link to="/" aria-label="you buggin? — home" className="inline-block">
          <Bug size={30} weight="regular" aria-hidden />
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
}
