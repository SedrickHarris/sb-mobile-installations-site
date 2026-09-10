# SB Mobile Installations GitHub Workflow

**Document:** `18-github-workflow.md`  
**Project:** SB Mobile Installations Website and Installer Recruitment Project  
**Business:** SB Mobile Installations, LLC  
**Repository:** https://github.com/SedrickHarris/sb-mobile-installations-site.git  
**Default and production branch:** `main`  
**Deployment integration:** GitHub to Cloudflare Pages  
**Primary development tools:** Visual Studio Code, Claude, and Claude Code  
**Status:** Repository governance and implementation draft  
**Version:** 0.1  
**Last updated:** September 10, 2026

---

## 1. Purpose

This document defines how the SB Mobile Installations repository will be owned, configured, edited, reviewed, tested, merged, released, deployed, secured, and maintained in GitHub.

It governs:

- repository ownership and access;
- local Visual Studio Code workflow;
- branch naming and lifecycle;
- commit practices;
- issues, tasks, and labels;
- pull requests and review;
- protected `main` rules;
- required status checks;
- GitHub Actions;
- Cloudflare Pages integration;
- documentation and content changes;
- job publication changes;
- secrets and sensitive data;
- dependency management;
- releases and rollback;
- emergency changes;
- AI-assisted development; and
- repository maintenance.

The workflow must protect production without creating unnecessary process. Business truth, candidate privacy, build integrity, and recoverability take precedence over commit volume or development speed.

---

## 2. Workflow Objectives

The GitHub workflow must:

1. Keep `main` in a deployable state.
2. Make every production change traceable to an author, purpose, review, and test result.
3. Prevent failed builds from reaching the production branch.
4. Support safe Cloudflare preview deployments.
5. Separate development, publication, and indexation decisions.
6. Protect business, applicant, customer, and credential data.
7. Allow urgent job changes without bypassing source-of-truth validation.
8. Support a solo maintainer initially and stronger multi-person review when collaborators are added.
9. Make AI-assisted changes reviewable at the same standard as manually written changes.
10. Support fast, understandable rollback through Git history and Cloudflare deployments.

---

## 3. Repository Source of Truth

The GitHub repository is the canonical source for:

- application code;
- public content stored in the project;
- typed business and job records;
- static assets intended for deployment;
- metadata and schema generators;
- redirects and response headers;
- tests and validation scripts;
- deployment configuration stored as code;
- project documentation;
- issue and pull-request templates; and
- change history.

The repository is not the source of truth for:

- passwords or secrets;
- applicant records or resumes;
- customer inquiries or project details;
- CRM or ATS records;
- private analytics exports;
- domain-recovery codes;
- unredacted research containing personal data;
- billing information; or
- private stakeholder communications.

The business source-of-truth document and approved operational systems govern factual and personal information even when public-approved subsets are represented in code.

---

## 4. Repository Ownership

### Current repository

```text
https://github.com/SedrickHarris/sb-mobile-installations-site.git
```

### Required ownership model

- The repository owner retains administrative control.
- SB Mobile Installations receives durable access or an agreed handoff path appropriate to the service agreement.
- Sirius Systems Digital Marketing receives the access required to build and maintain the project.
- Developers receive the lowest role needed for assigned work.
- Recruiting and content reviewers do not require write access unless they edit source directly.
- Shared GitHub credentials are prohibited.
- Multifactor authentication is required for administrators and maintainers.

### Ownership decision

Before public launch, document whether the production repository will remain under the `SedrickHarris` account or move to an approved organization or client-controlled account.

The decision must address:

- billing and plan features;
- branch protection availability;
- ruleset availability;
- collaborator management;
- CODEOWNERS teams;
- Cloudflare GitHub App access;
- ownership after contract termination;
- backup administrators; and
- emergency access.

---

## 5. Access Roles

| Role | Recommended GitHub permission | Responsibilities |
|---|---|---|
| Repository owner | Admin | Ownership, access, rules, integrations, recovery |
| Lead developer | Maintain or Write | Implementation, review, releases, issue management |
| Supporting developer | Write or Triage as needed | Assigned development and pull requests |
| Content strategist | Triage or Read by default | Issues, review comments, content approval |
| Recruiting owner | Read or Triage | Job facts and workflow approval |
| Business approver | Read or Triage | Business truth and launch acceptance |
| Automation | Scoped GitHub App/token | Only the actions required by the integration |

### Access principles

- Grant named users, not shared accounts.
- Remove access immediately after role or vendor changes.
- Review access quarterly.
- Restrict administrative permission to the smallest practical group.
- Do not grant write access only to make review easier.
- Use time-limited access where supported.
- Audit installed GitHub Apps and tokens.

---

## 6. Default Branch

`main` is the default branch and the source branch for Cloudflare Pages production deployments.

### `main` rules

- Must remain buildable and deployable.
- Must not contain knowingly unverified production claims.
- Must not contain draft active jobs in the published route set.
- Must not contain secrets or applicant/customer data.
- Must not be force-pushed.
- Must not be deleted.
- Must receive changes through the approved pull-request workflow except a documented emergency exception.
- Must match the intended production source state after any Cloudflare rollback.

`main` is not a place for unfinished experiments or partially resolved merge conflicts.

---

## 7. Solo-Friendly Governance

The project may begin with one primary builder. GitHub review rules must protect the repository without making it impossible for the sole authorized maintainer to merge.

### Initial recommended configuration

- Require a pull request before merging where the repository plan supports it.
- Require passing status checks.
- Require conversation resolution.
- Block force pushes.
- Block branch deletion.
- Use squash merge.
- Do not require a second-person approval until an authorized reviewer exists.
- Require business approval through an issue, checklist, or recorded signoff for business-critical facts even if GitHub cannot enforce that approval technically.

### Multi-person upgrade

When another qualified reviewer is added:

- require at least one approving review;
- dismiss stale approvals after material new commits;
- require review of the most recent change by someone other than its author where useful;
- require CODEOWNERS review for sensitive paths; and
- restrict bypass rights.

The absence of a required GitHub reviewer does not authorize publishing unverified job, entity, compensation, location, legal, or privacy claims.

---

## 8. Development Model

### Standard flow

```text
Issue or scoped task
    -> update local main
    -> create working branch
    -> implement in VS Code / Claude Code
    -> run local checks
    -> commit focused changes
    -> push branch
    -> Cloudflare preview + GitHub checks
    -> review and approval
    -> squash merge to main
    -> Cloudflare production deployment
    -> production verification
```

