# SB Mobile Installations Analytics and Measurement Plan

**Document:** `15-analytics-and-measurement.md`  
**Project:** SB Mobile Installations Website and Installer Recruitment Project  
**Business:** SB Mobile Installations, LLC  
**Primary measurement outcome:** Qualified applicants who become activated installers  
**Secondary measurement outcome:** Qualified commercial opportunities and resulting business value  
**Status:** Strategy and implementation draft  
**Version:** 0.1  
**Last updated:** September 9, 2026

---

## 1. Purpose

This document defines how SB Mobile Installations will measure website visibility, visitor behavior, candidate conversion, recruiting quality, installer activation, local presence, commercial conversion, and business value.

It governs:

- measurement objectives and key performance indicators;
- analytics, search, profile, recruiting, and CRM data sources;
- event and parameter naming;
- recruitment and commercial funnel reporting;
- campaign and referral attribution;
- job-platform and external-form tracking;
- organic, local, AI, and answer-engine visibility;
- dashboard and reporting requirements;
- privacy, consent, access, and retention;
- quality assurance and monitoring; and
- measurement ownership and maintenance.

The system must answer whether the website is attracting the right people and creating useful business outcomes. Traffic, rankings, clicks, and form starts are diagnostic indicators—not the final definition of success.

---

## 2. Measurement North Star

### Primary north-star metric

**Activated installers attributable or reasonably connected to website-supported acquisition.**

An activated installer is a candidate who has completed the approved recruiting and onboarding process and reached the operational milestone defined by the business. The exact milestone—such as onboarding completion, first accepted assignment, or first completed assignment—must be approved before reporting begins.

### Primary supporting metric

**Qualified application rate by role, market, and acquisition source.**

This identifies whether the site attracts candidates who satisfy the approved minimum criteria rather than merely generating application volume.

### Secondary north-star metric

**Qualified commercial opportunities attributable or reasonably connected to website-supported acquisition.**

Recruitment and commercial results must never be combined into a single lead total.

---

## 3. Measurement Principles

### 3.1 Measure outcomes, not vanity metrics

Sessions, rankings, impressions, clicks, and CTA interactions provide context. Qualified candidates, activated installers, qualified commercial opportunities, and resulting value determine effectiveness.

### 3.2 Keep journeys separate

Report active-job applications, installer-network registrations, candidate referrals, general contacts, and commercial inquiries as separate journeys with separate conversion rates and downstream outcomes.

### 3.3 Use the authoritative system for each fact

Search platforms are authoritative for search visibility. Web analytics is authoritative for measured onsite behavior. The ATS or recruiting CRM is authoritative for candidate status. The commercial CRM is authoritative for opportunity status and value.

### 3.4 Preserve context through the funnel

Job, market, landing page, campaign, referral, and channel context should follow a conversion into the appropriate operating system when technically and legally permitted.

### 3.5 Do not send personal data to web analytics

Names, email addresses, telephone numbers, resumes, file names, street addresses, free-text responses, customer information, and other personally identifiable information must not be included in analytics events, URLs, page titles, parameters, or user properties.

### 3.6 Prefer confirmed success events

A successful API, form processor, ATS, or CRM acknowledgement should trigger the submission event. A button click alone is not a completed application or inquiry.

### 3.7 Document limitations

Search privacy thresholds, cross-device use, blocked scripts, external platforms, offline conversations, and multi-touch journeys prevent perfect attribution. Reports must distinguish direct observation from inference.

### 3.8 Maintain truthful reporting

Do not present modeled, sampled, manually observed, or estimated values as exact platform totals. Do not imply that citations, rankings, rich results, or AI mentions are guaranteed.

---

## 4. Questions the Measurement System Must Answer

### Recruitment

- Which roles, locations, and recruiting markets generate qualified candidates?
- Which landing pages and search topics lead to job views and application starts?
- Where do candidates abandon the application?
- Which sources produce applications, qualified candidates, approvals, and activated installers?
- How long does each recruiting stage take?
- Which job platforms produce quality rather than only volume?
- Are active jobs, evergreen role pages, and installer-network pages being used as intended?
- Are candidates receiving timely follow-up?
- What is the cost and operational effort per qualified candidate and activated installer when spend data is available?

### Organic, local, and AI discovery

- Which queries and pages earn Google and Bing visibility?
- Which pages gain impressions but underperform on click-through rate?
- Which recruiting markets and commercial topics are growing?
- Which rich-result or search-appearance types are recorded?
- How do users interact with the verified Google Business Profile and Apple Business Connect presence?
- Is the business being cited or referred by Microsoft Copilot, ChatGPT, Perplexity, and other AI or answer systems where observable?
- Which cited or referred pages contribute to meaningful onsite and downstream outcomes?

### Commercial

- Which service, industry, technology, and location pages produce qualified inquiries?
- Which sources produce discovery calls, proposals, wins, and business value?
- Where do commercial visitors abandon the inquiry flow?
- How quickly are qualified inquiries contacted?

### Site quality

- Are important pages reachable, indexable, and receiving search activity?
- Are analytics and conversion events working after deployments?
- Are forms producing errors or duplicate records?
- Are preview, internal, and automated visits contaminating production reporting?

---

## 5. KPI Hierarchy

### Tier 1: Business outcomes

| KPI | Definition | Source of truth | Reporting priority |
|---|---|---|---|
| Activated installers | Candidates reaching the approved activation milestone | ATS/recruiting CRM or operations system | Primary |
| Qualified applicants | Submitted applicants who satisfy the approved qualification stage | ATS/recruiting CRM | Primary |
| Qualified commercial opportunities | Inquiries accepted into the qualified opportunity stage | Commercial CRM | Secondary |
| Commercial wins | Opportunities marked won | Commercial CRM | Secondary |
| Attributed business value | Approved revenue or value associated with won opportunities | Finance/CRM | Secondary |

### Tier 2: Funnel outcomes

| KPI | Definition | Primary source |
|---|---|---|
| Completed job applications | Server- or ATS-confirmed job-specific submissions | Form backend/ATS |
| Installer-network registrations | Confirmed, consented network submissions | Recruiting CRM |
| Application completion rate | Confirmed applications divided by application starts | Analytics plus backend |
| Applicant qualification rate | Qualified applicants divided by confirmed applications | ATS/recruiting CRM |
| Installer activation rate | Activated installers divided by qualified applicants | ATS/operations |
| Commercial inquiry completion rate | Confirmed inquiries divided by inquiry starts | Analytics plus backend |
| Commercial qualification rate | Qualified opportunities divided by confirmed inquiries | Commercial CRM |
| Time to first contact | Time from confirmed submission to first logged human contact attempt | ATS/CRM |
| Time to activation | Time from application receipt to approved activation milestone | ATS/operations |

### Tier 3: Acquisition and engagement

