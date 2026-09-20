import type { Metadata } from "next";
import Link from "next/link";

import { CorporateOffice } from "@/components/content/CorporateOffice";
import { FaqGroup } from "@/components/content/FaqGroup";
import { ServicesHero } from "@/components/content/ServicesHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PhoneButton } from "@/components/layout/PhoneButton";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/schema/JsonLd";
import { CtaButton } from "@/components/ui/CtaButton";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { utilityBar } from "@/data/navigation/site-navigation";
import { careersHubContent, careersPageFaq } from "@/data/site/careers-content";
import { careersHubImages } from "@/data/site/careers-hub-images";
import { careersLandingContent as page } from "@/data/site/careers-landing-content";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { careersPageSchema } from "@/lib/schema/careers-page";

const PATHNAME = "/careers/";
const BREADCRUMBS = [{ label: "Home", href: "/" }, { label: "Careers" }];

export const metadata: Metadata = buildPageMetadata({
  title: page.metaTitle,
  description: careersHubContent.metaDescription,
  pathname: PATHNAME,
});

/**
 * Careers recruitment landing page. It leads with the current opening and the
 * application, then points to the separate Installer Network registration for
 * future opportunities. Schema is WebPage + BreadcrumbList only: this is the
 * general careers page, so it never carries JobPosting even though an opening
 * exists (13-schema-markup-plan.md section 14). JobPosting lives only on the
 * individual opening page. The corporate office address comes from
 * `business.address` through `CorporateOffice`. The commercial path appears
 * only as a low-emphasis text handoff after the FAQ.
 */
