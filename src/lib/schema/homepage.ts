import { business } from "@/data/site/business";
import { homepageContent } from "@/data/site/homepage-content";

/**
 * Structured data for the homepage.
 *
 * Only four types are emitted: Organization, Service, WebPage, and FAQPage.
 *
 * Deliberately absent, and not to be added:
 *   LocalBusiness   no physical address exists to satisfy required fields
 *   AggregateRating no reviews exist
 *   Review          no reviews exist
 *   address / logo  no approved value
 *
 * See 01-business-source-of-truth.md sections 5.3 and 16.1, and
 * 13-schema-markup-plan.md.
 */

const ORGANIZATION_ID = `${business.url}/#organization`;
const WEBPAGE_ID = `${business.url}/#webpage`;

function organization() {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: business.legalName,
    url: business.url,
    telephone: business.telephone,
  };
}

function service() {
  return {
    "@type": "Service",
    name: business.serviceType,
    serviceType: business.serviceType,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: {
      "@type": "Country",
      name: business.areaServed,
    },
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...business.hours.days],
      opens: business.hours.opens,
      closes: business.hours.closes,
    },
  };
}

function webPage() {
  return {
    "@type": "WebPage",
    "@id": WEBPAGE_ID,
    url: `${business.url}/`,
    name: homepageContent.hero.h1,
    description: homepageContent.directAnswer.body,
    isPartOf: { "@id": ORGANIZATION_ID },
  };
}

/**
 * FAQPage answers are taken from the same content object the page renders,
 * so the schema text is identical to the visible text by construction.
 */
function faqPage() {
  return {
    "@type": "FAQPage",
    "@id": `${business.url}/#faq`,
    mainEntity: homepageContent.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/** One graph keeps the four types cross-referenced by @id. */
export function homepageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [organization(), service(), webPage(), faqPage()],
  };
}
