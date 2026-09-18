# Sprint 1 Source-of-Truth Claims Inventory (internal, not customer-facing)

**Purpose:** Gate every claim this redesign's copy depends on against
`docs/01-business-source-of-truth.md` before any customer-facing copy is
written. Anything marked "needs stakeholder confirmation" is OMITTED from all
published copy, metadata, forms, FAQs, and schema in Sprint 1. Not covered by
the em-dash rule or CLAUDE.md section 3 exemption for internal docs — this
file is internal only.

`claimOwner`: SB Mobile Installations stakeholder (direct-confirmation channel
used throughout `01-business-source-of-truth.md`, September 10, 2026 round).
`lastVerifiedDate`: 2026-09-10 for every "confirmed" row below, taken from the
source document's verification log (section 29). Re-verify on the next
stakeholder touchpoint or before any claim is extended beyond its current
scope.

| # | Claim | Status | Source | claimOwner | lastVerifiedDate | Publication rule |
|---|---|---|---|---|---|---|
| 1 | GPS tracking installation (current service) | Confirmed | Section 9.1, 25, `business.ts` | Stakeholder | 2026-09-10 | Publish |
| 2 | ELD installation (current service) | Confirmed | Section 9.1, 25 | Stakeholder | 2026-09-10 | Publish |
| 3 | AOBRD installation (current service) | Confirmed | Section 9.1, 25 | Stakeholder | 2026-09-10 | Publish **as a current service**, not legacy-only. Section 9.1 lists AOBRD as a current equipment category alongside ELD, with no legacy/replacement qualifier. Do not editorialize it as "legacy" without a further confirmation — the source doc does not say that. |
| 4 | TPMS installation (current service) | Confirmed | Section 9.1, 25 | Stakeholder | 2026-09-10 | Publish |
| 5 | Fleet dashcam / windshield-mounted video recorder installation | Confirmed | Section 9.1, 25, `business.ts` | Stakeholder | 2026-09-10 | Publish. Do not claim specific "forward-facing" or "driver-facing" variant names unless generic — dashcam and windshield-mounted video recorder are the confirmed terms. |
| 6 | Fleet management equipment installation (general umbrella) | Confirmed | Section 9.1, `business.ts` | Stakeholder | 2026-09-10 | Publish as "fleet management equipment installation" or "fleet technology hardware installation" — do not narrow into an invented sub-category not otherwise confirmed here. |
| 7 | Asset tracking (as a distinct named service) | **Needs confirmation** | Not named anywhere in section 9.1, 10, or 25 | — | — | OMIT. "Fleet management equipment" is the closest confirmed umbrella; do not add "asset tracking" as its own line item, service page, or schema `Service` entry. |
| 8 | Sensors (as a distinct named service/category) | **Needs confirmation** | Not named in section 9.1 or 25 | — | — | OMIT as a standalone claim. May not be listed as connected hardware unless it is a generic restatement of confirmed categories (GPS/ELD/AOBRD/TPMS/dashcam/fleet-management equipment). |
| 9 | Construction-equipment installation (as its own **service**) | Partially confirmed, scope limited | Section 12.1: construction vehicles are a confirmed **vehicle** category. No confirmation that "construction equipment" (non-vehicle heavy equipment) is separately serviced. | Stakeholder (vehicle scope only) | 2026-09-10 | Publish "construction vehicles" as a supported vehicle category wherever vehicle scope is listed (fleet, commercial, construction vehicles). Do NOT publish a distinct "construction equipment installation" service or imply off-road/heavy-equipment (non-vehicle) installation — that is Sprint 2 territory per the plan and not confirmed here regardless. |
| 10 | Photo-documentation practice, automatic delivery to every customer | Confirmed | Section 17.1, 25 | Stakeholder | 2026-09-10 | Publish using the approved wording: "Every installation is photo documented, and you'll receive that documentation automatically." Do not add timeframe, file format, delivery channel, or retention period. |
| 11 | Founding year / years-in-business claim | Confirmed | Section 4, 25 | Stakeholder | 2026-09-18 | Publish only as "in business since 2011" or approved variants (e.g. "serving fleets since 2011"). Never "decades of experience." Supersedes the earlier "15 years" duration wording - do not use both forms together. |
| 12 | Contractor-network / "contractor network" claims | Confirmed (classification only) | Section 7.2, 12.1 | Stakeholder | 2026-09-10 | Publish only "technicians are engaged as independent contractors, not employees" in general terms. Do NOT imply guaranteed work/hours/income/acceptance, contract terms, compensation, schedule, or benefits — all separately unconfirmed (section 7.2 scope limits, section 19). |
| 13 | Vendor/platform language (Lytx, Samsara, Geotab, Verizon Connect, etc.) | Confirmed, experience-only | Section 14, 9.1 | Stakeholder | 2026-09-10 | Publish only in approved framing ("We work with the platforms fleets already run on, including...", "installation experience with [platform] equipment"). Never as a structured-data taxonomy value (`serviceType`, `brand`, `provider`, `makesOffer`). Never imply partnership, authorization, certification, reseller, or dealer status. No platform logos. |
| 14 | Nationwide service reach | Confirmed | Section 8.2, 25 | Stakeholder | 2026-09-10 | Publish as reach only ("Nationwide mobile installation service, delivered at the customer's location"). Never imply same-day, universal city coverage, or guaranteed technician presence in a named market. No `Service.areaServed` state enumeration until Sprint 3+, per the plan. |
| 15 | Project capacity range ("one vehicle or an entire fleet") | Confirmed | Section 11.1, 25 | Stakeholder | 2026-09-10 | Publish exactly this framing. Do not derive turnaround time, simultaneous multi-market volume, or acceptance guarantees from it. Keep as a separate claim from nationwide reach (never conflate). |
| 16 | Vehicle scope: fleet, commercial, construction vehicles | Confirmed | Section 12.1, 25 | Stakeholder | 2026-09-10 | Publish exactly these three categories. No passenger vehicles. No trailers/off-road/municipal/transit without further confirmation. |
| 17 | Business hours (Mon-Fri, 8:00 AM - 6:00 PM) | Confirmed, timezone unconfirmed | Section 5.4 | Stakeholder | 2026-09-10 | Publish hours without a timezone. Never imply same-day/after-hours/emergency/weekend availability. |
| 18 | Canonical phone number 623-388-7352 | Confirmed | Section 5.1, `decisions/0001` | Stakeholder | 2026-09-10 | Publish. 623-338-7352 is rejected and must never appear. |
| 19 | No published address / mobile-only model | Confirmed | Section 5.3 | Stakeholder | 2026-09-10 | Never publish a street address, map, or `LocalBusiness` schema requiring one. |
| 20 | Certifications, licenses, insurance, reviews, ratings | Confirmed absence (client decision, not a gap) | Section 16.1 | Stakeholder | 2026-09-10 | Never publish. No trust bars, badge rows, `AggregateRating`, `Review`, or "coming soon" placeholders. |
| 21 | Pricing, warranties, guarantees, response times | Unconfirmed across the board | Section 20 | — | — | OMIT entirely from all Sprint 1 copy, forms, and FAQs. |
| 22 | Compensation ($1,600/week or any figure) | Explicitly excluded from the Sept 10 confirmation round | Section 19, 29 | — | — | OMIT from the technician role page and Installer Network form. Do not restate the legacy figure. |
| 23 | "JobPosting" schema / active job openings | None exist | Plan section 5, CLAUDE.md section 5 | — | — | Never emit `JobPosting`. Careers content frames the Installer Network as an opt-in, no-guarantee pathway, never "Apply." |
| 24 | MECP or other technician certification | Existing recruiting preference only, not a company certification | Section 16 | — | — | OMIT from all customer-facing and careers copy (falls under section 16.1's blanket certification ban). |
| 25 | Public company name ("SB Mobile Installations", no "LLC") | Confirmed, hard rule | Section 4.2 | Stakeholder | 2026-09-10 | Enforce everywhere, including all new Sprint 1 pages, forms, schema, and metadata. |
| 26 | Who We Serve vehicle list: work vans, delivery vehicles, service trucks, heavy-duty trucks, utility vehicles, trailers, construction equipment; on-site work means no separate installation facility | Confirmed by stakeholder in session, 2026-09-18 | Homepage `whoWeServe` in `homepage-content.ts` | Stakeholder | 2026-09-18 | Publish as written. Written record of approval should be added to `docs/01` when convenient. |
| 27 | "Nationwide" applied to the Installer Network and recruitment wording (three separate reaches: verified nationwide service reach, section 8.2; nationwide installer-network reach, pending; active job availability by market, none) | Working assumption, pending written stakeholder approval | Homepage `recruitingBanner` in `homepage-content.ts` | Stakeholder | Not yet approved | Heading describes the network, never nationwide openings. CLAUDE.md section 4 prohibits nationwide openings when only one market is active. Do not extend to job postings or schema |
| 28 | Homepage What We Install card copy: "vocational" equipment, "professional installation", and AOBRD described as supporting "legacy fleet-recording systems when requested by an approved fleet or equipment provider" | Supplied as approved by the client in session, 2026-09-18. Not yet in docs/01 | Homepage `whatWeInstall.cards` in `homepage-content.ts` | Stakeholder | Not yet recorded | "Vocational" and "professional" appear nowhere in docs/01. The AOBRD "legacy" qualifier differs from item 3, which says publish AOBRD as a current service and not editorialize it as legacy. The visible provider and regulatory clarification stays. No savings, accident-reduction, legal, or compliance claims |

## Summary for Sprint 1 build

**Confirmed and safe to publish as `business.serviceTypes`-driven content:**
GPS tracking installation, ELD installation, AOBRD installation (current
service, not editorialized as legacy), TPMS installation, fleet dashcam /
windshield-mounted video recorder installation, fleet management equipment
installation. This matches the existing `src/data/site/business.ts`
`serviceTypes` array exactly — no addition or removal needed for Sprint 1.

**Omitted from all Sprint 1 copy, metadata, FAQs, forms, and schema:**
asset tracking as a distinct service line, sensors as a distinct service
line, construction equipment (non-vehicle heavy equipment) as an installation
service, pricing/warranty/response-time language, compensation figures,
MECP or any certification claim, any platform name used as a schema taxonomy
value.

**Four Sprint 1 service pages, scoped to confirmed categories only:**
- `/services/fleet-telematics-installation/` — umbrella covering GPS tracking,
  ELD/AOBRD, fleet management equipment, dashcam/video (all confirmed).
- `/services/gps-tracking-installation/` — GPS tracking installation only.
- `/services/eld-installation/` — ELD installation, with AOBRD mentioned only
  in the confirmed sense (a current category alongside ELD, not "legacy").
- `/services/dashcam-camera-installation/` — dashcam / windshield-mounted
  video recorder installation only.

No fifth page for TPMS or "asset tracking" is being created in Sprint 1 (not
in the plan's route table); TPMS remains folded into the telematics/fleet
management umbrella copy where confirmed.
