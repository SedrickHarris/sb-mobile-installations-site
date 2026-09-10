# SB Mobile Installations Recruitment Operations and Automation

**Document:** 31-recruitment-operations-automation.md  
**Project:** SB Mobile Installations Website and Installer Recruitment Project  
**Business:** SB Mobile Installations, LLC  
**Primary objective:** Create dependable recruitment operations around the website while keeping human approval in control of hiring decisions.  
**Status:** Working operations standard  
**Version:** 0.1  
**Last updated:** September 10, 2026

---

## 1. Purpose

This document defines the workflows, ownership, notifications, controls, and automation boundaries for installer recruitment.

It works with:

- 14-conversion-strategy.md;
- 15-analytics-and-measurement.md;
- 17-cloudflare-deployment.md;
- 26-launch-checklist.md;
- 28-recruitment-strategy.md;
- 29-recruitment-platform-distribution.md; and
- 30-job-content-schema-specification.md.

Automation may validate, route, notify, summarize, and report. It must not silently invent job facts, make a hiring decision, or imply acceptance without an approved human or platform outcome.

---

## 2. Operating Principles

- One owner for every operational stage.
- One canonical job record.
- Separate application, network, referral, commercial, and contact pipelines.
- Validate before publication.
- Notify people when action is required.
- Keep candidate data private and minimized.
- Make workflows retryable and idempotent.
- Log events without logging unnecessary personal data.
- Preserve a manual fallback for every critical path.
- Close stale jobs across every channel.

---

## 3. Core Operational Records

Maintain separate records for:

- job record;
- platform posting;
- application submission;
- installer-network registration;
- referral;
- screening task;
- commercial inquiry;
- notification delivery;
- candidate communication;
- closure event;
- consent or privacy status; and
- operational incident.

Do not combine applications and network registrations in one status field.

---

## 4. Ownership Map

| Stage | Primary owner | Backup | Output |
|---|---|---|---|
| Job intake | Hiring owner | Project lead | Draft job record |
| Fact approval | Business owner | Designated reviewer | Approved record |
| Website publication | Build/deployment owner | Backup deployer | Canonical page |
| Platform distribution | Recruitment owner | Hiring owner | Platform postings |
| Application review | Hiring owner | Assigned reviewer | Screening status |
| Network review | Recruitment owner | Hiring owner | Network status |
| Notification review | Operations owner | Backup operator | Delivery status |
| Closure | Hiring owner | Business owner | Closed records |
| Reporting | Measurement owner | Project lead | Period report |

The owner map must contain real people or roles before production automation is enabled.

---

## 5. Job Intake Workflow

1. Hiring owner submits a role request.
2. Operations records the request with a unique internal ID.
3. Business owner confirms the need and intended market.
4. Required job facts are gathered.
5. Missing consequential facts are identified.
6. Content owner prepares the public record.
7. Reviewer approves or returns the record.
8. Approved record enters the publication queue.

No job page or external posting is created from an informal message alone.

---

## 6. Job Approval Workflow

Approval must confirm:

- role title;
- responsibilities;
- required qualifications;
- preferred qualifications;
- location and work model;
- schedule;
- classification;
- compensation when applicable;
- application route;
- recruiting market;
- publication date;
- review or closing date;
- privacy and legal requirements; and
- distribution channels.

The approval record stores reviewer, date, version, and unresolved conditions.

---

## 7. Publication Workflow

After approval:

1. Validate the job schema.
2. Build or update the canonical page.
3. Validate metadata and JobPosting eligibility.
4. Test the application destination.
5. Deploy the approved commit.
6. Confirm the public page.
7. Publish selected platform postings.
8. Record platform IDs and URLs.
9. Enable approved promotion.
10. Schedule the first review.

Automation may move a record between workflow queues, but publication remains subject to the documented release gate.

---

## 8. Platform Distribution Workflow

For each selected platform:

- create the platform posting from the canonical record;
- adapt length and formatting;
- preserve factual meaning;
- add approved source attribution;
- test the public listing;
- record posting ID and date;
- assign a review date; and
- configure closure handling.

If a platform version cannot represent a consequential fact accurately, do not publish it until the discrepancy is resolved.

---

## 9. Application Intake

On an application or approved ATS handoff:

1. receive the trusted submission event;
2. validate the opening identifier;
3. record source and timestamp;
4. prevent duplicate event creation;
5. send the approved confirmation;
6. create a review task;
7. notify the assigned owner;
8. store only required data;
9. apply retention and access controls; and
10. record safe funnel events.

The website must not claim that a person is hired, selected, accepted, or assigned from an intake event alone.

---

## 10. Application Confirmation

The confirmation should:

- state that the application was received;
- identify the type of submission;
- explain the next approved step;
- avoid unapproved response-time promises;
- provide a privacy or update path;
- prevent duplicate resubmission confusion; and
- offer a relevant, noncompeting next link.

If trusted acceptance is unavailable, show a pending or error state rather than a false success state.

---

## 11. Installer-Network Workflow

On network registration:

1. validate the network form;
2. confirm consent and privacy fields;
3. record the network source;
4. prevent duplicate registration events;
5. send network-specific confirmation;
6. create a future-opportunity review task;
7. notify the network owner;
8. store only approved fields; and
9. apply retention and update procedures.

The workflow must use network, interest, or future-opportunity language. It must never create an application, JobPosting, or hiring-status event.

---

## 12. Referral Workflow

On an approved referral:

- record referral source;
- identify the relevant job or network path;
- protect referrer and candidate data;
- send the correct candidate route;
- notify the assigned owner;
- prevent duplicate referral records where practical;
- document any approved incentive; and
- do not disclose candidate status to the referrer without permission.

---

## 13. Commercial Inquiry Separation

Commercial inquiries must enter a separate pipeline and notification route.

The automation must:

- identify project or service intent;
- record approved source;
- route to the commercial owner;
- send commercial confirmation;
- avoid candidate tags and candidate notifications;
- avoid sharing applicant data with commercial users; and
- preserve separate reporting.

---

## 14. Notification Rules

Notify an internal owner when:

- an application is accepted;
- a network registration is accepted;
- a commercial inquiry is accepted;
- a form fails after retry;
- a job approval is waiting;
- a job is approaching review or closure;
- a platform posting cannot be updated;
- a notification delivery fails; or
- a privacy or security incident is detected.

Notifications should contain the minimum information needed to act. Do not include resumes, full form payloads, or unnecessary personal details in unsecured channels.

---

## 15. Notification Delivery

Track:

- notification type;
- destination role or approved user;
- timestamp;
- delivery status;
- retry count;
- correlation ID;
- error category; and
- resolution.

Do not treat an email or message attempt as proof that the recipient saw or acted on it.

---

## 16. Retry and Idempotency

Critical workflows must be safe to retry.

Use:

- stable event IDs;
- job IDs;
- submission IDs;
- idempotency keys;
- duplicate detection;
- bounded retries;
- dead-letter or manual review queue; and
- operator visibility.

Never create multiple applications, network registrations, or platform postings because a request was retried.

---

## 17. Error Handling

### Candidate-facing

- use plain-language error text;
- preserve valid input;
- provide a retry path;
- avoid exposing internals;
- provide alternate contact or platform path when approved.

### Internal

- classify validation, network, authentication, rate-limit, platform, and unknown errors;
- log a safe diagnostic;
- notify the owner when action is needed;
- retry only when safe; and
- record resolution.

---

## 18. Job Review and Freshness

At least weekly during active hiring:

- confirm opening remains active;
- verify title and requirements;
- verify application destination;
- review platform listings;
- check candidate questions;
- confirm budget and promotion;
- confirm owner availability; and
- update last-reviewed timestamp.

The review cadence may be increased for fast-changing roles or paid campaigns.

---

## 19. Job Closure Automation

When a close event is approved:

1. update the central record;
2. set status to closed;
3. disable application acceptance;
4. remove JobPosting schema;
5. update the canonical page;
6. close or update platform postings;
7. stop paid promotion;
8. update social and referral links;
9. offer active openings or network registration;
10. review sitemap and robots behavior;
11. purge or revalidate relevant caches; and
12. record closure evidence.

Closing automation must be observable and have a manual correction path.

---

## 20. Stale-Job Detection

Flag a job for review when:

- review date passes;
- application destination fails;
- platform listing reports closure;
- validThrough is approaching;
- owner marks the need complete;
- repeated candidate reports conflict with the page; or
- a deployment exposes a mismatch.

Do not silently close a job because a timer expired unless that rule was explicitly approved.

---

## 21. Screening Handoff

Automation may create tasks and route submissions. Human reviewers determine screening outcomes unless a separate approved system defines a compliant decision process.

Define:

- screening queue;
- owner;
- priority;
- due date;
- duplicate handling;
- incomplete submission handling;
- status vocabulary;
- notes access;
- escalation; and
- retention.

Do not send automated rejection or acceptance messages without approved content, legal review where required, and an explicitly authorized workflow.

---

## 22. Candidate Communication

Approved messages may cover:

- application received;
- information is incomplete;
- a follow-up is needed;
- a job is closed;
- network registration received;
- privacy or update request; and
- operational next steps.

Messages must identify the sender, avoid unsupported promises, use the correct submission type, and provide an appropriate contact or opt-out path.

