# SEO Automation JSON Shapes

This file is the data contract for the SEO opportunity automation workflow. The scripts in
`seo-automation/scripts/` and the SEO opportunity prompts both read and write these shapes.
Keep this file in sync with any script change.

Two cardinal rules govern every shape:

1. No fake data. Search volume, competition, CPC, and difficulty values come only from a
   user supplied Google Keyword Planner CSV. Scripts never invent or estimate them.
2. Scores are priorities, not SEO metrics. Any `score` field is an internal build-priority
   heuristic, not keyword difficulty, ranking probability, or a traffic forecast.

All files live in the generated client repo under `docs/seo/`. All timestamps are ISO 8601
strings in a `generatedAt` field. All producers append human-readable strings to a `warnings[]`
array rather than failing silently.

---

## 1. route-manifest.json

- Purpose: a compressed inventory of the existing site routes so Claude Code and the scoring
  script can detect coverage gaps without reading every page file.
- Producer: `scan-routes.mjs`.
- Consumer: `score-opportunities.mjs`, the selection prompt, the page brief prompt.
- Required fields:
  - `generatedAt` string
  - `routeCount` number
  - `routes[]` array of route records, each with:
    - `route` string (URL path, dynamic segments shown as `:param`)
    - `sourceFile` string (repo-relative path)
    - `routerType` string (`app` or `pages`)
    - `possibleTitles[]` string array
    - `possibleH1s[]` string array
    - `possibleH2s[]` string array
    - `internalHrefs[]` string array (internal links only)
    - `schemaTypeHints[]` string array (detected schema `@type` values and schema words)
    - `wordEstimate` number (rough body word count)
  - `warnings[]` string array
- Notes: extraction is best-effort text matching, not a render. Dynamic and grouped routes are
  normalized. Route groups in parentheses and parallel route slots are removed from the URL.
- No-fake-data constraint: every value is read from real source files. Missing values stay as
  empty arrays or a zero estimate. The script never guesses a title or heading.

---

## 2. keyword-seeds.json

- Purpose: the seed topics and seed keywords used as input to Google Keyword Planner.
- Producer: the SEO seed keywords prompt (Claude online), informed by `docs/seo/` context files.
- Consumer: the human operator, who pastes seeds into Keyword Planner.
- Required fields:
  - `generatedAt` string
  - `business` object (name, primary services, service areas) sourced from client context only
  - `seedTopics[]` string array
  - `seedKeywords[]` string array
  - `notes` string
- Notes: this is a planning artifact. It contains no metrics.
- No-fake-data constraint: seeds describe the real business only. No invented services or
  locations the business does not actually serve.

---

## 3. keyword-exports CSV (input, not produced by Site OS)

- Purpose: the raw Google Keyword Planner export the operator downloads.
- Producer: Google Keyword Planner (external). The operator drops the file into
  `docs/seo/keyword-exports/`.
- Consumer: `parse-keyword-csv.mjs`.
- Expected columns (Keyword Planner default, names matched case-insensitively):
  - `Keyword` (required)
  - `Avg. monthly searches`
  - `Competition`
  - `Competition (indexed value)`
  - `Top of page bid (low range)`
  - `Top of page bid (high range)`
  - `Three month change`
  - `YoY change`
  - `Currency`
- Notes: exports are frequently UTF-16 LE with a BOM, tab delimited, and prefixed with two or
  three preamble lines before the header row. The parser detects encoding, delimiter, and the
  header row automatically.
- No-fake-data constraint: this file is always user supplied. Site OS never generates it.

---

## 4. normalized-keywords.json

- Purpose: a clean, deduplicated, machine-readable version of the CSV export.
- Producer: `parse-keyword-csv.mjs`.
- Consumer: `cluster-keywords.mjs`.
- Required fields:
  - `generatedAt` string
  - `sourceCsv` string (repo-relative path of the parsed CSV)
  - `keywordCount` number
  - `keywords[]` array, each with:
    - `keyword` string
    - `avgMonthlySearches` number or null (clean integers only)
    - `avgMonthlySearchesRaw` string or null (original cell, including ranges like `1K - 10K`)
    - `competition` string or null
    - `competitionIndex` number or null
    - `topOfPageBidLow` string or null
    - `topOfPageBidHigh` string or null
    - `threeMonthChange` string or null
    - `yoyChange` string or null
    - `currency` string or null
  - `warnings[]` string array
