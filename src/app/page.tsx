import { AnswerBlock } from "@/components/content/AnswerBlock";
import { ContentSection } from "@/components/content/ContentSection";
import { FaqGroup } from "@/components/content/FaqGroup";
import { FinalCta } from "@/components/content/FinalCta";
import { HomeHero } from "@/components/hero/HomeHero";
import { JsonLd } from "@/components/schema/JsonLd";
import { homepageContent } from "@/data/site/homepage-content";
import { homepageMetadata } from "@/lib/metadata/homepage";
import { homepageSchema } from "@/lib/schema/homepage";

export const metadata = homepageMetadata;

/**
 * Homepage.
 *
 * Section order is fixed: hero, direct answer, about, recruiting, commercial,
 * trust, FAQ, final CTA. The order encodes search intent sequencing and the
 * dual-audience conversion flow. Do not reorder, merge, or split sections.
 *
 * Background rhythm alternates surface and subtle so sections separate
 * without dividers, closing on a brand-soft band:
 *
 *   hero            surface
 *   direct answer   subtle
 *   about           subtle
 *   recruiting      surface
 *   commercial      subtle
 *   trust           surface
 *   faq             subtle
 *   final cta       brand-soft
 *
 * Direct answer and about deliberately share one subtle band. The FAQ tone is
 * fixed in its own component, which leaves four slots between two subtle
 * sections, and four slots cannot alternate cleanly. Pairing the two company
 * sections puts the single repeat where it helps: the answer block is an
 * unheaded lead paragraph and about expands it, so they read as one editorial
 * opening before the page breaks to the two journeys. The about H2 still
 * separates them. No existing section tone changed.
 *
 * About, recruiting, and commercial share density, measure, and type scale, so
 * the company section carries the same visual weight as the two conversion
 * sections. About carries no CTA: it is informational only. Trust is
 * deliberately more compact, because it is a closing statement rather than a
 * third conversion module.
 *
 * All copy comes from the homepage content object. No literal copy here.
 */
export default function HomePage() {
  return (
    <>
      <JsonLd schema={homepageSchema()} />

      <>
        <HomeHero content={homepageContent.hero} />

        <AnswerBlock content={homepageContent.directAnswer} />

        <ContentSection
          id="about"
          content={homepageContent.about}
          tone="subtle"
          density="spacious"
        />

        <ContentSection
          id="recruiting"
          content={homepageContent.recruiting}
          tone="default"
          density="spacious"
          ctaEmphasis="primary"
        />

        <ContentSection
          id="commercial"
          content={homepageContent.commercial}
          tone="subtle"
          density="spacious"
          ctaEmphasis="secondary"
        />

        <ContentSection
          id="trust"
          content={homepageContent.trust}
          tone="default"
          density="compact"
        />

        {/*
          The locked content gives no visible heading for this section. The
          accessible name below is not rendered visually and is not page copy.
        */}
        <FaqGroup
          id="faq"
          accessibleHeading="Frequently Asked Questions"
          content={homepageContent.faq}
        />

        <FinalCta id="final-cta" content={homepageContent.finalCta} />
      </>
    </>
  );
}
