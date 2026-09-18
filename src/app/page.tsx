import { RecruitingBanner } from "@/components/careers/RecruitingBanner";
import { AnswerBlock } from "@/components/content/AnswerBlock";
import { ContentSection } from "@/components/content/ContentSection";
import { DeploymentProcessSteps } from "@/components/content/DeploymentProcessSteps";
import { FaqGroup } from "@/components/content/FaqGroup";
import { FinalCta } from "@/components/content/FinalCta";
import { LargeRolloutCallout } from "@/components/content/LargeRolloutCallout";
import { ProofMetrics } from "@/components/content/ProofMetrics";
import { WhatWeInstallGrid } from "@/components/content/WhatWeInstallGrid";
import { WhyChooseUsSplit } from "@/components/content/WhyChooseUsSplit";
import { HomeHero } from "@/components/hero/HomeHero";
import { JsonLd } from "@/components/schema/JsonLd";
import { homepageContent } from "@/data/site/homepage-content";
import { homepageMetadata } from "@/lib/metadata/homepage";
import { homepageSchema } from "@/lib/schema/homepage";

export const metadata = homepageMetadata;

/**
 * Homepage.
 *
 * Section order, commercial-first (documented override of docs/07 and
 * docs/20, recorded in 01-business-source-of-truth.md section 32,
 * 07-site-architecture.md section 54a, and 20-component-inventory.md,
 * dated 2026-09-18):
 *
 *   1.  HomeHero                          commercial primary CTA, recruiting secondary
 *   2.  AnswerBlock
 *   3.  WhatWeInstallGrid                 sourced from business.serviceTypes
 *   4.  WhyChooseUsSplit                  confirmed differentiators only
 *   5.  DeploymentProcessSteps            no guaranteed response times
 *   6.  LargeRolloutCallout               dark-navy tone, capacity framing
 *   7.  ContentSection id="commercial"    ctaEmphasis flipped to primary
 *   8.  RecruitingBanner                  visually distinct secondary journey
 *   9.  ProofMetrics                      renders null while content is empty
 *   10. ContentSection id="trust"
 *   11. FaqGroup
 *   12. FinalCta                          commercial CTA leads
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

        <WhatWeInstallGrid id="what-we-install" content={homepageContent.whatWeInstall} />

        <WhyChooseUsSplit id="why-choose-us" content={homepageContent.whyChooseUs} />

        <DeploymentProcessSteps id="process" content={homepageContent.process} />

        <LargeRolloutCallout id="large-rollout" content={homepageContent.largeRollout} />

        <ContentSection
          id="commercial"
          content={homepageContent.commercial}
          tone="default"
          density="spacious"
          ctaEmphasis="primary"
        />

        <RecruitingBanner id="recruiting-banner" content={homepageContent.recruitingBanner} />

        <ProofMetrics id="proof" content={homepageContent.proof} />

        <ContentSection
          id="trust"
          content={homepageContent.trust}
          tone="subtle"
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