| KPI | Definition | Primary source |
|---|---|---|
| Organic search clicks | Clicks from a search result to the site | Search Console/Bing Webmaster Tools |
| Organic search impressions | Recorded appearances in search results | Search Console/Bing Webmaster Tools |
| Organic CTR | Search clicks divided by search impressions | Search platform |
| Search query and page visibility | Query/page performance as platforms make it available | Search platform |
| Engaged sessions | GA4 engaged-session definition | GA4 |
| Job views | Views of active job detail pages | GA4 |
| Apply clicks | Clicks that open or leave for an application flow | GA4 |
| Form starts | First meaningful interaction with a form | GA4 |
| CTA click-through rate | Relevant CTA clicks divided by eligible page views | GA4 |
| Local profile actions | Calls, website clicks, directions, or other available actions | Profile platform |
| AI referral sessions | Sessions with identifiable AI-platform referral or campaign source | GA4/log data |
| AI citations | Citations recorded by an available first-party platform report or approved observation method | Platform/manual observation |

### Tier 4: Technical health

| KPI | Definition | Source |
|---|---|---|
| Event delivery health | Expected events received without unexplained loss or duplication | GA4/debug and backend logs |
| Submission discrepancy | Difference between analytics submissions and backend accepted records | GA4 plus backend |
| Form error rate | Form error events divided by form starts | GA4/backend |
| Index coverage and sitemap status | Search engine discovery and indexing signals | Search Console/Bing Webmaster Tools |
| Core Web Vitals status | Field performance classifications for eligible URLs | Search Console/field monitoring |
| 4xx/5xx rate | Error responses for users and crawlers | Cloudflare logs/monitoring |

---

## 6. KPI Definitions and Formulas

Use the following standard formulas unless a report explicitly documents another method.

```text
Application start rate = unique application_start users / unique job_view users

Application completion rate = accepted application_submit records / unique application_start users

Applicant qualification rate = qualified applicants / accepted applications

Activation rate = activated installers / qualified applicants

Job-view-to-activation rate = activated installers / unique job_view users

Commercial inquiry completion rate = accepted commercial_form_submit records / unique commercial_form_start users

Commercial qualification rate = qualified opportunities / accepted commercial inquiries

Organic CTR = organic search clicks / organic search impressions

CTA click-through rate = unique CTA click users / eligible unique page viewers

Form error rate = users with a form error / users who started that form
```

### Formula rules

- State whether the denominator uses users, sessions, events, applications, or records.
- Use backend-accepted records for completed submissions whenever possible.
- Exclude test, spam, duplicate, withdrawn-before-review, and internal records only through documented rules.
- Do not retroactively change qualification criteria without versioning the definition.
- Report small samples with raw counts and caution rather than strong percentage conclusions.
- Separate active-job applications from network registrations.
- Separate recruitment outcomes from commercial outcomes.

---

## 7. Measurement Architecture

### Core flow

1. A visitor discovers a page through search, a profile, a recruitment platform, a referral, direct navigation, social content, or a campaign.
2. The website records privacy-appropriate page and interaction events.
3. Search platforms independently record search visibility and clicks.
4. A secure backend or external platform accepts the application or inquiry.
5. The submission is written to the appropriate ATS or CRM with approved acquisition context.
6. Recruiting or commercial teams update downstream stages.
7. A reporting layer combines aggregate acquisition, behavior, and outcome data.

### Recommended systems

| Layer | Recommended role | Required at launch |
|---|---|---:|
| Cloudflare Pages | Production hosting and deployment | Yes |
| Cloudflare operational analytics/logs | Availability, traffic, status, security, and error context as available | Yes |
| Google Analytics 4 | Onsite behavior and conversion-event analysis | Yes |
| Google Search Console | Google organic search visibility and indexing | Yes |
| Bing Webmaster Tools | Bing visibility, indexing, and available AI citation reporting | Yes |
| Google Business Profile | Local profile visibility and actions if an eligible verified profile exists | Conditional |
| Apple Business Connect | Apple place-card presence and available insights if eligible | Conditional |
| ATS or recruiting CRM | Candidate records, stages, qualification, and activation | Yes |
| Commercial CRM | Inquiry, opportunity, stage, and value | Yes when commercial forms launch |
| Dashboard/reporting layer | Unified weekly and monthly scorecards | Yes; may begin with native reports |
| Data warehouse | Durable event/outcome joins and longitudinal reporting | Later, when justified |

### Source-of-truth rule

When sources disagree:

- use the search platform for its own impressions, clicks, queries, and search appearances;
- use GA4 for processed onsite events and sessions;
- use the submission backend for accepted application and inquiry totals;
- use the ATS/recruiting CRM for candidate stages and activation;
- use the commercial CRM for opportunity stages and value;
- use Cloudflare for edge, request, availability, and security observations; and
- document known time-zone, processing, privacy, and attribution differences.

---

## 8. Account and Property Structure

### Required ownership model

- SB Mobile Installations should own or have durable administrator access to production properties.
- Sirius Systems Digital Marketing receives the least privilege needed to configure, validate, and report.
- Do not create production properties under an individual contractor's personal account as the only owner.
- Maintain at least two business-controlled administrators where the platform permits it.
- Use named user access rather than shared credentials.
- Enable multifactor authentication.
- Record recovery and ownership information in the approved credential-management system, not in the repository.

### Recommended property inventory

| Platform | Property/account | Environment |
|---|---|---|
| GA4 | One production web property and stream for the canonical domain | Production only |
| Search Console | Domain property plus URL-prefix property if useful for testing | Production |
| Bing Webmaster Tools | Canonical production domain | Production |
| Cloudflare | Business-owned zone and Pages project | Production and preview |
| Google Business Profile | Verified eligible business profile | Production business identity |
| Apple Business Connect | Verified eligible company/location record | Production business identity |
| ATS/CRM | Dedicated production workspace or pipeline | Production |
| Test systems | Separate test property, workspace, or debug mode | Local/preview/staging |

### Environment isolation

- Production analytics must fire only on the approved canonical production hostname.
- Local and Cloudflare preview URLs should use analytics debug mode, a test property, or no production collection.
- Mark all seeded applications and inquiries with a non-PII test flag in the backend.
- Exclude internal and automated QA traffic where practical without weakening data integrity.
- Never allow test job records to be indexed.

---

## 9. GA4 Configuration Standard

### Baseline configuration

- Install the approved Google tag through the site implementation or a controlled tag manager.
- Use one implementation path; avoid duplicate direct-tag and tag-manager collection.
- Enable only reviewed enhanced-measurement features.
- Configure cross-domain measurement if the approved application platform requires it and supports it.
- Set internal-traffic rules using documented business IP ranges only when appropriate.
- Configure unwanted-referral exclusions for approved payment, form, scheduling, or ATS domains when applicable.
- Set the reporting time zone to the business's approved operating time zone.
- Set currency only after the reporting currency is confirmed.
- Review data retention, advertising personalization, Google Signals, product links, and consent behavior with the business and legal/privacy owner.
- Register only necessary custom dimensions and metrics.
- Mark only meaningful outcome events as key events.

