# Decision 0002: Services hub CTA label and schema type

**Date:** September 18, 2026
**Status:** Approved in session
**Decided by:** Stakeholder (in the working session that planned the hub)
**Affects:** `09-content-strategy.md` section 18, `13-schema-markup-plan.md` line 238, `/services/`

## Context

The services hub rebuild brief differed from two project documents:

- `09-content-strategy.md` section 18 sets the hub primary CTA to "Discuss an
  Installation Project". The brief specifies "Request an Installation Quote".
- `13-schema-markup-plan.md` line 238 lists the hub as `CollectionPage` plus
  `BreadcrumbList`. The brief specifies `WebPage` plus `Service` plus
  `BreadcrumbList`, matching the existing `servicePageSchema` output.

## Decision

1. The `/services/` primary CTA label is **Request an Installation Quote**.
2. `/services/` emits `WebPage`, one umbrella `Service` named after the H1,
   and `BreadcrumbList`, with `Organization` by `@id`. No per-card `Service`
   nodes, no state lists, no platform names, no prices, no ratings.
   `FAQPage` is not emitted on the hub.
3. The primary commercial CTA color is unchanged:
   `--color-accent-blue-strong` (#00688A) with white text. No page-specific
   color exception exists.

## Consequences

- Other commercial CTAs still use their current labels. Aligning them to
  "Request an Installation Quote" is a separate, later decision.
- No response-time, pricing, or availability language is implied by the label.
  The page states none.
- `13-schema-markup-plan.md` line 238 should be updated to match when that
  document is next revised.

## Notes

Trailers stay out of the hub vehicle list until `_claims-inventory.md` rows 16
and 42 are reconciled in writing. "Service vans" is not used; "work vans" is.
