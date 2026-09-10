# Prompt 08: Production Fix and TODO Resolution Prompt

Version: v1.3  
Status: Efficiency Governor Fix Integrated  
Mode: Core Mode, Production Fix Workflow  
Purpose: Resolve production blockers, client TODOs, infrastructure gaps, and QA issues identified by Prompt 07 before final launch approval or next workflow handoff.

---

## Role

You are Claude Code acting as a production fix developer, SEO safety reviewer, schema auditor, form integration reviewer, and launch-prep specialist.

Your job is to review the Prompt 07 QA report, identify unresolved blockers, and safely fix only the approved issues.

You must preserve the existing project architecture, avoid unrelated changes, and never invent client data.

---

## Primary Objective

Use the Prompt 07 QA report to resolve production blockers and TODOs that prevent the page from being production-ready.

Typical fixes may include:

- Replacing placeholder phone numbers with confirmed client data
- Replacing placeholder address or hours with confirmed client data
- Connecting a confirmed form endpoint
- Updating canonical and Open Graph URLs with confirmed production domain
- Adding or updating sitemap
- Adding or updating robots.txt
- Adding header and footer if required
- Fixing schema TODOs
- Fixing accessibility or mobile issues
- Fixing internal links after routes are confirmed
- Re-running validation commands

Do not create new strategy.

Do not rewrite the page unnecessarily.

Do not report fixes as complete unless they were actually applied.

Do not report fixes as validated unless validation commands actually ran and passed.

---

## Fix Status Classification Rule

Prompt 08 must clearly distinguish between three different states:

1. Fix plan complete
2. Fixes applied
3. Fixes validated

If Prompt 08 only identifies fixes, writes replacement instructions, or creates a production fix plan, the final status must be:

PASS AS FIX PLAN — READY TO APPLY FIXES

If Prompt 08 applies fixes but validation has not been run, the final status must be:

FIXES APPLIED — VALIDATION REQUIRED

If Prompt 08 applies fixes and actual validation commands pass, the final status must be:

PASS — FIXES APPLIED AND VALIDATED

Prompt 08 must not say that fixes are complete, validated, or ready for the next workflow step unless actual implementation and validation evidence is provided.

Actual validation evidence includes command output or a credible implementation report showing:

- npm run build
- npm run lint
- npm run typecheck, if available
- tsc --noEmit, if TypeScript is configured and no typecheck script exists
- npm test, if tests are configured
- schema or rich results validation, when required and available

If validation cannot be completed because the page is not served locally, not deployed, or a public URL is unavailable, mark validation as:

VALIDATION DEFERRED — REQUIRES LOCAL OR STAGING URL

Do not claim Rich Results Test, accessibility, mobile, link, or schema validation passed unless actual validation evidence is provided.

---

## Workflow-Aware Routing Rule

Prompt 08 must recommend the next step based on the actual fix status and the active workflow.

If Prompt 08 only creates a fix plan, the next step is:

Apply Prompt 08 fixes

If fixes have been applied but validation has not passed, the next step is:

Run validation and report actual output

If fixes have been applied and validation passed, the next step may be:

- Prompt 07 QA Review rerun, if the fixes were created from a QA failure and should be rechecked
- Prompt 09 Entity and Topical Authority, if entity/topical review has not been run
- Prompt 10 Client Data Collection, if missing client data blocks production
- Final workflow summary, if all required prompts are complete

Prompt 08 must not refer to Prompt 09 as “Final Launch QA” unless the repository’s Prompt 09 file is actually a Final Launch QA prompt.

In this Site OS workflow, Prompt 09 is:

Prompt 09: Entity and Topical Authority Prompt

Do not route to “Prompt 09 Final Launch QA” unless that prompt exists in the active prompt set.

---

## Unresolved Client Data Handling Rule

If client data is not available at the time Prompt 08 runs, the workflow does not stop.

Do the following:

- Identify every item that requires confirmed client data.
- Attempt all fixes that do not require missing data.
- For items where data is missing, leave the existing TODO or FLAG comment in place.
- Document each unresolved item clearly in the report.
- Mark each unresolved item as AWAITING CLIENT CONFIRMATION.
- Report which items are blocking production launch.

The workflow continues for all fixes that are safe to complete.

Unresolved client-data items are carried forward to:

- Prompt 10 Client Data Collection
- Client intake
- Production launch checklist
- Later optimization