### GA4 event selection rule

Use automatically collected and recommended GA4 events where they accurately fit. Use custom events for project-specific actions that do not have an appropriate standard event. Google notes that recommended events use predefined names and parameters, while custom events generally require custom reports or explorations.

### Key event policy

Recommended launch key events:

- `application_submit`;
- `installer_network_submit`;
- `commercial_form_submit`; and
- optionally `generate_lead` only if it is implemented as a single normalized mirror of an accepted inquiry and does not create duplicate reporting.

Do not mark page views, job views, button clicks, form starts, or form errors as key events.

### Cardinality controls

Do not register high-cardinality values as custom dimensions unless reporting requires them. Never register:

- raw full URLs containing uncontrolled parameters;
- timestamps;
- unique record IDs;
- user-entered text;
- resume names;
- email addresses;
- telephone numbers; or
- per-person identifiers.

---

## 10. Event Naming Standard

### Syntax

- lowercase;
- snake_case;
- start with a letter;
- describe an action or confirmed state;
- remain stable once published;
- avoid platform names in general business events;
- avoid ambiguous names such as `click_button` or `conversion`.

### Event categories

| Pattern | Use | Example |
|---|---|---|
| `{object}_view` | Meaningful object viewed | `job_view` |
| `{object}_start` | Journey or form intentionally started | `application_start` |
| `{object}_step_complete` | Defined step completed | `application_step_complete` |
| `{object}_error` | User-facing or processing error | `application_error` |
| `{object}_submit` | Backend-accepted submission | `application_submit` |
| `{journey}_cta_click` | Journey-specific CTA click | `careers_cta_click` |
| `{channel}_contact_click` | Contact method initiated | `recruiter_contact_click` |

### Change control

Any new event requires:

- business question;
- exact trigger;
- owner;
- approved parameters;
- privacy review;
- test case;
- report destination; and
- documentation update.

Do not rename an event silently. Deprecate it, record the transition date, and update affected dashboards.

---

## 11. Shared Event Parameters

Use only controlled, non-PII values.

| Parameter | Purpose | Example | Rules |
|---|---|---|---|
| `journey_type` | Separate major funnels | `active_job`, `installer_network`, `commercial` | Controlled enum |
| `page_type` | Classify the current template | `job_detail`, `role`, `service`, `location` | Controlled enum |
| `content_id` | Stable non-personal content identifier | `guide-field-tech-career` | Not a user ID |
| `content_group` | Topic cluster | `installer_careers` | Controlled enum |
| `job_id` | Stable public or internal job identifier | `sbi-atl-001` | Never candidate-specific |
| `job_title_key` | Normalized role label | `mobile_electronics_installer` | Approved enum |
| `job_status` | Job state | `active`, `closed`, `evergreen` | Approved enum |
| `market_id` | Approved recruiting market code | `atlanta_ga` | Must not overstate location |
| `location_scope` | Geographic scope type | `city`, `metro`, `state`, `national` | Controlled enum |
| `cta_id` | Stable CTA component ID | `job_hero_apply` | No rendered personal text |
| `cta_location` | Placement group | `hero`, `inline`, `sticky`, `footer` | Controlled enum |
| `form_id` | Stable form definition | `job_application_v1` | Not a submission ID |
| `form_step` | Normalized step number or name | `experience` | Controlled enum |
| `error_type` | Non-sensitive error category | `required_field`, `upload_failed` | No field value |
| `contact_method` | Selected contact channel | `phone`, `email` | Controlled enum |
| `link_domain` | Destination domain for outbound action | `approved-ats.example` | Domain only |
| `platform_source` | Approved originating platform | `indeed`, `linkedin`, `google_jobs` | Controlled enum |
| `campaign_id` | Approved campaign identifier | `installer-atlanta-q4-2026` | No personal data |
| `experiment_id` | Approved experiment | `job-hero-v1` | No user-specific value |
| `variant_id` | Assigned variant | `a`, `b` | Controlled enum |

### Prohibited parameters and values

Never send:

- candidate or customer name;
- email address;
- telephone number;
- full address or exact user location;
- resume name, URL, contents, or storage key;
- cover letter or free-text response;
- employer name supplied by a candidate;
- application or CRM record ID if it can identify a person;
- authentication token;
- sensitive qualification answer;
- background, disability, veteran, demographic, or protected-class information;
- project/customer details; or
- query strings containing form values.

---

## 12. Recruitment Event Dictionary

| Event | Exact trigger | Required parameters | Key event |
|---|---|---|---:|
| `careers_cta_click` | Visitor activates a CTA leading into recruitment content | `cta_id`, `cta_location`, `page_type` | No |
| `job_list_view` | Active job list becomes meaningfully visible | `page_type`, `market_id` when applicable | No |
| `job_view` | Active job detail page is viewed | `job_id`, `job_title_key`, `job_status`, `market_id` | No |
| `apply_click` | Visitor activates an apply control | `job_id`, `cta_id`, `cta_location`, `link_domain` when external | No |
| `application_start` | First intentional interaction with the job application or confirmed arrival at an owned application flow | `job_id`, `form_id`, `market_id` | No |
| `application_step_complete` | A defined application step passes validation and advances | `job_id`, `form_id`, `form_step` | No |
| `application_error` | A user-facing validation or processing error occurs | `job_id`, `form_id`, `form_step`, `error_type` | No |
| `application_submit` | Backend or ATS confirms acceptance of the application | `job_id`, `form_id`, `market_id`, `journey_type` | Yes |
| `installer_network_start` | First intentional interaction with the network form | `form_id`, `market_id` when applicable | No |
| `installer_network_submit` | Backend confirms a consented network registration | `form_id`, `market_id`, `journey_type` | Yes |
| `recruiter_contact_click` | Visitor activates an approved recruiting phone or email link | `contact_method`, `cta_id`, `page_type` | No |

### Recruitment event rules

- `application_submit` fires once per accepted submission response, not on button click.
- A duplicate prevention token may exist in the secure backend but must not be sent to GA4 if person-linked.
- Closing a validation message does not count as completing a step.
- A closed job page must not generate active-job application events.
- An installer-network submission must never be recorded as a job application.
- A referral submission, if added later, requires its own event family and pipeline.

---

## 13. Commercial Event Dictionary

| Event | Exact trigger | Required parameters | Key event |
|---|---|---|---:|
| `commercial_cta_click` | Visitor activates a commercial-service CTA | `cta_id`, `cta_location`, `page_type`, `content_id` when applicable | No |
| `commercial_call_click` | Visitor activates a commercial phone link | `contact_method`, `cta_id`, `page_type` | No |
| `commercial_form_start` | First intentional interaction with the commercial inquiry form | `form_id`, `content_id` when applicable | No |
| `commercial_step_complete` | A defined commercial form step validates and advances | `form_id`, `form_step` | No |
| `commercial_form_error` | A user-facing validation or processing error occurs | `form_id`, `form_step`, `error_type` | No |
| `commercial_form_submit` | Backend confirms acceptance of the commercial inquiry | `form_id`, `journey_type`, `content_id` when applicable | Yes |

