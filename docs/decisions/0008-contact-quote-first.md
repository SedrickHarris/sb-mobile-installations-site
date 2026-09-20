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
6. **Installer questions block.** "Have Questions About Installer
   Opportunities?" is reused from the Careers landing content at the bottom of
   the page. On `/contact/` it keeps only the Installer Network path
   (`cta_installer_network_click`, `data-journey="recruitment"`). The path that
   uses "Apply" stays on `/careers/`. The phone link is low-emphasis, keeps the
   recruitment journey, and emits no commercial call event. It has no red fill.
7. **Quote wording.** docs/21 line 394 says the commercial form must not
   promise a quote unless the verified process supports it. The CTA and H1 reuse
   the label "Request an Installation Quote" already approved on the homepage
   and services hub. No new promise is added.
