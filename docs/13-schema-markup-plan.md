# SB Mobile Installations Schema Markup Plan

**Document:** `13-schema-markup-plan.md`  
**Project:** SB Mobile Installations Website and Installer Recruitment Project  
**Business:** SB Mobile Installations, LLC  
**Primary schema outcome:** Accurate job, organization, and content understanding  
**Secondary schema outcome:** Eligible enhanced search presentation and entity clarity  
**Status:** Technical and governance draft  
**Version:** 0.1  
**Last updated:** September 9, 2026

---

## 1. Purpose

This document defines how structured data will be selected, modeled, generated, validated, published, monitored, updated, and removed across the SB Mobile Installations website.

It governs:

- JSON-LD architecture;
- organization and website entities;
- job postings;
- local business eligibility;
- services and service areas;
- articles and resources;
- breadcrumbs;
- authors and reviewers;
- entity identifiers and relationships;
- Next.js implementation;
- build-time validation;
- rich-result testing;
- job expiration and removal; and
- structured-data governance.

Structured data must describe visible, verified content. It cannot create business facts, substitute for page content, or guarantee a rich result.

---

## 2. Strategic Role

The schema system should help machines distinguish and connect:

- the public business organization;
- the legal business entity;
- the hiring or contracting organization;
- the website;
- active jobs;
- evergreen installer roles;
- recruitment resources;
- customer-facing services;
- technologies and industries;
- physical locations;
- commercial service areas;
- recruiting markets;
- authors and reviewers; and
- page hierarchy.

The primary business use is recruitment. Accurate `JobPosting` data can improve job discovery and candidate fit. Organization, page, article, breadcrumb, service, and eligible local markup support the broader entity and content foundation.

---

## 3. Authoritative Guidance

Implementation should be checked against current official documentation, including:

- [Google structured-data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Google supported structured-data gallery](https://developers.google.com/search/docs/appearance/structured-data/search-gallery)
- [Google Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [Google JobPosting structured data](https://developers.google.com/search/docs/appearance/structured-data/job-posting)
- [Google LocalBusiness structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google BreadcrumbList structured data](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)
- [Google Article structured data](https://developers.google.com/search/docs/appearance/structured-data/article)
- [Google site-name guidance](https://developers.google.com/search/docs/appearance/site-names)
- [Schema.org](https://schema.org/)
- [Schema.org Service](https://schema.org/Service)
- [Schema.org JobPosting](https://schema.org/JobPosting)
- [Schema Markup Validator](https://validator.schema.org/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)

Search features and requirements change. Check the current feature guide before adding or materially revising a type.

---

## 4. Core Principles

### 4.1 Visible-content parity

Every material structured-data value must be supported by content users can access on the same page or by an appropriate canonical organization record.

### 4.2 Business truth controls schema

The schema layer consumes approved records. It must never infer or manufacture jobs, pay, classifications, addresses, service areas, reviews, ratings, technologies, industries, credentials, people, or relationships.

### 4.3 Use the most specific appropriate type

Select the type that accurately describes the thing. Do not choose a type merely because it has a rich result.

### 4.4 Eligibility is not display

Valid markup may make a page eligible for a search feature. Search engines decide whether and how to display it.

### 4.5 One canonical identity graph

Stable `@id` values must connect organization, website, page, author, breadcrumb, service, location, article, and job entities.

### 4.6 Fewer accurate properties are better

Omit unknown or inapplicable properties. Do not fill fields with estimates, placeholder text, broad defaults, or marketing language.

### 4.7 Time-sensitive schema requires lifecycle controls

Job, event, hours, availability, review, and date fields must have owners and removal rules.

---

## 5. Current Business-Truth Blockers

The following must be resolved before the full entity graph can be finalized:

- canonical public business name;
- verified legal name;
- relationship between SB Mobile Installations, LLC and Doral Transport LLC;
- hiring, employing, or contracting organization;
- canonical primary phone;
- canonical address and public-display status;
- customer-facing location eligibility;
- approved services;
- approved technologies and industries;
- verified service areas;
- active jobs and job locations;
- employment or contractor classifications;
- compensation details;
- official logo file and dimensions;
- controlled social and business-profile URLs; and
- approved authors and reviewers.

Until these are approved, use schema fixtures only in development. Do not publish inferred values.

---

## 6. Schema Support Tiers

Each type belongs to one implementation tier.

| Tier | Purpose | Examples | Requirement |
|---|---|---|---|
| Tier 1 | Google-supported feature or core entity | `Organization`, `JobPosting`, `BreadcrumbList`, `Article`, eligible `LocalBusiness` | Implement when eligible and complete |
| Tier 2 | Semantic relationship without guaranteed Google feature | `Service`, `WebPage`, `AboutPage`, `ContactPage`, `CollectionPage` | Implement when it improves the graph |
| Tier 3 | Conditional or specialized | `VideoObject`, `ProfilePage`, `Event` | Implement only with qualifying content |
| Tier 4 | Unsupported, ineligible, or unnecessary for this project | `Product` for services, `JobPosting` on job indexes, self-serving rating markup | Do not implement |

Schema.org vocabulary support and Google rich-result support are different. A valid Schema.org type may not produce a Google enhancement.

---

## 7. Canonical Identifier Strategy

Use absolute production URLs as stable identifiers.

### Global identifiers

```text
https://sbmobileinstallations.com/#organization
https://sbmobileinstallations.com/#website
https://sbmobileinstallations.com/#logo
```

### Page identifiers

```text
{canonical-url}#webpage
{canonical-url}#breadcrumb
{canonical-url}#article
{canonical-url}#service
{canonical-url}#jobposting
{canonical-url}#location
{canonical-url}#person
```

### Rules

- Use the canonical production origin.
- Use the approved trailing-slash URL strategy.
- Keep `@id` stable when content is updated.
- Change the identifier when the canonical entity truly changes.
- Do not use temporary preview, localhost, Cloudflare preview, UTM, or query-string URLs.
- Do not use database IDs as public `@id` values unless the URL is stable and intentional.
- Use the same organization `@id` throughout the graph.

---

## 8. Graph Architecture

Use a JSON-LD `@graph` when a page contains connected entities.

### Homepage graph

- `Organization`
- `WebSite`
- `WebPage`

### Interior page graph

- Appropriate `WebPage` subtype
- `BreadcrumbList` when visible breadcrumbs exist
- Primary page entity such as `JobPosting`, `Service`, or `Article`
- Minimal references to the canonical organization and website

### Relationship pattern

- `WebSite.publisher` references `#organization`.
- `WebPage.isPartOf` references `#website`.
- `WebPage.about` references the primary entity when appropriate.
- `WebPage.breadcrumb` references `#breadcrumb`.
- `Article.publisher` references `#organization`.
- `Article.author` references the approved person or organization.
- `Service.provider` references `#organization`.
- `JobPosting.hiringOrganization` identifies the verified hiring organization.

Avoid repeating full organization records in several incompatible forms. Use shared generators and stable references.

---

## 9. Page-Family Schema Matrix

| Page family | Primary type | Supporting types | Google feature status |
|---|---|---|---|
| Homepage | `WebPage` | `Organization`, `WebSite` | Organization and site-name support |
| About | `AboutPage` | `BreadcrumbList`, organization reference | Semantic plus breadcrumb |
| Contact | `ContactPage` | `BreadcrumbList`, organization reference | Semantic plus breadcrumb |
| Careers hub | `WebPage` | `BreadcrumbList` | No dedicated careers rich result |
| Jobs index | `CollectionPage` | `BreadcrumbList` | Never `JobPosting` for the list |
| Active job leaf | `JobPosting` | `WebPage`, `BreadcrumbList` | Job-search eligibility |
| Evergreen role | `WebPage` | `BreadcrumbList` | Never imply an active job |
| Installer network | `WebPage` | `BreadcrumbList` | Never `JobPosting` |
| Resources hub | `CollectionPage` | `BreadcrumbList` | Semantic plus breadcrumb |
| Resource article | `BlogPosting` or `Article` | `BreadcrumbList`, author | Article eligibility |
| Services hub | `CollectionPage` | `BreadcrumbList` | Semantic plus breadcrumb |
| Service leaf | `Service` | `WebPage`, `BreadcrumbList` | No guaranteed Google service feature |
| Technology | `WebPage` | `BreadcrumbList`, service references | Semantic |
| Industry | `WebPage` | `BreadcrumbList`, service references | Semantic |
| Solution | `Service` or `WebPage` | `BreadcrumbList` | Conditional semantic use |
| Service-area page | `Service` or `WebPage` | `BreadcrumbList` | No false location entity |
| Eligible location | Specific `LocalBusiness` subtype | `WebPage`, `BreadcrumbList` | Local-business eligibility |
| Case study | `Article` or `CreativeWork` | `BreadcrumbList`, organization | Article only when article-like |
| Privacy or terms | `WebPage` | `BreadcrumbList` when shown | Semantic |
| Thank-you or utility | None or minimal `WebPage` | None | Noindex; no enhancement target |

---

## 10. Organization Entity

Google recommends adding organization information to the homepage or a single canonical organization page rather than repeating a full standalone record everywhere.

### Initial type

Use `Organization` until a more specific accurate subtype is verified.

### Recommended properties when verified

- `@id`
- `@type`
- `name`
- `legalName`
- `alternateName`
- `url`
- `logo`
- `description`
- `telephone`
- `email`
- `address`
- `contactPoint`
- `sameAs`
- `foundingDate`
- `naics`
- other recognized company identifiers when appropriate

### Rules

- `name` must match the approved public identity.
- `legalName` must use the registered legal name only when verified.
- Do not use `alternateName` for keyword phrases.
- Use international phone format.
- Include an address only when accurate and appropriate for public display.
- Use `sameAs` only for official profiles representing the same entity.
- Do not include job-board listing URLs, random directories, or unrelated partner pages in `sameAs`.
- Do not publish employee count, founding date, NAICS code, tax ID, DUNS, or other identifiers without approval.

### Logo requirements

Google currently recommends a crawlable, indexable logo at least 112 by 112 pixels. The image should remain recognizable on a white background. Use a stable absolute URL and verify current guidance before launch.

---

## 11. Website Entity and Site Name

Use one `WebSite` entity on the homepage.

### Recommended properties

- `@id`: `https://sbmobileinstallations.com/#website`
- `@type`: `WebSite`
- `url`: `https://sbmobileinstallations.com/`
- `name`: approved site name
- `alternateName`: approved concise alternative, if genuinely used
- `publisher`: organization reference
- `inLanguage`: `en-US` when accurate

Do not add a `SearchAction` unless the site has a working public site-search function and current platform guidance supports a useful implementation. Do not build site search solely to add schema.

---

## 12. WebPage Entities

Every indexable page may include an appropriate `WebPage` subtype.

### Common properties

- `@id`
- `@type`
- `url`
- `name`
- `description`
- `isPartOf`
- `about`
- `breadcrumb`
- `inLanguage`
- `datePublished` when meaningful
- `dateModified` when meaningfully revised
- `primaryImageOfPage` when appropriate

### Subtype use

- `AboutPage` for the company about page
- `ContactPage` for contact information
- `CollectionPage` for hubs and indexes
- `WebPage` for careers, role, technology, industry, solution, and policy pages without a more useful subtype

Do not create dates that are absent from editorial records. A build or deployment time is not automatically a content modification date.

---

## 13. BreadcrumbList

Use `BreadcrumbList` on nested pages when visible breadcrumbs are present.

### Requirements

- Match the visible breadcrumb path.
- Use absolute canonical URLs.
- Start positions at `1`.
- Increment positions without gaps.
- Use human-readable names.
- Include linked parent items.
- Represent the current page consistently with current Google guidance.
- Do not invent hierarchy that differs from navigation.

### Examples

```text
Home > Careers > Current Openings > Mobile Installer - Market
Home > Careers > Installer Resources > Article Title
Home > Services > Fleet Telematics Installation
Home > Service Areas > Approved Market
```

Breadcrumb schema must be generated from the route's approved breadcrumb model, not parsed from URL segments at runtime.

---

## 14. JobPosting Eligibility

Add `JobPosting` only when all conditions are true:

- one real opening exists;
- the page describes that one opening in full;
- applications are currently accepted;
- the role, location, organization, terms, and dates are verified;
- the content is visible without login;
- the page has a working application path;
- the canonical URL returns `200`;
- the page is indexable;
- the markup matches the page; and
- an owner is responsible for closing it.

### Never add JobPosting to

- `/careers/`;
- `/careers/jobs/`;
- search or filtered job results;
- evergreen role pages;
- installer-network pages;
- training or qualification resources;
- closed jobs;
- speculative future roles;
- talent-community forms; or
- resume-collection pages without a current opening.

---

## 15. JobPosting Required Data Model

The internal job record must support at least:

| Field | Schema mapping | Rule |
|---|---|---|
| Job ID | `identifier.value` | Stable, unique opening identifier |
| Role title | `title` | Actual title; no promotional additions |
| Full description | `description` | Complete visible job description |
| Posting date | `datePosted` | Real first-publication date |
| Closing date | `validThrough` | Include when the posting expires |
| Hiring organization | `hiringOrganization` | Exact verified entity |
| Work-location model | Conditional fields | Physical, remote, or mixed based on reality |
| Physical job location | `jobLocation` | Where work can physically be performed |
| Employment type | `employmentType` | Approved Google-supported value |
| Compensation | `baseSalary` | Visible, accurate, and approved when included |
| Application method | Page CTA | Must be functional and visible |
| Status | Publishing control | Draft, active, closing, closed, archived |

Google's required and recommended properties may change. The runtime validator must reflect the live specification, not only the fields listed here.

---

## 16. Job Title Standard

`title` must contain the job title only.

### Acceptable pattern

```text
Mobile Telematics Installer
```

### Do not place in title

- company name;
- city or state;
- pay;
- dates;
- schedule;
- “hiring now”;
- “urgent”;
- benefits;
- tracking codes; or
- keyword variations.

Location and compensation belong in their respective properties and visible page sections.

---

## 17. Job Description Standard

The `description` must contain the complete job description in supported HTML or plain text and match the readable page.

It should include approved information about:

- role summary;
- responsibilities;
- required qualifications;
- preferred qualifications;
- work environment;
- travel;
- schedule;
- physical or tool requirements when lawful and relevant;
- compensation and benefits when approved or required;
- engagement type;
- application process; and
- equal-opportunity or other required statements.

Do not place title, location, or date metadata only in the description. Do not use hidden content, unrelated keywords, or marketing copy that materially changes the role.

Sanitize HTML before inserting it into JSON-LD. The visible page and structured description should derive from the same approved job record.

---

## 18. Job Location Rules

Location accuracy is a release requirement.

### Physical or field work

Use `jobLocation` for the place or places where the work can physically be performed. Include `addressCountry` whenever `jobLocation` is used.

For a mobile field role, identify the genuine operating or work geography supported by the job. Do not use company headquarters, a popular city, an applicant-targeting city, or a technician's home simply to gain visibility.

### Mobile work is not automatically remote work

A field installer who travels to fleet yards, shops, or customer sites is not necessarily working from home. Do not set:

```json
"jobLocationType": "TELECOMMUTE"
```

unless the job can actually be performed remotely from the worker's chosen home location and the visible description says so.

### Remote jobs

For a genuine fully remote job, use `jobLocationType: "TELECOMMUTE"` and the correct `applicantLocationRequirements`. Follow current Google scenarios for remote-only and hybrid jobs.

Do not use `applicantLocationRequirements` as a substitute for field territory or travel expectations when the role is not a work-from-home job.

---

## 19. Hiring Organization

The `hiringOrganization` must identify the entity that offers the position or contracting opportunity.

Required discovery must determine which entity:

- recruits;
- hires or contracts;
- pays;
- supervises;
- assigns work;
- owns the application data; and
- appears on candidate agreements.

Do not default to SB Mobile Installations, LLC if Doral Transport LLC or another entity is the actual hiring or contracting organization.

### Recommended object

- `@type`: `Organization`
- `@id`: stable verified organization identifier
- `name`: exact public name
- `sameAs`: canonical organization URL when applicable
- `logo`: approved crawlable logo URL

The hiring organization shown in schema must match the visible job page and external recruitment platforms.

---

## 20. Job Identifier

Use a stable internal opening ID.

```json
{
  "@type": "PropertyValue",
  "name": "Verified Hiring Organization",
  "value": "SMI-2026-0001"
}
```

### Rules

- Never reuse an ID for a materially different opening.
- Keep the ID stable across content updates.
- Include it in platform-distribution and analytics records.
- Do not expose confidential requisition or customer codes.
- A reopened role should receive a new ID when it represents a new recruiting cycle under the URL strategy.

---

## 21. Employment Type

Use only a supported value that accurately reflects approved terms, such as:

- `FULL_TIME`
- `PART_TIME`
- `CONTRACTOR`
- `TEMPORARY`
- `INTERN`
- `VOLUNTEER`
- `PER_DIEM`
- `OTHER`

Do not infer classification from casual wording. Legal or HR review is required where classification is unresolved. Do not use `CONTRACTOR` merely because technicians travel or use their own tools.

---

## 22. Compensation

Add `baseSalary` only when compensation is approved, current, visible on the page, and represented accurately.

### Supported model

- `MonetaryAmount.currency`
- `QuantitativeValue.value`, `minValue`, or `maxValue`
- `QuantitativeValue.unitText`

Common `unitText` values include `HOUR`, `DAY`, `WEEK`, `MONTH`, and `YEAR` when they match the actual pay basis.

### Rules

- Do not convert project, piece-rate, mileage, bonus, reimbursement, or variable compensation into an inaccurate hourly rate.
- Do not publish a range that is not available to the represented candidates.
- Do not omit required pay information from the visible page while placing it in schema.
- Update or remove compensation immediately when terms change.
- Keep job-board and website compensation synchronized.

---

## 23. Job Dates and Lifecycle

### `datePosted`

Use the actual date the opening was first published for the current recruiting cycle. Do not reset it merely to appear fresh.

### `validThrough`

Include the real expiration date when one exists. Use ISO 8601 and include timezone information for timestamps.

### Closing workflow

When applications close, immediately do at least one compliant action:

- move `validThrough` into the past;
- remove the `JobPosting` object;
- return `404` or `410` if the page will not be retained; or
- convert the page to an intentional archive that no longer contains job markup or active-application language.

Then:

- remove the job from the active jobs index;
- remove or update sitemap state;
- notify Google's Indexing API for the job URL;
- notify IndexNow where implemented;
- close external listings;
- stop application workflows; and
- verify the public result.

Failure to remove expired jobs promptly can create candidate harm and search-policy risk.

---

## 24. Direct Apply

Use `directApply` only when the page provides the direct application experience described by current Google guidance.

Do not set it to `true` merely because the page has an “Apply” button. Confirm the number of steps, redirects, logins, and application flow before implementation.

---

## 25. Optional Job Properties

Consider only when accurate and supported by visible content:

- `applicantLocationRequirements`
- `baseSalary`
- `directApply`
- `educationRequirements`
- `experienceRequirements`
- `experienceInPlaceOfEducation`
- `industry`
- `jobBenefits`
- `qualifications`
- `responsibilities`
- `skills`
- `totalJobOpenings`
- `workHours`

Do not duplicate long text across several properties merely to increase markup volume. Beta or evolving properties require live documentation review.

---

## 26. JobPosting Development Template

This structure is illustrative. It must be populated from an approved job record and validated against current requirements.

```json
{
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "@id": "https://sbmobileinstallations.com/careers/jobs/approved-job-slug/#jobposting",
  "title": "Approved Role Title",
  "description": "<p>Approved complete job description.</p>",
  "identifier": {
    "@type": "PropertyValue",
    "name": "Verified Hiring Organization",
    "value": "APPROVED-JOB-ID"
  },
  "datePosted": "2026-09-09",
  "validThrough": "2026-10-09T23:59:59-07:00",
  "employmentType": "APPROVED_SUPPORTED_VALUE",
  "hiringOrganization": {
    "@type": "Organization",
    "name": "Verified Hiring Organization",
    "sameAs": "https://sbmobileinstallations.com/",
    "logo": "https://sbmobileinstallations.com/images/approved-logo.png"
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Verified City",
      "addressRegion": "ST",
      "addressCountry": "US"
    }
  }
}
```

Placeholder values must cause validation failure in production builds.

---

## 27. LocalBusiness Eligibility

Do not implement `LocalBusiness` until an eligible business location and accurate public location record are confirmed.

### Required verification

- real operating location;
- represented business entity;
- customer-access or service-area model;
- address and display rules;
- phone;
- hours;
- coordinates;
- business category;
- location page;
- supporting visible content; and
- business-profile consistency.

### Prohibited use

- technician homes;
- virtual offices;
- mailboxes;
- temporary project sites;
- customer locations;
- recruiting markets;
- service areas represented as offices;
- unverified Goodyear association; or
- automatically generated city pages.

If the address must remain hidden from the public, do not leak it through structured data. Use the approved organization and service-area strategy until an eligible visible implementation is defined.

---

## 28. LocalBusiness Properties

When eligible, use the most specific accurate subtype and current required properties.

Potential fields include:

- `@id`
- `@type`
- `name`
- `image`
- `url`
- `telephone`
- `email`
- `address`
- `geo`
- `openingHoursSpecification`
- `areaServed`
- `priceRange` when meaningful and required
- `sameAs`
- `parentOrganization`

### Rules

- Match visible location information.
- Use exact coordinates for the real location.
- Use current staffed or customer hours.
- Do not use `areaServed` as a keyword list.
- Do not mark temporary deployment coverage as permanent service area.
- Keep Google Business Profile, Bing Places, Apple Maps, website, and schema aligned.

---

## 29. Service Schema

Use `Service` to clarify verified customer-facing capabilities. It is a semantic type and does not guarantee a Google service rich result.

### Potential properties

- `@id`
- `@type`: `Service`
- `name`
- `description`
- `url`
- `provider`
- `serviceType`
- `areaServed`
- `audience`
- `category`
- `availableChannel`

### Rules

- Use only approved customer-facing services.
- Do not convert recruiting skills into commercial services automatically.
- Keep descriptions consistent with visible content.
- Use `areaServed` only for verified commercial coverage.
- Do not use `Offer` or pricing properties unless a real public offer exists.
- Do not use `Product` for a service or job.
- Do not add the same Service object to unrelated pages.

---

## 30. Service-Area Pages

A service-area page generally describes a `Service` or `WebPage` relationship to an approved geography. It does not automatically represent a `LocalBusiness`.

### Rules

- Connect the verified service to the approved market.
- Use `areaServed` only when supported by visible content and the geographic registry.
- Do not create a location `@id` for a nonexistent office.
- Do not use `PostalAddress` for a city where the business has no address.
- Do not imply an active job through commercial geography.
- Do not imply commercial coverage through a recruiting market.

---

## 31. Article and BlogPosting

Use `BlogPosting` for editorial resources and `Article` for broader article-like content.

### Recommended properties

- `@id`
- `@type`
- `headline`
- `description`
- `url`
- `mainEntityOfPage`
- `image`
- `datePublished`
- `dateModified`
- `author`
- `publisher`
- `inLanguage`
- `articleSection`

### Rules

- Headline must match the visible article.
- Dates must reflect real publication and meaningful updates.
- All visible credited authors must appear in schema.
- Do not invent an individual author.
- Images must represent the article and be crawlable.
- Use approved high-resolution crops when available.
- Do not use the logo as the only article image.
- Link authors to a stable biography when one exists.

Google currently recommends representative high-resolution images and supports multiple aspect ratios such as 16:9, 4:3, and 1:1. Confirm current minimums before implementation.

---

## 32. Author and Reviewer Entities

### Person authors

Use `Person` only for a real publicly credited author or reviewer who approved the association.

Potential properties:

- `@id`
- `@type`
- `name`
- `url`
- `jobTitle`
- `worksFor`
- `sameAs`
- `knowsAbout`

### Rules

- Do not invent credentials.
- Do not stuff `knowsAbout` with keywords.
- Do not create author pages without useful biography content.
- Distinguish author from technical or legal reviewer in visible content.
- Use `Organization` as author only when organizational authorship is genuine.

Reviewer information may remain visible editorial metadata without a specialized schema relationship if no accurate supported property pattern is appropriate.

---

## 33. ImageObject

Use `ImageObject` when it improves clarity or a supported feature needs detailed image properties.

Potential fields:

- `@id`
- `url`
- `contentUrl`
- `width`
- `height`
- `caption`
- `creditText`
- `creator`
- `copyrightNotice`
- `license`

Do not claim ownership, copyright, creator, or licensing terms that are not documented. Do not mark stock or AI-generated imagery as actual SB Mobile Installations work, staff, customers, or facilities.

---

## 34. VideoObject

Use `VideoObject` only when a stable page contains a meaningful, playable video with required metadata.

Potential fields:

- `name`
- `description`
- `thumbnailUrl`
- `uploadDate`
- `duration`
- `contentUrl` or `embedUrl`
- `transcript`

Do not add video schema to decorative hero loops, inaccessible media, placeholder videos, or pages where the video is incidental. Verify Google's current video requirements before launch.

---

## 35. FAQ, Q&A, and How-To Boundaries

Visible FAQs remain useful content, but FAQ markup must not be added solely to pursue a rich result.

As of this plan's review, Google's current supported structured-data gallery does not provide a general FAQ feature entry for this type of business. Do not deploy `FAQPage` at launch unless current official guidance confirms eligibility and the content meets it.

### Do not misuse

- `QAPage` for company-written FAQs; it is intended for pages centered on one question with user-submitted answers.
- `HowTo` merely because an article contains steps.
- `Speakable` for general service or recruiting content.

Reassess only when official support changes.

---

## 36. Review and Rating Markup

Do not add `Review` or `AggregateRating` to organization or local-business pages merely because testimonials appear on the site.

### Prohibited

- fabricated ratings;
- ratings copied from platforms without permission or eligibility;
- employee, applicant, contractor, or customer testimonials converted into an aggregate score;
- self-serving local-business review markup;
- marking testimonials as reviews when required fields and policies are not met; and
- hiding negative data to create a misleading aggregate.

`EmployerAggregateRating` is not appropriate for the employer's own website unless the site independently gathers ratings about other employers and meets Google's requirements. Do not implement it for SB Mobile Installations.

---

## 37. Event Markup

Use `Event` only for a real public event with a defined time, attendance method, status, location or online access, and visible event page.

Potential examples include an approved public hiring event or technical-school recruiting session.

Do not use Event for:

- job openings;
- application deadlines;
- private interviews;
- general recruitment campaigns;
- internal training;
- recurring availability; or
- unconfirmed future events.

---

## 38. Schema Types Not Planned at Launch

- `Product`
- `Offer` without a real offer
- `Course` without a verified course
- `EducationalOccupationalProgram` without a verified program
- `EmployerAggregateRating`
- `AggregateRating` for the company
- `FAQPage` without current eligibility
- `QAPage` for editorial FAQs
- `HowTo` without current feature justification
- `Speakable`
- `Event` without a real event
- `LocalBusiness` without an eligible location
- `Person` for unapproved or fictional staff
- custom or unsupported “AI schema”

The absence of a type is not a content-quality problem.

---

## 39. Next.js Implementation Architecture

Recommended structure:

```text
src/
  components/
    seo/
      JsonLd.tsx
  lib/
    schema/
      constants.ts
      organization.ts
      website.ts
      webpage.ts
      breadcrumb.ts
      job-posting.ts
      service.ts
      article.ts
      local-business.ts
      validators.ts
      types.ts
  content/
    jobs/
    services/
    resources/
  app/
    ...routes
```

Exact paths may change with the approved technical architecture. Centralize generators and validators rather than hand-writing JSON-LD in every page component.

---

## 40. JSON-LD Component

Use a server-rendered component that safely serializes approved data.

```tsx
type JsonLdProps = {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
};

export function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
```

### Security requirements

- Never serialize untrusted raw user input.
- Validate and sanitize CMS or job-description HTML.
- Escape characters that could terminate the script context.
- Do not accept arbitrary JSON-LD from forms or third-party feeds.
- Keep dependencies and sanitizers current.

---

## 41. Generator Pattern

Generators should accept validated records and omit unavailable optional properties.

```ts
type OrganizationInput = {
  name: string;
  legalName?: string;
  url: string;
  logoUrl?: string;
  telephone?: string;
  email?: string;
  sameAs?: string[];
};

export function buildOrganizationSchema(input: OrganizationInput) {
  return {
    "@type": "Organization",
    "@id": `${input.url}#organization`,
    name: input.name,
    ...(input.legalName ? { legalName: input.legalName } : {}),
    url: input.url,
    ...(input.logoUrl ? { logo: input.logoUrl } : {}),
    ...(input.telephone ? { telephone: input.telephone } : {}),
    ...(input.email ? { email: input.email } : {}),
    ...(input.sameAs?.length ? { sameAs: input.sameAs } : {}),
  };
}
```

Production generators must normalize trailing slashes, dates, phone format, HTML, identifiers, and empty values consistently.

---

## 42. Job Data Interface

The job content model should support lifecycle and validation, not only page rendering.

```ts
type JobStatus = "draft" | "active" | "closing" | "closed" | "archived";

type JobRecord = {
  id: string;
  slug: string;
  status: JobStatus;
  title: string;
  descriptionHtml: string;
  hiringOrganizationId: string;
  datePosted: string;
  validThrough?: string;
  employmentType: string;
  workLocationModel: "physical" | "field" | "remote" | "hybrid";
  jobLocations?: Array<{
    locality?: string;
    region?: string;
    postalCode?: string;
    country: string;
  }>;
  applicantLocationRequirements?: string[];
  compensation?: {
    currency: string;
    unitText: string;
    value?: number;
    minValue?: number;
    maxValue?: number;
  };
  directApply?: boolean;
  owner: string;
  lastVerified: string;
};
```

This is a project model, not a final legal or platform specification. Update it after recruiting discovery and technical architecture approval.

---

## 43. Runtime Validation

TypeScript types do not validate content loaded at runtime. Use an approved runtime schema library or equivalent validation process.

### Job invariants

- Active jobs require all current Google-required fields.
- Closed jobs cannot generate `JobPosting`.
- `validThrough` cannot be before `datePosted`.
- Expired jobs cannot appear in the active index.
- Physical and field jobs cannot default to `TELECOMMUTE`.
- Remote jobs require approved applicant geography.
- `jobLocation` requires `addressCountry`.
- Compensation requires valid currency, unit, and value or range.
- Range minimum cannot exceed maximum.
- Hiring organization must resolve to an approved entity.
- Job slug and canonical URL must be unique.
- Placeholder values fail production builds.

### General invariants

- All URLs are absolute HTTPS canonical URLs.
- All `@id` references resolve consistently.
- Visible and schema titles match materially.
- Dates use ISO 8601.
- Empty strings and empty arrays are omitted.
- Unverified entities cannot enter production schema.

---

## 44. Data Sources and Precedence

| Schema field class | Canonical source |
|---|---|
| Organization identity | Business source of truth and entity registry |
| Contact information | Canonical business-data record |
| Physical location | Verified location registry |
| Service area | Approved commercial service-area registry |
| Hiring organization | Legal and recruiting approval |
| Job details | Active job registry |
| Service details | Approved service registry |
| Technology and industry | Approved entity registries |
| Page URL and hierarchy | Route manifest and breadcrumb model |
| Article author and dates | Editorial record |
| Images | Approved media registry |
| External profiles | Controlled profile registry |

When sources conflict, schema generation must stop or omit the disputed field. Do not silently choose one.

---

## 45. Environment Controls

### Local and preview

- Schema may render for testing, but it must use environment-appropriate noncanonical fixtures only when clearly isolated.
- Preview pages should be noindex and access-controlled where appropriate.
- Do not allow preview schema to be crawled as production content.

### Production

- Use `https://sbmobileinstallations.com/` canonical identifiers.
- Fail deployment on invalid required job data.
- Exclude drafts, closed jobs, and unapproved entities.
- Verify JSON-LD in the rendered HTML.

Do not generate production schema with Cloudflare preview domains, localhost URLs, or branch names.

---

## 46. Validation Workflow

### Before merge or release

1. Validate the source record.
2. Generate JSON-LD.
3. Parse it as JSON.
4. Run project invariants.
5. Validate vocabulary with Schema Markup Validator.
6. Test Google-supported types with Rich Results Test.
7. Compare schema against visible content.
8. Test the canonical page status, robots, and canonical tag.
9. Review a representative rendered page.

### After deployment

1. Test the production URL.
2. Use Google URL Inspection.
3. Confirm the rendered JSON-LD.
4. Check Search Console enhancement reports.
5. Monitor unparsable structured-data reports.
6. Verify active job discovery and closure behavior.

Passing a syntax test does not prove policy compliance or factual accuracy.

---

## 47. Automated Test Suite

Recommended automated coverage:

- JSON parse tests;
- generator unit tests;
- schema snapshot tests;
- required-property tests;
- field-format tests;
- canonical URL tests;
- `@id` uniqueness tests;
- cross-reference resolution tests;
- visible-content parity checks where practical;
- job status and expiration tests;
- remote-versus-field location tests;
- organization identity consistency tests;
- sitemap and schema status consistency tests;
- noindex and schema compatibility tests;
- placeholder rejection tests; and
- rendered-page integration tests.

Snapshot tests must not become an excuse to approve incorrect values automatically. Review meaningful changes.

---

## 48. Build and Release Gates

### Build blockers

- Invalid JSON
- Missing current required `JobPosting` properties
- Active job with expired `validThrough`
- Closed job producing `JobPosting`
- Unknown hiring organization
- Unsupported placeholder value
- Noncanonical production URL
- Duplicate `@id` assigned to different entities
- Remote markup on a verified field-only role
- Schema containing a prohibited private address
- Aggregate rating without eligibility
- LocalBusiness without approved eligibility

### Warnings requiring review

- Missing recommended property
- Article without a representative image
- Page without breadcrumb schema where visible breadcrumbs exist
- Unverified optional field omitted
- Date-modified mismatch
- SameAs profile awaiting verification

Business-truth and policy failures are blockers even when syntax is valid.

---

## 49. Search Console Monitoring

Monitor:

- Job posting enhancement status
- Breadcrumb enhancement status
- Article or other eligible feature status
- Unparsable structured data
- Manual actions
- Indexation and canonical selection
- URL Inspection results
- Rich-result impressions and clicks where available
- Job URL discovery and removal speed

Investigate sudden changes after:

- template releases;
- source-data changes;
- job closures;
- domain or URL changes;
- schema documentation updates; or
- Search Console notices.

---

## 50. Structured Data Incident Response

### Severity 1

Examples:

- false job;
- wrong hiring entity;
- private address exposure;
- fabricated compensation or rating;
- closed job still accepting applications;
- manual action.

Actions:

1. Disable or correct affected markup immediately.
2. Stop associated publication or application flow when necessary.
3. Notify the responsible business owner.
4. Submit removal or recrawl notifications.
5. Document the incident and root cause.
6. Add a prevention test.

### Severity 2

Examples:

- missing recommended property;
- broken breadcrumb item;
- outdated image;
- noncritical validation warning.

Queue correction based on user impact and feature risk.

---

## 51. Prohibited Practices

- Marking hidden or nonexistent content
- Using schema to add keywords
- Publishing fake jobs or locations
- Treating mobile field work as remote work
- Using `JobPosting` on job indexes or installer-network pages
- Leaving expired job markup live
- Publishing an unverified hiring organization
- Marking services as products
- Creating fake offers, prices, reviews, or ratings
- Using self-serving aggregate ratings
- Marking service areas as physical businesses
- Exposing private addresses
- Creating author identities or credentials
- Resetting dates to simulate freshness
- Adding markup solely because a competitor uses it
- Using unsupported “AI schema”
- Duplicating contradictory JSON-LD through page and plugin output
- Hiding errors by suppressing validation

---

## 52. Implementation Phases

### Phase 0: Resolve source data

- Confirm business and hiring entities.
- Verify contact, location, service, role, and job records.
- Approve logo and official profiles.
- Assign schema and lifecycle owners.

### Phase 1: Core graph

- Implement constants and canonical identifiers.
- Add `Organization`, `WebSite`, and homepage `WebPage`.
- Add reusable page and breadcrumb generators.
- Establish runtime validation and tests.

### Phase 2: Recruitment schema

- Implement active job model and generator.
- Add job lifecycle and expiration gates.
- Validate representative jobs.
- Connect Google Indexing API and IndexNow workflows.
- Monitor Search Console job reports.

### Phase 3: Content schema

- Add `Article` or `BlogPosting` to qualifying resources.
- Add approved author entities.
- Add service entities to verified service pages.
- Add image and video data where justified.

### Phase 4: Local schema

- Complete location eligibility review.
- Implement `LocalBusiness` only for approved locations.
- Verify profile and visible-page consistency.

### Phase 5: Ongoing optimization

- Review current supported features.
- Improve recommended-property coverage.
- Monitor rich-result performance.
- Remove deprecated, unsupported, or low-value markup.

---

## 53. Prelaunch Checklist

### Entity foundation

- [ ] Public business name approved
- [ ] Legal name approved
- [ ] Hiring organization approved
- [ ] Organization `@id` approved
- [ ] Website `@id` approved
- [ ] Logo verified and crawlable
- [ ] Contact and profile URLs verified

### Technical implementation

- [ ] Shared JSON-LD component implemented
- [ ] Safe serialization implemented
- [ ] Generators centralized
- [ ] Runtime validation implemented
- [ ] Production placeholder gate implemented
- [ ] Canonical URL normalization tested
- [ ] `@id` relationships tested
- [ ] Rendered HTML inspected

### Jobs

- [ ] Every marked-up job is real and active
- [ ] One job per leaf page
- [ ] No JobPosting on indexes or installer network
- [ ] Title and description match visible content
- [ ] Hiring organization is accurate
- [ ] Job geography is accurate
- [ ] Field jobs are not marked remote
- [ ] Compensation is visible and accurate when present
- [ ] Dates are valid
- [ ] Application path works
- [ ] Closure workflow tested
- [ ] Indexing API and sitemap workflow tested

### Other page families

- [ ] Homepage graph validated
- [ ] Visible breadcrumbs match BreadcrumbList
- [ ] Articles contain accurate author and dates
- [ ] Service markup uses approved services only
- [ ] LocalBusiness omitted unless eligibility is approved
- [ ] No ineligible FAQ, rating, product, or event markup

### Search validation

- [ ] Schema Markup Validator passed
- [ ] Rich Results Test passed for supported types
- [ ] Production URL Inspection completed
- [ ] Search Console monitoring assigned

---

## 54. Roles and Ownership

| Role | Responsibility |
|---|---|
| Business owner | Approves organization, location, service, proof, and official profiles |
| Recruiting owner | Approves active jobs, terms, locations, and closure status |
| Legal or HR reviewer | Approves entity, classification, compensation, privacy, and required job language |
| Content owner | Maintains visible-content parity and editorial dates |
| Developer | Builds generators, validators, tests, and lifecycle automation |
| Sirius Systems | Coordinates strategy, implementation, QA, monitoring, and reporting |
| Search owner | Reviews platform changes, Search Console, and rich-result incidents |

No schema generator or AI tool may become the authority for a business fact.

---

## 55. Risk Register

| Risk | Impact | Control |
|---|---|---|
| Wrong hiring organization | Legal and candidate trust risk | Entity approval gate |
| Field job marked remote | Misleading job visibility | Work-location invariant |
| Expired job remains marked up | Manual action and candidate harm | Expiration automation |
| Installer network marked as a job | False opportunity | Page-family prohibition |
| Private address enters LocalBusiness | Privacy and platform risk | Location eligibility gate |
| Recruiting market becomes service location | Entity confusion | Geographic registry separation |
| Compensation schema differs from copy | Compliance and trust risk | Single job record |
| Hand-written schema drifts | Inconsistent graph | Central generators |
| Third-party script duplicates markup | Conflicting entities | Rendered HTML audit |
| Valid syntax hides false facts | Policy and reputation risk | Human business-truth review |
| Deprecated feature remains deployed | Maintenance and warning noise | Quarterly feature review |
| Fake rating or review markup | Manual action and trust loss | Prohibited rating policy |

---

## 56. Open Decisions

- What is the approved public business name?
- What is the verified legal name?
- How are SB Mobile Installations, LLC and Doral Transport LLC related?
- Which entity is the hiring or contracting organization?
- What organization and website names should Google associate with the domain?
- Which phone, email, address, and official profiles are canonical?
- Which logo file and crops will be used?
- Which services, technologies, industries, and markets are approved?
- Is any physical location eligible for `LocalBusiness`?
- Which jobs will be active at launch?
- Which compensation and employment-type fields are approved?
- What job-closing and archive policy will be used?
- Will Google Indexing API submission be automated?
- Which runtime validation library will be used?
- Which schema checks will block deployment?
- Who reviews Search Console structured-data reports?
- Which authors and reviewers may be identified publicly?

---

## 57. Related Documents

- `00-project-overview.md`
- `01-business-source-of-truth.md`
- `05-keyword-research.md`
- `06-search-intent-map.md`
- `07-site-architecture.md`
- `08-url-strategy.md`
- `09-content-strategy.md`
- `10-on-page-seo-standards.md`
- `11-local-seo-plan.md`
- `12-aeo-geo-llm-optimization.md`
- `14-conversion-strategy.md`
- `15-analytics-and-measurement.md`
- `16-technical-architecture.md`
- `17-component-and-template-specifications.md`
- `22-image-strategy.md`
- `25-quality-assurance-checklist.md`
- `26-launch-checklist.md`
- `28-recruitment-strategy.md`
- `29-recruitment-platform-distribution.md`
- `30-job-content-schema-specification.md`
- `31-recruitment-operations-automation.md`

---

## 58. Definition of Done

The launch schema foundation is complete when:

- business and hiring organizations are approved;
- stable canonical identifiers are implemented;
- the homepage organization and website graph is valid;
- visible breadcrumbs and `BreadcrumbList` agree;
- active jobs generate complete, accurate `JobPosting` objects;
- field and remote job rules are enforced;
- closed jobs cannot emit job markup;
- installer-network and index pages cannot emit job markup;
- services and articles use only verified records;
- local markup is blocked until eligibility is approved;
- JSON-LD is safely server-rendered;
- runtime validation and automated tests pass;
- representative production pages pass appropriate validators;
- Google can crawl the marked-up pages;
- Search Console monitoring is configured; and
- owners can update or remove time-sensitive schema promptly.

---

## 59. Maintenance

Review this plan:

- when Google or Schema.org changes a relevant specification;
- when required or recommended `JobPosting` properties change;
- when the organization or hiring entity changes;
- when a new page family or content model launches;
- when a physical location becomes eligible or ineligible;
- when a structured-data warning, manual action, or rich-result decline appears;
- after changes to Next.js rendering, Cloudflare deployment, or content sourcing;
- during quarterly technical SEO reviews; and
- after any incident involving a false job, location, rating, entity, date, or compensation value.

Update generators, runtime schemas, fixtures, automated tests, content models, editorial documentation, lifecycle workflows, and monitoring rules together when the specification changes.
