import type { Metadata } from "next";
import Link from "next/link";

import { InstallerQuestions } from "@/components/content/InstallerQuestions";
import { InstallCategoryCard } from "@/components/content/WhatWeInstallGrid";
import { FaqGroup } from "@/components/content/FaqGroup";
import { CommercialInquiryForm } from "@/components/forms/CommercialInquiryForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CardGrid } from "@/components/layout/CardGrid";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/schema/JsonLd";
import { CtaButton } from "@/components/ui/CtaButton";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { business } from "@/data/site/business";
import { homepageContent } from "@/data/site/homepage-content";
import { careersHubImages } from "@/data/site/careers-hub-images";
import { careersLandingContent } from "@/data/site/careers-landing-content";
import { ourProcessContent as page } from "@/data/site/process-content";
import {
  processHeroBackground,
  processImages,
  processQuoteBackground,
} from "@/data/site/process-images";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { webPageSchema } from "@/lib/schema/webpage";
import { TrustStrip } from "@/components/content/TrustStrip";
import { trustStripContent } from "@/data/site/trust-strip-content";

const PATHNAME = "/our-process/";
const BREADCRUMBS = [{ label: "Home", href: "/" }, { label: "Our Process" }];

export const metadata: Metadata = buildPageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  pathname: PATHNAME,
});

const h2Class =
  "text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink";
const textLink =
  "inline-flex min-h-11 items-center gap-2 font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4";

