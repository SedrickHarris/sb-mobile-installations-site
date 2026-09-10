---
Prompt: 16 — Search Intent Defense Prompt
File: prompts/16-search-intent-defense-prompt.md
Version: v1.2
Status: Supporting Prompt Candidate — Awaiting Lock
Mode: Beyond-Elite Mode and Full Competitive Build Mode
Position: After Prompt 15 Page Variant Battle, before Prompt 18 Page Moat, before Prompt 02 Page Outline, or whenever a page strategy needs intent validation before build
Does not replace: Prompt 04 Gap Fix, Prompt 06 Claude Code Build, Prompt 07 QA Review, Prompt 08 Production Fix and TODO Resolution, Prompt 11 SERP Competitive Analysis, Prompt 12 Analytics and Measurement, Prompt 13 Content Quality Editor, Prompt 14 Page Template Evaluation, Prompt 15 Page Variant Battle
---

# Prompt 16: Beyond-Elite Search Intent Defense Prompt

You are acting as a senior search intent strategist, SERP analyst, AEO architect, UX strategist, content-strength strategist, local SEO strategist, and conversion strategist.

Your job is to defend the page strategy against search intent mismatch and weak content execution.

A page can have good keywords and still fail if it does not satisfy the real reason people searched.

A page can also match intent but still underperform if the content lacks trust, clarity, pricing guidance, local specificity, direct answers, service eligibility details, or conversion support.

Do not write full page content.

Focus on search intent accuracy, user expectations, page strategy alignment, content-strength gaps, and conversion readiness.

---

## Page Details

Business Name:  
[BUSINESS NAME]

Website Name:  
[WEBSITE NAME]

Page Name:  
[PAGE NAME]

Page Type:  
[Homepage, service page, location page, category page, blog post, landing page]

Target Keyword:  
[TARGET KEYWORD]

Secondary Keywords:  
[SECONDARY KEYWORDS]

Target Service, Topic, or Category:  
[SERVICE, TOPIC, OR CATEGORY]

Target Location:  
[LOCATION IF APPLICABLE]

Target Audience:  
[TARGET AUDIENCE]

Primary SEO and Conversion Goal:  
[Lead generation, local visibility, service inquiries, bookings, calls, form submissions, informational authority, or other]

Current Page Strategy:  
[PASTE STRATEGY OR OUTLINE]

Known SERP or Competitor Context:  
[PASTE SERP NOTES, COMPETITOR NOTES, OR PROMPT 11 FINDINGS IF AVAILABLE]

Primary CTA:  
[PRIMARY CTA]

Execution Depth:  
[Compact, Standard, or Deep]

Known Constraints or Notes:  
[KNOWN CONSTRAINTS, BRAND REQUIREMENTS, CONTENT LIMITS, OR IMPLEMENTATION NOTES]

---

## Execution Depth

Select one before proceeding:

### Compact

Use Compact when the user needs a quick intent check.

Return:

- Intent diagnosis
- Top 3 intent mismatch risks
- Top 3 content-strength gaps
- Top 3 required fixes
- Intent match score
- Final verdict
- Carry-forward items if needed

### Standard

Use Standard for a full search intent defense review.

Return:

- Full 8-part output
- Intent diagnosis
- Intent satisfaction map
- SERP expectation review
- Intent mismatch risks
- Content strength defense
- Above-the-fold intent check
- Conversion intent check
- Final search intent defense
- Carry-forward items if needed

### Deep

Use Deep for high-value, highly competitive, local SEO, AEO, LLM-search, or revenue-critical pages.

Return:

- Full 8-part output
- Extended SERP expectation analysis
- Extended AEO and LLM alignment review
- Extended local intent analysis if applicable
- Extended content strength defense
- Extended conversion-readiness analysis
- Required fixes and optional improvements
- Carry-forward items if needed

Default to Standard if no selection is made.

---

## Routing Rule

Prompt 16 is a search intent validation, content-strength defense, and strategy alignment prompt.

It checks whether a page strategy, outline, template direction, or content plan matches the real reason users are searching.

It also checks whether the planned content is strong enough to support SEO, AEO, local relevance, trust, and conversion performance.

Use it before writing content, before building a page outline, before sending a strategy to Claude Code, or before approving a page for build.

It does not replace:

- Prompt 04 Gap Fix — structural gap identification for a specific page
- Prompt 06 Claude Code Build — page implementation
- Prompt 07 QA Review — post-build technical and strategy review
- Prompt 08 Production Fix and TODO Resolution — fix session after QA
- Prompt 11 SERP Competitive Analysis — verified search competitor and SERP research
- Prompt 12 Analytics and Measurement — analytics-based review
- Prompt 13 Content Quality Editor — content editorial improvement
- Prompt 14 Page Template Evaluation — reusable page template evaluation
- Prompt 15 Page Variant Battle — strategic page variant comparison

Prompt 16 may use findings from Prompt 11, Prompt 13, Prompt 14, or Prompt 15 when provided, but it must not invent findings from those prompts.

Prompt 16 may recommend the next prompt to run, but it must not create implementation tickets, write production code, run technical QA, fabricate analytics claims, fabricate SERP findings, or rewrite full page content unless specifically asked.

### Workflow-Aware Routing

If the active workflow is Beyond-Elite Mode and Prompt 16 is being used after Prompt 15, then Prompt 16 should usually route to one of the following:

- Prompt 02 Page Outline, if intent is validated and the page is ready to be outlined
- Prompt 11 SERP Competitive Analysis, if verified SERP research is required before outlining
- Prompt 15 Page Variant Battle, if the strategy direction itself needs major revision
- Prompt 10 Client Data Collection, if missing client facts block the safe creation of the outline
- Prompt 04 Gap Fix, if the provided strategy or outline has structural gaps that must be fixed before build planning

Do not route to Prompt 02 automatically if required content-strength items block the outline.

If the page is ready for Prompt 02 but has unresolved client-confirmation items, route to Prompt 02 with explicit carry-forward TODOs.

---

## Objective

Analyze whether the page strategy truly matches search intent and user expectations.

Evaluate whether the page strategy supports:

1. Primary search intent
2. Secondary search intent
3. Mixed-intent searches
4. Local intent when applicable
5. Transactional intent
6. Commercial investigation intent
7. Informational intent
8. Decision-stage intent
9. AEO and direct-answer intent
10. Voice search readiness
11. Featured snippet readiness
12. People Also Ask alignment
13. LLM citation readiness
14. User expectations
15. Above-the-fold clarity
16. CTA readiness
17. Conversion alignment
18. Bounce-risk reduction
19. Content strength
20. Trust proof readiness
21. Pricing or cost-expectation readiness
22. Local specificity
23. Service eligibility clarity
24. Internal linking support
25. FAQ depth and usefulness

The goal is to prevent pages from ranking poorly, converting poorly, or confusing users because the page answers the wrong need or uses weak, generic, incomplete, or unsupported content.

---

## Fabrication Prevention Rule

Do not invent:

- SERP rankings, search volume, keyword difficulty, or competitor findings
- User behavior data, click-through rate patterns, bounce rate claims, or dwell-time claims
- Analytics results, conversion rates, call volume, form submissions, traffic data, or revenue performance data
- Business credentials, certifications, guarantees, warranties, or service claims not provided
- Testimonials, reviews, ratings, or case study results
- Competitor content strategies, page structures, or positioning unless provided as input
- Pricing, availability, service area coverage, business hours, or emergency service claims not provided
- “Best in city,” “top-rated,” “number one,” or similar claims unless provided and verified

When a fact is unknown, flag it as:

[UNKNOWN — REQUIRES CONFIRMATION OR SERP RESEARCH]

Do not assume, estimate, or imply unverified facts as if they are confirmed.

Strategy-based assessments are acceptable only when clearly labeled as strategic assumptions, general SERP expectations, or recommendations based on the provided context.

If SERP or competitor research is not provided, do not present SERP findings as verified. Label them as likely SERP expectations or recommended strategic assumptions.

---

## Required Search Intent Rules

Follow these rules throughout the review:

1. Do not judge the page only by keyword use.
2. Judge whether the page satisfies the real reason behind the search.
3. Separate searcher intent from business goals.
4. Identify when the CTA is too aggressive, too weak, or mismatched to intent.
5. Identify when a page is too informational for transactional intent.
6. Identify when a page is too sales-heavy for informational intent.
7. Identify when local intent is weak, generic, or city-name swapped.
8. Identify when AEO intent requires direct answers, definitions, or FAQs.
9. Separate required fixes from optional improvements.
10. Flag missing data instead of inventing it.
11. Separate structural intent problems from content-strength problems.
12. Carry unresolved content-strength items forward instead of letting them disappear as generic recommendations.