### Working principles

- Start with a defined outcome.
- Keep changes small enough to review.
- Do not mix unrelated fixes in one pull request.
- Preserve user changes in a dirty worktree.
- Validate business facts before implementation.
- Verify generated output rather than trusting the build command alone.
- Record decisions where future builders can find them.

---

## 9. Local Repository Setup

### Clone

```bash
git clone https://github.com/SedrickHarris/sb-mobile-installations-site.git
cd sb-mobile-installations-site
```

SSH may be used after the developer's GitHub SSH key and repository access are configured.

### Confirm remote and branch

```bash
git remote -v
git branch --show-current
git status
```

Expected production branch:

```text
main
```

### Install and validate

```bash
npm ci
npm run check
```

If the repository has not been scaffolded, follow the approved initialization task rather than inventing a different framework or package manager.

### Visual Studio Code

Open the repository root:

```bash
code .
```

Recommended workspace behavior:

- use the project TypeScript version;
- format only changed files;
- respect EditorConfig;
- show ESLint and TypeScript diagnostics;
- avoid extension-driven rewrites of the entire repository;
- inspect Git changes before commit; and
- keep local environment files outside version control.

---

## 10. Synchronizing Before Work

Before creating a branch:

```bash
git switch main
git pull --ff-only origin main
git status
```

### Rules

- Use fast-forward-only pulls on `main`.
- Do not begin new work on an outdated branch intentionally.
- Do not discard uncommitted user changes.
- Stash only when the contents and recovery path are understood.
- Do not use destructive reset commands as routine cleanup.
- If unrelated changes exist, isolate the task or ask before modifying overlapping files.

---

## 11. Branch Naming

### Format

```text
[type]/[short-lowercase-description]
```

### Approved types

| Type | Use | Example |
|---|---|---|
| `feat/` | New user-facing capability | `feat/job-openings-index` |
| `fix/` | Defect correction | `fix/application-error-state` |
| `content/` | Page or copy update | `content/installer-requirements` |
| `job/` | Active job lifecycle change | `job/add-atlanta-installer-001` |
| `seo/` | Metadata, schema, links, redirects | `seo/jobposting-validation` |
| `design/` | Visual system or component styling | `design/career-card-system` |
| `docs/` | Repository documentation only | `docs/github-workflow` |
| `test/` | Test coverage or fixtures | `test/form-routing` |
| `chore/` | Maintenance without product behavior | `chore/update-eslint` |
| `security/` | Security hardening or remediation | `security/form-header-policy` |
| `hotfix/` | Urgent production correction | `hotfix/close-expired-job` |

### Branch rules

- Use one purpose per branch.
- Do not include personal names unless operationally necessary and approved.
- Never place candidate or customer data in a branch name.
- Delete the remote branch after merge unless it has an approved continuing purpose.
- Do not reuse an old merged branch for new work.
- Avoid long-lived branches that drift from `main`.

---

## 12. Creating a Branch

```bash
git switch main
git pull --ff-only origin main
git switch -c docs/github-workflow
```

Confirm:

```bash
git status
git branch --show-current
```

For issue-linked work, include the issue number when useful:

```text
feat/42-job-filtering
```

The description remains more important than the number.

---

## 13. Commit Standard

### Commit objective

Each commit should represent one coherent change that can be understood and, where practical, reverted independently.

### Recommended format

```text
type(scope): imperative summary
```

Examples:

```text
feat(careers): add active openings index
fix(forms): prevent duplicate application submissions
content(jobs): publish approved Atlanta installer role
seo(schema): remove JobPosting from closed jobs
docs(project): add GitHub workflow
chore(deps): update supported patch releases
```

### Allowed types

- `feat`
- `fix`
- `content`
- `seo`
- `design`
- `docs`
- `test`
- `refactor`
- `perf`
- `security`
- `chore`
- `revert`

### Commit rules

- Use present-tense imperative language.
- Explain what changed, not that files were changed.
- Keep the summary concise.
- Add a body when the reason, risk, or migration is not obvious.
- Reference an issue or decision when relevant.
- Do not include secrets, private URLs, candidate data, or customer details.
- Do not claim tests passed unless they were run.
- Do not use meaningless summaries such as `updates`, `fix`, or `changes`.
- Avoid mixing formatting-only rewrites with behavior changes.

---

## 14. Commit Scope

### Good commit boundaries

- add a typed job record and its tests;
- add one page template;
- implement one analytics event family;
- correct one redirect group;
- update one approved content cluster;
- close one expired job and remove its schema;
- update one dependency group after validation; or
- add one project document.

### Poor commit boundaries

- entire site rewrite plus dependency upgrades;
- several unrelated page changes;
- job publication mixed with design experimentation;
- generated files plus unexplained source changes;
- secrets or environment files mixed into a feature;
- formatting every file while fixing one component; or
- committing output without the source that generated it.

---

## 15. Staging and Reviewing Changes

Before commit:

```bash
git status
git diff
git diff --stat
```

Stage intentionally:

```bash
git add path/to/file
git diff --cached
```

Commit:

```bash
git commit -m "docs(project): add GitHub workflow"
```

### Rules

- Do not use `git add .` without reviewing the full worktree.
- Do not stage unrelated user changes.
- Review both staged and unstaged diffs.
- Confirm no local `.env` file or credential appears.
- Confirm binary assets are expected and optimized.
- Confirm generated artifacts follow repository policy.

---

## 16. Local Quality Gate

Before pushing a review-ready branch, run:

```bash
npm run check
```

The complete check should include:

- TypeScript validation;
- lint;
- unit and component tests;
- content validation;
- job validation;
- schema validation;
- internal-link validation;
- redirect validation;
- accessibility checks available in automation;
- static Next.js build; and
- generated-output validation.

### Changed-area tests

Also run relevant focused tests while developing. The full check remains required before merge.

### Manual review

Automation does not replace:

- factual approval;
- responsive visual review;
- keyboard testing;
- screen-reader smoke testing;
- form and ATS/CRM end-to-end verification;
- search snippet and schema inspection; or
- production smoke testing.

---

## 17. Pushing a Branch

```bash
git push -u origin docs/github-workflow
```

Later updates:

```bash
git push
```

### Push rules

- Push only intended commits.
- Do not force-push shared branches without coordination.
- Never force-push `main`.
- Use `--force-with-lease` rather than `--force` only when rewriting an unmerged personal branch is necessary and understood.
- Do not push known failing work as review-ready.
- Draft pull requests may contain incomplete work when clearly marked and safe for preview.

