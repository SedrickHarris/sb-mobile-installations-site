import Link from "next/link";

import { Section } from "@/components/layout/Section";
import { ImageSlot } from "@/components/ui/ImageSlot";
import type { HubImageSlot } from "@/data/site/services-hub-images";
import type { HubList, HubSplitSection } from "@/types/service-content";

type Tone = "default" | "subtle" | "dark";

interface SplitFeatureProps {
  readonly id: string;
  readonly content: HubSplitSection;
  readonly tone?: Tone;
  /** Image slot for the media column. Omit for a single reading-width column. */
  readonly slot?: HubImageSlot;
  readonly mediaSide?: "left" | "right";
  /**
   * Small chapter label above the heading. Not a heading. SB red on navy is
   * 2.62:1, so dark surfaces use the light-on-dark text color instead.
   */
  readonly eyebrow?: string;
  /**
   * Vertical alignment of the two columns. Defaults to centered. Alignment
   * only: section media always scrolls with the content and is never pinned
   * (CLAUDE.md section 8).
   */
  readonly align?: "center" | "top";
  /**
   * Show the image above the text on mobile. The DOM order stays text first,
   * so this is a visual reorder only. Off by default.
   */
  readonly mediaFirstOnMobile?: boolean;
  /** "narrow" gives the media column about 45% of the row instead of 50%. */
  readonly mediaShare?: "even" | "narrow";
  /** Vertical padding of the section. Defaults to the Section default. */
  readonly density?: "compact" | "standard" | "spacious";
  /**
   * Decorative text-free photo behind the section, under a 55% black overlay.
   * Use with `tone="dark"` so the copy is light on the darkened photo.
   */
  readonly backgroundImage?: {
    readonly src: string;
    readonly width: number;
    readonly height: number;
  };
  readonly backgroundPosition?: "left-bottom" | "center";
  /**
   * Optional animated media for the media column, used in place of `slot`'s
   * image. Muted, looping, inline, no preload, hidden from assistive tech
   * unless `label` is set. The poster always renders beneath the video and is
   * what reduced-motion users and blocked-autoplay browsers see. Width and
   * height reserve the box so nothing shifts when the media loads.
   */
  readonly video?: {
    readonly src: string;
    readonly poster: string;
    readonly width: number;
    readonly height: number;
    /** Accessible name when the video carries information. Omit when decorative. */
    readonly label?: string;
  };
}

/**
 * Heading, paragraphs, optional lists and links, with an optional image slot
 * beside them. Used for the services hub capability, nationwide, and
 * project-intake sections so they share one structure.
 *
 * The text column comes first in the DOM. When the media sits on the left it
 * is reordered visually from md up, so reading order survives the collapse to
 * one column. Links use descriptive anchor text supplied by the caller.
 */