### Commercial event rules

- Do not send company names, contact details, project descriptions, equipment counts, budgets, or timelines to GA4.
- Phone-link clicks indicate intent, not a connected or qualified call.
- Call tracking must not replace the verified primary business number in structured data or local profiles without review.
- Commercial submissions route only to the commercial CRM pipeline.

---

## 14. Content and Navigation Events

Use automatically collected behavior when it answers the question. Add custom events only when a decision depends on them.

Potential approved events:

| Event | Purpose | Implementation note |
|---|---|---|
| `site_search` | Understand internal search use if site search exists | Prefer GA4's standard `view_search_results` event where applicable |
| `faq_expand` | Evaluate high-value question engagement | Track only for strategically important FAQ groups; do not treat as conversion |
| `resource_cta_click` | Connect guides to a defined next action | Include stable `content_id` and `cta_id` |
| `outbound_platform_click` | Understand exits to approved job or partner platforms | Include domain and platform enum only |
| `file_download` | Track approved public document downloads | Rely on enhanced measurement where appropriate |

Avoid tracking every accordion, hover, scroll increment, animation, or decorative interaction. Extra events create noise and increase maintenance.

---

## 15. Application and ATS Tracking

### Preferred architecture: owned form with backend confirmation

1. Capture approved acquisition context in first-party state.
2. Submit candidate data securely to the backend.
3. Validate, protect, and forward the record to the ATS or recruiting CRM.
4. Return a success response only after an accepted record or durable queue acknowledgement.
5. Fire `application_submit` without PII.
6. Store approved attribution fields with the candidate record.

### Embedded third-party form

- Confirm whether the embed supports postMessage or another documented success callback.
- Validate the message origin.
- Record only confirmed, documented events.
- Do not infer submission from iframe disappearance, URL guessing, or a timeout.
- Test keyboard, mobile, consent, error, and success behavior.

### External ATS form

- Tag the outbound apply link.
- Preserve approved UTMs and job identifiers when the ATS accepts them.
- Configure cross-domain measurement only when supported, justified, and privacy-approved.
- Request ATS-side application completion and source exports.
- Reconcile outbound apply clicks with ATS application records.
- Do not label an outbound click as a completed application.

### Email-based application

Email applications are not preferred because successful completion and secure structured routing are difficult to measure. If required temporarily, track only the mail link click and report resulting applications from recruiting operations separately.

### Required ATS/CRM acquisition fields

Subject to system capability and privacy review:

- job ID;
- role key;
- recruiting market;
- landing page path;
- first-touch source/medium/campaign;
- last non-direct source/medium/campaign;
- referring platform;
- application route;
- submission timestamp;
- consent version where applicable; and
- a non-personal campaign or content ID.

These fields live in the secure recruiting system. They are not all GA4 custom dimensions.

---

## 16. Recruiting Outcome Stages

The ATS or recruiting CRM must support the following normalized stages even if the platform uses different display labels.

| Stage | Definition | Required date |
|---|---|---:|
| Application received | Valid submission accepted | Yes |
| Review pending | Awaiting initial review | Optional |
| Minimum criteria review | Approved criteria are being assessed | Yes |
| Qualified for contact | Candidate meets the approved threshold for contact | Yes |
| Contact attempted | First human outreach recorded | Yes |
| Screening scheduled | Screening appointment confirmed | Yes |
| Screening completed | Screening completed | Yes |
| Technical evaluation/interview | Approved evaluation stage underway | Yes |
| Approved pending requirements | Candidate conditionally approved | Yes |
| Onboarding | Approved onboarding in progress | Yes |
| Activated installer | Approved operational activation milestone reached | Yes |
| Future opportunity/network | Candidate moved to permission-based future pool | Yes |
| Not proceeding | Business disposition with approved reason category | Yes |
| Withdrawn | Candidate withdrew | Yes |
| Unreachable | Contact policy exhausted | Yes |

### Required recruiting reporting fields

- current normalized stage;
- stage-entered timestamps;
- approved disposition category;
- job ID and role;
- recruiting market;
- source grouping;
- assigned recruiting owner;
- first-contact timestamp;
- activation timestamp and approved activation definition version; and
- spam/test/duplicate flags.

Do not export candidate names or contact details into general marketing dashboards.

---

## 17. Commercial CRM Stages

| Stage | Definition |
|---|---|
| Inquiry received | Valid inquiry accepted |
| Review pending | Awaiting business review |
| Contact attempted | First outreach recorded |
| Discovery scheduled | Discovery conversation confirmed |
| Qualified opportunity | Need, fit, authority, timing, and next step meet approved criteria |
| Scope/estimate in progress | Delivery scope or estimate under development |
| Proposal issued | Formal proposal sent |
| Won | Approved agreement or work authorization received |
| Lost | Opportunity concluded without win |
| Not a fit | Does not meet approved service criteria |
| Future follow-up | Valid opportunity deferred with a follow-up date |

### Commercial reporting fields

- current stage and stage dates;
- source grouping and approved campaign context;
- landing page or content group;
- service/industry/technology interest as controlled categories;
- owner;
- qualification status;
- estimated and final value if approved; and
- loss or not-fit reason category.

Customer identity and project details remain in the CRM, not general web analytics.

---

## 18. Attribution Standard

### Required attribution views

Report at least:

- first known touch;
- session or current touch;
- last non-direct touch before submission;
- originating job platform or referral partner;
- self-reported discovery source when approved; and
- unattributed or unknown.

### Interpretation

- First touch supports acquisition and awareness decisions.
- Last non-direct touch supports near-conversion optimization.
- Platform referral supports partner and job-board evaluation.
- Self-reported source can reveal dark social, word of mouth, and untracked AI discovery.
- No model proves a single channel caused a conversion.

### Direct traffic

Do not assume direct means a user typed the URL. Direct can include missing referrer data, privacy controls, untagged links, apps, documents, messages, or broken campaign tagging.

### Offline and multi-device gaps

A candidate may discover a role on one device, return on another, call recruiting, and apply later. Reports should use “website-supported” or “attributed under the documented model” rather than claiming perfect causality.

---

## 19. UTM and Campaign Governance

### Approved parameters

| Parameter | Purpose | Example |
|---|---|---|
| `utm_source` | Referring platform or partner | `indeed`, `linkedin`, `trade_school` |
| `utm_medium` | Channel classification | `job_board`, `social`, `email`, `partner_referral` |
| `utm_campaign` | Stable initiative | `installer-atlanta-q4-2026` |
| `utm_content` | Creative, placement, or CTA variant | `role-card-a` |
| `utm_term` | Paid keyword only when needed | Controlled paid-search value |
| `utm_id` | Stable campaign system ID | `rec-2026-014` |

### Naming rules

