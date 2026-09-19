import type { Metadata } from "next";
import Link from "next/link";

import { ContentSection } from "@/components/content/ContentSection";
import { DecisionGuide } from "@/components/content/DecisionGuide";
import { FaqGroup } from "@/components/content/FaqGroup";
import { ServiceNavGrid } from "@/components/content/ServiceNavGrid";
import { ServicesHero } from "@/components/content/ServicesHero";
import { SplitFeature } from "@/components/content/SplitFeature";
import { CommercialInquiryForm } from "@/components/forms/CommercialInquiryForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CardGrid } from "@/components/layout/CardGrid";
import { PhoneButton } from "@/components/layout/PhoneButton";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/schema/JsonLd";
import { Card } from "@/components/ui/Card";
import { utilityBar } from "@/data/navigation/site-navigation";
import { servicesHubContent } from "@/data/site/services-content";
import { servicesHubImages } from "@/data/site/services-hub-images";
import { servicesHubPageContent as hub } from "@/data/site/services-hub-content";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import {
  servicePageSchema,
  UMBRELLA_SERVICE_TYPE,
} from "@/lib/schema/service-page";

const PATHNAME = "/services/";
const BREADCRUMBS = [{ label: "Home", href: "/" }, { label: "Services" }];

export const metadata: Metadata = buildPageMetadata({
  title: servicesHubContent.h1,
  description: servicesHubContent.metaDescription,
  pathname: PATHNAME,
});

/**
 * Services hub: commercial decision page and topical hub for the five
 * service pages. Section order follows the approved plan. Schema is
 * WebPage + one umbrella Service + BreadcrumbList; FAQPage is not emitted.
 */
export default function ServicesPage() {
  return (
    <>
      <JsonLd
        schema={servicePageSchema({
          pathname: PATHNAME,
          content: servicesHubContent,
          serviceTypes: UMBRELLA_SERVICE_TYPE,
          breadcrumbs: BREADCRUMBS,
        })}
      />
      <Breadcrumbs items={BREADCRUMBS} />

      <ServicesHero
        id="services-hub"
        h1={servicesHubContent.h1}
        intro={servicesHubContent.intro}
        primaryCta={hub.hero.primaryCta}
        qualifier={hub.hero.qualifier}
        phone={{
          href: utilityBar.phoneHref,
          label: `${hub.hero.callLabel} ${utilityBar.phoneLabel}`,
        }}
        image={servicesHubImages.hero}
      />

      <ContentSection id="services-answer" content={hub.answer} />

      <ServiceNavGrid
        id="services-grid"
        h2={hub.services.h2}
        intro={hub.services.intro}
        cards={hub.services.cards}
      />

      <DecisionGuide
        id="services-decision"
        h2={hub.decisionGuide.h2}
        intro={hub.decisionGuide.intro}
        rows={hub.decisionGuide.rows}
      />

      <SplitFeature
        id="services-capability"
        content={hub.capability}
        slot={servicesHubImages.capability}
        mediaSide="left"
      />

      <SplitFeature
        id="services-nationwide"
        tone="dark"
        content={hub.nationwide}
        slot={servicesHubImages.nationwide}
      />

      <SplitFeature id="services-intake" tone="subtle" content={hub.intake} />

      <FaqGroup
        id="services-faq"
        accessibleHeading={hub.faqHeading}
        content={{ h2: hub.faqHeading, items: servicesHubContent.faq ?? [] }}
      />

      <Section tone="default" width="site" labelledBy="services-related-heading">
        <h2
          id="services-related-heading"
          className="text-[length:var(--text-h3)] font-bold text-ink"
        >
          {hub.related.h2}
        </h2>
        <div className="mt-6">
          <CardGrid columns={2}>
            {hub.related.cards.map((card) => (
              <Card
                key={card.href}
                as="div"
                hover
                padding="compact"
                className="relative flex flex-col"
              >
                <h3 className="text-[length:var(--text-h4)] font-bold text-ink">
                  {card.title}
                </h3>
                <p className="mt-2 text-[length:var(--text-body)] text-ink-muted">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4 after:absolute after:inset-0 after:content-['']"
                >
                  {card.linkLabel}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </Card>
            ))}
          </CardGrid>
        </div>
      </Section>

      <div id="request-quote" className="scroll-mt-24">
        <Section
          tone="subtle"
          density="spacious"
          labelledBy="services-quote-heading"
        >
          <h2
            id="services-quote-heading"
            className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
          >
            {hub.quote.h2}
          </h2>
          <p className="mt-4 text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink-muted">
            {hub.quote.intro}
          </p>
          <div className="mt-8">
            <CommercialInquiryForm />
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <p className="text-[length:var(--text-body)] text-ink-muted">
              {hub.quote.phoneLead}
            </p>
            <PhoneButton
              href={utilityBar.phoneHref}
              label={utilityBar.phoneLabel}
              location="services-quote"
              className="border-ink bg-surface text-ink hover:bg-surface-subtle"
            />
          </div>
        </Section>
      </div>
    </>
  );
}