- Notes: ranges are preserved in the `Raw` field and left out of the numeric field so no value
  is fabricated. Deduplication is case-insensitive on the keyword text.
- No-fake-data constraint: a missing metric is `null`. The parser never substitutes a guess.

---

## 5. keyword-clusters.json

- Purpose: keywords grouped into topic clusters with intent and modifier signals.
- Producer: `cluster-keywords.mjs`.
- Consumer: `score-opportunities.mjs`, the selection prompt.
- Required fields:
  - `generatedAt` string
  - `clusterCount` number
  - `clusters[]` array, each with:
    - `clusterId` string (`c-001` form)
    - `clusterName` string
    - `primaryKeyword` string
    - `keywords[]` string array
    - `modifiers[]` string array (detected modifier phrases)
    - `intentHints[]` string array (for example transactional, local, informational)
    - `metricsSummary` object:
      - `dataAvailable` boolean
      - `keywordCount` number
      - `keywordsWithVolume` number
      - `totalAvgMonthlySearches` number or null
      - `maxAvgMonthlySearches` number or null
      - `note` string
    - `notes` string
    - `_categories[]` string array (internal pattern categories used by the scorer)
    - `synonymMergeApplied` boolean (optional): present and `true` only on a cluster that was
      combined during the synonym and stem merge pass.
    - `mergedFrom[]` string array (optional): present only on a merged cluster, listing the
      original `clusterId` values that were combined into it.
- Notes: clustering is a deterministic token heuristic, not a semantic embedding model. The
  `_categories` field is internal plumbing for the scorer and may be ignored by humans. The
  optional `synonymMergeApplied` and `mergedFrom` fields appear only on merged clusters; the
  merge uses `seo-automation/config/synonyms.json` and is skipped if that file is missing.
- No-fake-data constraint: `metricsSummary` aggregates only supplied volumes. When no volume
  is present, totals are `null` and the note says so.

---

## 6. opportunities.json

- Purpose: a ranked list of likely missing pillar page opportunities.
- Producer: `score-opportunities.mjs`.
- Consumer: the selection prompt, then the operator.
- Required fields:
  - `generatedAt` string
  - `minScore` number (the `--min-score` cutoff applied; default 4)
  - `opportunityCount` number (count of opportunities kept at or above `minScore`)
  - `filteredCount` number (count of opportunities removed by the `minScore` cutoff)
  - `opportunities[]` array, each with:
    - `opportunityId` string (`o-001` form)
    - `clusterId` string
    - `recommendedPageTitle` string
    - `recommendedSlug` string
    - `primaryKeyword` string
    - `supportingKeywords[]` string array
    - `pageType` string (pillar, service-location, pricing, comparison, guide, emergency-service, audience-service)
    - `intent` string
    - `existingRouteOverlap` object or null (`route`, `sourceFile`, `matchedTokens`, `baseTokenCount`, `overlapRatio`)
    - `score` number
    - `scoreBreakdown` object: `serviceFitHint`, `buyerIntentHint`, `localIntentHint`, `clusterDepth`, `modifierStrength`, `existingOverlapPenalty`, `dataCompleteness`
    - `rationale` string
    - `recommendedNextAction` string
  - `warnings[]` string array
- Notes: opportunities are sorted by `score` descending, then filtered by `minScore` before the
  file is written. An opportunity with a high `existingRouteOverlap` is flagged for expansion
  rather than a new duplicate page. When the filter removes any opportunities, a warning is added
  to `warnings[]` stating how many.
- No-fake-data constraint: `score` and every `scoreBreakdown` value are bounded heuristics.
  They must never be relabeled as keyword difficulty or traffic. Volume context is real only
  when it traces back to the CSV.

