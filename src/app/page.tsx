import { RecruitingBanner } from "@/components/careers/RecruitingBanner";
import { AnswerBlock } from "@/components/content/AnswerBlock";
import { commercialSectionImage } from "@/data/site/commercial-section-image";
import { introImage } from "@/data/site/intro-image";
import { recruitingSectionMedia } from "@/data/site/recruiting-image";
import { trustImage } from "@/data/site/trust-image";
import { ContentSection } from "@/components/content/ContentSection";
import { DeploymentProcessSteps } from "@/components/content/DeploymentProcessSteps";
import { FaqGroup } from "@/components/content/FaqGroup";
import { FinalCta } from "@/components/content/FinalCta";
import { LargeRolloutCallout } from "@/components/content/LargeRolloutCallout";
import { ProofMetrics } from "@/components/content/ProofMetrics";
import { TrustSection } from "@/components/content/TrustSection";
import { WhatWeInstallGrid } from "@/components/content/WhatWeInstallGrid";
import { WhoWeServeGrid } from "@/components/content/WhoWeServeGrid";
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
 *   4.  WhoWeServeGrid                    fleet, commercial, construction cards
 *   5.  WhyChooseUsSplit                  confirmed differentiators only
 *   6.  DeploymentProcessSteps            no guaranteed response times
 *   7.  LargeRolloutCallout               dark-navy tone, capacity framing
 *   8.  ContentSection id="commercial"    ctaEmphasis flipped to primary
 *   9.  RecruitingBanner                  visually distinct secondary journey
 *   10. ProofMetrics                      renders null while content is empty
 *   11. TrustSection id="trust"          two-column intro, benefits, fleet-manager list, CTA
 *   12. FaqGroup
 *   13. FinalCta                          commercial CTA leads
 *
 * All copy comes from the homepage content object. No literal copy here.
 */
export default function HomePage() {
  return (
    <>
      <JsonLd schema={homepageSchema()} />

      <>
        <HomeHero content={homepageContent.hero} />

        <AnswerBlock content={homepageContent.directAnswer} image={introImage} />

        <WhatWeInstallGrid id="what-we-install" content={homepageContent.whatWeInstall} />

        <WhoWeServeGrid id="who-we-serve" content={homepageContent.whoWeServe} />

        <WhyChooseUsSplit id="why-choose-us" content={homepageContent.whyChooseUs} />

        <DeploymentProcessSteps id="process" content={homepageContent.process} />

        <LargeRolloutCallout id="large-rollout" content={homepageContent.largeRollout} />

        <ContentSection
          id="commercial"
          content={homepageContent.commercial}
          tone="default"
          density="spacious"
          ctaEmphasis="primary"
          backgroundImage={commercialSectionImage}
        />

        <RecruitingBanner
          id="recruiting-banner"
          content={homepageContent.recruitingBanner}
          media={recruitingSectionMedia}
        />

        <ProofMetrics id="proof" content={homepageContent.proof} />

        <TrustSection id="trust" content={homepageContent.trust} image={trustImage} />

        <FaqGroup
          id="faq"
          density="compact"
          layout="columns"
          accessibleHeading="Frequently Asked Questions"
          content={homepageContent.faq}
        />

        <FinalCta id="final-cta" content={homepageContent.finalCta} />
      </>
    </>
  );
}
