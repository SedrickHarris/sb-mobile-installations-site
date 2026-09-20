import Link from "next/link";

import { CorporateOffice } from "@/components/content/CorporateOffice";
import { PhoneButton } from "@/components/layout/PhoneButton";
import { Section } from "@/components/layout/Section";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { utilityBar } from "@/data/navigation/site-navigation";
import { INSTALLER_NETWORK_PATH } from "@/data/jobs/routes";
import type { careersLandingContent } from "@/data/site/careers-landing-content";
import type { HubImageSlot } from "@/data/site/services-hub-images";
import { AnalyticsEvent } from "@/lib/analytics/events";

interface InstallerQuestionsProps {
  readonly content: (typeof careersLandingContent)["contact"];
  readonly image: HubImageSlot;
  /** Heading id, unique per page. */
  readonly headingId: string;
  /** Analytics location for the phone link. */
  readonly phoneLocation: string;
  /**
   * Tag the two path links with the recruitment journey and their existing
   * events. Off on `/careers/`, which renders them untagged.
   */
  readonly trackPaths?: boolean;
  /** Section background. Dark navy by default (the Careers treatment); `default` is white. */
  readonly tone?: "dark" | "default";
}

/**
 * "Have Questions About Installer Opportunities?" recruitment contact block,
 * shared by `/careers/` and `/contact/`. A deep navy band with a light card on
 * the left and a decorative image on the right (card first, then image, on
 * mobile). The image is decorative and scrolls with the section. The phone
 * link keeps the recruitment journey and emits no commercial call event. The
 * two path links are text links, not buttons: the primary Apply action lives
 * in the opening section.
 */
export function InstallerQuestions({
  content,
  image,
  headingId,
  phoneLocation,
  trackPaths = false,
  tone = "dark",
}: InstallerQuestionsProps) {
  return (
    <Section tone={tone} width="site" density="compact" labelledBy={headingId}>
      <div className="grid gap-8 md:grid-cols-[minmax(0,58fr)_minmax(0,42fr)] md:items-center md:gap-12">
        <div
          data-tone="light"
          className="rounded-lg border border-border border-l-4 border-l-[var(--color-brand-red)] bg-surface p-6 text-ink md:p-8"
        >
          <p className="mb-2 text-[length:var(--text-label)] font-semibold tracking-wide text-ink-muted uppercase">
            {content.eyebrow}
          </p>
          <h2
            id={headingId}
            className="text-[length:var(--text-h3)] leading-[1.15] font-bold text-balance text-ink"
          >
            {content.h2}
          </h2>
          <p className="mt-4 text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted">
            {content.body}
          </p>
          <p className="mt-3 text-[length:var(--text-small)] leading-relaxed text-pretty text-ink-muted">
            {content.clarification}
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <PhoneButton
              href={utilityBar.phoneHref}
              label={utilityBar.phoneLabel}
              location={phoneLocation}
              journey="recruitment"
              event={null}
              className="border-transparent bg-[var(--color-brand-red)] text-white hover:bg-[var(--color-brand-red-strong)] focus-visible:outline-[var(--color-brand-red-strong)]"
            />
            <p className="text-[length:var(--text-body)] text-ink">{content.hours}</p>
          </div>
          <CorporateOffice className="mt-4" />

          <div className="mt-6 border-t border-border pt-5">
            <h3 className="text-[length:var(--text-body)] font-bold text-ink">
              {content.pathsHeading}
            </h3>
            <ul className="mt-2 flex list-none flex-col gap-3 p-0">
              {content.paths.map((path) => (
                <li key={path.href}>
                  <Link
                    href={path.href}
                    {...(trackPaths
                      ? {
                          "data-journey": "recruitment",
                          "data-event":
                            path.href === INSTALLER_NETWORK_PATH
                              ? AnalyticsEvent.ctaInstallerNetworkClick
                              : AnalyticsEvent.ctaCareersClick,
                        }
                      : {})}
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

        <ImageSlot
          slot={image}
          className={
            tone === "dark"
              ? "border border-[var(--color-border-dark)]"
              : "border border-border"
          }
        />
      </div>
    </Section>
  );
}
