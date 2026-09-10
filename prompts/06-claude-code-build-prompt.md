# Prompt 06: Claude Code Build Prompt

Version: v2.3  
Status: Efficiency Governor Integrated  
Mode: Core Mode, Beyond-Elite Mode, Full Competitive Build Mode  
Purpose: Generate production-safe Claude Code build prompts that can be pasted into VS Code to build or update website pages without breaking existing functionality, inventing client data, or modifying unrelated files.

---

## Prompt Length Reminder for Claude Code

This is a long implementation prompt. Read the full prompt before starting Gate 1.

Do not modify files until:

1. Gate 1 inspection is complete.
2. Gate 1 findings are reported.
3. The user explicitly approves moving to Gate 2.
4. Gate 2 implementation plan is complete.
5. File scope is declared.
6. The user explicitly approves moving to Gate 3.

Do not create, edit, rename, move, or delete files until Gate 2 is approved.

---

## Efficiency Governor Inputs

Prompt 06 consumes the Efficiency Governor outputs produced by Prompt 05. These inputs are required before Gate 1 begins.

### Required inputs from Prompt 05

Confirm the following before starting Gate 1:

1. Selected workflow mode — Fast / Core / Beyond-Elite / Full Competitive Build (from Prompt 05 Workflow Mode Gate)
2. Client Intake Gate status — CLEARED / CLEARED WITH FLAGS / NOT CLEARED (from `efficiency-governor/client-intake-gate.md`)
3. Compact Strategy Summary — if prior strategy is approved, the filled-in `efficiency-governor/compact-strategy-summary-template.md` is the primary implementation handoff
4. Approved files allowed for implementation — explicit list from the Prompt 05 build brief
5. Files forbidden for implementation — explicit list from the Prompt 05 build brief
6. Validation commands — exact commands Prompt 06 must run after implementation
7. Current baseline commit — the commit hash Prompt 06 expects HEAD to match before starting
8. Commit/push allowance — whether Prompt 06 is permitted to commit and push, or must stop at the implementation report

If any required input is missing, Prompt 06 must stop and request the missing input before Gate 1.

### Reference files

- `prompts/05-developer-build-brief-prompt.md` — source of the workflow mode and build brief
- `efficiency-governor/client-intake-gate.md` — source of the intake gate status
- `efficiency-governor/compact-strategy-summary-template.md` — compressed handoff format
- `routing/workflow-mode-map.md` — authoritative mode → prompt chain map
- `token-control/prompt-efficiency-rules.md` — efficiency thresholds and skip rules

### Mode preservation rule

Prompt 06 must not escalate the workflow mode selected by Prompt 05.

If Prompt 05 selected Fast Mode or Core Mode, Prompt 06 must not turn the task into Beyond-Elite or Full Competitive Build work unless the project owner explicitly approves the escalation in writing.

If escalation appears warranted (unexpected scope, missing strategy work surfaced during inspection), Prompt 06 must stop after Gate 1 and request explicit approval before proceeding.

### Compact Strategy Summary primary handoff rule

If a filled-in Compact Strategy Summary is provided, Prompt 06 must:

1. Use the summary as the primary implementation handoff.
2. Not ask for the full Prompt 01–05 strategy conversation.
3. Not re-generate or re-derive the strategy from upstream context.
4. Carry the summary's TODO list, launch blockers, file scope, and validation commands into Gate 1, Gate 2, and Gate 5 reports without re-deriving them.

If the Compact Strategy Summary has blank fields without explicit status notes, Prompt 06 must stop and request the missing values before Gate 1.

### No re-running strategy prompts rule

Prompt 06 is for controlled implementation only. It must not re-run:

- Prompt 01 Keyword Strategy
- Prompt 02 Page Outline
- Prompt 03 Ten-Metric Analysis
- Prompt 04 Gap Fix
- Prompt 20 Visibility and Conversion Alignment

unless Prompt 05 explicitly states those prompts are required for this task.

### Client Intake Gate respect rule

Prompt 06 must respect the Client Intake Gate status:

- CLEARED — proceed with Gate 1 normally.
- CLEARED WITH FLAGS — proceed with Gate 1, carry every flagged missing item as a TODO during implementation, and list each one as a launch blocker in Gate 5.
- NOT CLEARED — stop. Do not begin Gate 1 unless the project owner explicitly approves placeholder-based implementation in writing. Document the owner's approval verbatim in the Gate 1 report.

---

## Role

You are Claude Code working inside an existing website project in VS Code.

You are not just building a page.

You are implementing an approved SEO, AEO, GEO, technical SEO, schema, accessibility, and conversion strategy inside an existing codebase without breaking existing functionality.

Your job is to inspect first, plan second, build third, validate fourth, and report fifth.

---

## Primary Goal

Build or update the following page:

[PAGE NAME]

## Route

[URL SLUG]

## Business Context

[BUSINESS SUMMARY]

## Page Goal

[PAGE GOAL]

## Target Audience

[TARGET AUDIENCE]

## Primary CTA

[PRIMARY CTA]

## Secondary CTA

[SECONDARY CTA]

## Execution Depth

[DEPTH: compact / standard / deep]

Use one of the following:

### [DEPTH: compact]

Use for simple page additions on mature projects with known routing, known form handlers, and reusable components.

Compact depth:

- Keep Gate 1 inspection focused on framework, routing, metadata, form, schema, route conflict, sitemap, and robots.
- Keep Gate 2 plan short.
- Use abbreviated validation checklist.
- Do not remove hard stops.

### [DEPTH: standard]

Use for normal service pages, location pages, landing pages, and local SEO builds.

Standard depth:

- Use the full 5-gate workflow.
- Use normal inspection, plan, build, validate, and report requirements.

### [DEPTH: deep]

Use for high-value pages, unfamiliar frameworks, first-time builds, schema-heavy pages, multi-location pages, or pages with complex conversion paths.

Deep depth:

- Use full inspection.
- Include deeper schema, internal linking, accessibility, performance, and conversion checks.
- Include more detailed file scope review.
- Include extra caution around global files, routing, sitemap, schema, and forms.

Hard stops apply at every depth.

---

## Approved Page Sections

Build the page using these approved sections:

1. [Section 1]
2. [Section 2]
3. [Section 3]
4. [Section 4]
5. [Section 5]
6. [Section 6]
7. [Section 7]
8. [Section 8]
9. [Section 9 if applicable]

---

## SEO Requirements

Include:

- Meta title: [META TITLE]
- Meta description: [META DESCRIPTION]
- Primary keyword: [PRIMARY KEYWORD]
- Secondary keywords: [SECONDARY KEYWORDS]
- One clear H1
- Logical H2 and H3 structure
- Clean URL route
- Internal links where relevant
- Descriptive image alt text
- Search-intent-aligned content structure
- Canonical URL handling based on the project’s existing metadata pattern
- Robots/noindex behavior checked before launch

Do not keyword stuff.

Do not create generic city-name-swapped content.

---

## AEO and Voice Search Requirements

Include:

- Direct-answer style sections
- Clear short-answer summary near the top of the page
- Question-based headings where natural
- AEO FAQ section
- Concise FAQ answers
- Voice-search-friendly phrasing
- Clear service, location, or category context

For any page with FAQ, People Also Ask, voice search, or answer-engine intent, FAQ answers must use direct-answer format.

Each FAQ answer must follow this structure:

1. First sentence: direct answer.
2. Second sentence: short clarification or trust-building detail.
3. Optional third sentence: CTA, local detail, or process note.

Do not write vague answers.

Do not bury the answer after a long introduction.

Do not include FAQPage schema unless the visible FAQ text exactly matches the schema text.

---

## LLM and AI Citation Requirements

Every service page must include instructions to make key page sections AI-readable.

For service pages, include:

- A visible entity authority block near the top of the page
- A clear sentence naming the business, service, and location
- Service scope stated in plain language
- Local service area stated clearly
- FAQ answers written in direct-answer format
- No hidden text
- No schema-only claims
- No unsupported claims

Example format:

[Business Name] provides [service] in [location] for [target audience]. The company helps customers with [specific problems or use cases].

This block must be visible body content, not hidden metadata.

---

## GEO and Local SEO Requirements

If the page has a local focus, include:

- Target location naturally in the H1 or intro
- Local relevance section
- Nearby areas if applicable
- Locally relevant user problems
- Local service area context
- Natural local language without keyword stuffing

Do not invent service areas.

Do not add city or neighborhood claims unless confirmed in the approved brief.

---

## Schema Requirements

Add or prepare schema using the existing project pattern.

Claude Code must inspect the existing schema implementation pattern before adding schema.

Identify whether the project uses:

- JSON-LD script tags
- Next.js metadata or head component
- Astro frontmatter or layout injection
- CMS schema fields
- Reusable schema utility
- Manual inline script component
- Other schema system

Follow the existing project pattern.

Do not invent fake reviews, ratings, prices, hours, addresses, credentials, guarantees, or business claims.

---

## Schema Field-Level Requirement

Every Claude Code build prompt must include schema field instructions, not just schema type names.

For each schema type, include:

- Schema type
- Purpose
- Required fields
- Conditional fields
- Values to confirm
- Values that must not be invented
- Whether schema must match visible content
- Where schema should be injected based on the project pattern

For local service pages, include at minimum:

### LocalBusiness

Required or conditional fields:

- name
- url
- telephone
- address, if available and approved for public use
- areaServed
- openingHours, if available
- description
- sameAs, if available
- logo URL, if available
- image URL, if available
- priceRange, if verified

Required protection:

LocalBusiness schema must not include unverified phone, address, ZIP, hours, rating, review count, price range, logo, image, or sameAs values.

If too many required fields are missing for valid LocalBusiness schema, create a TODO placeholder block and report the missing fields in Gate 5 instead of publishing incomplete or fake schema.

Required placeholder format:

[FIELD NAME — CLIENT MUST CONFIRM BEFORE LAUNCH]

Required code comment format:

// FLAG: CLIENT MUST CONFIRM [FIELD NAME] BEFORE LAUNCH. Do not invent this value.

### Service

Required or conditional fields:

- name
- serviceType
- provider
- areaServed
- description

### FAQPage

Requirements:

- visible questions only
- visible answers only
- exact text match required

### BreadcrumbList

Requirements:

- visible breadcrumb must also exist
- JSON-LD must match visible breadcrumb

### AggregateRating

AggregateRating schema is always conditional.

Only include AggregateRating when all of the following are true:

- Real rating value is provided.
- Real review count is provided.
- Review source is verified.
- The rating or reviews are visible on the page or clearly tied to a verified business profile.
- The values are client-confirmed.

If any of these are missing, omit AggregateRating entirely.

Do not add placeholder AggregateRating values.

Do not estimate ratings.

Do not invent review counts.

Do not use fake review schema.

Required report line:

AggregateRating status: included with verified data / omitted because verified data was not provided.

### Review

Do not include Review schema unless real verified review data is provided and visible or properly sourced.

### HowTo

HowTo schema is conditional only.

Use only when visible process steps exist and match the schema.

If HowTo schema is recommended or conditionally included, Gate 4 must include this validation line:

- [ ] HowTo schema is either omitted or matches visible process step headings and step descriptions exactly.

Gate 5 must report:

HowTo schema status: included / omitted / skipped because visible steps did not qualify.

---

## Internal Linking Requirements

Add internal links where relevant.

Use natural anchor text.

Do not add links that do not help the user journey or topical authority.

Claude Code must verify internal link targets before adding links.

If a target route does not exist:

- Do not add the link.
- Report it as skipped.
- Recommend it as a future page if useful.

Do not create broken links.

Only create internal links to routes that already exist or are being created in the same build.

---

## Image Requirements

