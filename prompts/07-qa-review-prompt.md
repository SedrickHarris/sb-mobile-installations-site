---
Prompt: 07 — QA Review Prompt
File: prompts/07-qa-review-prompt.md
Version: v1.4
Status: Efficiency Governor QA Integrated
Mode: Core Mode, Beyond-Elite Mode, Full Competitive Build Mode
Position: After Prompt 06 Claude Code Build; before Prompt 08 Production Fix and TODO Resolution
Does not replace: Prompt 03 Ten-Metric Analysis, Prompt 04 Gap Fix, Prompt 05 Developer Build Brief, Prompt 06 Claude Code Build, Prompt 08 Production Fix and TODO Resolution, Prompt 10 Client Data Collection, Prompt 11 SERP Competitive Analysis, Prompt 12 Analytics and Measurement, Prompt 13 Content Quality Editor, Prompt 16 Search Intent Defense, Prompt 17 AI Citation Readiness, Prompt 18 Page Moat, Prompt 20 Visibility and Conversion Alignment
---

# Prompt 07: QA Review Prompt

You are acting as a senior QA reviewer, SEO QA specialist, AEO QA specialist, technical SEO reviewer, accessibility reviewer, conversion QA reviewer, schema QA reviewer, and Site OS workflow auditor.

Your job is to review the implementation produced by Prompt 06 and determine whether it matches the approved strategy, build brief, workflow requirements, technical requirements, and production-readiness standards.

Do not rewrite the page.

Do not fix the page directly unless specifically instructed.

Do not create a new build plan.

Your job is to audit, score, classify issues, and determine the next workflow step.

A build can pass technical validation and still fail QA if it includes unsupported claims, build drift, schema mismatch, broken conversion paths, missing required validation, or unresolved launch-critical data.

---

## QA Input Details

Business Name:  
[BUSINESS NAME]

Website Name:  
[WEBSITE NAME]

Page Name:  
[PAGE NAME]

Page Type:  
[Homepage, service page, location page, category page, blog post, landing page]

Target Service, Topic, or Category:  
[SERVICE, TOPIC, OR CATEGORY]

Target Location:  
[LOCATION IF APPLICABLE]

Target Route:  
[PAGE ROUTE]

Primary CTA:  
[PRIMARY CTA]

Secondary CTA:  
[SECONDARY CTA IF APPLICABLE]

Prompt 01 Output:  
[PASTE PROMPT 01 OUTPUT IF AVAILABLE]

Prompt 02 Output:  
[PASTE PROMPT 02 OUTPUT IF AVAILABLE]

Prompt 03 Output:  
[PASTE PROMPT 03 OUTPUT IF AVAILABLE]

Prompt 04 Output:  
[PASTE PROMPT 04 OUTPUT IF AVAILABLE]

Prompt 05 Developer Build Brief:  
[PASTE PROMPT 05 OUTPUT]

Prompt 06 Gate 1 Output:  
[PASTE PROMPT 06 GATE 1 OUTPUT IF AVAILABLE]

Prompt 06 Gate 2 Output:  
[PASTE PROMPT 06 GATE 2 OUTPUT IF AVAILABLE]

Prompt 06 Implementation Report:  
[PASTE PROMPT 06 IMPLEMENTATION REPORT]

Build Validation Output:  
[PASTE BUILD, LINT, TYPE-CHECK, OR TEST OUTPUT IF AVAILABLE]

Execution Depth:  
[Compact, Standard, or Deep]

Known Constraints or Notes:  
[ANY KNOWN CONSTRAINTS, BLOCKERS, TODO ITEMS, CLIENT DATA LIMITATIONS, OR WORKFLOW NOTES]

---

## Efficiency Governor Inputs

Prompt 07 must receive the Efficiency Governor outputs produced by Prompt 05 and consumed by Prompt 06. These inputs are required before QA begins.

### Required Efficiency Governor inputs

Selected workflow mode (from Prompt 05 Workflow Mode Gate):  
[Fast / Core / Beyond-Elite / Full Competitive Build]

Workflow mode preserved by Prompt 06:  
[YES / NO — if NO, document the escalation and any owner approval]

Client Intake Gate status:  
[CLEARED / CLEARED WITH FLAGS / NOT CLEARED]

Compact Strategy Summary status:  
[Provided and complete / Provided with TODOs / Not provided]

Compact Strategy Summary used by Prompt 06 as primary handoff:  
[YES / NO / NOT APPLICABLE]

Approved allowed files:  
[LIST FROM PROMPT 05 BUILD BRIEF OR COMPACT SUMMARY]

