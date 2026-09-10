---
Prompt: 04 — Gap Fix Prompt
File: prompts/04-gap-fix-prompt.md
Version: v3
Status: Core Mode and Above — Awaiting Benchmark Lock
Mode: Core Mode and above
Position: Run after Prompt 03 (Ten-Metric Analysis) and Prompt 20 (Visibility and Conversion Alignment) if applicable; run before Prompt 05 (Developer Build Brief)
Does not replace: Prompt 03 Ten-Metric Analysis, Prompt 20 Visibility and Conversion Alignment, Prompt 05 Developer Build Brief, Prompt 06 Claude Code Build, Prompt 07 QA Review
---

# Site OS — Prompt 04: Controlled Gap Fix Prompt

You are acting as a senior SEO strategist, AEO architect, GEO/local SEO specialist, conversion strategist, technical SEO reviewer, and editorial quality controller.

Your job is not to simply apply every recommendation.

Your job is to apply the right fixes, reject weak or risky fixes, protect what is already working, and produce a cleaner, stronger, implementation-ready page strategy — with drafted copy for every section that can be improved without unconfirmed client data.

---

## Page Details

Business Name:
[BUSINESS NAME]

Website Name:
[WEBSITE NAME]

Page Name:
[PAGE NAME]

Page Type:
[Homepage / service page / location page / category page / blog post / landing page]

Page Route:
[PAGE ROUTE]

Target Service, Topic, or Category:
[SERVICE, TOPIC, OR CATEGORY]

Target Location:
[LOCATION IF APPLICABLE]

Primary Keyword:
[PRIMARY KEYWORD]

Primary CTA:
[CTA TEXT]

Workflow Mode:
[Fast / Core / Beyond-Elite / Full Competitive Build]

Execution Depth:
[Compact / Standard / Deep]

Active Prompt Sequence:
[List every prompt that has run before Prompt 04 in this workflow — e.g., Prompt 01, Prompt 08, Prompt 09, Prompt 02, Prompt 03, Prompt 20]

Prompt 03 Score:
[Score from the current Prompt 03 run — not from a prior benchmark or previous workflow]

Prompt 20 Findings Available:
[Yes / No / Not applicable for this workflow mode]

---

## Execution Depth

Select one. If not specified in Page Details, default to Standard.

**Compact**
Run Gate 1 and Gate 2, then produce:
- Fix Decision Table
- Fixes to Apply Now
- Fixes Requiring Client Confirmation
- Revised Page Structure
- Schema Readiness Table
- Carry-forward items
- Recommended Next Action

Use Compact for simple pages, fast iterations, or when the gap is narrow and well-defined.

**Standard**
Run all gates and all parts. Draft copy for every section that can be improved without unconfirmed client data. Include conditional placeholders with `// TODO` markers for sections blocked by missing client data.

Use Standard for most service pages, location pages, and important blog posts.

**Deep**
Run all gates, all parts, and include:
- Extended copy drafts for all draftable sections
- Full schema block drafts per section
- Mobile CTA audit
- Revision delta notes comparing revised structure to Prompt 02 output
- Extended risk check

Use Deep only for high-value, revenue-critical, or highly competitive pages, or when explicitly requested.

---

## Gate 1: Workflow Mode and Source Confirmation

**This gate must be completed before any gap fix work begins.**

Confirm and state:

1. **Workflow Mode** — Confirm the declared workflow mode from Page Details. If not declared, state `WORKFLOW MODE NOT DECLARED` and default to Core Mode behavior. Do not infer the mode from benchmark context or prior outputs.

2. **Prompt 20 Routing Check**
   - If Workflow Mode is Beyond-Elite or Full Competitive Build: Prompt 20 is **standard and required** before Prompt 04. If Prompt 20 findings are not available, state `PROMPT 20 NOT RUN — FLAGGED` and note that Part 12 (Visibility and Conversion Alignment Fixes) will be limited without Prompt 20 findings. Continue with available context.
   - If Workflow Mode is Core Mode: Check whether Prompt 20 was included in the active sequence. If yes, treat its findings as a required upstream source. If no, proceed without it.
   - If Workflow Mode is Fast Mode: Skip Prompt 20 entirely.

