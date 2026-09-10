# SB Mobile Installations Quality Assurance Checklist

**Document:** 25-quality-assurance-checklist.md  
**Project:** SB Mobile Installations Website and Installer Recruitment Project  
**Business:** SB Mobile Installations, LLC  
**Framework:** Next.js App Router, TypeScript, Tailwind CSS  
**Hosting:** Cloudflare Pages static export  
**Primary objective:** Verify that every published page is accurate, usable, discoverable, fast, accessible, and conversion-ready.  
**Status:** Working QA standard  
**Version:** 0.1  
**Last updated:** September 10, 2026

---

## 1. Purpose

This checklist defines the quality gates for content, code, design, SEO, recruitment conversion, forms, structured data, accessibility, performance, deployment, and post-release verification.

It works with:

- 01-business-source-of-truth.md;
- 07-site-architecture.md;
- 08-url-strategy.md;
- 10-on-page-seo-standards.md;
- 13-schema-markup-plan.md;
- 14-conversion-strategy.md;
- 15-analytics-and-measurement.md;
- 16-technical-architecture.md;
- 17-cloudflare-deployment.md;
- 20-component-inventory.md;
- 21-design-system.md;
- 22-image-strategy.md;
- 23-accessibility-standards.md; and
- 24-performance-budget.md.

No page is ready because it “looks finished.” It is ready when the applicable checks are complete and evidence is recorded.

---

## 2. QA Statuses

Use one status for every applicable check:

| Status | Meaning |
|---|---|
| Pass | Verified with evidence |
| Fail | Issue blocks the applicable gate |
| Conditional | Not applicable until an approved feature or page launches |
| Waived | Exception approved, documented, and owned |
| Not tested | Must be resolved before release |

Never mark a check Pass from assumption alone.

---

## 3. Release Evidence

Every release record should include:

- commit SHA;
- branch and pull-request or direct-main context;
- build command and result;
- preview URL;
- production URL when applicable;
- test date;
- tester;
- affected routes;
- screenshots or tool output for material checks;
- known exceptions and owners; and
- rollback or remediation notes.

---

## 4. Source-of-Truth Review

- [ ] Business name matches the approved source of truth.
- [ ] Entity and ownership language is approved.
- [ ] Services are limited to verified capabilities.
- [ ] Locations and service areas are verified.
- [ ] Phone numbers, emails, hours, and links are current.
- [ ] Job titles, statuses, requirements, and terms match the approved job record.
- [ ] Active openings are separated from evergreen role content.
- [ ] Installer-network language does not imply an application or hiring decision.
- [ ] Commercial claims do not imply unverified partnerships, certifications, or outcomes.
- [ ] No placeholder business facts remain in public output.
- [ ] Unresolved decisions are documented rather than guessed.

---

## 5. Content and Editorial QA

- [ ] Each page has one clear audience and primary intent.
- [ ] The opening answers or frames the page's main question.
- [ ] The H1 matches the canonical page purpose.
- [ ] Copy is specific, useful, and not duplicated across pages.
- [ ] Candidate and buyer language are clearly separated.
- [ ] Requirements distinguish required, preferred, and unknown information.
- [ ] Job process language does not promise an unapproved response time.
- [ ] Claims have an approved source or are written as qualified statements.
- [ ] FAQs reflect real questions and have complete answers.
- [ ] Content is readable without relying on images, accordions, or animation.
- [ ] Grammar, spelling, punctuation, and terminology are reviewed.
- [ ] No keyword stuffing, doorway copy, or thin location variation appears.
- [ ] Internal links use descriptive labels and lead to relevant pages.
- [ ] Related content does not link to drafts, blocked pages, or stale openings.

---

## 6. Page and URL QA

- [ ] Route matches the approved site architecture.
- [ ] Slug is lowercase, stable, descriptive, and hyphenated.
- [ ] Canonical URL is correct and absolute.
- [ ] Trailing-slash policy is consistent.
- [ ] Redirects exist for approved legacy URLs.
- [ ] Query parameters do not create unintended indexable duplicates.
- [ ] Breadcrumbs match the visible hierarchy.
- [ ] Page is intentionally indexable, noindexed, or excluded.
- [ ] Confirmation and utility pages are not indexable.
- [ ] The route appears in the sitemap only when eligible.
- [ ] The route does not accidentally appear in navigation before approval.

---

## 7. Recruitment Journey QA

### Careers