---

## 18. Issues and Work Items

Use GitHub Issues for work that benefits from scope, ownership, decisions, or future reference.

### Issue types

- feature;
- bug;
- content;
- active job;
- SEO/search;
- design;
- analytics;
- integration;
- accessibility;
- performance;
- security/privacy;
- deployment; and
- decision.

### Required issue fields

- objective;
- business or user value;
- affected audience;
- affected routes or systems;
- source-of-truth references;
- acceptance criteria;
- dependencies;
- privacy/security considerations;
- SEO/indexation considerations;
- owner; and
- target milestone when applicable.

### Issues must not contain

- applicant resumes;
- applicant contact information;
- customer project details;
- API keys or tokens;
- login credentials;
- private webhook URLs;
- security exploit details that require private handling; or
- unredacted logs containing personal data.

---

## 19. Recommended Labels

### Type labels

- `type:feature`
- `type:bug`
- `type:content`
- `type:job`
- `type:seo`
- `type:design`
- `type:docs`
- `type:maintenance`

### Area labels

- `area:careers`
- `area:jobs`
- `area:installer-network`
- `area:commercial`
- `area:forms`
- `area:schema`
- `area:analytics`
- `area:cloudflare`
- `area:github`
- `area:accessibility`
- `area:performance`

### Priority labels

- `priority:critical`
- `priority:high`
- `priority:normal`
- `priority:low`

### Status labels

- `status:blocked`
- `status:needs-business-review`
- `status:needs-technical-review`
- `status:needs-content-review`
- `status:ready`
- `status:deferred`

### Risk labels

- `risk:business-truth`
- `risk:applicant-data`
- `risk:indexation`
- `risk:deployment`
- `risk:security`

Avoid overlapping labels that encode the same concept in several ways.

---

## 20. Milestones

Recommended milestones:

- Repository Foundation
- Design System
- Recruitment Core
- Active Jobs and Applications
- Commercial Foundation
- Search and Schema
- Analytics and CRM
- Accessibility and Performance
- Prelaunch QA
- Production Launch
- Postlaunch Optimization

Milestones represent outcomes, not arbitrary dates. Assign target dates only after dependencies and business approvals are understood.

---

## 21. Pull Request Standard

Every standard production change should use a pull request.

### Pull request title

Use the commit-style format:

```text
feat(careers): add active openings index
```

### Pull request body

Include:

1. Summary.
2. Reason and user benefit.
3. Routes and systems changed.
4. Business facts or approvals used.
5. Screenshots for visual changes.
6. Tests run.
7. Accessibility impact.
8. SEO, schema, and indexation impact.
9. Analytics impact.
10. Form, privacy, and data impact.
11. Cloudflare preview URL.
12. Rollback approach.
13. Remaining blockers or follow-up.

### Pull request size

Prefer a change that can be reviewed accurately in one sitting. Split unrelated or high-risk areas into separate pull requests.

Large foundational pull requests require a clear file map and staged review order.

---

## 22. Pull Request Template

Recommended `.github/pull_request_template.md`:

```md
## Summary

## Why this change is needed

## Routes and systems affected

## Business facts and approvals

## Visual evidence

## Validation

- [ ] Typecheck
- [ ] Lint
- [ ] Tests
- [ ] Static build
- [ ] Content/job validation
- [ ] Schema/link/redirect validation
- [ ] Responsive review
- [ ] Keyboard/accessibility review

## Search and indexation impact

- [ ] No impact
- [ ] Metadata
- [ ] Canonical
- [ ] Robots
- [ ] Sitemap
- [ ] Schema
- [ ] Redirect

## Analytics, forms, and data impact

- [ ] No impact
- [ ] Analytics reviewed
- [ ] Form routing tested
- [ ] No PII sent to analytics or logs
- [ ] Preview uses nonproduction systems

## Cloudflare preview

## Rollback

## Follow-up or blockers
```

Adapt the template after the actual scripts and review workflow exist.

---

## 23. Draft Pull Requests

Use a draft pull request when:

- early feedback would prevent rework;
- a page requires staged visual review;
- a large change needs visibility before completion;
- Cloudflare preview is needed for stakeholder review; or
- technical direction is still being validated.

### Draft rules

- Mark incomplete areas clearly.
- Do not request formal review until acceptance criteria and required checks are ready.
- Keep preview integrations nonproduction.
- Do not label draft job content as an approved active opening.
- Convert to ready only after self-review and local validation.

GitHub does not automatically request CODEOWNERS review for a draft until it becomes ready for review.

---

## 24. Review Responsibilities

### Author self-review

Before requesting review:

- read the complete diff;
- remove debugging code;
- remove placeholders;
- confirm sources and approvals;
- confirm tests;
- inspect preview;
- inspect mobile behavior;
- inspect generated metadata/schema; and
- verify no secret or PII exists.

### Technical review

Check:

- architecture compatibility;
- type safety;
- correctness;
- duplication;
- error handling;
- security boundaries;
- tests;
- performance;
- accessibility; and
- deployment impact.

### Content/business review

Check:

- factual accuracy;
- entity identity;
- job status and terms;
- role and market accuracy;
- commercial claims;
- tone and clarity;
- conversion promise; and
- approval status.

### Search review

Check:

- intent alignment;
- URL and canonical;
- title and description;
- headings;
- internal links;
- schema eligibility;
- indexation decision;
- sitemap effect; and
- redirect effect.

---

## 25. Review Resolution

- Respond to substantive comments with the change, evidence, or reason for declining.
- Do not resolve a reviewer's active concern without acknowledgement unless it is obsolete and documented.
- New commits after approval require re-review when they materially change the diff.
- Do not hide unresolved business blockers in technical comments.
- Record architecture decisions in the appropriate project document or decision log.
- Keep discussions professional, specific, and tied to acceptance criteria.

Required conversation resolution may be enabled on `main` protection.

---

## 26. Merge Strategy

### Recommended method

Use **squash merge** for ordinary pull requests.

Benefits:

- one understandable commit per reviewed change;
- clean linear `main` history;
- easier release notes and rollback; and
- freedom to use iterative branch commits during development.

### Merge title

Use the final pull request title in the approved commit format.

### Merge message

Include the reason or issue reference when it adds long-term value.

### Disabled or discouraged methods

- Disable merge commits if linear history is required.
- Disable rebase merge unless the team intentionally maintains individual branch commits.
- Never merge with failing required checks.
- Do not use an administrator bypass for ordinary convenience.

