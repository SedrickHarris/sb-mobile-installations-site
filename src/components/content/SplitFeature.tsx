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
  /** Vertical alignment of the two columns. Defaults to centered. */
  readonly align?: "center" | "top";
  /**
   * Show the image above the text on mobile. The DOM order stays text first,
   * so this is a visual reorder only. Off by default.
   */
  readonly mediaFirstOnMobile?: boolean;
  /** "narrow" gives the media column about 45% of the row instead of 50%. */
  readonly mediaShare?: "even" | "narrow";
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
}: SplitFeatureProps) {
  const headingId = `${id}-heading`;
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
    <Section tone={tone} width={slot ? "site" : "reading"} labelledBy={headingId}>
      <div
        className={
          slot
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
        <div className={slot && mediaSide === "left" ? "md:order-2" : ""}>
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
                  ? " rounded-lg border border-border bg-surface p-6"
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
            <ul className="mt-6 flex list-none flex-col gap-1 p-0">
              {content.links.map((item, index) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`inline-flex min-h-11 items-center gap-2 text-[length:var(--text-body)] underline underline-offset-4 ${
                      content.primaryLink && index > 0
                        ? "font-normal"
                        : "font-semibold"
                    } ${link}`}
                  >
                    {item.label}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {slot ? (
          <div
            className={`${mediaFirstOnMobile ? "order-first md:order-none " : ""}${
              align === "top" ? "md:sticky md:top-24" : ""
            }`}
          >
            <ImageSlot slot={slot} />
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
        {list.items.map((item) => (
          <li key={item} className="flex gap-3">
            <span
              aria-hidden="true"
              className={`mt-[0.15rem] shrink-0 font-bold ${
                dark ? "text-[var(--color-text-on-dark)]" : "text-ink"
              }`}
            >
              {checklist ? "✓" : "•"}
            </span>
            {labeled ? <LabeledItem item={item} /> : <span>{item}</span>}
          </li>
        ))}
      </ul>
    </div>
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
