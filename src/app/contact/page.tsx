import type { Metadata } from "next";
import Link from "next/link";

import { InstallerQuestions } from "@/components/content/InstallerQuestions";
import { ServiceNavGrid } from "@/components/content/ServiceNavGrid";
import { ServicesHero } from "@/components/content/ServicesHero";
import { CommercialInquiryForm } from "@/components/forms/CommercialInquiryForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PhoneButton } from "@/components/layout/PhoneButton";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/schema/JsonLd";
import { Card } from "@/components/ui/Card";
import { CtaButton } from "@/components/ui/CtaButton";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { utilityBar } from "@/data/navigation/site-navigation";
import { business, formatAddressLines } from "@/data/site/business";
import { careersHubImages } from "@/data/site/careers-hub-images";
import { careersLandingContent } from "@/data/site/careers-landing-content";
import { contactContent as page } from "@/data/site/contact-content";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { webPageSchema } from "@/lib/schema/webpage";

const PATHNAME = "/contact/";
const BREADCRUMBS = [{ label: "Home", href: "/" }, { label: "Contact" }];

export const metadata: Metadata = buildPageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  pathname: PATHNAME,
});

/**
 * Commercial quote page (docs/decisions/0008). One primary commercial path:
 * the CommercialInquiryForm, reached from the hero CTA at `#request-quote`.
 * The shared InstallerQuestions block (same as /careers/) follows all
 * commercial content as a clearly separated recruitment pathway. Schema is
 * WebPage + BreadcrumbList only; no local, offer, FAQ, or job types.
 */
export default function ContactPage() {
  const [streetLine, cityLine] = formatAddressLines();

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

      <ServicesHero
        id="contact"
        eyebrow={page.hero.eyebrow}
        h1={page.h1}
        intro={page.hero.intro}
        audience={page.hero.audience}
        primaryCta={page.hero.primaryCta}
        phone={{
          href: utilityBar.phoneHref,
          label: `${page.hero.callLabel} ${utilityBar.phoneLabel}`,
        }}
        phoneLocation="contact-hero"
        backgroundVideo={page.hero.video}
        overlay="navy"
      />

      <section
        id="request-quote"
        tabIndex={-1}
        data-tone="dark"
        aria-labelledby="contact-quote-heading"
        className="relative isolate scroll-mt-24 overflow-hidden bg-[var(--color-surface-dark)] px-5 py-16 text-[var(--color-text-on-dark)] outline-none md:px-6 md:py-24"
      >
        {/* Decorative background under the content. The navy surface color above is the fallback. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={page.quote.backgroundImage.src}
          alt=""
          aria-hidden="true"
          width={page.quote.backgroundImage.width}
          height={page.quote.backgroundImage.height}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-14">
            <div>
              <h2
                id="contact-quote-heading"
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
                  label={`${page.hero.callLabel} ${utilityBar.phoneLabel}`}
                  location="contact-quote"
                  className="border-white/60 bg-transparent text-white hover:bg-white/10"
                />
              </div>
            </div>

            <div
              data-tone="light"
              className="rounded-lg border border-border bg-surface p-6 text-ink md:p-8"
            >
              <CommercialInquiryForm copy={page.quote.form} />
            </div>
          </div>
        </div>
      </section>

      <Section tone="default" width="site" labelledBy="contact-include-heading">
        <h2
          id="contact-include-heading"
          className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
        >
          {page.include.h2}
        </h2>
        <p className="mt-4 max-w-[720px] text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink-muted">
          {page.include.intro}
        </p>
        <ul className="mt-10 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {page.include.items.map((item) => (
            <li key={item.title}>
              <Card as="div" padding="none" className="h-full p-6">
                <h3 className="text-[length:var(--text-h4)] leading-tight font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-[length:var(--text-body)] leading-relaxed text-ink-muted">
                  {item.body}
                </p>
              </Card>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-[720px] text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted">
          {page.include.supporting}
        </p>
        <p className="mt-4 max-w-[720px] text-[length:var(--text-body)] leading-relaxed font-semibold text-pretty text-ink">
          {page.include.closing}
        </p>
      </Section>

      <ServiceNavGrid
        id="contact-services"
        h2={page.services.h2}
        intro={page.services.intro}
        cards={page.services.cards}
      />

      <Section
        tone="default"
        width="site"
        density="compact"
        labelledBy="contact-nationwide-heading"
      >
        <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-10 lg:gap-14">
          <ImageSlot slot={page.nationwide.image} />

          <div>
            <h2
              id="contact-nationwide-heading"
              className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
            >
              {page.nationwide.h2}
            </h2>
            {page.nationwide.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted"
              >
                {paragraph}
              </p>
            ))}
            <div className="mt-6 flex flex-col items-start gap-1">
              <Link
                href={page.nationwide.href}
                className="inline-flex min-h-11 items-center gap-2 text-[length:var(--text-body)] font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4"
              >
                {page.nationwide.linkLabel}
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                href={page.nationwide.quoteHref}
                data-journey="commercial"
                data-event="cta_quote_click"
                className="inline-flex min-h-11 items-center gap-2 text-[length:var(--text-body)] font-medium text-ink-muted underline underline-offset-4 hover:text-ink"
              >
                {page.nationwide.quoteLinkLabel}
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="subtle" width="site" labelledBy="contact-helpful-heading">
        <h2
          id="contact-helpful-heading"
          className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
        >
          {page.helpful.h2}
        </h2>
        <p className="mt-4 max-w-[720px] text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink-muted">
          {page.helpful.intro}
        </p>
        <ul className="mt-10 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2">
          {page.helpful.items.map((item) => (
            <li key={item.href}>
              <Card as="div" hover padding="none" className="relative flex h-full flex-col p-6 md:p-8">
                <h3 className="text-[length:var(--text-h3)] leading-tight font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-[length:var(--text-body)] leading-relaxed text-ink-muted">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="mt-auto inline-flex min-h-11 items-center gap-2 pt-5 text-[length:var(--text-body)] font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4 after:absolute after:inset-0 after:content-['']"
                >
                  {item.linkLabel}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      {/*
        Installer questions: the same shared block as /careers/, a clearly
        separated secondary pathway after all commercial content
        (docs/decisions/0008). Path links carry the recruitment journey.
      */}
      <InstallerQuestions
        content={careersLandingContent.contact}
        image={careersHubImages.contact}
        headingId="contact-installer-heading"
        phoneLocation="contact-installer"
        trackPaths
      />

      <Section
        tone="subtle"
        width="site"
        density="compact"
        labelledBy="contact-office-heading"
      >
        <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-10 lg:gap-14">
          <ImageSlot slot={page.office.image} />

          <div>
            <h2
              id="contact-office-heading"
              className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
            >
              {page.office.h2}
            </h2>
            <address className="mt-4 text-[length:var(--text-body-lg)] leading-relaxed text-ink not-italic">
              <span className="block font-semibold">{business.name}</span>
              <span className="block">{streetLine}</span>
              <span className="block">{cityLine}</span>
            </address>
            <p className="mt-4 text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted">
              {page.office.body}
            </p>
            <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <CtaButton cta={page.hero.primaryCta} emphasis="primary" blockOnMobile />
              <PhoneButton
                href={utilityBar.phoneHref}
                label={utilityBar.phoneLabel}
                location="contact-office"
                className="w-full border-ink bg-surface text-ink hover:bg-surface-subtle sm:w-auto"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
