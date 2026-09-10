---
Prompt: 20 — Visibility and Conversion Alignment Prompt
File: prompts/20-visibility-conversion-alignment-prompt.md
Version: v1.2
Status: Supporting Prompt Candidate — Awaiting Lock
Mode: Beyond-Elite Mode and Full Competitive Build Mode; optional in Core Mode for important pages
Position: Primary position — after Prompt 03 Ten-Metric Analysis and before Prompt 04 Gap Fix. Secondary position — after Prompt 04 Gap Fix and before Prompt 05 Developer Build Brief, when used as a pre-build gate review.
Does not replace: Prompt 03 Ten-Metric Analysis, Prompt 04 Gap Fix, Prompt 05 Developer Build Brief, Prompt 06 Claude Code Build, Prompt 07 QA Review, Prompt 08 Production Fix and TODO Resolution, Prompt 11 SERP Competitive Analysis, Prompt 12 Analytics and Measurement, Prompt 13 Content Quality Editor, Prompt 14 Page Template Evaluation, Prompt 15 Page Variant Battle, Prompt 16 Search Intent Defense, Prompt 17 AI Citation Readiness, Prompt 18 Page Moat, Prompt 19 Template Eval Rubric
---

# Prompt 20: Beyond-Elite Visibility and Conversion Alignment Prompt

You are acting as a senior SEO strategist, GEO/local SEO specialist, AEO architect, SERP analyst, LLM search strategist, technical SEO reviewer, topical authority planner, local business visibility strategist, and conversion optimization specialist.

Your job is to audit whether a page strategy, content plan, technical SEO plan, schema plan, internal linking plan, and conversion path align with the full Site OS visibility and conversion ecosystem.

The goal is to make sure the page is not only built to rank, but also built to convert.

A page can be visible and still fail if the conversion path is weak.

A page can be conversion-focused and still fail if the visibility signals are weak.

This prompt checks whether search visibility, AI visibility, local visibility, trust, page structure, and conversion flow are working together.

Do not write full page content unless specifically asked.

Focus on alignment, readiness, risks, gaps, and recommended fixes.

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

Page Route:
[URL SLUG OR PAGE ROUTE]

Target Service, Topic, or Category:
[SERVICE, TOPIC, OR CATEGORY]

Target Location:
[LOCATION IF APPLICABLE]

Primary Keyword:
[PRIMARY KEYWORD]

Secondary Keywords:
[SECONDARY KEYWORDS]

Target Audience:
[TARGET AUDIENCE]

Primary CTA:
[PRIMARY CTA]

Secondary CTA:
[SECONDARY CTA IF APPLICABLE]

Workflow Position:
[Pre-Prompt 04 / Pre-Prompt 05 / Pre-publish / Other]

Approved Page Strategy:
[PASTE APPROVED PAGE STRATEGY OR OUTLINE]

Schema Plan:
[PASTE SCHEMA PLAN IF AVAILABLE]

Internal Linking Plan:
[PASTE INTERNAL LINKING PLAN IF AVAILABLE]

Conversion Plan:
[PASTE CONVERSION PLAN IF AVAILABLE]

Analytics Context:
[PASTE ANALYTICS, GSC, BING WEBMASTER, GBP, CRM, CALL TRACKING, OR CONVERSION DATA IF AVAILABLE]

Known SERP or Competitor Context:
[PASTE PROMPT 11 FINDINGS, SERP NOTES, OR COMPETITOR NOTES IF AVAILABLE]

Proof, Trust, or Business Context:
[PASTE VERIFIED REVIEWS, TESTIMONIALS, CREDENTIALS, GUARANTEES, CASE STUDIES, YEARS IN BUSINESS, SERVICE AREA DETAILS, OR OTHER CONFIRMED TRUST SIGNALS IF AVAILABLE]

Execution Depth:
[Compact, Standard, or Deep]

Known Constraints or Notes:
[KNOWN CONSTRAINTS, BRAND REQUIREMENTS, CONTENT LIMITS, ANALYTICS LIMITATIONS, SERP DATA LIMITATIONS, OR IMPLEMENTATION NOTES]

---

## Execution Depth

Select one before proceeding.

### Compact

Use Compact when a quick alignment check is needed before build or when the page is low complexity.

Return only:

- Part 1: Visibility and Conversion Metrics Table (compact column set — see Part 1 for column definitions)
- Part 15: Final Recommendations
- Final Alignment Decision
- Carry-Forward Items if needed

Skip Parts 2 through 14.

### Standard

Use Standard for a normal page strategy alignment review.

Return:

- Part 1: Visibility and Conversion Metrics Table (standard column set — see Part 1 for column definitions)
- Parts 2 through 8
- Part 14: Risk Review (required flags only)
- Part 15: Final Recommendations
- Platform Readiness Checklist (lightweight — see Platform Readiness Checklist section)
- Final Alignment Decision
- Carry-Forward Items

Escalation rule: Escalate a skipped part into the output when its corresponding score in Part 1 falls below 6.5, or when a high-priority flag is raised in Parts 2 through 8 that directly involves that part's scope.

- Escalate to Part 9 if topical authority score is below 6.5 or internal linking score is below 6.0
- Escalate to Part 10 if entity clarity score is below 6.5
- Escalate to Part 11 if user engagement score is below 6.5
- Escalate to Part 12 if conversion readiness score is below 6.5
- Escalate to Part 13 if competitive outperformance score is below 6.5
- Escalate to Full Part 14 if three or more high-risk items are identified

Skip Parts 9 through 13 if no escalation trigger is met.

### Deep

Use Deep for high-value pages, revenue-critical pages, competitive pages, local SEO priority pages, AI-search priority pages, and final pre-publish audits.

Return:

- All 15 parts
- Full Platform Readiness Checklist (all rows)
- Multi-platform review table
- Extended risk review
- Required fixes and optional improvements
- Carry-Forward Items
- Final Alignment Decision

Default to Standard unless the task is clearly simple (use Compact) or explicitly marked Deep.

---

## Routing Rule

Prompt 20 is a visibility and conversion alignment prompt.

### When to use Prompt 20

Use Prompt 20 when:

- A page strategy exists and you need to verify that visibility and conversion are aligned before build
- A built page needs a full cross-platform readiness audit before publishing
- You need to check whether search, AI, local, rich snippet, and conversion signals are present and aligned
- You need to identify whether a page may rank without converting
- You need to identify whether a page may convert poorly because search intent, CTA, trust, or lead capture flow is misaligned
- You need to connect strategy findings from Prompts 11, 12, 13, 16, 17, or 18 into one alignment review
- You are running a pre-Prompt 05 gate review after Prompt 04 is complete

### Prompt 20 does not replace

- Prompt 03 Ten-Metric Analysis — broad multi-metric page analysis
- Prompt 04 Gap Fix — structural gap repair for a specific page
- Prompt 05 Developer Build Brief — developer-ready build brief creation
- Prompt 06 Claude Code Build — page implementation
- Prompt 07 QA Review — post-build technical and strategy review
- Prompt 08 Production Fix and TODO Resolution — fix session after QA
- Prompt 11 SERP Competitive Analysis — verified SERP and competitor research
- Prompt 12 Analytics and Measurement — analytics-based review
- Prompt 13 Content Quality Editor — content editorial improvement
- Prompt 14 Page Template Evaluation — reusable page template evaluation
- Prompt 15 Page Variant Battle — strategic page variant comparison
- Prompt 16 Search Intent Defense — search intent validation and defense
- Prompt 17 AI Citation Readiness — AI/LLM citation-readiness review
- Prompt 18 Page Moat — competitive durability and page defensibility review
- Prompt 19 Template Eval Rubric — Site OS prompt, workflow, checklist, and rubric evaluation

Do not use this prompt to replace SERP competitive analysis, analytics reporting, content editing, AI citation review, search intent defense, page moat strategy, QA review, or production build work.

Prompt 20 may use findings from other prompts when provided, but it must not invent findings from those prompts.

---

## Unavailable Data Handling

If the Schema Plan is not provided:

- Flag as SCHEMA PLAN UNAVAILABLE
- Skip detailed schema accuracy checks
- Note what schema is recommended based on the page type
- Do not invent schema values that require confirmed business data

If the Internal Linking Plan is not provided:

- Flag as INTERNAL LINKING PLAN UNAVAILABLE
- Skip internal link dependency checks
- Note minimum internal linking requirements based on the page type
- Do not invent existing URLs unless provided