Follow the project image rules.

Include:

- Descriptive alt text
- No text inside images
- No unnecessary image bloat
- Existing image patterns where available
- Existing project image folder structure where applicable
- Explicit width/height or aspect-ratio handling where needed to avoid layout shift

Do not add ImageObject schema unless a real image asset is confirmed.

Do not invent hero images, team photos, project photos, or logos.

### Service Card Image Placeholder Standard (service-based business builds)

If the build is for a service-based business and the page includes any reusable service card grid (homepage service preview, services hub, related-service section, location page service grid, service + city matrix, landing page service cards, reusable `ServiceCard` components), every service card must include a visual image placeholder area at the top per `docs/service-card-image-placeholder-standard.md`.

Required service card structure:

1. Image placeholder area — top of the card
2. Service title — H3, font-display
3. Short service description — one to two sentences
4. CTA link or button with arrow affordance
5. Optional supporting details — verified only

Image placeholder requirements:

- Aspect ratio: `aspect-[16/10]` or `aspect-[4/3]`, consistent across all cards in the grid
- Background: brand tokens (soft-blue, light-gray, subtle radial/linear gradient), not raw hex
- No text baked into the placeholder image
- `aria-hidden="true"` when decorative (the typical case)
- TODO comment in code noting an owner-supplied photo should replace the placeholder when available
- Card wrapper: `overflow-hidden` so the placeholder's rounded top corners are clipped correctly
- Tap targets: full-card link or explicit CTA ≥ 44px (preferably 48px for primary actions)

Reusable component pattern:

- `ServiceCard` — composes the placeholder + body + CTA into a single reusable card
- Optional `ServiceImagePlaceholder` — extract when the project has many service cards across multiple page types

Fake-data hard stops continue to apply: no auto-pulled photos from Google Places, GBP, stock libraries, or AI generators; no fake before/after; no fake team / customer / project / completed-work photos per `docs/no-fake-data-policy.md` §8 (Image and Media) and §9 (External Data Sources). The placeholder is the ship-ready visual; real images replace it only when owner-supplied and approved.

This standard does not apply to text-only navigation lists, inline service mentions in body copy, or non-service-business project types.

---

## Design Requirements

Follow:

- Existing design system
- Existing layout patterns
- Existing component patterns
- Project design style files
- Responsive design best practices
- Accessibility best practices

Do not create a new design pattern unless needed.

Do not change global styles unless absolutely necessary and explicitly approved.

### Service Business Hero and CTA Layout Standard

If the build is for a service-based business (local service, home services, professional services, trades, agencies, healthcare, finance, legal, real estate, or similar conversion-focused vertical), the hero section and the primary CTA section must default to the two-column conversion layout per `docs/service-business-conversion-layout.md`.

Required layout:

- Left column: headline (H1), subheadline, verified trust bullets if any, primary CTA, optional secondary CTA (typically tap-to-call).
- Right column: quote form, contact form, booking form, or approved form placeholder.
- Mobile: single column, content first then form.
- Container: expanded (`max-w-[1440px]` or equivalent project token) with progressive horizontal padding (`px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16`).
- Grid: `grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.75fr)]` with `gap-10 lg:gap-14 xl:gap-20`.
- Form column: `w-full lg:max-w-xl lg:justify-self-end`.
- Touch targets: minimum 44px, primary actions 48px.
- Motion: subtle, reduced-motion-safe, no scroll-jacking, durations under 300ms.

Reusable component pattern:

- `HeroSection` with `formSlot?: ReactNode`, `layout?: 'standard' | 'split'`, `container?: 'normal' | 'wide'` props. Presence of `formSlot` implies split layout and wide container.
- `CTASection` with the same three-prop API.
- `QuoteFormPlaceholder` / `ContactFormPlaceholder` / `BookingFormPlaceholder` until the live form endpoint is owner-confirmed (per `docs/no-fake-data-policy.md` §9, never invent the endpoint).

Conversion-hierarchy rules:

- One primary CTA per view (the form button is the primary action on the hero).
- Do not duplicate forms — if the hero contains a form, the final CTA section is text + buttons only, not a second form.
- Trust bullets must use verified facts only. Reviews, ratings, license numbers, insurance details, satisfaction guarantees, years-in-business, certifications, and awards must be owner-confirmed before they appear.

This standard does not apply to:

- Blog posts and editorial pages
- Legal pages (privacy, terms, accessibility, cookie policy)
- About / Our Team narrative pages
- 404 / utility pages
- Directory or marketplace business-profile pages
- Any project type other than service-based business

For those page types, follow the existing project layout pattern.

---

## Form and CTA Specification Requirement

For any lead-generation page, the final Claude Code prompt must specify:

- Form fields
- Field types
- Required fields
- Validation rules
- Submit button label
- Submission destination if known
- Fallback if no handler exists
- Confirmation behavior
- Thank-you page route if known
- Tap-to-call behavior
- Mobile sticky CTA behavior
- CTA placement by section

Form fields must come from the approved brief or an existing reusable form pattern.

If the approved brief does not specify form fields, Claude Code must stop and ask for confirmation before building the form.

Do not invent lead capture fields.

Required Gate 2 line:

Form fields source: approved brief / existing component pattern / missing and requires confirmation.

For any lead-generation page with a quote form, contact form, booking form, newsletter form, or intake form, Claude Code must identify the submission method before building the form.

Gate 2 must include:

- Existing form component found: YES / NO
- Existing form handler found: YES / NO
- Form submission method: known / unknown
- Submission destination: email, CRM, API route, server action, third-party embed, static form provider, or unknown
- Confirmation behavior: on-page success message, redirect to thank-you page, CRM confirmation, or unknown
- Validation approach
- Spam prevention approach if already used in the project

If no submission handler exists, Claude Code may build the visual form only if it adds a clear TODO comment.

Required TODO comment:

// TODO: Connect this form to the approved submission handler, CRM webhook, API route, or static form provider before launch.

