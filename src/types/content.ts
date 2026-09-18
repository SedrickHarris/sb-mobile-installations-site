/**
 * Content types for the homepage.
 *
 * Components receive verified, typed data. Copy never appears as literal
 * strings inside JSX. See 20-component-inventory.md section 5.
 */

import type { business } from "@/data/site/business";

type ServiceType = (typeof business.serviceTypes)[number];

/** A call to action. `href` is the destination route. */
export interface Cta {
  readonly label: string;
  readonly href: string;
  /**
   * Which journey this CTA belongs to. Recruitment and commercial journeys
   * stay separate in routing, analytics, and confirmation language.
   * See 19-claude-project-instructions.md section 17.
   */
  readonly journey: "recruitment" | "commercial";
  /** Analytics event name. Journeys never share an event. */
  readonly event: string;
}

export interface HeroContent {
  readonly h1: string;
  readonly subhead: string;
  readonly primaryCta: Cta;
  readonly secondaryCta: Cta;
}

/** A single self-contained paragraph answering who the company is. */
export interface DirectAnswerContent {
  readonly body: string;
}

export interface SectionContent {
  readonly h2: string;
  /**
   * Section body copy. An array renders as one paragraph per entry, in order.
   * A single string renders as one paragraph. Paragraph breaks are structure,
   * not copy, so the strings themselves stay verbatim.
   */
  readonly body: string | readonly string[];
  readonly cta?: Cta;
}

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

export interface FaqContent {
  /** Visible section heading. When absent, the FAQ shows no visible heading. */
  readonly h2?: string;
  readonly items: readonly FaqItem[];
}

export interface FinalCtaContent {
  readonly h2: string;
  readonly primaryCta: Cta;
  readonly secondaryCta: Cta;
}

/**
 * WhatWeInstallGrid content. The list of services itself is never here: the
 * component sources it from `business.serviceTypes` directly, so a service
 * can never be added to the grid without also being added to the verified
 * business-facts source. See plan section 7's WhatWeInstallGrid constraint.
 */
/** Copy for one What We Install card, keyed by `business.serviceTypes`. */
export interface WhatWeInstallCardContent {
  readonly description: string;
  /** Visible "Use cases" list. Omitted where no approved list exists. */
  readonly useCases?: readonly string[];
  /** Visible qualification shown under the description. */
  readonly note?: string;
}

export interface WhatWeInstallContent {
  readonly h2: string;
  readonly intro?: string;
  readonly cards: Readonly<Record<ServiceType, WhatWeInstallCardContent>>;
}

/**
 * Optional card link. `event` is omitted for plain navigation links that have
 * no approved analytics event; a new event name is never invented here.
 */
export interface WhoWeServeCardLink {
  readonly label: string;
  readonly href: string;
  readonly event?: string;
}

export interface WhoWeServeCard {
  readonly title: string;
  readonly description: string;
  readonly useCases: readonly string[];
  readonly link?: WhoWeServeCardLink;
  readonly image: {
    readonly src: string;
    readonly alt: string;
    readonly width: number;
    readonly height: number;
  };
}

/**
 * Audience block: label, heading, intro paragraph, three vehicle-type cards
 * (image, description, use cases, optional link), and a closing support
 * paragraph with one commercial CTA.
 */
export interface WhoWeServeContent {
  readonly eyebrow: string;
  readonly h2: string;
  readonly intro: string;
  readonly cards: readonly WhoWeServeCard[];
  readonly support: {
    readonly heading: string;
    readonly body: string;
    readonly cta: Cta;
  };
}

export interface DifferentiatorItem {
  readonly title: string;
  readonly body: string;
}

/**
 * Why-choose-us block: eyebrow, heading, intro, four benefit cards, a
 * fleet-manager value list, a commercial CTA panel, and one visually
 * secondary Installer Network link. The customer CTA and the technician link
 * are separate journeys and never share a route or event.
 */
export interface WhyChooseUsContent {
  readonly eyebrow: string;
  readonly h2: string;
  readonly intro: string;
  readonly items: readonly DifferentiatorItem[];
  readonly fleetManagers: {
    readonly heading: string;
    readonly items: readonly string[];
  };
  readonly cta: {
    readonly heading: string;
    readonly body: string;
    readonly primary: Cta;
    readonly servicesLink: { readonly label: string; readonly href: string };
  };
  readonly installerNetwork: {
    readonly prompt: string;
    readonly link: Cta;
  };
}

export interface ProcessStep {
  readonly title: string;
  readonly body: string;
}

/**
 * Narrowly factual, non-promissory process summary. This is intentionally
 * NOT a claimed multi-step company process (scope/schedule/install/QA/
 * closeout) - that fuller description is pending stakeholder confirmation.
 * See docs/_claims-inventory.md and CLAUDE.md section 3 (never invent).
 */
export interface DeploymentProcessContent {
  readonly h2: string;
  readonly body: string;
}

export interface LargeRolloutContent {
  readonly h2: string;
  readonly body: string;
  readonly cta?: Cta;
}

export interface RecruitingBannerContent {
  readonly eyebrow: string;
  readonly h2: string;
  readonly body: string;
  readonly highlights: readonly string[];
  readonly cta: Cta;
  readonly secondaryLink: { readonly label: string; readonly href: string };
  readonly disclosure: string;
}

export interface ProofMetricItem {
  readonly label: string;
  readonly value: string;
}

/**
 * Stakeholder-content-pending slot. `items` is empty until real, approved
 * proof content exists. `ProofMetrics` returns `null` while it is empty; see
 * that component for the no-placeholder rule.
 */
export interface ProofMetricsContent {
  readonly items: readonly ProofMetricItem[];
}

export interface HomepageContent {
  readonly hero: HeroContent;
  readonly directAnswer: DirectAnswerContent;
  readonly whatWeInstall: WhatWeInstallContent;
  readonly whoWeServe: WhoWeServeContent;
  readonly whyChooseUs: WhyChooseUsContent;
  readonly process: DeploymentProcessContent;
  readonly largeRollout: LargeRolloutContent;
  readonly commercial: SectionContent;
  readonly recruitingBanner: RecruitingBannerContent;
  readonly proof: ProofMetricsContent;
  readonly trust: SectionContent;
  readonly faq: FaqContent;
  readonly finalCta: FinalCtaContent;
}

/** Confirmed-facts content for the single nationwide coverage page (Sprint 2). */
export interface NationwideCoverageContent {
  readonly h1: string;
  readonly metaDescription: string;
  readonly intro: string;
  readonly body: readonly string[];
  readonly faq?: readonly FaqItem[];
}

/**
 * Reusable data model for future geo expansion (Sprint 2+), added to the
 * shared content types now per plan section "Reusable data model for future
 * geo expansion", so Sprint 3+ is additive data entry against an existing
 * schema rather than a new architecture.
 *
 * `regions`, `states`, and `metros` stay empty objects until their evidence
 * gates (docs/_claims-inventory.md, the plan's Sprint 3+ scoring rubric) are
 * met. Route generation reads only populated keys, so an empty object
 * publishes nothing - see src/app/coverage/ for how this is consumed.
 */
export interface CoverageData {
  readonly nationwide: NationwideCoverageContent;
  readonly regions: Record<string, unknown>;
  readonly states: Record<string, unknown>;
  readonly metros: Record<string, unknown>;
}
