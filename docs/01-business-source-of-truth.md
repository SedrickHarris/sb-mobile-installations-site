# SB Mobile Installations Business Source of Truth

**Document:** 01-business-source-of-truth.md  
**Project:** SB Mobile Installations Website Rebuild  
**Business:** SB Mobile Installations, LLC  
**Status:** Discovery draft  
**Version:** 0.4  
**Last updated:** September 10, 2026

---

## 1. Purpose

This document is the canonical source for business facts used throughout the SB Mobile Installations website project. It exists to prevent assumptions, legacy language, recruiting requirements, third-party information, and proposed marketing ideas from becoming unsupported public claims.

Use this document before writing or approving:

- Website copy
- Metadata
- Structured data
- Forms
- Contact information
- Service pages
- Industry pages
- Audience and solution pages
- Technology pages
- Service-area pages
- Case studies
- Careers content
- Directory profiles
- Google Business Profile content
- Bing Places content
- Apple Business Connect content
- Social profile descriptions
- Press or partnership material

If a fact is not approved here or in a more specific canonical registry, treat it as unverified.

---

## 2. Authority and precedence

When sources conflict, use the following order:

1. Written confirmation from an authorized SB Mobile Installations representative
2. Approved contracts, licenses, certifications, policies, and internal company records
3. Approved canonical project registries
4. Current official company website content
5. Current official company-controlled profiles
6. Current recruiting material
7. Reputable third-party directories and publications
8. Search results, cached pages, competitor content, and other secondary sources

Lower-priority sources may identify facts that require verification. They do not override a higher-priority source.

---

## 3. Status definitions

| Status | Meaning | Public use |
| --- | --- | --- |
| Approved | Confirmed by an authorized company representative or authoritative record | Allowed within the approved scope |
| Existing website statement | Currently stated on the company website but not independently confirmed | Preserve carefully; verify before expanding |
| Recruiting evidence | Appears in company recruiting content as a technician duty or preferred qualification | Do not automatically convert into a customer-facing service |
| External evidence | Appears in a third-party source | Use for discovery only until confirmed |
| Proposed | Recommended for strategy or information architecture | Not a company fact |
| Inferred | Reasonable interpretation of available information | Label internally; do not publish as fact |
| Pending verification | Important fact with insufficient or conflicting support | Do not publish definitively |
| Prohibited until supported | Claim presents elevated legal, brand, safety, partnership, or credibility risk | Do not publish without documentation |
| Retired | Previously used but no longer current | Do not publish except in accurate historical context |

---

## 4. Entity record

| Field | Current value | Status | Notes |
| --- | --- | --- | --- |
| Legal business name | SB Mobile Installations, LLC | Approved | Client confirmed as the sole operating entity |
| Public-facing name | SB Mobile Installations | Proposed | Confirm preferred public presentation |
| Abbreviated name | SB Mobile | Existing website statement | Existing homepage uses this shortened form |
| Current website | https://sbmobileinstallations.com/ | Approved for current-site reference | Confirm this will remain the production domain |
| New repository | https://github.com/SedrickHarris/sb-mobile-installations-site.git | Approved project fact | New website repository |
| Entity type | Limited liability company | Existing website statement | Based on the displayed company name; legal state and status remain unverified |
| Years in business | 15 years | Approved | Client confirmed. See section 25 for approved wording |
| Founding date | Unknown | Pending verification | Do not infer a founding year from the confirmed years in business, the domain, or directory history |
| Founder | Unknown | Pending verification | Do not publish |
| Owner | Unknown | Pending verification | Do not publish third-party names without confirmation |
| Leadership | Unknown | Pending verification | Needed for About and entity content |
| Headquarters | Not published | Approved | Client confirmed a mobile-only model with no published address. See section 5.3 |
| Customer-facing office | None | Approved | Client confirmed no walk-in location. See section 5.3 |

### 4.1 Sole operating entity

SB Mobile Installations, LLC is the sole operating entity referenced throughout the website.

**Status:** Approved. Client confirmed.

There is no Doral Transport LLC relationship to document. Do not represent Doral Transport LLC as a parent, affiliate, employer, contracting entity, hiring entity, or operating company, and do not present the two names as interchangeable.

One entity is responsible for recruiting, hiring or contracting, payment, supervision, and installer management. Use SB Mobile Installations, LLC as the organization in company copy, employment and contractor language, privacy notices, forms, and structured data.