---

## 27. Post-Merge Procedure

After merge:

1. Delete the merged branch.
2. Monitor the Cloudflare production build.
3. Confirm the deployed commit SHA.
4. Run the affected production smoke tests.
5. Verify forms, search controls, and analytics when relevant.
6. Update or close the linked issue.
7. Record any follow-up task.
8. Sync local `main`.

```bash
git switch main
git pull --ff-only origin main
git branch -d docs/github-workflow
```

Do not delete an unmerged branch until its work is intentionally abandoned or preserved elsewhere.

---

## 28. Protected `main` Configuration

Use a GitHub ruleset or branch protection rule supported by the repository plan.

### Initial required settings

- target branch: `main`;
- require pull request before merge where feasible;
- require status checks;
- require conversation resolution;
- require linear history;
- block force pushes;
- block deletion; and
- restrict bypass to the repository owner or designated emergency role.

### Review setting

Choose based on team capacity:

| Team state | Required approval setting |
|---|---|
| One authorized maintainer | Automated checks required; business approval recorded separately; do not create an impossible self-review gate |
| Two or more qualified reviewers | Require at least one approval |
| Sensitive integration/security changes | Require designated technical/code-owner approval where plan supports it |

### Strict status checks

Requiring a branch to be current with `main` reduces merge integration risk but can cause repeated builds on an active repository. Enable strict mode when concurrent changes justify it. For a low-volume solo repository, loose required checks may be acceptable if the post-merge production build is monitored.

### Bypass policy

- Use only for a documented emergency or repository recovery.
- Record who bypassed, why, what changed, and how it was verified.
- Apply protection to administrators when the team and recovery model can support it.
- Review bypass access quarterly.

---

## 29. Required Status Checks

Recommended required checks:

| Check | Purpose |
|---|---|
| `quality / typecheck` or unified `quality / validate` | Type safety |
| `quality / lint` | Code standards |
| `quality / test` | Automated tests |
| `quality / content` | Content and job validation |
| `quality / build` | Static production build |
| Cloudflare Pages preview check | Deployability and preview when stable |

### Check naming rules

- Use unique job names across workflows.
- Keep names stable after branch protection references them.
- Remove obsolete required checks before deleting or renaming their workflows.
- Select the trusted GitHub App as the expected source where supported.
- Do not require a check that never runs on documentation-only changes unless the workflow still returns a valid status.

GitHub warns that duplicate job names across workflows can make required status checks ambiguous and block merges.

---

## 30. GitHub Actions Quality Workflow

Recommended `.github/workflows/quality.yml` baseline:

```yaml
name: quality

on:
  pull_request:
    branches: [main]
  push:
    branches: [main]

permissions:
  contents: read

concurrency:
  group: quality-${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

jobs:
  validate:
    name: validate
    runs-on: ubuntu-latest
    timeout-minutes: 20

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version-file: .nvmrc
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Run project checks
        run: npm run check
```

### Workflow notes

- Pin actions according to the project's supply-chain policy; full commit SHAs provide stronger immutability than floating major tags.
- Update referenced SHAs through reviewed dependency maintenance.
- Use a unique, stable job name if the check becomes required.
- Set minimum permissions.
- Do not expose production secrets to pull-request code.
- Add artifact upload only when it provides a real diagnostic or review benefit.
- Split jobs only when parallelism or clearer failures justify the complexity.

---

## 31. GitHub Actions Security

### Permissions

- Set workflow-level `permissions` explicitly.
- Default quality checks to `contents: read`.
- Add write permission only to the job that requires it.
- Do not use `write-all`.

### Pull requests

- Treat all branch code as untrusted until reviewed.
- Do not expose secrets to workflows triggered by untrusted forks.
- Avoid `pull_request_target` for building or executing untrusted pull-request code.
- Review scripts invoked by workflows.
- Do not echo environment values.

### Third-party actions

- Prefer official or well-maintained actions.
- Review the action source and permissions.
- Pin to reviewed versions or commit SHAs.
- Remove unused actions.
- Do not add an action only to avoid a small transparent shell command.

### Workflow changes

Changes under `.github/workflows/` require heightened review because they can alter permissions, secrets, and deployment behavior.

---

## 32. GitHub Secrets and Variables

### Default deployment model

Cloudflare Pages Git integration performs deployment directly. The repository does not need a Cloudflare API token for ordinary Pages builds.

### When GitHub secrets are justified

- an approved GitHub Actions workflow deploys through the Cloudflare API;
- tests require a dedicated sandbox credential;
- an external quality service requires authentication; or
- a signed release or package workflow requires a private key.

### Rules

- Store sensitive values as GitHub secrets, not variables.
- Use environments for production-scoped secrets when Actions performs deployment.
- Restrict environment access and reviewers where supported.
- Prefer short-lived identity federation over long-lived cloud tokens when a provider supports it.
- Do not pass secrets as command-line arguments when the process list may expose them.
- Mask non-GitHub secrets added dynamically to logs.
- Rotate unused or exposed secrets.
- Audit Actions, Dependabot, environment, organization, and repository secrets separately.

### Never store

- applicant or customer data as secrets;
- resumes;
- general production database exports;
- domain recovery codes in Actions;
- shared user passwords; or
- secrets in issue bodies, pull requests, workflow YAML, examples, or screenshots.

---

## 33. GitHub Environments

If GitHub Actions later controls deployment or a protected release step, define:

- `preview`;
- `production`.

### Production environment controls

- restrict deployment branches to `main`;
- require an authorized reviewer where available and operationally appropriate;
- use production-scoped secrets;
- display the deployment URL;
- record deployment history; and
- prevent self-approval where the plan and team support it.

If Cloudflare Pages remains the sole deployment engine, do not create unused GitHub environments merely for appearance.

---

## 34. Cloudflare Pages Integration

Follow `17-cloudflare-deployment.md`.

### Required integration behavior

- Cloudflare App can access only the required repository where possible.
- `main` is the production branch.
- approved branches receive previews.
- preview deployments do not use production forms or analytics.
- Cloudflare check runs are visible in GitHub.
- a failed production build does not replace the current production deployment.
- the production deployment is verified after merge.

### Required-check caution

Do not make the Cloudflare check required until:

- its check name is stable;
- it runs for all relevant pull requests;
- branch skip rules cannot leave the pull request permanently blocked;
- preview builds are reliable; and
- repository administrators understand recovery.

---