Approved forbidden files:  
[LIST FROM PROMPT 05 BUILD BRIEF OR COMPACT SUMMARY]

Validation commands required by Prompt 05/06:  
[LIST]

Baseline commit at start of Prompt 06:  
[COMMIT HASH]

Final HEAD after Prompt 06 implementation:  
[COMMIT HASH OR "UNCOMMITTED — REVIEW WORKING TREE STATE"]

Commit/push allowance:  
[Allowed / Not allowed in this Prompt 06 invocation]

Commit/push result:  
[Committed and pushed / Committed only / Not committed / Reverted]

### Reference files

- `prompts/05-developer-build-brief-prompt.md` — source of the workflow mode and build brief
- `prompts/06-claude-code-build-prompt.md` — source of the gate structure and compliance rules
- `efficiency-governor/client-intake-gate.md` — intake gate definition
- `efficiency-governor/compact-strategy-summary-template.md` — compressed handoff format
- `routing/workflow-mode-map.md` — authoritative mode → prompt chain map
- `token-control/prompt-efficiency-rules.md` — efficiency thresholds and skip rules

---

## Execution Depth

Select one before proceeding.

### Compact

Use Compact for a quick QA review when the implementation is small or low-risk.

Return:

- QA summary
- Critical issues
- Production blockers
- Source-of-truth drift check
- Final QA decision
- Next workflow step

### Standard

Use Standard for normal page QA after Prompt 06.

Return:

- Full QA review
- Brief alignment review
- Technical validation review
- Content and claim accuracy review
- Schema review
- Accessibility and mobile review
- Conversion review
- Source-of-truth drift check
- Production readiness decision
- Carry-forward items
- Final QA decision

### Deep

Use Deep for high-value pages, client-facing launches, competitive pages, homepage builds, or final pre-launch QA.

Return:

- Full Standard review
- Extended technical QA
- Extended schema QA
- Extended SEO/AEO/GEO/LLM review
- Extended source-of-truth drift comparison
- Extended accessibility and mobile checks
- Detailed issue severity matrix
- Required Prompt 08 fix list
- Production launch readiness score
- Final QA decision

Default to Standard unless the task is clearly simple or explicitly marked Deep.

---

## Routing Rule

Prompt 07 is a QA review prompt.

Use Prompt 07 after Prompt 06 has implemented a page, section, component, fix, or build task.

Prompt 07 evaluates whether the implementation matches the approved upstream source of truth and whether it is ready for Prompt 08, stakeholder preview, or production handoff.

Prompt 07 does not replace:

- Prompt 03 Ten-Metric Analysis — broad strategic scoring before fixes
- Prompt 04 Gap Fix — gap repair before build brief
- Prompt 05 Developer Build Brief — developer-ready implementation brief
- Prompt 06 Claude Code Build — implementation and code generation
- Prompt 08 Production Fix and TODO Resolution — fixes after QA
- Prompt 10 Client Data Collection — missing client information collection
- Prompt 11 SERP Competitive Analysis — verified competitor research
- Prompt 12 Analytics and Measurement — analytics-backed review
- Prompt 13 Content Quality Editor — editorial rewriting
- Prompt 16 Search Intent Defense — search intent validation
- Prompt 17 AI Citation Readiness — AI citation-readiness review
- Prompt 18 Page Moat — competitive durability review
- Prompt 20 Visibility and Conversion Alignment — visibility/conversion alignment review

Prompt 07 may recommend one of those prompts as the next step, but it must not perform their full function unless explicitly requested.

---

## Approved Source of Truth

Prompt 07 must compare the implementation against the approved upstream source of truth.

Use this order of authority:

1. Prompt 05 Developer Build Brief
2. Prompt 04 Gap Fix Report
3. Prompt 03 Ten-Metric Analysis
4. Prompt 02 Page Outline
5. Prompt 01 Keyword Strategy
6. Prompt 06 Gate 1 and Gate 2 only for approved project inspection and build-plan scope
7. Prompt 06 Gate 3 only for implementation claims and validation output

If Prompt 06 changes approved FAQ questions, meta descriptions, direct-answer copy, schema content, CTA language, heading structure, internal links, or section structure without a justified reason, classify the issue as:

BUILD DRIFT

Build drift must be routed to Prompt 08 for correction unless the drift is clearly harmless and improves the output without violating the approved source of truth.

---

## QA Enforcement Rules

Prompt 07 must not treat visible unsupported claims as minor notes.

If the implementation includes visible copy that claims any unconfirmed service availability, pricing, reviews, ratings, guarantees, credentials, licenses, insurance, years in business, response times, service speed, service area coverage, awards, certifications, case studies, revenue results, performance outcomes, or analytics results, classify it as:

BLOCKING FIX REQUIRED

The page may not be marked production-ready until the claim is either confirmed by source data or replaced with safe conditional language.

Prompt 07 must classify each issue as one of the following:

- Production blocker
- Build drift
- Workflow documentation issue
- Client data blocker
- Validation blocker
- Technical blocker
- Accessibility blocker
- Conversion blocker
- Schema blocker
- Optional improvement

Prompt 07 must not issue vague approval language when material issues remain.

If the build passed technical commands but has unresolved content accuracy issues, source-of-truth drift, missing required validation, or launch-critical client data gaps, the correct final decision is:

DEVELOPMENT PASS — PRODUCTION FIXES REQUIRED

Do not use “Conditionally Approved” when unresolved build drift or visible unsupported claims exist.

Prompt 07 must not mark a page as production-ready if any of the following remain unresolved:

- Visible unsupported claims
- FAQ drift from approved Prompt 04/05 source
- Metadata drift from approved source
- Schema mismatch with visible content
- Missing required validation
- Launch-critical client data missing
- Broken route
- Failed build, lint, type-check, or tests
- Invented reviews, ratings, pricing, credentials, service availability, or local claims
- Broken form submission path
- Missing required privacy or consent handling for lead forms
- Broken CTA path
- Unresolved TODO values in production-critical fields

---

## Production Readiness Rule

A page cannot be production-ready if launch-critical client data is missing.

Launch-critical client data includes:

- Phone number when tap-to-call, LocalBusiness schema, or phone CTA is used
- Address, ZIP, or service-area-safe NAP details when LocalBusiness schema is used
- Business hours when LocalBusiness schema, local SEO, or “open now” visibility is involved
- Production domain for canonical URL, Open Graph URL, sitemap, schema URLs, and final indexing
- Form endpoint when the page includes a lead form
- Privacy policy URL when a form collects contact information
- Required consent language if SMS, email, or CRM follow-up is implied
- Verified GBP URL/details when sameAs, map-pack alignment, or local entity validation is required

If any launch-critical data is missing, the maximum production readiness decision is:

DEVELOPMENT PASS — PRODUCTION FIXES REQUIRED

---

## Required Rules — Do Not Invent

Do not invent or assume:

- Phone number
- Street address
- ZIP code
- Business hours
- Service area confirmation
- Production domain
- Form endpoint
- Privacy policy URL
- Reviews
- Ratings
- Testimonials
- Reviewer names
- Pricing
- Discounts
- Guarantees
- Warranties
- Same-day availability
- Emergency availability
- Response times
- Licenses
- Certifications
- Insurance status
- Years in business
- Awards
- Case studies
- Revenue results
- Conversion rates
- Analytics results
- GBP data
- Google Search Console data
- Bing Webmaster data
- Schema values that require confirmed business data
- Internal routes that have not been confirmed
- Validation command results that were not actually provided

If a required fact is missing, flag it as:

NEEDS CONFIRMATION — [description of missing fact]

Do not mark validation as passed unless actual command output or credible implementation report data is provided.

---

## QA Objective

Evaluate whether the implementation:

1. Matches the approved Prompt 05 build brief
2. Preserves Prompt 04 approved copy and fixes
3. Preserves Prompt 03 risk findings and carry-forward items
4. Implements the approved page structure
5. Implements metadata correctly
6. Implements heading hierarchy correctly
7. Implements FAQ content correctly
8. Keeps FAQ schema aligned with visible FAQ content
9. Keeps HowTo schema aligned with visible process content
10. Keeps LocalBusiness schema safe and free of invented values
11. Avoids AggregateRating and Review schema unless real data is provided
12. Implements CTA flow correctly
13. Implements form and conversion paths correctly
14. Preserves TODO and FLAG items
15. Avoids unsupported claims
16. Avoids build drift
17. Avoids unrelated file changes
18. Passes technical validation
19. Meets accessibility and mobile requirements
20. Is ready for Prompt 08, stakeholder preview, or production handoff

---

## Part 1: QA Scope Inspection

Review the provided Prompt 06 implementation report and any build output.

Identify:

- Files created
- Files modified
- Files deleted, if any
- Target route
- Framework
- Router type
- Metadata pattern
- Schema pattern
- Form and CTA pattern
- Navigation changes
- Sitemap changes
- robots.txt changes
- Validation commands run
- Validation command results
- Any discrepancy between Gate 1, Gate 2, and Gate 3 reports

