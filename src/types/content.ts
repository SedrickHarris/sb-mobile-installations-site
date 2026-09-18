/**
 * Content types for the homepage.
 *
 * Components receive verified, typed data. Copy never appears as literal
 * strings inside JSX. See 20-component-inventory.md section 5.
 */

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
export interface WhatWeInstallContent {
  readonly h2: string;
  readonly intro?: string;
}

export interface DifferentiatorItem {
  readonly title: string;
  readonly body: string;
}

export interface WhyChooseUsContent {
  readonly h2: string;
  readonly items: readonly DifferentiatorItem[];
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
  readonly h2: string;
  readonly body: string;
  readonly cta: Cta;
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