## 35. CODEOWNERS

Use CODEOWNERS when at least one valid owner with write permission can review the paths.

Recommended location:

```text
.github/CODEOWNERS
```

Example requiring confirmation of actual GitHub users or teams:

```text
# Default repository owner
* @SedrickHarris

# Protect repository governance
/.github/ @SedrickHarris

# Deployment and security configuration
/next.config.* @SedrickHarris
/public/_headers @SedrickHarris
/public/_redirects @SedrickHarris
/scripts/ @SedrickHarris

# Business and job data
/src/data/business.* @SedrickHarris
/src/data/jobs.* @SedrickHarris
```

### CODEOWNERS rules

- Owners must have write permission.
- Path matching is case sensitive.
- Protect the CODEOWNERS file itself.
- Keep the file small and understandable.
- Use teams only in an organization and only when visible with write access.
- Requiring a code-owner review means approval from one listed owner may satisfy the rule; list and govern owners accordingly.

CODEOWNERS routes review. It does not prove that a reviewer has validated the underlying business fact.

---

## 36. Sensitive Path Review

Require heightened review for:

- `.github/workflows/`;
- `.github/CODEOWNERS`;
- `next.config.*`;
- `package.json` and lockfile;
- Cloudflare or Wrangler configuration;
- `public/_headers`;
- `public/_redirects`;
- form and integration code;
- analytics code;
- schema generators;
- business identity registry;
- job registry;
- robots and sitemap generation;
- security and privacy pages; and
- scripts that publish or transform content.

The pull request must describe security, privacy, search, deployment, and rollback impact for these paths.

---

## 37. Business Fact Changes

Changes to these values require an approval reference:

- business or legal name;
- relationship between SB Mobile Installations, LLC and Doral Transport LLC;
- phone, email, address, and hours;
- verified offices and service areas;
- hiring or contracting entity;
- employment or contractor classification;
- compensation;
- tools, vehicle, travel, schedule, and availability requirements;
- services, industries, and technology capabilities;
- certifications, partnerships, testimonials, and case studies; and
- applicant-data and privacy statements.

### Pull request requirement

Include the non-sensitive approval source, such as:

- approved issue number;
- decision-log entry;
- source-of-truth section; or
- stakeholder approval date and role.

Do not paste private email threads or personal data into GitHub to prove approval.

---

## 38. Job Change Workflow

Active jobs require an expedited but controlled workflow.

### Open a job

1. Create a `type:job` issue from approved intake.
2. Confirm actual opening, job ID, hiring entity, location, classification, terms, application route, and dates.
3. Create a `job/` branch.
4. Add the typed record and content.
5. Run job, schema, route, sitemap, and application tests.
6. Review the Cloudflare preview.
7. Record recruiting/business approval.
8. Merge after required checks.
9. Verify production and external platform consistency.

### Update a job

- preserve stable job ID and URL unless it becomes a materially different job;
- document changed terms;
- review schema and external listings;
- update verification date only after actual review; and
- verify production promptly.

### Close a job

1. Create a focused `job/close-...` or `hotfix/close-...` branch.
2. Set status to closed in the source record.
3. Disable application for that job.
4. Remove active JobPosting schema and sitemap eligibility.
5. Add accurate closed-state alternatives.
6. Run the full job lifecycle check.
7. Merge and monitor production.
8. Update external recruitment platforms.

Never leave a job active because the normal content calendar is delayed.

---

## 39. Content Change Workflow

### Standard content update

1. Open or reference the content issue.
2. Confirm target query, audience, page purpose, and next action.
3. Verify facts and sources.
4. Create a `content/` or `seo/` branch.
5. Update content and affected metadata/schema/internal links.
6. Run content and build validation.
7. Review preview at mobile and desktop widths.
8. Obtain required factual approval.
9. Merge and verify production.
10. Record substantive review date when appropriate.

### Content review rules

- Do not update `dateModified` for formatting-only changes without policy support.
- Do not create a new city, service, industry, or technology page from a keyword alone.
- Do not publish generic AI-generated content without source and business review.
- Do not combine recruitment and commercial conversion intent accidentally.
- Do not remove approved content silently while redesigning a page.

---

## 40. Documentation Workflow

### Document changes

- Use `docs/` branches when documentation is the only change.
- Keep filenames and numbering consistent with `00-project-overview.md`.
- Update dependent documents when a decision changes.
- Do not let code contradict an approved source-of-truth document silently.
- Reference implementation status accurately: proposed, approved, implemented, verified, or deprecated.
- Avoid creating duplicate documents for the same authority.

### Decision changes

When a material decision changes:

1. update the decision/change log;
2. update the governing document;
3. update dependent implementation docs;
4. update code and tests where applicable;
5. explain migration and rollback in the pull request; and
6. do not rewrite history to hide the previous decision.

---

## 41. AI-Assisted Development

Claude and Claude Code may assist with research, content, coding, refactoring, testing, and review. The repository owner remains responsible for every merged change.

### Required AI workflow

1. Give the tool the relevant project documents and exact task scope.
2. Ask it to inspect existing code before changing files.
3. Preserve unrelated user changes.
4. Require an explicit changed-file summary.
5. Review the complete diff.
6. Run project checks independently.
7. inspect factual claims, URLs, dependencies, and security behavior.
8. Test the preview and affected user journey.
9. Commit only the approved result.

### Do not provide to AI tools

- production secrets;
- applicant records;
- resumes;
- private customer data;
- credentials;
- recovery codes;
- sensitive logs; or
- confidential source material outside approved handling.

### AI-generated content

Must be reviewed for:

- hallucinated business facts;
- fabricated locations, services, certifications, clients, and results;
- employment/classification errors;
- duplicate or thin content;
- unsupported legal claims;
- keyword stuffing;
- inaccurate schema; and
- incorrect internal links.

“Generated successfully” is not evidence that the change is correct.

---

## 42. Claude Code Change Standard

Every implementation prompt should specify:

- repository and branch context;
- governing documents;
- exact outcome;
- files or route families in scope;
- content that must be preserved;
- business facts that remain blocked;
- recruitment/commercial separation;
- static-export constraint;
- required tests;
- prohibited actions;
- whether commit or push is authorized; and
- expected completion report.

### Default authorization boundary

Unless the task explicitly requests it, Claude Code should not:

- push to GitHub;
- merge a pull request;
- alter Cloudflare production settings;
- change DNS;
- create production secrets;
- publish an unverified job;
- connect preview forms to production systems; or
- remove unrelated work.