- lowercase;
- hyphen-separated human-readable values;
- no spaces;
- no names, email addresses, telephone numbers, candidate IDs, or customer information;
- no dates unless relevant to campaign governance;
- use a controlled registry before publishing links;
- do not use UTMs on internal website links;
- preserve the original tagged URL in the campaign register.

### Recommended medium taxonomy

- `organic` is assigned by analytics, not manually tagged for normal search links;
- `job_board`;
- `partner_referral`;
- `social`;
- `email`;
- `sms` only with approved consent and platform use;
- `qr`;
- `paid_search`;
- `paid_social`; and
- `offline` when a campaign-specific redirect or QR code is used.

### Campaign registry fields

- campaign ID;
- owner;
- journey type;
- audience;
- source;
- medium;
- campaign;
- content variant;
- target URL;
- launch and end dates;
- job ID or market when applicable;
- spend when applicable; and
- status.

---

## 20. Channel Grouping

Create a documented reporting classification that distinguishes:

- Google organic search;
- Bing organic search;
- other organic search;
- AI/answer-engine referral;
- job platform;
- recruiting partner referral;
- general referral;
- organic social;
- paid search;
- paid social;
- email/SMS;
- direct/unknown; and
- internal/test.

### AI referral identification

Maintain an editable domain mapping for identifiable referrers, such as approved domains associated with ChatGPT, Perplexity, Microsoft Copilot, Gemini, and other answer systems. The mapping must be reviewed quarterly because platforms, apps, privacy controls, and redirect behavior change.

AI-platform use may appear as:

- a recognizable referral;
- direct/unknown traffic;
- organic search traffic;
- a manually tagged campaign; or

- no observable visit at all.

Therefore, AI referral sessions are a lower-bound observation, not total AI visibility.

---

## 21. Google Search Console Measurement

Google Search Console is the primary source for Google Search clicks, impressions, CTR, average position, query dimensions, page dimensions, countries, devices, dates, and available search appearances.

### Required setup

- Verify the domain property through business-controlled DNS.
- Add a URL-prefix property when it provides useful page-level testing or integrations.
- Submit the canonical XML sitemap index.
- monitor indexing, sitemap, structured-data, manual-action, security, and Core Web Vitals reports;
- preserve access for the business and implementation team; and
- annotate major launches, migrations, and URL changes in the reporting log.

### Recurring organic reports

- branded versus non-branded query approximation;
- recruitment versus commercial query groups;
- job, role, location, service, industry, technology, and resource page groups;
- query/page pairs with rising impressions;
- high-impression, low-CTR opportunities;
- page-one and near-page-one query groups, with caution around average position;
- device and country changes;
- rich-result/search-appearance activity when available;
- indexed active jobs and expired job removal; and
- sitemap and coverage issues.

### Interpretation limits

- Search Console data is not identical to GA4 session data.
- Some queries are anonymized or omitted.
- Position is an aggregate, not a manual rank check.
- Search results vary by time, place, device, and user context.
- Google assigns much performance data to its selected canonical URL.
- Google Search AI features may be incorporated into normal search reporting under Google's current counting rules rather than exposed as a complete separate AI report.

---

## 22. Bing Webmaster Tools Measurement

### Required setup

- Verify the canonical domain.
- Submit the XML sitemap index.
- Configure IndexNow if it fits the technical architecture.
- Review search performance, indexing, crawl, backlinks, site scans, and URL inspection tools.
- Monitor the available AI Performance reporting when present in the account.

### Bing reporting groups

- search clicks and impressions;
- query and page performance;
- index and crawl issues;
- IndexNow discovery;
- structured-data/site-scan findings;
- citation counts or cited pages shown in AI Performance;
- available grounding-query data; and
- Microsoft ecosystem referral traffic observed onsite.

### AI Performance limits

Treat Bing's AI reporting as platform-specific visibility, not a complete measure of every AI answer, user, citation, or outcome. Export or archive recurring snapshots when historical retention is limited.

---

## 23. Local Profile Measurement

### Google Business Profile

If the business is eligible and the profile is verified, monitor the performance metrics available for the business category and profile, potentially including:

- Search and Maps impressions;
- website clicks;
- call clicks;
- direction requests;
- search keyword impressions;
- messages, bookings, or other actions only when enabled and relevant;
- review count, rating, response rate, and response time; and
- photo or content activity where available.

The Google Business Profile Performance API can provide available daily and monthly metrics, including search keyword impressions. API access and quota must be confirmed before automation is promised.

### Apple Business Connect

If eligible and verified, record the insights and actions made available in the Apple Business Connect account, such as place-card views, taps, calls, website actions, directions, showcases, or other current platform metrics.

### Local-profile rules

- Use platform-native counts for profile actions.
- Use tagged website URLs when the platform permits them without harming canonical business information.
- Do not add tracking parameters to phone numbers or core identity fields.
- Do not equate a call click with a completed conversation or qualified lead.
- Keep recruiting-market reporting separate from customer service-area reporting.
- Do not create or measure ineligible, virtual, or misleading locations.

---

## 24. AEO, GEO, and LLM Visibility Measurement

No single tool provides complete, stable, auditable coverage of every answer engine or language model. Use a layered observation framework.

### Layer 1: First-party platform data

- Bing Webmaster Tools AI Performance when available;
- Google Search Console search performance under Google's current counting rules;
- referral traffic from identifiable answer platforms;
- server or edge requests from documented crawlers where available and legally appropriate.

### Layer 2: Citation and answer observation

Maintain a controlled monthly prompt set covering:

- branded entity questions;
- installer-career questions;
- role and qualification questions;
- approved recruiting markets;
- verified commercial services;
- common comparison and process questions; and
- local-intent questions where the business is genuinely relevant.

For each approved observation, record:

- platform and access mode;
- date;
- prompt version;
- location/account context when known;
- whether SB Mobile Installations was named;
- cited URL or source when shown;
- accuracy of the representation;
- competitor/source context; and
- screenshot or evidence location if permitted.

### Layer 3: Onsite outcomes

Measure identifiable AI referral sessions, landing pages, job views, application starts, accepted applications, qualified applicants, and activated installers. Do not claim that an AI answer caused an outcome when referrer information is absent.

### Reporting labels

Use one of:

- platform-reported;
- onsite-observed;
- manually observed;
- third-party estimated; or
- inferred.

Never merge these categories without disclosure.

---

## 25. Featured Snippets, PAA, Rich Results, and Knowledge Panels

### Measurement approach

| Search feature | Measurement source | Limitation |
|---|---|---|
| Featured snippet | Search Console search appearance when available plus controlled observation | Appearance may change by query, device, time, and location |
| People Also Ask | Controlled observation and query research | No complete first-party impression report |
| Job rich results | Search Console enhancement/search appearance data when available | Eligibility does not guarantee display |
| Other rich results | Search Console and validation tools | Testing validity is not performance proof |
| Knowledge panel | Entity monitoring and controlled observation | Search engines control creation and display |
| AI citation | First-party AI report, referral, or controlled observation | Coverage is incomplete and platform-specific |

