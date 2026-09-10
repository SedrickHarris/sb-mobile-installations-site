# Decision 0001: Canonical business telephone number

**Date:** September 10, 2026
**Status:** Approved
**Decided by:** Stakeholder
**Affects:** `00-project-overview.md`, `01-business-source-of-truth.md`

## Context

The current website displayed two telephone numbers. `01-business-source-of-truth.md`
recorded them as conflicting and blocked publication of either one, because name,
address, and phone consistency requires a single canonical value across the site,
structured data, business profiles, and directory citations.

## Decision

**623-388-7352 is the canonical business telephone number.**

623-338-7352 is rejected as a typographical error.

## Fact status change

| Number | Previous status | New status |
| --- | --- | --- |
| 623-388-7352 | Pending verification | Verified |
| 623-338-7352 | Conflicting information | Rejected |

## Consequences

- The canonical number may now be published in website copy, metadata, structured
  data, business profiles, directory citations, and recruiting listings.
- The rejected number must be corrected wherever it appears in current site content
  and third-party listings, as part of citation cleanup.
- Organization and LocalBusiness schema telephone properties may now be populated.
- Contact and conversion surfaces are unblocked with respect to telephone display.

## Notes

Other contact facts remain unverified, including all email addresses, the physical
address, and the customer-facing office. Those stay blocked from publication.