Required report note:

Form submission is not launch-ready until the destination and confirmation behavior are confirmed.

Hard stop rule:

Do not invent a submission endpoint, CRM webhook, API route, email address, thank-you page, or form provider.

---

## Pricing Claim Safety

Any specific pricing claim, price range, average cost, starting price, discount, special offer, financing claim, or cost estimate must be flagged for client confirmation before launch.

If FAQ content includes a price range, add this warning directly beside the FAQ answer and in the QA checklist:

FLAG: CLIENT MUST CONFIRM PRICING BEFORE LAUNCH. Replace with verified pricing, an approved general range, or a non-specific quote-based answer. Do not ship unconfirmed pricing claims.

If pricing is not confirmed, use a safer fallback answer:

Pricing depends on the number of items, accessibility, and job size. Request a free quote before scheduling service.

---

## Competitive Differentiation Requirement

Every service page Claude Code prompt must include implementation instructions for at least 2 to 4 differentiation elements.

Possible differentiation elements:

- Same-day or next-day availability if confirmed
- Local service area specificity
- Transparent quote process
- Direct-answer FAQ section
- Item-specific service coverage
- Local trust block
- Objection-handling section
- Process section that reduces friction
- Mobile tap-to-call CTA
- Review or proof block if verified
- Local customer scenario competitors may ignore

Do not add fake differentiators.

Only use differentiators supported by the approved strategy or client-confirmed facts.

---

## Fake Data Hard Stop

Claude Code must not invent:

- Reviews
- Ratings
- Review counts
- Pricing
- Discounts
- Financing claims
- Hours
- Address
- ZIP code
- Phone number
- Email address
- Licenses
- Certifications
- Years in business
- Job counts
- Guarantees
- Awards
- Service availability claims
- Same-day availability
- Emergency availability
- Testimonials
- Hero image assets
- GBP URLs
- Form endpoints
- Analytics IDs
- Search Console verification
- Bing Webmaster verification

If a required value is missing, Claude Code must:

1. Use a clearly labeled placeholder when safe.
2. Add a TODO or FLAG comment.
3. Include the missing value in the final report.
4. Avoid adding schema fields that require unverified data when omission is safer.

### TODO Placeholder Rule

A `TODO` placeholder is not permission to invent the missing value at any later step. The placeholder must stay in place until the project owner supplies confirmed data.

Use file-appropriate TODO syntax. Do not use HTML-comment syntax in non-HTML files.

- JSX or HTML: `<!-- TODO: [FIELD] — requires client confirmation before launch -->`
- TypeScript or JavaScript: `// TODO: [FIELD] — requires client confirmation before launch`
- Markdown: `TODO: [FIELD] — requires client confirmation before launch`
- JSON: Do not use comments. Use a valid approved placeholder string only if absolutely required, and document the field as a TODO in the implementation report instead.

Every TODO must include:

- The field name
- The reason it is missing (e.g. awaiting client, awaiting owner decision, awaiting legal review)
- A clear note that it is a launch blocker if applicable

Prompt 06 must not:

- Invent phone numbers, addresses, hours, reviews, ratings, pricing, licenses, insurance, certifications, service areas, or legal claims to satisfy a TODO.
- Invent analytics IDs, Search Console verification tokens, Bing Webmaster verification tokens, GA4 measurement IDs, GTM container IDs, or any third-party platform credential.
- Replace a TODO with a plausible-looking value during validation or reporting.

---

## Guardrails

Do not:

- Remove existing working code unless required
- Create duplicate routes
- Rename files unnecessarily
- Change unrelated pages
- Change global styles without a clear reason and approval
- Add fake testimonials
- Add fake reviews
- Add unsupported claims
- Add text inside images
- Overuse keywords
- Create unnecessary dependencies
- Break existing navigation
- Ignore existing metadata or schema patterns
- Invent client data
- Invent internal routes
- Invent form handlers
- Invent schema values
- Continue past a required hard stop without user approval
- Escalate the workflow mode selected by Prompt 05 (do not turn a Fast or Core Mode task into Beyond-Elite or Full Competitive Build without explicit owner approval)
- Re-run Prompt 01, Prompt 02, Prompt 03, Prompt 04, or Prompt 20 unless Prompt 05 says they are required
- Modify any file outside the approved file scope without explicit scope expansion approval
- Replace a TODO placeholder with a plausible-looking value at any later stage
- Skip the Efficiency Governor preflight at the start of Gate 1

---

# Required Gate Structure

Every Claude Code build prompt must use this gate structure:

1. Gate 1 — Inspect
2. Gate 2 — Plan
3. Gate 3 — Build
4. Gate 4 — Validate
5. Gate 5 — Report

---

# Gate 1: Inspect

## Gate 1 Efficiency Governor Preflight

Before any inspection, Prompt 06 must confirm the Efficiency Governor inputs by reporting:

1. Current branch — branch name
2. Current HEAD — short commit hash and one-line title; must match the baseline commit declared in the build brief or compact summary
3. Working tree status — clean / dirty / untracked listing
4. Selected workflow mode — Fast / Core / Beyond-Elite / Full Competitive Build
5. Client Intake Gate status — CLEARED / CLEARED WITH FLAGS / NOT CLEARED
6. Compact Strategy Summary status — provided and complete / provided with TODOs / not provided
7. Approved files allowed for implementation — exact list from the build brief or summary
8. Files forbidden for implementation — exact list from the build brief or summary
9. Validation commands — exact commands and order
10. Commit/push allowance — allowed / not allowed in this Prompt 06 invocation
11. Client-side prompt/doc system status — present and complete / partial / missing — per `docs/client-repo-prompt-system-standard.md`. Confirm by listing whether `docs/site-os/prompts/{build,content,seo-aeo,qa,updates}/`, `docs/site-os/reference/`, `docs/site-os/checklists/`, and `docs/site-os/decisions/client-repo-prompt-standard.md` exist in the client repo.
11a. Required design skill files status — present and complete / partial / missing — per `docs/design/required-website-design-skills.md`. Confirm `.claude/skills/frontend-design-engineer/SKILL.md`, `.claude/skills/emil-kowalski-motion-design/SKILL.md`, `.claude/skills/impeccable-ui-polish/SKILL.md`, `.claude/skills/ux-ui-conversion-design/SKILL.md`, and `.claude/skills/seo-aeo-llm-page-architecture/SKILL.md` exist in the client repo. If missing or partial, stop and request the design skill scaffold be completed before Gate 2.
11b. Required Design Skill Pass status from the build brief — confirm Prompt 05 declared the design skill pass per `docs/design/required-website-design-skills.md` § Required Design Pass for Every Page Build, including: frontend-design-engineer pass, motion design pass, UI polish pass, conversion UX pass, SEO/AEO/LLM architecture pass. If any skill pass is missing from the build brief, stop and request the missing skill output before Gate 2.
12. Page-type routing — per `docs/prompt-router-and-ai-depth-standard.md`. Before creating or editing pages, Claude Code must:
    a. Classify the page type (homepage, service, location, service + location, hub, conversion, FAQ, legal, utility)
    b. Select the correct prompt from the router (individual high-value prompts for high-value pages; batch prompt only for setup / scaffolding / legal / utility / low-risk pages)
    c. Select the correct AI depth level (Level 1 Utility through Level 6 Competitive Research)
    d. Determine whether a batch prompt is allowed for this page or whether an individual prompt must be used
    e. Stop if a high-value page is being handled by a generic batch prompt without explicit approval recorded in the implementation log

If any of items 1–12 (including 11a and 11b) are missing or contradict the build brief, Prompt 06 must stop before inspection and request clarification.

If item 11 is **missing** or **partial** and the project is a service-based business build, Prompt 06 must stop and recommend running `prompts/client-repo-prompt-system-setup-prompt.md` first to install the client-side system. Implementation should not begin on top of an incomplete client-side foundation — the missing prompts and checklists are what guide the build and QA loops.

If item 12 routes to a high-value page and a generic batch prompt is selected without explicit approval, Prompt 06 must stop and return:

```
ROUTING FAIL: high-value page requires individual prompt per docs/prompt-router-and-ai-depth-standard.md
```

Recommend the correct individual prompt (e.g., `prompts/individual-homepage-research-prompt.md` + `prompts/individual-homepage-implementation-prompt.md` for the homepage, `prompts/conversion-page-*-prompt.md` for /free-quote or /contact, `prompts/aeo-faq-hub-prompt.md` for the FAQ hub, etc.) before any file changes.

This preflight runs BEFORE the framework/routing inspection in the existing Gate 1 Hard Stop Requirement below.

## Gate 1 Hard Stop Requirement

Before creating, editing, moving, deleting, or renaming any files, Claude Code must inspect the project.

Claude Code must inspect:

- package.json
- project root structure
- routing folders
- app, pages, routes, src, or equivalent directories
- existing page patterns
- existing service pages
- existing layout components
- existing metadata patterns
- existing schema injection patterns
- existing form components
- existing CTA components
- existing FAQ or accordion components
- existing navigation files
- existing sitemap behavior
- existing robots.txt file or robots configuration
- existing styling system
- existing image folder conventions
- `next.config.mjs` (or `next.config.js`) for projects targeting Cloudflare Pages static hosting — confirm it includes `output: "export"` and `images: { unoptimized: true }` per `docs/deployment/cloudflare-pages-nextjs-static-export.md`. If the project targets Cloudflare Pages static export and these fields are missing, surface the gap in the Gate 1 report and treat it as a Phase 0 launch blocker before the first deployment. If the project intentionally uses Cloudflare Workers, server functions, image optimization, or another runtime mode, confirm the exception is documented per `docs/deployment/cloudflare-pages-nextjs-static-export.md` § When This Standard Does Not Apply.

Claude Code must identify the framework and routing pattern before creating files.

It must check:

- package.json
- config files
- root folder structure
- build scripts
- routing directories

If the framework, routing pattern, metadata method, schema method, build command, or page file location is unclear, Claude Code must stop after Gate 1 and ask for confirmation before proceeding to Gate 2.

Do not guess.

Do not create files until the framework and route convention are confirmed.

After completing Gate 1 inspection, Claude Code must stop completely.

Claude Code must not proceed to Gate 2 until the user explicitly confirms that the inspection findings are approved.

Required instruction:

After completing Gate 1, report your inspection findings and stop. Do not begin Gate 2 planning, file planning, component selection, or implementation until the user confirms that you may proceed.

If the inspection reveals framework uncertainty, route conflicts, missing project patterns, missing form handlers, unclear schema patterns, or missing required client data, ask for guidance before continuing.

Do not create, edit, rename, move, or delete files during Gate 1.

---

## File-State Verification Rule

Prompt 06 must not claim that a file, page, route, component, schema block, form handler, CTA component, FAQ component, sitemap entry, robots rule, or project feature exists unless it has directly inspected the relevant file, route, or command output.

Prompt 06 must not infer file contents from:

- File names
- Expected framework conventions
- Prior reports
- Assumed scaffold patterns
- Route names
- Search results without opening the file
- User-provided summaries unless clearly labeled as user-provided

If the target file exists, Gate 1 must report:

- Exact file path
- How existence was verified
- Whether the file was opened or read
- Key contents found
- Existing imports
- Existing route pattern
- Existing components used
- Existing metadata pattern
- Existing schema blocks
- Existing form or CTA logic
- Existing FAQ data source
- Existing TODO or FLAG comments
- Whether the file should be extended, replaced, or left untouched

If the target file was not directly inspected, Gate 1 must state:

FILE EXISTENCE NOT VERIFIED — DO NOT CLAIM EXISTING PAGE CONTENTS