### Success criteria

Prioritize:

- factual accuracy;
- correct entity identity;
- approved page cited or displayed;
- relevant visibility;
- qualified onsite engagement; and
- downstream business outcomes.

Raw ownership of a feature is not the only goal, and a manually observed feature must not be reported as continuously present.

---

## 26. Dashboard Framework

### Executive scorecard

Report monthly with a trailing trend and clear comparison period.

| Section | Metrics |
|---|---|
| Recruitment outcomes | Accepted applications, qualified applicants, activated installers, qualification rate, activation rate |
| Recruiting operations | Time to first contact, time to stage, time to activation, stage backlog |
| Recruitment acquisition | Source mix, organic clicks, job views, apply clicks, starts, completion rate |
| Commercial outcomes | Accepted inquiries, qualified opportunities, wins, value |
| Organic visibility | Google/Bing clicks, impressions, CTR, priority query/page growth |
| Local presence | Profile views/actions, calls, website clicks, directions, reviews where available |
| AI/answer visibility | Platform-reported citations, observed citations, AI referrals, outcomes |
| Technical health | Submission discrepancy, event errors, index issues, site errors |

### Recruitment dashboard

Filters:

- date range;
- role;
- job ID;
- job status;
- market;
- source/medium;
- platform;
- landing page group;
- device; and
- candidate stage.

Required views:

- discovery-to-activation funnel;
- performance by role and market;
- performance by acquisition source;
- stage aging and bottlenecks;
- application abandonment by step;
- source quality matrix;
- time-to-contact distribution; and
- active versus evergreen pathway use.

### Organic and content dashboard

Required views:

- clicks and impressions by topic cluster;
- branded/non-branded approximation;
- query/page opportunities;
- landing-page engagement and next action;
- content-assisted applications and inquiries;
- job indexing and expiry status;
- priority-location performance;
- search appearance and rich-result signals; and
- Bing and AI citation observations.

### Commercial dashboard

Required views:

- service/industry/technology landing performance;
- inquiry funnel;
- qualification and stage progression;
- source and content contribution;
- time to contact;
- wins, losses, and reason categories; and
- value by source when approved.

---

## 27. Source Quality Matrix

Evaluate recruitment sources with downstream quality.

| Source | Job views | Apply clicks | Accepted applications | Qualified applicants | Activated installers | Qualification rate | Activation rate | Median time to contact |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Organic search | — | — | — | — | — | — | — | — |
| Job platform | — | — | — | — | — | — | — | — |
| Partner referral | — | — | — | — | — | — | — | — |
| Organic social | — | — | — | — | — | — | — | — |
| Direct/unknown | — | — | — | — | — | — | — | — |
| AI referral | — | — | — | — | — | — | — | — |

Do not stop or expand a source based on small volumes or application totals alone. Consider quality, activation, speed, geographic fit, operational capacity, cost, and data completeness.

---

## 28. Reporting Cadence

### Daily automated monitoring

- production availability;
- submission endpoint failures;
- sudden form error spikes;
- zero-event or duplicate-event conditions;
- broken redirects and critical 4xx/5xx patterns;
- active-job expiry or feed failures; and
- security or abuse anomalies.

### Weekly operating review

- accepted applications by role and market;
- new qualified applicants;
- first-contact performance;
- stage backlog;
- form completion and errors;
- major source shifts;
- commercial inquiries requiring action; and
- urgent search/indexing issues.

### Monthly performance review

- executive scorecard;
- channel and source quality;
- organic query/page trends;
- content contribution;
- local-profile performance;
- AI/answer visibility observations;
- qualified commercial opportunities;
- test results;
- data-quality issues; and
- next actions with owners.

### Quarterly strategy review

- activated-installer trend;
- market and role demand alignment;
- content and topic-cluster performance;
- recruitment-platform mix;
- channel taxonomy and AI referral mapping;
- qualification criteria and stage definitions;
- local/entity consistency;
- measurement tool value;
- privacy, access, and retention review; and
- roadmap reprioritization.

---

## 29. Baselines and Targets

The project must not invent numeric performance targets before reliable baseline and operational capacity data exist.

### Baseline period

Use the first 60 to 90 days after validated launch as an initial baseline, subject to:

- sufficient volume;
- seasonality;
- role availability;
- recruiting-market changes;
- campaign changes;
- tracking stability; and
- hiring or assignment capacity.

### Target-setting process

1. Confirm the operational definition of qualified and activated.
2. Establish clean counts and stage timestamps.
3. Separate role, market, source, and journey.
4. Identify the operational constraint.
5. Set a time-bound target owned by a responsible person.
6. Record the baseline, target, rationale, and review date.
7. Revisit after material job, market, site, or process changes.

### Guardrail metrics

Any application-volume goal must be paired with:

- qualification rate;
- activation rate;
- time to first contact;
- form error rate;
- candidate withdrawal rate; and
- recruiting capacity.

---

## 30. Experimentation Measurement

### Eligible experiments

- job-page CTA language;
- information order;
- qualification-summary design;
- application step structure;
- trust and process modules;
- job-list filters;
- resource-to-careers pathways; and
- commercial inquiry framing.

### Prohibited or high-risk experiments

Do not experiment with misleading scarcity, concealed classification, unverified compensation, deceptive location language, ambiguous consent, reduced accessibility, or protected-class targeting.

### Experiment requirements

- documented hypothesis;
- primary metric;
- quality guardrails;
- audience and page scope;
- stable variant identifiers;
- start and stop criteria;
- minimum observation window;
- recruiting or business capacity check;
- technical QA; and
- decision log.

The preferred recruitment primary metric is a downstream quality measure where volume permits, not just CTA clicks or starts.

---

## 31. Privacy and Consent

### Privacy baseline

- Collect only data required for a defined purpose.
- Keep web analytics separate from candidate and customer records.
- Do not send PII to Google Analytics.
- Do not place form values in URLs.
- Redact or suppress uncontrolled query parameters.
- Disable advertising features unless explicitly approved and properly disclosed.
- Review cookie, consent, and privacy requirements for the business's actual jurisdictions and practices.
- Publish accurate privacy and applicant-data notices before collection.
- Honor deletion, correction, access, and opt-out processes as legally required.
- Apply role-based access and multifactor authentication.

### Consent implementation

The exact consent mechanism depends on:

- analytics tools enabled;
- cookies and local storage used;
- advertising or remarketing features;
- user jurisdictions;
- recruiting communications;
- SMS or email workflows;
- external embeds; and
- legal review.

Do not deploy a generic consent banner as a substitute for determining what the site actually collects and why.

### Candidate data boundary

Applicant information may be required in the secure application system. That does not authorize sending it to analytics, session-replay tools, heatmaps, URL parameters, logs visible to broad teams, or general dashboards.

### Session replay

Do not deploy session replay or keystroke-capture tooling on application, network, commercial, or contact forms without explicit business, legal, security, and privacy approval. Default position: disabled.

