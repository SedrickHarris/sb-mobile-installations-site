import Link from "next/link";

import { PhoneButton } from "@/components/layout/PhoneButton";
import { CtaButton } from "@/components/ui/CtaButton";
import { ImageSlot } from "@/components/ui/ImageSlot";
import type { HubImageSlot } from "@/data/site/services-hub-images";
import type { Cta } from "@/types/content";
import type { HubLink } from "@/types/service-content";

interface ServicesHeroProps {
  readonly id: string;
  readonly h1: string;
  readonly intro: string;
  readonly primaryCta: Cta;
  readonly qualifier: string;
  readonly phone: { readonly href: string; readonly label: string };
  /** Right-column image. Omit when the hero uses a background video instead. */
  readonly image?: HubImageSlot;
  /**
   * Decorative looping background video under a 55% black overlay. The poster
   * is the still frame shown while the video loads and, when the visitor
   * prefers reduced motion, in place of the video.
   */
  readonly backgroundVideo?: { readonly src: string; readonly poster: string };
  /** Low-emphasis text link under the buttons, e.g. a rollout route. */
  readonly secondaryLink?: HubLink;
  /** Short scope strip below the hero columns. Confirmed claims only. */
  readonly scopeItems?: readonly string[];
  /**
   * Load the hero image eagerly. Off by default: set it only once an approved
   * image exists and is the real above-the-fold LCP candidate. The decorative
   * fallback renders no `img`, so it never needs this.
   */
  readonly priorityImage?: boolean;
  /** Analytics location for the phone button. Defaults to the services hero. */
  readonly phoneLocation?: string;
  /** Journey for the phone button. Defaults to commercial. */
  readonly phoneJourney?: "commercial" | "recruitment";
  /** Event for the phone button. `null` emits none. Defaults to the commercial call event. */
  readonly phoneEvent?: string | null;
}

/**
 * Commercial hub hero: navy surface, two columns from md up. Used by the
 * services and industries hubs.
 *
 * Text comes first in the DOM, so on mobile the H1, intro, and both CTAs sit
 * above the image and the primary action stays near the fold, whether or not
 * an image exists. The commercial CTA leads; the phone button is the
 * fallback. Phone details arrive as props, never embedded here.
 */
export function ServicesHero({
  id,
  h1,
  intro,
  primaryCta,
  qualifier,
  phone,
  image,
  backgroundVideo,
  secondaryLink,
  scopeItems,
  priorityImage = false,
  phoneLocation = "services-hero",
  phoneJourney,
  phoneEvent,
}: ServicesHeroProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      data-tone="dark"
      aria-labelledby={headingId}
      className={`${backgroundVideo ? "relative isolate overflow-hidden " : ""}bg-[var(--color-surface-dark)] px-5 py-12 text-[var(--color-text-on-dark)] md:px-6 md:py-20`}
    >
      {backgroundVideo ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={backgroundVideo.poster}
            alt=""
            aria-hidden="true"
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
            poster={backgroundVideo.poster}
            className="absolute inset-0 -z-20 h-full w-full object-cover motion-reduce:hidden"
          >
            <source src={backgroundVideo.src} type="video/mp4" />
          </video>
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/55" />
        </>
      ) : null}
      <div
        className={`mx-auto max-w-[1280px] ${image ? "grid gap-10 md:grid-cols-2 md:items-center md:gap-16" : ""}`}
      >
        <div className={image ? "" : "max-w-[780px]"}>
          <h1
            id={headingId}
            className="text-[length:var(--text-h1)] leading-[1.08] font-bold text-balance text-[var(--color-text-on-dark)]"
          >
            {h1}
          </h1>
          <p className="mt-5 text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-[var(--color-text-on-dark)]/90">
            {intro}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <CtaButton cta={primaryCta} emphasis="primary" blockOnMobile />
            <PhoneButton
              href={phone.href}
              label={phone.label}
              location={phoneLocation}
              journey={phoneJourney}
              event={phoneEvent}
              className="w-full border-white/60 bg-transparent text-white hover:bg-white/10 sm:w-auto"
            />
          </div>

          {secondaryLink ? (
            <p className="mt-4">
              <Link
                href={secondaryLink.href}
                className="inline-flex min-h-11 items-center gap-2 text-[length:var(--text-body)] font-semibold text-[var(--color-text-on-dark)] underline underline-offset-4"
              >
                {secondaryLink.label}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </p>
          ) : null}

          <p
            className={`${secondaryLink ? "mt-2" : "mt-4"} text-[length:var(--text-small)] text-[var(--color-text-on-dark)]/80`}
          >
            {qualifier}
          </p>
        </div>

        {image ? <ImageSlot slot={image} priority={priorityImage} /> : null}
      </div>

      {scopeItems && scopeItems.length > 0 ? (
        <ul className="mx-auto mt-10 flex max-w-[1280px] list-none flex-wrap gap-x-8 gap-y-2 border-t border-[var(--color-border-dark)] p-0 pt-6 text-[length:var(--text-small)] font-semibold text-[var(--color-text-on-dark)]/90">
          {scopeItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