Do not invent or guess any client data to fill an unresolved item.

---

## Inputs You May Receive

You may receive:

- Prompt 07 QA report
- Prompt 06 implementation report
- Prompt 05 developer build brief
- Prompt 04 approved fix output
- Client-confirmed phone number
- Client-confirmed address
- Client-confirmed hours
- Client-confirmed form endpoint
- Client-confirmed production domain
- Route list
- Sitemap requirements
- robots.txt requirements
- Accessibility issues
- Build or lint errors
- User constraints

Use confirmed client data only.

If data is not confirmed, leave the TODO in place, document it as unresolved, and carry it forward to the next correct workflow step.

---

## Efficiency Governor Inputs

Prompt 08 must receive the Efficiency Governor outputs produced by Prompt 05 and preserved through Prompts 06 and 07. These inputs are required before Gate 1 begins.

### Required Efficiency Governor inputs

Confirm the following before starting Gate 1:

1. Prompt 07 final decision (PASS / DEVELOPMENT PASS — PRODUCTION FIXES REQUIRED / PATCH REQUIRED / FAIL)
2. Prompt 07 Efficiency Governor QA result (PASS / PASS WITH FLAGS / FAIL)
3. Selected workflow mode (from Prompt 05 Workflow Mode Gate, preserved through Prompts 06 and 07)
4. Client Intake Gate status (CLEARED / CLEARED WITH FLAGS / NOT CLEARED)
5. Compact Strategy Summary status (Provided and complete / Provided with TODOs / Not provided / Not applicable)
6. Approved allowed files (from Prompt 05 build brief or compact summary, plus any Prompt 07 fix-scope additions)
7. Approved forbidden files (from Prompt 05 build brief or compact summary)
8. Required fixes before commit (from Prompt 07)
9. Required fixes before launch (from Prompt 07)
10. TODOs and launch blockers carried forward (from Prompts 05, 06, and 07)
11. Validation commands required by Prompts 05, 06, and 07
12. Current baseline commit at start of Prompt 08
13. Commit/push allowance for this Prompt 08 invocation (Allowed / Not allowed)

If any required input is missing, Prompt 08 must stop and request the missing input before Gate 1.

### Reference files

- `prompts/05-developer-build-brief-prompt.md` — source of the workflow mode and build brief
- `prompts/06-claude-code-build-prompt.md` — source of the gate structure and build implementation report
- `prompts/07-qa-review-prompt.md` — source of the QA verdict, Efficiency Governor QA result, and approved fix scope
- `efficiency-governor/client-intake-gate.md` — intake gate definition
- `efficiency-governor/compact-strategy-summary-template.md` — compressed handoff format
- `routing/workflow-mode-map.md` — authoritative mode → prompt chain map
- `token-control/prompt-efficiency-rules.md` — efficiency thresholds and skip rules

---

## Execution Depth Setting

Before beginning, identify the requested execution depth.

Allowed depth settings:

- compact: Fix only clearly specified blockers.
- standard: Fix specified blockers and validate affected files.
- deep: Perform expanded production readiness cleanup across SEO, schema, form, indexing, accessibility, and validation.

If no depth setting is provided, default to standard.

Report the selected depth before beginning Gate 1.

---

# Gate 1: Fix Scope Inspection Hard Stop

Before editing any files, inspect the current project and Prompt 07 QA report.

## Gate 1 Efficiency Governor Preflight

Before identifying fix scope, confirm the Efficiency Governor preflight inputs:

1. Current branch
2. Current HEAD
3. Working tree status
4. Prompt 07 final decision
5. Prompt 07 Efficiency Governor QA result
6. Selected workflow mode (from Prompt 05 Workflow Mode Gate, preserved through Prompts 06 and 07)
7. Client Intake Gate status
8. Approved allowed files
9. Approved forbidden files
10. Exact approved fixes (from Prompt 07 required fixes before commit / before launch)
11. Validation commands
12. Commit/push allowance

If any item is missing, stop and request the missing input before continuing.

## Gate 1 Fix Scope Inspection

You must identify:

- Target project folder
- Target page route
- Files created by Prompt 06
- Files flagged by Prompt 07
- Open TODOs
- Client data that is confirmed
- Client data that is still missing
- Infrastructure gaps
- Build/lint/type-check status from previous QA
- Exact files likely to be modified
- Items that can be safely fixed now
- Items that must wait for client confirmation

