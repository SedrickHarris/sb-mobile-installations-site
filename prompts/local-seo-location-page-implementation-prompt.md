# Local SEO/AEO Location Page Implementation Prompt

> Design skill routing: every build through this prompt must complete the Required Design Skill Pass per `docs/design/required-website-design-skills.md` (frontend-design-engineer + emil-kowalski-motion-design + impeccable-ui-polish + ux-ui-conversion-design + seo-aeo-llm-page-architecture). Location pages default to the Core Mode pass; primary location pages run Beyond-Elite per `routing/workflow-mode-map.md` § Required Design Skill Pass per Mode.

Implementation half (Prompt B) for individual city / location pages.

## When to Use

After `local-seo-location-page-research-prompt.md` has produced an approved plan.

## Routing

- Page type: Individual Location Page
- AI depth: Level 3 Core SEO/AEO

## Implementation Steps

1. Create `app/locations/<city>/page.tsx` with the approved section structure.
2. Hero uses `HeroSection` with `formSlot={<QuoteFormPlaceholder />}`.
3. Popular Services grid uses `ServiceCard` + `ServiceImagePlaceholder`. No empty image slots.
4. Generate `LocalBusiness` + `FAQPage` + `BreadcrumbList` JSON-LD from visible content.
5. **No `streetAddress`** in `LocalBusiness` schema for service-area-only businesses.
6. Confirm CTA classes use Tailwind built-in `text-white` on dark backgrounds.
7. Update `docs/site-os/implementation-log.md`.

## Customer-Facing Copy Rules

- No em dashes in customer-facing strings.
- No double hyphens.
- No invented neighborhoods, addresses, or fake-local claims.
- No fake response-time / availability claims.

## CTA Visibility Check

```
grep -o "Request a Free Quote\|Get My Cleaning Estimate\|Call Now" out/locations/<city>.html | sort | uniq -c
```

## Em Dash Check

```
grep -c "—" out/locations/<city>.html
```

Must equal **0**.

## Anti-Doorway Check

Compare the new city page against existing sibling location pages. At least one paragraph and one FAQ must be meaningfully unique to this city (not city-name-swap). If the page reads like a city-name-swap of a sibling, return FAIL and rewrite.

## Validation Commands

```
npm run lint
npm run type-check
npm run build
```

All three must pass clean.

## Pass/Fail Gate

Run `docs/pass-fail-page-quality-gates.md`. Return PASS only if every required item checks.

## Stop Conditions

- No approved plan → stop, request the plan.
- City not in verified service area → stop, surface to owner.

## Do Not

- Do not commit until review.
- Do not deploy.
- Do not invent location facts (population numbers, named neighborhoods that weren't owner-confirmed, partnerships).

---

Site OS Master — Local SEO/AEO Location Page Implementation Prompt v1.0