---

## 43. Generated Files

### Do not commit

- `node_modules/`;
- `.next/`;
- `out/` unless a future deployment decision explicitly requires it;
- coverage output;
- local logs;
- local environment files;
- Cloudflare local state;
- editor caches;
- temporary screenshots not intended as documentation; and
- downloaded applicant or customer files.

### Commit when source-controlled

- `package-lock.json`;
- generated `_headers` or `_redirects` source when the repository owns them;
- stable search files when generated at build from version-controlled inputs only if the chosen architecture commits them;
- generated type files only when required by tooling; and
- optimized public assets intended for deployment.

The project must choose one policy for each generated file class. Do not alternate between committed and build-only output.

---

## 44. `.gitignore` Standard

The repository should ignore at least:

```gitignore
node_modules/
.next/
out/
coverage/

.env
.env.local
.env.*.local

.wrangler/
.dev.vars

*.log
.DS_Store
Thumbs.db
.vscode/*.local.json
```

### Rules

- Commit `.env.example`, never real values.
- Do not ignore required source files broadly.
- Check whether a file is ignored before assuming it cannot enter history.
- Global ignore rules are helpful but do not replace repository rules.
- If a secret was committed, adding it to `.gitignore` does not remove it from history or revoke it.

---

## 45. Binary Asset Policy

### Allowed public assets

- approved logos;
- optimized WebP/AVIF/JPEG/PNG images;
- SVG icons reviewed for safety;
- licensed WOFF2 fonts;
- approved downloadable public documents; and
- video only when performance and storage strategy approve it.

### Requirements

- rights and source are documented;
- filenames follow SEO and project conventions;
- dimensions and compression are appropriate;
- no hidden EXIF/location or private metadata remains when unnecessary;
- no applicant/customer identity appears without approval;
- no duplicate oversized originals are deployed; and
- the pull request reports material size impact.

### Git LFS

Do not add Git LFS at launch unless asset volume and workflow justify it. Prefer external design-source storage and commit only production-ready assets.

---

## 46. Secret Scanning

### Local prevention

- keep secrets outside the repository;
- inspect staged diffs;
- use a secret scanner in pre-commit or CI when practical;
- use obvious placeholders in examples; and
- never paste full tokens into issues or pull requests.

### GitHub controls

Enable available GitHub secret scanning, push protection, and alerts according to repository visibility and plan.

### Exposure response

1. Revoke or rotate the credential immediately.
2. Stop affected deployments or integrations if needed.
3. Determine scope and access.
4. Remove the secret from current files.
5. Rewrite Git history only through an approved coordinated process when necessary.
6. Notify affected owners.
7. update dependent environments.
8. Add prevention and detection controls.

Deleting the commit or closing a pull request does not make an exposed secret safe.

---

## 47. Sensitive Data Prohibition

Do not commit, attach, paste, or upload:

- applicant names, contact details, answers, or resumes;
- background-check information;
- customer names, contact details, project descriptions, or pricing;
- authentication tokens;
- private analytics exports with user-level data;
- private business financial information;
- unredacted server logs;
- email/SMS message exports;
- form payloads; or
- screenshots showing sensitive systems.

### Test data

- Use synthetic records.
- Label them clearly.
- Never use a real person's phone or email without explicit approved purpose.
- Keep test credentials scoped to nonproduction.
- Delete test records from ATS/CRM under the approved process.

---

## 48. Dependency Management

### Policy

- Pin dependencies through the lockfile.
- Review release notes for framework and major package changes.
- Group related compatibility upgrades.
- Apply security patches promptly after validation.
- Avoid unnecessary dependencies.
- Prefer built-in platform and framework capabilities.
- Remove abandoned packages.

### Dependabot

Configure Dependabot only after deciding:

- update cadence;
- package ecosystems;
- grouping;
- open pull-request limit;
- reviewers;
- labels; and
- whether lockfile-only updates are acceptable.

### Dependency pull requests

Must include:

- reason for update;
- release-note or advisory link;
- breaking-change assessment;
- static build result;
- regression test result;
- preview review; and
- rollback plan.

Do not merge dependency updates solely because an automated check is green.

---

## 49. Dependency Review and Supply Chain

Use available GitHub dependency review and security features according to repository plan and visibility.

Review:

- new direct and transitive dependencies;
- license compatibility;
- maintainer and release history;
- install scripts;
- package typosquatting risk;
- bundled size;
- browser and server exposure;
- known vulnerabilities; and
- whether the dependency is needed.

Changes to GitHub Actions also represent supply-chain dependencies and require review.

---

## 50. Release Strategy

### Prelaunch

Use milestones and Cloudflare deployment records. Formal semantic version releases are optional during rapid foundation work.

### Initial launch

Create a GitHub release or annotated tag:

```text
v1.0.0
```

The release should identify:

- production commit;
- launch date;
- major route families;
- form and ATS/CRM status;
- search and analytics status;
- known limitations;
- migration notes; and
- rollback target.

### Postlaunch versions

Use semantic versioning as a communication convention:

- major: material architecture or incompatible operational change;
- minor: new page family or substantial feature;
- patch: compatible fix, content correction, or maintenance release.

Not every content edit needs a GitHub release. Every production edit remains a Git commit and deployment.

---

## 51. Changelog

Use GitHub releases, a `CHANGELOG.md`, or a project decision/change log based on the audience.

### Record material changes

- public launch;
- framework or hosting change;
- form or ATS/CRM integration change;
- business identity correction;
- URL migration;
- schema architecture change;
- major design-system release;
- privacy or consent change;
- security remediation; and
- recruiting workflow change.

Do not clutter the business-facing changelog with every internal refactor.

---

## 52. Rollback Through Git

### Preferred approach

Use a new revert commit or focused corrective commit so history remains visible.

```bash
git revert <commit-sha>
```

### Do not

- use `git reset --hard` on shared `main`;
- force-push `main` backward;
- delete evidence of the bad release;
- revert unrelated user work; or
- assume a Git revert reverses external ATS/CRM, DNS, Cloudflare, email, or search actions.

### Rollback coordination

Follow `17-cloudflare-deployment.md` for the production deployment rollback. After an emergency Cloudflare rollback, Git must be corrected so the next deployment does not reintroduce the issue.

---

## 53. Emergency Hotfix Workflow

### Qualifying emergencies

- public applicant-data exposure;
- exposed secret;
- broken application submission;
- wrong ATS/CRM routing;
- materially false active job;
- site-wide outage;
- destructive redirect or canonical error;
- production noindex across approved pages; or
- severe security vulnerability.

