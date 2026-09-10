# SB Mobile Installations Job Content Schema Specification

**Document:** 30-job-content-schema-specification.md  
**Project:** SB Mobile Installations Website and Installer Recruitment Project  
**Business:** SB Mobile Installations, LLC  
**Primary objective:** Maintain one validated job record that can safely drive pages, structured data, platform postings, forms, and reporting.  
**Status:** Working data specification  
**Version:** 0.1  
**Last updated:** September 10, 2026

---

## 1. Purpose

This document defines the content and validation model for active installer jobs, evergreen role pages, closed jobs, and installer-network pathways.

It works with:

- 07-site-architecture.md;
- 13-schema-markup-plan.md;
- 14-conversion-strategy.md;
- 15-analytics-and-measurement.md;
- 28-recruitment-strategy.md;
- 29-recruitment-platform-distribution.md;
- 31-recruitment-operations-automation.md; and
- the careers and job components in 20-component-inventory.md.

The model separates controlled job facts from page presentation. A page, schema object, or platform posting must not invent values that are absent from the approved record.

---

## 2. Model Principles

- One job ID identifies one operational opening.
- One canonical URL represents the public website page.
- Status controls publication, application, schema, and promotion behavior.
- Required, preferred, and unknown facts are distinct.
- Empty values are not permission to guess.
- Visible content and structured data use the same validated source.
- External platform adaptations preserve factual meaning.
- Closed records remain available for history and redirect decisions but are not active openings.
- Network interest is a separate record type.
- Personal candidate submissions are never stored in public content files.

---

## 3. Record Types

| Record type | Purpose | JobPosting allowed |
|---|---|---|
| Active job | Current approved opening | Yes, when eligible |
| Scheduled job | Approved future opening not yet public | No |
| Closed job | Previously public opening | No |
| Evergreen role | General role education | No |
| Installer network | Future-opportunity registration | No |
| Draft or unverified | Internal preparation | No |

---

## 4. Publication States

| State | Website page | Application | JobPosting | Sitemap | External posting |
|---|---|---|---|---|---|
| Draft | No | No | No | No | No |
| Approved | Controlled release | As approved | Not automatically | As approved | As approved |
| Active | Yes | Yes or approved handoff | Yes when eligible | Yes when eligible | Yes |
| Paused | Review required | Disabled or reviewed | Remove or hold | Review | Pause or update |
| Closed | Yes, closed state | No active submit | No | Policy-based | Close |
| Archived | Redirect/noindex decision | No | No | No | No |

Publication status must be explicit rather than inferred from a missing date.

---

## 5. Core Job Fields

| Field | Type | Required | Notes |
|---|---|---|---|
| jobId | stable string | Yes | Never reused |
| slug | string | Yes before publication | Lowercase and stable |
| publicTitle | string | Yes | Candidate-facing title |
| internalTitle | string | Conditional | Never public unless approved |
| status | enum | Yes | Controlled lifecycle value |
| summary | text | Yes for public page | Direct role description |
| recruitingMarket | string | Conditional | Approved market or territory |
| locationModel | enum | Yes when public | Remote, field, onsite, hybrid, or approved equivalent |
| locationDisplay | string | Conditional | Only verified public detail |
| employmentType | enum | Conditional | Use only when approved |
| engagementType | enum | Conditional | Employee, contractor, assignment, or approved value |
| responsibilities | list | Yes for active page | Verified work duties |
| requiredQualifications | list | Yes for active page | Actual minimums |
| preferredQualifications | list | No | Clearly labeled preferences |
| expectations | list | Conditional | Travel, vehicle, tools, documentation |
| schedule | text/object | Conditional | Publish only when approved |
| compensation | object | Conditional | Publish only when approved or required |
| application | object | Yes for active public job | Destination and instructions |
| dates | object | Yes for lifecycle | Publication and closure controls |
| owner | string | Yes internal | Responsible reviewer |
| source | object | Yes internal | Origin and verification |
| seo | object | Yes before publication | Metadata and canonical |
| schema | object | Yes before publication | Eligibility and mappings |