export function SplitFeature({
  id,
  content,
  tone = "default",
  slot,
  mediaSide = "right",
  eyebrow,
  align = "center",
  mediaFirstOnMobile = false,
  mediaShare = "even",
  density,
  video,
  backgroundImage,
  backgroundPosition,
}: SplitFeatureProps) {
  const headingId = `${id}-heading`;
  const hasMedia = Boolean(slot ?? video);
  const dark = tone === "dark";

  const heading = dark
    ? "text-[var(--color-text-on-dark)]"
    : "text-ink";
  const body = dark
    ? "text-[var(--color-text-on-dark)]/90"
    : "text-ink-muted";
  const link = dark
    ? "text-[var(--color-text-on-dark)]"
    : "text-[var(--color-accent-blue-strong)]";

  return (
    <Section
      tone={tone}
      width={hasMedia ? "site" : "reading"}
      density={density}
      labelledBy={headingId}
      backgroundImage={backgroundImage}
      backgroundOverlay={Boolean(backgroundImage)}
      backgroundPosition={backgroundPosition}
    >
      <div
        className={
          hasMedia
            ? `grid gap-10 md:gap-16 ${
                mediaShare === "narrow"
                  ? mediaSide === "left"
                    ? "md:grid-cols-[minmax(0,9fr)_minmax(0,11fr)]"
                    : "md:grid-cols-[minmax(0,11fr)_minmax(0,9fr)]"
                  : "md:grid-cols-2"
              } ${
                align === "top" ? "md:items-start" : "md:items-center"
              }`
            : ""
        }
      >
        <div className={hasMedia && mediaSide === "left" ? "md:order-2" : ""}>
          {eyebrow ? (
            <p
              className={`mb-3 text-[length:var(--text-label)] font-semibold tracking-wide uppercase ${
                dark
                  ? "text-[var(--color-text-on-dark)]/80"
                  : "text-[var(--color-brand-red)]"
              }`}
            >
              {eyebrow}
            </p>
          ) : null}
          <h2
            id={headingId}
            className={`text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance ${heading}`}
          >
            {content.h2}
          </h2>

          {content.body.map((paragraph) => (
            <p
              key={paragraph}
              className={`mt-5 text-[length:var(--text-body)] leading-relaxed text-pretty ${body}`}
            >
              {paragraph}
            </p>
          ))}

          {content.lists && content.lists.length > 0 ? (
            <div
              className={`mt-6 grid gap-6 ${
                content.lists.length > 1 ? "sm:grid-cols-2" : ""
              }${
                content.listPanel
                  ? dark
                    ? " rounded-lg border border-[var(--color-border-dark)] bg-[var(--color-surface-dark-raised)] p-6"
                    : " rounded-lg border border-border bg-surface p-6"
                  : ""
              }`}
            >
              {content.lists.map((list) => (
                <FeatureList
                  key={list.heading ?? list.items[0]}
                  list={list}
                  dark={dark}
                />
              ))}
            </div>
          ) : null}

          {content.footnotes?.map((note) => (
            <p
              key={note}
              className={
                content.footnoteCallout
                  ? `mt-6 border-l-4 py-1 pl-4 text-[length:var(--text-body)] leading-relaxed text-pretty ${
                      dark
                        ? "border-[var(--color-text-on-dark)]/60 text-[var(--color-text-on-dark)]/90"
                        : "border-[var(--color-accent-blue-strong)] text-ink"
                    }`
                  : `mt-4 text-[length:var(--text-small)] leading-relaxed text-pretty ${
                      dark ? "text-[var(--color-text-on-dark)]/80" : "text-ink-muted"
                    }`
              }
            >
              {note}
            </p>
          ))}

          {content.links && content.links.length > 0 ? (
            <ul
              className={`mt-6 flex list-none p-0 ${
                content.linksAsButtons ? "flex-col gap-3" : "flex-col gap-1"
              }`}
            >
              {content.links.map((item, index) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={
                      content.linksAsButtons
                        ? `flex min-h-12 items-center justify-between gap-3 rounded-lg border-2 px-5 py-3 text-[length:var(--text-body)] font-semibold ${
                            dark
                              ? "border-[var(--color-text-on-dark)]/70 hover:bg-white/10"
                              : "border-[var(--color-accent-blue-strong)] hover:bg-[var(--color-accent-blue-strong)]/5"
                          } ${link}`
                        : `inline-flex min-h-11 items-center gap-2 text-[length:var(--text-body)] underline underline-offset-4 ${
                            content.primaryLink && index > 0
                              ? "font-normal"
                              : "font-semibold"
                          } ${link}`
                    }
                  >
                    {item.label}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}

          {content.closing?.map((paragraph) => (
            <p
              key={paragraph}
              className={`mt-6 text-[length:var(--text-body)] leading-relaxed text-pretty ${body}`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {hasMedia ? (
          <div className={mediaFirstOnMobile ? "order-first md:order-none" : ""}>
            {video ? (
              <div
                {...(video.label
                  ? { role: "img", "aria-label": video.label }
                  : { "aria-hidden": true })}
                className="relative overflow-hidden rounded-lg"
                style={{ aspectRatio: `${video.width} / ${video.height}` }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={video.poster}
                  alt=""
                  width={video.width}
                  height={video.height}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <video
                  aria-hidden="true"
                  tabIndex={-1}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster={video.poster}
                  className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
                >
                  <source src={video.src} type="video/mp4" />
                </video>
              </div>
            ) : slot ? (
              <ImageSlot slot={slot} />
            ) : null}
          </div>
        ) : null}
      </div>
    </Section>
  );
}

function FeatureList({
  list,
  dark,
}: {
  readonly list: HubList;
  readonly dark: boolean;
}) {
  const checklist = list.style === "checklist";
  const labeled = list.style === "labeled";

  return (
    <div>
      {list.heading ? (
        <h3
          className={`text-[length:var(--text-body)] font-bold ${
            dark ? "text-[var(--color-text-on-dark)]" : "text-ink"
          }`}
        >
          {list.heading}
        </h3>
      ) : null}
      <ul
        className={`${list.heading ? "mt-2" : ""} flex list-none flex-col gap-2 p-0 text-[length:var(--text-body)] ${
          dark ? "text-[var(--color-text-on-dark)]/90" : "text-ink"
        }`}
      >
        {list.items.map((item, index) => (
          <li key={item} className="flex gap-3">
            {list.icons?.[index] ? (
              <ItemIcon name={list.icons[index]} />
            ) : (
              <span
                aria-hidden="true"
                className={`mt-[0.15rem] shrink-0 font-bold ${
                  dark ? "text-[var(--color-text-on-dark)]" : "text-ink"
                }`}
              >
                {checklist ? "✓" : "•"}
              </span>
            )}
            {labeled ? <LabeledItem item={item} /> : <span>{item}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

const ICON_PATHS: Record<NonNullable<HubList["icons"]>[number], string[]> = {
  mounting: ["M4 5h16v11H4z", "M12 16v4", "M8 20h8"],
  connection: ["M9 3v5", "M15 3v5", "M7 8h10v3a5 5 0 0 1-10 0z", "M12 16v5"],
  routing: ["M5 6h3a4 4 0 0 1 4 4v4a4 4 0 0 0 4 4h3", "M3 6h2", "M19 18h2"],
};

/** Decorative inline icon. The item text stays the accessible label. */
function ItemIcon({ name }: { readonly name: keyof typeof ICON_PATHS }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-[0.1rem] shrink-0 text-ink"
    >
      {ICON_PATHS[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

/** "Label: description" rendered with the label in bold. */
function LabeledItem({ item }: { readonly item: string }) {
  const at = item.indexOf(": ");
  if (at < 0) return <span>{item}</span>;
  return (
    <span>
      <strong className="font-bold">{item.slice(0, at)}:</strong>{" "}
      {item.slice(at + 2)}
    </span>
  );
}