- [ ] Careers page clearly explains the opportunity path.
- [ ] Current Openings is directly reachable.
- [ ] Installer roles, requirements, process, FAQs, and network paths are distinct.
- [ ] Primary CTA is visible without excessive scrolling.
- [ ] Network alternative is present when appropriate.

### Current Openings

- [ ] Only approved active jobs appear.
- [ ] Job count is accurate.
- [ ] Empty state is helpful when no active jobs exist.
- [ ] Filters, if present, work and do not create uncontrolled URLs.
- [ ] Cards expose status, title, and relevant location facts.

### Job detail

- [ ] Job title is correct.
- [ ] Active or closed status is visible in text.
- [ ] Location, travel, schedule, classification, and compensation fields are accurate or omitted.
- [ ] Responsibilities and requirements match the job record.
- [ ] Apply action belongs to the correct opening.
- [ ] Closed jobs remove active application controls.
- [ ] Closed jobs retain useful alternatives.
- [ ] JobPosting schema is present only for eligible active jobs.

### Installer network

- [ ] Page explains future-opportunity purpose.
- [ ] No active-job language appears unless a specific opening is linked separately.
- [ ] No-guarantee disclosure is visible.
- [ ] Form and confirmation use network language.

---

## 8. Commercial Journey QA

- [ ] Commercial pages identify the buyer context.
- [ ] Services and capabilities are verified.
- [ ] Project-fit or process guidance is accurate.
- [ ] Commercial CTA is distinct from candidate CTAs.
- [ ] Inquiry form does not collect candidate-specific information.
- [ ] Phone and email options are verified.
- [ ] Case studies, testimonials, logos, and statistics are approved before display.
- [ ] Service-area claims match the source of truth.
- [ ] No commercial page implies a quote, contract, certification, or response time without approval.

---

## 9. Form QA

### Structure

- [ ] Form purpose is stated above the fields.
- [ ] Correct form is used for the journey.
- [ ] Every field has a visible label.
- [ ] Required status is visible and programmatically available.
- [ ] Help text is useful and concise.
- [ ] Autocomplete, input type, and input mode are accurate.
- [ ] Optional fields are clearly marked.
- [ ] Privacy and consent language is present where required.

### Validation

- [ ] Valid submissions can proceed.
- [ ] Invalid values produce specific errors.
- [ ] Errors are associated with their fields.
- [ ] Multi-error forms have a useful summary.
- [ ] User input is preserved after recoverable errors.
- [ ] Errors do not expose implementation details.
- [ ] File constraints are stated before upload.

### Submission

- [ ] Loading state prevents duplicate submission.
- [ ] Server failure is recoverable.
- [ ] Accepted state appears only after trusted success.
- [ ] Correct confirmation component is displayed.
- [ ] Confirmation does not expose private identifiers.
- [ ] Application, network, commercial, and contact events are distinct.
- [ ] No form value enters analytics.

---

## 10. Navigation and Interaction QA

- [ ] Skip link appears on keyboard focus.
- [ ] Header links work at every viewport.
- [ ] Mobile menu opens, closes, and restores focus correctly.
- [ ] Escape closes the mobile menu or disclosure where applicable.
- [ ] Current page state is communicated.
- [ ] Breadcrumb links are valid.
- [ ] Footer links are grouped and accurate.
- [ ] Accordions have accessible buttons and state.
- [ ] Tables remain understandable on mobile.
- [ ] No interaction depends on hover.
- [ ] All links and buttons have specific accessible names.
- [ ] No dead-end page is introduced.

---

## 11. Responsive and Visual QA

Test representative routes at:

- 320px wide;
- 375px wide;
- 414px wide;
- tablet width;
- 1280px desktop;
- wide desktop; and
- 200 percent browser zoom.

Verify:

- [ ] No horizontal overflow except intentional tables.
- [ ] Header and navigation remain usable.
- [ ] Hero copy remains readable.
- [ ] Form fields and buttons fit the viewport.
- [ ] Cards do not clip content.
- [ ] Images preserve the focal subject.
- [ ] Columns collapse in logical reading order.
- [ ] Sticky elements do not cover focused content.
- [ ] Error and confirmation states remain visible.
- [ ] Long headings wrap without layout failure.
- [ ] Dark, light, and image-backed sections retain contrast.

---

## 12. Accessibility QA