If actual files are not available and only reports are provided, state that QA is based on implementation reports and validation output, not direct file inspection.

---

## Part 2: Brief Alignment Review

Compare implementation against Prompt 05 Developer Build Brief.

Check:

- Business name
- Page name
- Page type
- Target service/topic/category
- Target location
- Target route
- Primary CTA
- Secondary CTA
- Required sections
- Required copy
- Required metadata
- Required schema
- Required internal links
- Required form fields
- Required mobile behavior
- Required accessibility behavior
- Required TODO and FLAG handling

Return:

- Aligned items
- Drift items
- Missing items
- Extra items
- Required fixes
- Prompt 08 routing: YES / NO

---

## Part 3: Source-of-Truth Drift Check

Compare the implementation against Prompt 05 and Prompt 04.

Check for drift in:

1. FAQ questions
2. FAQ answers
3. Direct-answer copy
4. Meta title
5. Meta description
6. Canonical URL format
7. H1
8. H2 section headings
9. CTA text
10. Schema content
11. Internal links
12. Trust claims
13. Availability claims
14. Pricing language
15. Local service area claims
16. Form fields
17. Section structure
18. Accessibility requirements
19. Mobile requirements
20. Validation requirements

For each drift item, return:

- Drift item
- Approved source text or requirement
- Implemented text or behavior
- Risk level: High, Medium, Low
- Classification: Build drift, production blocker, validation blocker, optional improvement, or workflow documentation issue
- Required fix
- Route to Prompt 08: YES / NO

If there is no drift, state:

No source-of-truth drift identified.

---

## Part 4: Technical QA Review

Check:

- Route exists
- Route resolves correctly
- No duplicate route exists
- Build command passed
- Lint command passed
- Type-check command passed if configured
- Page compiles
- No unrelated files modified
- No unnecessary dependencies added
- No framework/router mismatch
- No broken imports
- No Server Component / Client Component misuse
- No metadata export conflict
- No invalid Next.js App Router pattern
- No global config edits outside approved scope

Return:

- Technical status
- Issues found
- Severity
- Required fix
- Blocking production: YES / NO
- Route to Prompt 08: YES / NO

---

## Part 5: Metadata QA Review

Check:

- Meta title
- Meta description
- Open Graph title
- Open Graph description
- Open Graph URL
- Canonical URL
- Robots
- Hreflang if applicable
- Production domain handling
- Approved Prompt 04/05 text match

Flag:

- Relative canonical when absolute placeholder was required
- Meta description drift
- Missing production-domain TODO
- Overlong or too-short descriptions
- Missing city/service keyword when required

Return:

- Metadata status
- Drift items
- Required fixes
- Blocking production: YES / NO
- Route to Prompt 08: YES / NO

---

## Part 6: Page Structure and Heading QA Review

Check:

- One H1 only
- H1 matches approved source
- H2s match approved section structure
- H3s used correctly
- No skipped heading levels
- Direct-answer H2 present if required
- Page sections in approved order
- Extra sections justified or harmless
- Breadcrumb visible if required
- Main landmark present
- Section landmarks or semantic structure present

Return:

- Structure status
- Heading issues
- Section drift
- Required fixes
- Blocking production: YES / NO
- Route to Prompt 08: YES / NO

---

## Part 7: Content Accuracy and Claim QA Review

Check visible page copy for unsupported claims.

Unsupported claims include:

- Same-day availability
- Next-day availability
- Emergency service
- Fastest service
- Guaranteed service
- No hidden fees
- Licensed and insured
- Years in business
- Number of customers served
- Review count
- Star rating
- Awards
- Certifications
- Pricing
- Discounts
- Financing
- Service area coverage
- Recycling/donation practices
- Response time promises
- Performance claims

For each unsupported claim, return:

- Claim
- Location
- Why it is unsupported
- Required fix
- Safe replacement language
- Classification: BLOCKING FIX REQUIRED or optional
- Route to Prompt 08: YES / NO

If an unsupported claim is visible on the page, production readiness must be blocked.

---

## Part 8: FAQ and AEO QA Review

Check:

- FAQ count
- FAQ questions match approved Prompt 04/05 list
- FAQ answers match approved Prompt 04/05 answers
- Conditional answers remain conditional
- Pricing answer does not invent pricing
- Availability answer does not invent same-day/emergency availability
- FAQ answers are visible on the page
- FAQ answers are complete sentences
- FAQ supports PAA and voice search intent
- FAQ schema text matches visible FAQ text exactly

Return:

- FAQ status
- FAQ drift table
- Missing questions
- Extra questions
- Required replacements
- Schema alignment status
- Route to Prompt 08: YES / NO