---

## 32. Data Retention and Access

### Retention schedule

Create and approve a schedule covering:

- GA4 event and user data;
- Search Console and Bing exports;
- Cloudflare logs;
- applicant records and resumes;
- installer-network records;
- commercial CRM records;
- form-submission logs;
- consent records;
- dashboard extracts; and
- test data.

The schedule must consider business need, platform limits, applicant notices, contractual duties, litigation holds, and applicable law.

### Access matrix

| Role | Analytics | Search tools | ATS/recruiting CRM | Commercial CRM | Raw logs | Admin rights |
|---|---|---|---|---|---|---|
| Business owner | Approved | Approved | As required | As required | Limited | Business-controlled |
| Recruiting owner | Aggregate/recruiting | Read as useful | Operational | None unless needed | No | No |
| Commercial owner | Aggregate/commercial | Read as useful | No | Operational | No | No |
| Sirius Systems | Configure/report as contracted | Configure/report | Minimum necessary | Minimum necessary | Diagnostic only | Time-limited/minimum |
| Developer | Debug/test | Technical validation | Test access only where possible | Test access only | Diagnostic | No business-data admin by default |

Review access quarterly and immediately after role or vendor changes.

---

## 33. Data Quality Controls

### Required controls

- canonical hostname filter;
- production/test isolation;
- bot and spam handling;
- duplicate submission protection;
- backend acceptance reconciliation;
- event naming validation;
- allowed parameter schemas;
- PII scanning for analytics payloads and URLs;
- job ID and status validation;
- UTM taxonomy validation;
- referral exclusion review;
- time-zone alignment;
- broken-page monitoring;
- dashboard freshness indicator; and
- documented data incidents.

### Reconciliation checks

At least weekly during launch and monthly after stabilization, compare:

- `application_submit` events versus accepted backend/ATS applications;
- `installer_network_submit` events versus accepted network records;
- `commercial_form_submit` events versus accepted CRM inquiries;
- outbound ATS apply clicks versus ATS completions;
- active jobs onsite versus active jobs in the source system;
- production events versus test flags; and
- search landing clicks versus analytics organic entrances, understanding they will not match exactly.

### Suggested alert thresholds

Set thresholds after baseline. Initial alerts should detect:

- zero accepted submissions during an expected active period;
- analytics submissions with no backend records;
- backend records with no analytics submissions above the approved tolerance;
- event count increases consistent with duplication;
- form error rate materially above baseline;
- a priority page returning non-200 status;
- active job pages missing from the sitemap;
- expired jobs remaining open or indexable; and
- dashboard data older than its expected refresh window.

---

## 34. QA Test Matrix

Test on approved desktop and mobile browser coverage.

| Test | Expected result |
|---|---|
| Production page view | One production page view; correct hostname and path |
| Preview page view | No production event |
| Job detail view | One `job_view` with correct approved job fields |
| Apply CTA | One `apply_click`; destination and job context correct |
| Application first interaction | One `application_start` |
| Valid step completion | One step event with controlled step value |
| Validation failure | Error event contains category, never entered value |
| Failed server submission | No `application_submit`; useful non-PII error logged |
| Accepted application | One `application_submit` after confirmation |
| Duplicate click | No duplicate accepted record or submit event |
| Network form | Network events only; no job-application event |
| Commercial form | Commercial events only; no recruitment event |
| External ATS | Outbound event works; return/referral handling tested |
| UTM landing | Values classify correctly and persist as approved |
| Untagged referral | Correct referral source when available |
| PII test | No entered value appears in analytics, URL, page title, or general log |
| Consent state | Tags behave according to approved consent design |
| Thank-you refresh | Does not create a second submission event |
| Back/forward navigation | Does not create false form starts or submissions |
| Spam submission | Rejected or flagged without a conversion |

Retain a launch QA record with date, environment, tester, result, evidence, defect, and resolution.

---

## 35. Implementation Phases

### Phase 1: Decisions and foundations

- Confirm business and hiring entities.
- Select the ATS/recruiting CRM and commercial CRM.
- Define qualified applicant and activated installer.
- Approve jobs, roles, markets, forms, and source fields.
- Approve analytics, privacy, consent, access, and retention decisions.
- Create business-owned platform accounts.

### Phase 2: Technical instrumentation

- Implement production-only analytics.
- Add the approved event layer.
- Add backend-confirmed success events.
- Implement safe attribution capture.
- Configure Search Console and Bing Webmaster Tools.
- Configure eligible local profiles.
- Add Cloudflare operational monitoring.
- Establish test and preview controls.

### Phase 3: Operational integration

- Map form records into ATS/CRM stages.
- Preserve job and acquisition context.
- Establish recruiter and commercial-owner workflows.
- Configure stage timestamps and dispositions.
- Build source-quality and response-time reports.

### Phase 4: Validation and launch

- Complete event, PII, consent, cross-domain, device, and form QA.
- Reconcile test records end to end.
- Validate search verification, sitemaps, robots, canonicals, and schema reports.
- Confirm dashboards and alert routing.
- Remove or isolate test data.

### Phase 5: Optimization

- Establish baseline.
- Diagnose funnel friction.
- improve high-impression/low-CTR pages;
- improve source quality;
- expand useful topic clusters;
- conduct controlled tests; and
- report activated-installer and qualified-opportunity outcomes.

---

## 36. Launch Checklist

### Accounts and access

- [ ] Business-controlled GA4 property exists.
- [ ] Search Console domain property is verified.
- [ ] Bing Webmaster Tools is verified.
- [ ] Cloudflare production access is correct.
- [ ] Eligible Google and Apple business profiles are confirmed.
- [ ] ATS/recruiting CRM is selected and configured.
- [ ] Commercial CRM is configured before commercial forms launch.
- [ ] Multifactor authentication and recovery owners are confirmed.

### Configuration

- [ ] Production hostname and stream are correct.
- [ ] Preview and local environments do not pollute production.
- [ ] Time zone and currency are approved.
- [ ] Enhanced measurement is reviewed.
- [ ] Key events are limited to approved outcomes.
- [ ] Custom dimensions are registered only when needed.
- [ ] Referral exclusions and cross-domain rules are tested.
- [ ] Data retention and sharing settings are approved.

### Events and forms

- [ ] Every event has an exact trigger and owner.
- [ ] Application success is backend- or ATS-confirmed.
- [ ] Network and commercial success are separately confirmed.
- [ ] Duplicate submission handling works.
- [ ] Error events contain no entered values.
- [ ] PII does not enter analytics or URLs.
- [ ] Mobile and accessibility tests pass.
- [ ] Spam and abuse controls are tested.

### Search and profiles

- [ ] XML sitemap is submitted to Google and Bing.
- [ ] Priority pages are inspectable and indexable as intended.
- [ ] Job publication and expiry workflows are tested.
- [ ] Search reports and alert owners are assigned.
- [ ] Business profile website URLs and calls are measurable without corrupting identity data.

