# SB Mobile Installations Design System

**Document:** 21-design-system.md  
**Project:** SB Mobile Installations Website and Installer Recruitment Project  
**Business:** SB Mobile Installations, LLC  
**Repository:** https://github.com/SedrickHarris/sb-mobile-installations-site.git  
**Framework:** Next.js App Router, TypeScript, Tailwind CSS  
**Hosting:** Cloudflare Pages static export  
**Primary objective:** Make qualified installer opportunities easy to understand and easy to pursue.  
**Status:** Working design standard  
**Version:** 0.1  
**Last updated:** September 10, 2026

---

## 1. Purpose

This document defines the visual language, interaction rules, content presentation patterns, and implementation constraints for the SB Mobile Installations website.

It works with:

- 20-component-inventory.md for component boundaries;
- 14-conversion-strategy.md for journey and CTA priorities;
- 15-analytics-and-measurement.md for measurable interactions;
- 16-technical-architecture.md for rendering and data boundaries; and
- 23-accessibility-standards.md for detailed accessibility verification.

The system is intentionally practical. It should help candidates decide whether an installer opportunity fits them, help qualified candidates apply, and preserve a credible secondary path for commercial visitors.

---

## 2. Design Outcomes

Every approved page should make these questions easier to answer:

1. What does SB Mobile Installations do?
2. Is this page for an installer candidate, an installer-network contact, or a commercial buyer?
3. What is the next appropriate action?
4. What facts are verified, and what remains subject to review?
5. How can the visitor continue without confusion or unnecessary form friction?

The visual system must support organic search, local discovery, answer engines, and conversion without making pages feel like keyword-targeted templates.

---

## 3. Brand Direction

### 3.1 Personality

The brand should feel:

- capable and technically grounded;
- clear rather than corporate or vague;
- practical and field-aware;
- respectful of candidates' time;
- trustworthy without exaggerated claims; and
- organized enough for commercial buyers to understand the engagement path.

### 3.2 Avoid

- generic “tech company” gradients;
- visual language that suggests a staffing agency unless verified;
- stock imagery of unrelated office teams;
- unsubstantiated “best,” “leading,” or “guaranteed” claims;
- excessive animation, carousels, or pop-ups;
- visually equal treatment of every CTA; and
- designs that hide job status or application requirements.

### 3.3 Audience priority

The homepage and global navigation should give candidates the clearest path to Careers and Current Openings. Commercial pages may use a stronger buyer CTA within their own context, but should not blur buyer and candidate journeys.

---

## 4. Design Tokens

Tokens are the single source for recurring visual decisions. Use CSS variables or Tailwind theme values rather than scattered hex values.

### 4.1 Color tokens

| Token | Value | Use |
|---|---|---|
| color-ink | #111827 | Primary text and headings |
| color-ink-muted | #4B5563 | Supporting text |
| color-surface | #FFFFFF | Cards and primary page surface |
| color-surface-subtle | #F5F7FA | Alternating sections and form backgrounds |
| color-surface-dark | #111827 | Footer and high-contrast panels |
| color-brand | #1468FF | Primary links, buttons, and focus accents |
| color-brand-dark | #0B4DB8 | Hover and pressed states |
| color-brand-soft | #E8F0FF | Tinted panels and selected states |
| color-accent | #F2EA00 | Small emphasis details only |
| color-success | #166534 | Confirmed success state |
| color-warning | #92400E | Caution or incomplete information |
| color-error | #B42318 | Validation and submission errors |
| color-border | #D9E0EA | Borders and dividers |

### Color rules

- Blue is the primary action color.
- Yellow is an accent, never the only indicator of meaning and never a full-page background behind small text.
- Dark surfaces require tested text contrast and restrained use.
- Error, success, and warning states require text and an accessible status, not color alone.
- Do not use brand colors to imply that an unverified claim is approved.

### 4.2 Typography tokens

Use a highly legible sans-serif family with a system fallback. The final font choice is recorded in the implementation PR after performance and licensing review.