---

## 7. selected-opportunity.json

- Purpose: the single opportunity the operator approves to build next.
- Producer: the selection prompt, confirmed by the operator.
- Consumer: the SEO page brief prompt.
- Required fields:
  - `selectedAt` string
  - `opportunityId` string (must exist in opportunities.json)
  - `decision` string (`build-new` or `expand-existing`)
  - `targetRoute` string (new slug, or the existing route when expanding)
  - `primaryKeyword` string
  - `supportingKeywords[]` string array
  - `pageType` string
  - `intent` string
  - `operatorNotes` string
  - `visibilityAlignmentConfirmed` boolean (required): must be `true` before page-brief.json is
    produced. It records that the full visibility and conversion alignment pass
    (`prompts/20-visibility-conversion-alignment-prompt.md`, Prompt 20) was run for this
    opportunity. When this is `false` or missing, `run-pipeline.mjs` warns loudly and the page
    brief must not proceed.
- Notes: this records a human decision so the build is auditable.
- No-fake-data constraint: the selection cannot introduce keywords that are absent from the
  source cluster without an explicit operator note explaining the real-world source.

---

## 8. page-brief.json

- Purpose: the structured SEO brief that drives the pillar page build.
- Producer: the SEO page brief prompt.
- Consumer: the pillar page build prompt (Claude Code).
- Required fields:
  - `generatedAt` string
  - `opportunityId` string
  - `route` string
  - `pageType` string
  - `metaTitle` string
  - `metaDescription` string
  - `h1` string
  - `headingOutline[]` array of `{ level, text, keywordTargets[] }`
  - `directAnswerBlocks[]` array of `{ question, shortAnswer }`
  - `faqs[]` array of `{ question, answer }`
  - `schemaPlan[]` string array (schema types that match visible content)
  - `internalLinks[]` array of `{ anchor, targetRoute }`
  - `primaryCta` object (`label`, `targetRoute`)
  - `unsupportedClaimsToAvoid[]` string array
- Notes: headings, FAQs, and schema must align with each other and with real content.
- No-fake-data constraint: no invented reviews, ratings, prices, hours, or credentials. Schema
  is planned only for content that will actually appear on the page.

---

## 9. internal-link-plan.json

- Purpose: the supporting blog and internal link plan that ties a new pillar into the site.
- Producer: the supporting content prompt.
- Consumer: Claude Code during build, plus the QA prompt.
- Required fields:
  - `generatedAt` string
  - `pillarRoute` string
  - `supportingPosts[]` array of `{ workingTitle, targetSlug, primaryKeyword, intent, linksToPillarAnchor }`
  - `inboundLinks[]` array of `{ fromRoute, anchor }` (existing pages that should link to the pillar)
  - `outboundLinks[]` array of `{ toRoute, anchor }` (links the pillar should provide)
  - `notes` string
- Notes: anchors should be natural and varied, never exact-match stuffed.
- No-fake-data constraint: only link to routes that exist in route-manifest.json or are planned
  in this same workflow. Do not invent destination pages.

---

## 10. seo-qa-report.json

- Purpose: the pass or fail QA record for a built pillar page.
- Producer: the SEO QA prompt.
- Consumer: the operator and the changelog.
- Required fields:
  - `generatedAt` string
  - `route` string
  - `checks[]` array of `{ id, label, status, detail }` where status is `pass`, `fail`, or `na`
  - `metaTitlePresent` boolean
  - `metaDescriptionPresent` boolean
  - `singleH1` boolean
  - `headingHierarchyValid` boolean
  - `faqsMatchSchema` boolean
  - `internalLinksResolve` boolean
  - `noFakeDataConfirmed` boolean
  - `overallStatus` string (`pass`, `conditional`, `fail`)
  - `openItems[]` string array
- Notes: a conditional pass carries forward open items; it is not a full pass.
- No-fake-data constraint: `noFakeDataConfirmed` must be true before `overallStatus` can be
  `pass`. Any fabricated claim is an automatic fail.