- [ ] Semantic landmarks are present.
- [ ] One H1 exists per page.
- [ ] Heading order is logical.
- [ ] Keyboard-only navigation completes the primary journey.
- [ ] Focus indicators are visible.
- [ ] No keyboard traps exist.
- [ ] Color is not the only signal for status or error.
- [ ] Text and controls meet contrast targets.
- [ ] Images have correct alt treatment.
- [ ] Decorative images use empty alt text.
- [ ] Forms have labels, instructions, and associated errors.
- [ ] Screen-reader smoke test passes.
- [ ] Reduced-motion behavior works.
- [ ] Content reflows at zoom.
- [ ] Touch targets meet the minimum size.
- [ ] Automated accessibility scan has been reviewed rather than blindly accepted.

Detailed criteria are maintained in 23-accessibility-standards.md.

---

## 13. SEO QA

- [ ] Title is unique, accurate, and within the approved length guidance.
- [ ] Meta description is unique and useful.
- [ ] H1, title, canonical, and page intent align.
- [ ] Primary answer or content is server-rendered.
- [ ] Internal links are crawlable.
- [ ] Images have descriptive filenames and appropriate alt text.
- [ ] Open Graph and social metadata are appropriate.
- [ ] Robots behavior is intentional.
- [ ] Sitemap inclusion is intentional.
- [ ] No accidental noindex or canonical conflict exists.
- [ ] No thin duplicate location or service page is published.
- [ ] Page supports relevant local, answer, or informational intent without stuffing.
- [ ] Structured data matches visible content.
- [ ] Active and closed jobs follow the job indexation policy.

---

## 14. Structured Data QA

- [ ] Organization data uses approved entity information.
- [ ] BreadcrumbList matches visible breadcrumbs.
- [ ] JobPosting appears only on eligible active job pages.
- [ ] Closed or evergreen pages do not retain active JobPosting data.
- [ ] Service schema is used only for verified services.
- [ ] FAQ schema matches visible FAQ content.
- [ ] Article data includes truthful author and date fields.
- [ ] Undefined or unverified properties are omitted.
- [ ] Absolute URLs and stable IDs are used.
- [ ] JSON-LD is valid and safely serialized.
- [ ] Rich-result testing has been performed where applicable.

---

## 15. Image and Media QA

- [ ] Image role is documented.
- [ ] Asset is approved for use.
- [ ] Filename follows the image strategy.
- [ ] Crop works at mobile and desktop sizes.
- [ ] Negative space supports the actual copy.
- [ ] No logos, watermarks, readable text, private information, or unsupported claims appear.
- [ ] Image dimensions are explicit.
- [ ] Correct responsive sizes are configured.
- [ ] LCP image is intentionally prioritized.
- [ ] Below-the-fold images are lazy-loaded.
- [ ] Video has controls, captions, transcript, and fallback when approved.

---

## 16. Performance QA

- [ ] Production build completes without warnings that affect delivery.
- [ ] Core Web Vitals targets are recorded.
- [ ] LCP image and font behavior are reviewed.
- [ ] JavaScript remains within the approved budget or has an exception.
- [ ] CSS and font payloads are reviewed.
- [ ] No unnecessary client component wraps a route.
- [ ] Third-party scripts are approved and measured.
- [ ] Static HTML includes the primary content.
- [ ] Layout shift is tested during image, font, menu, and error states.
- [ ] Cloudflare cache behavior is verified.
- [ ] Mobile throttled test has been completed.

Detailed thresholds are maintained in 24-performance-budget.md.

---

## 17. Analytics QA

- [ ] Event names match 15-analytics-and-measurement.md.
- [ ] CTA location and page context parameters are allowlisted.
- [ ] No PII is sent.
- [ ] Button clicks are not falsely reported as submissions.
- [ ] Submission events require trusted acceptance.
- [ ] Preview and test traffic are excluded.
- [ ] Recruitment, network, commercial, and contact conversions remain separate.
- [ ] Analytics failures do not block navigation or form recovery.
- [ ] Consent behavior matches the approved provider.
- [ ] Events are tested in a nonproduction or approved debug environment.

---

## 18. Technical QA

- [ ] Typecheck passes.
- [ ] Lint passes.
- [ ] Production build passes.
- [ ] Static export passes.
- [ ] No secret is committed.
- [ ] Environment variables are documented and scoped.
- [ ] Imports and route references resolve.
- [ ] Images and public assets exist at their referenced paths.
- [ ] No server-only module is imported into an incompatible static route.
- [ ] Error boundaries and fallback states are present where needed.
- [ ] Dependency changes are justified.
- [ ] No unreviewed generated code or placeholder file remains.

---

## 19. Link, Redirect, and Sitemap QA

