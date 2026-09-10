# SB Mobile Installations Accessibility Standards

**Document:** 23-accessibility-standards.md  
**Project:** SB Mobile Installations Website and Installer Recruitment Project  
**Business:** SB Mobile Installations, LLC  
**Framework:** Next.js App Router, TypeScript, Tailwind CSS  
**Hosting:** Cloudflare Pages static export  
**Target:** WCAG 2.2 Level AA for public pages  
**Status:** Working accessibility standard  
**Version:** 0.1  
**Last updated:** September 10, 2026

---

## 1. Purpose

This document defines the accessibility requirements for the SB Mobile Installations website. It converts the component inventory and design system into testable behavior for candidates, installer-network contacts, commercial buyers, and general visitors.

Accessibility is part of the product contract. It is not a final visual polish step.

Related standards:

- 20-component-inventory.md;
- 21-design-system.md;
- 24-performance-budget.md;
- 25-quality-assurance-checklist.md;
- 26-launch-checklist.md; and
- 30-job-content-schema-specification.md.

---

## 2. Accessibility Outcomes

Visitors must be able to:

1. identify the page audience and purpose;
2. navigate to Careers and Current Openings;
3. understand active, closed, and network states;
4. review job requirements and process information;
5. complete an approved application or inquiry form;
6. recover from validation and server errors;
7. use the site with keyboard, screen reader, zoom, and reduced motion;
8. distinguish links, buttons, statuses, and headings; and
9. access the primary content without client-side JavaScript.

---

## 3. Conformance Baseline

The implementation targets WCAG 2.2 AA and the following practical expectations:

- keyboard-only operation;
- screen-reader compatibility with semantic HTML;
- 200 percent browser zoom;
- 400 percent reflow where applicable;
- mobile touch targets of at least 44 by 44 CSS pixels;
- text contrast of at least 4.5:1 for normal text and 3:1 for large text;
- meaningful focus indicators;
- no content or action available only through hover;
- support for prefers-reduced-motion; and
- understandable errors and recovery instructions.

Automated tools support review but cannot establish full conformance.

---

## 4. Semantic Page Structure

Every route should use:

- one main landmark;
- a site header and navigation landmark;
- a footer landmark;
- a logical heading hierarchy;
- nav landmarks with accessible labels when more than one exists;
- lists for groups of links or steps;
- tables for actual row-and-column relationships;
- definition lists for fact/value pairs; and
- buttons for actions and links for navigation.

Do not use heading tags as generic styled text. Do not use div or span elements as interactive controls.

---

## 5. Document Language and Metadata

- Set the correct html lang value.
- Use a descriptive document title.
- Provide a useful meta description.
- Keep the visible H1 aligned with page intent.
- Ensure the current page has an understandable name.
- Do not rely on URL slugs as the only page context.
- Use a consistent title and heading order for active and closed jobs.

---

## 6. Skip Link and Landmarks

The first focusable control must be a skip link to the main content.

The skip link must:

- become visible on focus;
- remain readable against its background;
- move focus to the main landmark;
- work on every public template; and
- not be obscured by a sticky header.

Use landmark labels only when they help distinguish repeated regions.

---

## 7. Keyboard Operation

Every interactive control must be reachable and operable with a keyboard.

Required checks:

- Tab order follows reading and decision order.
- Shift+Tab reverses the order.
- Enter activates links and buttons as expected.
- Space activates buttons and checkbox controls.
- Escape closes menus, dialogs, and disclosures when applicable.
- No keyboard trap exists.
- Focus is not moved unexpectedly during ordinary navigation.
- Disabled controls are not falsely presented as available.
- The browser back button continues to work.

Do not replace native controls with custom keyboard behavior unless the behavior is fully specified and tested.

---

## 8. Focus Management

Focus indicators must be visible against every approved surface. Use a consistent outline or equivalent treatment that is not removed by CSS.

When a mobile navigation panel or dialog opens:

1. move focus to the controlling region or first meaningful control;
2. keep focus within a true modal dialog only when a modal pattern is intended;
3. close on Escape;
4. restore focus to the invoking control; and
5. prevent background content from being accidentally interactive.

After form submission errors, move focus to a useful error summary or the first invalid field without erasing user input.

---

## 9. Navigation

### Main navigation

- Use a nav landmark.
- Give the navigation an accessible name when multiple nav landmarks exist.
- Mark the current route with aria-current.
- Keep Careers and Current Openings directly reachable.
- Do not hide the recruitment path inside an unlabeled About menu.

### Mobile navigation

- Use a button with a clear accessible name.
- Expose expanded and controls relationships.
- Announce open and closed state.
- Support Escape and outside interaction where appropriate.
- Keep the menu usable at zoom and narrow widths.

