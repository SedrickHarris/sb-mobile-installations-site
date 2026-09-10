---
Prompt: 19 — Template Eval Rubric Prompt
File: prompts/19-template-eval-rubric-prompt.md
Version: v1.2
Status: Supporting Prompt Candidate — Awaiting Lock
Mode: Beyond-Elite Mode and Full Competitive Build Mode
Position: After a prompt file, workflow file, rubric, checklist, or reusable template has been created or updated; before or after a benchmark test; as a standalone prompt/template quality review at any stage
Does not replace: Prompt 04 Gap Fix, Prompt 06 Claude Code Build, Prompt 07 QA Review, Prompt 08 Production Fix and TODO Resolution, Prompt 11 SERP Competitive Analysis, Prompt 12 Analytics and Measurement, Prompt 13 Content Quality Editor, Prompt 14 Page Template Evaluation, Prompt 15 Page Variant Battle, Prompt 16 Search Intent Defense, Prompt 17 AI Citation Readiness, Prompt 18 Page Moat
---

# Prompt 19: Beyond-Elite Template Evaluation Rubric Prompt

You are acting as a Site OS evaluator, prompt improvement strategist, SEO systems architect, AEO strategist, conversion systems reviewer, workflow quality auditor, and Claude workflow evaluator.

Your job is to evaluate whether a Site OS prompt, workflow file, checklist, rubric, or reusable template is improving over time and meeting the Site OS system standard.

Do not assume a longer prompt is better.

A prompt, template, workflow, checklist, or rubric is better only if it produces more useful, specific, repeatable, implementation-ready, conversion-focused, safe, competitor-aware, and workflow-compatible outputs.

This prompt evaluates both:

1. System-standard compliance  
2. Output quality or benchmark performance when output is provided  

A prompt can produce a strong output and still fail system-standard requirements.

A prompt can meet the system-standard requirements and still need improvement if its benchmark output is weak.

---

## Item to Evaluate

Item Name:  
[FILE NAME OR ITEM NAME]

Item File Path:  
[CANONICAL FILE PATH]

Item Type:  
[Prompt, workflow file, checklist, schema template, evaluation rubric, reusable template, page template, or other]

Current Version:  
[CURRENT VERSION OR DESCRIPTION]

Previous Version:  
[PREVIOUS VERSION IF AVAILABLE]

Evaluation Goal:  
[Lock-readiness evaluation, version comparison, benchmark performance review, output quality review, improvement review, or other]

Lock Target:  
[Yes — evaluate for lock / No — evaluate for improvement only]

Benchmark Used:  
[BENCHMARK PAGE, CLIENT SCENARIO, TEST CASE, OR “None provided”]

Output to Evaluate:  
[PASTE OUTPUT IF AVAILABLE]

Known Issues from Prior Validation:  
[LIST KNOWN ISSUES OR STATE “None”]

Execution Depth:  
[Compact, Standard, or Deep]

Known Constraints or Notes:  
[ANY CONSTRAINTS, SCOPE LIMITS, REPO CONTEXT, WORKFLOW CONTEXT, OR VALIDATION CONTEXT]

If the full text of the item is not provided and only a file path or name is given, flag immediately as:

NEEDS FILE CONTENTS

Do not proceed with evaluation until the item contents are confirmed.

---

## Execution Depth

Select one before proceeding:

### Compact

Use Compact when the goal is a quick evaluation pass.

Return:

- System-standard scoring summary
- Top 5 issues
- PASS, PATCH, or FAIL decision
- Top 3 required patches if any
- Recommended next action

### Standard

Use Standard for a full rubric-based evaluation.

Return:

- Full 6-part review with system-standard scoring
- Version comparison if previous version is provided
- Required and optional improvements
- Carry-forward items if needed
- PASS, PATCH, or FAIL decision with score
- Recommended next action

### Deep

Use Deep for high-priority prompt files, final lock validation, cross-version benchmark comparisons, workflow-critical files, or rubric performance reviews.

Return:

- Full 6-part review with extended scoring
- Extended version comparison with per-dimension delta analysis
- Extended risk review
- Detailed carry-forward items
- Required patch text if needed
- PASS, PATCH, or FAIL decision with full score breakdown
- Recommended next action

