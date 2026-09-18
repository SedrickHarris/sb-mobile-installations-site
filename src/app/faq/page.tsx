import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/schema/JsonLd";
import { faqPageContent } from "@/data/site/faq-content";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { breadcrumbList } from "@/lib/schema/breadcrumbs";
import { organizationRef } from "@/lib/schema/organization";
import { business } from "@/data/site/business";

const PATHNAME = "/faq/";
const BREADCRUMBS = [{ label: "Home", href: "/" }, { label: "FAQ" }];

export const metadata: Metadata = buildPageMetadata({
  title: faqPageContent.h1,
  description: faqPageContent.metaDescription,
  pathname: PATHNAME,
});

/**
 * Centralized FAQ page. Every item is pulled from another page's
 * already-approved FAQ content (see src/data/site/faq-content.ts) and links
 * back to its source page, so this page never introduces a new,
 * unreviewed claim.
 *
 * Uses `FAQPage` structured data (in addition to `WebPage`/`BreadcrumbList`)
 * since every question/answer pair here mirrors visible, approved copy word
 * for word.
 */
export default function FaqPage() {
  const url = `${business.url}${PATHNAME}`;

  return (
    <>
      <JsonLd
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${url}#webpage`,
              url,
              name: faqPageContent.h1,
              description: faqPageContent.metaDescription,
              about: organizationRef(),
            },
            {
              "@type": "FAQPage",
              mainEntity: faqPageContent.items.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: { "@type": "Answer", text: item.answer },
              })),
            },
            breadcrumbList(BREADCRUMBS),
          ],
        }}
      />
      <Breadcrumbs items={BREADCRUMBS} />

      <Section tone="default" density="spacious" width="reading" labelledBy="faq-heading">
        <h1
          id="faq-heading"
          className="text-[length:var(--text-h1)] leading-[1.08] font-bold text-balance text-ink"
        >
          {faqPageContent.h1}
        </h1>
        <p className="mt-5 text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink-muted">
          {faqPageContent.intro}
        </p>
      </Section>

      <Section tone="subtle" width="reading">
        <ul className="flex flex-col gap-8">
          {faqPageContent.items.map((item) => (
            <li key={item.question} className="border-b border-border pb-8 last:border-b-0">
              <h2 className="text-[length:var(--text-h4)] font-semibold text-ink">
                {item.question}
              </h2>
              <p className="mt-3 text-[length:var(--text-body)] leading-relaxed text-ink-muted">
                {item.answer}
              </p>
              <Link
                href={item.sourceHref}
                className="mt-3 inline-block text-[length:var(--text-small)] font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4"
              >
                Full page: {item.sourceLabel}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