| Token | Suggested size | Line height | Use |
|---|---:|---:|---|
| text-display | 3rem–4.5rem | 1.05 | Homepage and major campaign headline |
| text-h1 | 2.5rem–3.75rem | 1.08 | Page H1 |
| text-h2 | 2rem–2.75rem | 1.12 | Major section heading |
| text-h3 | 1.375rem–1.75rem | 1.2 | Card and subsection heading |
| text-h4 | 1.125rem–1.375rem | 1.25 | Minor heading |
| text-body-lg | 1.125rem | 1.6 | Lead paragraph |
| text-body | 1rem | 1.6 | Default body copy |
| text-small | 0.875rem | 1.5 | Metadata and supporting copy |
| text-label | 0.75rem–0.875rem | 1.3 | Form labels and status labels |

Responsive headings should scale with clamp() but remain readable at narrow widths. Do not use all-caps for long headings.

### 4.3 Spacing tokens

Use a 4px base scale:

4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 120

Recommended defaults:

- card internal padding: 24px;
- mobile section padding: 48px 20px;
- desktop section padding: 80px 24px;
- content column maximum: 720px;
- standard site container maximum: 1200px–1280px;
- card grid gap: 20px–28px; and
- form field gap: 16px.

Use whitespace to separate intent groups. Do not compress headings, descriptions, cards, and forms until they become visually indistinguishable.

### 4.4 Radius, border, and shadow

| Token | Value | Use |
|---|---|---|
| radius-sm | 6px | Inputs and small badges |
| radius-md | 10px | Cards and buttons |
| radius-lg | 16px | Feature panels and media |
| shadow-card | 0 8px 28px rgba(17,24,39,.08) | Elevated cards only |
| shadow-focus | theme-controlled | Keyboard focus treatment |

Use borders before shadows. Avoid making every section look elevated.

---

## 5. Page Canvas and Layout

### 5.1 Global canvas

- Use a light default page background.
- Keep content aligned to a consistent container.
- Allow full-bleed media only when content remains readable and the crop is intentional.
- Keep footer and dark trust panels visually distinct from primary conversion sections.
- Preserve an obvious reading order in the DOM.

### 5.2 Container widths

| Context | Maximum width |
|---|---:|
| Standard page | 1200px–1280px |
| Long-form reading | 720px–780px |
| Job detail content | 900px–1040px |
| Form plus supporting content | 1040px–1160px |
| Full-bleed hero | viewport width with inner container |

### 5.3 Section rhythm

Use a repeatable rhythm:

1. section eyebrow or context label when useful;
2. heading;
3. direct answer or short introduction;
4. primary content module;
5. relevant next step.

Do not force every page into identical section counts. A page earns its length through useful information and evidence.

---

## 6. Navigation and Header

The desktop header includes the logo, primary navigation, and a visibly prioritized Careers or Current Openings link. Commercial navigation may include Services, Industries, Service Areas, Resources, About, and Contact only when those pages are approved.

The mobile menu is a compact client component. It must use a real button, expose expanded state, move focus appropriately, close on Escape, preserve scroll position, place Careers and Current Openings near the top, and remain usable at 200% zoom.

### Header CTA hierarchy

1. Current Openings or Careers when recruitment inventory is active.
2. Join Installer Network when no suitable opening is available.
3. Commercial inquiry on commercial pages.

Never use one generic “Get Started” CTA to route every audience.

---

## 7. Hero System

### 7.1 Shared rules

Every hero has one H1, a short supporting statement, a primary action aligned with page intent, an optional secondary action, a readable image crop or solid surface, and no unsupported proof claim.

Heroes should not contain multiple competing forms. A page can introduce a form immediately below the hero when the journey requires it.

### 7.2 Hero variants

