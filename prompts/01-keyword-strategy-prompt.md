# Prompt 01: Keyword Strategy

## Purpose

Create the keyword and intent strategy for the target page or website section.

This prompt runs after enough business, service, and location context exists to begin keyword planning.

Missing client data does not stop this prompt. Flag missing items, continue keyword strategy where possible, and carry all unresolved items forward to Prompt 02.

---

## Core Principle

Unresolved client data does not stop keyword strategy work when enough business, service, and location context exists.

If data is missing:
- Do not invent it.
- Do not treat it as confirmed.
- Flag it clearly.
- Continue keyword strategy using available context.
- Carry unresolved items forward to Prompt 02.

---

## Do Not Invent

Prompt 01 must never invent or treat as confirmed:

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

If any of these items would support keyword confidence or local SEO strategy but are not confirmed, list them as opportunities that require client confirmation. Do not use them as facts.

---

## Required Labels for Unresolved Items

Use these labels for missing or unconfirmed data:

- FLAGGED
- NEEDS CONFIRMATION
- UNRESOLVED
- CARRY FORWARD
- REQUIRES CLIENT CONFIRMATION

Avoid using:
- BLOCKED
- cannot proceed
- workflow stops

unless there is genuinely not enough core context to form any keyword strategy.

---

## What This Prompt Covers

Focus on:

- Primary keyword
- Secondary keywords
- Long-tail keywords
- Local and GEO keywords
- AEO questions
- Voice search phrases
- Search intent
- Entity and topical relevance
- Keyword-to-page recommendations
- Internal linking opportunities
- Keyword risks
- Missing client data that affects keyword confidence
- Items to carry forward to Prompt 02

---

## Step 1: Select Execution Depth

Choose one based on page value, competition level, and available context:

**Compact** — Use for simple pages, quick tasks, or low-priority pages.
**Standard** — Use for normal service pages, location pages, and blog posts.
**Deep** — Use for high-value pages, competitive keywords, or final QA passes.

State the selected depth at the top of the report.

---

## Step 2: Review Available Context

Review all available sources before beginning:

- Project knowledge base
- Uploaded documents
- Prior conversation context
- Confirmed client data from Prompt 10 if available

Identify:
- Business name and type
- Services offered
- Service locations
- Target audience
- Confirmed differentiators
- Any items marked CARRY FORWARD from Prompt 10

---

## Step 3: Identify Missing Context

For each missing item that affects keyword confidence, flag it using the labels above.

Do not wait for missing items to be resolved before proceeding.

Continue keyword strategy using what is confirmed.

---

## Step 4: Execute Keyword Strategy

### Primary Keyword

Identify the single best primary keyword for the target page.

Consider:
- Search volume
- Commercial or transactional intent
- Local modifier if applicable
- Alignment with the page goal

### Secondary Keywords

Identify 3 to 8 secondary keywords that support the primary keyword.

Include:
- Synonyms
- Related service terms
- Intent variations
- Location variations if applicable

### Long-Tail Keywords

Identify 5 to 12 long-tail keywords.

Focus on:
- Specific service + location combinations
- Problem-aware phrases
- Solution-aware phrases
- Comparison phrases
- Urgency phrases

### Local and GEO Keywords

If the business serves a local area, identify:

- City + service keywords
- Neighborhood + service keywords
- Near-me keyword opportunities
- County or region keywords if applicable
- Apple Maps and Google Maps keyword signals

If service areas are unconfirmed, flag each with REQUIRES CLIENT CONFIRMATION and include placeholder examples based on available context.

### AEO and Voice Search Strategy

Identify:

- Direct-answer questions the page could answer
- Featured snippet opportunities
- People Also Ask style questions
- Voice search phrases
- Near-me voice phrases if applicable
- Short answer statements for AI and LLM citation readiness

### Search Intent Analysis

Map each keyword group to:

- Informational intent
- Commercial intent
- Transactional intent
- Local intent
- Comparison intent
- Problem-aware intent
- Solution-aware intent
- Funnel stage