Several other project documents still describe this relationship as unresolved and block content on it. Those documents require a follow-up update to reflect this confirmation.

---

## 5. Contact information

### 5.1 Telephone numbers

| Number | Source observation | Status | Required action |
| --- | --- | --- | --- |
| 623-388-7352 | Displayed on the homepage, contact page, career page, and external recruiting listing | Verified | Approved as the canonical business telephone number |
| 623-338-7352 | Displayed on the current contact page | Rejected | Do not publish. Treat as a typographical error and correct wherever it appears |

**623-388-7352 is the canonical business telephone number.** Stakeholder confirmed
on September 10, 2026.

Use this number consistently across website copy, metadata, structured data,
business profiles, directory citations, and recruiting listings. Name, address, and
phone consistency depends on a single canonical value.

623-338-7352 is rejected. Where it appears on the current site or in any third-party
listing, correct it as part of citation cleanup.

### 5.2 Email addresses

| Purpose | Current value | Status |
| --- | --- | --- |
| General inquiries | Unknown | Pending verification |
| Sales and quotes | Unknown | Pending verification |
| Installation service | Unknown | Pending verification |
| Provider partnerships | Unknown | Pending verification |
| Careers | Unknown | Pending verification |
| Accounts or billing | Unknown | Pending verification |

Do not invent departmental email addresses.

### 5.3 Address

**The company does not publish a physical or mailing address.**

**Status:** Approved. Client confirmed.

SB Mobile Installations operates a mobile-only model. Service is delivered at the customer's location. There is no walk-in location, no customer-facing office, and no address to publish.

Consequences:

- Do not publish a street address, mailing address, or map in website copy, footers, contact pages, or structured data.
- The business is not eligible for a standard storefront-style Google Business Profile listing. Any future profile work must use a service-area configuration with the address hidden, and only if the client chooses to pursue one.
- `LocalBusiness` structured data that requires a physical address is not usable. Prefer `Organization` for entity markup. See `13-schema-markup-plan.md`.
- Contact pathways rely on the telephone number in section 5.1, approved forms, and email once verified.
- Local content must describe service reach, not a physical presence. See section 8.4.

The Goodyear, Arizona association appearing in a third-party directory is **confirmed irrelevant**. It is not a company address, was never approved, and must not be used as a canonical address, a customer-facing location, or a structured-data location. Where it appears in an external directory, treat it as a citation cleanup item rather than a fact to represent.

### 5.4 Business hours

**Monday through Friday, 8:00 AM to 6:00 PM.**

**Status:** Approved. Client confirmed.

These are business hours, not a service-availability guarantee. Do not convert them into same-day response, after-hours availability, emergency service, weekend coverage, or technician scheduling windows. Do not infer extended hours from technician schedules, job listings, or common industry practices.

The time zone and any holiday exceptions remain unconfirmed. Confirm both before publishing hours in structured data.

---

## 6. Approved and observed company description

### 6.1 Current website description

The existing homepage states that SB Mobile provides mobile electronic equipment installation services and has qualified mobile technicians throughout the United States.

It specifically presents:

- Installation and service of GPS equipment
- Mobile technicians
- On-site travel to meet customer needs
- Experience with electrical systems
- Mechanical insight
- Customer service

These are existing website statements. They should be preserved accurately during discovery but verified before being expanded into more specific performance, capacity, certification, or coverage claims.

### 6.2 Working internal description

SB Mobile Installations appears to provide on-site installation and related field services for GPS, electronic logging, fleet-management, video, and other mobile electronic equipment used in fleet and construction vehicles.

**Status:** Inferred from customer-facing and recruiting content.

Do not publish this exact description as approved company copy until the underlying services are confirmed.

### 6.3 Proposed customer-facing positioning

> Nationwide mobile installation services for GPS tracking equipment, ELDs, telematics hardware, fleet cameras, and connected vehicle equipment.

**Status:** Proposed.

Requirements before approval:

- Verify each named service.
- Verify the current meaning and operational extent of nationwide coverage.
- Verify supported equipment and vehicle categories.
- Confirm that connected vehicle equipment is an acceptable umbrella term.

---

## 7. Business model

### 7.1 Observed operating model

The existing content indicates that technicians travel to customer locations and may also work at shop locations.

**Status:** Recruiting evidence.

### 7.2 Contractor model

**Technicians are engaged as independent contractors, not employees.**

**Status:** Confirmed.

> Confirmed by stakeholder, September 10, 2026: technicians are independent contractors, not employees.