/** Neutral in-repo icons. Decorative: the card title carries the meaning. */
function ContextIcon({ kind }: { readonly kind: string }) {
  const common = {
    viewBox: "0 0 32 32",
    width: 32,
    height: 32,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: false,
  };
  if (kind === "equipment") {
    return (
      <svg {...common}>
        <rect x="6" y="9" width="20" height="14" rx="2" />
        <path d="M11 14h10M11 18h6" />
      </svg>
    );
  }
  if (kind === "vehicle-count") {
    return (
      <svg {...common}>
        <rect x="4" y="14" width="18" height="8" rx="2" />
        <rect x="10" y="8" width="18" height="8" rx="2" opacity="0.55" />
      </svg>
    );
  }
  if (kind === "project-locations") {
    return (
      <svg {...common}>
        <circle cx="16" cy="16" r="4" />
        <circle cx="16" cy="16" r="10" opacity="0.4" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect x="6" y="8" width="20" height="18" rx="2" />
      <path d="M6 14h20M12 5v5M20 5v5" />
    </svg>
  );
}

/**
 * Commercial intake guide, not a workflow (docs/01 section 17 is unconfirmed).
 * Schema is WebPage plus BreadcrumbList only, matching visible content: no
 * FAQPage (the Q&A is visible text), no HowTo, no Service, no areaServed. The
 * quote form follows the explanation. The only recruitment content is the
 * shared InstallerQuestions block, in its own journey. Photography is supplied for the hero, vehicle, documentation, and quote
 * sections.
 */
export default function OurProcessPage() {
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
        Black overlay only (site rule); it scrolls with the section and is
        never pinned.
      */}
      <section
        data-tone="dark"
        aria-labelledby="process-hero-heading"
        className="relative isolate overflow-hidden bg-[var(--color-surface-dark)] px-5 py-14 text-[var(--color-text-on-dark)] md:px-6 md:py-20"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={processHeroBackground.src}
          alt=""
          aria-hidden="true"
          width={processHeroBackground.width}
          height={processHeroBackground.height}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center] md:object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-black/55"
        />
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
              id="process-hero-heading"
              className="text-[length:var(--text-h1)] leading-[1.08] font-bold text-balance"
            >
              {page.h1}
            </h1>
            {page.hero.support.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-5 max-w-[640px] text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-[var(--color-text-on-dark)]/90"
              >
                {paragraph}
              </p>
            ))}
            <div className="mt-8 flex flex-col items-start gap-4">
              <CtaButton cta={page.hero.cta} emphasis="primary" blockOnMobile />
              <a
                href={page.hero.anchor.href}
                className="inline-flex min-h-11 items-center font-semibold text-[var(--color-text-on-dark)] underline underline-offset-4"
              >
                {page.hero.anchor.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip content={trustStripContent} />

      {/* Inquiry context: four information categories, not a sequence. */}
      <div id="quote-request-context" className="scroll-mt-24">
        <Section
          tone="subtle"
          width="site"
          labelledBy="process-inquiry-heading"
        >
          <h2
            id="process-inquiry-heading"
            className={`${h2Class} scroll-mt-24`}
          >
            {page.inquiry.h2}
          </h2>
          <ul className="mt-8 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2">
            {page.inquiry.items.map((item) => (
              <li
                key={item.key}
                className="flex h-full gap-4 rounded-lg border border-border border-l-4 border-l-[var(--color-brand-red)] bg-surface p-5"
              >
                <span className="shrink-0 text-[var(--color-accent-blue-strong)]">
                  <ContextIcon kind={item.key} />
                </span>
                <div>
                  <h3 className="text-[length:var(--text-h4)] font-bold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[length:var(--text-body)] leading-relaxed text-ink-muted">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-[720px] text-[length:var(--text-body)] leading-relaxed text-ink-muted">
            {page.inquiry.support}
          </p>
        </Section>
      </div>

      {/* Scope context: linked service taxonomy. */}
      <Section tone="default" width="site" labelledBy="process-scope-heading">
        <h2 id="process-scope-heading" className={h2Class}>
          {page.scope.h2}
        </h2>
        {/*
          The same six approved cards as the homepage "What We Install" grid,
          rendered by the shared InstallCategoryCard from business.serviceTypes
          so titles, copy, images, and links cannot drift.
        */}
        <div className="mt-8">
          <CardGrid columns={3}>
            {business.serviceTypes.map((service) => (
              <InstallCategoryCard
                key={service}
                service={service}
                content={homepageContent.whatWeInstall}
                id="process-install"
              />
            ))}
          </CardGrid>
        </div>
      </Section>

      {/* Vehicle context and nationwide statement: text callout, no map. */}
      <Section tone="subtle" width="site" labelledBy="process-vehicles-heading">
        {/* Left: copy and dark card, centered against the image on the right. */}
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
          <div className="grid gap-8">
            <div>
              <h2 id="process-vehicles-heading" className={h2Class}>
                {page.vehicles.h2}
              </h2>
              <p className="mt-5 text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink">
                {page.vehicles.lead}
              </p>
              <p className="mt-4 text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted">
                {page.vehicles.clarification}
              </p>
            </div>
            <div
              data-tone="dark"
              className="rounded-lg bg-[var(--color-surface-dark)] p-6 text-[var(--color-text-on-dark)] md:p-8"
            >
              <h3 className="text-[length:var(--text-h3)] leading-tight font-bold text-balance">
                {page.vehicles.nationwide.heading}
              </h3>
              <p className="mt-4 text-[length:var(--text-body-lg)] leading-relaxed text-pretty">
                {page.vehicles.nationwide.sentence}
              </p>
              <ul className="mt-6 grid list-none gap-2 border-t border-[var(--color-border-dark)] p-0 pt-5">
                {page.vehicles.nationwide.facts.map((fact) => (
                  <li
                    key={fact}
                    className="text-[length:var(--text-body)] text-[var(--color-text-on-dark)]/90"
                  >
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ImageSlot slot={processImages.vehicleContext} />
        </div>
      </Section>

      {/* Documentation: the strongest factual anchor. */}
      <Section
        tone="default"
        width="site"
        labelledBy="process-documentation-heading"
      >
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
          <div>
            <h2 id="process-documentation-heading" className={h2Class}>
              {page.documentation.h2}
            </h2>
            <p className="mt-5 text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink">
              {page.documentation.sentence}
            </p>
            {/* Static CSS panel repeating approved language only. Not a portal or report. */}
            <ul
              aria-label="Installation documentation summary"
              className="mt-6 grid list-none gap-3 rounded-lg border border-border bg-surface-subtle p-5 md:p-6"
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
          <ImageSlot slot={processImages.documentation} />
        </div>
      </Section>

      {/*
        Installer questions: the shared recruitment contact block, the same one
        used on the service pages, /careers/, /contact/, and /quality-safety/.
        Separate journey: its links carry the recruitment journey and never
        lead into the commercial form.
      */}
      <InstallerQuestions
        content={careersLandingContent.contact}
        image={careersHubImages.contact}
        headingId="process-installer-questions-heading"
        phoneLocation="process-installer-questions"
        trackPaths
      />

      {/* Visible Q&A. No FAQPage markup. */}
      <FaqGroup
        id="process-faq"
        accessibleHeading={page.questions.h2}
        layout="columns"
        columnsFrom="lg"
        content={{ h2: page.questions.h2, items: [...page.questions.items] }}
      />

      {/* Commercial quote form: the primary conversion. */}
      <div id="request-quote" className="scroll-mt-24">
        <section
          data-tone="dark"
          aria-labelledby="process-quote-heading"
          className="relative isolate overflow-hidden bg-[var(--color-surface-dark)] px-5 py-16 text-[var(--color-text-on-dark)] md:px-6 md:py-24"
        >
          {/* Decorative background; scrolls with the section. Black overlay only. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={processQuoteBackground.src}
            alt=""
            aria-hidden="true"
            width={processQuoteBackground.width}
            height={processQuoteBackground.height}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-black/55"
          />
          <div className="mx-auto max-w-[1280px]">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-14">
              <div>
                <h2
                  id="process-quote-heading"
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

      {/* Related resources */}
      <Section
        tone="subtle"
        width="site"
        density="compact"
        labelledBy="process-related-heading"
      >
        <h2 id="process-related-heading" className={h2Class}>
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
                id="process-related"
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
