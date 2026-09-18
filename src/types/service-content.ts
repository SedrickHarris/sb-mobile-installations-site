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
