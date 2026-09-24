import type { Metadata } from "next";
import Link from "next/link";

import { SplitFeature } from "@/components/content/SplitFeature";
import { CommercialInquiryForm } from "@/components/forms/CommercialInquiryForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/schema/JsonLd";
import { Card } from "@/components/ui/Card";
import { CtaButton } from "@/components/ui/CtaButton";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { qualityImages } from "@/data/site/quality-images";
import { qualitySafetyContent as page } from "@/data/site/quality-content";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { webPageSchema } from "@/lib/schema/webpage";

const PATHNAME = "/quality-safety/";
const BREADCRUMBS = [{ label: "Home", href: "/" }, { label: "Quality & Safety" }];

export const metadata: Metadata = buildPageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  pathname: PATHNAME,
});

const h2Class =
  "text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink";
const textLink =
  "inline-flex min-h-11 items-center gap-2 font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4";

/**
 * Controlled documentation-and-scope page. Makes no quality-assurance, safety,
 * certification, inspection, testing, or compliance claim (docs/01 sections
 * 16.1 and 21). Schema is WebPage plus BreadcrumbList only, matching visible
 * content: no FAQPage (the Q&A is visible editorial text), no Service, no
 * areaServed. Commercial-first: the quote form follows the explanation and
 * the Installer Network handoff is a quiet text link after it. All images are
 * ImageSlots with no file, so production emits no img element.
 */
