# Client Repo Prompt System Setup Prompt

A copy-paste-ready Claude Code prompt that creates the full client-side Site OS prompt and documentation system inside any client repo, per `docs/client-repo-prompt-system-standard.md`.

Use this prompt at new-client startup (during `docs/new-client-startup-workflow.md` Phase B step 12a) or to backfill the structure into an existing client repo that pre-dates this standard.

---

## How to Use

1. Fill in the placeholder values in the "Inputs" block below.
2. Copy the entire prompt body below the `--- BEGIN COPY-PASTE PROMPT ---` marker.
3. Paste it into a Claude Code session opened in the client repo (`cd <CLIENT_REPO_PATH>`).
4. Approve the file-creation pass.
5. Run the prompt's final pre-commit QA before staging.

## Inputs (fill in before pasting)

- `{{CLIENT_NAME}}` — full client business name (e.g., `Final Touch Cleaning Company`)
- `{{CLIENT_REPO_PATH}}` — absolute path to the client repo (e.g., `C:\Users\Welcome\Desktop\client-sites\final-touch-cleaning-company-site`)
- `{{GITHUB_REPO}}` — GitHub remote URL (e.g., `https://github.com/SedrickHarris/final-touch-cleaning-company-site.git`)
- `{{SITE_OS_MASTER_PATH}}` — absolute path to Site OS Master (e.g., `C:\Users\Welcome\Desktop\site-os-master`)
- `{{PRIMARY_SERVICES}}` — comma-separated list of primary services (e.g., `Commercial & Office Cleaning, Janitorial Services, Post-Construction Cleanup, Move-In Cleaning, Move-Out Cleaning, Deep Cleaning, Retail Space Cleaning`)
- `{{PRIMARY_LOCATIONS}}` — comma-separated list of primary cities + county (e.g., `Las Vegas, Henderson, North Las Vegas, Boulder City, Clark County`)
- `{{BRAND_MESSAGE}}` — short core message (e.g., `Where small details bring BIG RESULTS.`)
- `{{PHONE}}` — display-format phone number (e.g., `(702) 444-5077`)
- `{{EMAIL}}` — primary email address (e.g., `info@finaltouchcleaningteam.com`)

---

## --- BEGIN COPY-PASTE PROMPT ---