| Variant | Primary use | CTA |
|---|---|---|
| Home hero | Company context and audience routing | View Current Openings |
| Careers hero | Employer and installer opportunity | View Current Openings |
| Job hero | One active or closed opening | Apply for This Opening |
| Role hero | Evergreen role education | Explore Current Openings |
| Commercial hero | Service or buyer context | Discuss a Project |
| Article hero | Answer/resource content | Contextual next step |
| Utility hero | Contact, About, legal | Page-specific action |

### 7.3 Hero image placement

- Reserve a calm text area, especially on the left side of image-led layouts.
- If a contact or application panel overlays the right side, keep the far right subdued and uncluttered.
- Use object-position per image rather than accepting an accidental crop.
- Do not place text over high-detail equipment, faces, or critical technical evidence.
- Provide an equivalent solid-background treatment when image contrast cannot pass.

---

## 8. Recruitment Visual Language

Recruitment pages should feel direct and operational. Candidates need practical information more than decorative brand storytelling.

Recommended visual cues include strong status badges for Active, Closed, or Network; compact fact rows for location model, travel, schedule, and classification; checklists for requirements; numbered steps for application and assignment process; prominent but contained Apply actions; and concise FAQ accordions with visible question text.

Do not imply an evergreen role is a current vacancy, hide requirements behind tabs or hover states, use “Join the team” when the page collects network interest, display unverified pay or territory, or make candidates complete a commercial inquiry form.

---

## 9. Job Detail Pattern

The active-job page should present information in this order:

1. job identity and status;
2. location and work model;
3. short fit summary;
4. responsibilities;
5. requirements and preferences;
6. tools, vehicle, travel, or documentation expectations when verified;
7. compensation or classification when approved;
8. application process;
9. application form or approved ATS action;
10. candidate FAQs; and
11. relevant next paths.

The Apply action should remain visible at sensible points without becoming an obstructive sticky element. A closed job removes the active application action and JobPosting schema.

---

## 10. Cards and Grids

### Card anatomy

1. optional image or icon;
2. eyebrow or category;
3. heading;
4. concise summary;
5. optional facts or status;
6. clear link or action.

Card content should be scannable without making every card the same height through artificial filler. Equal-height grids are acceptable only when the layout remains readable and links align predictably.

Card variants include recruitment pathway, active job, installer-network, service, industry or technology, resource, and approved proof cards. Cards must not combine candidate and commercial calls to action in one undifferentiated grid.

---

## 11. Buttons and Links

| Variant | Use |
|---|---|
| Primary | Main page conversion |
| Secondary | Important alternate path |
| Tertiary/link | Supporting navigation |
| Destructive | Only for an actual destructive operation |
| Disabled | Temporary unavailable state, never decoration |

Prefer specific labels such as View Current Openings, Apply for This Opening, Join the Installer Network, Review Installer Requirements, Discuss a Commercial Project, and Contact SB Mobile Installations.

Avoid vague labels such as Learn More, Submit, or Get Started when a specific action can be named.

Buttons and links require a minimum 44px by 44px pointer target, visible hover, focus-visible, active, and disabled states, no color-only state change, native link behavior, and stable analytics IDs.

---

## 12. Forms and Conversion Surfaces

Ask only for information needed for the next business decision. Use separate forms for active applications, installer network interest, commercial inquiries, referrals, and general contact. Put the form purpose and privacy expectation above the first field. Keep labels visible, show errors beside fields and in a summary for longer forms, preserve valid entries after recoverable errors, and never send field values to analytics.

Use a single-column layout by default. A two-column layout is acceptable for short, related fields on wide screens, but must collapse in a logical reading order.

The application form collects only approved candidate information and discloses how it will be reviewed. If an ATS is used, the design makes the handoff explicit and avoids duplicating a second application.

The installer network form uses “Register Interest” or “Join the Installer Network.” Its confirmation never implies that the candidate applied for a specific active opening.

The commercial inquiry form asks for project context, contact details, and routing information. It does not ask candidate-specific questions or promise a quote unless the verified process supports that promise.

Confirmation pages use a distinct visual state, realistic next steps, and noindex behavior. The accepted state appears only after the trusted form or platform response.

