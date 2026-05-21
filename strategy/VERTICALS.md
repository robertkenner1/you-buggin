# Verticals

A living list of other moments that fit the same niche pattern as you buggin? Each one is a candidate for the same template.

---

## Brand strategy: one brand, many verticals

**"You buggin?" is a double entendre.** Old NYC slang meaning *"are you tripping / freaking out / panicking?"* The brand is about the *emotional state* (the panic moment), not the subject (insects). That's why it works across the platform.

A homeowner who sees a leak and thinks "burst pipe" is buggin'. A parent who pulled a tick off their kid is buggin'. A pet owner whose dog ate something is buggin'. Every vertical in this doc fits under the same brand because every vertical IS a panic moment.

**Risk to manage:** the bug-meaning can pigeonhole the tool to insects only. Marketing and visual design need to subtly emphasize the panic-meaning (the "are you trippin'?" reading) as the platform expands. Or lean into the double meaning explicitly — "you buggin? about [verticals]" framing on the entry screen.

**Architecture implication:** each vertical lives as a URL slug under the same domain, with its own triage corpus and content but the same shell:
- youbuggin.app/bugs — current
- youbuggin.app/mold — future
- youbuggin.app/ticks — future
- youbuggin.app/leaks — future

Ads and SEO target each vertical's URL directly. Users coming in contextually deep-link to the right path. No vertical picker needed at the root for users with a known concern; the root can either show all verticals as cards (for cold visitors) or default to the most common one (probably bugs).

No sub-brand names needed. No "you moldin'?" or "you ticked?" The parent brand carries every vertical because it's about how the user feels, not what they're looking at.

---

## The template pattern

A vertical fits this platform if all six are true:

1. **Contextual moment**: the user encounters something *right now* (just saw it, just happened) and reaches for their phone in that moment.
2. **Panic gradient**: the user has a worst-case fear locked in their head (termites, mold, Lyme) and needs honest triage to either calm or confirm.
3. **Observational triage**: they can describe what they're seeing but cannot identify it. The product asks 2-4 questions a panicked person can answer without expertise.
4. **Authoritative sources exist**: there's a Penn State Extension equivalent — a credentialed body publishing free, source-able content. We translate it into the expert voice, we don't write it.
5. **Local escalation path**: there are real local pros to call when DIY isn't enough. Phone-tap-to-call beats forms.
6. **Demand frequency**: the moment recurs often enough to support a platform. A vertical that fires once per lifetime per user can't compound. Bugs fire weekly in summer; leaks fire seasonally; snakes fire... maybe never.

If any one of these is missing, it's not the same product.

---

## High-confidence candidates

### 1. Tick ID

**The moment:** the user just pulled a tick off themselves, their kid, or their dog. Is this the one that gives you Lyme?

**Why it fits:** all six. Tick season in NY/CT is March through October and most households deal with at least one tick per season. Hard worst-case (Lyme, anaplasmosis, babesiosis). Observational triage is good: size, engorgement, body color, where on the body. CDC and university extension have authoritative content. Tick testing services exist as a clean escalation (UMass TickReport, others).

**Sources:** CDC tick page, Cornell + Penn State tick guides, state health departments.

**Escalation:** mail-in tick testing services (UMass TickReport, etc.), urgent care or family doctor for prophylactic antibiotic decisions.

**Risks:** medical liability is real. The "should I take doxycycline?" question shouldn't be answered by an app. Tight escalation to a real doctor.

**Brand fit:** strong. "You buggin?" carries the panic state perfectly. Voice translates well: most tick bites don't transmit disease, but we route the worry to the right test or doctor.

**Frequency:** very high seasonally. This is the highest-frequency vertical on the list after bugs.

---

### 2. Mold ID

**The moment:** the user just found a stain in their bathroom, basement, or wall and immediately worried "is this black mold?"

**Why it fits:** all six. Recurring concern (after every leak, in older homes, in damp seasons). Strong worst-case (toxic black mold panic). Observational triage works (color, surface, smell, room). CDC and EPA have content. Local mold remediation pros exist.

**Sources:** CDC mold pages, EPA mold pages, regional health departments.

**Escalation:** licensed mold remediation companies (Google Places API).

**Risks:** medical liability higher than bugs. Black mold panic is real; have to be careful not to over-reassure ("probably just mildew") and miss a real toxic case. Disclaimers need to be tighter.

**Brand fit:** very close. Same panic energy.

**Frequency:** medium-high. Most homeowners hit a mold concern every couple of years; older homes more often.

---

### 3. Lawn problem ID

**The moment:** the user is standing in their yard staring at a yellow patch, brown circle, or weird fungus and wondering what's killing the grass.

**Why it fits:** all six. Recurring during growing season (April-October). Soft panic gradient (mostly expense / appearance, not health), but the catastrophizer-equivalent is "is my whole lawn dying?" Observational triage works (color, pattern, weather context, location). Cornell Cooperative Extension and turfgrass departments have content. Local lawn care companies are abundant.

**Sources:** Cornell Cooperative Extension, university turfgrass programs.

**Escalation:** local lawn care companies, master gardener programs.

**Risks:** lower stakes than bugs/mold. Less catastrophizer energy, which means panic-defusing isn't as strong a brand fit.

**Brand fit:** medium. Same architecture but voice softens.

**Frequency:** high seasonally, basically zero in winter.

---

### 4. Leak / water source ID

**The moment:** the user just saw water somewhere it shouldn't be (ceiling stain, puddle, drip). Where's it coming from?

