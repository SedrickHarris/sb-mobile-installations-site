import type { Metadata } from "next";
import Link from "next/link";

import { FaqGroup } from "@/components/content/FaqGroup";
import { CommercialInquiryForm } from "@/components/forms/CommercialInquiryForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/schema/JsonLd";
import { CtaButton } from "@/components/ui/CtaButton";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { ourProcessContent as page } from "@/data/site/process-content";
import { processImages } from "@/data/site/process-images";
import { getServiceCard } from "@/data/site/service-pages-content";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { webPageSchema } from "@/lib/schema/webpage";

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
 * quote form follows the explanation. The installer handoff is a low-emphasis
 * text link placed after the commercial form, in its own journey. No
 * approved photography exists, so every image is an ImageSlot with no file.
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

      {/* Hero: text first in the DOM, decorative slot after it. */}
      <section
        data-tone="dark"
        aria-labelledby="process-hero-heading"
        className="bg-[var(--color-surface-dark)] px-5 py-14 text-[var(--color-text-on-dark)] md:px-6 md:py-20"
      >
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-center lg:gap-14">
          <div>
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
            <p className="mt-5 max-w-[640px] text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-[var(--color-text-on-dark)]/90">
              {page.hero.support}
            </p>
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
          <ImageSlot slot={processImages.hero} priority />
        </div>
      </section>

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
        <ul className="mt-8 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-2 lg:grid-cols-3">
          {page.scope.cards.map((card) => (
            <li
              key={card.slug}
              className="h-full rounded-lg border border-border bg-surface p-5"
            >
              <h3 className="text-[length:var(--text-h4)] font-bold text-ink">
                <Link
                  href={getServiceCard(card.slug).href}
                  className="text-[var(--color-accent-blue-strong)] underline underline-offset-4"
                >
                  {card.title}
                </Link>
              </h3>
              <p className="mt-2 text-[length:var(--text-body)] leading-relaxed text-ink-muted">
                {card.body}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Vehicle context and nationwide statement: text callout, no map. */}
      <Section tone="subtle" width="site" labelledBy="process-vehicles-heading">
        <div className="grid gap-10 md:grid-cols-2 md:items-start md:gap-16">
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
            <div className="mt-8">
              <ImageSlot slot={processImages.vehicleContext} />
            </div>
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
          </div>
          <div className="grid gap-4">
            <ImageSlot slot={processImages.documentation} />
            {/* Static CSS panel repeating approved language only. Not a portal or report. */}
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
        </div>
      </Section>

      {/* Visible Q&A. No FAQPage markup. */}
      <FaqGroup
        id="process-faq"
        accessibleHeading={page.questions.h2}
        layout="columns"
        content={{ h2: page.questions.h2, items: [...page.questions.items] }}
      />

      {/* Commercial quote form: the primary conversion. */}
      <div id="request-quote" className="scroll-mt-24">
        <section
          data-tone="dark"
          aria-labelledby="process-quote-heading"
          className="bg-[var(--color-surface-dark)] px-5 py-16 text-[var(--color-text-on-dark)] md:px-6 md:py-24"
        >
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

      {/* Installer Network handoff: separate journey, low emphasis, text only. */}
      <Section
        tone="default"
        width="site"
        density="compact"
        labelledBy="process-installer-heading"
      >
        <h2
          id="process-installer-heading"
          className="text-[length:var(--text-h4)] font-bold text-ink"
        >
          {page.installerHandoff.question}
        </h2>
        <p className="mt-2">
          <Link
            href={page.installerHandoff.link.href}
            data-journey={page.installerHandoff.link.journey}
            data-event={page.installerHandoff.link.event}
            className={textLink}
          >
            {page.installerHandoff.link.label}
          </Link>
        </p>
      </Section>

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
        <ul className="mt-6 flex list-none flex-wrap gap-x-8 gap-y-1 p-0">
          {page.scope.cards.map((card) => (
            <li key={card.slug}>
              <Link href={getServiceCard(card.slug).href} className={textLink}>
                {card.title}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </li>
          ))}
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
