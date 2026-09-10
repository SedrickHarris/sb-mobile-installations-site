# Prompt 05: Developer Build Brief

**File:** prompts/05-developer-build-brief-prompt.md
**Version:** v2.2
**Status:** v2.2 — Efficiency Governor Gate Added
**Mode:** All modes
**Position:** After Prompt 04 Gap Fix and before Prompt 06 Claude Code Build. May receive Prompt 20 Visibility and Conversion Alignment (v1.2) output when Prompt 20 runs in its Secondary Position (between Prompt 04 and Prompt 05).
**Upstream Sources Acknowledged:** Prompt 01 Keyword Strategy, Prompt 02 Page Outline, Prompt 03 Ten-Metric Analysis (if run), Prompt 04 Gap Fix (if run), Prompt 10 Client Data Collection (if available), and Prompt 20 Visibility and Conversion Alignment v1.2 (when run in its Secondary Position).
**Approved For:** Developer-ready build briefs, section specs, schema planning, CTA path, internal link plan, flagged client data carry-forward to Prompt 06
**Does Not Replace:** Prompt 06 Claude Code Build, Prompt 07 QA Review, Prompt 08 Production Fix and TODO Resolution, Prompt 09 Final Launch QA, Prompt 10 Client Data Collection, Prompt 11 SERP Competitive Analysis, Prompt 12 Analytics and Measurement, Prompt 13 Content Quality Editor, Prompt 14 Page Template Evaluation, Prompt 15 Page Variant Battle, Prompt 16 Search Intent Defense, Prompt 17 AI Citation Readiness, Prompt 18 Page Moat, Prompt 19 Template Evaluation Rubric, Prompt 20 Visibility and Conversion Alignment

---

## Purpose

Prompt 05 converts the approved strategy, keyword plan, page outline, ten-metric analysis, and gap fixes into a developer-ready build brief.

Missing client data does not stop this prompt.

**Core principle:** Unresolved client data does not stop the developer build brief when enough strategy, page, service, location, and CTA context exists. Create the build brief using confirmed information. Flag missing values clearly. Carry unresolved items forward to Prompt 06. Do not invent missing data.

---

## Execution Depth

Before starting, select one:

- **Compact** — Simple pages, fast builds, low competition
- **Standard** — Normal service, location, category, blog, or landing pages
- **Deep** — High-value, revenue-critical, competitive, or final QA build briefs

Use the lowest depth that produces a complete and useful build brief.

---

## Workflow Mode Gate

Before producing the developer build brief, select a workflow mode and confirm client intake status. This gate is an efficiency governor: it aligns brief depth with task value and prevents over-prompting the Site OS chain.

### Required references

The workflow mode chosen here must align with the canonical routing and efficiency rules:

- `routing/workflow-mode-map.md` — authoritative mode → prompt chain map
- `token-control/prompt-efficiency-rules.md` — efficiency thresholds, shortcut allowances, and skip rules

### Mode definitions

**Fast Mode** — Single-page, low-stakes, low-competition work. Skip Prompts 03, 04, and 20. Run Prompt 05 → 06 → 07 only. Pair with Compact execution depth.

**Core Mode** — Default for service, location, category, blog, or landing pages with normal stakes. Run Prompts 02 → 05 → 06 → 07. Skip Prompts 03 and 04 unless competitor gaps are flagged. Pair with Standard execution depth.

**Beyond-Elite Mode** — High-value, competitive, conversion-critical pages. Run Prompts 02 → 03 → 04 → 05 → 06 → 07 → 08. Pair with Deep execution depth. Prompt 20 (Visibility and Conversion Alignment) runs in its Secondary Position between Prompt 04 and Prompt 05.

**Full Competitive Build Mode** — Revenue-critical or category-defining pages. Run the full prompt chain (Prompts 01 through 20 as applicable). Pair with Deep execution depth. Gap fixes, ten-metric analysis, and competitive moat work are mandatory.

### Default rule

Default to **Core Mode** unless the task is one of the following:

- Revenue-critical — a page that directly drives revenue
- Highly competitive — a category with established dominant competitors that must be displaced
- Explicitly approved by the project owner for a higher mode

If none of the above apply, do not escalate beyond Core Mode.

### Strategy-approved shortcut

When upstream strategy is already complete and validated (Prompt 01 Keyword Strategy, Prompt 02 Page Outline, and any required Prompt 10 Client Data Collection), the strategy-approved shortcut is permitted:

**Prompt 05 → Prompt 06 → Prompt 07**

Use the shortcut only when:

- The selected mode is Core Mode or Fast Mode.
- No competitor gaps are flagged.
- No strategy alignment issues require Prompt 04 Gap Fix or Prompt 20 Visibility and Conversion Alignment.

Higher modes (Beyond-Elite, Full Competitive Build) do not qualify for the shortcut.

### Client intake status check

Before proceeding with the build brief, confirm:

- **Prompt 10 (Client Data Collection) status:** Complete / In Progress / Not Started
- **Required client data for this page:** Resolved / Flagged / Missing
- **Launch-critical client values** (legal copy, contact details, form endpoints, brand assets, seed data): Confirmed / Pending

If client intake is incomplete and the missing data is launch-critical for the page in scope, flag those items per the carry-forward vocabulary and proceed with safe TODOs. Do not block the build brief on incomplete intake.

### Required Workflow Mode Gate output block

The build brief output must include the following block immediately after Section 1 "Execution Depth" and before Section 2 "Source Context Review":

```
## Workflow Mode Gate

- Selected mode: [Fast | Core | Beyond-Elite | Full Competitive Build]
- Reason: [one sentence justifying the mode selection]
- Workflow path: [ordered list of prompts to run]
- Skipped prompts: [list of prompts deliberately skipped, or "None"]
- Client intake status: [Complete | In Progress | Not Started]
- Required client data status: [Resolved | Flagged | Missing]
- Strategy-approved shortcut used: [Yes | No]
- References:
  - routing/workflow-mode-map.md
  - token-control/prompt-efficiency-rules.md
```

If the selected mode deviates from the default Core Mode, the Reason field must justify the escalation in one sentence.

---

## Source Context Required

Review all available upstream outputs before building the brief.

Check for and use:

- Prompt 10 Client Data Collection output (if available)
- Prompt 01 Keyword Strategy output
- Prompt 02 Page Outline output
- Prompt 03 Ten-Metric Analysis output (if run)
- Prompt 04 Gap Fix output (if run)
- Prompt 20 Visibility and Conversion Alignment **v1.2** output (if Prompt 20 was run in its Secondary Position, after Prompt 04 and before Prompt 05, as a pre-build alignment gate review)
- Any additional confirmed client-supplied data

If a prompt was skipped in the workflow, note it and proceed with available context.

---

## What Prompt 05 Must Not Invent

Prompt 05 must not invent or treat as confirmed:

- Phone number
- Address
- ZIP code
- Business hours
- Service areas
- Pricing
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
- Legal policy URLs
- Analytics IDs
- Tracking IDs

If any of these items would improve the build brief but are not confirmed, flag them using one of these labels:

- `FLAGGED`
- `NEEDS CONFIRMATION`
- `UNRESOLVED`
- `CARRY FORWARD`
- `REQUIRES CLIENT CONFIRMATION`
- `SAFE TODO FOR PROMPT 06`
- `NOT READY FOR PRODUCTION APPROVAL`

Do not use `BLOCKED` or `cannot proceed` unless there is genuinely not enough core context to produce any useful developer build brief.

---

## Visibility and Conversion Requirements

The developer build brief must include implementation notes for all applicable visibility and conversion goals.

For each applicable goal, provide:

- Goal
- Required page element
- Section placement
- Metadata or schema requirement
- Internal link requirement
- CTA or conversion requirement
- Claude Code implementation note
- QA check

Evaluate the following for this page:

1. SEO
2. GEO
3. AEO
4. Local intent SERP
5. LLM search
6. Google Search Console readiness
7. Bing Webmaster readiness
8. Apple Search / Apple Maps support
9. Rich snippets
10. Topical authority
11. Google Business Profile support
12. Featured snippets
13. People Also Ask
14. Knowledge panel / entity authority
15. Perplexity readiness
16. ChatGPT readiness
17. Customer engagement
18. Customer conversion
19. Competitive outperformance
20. Indexing and crawlability

---

## Build Brief Sections

### Part 1: Target Page Overview

Provide:

- Business name and context
- Page type (service page, location page, landing page, blog post, category page, etc.)
- Target service
- Target location or service area
- Page goal
- Primary CTA
- Secondary CTA
- Target route
- URL slug

### Part 2: Required Page Sections

For each required section, provide:

- Section number
- Section name
- Required heading (H1, H2, H3 as applicable)
- Content purpose
- CTA role
- SEO / AEO / GEO role
- Component recommendation
- Required confirmation, if any

