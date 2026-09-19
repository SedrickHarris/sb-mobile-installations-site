import type { Metadata } from "next";
import Link from "next/link";

import { TrackOnMount } from "@/components/analytics/TrackOnMount";
import { CorporateOffice } from "@/components/content/CorporateOffice";
import { FaqGroup } from "@/components/content/FaqGroup";
import { ServicesHero } from "@/components/content/ServicesHero";
import { SplitFeature } from "@/components/content/SplitFeature";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/schema/JsonLd";
import { CtaButton } from "@/components/ui/CtaButton";
import {
  activeTechnicianJob as job,
  applyCta,
  INSTALLER_NETWORK_PATH,
  JOBS_INDEX_PATH,
} from "@/data/jobs";
import { utilityBar } from "@/data/navigation/site-navigation";
import { careersHubImages } from "@/data/site/careers-hub-images";
import { AnalyticsEvent } from "@/lib/analytics/events";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { jobPostingPageSchema } from "@/lib/schema/job-posting";

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Careers", href: "/careers/" },
  { label: "Current Openings", href: JOBS_INDEX_PATH },
  { label: job.title },
];

export const metadata: Metadata = buildPageMetadata({
  title: job.title,
  description: job.metaDescription,
  pathname: job.path,
});

/**
 * The active opening page and the ONLY page that carries `JobPosting` schema.
 * Content comes from the job record (src/data/jobs), and the schema description
 * is built from that same record, so the two always match. No `validThrough`,
 * because no closing date is published.
 *
 * "Apply" points to the dedicated application page. The Installer Network is a
 * separate registration for future opportunities and is linked only as a
 * distinct option. The corporate office address is shown as a corporate
 * office, not a work location or walk-in facility.
 */
export default function ActiveOpeningPage() {
  return (
    <>
      <JsonLd schema={jobPostingPageSchema({ job, breadcrumbs: BREADCRUMBS })} />
      <TrackOnMount
        event={AnalyticsEvent.activeOpeningView}
        params={{ jobSlug: job.slug }}
      />
      <Breadcrumbs items={BREADCRUMBS} />

      <ServicesHero
        id="active-opening"
        h1={job.title}
        intro={job.intro}
        primaryCta={applyCta}
        qualifier="Applicants are accepted nationwide, and no closing date is currently published."
        phone={{
          href: utilityBar.phoneHref,
          label: `Call ${utilityBar.phoneLabel}`,
        }}
        phoneLocation="careers-job-hero"
        phoneJourney="recruitment"
        phoneEvent={null}
        scopeItems={job.heroScopeItems}
        image={careersHubImages.hero}
      />

      {job.sections.map((section, index) => (
        <SplitFeature
          key={section.h2}
          id={`opening-${index + 1}`}
          tone={index % 2 === 0 ? "default" : "subtle"}
          content={section}
        />
      ))}

      <Section tone="subtle" density="spacious" labelledBy="opening-apply-heading">
        <h2
          id="opening-apply-heading"
          className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
        >
          Ready to Apply?
        </h2>
        <p className="mt-4 text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink-muted">
          Complete the application for this opening. Applicants are accepted
          nationwide.
        </p>
        <p className="mt-4 rounded-md border border-border bg-surface p-4 text-[length:var(--text-small)] leading-relaxed text-ink">
          {job.disclaimer}
        </p>
        <div className="mt-6">
          <CtaButton cta={applyCta} emphasis="primary" blockOnMobile />
        </div>
        <p className="mt-6 text-[length:var(--text-small)] text-ink-muted">
          Looking for future opportunities instead? The{" "}
          <Link
            href={INSTALLER_NETWORK_PATH}
            className="font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4"
          >
            Installer Network
          </Link>{" "}
          is a separate registration and is not an application.
        </p>
      </Section>

      <FaqGroup
        id="opening-faq"
        accessibleHeading={`${job.title} questions`}
        content={{ h2: "Questions About This Opening", items: job.faq }}
      />

      <Section tone="subtle" density="compact" labelledBy="opening-contact-heading">
        <h2
          id="opening-contact-heading"
          className="text-[length:var(--text-h4)] font-bold text-ink"
        >
          Questions about this opening?
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
    </>
  );
}
