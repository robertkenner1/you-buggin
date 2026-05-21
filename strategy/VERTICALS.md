# Verticals

A living list of other moments that fit the same niche pattern as you buggin? Each one is a candidate for the same template.

---

## Brand strategy: branded house

**"You buggin?" is a double entendre.** Old NYC slang meaning *"are you tripping / freaking out / panicking?"* The brand is about the *emotional state* (the panic moment), not the subject (insects). That's why it works across the platform.

A homeowner who sees a leak and thinks "burst pipe" is buggin'. A homeowner who smells something rotting in the wall is buggin'. A homeowner who finds mold in the basement is buggin'. Every vertical fits under the same brand because every vertical IS a panic moment.

### The architecture: branded house, not house of brands

One master brand. Multiple verticals living underneath it.

```
you buggin?  (master brand)
├── /bugs   ──  17-bug corpus, exterminators        (live)
├── /mold   ──  mold types, remediation pros        (next)
├── /leaks  ──  water source ID, plumbers
├── /sounds ──  mystery wall/attic sounds, wildlife
└── /smells ──  mystery home odors, gas/plumbing
```

Each vertical lives at its own URL slug under the same domain. Each has its own corpus, its own triage questions, its own escalation list, and its own ads/SEO strategy. But they all share:

- The **shell** (header, footer, transitions, PageHeader pattern)
- The **expert voice** (PERSONAS.md adapts per domain, but stays plain English, no em dashes, no jargon)
- The **design system** (canvas/ink/hairline colors, SuperSans, card patterns, CardStack spacing)
- The **architecture** (observational triage → ranked candidates → detail → local escalation)
- The **brand promise** ("you buggin?" → "let's figure out if you should be")

No sub-brand names. No "you moldin'?" or "you leakin'?" The parent brand carries every vertical because it's about how the user *feels*, not what they're *looking at*.

### Entry pathways

How users reach the right vertical:

- **Deep link from ads/search** — direct to `youbuggin.app/mold` or `/leaks`. Most users. Most efficient.
- **Cold visit to root** — `youbuggin.app/` shows a picker: "What are you buggin about?" with vertical cards. Adds one tap but only for users who don't already know what they're worried about.
- **In-product cross-promotion** — sparingly. If a user finishes the bugs triage and the answer involves moisture (carpenter ants, silverfish, drain flies), a small "Worried about mold too?" link below the result. Only when the connection is obvious. Never as an upsell.

### Risks to manage

1. **Pigeonholing into bugs.** The bug-meaning of the brand can lock the platform into insects. Mitigate by leaning the visual identity and marketing into the panic-state reading explicitly.

2. **Dilution.** Too many verticals at once spreads attention thin. Ship one new vertical at a time. Run it for 3+ months to see if it pulls its weight before starting the next.

3. **Voice drift across verticals.** The expert in PERSONAS.md is specifically "the exterminator who picks up the phone." For mold, voice shifts to "the remediation guy." For leaks, "the plumber." Voice rules (no em dashes, no jargon, plain English) stay constant; persona adapts.

4. **Cross-vertical UX inconsistency.** Same triage screen, same ranker, same result pattern across every vertical. Differences should be invisible to a user moving between them.

### Why branded house, not house of brands

Branded house lets each new vertical inherit the existing audience, the trust we've built (sourced content, real local pros, no upsell), the infrastructure, and the voice and design system. The catastrophizer who used `you buggin?/bugs` once and got a calm honest answer is the SAME person who'll search for mold panic later. We don't need to re-acquire them under a new name.

---

## Categorizing by sense

Another way to think about the verticals: by which sense the user used to encounter the threat. Useful as an internal framework when designing new triage flows, even if the user-facing URLs stay per-vertical.