### Breadcrumbs

- Use an ordered list within a nav landmark.
- Link ancestors.
- Identify the current page without making it an unnecessary link.
- Keep visible breadcrumbs aligned with breadcrumb structured data.

---

## 10. Headings and Reading Order

Each page has one H1. Heading levels must reflect content hierarchy rather than font size.

Recruitment pages should place job identity, status, requirements, process, and application content in a logical order. When a desktop two-column layout collapses, the DOM order must still make sense.

Do not place an application form before the visitor can understand which opening it belongs to.

---

## 11. Color and Contrast

Color never carries meaning alone.

Provide text, icons, labels, or patterns alongside color for:

- Active, Closed, and Network job states;
- success, warning, and error messages;
- required fields;
- selected navigation;
- form completion progress; and
- disabled or unavailable actions.

Test text, icons, borders, focus indicators, button labels, overlays, and image-backed text against the actual rendered background.

---

## 12. Typography and Reflow

- Use readable line lengths.
- Preserve spacing when text is enlarged.
- Allow text to wrap rather than truncate important facts.
- Do not use fixed-height cards that clip content.
- Test headings, labels, buttons, tables, and error messages at 200 percent zoom.
- At narrow widths, content must reflow without requiring two-dimensional scrolling except for an intentionally labeled data table.

---

## 13. Links and Buttons

Link text should identify its destination. Button text should identify its action.

Prefer:

- View Current Openings;
- Apply for This Opening;
- Join the Installer Network;
- Review Installer Requirements; and
- Discuss a Commercial Project.

Avoid repeated unlabeled “Learn More” links. If repeated cards use the same visible label, provide an accessible name that includes the card subject.

Controls must have:

- a discernible accessible name;
- a visible focus state;
- a minimum touch target of 44 by 44 CSS pixels;
- a distinct disabled state when truly unavailable; and
- no action dependent on hover.

---

## 14. Images and Alternative Text

Follow 22-image-strategy.md.

Rules:

- informative images have concise accurate alt text;
- decorative images use an empty alt attribute;
- functional images describe the action or destination;
- complex images have nearby explanatory text;
- text in images is not the only way to access important information;
- background images remain decorative and nonessential; and
- alt text does not contain keyword lists or unsupported claims.

Do not identify people, customers, locations, or equipment brands without approval.

---

## 15. Audio, Video, and Motion

No autoplay video or audio should be required for understanding or conversion.

If video is approved:

- provide controls;
- provide captions;
- provide a transcript when information is material;
- do not flash content in a harmful pattern;
- pause or stop motion that distracts from reading; and
- provide a poster image and nonvideo fallback.

Respect prefers-reduced-motion. Important content must not disappear or become inaccessible because animation is disabled.

---

## 16. Recruitment Accessibility

Candidates must be able to:

- distinguish an active job from an evergreen role;
- identify job location, work model, travel, schedule, and classification when provided;
- understand required versus preferred qualifications;
- find the application action;
- understand the application process;
- access the installer-network alternative without mistaking it for an application; and
- use a closed-job page without encountering a dead end.

Use status text and headings rather than color or icons alone. Do not hide requirements in hover cards or inaccessible tabs.

---

## 17. Job Cards and Job Detail

Active job cards must expose a meaningful heading, status, location or territory when verified, and a clear link.

On job detail pages:

- the job title is the page H1;
- the active or closed state is exposed in text;
- fact rows use labels and values;
- requirements are a real list;
- process stages use an ordered list when order matters;
- the Apply action has a specific accessible name; and
- closed openings remove active application controls.

If filters are introduced, the result count and empty state must be announced to assistive technology.

---

## 18. Forms

### Labels and instructions

- Every control has a visible label.
- Placeholder text is not the label.
- Required status is programmatically available and visible.
- Help text appears before error text.
- Autocomplete values are accurate.
- Input type and input mode match the expected data.

### Errors

Errors identify the field, explain the problem, and describe how to fix it. Use aria-describedby or an equivalent association. Provide an error summary for multi-field forms.

Do not clear valid user input after a recoverable error. Do not expose stack traces, internal IDs, or security details.

### Privacy and consent

Explain why sensitive or optional information is requested. Consent controls must not be preselected when consent is required.

---

## 19. Application Form

The application form must:

- identify the opening;
- provide a clear purpose statement;
- expose all required fields before submission;
- support keyboard completion;
- provide progress information for multi-step flows;
- preserve entries after validation errors;
- identify upload constraints in text; and
- show a distinct accepted application confirmation only after trusted success.