### Part 3: Content Requirements

Include:

- Tone and voice guidance
- Required keyword inclusions (primary, secondary, local, AEO)
- AEO FAQ content requirements
- Local relevance requirements
- Proof point requirements (testimonials, certifications, guarantees — flag if unconfirmed)
- Content safety rules (no invented claims, no unconfirmed availability, no unsupported guarantees)

### Part 4: Component Requirements

Include:

- Components to reuse from the existing project
- New components to create
- Component naming guidance
- Component scope boundaries
- Notes on existing pattern inspection before creating new components
- Frontend dependency inspection — before recommending any styling, motion, or component solution, inspect `package.json` to identify the project's installed CSS framework, animation library, component library, and other relevant frontend dependencies. Do not assume; read the file.
- Frontend dependency handling — when installed or approved dependencies exist (for example, **Tailwind CSS** for utility-first styling and **Framer Motion** for animation, or any project-approved component library), the build brief must plan styling and motion using those dependencies' conventions rather than introducing new libraries. Examples of correct handling:
  - For styling: specify Tailwind utility patterns and any existing `tailwind.config.ts` design tokens; do not propose CSS-in-JS, plain CSS modules, or a different framework when Tailwind is already installed.
  - For animation: specify Framer Motion components and patterns (e.g., `motion.div`, `AnimatePresence`, variants) when Framer Motion is installed; do not propose alternative animation libraries.
  - For components: prefer reusing or extending existing components; defer to the project's component library if one is installed and approved.
- New frontend dependency rule — if a section of the build brief would require a frontend dependency that is not already installed or approved, flag the proposed addition under "Build Risks and Constraints" with the dependency name, the reason it would be needed, and the impact of going without it. Do not assume Prompt 06 may install new dependencies. The project owner approves dependency additions before Prompt 06 runs.

### Part 5: Metadata Requirements

Include:

- Title tag
- Meta description
- Open Graph title
- Open Graph description
- Open Graph image guidance
- Canonical URL (flag if production domain is unconfirmed)
- robots directive
- hreflang if applicable

### Part 6: Schema Requirements

Include:

- Recommended schema types
- Required fields
- Optional enhancement fields
- Existing schema pattern to inspect
- Schema risks to avoid

#### Allowed Schema

List schema types that may be implemented with confirmed data.

#### Schema Fields Confirmed

List fields that are confirmed and safe to implement.

#### Schema Fields Needing Confirmation

For each unconfirmed field, use: `REQUIRES CLIENT CONFIRMATION`

#### Schema Types Not Allowed Without Verified Data

- AggregateRating — Do not implement without verified review count and rating.
- Review — Do not implement without verified reviewer name, rating, and review text.
- PriceRange — Do not implement without verified pricing.
- GeoCoordinates — Do not implement without verified address.
- OpeningHoursSpecification — Do not implement without verified business hours.

Do not invent fake reviews, ratings, prices, or credentials.

### Part 7: Form and CTA Requirements

Include:

- Confirmed form fields
- Unconfirmed form details (flag with `REQUIRES CLIENT CONFIRMATION`)
- CTA button text
- CTA placement per section
- Form action endpoint status (flag if unconfirmed: `SAFE TODO FOR PROMPT 06`)
- Lead capture path confirmation

### Part 8: Internal Link Requirements

Include:

- Pages this page should link to
- Pages that should link back to this page
- Suggested anchor text
- User journey purpose
- Topical authority purpose

### Part 9: Image and Media Requirements

Include:

- Recommended image types
- Suggested image folder path
- File naming guidance
- Alt text guidance
- No text inside images rule
- Page speed considerations
- Mobile image considerations

### Part 10: Accessibility and Responsive Requirements

Include:

- Semantic structure notes
- Heading hierarchy notes
- Button and link clarity
- Contrast considerations
- Mobile layout expectations
- Form and CTA accessibility notes

### Part 11: Navigation, Sitemap, and robots.txt Scope

Include:

- Whether navigation should be updated
- Whether sitemap should be updated
- Whether robots.txt should be updated
- Scope boundaries — what Prompt 06 may and may not change in these files

### Part 12: Files and Implementation Guidance

Provide:

- Files likely to inspect
- Files likely to create
- Files likely to update
- Components likely to reuse
- Components likely to create
- Metadata implementation notes
- Schema implementation notes
- Styling approach
- Risks or unknowns Claude Code should inspect before editing