The stakeholder's words were: "Yes, confirmed - technicians are independent contractors, not employees."

The current career page advertises an independent contractor mobile technician position, which is consistent with this confirmation.

#### Scope of this confirmation

This confirms the **classification only**. It is a general statement about the working relationship and nothing more.

Do not infer any of the following from it. Each remains a separate, unconfirmed item:

- Contract terms, contract length, or termination conditions
- Compensation, pay rates, or payment schedule
- Expense, mileage, travel, or equipment reimbursement
- Work schedule, shift length, or hours committed
- Benefits of any kind
- Tax treatment or filing obligations
- Exclusivity, territory, or volume commitments
- The screening, onboarding, or assignment process

See section 19, which continues to require company review before compensation, schedule, travel percentage, or benefits appear in careers content.

#### Publication limits

- Approved for describing the working relationship in general terms.
- Do not use the classification to imply guaranteed work, hours, income, or acceptance. See `19-claude-project-instructions.md` section 15.
- Do not describe a technician as an employee anywhere in site content, forms, privacy notices, or structured data.
- Worker classification carries legal exposure. Any change in how the relationship is described requires company and, where appropriate, legal review. See `19-claude-project-instructions.md` section 34.

### 7.3 Potential commercial relationships

The website may serve or seek relationships with:

- Fleet operators
- Telematics providers
- GPS and ELD providers
- Equipment manufacturers
- Equipment resellers
- Fleet-management companies
- Installation project managers
- Multi-location commercial organizations

**Status:** Proposed or inferred.

Confirm which customer types are current, desired, and supportable before developing definitive audience pages.

### 7.4 Equipment sales

It is unknown whether SB Mobile:

- Sells equipment
- Resells equipment
- Supplies installation materials only
- Installs customer-supplied equipment
- Installs provider-supplied equipment
- Provides software subscriptions

**Status:** Pending verification.

Do not position the company as an equipment dealer or software provider until confirmed.

---

## 8. Geographic coverage

### 8.1 Existing coverage statement

The homepage states that technicians are located throughout the United States and can travel on-site to meet customer needs.

**Status:** Existing website statement.

### 8.2 Confirmed service area

**The service area is nationwide.**

**Status:** Approved. Client confirmed.

SB Mobile Installations serves customers nationwide through mobile technicians who travel to the customer's location. Nationwide service reach may be stated in website copy, metadata, and structured data as an approved fact.

This confirms **reach**, not capacity. It does not establish same-day availability, universal coverage of every city, guaranteed technician presence in a given market, equal availability across all services, or unlimited project capacity. The caveat in section 25 and the prohibited wording in section 26 continue to apply in full.

### 8.3 Remaining coverage details

Nationwide reach is approved. The following operational details remain unconfirmed and must not be published or implied:

- States with resident technician coverage versus states served through project travel
- Metros with recurring availability
- Response or scheduling expectations
- Minimum project sizes for travel
- Travel charges
- Remote or excluded areas
- Whether nationwide reach applies to every service
- Whether nationwide reach applies to single-vehicle work
- Whether coverage varies by customer or platform

Do not create state or metro location pages on the basis of nationwide reach alone. Page creation still depends on verified capacity in that market, per section 8.4 and `08-url-strategy.md`.

### 8.4 Location representation rule

Do not treat technician coverage as a physical office.

Distinguish:

- Headquarters
- Staffed office
- Customer-facing office
- Mailing address
- Technician base
- Mobile service area
- Temporary deployment area
- State coverage
- Metro coverage

### 8.5 Local profile rule

The client confirmed a mobile-only model with no published address, so the business is not eligible for a standard storefront-style local profile. See section 5.3.

Do not create or optimize a Google Business Profile, Bing Places profile, Apple Business Connect location, `LocalBusiness` schema record, or address citation that asserts a physical customer-facing location. Any future profile must be configured as a service-area business with the address hidden, and only at the client's direction.

---

## 9. Verified customer-facing services

The current customer-facing website explicitly presents the following:

| Service or capability | Evidence | Status | Public wording limit |
| --- | --- | --- | --- |
| Mobile electronic equipment installation | Homepage | Existing website statement | May be preserved while the equipment scope is verified |
| GPS equipment installation | Homepage | Existing website statement | May be presented as a current core service, subject to company confirmation |
| GPS equipment service | Homepage | Existing website statement | The meaning of service must be defined before describing repairs or troubleshooting |
| On-site mobile service | Homepage | Existing website statement | Do not promise universal availability or response times |
| United States technician coverage | Homepage | Existing website statement | Verify current operational coverage before expanding the claim |
| Vehicle electrical knowledge | Homepage | Existing website statement | Do not imply a license or certification |
| Mechanical insight | Homepage | Existing website statement | Keep language limited until qualifications are confirmed |
| Customer service | Homepage | Existing website statement | Avoid unsupported guarantees or response-time claims |

