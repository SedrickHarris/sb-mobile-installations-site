# Decision 0005: Service page template, work wording, and service schema

**Date:** September 18, 2026
**Status:** Approved in session
**Decided by:** Stakeholder (in the working session that planned the pages)
**Affects:** `/services/*` (five pages), `/services/` hub JSON-LD,
`13-schema-markup-plan.md`, `docs/01-business-source-of-truth.md` (not edited)

## Context

The five service pages were thin shells (H1, intro, paragraphs, a form, two
FAQs). They now render through one `ServicePageTemplate` with distinct
per-service copy. Three points needed a decision.

## Decisions

1. **Physical-work wording.** "Mounting, connection, and routing" is
   stakeholder-supplied wording, recorded here on 2026-09-18. No earlier source
   was found in docs/01 or `_claims-inventory.md`. It is used in the scope
   section of all five pages and on the services hub. "Setup", activation,
   calibration, configuration, testing, validation, integration, verification,
   and certification are not confirmed and are not used.
2. **Heading.** The brief's "Installation Documentation and Work Standards" is
   rendered as "Installation Documentation". docs/01 section 21 says no formal
   installation standard is approved. The photo-documentation sentence is the
   exact approved text: "Every installation is photo documented, and you'll
   receive that documentation automatically."
3. **No `areaServed` in service structured data.** Not even Country "United
   States". Nationwide reach stays visible copy and the `/coverage/` page until
   verified coverage data supports structured geography. This changes the
   shared `servicePageSchema` helper, so the `/services/` hub JSON-LD also
   loses `areaServed`. This supersedes the `areaServed` behaviour left in place
   by decision 0002.
4. **`serviceType` mapping**, one page-accurate value per page, never an
   umbrella list:

   | Page | `serviceType` |
   | --- | --- |
   | Fleet Telematics | Fleet telematics installation |
   | GPS Tracking | GPS tracking installation |
   | ELD | ELD installation |
   | Dashcam & Camera | Fleet dashcam and video recorder installation |
   | Fleet Rollouts | omitted |

   Fleet Rollouts is a coordination and capacity page. No approved exact
   service-type label exists, and "Fleet management equipment installation"
   would overstate it, so the key is omitted. The owner may supply an approved
   label later. The services hub keeps its own six-item list because it is the
   umbrella page for all six confirmed categories.
5. **Vehicle context** uses confirmed examples only (work vans, service trucks,
   utility vehicles, heavy-duty trucks), shown separately with a line stating
   the examples do not mean every hardware category is installed in every
   vehicle type. No trailers (claims rows 16 and 42).
6. **Installer Network handoff** is one text link after the quote form, with the
   recruitment journey. No banner, no form, no hiring language on these
   commercial pages.

## Consequences

- The homepage `Service` node previously emitted `areaServed`, the six-item
  category list, and `hoursAvailable`. Follow-up commits removed `areaServed`
  and `hoursAvailable` and replaced the list with one umbrella `serviceType`,
  "Mobile fleet technology installation services", so the whole site follows
  the same rule. The services hub `Service` likewise carries that single
  umbrella value instead of its six-item list. Visible nationwide copy is
  unchanged.
- `hoursAvailable` was removed because the confirmed hours have no timezone and
  no approved schema purpose. To publish hours in structured data later, the
  owner must confirm the exact hours, the timezone, what the hours represent
  (office, phone, installation, dispatch, or service availability), and that
  the same statement is visible to users.
- Point 4 above ("serviceType mapping") applies to the five individual service
  pages. The homepage and the hub use the single umbrella value.
- `/faq/` now includes the Fleet Rollouts FAQs, which were missing, and the new
  distinct per-page FAQs.
- The old page `body` paragraphs no longer render. The platform-name list, the
  hours sentence, and "in business since 2011" are therefore no longer on the
  service pages (hours remain in the form phone line).
- `docs/01` and `_claims-inventory.md` have not been edited; recording the
  work wording and vehicle examples there is left to the owner.