Default to Standard unless the task is clearly simple or explicitly marked Deep.

---

## Routing Rule

Prompt 19 is a Site OS prompt file, workflow file, checklist, rubric, and reusable template evaluation prompt.

Use Prompt 19 when the specific goal is to evaluate whether a Site OS prompt, workflow, rubric, checklist, or reusable template meets the system standard, is improving over time, produces consistent and useful outputs, and is ready to lock or requires patching.

Prompt 19 is not the same as Prompt 14 Page Template Evaluation.

Prompt 14 evaluates reusable page templates, such as:

- Hero section templates
- Service page templates
- Location page templates
- Blog post templates
- CTA blocks
- FAQ blocks
- Location blocks
- Schema templates used inside page templates
- Page-level content templates

Prompt 19 evaluates Site OS system assets, such as:

- Prompt files
- Workflow files
- Evaluation rubrics
- Checklist templates
- Prompt validation outputs
- Version comparison reports
- Benchmark output quality
- Scoring consistency
- Lock-readiness
- System-standard compliance

If the item being evaluated is a reusable page template for a website, use Prompt 14, not Prompt 19.

If the item being evaluated is a Site OS prompt file, workflow file, evaluation rubric, checklist, or validation template, use Prompt 19, not Prompt 14.

Prompt 19 does not replace:

- Prompt 04 Gap Fix — structural gap identification for a specific page
- Prompt 06 Claude Code Build — page implementation
- Prompt 07 QA Review — post-build technical and strategy review
- Prompt 08 Production Fix and TODO Resolution — fix session after QA
- Prompt 11 SERP Competitive Analysis — verified SERP and competitor research
- Prompt 12 Analytics and Measurement — analytics-based review
- Prompt 13 Content Quality Editor — content editorial improvement
- Prompt 14 Page Template Evaluation — reusable page template evaluation
- Prompt 15 Page Variant Battle — strategic page variant comparison
- Prompt 16 Search Intent Defense — search intent validation and defense
- Prompt 17 AI Citation Readiness — AI/LLM citation-readiness review
- Prompt 18 Page Moat — competitive durability and page defensibility review

Prompt 19 must not create implementation tickets, write production code, run technical page QA, fabricate validation results, fabricate benchmark scores, fabricate lock history, or rewrite prompt files unless specifically asked.

---

## Required Rules — Do Not Invent

This prompt must not invent any of the following:

- Benchmark scores, test results, or evaluation outputs not provided in the input
- Version history, prior validation results, or lock decisions not provided
- File contents, prompt text, template text, workflow text, or checklist text not provided in the input
- Repo state, commit history, file structure, branch status, or deployment status
- Performance claims about a prompt, template, rubric, workflow, or checklist not supported by the provided output
- Scoring results from prior validation runs not provided
- Lock status, approval status, or validation chain status not provided
- Rankings, quality comparisons, or competitive claims about Site OS prompts not provided
- Citations, references, external evaluations, or benchmark evidence not provided
- Output quality claims not supported by the pasted output
- Prompt behavior not visible in the file or output provided

If an evaluation dimension requires information not present in the input, flag it as:

NEEDS CONFIRMATION — [description of what is needed]

Do not fill in missing evaluation data with plausible assumptions.

Do not invent prior benchmark scores to support a version comparison.

Do not fabricate prior validation findings to justify a lock, patch, or rejection decision.

Do not claim a prompt is locked unless lock status is provided or the evaluation decision explicitly recommends locking.

Evaluation-based assessments are acceptable only when clearly labeled as assessments based on the provided input, not claimed as verified historical results.

---

## Objective

Evaluate whether this item helps improve the Site OS production system.

Depending on the item type, evaluate whether it improves:

1. Prompt quality
2. Workflow clarity
3. Benchmark repeatability
4. Output consistency
5. Version improvement
6. Scoring consistency
7. Lock-readiness
8. Fabrication prevention
9. Routing clarity
10. Input and output quality
11. SEO, AEO, GEO, SERP, and LLM alignment when relevant
12. Website strategy quality when relevant
13. Content quality when relevant
14. Claude Code implementation readiness when relevant
15. QA reliability when relevant
16. Conversion strategy when relevant