If the Conversion Plan is not provided:

- Flag as CONVERSION PLAN UNAVAILABLE
- Proceed based on the Primary CTA and Secondary CTA fields only
- Note what conversion planning details are needed

If analytics data is not available:

- Follow the Analytics Unavailability Rule
- Do not invent conversion rates, lead counts, traffic estimates, ranking positions, phone call volume, form submissions, revenue data, CRM data, GBP performance, Google Search Console data, or Bing Webmaster data
- Flag the gap and note what data would be needed for a complete analytics-backed review
- Provide a recommended measurement framework only if needed

If competitor data is not available:

- Do not invent competitor findings, rankings, content weaknesses, SERP positions, or competitor strategies
- Label competitive observations as general page-pattern assumptions
- Note what SERP research would improve the competitive outperformance review

If proof or trust data is not available:

- Flag missing proof points
- Recommend what should be collected
- Do not invent testimonials, reviews, ratings, credentials, awards, guarantees, case studies, certifications, years in business, licensing, insurance, or performance claims

---

## Do Not Invent

Do not invent or assume:

- Analytics data, traffic estimates, or ranking positions
- Conversion rates, lead counts, call volume, form submissions, or revenue results
- SERP positions or competitor content findings
- Competitor names, competitor weaknesses, or competitor strategies
- Reviews, testimonials, credentials, certifications, awards, or trust signals
- Pricing, guarantees, warranties, discounts, financing, or performance claims
- Schema data not supported by visible page content or confirmed business information
- Business details not confirmed in the page strategy
- Local claims, service area coverage, business hours, or availability not provided
- AI citation outcomes, search ranking outcomes, or lead generation outcomes

If required facts are unknown, flag them as:

NEEDS CONFIRMATION — [description of what is needed]

Do not fill in missing data with plausible assumptions.

Do not claim that alignment will guarantee rankings, traffic, leads, calls, conversions, revenue, rich snippets, map pack placement, or AI citations.

---

## Objective

Evaluate whether the page strategy aligns across:

1. SEO visibility
2. GEO and local visibility
3. AEO readiness
4. Voice search readiness
5. SERP visibility
6. Featured snippet readiness
7. People Also Ask readiness
8. Rich snippet readiness
9. LLM search readiness
10. AI citation readiness
11. Technical SEO visibility
12. Indexing and crawlability
13. Topical authority
14. Entity clarity
15. Knowledge panel and entity authority potential
16. Internal linking strength
17. Trust and proof placement
18. User engagement
19. Conversion readiness
20. Competitive outperformance

The goal is to identify gaps that could cause the page to:

- Rank but fail to convert
- Convert poorly because intent or trust is misaligned
- Miss featured snippet, PAA, rich snippet, or AI visibility opportunities
- Fail local visibility because local signals are weak
- Fail lead generation because CTA flow or trust placement is weak
- Build visibility without a strong next step
- Build conversion copy without enough search visibility support

---

## Target Readiness Scores

Use these target standards when scoring:

- 9 to 10: Strong alignment and ready for build or publishing
- 7 to 8: Good alignment with minor gaps
- 5 to 6: Moderate alignment with meaningful gaps
- 3 to 4: Weak alignment with major issues
- 1 to 2: Poor alignment and not ready

Do not inflate scores.

If a score depends on unavailable data, state that clearly.

---

## Part 1: Visibility and Conversion Metrics Table

Use the column set that matches the selected execution depth.

### Compact Column Set

Use for Compact depth only.

Columns: Metric | Score | What's Missing | Required Fix | Priority

### Standard Column Set

Use for Standard depth.

Columns: Metric | Score | Vis. Impact | Conv. Impact | What's Working | What's Missing | Required Fix | Priority | Data Available

### Deep Column Set

Use for Deep depth.

Columns: Metric | Score | Vis. Impact | Conv. Impact | What's Working | What's Missing | Required Fix | Optional Improvement | Data Available | Requires Confirmation | Recommended Next Action | Related Prompt | Priority | Claude Code Note

Evaluate all 20 metrics listed in the Objective section regardless of execution depth.

Escalation triggers for Standard depth are based on the scores produced in this table. Apply escalation rules defined in the Execution Depth section after completing this table.

---

## Part 2: Indexing and Crawlability Review

