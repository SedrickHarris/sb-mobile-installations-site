# Decision 0007: Coverage hub commercial-first update

**Date:** September 19, 2026
**Status:** Approved in session
**Decided by:** Stakeholder (in the working session that planned the page)
**Affects:** `/coverage/`, `docs/01-business-source-of-truth.md` section 12.2, `docs/_claims-inventory.md` row 58

## Context

`/coverage/` carried operational wording ("scheduling ... reviewed before
installation", "will follow up to coordinate scheduling") that docs/01 section
8.3 lists as unconfirmed. The page was restructured as a commercial-first
service-context page with the quote form after the explanation and a quiet
Installer Network text link after the form.

## Decisions

1. **Hero media.** The hero uses a decorative background video with a static
   WebP poster fallback. Muted, autoplay, loop, inline, `preload="none"`,
   hidden under `prefers-reduced-motion` (the poster shows instead). No map,
   pin, place label, dashboard, or readable text in the media.
2. **Vehicle examples.** Work vans, service trucks, utility vehicles, and
   heavy-duty trucks are approved vehicle-context examples, always with:
   "Vehicle examples describe common project contexts. They do not mean every
   approved hardware category is installed in every vehicle type." The general
   categories remain fleet, commercial, and construction vehicles (docs/01
   section 12.1). No other vehicle types are added.
3. **Service naming.** The Fleet Rollout service is named `Fleet Rollout
   Services` everywhere, at `/services/fleet-rollouts/`. Coverage reads titles,
   descriptions, and routes from the approved service cards
   (`service-pages-content.ts`) rather than retyping them.
4. **Merged request-details section.** "Start With Your Installation Request"
   holds the four items (equipment, vehicle count, project locations,
   preferred timing) once. The separate "Commercial Project Details That Help
   Frame the Request" section is removed.
5. **Availability wording.** Where availability or qualification must be
   addressed, use: "Share your project details so SB Mobile Installations can
   determine whether the request fits the available service context." The
   earlier sentence "Project details and availability must be reviewed for each
   request." is not used. No wording may imply scheduling, dispatch,
   technician assignment, or acceptance.
6. **Installer Network link.** Text link after the form, route
   `INSTALLER_NETWORK_PATH`, `data-journey="recruitment"`, event
   `cta_installer_network_click` (the event the other Installer Network links
   already use). No new event.
7. **Hero trust items.** "Nationwide service reach" and "On-site installation
   model" are removed. "In business since 2011" stays approved (claims row 11)
   but a one-item trust row is not rendered, so the row is omitted.
8. **FAQ.** Five visible questions. No `FAQPage` JSON-LD on `/coverage/`;
   schema stays WebPage plus BreadcrumbList.

## Not decided here

Shared `CommercialInquiryForm` accessibility and analytics gaps (per-field
errors, inline success, failure events) are deliberately out of scope for this
change and unchanged.