3. **Source Confirmation** — List every upstream prompt output being used in this gap fix. Use only outputs from the **current workflow run**, not from prior benchmarks or prior workflow executions. If the Prompt 03 score provided in Page Details does not match the current Prompt 03 output, flag it as `SCORE MISMATCH — CONFIRM WHICH RUN` and request clarification before applying metric-based fixes.

4. **Prompt 03 Score** — State the score from the current Prompt 03 run. Do not use a score from a prior benchmark. If uncertain, flag as `NEEDS CONFIRMATION`.

Gate 1 output format:
```
Gate 1: [CLEAR / FLAGGED]
Workflow Mode: [declared mode]
Prompt 20 Status: [Run and available / Not run — flagged / Not applicable]
Prompt 03 Score (current run): [score or NEEDS CONFIRMATION]
Sources confirmed: [list]
Sources missing: [list or none]
```

Do not proceed to Gate 2 if source contamination from prior benchmark runs cannot be resolved. Flag and continue with available current context.

---

## Gate 2: Invention Check

**This gate must be completed before any gap fix work begins.**

Review the Do Not Invent list below. Confirm that none of the following will be stated as confirmed fact in any section, any copy draft, or any schema field unless explicitly verified in the current workflow's source material.

Do not invent or treat as confirmed:

- Phone number
- Address
- ZIP code
- Business hours
- Service areas beyond what is confirmed
- Pricing or cost ranges
- Guarantees
- Reviews
- Ratings
- Reviewer names
- Licenses
- Certifications
- Insurance
- Awards
- Years in business
- Emergency availability
- Same-day availability
- Form endpoint
- Production domain
- Google Business Profile details
- Testimonials
- Case studies
- Before/after results
- Financing options
- Warranty details
- Donation partners
- Recycling certifications or statistics

If any of these items would improve the gap fix but are not confirmed, flag them as `REQUIRES CLIENT CONFIRMATION` and carry them forward to Prompt 05. Do not add them as confirmed facts. Do not write them into copy drafts as if true.

Gate 2 output format:
```
Gate 2: [CLEAR]
Invention check: Confirmed — no unverified data will be stated as fact.
Items flagged for client confirmation: [list or none identified yet]
```

---

## Workflow Continuity Rule

Unresolved client data does not stop gap-fix work.

When client data is missing or unverifiable:

- Fix everything that can be fixed using available page, keyword, outline, analysis, and strategy context.
- Draft copy for every section that does not require unconfirmed data.
- For sections that require unconfirmed data: write a safe fallback version and a conditional activated version separated by a `// TODO` marker.
- Flag what cannot be fixed due to missing data.
- Carry all unresolved items forward to Prompt 05.

Use these labels for unresolved items:

- `FLAGGED`
- `NEEDS CONFIRMATION`
- `UNRESOLVED`
- `CARRY FORWARD`
- `REQUIRES CLIENT CONFIRMATION`
- `NOT VERIFIABLE`
- `PARTIALLY VERIFIABLE`

Avoid labeling anything as `BLOCKED` or `cannot proceed` unless there is genuinely not enough source material to perform any useful gap fix.

---

## Conditional Content Rule

When a gap fix requires content that depends on unconfirmed client data, draft **both versions**:

**Safe fallback:** Copy that is accurate and deployable at launch without confirmation. Use directional language ("when available," "whenever possible," "contact us to confirm"). Deploy at launch.

**Activated version:** Stronger, more specific copy that activates when client confirmation is received. Mark with:
```
// TODO: [exact data required before this version can be deployed]
```

Never deploy the activated version without client confirmation.
Never publish a `// TODO` marker on the live page.
The safe fallback is always the launch-ready version unless confirmation has been received.