Do not emit analytics containing names, email addresses, phone numbers, resumes, or free-text field values.

---

## 20. Installer Network and Commercial Forms

The installer-network form must use network or future-opportunity language in labels, instructions, errors, and confirmation.

The commercial inquiry form must clearly state that it is for project or service questions. It must not ask the candidate questions used by the application form.

Each form has its own:

- heading and purpose;
- field schema;
- validation;
- privacy explanation;
- error and success state;
- endpoint or platform handoff; and
- analytics event names.

---

## 21. Status, Loading, and Confirmation

Use live regions carefully:

- polite announcements for ordinary progress;
- assertive announcements for blocking errors;
- visible text in addition to aria-live;
- focus movement only when it improves recovery; and
- no success claim before trusted acceptance.

Confirmation pages must be understandable if opened directly and must not expose private submission identifiers.

---

## 22. Tables, Accordions, and Disclosures

### Tables

- use captions or nearby headings;
- provide row and column headers;
- keep relationships clear on mobile;
- do not remove labels during responsive transformation.

### Accordions

- use a real button;
- expose expanded state;
- connect the button to the panel;
- support keyboard activation;
- retain accessible panel content; and
- do not hide the only answer to a page's main question.

### Disclosures

Installer-network disclaimers and job-status notices must remain present in every relevant visual variant.

---

## 23. Static Rendering and No-JavaScript Use

Primary content, navigation links, job facts, requirements, FAQs, and important service context must be available in static HTML.

Client-side behavior may enhance menus, filters, accordions, form submission, and analytics, but the page must not become empty or meaningless without JavaScript.

---

## 24. Analytics and Privacy

Analytics must not alter accessible behavior or expose personal data.

- Track interactions through stable event names.
- Do not place field values in event parameters.
- Do not use session replay on sensitive application fields without explicit approval.
- Keep preview and test traffic out of production reporting.
- Do not report a conversion before trusted submission success.

---

## 25. Testing Matrix

### Automated

- axe or equivalent scan on representative templates;
- lint and typecheck;
- HTML and heading checks;
- link and image-alt checks;
- schema validation; and
- static-output inspection.

### Manual

- keyboard-only navigation;
- screen reader smoke test;
- 200 percent zoom;
- 400 percent reflow where applicable;
- high-contrast or forced-colors review;
- reduced-motion review;
- mobile touch review;
- form error and recovery review;
- active and closed job review; and
- content-understanding review by a person unfamiliar with the build.

Test at least the homepage, Careers, Current Openings, active Job Detail, closed Job Detail, Installer Network, one commercial page, Contact, and each legal/utility template.

---

## 26. Accessibility Acceptance Checklist

- [ ] Skip link works on every public template.
- [ ] Landmarks are present and correctly named.
- [ ] Heading order is logical with one H1.
- [ ] All links and buttons have useful names.
- [ ] Keyboard focus is visible and never trapped.
- [ ] Mobile navigation works with keyboard and screen reader.
- [ ] Contrast passes on light, dark, image, hover, and focus states.
- [ ] Content reflows at zoom without clipped text.
- [ ] Images have correct alt treatment.
- [ ] No essential information is conveyed by color alone.
- [ ] Active, closed, and network states are distinct in text.
- [ ] Forms have labels, instructions, associated errors, and recovery.
- [ ] Application and commercial forms are not conflated.
- [ ] Loading and confirmation states are announced appropriately.
- [ ] Primary content remains in static output.
- [ ] Reduced-motion behavior works.
- [ ] No PII is sent to analytics.
- [ ] Manual and automated checks are recorded.

---

## 27. Exceptions and Remediation

Any exception must record:

- the affected route or component;
- the WCAG criterion or user impact;
- why the issue cannot be resolved immediately;
- the temporary mitigation;
- owner;
- target resolution date; and
- verification evidence after remediation.

No accessibility exception may justify hiding application requirements, job status, form errors, or primary conversion actions.

---

## 28. Definition of Done

Accessibility is ready for launch when approved templates meet the keyboard, screen-reader, contrast, zoom, reflow, reduced-motion, form, media, and static-content requirements; known exceptions are documented; representative pages pass automated and manual review; active and closed job states are usable; and the QA record is attached to the release.

---

## 29. Related Documents

- 20-component-inventory.md
- 21-design-system.md
- 22-image-strategy.md
- 24-performance-budget.md
- 25-quality-assurance-checklist.md
- 26-launch-checklist.md
- 30-job-content-schema-specification.md

## 30. Maintenance

Update this document when a component, form, navigation pattern, browser support requirement, WCAG interpretation, or content workflow changes. Re-test affected templates and record material changes in Git and the project decision log.