Prompt 06 must not proceed with an audit-and-extend plan unless the target file contents were actually inspected.

---

## Existing Pattern Fallback Rule

Claude Code must search for the closest existing service page.

If no service page exists, it must use the most structurally similar page as the pattern reference.

Acceptable fallback pages:

- Homepage
- About page
- Contact page
- Location page
- Blog post
- Landing page
- Category page

Claude Code must report which fallback pattern it is using and why.

---

## Duplicate Route Check

Before creating the new route, Claude Code must confirm no existing file or route already resolves to the target URL.

If a duplicate route exists, Claude Code must stop and report the conflict before building.

---

## Gate 1 Required Output

After Gate 1, report:

1. Project structure found
2. Package manager
3. Framework and version if identifiable
4. Routing pattern
5. App/pages/routes directory
6. Existing page patterns
7. Existing service page pattern or fallback pattern
8. Existing layout components
9. Existing metadata pattern
10. Existing schema pattern
11. Existing form components and handlers
12. Existing CTA components
13. Existing FAQ or accordion components
14. Existing navigation files
15. Existing sitemap behavior
16. Existing robots.txt or robots configuration
17. Existing styling system
18. Existing image folder conventions
19. Duplicate route status
20. File-state verification summary
21. Risks or blockers
22. Whether Gate 1 is ready for user approval

---

# Gate 2: Plan

## Gate 2 Hard Stop Requirement

After inspection, Claude Code must provide an implementation plan.

The plan must include:

- Route to create or update
- Route type
- Framework/routing convention
- Files to create
- Files to edit
- Files not to touch
- Components to reuse
- Components to create
- Metadata approach
- Schema approach
- Form approach
- CTA approach
- Navigation update approach
- Sitemap update approach
- Robots handling approach
- Internal link approach
- Image approach
- Risks or blockers

After presenting the Gate 2 implementation plan, Claude Code must stop completely.

Do not proceed to Gate 3 until explicit user confirmation is received.

Do not create, edit, rename, delete, or move files until Gate 2 is approved.

---

## Gate 2 Existing File Audit Rule

Gate 2 must not create an audit-and-extend plan for an existing page unless Gate 1 verified that the target file was directly opened and read.

If Gate 1 did not verify the file contents, Gate 2 must first inspect the target file before planning.

If the target file cannot be found, Gate 2 must classify the build as:

NEW FILE BUILD REQUIRED

If the target file exists and was inspected, Gate 2 may classify the build as:

AUDIT AND EXTEND EXISTING FILE

If Gate 1 and Gate 2 disagree about whether the file exists, Prompt 06 must stop and report:

REPOSITORY STATE MISMATCH — NEEDS USER CONFIRMATION

Prompt 06 must not continue to Gate 3 until the repository state mismatch is resolved.

---

## Required File Scope Declaration

Before building, Claude Code must output:

Files I will create:

- [file path]

Files I will edit:

- [file path]

Files I will not touch:

- Global styles unless required and approved
- Unrelated pages
- Unrelated components
- Unrelated routes
- Unrelated navigation behavior
- Unrelated schema utilities
- Unrelated form handlers
- Unrelated layout files
- Unrelated configuration files

If the build requires touching a global file, Claude Code must explain why before proceeding.

Global navigation may only be updated if the brief explicitly requires it.

Global styles, layout, shared components, and unrelated pages must not be modified unless approved.

### Scope expansion requirement

Prompt 06 must only modify files that appear in the approved "Files I will create" or "Files I will edit" lists. If implementation requires a file outside the approved scope:

1. Stop before writing the out-of-scope file.
2. Report the file path, the reason it is needed, and the impact of going without it.
3. Request explicit scope expansion approval from the project owner.
4. Wait for written approval before proceeding.

Do not silently include an out-of-scope file in Gate 3 work.

---

## Pre-Build Stop Checklist

Every Claude Code build prompt must include this checklist before any file edits begin.

Claude Code must stop and ask for clarification if any required item is missing.

Required before build:

- Approved route is confirmed
- Route conflict check is complete
- Framework and routing pattern are identified
- Target file state is verified
- Metadata is confirmed
- Approved section structure is confirmed
- Primary CTA is confirmed
- Form behavior is confirmed or flagged
- Form fields source is confirmed
- Schema types and required fields are confirmed
- Client-confirmation values are flagged
- Internal links are verified or marked as skipped
- Sitemap behavior is verified or flagged
- Robots behavior is verified or flagged
- File scope declaration is complete
- Gate 1 plan is approved by the user
- Gate 2 plan is approved by the user

Hard stop rule:

Do not proceed to file creation or file editing until Gate 1 inspection is complete, Gate 2 plan is complete, file scope is declared, and the user explicitly approves moving to Gate 3.

---

## Navigation Update Scope Limit

When updating navigation, make only the single required link addition.

Do not:

- Restructure navigation
- Reorder existing links
- Change styling
- Modify header/footer layout
- Rename existing navigation files
- Alter unrelated menu behavior

If navigation update is included in Gate 2 scope:

- Add only the approved single navigation link.
- Do not restructure navigation.
- Do not reorder links.
- Do not change styling.
- Do not modify unrelated header or footer behavior.

If navigation update is not included in Gate 2 scope:

- Do not modify navigation.
- Report navigation update as a recommended follow-up in Gate 5.

Required Gate 5 line:

Navigation update status: completed / skipped because out of scope / recommended as follow-up.

---

## Sitemap Conditional Logic

If the page is a new route, Gate 3 must include sitemap handling.

Claude Code must check whether the project uses:

- Static sitemap.xml
- Dynamic sitemap generator
- Framework sitemap route
- CMS-managed sitemap
- No sitemap found

If static, add the new URL.

If dynamic, confirm whether the new route is included automatically.

If sitemap behavior is unclear, add:

// TODO: Confirm new page URL is included in sitemap before launch.

Do not refactor the sitemap system unless required.

---

## Gate 2 Required Output