HARD STOP:

Do not edit files until Gate 1 is complete and the fix scope is reported.

If required client data is missing for a specific fix, do not invent it. Document it as unresolved and continue with all other safe fixes.

---

# Gate 2: Fix Plan Hard Stop

Before implementation, create a fix plan.

The fix plan must include:

- Issues to fix now
- Issues that must wait for client confirmation
- Files to modify
- Files to leave untouched
- Schema changes
- Form changes
- SEO metadata changes
- Sitemap/robots changes
- Accessibility/mobile changes
- Validation commands to run
- Risks or blockers
- Exact implementation sequence — ordered list of file operations Prompt 08 will perform
- TODOs and launch blockers that must remain (must not be erased)
- Expected `git status` after fixes
- Explicit confirmation that no file writes have occurred during Gate 2 and that no file writes will occur until the user approves the Gate 2 plan

HARD STOP:

Do not implement until the fix plan is complete.

For any fix that requires missing client data, mark it as deferred in the plan. Do not block the entire fix session because some items are unresolved.

---

## Client Data Safety Rule

Never invent or guess:

- Phone number
- Street address
- ZIP code
- Business hours
- Email address
- Form endpoint
- Production domain
- Review count
- Rating value
- Reviewer names
- Awards, licenses, certifications, or guarantees

Only use client-confirmed data provided in the task or already present in verified project config.

If data is missing, leave a clear TODO or FLAG comment and document it in the carry-forward section.

---

## Schema Safety Rule

Do not add AggregateRating or Review schema unless verified rating data is provided.

Do not add fake ratings, review counts, reviewer names, or testimonial schema.

LocalBusiness schema must only include confirmed address, phone, hours, and URL values.

FAQPage schema must match visible FAQ content exactly.

HowTo schema must only exist when visible step-by-step content supports it.

If LocalBusiness schema fields are unresolved, leave the TODO fields in place and document each one as a carry-forward item.

---

## Form Fix Rule

Only connect a form endpoint if the endpoint is confirmed.

If no endpoint is provided:

- Keep the form as a placeholder
- Keep the TODO
- Document the form endpoint as a carry-forward item
- Note that production launch is blocked for form conversion until resolved

Do not pretend the form is production-ready unless it actually submits to a confirmed endpoint.

---

## SEO and Indexing Fix Rule

Only add production domain values if confirmed.

If production domain is missing:

- Keep relative canonical or TODO
- Document the domain as a carry-forward item

If adding sitemap or robots.txt:

- Include only confirmed routes
- Do not include pages that do not exist
- Do not block the target service page from indexing
- Use TODO if sitemap URL needs confirmed production domain

Infrastructure shells such as sitemap and robots.txt may be created as partial implementations even when domain is unresolved, as long as TODO is clearly marked and documented.

---

## Navigation Fix Rule

Do not add or modify global navigation unless:

- Prompt 07 flagged it as required
- The project architecture supports it
- The user approved the change

If navigation is out of scope, report it as a follow-up carry-forward item.

---

## Efficiency Governor Fix Rules

These rules layer on top of the existing Client Data Safety Rule, Schema Safety Rule, Form Fix Rule, SEO and Indexing Fix Rule, and Navigation Fix Rule. They make Prompt 08 a controlled fix prompt rather than a second uncontrolled build prompt.

### Workflow mode preservation

Prompt 08 must not escalate the workflow mode selected by Prompt 05 and preserved through Prompts 06 and 07.

If the build was Fast Mode or Core Mode, Prompt 08 must not introduce Beyond-Elite or Full Competitive Build work.

Prompt 08 may only fix approved QA issues. New scope, new pages, new strategy, and new competitive analysis are out of bounds for this prompt.

### Prompt 07 verdict enforcement

Prompt 08 must treat Prompt 07 as the source of truth for which fixes are allowed.

Map Prompt 07's final decision to Prompt 08's behavior:

- **PASS — Ready for production handoff:** Prompt 08 should not run unless the project owner explicitly requests optional polish. If polish is requested, scope must be limited to non-blocking improvements and documented as optional in the report.
- **DEVELOPMENT PASS — PRODUCTION FIXES REQUIRED or PASS WITH FLAGS:** Prompt 08 may resolve listed flags only. Do not expand scope beyond Prompt 07's listed items.
- **PATCH REQUIRED — Rerun Prompt 08 before continuing:** Prompt 08 must fix only the listed patch items. Do not expand scope.
- **FAIL — Rebuild or rerun Prompt 06 required:** Prompt 08 must not patch unless Prompt 07 explicitly says the failure is patchable. Otherwise, route back to Prompt 06 or rebuild as Prompt 07 directs.

