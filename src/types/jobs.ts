import type { FaqItem } from "@/types/content";
import type { HubSplitSection } from "@/types/service-content";

/**
 * One active job record. Each active opening has its own stable record, slug,
 * and canonical path (docs/30-job-content-schema-specification.md sections 3
 * and 16). The visible job page, the jobs index, the careers landing page, the
 * sitemap, and the JobPosting schema all read from this one record, so the
 * schema description can never drift from the visible content.
 *
 * There is deliberately no closing date field. No closing date is published,
 * so `validThrough` is never emitted (docs/13-schema-markup-plan.md section 14).
 */
export interface JobRecord {
  readonly slug: string;
  /** Canonical path with leading and trailing slash. */
  readonly path: string;
  readonly title: string;
  readonly status: "active";
  /**
   * ISO date the opening was first posted, as the owner gave it. It must be
   * the real first-publication date (docs/13 section 14), never the date the
   * page was built.
   */
  readonly datePosted: string;
  readonly metaDescription: string;
  readonly intro: string;
  readonly heroScopeItems: readonly string[];
  /** Short fact lines reused on the landing page, index card, and job page. */
  readonly summaryFacts: readonly string[];
  /** Page sections in display order. Also the source of the schema description. */
  readonly sections: readonly HubSplitSection[];
  /** No-guarantee disclosure shown beside every Apply action. */
  readonly disclaimer: string;
  readonly faq: readonly FaqItem[];
}
