# Decision 0004: Careers hub form placement and recruiting copy

**Date:** September 18, 2026
**Status:** Approved in session
**Decided by:** Stakeholder (in the working session that planned the page)
**Affects:** `/careers/`, `docs/01-business-source-of-truth.md` section 19 (not edited here)

## Context

`/careers/` was a short page that linked to
`/careers/mobile-installation-technician/`, where the only Installer Network
form lived. The live listing page (`/career-opportunities`) returned only its
headline when fetched, so the stakeholder pasted the legacy listing text into
the working session on 2026-09-18 to supply requirements.

## Decisions

1. **Form on both pages.** `/careers/` has its own `InstallerNetworkForm`; the
   technician page keeps its form. Navigation, sitemap, and robots are
   unchanged. `buildAttribution("installer_network")` reads
   `window.location` and `document.title`, so leads carry `sourcePage`
   `/careers/` or `/careers/mobile-installation-technician/` with no payload
   change.
2. **Requirements published (stakeholder-supplied, 2026-09-18):**
   - Core: valid driver's license, personal vehicle for travel, ability to
     travel state to state, smartphone for post-installation data submission,
     passing a background check.
   - Skills and experience: vehicle installation, electrical, and mechanical
     understanding; 12 and 24 volt experience; panel removal; prior GPS and
     fleet equipment installation.
   - Working expectations: follow installation guidelines, submit installation
     data with photos, track equipment, confirm equipment works before leaving,
     work independently, keep paperwork organized, communicate with scheduling
     managers.
   - Age: a travel-related recommendation only, worded "We recommend being over
     the age of 21 because some travel arrangements may be subject to
     minimum-age requirements set by rental car companies and hotels", followed
     by "This is a travel-related recommendation, not an automated eligibility
     screen." No age or date-of-birth field, no filtering, and the wording
     never appears in metadata, headings, FAQ questions, schema, or the form.
     **Flagged for counsel or HR review.**
3. **Excluded regardless:** any pay or dollar figure (claims row 22), MECP or
   other certification (row 24), days, hours, shifts, weekends, travel
   percentage, "shop locations", "Job Type", "Application Question", and
   "Apply" or "hiring" phrasing.
4. **After-submission copy is conservative:** "collected for Installer Network
   consideration" plus the no-guarantee list. No review, contact, or timing
   promise. No update or withdraw method is stated because none is approved
   (docs/14 section 7 requires one; open item).
5. **Platform wording is generic and optional** on the page. The existing form
   still lists eleven platform names as optional checkboxes. That is form
   content outside this task; whether public brand names may stay is an open
   item (needs an approved experience claim and approved brand-name use).
6. **Hero phone button** is tracked as the recruitment journey with no
   `data-event`, because no approved recruitment call event exists. The
   commercial `cta_call_click` event is not reused.
7. **Schema:** `WebPage` plus `BreadcrumbList`, `Organization` by `@id`. No
   `JobPosting`, `FAQPage`, or location or platform schema.

## Consequences

- `docs/01` section 19 has not been edited. Recording these requirements there
  is left to the owner.
- Public business hours, if confirmed, belong in the footer or contact
  context, not on the careers hub.
- The five items still needing review: schedule and shifts, travel percentage,
  compensation, certifications, and a tools list.