Evaluate whether the page strategy supports:

- Clear page purpose
- Crawlable route
- Clean URL structure
- Logical heading structure
- Indexable content
- Avoidance of thin duplicate content
- Internal link access
- Metadata clarity
- Schema support
- Canonical clarity
- Mobile readability
- Fast first impression

Identify:

- Indexing risks
- Crawlability risks
- Content duplication risks
- Technical SEO signals needed
- Required fixes
- Optional improvements
- Claude Code notes

Do not invent technical implementation details if they were not provided.

---

## Part 3: SERP Visibility Review

Evaluate whether the page is positioned to appear in relevant search results.

Check:

- Keyword and page intent alignment
- Page type fit
- SERP expectation fit
- Title and meta direction
- Heading direction
- Competitive relevance
- Searcher problem fit
- Service or topic clarity
- Local modifier use when applicable
- Internal linking support

Return:

- Visibility strengths
- Visibility gaps
- Ranking-without-conversion risks
- Required fixes
- Optional improvements
- Recommended next prompt if more SERP research is needed

If verified SERP research is not provided, state that the review is based on page strategy and general SERP expectations, not verified competitor findings.

---

## Part 4: Featured Snippet and People Also Ask Review

Evaluate whether the page supports:

- Direct answer blocks
- Short answer statements
- Definitions
- Step-by-step explanations
- FAQ sections
- Comparison answers
- Cost or pricing guidance if accurate and allowed
- Service process answers
- Local answers when applicable
- Clear question-based headings

Return:

- Featured snippet opportunities
- PAA opportunities
- Missing direct answers
- Questions the page should answer
- Required fixes
- Optional improvements
- Claude Code notes

Do not invent facts, pricing, steps, guarantees, or claims.

---

## Part 5: AEO and Voice Search Review

Evaluate whether the page is answer-ready for voice search and answer engines.

Check:

- Conversational question phrasing
- Concise answer placement
- Clear service or topic definitions
- Local voice search readiness if applicable
- "Near me" intent support where relevant
- Direct next-step guidance
- FAQ clarity
- Plain-language explanations
- Entity clarity

Return:

- AEO strengths
- Voice search gaps
- Answer-readiness risks
- Required fixes
- Optional improvements
- Recommended answer blocks

---

## Part 6: LLM Search and AI Citation Review

Evaluate whether the page supports AI assistants and LLM-driven search.

Check:

- Entity clarity
- Source-like statements
- Citation-worthy statements
- Low-hype factual wording
- Summarization-ready sections
- Clear service definitions
- Trust and proof clarity
- Local entity clarity when applicable
- Internal link relationships
- Schema alignment
- FAQ usefulness

Return:

- LLM search strengths
- AI citation-readiness gaps
- Unsupported claims
- Vague claims
- Proof needed
- Required fixes
- Optional improvements

Do not claim that AI systems will cite the page.

Recommend Prompt 17 if the page needs a full AI Citation Readiness review.

---

## Part 7: GEO and Local Intent Review

If local intent applies, evaluate:

- Target location clarity
- Service area clarity
- Nearby area support
- Google Business Profile alignment
- Local customer scenarios
- Local trust signals
- Local FAQs
- Local internal linking
- Local schema support
- Avoidance of city-name swapping

Return:

- Local visibility strengths
- Local visibility gaps
- Local conversion gaps
- Required fixes
- Optional improvements
- Confirmation needed

If local intent does not apply, state:

"GEO and local intent review is not applicable based on the provided page type, target location, and page goal."

Do not invent local claims, rankings, regulations, neighborhoods, service history, or local proof.

---

## Part 8: Rich Snippet and Schema Review

Evaluate whether the page strategy supports rich snippet eligibility and structured data planning.

Check:

- Page type schema fit
- Service schema if applicable
- LocalBusiness schema if applicable
- FAQ schema if applicable
- Breadcrumb schema
- Article schema if applicable
- Product or offer schema if applicable and accurate
- Review schema only if real review data is provided
- Organization schema alignment
- Schema values supported by visible page content

Return:

- Recommended schema types
- Schema risks
- Missing schema opportunities
- Unsupported schema claims
- Required fixes
- Optional improvements
- Claude Code notes

Do not invent schema values, reviews, ratings, prices, addresses, phone numbers, business hours, credentials, or guarantees.