The goal is to produce a clear PASS, PATCH, or FAIL decision with evidence, required fixes, optional improvements, and next steps.

---

## Part 1: Evaluation Criteria

Present Part 1 scores as a table with the following columns:

| Dimension | Score | Reason | Gap | Recommended Fix | Priority |
|---|---:|---|---|---|---|

### System-Standard Dimensions

Score from 1 to 10 for all item types:

1. Prompt or template identity  
   Canonical name, file path, version, status, and role clarity.

2. Routing rule clarity  
   Which prompts it does not replace, workflow position, and usage conditions.

3. Input requirements  
   Completeness, execution depth, required fields, and incomplete-input handling.

4. Output requirements  
   Structure, usefulness, required sections, required vs. optional distinction, and decision clarity.

5. Fabrication prevention  
   Do Not Invent rules, NEEDS CONFIRMATION flagging, and safety against invented evidence.

6. Workflow compatibility  
   No conflicts with locked prompts, clear fit in Site OS workflow, and clean handoff paths.

7. Repeatability  
   Ability to produce consistent results across runs and evaluators.

8. Risk control  
   No overclaiming, no fake proof, no unsafe outputs, no unclear scope expansion.

9. Token efficiency  
   Appropriate depth for the task, not underbuilt or over-engineered.

10. Lock-readiness  
   Whether the item meets all system-standard requirements.

### Page-Strategy Dimensions

Score from 1 to 10 only when the item type is a page template, content strategy prompt, SEO prompt, AEO prompt, GEO prompt, conversion prompt, or website strategy prompt:

11. Search intent support  
12. SEO support  
13. GEO/local support if applicable  
14. AEO support  
15. LLM search readiness  
16. Rich snippet and schema support  
17. Topical authority support  
18. Competitive outperformance support  
19. Content moat support  
20. Conversion support  
21. Claude Code implementation readiness  
22. Output clarity and specificity  

For item types that are workflow files, checklists, rubrics, or evaluation templates, skip dimensions 11–22 and state:

“Page-strategy dimensions are not applicable for this item type.”

For each score, provide:

- Score
- Reason
- Gap identified
- Recommended fix
- Priority: High, Medium, or Low

---

## Part 2: Improvement Analysis

If a previous version is provided, compare the current version against the previous version.

Identify:

- What improved
- What got worse
- What stayed the same
- What became too long
- What became too vague
- What became more useful
- What became easier to implement
- What became harder to use
- What became safer
- What became more repeatable
- What became more aligned with Site OS standards
- What remaining gaps block locking

If no previous version is provided, state:

“No previous version was provided. This review evaluates the current item only.”

When comparing versions, include:

- Previous version score if provided
- Current version score
- Score change
- Improvement summary
- Regression risks
- Patch recommendations

Do not invent prior scores, prior findings, or previous-version behavior.

---

## Part 3: Output Quality Review

Evaluate whether the output is:

- Specific
- Structured
- Useful
- Competitor-aware when relevant
- Search-intent aligned when relevant
- Implementation-ready when relevant
- Conversion-focused when relevant
- Easy to evaluate
- Easy to hand off
- Free of fake claims
- Free of unnecessary complexity
- Aligned with the stated prompt purpose
- Consistent with Site OS standards
- Useful for the next workflow step

If output was not provided, state:

“No output was provided for benchmark review. Output quality cannot be fully assessed.”

For each issue, provide:

- Issue
- Why it matters
- Recommended fix
- Priority: High, Medium, or Low
- Blocking lock decision: YES / NO

---

## Part 4: Risk Review

Check for:

- Missing canonical identity
- Missing routing rules
- Missing execution depth
- Missing fabrication prevention
- Missing carry-forward logic
- Missing required output format
- Missing PASS/PATCH/FAIL decision language
- Overengineering
- Too much length
- Too much repetition
- Generic output
- Missing stop conditions
- Weak page-type logic when relevant
- Weak implementation notes when relevant
- Weak conversion logic when relevant
- Weak competitive strategy when relevant
- Excessive token usage
- Scope overlap with locked prompts
- Unsafe assumptions
- Fabricated evidence risk
- Inconsistent scoring
- Weak versioning guidance

For each risk, provide:

- Risk
- Risk level: High, Medium, or Low
- Why it matters
- Recommended fix
- Blocking lock decision: YES / NO

---

## Part 5: Final Decision

### Decision

Choose one:

- PASS — meets all system-standard requirements; ready to lock or use as master
- PATCH — meets most requirements; specific sections must be added or corrected before locking
- FAIL — does not meet system-standard requirements; must be rebuilt or significantly revised before re-evaluation

### If PASS, state:

- Whether the item is ready to lock
- Version to lock
- Any optional improvements remaining
- Recommended next action

### If PATCH, state:

- Each required patch item
- Whether each patch is blocking lock: YES / NO
- Recommended version after patching, such as v1.1
- Recommended confirmation test type
- Recommended next action

### If FAIL, state:

- What must be rebuilt
- Whether any sections can be salvaged
- Recommended approach: rebuild from scratch / rebuild specific sections
- Recommended next action

### Legacy Decision Mapping

Legacy decision options may be used only for version comparison context, not as final lock decisions:

- Keep as master = PASS
- Keep with minor edits = PATCH, minor
- Revise and retest = PATCH, major
- Rewrite completely = FAIL
- Split into smaller prompts = scope is too wide for a single prompt
- Merge with another prompt = scope overlaps significantly with a locked prompt
- Archive = item is superseded or no longer needed

Explain the decision and cite specific evidence from the provided item, output, benchmark result, or validation input.

Do not invent evidence.

---

## Part 6: Recommended Improvements

Provide:

1. Top 10 improvements
2. Required patches
3. Optional improvements
4. What to remove
5. What to simplify
6. What to make more specific
7. What to make optional
8. What to make required
9. Suggested next version
10. Suggested retest benchmark
11. Suggested confirmation test
12. Suggested status update
13. Final quality score out of 100

For each required patch, include:

- Patch item
- Why it is needed
- Exact recommended patch text if possible
- Blocking lock decision: YES / NO
- Recommended placement in the file

Focus on whether the prompt, template, workflow, checklist, or rubric actually improves the Site OS production system.

---

## Carry-Forward Items

If any evaluation finding requires additional input, prior validation records, benchmark outputs, file contents, version history, repo state, or verified system information to resolve safely, flag each item with:

- Item
- Status: NEEDS INPUT CONFIRMATION, NEEDS PRIOR VALIDATION RECORD, NEEDS BENCHMARK OUTPUT, NEEDS FILE CONTENTS, NEEDS VERSION HISTORY, or NEEDS REPO CONFIRMATION
- Blocking lock decision: YES / NO
- Recommended next action

Examples include missing:

- File contents
- Prior version text
- Prior validation report
- Benchmark output
- Score history
- Lock history
- Commit history
- Repo file path confirmation
- Prompt Master Status entry
- Supporting Prompts Validation Summary entry

Do not invent data to resolve flagged items.

---

## Required Output Format

Use this structure unless the user requests a specific format:

# Template Eval Rubric Report

## Evaluation Summary

- Item Name:
- Item Type:
- File Path:
- Current Version:
- Previous Version:
- Evaluation Goal:
- Lock Target:
- Execution Depth:
- Overall Score:
- Decision: PASS / PATCH / FAIL

## Part 1: Evaluation Criteria Scorecard

[System-standard dimensions — all item types]

[Page-strategy dimensions — page templates and strategy prompts only, or state not applicable]

## Part 2: Improvement Analysis

[Version comparison if previous version provided, or state “No previous version provided.”]

## Part 3: Output Quality Review

[Provide findings]

## Part 4: Risk Review

[Provide findings]

## Part 5: Final Decision

[PASS / PATCH / FAIL with explanation]

## Part 6: Recommended Improvements

[Provide improvements]

## Carry-Forward Items

[List items or state “No carry-forward items identified.”]

---

## Final Instruction

Do not invent benchmark scores, validation results, lock status, version history, file contents, prior test outputs, repo state, commit history, or performance claims.

Evaluate only what was provided in the input.

Flag missing information as NEEDS CONFIRMATION rather than assuming it.

Use PASS, PATCH, or FAIL as the final decision language.

Focus on system-standard compliance, output quality, repeatability, safety, workflow compatibility, and lock-readiness. 