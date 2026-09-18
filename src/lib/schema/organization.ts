import { business } from "@/data/site/business";

/**
 * Shared Organization entity. Every page's @graph references this one @id
 * rather than re-declaring the entity.
 *
 * Fact-only and minimal: name, url, telephone. Nothing else (logo, sameAs,
 * address, areaServed, founding date, email) until that specific fact is
 * confirmed and approved. See docs/_claims-inventory.md and
 * 13-schema-markup-plan.md section 58a.
 */
export const ORGANIZATION_ID = `${business.url}/#organization`;

export function organizationNode() {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: business.name,
    url: business.url,
    telephone: business.telephone,
  };
}

/** A bare reference to the shared Organization entity, for other pages' graphs. */
export function organizationRef() {
  return { "@id": ORGANIZATION_ID };
}