### Procedure

1. Open or record an incident.
2. Create `hotfix/[description]` from current `main`.
3. Make the smallest safe change.
4. Run the highest-value relevant tests and full check when time permits.
5. Create a pull request and obtain review when an authorized reviewer is available.
6. Use bypass only if the delay creates greater harm.
7. Merge and monitor Cloudflare production.
8. Verify the affected journey.
9. Record any skipped tests or controls.
10. Complete follow-up review and prevention work.

Emergency does not mean undocumented.

---

## 54. Reverting a Job Publication

Do not use a blind code rollback if it would reopen a different closed job or remove unrelated corrections.

Preferred job correction:

1. update the affected job source record;
2. disable its application path;
3. remove JobPosting schema and sitemap eligibility;
4. deploy the focused correction;
5. update external platforms; and
6. review received applications operationally.

Use a full deployment rollback only when the release has broader serious defects and the prior deployment represents the correct job state.

---

## 55. Conflict Resolution

### Principles

- Update the branch from `main` before final merge when necessary.
- Resolve conflicts based on current business truth and architecture, not mechanically.
- Re-run tests after conflict resolution.
- Re-review generated job, schema, metadata, redirect, and lockfile conflicts carefully.
- Do not use “ours” or “theirs” across a broad directory without inspecting what would be lost.

### Suggested flow

```bash
git fetch origin
git rebase origin/main
```

or merge `main` into the working branch if the team chooses that strategy. Do not rewrite a shared branch without coordination.

---

## 56. Repository Templates

Recommended files:

```text
.github/
├── CODEOWNERS
├── ISSUE_TEMPLATE/
│   ├── bug.yml
│   ├── content.yml
│   ├── job-change.yml
│   ├── feature.yml
│   └── config.yml
├── pull_request_template.md
├── dependabot.yml
└── workflows/
    └── quality.yml
```

Add only templates that the team will use. Empty or redundant forms create friction without governance value.

---

## 57. Job Issue Template Requirements

The job-change form should request controlled, non-sensitive details:

- change type: open, update, pause, close, archive;
- job ID;
- public role title;
- hiring entity approval status;
- recruiting market;
- location model;
- classification approval status;
- approved terms source;
- publication and expiration dates;
- application route;
- recruiting owner;
- external platforms affected;
- business approver;
- target publication date; and
- closure/update checklist.

Do not collect candidate data through the issue form.

---

## 58. Bug Report Requirements

A bug issue should include:

- concise problem;
- environment;
- affected URL;
- expected behavior;
- actual behavior;
- reproducible steps;
- browser/device when relevant;
- severity;
- screenshots with sensitive data removed;
- console or log excerpt with secrets and PII removed; and
- candidate, commercial, search, accessibility, or deployment impact.

Security vulnerabilities or sensitive data exposures require a private reporting channel, not a public issue.

---

## 59. Backup and Continuity

GitHub is the canonical source platform, but continuity requires more than a local clone.

### Controls

- at least one current authorized local clone;
- business-controlled administrator or handoff path;
- documented Cloudflare connection;
- protected `main`;
- releases or known-good commit references;
- dependency lockfile;
- environment-variable inventory without secret values;
- external secret and DNS ownership records;
- repository export or mirror strategy if contractually required; and
- offboarding procedure.

### Handoff package

Should identify:

- repository URL;
- production branch;
- current production commit;
- Cloudflare Pages project;
- domain and DNS owner;
- build commands;
- environment variable names;
- external integrations;
- open incidents and blockers;
- release and rollback procedures; and
- responsible contacts.

---

## 60. Repository Hygiene

### Weekly during active build

- review stale branches;
- review failed workflows;
- review open high-priority issues;
- review dependency alerts;
- confirm Cloudflare checks;
- ensure no large accidental files; and
- close or update obsolete pull requests.

### Monthly after launch

- review collaborators and Apps;
- review branch protection/rulesets;
- review Actions usage and failures;
- review secrets and variables;
- review Dependabot/security alerts;
- review inactive branches;
- review open production defects;
- confirm documentation matches the implementation; and
- verify `main` matches intended production source.

### Quarterly

- full access review;
- recovery and handoff review;
- dependency and framework posture;
- CODEOWNERS accuracy;
- workflow permission audit;
- secret rotation review;
- Cloudflare GitHub App scope; and
- archive obsolete issues, milestones, and labels.

---

## 61. Metrics for Workflow Health

Use these only to improve delivery, not to reward commit volume:

- pull request lead time;
- time from approval to production;
- failed required checks;
- production deployment failure rate;
- rollback count;
- escaped defects;
- mean time to restore;
- stale branches and pull requests;
- dependency alert age;
- job close-to-production time;
- application outage duration; and
- percentage of production changes with verified smoke tests.

Small sample sizes require qualitative review. Fast merging is not successful when it reduces factual accuracy, accessibility, candidate privacy, or production stability.

---

## 62. Recommended Repository Settings

### General

- Default branch: `main`.
- Enable Issues.
- Enable pull requests.
- Enable Discussions only if the team has a real use.
- Allow squash merge.
- Disable merge commits when enforcing linear history.
- Decide whether to allow rebase merge.
- Automatically delete head branches after merge.
- Configure vulnerability alerts and automated security fixes as supported.

### Pull requests

- Require branch protection/ruleset.
- Require conversations resolved.
- Require status checks.
- Add required approvals when reviewer capacity exists.
- Dismiss stale approvals for sensitive or multi-person workflows.

### Actions

- Allow only required actions and reusable workflows according to policy.
- Set default workflow token to read-only.
- Permit write only in explicit jobs.
- Limit fork pull-request workflow permissions.

### Security

- Enable Dependabot alerts.
- Enable secret scanning and push protection where available.
- Review private vulnerability reporting if the repository is public and the feature applies.
- Configure code scanning only when the signal and maintenance are justified.

---

## 63. Open Decisions

