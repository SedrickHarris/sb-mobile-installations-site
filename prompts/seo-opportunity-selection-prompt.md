# SEO Opportunity Selection Prompt

- Prompt: seo-opportunity-selection
- File: prompts/seo-opportunity-selection-prompt.md
- Version: v1.0
- Status: Active
- Mode: SEO Opportunity Automation
- Position: Step 7 of the SEO opportunity pipeline, after score-opportunities.mjs runs, before the pillar brief
- Does not replace: Any core workflow prompts

## Reads and Writes Contract

- Reads: `docs/seo/business-context.md` (or `docs/seo/business-profile.json` if present), `docs/seo/route-manifest.json`, `docs/seo/opportunities.json`
- Writes: `docs/seo/selected-opportunity.json`
- Max turns: 2

Read only the files listed above. Do not read the full repo.

## Purpose

Review the scored opportunities and select the single best missing pillar page to build next.
The score in opportunities.json is a build-priority heuristic, not a keyword difficulty or traffic
estimate. Use it as one input alongside real business judgment.

## Rules

- Select the page most likely to generate leads or conversions.
- Avoid pages that already exist in the route manifest.
- Prioritize real services the business offers.
- Prioritize commercial intent over informational intent.
- Do not invent search volume, CPC, competition, rankings, or business facts.
- Output valid JSON only. No preamble.
- Do not read any file not listed above.

## Output Schema

```json
{
  "generatedAt": "",
  "selectedOpportunity": {
    "opportunityId": "",
    "pageTitle": "",
    "slug": "",
    "primaryKeyword": "",
    "supportingKeywords": [],
    "pageType": "service|location|service-location|audience|problem|comparison|cost|emergency",
    "whyThisPage": "",
    "conversionGoal": "",
    "internalLinkTargets": [],
    "supportingBlogIdeas": []
  }
}
```

Select exactly one opportunity. The `opportunityId` must exist in opportunities.json.

## Save and Report

- Save output to: `docs/seo/selected-opportunity.json`
- After saving, print: `OK: selected-opportunity.json written. Selected page: [slug]`
