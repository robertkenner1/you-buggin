# you buggin? — v1 brief

A mobile-first bug identification triage tool for homeowners in Westchester County, NY and neighboring areas (Rockland, Putnam, Fairfield CT).

The name is intentionally generic so the app can expand beyond bugs later (mold, leaks, electrical, etc.) — but v1 is bugs only.

## Core principle
This is used in a panic moment — someone is kneeling on their floor looking at a bug. Every screen must either narrow the diagnosis or reduce anxiety. The product is a second opinion before they panic-call an exterminator.

## Stack
- Vite + React + TypeScript
- Tailwind CSS (no UI component library — hand-rolled components)
- Zustand for state management
- React Router for navigation
- No icon library — use plain text labels and CSS-styled UI elements only
- Fonts: Inter via Google Fonts (we'll refine typography later)
- Deploy target: Vercel

## App structure

### Screen 1: Entry (`/`)
- Large headline: "you buggin?"
- Subhead: "A second opinion before you panic-call an exterminator."
- Primary button: "What'd you see?" → `/triage`
- Secondary text link: "Just browsing" → `/browse`
- Tiny footer: "Westchester, Rockland, Putnam, Fairfield County."

### Screen 2: Triage (`/triage`)
Three questions on one screen, large tappable cards. State persists in Zustand.

1. **Where'd you spot it?** — Floor, Wall, Ceiling or light, Kitchen or bath, Outside, In food
2. **How many?** — One or two, A small group, A lot or a trail, Looks like a swarm
3. **Wings?** — Yes, No, Not sure

CTA appears once all three answered: "Best guess" → `/results?where=X&count=Y&wings=Z`

Special routing: "swarm" + "wings: yes" → `/results?focus=swarmers` (prioritizes termite-swarmer vs flying-ant comparison)

### Screen 3: Results (`/results`)
Header: "A few possibilities."

Show 2-3 ranked candidate cards based on triage answers:
- Illustration placeholder
- Common name
- One-line meaning (short, plain — we'll refine voice later)
- Tap → `/bug/:id`

Footer link: "Still not sure?" → `/confirm`

If fewer than 3 bugs hit the score threshold: "Nothing's a clean match. A photo would help."

### Screen 4: Bug detail (`/bug/:id`)
- Illustration at top
- Common name (large)
- Scientific name (italic, secondary color, smaller)
- "How to spot it" — list of key features
- "How to be sure" — confirmation tips
- "What it actually means" — short paragraph
- "When to call someone" — honest threshold
- CTA: "Talk to someone who does this all day" → `/inspectors`

### Screen 5: Confirm (`/confirm`)
Two cards:
- **Take a photo** — copy: "Kneel down, throw your glasses on for this one." Tips list: get close, good light, something for scale, side angle if you can. Include a decorative file upload input (no processing yet).
- **Talk to someone** — "People who deal with this all day." → `/inspectors`

### Screen 6: Inspectors (`/inspectors`)
Three sections:
- **Independent inspectors** (badge: "Diagnosis only")
- **Free inspections** (badge: "Company-affiliated")
- **Treatment-ready** (badge: "Sells treatments")

Each listing: name, distance, response time, star rating, phone number, transparency badge. NY/CT filter at top.

### Screen 7: Browse (`/browse`)
Grid grouped by:
- "Common right now" (May — spring swarmers, scouts)
- "Around the house"
- "Outside"
- "In food"

Tile: small illustration placeholder, common name. Tap → `/bug/:id`.

## Data

`src/data/bugs.ts` with 18 entries:
Carpenter ants, Odorous house ants, Pavement ants, Subterranean termite workers, Termite swarmers, Flying ants, Spotted lanternflies, Brown marmorated stink bugs, Boxelder bugs, House centipedes, Silverfish, Cellar spiders, Wolf spiders, Pantry moths, Fruit flies, Drain flies, Cluster flies, Earwigs.

```typescript
type Bug = {
  id: string;
  commonName: string;
  scientificName: string;
  illustrationUrl: string;
  keyFeatures: string[];
  whatItMeans: string;
  howToSpotIt: string[];
  howToBeSure: string[];
  whatItMeansLong: string;
  whenToCall: string;
  locations: Array<'floor' | 'wall' | 'ceiling' | 'kitchen' | 'outside' | 'food'>;
  groupSize: Array<'few' | 'group' | 'trail' | 'swarm'>;
  hasWings: 'yes' | 'no' | 'sometimes';
  seasonalPeak: number[];
};
```

## Ranking logic for Results screen

Score each bug against triage answers:
- Location match: +3
- Group size match: +2
- Wings match: +2 (if hasWings is 'sometimes', +1 either way)
- In current seasonal peak (today's month in array): +2

Return top 3 by score with minimum threshold of 4. Below threshold, show the "nothing's a clean match" message.

## Inspector data

`src/data/inspectors.ts` with 12 placeholder entries: 4 independent, 4 free-inspection, 4 treatment-ready. Mix NY and CT licensing. Use realistic local names like "Hudson Valley Pest Consulting," "Sound Shore Exterminators," "Westchester Wood and Critter."

```typescript
type Inspector = {
  id: string;
  name: string;
  category: 'independent' | 'free' | 'treatment';
  state: 'NY' | 'CT';
  distanceMiles: number;
  responseTime: string;
  rating: number;
  phone: string;
};
```

## Visual baseline

- Neutral light background (off-white)
- Dark text
- One accent color for primary CTAs (muted, not bright)
- Generous whitespace
- Mobile-first, max-width 480px centered on desktop
- Min 56px tap targets
- Rounded corners on cards
- Hairline borders, no heavy shadows
- No decorative icons. Affordance icons are allowed when they signal a tap action with no other visible cue (e.g. phone glyph on a tappable call card). Default to plain text labels.

## What to skip for v1
- AI photo identification (upload is decorative only)
- Accounts, authentication, backend
- Real inspector API or geolocation
- Social features
- Animations beyond basic transitions
- Dark mode