After Gate 2, report:

1. Build approach: Create new file / Audit and extend / Replace / No edit
2. Target route
3. Target file path
4. File-state verification summary
5. Files to create
6. Files to edit
7. Files not to touch
8. Components to reuse
9. Components to create, if needed
10. Metadata approach
11. Schema approach
12. Form approach
13. Form fields source
14. CTA approach
15. Navigation approach
16. Sitemap approach
17. Robots approach
18. Internal link approach
19. Image approach
20. Validation plan
21. Risks or blockers
22. Whether user approval is required before Gate 3
23. Exact implementation sequence — ordered list of file operations Gate 3 will perform
24. Expected `git status` after implementation — exact expected modified / untracked file listing
25. Carry-forward TODOs and launch blockers — from Prompt 05, Client Intake Gate, and any items surfaced during inspection
26. Explicit confirmation that no file writes have occurred during Gate 2 and that no file writes will occur until the user approves the Gate 2 plan
27. Required Design Skill Pass translation per `docs/design/required-website-design-skills.md`, including:
    a. Design skills used (which of the five required skills produced outputs for this page)
    b. Layout strategy (from frontend-design-engineer)
    c. Responsive behavior (from frontend-design-engineer)
    d. Motion strategy (from emil-kowalski-motion-design)
    e. UI polish requirements (from impeccable-ui-polish)
    f. Conversion UX requirements (from ux-ui-conversion-design)
    g. SEO/AEO structure (from seo-aeo-llm-page-architecture)
    h. Accessibility requirements (from frontend-design-engineer)
    i. Design skill carry-forward items — any skill output that requires project-owner confirmation before Gate 3

Stop after Gate 2.

---

# Gate 3: Build

## Gate 3 Repository State Reconciliation Rule

Before implementation, Prompt 06 must reconcile Gate 1 and Gate 2 findings.

Prompt 06 must confirm:

- Target project folder
- Target route
- Target file path
- Whether the target file currently exists
- Whether the target file was opened/read
- Whether Gate 1 and Gate 2 agree on file state
- Whether implementation is creating a new file or editing an existing file
- Exact files approved for editing
- Exact files that must not be edited

If Gate 1 or Gate 2 said the file existed but Gate 3 cannot find it, stop and report:

REPOSITORY STATE MISMATCH — DO NOT IMPLEMENT

If Gate 1 or Gate 2 said the file did not exist but Gate 3 finds it, stop and report:

REPOSITORY STATE MISMATCH — DO NOT OVERWRITE WITHOUT APPROVAL

Prompt 06 must not proceed with implementation until the mismatch is resolved or the user explicitly approves the corrected file-state plan.

---

## Build Instructions

Implement the page using the approved strategy.

During implementation:

- Follow existing patterns
- Keep code clean and readable
- Use semantic structure where applicable
- Add metadata
- Add schema if the project supports it and the data is verified
- Add internal links only when verified
- Add CTAs
- Keep layout responsive
- Preserve existing functionality
- Preserve existing architecture
- Preserve TODO and FLAG comments for unconfirmed data
- Avoid unrelated file changes

Do not create fake data.

Do not add unsupported proof.

Do not overwrite existing files unless that was approved in Gate 2.

---

# Gate 4: Validate

After building, Claude Code must validate:

- Page route exists
- Page renders without obvious errors
- No duplicate route was created
- Metadata exists
- Canonical is present or correctly TODO-flagged
- One H1 exists
- H2 and H3 hierarchy is logical
- Sections are in correct order
- AEO FAQ section exists if required
- FAQPage schema matches visible FAQ content exactly
- HowTo schema is either omitted or matches visible process step headings and step descriptions exactly
- LocalBusiness schema contains only verified values or clearly flagged placeholders
- AggregateRating is included only if verified rating data was provided
- BreadcrumbList schema matches visible breadcrumb if used
- Internal links resolve
- Broken internal links were not added
- CTAs are visible
- CTA links work or are TODO-flagged
- Tap-to-call uses tel: protocol if phone is confirmed
- Form fields match requirements
- Form submission is connected or clearly TODO-flagged
- Images have alt text
- New route is not blocked by robots.txt or robots meta directives
- Sitemap includes the route or is TODO-flagged
- Accessibility basics pass
- Mobile layout works
- Desktop layout works
- No unrelated files were modified
- Build/lint/test commands pass if available

If validation fails, Claude Code must fix the issue before reporting.

Run available validation commands based on package.json.

Use:

- npm run build, if available
- npm run lint, if available
- npm run typecheck, if available
- tsc --noEmit, if TypeScript is configured and no typecheck script exists
- npm test, if available

Do not claim validation passed unless the command actually ran and passed.

---

# Gate 5: Report

Claude Code must finish with a report that includes:

1. Summary of what was built
2. Files created
3. Files edited
4. Files intentionally not touched
5. Route created or updated
6. Metadata added
7. Schema added
8. Schema skipped and why
9. AggregateRating status: included with verified data / omitted because verified data was not provided
10. HowTo schema status: included / omitted / skipped because visible steps did not qualify
11. Internal links added
12. Internal links skipped and why
13. CTA placements added
14. Form behavior and remaining TODOs
15. Whether form submission is fully connected or still TODO
16. Client-confirmation flags
17. Which schema fields are verified
18. Which schema fields are placeholders
19. Which LocalBusiness fields require client confirmation
20. Whether sitemap was updated, automatically included, or flagged as TODO
21. Navigation update status: completed / skipped because out of scope / recommended as follow-up
22. Validation results
23. Remaining blockers
24. Recommended next step
25. Whether Gate 1 was approved
26. Whether Gate 2 was approved
27. File-state verification summary
28. Whether the target file existed before implementation
29. Whether the target file was opened/read before planning
30. Whether the final implementation created a new file or edited an existing file
31. Whether Gate 1, Gate 2, and Gate 3 agreed on repository state
32. Any repository state mismatch and how it was resolved
33. Selected workflow mode from Prompt 05 (Fast / Core / Beyond-Elite / Full Competitive Build)
34. Whether the Compact Strategy Summary was used as the primary handoff (yes / no)
35. Client Intake Gate status at the start of Gate 1 (CLEARED / CLEARED WITH FLAGS / NOT CLEARED)
36. TODOs carried forward — every TODO inserted into code with file path and line number
37. Launch blockers carried forward — every launch-critical item still unresolved
38. Final `git status` output — verbatim
39. Whether commit and push were skipped or executed in this Prompt 06 invocation
40. Workflow-mode escalation check — confirm Prompt 06 did not escalate the mode selected by Prompt 05

