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
 * Section order is fixed: hero, direct answer, recruiting, commercial, trust,
 * FAQ, final CTA. The order encodes search intent sequencing and the
 * dual-audience conversion flow. Do not reorder, merge, or split sections.
 *
 * Background rhythm alternates surface and subtle so sections separate
 * without dividers, closing on a brand-soft band:
 *
 *   hero            surface
 *   direct answer   subtle
 *   recruiting      surface
 *   commercial      subtle
 *   trust           surface
 *   faq             subtle
 *   final cta       brand-soft
 *
 * Recruiting and commercial share structure, spacing, and density so the two
 * journeys read as parallel. Trust is deliberately more compact, because it
 * is a closing statement rather than a third conversion module.
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