```
You are working inside the {{CLIENT_NAME}} website repo.

Client repo: {{CLIENT_REPO_PATH}}
GitHub repo: {{GITHUB_REPO}}
Site OS Master repo: {{SITE_OS_MASTER_PATH}}

Goal:
Create the full client-side Site OS prompt and documentation system inside this
client repo per docs/site-os/decisions/client-repo-prompt-standard.md (which you
will also create as part of this setup).

Source standard: docs/client-repo-prompt-system-standard.md in Site OS Master.

Important:
- Do not edit app code (no app/, no components/, no lib/, no public/).
- Do not install packages.
- Do not deploy.
- Do not commit until review.
- Do not invent business data.
- Do not add fake reviews, ratings, testimonials, license numbers, insurance
  details, awards, certifications, years in business, before/after results,
  customer photos, team photos, project photos, pricing guarantees, or
  unsupported trust signals.

Workflow:
Fast Build Batch (no Gate 1/2/3 ceremony for docs work).

Required preconditions before starting:
- docs/brand-guide.md exists
- docs/site-build-plan.md exists (or equivalent client build plan)
- docs/site-os/<client>-build-context.md exists
- docs/site-os/fast-build-batch-workflow.md exists
- docs/site-os/no-fake-data-policy.md exists
- docs/site-os/file-scope-and-git-safety-policy.md exists
- docs/site-os/service-business-conversion-layout.md exists
- docs/site-os/service-card-image-placeholder-standard.md exists
- docs/site-os/implementation-log.md exists

If any of these are missing, stop and run the new-client-startup-workflow first
to scaffold the Site OS Master root docs.

Steps:

1. Create the required folder structure under docs/site-os/:

   - docs/site-os/prompts/build
   - docs/site-os/prompts/content
   - docs/site-os/prompts/seo-aeo
   - docs/site-os/prompts/qa
   - docs/site-os/prompts/updates
   - docs/site-os/reference
   - docs/site-os/checklists
   - docs/site-os/outputs/batch-2
   - docs/site-os/qa
   - docs/site-os/decisions

   Add .gitkeep files to outputs/batch-2 and qa so empty folders are tracked.

2. Create the 14 required prompt files:

   Build (adapt the 5 batch prompts to {{CLIENT_NAME}}'s page list, services,
   and locations):
   - docs/site-os/prompts/build/batch-2-core-brand-pages-prompt.md
   - docs/site-os/prompts/build/batch-3-service-pages-prompt.md
     (services: {{PRIMARY_SERVICES}})
   - docs/site-os/prompts/build/batch-4-city-location-pages-prompt.md
     (locations: {{PRIMARY_LOCATIONS}})
   - docs/site-os/prompts/build/batch-5-neighborhood-pages-prompt.md
   - docs/site-os/prompts/build/batch-6-service-city-matrix-prompt.md

   Content (project-agnostic; keep verbatim from the Final Touch reference impl
   except client-name references):
   - docs/site-os/prompts/content/seo-aeo-content-generation-prompt.md
   - docs/site-os/prompts/content/content-strengthening-prompt.md

   SEO/AEO (project-agnostic):
   - docs/site-os/prompts/seo-aeo/serp-analysis-prompt.md
   - docs/site-os/prompts/seo-aeo/aeo-gap-analysis-prompt.md

   QA (project-agnostic, with {{PHONE}} {{EMAIL}} substitutions where natural):
   - docs/site-os/prompts/qa/page-qa-prompt.md
   - docs/site-os/prompts/qa/seo-aeo-qa-prompt.md
   - docs/site-os/prompts/qa/pre-commit-qa-prompt.md

   Updates (project-agnostic):
   - docs/site-os/prompts/updates/content-gap-fix-prompt.md
   - docs/site-os/prompts/updates/content-update-prompt.md

3. Create the 3 reference docs:

   - docs/site-os/reference/client-build-prompt-index.md
     (catalog of all client-side prompts with when-to-use)
   - docs/site-os/reference/seo-aeo-content-standards.md
     (page-level SEO/AEO rules)
   - docs/site-os/reference/service-business-design-standards.md
     (two-column hero/CTA + service card image placeholder + motion + a11y)

4. Create the 3 checklists:

   - docs/site-os/checklists/page-before-build-checklist.md
   - docs/site-os/checklists/page-after-build-checklist.md
   - docs/site-os/checklists/content-quality-checklist.md

5. Create the decision doc:

   - docs/site-os/decisions/client-repo-prompt-standard.md
     (adoption record for this standard inside {{CLIENT_NAME}}'s repo)

   The decision doc states:
   - This client repo now carries the full Site OS prompt and documentation
     system per Site OS Master's docs/client-repo-prompt-system-standard.md
   - Lists the required folders and prompt files
   - Documents the rationale (continuity across sessions, operators, master
     divergence, audit trail)
   - Documents maintenance behavior (master changes do not auto-update this
     repo; sync via opt-in chore commits)

6. Pattern for adapting build prompts to {{CLIENT_NAME}}:

   - Replace generic "service" / "location" placeholders with the actual
     {{PRIMARY_SERVICES}} and {{PRIMARY_LOCATIONS}} for this client.
   - Reference the client's {{BRAND_MESSAGE}} where the hero copy is exemplified.
   - Reference {{PHONE}} in display format and tel: link format where the prompt
     shows CTA examples.
   - Reference {{EMAIL}} as the fallback contact channel.
   - Pull contact + service-area constants from lib/constants/site.ts in
     implementation guidance (do NOT hardcode in the prompt; reference the
     constants).

7. Pattern for keeping content / SEO-AEO / QA / update prompts verbatim:

   - These prompts are project-agnostic. Copy them verbatim from the Final Touch
     reference implementation.
   - Only substitute {{PHONE}} and {{EMAIL}} where the prompt example shows a
     specific number (typically inside the pre-commit-qa-prompt's no-fake-data
     spot-check grep pattern).

8. No-fake-data carry-through:

   Every prompt must include a "No-Fake-Data" section or stop condition that
   either lists the forbidden claim types or cross-references
   docs/site-os/no-fake-data-policy.md.

   Specifically forbid:
   - Reviews, ratings, testimonials, star displays
   - License numbers, insurance details
   - Years in business, jobs completed counts
   - Awards, certifications, accreditations
   - Pricing claims, satisfaction guarantees
   - Customer / team / project / before-after photos
   - Same-day / 24/7 / emergency availability claims (unless owner-verified)

9. Design-standards carry-through:

   Every build prompt must cross-reference both layout primitives:
   - docs/site-os/service-business-conversion-layout.md (two-column hero/CTA)
   - docs/site-os/service-card-image-placeholder-standard.md (image placeholders)

   reference/service-business-design-standards.md consolidates both as the
   client-side reference.

10. Validation:

    Since this batch creates only docs files (no app code, no constants
    changes), run:

    git status                              # confirm only docs/site-os/ paths changed
    git diff --stat                         # confirm sizes look reasonable
    git status -s | grep -v "^?? docs/site-os/" | grep -v "^A  docs/site-os/"

    The last grep should return only the expected baseline unstaged items
    (e.g., the pre-existing implementation-log.md modifications, .gitignore,
    etc.) — NOT any unexpected files.

    Skip lint / type-check / build (no app code changed).

11. Update implementation log:

    Append a "### Client-Side Site OS Prompt System Adopted" entry to
    docs/site-os/implementation-log.md with:
    - Date
    - Files created (folders + prompt counts; not all 23 paths individually)
    - Source standard: docs/client-repo-prompt-system-standard.md (Site OS Master)
    - No app code or constants changed
    - Ready for review before commit

12. Final report:

    Return a markdown report with these sections:
    - Folders Created
    - Prompt Files Created (grouped by category)
    - Reference Docs Created
    - Checklists Created
    - Decision Doc Created
    - SEO/AEO Coverage (which prompts handle which dimension)
    - Design Standards Coverage (two-column hero/CTA + image placeholder)
    - No-Fake-Data Coverage (per prompt)
    - Git Status
    - Ready for Review?

13. Stop conditions:

    - Do not commit until the report is approved.
    - Do not edit app code, constants, layout components, or any file outside
      docs/site-os/.
    - Do not deploy.
    - If a required upstream doc (workflow / policy / context) is missing, stop
      and surface — adopt the prompt system on top of a complete root, not
      alongside an incomplete one.
```