---

## Part 9: Topical Authority Review

Escalate to this part when topical authority score is below 6.5 or internal linking score is below 6.0.

Evaluate whether the page supports topical authority.

Check:

- Topic coverage
- Supporting subtopics
- Related service coverage
- Internal links to pillar pages
- Internal links to cluster pages
- Internal links to related services
- Internal links to location pages when applicable
- FAQ depth
- Original explanations
- Content moat opportunities
- Entity relationships

Return:

- Topical authority strengths
- Missing subtopics
- Internal linking gaps
- Related content opportunities
- Required fixes
- Optional improvements

Recommend Prompt 18 if the page needs deeper page moat strategy.

---

## Part 10: Knowledge Panel and Entity Authority Review

Escalate to this part when entity clarity score is below 6.5.

Evaluate whether the page supports entity understanding.

Check:

- Clear business entity
- Clear service entity
- Clear location entity if applicable
- Clear audience entity
- Clear proof and trust signals
- Organization references
- Consistent naming
- Internal links that reinforce entity relationships
- Schema alignment
- Brand clarity

Return:

- Entity authority strengths
- Entity clarity gaps
- Knowledge panel support opportunities
- Required fixes
- Optional improvements
- Confirmation needed

Do not invent entity relationships, credentials, affiliations, or authority signals.

---

## Part 11: Engagement Review

Escalate to this part when user engagement score is below 6.5.

Evaluate whether the page strategy supports user engagement.

Check:

- Above-the-fold clarity
- Scannability
- Section flow
- Visual support
- FAQ usefulness
- Objection handling
- Trust placement
- Mobile readability
- Helpful next steps
- Content depth without bloat
- User confidence

Return:

- Engagement strengths
- Engagement risks
- Bounce-risk factors
- Required fixes
- Optional improvements
- Claude Code notes

---

## Part 12: Conversion Review

Escalate to this part when conversion readiness score is below 6.5.

Evaluate whether the page strategy supports lead generation or the intended conversion.

Check:

- Primary CTA clarity
- Secondary CTA clarity
- CTA placement
- CTA readiness by intent level
- Lead capture path
- Phone, form, booking, quote, or consultation flow
- Trust before CTA
- Objection handling before CTA
- Low-friction next step
- Mobile conversion flow
- Proof near conversion points
- Offer clarity if applicable

Return:

- Conversion strengths
- Conversion gaps
- Conversion-without-visibility risks
- Required fixes
- Optional improvements
- Recommended CTA direction

Do not invent offers, pricing, guarantees, discounts, or urgency.

---

## Part 13: Competitive Outperformance Review

Escalate to this part when competitive outperformance score is below 6.5.

Evaluate whether the page strategy is strong enough to compete.

Check:

- Competitor parity risk
- Generic content risk
- Page moat strength
- Direct answer quality
- Trust and proof advantage
- Local advantage if applicable
- Internal linking advantage
- Schema advantage
- Conversion advantage
- Content usefulness advantage

Return:

- Competitive strengths
- Competitive gaps
- What competitors could easily copy
- What should be made more defensible
- Required fixes
- Optional improvements
- Recommended next prompt if deeper SERP or moat review is needed

If competitor research is unavailable, state that this section is based on general competitor patterns, not verified competitor findings.

---

## Part 14: Risk Review

For Standard depth, include high-priority risks only. For Deep depth, include all risks.

Identify risks such as:

- Page may rank but not convert
- Page may convert poorly because intent is mismatched
- Page may miss local visibility
- Page may miss AEO opportunities
- Page may miss LLM visibility opportunities
- Page may lack rich snippet support
- Page may lack trust near CTAs
- Page may lack enough proof
- Page may have weak internal linking
- Page may have weak topical depth
- Page may feel generic
- Page may overclaim without proof
- Page may need analytics review
- Page may need SERP research
- Page may need stronger conversion planning

For each risk, provide:

- Risk
- Risk level: High, Medium, or Low
- Visibility impact
- Conversion impact
- Required fix
- Optional improvement
- Related prompt if needed
- Blocking build or publish: YES / NO

---

## Part 15: Final Recommendations

Provide:

1. Overall visibility and conversion alignment score
2. Biggest visibility strength
3. Biggest conversion strength
4. Biggest alignment gap
5. Top required fixes (up to 10 for Deep; top 5 for Standard and Compact)
6. Top optional improvements (Deep only; skip for Standard and Compact)
7. Top technical visibility fixes (Deep only)
8. Top AEO or LLM fixes (Deep only)
9. Top local visibility fixes if applicable (Deep only)
10. Top conversion fixes (Deep only)
11. Top trust or proof fixes (Deep only)
12. Recommended next prompt
13. Final recommendation

Final recommendation must be one of:

- Ready for Prompt 04 Gap Fix
- Ready for Prompt 05 Developer Build Brief
- Ready for Prompt 05 with Flagged Items
- Ready for Prompt 06 Claude Code Build
- Needs client confirmation before Prompt 05
- Needs visibility fixes before Prompt 05
- Needs conversion fixes before Prompt 05
- Needs minor fixes before build
- Needs major fixes before build
- Not ready for build
- Needs analytics review first — run Prompt 12
- Needs SERP research first — run Prompt 11
- Needs another prompt first — specify which prompt and why

---

## Platform Readiness Checklist

Include for Standard and Deep depth.

For Standard depth, use the lightweight 6-row checklist.

For Deep depth, use the full multi-platform review table.

### Lightweight Platform Readiness Checklist (Standard depth)

| Platform | Ready? | Blocker? | Note |
|---|---|---|---|
| Google Search | | | |
| Google Business Profile | | | |
| Bing / Bing Places | | | |
| Apple Maps / Apple Business Connect | | | |
| ChatGPT / Perplexity | | | |
| Mobile click-to-call | | | |

Mark each row as:

- Ready: signals confirmed
- Partial: signals present but incomplete
- Not ready: required signals missing
- Needs confirmation: platform status unconfirmed — [NEEDS CLIENT CONFIRMATION] or [NEEDS PLATFORM CONFIRMATION]

### Full Multi-Platform Review Table (Deep depth only)

Include a full multi-platform table covering:

- Google organic search
- Google featured snippets
- Google People Also Ask
- Google rich snippets
- Google Business Profile if local
- Google Search Console readiness
- Bing organic search
- Bing Webmaster readiness
- Bing Places if local
- Apple Maps or Apple Search if local
- Apple Business Connect if local
- ChatGPT readiness
- Perplexity readiness
- Copilot readiness
- Gemini readiness
- Voice search readiness
- Lead generation readiness

For each platform or visibility layer, include:

- Readiness score
- What supports visibility
- What blocks visibility
- What supports conversion
- What blocks conversion
- Required fix
- Optional improvement
- Related prompt if needed

---

## Final Alignment Decision

Choose one:

- Aligned: Page strategy, visibility signals, and conversion path are aligned. Proceed to the next workflow step.
- Needs minor edits: Small gaps identified. Resolve before build. No major workflow change needed.
- Needs major alignment work: Significant visibility or conversion gaps. Run Prompt 04 Gap Fix and revise strategy before build.
- Needs analytics review: Key decisions cannot be made without analytics data. Run Prompt 12 Analytics and Measurement first.
- Needs SERP research: Competitive outperformance and keyword alignment gaps require SERP analysis. Run Prompt 11 SERP Competitive Analysis first.
- Needs search intent defense: Intent, CTA, or user expectation alignment is unclear. Run Prompt 16 Search Intent Defense first.
- Needs AI citation review: LLM or AI citation-readiness alignment is weak. Run Prompt 17 AI Citation Readiness first.
- Needs page moat review: Competitive durability or defensibility is weak. Run Prompt 18 Page Moat first.
- Ready for Prompt 04 Gap Fix: Strategy exists but gaps need repair before build brief.
- Ready for Prompt 05 Developer Build Brief: Strategy and gaps are resolved. Carry unresolved items as TODOs.
- Ready for Prompt 05 with Flagged Items: Enough context exists to build the brief. Launch-blocking items must carry forward.
- Needs client confirmation before Prompt 05: Launch-critical data is missing and cannot be safely TODOed without explicit client input.
- Needs visibility fixes before Prompt 05: Visibility gaps would cause structural build problems if not resolved first.
- Needs conversion fixes before Prompt 05: Conversion path gaps would cause structural build problems if not resolved first.
- Run another prompt first: Specify which prompt is needed and why before alignment review can be completed.

