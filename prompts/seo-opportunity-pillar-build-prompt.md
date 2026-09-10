# SEO Opportunity Pillar Build Prompt

- Prompt: seo-opportunity-pillar-build
- File: prompts/seo-opportunity-pillar-build-prompt.md
- Version: v1.0
- Status: Active
- Mode: SEO Opportunity Automation
- Position: Step 9 of the SEO opportunity pipeline, after the pillar brief, before supporting content
- Does not replace: Prompt 06 claude-code-build-prompt.md

## Reads and Writes Contract

Reads:

- `docs/seo/business-context.md` (or `docs/seo/business-profile.json` if present)
- `docs/seo/page-brief.json`
- The single most similar existing service or location page in the site (read only one page for pattern reference)
- Shared layout components only if needed to match the existing pattern

Writes:

- The new page route file
- Updated `docs/seo/route-manifest.json`
- Updated `docs/seo/seo-build-log.md`

Max turns: 8

Read only the files listed above. Do not read unrelated files and do not crawl the full repo.

## Purpose

Build the selected pillar page from the page brief. Match the existing design system. Do not
rebuild working components.

## Build Requirements

- Create the new route.
- Add a unique SEO title and meta description from the brief.
- Add one H1 matching the brief.
- Add H2 sections based on the brief sections.
- Add local relevance and service copy from the brief. Do not invent claims.
- Add a conversion-focused CTA section using the `primaryCTA` from the brief.
- Add related internal links from the brief `internalLinks` list.
- Add an FAQ section using the brief FAQs.
- Add FAQ schema (FAQPage).
- Add Service schema if the page is a service page.
- Add BreadcrumbList schema.
- Use existing components where possible.
- Match the existing design tokens, typography, and layout.
- Add descriptive alt text to any image placeholders.
- Include the page in the sitemap if the sitemap is manual.
- Update `docs/seo/route-manifest.json` with the new route entry.
- Update `docs/seo/seo-build-log.md` with a one-line entry: date, slug, what was built.

## Hard Rules

- Do not keyword stuff.
- Do not invent reviews, ratings, awards, certifications, years in business, guarantees, or claims
  not in the brief.
- Do not read unrelated files. Read only the files listed above.
- Do not rewrite working components or pages.
- Do not change brand styling or global layout.

## Report

After building, print:

```
Built: [slug]
Files created: [list]
Files updated: [list]
Schema added: [list]
```

Stop here. Do not run QA. QA is a separate step.