| Sense | Verticals | Triage character |
|---|---|---|
| **See** | bugs, mold, leaks | User can describe visuals: color, shape, location, count. Easiest to triage. Often can attempt a photo. |
| **Hear** | wall sounds (wildlife) | Invisible. User describes the sound itself: scratching, scurrying, thumping. Harder to triage; some users can record a clip. |
| **Smell** | mystery smells (gas, sewage, dead animal, mold) | Invisible. User describes the smell: sour, sweet, rotten, chemical, gassy. Hardest to triage; relies entirely on language. |

**The invisible verticals (smell, sound) have two properties that matter:**

1. **They are scarier.** Not being able to see what's threatening you is more anxiety-inducing than seeing it. A weird smell in the basement is worse than a weird bug in the basement, because the bug can be identified and dismissed but the smell could be anything from "the kid spilled juice" to "there's a gas leak." High panic gradient.

2. **They are harder to triage observationally.** No photo to compare. The user has to translate a non-visual sensation into language ("it smells sweet, kind of fermented") which is imprecise. Triage questions need to be more inventive and use comparison anchors familiar to most people (sweet like maple syrup, sour like vinegar, rotten like compost, chemical like nail polish remover).

This framework also helps when evaluating new verticals: if a candidate fits a sense we don't have yet, it's a natural extension. If it duplicates an existing sense, it has to fight for the slot.

---

## The template pattern

A vertical fits this platform if all seven are true:

1. **Contextual moment**: the user encounters something *right now* (just saw it, just heard it, just smelled it) and reaches for their phone in that moment.
2. **Real-stakes panic**: the worst-case fear is about something that could compromise family safety or home integrity. Termites eating the house. Toxic mold in the walls. Burst pipe behind drywall. A gas leak. Not aesthetic concerns, not curiosities. The fear is justified, which is what makes triage valuable.
3. **Observational triage**: they can describe what they're seeing (or hearing or smelling) but cannot identify it. The product asks 2-4 questions a panicked person can answer without expertise.
4. **Authoritative sources exist**: there's a Penn State Extension equivalent — a credentialed body publishing free, source-able content. We translate it into the expert voice, we don't write it.
5. **Buffer between panic and action**: the product helps the user decide whether to act (and how). The honest answer ranges from "you don't need to call anyone" to "call today." If every case ends in "call a pro," it's a directory. If no case does, it's just reassurance. The value is in the middle ground where the user can't easily decide alone.
6. **Demand frequency**: the moment recurs often enough to support a platform. A vertical that fires once per lifetime per user can't compound.
7. **Exploitation risk**: because the stakes are real (criterion #2), there's an industry with a documented pattern of upselling or scaring panicked consumers into work they don't need. Pest control, mold remediation, plumbing all qualify. Lawn care doesn't, because there's no safety stake to exploit. **This is what gives the platform moral weight: it protects the catastrophizer from being fleeced in a moment of fear.**

If any one of these is missing, it's not the same product.

---

## High-confidence candidates

### 1. Mold ID

**The moment:** the user just found a stain in their bathroom, basement, or wall and immediately worried "is this black mold?"

**Why it fits:** all seven. The honest answer ranges from "wipe it with bleach" to "call a remediator." Recurring concern. Strong worst-case (toxic black mold panic). Observational triage works (color, surface, smell, room). CDC and EPA have content. Local mold remediation pros exist. **The mold remediation industry is notorious for upselling panicked homeowners on multi-thousand-dollar jobs that needed a $5 spray bottle.** Strong exploitation-protection role.

**Sources:** CDC mold pages, EPA mold pages, regional health departments.

**Escalation:** licensed mold remediation companies (Google Places API).

**Brand fit:** very close. Same panic energy.

**Frequency:** medium-high. Most homeowners hit a mold concern every couple of years; older homes more often.

---

### 2. Leak / water source ID

**The moment:** the user just saw water somewhere it shouldn't be (ceiling stain, puddle, drip). Where's it coming from?

**Why it fits:** all seven. Range of honest answers from "tighten the fitting yourself" to "shut the water main and call now." Strong worst-case (burst pipe, structural rot, mold). Observational triage (where, color of water, when noticed, smell). Plumbing trade content is plentiful. **Plumbers can panic-sell homeowners on re-pipes and major repairs when a washer would do.** Real protection role.

**Sources:** This Old House, plumbing trade associations, home inspector content.

**Escalation:** local licensed plumbers.

**Brand fit:** strong. The panic carries.

**Frequency:** medium. Every homeowner deals with leaks a few times in their tenure.

---

### 3. Mystery sound in walls / attic

**The moment:** the user just heard scratching, scurrying, or thumping in their walls or attic. What's living up there?

**Why it fits:** all seven. Recurring seasonally (squirrels in spring/fall, mice in winter, raccoons year-round in some homes). Worst-case (rabies-carrying raccoons, bat colonies, structural damage from chewing). Observational triage (when heard, what part of house, what kind of sound, time of day). State wildlife agencies have content. **Wildlife removal is one of the most notorious exploitation industries — quotes of $2000+ for raccoon eviction that can be done with a one-way door for $40.**

**Sources:** state DEC (NY), state DEEP (CT), Humane Society, USDA wildlife.

**Escalation:** licensed wildlife removal companies.

**Brand fit:** strong.

**Frequency:** medium. Seasonal spikes.

---

### 4. Mystery smell ID

**The moment:** the user just smelled something off in their home and can't find the source. Gas? Sewage? Dead animal? Mold?

**Why it fits:** all seven, including real-stakes safety. Gas leaks are a literal emergency. Sewage smells indicate plumbing failure. Dead-animal-in-walls means wildlife was inside. Mold smells point at hidden growth. Observational triage works (where, what kind of smell, when started, sweet/sour/rotten/chemical). Sources from gas utilities, plumbing trades, health departments. **Strong exploitation gradient: HVAC companies, plumbers, and "indoor air quality" services all upsell heavily on mystery smells.** Honest triage protects users from $1000+ inspections they don't need.

**Sources:** local utility company gas leak pages, EPA indoor air, state health departments, plumbing associations.

**Escalation:** for suspected gas: call utility's emergency line immediately (NOT a service pro). For sewage/plumbing: plumber. For dead animal: wildlife removal. For chemical: HVAC pro or environmental services.

**Risks:** safety triage matters most. Suspected gas leak should always escalate to the utility, no exceptions. Need a hard fast-track for that branch.

**Brand fit:** strong. Same panic energy.

**Frequency:** medium. Most homeowners hit a few mystery-smell moments per year.

---

### 5. Bug bite / sting ID

**The moment:** the user just got bitten or stung. By what? Should they worry?

**Why it fits:** five of seven. Very high frequency in summer. Strong worst-case (brown recluse, Lyme via tick). Observational triage on the bite mark itself plus situation. CDC and state health departments publish bite content. **Exploitation angle is weaker here** — doctors don't typically upsell the way exterminators do, and urgent care visits are real even when minor. Less protection role.

**Sources:** CDC, state health departments, regional health societies.

**Escalation:** urgent care, family doctor, dermatologist.

**Brand fit:** could be a wing of the bugs vertical itself rather than a separate path. Same audience, same brand, related corpus.

**Frequency:** very high in summer.

---

## Medium-confidence candidates

### 6. Tick ID

**The moment:** the user just pulled a tick off themselves, their kid, or their dog. Is this the one that gives you Lyme?

**Why it fits:** six of seven. Tick season in NY/CT is March through October. Hard worst-case (Lyme, anaplasmosis, babesiosis). Observational triage works (size, engorgement, body color, where on the body). CDC and university extension have authoritative content. **Exploitation angle is weak** — the escalation is mail-in tick testing or a doctor visit, neither of which is a local service pro vulnerable to panic-upselling. Less moral-weight role than mold or leaks.

**Sources:** CDC tick page, Cornell + Penn State tick guides.

**Escalation:** mail-in tick testing (UMass TickReport), doctor for prophylactic decisions.

**Brand fit:** strong on panic state, weaker on protection-from-exploitation.

**Frequency:** very high seasonally.

---

### 7. Pet ingestion / pet emergency

**The moment:** "My dog ate X. Is X toxic?"

**Why it fits:** six of seven. Pet poison control hotlines exist; emergency vets exist. Real safety stake. Limited exploitation industry, though emergency vet bills are real. Best framed as fast-lookup with a clear "call your vet first" CTA.

**Risks:** medical liability is very high. The wrong answer kills pets.

**Brand fit:** the panic-defusing voice has to flip for actual emergencies.

---

## Lower-confidence (probably skip)

### 8. Lawn problem ID
**Fails real-stakes panic** (criterion #2). A yellow patch in the lawn isn't a family safety or home integrity threat. It's an aesthetic and expense concern. The catastrophizer-defending product doesn't apply because there's nothing exploitative about lawn care; the user isn't being fleeced in fear. Save for a different product, maybe.

### 9. Plant / weed / poison ivy ID
Poison ivy has a real safety stake but mature photo-ID apps already win the category. Other plant ID is curiosity, not panic.

### 10. Snake ID
Fails on **frequency** in our 4-county service area. Most homeowners never see a snake at home. Photo-ID apps already serve the rare cases.

### 11. Tree health / pest
Slow-burn, not contextual. Often a multi-day decision, not a phone-in-hand moment. Fails criterion #1.

### 12. Mushroom / foraging ID
Strong worst-case (poison) but USDA content is thin and photo-ID apps already win. Low frequency for non-foragers.

### 13. Car warning light ID
Contextual yes, but panic gradient too narrow (people learn to ignore them) and the "call a mechanic" escalation feels less local.

### 14. Electrical issue ID
Real panic (fire risk) but most users will and should call an electrician immediately. Triage adds little value.

---

## How to evaluate a new vertical (checklist)

Before building, run through these. 6 of 7 yes = candidate. Less = niche doesn't fit.

- [ ] Is there a specific contextual moment? (not a research session)
- [ ] Are the stakes about family safety or home integrity? (not aesthetic or curiosity)
- [ ] Can a panicked, untrained person answer 2-4 observational questions?
- [ ] Is there a single authoritative source body (or two) we can cite?
- [ ] Is there a real DIY-or-pro decision the product helps with?
- [ ] Does the moment recur often enough? (weekly = great, seasonal = fine, once-per-lifetime = no)
- [ ] Is there an industry with a documented exploitation pattern the product protects against?

---

## What the platform reuses across verticals

Same architecture and code patterns:
- Triage screen with N observational questions
- Ranker with hard filter + confidence routing
- Results page with 2-3 candidates and pair comparison clusters
- Detail page with photo (or other media) + plain English content sourced from authoritative bodies
- Local pro list shuffled by county, phone-tap-to-call
- Vercel Analytics with conversion events on the call CTA

What changes per vertical:
- The corpus (mold types, leak signatures, sound patterns, smell signatures, etc.)
- The triage questions
- The sources cited
- The local pros (mold remediation vs plumbers vs wildlife removal vs utility companies)
- The brand voice (the expert adapts: mold guy vs plumber vs wildlife guy vs gas guy)

---

## Priority order (if we were to build the next one)

Based on the seven criteria, weighted toward exploitation risk and real-stakes panic:

1. **Mold ID** — strongest exploitation protection role, recurring concern, established remediation industry
2. **Leak ID** — high stakes, real plumber-upsell problem, recurring
3. **Mystery sounds (wildlife)** — notorious exploitation industry, real damage and disease risk
4. **Mystery smells** — emergency-class for gas leaks, real protection role across the smell spectrum
5. **Bug bite ID** — could be a wing of you buggin?/bugs rather than a separate path
