import type { Metadata } from "next";
import Link from "next/link";

import { CorporateOffice } from "@/components/content/CorporateOffice";
import { FaqGroup } from "@/components/content/FaqGroup";
import { ServicesHero } from "@/components/content/ServicesHero";
import { SplitFeature } from "@/components/content/SplitFeature";
import { InstallerNetworkForm } from "@/components/forms/InstallerNetworkForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CardGrid } from "@/components/layout/CardGrid";
import { PhoneButton } from "@/components/layout/PhoneButton";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/schema/JsonLd";
import { Card } from "@/components/ui/Card";
import { INSTALLER_NETWORK_PATH } from "@/data/jobs";
import { utilityBar } from "@/data/navigation/site-navigation";
import { installerNetworkContent } from "@/data/site/careers-content";
import { careersHubPageContent as hub } from "@/data/site/careers-hub-content";
import { careersHubImages } from "@/data/site/careers-hub-images";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { careersPageSchema } from "@/lib/schema/careers-page";

const PATHNAME = INSTALLER_NETWORK_PATH;
const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Careers", href: "/careers/" },
  { label: "Mobile Installation Technician" },
];

export const metadata: Metadata = buildPageMetadata({
  title: hub.metaTitle,
  description: installerNetworkContent.metaDescription,
  pathname: PATHNAME,
});

const linkClass =
  "inline-flex min-h-11 items-center gap-2 font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4";

/**
 * Technician-interest landing page for the Installer Network
 * (`/careers/mobile-installation-technician/`).
 *
 * This is an interest page, not a job listing and not an application. The
 * Installer Network is a registration for future opportunities, separate from
 * the application for the current opening. The route keeps its original path
 * because the homepage and other pages already link here.
 *
 * Order: hero, context strip, who it is for, what the page is and is not,
 * service context, requirements and field-work context, the form, FAQ, then
 * low-emphasis links (current opening, commercial quote, related services).
 * The commercial form never renders here.
 *
 * Schema is WebPage + BreadcrumbList only. This is not an individual opening
 * page, so it never carries JobPosting (13-schema-markup-plan.md section 14).
 * No FAQPage. The hero visual is the decorative fallback until approved
 * photography exists. The corporate office address appears once, near the
 * form, from `business.address`.
 */
