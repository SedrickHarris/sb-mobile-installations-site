import type { Metadata } from "next";
import Link from "next/link";

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
        backgroundVideo={{
          src: "/images/industries/industries-hub-page/industries-hero/sb-mobile-installations-industries-hub-commercial-fleet-vehicles.mp4",
          poster:
            "/images/industries/industries-hub-page/industries-hero/sb-mobile-installations-industries-hub-commercial-fleet-vehicles.webp",
        }}
      />

      <SplitFeature
        id="industries-answer"
        eyebrow="INDUSTRY-SPECIFIC FLEET SUPPORT"
        content={hub.answer}
        slot={industriesHubImages.answer}
        mediaSide="left"
        align="top"
        mediaFirstOnMobile
      />

      <ServiceNavGrid
        id="industries-grid"
        eyebrow={hub.industries.eyebrow}
        h2={hub.industries.h2}
        intro={hub.industries.intro}
        cards={hub.industries.cards}
      />

      <DecisionGuide
        id="industries-decision"
        eyebrow={hub.decisionGuide.eyebrow}
        note={hub.decisionGuide.note}
        h2={hub.decisionGuide.h2}
        intro={hub.decisionGuide.intro}
        rows={hub.decisionGuide.rows}
      />

      <SplitFeature
        id="industries-capability"
        eyebrow="INSTALLATION PLANNING"
        content={hub.capability}
        slot={industriesHubImages.capability}
        mediaSide="left"
        align="top"
        mediaFirstOnMobile
      />

      <SplitFeature
        id="industries-intake"
        tone="subtle"
        eyebrow="INSTALLATION PLANNING DETAILS"
        content={hub.intake}
        slot={industriesHubImages.intake}
        mediaSide="left"
        align="top"
        mediaFirstOnMobile
      />

      <SplitFeature
        id="industries-nationwide"
        tone="dark"
        eyebrow="NATIONWIDE MOBILE INSTALLATION"
        content={hub.nationwide}
        slot={industriesHubImages.nationwide}
      />

      <Section tone="default" width="site" labelledBy="industries-services-heading">
        {hub.services.eyebrow ? (
          <p className="mb-3 text-[length:var(--text-label)] font-semibold tracking-wide text-[var(--color-brand-red)] uppercase">
            {hub.services.eyebrow}
          </p>
        ) : null}
        <h2
          id="industries-services-heading"
          className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
        >
          {hub.services.h2}
        </h2>
        {hub.services.intro?.map((paragraph) => (
          <p
            key={paragraph}
            className="mt-4 max-w-[720px] text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink-muted"
          >
            {paragraph}
          </p>
        ))}
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
        <section
          data-tone="dark"
          aria-labelledby="industries-quote-heading"
          className="relative isolate overflow-hidden bg-[var(--color-surface-dark)] px-5 py-16 text-[var(--color-text-on-dark)] md:px-6 md:py-24"
        >
          {/* Decorative background photo under a 55% black overlay. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/industries/industries-hub-page/sb-mobile-installations-industries-hub-final-cta-commercial-fleet-yard.webp"
            alt=""
            aria-hidden="true"
            width={3344}
            height={1882}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-[10%_50%]"
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/55" />
          <div className="mx-auto max-w-[1280px]">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-start lg:gap-14">
              <div className="max-w-[62ch]">
                <p className="mb-3 text-[length:var(--text-label)] font-semibold tracking-wide text-[var(--color-text-on-dark)]/80 uppercase">
                  {hub.quote.eyebrow}
                </p>
                <h2
                  id="industries-quote-heading"
                  className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-[var(--color-text-on-dark)]"
                >
                  {hub.quote.h2}
                </h2>
                {hub.quote.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 text-[length:var(--text-body)] leading-relaxed text-pretty text-[var(--color-text-on-dark)]/90"
                  >
                    {paragraph}
                  </p>
                ))}
                <h3 className="mt-6 text-[length:var(--text-body)] font-bold text-[var(--color-text-on-dark)]">
                  {hub.quote.listHeading}
                </h3>
                <ul className="mt-2 flex list-none flex-col gap-2 p-0 text-[length:var(--text-body)] text-[var(--color-text-on-dark)]/90">
                  {hub.quote.list.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-[0.15rem] shrink-0 font-bold">
                        &bull;
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-[length:var(--text-body)] leading-relaxed text-pretty text-[var(--color-text-on-dark)]/90">
                  {hub.quote.reassurance}
                </p>
              </div>

              <div>
                <div
                  data-tone="light"
                  className="rounded-lg border border-border bg-surface p-6 text-ink md:p-8"
                >
                  <h3 className="text-[length:var(--text-h4)] leading-tight font-bold text-ink">
                    {hub.quote.formHeading}
                  </h3>
                  <p className="mt-2 mb-6 text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted">
                    {hub.quote.formIntro}
                  </p>
                  <CommercialInquiryForm copy={hub.quote.formCopy} />
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
                  <p className="text-[length:var(--text-body)] text-[var(--color-text-on-dark)]/90">
                    {hub.quote.phoneLead}
                  </p>
                  <PhoneButton
                    href={utilityBar.phoneHref}
                    label={utilityBar.phoneLabel}
                    location="industries-quote"
                    className="shrink-0 border-white/60 bg-transparent text-white hover:bg-white/10 whitespace-nowrap"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