---

## 10. Recruiting-supported installation capabilities

The career page describes technician duties involving installation and service of:

- ELD equipment
- GPS equipment
- AOBRD equipment
- Fleet-management equipment

It also seeks experience with:

- Real-time GPS tracking devices
- ELD devices
- EOBR devices
- AOBRD devices
- Dash-camera devices
- Windshield-mounted video recorders
- Tire-pressure monitoring systems
- Mobile electronics

**Status:** Recruiting evidence.

These items demonstrate the experience expected of applicants. They do not independently prove that each item is a currently marketed, universally available, or standalone customer service.

Before creating a service page, confirm:

- The service is currently offered.
- The company wants to market it.
- The equipment category is current.
- The company has appropriate technician coverage.
- The service can be explained accurately.
- The page has a meaningful conversion path.

---

## 11. Proposed service registry candidates

The following are candidates for `06-service-registry.md`:

| Proposed service | Current support | Status |
| --- | --- | --- |
| GPS tracking device installation | Explicit homepage statement | High-priority verification |
| GPS equipment service | Explicit homepage statement | Define service scope |
| Electronic logging device installation | Career duties | Verify as customer-facing service |
| Fleet telematics installation | Implied by equipment and platforms | Proposed |
| Fleet dash-camera installation | Career experience requirement | Verify as customer-facing service |
| Fleet-management equipment installation | Career duties | Verify as customer-facing service |
| Vehicle gateway installation | Platform and equipment context | Proposed |
| Mobile data terminal installation | Industry fit; not clearly stated on current site | Proposed |
| TPMS equipment installation | Career experience requirement | Verify as customer-facing service |
| Vehicle electronics installation | Broad homepage category | Define scope |
| Equipment removal and reinstallation | Not clearly stated | Proposed |
| Installation troubleshooting and service | Electrical diagnostic requirements | Verify scope |
| Fleet equipment upgrades | Not clearly stated | Proposed |
| Multi-location fleet installations | Travel and scheduling context | Proposed |
| Nationwide fleet deployments | Nationwide technician statement | Verify project capacity |

No proposed service is approved merely because it appears in this table.

---

## 12. Vehicle and asset types

### 12.1 Explicit or recruiting-supported vehicle categories

| Vehicle or asset category | Evidence | Status |
| --- | --- | --- |
| Fleet vehicles | Career page | Recruiting evidence |
| Construction-type vehicles | Career page | Recruiting evidence |
| Passenger vehicles | Career qualification language | Recruiting evidence |
| Commercial vehicles | Career qualification language | Recruiting evidence |

### 12.2 Potential categories requiring verification

- Light-duty fleet vehicles
- Medium-duty trucks
- Heavy-duty trucks
- Vans
- Utility vehicles
- Service vehicles
- Construction equipment
- Trailers
- Off-road equipment
- Municipal vehicles
- Public safety vehicles
- Rental vehicles
- Buses or transit vehicles

Do not publish an unsupported vehicle list merely because a device could technically be installed in that vehicle.

---

## 13. Industries

### 13.1 Supported by existing content

| Industry | Evidence | Status |
| --- | --- | --- |
| Commercial fleets | Fleet vehicle language | Broad recruiting evidence |
| Construction | Construction vehicle language | Recruiting evidence |

### 13.2 Proposed industries

- Transportation and logistics
- Utilities
- Field service
- Telecommunications
- Delivery and distribution
- Government and municipal fleets
- Public safety
- Service and maintenance fleets
- Heavy equipment

**Status:** Proposed.

Each industry requires confirmation of actual experience, desired business development, or operational capability before publication.

---

## 14. Technology and platform experience

The career page asks applicants about experience with the following systems or brands:

- Lytx or DriveCam
- SmartDrive
- Zonar
- LoJack
- Interlock
- PeopleNet
- Trimble
- Omnitracs, formerly Qualcomm
- Samsara
- Geotab
- CalAmp devices
- Verizon Connect
- TPMS equipment
- Windshield-mounted video recorders

### Status