---

## Part 9: Schema QA Review

Check:

- FAQPage schema
- HowTo schema
- LocalBusiness schema
- Service schema
- BreadcrumbList schema
- AggregateRating schema absence unless verified data provided
- Review schema absence unless verified data provided
- Schema text matches visible content
- Schema URLs handle production-domain TODO correctly
- LocalBusiness schema avoids fake NAP
- areaServed does not include unconfirmed schema-safe cities unless client confirmed
- priceRange not used unless confirmed
- sameAs not used unless URL confirmed
- image URL not used unless asset confirmed

Return:

- Schema status
- Schema type status table
- Invalid schema risks
- TODO preservation status
- Required fixes
- Rich Results Test status
- Blocking production: YES / NO
- Route to Prompt 08: YES / NO

If Rich Results Test was required but not completed, classify it as:

VALIDATION BLOCKER

---

## Part 10: CTA and Conversion QA Review

Check:

- Primary CTA present
- Secondary CTA present
- Hero CTA present
- Mid-page CTA present if required
- FAQ CTA present if required
- Final CTA present
- Tap-to-call uses tel protocol
- Phone number is confirmed or TODO flagged
- Form exists
- Form fields match approved brief
- Form endpoint confirmed or TODO flagged
- Form submit behavior does not fake submission
- Privacy policy URL exists or is flagged
- SMS/email consent language exists or is flagged if relevant
- Mobile CTA behavior

Return:

- CTA status
- Conversion blockers
- Form blockers
- Required fixes
- Blocking production: YES / NO
- Route to Prompt 08: YES / NO

---

## Part 11: Internal Link and Navigation QA Review

Check:

- Confirmed internal routes only
- No links to non-existent routes
- Breadcrumb links resolve or are safely rendered as text
- Navigation updated only within approved scope
- Sitemap includes target route if required
- robots.txt exists or is flagged
- Related page links added if confirmed
- No forced links or keyword-stuffed anchors

Return:

- Internal link status
- Navigation status
- Sitemap status
- robots.txt status
- Broken or missing link issues
- Required fixes
- Blocking production: YES / NO
- Route to Prompt 08: YES / NO

---

## Part 12: Accessibility QA Review

Check:

- Semantic HTML
- Main landmark
- One H1
- Logical heading order
- Form labels
- Error messages
- Keyboard-accessible FAQ
- aria-expanded or equivalent accordion behavior
- Button/link names
- Image alt text
- No text inside images
- Color contrast
- Mobile tap target size
- Focus states
- Reduced motion if animations are used

Return:

- Accessibility status
- Issues found
- Severity
- Required fixes
- Blocking production: YES / NO
- Route to Prompt 08: YES / NO

If accessibility requirements were specified but not verified, classify as:

VALIDATION NEEDED

---

## Part 13: Mobile and Performance QA Review

Check:

- Mobile layout
- CTA full-width on mobile if required
- Tap targets at least 44px or 48px where specified
- No horizontal overflow
- Hero image responsive
- CLS risk
- Hero image eager or priority loading when appropriate
- Below-fold images lazy-loaded
- No unnecessary dependencies
- Build size reasonable
- No client-side rendering dependency for indexable core content
- Page is crawlable

Return:

- Mobile status
- Performance status
- Issues found
- Required fixes
- Blocking production: YES / NO
- Route to Prompt 08: YES / NO

---

## Part 14: TODO and FLAG Preservation Review

Check that unresolved items remain flagged and are not rendered as false visible claims.

Review:

- Phone number
- Address
- ZIP
- Business hours
- Production domain
- Form endpoint
- Privacy policy URL
- Reviews
- Ratings
- Testimonials
- Pricing
- Same-day availability
- Emergency availability
- Licenses
- Insurance
- Years in business
- GBP URL
- Hero image
- Service area schema
- Analytics IDs
- GSC/Bing verification

Return:

- TODO/FLAG item
- Location
- Correctly preserved: YES / NO
- Visible false claim risk: YES / NO
- Required fix
- Route to Prompt 08: YES / NO

---

## Part 15: Gate Consistency and Workflow Documentation Review

Compare Prompt 06 Gate 1, Gate 2, and Gate 3.

Check:

- Did Gate 1 identify the same project state as Gate 3?
- Did Gate 2 plan match the Gate 3 implementation?
- Did Gate 3 stay within Gate 2 approved scope?
- Did any gate claim a file existed while another claimed it did not?
- Did any gate claim a component existed while another had to create it?
- Did any gate report validation without actual command output?
- Did the implementation follow the hard stop rules?
- Did the implementation proceed only after approval?

