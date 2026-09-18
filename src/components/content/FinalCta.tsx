import { CtaPair } from "@/components/ui/CtaPair";
import { finalCtaMedia } from "@/data/site/final-cta-media";
import type { FinalCtaContent } from "@/types/content";

interface FinalCtaProps {
  readonly content: FinalCtaContent;
  readonly id: string;
}

/**
 * Closing call to action.
 *
 * A dark navy band signals the end of the page, distinct from every other
 * section tone. Section applies data-tone="dark" so the focus ring and text
 * color resolve correctly for this local context.
 *
 * CTA order matches the hero: the commercial CTA leads, per the
 * commercial-first override in 21-design-system.md section 27a.
 *
 * Background is a muted, looping, decorative video under a 55% black overlay,
 * matching the homepage hero. Reduced-motion users get the still frame. The
 * section is tall (min 26rem, 36rem from md) so more of the video shows.
 */
export function FinalCta({ content, id }: FinalCtaProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      data-tone="dark"
      aria-labelledby={headingId}
      className="relative isolate flex min-h-[26rem] items-center overflow-hidden bg-[var(--color-surface-dark)] px-5 py-16 text-[var(--color-text-on-dark)] md:min-h-[36rem] md:px-6 md:py-24"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={finalCtaMedia.poster}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <video
        aria-hidden="true"
        tabIndex={-1}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={finalCtaMedia.poster}
        className="absolute inset-0 -z-20 h-full w-full object-cover motion-reduce:hidden"
      >
        <source src={finalCtaMedia.video} type="video/mp4" />
      </video>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/55" />

      <div className="mx-auto w-full max-w-[780px] text-center">
        <h2
          id={headingId}
          className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-[var(--color-text-on-dark)]"
        >
          {content.h2}
        </h2>

        <div className="mt-8">
          <CtaPair
            primary={content.primaryCta}
            secondary={content.secondaryCta}
            center
          />
        </div>
      </div>
    </section>
  );
}