Recruiting evidence only.

### Usage restrictions

Do not state or imply that SB Mobile is:

- An official partner
- An authorized installer
- A certified installer
- A reseller
- A dealer
- An endorsed provider
- A preferred vendor
- A representative of the platform

Do not use a platform logo until permission and brand guidelines have been confirmed.

### Approved language pending verification

Potential language after company confirmation:

- “Installation experience with [platform] equipment”
- “Technicians familiar with [platform] hardware”
- “Support for deployments involving [platform] devices”

The exact approved wording should be stored in `09-technology-platform-registry.md`.

---

## 15. Technical competencies described in recruiting content

The current career content seeks applicants with experience in:

- Vehicle installation practices
- Electrical systems
- Mechanical work
- Multimeter use
- 12-volt systems
- 24-volt systems
- Electrical connection identification
- Electrical diagnostics
- Troubleshooting failed electrical components
- Completing certain electrical repairs
- Interior panel disassembly
- Exterior panel disassembly
- Dashboard access
- Engine compartment access
- Stereo installation
- GPS and fleet equipment installation

**Status:** Recruiting evidence.

These qualifications describe desired technician experience. They do not prove that every technician holds every competency, that every capability is available in every market, or that SB Mobile provides general automotive electrical repair.

Do not market general automotive repair, stereo installation, panel repair, or broad electrical repair as customer services without confirmation.

---

## 16. Certifications and qualifications

### MECP

The current career page states that MECP is preferred.

**Status:** Existing recruiting preference.

This does not establish that:

- SB Mobile is MECP certified.
- Every technician is MECP certified.
- MECP certification is mandatory.
- The company has an official MECP partnership.

### Other certifications

No other company or technician certifications are currently approved.

### 16.1 Client decision: credentials and proof are not published

**The client has chosen not to publish licenses, certifications, insurance details, reviews, or ratings on the website.**

**Status:** Approved. Client decision, not a pending data gap.

This is a settled decision rather than an unresolved question. Content, design, schema, and conversion work must build around the absence of these elements rather than treating them as forthcoming.

Scope of the decision:

- Licenses and license numbers
- Company and technician certifications, including MECP status
- Insurance carriers, coverage types, and coverage amounts
- Background-screening and drug-screening programs
- Customer reviews, review counts, star ratings, and aggregate rating displays

What this means in practice:

- Do not build page sections, trust bars, badge rows, or components that depend on credentials, insurance, reviews, or ratings.
- Do not emit `AggregateRating`, `Review`, or credential properties in structured data. There is no approved source for them, and a rating property without genuine underlying reviews is a structured-data violation.
- Do not add "pending" or "coming soon" placeholders for these elements.
- Do not treat the absence as a gap to fill during a later content pass.
- Do not imply the credentials exist through indirect phrasing such as "fully vetted", "credentialed technicians", or "covered and protected".

Build credibility instead through the evidence the client does approve: described installation process, documented technical competencies, equipment and vehicle experience, service reach, and clear operational explanation. See sections 15, 17, and 18.

This decision does not relax section 26. The prohibited wording list continues to apply in full, including "Fully insured", "Fully licensed", "Background-checked technicians nationwide", and "MECP-certified technicians nationwide".

Required verification remains open only for internal operational purposes, not for publication:

- Company certifications
- Technician certifications
- Platform certifications
- Safety training
- Electrical qualifications
- Background-check program
- Insurance requirements
- Customer-specific training

---

## 17. Installation process evidence

The career page suggests the following workflow:

1. A project or installation is assigned.
2. The technician receives installation guidelines and approved connection procedures.
3. The technician travels to a customer or shop location.
4. The vehicle is accessed and required panels are disassembled when necessary.
5. The equipment is installed.
6. The technician confirms that installed equipment is functional.
7. The vehicle and work area are kept clean.
8. Required installation data and photographs are submitted.
9. Equipment is tracked and accounted for.
10. The technician maintains communication with scheduling managers.

**Status:** Inferred from recruiting duties.

This workflow is a strong candidate for customer-facing content after the company confirms:

- Actual customer intake process
- Scheduling process
- Site-readiness requirements
- Equipment shipping and custody
- Installation standards
- Quality-control review
- Photo requirements
- Data submission platform
- Customer acceptance process
- Issue escalation
- Closeout documentation

---

## 18. Quality and customer-service evidence

### Existing statements

The homepage says that SB Mobile strives to provide good customer service and meet customer needs.

The recruiting content expects technicians to:

- Communicate effectively
- Maintain positive customer relations
- Remain in timely contact with scheduling managers
- Keep paperwork organized
- Keep vehicles and workspaces clean
- Confirm equipment functionality
- Submit installation data and photographs
- Account for equipment

### Status

Existing website statement and recruiting evidence.

### Unverified quality claims

Do not claim any of the following without evidence:

- Guaranteed installation quality
- Zero-defect installation
- First-time-right rate
- Specific response time
- Specific completion rate
- Formal service-level agreement
- Lifetime warranty
- Nationwide same-day service
- Certified quality-management system
- Uniform technician standards across every market

---

## 19. Careers and workforce facts

The current career page describes:

- Independent contractor work
- Mobile GPS, ELD, and AOBRD installation duties
- Travel between states
- Use of a personal vehicle
- A valid driver’s license
- A background check
- Smartphone use for installation data submission
- Independent work
- Customer communication
- Equipment accountability
- Functional testing
- Photograph submission
- Eight-hour and ten-hour shift possibilities
- Weekday and possible weekend schedules
- Significant travel
- On-the-road work

### Compensation

The existing page displays pay starting at $1,600 per week.

**Status:** Existing recruiting statement requiring current confirmation.

Do not carry compensation, schedule, travel percentage, classification, or benefits into the new careers content without review by the company.

Employment and contractor language must be approved before publication.

---

## 20. Pricing, warranties, and guarantees

| Topic | Approved information | Status |
| --- | --- | --- |
| Installation pricing | None | Pending verification |
| Travel fees | None | Pending verification |
| Minimum project size | None | Pending verification |
| Diagnostic fees | None | Pending verification |
| Warranty | None | Pending verification |
| Workmanship guarantee | None | Pending verification |
| Response time | None | Pending verification |
| Quote validity | None | Pending verification |
| Cancellation policy | None | Pending verification |

Do not publish pricing, “free quote,” warranty, guarantee, or response-time language until approved.

---

## 21. Safety, compliance, and insurance

No company-wide safety program, regulatory compliance statement, insurance coverage, bonding status, or formal installation standard is currently approved.

Potential verification topics:

- General liability insurance
- Commercial auto insurance
- Workers’ compensation requirements
- Contractor insurance requirements
- Background screening
- Drug screening
- Customer-specific safety training
- Personal protective equipment
- Vehicle protection procedures
- Electrical connection standards
- Documentation retention
- Data privacy
- Camera and recording-system privacy

Do not state compliance with a law, regulation, standard, or customer policy without appropriate support.

Insurance details are not published on the website by client decision. See section 16.1. The topics above remain open for internal and contractual purposes only.

---

## 22. Customer proof

No customer logos, testimonials, case studies, project statistics, installation counts, fleet sizes, completion rates, geographic counts, or quantified outcomes are currently approved for publication.

Evidence to collect:

- Approved customer list
- Logo permissions
- Written testimonials
- Project summaries
- Vehicle counts
- Location counts
- Project duration
- Equipment categories
- Installation documentation examples
- Before-and-after operational results
- Original photographs
- Customer approval for publication

Do not infer a customer relationship from a platform name, technician experience, job requirement, or third-party mention.

Reviews and ratings are not published on the website by client decision. See section 16.1. Do not design page templates, trust sections, or structured data that depend on them.

---

## 23. Brand and communication facts

| Brand element | Current value | Status |
| --- | --- | --- |
| Approved logo | Not documented | Pending verification |
| Primary colors | Not documented | Pending verification |
| Secondary colors | Not documented | Pending verification |
| Typography | Not documented | Pending design decision |
| Tagline | None approved | Pending verification |
| Brand voice | Professional, technical, reliable, direct | Proposed |
| Photography | Commercial vehicles and real installation work | Proposed |

The design system must not treat colors, fonts, taglines, or visual motifs as approved until the company or project owner confirms them.

---

## 24. Search and entity facts

| Item | Current state | Status |
| --- | --- | --- |
| Google Business Profile | Unknown | Pending verification |
| Bing Places profile | Unknown | Pending verification |
| Apple Business Connect listing | Unknown | Pending verification |
| Google Search Console | Unknown | Pending setup or verification |
| Bing Webmaster Tools | Unknown | Pending setup or verification |
| Analytics platform | Unknown | Pending decision |
| Tag manager | Unknown | Pending decision |
| CRM | Unknown | Pending decision |
| Call tracking | Unknown | Pending decision |
| Social profiles | Unknown | Pending verification |
| Industry directory profiles | External recruiting listing observed | Verify ownership and relevance |

