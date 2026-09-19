import type { Metadata } from "next";
import Link from "next/link";

import { CorporateOffice } from "@/components/content/CorporateOffice";
import { FaqGroup } from "@/components/content/FaqGroup";
import { ServicesHero } from "@/components/content/ServicesHero";
import { SplitFeature } from "@/components/content/SplitFeature";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/schema/JsonLd";
import { utilityBar } from "@/data/navigation/site-navigation";
import { careersHubContent } from "@/data/site/careers-content";
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

      <SplitFeature id="careers-opening" tone="subtle" content={page.opening} />

      <SplitFeature id="careers-network" content={page.network} />

      <FaqGroup
        id="careers-faq"
        accessibleHeading={page.faqHeading}
        content={{ h2: page.faqHeading, items: careersHubContent.faq ?? [] }}
      />

      <Section tone="subtle" density="compact" labelledBy="careers-contact-heading">
        <h2
          id="careers-contact-heading"
          className="text-[length:var(--text-h4)] font-bold text-ink"
        >
          Questions about installer careers?
        </h2>
        <p className="mt-2 text-[length:var(--text-body)] text-ink-muted">
          Call{" "}
          <a
            href={utilityBar.phoneHref}
            className="font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4"
          >
            {utilityBar.phoneLabel}
          </a>
          , Monday-Friday, 8:00 AM-6:00 PM.
        </p>
        <CorporateOffice className="mt-6" />
      </Section>

      <Section tone="default" density="compact" labelledBy="careers-handoff-heading">
        <h2
          id="careers-handoff-heading"
          className="text-[length:var(--text-h4)] font-bold text-ink"
        >
          {page.handoff.h2}
        </h2>
        <p className="mt-2 text-[length:var(--text-body)] text-ink-muted">
          {page.handoff.body}
        </p>
        <ul className="mt-3 flex list-none flex-col gap-1 p-0">
          {page.handoff.links.map((item) => (
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
