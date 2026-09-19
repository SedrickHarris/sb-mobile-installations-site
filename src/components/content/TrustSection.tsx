import Link from "next/link";

import { CardGrid } from "@/components/layout/CardGrid";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { CtaButton } from "@/components/ui/CtaButton";
import type { ServiceImage } from "@/data/site/service-images";
import type { TrustContent } from "@/types/content";

interface TrustSectionProps {
  readonly content: TrustContent;
  readonly id: string;
  /** Decorative image beside the intro. The copy carries the claim. */
  readonly image: ServiceImage;
}

const textLinkClasses =
  "inline-flex min-h-11 items-center font-semibold underline underline-offset-4";

/**
 * Homepage "Why SB Mobile Installations" block.
 *
 * Two-column intro (image left, text right; the text comes first in the DOM
 * so reading order survives the single-column collapse), then four compact
 * benefit blocks, a fleet-manager list beside the commercial CTA panel, and
 * one visually secondary Installer Network button below a divider.
 *
 * The customer quote CTA and the technician-network link are separate
 * journeys with separate routes and events. All copy comes from
 * `homepageContent.trust`. No FAQ content is repeated here.
 */
export function TrustSection({ content, id, image }: TrustSectionProps) {
  const headingId = `${id}-heading`;
  const listHeadingId = `${id}-fleet-managers`;

  return (
    <Section tone="default" width="site" labelledBy={headingId}>
      <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div className="md:order-2">
          <h2
            id={headingId}
            className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
          >
            {content.h2}
          </h2>
          <p className="mt-5 text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted">
            {content.intro}
          </p>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.src}
          alt=""
          aria-hidden="true"
          width={image.width}
          height={image.height}
          loading="lazy"
          decoding="async"
          className="aspect-[4/3] h-auto w-full rounded-[var(--radius-lg)] object-cover object-[75%_50%]"
        />
      </div>

      <div className="mt-12">
        <CardGrid columns={4}>
          {content.benefits.map((benefit) => (
            <Card key={benefit.title} tone="light" padding="compact">
              <h3 className="text-[length:var(--text-h4)] font-semibold text-ink">
                {benefit.title}
              </h3>
              <p className="mt-2 text-[length:var(--text-small)] leading-relaxed text-ink-muted">
                {benefit.body}
              </p>
            </Card>
          ))}
        </CardGrid>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <h3
            id={listHeadingId}
            className="text-[length:var(--text-h4)] font-semibold text-ink"
          >
            {content.fleetManagers.heading}
          </h3>
          <ul
            aria-labelledby={listHeadingId}
            className="mt-4 flex list-disc flex-col gap-2 pl-5 text-[length:var(--text-body)] leading-relaxed text-ink-muted marker:text-ink-muted"
          >
            {content.fleetManagers.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-center rounded-lg border border-border bg-surface-subtle p-6 md:p-8">
          <h3 className="text-[length:var(--text-h4)] font-semibold text-ink">
            {content.cta.heading}
          </h3>
          <p className="mt-2 text-[length:var(--text-body)] leading-relaxed text-ink-muted">
            {content.cta.body}
          </p>
          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <CtaButton cta={content.cta.primary} emphasis="primary" blockOnMobile />
            <Link
              href={content.cta.servicesLink.href}
              data-journey="commercial"
              className={`${textLinkClasses} text-[var(--color-accent-blue-strong)] hover:text-ink`}
            >
              {content.cta.servicesLink.label}
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 text-[length:var(--text-small)] text-ink-muted sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
        <p>{content.installerNetwork.prompt}</p>
        <CtaButton cta={content.installerNetwork.link} emphasis="secondary" blockOnMobile />
      </div>
    </Section>
  );
}