---

## 6. Controlled Enums

### status

Allowed values:

- draft;
- approved;
- active;
- paused;
- closed; and
- archived.

### locationModel

Use only approved values, such as:

- field;
- onsite;
- remote;
- hybrid; or
- assignment-based.

If the work model does not fit a controlled value, stop publication and document the decision.

### employmentType

Use a value only when the business and legal review support it. Do not infer employee or contractor status from informal language.

### engagementType

Keep operational engagement language separate from schema employment type when the distinction matters. A role may require internal clarification before publication.

---

## 7. Public Title Rules

The public title must:

- identify the work;
- use candidate-recognizable terminology;
- avoid excessive abbreviations;
- avoid internal codes;
- avoid all-caps or urgency;
- avoid unverified compensation;
- avoid location stuffing; and
- remain consistent across the canonical page and platforms.

Examples should be created only after the actual role is approved. Do not use “Mobile Installer” as a placeholder for a materially different role.

---

## 8. Summary Rules

The summary should answer:

- what work is performed;
- what environment or equipment is involved when verified;
- where or how the work occurs;
- what type of candidate should continue; and
- what the next action is.

The summary must not promise employment, income, assignments, benefits, response time, or advancement without an approved source.

---

## 9. Responsibilities

Responsibilities are factual duties, not generic employer slogans.

Each item should:

- begin with a clear action;
- describe observable work;
- avoid overlapping duplicates;
- exclude unapproved business claims;
- remain understandable outside internal jargon; and
- match platform versions in substance.

Use an ordered list only when sequence matters. Otherwise use a standard list.

---

## 10. Qualification Model

### Required qualifications

A required qualification is a genuine minimum for the opening. Do not add desirable traits to this list to improve search reach.

### Preferred qualifications

A preferred qualification may strengthen fit but must not be presented as a minimum.

### Unknown qualifications

If the requirement is undecided, do not publish a placeholder. Resolve the decision or omit it with an approved explanation.

### Transferable experience

When adjacent experience is acceptable, state the approved categories clearly. Do not imply that unrelated experience automatically qualifies.

---

## 11. Practical Expectations

Use a separate expectations field for items such as:

- vehicle requirements;
- tools or equipment;
- travel;
- documentation;
- communication;
- site access;
- physical or environmental conditions; and
- scheduling realities.

Every expectation must be verified, necessary, and written in accessible language. Do not hide consequential expectations below the application form.

---

## 12. Schedule and Compensation

Schedule and compensation are consequential job facts.

Rules:

- publish only approved values;
- identify whether a range, rate, or description is used;
- include currency and period when required;
- do not convert informal estimates into promises;
- do not omit legally required information;
- update every platform when the value changes; and
- remove stale values when the job closes.

Legal review may be required for jurisdiction-specific pay-transparency or classification requirements.

---

## 13. Application Object

The application object should define:

- destination type: onsite, ATS, or approved external platform;
- canonical application URL;
- opening identifier;
- button label;
- pre-application instructions;
- fields or documents required;
- privacy link;
- expected next step when approved;
- fallback contact path; and
- analytics source mapping.

An application destination must not silently switch to an installer-network form or commercial inquiry.

---

## 14. Dates and Lifecycle

Track:

- datePosted;
- validThrough when applicable;
- lastReviewed;
- statusChangedAt;
- closedAt;
- contentUpdatedAt; and
- nextReviewAt.

Dates should use a consistent machine-readable format and a clear display format. Do not publish a future or closing date unless the business can maintain it.

---

## 15. SEO Object

The SEO object should contain:

- title;
- meta description;
- canonical URL;
- open graph title;
- open graph description;
- social image;
- indexation decision;
- robots decision;
- breadcrumb path; and
- internal-link relationships.

Metadata must describe the actual page and must not turn an evergreen role into an active opening.

---

## 16. Schema Eligibility

An active JobPosting object may be generated only when:

- status is active;
- the page is publicly accessible;
- the opening is genuine and current;
- title and description are visible;
- location or work model is valid;
- application path works;
- dates are valid;
- required schema fields are available; and
- the page is not noindexed or blocked.

Do not generate JobPosting for draft, paused, closed, archived, evergreen, or network records.

---

## 17. JobPosting Mapping

Map only verified fields:

| Job record | Structured data concept |
|---|---|
| publicTitle | title |
| summary and approved detail | description |
| datePosted | datePosted |
| validThrough | validThrough |
| recruitingMarket/locationDisplay | jobLocation when eligible |
| locationModel | jobLocationType where eligible |
| employmentType | employmentType |
| compensation | baseSalary when eligible |
| application URL | directApply or application pathway where eligible |
| organization identity | hiringOrganization |
| canonical URL | url |

The implementation must follow the current schema plan and validate each mapping. Do not populate a property just because the vocabulary permits it.

---

## 18. Location Rules

Location data must distinguish:

- recruiting market;
- work territory;
- physical work location;
- company office;
- service area; and
- candidate residence requirement.

Never transform a recruiting market into a physical office. Never publish a street address or exact site location unless approved and necessary.

---

## 19. Canonical URL Rules

The canonical URL is generated from the stable job ID and approved slug policy.

Rules:

- use one canonical path;
- do not embed changing compensation or dates in the slug;
- do not reuse a closed job URL for a different opening;
- preserve redirects when a slug correction is necessary;
- use the canonical URL in platform postings and structured data; and
- keep query parameters out of the canonical value.

---

## 20. Platform Adaptation Fields

External distribution may require:

- short title;
- short summary;
- platform location;
- platform classification;
- platform salary fields;
- platform skills;
- platform application method;
- platform expiration;
- platform source parameters; and
- platform posting ID.

These are adaptations, not alternate truth. Store the canonical field reference and reviewer for every consequential adaptation.

---

## 21. Evergreen Role Record

An evergreen role record may contain:

- role ID;
- public role title;
- role summary;
- typical responsibilities when verified;
- transferable experience;
- general expectations;
- related active-job links;
- network pathway;
- candidate FAQs;
- reviewed date; and
- explicit evergreen status.

It must not contain active-job urgency, an active application button for a nonexistent opening, or JobPosting schema.

---

## 22. Installer Network Record

The installer-network record should contain:

- network ID;
- public purpose;
- eligible candidate description;
- information requested;
- consent and privacy language;
- no-guarantee disclosure;
- form destination;
- confirmation copy;
- owner;
- review date; and
- approved future-opportunity categories.

It is not a job record and must not be exported as one.

---

## 23. Validation Rules

Before publication, validate:

- stable ID exists;
- slug is unique;
- title is present;
- status is allowed;
- active status has an application path;
- required qualifications exist or are intentionally omitted;
- dates are coherent;
- location model is allowed;
- compensation is complete if present;
- canonical URL is valid;
- schema eligibility is explicit;
- no unverified fields are marked public;
- platform adaptations reference the canonical record; and
- owner and review date exist.

Validation failure blocks publication or moves the record back to review.

---

## 24. Status Transition Rules

### Draft to approved

Business owner has confirmed the role, source facts, scope, and publication decision.

### Approved to active

Canonical page, application path, metadata, schema eligibility, and distribution plan have passed QA.

### Active to paused

Opening is temporarily unavailable, under review, or requires material correction.

### Active to closed

Applications are no longer accepted or the hiring need is complete.

### Closed to archived

The page no longer provides useful candidate value and has an approved redirect, noindex, or removal decision.

Do not use a status transition to conceal a content correction.

---

## 25. Closed Job Behavior

When status becomes closed:

- remove active Apply action;
- state closure clearly;
- remove active urgency;
- remove JobPosting schema;
- update platform listings;
- stop paid promotion;
- offer active openings or network registration;
- preserve useful role information when appropriate;
- update sitemap and indexation according to policy; and
- record closure evidence.