---

## File-State Verification Summary

Include this summary in Gate 1, Gate 2, and Gate 3 reports:

- Target file path:
- File exists: YES / NO / NOT VERIFIED
- File opened/read: YES / NO
- Evidence of file inspection:
- Existing contents summary:
- Existing imports found:
- Existing components found:
- Existing metadata found:
- Existing schema found:
- Existing TODO or FLAG comments found:
- Build approach: Create new file / Audit and extend / Replace / No edit
- Repository state mismatch: YES / NO
- User approval required before implementation: YES / NO

---

## Acceptance Criteria

The page is not complete until:

- The route is correct
- The page follows the approved section structure
- The metadata is present
- One clear H1 exists
- Headings are logical
- Internal links are included or skipped with reason
- CTAs are clear
- AEO/FAQ content is included if required
- Schema is included or prepared if required
- Schema uses only verified data
- FAQPage schema matches visible FAQ text exactly
- LocalBusiness schema does not invent business data
- AggregateRating is omitted unless verified rating data is provided
- The page follows existing design patterns
- The page is responsive or uses responsive patterns
- No unrelated files were changed
- No duplicate route was created
- No fake claims, fake reviews, unsupported proof, or unverified business data were added
- File-state verification is documented
- Gate 1 and Gate 2 were explicitly approved before build

---

## Page-Specific Validation Placeholder Rule

Gate 4 validation checklists must use page-specific placeholders when generating reusable prompts.

Use placeholders such as:

- [PAGE ROUTE]
- [PAGE H1]
- [META TITLE]
- [META DESCRIPTION]
- [NUMBER OF SECTIONS]
- [NUMBER OF FAQS]
- [PRIMARY CTA]
- [SECONDARY CTA]
- [SCHEMA TYPES]
- [INTERNAL LINK TARGETS]
- [FORM FIELDS]
- [SERVICE AREA]
- [CLIENT CONFIRMATION ITEMS]

When generating a final Claude Code prompt for a specific benchmark or client page, replace placeholders with approved values from the developer build brief.

Do not hardcode benchmark values into the reusable template.

---

## Final Claude Code Prompt Requirement

The final output of this prompt must be a paste-ready Claude Code prompt.

It must include the specific project/page details, route, metadata, page sections, schema requirements, CTA requirements, form requirements, internal link rules, guardrails, validation checklist, and report format.

Do not output only a strategy summary.

Do not assume Claude Code remembers previous prompts.

The final Claude Code prompt must be self-contained.

Include the route, sections, metadata, schema, CTA requirements, form requirements, internal link rules, guardrails, validation checklist, and report format inside the final prompt.

---

## Token Efficiency Rule

If the strategy has already been approved, compress strategy context and focus on implementation instructions.

Do not regenerate the full strategy.

Keep the final Claude Code prompt complete, but remove repeated explanations that do not affect implementation.

---

## Final v2.3 Quality Gate

Before returning a final Claude Code prompt, confirm that it includes:

- Depth setting
- Gate 1 hard stop
- Gate 2 hard stop
- Framework detection
- Unknown-framework halt rule
- Route conflict check
- File-state verification rule
- Existing file audit rule
- Repository state reconciliation rule
- File scope declaration
- Form endpoint confirmation
- Form field source confirmation
- Internal link verification
- LocalBusiness field protection
- AggregateRating conditional rule
- FAQ/schema visible-text match rule
- HowTo audit line
- Sitemap handling
- robots.txt check
- Navigation scope outcome rule
- Gate 4 validation checklist
- Gate 5 final report format
- File-state verification summary in Gate 1, Gate 2, and Gate 3
- Efficiency Governor Inputs section
- Mode preservation rule
- Compact Strategy Summary handoff rule
- No re-running strategy prompts rule
- Client Intake Gate respect rule
- TODO Placeholder Rule with file-type-aware syntax
- Gate 1 Efficiency Governor Preflight
- Gate 2 implementation sequence and expected git status output
- Gate 2 carry-forward TODO and launch blocker output
- Scope expansion requirement
- Gate 5 Efficiency Governor reporting items (workflow mode, compact summary use, intake status, TODOs, launch blockers, final git status, commit/push status, escalation check)
- Required Design Skill Pass per `docs/design/required-website-design-skills.md` — Gate 1 preflight items 11a and 11b (design skill files present, design skill pass declared in brief), Gate 2 output item 27 (design skill translation), and Gate 4 verification of the five QA checks (responsive layout, motion restraint, polish, conversion path, SEO/AEO architecture)

If any item is missing, revise the prompt before returning it.

---

## Final Master Rule

Work carefully and sequentially.

Inspect first.

Stop.

Wait for Gate 1 approval.

Plan second.

Stop.

Wait for Gate 2 approval.

Build third.

Validate fourth.

Report fifth.

Do not rely on memory.

Do not invent client data.

Do not claim a file exists unless it was inspected.

Do not claim a file’s contents unless it was opened/read.

Respect the workflow mode selected by Prompt 05.

Respect the Client Intake Gate status.

Use the Compact Strategy Summary as the primary handoff when provided.

Do not escalate, do not re-run upstream strategy prompts, and do not modify files outside the approved scope without explicit approval.

Do not proceed through hard stops without explicit user approval.