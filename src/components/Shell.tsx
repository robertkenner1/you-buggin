import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Bug } from '@phosphor-icons/react';
import { useTriage } from '../store/triage';

type ShellProps = {
  children: ReactNode;
};

export function Shell({ children }: ShellProps) {
  const location = useLocation();
  const isTriage = location.pathname.startsWith('/triage');

  const handleLogoClick = () => {
    useTriage.getState().reset();
  };

  return (
    <div className="app-shell">
      <header className="pt-6 pb-3 flex justify-center">
        <Link to="/" aria-label="you buggin? — home" className="inline-block" onClick={handleLogoClick}>
          <Bug size={30} weight="regular" aria-hidden />
        </Link>
      </header>
      <main className={isTriage ? 'pb-20' : ''}>{children}</main>
      <AnimatePresence>
        {isTriage && (
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-0 inset-x-0 bg-canvas"
          >
            <div className="mx-auto max-w-app px-5 py-4 text-center text-sm text-muted">
              Bobby built it
              <span className="px-1.5">·</span>
              <Link to="/about">About</Link>
            </div>
          </motion.footer>
        )}
      </AnimatePresence>
    </div>
  );
}