Do not state that a profile has been claimed, verified, optimized, or connected until confirmed.

---

## 25. Approved factual wording

The following wording closely reflects current website statements and may be used in discovery drafts. Final publication still requires company review.

### Company description

> SB Mobile Installations provides mobile electronic equipment installation services for fleet and construction vehicles.

### GPS service

> SB Mobile Installations provides installation and service for GPS equipment.

### Mobile service

> Mobile technicians travel to customer locations based on project requirements and technician availability.

### Technician experience

> Installation work requires knowledge of vehicle electrical systems, mechanical access, approved connection procedures, equipment testing, and installation documentation.

### Years in business

Client confirmed at 15 years. Approved for use in copy.

> 15 years of mobile installation experience

Acceptable variations include "serving fleets for 15 years" and "15 years of experience installing fleet technology". Use the specific number rather than a vague equivalent. "Decades of experience" remains prohibited under section 26, both because it overstates 15 years and because it is an unsupported superlative.

Do not pair the figure with an unconfirmed founding year, and do not derive a founding date from it.

### Service area

Client confirmed nationwide service. Approved for use in copy.

> Nationwide mobile installation service, delivered at the customer's location

### Mobile-only model

Client confirmed. Approved for use in copy.

> Technicians travel to the customer's location. There is no walk-in facility.

### Business hours

Client confirmed at Monday through Friday, 8:00 AM to 6:00 PM. Approved for display on contact surfaces once the time zone is confirmed.

### Required caveat

Nationwide service reach is approved. Do not convert it into specific state availability, universal city coverage, immediate or same-day availability, guaranteed technician presence in a named market, or guaranteed national capacity.

---

## 26. Prohibited wording until supported

Do not use the following claims without documentation and approval:

- Nation’s leading installer
- Largest installation network
- Number one fleet installer
- Certified nationwide installer
- Authorized installer for a named platform
- Official partner of a named platform
- Available in every city or state
- Same-day nationwide installation
- Guaranteed installation
- Lifetime warranty
- Zero downtime
- Any fleet size, anywhere
- Fully insured
- Fully licensed
- Background-checked technicians nationwide
- MECP-certified technicians nationwide
- Trusted by a named customer
- Thousands or millions of installations
- Decades of experience
- Best-in-class service
- Industry-leading response time
- Complete regulatory compliance

Generic superlatives should also be avoided unless they communicate a specific, supportable customer benefit.

---

## 27. Content rules derived from business truth

All website content must:

- Use the canonical business name and contact information.
- Identify the verification status of new claims during drafting.
- Separate services from technician qualifications.
- Separate platform experience from partnerships.
- Separate service areas from physical locations.
- Separate current capabilities from proposed expansion.
- Separate customer content from recruiting content.
- Avoid invented statistics, customers, results, warranties, and credentials.
- Use precise language about availability and project scope.
- Route unresolved facts back to this document.

---

## 28. Required business discovery questions

### Company identity

1. What is the exact legal business name?
2. What public-facing name should the website use?
3. When was the company founded?
4. Who founded and currently leads the company?
5. What company history may be published?

### Contact and location

6. Which phone number is correct?
7. Is the other number valid or a typo?
8. Which email addresses should be published?
9. What is the legal address?
10. What is the mailing address?
11. Does the company receive customers at a physical location?
12. What are the business hours and time zone?

### Services

13. Which installation services are currently offered?
14. What does GPS equipment “service” include?
15. Does the company troubleshoot existing installations?
16. Does it remove, replace, or reinstall devices?
17. Does it perform general vehicle electrical repairs?
18. Does it sell equipment or only install supplied equipment?
19. Which services should be prioritized for growth?

### Equipment and vehicles

20. Which equipment categories are actively supported?
21. Which platforms are currently supported?
22. Which relationships are official partnerships?
23. Which logos may be used?
24. Which vehicle types are supported?
25. Are trailers, heavy equipment, or off-road assets supported?
26. Are both 12-volt and 24-volt systems routinely supported?

### Customers and industries

27. Who is the primary customer?
28. Does the company contract directly with fleets?
29. Does it subcontract for technology providers or vendors?
30. Which industries have current or documented experience?
31. Which customer names, logos, and testimonials may be published?

### Coverage and capacity

