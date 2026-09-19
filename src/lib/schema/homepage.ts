import { business } from "@/data/site/business";
import { homepageContent } from "@/data/site/homepage-content";
import { organizationNode, organizationRef } from "@/lib/schema/organization";

/**
 * Structured data for the homepage.
 *
 * Five types are emitted: Organization, WebSite, Service, WebPage, and
 * FAQPage. Organization is the shared entity from organization.ts; every
 * other page references it by @id rather than re-declaring it. WebSite is
 * emitted exactly once, here on the homepage only. See
 * 13-schema-markup-plan.md section 58a.
 *
 * The Service node carries one umbrella serviceType that matches the
 * homepage's broad commercial-overview purpose, not a list of equipment
 * categories, and no third-party platform names. It carries no areaServed,
 * not even Country "United States": nationwide reach stays visible copy and
 * the /coverage/ page until verified structured coverage data exists. See
 * decision 0005 and 13-schema-markup-plan.md.
 *
 * Deliberately absent, and not to be added:
 *   LocalBusiness   no physical address exists to satisfy required fields
 *   AggregateRating no reviews exist
 *   Review          no reviews exist
 *   JobPosting      no active job openings exist
 *   address / logo  no approved value
 *
 * See 01-business-source-of-truth.md sections 5.3 and 16.1, and
 * 13-schema-markup-plan.md.
 */

const WEBPAGE_ID = `${business.url}/#webpage`;
const WEBSITE_ID = `${business.url}/#website`;

/** One umbrella label for the homepage Service. Not a category list. */
const HOMEPAGE_SERVICE_TYPE = "Mobile fleet technology installation services";

function website() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: business.url,
    name: business.name,
    publisher: organizationRef(),
  };
}

function service() {
  return {
    "@type": "Service",
    name: business.serviceName,
    serviceType: HOMEPAGE_SERVICE_TYPE,
    provider: organizationRef(),
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
    isPartOf: { "@id": WEBSITE_ID },
    about: organizationRef(),
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

/** One graph keeps the five types cross-referenced by @id. */
export function homepageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationNode(), website(), service(), webPage(), faqPage()],
  };
}