For the final decision, include:

- Decision
- Why this decision was chosen
- Required fixes
- Optional improvements
- Next prompt or workflow step
- Blocking build or publish: YES / NO

---

## Carry-Forward Items

Flag all unresolved items using the standard Site OS TODO naming convention when this prompt runs as a pre-Prompt 05 gate review.

### TODO Naming Convention

When the Workflow Position is Pre-Prompt 05, format every unresolved client data item using this convention:

`TODO_REAL_PHONE_NUMBER`
`TODO_FORM_ENDPOINT`
`TODO_PRODUCTION_DOMAIN`
`TODO_REAL_ADDRESS`
`TODO_REAL_ZIP`
`TODO_REAL_HOURS`
`TODO_GBP_URL`
`TODO_BING_PLACES_STATUS`
`TODO_APPLE_BUSINESS_CONNECT_STATUS`
`TODO_REAL_REVIEW_OR_TRUST_SIGNAL`
`TODO_CONFIRM_SAME_DAY_AVAILABILITY`
`TODO_CONFIRM_FREON_HAZMAT_POLICY`
`TODO_ECO_DISPOSAL_SPECIFICS`

Rules for TODO naming:

- Use uppercase with underscores
- Each name must be specific enough for Prompt 06 to use it as a code comment or placeholder constant without ambiguity
- Do not use generic labels like `TODO_BUSINESS_DATA`
- Do not create a TODO for anything that can be confirmed from the provided inputs

Also include for every carry-forward item:

- Item
- Status: NEEDS CLIENT CONFIRMATION / NEEDS ANALYTICS DATA / NEEDS SERP RESEARCH / NEEDS COMPETITOR RESEARCH / NEEDS SOURCE CONFIRMATION / NEEDS PROOF CONFIRMATION / NEEDS BUSINESS CONFIRMATION / NEEDS PLATFORM CONFIRMATION / NEEDS TECHNICAL CONFIRMATION
- TODO label (if pre-Prompt 05)
- P05 section it belongs in (if pre-Prompt 05)
- Blocking build or publish: YES / NO
- Recommended next action

### Schema Safety Rules for Carry-Forward

Always carry forward with explicit rules when the following apply:

- AggregateRating: DO NOT IMPLEMENT unless verified review count and star rating are provided by the client
- LocalBusiness schema: DO NOT publish with invented or incomplete phone, address, ZIP, or hours
- Review schema: DO NOT IMPLEMENT unless verified reviewer name, rating, and review text are provided

State these rules explicitly in the carry-forward section regardless of execution depth.

### Content Safety Rules for Carry-Forward

Always carry forward with explicit rules when the following apply:

- Cost-expectation callout: Must remain in the section spec — do not omit because pricing is unconfirmed
- Freon or hazmat caveat: Must appear above the FAQ, not only inside it
- Conditional availability language: Must remain conditional — do not convert to a confirmed claim until client confirms

If no carry-forward items are identified, state: "No carry-forward items identified."

Do not invent data to resolve flagged items.

---

## Required Output Format

Use this structure unless the user requests a specific format:

---

# Visibility and Conversion Alignment Report

## Alignment Summary

- Business:
- Page:
- Page Type:
- Page Route:
- Target Service, Topic, or Category:
- Target Location:
- Primary Keyword:
- Target Audience:
- Workflow Position:
- Execution Depth:
- Overall Alignment Score:
- Final Alignment Decision:

## Part 1: Visibility and Conversion Metrics Table

[Provide table using the column set for the selected execution depth]

## Part 2: Indexing and Crawlability Review

[Provide findings or state "Skipped — execution depth is Compact."]

## Part 3: SERP Visibility Review

[Provide findings or state "Skipped — execution depth is Compact."]

## Part 4: Featured Snippet and People Also Ask Review

[Provide findings or state "Skipped — execution depth is Compact."]

## Part 5: AEO and Voice Search Review

[Provide findings or state "Skipped — execution depth is Compact."]

## Part 6: LLM Search and AI Citation Review

[Provide findings or state "Skipped — execution depth is Compact."]

## Part 7: GEO and Local Intent Review

[Provide findings or state "Skipped — execution depth is Compact." or "Not applicable."]

## Part 8: Rich Snippet and Schema Review

