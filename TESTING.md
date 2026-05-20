# Testing the triage redesign

Dev server: `http://localhost:5179/` (or whichever port `npm run dev` picks).

Two test methods:
- **Click-through**: start at `/triage/where`. Tests the full UX including routing.
- **Direct URL**: jump to `/results?where=X&count=Y&wings=Z`. Skips triage. Tests ranker output only.

URL value reference:
- `where`: `kitchen | bathroom | basement | attic | living-area | exterior`
- `count`: `few | group | trail`
- `wings`: `live-wings | shed-wings | no-wings | unsure`

---

## Routing tests (require click-through)

These verify the high-confidence skip-to-BugDetail path. Direct URLs won't trigger routing.

- [ ] **Bedroom or living room → just one or two → no wings**
  Should land on `/bug/cellar-spiders` (or `/bug/carpenter-ants`, or `/bug/wolf-spiders`) directly, OR Results if all three score equally.

- [ ] **Basement → just one or two → shed wings**
  Should land on `/results` with termite-swarmers + flying-ants as the paired comparison ("Which one are you seeing?").

- [ ] **Kitchen → a few scattered → live wings**
  Should land on `/results` with fruit-flies + drain-flies (tiny-flies focus cluster).

---

## Ranker tests (use direct URLs)

Open each link and check the output makes sense.

- [ ] [Living area, few, no wings](http://localhost:5179/results?where=living-area&count=few&wings=no-wings) — should show spiders / carpenter ants
- [ ] [Bathroom, few, no wings](http://localhost:5179/results?where=bathroom&count=few&wings=no-wings) — silverfish / centipedes / earwigs
- [ ] [Attic, scattered, live wings](http://localhost:5179/results?where=attic&count=group&wings=live-wings) — overwintering bugs (stink, boxelder, cluster)
- [ ] [Exterior, scattered, live wings](http://localhost:5179/results?where=exterior&count=group&wings=live-wings) — stink bugs / boxelder bugs
- [ ] [Kitchen, trail, no wings](http://localhost:5179/results?where=kitchen&count=trail&wings=no-wings) — tiny ants cluster
- [ ] [Basement, few, no wings](http://localhost:5179/results?where=basement&count=few&wings=no-wings) — wood-pests cluster (termites + carpenter ants)
- [ ] [Any room, any count, shed wings](http://localhost:5179/results?where=kitchen&count=few&wings=shed-wings) — should ALWAYS show swarmers cluster regardless of where/count

---

## Wings hard-filter tests (critical — this was the bug we just fixed)

Before this redesign, picking "no wings" still sometimes surfaced winged bugs. Verify the filter works:

- [ ] [Kitchen, scattered, no wings](http://localhost:5179/results?where=kitchen&count=group&wings=no-wings) — should NOT include pantry moths, fruit flies, drain flies (all have wings)
- [ ] [Bathroom, few, live wings](http://localhost:5179/results?where=bathroom&count=few&wings=live-wings) — should NOT include silverfish or house centipedes (wingless)
- [ ] [Attic, scattered, shed wings](http://localhost:5179/results?where=attic&count=group&wings=shed-wings) — should ONLY show termite-swarmers + flying-ants

---

## BugDetail tests (urgent footer visibility)

The `urgent` boolean drives nothing extra yet (that's automatic via the footer). The `recommendPro` boolean drives the persistent "Call an exterminator" CTA at the bottom.

- [ ] [Termite swarmers](http://localhost:5179/bug/termite-swarmers) — urgent + recommendPro both true → footer CTA visible
- [ ] [Carpenter ants](http://localhost:5179/bug/carpenter-ants) — recommendPro true → footer CTA visible
- [ ] [House centipedes](http://localhost:5179/bug/house-centipedes) — recommendPro false → NO footer CTA
- [ ] [Cellar spiders](http://localhost:5179/bug/cellar-spiders) — recommendPro false → NO footer CTA
- [ ] [Cluster flies](http://localhost:5179/bug/cluster-flies) — recommendPro true → footer CTA visible

---

## Edge case tests

- [ ] [No params (deep link)](http://localhost:5179/results) — Results page with nothing — should fall to empty state "Nothing's a clean match"
- [ ] [Bogus where value](http://localhost:5179/results?where=garage&count=few&wings=no-wings) — should ignore the bogus value and still produce a result
- [ ] [Browser back from /bug/X to /triage/wings](javascript:void(0)) — manual test in browser, state should still be there

---

## What I'm watching for

Things that would mean the redesign is wrong:
- A winged bug showing up when user picked "no wings" (filter broken)
- A wingless bug showing up when user picked "live wings"
- Empty state on common combinations like kitchen + scattered + no wings
- Termite-swarmers OR flying-ants NOT appearing when user picks shed-wings
- The "Which one are you seeing?" headline on a 3-bug Results page (should only show on 2-bug)
- High-confidence skip routing the user to a clearly-wrong bug
