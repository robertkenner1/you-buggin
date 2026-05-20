import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowsInSimple, ArrowsOutSimple } from '@phosphor-icons/react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { bugById } from '../data/bugs';
import { Illustration } from '../components/Illustration';
import { Silhouette } from '../components/Silhouette';

export default function BugDetail() {
  const { id = '' } = useParams();
  const bug = bugById(id);

  if (!bug) {
    return (
      <div className="pt-10 flex flex-col gap-4">
        <h2 className="text-xl font-normal">Couldn't find that one.</h2>
        <Link to="/" className="btn-secondary">
          Start over
        </Link>
      </div>
    );
  }

  const showFooter = bug.severity !== 'relief';
  const [zoomOpen, setZoomOpen] = useState(false);

  return (
    <>
    <article className={`pt-2 ${showFooter ? 'pb-24' : 'pb-6'} flex flex-col gap-8 min-w-0`}>
        <header className="text-center">
          <h1 className="text-xl font-semibold leading-tight">{bug.commonName}</h1>
        </header>

        <div className="grid grid-cols-2 gap-2 min-w-0">
          <button
            type="button"
            onClick={() => setZoomOpen(true)}
            aria-label={`View larger photo of ${bug.commonName}`}
            className="relative block min-w-0"
          >
            <Illustration bug={bug} size="xl" />
            <span className="absolute bottom-2 right-2 bg-ink/60 rounded-card p-1.5 pointer-events-none">
              <ArrowsOutSimple
                size={16}
                weight="bold"
                className="text-white"
                aria-hidden
              />
            </span>
          </button>
          <div className="aspect-square w-full min-w-0 rounded-card border border-hairline overflow-hidden flex items-center justify-center p-4">
            <Silhouette
              bugId={bug.id}
              label={`${bug.commonName} silhouette`}
              className="w-full h-full"
            />
          </div>
        </div>

        <Section title="How to spot it">
          <BulletList items={bug.howToSpotIt} />
        </Section>

        <Section title="How to be sure">
          <BulletList items={bug.howToBeSure} />
        </Section>

        <Section title="What it actually means">
          <p className="text-base leading-relaxed">{bug.whatItMeansLong}</p>
        </Section>

        <Section title="When to call someone">
          <p className="text-base leading-relaxed">{bug.whenToCall}</p>
        </Section>

    </article>

    {showFooter && (
      <div className="fixed bottom-0 inset-x-0 pb-6 pt-4 bg-gradient-to-t from-canvas via-canvas to-transparent">
        <div className="mx-auto max-w-app px-5">
          <Link to="/inspectors" className="btn-primary">
            Call an exterminator
          </Link>
        </div>
      </div>
    )}

    <AnimatePresence>
      {zoomOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-ink"
          role="dialog"
          aria-label={`Larger photo of ${bug.commonName}`}
        >
          <TransformWrapper
            initialScale={1}
            minScale={1}
            maxScale={6}
            centerOnInit
            doubleClick={{ mode: 'zoomIn', step: 0.7 }}
            wheel={{ step: 0.2 }}
            limitToBounds
          >
            <TransformComponent
              wrapperStyle={{ width: '100vw', height: '100vh' }}
              contentStyle={{ width: '100vw', height: '100vh' }}
            >
              <img
                src={`/illustrations/${bug.id}.jpg`}
                alt={bug.commonName}
                className="w-screen h-screen object-contain"
              />
            </TransformComponent>
          </TransformWrapper>
          <button
            type="button"
            onClick={() => setZoomOpen(false)}
            aria-label="Close"
            className="absolute top-4 right-4 z-10 p-2 text-white mix-blend-difference"
          >
            <ArrowsInSimple size={24} weight="bold" aria-hidden />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h5 className="text-base font-semibold">{title}</h5>
      {children}
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((s, i) => (
        <li key={i} className="text-base leading-relaxed flex gap-3">
          <span
            className="shrink-0 w-1.5 h-1.5 rounded-full border border-ink mt-[9px]"
            aria-hidden
          />
          <span>{s}</span>
        </li>
      ))}
    </ul>
  );
}
