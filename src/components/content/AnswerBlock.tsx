import { Section } from "@/components/layout/Section";
import type { ServiceImage } from "@/data/site/service-images";
import type { DirectAnswerContent } from "@/types/content";

interface AnswerBlockProps {
  readonly content: DirectAnswerContent;
  /** Decorative image for the left column. Omit for a text-only block. */
  readonly image?: ServiceImage;
}

/**
 * Direct answer block.
 *
 * A decorative image on the left and text on the right, directly under the
 * hero. No card, no border, no heading. The default tone gives a clean break
 * from the hero and from the subtle-toned section that follows.
 *
 * The text column comes first in the DOM and is moved to the right with
 * `md:order-2`, so reading order survives the collapse to a single column on
 * small screens.
 *
 * The paragraph is self-contained so an answer engine can lift it whole.
 * See 12-aeo-geo-llm-optimization.md.
 */
export function AnswerBlock({ content, image }: AnswerBlockProps) {
  const paragraph = (
    <p className="text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink">
      {content.body}
    </p>
  );

  if (!image) {
    return <Section tone="default">{paragraph}</Section>;
  }

  return (
    <Section tone="default" width="site">
      <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div className="md:order-2">{paragraph}</div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.src}
          alt=""
          width={image.width}
          height={image.height}
          loading="lazy"
          decoding="async"
          className="aspect-[4/3] h-auto w-full rounded-[var(--radius-lg)] object-cover object-[35%_50%]"
        />
      </div>
    </Section>
  );
}