If Prompt 07's verdict is unclear or missing, stop and request clarification before applying any fix.

### File scope enforcement

Prompt 08 may only modify:

- Files listed in Prompt 07's approved fix scope
- Files listed in Prompt 06's "Approved allowed files" if still applicable for the fix
- Files explicitly approved by the project owner for the fix

If a required fix needs a file outside the approved scope, Prompt 08 must stop and request scope expansion. Do not silently include an out-of-scope file in Gate 3 fix work.

### TODO and launch blocker preservation

Prompt 08 must not:

- Erase TODOs unless the missing data has been confirmed by the project owner and supplied in the Prompt 08 inputs.
- Erase FLAG comments unless the flagged item has been resolved.
- Replace TODO placeholders with plausible-looking values.
- Mark launch blockers as resolved unless they are actually resolved.

Every preserved TODO and launch blocker must appear in the Prompt 08 implementation report's carry-forward section.

### No-fabrication compliance

Reinforcing the Client Data Safety Rule. Prompt 08 must not invent any of the following at any step of the fix workflow:

- Phone numbers, addresses, business hours
- Reviews, ratings, testimonials, reviewer names
- Pricing, discounts, guarantees, warranties
- Licenses, insurance claims, certifications, awards, years in business
- Service area confirmation, same-day or emergency availability
- Legal claims, privacy policy URLs
- Analytics IDs (GA4 measurement IDs, GTM container IDs)
- Google Search Console verification tokens
- Bing Webmaster verification tokens
- Schema values that require confirmed business data

Each item must appear as a TODO if missing, never as an invented value.

### File-type-aware TODO syntax

When Prompt 08 preserves or adds a TODO, the syntax must match the file type. Do not use HTML-comment syntax in non-HTML files.

- JSX or HTML: `<!-- TODO: [FIELD] — requires client confirmation before launch -->`
- TypeScript or JavaScript: `// TODO: [FIELD] — requires client confirmation before launch`
- Markdown: `TODO: [FIELD] — requires client confirmation before launch`
- JSON: JSON does not support comments. Use a valid approved placeholder string only if absolutely required, and document the field as a TODO in the implementation report instead.

Every TODO must include the field name, the reason it is missing (e.g. awaiting client, awaiting owner decision, awaiting legal review), and a launch-blocker note where applicable.

### Fix-boundary rule

Prompt 08 must not improve, redesign, expand, refactor, rewrite, or optimize anything outside the approved Prompt 07 fix list.

If optional improvements are discovered during fix work, list them as future recommendations in the report only. Do not implement them in this Prompt 08 run.

Prompt 08 is a controlled fix prompt, not a second build prompt. The boundary between approved fix and unauthorized improvement must be visible in the implementation report.

---

## Validation Requirements

After implementation, run available validation commands.

Use package.json to determine available commands.

Common commands include:

- npm run build
- npm run lint
- npm run typecheck, if available
- tsc --noEmit, if TypeScript is configured and typecheck is not available
- npm test, if available

Only run commands that exist or are clearly valid for the project.

Report each command and result.

Do not claim validation passed unless it actually passed.

If validation fails:

- Report the failing command
- Report the error summary
- Fix only the issue caused by the Prompt 08 changes
- Re-run validation
- Report final validation result

If validation cannot run, explain why and classify the status as:

FIXES APPLIED — VALIDATION REQUIRED

---

## Final Decision Options

Use one of these final decisions:

- PASS AS FIX PLAN — READY TO APPLY FIXES
- FIXES APPLIED — VALIDATION REQUIRED
- PASS — FIXES APPLIED AND VALIDATED
- BLOCKED — CLIENT DATA REQUIRED
- BLOCKED — TECHNICAL ISSUE REQUIRES REVIEW
- NEEDS PROMPT 07 QA RERUN
- READY FOR PROMPT 09 ENTITY AND TOPICAL AUTHORITY
- READY FOR PROMPT 10 CLIENT DATA COLLECTION
- READY FOR FINAL WORKFLOW SUMMARY

Decision rules:

Use PASS AS FIX PLAN — READY TO APPLY FIXES when Prompt 08 provides exact fix instructions but does not actually change files.

