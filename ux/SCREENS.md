# Screens

The **vertical** view of the product. Each screen as a standalone unit with a specific job. Pair this with [USER_FLOWS.md](./USER_FLOWS.md), which is the **horizontal** view (the journeys users take across screens).

Use this doc when evaluating "should we add X to this screen?" or "what's this screen actually for?" If a proposed change doesn't serve the screen's stated purpose, push back.

---

## Triage

### Purpose
Take a panicked homeowner from "I just saw a bug" to a small set of likely candidates in 3 questions or less. Build the candidate set **observationally** (what the user can see right now) without requiring expertise or composure.

### What it is NOT
- An education tool
- A bug taxonomy quiz
- A fast lane to a single answer (most paths land on Results with 2-3 candidates)

### The three questions

#### Q1: "Where'd you see it?"
**Purpose:** narrow the bug set to species that live in that environment.

The 6 options (kitchen, bathroom, basement, attic, bedroom or living room, window/door/outside wall) each map to a distinct pest community. Basements = termites + spiders + silverfish + centipedes. Kitchens = food pests. Exteriors = overwintering bugs.

This is the strongest single signal we get. A bug in the kitchen and a bug in the basement are almost never the same species.

#### Q2: "How many were there?"
**Purpose:** distinguish lone wanderers from active colonies / breeding sites. Behavior is bundled in (a trail of bugs implies ants; a scattered group implies overwintering; one bug implies a wanderer).

Three options: "One or two", "A few, scattered", "Following in a line." Not asking for an exact count, just rough density.

#### Q3: "Any wings or wing pieces?"
**Purpose:** the single most diagnostic observation. Hard filter on the candidate set.

Four options:
- **Had wings** — narrows to winged bugs
- **Detached wings** — the exterminator's real diagnostic from Bobby's origin story (shed wings on a windowsill = mature colony swarming). Routes to the termite/flying-ant comparison.
- **No wings** — narrows to wingless bugs
- **Couldn't tell** — no filter

This question carries more diagnostic weight than the other two combined.

### Why this works
Three observational questions, none of which require the user to know anything about bugs. They just describe what they're seeing. The ranker does the work of mapping observations to species.

---

## Results

### Purpose
Show 2-3 candidate bugs the user can choose between, with the worst-case fear placed next to the calm alternative. **The page itself is the panic-defusing move.** Putting "termites" and "carpenter ants" side by side on the same screen is what defuses the catastrophizer.

### What it is NOT
- A definitive answer ("it's this bug")
- A confident identification (silhouettes are too small for that)
- An education page (the user has to click into a bug to learn anything)
- A fork where all paths are equal — when there's a worst-case in play, the page deliberately surfaces it

### Routing logic
- **High confidence** (one dominant match) → skip Results entirely, go straight to BugDetail
- **Paired comparison** (focus cluster matches) → Results with "Which one are you seeing?"
- **Low confidence** (3 candidates) → Results with "It could be one of these"
- **No matches** → Results with "Nothing's a clean match" + escape to inspectors

### What's on the card
- Bug name (the title)
- Silhouette (~44px, quick visual cue for cross-category differentiation; not for confident ID)
- Subtitle in bug-habit POV: "They like damp wood." (answers "why might I see this here?")
- Tap to BugDetail

### What's NOT on the card
- Photos (too heavy for scanning; lives on BugDetail)
- Severity tags (relief is ambient, not labeled)
- Action prompts ("Call now") — those belong on BugDetail

---

## Bug detail page

### Purpose
Confirm the candidate, calm or escalate the situation, suggest action. The user arrived here suspecting this is the bug. This page either reassures them or recommends a call.

### The three content sections
- **What to look for** — visual + behavioral cues to confirm it's this bug (5 short bullets)
- **What's going on** — the situation in plain English (one paragraph: why it's there, what it means, severity level)
- **What to do** — DIY path or call-a-pro action (one paragraph)

### The CTA footer
Fires only when `recommendPro: true` (carpenter ants, the ant tribe, cluster flies, termites). Does NOT fire for relief cases (centipedes, spiders, stink bugs, silverfish, etc.) — the absence of the CTA is itself the panic-defusing signal. *"You don't even need to call."*

### Visual treatment
- Photo + silhouette displayed side-by-side at the top
- Photo for confirmation (matching what they actually saw)
- Silhouette as a stable shape that loads instantly while the photo downloads
- Tap to zoom on photo for closer inspection

### Voice
Per [PERSONAS.md](./PERSONAS.md), the expert voice: the exterminator who picks up the phone. Plain English. No Latin in body. No em dashes. Direct.

---

## Inspectors page

### Purpose
A short list of local, vetted pest pros the user can tap-to-call. The exit ramp for users who need professional help.

### What's on it
- One inspector per county (Westchester, Rockland, Putnam, Fairfield) shuffled each visit
- 4 total cards — one tap-to-call each
- Inspector name + city + state + small phone glyph

### Why one per county
Reduces decision paralysis at the panic moment. Each visit shuffles within each county pool, so businesses still get fair distribution over time. Every visit covers all 4 counties so wherever the user is, one is nearby.

### What this page is NOT
- A pest control directory
- A comparison-shopping page
- A review aggregator
- A booking system

### What it IS
- "People you can actually call right now"
- `tel:` link tap-to-call
- Hyperlocal (the 4 counties only)
- Instrumented: each call fires a `call_clicked` event in Vercel Analytics

---

## About page

### Purpose
Tell the user who built this and why. Establishes credibility through lived experience (Bobby's termite scare), grounds the product in honesty (sourced content, no AI advice), and offers transparency about pest pros and privacy.

### What's on it
- **The story** — Bobby's origin moment (carpenter ants on the living room floor, the exterminator who picked up the phone)
- **The advice** — disclaimer about being a triage tool, not a substitute for a pro
- **The pest pros** — how the inspector list was built (Google Places, hand-curated, no relationships, no commission)
- **Sources** — Penn State Extension primary, Cornell NYSIPM backstop, every claim sourced
- **Privacy** — what the analytics see (cookieless, no PII, page views only)

### What it is NOT
- A marketing page
- A sales page
- An education page
- A pitch for the future paid tier

### What it IS
- The author's POV in their own voice
- Disclaimers in plain English
- Transparency, not legal cover

---

## How to use this doc

Before adding anything to a screen, ask:
1. Does this serve the screen's stated purpose?
2. Does it fit one of the "What it IS" patterns?
3. Does it conflict with one of the "What it is NOT" patterns?

If the answers are no/no/yes, push back on the change. Either the screen's purpose has shifted (update this doc) or the change belongs somewhere else (move it).
