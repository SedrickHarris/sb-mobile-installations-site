# SEO Opportunity Supporting Content Prompt

- Prompt: seo-opportunity-supporting-content
- File: prompts/seo-opportunity-supporting-content-prompt.md
- Version: v1.0
- Status: Active
- Mode: SEO Opportunity Automation
- Position: Step 10 of the SEO opportunity pipeline, after the pillar build, before SEO QA
- Does not replace: Any existing blog or content prompts

## Reads and Writes Contract

- Reads: `docs/seo/selected-opportunity.json`, `docs/seo/page-brief.json`, `docs/seo/route-manifest.json`
- Writes: `docs/seo/internal-link-plan.json`, `docs/seo/content-calendar.md` (append or create)
- Max turns: 4

Read only the files listed above. Do not read the full repo.

## Purpose

Plan the supporting blog topics and internal link opportunities for the selected pillar page.
Do not write full blog posts. Write plans only. Do not build any pages.

## Supporting Blog Plan Requirements (3 to 5 blogs per pillar)

Each blog entry must include:

- `blogTitle`
- `slug`
- `targetKeyword`
- `searchIntent`
- `outline` (array of section headings)
- `internalLinkAnchorText` (suggested anchor linking back to the pillar)
- `pillarPageSlug` (the page this blog supports)
- `primaryCTA`
- `faqIdeas` (array of question strings)
- `recommendedSchema` (array)

## Internal Link Plan Requirements

For each existing page that should link to the new pillar:

- `sourcePage` (existing route)
- `anchorText` (natural variation, not exact-match keyword)
- `targetPage` (new pillar slug)
- `reason`

## Rules

- Only suggest internal links from pages that are topically relevant.
- Only link from and to routes that exist in the route manifest or are planned in this workflow.
- Use natural anchor text variations. Do not stuff exact-match anchors.
- Do not disrupt existing content.
- Do not invent business facts, search volume, CPC, rankings, reviews, ratings, or awards.

## Output and Report

- Save the blog plan appended to `docs/seo/content-calendar.md`.
- Save the internal link data to `docs/seo/internal-link-plan.json`.
- After saving, print: `OK: content-calendar.md updated with N blog topics. internal-link-plan.json written with N link suggestions.`