**Why it fits:** all six. Strong worst-case (burst pipe, structural rot, mold). Observational triage (where, color of water, when noticed, smell). Plumbing trade content is plentiful, though no single authoritative body. Plumbers are local and phone-tap-friendly.

**Sources:** This Old House, plumbing trade associations, home inspector content.

**Escalation:** local licensed plumbers.

**Risks:** less authoritative single source than PSU Extension. Have to triangulate from multiple sources or partner with a plumbing association.

**Brand fit:** strong. The "you buggin?" panic carries.

**Frequency:** medium. Every homeowner deals with leaks a few times in their tenure, more often in older homes.

---

### 5. Mystery sound in walls / attic

**The moment:** the user just heard scratching, scurrying, or thumping in their walls or attic. What's living up there?

**Why it fits:** all six. Recurring seasonally (squirrels in spring/fall, mice in winter). Worst-case (raccoons, bats, rats). Observational triage (when heard, what part of house, what kind of sound). State wildlife agencies have content. Wildlife removal is a phone-call business.

**Sources:** state DEC (NY), state DEEP (CT), Humane Society, USDA wildlife.

**Escalation:** licensed wildlife removal companies.

**Risks:** sound description is harder than visual description. May need audio recording as a future feature.

**Brand fit:** strong.

**Frequency:** medium. Seasonal spikes.

---

### 6. Bug bite / sting ID

**The moment:** the user just got bitten or stung. By what? Should they worry?

**Why it fits:** all six. Very high frequency in summer. Strong worst-case (brown recluse, Lyme via tick). Observational triage on the bite mark itself plus situation. CDC and state health departments publish bite content. Urgent care + dermatologists for escalation.

**Sources:** CDC, state health departments, regional health societies.

**Escalation:** urgent care, family doctor, dermatologist.

**Risks:** medical advice liability.

**Brand fit:** could be a wing of the bugs vertical itself rather than a separate path. Same audience, same brand, related corpus.

**Frequency:** very high in summer.

---

## Medium-confidence candidates

### 7. Plant / weed / poison ivy ID

**The moment:** "Did I just walk through poison ivy?" or "What's this plant growing in my yard?"

**Why it fits:** five of six. Frequency is seasonal but recurring (peak May-September). Poison ivy is the strongest panic case; the rest is general yard curiosity. Strong sources (USDA PLANTS, Cornell extension). Local arborists exist.

**Risks:** photo-ID apps (Seek, iNaturalist, PictureThis) already dominate this category. Competing with mature tools.

**Brand fit:** medium. Less panic energy outside of poison ivy.

---

### 8. Pet ingestion / pet emergency

**The moment:** "My dog ate X. Is X toxic?"

**Why it fits:** five of six. Frequency is medium (every pet parent hits this a few times). Strong panic. ASPCA Animal Poison Control already exists as a phone-call backstop, so we'd be more of a fast-lookup tool with an "call ASPCA / your vet" escalation.

**Risks:** medical liability is very high. The wrong answer kills pets. Probably needs to lean heavily on "call your vet first" rather than DIY.

**Brand fit:** the panic-defusing voice has to flip for actual emergencies. Tone calibration is harder.

---

## Lower-confidence (probably skip)

### 9. Snake ID
Originally rated high; fails on **frequency** in our 4-county service area. Most homeowners never see a snake at home. Photo-ID apps (Seek, iNaturalist, herp Facebook groups) already serve the rare cases well.

### 10. Tree health / pest
Slow-burn, not contextual. Often a multi-day decision, not a phone-in-hand moment. Fails criterion 1.

### 11. Mushroom / foraging ID
Strong worst-case (poison) but USDA content is thin and photo-ID apps already win. Low frequency for non-foragers.

### 12. Car warning light ID
Contextual yes, but panic gradient too narrow (people learn to ignore them) and the "call a mechanic" escalation feels less local.

### 13. Electrical issue ID
Real panic (fire risk) but most users will and should call an electrician immediately. Triage adds little value.

---

## How to evaluate a new vertical (checklist)

Before building, run through these. 5 of 6 yes = candidate. Less = niche doesn't fit.

- [ ] Is there a specific contextual moment? (not a research session)
- [ ] Does the user fear a worst case?
- [ ] Can a panicked, untrained person answer 2-4 observational questions?
- [ ] Is there a single authoritative source body (or two) we can cite?
- [ ] Are there enough local pros in our 4-county service area to support a curated list?
- [ ] **Does the moment recur often enough? Weekly is great. Seasonal is fine. Once-per-lifetime is not.**

---

## What the platform reuses across verticals

Same architecture and code patterns:
- Triage screen with N observational questions
- Ranker with hard filter + confidence routing
- Results page with 2-3 candidates and pair comparison clusters
- Detail page with photo + plain English content sourced from authoritative bodies
- Local pro list shuffled by county, phone-tap-to-call
- Vercel Analytics with conversion events on the call CTA

What changes per vertical:
- The corpus (mold types, tick species, lawn diseases, etc.)
- The triage questions
- The sources cited
- The local pros (mold remediation vs plumbers vs lawn care)
- The brand voice (the expert adapts: the mold guy vs the plumber vs the turf guy)

---

## Priority order (if we were to build the next one)

Based on frequency × panic × brand fit:

1. **Tick ID** — highest frequency, strong panic, clean medical liability with TickReport-style escalation
2. **Mold ID** — very strong brand fit, recurring concern, established remediation industry
3. **Bug bite ID** — could be an extension of you buggin? rather than a new domain
4. **Leak ID** — recurring, panic-strong, plumber industry
5. **Lawn problem ID** — seasonal but high-volume during growing season
