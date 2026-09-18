import type { Metadata } from "next";
import Link from "next/link";

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
import { utilityBar } from "@/data/navigation/site-navigation";
import { careersHubContent } from "@/data/site/careers-content";
import { careersHubPageContent as hub } from "@/data/site/careers-hub-content";
import { careersHubImages } from "@/data/site/careers-hub-images";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { careersPageSchema } from "@/lib/schema/careers-page";

const PATHNAME = "/careers/";
const BREADCRUMBS = [{ label: "Home", href: "/" }, { label: "Careers" }];

export const metadata: Metadata = buildPageMetadata({
  title: hub.metaTitle,
  description: careersHubContent.metaDescription,
  pathname: PATHNAME,
});

/**
 * Installer Network conversion page, in four visual chapters: understand the
 * network, understand the work context, prepare your information, join the
 * network. This is an opt-in, no-guarantee pathway, never a job listing:
 * schema is WebPage + BreadcrumbList only (no JobPosting, no FAQPage), and
 * the copy carries no pay, schedule, hours, certification, or platform-brand
 * language. The commercial path appears only as a low-emphasis text handoff
 * after the FAQ.
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
        primaryCta={hub.hero.primaryCta}
        qualifier={hub.hero.qualifier}
        phone={{
          href: utilityBar.phoneHref,
          label: `${hub.hero.callLabel} ${utilityBar.phoneLabel}`,
        }}
        phoneLocation="careers-hero"
        phoneJourney="recruitment"
        phoneEvent={null}
        scopeItems={hub.hero.scopeItems}
        image={careersHubImages.hero}
      />

      {/* Chapter 1: understand the network */}
      <SplitFeature
        id="careers-answer"
        eyebrow={hub.chapters.network}
        content={hub.answer}
      />
      <SplitFeature id="careers-fit" tone="subtle" content={hub.fit} />

      {/* Chapter 2: understand the work context */}
      <SplitFeature
        id="careers-requirements"
        eyebrow={hub.chapters.work}
        content={hub.requirements}
      />

      <Section tone="subtle" width="site" labelledBy="careers-equipment-heading">
        <h2
          id="careers-equipment-heading"
          className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
        >
          {hub.equipment.h2}
        </h2>
        <p className="mt-4 max-w-[720px] text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink-muted">
          {hub.equipment.intro}
        </p>
        <div className="mt-8">
          <CardGrid columns={2}>
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

      <SplitFeature
        id="careers-field-work"
        tone="dark"
        content={hub.fieldWork}
        slot={careersHubImages.fieldWork}
        mediaSide="left"
      />

      {/* Chapter 3: prepare your information */}
      <SplitFeature
        id="careers-information"
        tone="subtle"
        eyebrow={hub.chapters.prepare}
        content={hub.information}
      />
      <SplitFeature id="careers-where" content={hub.where} />
      <SplitFeature id="careers-after" tone="subtle" content={hub.after} />

      {/* Chapter 4: join the network. Focusable target for the hero CTA anchor. */}
      <div id="installer-network-form" tabIndex={-1} className="scroll-mt-24">
        <Section
          tone="default"
          density="spacious"
          labelledBy="careers-join-heading"
        >
          <p className="mb-3 text-[length:var(--text-label)] font-semibold tracking-wide text-[var(--color-brand-red)] uppercase">
            {hub.chapters.join}
          </p>
          <h2
            id="careers-join-heading"
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
            <InstallerNetworkForm />
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
        </Section>
      </div>

      <FaqGroup
        id="careers-faq"
        accessibleHeading={hub.faqHeading}
        content={{ h2: hub.faqHeading, items: careersHubContent.faq ?? [] }}
      />

      <Section tone="default" density="compact" labelledBy="careers-handoff-heading">
        <h2
          id="careers-handoff-heading"
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
              <Link
                href={item.href}
                className="inline-flex min-h-11 items-center gap-2 font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4"
              >
                {item.label}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