---

## 13. Content Presentation

Place a concise answer near the top of informational pages, followed by evidence, detail, examples, and a relevant action. This supports search snippets and human scanning without making copy formulaic.

Use one H1 per page. Headings must reflect content hierarchy, remain meaningful without styling, and never be added only for visual size.

Use real candidate or buyer questions in FAQs. Keep answers visible in HTML even when an accordion is used. FAQ structured data must be generated from the same approved content.

Use semantic tables for relationships such as active opening versus network registration or required versus preferred qualifications. Use definition lists for controlled fact/value pairs.

Bylines, reviewed dates, and update labels appear only when truthful and supported by the content workflow.

---

## 14. Imagery and Media

Use realistic field and equipment imagery that supports the page's actual subject. Prefer natural daylight, credible work environments, and uncluttered compositions.

Image constraints:

- no text overlays, logos, or watermarks in source images;
- no invented branded vehicles or equipment claims;
- no identifiable customer addresses, tenant names, or confidential documents;
- no dramatic damage used merely for attention;
- reserve negative space for copy where required;
- provide descriptive alt text when informative; and
- use empty alt text for decorative imagery.

| Use | Ratio |
|---|---|
| Hero | 16:9 or responsive crop |
| Service or resource card | 16:9 or 7:4 |
| Diagnostic illustration | 4:3 when detail is important |
| Logo or icon | Intrinsic ratio with constrained box |

Use the approved image helper with explicit dimensions, responsive sizes, and modern formats when supported.

---

## 15. Commercial Visual Language

Commercial pages should convey organized project evaluation without overpowering the recruitment-first brand hierarchy.

Use project-fit checklists, process steps, clear service scope, verified industries or technology categories, evidence panels only when sourced, and a direct inquiry panel with expectations.

Do not use the visual language of a large national contractor, certified partner, or equipment manufacturer unless the relationship is verified.

---

## 16. States and Feedback

Every interactive component documents default, hover, focus-visible, pressed, disabled, loading, validation error, server error, empty, success, and closed or unavailable states when applicable.

| Job state | Visual treatment | Allowed action |
|---|---|---|
| Active | Clear Active badge and current facts | Apply |
| Closed | Muted status with explicit closure | Other openings or network |
| No openings | Helpful empty state | Network or requirements |
| Unverified | Internal/build state only | Do not publish |

Do not use loading animation as a substitute for a useful static fallback.

---

## 17. Responsive Rules

Design mobile first. Preserve reading order when columns collapse, stack hero content and forms before text becomes cramped, allow tables to wrap or scroll intentionally with labels intact, keep action buttons full-width where useful, do not rely on hover for meaning, and test narrow widths, tablets, desktop, and 200% zoom.

Mobile priority is page context, primary action, key facts, supporting detail, then secondary navigation.

---

## 18. Accessibility Standard

The target is WCAG 2.2 AA for public pages.

Required behavior includes semantic landmarks, keyboard access, visible focus indicators, sufficient contrast, labels and instructions for controls, error association and recovery, no content dependent on color alone, reduced-motion support, an alt-text strategy, logical focus order, a skip link, an accessible mobile menu, and no keyboard traps.

Detailed test cases belong in 23-accessibility-standards.md and 25-quality-assurance-checklist.md.

---

## 19. Motion and Interaction

Motion should explain change, not decorate the page.

- use short transitions for hover and disclosure state;
- respect the prefers-reduced-motion media preference;
- do not autoplay video or rotate important content;
- do not animate counters that imply unsupported statistics;
- do not delay access to application or inquiry forms; and
- avoid parallax that harms readability or mobile performance.

---

## 20. SEO and Rendering Requirements

Design decisions must preserve server-rendered primary content, crawlable HTML links, stable heading hierarchy, canonical page context, visible breadcrumbs on deep pages, schema matching visible content, accurate active and closed job states, noindex confirmation and utility states, and meaningful page text without JavaScript execution.

