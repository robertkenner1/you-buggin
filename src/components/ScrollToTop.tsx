import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scrolls the window back to top on every route change. Mounted inside
// the BrowserRouter context in App.tsx.
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