### Reporting

- [ ] Executive scorecard exists.
- [ ] Recruitment dashboard reaches activated-installer status.
- [ ] Commercial dashboard remains separate.
- [ ] Source grouping and UTM registry are approved.
- [ ] Dashboard refresh dates and data owners are visible.
- [ ] Reconciliation process and tolerance are documented.
- [ ] Launch annotation is recorded.

---

## 37. Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Measuring applications but not qualifications | Optimizes for low-quality volume | Require ATS stage and qualification reporting |
| No activation definition | Primary outcome cannot be reported consistently | Approve milestone and version before launch |
| External ATS blocks completion tracking | Funnel appears incomplete | Use ATS exports, outbound tracking, and reconciliation |
| PII sent to analytics | Privacy and platform-policy risk | Payload allowlist, URL controls, QA, and monitoring |
| Recruitment and commercial events mixed | Misleading conversion reporting | Separate events, forms, pipelines, dashboards |
| Test/preview data enters production | Corrupts baseline | Hostname gates and test property/debug process |
| Inconsistent UTMs | Fragmented source reporting | Controlled campaign registry and QA |
| Multiple analytics implementations | Duplicate events and sessions | One governed tag architecture |
| Local profile ineligibility | Suspension or trust risk | Verify eligibility before creation or measurement |
| AI visibility overclaim | Misleading reporting | Label platform, method, date, and limitation |
| Small samples | Unstable rate decisions | Show counts, longer windows, and confidence caveats |
| CRM stages not maintained | Downstream value cannot be measured | Define owner, SLA, required fields, and audits |
| Business-entity ambiguity | Incorrect forms, profiles, and reports | Resolve SB Mobile Installations/Doral Transport relationship |

---

## 38. Open Decisions

The following require business approval:

1. What exact event defines an activated installer?
2. Which organization is the hiring or contracting entity for each role?
3. What is the approved relationship between SB Mobile Installations, LLC and Doral Transport LLC?
4. Which ATS or recruiting CRM will own applicant records?
5. Which commercial CRM will own inquiries and opportunities?
6. Will applications be onsite, embedded, or hosted externally?
7. Which recruiting platforms will be used?
8. Who owns candidate review, stage updates, and first contact?
9. What are the response-time targets?
10. Which roles and markets are active at launch?
11. Which qualification and disposition categories are approved?
12. Which applicant-network communications require email or SMS consent?
13. Which analytics, advertising, call-tracking, or session tools are approved?
14. What privacy jurisdictions and retention requirements apply?
15. Is the business eligible for a Google Business Profile and Apple Business Connect record at each claimed location?
16. What is the approved primary business time zone?
17. Who receives technical, form, recruiting, and reporting alerts?
18. Which dashboard system will be used at launch?

Unresolved decisions must remain documented blockers. They must not be filled with assumptions in production tracking or reporting.

---

## 39. Ownership Matrix

| Responsibility | Business owner | Recruiting owner | Sirius Systems | Developer | Legal/privacy reviewer |
|---|---:|---:|---:|---:|---:|
| KPI approval | A | C | R | C | I |
| Qualification and activation definitions | A | R | C | I | I |
| Event taxonomy | C | C | A/R | R | C |
| Tag implementation | I | I | A | R | I |
| ATS/CRM stage maintenance | I | A/R | C | C | I |
| Search-platform configuration | A | I | R | R | I |
| Dashboard reporting | C | C | A/R | C | I |
| Privacy/consent decisions | A | C | C | C | R |
| Access review | A/R | C | C | I | I |
| Data incident response | A | C | R | R | C |

**Legend:** A = accountable, R = responsible, C = consulted, I = informed. Final assignments must be named before launch.

---

## 40. Authoritative Guidance

Implementation should be checked against current official documentation at build and launch, including:

- [Google Analytics event types](https://support.google.com/analytics/answer/9322688)
- [Google Analytics guidance for avoiding PII](https://support.google.com/analytics/answer/6366371)
- [Google Analytics data privacy and security](https://support.google.com/analytics/answer/6004245)
- [Google Search Console Performance report](https://support.google.com/webmasters/answer/7576553)
- [Google Search Console click, impression, and position definitions](https://support.google.com/webmasters/answer/7042828)
- [Google Business Profile Performance API](https://developers.google.com/my-business/reference/performance/rest)
- [Bing Webmaster Tools](https://www.bing.com/webmasters/about)
- [Bing Webmaster Blog](https://blogs.bing.com/webmaster/)
- [Cloudflare Web Analytics documentation](https://developers.cloudflare.com/web-analytics/)
- [Apple Business Connect](https://businessconnect.apple.com/)

Platform capabilities, labels, reports, retention, and policies change. Confirm the current official requirements before implementation and during quarterly reviews.

---

## 41. Related Project Documents

- `00-project-overview.md`
- `01-business-source-of-truth.md`
- `02-business-overview.md`
- `03-audience-personas.md`
- `04-competitor-research.md`
- `05-keyword-research.md`
- `06-search-intent-map.md`
- `07-site-architecture.md`
- `08-url-strategy.md`
- `09-content-strategy.md`
- `10-on-page-seo-standards.md`
- `11-local-seo-plan.md`
- `12-aeo-geo-llm-optimization.md`
- `13-schema-markup-plan.md`
- `14-conversion-strategy.md`

The conversion strategy defines journeys and actions. This document defines how those actions and downstream outcomes are measured. Technical architecture and implementation documents must preserve this measurement contract.

---

## 42. Definition of Done

The analytics and measurement implementation is complete when:

- the business has approved qualified-applicant and activated-installer definitions;
- recruitment, installer-network, referral, and commercial journeys are separated;
- production and non-production analytics are isolated;
- required events fire once at the documented trigger;
- submission events are backend- or platform-confirmed;
- no PII enters analytics payloads, URLs, or broad dashboards;
- source and job context reach the appropriate ATS or CRM;
- recruiting and commercial stages are normalized and timestamped;
- Search Console and Bing Webmaster Tools are verified;
- eligible local profiles are connected to reporting;
- the executive, recruitment, organic, and commercial reports are usable;
- backend and analytics conversions reconcile within an approved tolerance;
- alerting, access, privacy, and retention controls are approved;
- launch QA evidence is retained;
- reporting owners and cadence are assigned; and
- open blockers are resolved or explicitly excluded from launch scope.

---

## 43. Maintenance Standard

Update this document when:

- a form, CTA, event, or parameter changes;
- the ATS, CRM, analytics, consent, or hosting system changes;
- a recruiting platform or application route is added;
- a new job, role, market, service, or location model changes reporting needs;
- qualification or activation definitions change;
- a search, profile, or AI platform changes its reporting;
- a privacy or retention requirement changes;
- a dashboard calculation changes; or
- a data incident reveals a control gap.

Record material changes in the project change log and annotate the affected reporting date. Measurement definitions must remain versioned so historical results can be interpreted correctly.
