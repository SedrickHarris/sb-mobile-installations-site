import Link from "next/link";

import { CardGrid } from "@/components/layout/CardGrid";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { CtaButton } from "@/components/ui/CtaButton";
import { whyChooseUsImages } from "@/data/site/why-choose-us-images";
import type { WhyChooseUsContent } from "@/types/content";

interface WhyChooseUsSplitProps {
  readonly content: WhyChooseUsContent;
  readonly id: string;
}

const textLinkClasses =
  "inline-flex min-h-11 items-center font-semibold underline underline-offset-4";

/**
 * Confirmed differentiators only: nationwide reach, in business since 2011,
 * on-site model, direct coordination with independent contractor technicians.
 * See plan section 7.
 *
 * Subtle tone, so it reads as its own band after the white Who We Serve
 * section rather than running into it. The customer quote CTA and the
 * technician-network link are separate journeys: the quote CTA sits in the
 * commercial panel, and the Installer Network link is a visually secondary
 * line below a divider. No FAQ content is repeated here.
 */
export function WhyChooseUsSplit({ content, id }: WhyChooseUsSplitProps) {
  const headingId = `${id}-heading`;
  const listHeadingId = `${id}-fleet-managers`;

  return (
    <Section tone="subtle" width="site" labelledBy={headingId}>
      <p className="text-[length:var(--text-body)] font-semibold text-ink-muted">
        {content.eyebrow}
      </p>
      <h2
        id={headingId}
        className="mt-2 text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
      >
        {content.h2}
      </h2>
      <p className="mt-4 max-w-[720px] text-[length:var(--text-body)] leading-relaxed text-ink-muted">
        {content.intro}
      </p>

      <div className="mt-10">
        <CardGrid columns={4}>
          {content.items.map((item) => {
            const image = whyChooseUsImages[item.title];

            return (
              <Card key={item.title} tone="light" padding="none">
                {image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={image.src}
                    alt=""
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] h-auto w-full object-cover"
                  />
                ) : null}
                <div className="p-6">
                  <h3 className="text-[length:var(--text-h4)] font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[length:var(--text-small)] leading-relaxed text-ink-muted">
                    {item.body}
                  </p>
                </div>
              </Card>
            );
          })}
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

        <div className="flex flex-col justify-center rounded-lg border border-border bg-surface p-6 md:p-8">
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

      <p className="mt-10 border-t border-border pt-6 text-[length:var(--text-small)] text-ink-muted">
        {content.installerNetwork.prompt}{" "}
        <Link
          href={content.installerNetwork.link.href}
          data-journey={content.installerNetwork.link.journey}
          data-event={content.installerNetwork.link.event}
          className={`${textLinkClasses} text-ink hover:text-[var(--color-accent-blue-strong)]`}
        >
          {content.installerNetwork.link.label}
        </Link>
      </p>
    </Section>
  );
}
