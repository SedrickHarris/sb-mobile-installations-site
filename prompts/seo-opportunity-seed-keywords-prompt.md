# SEO Opportunity Seed Keywords Prompt

- Prompt: seo-opportunity-seed-keywords
- File: prompts/seo-opportunity-seed-keywords-prompt.md
- Version: v1.0
- Status: Active
- Mode: SEO Opportunity Automation
- Position: Step 3 of the SEO opportunity pipeline, after scan-routes.mjs runs, before the Google Keyword Planner export
- Does not replace: Prompt 01 keyword-strategy-prompt.md or any core workflow prompts

## Reads and Writes Contract

- Reads: `docs/seo/business-context.md` (or `docs/seo/business-profile.json` if present), `docs/seo/route-manifest.json`
- Writes: `docs/seo/keyword-seeds.json`
- Max turns: 2

Read only the files listed above. Do not read the full repo.

## Purpose

Generate 10 short Google Keyword Planner seed keywords based on the business context and the gaps
in the existing route tree. These seeds are pasted into Google Keyword Planner by the operator to
produce a real keyword export. This prompt does not produce metrics.

## Rules

- Focus on missing opportunities, not pages that already exist in the route manifest.
- Prioritize commercial intent.
- Include service, location, audience, problem, and comparison angles.
- Keep each keyword short (2 to 4 words).
- Use only real services and real service areas from the business context. Do not invent services,
  locations, credentials, or claims.
- Do not invent search volume, CPC, competition, or keyword difficulty. This step produces seeds
  only, not metrics.
- Output valid JSON only. No preamble, no commentary outside the JSON.
- Do not read any file not listed above.

## Output Schema

```json
{
  "generatedAt": "",
  "seedKeywords": [
    {
      "keyword": "",
      "reason": "",
      "intentType": "service|location|audience|problem|comparison|cost|emergency",
      "relatedService": "",
      "relatedLocation": "",
      "priority": "high|medium|low"
    }
  ]
}
```

Produce 10 seed keyword entries.

## Save and Report

- Save output to: `docs/seo/keyword-seeds.json`
- After saving, print: `OK: keyword-seeds.json written with N seed keywords.`
