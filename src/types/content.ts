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
  readonly body: string;
  readonly cta?: Cta;
}

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

export interface FaqContent {
  readonly items: readonly FaqItem[];
}

export interface FinalCtaContent {
  readonly h2: string;
  readonly primaryCta: Cta;
  readonly secondaryCta: Cta;
}

export interface HomepageContent {
  readonly hero: HeroContent;
  readonly directAnswer: DirectAnswerContent;
  readonly recruiting: SectionContent;
  readonly commercial: SectionContent;
  readonly trust: SectionContent;
  readonly faq: FaqContent;
  readonly finalCta: FinalCtaContent;
}
