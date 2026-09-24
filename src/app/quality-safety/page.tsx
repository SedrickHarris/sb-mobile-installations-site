import type { Metadata } from "next";
import Link from "next/link";

import { FaqGroup } from "@/components/content/FaqGroup";
import { InstallerQuestions } from "@/components/content/InstallerQuestions";
import { InstallCategoryCard } from "@/components/content/WhatWeInstallGrid";
import { SplitFeature } from "@/components/content/SplitFeature";
import { CommercialInquiryForm } from "@/components/forms/CommercialInquiryForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CardGrid } from "@/components/layout/CardGrid";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/schema/JsonLd";
import { CtaButton } from "@/components/ui/CtaButton";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { business } from "@/data/site/business";
import { careersHubImages } from "@/data/site/careers-hub-images";
import { careersLandingContent } from "@/data/site/careers-landing-content";
import { homepageContent } from "@/data/site/homepage-content";
import {
  qualityHeroBackground,
  qualityImages,
  qualityQuoteBackground,
} from "@/data/site/quality-images";
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
 * no recruitment content appears on this page. The hero uses a decorative
 * background photo; the other images are ImageSlots with no file.
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

      {/*
        Hero: single text column over a full-width decorative background photo.
        The technician sits toward the right, so the crop anchors right and the
        copy stays on the left. Black overlay only (site rule); it scrolls with
        the section and is never pinned.
      */}
      <section
        data-tone="dark"
        aria-labelledby="quality-hero-heading"
        className="relative isolate overflow-hidden bg-[var(--color-surface-dark)] px-5 py-14 text-[var(--color-text-on-dark)] md:px-6 md:py-20"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={qualityHeroBackground.src}
          alt=""
          aria-hidden="true"
          width={qualityHeroBackground.width}
          height={qualityHeroBackground.height}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[75%_center] md:object-right"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/55" />
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-[720px]">
            <p className="mb-3 flex items-center gap-3 text-[length:var(--text-label)] font-semibold tracking-wide text-[var(--color-text-on-dark)]/90 uppercase">
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
        {/*
          The same six approved cards as the homepage "What We Install" grid,
          rendered by the shared InstallCategoryCard from business.serviceTypes
          so titles, copy, images, and links cannot drift. AOBRD and TPMS have
          no service page of their own, so they stay unlinked (see
          installCardLinks in service-pages-content.ts).
        */}
        <div className="mt-8">
          <CardGrid columns={3}>
            {business.serviceTypes.map((service) => (
              <InstallCategoryCard
                key={service}
                service={service}
                content={homepageContent.whatWeInstall}
                id="quality-install"
              />
            ))}
          </CardGrid>
        </div>
      </Section>

      {/* Vehicle context */}
      <Section tone="subtle" width="site" labelledBy="quality-vehicles-heading">
        {/* Image first in the DOM: above the text on mobile, on the left from md. */}
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
          <ImageSlot slot={qualityImages.vehicleContext} />
          <div>
            <h2 id="quality-vehicles-heading" className={h2Class}>
              {page.vehicles.h2}
            </h2>
            <p className="mt-5 text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink">
              {page.vehicles.lead}
            </p>
            <p className="mt-4 text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted">
              {page.vehicles.body}
            </p>
            <p className="mt-4 text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted">
              {page.vehicles.note}
            </p>
          </div>
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

      {/*
        Installer questions: the shared recruitment contact block, the same one
        used on the service pages, /careers/, and /contact/. Separate journey:
        its links carry the recruitment journey and never lead into the
        commercial form.
      */}
      <InstallerQuestions
        content={careersLandingContent.contact}
        image={careersHubImages.contact}
        headingId="quality-installer-questions-heading"
        phoneLocation="quality-installer-questions"
        trackPaths
      />

      {/*
        Questions: the shared FaqGroup, as on the homepage, coverage, and
        service pages (native details/summary, two columns from md). No FAQPage
        markup on this page: the answers stay visible text only.
      */}
      <FaqGroup
        id="quality-faq"
        accessibleHeading={page.questions.h2}
        layout="columns"
        content={{ h2: page.questions.h2, items: page.questions.items }}
      />

      {/* Commercial quote form: the primary conversion. */}
      <div id="request-quote" className="scroll-mt-24">
        <section
          data-tone="dark"
          aria-labelledby="quality-quote-heading"
          className="relative isolate overflow-hidden bg-[var(--color-surface-dark)] px-5 py-16 text-[var(--color-text-on-dark)] md:px-6 md:py-24"
        >
          {/* Decorative background; scrolls with the section. Black overlay only. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={qualityQuoteBackground.src}
            alt=""
            aria-hidden="true"
            width={qualityQuoteBackground.width}
            height={qualityQuoteBackground.height}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-top"
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/55" />
          <div className="mx-auto max-w-[1280px]">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-14">
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
                <p className="mt-4 text-[length:var(--text-body)] leading-relaxed text-pretty text-[var(--color-text-on-dark)]/90">
                  {page.quote.detail}
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
        {/* The same six approved cards as the homepage; unique id keeps use-case label ids distinct. */}
        <div className="mt-8">
          <CardGrid columns={3}>
            {business.serviceTypes.map((service) => (
              <InstallCategoryCard
                key={service}
                service={service}
                content={homepageContent.whatWeInstall}
                id="quality-related"
              />
            ))}
          </CardGrid>
        </div>
        <ul className="mt-8 flex list-none flex-wrap gap-x-8 gap-y-1 p-0">
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
