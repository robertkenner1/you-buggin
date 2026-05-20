# you buggin?

A mobile-first bug identification triage tool for homeowners in Westchester County, NY and neighboring areas (Rockland, Putnam, Fairfield CT). A second opinion before you panic-call an exterminator.

The name is intentionally generic — v1 is bugs only, but the product can expand later (mold, leaks, electrical).

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS (hand-rolled components, no UI library)
- Zustand for triage state
- React Router for navigation
- Inter via Google Fonts
- Deploy target: Vercel (see `vercel.json` for SPA rewrite)

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build locally
npm run lint     # tsc --noEmit (type-check only, no ESLint yet)
```

## Routes

| Route          | File                            | Purpose                                              |
| -------------- | ------------------------------- | ---------------------------------------------------- |
| `/`            | `src/screens/Entry.tsx`         | Landing — headline + primary CTA                     |
| `/triage`      | `src/screens/Triage.tsx`        | Three questions; persists in Zustand                 |
| `/results`     | `src/screens/Results.tsx`       | Ranked candidates from `where`/`count`/`wings` query |
| `/bug/:id`     | `src/screens/BugDetail.tsx`     | Single bug detail                                    |
| `/browse`      | `src/screens/Browse.tsx`        | Grid grouped by season + location                    |
| `/confirm`     | `src/screens/Confirm.tsx`       | "Take a photo" (decorative) + "Talk to someone"      |
| `/inspectors`  | `src/screens/Inspectors.tsx`    | 3 categories of help, NY/CT filter                   |

## Triage flow

1. `/triage` collects `where` (location), `count` (group size), `wings` (yes/no/unsure).
2. CTA appears only once all three are answered.
3. **Special routing:** `count === 'swarm'` + `wings === 'yes'` → `/results?focus=swarmers`, which surfaces the termite-swarmer vs flying-ant comparison directly. Otherwise → `/results?where=…&count=…&wings=…`.

## Ranking logic (`src/lib/ranking.ts`)

Each bug is scored against the triage answers:

- **Location match:** +3 (`where` in `bug.locations`)
- **Group size match:** +2 (`count` in `bug.groupSize`)
- **Wings match:** +2 exact, +1 if `bug.hasWings === 'sometimes'`, +1 if user answered "unsure"
- **Seasonal peak:** +2 if today's month is in `bug.seasonalPeak`

Top 3 by score, **minimum threshold 4**. Below threshold → "Nothing's a clean match. A photo would help." with a link to `/confirm`.

`swarmerFocus()` is a hard-coded short-circuit for the swarmers path.

## Data

- **`src/data/bugs.ts`** — 18 entries. Each carries diagnostic copy, key features, scientific name, and the ranking-relevant tags (`locations`, `groupSize`, `hasWings`, `seasonalPeak`).
- **`src/data/inspectors.ts`** — 12 entries split 4/4/4 across `independent` / `free` / `treatment`, mixed NY/CT.

## What's placeholder vs real

| Area                  | Status      | Notes                                                                                                  |
| --------------------- | ----------- | ------------------------------------------------------------------------------------------------------ |
| Bug copy              | Placeholder | Plain functional — `whatItMeans`, `whatItMeansLong`, `whenToCall`. Voice pass comes later.              |
| Bug illustrations     | Placeholder | `Illustration.tsx` renders a tinted initials block keyed off the bug id. No real artwork yet.           |
| Inspectors            | Placeholder | Names are realistic-sounding inventions for the region. Phone numbers are 555-prefix and non-routing.   |
| State filter (NY/CT)  | Real (client-side) | Filters the static dataset.                                                                   |
| Distance / response   | Placeholder | Hard-coded per inspector. No geolocation.                                                              |
| Photo upload          | Decorative  | `<input type="file">` accepts but does nothing with the file. No upload, no model, no storage.         |
| Triage state          | Real (in-memory) | Zustand store. Not persisted across reloads — by design for v1.                                   |
| Ranking logic         | Real        | Scoring and threshold are exactly as specified.                                                        |
| Routing               | Real        | React Router v6. `vercel.json` rewrites all paths to `/` for SPA hosting.                              |

## What's intentionally out of v1

- AI photo identification
- Accounts, auth, backend, persistence
- Real inspector API or geolocation
- Social features
- Animations beyond CSS transitions
- Dark mode
- Icon library (every label is text — by design)

## Design baseline

Kept deliberately simple — refining typography and the design system is post-v1.

- Off-white canvas (`#f7f5f1`), dark ink text, one muted green accent for CTAs
- Mobile-first, max-width 480px centered on desktop
- 56px minimum tap targets
- Hairline borders, rounded cards, no heavy shadows
- No decorative icons. Affordance icons allowed when they signal a tap action with no other visible cue (e.g. the phone glyph on inspector call cards). Default to plain text labels.

Tokens live in `tailwind.config.js`; component primitives in `src/index.css` (`.card`, `.choice`, `.btn-primary`, `.btn-secondary`, `.badge`).

## Deploy

`vercel.json` ships with the SPA rewrite rule. `vercel --prod` from the repo root, or connect the repo in the Vercel dashboard.

## Project layout

```
src/
  App.tsx                 routes
  main.tsx                entry
  index.css               Tailwind + component primitives
  components/
    Shell.tsx             mobile container + header
    Illustration.tsx      placeholder illustration
    BugTile.tsx           grid tile used in Browse
  data/
    bugs.ts               18 bug entries + types
    inspectors.ts         12 inspector entries + types
  lib/
    ranking.ts            scoring + swarmer focus
  screens/
    Entry.tsx
    Triage.tsx
    Results.tsx
    BugDetail.tsx
    Confirm.tsx
    Inspectors.tsx
    Browse.tsx
  store/
    triage.ts             Zustand store
```

See `BRIEF.md` for the original product spec.