- [ ] Internal links return the expected status.
- [ ] External links use the correct destination.
- [ ] Telephone and email links work on supported devices.
- [ ] Redirects are one-hop where practical.
- [ ] No redirect chain or loop exists.
- [ ] Sitemap contains only canonical eligible routes.
- [ ] Robots rules do not block intended pages.
- [ ] Removed job URLs have an intentional destination or status.
- [ ] 404 page is useful and provides Careers and Contact paths.

---

## 20. Browser and Device QA

Test current supported versions of:

- Chrome;
- Edge;
- Safari desktop;
- Safari iOS;
- Chrome Android; and
- one screen-reader/browser combination approved for the project.

Check at least one touch device and one keyboard desktop workflow. Record browser-specific exceptions rather than silently accepting them.

---

## 21. Preview and Cloudflare QA

- [ ] Preview deployment is reachable.
- [ ] Preview uses the expected build commit.
- [ ] Static routes load directly, not only through internal navigation.
- [ ] Refreshing nested routes works under the approved hosting configuration.
- [ ] Headers and content types are correct.
- [ ] Compression is enabled where expected.
- [ ] Cache headers do not serve stale active-job information.
- [ ] Forms reach the approved endpoint or platform.
- [ ] Production hostname behavior is distinct from preview analytics.

---

## 22. Pre-Merge Gate

Before merge or direct-main release:

- [ ] Applicable content checks pass.
- [ ] Typecheck and lint pass.
- [ ] Build and static export pass.
- [ ] Changed routes have responsive review.
- [ ] Changed components have accessibility review.
- [ ] Changed images have approval and optimization.
- [ ] Changed metadata and schema are validated.
- [ ] Changed events are tested.
- [ ] Open issues are either resolved or explicitly waived.

---

## 23. Pre-Production Gate

- [ ] Release commit is identified.
- [ ] Preview QA evidence is complete.
- [ ] Critical recruitment journey passes from homepage to application.
- [ ] Network path and commercial path remain distinct.
- [ ] Active and closed job records are correct.
- [ ] Forms submit to the intended destination.
- [ ] Confirmation and noindex behavior are correct.
- [ ] Sitemap and robots output are correct.
- [ ] Performance and accessibility checks pass.
- [ ] Rollback or correction path is known.

---

## 24. Post-Production Smoke Test

Immediately after deployment:

- [ ] Homepage loads at the production hostname.
- [ ] Careers and Current Openings links work.
- [ ] One active job page loads directly.
- [ ] One closed job or no-openings state is accurate.
- [ ] Application or ATS handoff works.
- [ ] Installer-network form or fallback works.
- [ ] Commercial inquiry path works when launched.
- [ ] Contact links work.
- [ ] Robots, sitemap, canonical, and metadata are correct.
- [ ] No console or network error blocks the primary journey.
- [ ] Analytics fires approved events without PII.

---

## 25. Defect Severity

| Severity | Example | Release treatment |
|---|---|---|
| Critical | Application cannot submit; sensitive data exposed; wrong active job | Block release and remediate immediately |
| High | Primary CTA broken; page not indexable as intended; major accessibility failure | Block affected route or release |
| Medium | Layout issue at a common breakpoint; inaccurate secondary copy | Fix before next scheduled release |
| Low | Cosmetic inconsistency with no journey impact | Record and prioritize |

Severity is based on user and business impact, not developer effort.

---

## 26. Definition of Done

QA is complete when the applicable checklist items pass; content and business facts are approved; recruitment, network, and commercial journeys are verified separately; forms, schema, analytics, accessibility, responsive behavior, performance, static export, redirects, and Cloudflare delivery are tested; exceptions have owners; and production smoke testing confirms the deployed build matches the approved release.

---

## 27. Related Documents

- 01-business-source-of-truth.md
- 07-site-architecture.md
- 08-url-strategy.md
- 10-on-page-seo-standards.md
- 13-schema-markup-plan.md
- 14-conversion-strategy.md
- 15-analytics-and-measurement.md
- 16-technical-architecture.md
- 17-cloudflare-deployment.md
- 20-component-inventory.md
- 21-design-system.md
- 22-image-strategy.md
- 23-accessibility-standards.md
- 24-performance-budget.md
- 26-launch-checklist.md
- 30-job-content-schema-specification.md

## 28. Maintenance

Update this checklist when a route, component, form, deployment behavior, search requirement, browser support target, or business workflow changes. Record new failure modes and their regression checks in Git and the project decision log.
