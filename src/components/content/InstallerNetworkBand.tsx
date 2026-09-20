import Link from "next/link";

import { Section } from "@/components/layout/Section";
import { ImageSlot } from "@/components/ui/ImageSlot";
import type { HubImageSlot } from "@/data/site/services-hub-images";
import type { HubLink } from "@/types/service-content";

interface InstallerNetworkBandProps {
  readonly content: {
    readonly eyebrow: string;
    readonly h2: string;
    readonly body: string;
    readonly link: HubLink;
  };
  readonly image: HubImageSlot;
  readonly headingId: string;
}

/**
 * Installer Network band, the same markup as the "Installer Network" section
 * on the Careers page (src/app/careers/page.tsx): image left, content right
 * from md, stacked on mobile with the content first. A secondary, separate
 * pathway: a light surface, one text link, no button, no form. The image
 * scrolls with the section and is never pinned.
 *
 * Copy and image arrive as props from the Careers data, so this page and the
 * Careers page cannot drift apart.
 */
export function InstallerNetworkBand({
  content,
  image,
  headingId,
}: InstallerNetworkBandProps) {
  return (
    <Section tone="default" width="site" labelledBy={headingId}>
      <div className="grid gap-8 md:grid-cols-[minmax(0,42fr)_minmax(0,58fr)] md:items-center md:gap-12">
        <ImageSlot slot={image} />

        <div>
          <p className="mb-3 text-[length:var(--text-label)] font-semibold tracking-wide text-[var(--color-brand-red)] uppercase">
            {content.eyebrow}
          </p>
          <h2
            id={headingId}
            className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
          >
            {content.h2}
          </h2>
          <p className="mt-5 text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted">
            {content.body}
          </p>
          <p className="mt-4">
            <Link
              href={content.link.href}
              className="inline-flex min-h-11 items-center gap-2 text-[length:var(--text-body)] font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4"
            >
              {content.link.label}
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </p>
        </div>
      </div>
    </Section>
  );
}
