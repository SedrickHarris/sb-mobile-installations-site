import type { FaqItem } from "@/types/content";

/** Shared content shape for the services hub and each service detail page. */
export interface ServicePageContent {
  readonly h1: string;
  readonly metaDescription: string;
  readonly intro: string;
  /** Body paragraphs, confirmed facts only. */
  readonly body: readonly string[];
  readonly faq?: readonly FaqItem[];
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