32. Which states have active technician coverage?
33. Which markets depend on technician travel?
34. Is there a minimum vehicle or project count?
35. What project sizes can be supported?
36. What is the typical scheduling lead time?
37. Can the company coordinate simultaneous multi-state deployments?
38. Which services are available nationwide?

### Process and proof

39. How does a customer request and approve a project?
40. Who schedules the technicians?
41. Who supplies and ships equipment?
42. What installation standards are used?
43. How is functionality verified?
44. What photographs or data are submitted?
45. What does the customer receive at closeout?
46. How are failed devices or installation issues handled?
47. What performance statistics may be published?

### Risk and compliance

48. What insurance coverage may be stated?
49. What technician screening is required?
50. What certifications and safety training are current?
51. What warranties or guarantees apply?
52. Are there customer-specific confidentiality restrictions?

### Careers

53. Is the current independent contractor model accurate?
54. Is the displayed compensation current?
55. What technician qualifications are mandatory?
56. What travel expectations are current?
57. What information should the application collect?

---

## 29. Verification log

Use this table to record approved updates.

| Date | Field or claim | Previous status | Approved value | Source | Approved by | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| 2026-09-09 | Initial document | Not created | Discovery draft established | Existing website review | Project team | Business interview required |
| 2026-09-10 | Telephone number | Conflicting | 623-388-7352 | Stakeholder confirmation | Client | 623-338-7352 rejected as a typographical error. See `decisions/0001-canonical-business-telephone-number.md` |
| 2026-09-10 | Address | Pending verification | No published address; mobile-only model | Client confirmation | Client | Not eligible for a storefront-style local profile. Goodyear directory association confirmed irrelevant |
| 2026-09-10 | Business hours | Unknown | Monday to Friday, 8:00 AM to 6:00 PM | Client confirmation | Client | Time zone and holiday exceptions still unconfirmed |
| 2026-09-10 | Service area | Inferred | Nationwide | Client confirmation | Client | Confirms reach, not capacity. Section 26 still applies |
| 2026-09-10 | Operating entity | Existing website statement | SB Mobile Installations, LLC is the sole operating entity | Client confirmation | Client | No Doral Transport LLC relationship exists. Other project documents need follow-up |
| 2026-09-10 | Years in business | Pending verification | 15 years | Client confirmation | Client | Approved for copy. Founding date still unconfirmed |
| 2026-09-10 | Licenses, certifications, insurance, reviews, ratings | Pending verification | Not published, by client decision | Client decision | Client | Build content and schema around their absence. Section 26 unchanged |
| 2026-09-10 | Worker classification | Existing recruiting statement | Independent contractors, not employees | Direct stakeholder confirmation, quoted verbatim in section 7.2 | Stakeholder | Classification only. Contract terms, compensation, schedule, and benefits remain unconfirmed. Supersedes an earlier entry that was reverted because it recorded approval that had not been given |

---

## 30. Update protocol

When a fact is verified:

1. Record the authoritative source.
2. Update the relevant table in this document.
3. Change the status to Approved.
4. Define any limits on public wording.
5. Update the verification log.
6. Update affected canonical registries.
7. Identify pages or structured data that require changes.
8. Record material strategic changes in `27-decisions-change-log.md`.

Do not delete conflicting historical information without recording how it was resolved.

---

## 31. Current approval summary

At this stage, the project has enough evidence to begin architecture, research, design exploration, and draft content. It does not yet have enough verified business information to publish the complete proposed service, industry, technology, partnership, location, coverage, or trust framework.

### Confirmed as of September 10, 2026

- Canonical telephone number
- No published address, mobile-only operating model
- Business hours, Monday to Friday, 8:00 AM to 6:00 PM
- Nationwide service reach
- SB Mobile Installations, LLC as the sole operating entity
- 15 years in business
- Worker classification: technicians are independent contractors, not employees
- Client decision not to publish licenses, certifications, insurance, reviews, or ratings

### Still required before launch

- Email addresses for every contact pathway
- Approved service registry and which services carry nationwide reach
- Customer types and industries
- Technology and platform experience, separated from partnership status
- Founding date, owner, and leadership for entity and About content
- Project capacity, response expectations, and travel terms
- Approved installation process and quality evidence
- Compensation, contract terms, schedule, and benefits, which classification alone does not establish
- Time zone and holiday exceptions for published hours

The immediate priority is a structured business discovery interview covering the items above. Trust and proof content must be planned around the client's decision in section 16.1 rather than waiting on credentials that will not be published.