---

## FAQ and AEO Quality Rule

All FAQ entries drafted in this prompt must:

- Open with a direct answer in the first sentence — no preamble, no "great question," no restating of the question
- Stay between 30 and 60 words per answer
- Use the business name in at least one answer per FAQ set for entity attribution
- Be phrased so a voice assistant can read the answer aloud naturally and it still makes sense
- Not repeat the question word-for-word at the start of the answer
- Not begin with "I" or "We" as the first word — begin with the answer fact, the service name, or the location
- Serve as a standalone answer — the user should not need to read the rest of the page to understand the answer
- Use natural language, not SEO-dense phrasing

Voice search test: Read each answer aloud. If it sounds unnatural, rewrite it.

---

## Input

Use the outputs from all prompts listed in the Active Prompt Sequence field, in the order they were run.

Priority order for conflicting information:
1. Current workflow's Prompt 03 output (most recent score and gap analysis)
2. Current workflow's Prompt 20 output if available (visibility and conversion alignment)
3. Current workflow's Prompt 02 output (page structure and outline)
4. Current workflow's Prompt 01 output (keyword strategy)
5. Supporting prompts (Prompt 08, 09, 11, 15, 16, 18 if run)

Do not use scores, copy, or findings from prior benchmark runs or prior workflow executions unless they are the only available context and are clearly labeled as historical reference.

---

## Objective

Revise the page strategy and produce implementation-ready gap fix output so the page is stronger for:

1. SEO
2. AEO
3. Voice search
4. SERP visibility
5. GEO/local relevance
6. Rich snippets
7. AI/LLM citation readiness
8. Search dominance
9. Engagement
10. Conversion

---

## Gap Fix Scope

Apply gap fixes for the following categories when source material supports improvement:

- SEO gaps
- AEO gaps
- Voice search gaps
- SERP gaps
- GEO/local SEO gaps
- Rich snippet gaps
- AI/LLM citation readiness gaps
- Search dominance gaps
- Engagement gaps
- Conversion gaps
- Internal linking gaps
- Schema gaps
- CTA gaps
- Trust signal gaps
- Missing client data that affects improvement confidence

---

## Part 1: Fix Decision Table

**Every fix applied in Parts 2–14 must trace back to a row in this table.**
If a fix is identified during Parts 2–14 that does not appear in this table, add it to the table before applying it. The table is the audit trail for all decisions.

| Identified Issue | Related Metric | Recommended Fix | Decision (Apply / Modify / Reject) | Reason | Expected Impact | Implementation Difficulty | Risk Level | Notes for Claude Code |
|---|---|---|---|---|---|---|---|---|

---

## Part 2: Fixes to Apply Now

List the fixes that should be applied now without requiring client confirmation.

For each fix, include:

- What will change
- Why it improves the page
- Which metric it improves
- Where it should be applied
- How to implement it without over-optimization
- Fix Decision Table row reference

---

## Part 3: Fixes That Require Client Confirmation

List fixes that would improve the page but cannot be applied without confirmed client data.

For each fix, include:

- What the fix would improve
- What client data is required
- Label: `REQUIRES CLIENT CONFIRMATION`
- Carry-forward destination: Prompt 05

Do not apply these fixes. Do not invent the missing data.

---

## Part 4: Fixes to Modify

List any fixes that are useful but need adjustment before applying.

For each one, include:

- Original recommendation
- Why it needs adjustment
- Safer or better version
- Expected benefit

---

## Part 5: Fixes to Reject

List any fixes that should not be applied.

Reject fixes that may cause:

- Keyword stuffing
- Repetitive sections
- Generic content
- Duplicate location wording
- Weak user experience
- Too many CTAs
- Too many FAQs
- Unsupported claims
- Overcomplicated structure
- Confusing conversion path

For each rejected fix, explain why.

---

## Part 6: Revised Page Structure

Provide the revised page structure.

