import type { Metadata } from "next";
import Link from "next/link";

import { InstallerQuestions } from "@/components/content/InstallerQuestions";
import { InstallCategoryCard } from "@/components/content/WhatWeInstallGrid";
import { CommercialInquiryForm } from "@/components/forms/CommercialInquiryForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CardGrid } from "@/components/layout/CardGrid";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/schema/JsonLd";
import { CtaButton } from "@/components/ui/CtaButton";
import { careersHubImages } from "@/data/site/careers-hub-images";
import { careersLandingContent } from "@/data/site/careers-landing-content";
import { business } from "@/data/site/business";
import { faqHubContent as page } from "@/data/site/faq-content";
import { faqHeroBackground, faqQuoteBackground } from "@/data/site/faq-images";
import { homepageContent } from "@/data/site/homepage-content";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { webPageSchema } from "@/lib/schema/webpage";
import type { FaqItem } from "@/types/content";

const PATHNAME = "/faq/";
const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Frequently Asked Questions" },
];

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
 * Visible question and answer list. Every answer is present in the static HTML
 * and shown by default, so nothing depends on JavaScript or on opening a
 * disclosure. Question text is a heading so the outline stays complete.
 */
function QaList({
  items,
  idPrefix,
  dark = false,
}: {
  readonly items: readonly FaqItem[];
  readonly idPrefix: string;
  readonly dark?: boolean;
}) {
  return (
    <dl className="mt-8 grid gap-x-12 gap-y-8 md:grid-cols-2">
      {items.map((item, index) => {
        const links = [...(item.link ? [item.link] : []), ...(item.links ?? [])];
        return (
          <div
            key={item.question}
            id={`${idPrefix}-${index + 1}`}
            className={`border-t pt-5 ${dark ? "border-[var(--color-border-dark)]" : "border-border"}`}
          >
            <dt className="text-[length:var(--text-h4)] leading-snug font-bold text-balance">
              {item.question}
            </dt>
            <dd
              className={`mt-3 text-[length:var(--text-body)] leading-relaxed text-pretty ${
                dark ? "text-[var(--color-text-on-dark)]/90" : "text-ink-muted"
              }`}
            >
              {item.answer}
              {links.map((link) => (
                <span key={link.href} className="mt-2 block">
                  <Link href={link.href} className={textLink}>
                    {link.label}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </span>
              ))}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}

/**
 * Commercial information hub. Schema is WebPage plus BreadcrumbList only: no
 * FAQPage, QAPage, HowTo, Service, LocalBusiness, or areaServed. The only form
 * is CommercialInquiryForm. The Installer Network appears as a short separate
 * band of answers, never a form.
 */
export default function FaqPage() {
  const network = page.installerNetwork;
  const documentation = page.documentation;

  const nav = [
    ...page.bands.map((band) => ({ id: band.id, label: band.navLabel })),
    { id: documentation.id, label: documentation.navLabel },
    { id: network.id, label: network.navLabel },
  ];

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
        aria-labelledby="faq-hero-heading"
        className="relative isolate overflow-hidden bg-[var(--color-surface-dark)] px-5 py-14 text-[var(--color-text-on-dark)] md:px-6 md:py-20"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={faqHeroBackground.src}
          alt=""
          aria-hidden="true"
          width={faqHeroBackground.width}
          height={faqHeroBackground.height}
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
            <h1
              id="faq-hero-heading"
              className="text-[length:var(--text-h1)] leading-[1.08] font-bold text-balance"
            >
              {page.h1}
            </h1>
            <p className="mt-5 max-w-[640px] text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-[var(--color-text-on-dark)]/90">
              {page.hero.support}
            </p>
            <div className="mt-8 flex flex-col items-start gap-4">
              <CtaButton cta={page.hero.cta} emphasis="primary" blockOnMobile />
              <p className="max-w-[560px] text-[length:var(--text-body)] text-[var(--color-text-on-dark)]/90">
                {page.hero.qualifier}
              </p>
              <Link
                href={page.hero.secondary.href}
                className="inline-flex min-h-11 items-center font-semibold text-[var(--color-text-on-dark)] underline underline-offset-4"
              >
                {page.hero.secondary.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Topic navigation: plain anchors on one line from lg, two or three columns below, no horizontal scroll. */}
      <nav
        aria-label={page.topicNav.label}
        className="bg-surface-subtle px-3 py-4 md:px-4"
      >
        <div className="mx-auto max-w-[1280px]">
          <ul className="grid list-none grid-cols-2 gap-x-4 gap-y-1 p-0 md:grid-cols-3 lg:flex lg:flex-nowrap lg:items-center lg:justify-between lg:gap-x-4">
            {nav.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={`${textLink} lg:whitespace-nowrap`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {page.bands.map((band) => (
        <div key={band.id} id={band.id} className="scroll-mt-24">
          <Section tone={band.tone} width="site" labelledBy={`${band.id}-heading`}>
            <h2 id={`${band.id}-heading`} className={h2Class}>
              {band.h2}
            </h2>
            <QaList items={band.items} idPrefix={band.id} />
          </Section>
        </div>
      ))}

      {/* Documentation: the strongest approved detail, restrained navy band. */}
      <div id={documentation.id} className="scroll-mt-24">
        <Section
          tone="dark"
          width="site"
          labelledBy={`${documentation.id}-heading`}
        >
          <h2
            id={`${documentation.id}-heading`}
            className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance"
          >
            {documentation.h2}
          </h2>
          <div className="mt-8 max-w-[760px] border-l-4 border-l-[var(--color-brand-red)] pl-5">
            <h3 className="text-[length:var(--text-h4)] font-bold">
              {documentation.question}
            </h3>
            <p className="mt-3 text-[length:var(--text-body-lg)] leading-relaxed text-pretty">
              {documentation.answer}
            </p>
          </div>
        </Section>
      </div>

      {/* Installer Network: short, separate technician-interest answers. */}
      <div id={network.id} className="scroll-mt-24">
        <Section
          tone="default"
          width="site"
          labelledBy={`${network.id}-heading`}
        >
          <h2 id={`${network.id}-heading`} className={h2Class}>
            {network.h2}
          </h2>
          <p className="mt-4 max-w-[720px] text-[length:var(--text-body)] leading-relaxed text-ink-muted">
            {network.intro}
          </p>
          <QaList items={network.items} idPrefix={network.id} />
        </Section>
      </div>

      {/*
        Installer questions: the shared recruitment contact block used on the
        service pages, /careers/, /contact/, and /our-process/. Separate
        journey: its links carry the recruitment journey and never lead into the
        commercial form.
      */}
      <InstallerQuestions
        content={careersLandingContent.contact}
        image={careersHubImages.contact}
        headingId="faq-installer-questions-heading"
        phoneLocation="faq-installer-questions"
        trackPaths
      />

      {/* Commercial quote form: the primary conversion. */}
      <div id="request-quote" className="scroll-mt-24">
        <section
          data-tone="dark"
          aria-labelledby="faq-quote-heading"
          className="relative isolate overflow-hidden bg-[var(--color-surface-dark)] px-5 py-16 text-[var(--color-text-on-dark)] md:px-6 md:py-24"
        >
          {/* Decorative background; scrolls with the section. Black overlay only. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={faqQuoteBackground.src}
            alt=""
            aria-hidden="true"
            width={faqQuoteBackground.width}
            height={faqQuoteBackground.height}
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
                  id="faq-quote-heading"
                  className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance"
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

      <Section
        tone="subtle"
        width="site"
        density="compact"
        labelledBy="faq-related-heading"
      >
        <h2 id="faq-related-heading" className={h2Class}>
          {page.related.h2}
        </h2>
        {/* The same six approved cards as the homepage "What We Install" grid. */}
        <div className="mt-8">
          <CardGrid columns={3}>
            {business.serviceTypes.map((service) => (
              <InstallCategoryCard
                key={service}
                service={service}
                content={homepageContent.whatWeInstall}
                id="faq-related"
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