---

## 23. Privacy and Access Controls

- collect only approved fields;
- restrict records by role;
- encrypt data in transit and at rest where the platform supports it;
- avoid sensitive data in logs;
- avoid candidate data in analytics;
- define retention and deletion;
- review user access regularly;
- remove former users promptly; and
- document third-party processors.

Automation must not copy applicant data into public content, Git, issue trackers, screenshots, or general chat.

---

## 24. Consent and Preferences

Record consent only when required and in a way that supports:

- purpose;
- timestamp;
- source;
- policy version;
- withdrawal or update;
- communication preference; and
- retention decision.

Do not use a network registration to enroll a person in unrelated marketing without approved consent.

---

## 25. Analytics Events

Safe operational events include:

- job approved;
- job published;
- platform posting published;
- job view;
- apply click;
- application start;
- application accepted;
- network registration accepted;
- commercial inquiry accepted;
- notification failure;
- job closed; and
- platform update failure.

Use stable IDs and allowlisted values. Never send names, email addresses, phone numbers, resumes, free-text responses, or private notes.

---

## 26. Operational Reporting

### Weekly

- active jobs;
- stale-job flags;
- posting status;
- application volume;
- network registrations;
- notification failures;
- screening queue;
- platform issues; and
- urgent incidents.

### Monthly

- source and funnel performance;
- qualified applicant signal;
- time to review;
- duplicate and spam rate;
- platform quality;
- closure accuracy;
- form error patterns; and
- data-retention review.

### Quarterly

- workflow reliability;
- channel economics;
- candidate experience;
- privacy and access review;
- automation exceptions;
- content and schema accuracy; and
- process improvements.

---

## 27. Manual Fallbacks

Maintain a documented manual path for:

- job publication;
- platform update;
- application intake;
- network intake;
- commercial inquiry routing;
- notification;
- job closure;
- candidate correction request; and
- incident response.

The fallback should be usable if an integration, webhook, platform, or automation provider is unavailable.

---

## 28. Automation Security

- keep secrets in approved environment storage;
- use least-privilege credentials;
- rotate credentials when access changes;
- validate inbound webhook signatures where supported;
- rate-limit public endpoints;
- prevent replayed events;
- sanitize logs;
- separate preview and production;
- review third-party scopes; and
- record security incidents.

Never place tokens, credentials, or candidate payloads in repository files.

---

## 29. Change Management

Before changing an operational workflow:

1. describe the current behavior;
2. identify affected records and routes;
3. assess privacy, conversion, and platform impact;
4. update the relevant document;
5. test with synthetic data;
6. obtain owner approval;
7. deploy with rollback knowledge; and
8. monitor after release.

Material changes require a decision-log entry.

---

## 30. Workflow QA Checklist

- [ ] Every critical workflow has an owner and backup.
- [ ] Applications and network registrations are separate.
- [ ] Job records have stable IDs.
- [ ] Publication requires approval.
- [ ] Platform copies reference the canonical record.
- [ ] Application and network confirmations are distinct.
- [ ] Notifications contain minimum necessary data.
- [ ] Retries are bounded and idempotent.
- [ ] Errors are visible and recoverable.
- [ ] Closed jobs update every channel.
- [ ] Screening decisions remain appropriately human-controlled.
- [ ] Analytics contains no PII.
- [ ] Access and retention rules exist.
- [ ] Manual fallbacks are documented.
- [ ] Synthetic test fixtures pass.

---

## 31. Incident Response

Treat these as priority incidents:

- application data lost;
- sensitive data exposed;
- closed job accepting applications;
- incorrect job or compensation published;
- platform posting conflicts with canonical record;
- notification failure causing unreviewed submissions;
- unauthorized account access; or
- automation creates duplicate records.

Record incident time, affected workflow, scope, containment, owner, correction, communication, and regression test.

---

## 32. Definition of Done

Recruitment operations are ready when job intake, approval, publication, platform distribution, application, network, referral, commercial separation, notification, screening handoff, closure, privacy, reporting, retry, incident, and manual fallback procedures are documented and tested. Automation must be observable, idempotent, owner-assigned, and incapable of silently inventing facts or making unauthorized hiring decisions.

---

## 33. Related Documents

- 14-conversion-strategy.md
- 15-analytics-and-measurement.md
- 17-cloudflare-deployment.md
- 26-launch-checklist.md
- 28-recruitment-strategy.md
- 29-recruitment-platform-distribution.md
- 30-job-content-schema-specification.md

## 34. Maintenance

Update this document when a form, workflow, notification, platform, owner, data field, privacy requirement, job lifecycle, integration, or automation rule changes. Record incidents, exceptions, and material workflow decisions in Git and the project decision log.