Visual components must not hide the answer, requirements, service scope, or location context behind a client-only interaction.

---

## 21. Performance Budget

The initial design supports a fast static site by minimizing client components, avoiding large animation libraries, loading hero media intentionally, using responsive image sources, reserving image dimensions, limiting font families and weights, deferring nonessential media, avoiding unapproved third-party embeds, and testing Core Web Vitals on representative mobile pages.

Specific numeric budgets are governed by 24-performance-budget.md.

---

## 22. Tailwind and Implementation Rules

- Map tokens to Tailwind theme values.
- Prefer component-level variants over long page-specific utility strings.
- Keep content data separate from visual props.
- Use explicit variants such as intent=recruitment or tone=muted only when the contract is stable.
- Do not add arbitrary one-off colors to solve a single page.
- Keep responsive classes grouped by layout purpose.
- Avoid !important except for a documented third-party integration boundary.
- Keep the "use client" directive at the smallest necessary component boundary.

---

## 23. Component Variant Governance

Before adding a variant, answer:

1. Is the content or audience genuinely different?
2. Can a data prop solve the difference without changing layout semantics?
3. Will at least two approved pages use the variant?
4. Does the variant preserve accessibility and analytics behavior?
5. Does it add a documented test fixture?

If not, keep the implementation local or defer it. Do not create a universal component with dozens of boolean props.

---

## 24. Design Review Checklist

- [ ] The page audience and primary action are obvious.
- [ ] Recruitment remains visually prioritized where required.
- [ ] Candidate, network, and commercial paths are not conflated.
- [ ] All controlled facts come from approved data.
- [ ] The heading hierarchy is semantic.
- [ ] Mobile and desktop layouts preserve reading order.
- [ ] Focus, error, loading, empty, and success states exist.
- [ ] Text and controls meet contrast and target-size requirements.
- [ ] Images have correct crop, dimensions, and alt strategy.
- [ ] No unsupported trust, location, compensation, or capability claim was introduced.
- [ ] Primary content is available in static output.
- [ ] Analytics events use approved names and no PII.
- [ ] Schema is generated from the same content source.
- [ ] Build, lint, typecheck, and preview checks pass.

---

## 25. Open Decisions

1. Final font family and licensed weights.
2. Approved logo files and usage clear space.
3. Final photography and illustration set.
4. Whether an application form is onsite, embedded, or ATS-hosted.
5. Whether Turnstile appears on every public form.
6. Confirmed active jobs, recruiting markets, and commercial services.
7. Approved testimonials, customer logos, certifications, and statistics.
8. Final analytics and consent provider.
9. Whether a component preview tool is needed.

Unresolved decisions must not be filled with invented content or placeholder claims in production.

---

## 26. Definition of Done

The design system is ready for implementation when tokens are available to Tailwind and CSS; the component inventory has a documented visual contract; recruitment, network, and commercial variants are distinguishable; typography and spacing are consistent across approved page families; form, job-state, and confirmation states are designed; responsive and accessibility requirements are testable; image rules support static export and performance budgets; design decisions preserve crawlable content and schema alignment; and the system supports new verified pages without generic filler or uncontrolled variants.

---

## 27. Related Documents

- 00-project-overview.md
- 01-business-source-of-truth.md
- 07-site-architecture.md
- 08-url-strategy.md
- 09-content-strategy.md
- 10-on-page-seo-standards.md
- 12-aeo-geo-llm-optimization.md
- 13-schema-markup-plan.md
- 14-conversion-strategy.md
- 15-analytics-and-measurement.md
- 16-technical-architecture.md
- 17-cloudflare-deployment.md
- 19-claude-project-instructions.md
- 20-component-inventory.md
- 22-image-strategy.md
- 23-accessibility-standards.md
- 24-performance-budget.md
- 25-quality-assurance-checklist.md

## 28. Maintenance

Update this document when brand tokens, typography, image rules, component variants, accessibility requirements, or conversion priorities change. Record material changes in Git and the project decision log.
