import type { Metadata } from "next";
import Link from "next/link";

import { CoverageHero } from "@/components/content/CoverageHero";
import { FaqGroup } from "@/components/content/FaqGroup";
import { SplitFeature } from "@/components/content/SplitFeature";
import { CommercialInquiryForm } from "@/components/forms/CommercialInquiryForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CardGrid } from "@/components/layout/CardGrid";
import { PhoneButton } from "@/components/layout/PhoneButton";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/schema/JsonLd";
import { Card } from "@/components/ui/Card";
import { coverage } from "@/data/commercial/coverage";
import { utilityBar } from "@/data/navigation/site-navigation";
import { coverageHeroVideo, coverageImages } from "@/data/site/coverage-images";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { webPageSchema } from "@/lib/schema/webpage";

const PATHNAME = "/coverage/";
const BREADCRUMBS = [{ label: "Home", href: "/" }, { label: "Coverage" }];

const page = coverage.nationwide;

export const metadata: Metadata = buildPageMetadata({
  title: page.h1,
  description: page.metaDescription,
  pathname: PATHNAME,
});

/**
 * The single canonical nationwide coverage page (Tier 0 of the future geo
 * roadmap). No `/coverage/nationwide/` is created - see
 * src/data/commercial/coverage.ts. No region/state/metro links render here;
 * `coverage.regions`/`states`/`metros` are empty in Sprint 2, so nothing is
 * read from them. Uses `webPageSchema`, not `servicePageSchema`: no
 * `Service.areaServed` state enumeration is emitted for this page, and
 * FAQPage is not emitted (the FAQ is visible, server-rendered content only).
 *
 * Commercial-first: the quote form follows the explanation, and the
 * Installer Network is a quiet text link after the form. Reuses
 * `CommercialInquiryForm` as-is: its existing "project location(s)" free-text
 * field already captures multi-location detail.
 */
export default function CoveragePage() {
  return (
    <>
      <JsonLd
        schema={webPageSchema({
          pathname: PATHNAME,
          name: page.h1,
          description: page.metaDescription,
          breadcrumbs: BREADCRUMBS,
        })}
      />
      <Breadcrumbs items={BREADCRUMBS} />

      <CoverageHero
        id="coverage"
        eyebrow={page.hero.eyebrow}
        h1={page.h1}
        paragraphs={page.hero.paragraphs}
        primaryCta={page.hero.primaryCta}
        phone={{ href: utilityBar.phoneHref, label: page.hero.callLabel }}
        backgroundVideo={coverageHeroVideo}
        image={coverageImages.hero}
      />

      <SplitFeature
        id="coverage-intro"
        eyebrow="NATIONWIDE COVERAGE"
        density="compact"
        content={page.introSection}
        slot={coverageImages.intro}
        mediaSide="left"
        mediaShare="narrow"
        mediaFirstOnMobile
      />

      <Section tone="subtle" width="site" labelledBy="coverage-request-heading">
        <h2
          id="coverage-request-heading"
          className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
        >
          {page.requestStart.h2}
        </h2>
        <ul className="mt-8 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {page.requestStart.items.map((item) => (
            <li
              key={item.label}
              className="rounded-lg border border-border border-l-4 border-l-[var(--color-brand-red)] bg-surface p-5"
            >
              <p className="text-[length:var(--text-h4)] font-bold text-ink">
                {item.label}
              </p>
              <p className="mt-2 text-[length:var(--text-body)] leading-relaxed text-ink-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[length:var(--text-body)] text-ink-muted">
          {page.requestStart.note}{" "}
          <Link
            href={page.requestStart.link.href}
            className="font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4"
          >
            {page.requestStart.link.label}
          </Link>
        </p>
      </Section>

      <Section tone="default" width="site" labelledBy="coverage-services-heading">
        <h2
          id="coverage-services-heading"
          className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
        >
          {page.services.h2}
        </h2>
        <div className="mt-8">
          <CardGrid columns={3}>
            {page.services.cards.map((card) => (
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

      <Section tone="subtle" width="site" labelledBy="coverage-vehicles-heading">
        <h2
          id="coverage-vehicles-heading"
          className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
        >
          {page.vehicles.h2}
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-[length:var(--text-h4)] font-bold text-ink">
              {page.vehicles.examplesHeading}
            </h3>
            <ul className="mt-3 list-disc pl-5 text-[length:var(--text-body)] leading-relaxed text-ink">
              {page.vehicles.examples.map((example) => (
                <li key={example}>{example}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[length:var(--text-h4)] font-bold text-ink">
              {page.vehicles.categoriesHeading}
            </h3>
            <ul className="mt-3 list-disc pl-5 text-[length:var(--text-body)] leading-relaxed text-ink">
              {page.vehicles.categories.map((category) => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-6 max-w-[720px] text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted">
          {page.vehicles.note}
        </p>
      </Section>

      <Section tone="default" width="site" labelledBy="coverage-explore-heading">
        <h2
          id="coverage-explore-heading"
          className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
        >
          {page.explore.h2}
        </h2>
        <ul className="mt-6 grid list-none grid-cols-1 gap-x-8 gap-y-1 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {page.explore.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex min-h-11 items-center gap-2 text-[length:var(--text-body)] font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4"
              >
                {link.label}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <FaqGroup
        id="coverage-faq"
        accessibleHeading={page.faqHeading}
        layout="columns"
        content={{ h2: page.faqHeading, items: page.faq }}
      />

      <div id="request-quote" className="scroll-mt-24">
        <section
          data-tone="dark"
          aria-labelledby="coverage-quote-heading"
          className="bg-[var(--color-surface-dark)] px-5 py-16 text-[var(--color-text-on-dark)] md:px-6 md:py-24"
        >
          <div className="mx-auto max-w-[1280px]">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-start lg:gap-14">
              <div>
                <h2
                  id="coverage-quote-heading"
                  className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-[var(--color-text-on-dark)]"
                >
                  {page.quote.h2}
                </h2>
                <p className="mt-4 text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-[var(--color-text-on-dark)]/90">
                  {page.quote.intro}
                </p>
                <div className="mt-8 flex flex-col items-start gap-3">
                  <p className="text-[length:var(--text-body)] text-[var(--color-text-on-dark)]/90">
                    {page.quote.phoneLead}
                  </p>
                  <PhoneButton
                    href={utilityBar.phoneHref}
                    label={utilityBar.phoneLabel}
                    location="coverage-quote"
                    className="border-white/60 bg-transparent text-white hover:bg-white/10"
                  />
                </div>
              </div>

              <div
                data-tone="light"
                className="rounded-lg border border-border bg-surface p-6 text-ink md:p-8"
              >
                <CommercialInquiryForm />
              </div>
            </div>
          </div>
        </section>
      </div>

      <Section tone="default" density="compact" width="reading">
        <p className="text-[length:var(--text-body)] text-ink-muted">
          {page.handoff.question}{" "}
          <Link
            href={page.handoff.link.href}
            data-journey={page.handoff.link.journey}
            data-event={page.handoff.link.event}
            className="font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4"
          >
            {page.handoff.link.label}
          </Link>
        </p>
      </Section>
    </>
  );
}
