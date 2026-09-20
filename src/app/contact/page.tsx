import type { Metadata } from "next";
import Link from "next/link";

import { CorporateOffice } from "@/components/content/CorporateOffice";
import { ServiceNavGrid } from "@/components/content/ServiceNavGrid";
import { ServicesHero } from "@/components/content/ServicesHero";
import { CommercialInquiryForm } from "@/components/forms/CommercialInquiryForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PhoneButton } from "@/components/layout/PhoneButton";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/schema/JsonLd";
import { Card } from "@/components/ui/Card";
import { utilityBar } from "@/data/navigation/site-navigation";
import { contactContent as page } from "@/data/site/contact-content";
import { servicesHubPageContent as hub } from "@/data/site/services-hub-content";
import { AnalyticsEvent } from "@/lib/analytics/events";
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
 * The Installer Network appears once, after all commercial content, as a
 * separate recruitment-journey text link. Schema is WebPage + BreadcrumbList
 * only; no local, offer, FAQ, or job types.
 */
export default function ContactPage() {
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
        primaryCta={page.hero.primaryCta}
        phone={{
          href: utilityBar.phoneHref,
          label: `${page.hero.callLabel} ${utilityBar.phoneLabel}`,
        }}
        phoneLocation="contact-hero"
        image={page.hero.image}
      />

      <Section tone="default" width="site" labelledBy="contact-include-heading">
        <h2
          id="contact-include-heading"
          className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
        >
          {page.include.h2}
        </h2>
        <ul className="mt-8 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {page.include.items.map((item) => (
            <li key={item.title}>
              <Card as="div" padding="compact" className="h-full">
                <h3 className="text-[length:var(--text-h4)] leading-tight font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-[length:var(--text-body)] leading-relaxed text-ink-muted">
                  {item.body}
                </p>
              </Card>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[length:var(--text-body)] text-ink-muted">
          {page.include.closing}
        </p>
      </Section>

      <ServiceNavGrid
        id="contact-services"
        h2={page.services.h2}
        intro={page.services.intro}
        cards={hub.services.cards}
      />

      <Section tone="default" width="reading" labelledBy="contact-nationwide-heading">
        <h2
          id="contact-nationwide-heading"
          className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
        >
          {page.nationwide.h2}
        </h2>
        <p className="mt-4 text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink-muted">
          {page.nationwide.statement}
        </p>
        <p className="mt-4">
          <Link
            href={page.nationwide.href}
            className="inline-flex min-h-11 items-center gap-2 text-[length:var(--text-body)] font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4"
          >
            {page.nationwide.linkLabel}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Section>

      <section
        id="request-quote"
        tabIndex={-1}
        data-tone="dark"
        aria-labelledby="contact-quote-heading"
        className="scroll-mt-24 bg-[var(--color-surface-dark)] px-5 py-16 text-[var(--color-text-on-dark)] outline-none md:px-6 md:py-24"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-start lg:gap-14">
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
              <CommercialInquiryForm />
            </div>
          </div>
        </div>
      </section>

      <Section tone="default" width="site" labelledBy="contact-helpful-heading">
        <h2
          id="contact-helpful-heading"
          className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
        >
          {page.helpful.h2}
        </h2>
        <ul className="mt-8 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2">
          {page.helpful.items.map((item) => (
            <li key={item.href}>
              <Card as="div" hover padding="compact" className="relative h-full">
                <h3 className="text-[length:var(--text-h4)] leading-tight font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-[length:var(--text-body)] leading-relaxed text-ink-muted">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4 after:absolute after:inset-0 after:content-['']"
                >
                  {`View ${item.title}`}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="subtle" width="site" density="compact">
        <CorporateOffice />
      </Section>

      {/*
        Installer questions. The one recruitment handoff, placed after all
        commercial content. Quiet: no button, no red fill. The phone link keeps
        the recruitment journey and emits no commercial call event. Only the
        Installer Network path is offered here; the active-opening path lives on
        /careers/.
      */}
      <Section tone="default" width="site" density="compact" labelledBy="contact-installer-heading">
        <div
          data-tone="light"
          className="max-w-[720px] rounded-lg border border-border border-l-4 border-l-[var(--color-brand-red)] bg-surface p-6 text-ink md:p-8"
        >
          <p className="mb-2 text-[length:var(--text-label)] font-semibold tracking-wide text-ink-muted uppercase">
            {page.installer.eyebrow}
          </p>
          <h2
            id="contact-installer-heading"
            className="text-[length:var(--text-h3)] leading-[1.15] font-bold text-balance text-ink"
          >
            {page.installer.h2}
          </h2>
          <p className="mt-4 text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted">
            {page.installer.body}
          </p>
          <p className="mt-3 text-[length:var(--text-small)] leading-relaxed text-pretty text-ink-muted">
            {page.installer.clarification}
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <PhoneButton
              href={utilityBar.phoneHref}
              label={utilityBar.phoneLabel}
              location="contact-installer"
              journey="recruitment"
              event={null}
              className="border-border bg-transparent text-ink hover:bg-surface-subtle"
            />
            <p className="text-[length:var(--text-body)] text-ink">{page.installer.hours}</p>
          </div>

          <div className="mt-6 border-t border-border pt-5">
            <h3 className="text-[length:var(--text-body)] font-bold text-ink">
              {page.installer.pathsHeading}
            </h3>
            <ul className="mt-2 flex list-none flex-col gap-3 p-0">
              {page.installer.paths.map((path) => (
                <li key={path.href}>
                  <Link
                    href={path.href}
                    data-journey="recruitment"
                    data-event={AnalyticsEvent.ctaInstallerNetworkClick}
                    className="inline-flex min-h-11 items-center gap-2 text-[length:var(--text-body)] font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4"
                  >
                    {path.label}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                  <p className="text-[length:var(--text-small)] text-ink-muted">{path.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