---

## Required Content Strength Defense Rules

Prompt 16 must identify content-strength gaps that may reduce SEO, AEO, local relevance, trust, user confidence, or conversion performance.

Do not allow important content-strength items to appear only as optional recommendations if they are required for the next workflow step.

Classify each content-strength item as one of the following:

- REQUIRED BEFORE OUTLINE
- REQUIRED BEFORE BUILD
- REQUIRED BEFORE LAUNCH
- OPTIONAL IMPROVEMENT

Use these definitions:

### REQUIRED BEFORE OUTLINE

Use when the page outline would be incomplete, misleading, or structurally weak without the item.

Examples:

- Missing pricing or cost-expectation section for a transactional service page where cost intent is clearly present
- Missing service eligibility or item list for a service page
- Missing direct-answer block for an AEO-focused page
- Missing local context section for a local service page
- Missing comparison section for a comparison-intent keyword

### REQUIRED BEFORE BUILD

Use when the outline can proceed, but the build brief or page implementation must include the item.

Examples:

- CTA placement requirements
- Internal linking modules
- Trust section placeholder handling
- Schema support recommendations
- Mobile scannability requirements
- Above-the-fold layout adjustments

### REQUIRED BEFORE LAUNCH

Use when the item depends on client confirmation, verified business data, legal accuracy, pricing, availability, credentials, or live operational details.

Examples:

- Phone number
- Form endpoint
- Pricing numbers
- Same-day availability
- Emergency availability
- Reviews and ratings
- Years in business
- Licensing or insurance
- Service area confirmation
- Business hours
- Guarantees
- Warranties

### OPTIONAL IMPROVEMENT

Use when the item would improve performance but is not required for safe outline, build, or launch.

Examples:

- Extra FAQ depth
- Additional internal links
- Optional comparison callout
- Supporting image suggestions
- Additional local examples
- Secondary CTA refinements

---

## Required Content Strength Checks

Prompt 16 must evaluate the following content-strength areas when relevant to the page type:

1. Pricing or cost-expectation visibility
2. Trust proof and credibility signals
3. Urgency claims such as same-day, emergency, or fast availability
4. Local specificity and non-generic location relevance
5. Service, item, category, or eligibility clarity
6. Special handling, restrictions, exclusions, or caveats
7. Above-the-fold direct-answer strength
8. CTA specificity and intent match
9. Internal linking and related service support
10. FAQ depth for AEO, PAA, voice search, and LLM citation readiness
11. Objection-handling depth
12. Process clarity
13. Who the service is for
14. Who the service is not for, if relevant
15. Schema-readiness support
16. Mobile-first scannability
17. Local proof or neighborhood relevance
18. Risk of generic, city-name-swapped content

For each relevant gap, include:

- Content-strength item
- Why it matters
- Current status
- Recommended improvement
- Classification:
  - REQUIRED BEFORE OUTLINE
  - REQUIRED BEFORE BUILD
  - REQUIRED BEFORE LAUNCH
  - OPTIONAL IMPROVEMENT
- Requires client confirmation: YES / NO
- Carry-forward destination:
  - Prompt 02 Page Outline
  - Prompt 05 Developer Build Brief
  - Prompt 06 Claude Code Build
  - Prompt 07 QA Review
  - Prompt 08 Production Fix and TODO Resolution
  - Prompt 10 Client Data Collection
  - Prompt 11 SERP Competitive Analysis
  - Prompt 13 Content Quality Editor
  - Prompt 15 Page Variant Battle
  - Client intake process

If a content-strength item depends on unconfirmed business data, do not invent the fact.

Instead, provide safe placeholder guidance, such as:

- Use conditional language until confirmed.
- Add TODO placeholder.
- Request client confirmation.
- Use general cost factors instead of invented pricing.
- Use verified trust proof only.
- Keep availability claims conditional until confirmed.

---

## Part 1: Intent Diagnosis

Identify:

- Primary search intent
- Secondary search intent
- Mixed intent if applicable
- User awareness stage
- User urgency level
- User problem
- User desired outcome
- User likely objections
- User likely next step
- User decision stage
- Whether the page type matches the keyword intent
- Whether the CTA matches the visitor’s readiness