export default function QualitySafetyPage() {
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

      {/* Hero: navy, copy first in the DOM, image slot after. */}
      <section
        data-tone="dark"
        aria-labelledby="quality-hero-heading"
        className="bg-[var(--color-surface-dark)] px-5 py-14 text-[var(--color-text-on-dark)] md:px-6 md:py-20"
      >
        <div className="mx-auto grid max-w-[1280px] gap-10 md:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] md:items-center md:gap-14">
          <div>
            <p className="mb-3 flex items-center gap-3 text-[length:var(--text-label)] font-semibold tracking-wide text-[var(--color-text-on-dark)]/80 uppercase">
              <span
                aria-hidden="true"
                className="inline-block h-0.5 w-8 shrink-0 bg-[var(--color-brand-red)]"
              />
              {page.hero.eyebrow}
            </p>
            <h1
              id="quality-hero-heading"
              className="text-[length:var(--text-h1)] leading-[1.08] font-bold text-balance"
            >
              {page.h1}
            </h1>
            {page.hero.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-5 max-w-[640px] text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-[var(--color-text-on-dark)]/90"
              >
                {paragraph}
              </p>
            ))}
            <p className="mt-6 max-w-[640px] border-l-4 border-[var(--color-brand-red)] pl-4 text-[length:var(--text-body-lg)] leading-relaxed font-semibold text-pretty">
              {page.hero.documentationLine}
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <div>
                <CtaButton cta={page.hero.cta} emphasis="primary" blockOnMobile />
              </div>
              <p className="max-w-[640px] text-[length:var(--text-body)] leading-relaxed text-[var(--color-text-on-dark)]/90">
                {page.hero.qualifier}
              </p>
            </div>
          </div>
          <ImageSlot slot={qualityImages.hero} priority />
        </div>
      </section>

      {/* Scope clarity strip */}
      <Section
        tone="subtle"
        width="site"
        density="compact"
        labelledBy="quality-scope-heading"
      >
        <h2 id="quality-scope-heading" className="sr-only">
          {page.scope.accessibleHeading}
        </h2>
        <ul className="grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-3">
          {page.scope.cards.map((card) => (
            <li
              key={card.title}
              className="h-full rounded-lg border border-border border-l-4 border-l-[var(--color-brand-red)] bg-surface p-5"
            >
              <h3 className="text-[length:var(--text-h4)] font-bold text-ink">
                {card.title}
              </h3>
              <p className="mt-2 text-[length:var(--text-body)] leading-relaxed text-ink-muted">
                {card.body}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Installation documentation: the factual center of the page. */}
      <Section tone="default" width="site" labelledBy="quality-documentation-heading">
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
          <div>
            <h2 id="quality-documentation-heading" className={h2Class}>
              {page.documentation.h2}
            </h2>
            <p className="mt-5 text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink">
              {page.documentation.sentence}
            </p>
            <p className="mt-4">
              <Link
                href={page.documentation.link.href}
                data-journey="commercial"
                data-event="cta_quote_click"
                className={textLink}
              >
                {page.documentation.link.label}
              </Link>
            </p>
          </div>
          {/* Static CSS panel that repeats approved language only. Not a portal or report. */}
          <ul
            aria-label="Installation documentation summary"
            className="grid list-none gap-3 rounded-lg border border-border bg-surface-subtle p-5 md:p-6"
          >
            {page.documentation.panelLabels.map((label) => (
              <li
                key={label}
                className="rounded-md border border-border border-l-4 border-l-[var(--color-brand-red)] bg-surface px-4 py-4 text-[length:var(--text-h4)] font-bold text-ink"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Project-location context: commercial band with an image slot. */}
      <SplitFeature
        id="quality-project-location"
        tone="dark"
        content={{
          h2: page.projectLocation.h2,
          body: [...page.projectLocation.body],
        }}
        slot={qualityImages.projectLocation}
        mediaSide="right"
        mediaFirstOnMobile
      />

      {/* Service context cards */}
      <Section tone="default" width="site" labelledBy="quality-services-heading">
        <h2 id="quality-services-heading" className={h2Class}>
          {page.services.h2}
        </h2>
        <p className="mt-4 max-w-[720px] text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink-muted">
          {page.services.intro}
        </p>
        <ul className="mt-8 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {page.services.cards.map((card) => (
            <li key={card.href}>
              <Card
                as="div"
                hover
                padding="compact"
                className="relative flex h-full flex-col"
              >
                <h3 className="text-[length:var(--text-h4)] font-bold text-ink">
                  {card.title}
                </h3>
                <p className="mt-2 grow text-[length:var(--text-body)] text-ink-muted">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className={`mt-4 ${textLink} after:absolute after:inset-0 after:content-['']`}
                >
                  {card.linkLabel}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      {/* Vehicle context */}
      <Section tone="subtle" width="site" labelledBy="quality-vehicles-heading">
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
          <div>
            <h2 id="quality-vehicles-heading" className={h2Class}>
              {page.vehicles.h2}
            </h2>
            <p className="mt-5 text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink">
              {page.vehicles.lead}
            </p>
            <p className="mt-4 text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted">
              {page.vehicles.note}
            </p>
          </div>
          <ImageSlot slot={qualityImages.vehicleContext} omitFallback />
        </div>
      </Section>

      {/* Scope and project information */}
      <Section tone="default" width="site" labelledBy="quality-project-info-heading">
        <h2 id="quality-project-info-heading" className={h2Class}>
          {page.projectInfo.h2}
        </h2>
        <p className="mt-4 max-w-[720px] text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink-muted">
          {page.projectInfo.body}
        </p>
        <h3 className="mt-8 text-[length:var(--text-h4)] font-bold text-ink">
          {page.projectInfo.discussHeading}
        </h3>
        <ul className="mt-4 grid list-none grid-cols-2 gap-4 p-0 lg:grid-cols-4">
          {page.projectInfo.discussItems.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-border border-l-4 border-l-[var(--color-brand-red)] bg-surface p-5 text-[length:var(--text-h4)] font-bold text-ink"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* Questions: visible editorial text, no FAQPage markup. */}
      <Section tone="subtle" width="site" labelledBy="quality-questions-heading">
        <h2 id="quality-questions-heading" className={h2Class}>
          {page.questions.h2}
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {page.questions.items.map((item) => (
            <div
              key={item.question}
              className="rounded-lg border border-border bg-surface p-5"
            >
              <h3 className="text-[length:var(--text-h4)] font-bold text-ink">
                {item.question}
              </h3>
              <p className="mt-2 text-[length:var(--text-body)] leading-relaxed text-ink-muted">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Commercial quote form: the primary conversion. */}
      <div id="request-quote" className="scroll-mt-24">
        <section
          data-tone="dark"
          aria-labelledby="quality-quote-heading"
          className="bg-[var(--color-surface-dark)] px-5 py-16 text-[var(--color-text-on-dark)] md:px-6 md:py-24"
        >
          <div className="mx-auto max-w-[1280px]">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-start lg:gap-14">
              <div>
                <h2
                  id="quality-quote-heading"
                  className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-[var(--color-text-on-dark)]"
                >
                  {page.quote.h2}
                </h2>
                <p className="mt-4 text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-[var(--color-text-on-dark)]/90">
                  {page.quote.intro}
                </p>
              </div>
              <div
                data-tone="light"
                className="rounded-lg border border-border bg-surface p-6 text-ink md:p-8"
              >
                <CommercialInquiryForm copy={page.quote.formCopy} />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Installer Network handoff: quiet, text only, separate journey. */}
      <Section tone="default" width="site" density="tight">
        <p className="text-[length:var(--text-body)] text-ink-muted">
          {page.handoff.prompt}{" "}
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

      {/* Related resources */}
      <Section
        tone="subtle"
        width="site"
        density="compact"
        labelledBy="quality-related-heading"
      >
        <h2 id="quality-related-heading" className={h2Class}>
          {page.related.h2}
        </h2>
        <ul className="mt-6 grid list-none gap-1 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {page.related.links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={textLink}>
                {link.label}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