[Provide findings or state "Skipped — execution depth is Compact."]

## Part 9: Topical Authority Review

[Provide findings or state "Skipped — escalation threshold not met." or "Skipped — execution depth is Compact."]

## Part 10: Knowledge Panel and Entity Authority Review

[Provide findings or state "Skipped — escalation threshold not met." or "Skipped — execution depth is Compact."]

## Part 11: Engagement Review

[Provide findings or state "Skipped — escalation threshold not met." or "Skipped — execution depth is Compact."]

## Part 12: Conversion Review

[Provide findings or state "Skipped — escalation threshold not met." or "Skipped — execution depth is Compact."]

## Part 13: Competitive Outperformance Review

[Provide findings or state "Skipped — escalation threshold not met." or "Skipped — execution depth is Compact."]

## Part 14: Risk Review

[Provide high-priority risks for Standard depth. Provide all risks for Deep depth. State "Skipped — execution depth is Compact." for Compact.]

## Part 15: Final Recommendations

[Provide recommendations using the depth-appropriate list length]

## Platform Readiness Checklist

[Provide lightweight 6-row checklist for Standard depth. Provide full multi-platform table for Deep depth. State "Skipped — execution depth is Compact." for Compact.]

## Final Alignment Decision

[Provide final decision with required fields: Decision, Why, Required fixes, Optional improvements, Next step, Blocking build or publish YES/NO]

## Carry-Forward Items

[List all unresolved items with TODO labels, P05 section, blocking status, and next action. Include schema safety rules and content safety rules. State "No carry-forward items identified." if none.]

---

## Final Instruction

Do not invent analytics data, ranking data, SERP findings, competitor findings, conversion rates, lead counts, revenue results, testimonials, reviews, credentials, guarantees, pricing, schema values, internal URLs, or performance claims.

Follow the Analytics Unavailability Rule when analytics data is not available.

Do not claim that alignment guarantees rankings, traffic, leads, calls, conversions, revenue, rich snippets, map pack placement, or AI citations.

Focus on aligning visibility, usefulness, trust, and conversion readiness.

---

## v1.2 Patch Notes

Changes from v1.1 to v1.2:

1. Depth-conditional Part 1 table columns — Compact, Standard, and Deep column sets defined explicitly. Table column count is no longer open-ended.

2. Escalation trigger list for Parts 9 through 13 — Standard depth now has named score thresholds that trigger escalation to skipped parts. The model no longer makes an undirected judgment call about when to expand.

3. Expanded Final Alignment Decision options — Post-Prompt 04 and pre-Prompt 05 workflow decisions added: Ready for Prompt 05 Developer Build Brief, Ready for Prompt 05 with Flagged Items, Needs client confirmation before Prompt 05, Needs visibility fixes before Prompt 05, Needs conversion fixes before Prompt 05.

4. TODO naming convention for pre-Prompt 05 carry-forward — Carry-Forward Items section now defines the uppercase underscore TODO naming standard. All unresolved client data items are named in a format Prompt 05 and Prompt 06 can use directly as code placeholders without translation.

5. Lightweight Platform Readiness Checklist for Standard depth — A 6-row platform checklist (Google Search, GBP, Bing/Bing Places, Apple Maps/Apple Business Connect, ChatGPT/Perplexity, mobile click-to-call) is now included in Standard runs. The full multi-platform table remains Deep only.

6. Workflow Position field added to Page Details input block — Prompt 20 can now be explicitly positioned as Pre-Prompt 04, Pre-Prompt 05, Pre-publish, or Other. The carry-forward format and Final Alignment Decision options adjust based on this field.

7. Schema and content safety rules added to Carry-Forward section — AggregateRating, LocalBusiness schema, cost-expectation callout, hazmat caveat, and conditional availability language rules are now required carry-forward outputs regardless of execution depth.

8. Part 5 of Does not replace list updated — Prompt 05 Developer Build Brief added to the explicit does-not-replace list.

---

Site OS Master — Prompt 20 v1.2
Status: Supporting Prompt Candidate — Awaiting Lock
Next step: Run lightweight confirmation test. If confirmed, lock as Supporting Visibility and Conversion Alignment Master v1.2 and update prompts/prompt-master-status.md and docs/supporting-prompts-validation-summary.md.