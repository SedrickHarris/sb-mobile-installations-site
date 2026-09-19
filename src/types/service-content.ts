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
  /** Optional decision-support sentence shown after the scope. */
  readonly choose?: string;
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
  /** Optional supporting sentence under the situation. */
  readonly supporting?: string;
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
  /** Render the lists inside a bordered panel, to set soft guidance apart from facts. */
  readonly listPanel?: boolean;
  /** Small muted notes shown after the lists and before the links. */
  readonly footnotes?: readonly string[];
  readonly links?: readonly HubLink[];
}

/**
 * Per-service content for `ServicePageTemplate`. The H1, metadata
 * description, answer-first intro, and FAQ live in the matching
 * `ServicePageContent` (services-content.ts); everything below is the section
 * copy that differs per service. Shared blocks live in
 * `ServiceTemplateShared`.
 */
export interface ServiceTemplateContent {
  readonly slug: string;
  readonly pathname: string;
  /** Last breadcrumb label. */
  readonly breadcrumbLabel: string;
  /**
   * Schema `serviceType` values that directly match this page's visible
   * purpose. Empty means the key is omitted (no approved label exists).
   */
  readonly serviceTypes: readonly string[];
  /** Hero scope strip: a service-specific first item plus two shared items. */
  readonly scopeItems: readonly string[];
  readonly definition: HubSplitSection;
  readonly scope: HubSplitSection;
  /** Page-specific sentence; the vehicle examples and disclaimer are shared. */
  readonly vehiclesBody: string;
  readonly fit: HubSplitSection;
  /** Page-specific request-detail sentence added to the nationwide section. */
  readonly nationwideExtra: string;
  /** Slugs of related service pages, in display order. */
  readonly related: readonly string[];
  readonly faqHeading: string;
  readonly quoteH2: string;
  /**
   * Optional commercial CTA band after the fit section. Renders only when set,
   * so pages that do not opt in keep their current layout. The button reuses
   * the bundle's primary CTA and its analytics event; the supporting line is
   * the shared hero qualifier.
   */
  readonly midCtaHeading?: string;
}

/** Blocks that are the same on every service page. */
export interface ServiceTemplateShared {
  readonly callLabel: string;
  readonly heroQualifier: string;
  readonly vehicles: {
    readonly h2: string;
    readonly listHeading: string;
    readonly examples: readonly string[];
    readonly note: string;
  };
  readonly nationwide: {
    readonly h2: string;
    readonly lead: string;
    readonly links: readonly HubLink[];
  };
  readonly documentation: {
    readonly h2: string;
    readonly sentence: string;
    readonly links: readonly HubLink[];
  };
  readonly related: { readonly h2: string; readonly allCard: HubRelatedCard };
  readonly quote: { readonly intro: string; readonly phoneLead: string };
  readonly resources: { readonly h2: string; readonly links: readonly HubLink[] };
  readonly handoff: { readonly question: string; readonly link: HubLink };
}

/** Everything `ServicePageTemplate` needs to render one service page. */
export interface ServicePageBundle {
  readonly page: ServicePageContent;
  readonly content: ServiceTemplateContent;
  readonly shared: ServiceTemplateShared;
  readonly primaryCta: Cta;
  /** `label` is the hero button text ("Call ..."); `numberLabel` is the bare number. */
  readonly phone: {
    readonly href: string;
    readonly label: string;
    readonly numberLabel: string;
  };
  readonly heroImage: HubImageSlot;
  readonly contextImage: HubImageSlot;
  readonly relatedCards: readonly HubRelatedCard[];
}

export interface CareersEquipmentCard {
  readonly title: string;
  readonly description: string;
}

/**
 * Section content for the Installer Network page, beside
 * `installerNetworkContent` (h1, intro, metadata description, FAQ). The
 * Installer Network is a registration for future opportunities, separate from
 * the application for the current opening. `openings` only points to that
 * opening; its facts live in the job record. No schedule, hours,
 * certification, or platform-brand language.
 */
export interface CareersHubPageContent {
  /** Document title, without the site-name suffix the layout appends. */
  readonly metaTitle: string;
  readonly hero: {
    readonly primaryCta: Cta;
    readonly callLabel: string;
    readonly qualifier: string;
    readonly scopeItems: readonly string[];
  };
  /** Small chapter labels shown above each chapter's first section. */
  readonly chapters: {
    readonly network: string;
    readonly work: string;
    readonly prepare: string;
    readonly join: string;
  };
  /** Pointer to the current opening and its application. Never an application itself. */
  readonly openings: HubSplitSection;
  readonly answer: HubSplitSection;
  readonly fit: HubSplitSection;
  readonly requirements: HubSplitSection;
  readonly equipment: {
    readonly h2: string;
    readonly intro: string;
    readonly cards: readonly CareersEquipmentCard[];
  };
  readonly fieldWork: HubSplitSection;
  readonly information: HubSplitSection;
  readonly where: HubSplitSection;
  readonly after: HubSplitSection;
  readonly join: {
    readonly h2: string;
    readonly intro: string;
    readonly noGuarantee: string;
    readonly phoneLead: string;
  };
  readonly faqHeading: string;
  readonly handoff: {
    readonly h2: string;
    readonly body: string;
    readonly links: readonly HubLink[];
  };
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
  readonly answer: HubSplitSection;
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
    /** First paragraph beside the form. */
    readonly intro: string;
    /** Second paragraph beside the form. */
    readonly detail: string;
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