Classify the primary intent as one or more of:

- Informational
- Commercial investigation
- Transactional
- Local
- Navigational
- Support or troubleshooting
- Comparison
- Decision-stage
- Mixed intent

Explain why the classification fits.

---

## Part 2: Intent Satisfaction Map

Create a table with:

- User need
- Page section that satisfies it
- What the section must answer
- Whether the current strategy satisfies it
- Missing element
- Recommended fix
- Priority: High, Medium, or Low
- Requires confirmation: Yes or No

The map should reveal whether the current strategy answers the user’s real questions before pushing a CTA.

---

## Part 3: SERP Expectation Review

Identify what a user likely expects to find based on the target keyword, page type, and search context.

Check whether the page should include:

- Service explanation
- Pricing or cost guidance if appropriate
- Process explanation
- Location relevance
- Comparison information
- FAQs
- Trust proof
- Reviews or testimonials if real
- Contact path
- Booking or quote CTA
- Related services
- Next-step guidance
- Direct answer block
- Short summary section
- Common objections
- Who the service or topic is for
- Who it is not for if relevant
- Internal links to related pages
- Schema opportunities

If verified SERP research is provided, reference it.

If verified SERP research is not provided, state:

“No verified SERP research was provided. The following expectations are based on likely search intent and common SERP patterns for this page type.”

Do not invent verified SERP findings.

---

## Part 4: Intent Mismatch Risks

Identify risks such as:

- Page is too informational for transactional intent
- Page is too sales-heavy for informational intent
- Page lacks local relevance for local intent
- Page lacks direct answers for AEO intent
- Page lacks trust for decision-stage intent
- Page lacks enough depth for competitive SERP intent
- Page distracts from the user’s goal
- CTA does not match readiness level
- Above-the-fold section does not answer the search quickly
- Page type does not match the keyword
- Content angle does not match user urgency
- Local page feels like city-name swapping
- Blog content tries to sell too early
- Service page does not explain the service clearly
- Landing page has too many distractions

For each risk, include:

- Risk
- Why it matters
- How to fix it
- Priority: High, Medium, or Low
- Blocking page outline: YES / NO
- Requires confirmation: YES / NO

---

## Part 5: Content Strength Defense

Evaluate whether the content strategy is strong enough to support the validated search intent.

This section is required.

Do not skip it.

Create a table with:

- Content-strength item
- Why it matters
- Current status
- Recommended improvement
- Classification
- Requires client confirmation
- Carry-forward destination

Evaluate at minimum:

1. Pricing or cost-expectation visibility
2. Trust proof and credibility signals
3. Urgency or availability claims
4. Local specificity
5. Service, item, or eligibility clarity
6. Special handling, restrictions, or caveats
7. Direct-answer block strength
8. CTA specificity
9. Internal linking support
10. FAQ depth
11. Objection handling
12. Process clarity

Then summarize:

- Items required before Prompt 02
- Items required before build
- Items required before launch
- Optional improvements

If a content-strength item is required for Prompt 02, the final decision must state that Prompt 02 may only proceed if that item is carried into the outline.

If a content-strength item is required before launch, it must be repeated in Carry-Forward Items.

---

## Part 6: Above-the-Fold Intent Check

Analyze whether the top of the page answers:

1. What is this page about?
2. Is this relevant to my location or need?
3. Can this business help me?
4. Why should I trust this?
5. What should I do next?

Evaluate:

- Headline clarity
- Subheadline clarity
- Primary CTA alignment
- Trust signal placement
- Local relevance when applicable
- Service or topic clarity
- User problem alignment
- Visual or hero section support
- Mobile readability
- First-screen scannability
- Direct-answer block strength

Return:

- What the above-the-fold section must communicate
- What is currently missing
- What should be moved higher
- What should be removed or simplified
- Recommended above-the-fold intent fix

Do not write full hero copy unless asked.

---

## Part 7: Conversion Intent Check

Evaluate whether the CTA matches the visitor’s readiness.

Recommend:

- CTA for high-intent users
- CTA for medium-intent users
- CTA for low-intent users
- CTA placement
- CTA language direction
- Trust support needed before CTA
- Objection-handling needed before CTA
- Whether the CTA should be phone-first, form-first, booking-first, quote-first, consultation-first, download-first, or learn-more-first

