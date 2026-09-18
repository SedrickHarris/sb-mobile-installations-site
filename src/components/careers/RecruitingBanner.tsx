import Link from "next/link";
import { CtaButton } from "@/components/ui/CtaButton";
import type { RecruitingBannerContent } from "@/types/content";

interface RecruitingBannerProps {
  readonly content: RecruitingBannerContent;
  readonly id: string;
  /** Decorative video and still. Null renders the gradient panel, no request. */
  readonly media: { readonly video: string; readonly poster: string } | null;
}

/**
 * Installer Network recruitment feature block, homepage placement.
 *
 * A dark two-column section so the recruiting pathway reads as a distinct
 * feature rather than a notification card, per the commercial-first override
 * in 01-business-source-of-truth.md section 32 (visible secondary journey,
 * journey separation unchanged).
 *
 * The CTA is primary here because it is the single conversion target of this
 * section. The heading is deliberately not a link. The SB red accent line is
 * decorative only (red on navy fails text contrast), never carries meaning.
 * The disclosure sits in its own in-flow panel, not fine print.
 *
 * The media is decorative: a muted, looping video over its still frame, both
 * hidden from the accessibility tree (empty alt on the still). Reduced-motion
 * users get the still frame. With no media the panel falls back to a gradient
 * and makes no request.
 */
export function RecruitingBanner({ content, id, media }: RecruitingBannerProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      data-tone="dark"
      aria-labelledby={headingId}
      className="bg-[var(--color-surface-dark)] px-5 py-12 text-[var(--color-text-on-dark)] md:px-6 md:py-20"
    >
      <div data-reveal-group className="mx-auto grid max-w-[1280px] gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-14">
        <div>
          <p className="flex items-center gap-3 text-[length:var(--text-small)] font-semibold tracking-widest uppercase">
            <span
              aria-hidden="true"
              className="h-0.5 w-8 bg-[var(--color-brand-red)]"
            />
            {content.eyebrow}
          </p>
          <h2
            id={headingId}
            className="mt-4 text-[length:var(--text-h2)] leading-tight font-bold text-balance"
          >
            {content.h2}
          </h2>
          <p className="mt-4 text-[length:var(--text-body-lg)] leading-relaxed text-[var(--color-text-on-dark)]/85">
            {content.body}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {content.highlights.map((item) => (
              <li
                key={item}
                className="rounded-full border border-[var(--color-border-dark)] bg-[var(--color-surface-dark-raised)] px-4 py-2 text-[length:var(--text-small)]"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <CtaButton cta={content.cta} emphasis="primary" blockOnMobile />
            <p className="mt-4 text-[length:var(--text-body)]">
              <Link
                href={content.secondaryLink.href}
                className="inline-flex min-h-11 items-center underline underline-offset-4"
              >
                {content.secondaryLink.label}
              </Link>
            </p>
          </div>

          <div className="mt-6 flex gap-3 rounded-lg border border-[var(--color-border-dark)] bg-[var(--color-surface-dark-raised)] p-4">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="mt-0.5 h-5 w-5 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-5M12 8h.01" />
            </svg>
            <p className="text-[length:var(--text-small)] leading-relaxed">
              <strong className="font-semibold">Important:</strong>{" "}
              {content.disclosure}
            </p>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="relative isolate min-h-64 overflow-hidden rounded-xl border border-[var(--color-border-dark)] bg-gradient-to-br from-[var(--color-surface-dark-raised)] to-[var(--color-surface-dark)] md:min-h-[26rem]"
        >
          {media ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={media.poster}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-right"
              />
              <video
                aria-hidden="true"
                tabIndex={-1}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={media.poster}
                className="absolute inset-0 h-full w-full object-cover object-right motion-reduce:hidden"
              >
                <source src={media.video} type="video/mp4" />
              </video>
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}
