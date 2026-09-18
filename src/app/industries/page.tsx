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
import { industriesHubContent } from "@/data/site/industries-content";
import { industriesHubPageContent as hub } from "@/data/site/industries-hub-content";
import { industriesHubImages } from "@/data/site/industries-hub-images";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { webPageSchema } from "@/lib/schema/webpage";

const PATHNAME = "/industries/";
const BREADCRUMBS = [{ label: "Home", href: "/" }, { label: "Industries" }];

export const metadata: Metadata = buildPageMetadata({
  title: hub.metaTitle,
  description: industriesHubContent.metaDescription,
  pathname: PATHNAME,
});

/**
 * Industries hub: an industry-specific decision page that routes a visitor to
 * an industry page, a service page, or a quote request. Schema is WebPage +
 * BreadcrumbList only (no Service, no FAQPage). No recruiting banner: the
 * Installer Network stays in the header and footer.
 */
export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        schema={webPageSchema({
          pathname: PATHNAME,
          name: industriesHubContent.h1,
          description: industriesHubContent.metaDescription,
          breadcrumbs: BREADCRUMBS,
        })}
      />
      <Breadcrumbs items={BREADCRUMBS} />

      <ServicesHero
        id="industries-hub"
        h1={industriesHubContent.h1}
        intro={industriesHubContent.intro}
        primaryCta={hub.hero.primaryCta}
        qualifier={hub.hero.qualifier}
        phone={{
          href: utilityBar.phoneHref,
          label: `${hub.hero.callLabel} ${utilityBar.phoneLabel}`,
        }}
        secondaryLink={hub.hero.secondaryLink}
        scopeItems={hub.hero.scopeItems}
        image={industriesHubImages.hero}
      />

      <ContentSection id="industries-answer" content={hub.answer} />

      <ServiceNavGrid
        id="industries-grid"
        h2={hub.industries.h2}
        intro={hub.industries.intro}
        cards={hub.industries.cards}
      />

      <DecisionGuide
        id="industries-decision"
        h2={hub.decisionGuide.h2}
        intro={hub.decisionGuide.intro}
        rows={hub.decisionGuide.rows}
      />

      <SplitFeature
        id="industries-capability"
        content={hub.capability}
        slot={industriesHubImages.capability}
        mediaSide="left"
      />

      <SplitFeature id="industries-intake" tone="subtle" content={hub.intake} />

      <SplitFeature
        id="industries-nationwide"
        tone="dark"
        content={hub.nationwide}
        slot={industriesHubImages.nationwide}
      />

      <Section tone="default" width="site" labelledBy="industries-services-heading">
        <h2
          id="industries-services-heading"
          className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
        >
          {hub.services.h2}
        </h2>
        <div className="mt-8">
          <CardGrid columns={3}>
            {hub.services.cards.map((card) => (
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
                  className="mt-auto inline-flex min-h-11 items-center gap-2 pt-4 font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4 after:absolute after:inset-0 after:content-['']"
                >
                  {card.linkLabel}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </Card>
            ))}
          </CardGrid>
        </div>
      </Section>

      <FaqGroup
        id="industries-faq"
        accessibleHeading={hub.faqHeading}
        content={{ h2: hub.faqHeading, items: industriesHubContent.faq ?? [] }}
      />

      <div id="request-quote" className="scroll-mt-24">
        <Section
          tone="default"
          density="spacious"
          labelledBy="industries-quote-heading"
        >
          <h2
            id="industries-quote-heading"
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
              location="industries-quote"
              className="border-ink bg-surface text-ink hover:bg-surface-subtle"
            />
          </div>
        </Section>
      </div>
    </>
  );
}
