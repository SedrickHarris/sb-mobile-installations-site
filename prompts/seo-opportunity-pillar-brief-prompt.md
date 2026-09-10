# SEO Opportunity Pillar Brief Prompt

- Prompt: seo-opportunity-pillar-brief
- File: prompts/seo-opportunity-pillar-brief-prompt.md
- Version: v1.0
- Status: Active
- Mode: SEO Opportunity Automation
- Position: Step 8 of the SEO opportunity pipeline, after selection, before the pillar build
- Does not replace: Prompt 02 page-outline-prompt.md or Prompt 05 developer-build-brief-prompt.md

## Reads and Writes Contract

- Reads: `docs/seo/business-context.md` (or `docs/seo/business-profile.json` if present), `docs/seo/selected-opportunity.json`, `docs/seo/route-manifest.json`
- Writes: `docs/seo/page-brief.json`
- Max turns: 3

Read only the files listed above. Do not read the full repo.

## Purpose

Create a complete SEO page brief for the selected pillar page. This brief drives the build prompt.
Do not build the page. Do not write final copy. Write only the brief.

## Rules

- Use only real business data from the context files. Do not invent services, locations,
  credentials, or claims.
- Do not keyword stuff sections or headings.
- FAQs must match real search intent, not invented questions.
- Do not invent search volume, CPC, competition, rankings, reviews, ratings, or awards.
- Schema should be planned only for content that will actually appear on the page.
- Output valid JSON only.
- Do not read any file not listed above.

## Output Schema

```json
{
  "generatedAt": "",
  "pageTitle": "",
  "slug": "",
  "seoTitle": "",
  "metaDescription": "",
  "h1": "",
  "sections": [
    {
      "heading": "",
      "purpose": "",
      "contentIntent": ""
    }
  ],
  "faqs": [
    {
      "question": "",
      "answerIntent": ""
    }
  ],
  "schema": [],
  "internalLinks": [],
  "primaryCTA": "",
  "supportingBlogs": []
}
```

## Save and Report

- Save output to: `docs/seo/page-brief.json`
- After saving, print: `OK: page-brief.json written for [slug]`
