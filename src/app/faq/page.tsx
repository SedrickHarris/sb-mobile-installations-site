import type { Metadata } from "next";
import Link from "next/link";

import { CommercialInquiryForm } from "@/components/forms/CommercialInquiryForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/schema/JsonLd";
import { CtaButton } from "@/components/ui/CtaButton";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { faqHubContent as page } from "@/data/site/faq-content";
import { faqImages } from "@/data/site/faq-images";
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
 * band and a low-emphasis text handoff, never a form.
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

      {/* Hero: copy first in DOM order, decorative panel after. No photo. */}
      <section
        data-tone="dark"
        aria-labelledby="faq-hero-heading"
        className="bg-[var(--color-surface-dark)] px-5 py-14 text-[var(--color-text-on-dark)] md:px-6 md:py-20"
      >
        <div className="mx-auto grid max-w-[1280px] gap-10 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:items-center md:gap-14">
          <div>
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
          <div aria-hidden="true" className="hidden md:block">
            <ImageSlot slot={faqImages.hero} />
          </div>
        </div>
      </section>

      {/* Topic navigation: plain anchors, two columns on mobile, no horizontal scroll. */}
      <nav
        aria-label={page.topicNav.label}
        className="bg-surface-subtle px-5 py-6 md:px-6"
      >
        <div className="mx-auto max-w-[1280px]">
          <ul className="grid list-none grid-cols-2 gap-x-4 gap-y-1 p-0 md:grid-cols-3 lg:grid-cols-6">
            {nav.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={textLink}>
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

      {/* Commercial quote form: the primary conversion. */}
      <div id="request-quote" className="scroll-mt-24">
        <section
          data-tone="dark"
          aria-labelledby="faq-quote-heading"
          className="bg-[var(--color-surface-dark)] px-5 py-16 text-[var(--color-text-on-dark)] md:px-6 md:py-24"
        >
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

      {/* Low-emphasis Installer Network handoff: text link only, its own journey. */}
      <Section tone="default" width="site" density="tight" labelledBy="faq-handoff-heading">
        <p
          id="faq-handoff-heading"
          className="text-[length:var(--text-body)] font-semibold text-ink"
        >
          {page.handoff.question}
        </p>
        <p className="mt-1">
          <Link
            href={page.handoff.link.href}
            data-journey="recruitment"
            data-event="cta_installer_network_click"
            className={textLink}
          >
            {page.handoff.link.label}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Section>

      <Section
        tone="subtle"
        width="site"
        density="compact"
        labelledBy="faq-related-heading"
      >
        <h2 id="faq-related-heading" className={h2Class}>
          {page.related.h2}
        </h2>
        <ul className="mt-6 flex list-none flex-wrap gap-x-8 gap-y-1 p-0">
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