### Part 13: Files or Areas Prompt 06 May Edit

List explicitly what Prompt 06 is permitted to modify.

### Part 14: Files or Areas Prompt 06 Should Not Edit

List explicitly what Prompt 06 must not modify.

Include guardrails:

- Do not remove working code
- Do not create duplicate routes
- Do not change global styles unless required by the build brief
- Do not add fake reviews or unsupported claims
- Do not add unnecessary dependencies
- Do not rename files without reason
- Do not modify unrelated pages
- Do not use text inside images
- Do not keyword stuff

### Part 15: Validation Requirements for Prompt 06

Include:

- Required validation commands (e.g., `npm run build`, `npm run lint`, `npm run type-check`)
- Validation pass criteria
- Validation reporting requirements
- Rule: Claude Code must not claim validation passed unless commands actually ran and passed

### Part 16: Flagged Unresolved Data

For each flagged item, provide:

- Item
- Why it matters
- Status
- Required confirmation
- Carry-forward destination
- Suggested safe TODO or FLAG for Prompt 06

### Part 17: Items to Carry Forward to Prompt 06

List all unresolved items that Prompt 06 must receive, document, and handle using safe TODOs or FLAG placeholders.

### Part 18: Prompt 06 Handoff Instructions

Include this language:

> Prompt 06 may proceed with controlled development using safe TODO or FLAG placeholders only where unresolved client data is not required for structural implementation.
>
> Prompt 06 must not invent unresolved client data.
>
> Prompt 06 must carry unresolved launch-critical items into its implementation report.

### Part 19: Acceptance Criteria

The page build by Prompt 06 is complete only if:

- Route is correct
- Page follows approved section structure
- Metadata is included
- One H1 exists
- Heading hierarchy is logical
- Internal links are included
- CTA path is clear
- AEO FAQ section is included if required
- Schema is included or prepared if required
- Local relevance is included if applicable
- Images have alt text
- Page follows existing design patterns
- Mobile responsiveness is considered
- No unrelated files were modified
- No duplicate route was created
- All unresolved items are flagged as safe TODOs or FLAG placeholders — not invented

### Part 20: Final Claude Code Ready Prompt

End with a concise prompt that can be copied directly into Claude Code.

The prompt must instruct Claude Code to:

1. Inspect the project
2. Identify existing patterns
3. Create an implementation plan (Gate 2)
4. Build the page using confirmed data only
5. Flag unresolved items as safe TODOs or FLAG placeholders
6. Validate the page
7. Report all changes and carry-forward items

Keep this prompt clean and implementation-focused. Do not include unnecessary strategy discussion.

---

## Completion Rule

Do not mark the build brief as production-ready if launch-critical or claim-sensitive data is missing.

The build brief may still be marked **READY FOR PROMPT 06 WITH FLAGGED ITEMS** when:

- Enough core context exists to produce a useful developer build brief
- All unresolved items are flagged
- Prompt 06 is instructed to use safe TODOs or FLAGs instead of inventing data

---

## Safety Rules

1. Do not add fake ratings, fake review counts, fake testimonials, fake certifications, fake licenses, fake pricing, fake service areas, fake guarantees, fake availability claims, fake form endpoints, fake production domains, or fake legal policy URLs.

2. If those items would improve the build but are not verified, list them as opportunities that require client confirmation.

3. Do not use `BLOCKED` or `cannot proceed` unless there is genuinely not enough core context to produce any useful developer build brief.

4. Do not invent or assume any business claim not confirmed by the client.

5. Do not mark the build brief as production-ready if launch-critical or claim-sensitive data is missing.

6. **Over-Prompting Prevention Rule.** Do not run more prompts than the selected workflow mode requires. Do not invoke Prompts 03, 04, or 20 for Core Mode or Fast Mode tasks unless competitor gaps or strategy alignment issues are explicitly flagged in the Workflow Mode Gate output block. Do not escalate to Beyond-Elite Mode or Full Competitive Build Mode without explicit owner approval recorded in the Reason field of the Workflow Mode Gate output block. The Workflow Mode Gate selection is the authoritative source for which prompts run; deviations from the mode's prompt chain require written justification in Section 2 "Source Context Review" of the build brief.

---

## Required Output Format

Return this complete report:

---

# Prompt 05 Developer Build Brief

## 1. Execution Depth

Selected depth:

## Workflow Mode Gate

