import { Section } from "@/components/layout/Section";
import { CtaButton } from "@/components/ui/CtaButton";
import type { ServiceImage } from "@/data/site/service-images";
import type { SectionContent } from "@/types/content";

interface ContentSectionProps {
  readonly content: SectionContent;
  readonly id: string;
  readonly tone?: "default" | "subtle";
  readonly density?: "compact" | "standard" | "spacious";
  readonly ctaEmphasis?: "primary" | "secondary";
  /**
   * Two-column layout: text left, `image` right. The media column renders
   * only when `image` is also supplied, since an empty image box is not
   * acceptable placeholder content.
   */
  readonly withMediaColumn?: boolean;
  /** Decorative image for the media column. Used with `withMediaColumn`. */
  readonly image?: ServiceImage;
  /**
   * Decorative full-bleed background image under a 55% black overlay. Turns
   * the section into a dark-tone surface: `tone` is ignored and text uses the
   * on-dark tokens. Ignored together with `withMediaColumn`.
   */
  readonly backgroundImage?: string;
}

/** Vertical padding per density; mirrors Section's densityClasses. */
const densityClasses = {
  compact: "py-10 md:py-14",
  standard: "py-12 md:py-20",
  spacious: "py-16 md:py-24",
} as const;

/**
 * A heading, a paragraph, and an optional CTA.
 *
 * Recruiting and commercial use identical structure, spacing, and density so
 * they read as two parallel journeys rather than two items in a list. They
 * are distinguished by order, heading, background, and CTA emphasis only.
 * Neither is visually heavier than the other.
 *
 * When the media column is enabled, the text column comes first in the DOM,
 * so reading order survives the collapse to a single column.
 *
 * A body supplied as an array renders one paragraph per entry. Paragraph
 * spacing matches the gap between the heading and the first paragraph, so a
 * multi-paragraph section keeps the same vertical rhythm as a single one.
 */
export function ContentSection({
  content,
  id,
  tone = "default",
  density = "standard",
  ctaEmphasis = "primary",
  withMediaColumn = false,
  image,
  backgroundImage,
}: ContentSectionProps) {
  const hasMedia = withMediaColumn && image !== undefined;
  const headingId = `${id}-heading`;
  const paragraphs =
    typeof content.body === "string" ? [content.body] : content.body;

  if (backgroundImage) {
    return (
      <section
        data-tone="dark"
        aria-labelledby={headingId}
        className={`relative isolate overflow-hidden bg-[var(--color-surface-dark)] px-5 text-[var(--color-text-on-dark)] md:px-6 ${densityClasses[density]}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={backgroundImage}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-black/55"
        />

        <div className="mx-auto max-w-[720px]">
          <h2
            id={headingId}
            className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-[var(--color-text-on-dark)]"
          >
            {content.h2}
          </h2>

          {paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-5 text-[length:var(--text-body)] leading-relaxed text-pretty text-[var(--color-text-on-dark)]"
            >
              {paragraph}
            </p>
          ))}

          {content.cta ? (
            <div className="mt-8">
              <CtaButton cta={content.cta} emphasis={ctaEmphasis} />
            </div>
          ) : null}
        </div>
      </section>
    );
  }

  return (
    <Section
      tone={tone}
      density={density}
      width={hasMedia ? "site" : "reading"}
      labelledBy={headingId}
    >
      <div
        className={
          hasMedia
            ? "grid gap-10 md:grid-cols-2 md:items-center md:gap-16"
            : ""
        }
      >
        <div>
          <h2
            id={headingId}
            className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
          >
            {content.h2}
          </h2>

          {paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-5 text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted"
            >
              {paragraph}
            </p>
          ))}

          {content.cta ? (
            <div className="mt-8">
              <CtaButton cta={content.cta} emphasis={ctaEmphasis} />
            </div>
          ) : null}
        </div>

        {hasMedia ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image.src}
            alt=""
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] h-auto w-full rounded-[var(--radius-lg)] object-cover object-[75%_50%]"
          />
        ) : null}
      </div>
    </Section>
  );
}