### Entity and Topical Authority Notes

Identify:

- Core entities for the page
- Related entities
- Service or topic entities
- Location entities if applicable
- Trust and credential entities
- Supporting subtopics that build topical authority

### Keyword-to-Page Recommendations

For each primary and secondary keyword, recommend:

- Target page type (service page, location page, blog post, FAQ page, landing page)
- URL slug recommendation
- Suggested meta title structure
- Suggested H1 structure
- Internal linking opportunity

### Internal Linking Opportunities

Identify:

- Pages on the site that should link to this page
- Pages this page should link to
- Anchor text suggestions
- Topical authority linking opportunities

### Conversion Keyword Strategy

Identify:

- High-intent buying keywords
- Urgency keywords
- Lead-readiness signals
- CTA alignment keywords
- Objection-related keywords

---

## Step 5: Identify Keyword Risks

Flag any risks including:

- Keyword stuffing potential
- Overuse of exact-match phrases
- Repetitive local modifiers
- Weak or broad keywords not aligned with the page goal
- Duplicate content risk with existing pages
- Keywords where missing client data reduces confidence

---

## Step 6: Flag Unresolved Data

For each unresolved item that affects keyword confidence or strategy, create an entry using this format:

- Item:
- Why it matters for keyword strategy:
- Status:
- Required confirmation:
- Carry-forward destination:

---

## Step 7: Determine Readiness for Prompt 02

Choose one:

- **READY FOR PROMPT 02** — Keyword strategy is complete. No unresolved items affect the outline.
- **READY FOR PROMPT 02 WITH FLAGGED ITEMS** — Keyword strategy is complete. Unresolved items are flagged and carried forward. Prompt 02 may proceed.
- **NEEDS MORE CORE CONTEXT BEFORE PROMPT 02** — Not enough business, service, or location context to form a usable keyword strategy. List what is needed.

Do not mark the strategy as production-ready if launch-critical or claim-sensitive data is unconfirmed.

The strategy may still be marked ready for Prompt 02 when enough core context exists and all unresolved items are flagged and carried forward.

---

## Required Output Format

Return this complete report:

---

# Prompt 01 Keyword Strategy Report

## 1. Execution Depth

Selected depth:

## 2. Source Context Review

### Sources Reviewed

### Business Context

### Service Context

### Location Context

### Missing Context

## 3. Confirmed Inputs

## 4. Missing or Unconfirmed Inputs

## 5. Primary Keyword Strategy

## 6. Secondary Keyword Strategy

## 7. Long-Tail Keyword Strategy

## 8. Local / GEO Keyword Strategy

## 9. AEO and Voice Search Strategy

## 10. Search Intent Analysis

## 11. Entity and Topical Authority Notes

## 12. Keyword-to-Page Recommendations

## 13. Conversion Keyword Strategy

## 14. Keyword Risks and Constraints

## 15. Flagged Unresolved Data

For each flagged item:

- Item:
- Why it matters:
- Status:
- Required confirmation:
- Carry-forward destination:

## 16. Items to Carry Forward to Prompt 02

## 17. Recommended Next Action

Choose one:

- READY FOR PROMPT 02
- READY FOR PROMPT 02 WITH FLAGGED ITEMS
- NEEDS MORE CORE CONTEXT BEFORE PROMPT 02

---

## Safety Rules

1. Do not add fake ratings, fake review counts, fake testimonials, fake certifications, fake licenses, fake pricing, fake service areas, or fake availability claims.

2. If these items would help SEO but are not verified, list them as opportunities that require client confirmation.

3. Do not use BLOCKED or cannot proceed unless there is genuinely not enough core context to form any keyword strategy.

4. Do not invent or assume any business claim not confirmed by the client.

5. Do not mark the keyword strategy as production-ready if launch-critical or claim-sensitive data is missing.

---

## Version

Prompt 01 v2
Updated to include unresolved issue flagging language, safety rules, and structured carry-forward behavior. 