export default function CareersPage() {
  return (
    <>
      <JsonLd
        schema={careersPageSchema({
          pathname: PATHNAME,
          h1: careersHubContent.h1,
          description: careersHubContent.metaDescription,
          breadcrumbs: BREADCRUMBS,
        })}
      />
      <Breadcrumbs items={BREADCRUMBS} />

      <ServicesHero
        id="careers-hub"
        h1={careersHubContent.h1}
        intro={careersHubContent.intro}
        primaryCta={page.hero.primaryCta}
        secondaryLink={page.hero.secondaryLink}
        qualifier={page.hero.qualifier}
        phone={{
          href: utilityBar.phoneHref,
          label: `${page.hero.callLabel} ${utilityBar.phoneLabel}`,
        }}
        phoneLocation="careers-hero"
        phoneJourney="recruitment"
        phoneEvent={null}
        scopeItems={page.hero.scopeItems}
        image={careersHubImages.hero}
      />

      {/*
        Current opening. Image left, content right from md; stacked on mobile
        with the image first, then the opening content. The image scrolls with
        the section and is never pinned. Uses the existing field-work slot
        (3 / 2) and renders the decorative fallback until a photo is approved.
        Every fact is HTML text. The disclaimer sits above the Apply button.
      */}
      <Section tone="subtle" width="site" labelledBy="careers-opening-heading">
        <div className="grid gap-8 md:grid-cols-[minmax(0,42fr)_minmax(0,58fr)] md:items-start md:gap-12">
          <ImageSlot slot={careersHubImages.fieldWork} className="md:self-center" />

          <div>
            <h2
              id="careers-opening-heading"
              className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
            >
              {page.opening.h2}
            </h2>
            <p className="mt-4 text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink-muted">
              {page.opening.summary}
            </p>

            <ul className="mt-6 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2">
              {page.opening.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg border-2 border-[var(--color-accent-blue-strong)] bg-surface p-4 text-[length:var(--text-body-lg)] leading-snug font-bold text-ink"
                >
                  <span aria-hidden="true" className="shrink-0 text-[var(--color-accent-blue-strong)]">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-[length:var(--text-body)] font-bold text-ink">
              Opening details
            </h3>
            <ul className="mt-3 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2">
              {page.opening.facts.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-border bg-surface p-4 text-[length:var(--text-body)] leading-snug text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
            <ul className="mt-4 flex list-none flex-col gap-2 p-0 text-[length:var(--text-body)] text-ink">
              {page.opening.details.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[0.15rem] shrink-0 font-bold">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 rounded-md border border-border bg-surface p-4 text-[length:var(--text-small)] leading-relaxed text-pretty text-ink-muted">
              {page.opening.disclaimer}
            </p>

            <div className="mt-6">
              <CtaButton cta={page.opening.applyCta} emphasis="primary" blockOnMobile />
            </div>
            <ul className="mt-3 flex list-none flex-col gap-x-6 p-0 sm:flex-row sm:flex-wrap">
              {page.opening.secondaryLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center gap-2 text-[length:var(--text-body)] font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4"
                  >
                    {item.label}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <FaqGroup
        id="careers-faq"
        accessibleHeading={page.faqHeading}
        layout="columns"
        content={{ h2: page.faqHeading, items: careersPageFaq }}
      />

      {/*
        Recruitment contact. A deep navy band, separate from the FAQ above and
        the commercial handoff below. Image left, light card right from md;
        stacked on mobile. The image is decorative and scrolls with the
        section. The phone link keeps the recruitment journey and emits no
        commercial call event. The two path links are text links, not buttons:
        the primary Apply action lives in the opening section.
      */}
      <Section tone="dark" width="site" density="compact" labelledBy="careers-contact-heading">
        <div className="grid gap-8 md:grid-cols-[minmax(0,42fr)_minmax(0,58fr)] md:items-center md:gap-12">
          <ImageSlot
            slot={careersHubImages.contact}
            className="border border-[var(--color-border-dark)]"
          />

          <div
            data-tone="light"
            className="rounded-lg border border-border border-l-4 border-l-[var(--color-brand-red)] bg-surface p-6 text-ink md:p-8"
          >
            <p className="mb-2 text-[length:var(--text-label)] font-semibold tracking-wide text-ink-muted uppercase">
              {page.contact.eyebrow}
            </p>
            <h2
              id="careers-contact-heading"
              className="text-[length:var(--text-h3)] leading-[1.15] font-bold text-balance text-ink"
            >
              {page.contact.h2}
            </h2>
            <p className="mt-4 text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted">
              {page.contact.body}
            </p>
            <p className="mt-3 text-[length:var(--text-small)] leading-relaxed text-pretty text-ink-muted">
              {page.contact.clarification}
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <PhoneButton
                href={utilityBar.phoneHref}
                label={utilityBar.phoneLabel}
                location="careers-contact"
                journey="recruitment"
                event={null}
                className="border-ink bg-surface text-ink hover:bg-surface-subtle"
              />
              <p className="text-[length:var(--text-body)] text-ink">{page.contact.hours}</p>
            </div>
            <CorporateOffice className="mt-4" />

            <div className="mt-6 border-t border-border pt-5">
              <h3 className="text-[length:var(--text-body)] font-bold text-ink">
                {page.contact.pathsHeading}
              </h3>
              <ul className="mt-2 flex list-none flex-col gap-3 p-0">
                {page.contact.paths.map((path) => (
                  <li key={path.href}>
                    <Link
                      href={path.href}
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
        </div>
      </Section>

      {/*
        Installer Network: a secondary, separate pathway. Image left, content
        right from md, stacked on mobile. Deliberately quieter than the opening
        above: a light surface, a text link, and no button. The image scrolls
        with the section and is never pinned.
      */}
      <Section tone="default" width="site" labelledBy="careers-network-heading">
        <div className="grid gap-8 md:grid-cols-[minmax(0,42fr)_minmax(0,58fr)] md:items-center md:gap-12">
          <ImageSlot slot={careersHubImages.networkBand} />

          <div>
            <p className="mb-3 text-[length:var(--text-label)] font-semibold tracking-wide text-[var(--color-brand-red)] uppercase">
              {page.network.eyebrow}
            </p>
            <h2
              id="careers-network-heading"
              className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
            >
              {page.network.h2}
            </h2>
            <p className="mt-5 text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted">
              {page.network.body}
            </p>
            <p className="mt-4">
              <Link
                href={page.network.link.href}
                className="inline-flex min-h-11 items-center gap-2 text-[length:var(--text-body)] font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4"
              >
                {page.network.link.label}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </p>
          </div>
        </div>
      </Section>

      {/*
        Commercial handoff: customers only, kept apart from the recruitment
        sections above. Content left, image right from md; content above the
        image on mobile. The primary link carries the commercial quote-click
        event; the secondary link is plain. No recruitment tracking, no form.
      */}
      <Section tone="subtle" width="site" density="compact" labelledBy="careers-handoff-heading">
        <div className="grid gap-8 md:grid-cols-[minmax(0,58fr)_minmax(0,42fr)] md:items-center md:gap-12">
          <div>
            <span
              aria-hidden="true"
              className="mb-4 block h-0.5 w-10 bg-[var(--color-brand-red)]"
            />
            <h2
              id="careers-handoff-heading"
              className="text-[length:var(--text-h3)] leading-[1.15] font-bold text-balance text-ink"
            >
              {page.handoff.h2}
            </h2>
            {page.handoff.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted"
              >
                {paragraph}
              </p>
            ))}
            <ul
              aria-label="Fleet installation services"
              className="mt-5 grid list-none grid-cols-1 gap-x-6 gap-y-2 p-0 text-[length:var(--text-body)] text-ink sm:grid-cols-2"
            >
              {page.handoff.services.map((service) => (
                <li key={service} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[0.15rem] shrink-0 font-bold">
                    •
                  </span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
              <CtaButton cta={page.handoff.primaryCta} emphasis="primary" blockOnMobile />
              <Link
                href={page.handoff.secondaryLink.href}
                className="inline-flex min-h-11 items-center gap-2 text-[length:var(--text-body)] font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4"
              >
                {page.handoff.secondaryLink.label}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>

          <ImageSlot slot={careersHubImages.commercialHandoff} />
        </div>
      </Section>
    </>
  );
}