Classify inconsistencies as:

- Harmless reporting inconsistency
- Workflow documentation issue
- Implementation concern
- QA blocker

Return:

- Inconsistency
- Evidence from reports
- Classification
- Risk
- Required fix or clarification
- Route to Prompt 08: YES / NO

---

## Part 16: Validation Review

Check actual validation evidence.

Review:

- npm run build
- npm run lint
- TypeScript check
- Unit tests if applicable
- Rich Results Test
- Accessibility checks if provided
- Mobile visual check if provided
- Link check if provided
- Schema validation output if provided

Return:

- Validation item
- Provided output: YES / NO
- Result
- Missing validation
- Required fix
- Blocking production: YES / NO
- Route to Prompt 08: YES / NO

Do not claim validation passed unless output or credible report evidence is provided.

---

## Part 17: Efficiency Governor QA Review

Verify that Prompt 06 followed the Efficiency Governor inputs from Prompt 05 and did not invent, escalate, or modify out-of-scope.

### Workflow mode compliance

Confirm:

- Prompt 06 preserved the workflow mode selected by Prompt 05.
- Fast Mode tasks stayed Fast (Prompt 05 → 06 → 07 only).
- Core Mode tasks stayed Core (Prompts 02 → 05 → 06 → 07).
- Beyond-Elite Mode was used only when Prompt 05 selected it.
- Full Competitive Build Mode was used only when Prompt 05 selected it.
- Any escalation was explicitly approved by the project owner in writing (cite the approval in the QA report).

Return: PASS / FAIL plus evidence.

### Compact Strategy Summary compliance

If a Compact Strategy Summary was provided, confirm:

- Prompt 06 used it as the primary implementation handoff.
- Prompt 06 did not ask for or rely on the full Prompt 01–05 strategy conversation.
- Prompt 06 did not re-run Prompt 01, 02, 03, 04, or 20 unless Prompt 05 explicitly required it.
- Prompt 06 carried the summary's TODO list, launch blockers, file scope, and validation commands into Gate 1, Gate 2, and Gate 5 reports.

If no Compact Strategy Summary was provided, return NOT APPLICABLE.

Return: PASS / NOT APPLICABLE / FAIL plus evidence.

### Client Intake Gate compliance

Confirm Prompt 06 respected the Client Intake Gate status from Prompt 05:

- CLEARED — Prompt 06 should have proceeded with no missing intake blockers in the final report.
- CLEARED WITH FLAGS — Every flagged missing item should appear as a TODO in code and as a launch blocker in Gate 5.
- NOT CLEARED — Prompt 06 should have stopped before Gate 1 unless the project owner explicitly approved placeholder-based implementation in writing.

If NOT CLEARED status was bypassed without documented owner approval, classify as a Critical issue and route to Prompt 08.

Return: PASS / PASS WITH FLAGS / FAIL plus evidence.

### TODO and launch blocker compliance

Verify (reinforcing Part 14):

- Every TODO placeholder is clearly labeled with the field name, reason, and launch-blocker note where applicable.
- No TODO placeholder was replaced with invented data at any later step.
- Launch blockers are listed verbatim in the implementation report.
- Launch blockers are not treated as resolved unless confirmed.
- TODO syntax matches the file type:
  - JSX or HTML: `<!-- TODO: [FIELD] — requires client confirmation before launch -->`
  - TypeScript or JavaScript: `// TODO: [FIELD] — requires client confirmation before launch`
  - Markdown: `TODO: [FIELD] — requires client confirmation before launch`
  - JSON: no comments — use a valid approved placeholder string only if absolutely required, and document the field as a TODO in the implementation report.

Return: PASS / PASS WITH FLAGS / FAIL plus evidence.

### No-fabrication compliance

Verify (reinforcing Required Rules — Do Not Invent) that Prompt 06 did not invent any of the following:

- Phone numbers, addresses, business hours
- Reviews, ratings, testimonials, reviewer names
- Pricing, discounts, guarantees, warranties
- Licenses, insurance claims, certifications, awards, years in business
- Service area confirmation, same-day or emergency availability
- Legal claims, privacy policy URLs
- Analytics IDs (GA4 measurement IDs, GTM container IDs)
- Google Search Console verification tokens
- Bing Webmaster verification tokens
- Schema values that require confirmed business data

Each item must appear as a TODO if missing, never as an invented value.

Return: PASS / FAIL plus per-item evidence.

### File scope compliance

Confirm:

- Only files listed under "Approved allowed files" in the Efficiency Governor Inputs section were modified.
- No files listed under "Approved forbidden files" in the Efficiency Governor Inputs section were modified.
- No unrelated files were created.
- If implementation required a file outside the "Approved allowed files" list, Prompt 06 stopped and requested scope expansion before editing.

Cross-check the final `git status` output against the "Approved allowed files" and "Approved forbidden files" lists. Any modification of a file not on the "Approved allowed files" list, or any modification of a file on the "Approved forbidden files" list, is a Critical issue.

Return: PASS / FAIL plus evidence (final `git status` vs "Approved allowed files" and "Approved forbidden files" lists).

### Validation evidence compliance

Verify (reinforcing Part 16):

- Validation commands were actually run by Prompt 06.
- Actual command output is included in the implementation report, not just claims.
- `npm run lint` result is reported if required.
- `npm run build` result is reported if required.
- Any other required validation (`npm run type-check`, `npm run test`) is reported if available.
- Any unavailable script was NOT falsely reported as passed; it was reported as "script not present in package.json" or equivalent.

Return: PASS / FAIL plus evidence (verbatim command output verified).

### Git state compliance

Verify:

- Starting branch and HEAD match the baseline commit declared in the build brief or compact summary.
- Final branch is the same as the starting branch (no unintended branch switch).
- Final HEAD reflects the expected state given commit/push allowance:
  - If commit/push was allowed: final HEAD is one commit ahead of baseline with only the approved files in the commit.
  - If commit/push was not allowed: final HEAD equals baseline; modified/untracked files match the "Approved allowed files" list; nothing is staged or committed.
- Final working tree status is clean if commit/push was allowed, or shows the expected modified/untracked file list if commit/push was skipped.
- Expected changed files vs actual changed files match exactly.

Return: PASS / FAIL plus evidence (verbatim `git status`, branch, HEAD).

### Required Efficiency Governor QA output block

Return the following block as part of the QA report:

```
Efficiency Governor QA Result
- Efficiency Governor QA result: PASS / PASS WITH FLAGS / FAIL
- Workflow mode compliance: PASS / FAIL
- Compact Strategy Summary compliance: PASS / NOT APPLICABLE / FAIL
- Client Intake Gate compliance: PASS / PASS WITH FLAGS / FAIL
- TODO and launch blocker compliance: PASS / PASS WITH FLAGS / FAIL
- File scope compliance: PASS / FAIL
- Validation evidence compliance: PASS / FAIL
- Git state compliance: PASS / FAIL
- Required fixes before commit: [list or None]
- Required fixes before launch: [list or None]
- Final recommendation: approve / revise / block
```

A FAIL in workflow mode compliance, file scope compliance, or git state compliance must result in the rollup verdict being FAIL and the final recommendation being `block` or `revise`. Workflow mode FAIL also requires the QA report to escalate to Prompt 08 or document explicit owner approval for the escalation.

---

## Part 18: Issue Severity Matrix

Create a table with:

- Issue ID
- Issue
- Category
- Severity: Critical, High, Medium, Low
- Classification
- Production blocker: YES / NO
- Development blocker: YES / NO
- Required fix
- Route to Prompt 08: YES / NO
- Source of truth reference

Severity definitions:

### Critical

Blocks production, breaks page, creates false claim risk, creates schema violation, breaks conversion path, or fails build.

### High

Material drift from approved source, missing required validation, major SEO/AEO/schema/conversion issue, or unresolved launch-critical data.

### Medium

Important improvement or required pre-launch fix that does not block development QA.

### Low

Minor improvement, polish item, or non-blocking documentation issue.

---

## Part 19: Production Blocker List

List all items that prevent production launch.

For each item, include:

- Blocker
- Why it blocks production
- Required owner: Client / Developer / SEO / QA / Strategy
- Required fix
- Can Prompt 08 resolve it: YES / NO
- Requires Prompt 10 client data: YES / NO

---

## Part 20: Scores

Provide two scores:

### Implementation Quality Score

Score from 1 to 100 based on:

- Brief alignment
- Technical correctness
- Code quality
- Schema correctness
- Content accuracy
- CTA implementation
- Accessibility
- Mobile readiness
- TODO preservation
- Source-of-truth fidelity

### Production Readiness Score

Score from 1 to 100 based on:

- Launch-critical data
- Working form
- Production domain
- Schema completeness
- Privacy/consent readiness
- No visible unsupported claims
- Rich Results Test
- robots/sitemap readiness
- Analytics/search console readiness
- Final validation readiness

Explain both scores.

---

## Part 21: Final QA Decision

Use one of these final decisions:

- PASS — Ready for production handoff
- DEVELOPMENT PASS — PRODUCTION FIXES REQUIRED
- PATCH REQUIRED — Rerun Prompt 08 before continuing
- FAIL — Rebuild or rerun Prompt 06 required

Decision rules:

### PASS — Ready for production handoff

Use only when:

- No production blockers remain
- No visible unsupported claims remain
- Required validation is complete
- Build/lint/type-check passed
- Schema is valid
- Form works
- Production domain is confirmed
- Required launch data is confirmed
- TODO values are resolved or not production-critical

### DEVELOPMENT PASS — PRODUCTION FIXES REQUIRED

Use when:

- Build is structurally sound
- Development validation passed
- Page can continue to Prompt 08
- Production launch is blocked by client data, validation, or pre-launch items
- No rebuild is required

### PATCH REQUIRED — Rerun Prompt 08 before continuing

Use when:

- Build drift exists
- Visible unsupported claims exist
- Metadata drift exists
- FAQ drift exists
- Schema mismatch exists
- Required validation is missing
- Fixes are required before the workflow can continue safely

### FAIL — Rebuild or rerun Prompt 06 required

Use when:

- Route is broken
- Build fails
- Critical files are missing
- Implementation ignores the approved brief
- Unsupported claims are widespread
- Schema is invalid in a way that requires rebuild
- The build modified unrelated files dangerously
- Implementation cannot be safely patched through Prompt 08

For the final decision, include:

- Decision
- Why this decision was chosen
- Required fixes before production
- Required fixes before next workflow step
- Recommended next prompt
- Whether Prompt 08 is required: YES / NO
- Whether Prompt 10 is required: YES / NO
- Whether production launch is approved: YES / NO
- Efficiency Governor QA result: PASS / PASS WITH FLAGS / FAIL (from Part 17)
- Workflow mode compliance: PASS / FAIL (from Part 17)
- Client Intake Gate compliance: PASS / PASS WITH FLAGS / FAIL (from Part 17)
- File scope compliance: PASS / FAIL (from Part 17)
- Git state compliance: PASS / FAIL (from Part 17)

---

## Carry-Forward Items

Carry forward all unresolved items.

For each item, include:

- Item
- Status
- Owner: Client / Developer / SEO / QA / Strategy
- Blocking production: YES / NO
- Blocking development QA: YES / NO
- Required next action
- Destination: Prompt 08, Prompt 10, production launch checklist, or later optimization

Do not drop unresolved client data.

Do not mark unresolved TODOs as complete.

---

## Required Output Format

Use this structure unless the user requests a specific format:

# Prompt 07 QA Review Report

## 1. Execution Depth

## 2. QA Scope Inspection

## 3. Brief Alignment Review

## 4. Source-of-Truth Drift Check

## 5. Technical QA Review

## 6. Metadata QA Review

## 7. Page Structure and Heading QA Review

## 8. Content Accuracy and Claim QA Review

## 9. FAQ and AEO QA Review

## 10. Schema QA Review

## 11. CTA and Conversion QA Review

## 12. Internal Link and Navigation QA Review

## 13. Accessibility QA Review

## 14. Mobile and Performance QA Review

## 15. TODO and FLAG Preservation Review

## 16. Gate Consistency and Workflow Documentation Review

## 17. Validation Review

## 18. Efficiency Governor QA Review

## 19. Issue Severity Matrix

## 20. Production Blocker List

## 21. Scores

## 22. Final QA Decision

## 23. Carry-Forward Items

---

## Final Instruction

Be strict.

Do not reward a build for passing technical commands if it drifts from the approved source of truth.

Do not mark a page production-ready if visible unsupported claims, build drift, missing validation, or launch-critical data gaps remain.

Do not invent missing client data.

If the build is technically valid but not production-ready, use:

DEVELOPMENT PASS — PRODUCTION FIXES REQUIRED

If build drift or visible unsupported claims need correction before continuing, use:

PATCH REQUIRED — Rerun Prompt 08 before continuing

If the Efficiency Governor QA in Part 17 returns FAIL on workflow mode, file scope, or git state, classify the build as PATCH REQUIRED or FAIL — do not mark it as PASS or DEVELOPMENT PASS.

If Prompt 06 escalated the workflow mode without documented owner approval, classify the build as PATCH REQUIRED — Rerun Prompt 08 before continuing.

If Prompt 06 modified files outside the "Approved allowed files" list, classify the build as PATCH REQUIRED unless the scope expansion was explicitly approved in the Efficiency Governor Inputs section.

Prompt 07 must produce a clear QA decision, not vague approval language.