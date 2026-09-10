# SEO Opportunity QA Prompt

- Prompt: seo-opportunity-qa
- File: prompts/seo-opportunity-qa-prompt.md
- Version: v1.0
- Status: Active
- Mode: SEO Opportunity Automation
- Position: Step 11 of the SEO opportunity pipeline, the final step before deploy
- Does not replace: Prompt 07 qa-review-prompt.md

## Reads and Writes Contract

- Reads: `docs/seo/page-brief.json`, `docs/seo/route-manifest.json`, the built page route file
- Writes: `docs/seo/seo-qa-report.json`
- Max turns: 4

Read only the files listed above. Do not read the full repo.

## Purpose

Perform SEO QA on the newly built pillar page. Fix only the issues found. Do not rewrite the page.

## 20-Point QA Checklist

For each item, record: check name, status (PASS, FAIL, or WARN), finding, and fix applied (if any).

1. Unique SEO title exists and is not duplicated across routes
2. Meta description exists
3. One H1 exists
4. H2 structure exists and is logical
5. FAQ section exists in the page
6. FAQPage schema exists and questions match the visible FAQs
7. Service schema exists (if a service page)
8. BreadcrumbList schema exists
9. Internal links exist (at least 2)
10. CTA section is visible
11. Local relevance copy is present (city or service area named)
12. Sitemap includes this route (if a manual sitemap)
13. Canonical URL is set or defaults correctly
14. Image alt text is present on all images (no empty alt on content images)
15. No keyword stuffing detected (no phrase repeated more than 3 times unnaturally)
16. No duplicate page intent with existing routes
17. No unsupported claims (no fake reviews, ratings, awards, guarantees)
18. Build passes (no TypeScript or lint errors)
19. Static export works if the project uses static output
20. Page route exists and renders

## Output Schema

```json
{
  "generatedAt": "",
  "pageSlug": "",
  "overallStatus": "PASS|FAIL|WARN",
  "checks": [
    {
      "checkName": "",
      "status": "PASS|FAIL|WARN",
      "finding": "",
      "fixApplied": ""
    }
  ],
  "openItems": [],
  "recommendation": ""
}
```

## Rules

- Fix only the specific items that FAIL or WARN.
- Do not rewrite passing sections.
- Do not change brand styling.
- Do not add fake content to fix missing trust signals. Flag them as open items instead.
- Do not invent search volume, CPC, rankings, reviews, ratings, or awards.
- Do not read files not listed above.

## Save and Report

- Save output to: `docs/seo/seo-qa-report.json`
- After saving, print: `QA complete. Status: [PASS|FAIL|WARN]. Open items: N.`
