import { business } from "@/data/site/business";
import { homepageContent } from "@/data/site/homepage-content";
import { organizationNode, organizationRef } from "@/lib/schema/organization";
import { UMBRELLA_SERVICE_TYPE } from "@/lib/schema/service-page";

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
 * the /coverage/ page until verified structured coverage data exists. It
 * also carries no hoursAvailable. See decision 0005 and
 * 13-schema-markup-plan.md.
 *
 * Deliberately absent, and not to be added:
 *   LocalBusiness   not approved; the corporate office is not a service or
 *                   walk-in location (01-business-source-of-truth.md 5.3)
 *   AggregateRating no reviews exist
 *   Review          no reviews exist
 *   JobPosting      the homepage is never an opening page; JobPosting belongs
 *                   only on an individual active-opening page
 *   logo            no approved value
 *
 * The Organization node carries the approved corporate office address (see
 * organization.ts). It is not a service market, so no areaServed accompanies
 * it. See 01-business-source-of-truth.md sections 5.3, 16.1, and 33.4, and
 * 13-schema-markup-plan.md.
 */

const WEBPAGE_ID = `${business.url}/#webpage`;
const WEBSITE_ID = `${business.url}/#website`;

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
    serviceType: UMBRELLA_SERVICE_TYPE,
    provider: organizationRef(),
    /*
      No hoursAvailable. The confirmed hours have no timezone, and a service
      schedule is not a schema purpose anyone approved. Any published hours
      belong in visible contact and footer content until the owner confirms
      the exact hours, the timezone, and what the hours represent.
    */
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