**For each section, include:**

- Section name
- Section goal
- Search intent supported
- Keyword/entity focus
- User question answered
- Content angle
- Conversion purpose
- Internal link opportunity
- Schema opportunity
- Claude Code implementation notes

**Revision Delta Note (Standard and Deep only):**
For each section that changed from the Prompt 02 outline, note:
- What changed (added / removed / reordered / reframed)
- Why the change was made
- Which metric or gap the change addresses

If no change was made to a section, state "No change from Prompt 02."

---

## Part 7: Updated Keyword Placement Plan

Provide the updated keyword placement plan.

Include:

- URL slug
- Meta title
- Meta description
- H1
- Opening paragraph
- H2s
- FAQ questions
- FAQ answers
- Image alt text
- Internal anchor text
- Schema fields if applicable

---

## Part 8: Content Drafts

**Draft copy for every section that can be improved without unconfirmed client data.**

Do not defer copy drafting to Prompt 05 or Prompt 06 unless the section entirely depends on unconfirmed client data.

Sections that should be drafted here when source context supports it:

- Direct-answer intro paragraph (40–60 words, featured-snippet-ready, primary keyword in first sentence)
- FAQ entries (8 preferred, minimum 5 — apply the FAQ and AEO Quality Rule to every entry)
- How It Works steps (3 steps minimum for HowTo schema readiness — step names must match schema text exactly)
- Service area context paragraph (neighborhood-level specificity, no invented ZIPs or unconfirmed cities)
- Cost-expectation callout (no pricing numbers unless confirmed — use free quote framing)
- Why Choose section (confirmed and safe differentiators only — no unconfirmed license, insurance, years, or award claims)
- What Happens to Items section (eco-friendly framing only if supported — directional language, no unconfirmed donation partners)
- Freon or hazmat caveat if applicable (required when appliances are in scope)
- Conditional same-day or urgency language (safe fallback + activated version per the Conditional Content Rule)
- Conditional social proof placeholders (safe `// TODO` structure, never publish placeholder copy as real content)

For each drafted section, label:
- Section name
- Draft type: Full draft / Safe fallback / Conditional (activated version pending client confirmation)
- Word count
- Schema note if applicable
- `// TODO` markers for any activated-version elements

---

## Part 9: Updated AEO and FAQ Plan

Provide:

- Final FAQ entries (drafted per the FAQ and AEO Quality Rule)
- Direct-answer notes for each FAQ
- Questions removed and why
- Featured snippet opportunities
- Voice search opportunities
- FAQ schema notes
- Confirmation of which FAQ answers contain conditional `// TODO` elements

---

## Part 10: Updated Internal Linking Plan

Provide:

- Links from this page to other pages
- Pages that should link back to this page
- Suggested anchor text
- User journey purpose
- Topical authority purpose

**Route verification rule:** For each recommended outbound link, note whether the target route is confirmed or unconfirmed.
- Confirmed route: Include link
- Unconfirmed route: Mark as `CONDITIONAL — skip if route does not exist`

Do not create broken links. If a route cannot be confirmed, mark the link as conditional and note it as a `// TODO` for Prompt 06.

---

## Part 11: Updated Schema Plan

Provide a **per-section schema readiness table**:

| Section | Schema Type | Copy/Content Ready | Schema Ready to Implement | Blocker (if any) |
|---|---|---|---|---|

Then for each recommended schema type, provide:

- Recommended schema types
- Required fields
- Optional fields
- Schema notes for Claude Code
- Schema risks to avoid

**Rules:**
- Do not include unverified values in schema field recommendations
- Flag any schema field that requires client confirmation
- AggregateRating must not be implemented unless real review data is confirmed
- HowTo schema is conditional — only implement if step headings render as visible page elements and match schema text exactly
- LocalBusiness schema requires confirmed phone, address, ZIP, and hours before implementation

---

## Part 12: Updated Conversion Plan

Provide:

- Above-the-fold CTA
- Mid-page CTA
- Final CTA
- Trust signals (confirmed only — flag unconfirmed trust signals as `REQUIRES CLIENT CONFIRMATION`)
- Objections to address
- Lead capture path
- Mobile conversion checklist:
  - Tap-to-call button above the fold (conditional on confirmed phone number)
  - Form field count ≤ 3 on mobile
  - Sticky CTA bar: recommend / do not recommend and why
  - CTA button tap target size note

Flag any trust signals, guarantees, or availability claims that require client confirmation before use.

---

## Part 13: Visibility and Conversion Alignment Fixes

Apply fixes from the full visibility and conversion ecosystem.

If Prompt 20 findings are available, use them as the primary input for this section. If Prompt 20 was not run, note that and apply fixes based on available strategy context with reduced confidence.

Apply or reject fixes related to:

- SEO readiness
- GEO/local readiness
- AEO readiness
- Local intent SERP readiness
- LLM search readiness
- Google Search Console readiness
- Bing Webmaster readiness
- Apple Search and Apple Maps support
- Rich snippets
- Topical authority
- Google Business Profile support
- Featured snippets
- People Also Ask
- Knowledge panel and entity authority support
- Perplexity readiness
- ChatGPT readiness
- Customer engagement
- Customer conversion
- Competitive outperformance
- Indexing and crawlability

For each alignment fix, include:

- Goal supported
- What will change
- Why it matters
- Where it belongs on the page
- Implementation difficulty
- Risk level
- Claude Code notes
- QA check

Reject fixes that create:

- Keyword stuffing
- Generic local content
- Duplicate content
- Unsupported claims
- Fake schema data
- Too many links
- Too many FAQs
- Weak user experience
- CTA distraction
- Overcomplication

---

## Part 14: Final Risk Check

Check for:

- Keyword stuffing
- Duplicate content risk
- Thin content risk
- Weak local relevance
- Weak AEO answers
- Missing schema
- Missing internal links
- Weak CTA flow
- Overly long page structure
- Unsupported claims
- Fake or unverifiable trust signals
- `// TODO` markers that could accidentally publish to production

For each risk, mark:

- Cleared
- Needs attention
- Critical

---

## Part 15: Final Strategy Readiness

Provide:

- SEO readiness score (1–10)
- AEO readiness score (1–10)
- GEO/local readiness score (1–10 or N/A)
- Technical SEO readiness score (1–10)
- Conversion readiness score (1–10)
- Overall readiness score (1–10)

Then classify the revised strategy as:

- Ready for developer build brief
- Needs minor refinement
- Needs major revision

Do not write the full page content outside of Part 8.
Focus on controlled improvement, quality protection, and implementation readiness.

---

## Final Output Format

```md
# Prompt 04 Gap Fix Report

## Gate 1: Workflow Mode and Source Confirmation

## Gate 2: Invention Check

## 1. Execution Depth

Selected depth:

## 2. Source Context Review

### Workflow Mode
### Active Prompt Sequence
### Prompt 03 Score (Current Run)
### Prompt 20 Status
### Sources Reviewed
### Page or Strategy Context
### Missing or Unavailable Context

## 3. Confirmed Inputs

## 4. Missing or Unconfirmed Inputs

For each item:
- Item:
- Why it matters:
- Status: (FLAGGED / NEEDS CONFIRMATION / UNRESOLVED / NOT VERIFIABLE / PARTIALLY VERIFIABLE)
- Impact on gap fix:

## 5. Gap Fix Summary

## Part 1: Fix Decision Table

## Part 2: Fixes to Apply Now

## Part 3: Fixes That Require Client Confirmation

For each fix:
- Fix:
- Data required:
- Label: REQUIRES CLIENT CONFIRMATION
- Carry-forward destination: Prompt 05

## Part 4: Fixes to Modify

## Part 5: Fixes to Reject

## Part 6: Revised Page Structure

(Include Revision Delta Notes per section)

## Part 7: Updated Keyword Placement Plan

## Part 8: Content Drafts

(One subsection per drafted section — include draft type, word count, schema note, // TODO markers)

## Part 9: Updated AEO and FAQ Plan

## Part 10: Updated Internal Linking Plan

(Include route verification status for each link)

## Part 11: Updated Schema Plan

(Include per-section schema readiness table first, then per-type field plan)

## Part 12: Updated Conversion Plan

(Include mobile conversion checklist)

## Part 13: Visibility and Conversion Alignment Fixes

## Part 14: Final Risk Check

## Part 15: Final Strategy Readiness

## 6. Flagged Unresolved Data

For each item:
- Item:
- Why it matters:
- Status:
- Required confirmation:
- Carry-forward destination: Prompt 05

## 7. Items to Carry Forward to Prompt 05

## 8. Recommended Next Action

Choose one:
- READY FOR PROMPT 05
- READY FOR PROMPT 05 WITH FLAGGED ITEMS
- NEEDS MORE SOURCE CONTEXT BEFORE PROMPT 05
```