## --- END COPY-PASTE PROMPT ---

## After Running the Setup Prompt

1. Review the staged scope and the final report.
2. Run `docs/site-os/prompts/qa/pre-commit-qa-prompt.md` to confirm.
3. Commit explicitly per `docs/file-scope-and-git-safety-policy.md` §5:

   ```
   cd "{{CLIENT_REPO_PATH}}"
   git add docs/site-os/prompts \
           docs/site-os/reference \
           docs/site-os/checklists \
           docs/site-os/decisions \
           docs/site-os/outputs \
           docs/site-os/qa \
           docs/site-os/implementation-log.md
   git diff --cached --name-only      # verify scope
   git commit -m "docs(site-os): adopt client-side prompt and documentation system"
   git push
   ```

4. The client repo is now self-sufficient for ongoing build, content, SEO/AEO, gap-fix, update, and QA work.

## Related Files

- `docs/client-repo-prompt-system-standard.md` — the canonical standard this prompt implements
- `docs/new-client-startup-workflow.md` — onboarding flow that invokes this prompt at Phase B step 12a
- `docs/file-scope-and-git-safety-policy.md` — staging discipline for the commit
- `docs/no-fake-data-policy.md` — content safety the new prompts inherit

---

Site OS Master — Client Repo Prompt System Setup Prompt v1.0
Status: Adopted 2026-05-17
Reason for creation: provide a copy-paste-ready Claude Code prompt that sets up the full client-side Site OS prompt and documentation system in any client repo, so the standard can be applied consistently without re-deriving the file structure per client.