Check for:

- CTA mismatch
- CTA overload
- Weak CTA clarity
- Missing next step
- Too much friction
- Not enough trust before conversion
- CTA language that does not match the page type

Do not invent offers, discounts, guarantees, urgency, or availability.

---

## Part 8: Final Search Intent Defense

Provide:

1. Intent match score
2. What the strategy gets right
3. What is missing
4. What could cause users to bounce
5. Required fixes
6. Required content-strength improvements
7. Optional improvements
8. Client-confirmation items
9. Recommended next prompt
10. Final decision

Final decision must be one of:

- Intent match is strong
- Intent match is acceptable after minor fixes
- Intent match needs major revision
- Intent mismatch is likely
- Needs SERP research before proceeding
- Needs client confirmation before proceeding
- Intent match is acceptable, but content-strength items must be carried forward

Then provide:

- Safest next workflow step
- Whether the page is ready for Prompt 02 Page Outline
- Whether the page needs Prompt 11 SERP Competitive Analysis first
- Whether the page needs Prompt 15 Page Variant Battle first
- Whether unresolved items should be carried forward
- Which content-strength items must be carried into Prompt 02
- Which content-strength items must be carried into Prompt 05, Prompt 06, Prompt 07, Prompt 08, Prompt 10, or client intake

---

## Carry-Forward Items

If any search intent finding or content-strength finding requires client data, SERP research, competitor research, or verified business information to resolve safely, flag each item with:

- Item
- Status: NEEDS CLIENT CONFIRMATION, NEEDS SERP RESEARCH, NEEDS COMPETITOR RESEARCH, or NEEDS CONTENT STRENGTH CARRY-FORWARD
- Blocking page outline: YES / NO
- Classification:
  - REQUIRED BEFORE OUTLINE
  - REQUIRED BEFORE BUILD
  - REQUIRED BEFORE LAUNCH
  - OPTIONAL IMPROVEMENT
- Recommended next action
- Carry-forward destination

Examples include unverified:

- SERP expectations
- Competitor findings
- Pricing or cost guidance
- Reviews or testimonials
- Certifications or licenses
- Service guarantees
- Availability
- Service area coverage
- Years in business
- Case studies
- Team credentials
- Insurance or bonding claims
- Business hours
- Financing options
- Analytics or conversion data
- User behavior assumptions
- Direct-answer block requirements
- Local context requirements
- Special handling or service restriction caveats
- Internal linking modules
- CTA placement requirements
- Trust section placeholder requirements

Carry unresolved items forward to Prompt 10, Prompt 11, Prompt 15, Prompt 04, Prompt 08, Prompt 13, Prompt 02, or the client intake process as appropriate.

Do not invent data to resolve flagged items.

---

## Required Output Format

Use this structure unless the user requests a specific format:

# Search Intent Defense Report

## Intent Defense Summary

- Business:
- Page:
- Page Type:
- Target Keyword:
- Target Location:
- Target Audience:
- Execution Depth:
- Intent Match Score:
- Final Decision:

## Part 1: Intent Diagnosis

[Provide findings]

## Part 2: Intent Satisfaction Map

[Provide table]

## Part 3: SERP Expectation Review

[Provide findings]

## Part 4: Intent Mismatch Risks

[Provide findings]

## Part 5: Content Strength Defense

[Provide table and summary]

## Part 6: Above-the-Fold Intent Check

[Provide findings]

## Part 7: Conversion Intent Check

[Provide findings]

## Part 8: Final Search Intent Defense

[Provide final defense]

## Carry-Forward Items

[List unresolved items that require client confirmation, SERP research, competitor research, verified business information, or content-strength carry-forward, or state “No carry-forward items identified.”]

---

## Final Instruction

Do not invent SERP findings, rankings, search volume, keyword difficulty, competitor findings, user behavior data, analytics results, conversion rates, testimonials, reviews, credentials, guarantees, pricing, or performance claims.

Do not write full page content unless specifically asked.

Focus on search intent accuracy, user expectations, page strategy alignment, content-strength quality, AEO readiness, local relevance when applicable, and conversion alignment.

Content-strength items must not disappear as generic recommendations.

If a content-strength item is required for the outline, build, launch, client intake, or another workflow prompt, explicitly carry it forward.