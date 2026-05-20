import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Shell } from './components/Shell';
import { ScrollToTop } from './components/ScrollToTop';
import Triage from './screens/Triage';
import Results from './screens/Results';
import BugDetail from './screens/BugDetail';
import Inspectors from './screens/Inspectors';

const fadeTransition = { duration: 0.32, ease: [0.2, 0.8, 0.2, 1] as const };

export default function App() {
  const location = useLocation();
  return (
    <Shell>
      <ScrollToTop />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={fadeTransition}
        >
          <Routes location={location}>
            <Route path="/" element={<Navigate to="/triage/where" replace />} />
            <Route path="/triage" element={<Navigate to="/triage/where" replace />} />
            <Route path="/triage/:step" element={<Triage />} />
            <Route path="/results" element={<Results />} />
            <Route path="/bug/:id" element={<BugDetail />} />
            <Route path="/inspectors" element={<Inspectors />} />
            <Route path="*" element={<Navigate to="/triage/where" replace />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Analytics />
      <SpeedInsights />
    </Shell>
  );
}
