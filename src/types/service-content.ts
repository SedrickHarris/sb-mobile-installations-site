import type { HubImageSlot } from "@/data/site/services-hub-images";
import type { Cta, FaqItem, SectionContent } from "@/types/content";

/** Shared content shape for the services hub and each service detail page. */
export interface ServicePageContent {
  readonly h1: string;
  readonly metaDescription: string;
  readonly intro: string;
  /** Body paragraphs, confirmed facts only. */
  readonly body: readonly string[];
  readonly faq?: readonly FaqItem[];
}

/** One card in the services hub navigation grid. */
export interface HubServiceCard {
  readonly category: string;
  readonly title: string;
  readonly scope: string;
  readonly commonUse: string;
  readonly linkLabel: string;
  readonly href: string;
  /** Decorative SB red top rule. Use on one or two cards at most. */
  readonly accent?: boolean;
  /** Optional thumbnail. Rendered only once an approved image exists. */
  readonly slot?: HubImageSlot;
}

/** One row of the "which service do I need" decision guide. */
export interface HubDecisionRow {
  readonly situation: string;
  readonly destination: string;
  readonly linkLabel: string;
  readonly href: string;
}

export interface HubList {
  readonly heading?: string;
  readonly items: readonly string[];
  readonly style?: "bullets" | "checklist";
}

export interface HubLink {
  readonly label: string;
  readonly href: string;
}

/** Heading, paragraphs, optional lists and links, rendered by SplitFeature. */
export interface HubSplitSection {
  readonly h2: string;
  readonly body: readonly string[];
  readonly lists?: readonly HubList[];
  readonly links?: readonly HubLink[];
}

export interface HubRelatedCard {
  readonly title: string;
  readonly description: string;
  readonly linkLabel: string;
  readonly href: string;
}

/**
 * Section content for the `/industries/` hub, beside `industriesHubContent`
 * (h1, metadata, intro, FAQ). Cards reuse `HubServiceCard`: `category` is the
 * industry label and `commonUse` the installation context.
 */
export interface IndustriesHubPageContent {
  /** Document title, without the site-name suffix the layout appends. */
  readonly metaTitle: string;
  readonly hero: {
    readonly primaryCta: Cta;
    readonly callLabel: string;
    readonly qualifier: string;
    readonly secondaryLink: HubLink;
    readonly scopeItems: readonly string[];
  };
  readonly answer: SectionContent;
  readonly industries: {
    readonly h2: string;
    readonly intro: string;
    readonly cards: readonly HubServiceCard[];
  };
  readonly decisionGuide: {
    readonly h2: string;
    readonly intro: string;
    readonly rows: readonly HubDecisionRow[];
  };
  readonly capability: HubSplitSection;
  readonly intake: HubSplitSection;
  readonly nationwide: HubSplitSection;
  readonly services: {
    readonly h2: string;
    readonly cards: readonly HubRelatedCard[];
  };
  readonly faqHeading: string;
  readonly quote: {
    readonly h2: string;
    readonly intro: string;
    readonly phoneLead: string;
  };
}

/**
 * Section content for the `/services/` hub, beside the shared
 * `ServicePageContent` (h1, intro, metadata, FAQ) in `servicesHubContent`.
 */
export interface ServicesHubPageContent {
  readonly hero: {
    readonly primaryCta: Cta;
    readonly callLabel: string;
    readonly qualifier: string;
  };
  readonly answer: SectionContent;
  readonly services: {
    readonly h2: string;
    readonly intro: string;
    readonly cards: readonly HubServiceCard[];
  };
  readonly decisionGuide: {
    readonly h2: string;
    readonly intro: string;
    readonly rows: readonly HubDecisionRow[];
  };
  readonly capability: HubSplitSection;
  readonly nationwide: HubSplitSection;
  readonly intake: HubSplitSection;
  readonly faqHeading: string;
  readonly related: {
    readonly h2: string;
    readonly cards: readonly HubRelatedCard[];
  };
  readonly quote: {
    readonly h2: string;
    readonly intro: string;
    readonly phoneLead: string;
  };
}

export interface CareersPageContent {
  readonly h1: string;
  readonly metaDescription: string;
  readonly intro: string;
  readonly body: readonly string[];
  readonly faq?: readonly FaqItem[];
}

/**
 * Shared shape for Sprint 2 informational pages: the industries hub and each
 * industry page, `/our-process/`, and `/quality-safety/`. Structurally
 * identical to `ServicePageContent` (h1/metaDescription/intro/body/faq); a
 * separate type name keeps each page family's content object readable at
 * its call site without implying a service-schema relationship it doesn't
 * have (these pages emit `WebPage`/`BreadcrumbList` only, never `Service`).
 */
export interface InformationalPageContent {
  readonly h1: string;
  readonly metaDescription: string;
  readonly intro: string;
  readonly body: readonly string[];
  readonly faq?: readonly FaqItem[];
}

/**
 * Centralized `/faq/` page content. Every question here must already exist,
 * word for word, in another page's approved FAQ content - this page never
 * introduces a new, unreviewed claim, it only re-groups confirmed FAQs
 * with a link back to their source page.
 */
export interface FaqPageItem extends FaqItem {
  /** The page this FAQ's answer is drawn from and links back to. */
  readonly sourceHref: string;
  readonly sourceLabel: string;
}

export interface FaqPageContent {
  readonly h1: string;
  readonly metaDescription: string;
  readonly intro: string;
  readonly items: readonly FaqPageItem[];
}

/**
 * `/resources/` hub + article content. Educational operational guidance
 * only, never a claim about SB Mobile's own stats, history, or performance.
 * Every article carries `editorialNote` verbatim in its rendered body - see
 * plan section "Sprint 2 - Credibility pages" for the required wording.
 */
export interface ResourceArticleContent {
  readonly slug: string;
  readonly h1: string;
  readonly metaDescription: string;
  readonly intro: string;
  readonly body: readonly string[];
  readonly editorialNote: string;
  readonly faq?: readonly FaqItem[];
}

/**
 * `/case-studies/` registry entry type. The registry itself
 * (`src/data/site/case-studies.ts`) is an empty array in Sprint 2 - no real,
 * approved case study exists yet. See CLAUDE.md section 3 and the plan's
 * "structural only" scoping for this route.
 */
export interface CaseStudyContent {
  readonly slug: string;
  readonly title: string;
  readonly summary: string;
  readonly body: readonly string[];
}