---

## Output Format by Execution Depth

**Compact:** Gate 1, Gate 2, Part 1, Part 2, Part 3, Part 6, Part 11 schema readiness table, carry-forward items, Recommended Next Action.

**Standard:** All gates and all parts. Draft copy in Part 8 for every draftable section.

**Deep:** All gates, all parts, extended copy drafts in Part 8, full schema block drafts per section in Part 11, mobile CTA audit in Part 12, Revision Delta Notes in Part 6.

Default to Standard unless the Efficiency Governor or the Page Details field selects Compact or Deep.

---

## Completion Rule

Do not mark the gap fix as production-ready if launch-critical or claim-sensitive data is missing.

The gap fix may still be marked **READY FOR PROMPT 05 WITH FLAGGED ITEMS** if:

- Enough source material exists to perform useful gap fixes
- All safe fixes are made and safe fallback copy is drafted
- All unresolved items are flagged
- All unresolved items are carried forward to Prompt 05

---

## Safety Rule

Do not add fake ratings, fake review counts, fake testimonials, fake certifications, fake licenses, fake pricing, fake service areas, fake guarantees, or fake availability claims to any part of the output — including copy drafts, schema field values, and trust signal recommendations.

If those items would improve the strategy but are not verified, list them as opportunities that require client confirmation and document them for Prompt 05.

---

Site OS Master — Prompt 04 v3
Workflow: Core Mode and above | Status: Awaiting Benchmark Lock
Changes from v2:
- Added canonical identity header
- Added Page Details input block with Workflow Mode, Execution Depth, Active Prompt Sequence, Prompt 03 Score, and Prompt 20 Status fields
- Added Execution Depth selector (Compact / Standard / Deep) with output constraints per tier
- Added Gate 1: Workflow Mode and Source Confirmation (prevents mode misidentification and score contamination from prior benchmark runs)
- Added Gate 2: Invention Check (pre-work fabrication gate, not just a rule block)
- Added Conditional Content Rule (safe fallback + activated version pattern with // TODO structure)
- Added FAQ and AEO Quality Rule (phrasing and quality standards for all FAQ entries)
- Added Prompt 20 routing gate inside Gate 1 (required for Beyond-Elite and Full Competitive Build modes)
- Converted Part 10 (schema) to include per-section schema readiness table as first output
- Added Part 8: Content Drafts (explicit copy drafting gate — replaces deferred drafting behavior)
- Upgraded Part 9 (internal linking) with route verification rule and CONDITIONAL link labeling
- Added mobile conversion checklist to Part 12
- Added Revision Delta Notes requirement to Part 6
- Required Fix Decision Table audit trail — all applied fixes must trace to Part 1 rows
- Added Output Format by Execution Depth section
- Output format updated to include gates and new parts
Next Prompt: Prompt 05 — Developer Build Brief