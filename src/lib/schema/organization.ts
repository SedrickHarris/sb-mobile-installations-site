import { business } from "@/data/site/business";

/**
 * Shared Organization entity. Every page's @graph references this one @id
 * rather than re-declaring the entity.
 *
 * Fact-only and minimal: name, url, telephone, and the corporate office
 * address (approved 2026-09-19, 01-business-source-of-truth.md section 33.4).
 * Nothing else (logo, sameAs, areaServed, founding date, email, legalName)
 * until that specific fact is confirmed and approved. See
 * docs/_claims-inventory.md and 13-schema-markup-plan.md section 58a.
 *
 * The address is the corporate office, not a service market, so it never
 * implies a walk-in facility or a single service area. It is read from
 * `business.address`, and no `areaServed` accompanies it.
 */
export const ORGANIZATION_ID = `${business.url}/#organization`;

export function organizationNode() {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: business.name,
    url: business.url,
    telephone: business.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.streetAddress,
      addressLocality: business.address.addressLocality,
      addressRegion: business.address.addressRegion,
      postalCode: business.address.postalCode,
      addressCountry: business.address.addressCountry,
    },
  };
}

/** A bare reference to the shared Organization entity, for other pages' graphs. */
export function organizationRef() {
  return { "@id": ORGANIZATION_ID };
}