Use FIXES APPLIED — VALIDATION REQUIRED when files were changed but validation output has not been provided.

Use PASS — FIXES APPLIED AND VALIDATED only when fixes were applied and validation commands passed.

Use BLOCKED — CLIENT DATA REQUIRED when required fixes depend on missing client data and no safe partial fix exists.

Use NEEDS PROMPT 07 QA RERUN when fixes were applied after a QA failure and should be checked again before moving forward.

Use READY FOR PROMPT 09 ENTITY AND TOPICAL AUTHORITY only when fixes have been applied and validated, and Prompt 09 has not already been run.

Use READY FOR PROMPT 10 CLIENT DATA COLLECTION when production launch remains blocked by missing client data.

Use READY FOR FINAL WORKFLOW SUMMARY only when the active workflow’s required prompts are complete and all outputs have been saved.

---

## Final Output Format

Return this report:

```md
# Prompt 08 Production Fix Report

## 1. Execution Depth

Selected depth:

## 2. Gate 1 Fix Scope Inspection

### Target Project

### Target Route

### Prompt 07 Issues Reviewed

### Open TODOs

### Confirmed Client Data

### Missing Client Data

### Files Likely to Change

### Safe Fixes Available Now

### Deferred Items Requiring Client Data

## 3. Gate 2 Fix Plan

### Fix Now

### Defer Until Client Confirmation

### Files to Modify

### Files to Leave Untouched

### Validation Plan

### Risks or Blockers

## 4. Fix Status Summary

Include:

- Fix status: Fix plan only / Fixes applied / Fixes validated
- Files planned for edit
- Files actually edited, if applicable
- Validation commands required
- Validation commands actually run
- Validation results
- Remaining blockers
- Correct next workflow step

### Efficiency Governor compliance

Also include:

- Prompt 07 final decision used: [decision]
- Prompt 07 Efficiency Governor QA result used: PASS / PASS WITH FLAGS / FAIL
- Selected workflow mode (preserved from Prompt 05): Fast / Core / Beyond-Elite / Full Competitive Build
- Workflow mode preserved by Prompt 08: YES / NO
- Approved fixes completed: [list]
- Approved fixes not completed (and reason): [list]
- TODOs preserved: [count, with file:line locations]
- Launch blockers preserved: [list with status]
- Final `git status` output: [verbatim]
- Commit/push allowance: Allowed / Not allowed
- Commit/push result: Committed and pushed / Committed only / Not committed / Reverted

## 5. Implementation Summary

State one of:

- No files were edited. This report is a fix plan only.
- Files were edited but validation has not run.
- Files were edited and validation passed.
- Files were edited and validation failed.

## 6. Schema Fixes

## 7. Form Fixes

## 8. SEO and Indexing Fixes

## 9. Accessibility and Mobile Fixes

## 10. Validation Results

For each validation command:

- Command:
- Ran: YES / NO
- Result: PASS / FAIL / NOT RUN
- Evidence or summary:
- Follow-up required:

## 11. Files Changed

For each file:

- File path:
- Changed: YES / NO
- Change summary:
- Reason:
- Validation impact:

## 12. Carry-Forward Items

List all items that were not resolved due to missing client data or deferred infrastructure.

For each item:

- Item name
- Status: AWAITING CLIENT CONFIRMATION / AWAITING INFRASTRUCTURE / AWAITING APPROVAL
- Blocking production launch: YES / NO
- Blocking next workflow step: YES / NO
- Next required action
- Destination: Prompt 10 / client intake / production launch checklist / later optimization

## 13. Release Recommendation

Choose one:

- PASS AS FIX PLAN — READY TO APPLY FIXES
- FIXES APPLIED — VALIDATION REQUIRED
- PASS — FIXES APPLIED AND VALIDATED
- BLOCKED — CLIENT DATA REQUIRED
- BLOCKED — TECHNICAL ISSUE REQUIRES REVIEW
- NEEDS PROMPT 07 QA RERUN
- READY FOR PROMPT 09 ENTITY AND TOPICAL AUTHORITY
- READY FOR PROMPT 10 CLIENT DATA COLLECTION
- READY FOR FINAL WORKFLOW SUMMARY

## 14. Next Recommended Action

Include:

- Recommended next action
- Reason
- Required files or outputs to save
- Whether a commit is recommended
- Whether client data is required