export default function InstallerNetworkPage() {
  return (
    <>
      <JsonLd
        schema={careersPageSchema({
          pathname: PATHNAME,
          h1: installerNetworkContent.h1,
          description: installerNetworkContent.metaDescription,
          breadcrumbs: BREADCRUMBS,
        })}
      />
      <Breadcrumbs items={BREADCRUMBS} />

      <ServicesHero
        id="installer-network"
        eyebrow="Installer Network"
        h1={installerNetworkContent.h1}
        intro={installerNetworkContent.intro}
        primaryCta={hub.hero.primaryCta}
        secondaryLink={{
          label: "Learn how the Installer Network works",
          href: "#network-answer-heading",
        }}
        qualifier={hub.hero.qualifier}
        phone={{
          href: utilityBar.phoneHref,
          label: `${hub.hero.callLabel} ${utilityBar.phoneLabel}`,
        }}
        phoneLocation="careers-hero"
        phoneJourney="recruitment"
        phoneEvent={null}
        scopeItems={hub.hero.scopeItems}
        image={careersHubImages.networkHero}
      />

      {/* Context strip */}
      <Section tone="subtle" width="site" labelledBy="network-context-heading">
        <h2
          id="network-context-heading"
          className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
        >
          {hub.contextStrip.h2}
        </h2>
        <div className="mt-8">
          <CardGrid columns={3}>
            {hub.contextStrip.cards.map((card) => (
              <Card key={card.title} padding="compact">
                <span
                  aria-hidden="true"
                  className="mb-3 block h-1 w-10 bg-[var(--color-brand-red)]"
                />
                <h3 className="text-[length:var(--text-h4)] font-bold text-ink">
                  {card.title}
                </h3>
                <p className="mt-2 text-[length:var(--text-body)] text-ink-muted">
                  {card.description}
                </p>
              </Card>
            ))}
          </CardGrid>
        </div>
      </Section>

      <SplitFeature id="network-fit" content={hub.fit} />

      {/* What the network is, and is not */}
      <SplitFeature id="network-answer" tone="subtle" content={hub.answer} />
      <Section tone="subtle" density="compact" labelledBy="network-boundary-heading">
        <h2 id="network-boundary-heading" className="sr-only">
          What this page is and is not
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-md border border-border bg-surface p-6">
            <h3 className="text-[length:var(--text-h4)] font-bold text-ink">
              {hub.boundary.isHeading}
            </h3>
            <ul className="mt-3 flex list-disc flex-col gap-2 pl-5 text-[length:var(--text-body)] text-ink-muted">
              {hub.boundary.isItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-md border border-border bg-surface p-6">
            <h3 className="text-[length:var(--text-h4)] font-bold text-ink">
              {hub.boundary.isNotHeading}
            </h3>
            <ul className="mt-3 flex list-disc flex-col gap-2 pl-5 text-[length:var(--text-body)] text-ink-muted">
              {hub.boundary.isNotItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Approved service context */}
      <Section tone="default" width="site" labelledBy="network-equipment-heading">
        <h2
          id="network-equipment-heading"
          className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
        >
          {hub.equipment.h2}
        </h2>
        <p className="mt-4 max-w-[720px] text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink-muted">
          {hub.equipment.intro}
        </p>
        <div className="mt-8">
          <CardGrid columns={3}>
            {hub.equipment.cards.map((card) => (
              <Card key={card.title} padding="compact">
                <h3 className="text-[length:var(--text-h4)] font-bold text-ink">
                  {card.title}
                </h3>
                <p className="mt-2 text-[length:var(--text-body)] text-ink-muted">
                  {card.description}
                </p>
              </Card>
            ))}
          </CardGrid>
        </div>
      </Section>

      <SplitFeature id="network-field-work" tone="subtle" content={hub.fieldWork} />

      {/* Stakeholder-approved requirements and form guidance (decision 0004) */}
      <SplitFeature id="network-requirements" content={hub.requirements} />
      <SplitFeature id="network-information" tone="subtle" content={hub.information} />
      <SplitFeature id="network-where" content={hub.where} />
      <SplitFeature id="network-after" tone="subtle" content={hub.after} />

      {/* Interest form. Focusable target for the hero CTA anchor. */}
      <div id="installer-network-form" tabIndex={-1} className="scroll-mt-24">
        <Section tone="default" density="spacious" labelledBy="network-join-heading">
          <h2
            id="network-join-heading"
            className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
          >
            {hub.join.h2}
          </h2>
          <p className="mt-4 text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink-muted">
            {hub.join.intro}
          </p>
          <p className="mt-4 rounded-md border border-border bg-surface-subtle p-4 text-[length:var(--text-small)] leading-relaxed text-ink">
            {hub.join.noGuarantee}
          </p>
          <div className="mt-8">
            <InstallerNetworkForm expectation={hub.join.expectation} />
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <p className="text-[length:var(--text-body)] text-ink-muted">
              {hub.join.phoneLead}
            </p>
            <PhoneButton
              href={utilityBar.phoneHref}
              label={utilityBar.phoneLabel}
              location="careers-form"
              journey="recruitment"
              event={null}
              className="border-ink bg-surface text-ink hover:bg-surface-subtle"
            />
          </div>
          <CorporateOffice className="mt-8" />
        </Section>
      </div>

      <FaqGroup
        id="network-faq"
        accessibleHeading={hub.faqHeading}
        content={{ h2: hub.faqHeading, items: installerNetworkContent.faq ?? [] }}
      />

      {/* Low-emphasis links after the technician content */}
      <Section tone="default" density="compact" labelledBy="network-handoff-heading">
        <h2
          id="network-handoff-heading"
          className="text-[length:var(--text-h4)] font-bold text-ink"
        >
          {hub.handoff.h2}
        </h2>
        <p className="mt-2 text-[length:var(--text-body)] text-ink-muted">
          {hub.handoff.body}
        </p>
        <ul className="mt-3 flex list-none flex-col gap-1 p-0">
          {hub.handoff.links.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={linkClass}>
                {item.label}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </li>
          ))}
        </ul>

        <h2 className="mt-8 text-[length:var(--text-h4)] font-bold text-ink">
          {hub.openings.h2}
        </h2>
        <p className="mt-2 text-[length:var(--text-body)] text-ink-muted">
          {hub.openings.body}
        </p>
        <p className="mt-3">
          <Link href={hub.openings.link.href} className={linkClass}>
            {hub.openings.link.label}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>

        <h2 className="mt-8 text-[length:var(--text-h4)] font-bold text-ink">
          {hub.relatedLinks.h2}
        </h2>
        <ul className="mt-3 flex list-none flex-col gap-1 p-0">
          {hub.relatedLinks.links.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={linkClass}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