1. Will the repository remain under `SedrickHarris` or move to an organization/client account?
2. Is the repository public or private?
3. Which GitHub plan features are available?
4. Who is the backup administrator?
5. Who may merge to `main`?
6. Is there an authorized second reviewer at launch?
7. Will pull requests be required during the initial solo build?
8. Which checks will be required by name?
9. Will strict up-to-date branch checks be required?
10. Will rulesets or classic branch protection be used?
11. Will signed commits be required?
12. Will CODEOWNERS be enabled immediately?
13. Which business/recruiting approver reviews active jobs?
14. Which branch patterns receive Cloudflare previews?
15. Will Cloudflare's preview check be required?
16. Will GitHub Actions run one unified job or several parallel jobs?
17. Will Actions pin third-party steps to commit SHAs?
18. Will Dependabot be enabled at launch?
19. Which secret-scanning features are available and enabled?
20. Will formal GitHub releases begin at launch?
21. Where will deployment and business approvals be recorded?
22. What private channel receives security reports?
23. What repository handoff rights are required by the client agreement?
24. Who may authorize an emergency protection bypass?

Do not silently choose ownership, approval, publication, or security decisions. Record the approved answer and update repository settings and this document together.

---

## 64. Implementation Checklist

### Ownership and access

- [ ] Repository owner confirmed.
- [ ] Client access/handoff model approved.
- [ ] Primary and backup administrators identified.
- [ ] Multifactor authentication confirmed.
- [ ] Collaborator roles follow least privilege.
- [ ] Cloudflare GitHub App scope reviewed.

### Repository configuration

- [ ] `main` is default.
- [ ] Repository description and website field are accurate.
- [ ] Squash merge enabled.
- [ ] Automatic branch deletion enabled.
- [ ] Issues enabled.
- [ ] Labels created.
- [ ] Milestones created as needed.

### Protection

- [ ] `main` ruleset or protection exists.
- [ ] Force pushes blocked.
- [ ] Branch deletion blocked.
- [ ] Required checks configured after first successful runs.
- [ ] Conversation resolution required.
- [ ] Review requirement matches actual reviewer capacity.
- [ ] Bypass permissions restricted.

### Templates and ownership

- [ ] Pull request template created.
- [ ] Bug issue form created.
- [ ] Content issue form created.
- [ ] Job-change issue form created.
- [ ] CODEOWNERS created if valid owners exist.
- [ ] CODEOWNERS file protects itself.

### CI and security

- [ ] Quality workflow created.
- [ ] Workflow permissions set explicitly.
- [ ] Node version matches local and Cloudflare.
- [ ] `npm ci` uses committed lockfile.
- [ ] `npm run check` succeeds.
- [ ] Action dependencies are reviewed and pinned per policy.
- [ ] Dependabot/security alerts configured.
- [ ] Secret scanning and push protection configured where available.

### Cloudflare

- [ ] Git integration targets the correct repository.
- [ ] `main` is production.
- [ ] preview branch controls are approved.
- [ ] production and preview checks appear in GitHub.
- [ ] preview does not use production forms or analytics.
- [ ] post-merge production verification is assigned.

### Documentation and operations

- [ ] README contains setup and commands.
- [ ] CLAUDE instructions define authorization boundaries.
- [ ] contribution/workflow guidance links to this document.
- [ ] deployment and rollback records have a home.
- [ ] private security reporting route is documented.
- [ ] handoff procedure is documented.

---

## 65. Definition of Done

The GitHub workflow is implemented when:

- repository ownership and client access are documented;
- `main` is the default Cloudflare production branch;
- appropriate branch protection or rulesets are active;
- force pushes and deletion are blocked;
- required checks run successfully and have stable unique names;
- pull requests use the approved template;
- issue forms support bugs, content, and job changes;
- solo or multi-person approval rules match actual team capacity;
- sensitive paths receive appropriate review;
- CODEOWNERS is valid if enabled;
- GitHub Actions uses minimum permissions;
- secrets and applicant/customer data are absent from repository content and logs;
- dependency and security-alert processes are assigned;
- Cloudflare previews are connected and isolated from production systems;
- squash merge and post-merge verification are practiced;
- job publication and closure have a controlled rapid workflow;
- rollback uses traceable Git changes rather than destructive history rewriting;
- emergency bypass has a documented owner and audit process;
- AI-assisted work receives full human diff, test, factual, and preview review; and
- repository maintenance and handoff procedures have named owners.

---

## 66. Authoritative References

Confirm configuration against current GitHub and Cloudflare documentation:

- [GitHub protected branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)
- [GitHub repository rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets)
- [GitHub required status checks](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-status-checks)
- [GitHub CODEOWNERS](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)
- [GitHub pull requests](https://docs.github.com/en/pull-requests)
- [GitHub Actions workflow syntax](https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions)
- [GitHub Actions security](https://docs.github.com/en/actions/security-for-github-actions/security-guides/security-hardening-for-github-actions)
- [GitHub Actions secrets](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets)
- [GitHub deployment environments](https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/manage-environments)
- [GitHub Dependabot configuration](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file)
- [GitHub secret scanning](https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning)
- [Cloudflare Pages GitHub integration](https://developers.cloudflare.com/pages/configuration/git-integration/github-integration/)
- [Cloudflare Pages branch deployment controls](https://developers.cloudflare.com/pages/configuration/branch-build-controls/)

GitHub features vary by repository visibility, ownership type, and plan. Current official documentation and tested repository behavior take precedence over examples in this draft.

---

## 67. Related Project Documents

- `00-project-overview.md`
- `01-business-source-of-truth.md`
- `09-content-strategy.md`
- `13-schema-markup-plan.md`
- `14-conversion-strategy.md`
- `15-analytics-and-measurement.md`
- `16-technical-architecture.md`
- `17-cloudflare-deployment.md`
- `19-claude-project-instructions.md`
- `25-quality-assurance-checklist.md`
- `26-launch-checklist.md`
- `27-post-launch-growth-plan.md`
- `28-recruitment-strategy.md`
- `29-recruitment-platform-distribution.md`
- `30-job-content-schema-specification.md`
- `31-recruitment-operations-automation.md`

The technical architecture defines the system. The Cloudflare deployment plan defines production delivery. This document defines the change-control path that connects local work to those systems.

---

## 68. Maintenance Standard

Update this document when:

- repository ownership or visibility changes;
- the team or reviewer capacity changes;
- the branch strategy changes;
- protection rules or required checks change;
- the merge method changes;
- GitHub Actions or permissions change;
- Cloudflare Git integration changes;
- CODEOWNERS changes;
- the job publication workflow changes;
- dependency or security tooling changes;
- AI development tools or authorization boundaries change;
- release or rollback procedures change;
- a security or data incident exposes a gap; or
- GitHub changes a feature used by the project.

Record material workflow changes in the decision log and update affected templates, rulesets, workflows, and contributor instructions in the same reviewed change.