Do not delete the record before operational and reporting needs are complete.

---

## 26. Public versus Private Fields

### Public candidates may see

- title;
- approved summary;
- responsibilities;
- requirements;
- practical expectations;
- approved location/work model;
- schedule and compensation when approved;
- application instructions; and
- privacy information.

### Internal only

- internal notes;
- recruiter comments;
- screening decisions;
- candidate data;
- private customer or site information;
- platform credentials;
- unpublished compensation discussions;
- internal scoring; and
- sensitive operational details.

Public content files must never contain candidate submissions.

---

## 27. Example Type Direction

Implementation should use typed interfaces or schemas equivalent to:

- JobRecord;
- JobStatus;
- LocationModel;
- Compensation;
- ApplicationDestination;
- JobDates;
- SeoMetadata;
- SchemaEligibility;
- PlatformPosting;
- EvergreenRole; and
- InstallerNetworkRecord.

The exact validation library is an open implementation decision. Runtime validation is required at publication boundaries.

---

## 28. Content Generation Rules

Pages and platform copy may be generated from the validated record, but generation must:

- preserve approved facts;
- omit unknown values;
- keep required and preferred labels;
- retain status language;
- preserve the application destination;
- avoid duplicate keyword variants;
- avoid invented benefits or culture statements; and
- pass human review before publication.

AI assistance does not replace source approval.

---

## 29. Analytics Mapping

Use stable IDs and controlled values for:

- job list view;
- job view;
- apply click;
- application start;
- application step completion;
- application error;
- accepted application;
- network start;
- accepted network registration;
- platform referral click; and
- closed-job alternative click.

Do not send names, email addresses, phone numbers, resumes, or free-text values.

---

## 30. Testing Requirements

Test:

- valid active record;
- missing required field;
- invalid status;
- duplicate slug;
- closed job;
- evergreen role;
- network record;
- missing application path;
- compensation present and absent;
- location model variations;
- platform adaptation mismatch;
- schema inclusion and exclusion;
- sitemap inclusion and exclusion;
- noindex behavior;
- visible page content; and
- form destination.

Fixtures must use clearly synthetic data and must never resemble a real candidate submission.

---

## 31. Editorial Review Checklist

- [ ] Public title is accurate and candidate-readable.
- [ ] Summary explains the opportunity without unsupported promises.
- [ ] Responsibilities are specific.
- [ ] Required and preferred qualifications are distinct.
- [ ] Expectations are consequential and visible.
- [ ] Location and work model are accurate.
- [ ] Application path matches the opening.
- [ ] Dates are current.
- [ ] Status is visible.
- [ ] Network language is not mixed into the job application.
- [ ] Platform copy matches the canonical page.
- [ ] Closed behavior is defined.

---

## 32. Publication Checklist

- [ ] Record validation passes.
- [ ] Business owner approves.
- [ ] Canonical page passes QA.
- [ ] Metadata and schema pass validation.
- [ ] Application path is tested.
- [ ] Analytics mapping is approved.
- [ ] External platforms are selected.
- [ ] Platform posting record is created.
- [ ] Sitemap and robots behavior are intentional.
- [ ] Owner and next review date are recorded.

---

## 33. Definition of Done

The job content schema is ready when active, closed, evergreen, and network records are distinct; controlled fields and validation rules exist; public and private data are separated; page, schema, platform, form, analytics, sitemap, and closure behavior are mapped; runtime validation protects publication boundaries; and representative fixtures pass QA without invented or sensitive data.

---

## 34. Related Documents

- 07-site-architecture.md
- 13-schema-markup-plan.md
- 14-conversion-strategy.md
- 15-analytics-and-measurement.md
- 20-component-inventory.md
- 28-recruitment-strategy.md
- 29-recruitment-platform-distribution.md
- 31-recruitment-operations-automation.md

## 35. Maintenance

Update this specification when job fields, status transitions, schema requirements, platform mappings, application routing, privacy requirements, or operational review changes. Record material changes in Git and the project decision log.
