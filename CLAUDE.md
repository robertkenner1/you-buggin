# you buggin?

A panic-moment bug ID tool for homeowners in Westchester, Rockland, Putnam (NY) and Fairfield County (CT). Live at **https://youbuggin.app**.

Built for the catastrophizer: the person who sees a bug, immediately worst-cases ("termites!"), and needs a calm honest second opinion before they panic-call an exterminator. The product structure is the panic-to-phew arc: 3 observational triage questions → 2-3 candidate bugs → bug detail → optional inspector call.

---

## Read these before writing code or copy

| Doc | What's in it |
|---|---|
| [PERSONAS.md](./PERSONAS.md) | The expert voice (the exterminator who picks up the phone) and the user personas (primary: the catastrophizer). Check every line of user-facing copy against these. |
| [USER_FLOWS.md](./USER_FLOWS.md) | Primary, secondary, and edge user flows. Categorized so we can keep flows tight. Any new feature should slot into an existing flow or have a clear reason to add a new one. |
| [TESTING.md](./TESTING.md) | How to walk the triage matrix. Direct-URL shortcuts to skip clicks. Confidence-routing test cases. |

---

## Core design principles (non-negotiable)

These come out of lived feedback, not theory. Don't drift from them without a strong reason.

1. **Reduce friction.** Every choice gets the question: does this reduce friction or add it? The catastrophizer is on their phone, panicked, will not read 500 words.

2. **Observational, not categorical.** Triage asks what the user can *see* (where, how many, wings). Never asks them to categorize ("what kind of bug?") because they don't know.

3. **Alternatives, not answers.** Results shows 2-3 candidates by design. Putting the worst-case fear next to the calm reality on the same page is what defuses panic. Single-result output is rare and only fires when confidence is overwhelming.

4. **Honest sourcing.** Every bug claim is grounded in Penn State Extension (primary) or Cornell NYSIPM (backstop). No AI-written advice. The expert voice translates the source content into plain English.

5. **Icons are affordances, not decoration.** Only use icons when they signal a tap action with no other cue (phone glyph on inspector card). No decorative icons in headers or section labels.

6. **Image treatment.** Silhouettes on Results (browsing). Photo + silhouette on BugDetail (confirming). Deliberate split between "scan many" and "confirm one."

7. **Relief is ambient, not a tag.** The relief case (it's carpenter ants, not termites) is delivered by structure, content, and tone of each page. Not by a `severity: 'relief'` data field. Severity is `urgent: boolean` only.

8. **No em dashes.** Em dashes read as AI-written. Use periods, commas, ands, or parentheses. (Hyphens in compound words are fine.)

9. **Voice: simple but mature.** Plain English without dumbing down. The expert voice from PERSONAS.md is the model.

10. **Hyperlocal.** Service area is Westchester, Rockland, Putnam (NY), Fairfield County (CT). Geo-target ads. International traffic in analytics is noise.

---

## Tech stack (briefly)

Vite + React 18 + TypeScript SPA. Tailwind CSS with custom tokens (canvas, ink, hairline, muted, accent). SuperSans font (4 weights: Light/Regular/Medium/SemiBold). Zustand for triage state. React Router v6 with sub-routes. Framer Motion for transitions. Phosphor Icons (affordances only). Vercel hosting + Analytics. Penn State Extension + Cornell NYSIPM as content sources.

Key files:
- `src/data/bugs.ts` — the 17-bug corpus
- `src/data/inspectors.ts` — 15 hand-curated local pros
- `src/lib/ranking.ts` — the triage scoring algorithm (hard wings filter + confidence routing)
- `src/screens/` — the page components (Triage, Results, BugDetail, Inspectors, About)
- `src/components/PageHeader.tsx` — global persistent header with context-based title
- `src/components/CardStack.tsx` — standardized card list spacing

---

## What NOT to do

- Add new pages unless absolutely necessary. Bobby's rule: use what we have.
- Write generic SEO blog content. The product itself is the SEO play; bug pages are landing pages.
- Pay for Google Ads while the product is free and has no monetization. SEO + organic + Reddit > ads.
- Mock the catastrophizer's panic. Take it seriously. Their fear is the reason this product exists.
- Use em dashes (—).
- Use Latin names in body copy.
- Add hedge words ("may," "could," "might") when the answer is clear.
- Sell. Don't recommend a pro unless they actually need one.
- Build features for "the not-yet-bugging." Tourists are not the audience.

---

## Status as of last update

- Domain live: youbuggin.app (registered at GoDaddy, hosted Vercel)
- 17 bugs sourced from PSU/Cornell, all re-tagged for hard wings filter + confidence routing
- 15 inspectors hand-verified from Google Places, trimmed to 1-per-county per visit (4 shown)
- Vercel Analytics + Speed Insights live (with `call_clicked` custom event)
- SEO meta updated to name worst case without denying it ("You buggin? Could be termites, could be ants.")
- USER_FLOWS.md + PERSONAS.md + TESTING.md documented

Open / next:
- Rewrite all 17 bug pages in expert voice (in progress)
- OG image (1200×630 PNG) for link previews
- Phone-verify inspector numbers
- Request re-indexing on Search Console after meta updates
- Category-named Results headlines ("Could be termites or carpenter ants?")
