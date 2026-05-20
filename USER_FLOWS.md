# User flows

Categorized so we can audit them. Any new feature should slot into an existing flow or have a clear reason to add a new one.

---

## Primary

The flows the product exists for. If any of these break, the product fails.

### 1. Panic-to-phew arc (the origin story)

The catastrophizer arrives convinced it's worst-case, walks through triage, and lands on a comparison that defuses the panic.

```
Home → /triage/where → /triage/count → /triage/wings → /results → /bug/[id]
```

- Entry: ad click, direct link, or organic search
- Exit: closes the tab, reassured. Doesn't call anyone.
- Success signal: time on `/bug/[id]` long enough to read content

### 2. High-confidence direct path (post-redesign)

When triage answers point overwhelmingly at one bug, skip Results entirely.

```
Home → /triage/where → /triage/count → /triage/wings → /bug/[id]
```

- Trigger: ranker confidence high (score gap large between #1 and #2)
- Routing logic in `Triage.submit`
- BugDetail page does the panic-defusing work via its content (lead with reassurance for relief-cousin bugs)

### 3. Comparison-choice path (post-redesign)

Two close candidates — Results becomes a tie-breaker, not a list.

```
Home → /triage/where → /triage/count → /triage/wings → /results (as "which one are you seeing?") → /bug/[id]
```

- Trigger: top 2 candidates score similarly
- Headline shifts from passive ("could be one of these") to active ("which one are you seeing?")

---

## Secondary

Flows that support the primary cases but aren't the headline reason the product exists.

### 4. Urgent path → call a pro

High-confidence + `urgent: true` (only the 2 termite bugs).

```
Home → /triage → /bug/[termite-id] → (footer CTA) → /inspectors → tel: link
```

- BugDetail's persistent footer CTA fires for `urgent` bugs
- No new screen — the page itself signals urgency through content + footer

### 5. "None of these" escape

The user disagrees with the candidates and asks for a human.

```
Home → /triage → /results → "It's none of these" → /inspectors
```

- Lives at the bottom of the Results list
- Always available as a back-out — important for honesty

### 6. About / origin story read

Lower-priority entry. Mostly clicked from the triage footer.

```
(any triage page) → footer "About" → /about
```

- Cold visitors who want to know what the app is before triaging
- Should not require triage history to make sense

---

## Edge cases

Flows we handle but don't actively design for. Don't break them; don't optimize them.

### 7. Direct deep link to a bug

Someone shares `youbuggin.app/bug/carpenter-ants` in a text.

```
(deep link) → /bug/[id]
```

- No triage history — page must work standalone
- BugDetail must not assume a referrer

### 8. Browser back during triage

User mid-triage hits the system back button.

```
/triage/wings → (back) → /triage/count → (back) → /triage/where
```

- React Router sub-routes preserve state in the Zustand store
- Each step independently editable

### 9. Refresh mid-triage

User reloads the page in the middle of triage.

```
/triage/wings (refresh) → state lost → redirect to /triage/where
```

- Zustand store is in-memory, no persistence (intentional — we're not tracking sessions)
- Acceptable: panic users don't refresh; this isn't a hot path

### 10. No clean match

Ranker returns zero bugs above the threshold.

```
/triage → /results (empty state: "Nothing's a clean match") → /inspectors
```

- Honest fallback: tells the user we couldn't help and points to pros
- Should be rare with the post-redesign hard-filter wings logic

### 11. Link preview / OG render

A link shared in iMessage, Slack, Twitter, etc.

```
(messaging app) → OG image + title preview → click → /
```

- Driven by `index.html` meta tags + `/og-image.png` (not yet created)
- Independent of triage state

---

## Anti-flows (things we deliberately don't build)

- Account creation / login — no friction
- Photo upload + AI ID — deferred to paid tier
- Save / favorite / history — panic moment, not a journal
- Chat / freeform input — observational triage only, not categorical questions
- Push notifications / email — one-and-done interaction model