- Selected mode:
- Reason:
- Workflow path:
- Skipped prompts:
- Client intake status:
- Required client data status:
- Strategy-approved shortcut used:
- References:
  - routing/workflow-mode-map.md
  - token-control/prompt-efficiency-rules.md

## 2. Source Context Review

### Sources Reviewed

### Prompt 01 Keyword Strategy Reviewed

### Prompt 02 Page Outline Reviewed

### Prompt 03 Ten-Metric Analysis Reviewed

### Prompt 04 Gap Fix Reviewed

### Missing Context

## 3. Confirmed Inputs

## 4. Missing or Unconfirmed Inputs

## 5. Build Brief Summary

## 6. Target Page Details

### Business

### Page Type

### Service

### Location

### Goal

### Primary CTA

### Secondary CTA

### Target Route

### URL Slug

## 7. Required Page Sections

For each section:

- Section number:
- Section name:
- Required heading:
- Content purpose:
- CTA role:
- SEO/AEO/GEO role:
- Component recommendation:
- Required confirmation, if any:

## 8. Content Requirements

## 9. Component Requirements

## 10. Metadata Requirements

## 11. Schema Requirements

### Allowed Schema

### Schema Fields Confirmed

### Schema Fields Needing Confirmation

### Schema Types Not Allowed Without Verified Data

## 12. Form and CTA Requirements

### Confirmed Form Fields

### Unconfirmed Form Details

### CTA Requirements

### Safe TODOs for Prompt 06

## 13. Internal Link Requirements

## 14. Image and Alt Text Requirements

## 15. Accessibility and Mobile Requirements

## 16. Navigation, Sitemap, and robots.txt Scope

## 17. Visibility and Conversion Requirements

## 18. Files or Areas Prompt 06 May Edit

## 19. Files or Areas Prompt 06 Should Not Edit

## 20. Validation Requirements for Prompt 06

## 21. Build Risks and Constraints

## 22. Flagged Unresolved Data

For each flagged item:

- Item:
- Why it matters:
- Status:
- Required confirmation:
- Carry-forward destination:
- Suggested safe TODO or FLAG:

## 23. Items to Carry Forward to Prompt 06

## 24. Prompt 06 Handoff Instructions

> Prompt 06 may proceed with controlled development using safe TODO or FLAG placeholders only where unresolved client data is not required for structural implementation.
>
> Prompt 06 must not invent unresolved client data.
>
> Prompt 06 must carry unresolved launch-critical items into its implementation report.

## 25. Acceptance Criteria

## 26. Recommended Next Action

Choose one:

- READY FOR PROMPT 06
- READY FOR PROMPT 06 WITH FLAGGED ITEMS
- NEEDS MORE CORE CONTEXT BEFORE PROMPT 06

## 27. Final Claude Code Ready Prompt

---

## Version

Prompt 05 v2.1
Patched from v2.0 to add:

1. Canonical `File` and `Position` header fields.
2. Explicit `Does Not Replace` list in the header (matches the Site OS Master supporting-prompt header convention).
3. Prompt 20 Visibility and Conversion Alignment **v1.2** output as a recognized upstream source for the case where Prompt 20 runs in its Secondary Position (after Prompt 04 and before Prompt 05).
4. Frontend dependency inspection rule under Part 4 Component Requirements — requires reading `package.json` before recommending styling, motion, or component solutions.
5. Frontend dependency handling under Part 4 — explicit guidance that when installed or approved dependencies exist (for example, Tailwind CSS for styling and Framer Motion for animation), the build brief must plan around those dependencies' conventions rather than introducing new libraries, with concrete examples for styling, animation, and components.
6. New frontend dependency rule under Part 4 — any proposed addition of a frontend dependency not already installed or approved must be flagged under "Build Risks and Constraints" for project-owner approval before Prompt 06 runs.

The v2.1 patch does not change routing logic, validation rules, the carry-forward vocabulary, the Prompt 06 handoff language, the Required Output Format, the Acceptance Criteria, or any Safety Rule. It does not modify any prompt other than Prompt 05. It is a clarifying and dependency-discipline patch only.

Next step: Run lightweight confirmation test against the v2.1 file. If confirmed, lock as v2.1 and update `prompts/prompt-master-status.md`.

Prompt 05 v2.0 history:
Updated to include: unresolved issue flagging language, safety rules, structured carry-forward behavior, Prompt 06 handoff instructions, visibility and conversion requirements section, schema safety fields, form endpoint safety rule, and complete structured output format.

Next Prompt: Prompt 06 — Claude Code Build