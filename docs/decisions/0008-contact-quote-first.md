# Decision 0008: `/contact/` becomes a quote-first commercial page

**Date:** September 20, 2026
**Status:** Approved in session
**Decided by:** Stakeholder (in the working session that planned the page)
**Affects:** `/contact/`, `docs/07-site-architecture.md` section 30, `docs/14-conversion-strategy.md` section 39

## Context

`/contact/` was a general contact page. docs/07 section 30 defines it as an
intent-routing page and gives quote intake to `/request-a-quote/`. The
stakeholder supplied a recommendation that makes `/contact/` a commercial
quote-conversion page with a separate, quiet Installer Network handoff.

## Decisions

1. **Page role.** `/contact/` is quote-first. This **supersedes docs/07 section
   30 and docs/14 section 39 for `/contact/` only.** `/request-a-quote/` is not
   changed.
2. **One form.** `CommercialInquiryForm` is the only form. No recruitment form
   appears on the page.
3. **Metadata.** Title `Request a Fleet Installation Quote` (the layout adds
   the brand suffix). Description as supplied. Neither uses "nationwide",
   "near me", or state or city names.
4. **Corporate office kept.** The address block stays (approved for the contact
   page in CLAUDE.md section 5), after the commercial content. It is never
   described as a walk-in facility.
5. **Schema.** `WebPage` + `BreadcrumbList` via `webPageSchema`. docs 07, 09,
   10, and 12 name `ContactPage` for Contact. That mismatch is unchanged and
   remains a follow-up.
6. **Installer questions block (amended 2026-09-20).** "Have Questions About
   Installer Opportunities?" is the shared `InstallerQuestions` component, used
   identically on `/careers/` and at the bottom of `/contact/`, after all
   commercial content. The stakeholder chose the full Careers version over the
   reduced one first proposed, so on `/contact/` it includes the "Review and
   apply for the current opening" path (the opening is `status: "active"` in
   `src/data/jobs/`), the red phone button, the corporate office address, and
   the Careers image. This is a stakeholder-approved exception to CLAUDE.md
   section 4 ("Apply" only on careers pages), scoped to this block. On
   `/contact/` the path links carry `data-journey="recruitment"` and the
   existing `cta_careers_click` (opening) and `cta_installer_network_click`
   (network) events. No JobPosting schema is added to `/contact/`.
7. **Quote wording.** docs/21 line 394 says the commercial form must not
   promise a quote unless the verified process supports it. The CTA and H1 reuse
   the label "Request an Installation Quote" already approved on the homepage
   and services hub. No new promise is added.
