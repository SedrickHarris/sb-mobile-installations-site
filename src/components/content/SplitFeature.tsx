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
   * Small chapter label above the heading. Not a heading. Rendered on light
   * tones only: SB red on navy is 2.62:1, so it is dropped on dark surfaces.
   */
  readonly eyebrow?: string;
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
          slot ? "grid gap-10 md:grid-cols-2 md:items-center md:gap-16" : ""
        }
      >
        <div className={slot && mediaSide === "left" ? "md:order-2" : ""}>
          {eyebrow && !dark ? (
            <p className="mb-3 text-[length:var(--text-label)] font-semibold tracking-wide text-[var(--color-brand-red)] uppercase">
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
              className={`mt-4 text-[length:var(--text-small)] leading-relaxed text-pretty ${
                dark ? "text-[var(--color-text-on-dark)]/80" : "text-ink-muted"
              }`}
            >
              {note}
            </p>
          ))}

          {content.links && content.links.length > 0 ? (
            <ul className="mt-6 flex list-none flex-col gap-1 p-0">
              {content.links.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`inline-flex min-h-11 items-center gap-2 text-[length:var(--text-body)] font-semibold underline underline-offset-4 ${link}`}
                  >
                    {item.label}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {slot ? <ImageSlot slot={slot} /> : null}
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
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
