# SB Mobile Installations Search Intent Map

**Document:** `06-search-intent-map.md`  
**Project:** SB Mobile Installations Website and Installer Recruitment Project  
**Business:** SB Mobile Installations, LLC  
**Primary focus:** Installer recruitment intent  
**Secondary focus:** Commercial installation intent  
**Status:** Strategic planning draft  
**Version:** 0.1  
**Last updated:** September 9, 2026

---

## 1. Purpose

This document maps search intent to the correct audience, page type, URL, content response, call to action, structured-data treatment, and measurement event.

It is designed to prevent:

- multiple pages competing for the same query;
- one page trying to satisfy incompatible audiences;
- careers pages competing with active job pages;
- installer-network pages appearing to offer active jobs;
- commercial pages attracting candidates without direction;
- recruitment pages attracting commercial buyers without context;
- thin location pages;
- false job locations;
- incorrect structured data;
- vague calls to action; and
- content production based on keywords without a business purpose.

The keyword inventory is maintained in `05-keyword-research.md`. This document determines how those topics should be assigned.

---

## 2. Core Principle

One search intent should have one primary canonical destination.

A page may rank for several closely related phrases when those phrases represent the same audience need. Separate pages should be created only when the searcher expects materially different information or a different action.

Every indexable page must have:

- one primary audience;
- one primary intent;
- one primary topic;
- one primary conversion;
- a clear reason to exist;
- unique and useful content;
- verified business relevance; and
- an approved canonical URL.

---

## 3. Audience Separation

### 3.1 Recruitment searchers

Recruitment searchers want to:

- find an active installer job;
- evaluate a career or contractor opportunity;
- determine whether their experience qualifies;
- understand travel, tools, schedule, compensation, or classification;
- learn how assignments work;
- prepare for application or screening; or
- register interest in future work.

### 3.2 Commercial searchers

Commercial searchers want to:

- find an installation provider;
- understand a service;
- evaluate technical or geographic fit;
- plan a fleet deployment;
- compare providers or approaches;
- reduce operational risk; or
- request a quote, consultation, or partnership discussion.

### 3.3 Mixed-intent searchers

Some phrases, such as “GPS installer,” “telematics installer,” or “mobile installer,” may describe either a technician or a service provider.

Mixed-intent pages must clarify the intended path immediately and offer a secondary route when appropriate. They should not merge candidate and customer forms or calls to action.

---

## 4. Intent Taxonomy

| Intent code | Intent type | Searcher need | Example |
|---|---|---|---|
| NAV | Navigational | Reach a known company or page | SB Mobile Installations careers |
| JOB | Active job | Find a real available position | telematics installer jobs Phoenix |
| ROLE | Role exploration | Understand the occupation | what does a mobile installer do |
| QUAL | Qualification | Determine eligibility | GPS installer requirements |
| PROC | Process | Understand how work or service happens | how installer assignments work |
| TERM | Employment terms | Understand classification, pay, travel, or schedule | traveling installer per diem |
| TRAIN | Training and development | Learn how to enter or advance in the field | telematics installer training |
| NET | Future opportunity | Join a talent or contractor network | join GPS installer network |
| REF | Referral or partnership | Refer talent or build recruiting relationship | refer mobile installer |
| SERV | Commercial service | Find a provider or service | fleet telematics installation company |
| TECH | Technology or equipment | Understand or find help with specific equipment | ELD hardware installation |
| IND | Industry or audience | Find an industry-specific solution | telematics installation for construction fleets |
| GEO | Geographic | Find a local job, service, or coverage area | GPS installer jobs near me |
| COMP | Comparison | Compare roles, services, or approaches | telematics installer vs 12-volt technician |
| INFO | Informational | Learn without immediate transactional intent | what is fleet telematics |
| TRUST | Validation | Verify company legitimacy or reputation | SB Mobile Installations reviews |

---

## 5. Funnel Stages

| Funnel stage | Recruitment behavior | Commercial behavior | Primary content response |
|---|---|---|---|
| Awareness | Discovers a role or technical career | Discovers a service or deployment problem | Educational resource or overview |
| Consideration | Evaluates fit, requirements, company, or terms | Evaluates capability, process, coverage, and proof | Role, service, process, or audience page |
| Decision | Reviews a current opening and application steps | Reviews provider fit and project action | Active job or high-intent service page |
| Conversion | Applies or joins the network | Requests a quote or discussion | Dedicated form and confirmation flow |
| Qualification | Completes screening | Completes project discovery | CRM and human follow-up |
| Activation | Completes onboarding and becomes available | Approves project or agreement | Operational workflow |
| Retention | Accepts appropriate future work | Expands or repeats projects | Relationship and lifecycle communication |

SEO should be measured beyond the initial visit. The primary recruitment outcome is an activated qualified installer, not a pageview or raw form submission.

---

## 6. Branded Recruitment Intent

| Query pattern | Intent | Searcher expectation | Primary URL | Primary CTA |
|---|---|---|---|---|
| SB Mobile Installations careers | NAV / ROLE | Official employer and opportunity overview | `/careers/` | View Current Openings |
| SB Mobile Installations jobs | NAV / JOB | Current verified openings | `/careers/jobs/` | View or Apply |
| SB Mobile installer jobs | NAV / JOB | Installer roles specifically | `/careers/mobile-installers/` or jobs index based on SERP validation | View Current Openings |
| SB Mobile Installations application | NAV / JOB | Official application path | Job-specific page or `/careers/apply/` | Apply |
| SB Mobile Installations contractor | TRUST / TERM | Engagement model and legitimacy | Careers FAQ or verified role page | Review Opportunities |
| SB Mobile Installations pay | TRUST / TERM | Compensation expectations | Active job page when approved | View Job Details |
| SB Mobile Installations reviews | TRUST | Employer or company reputation | About, careers proof, and accurate external profile ecosystem | View Opportunities |
| SB Mobile Installations phone number | NAV | Correct company contact | `/contact/` | Call or Contact |

### Content requirement

The careers hub should identify the company, distinguish current openings from future opportunities, and route users to verified details. Do not create thin pages solely to target “pay,” “reviews,” or “interview” branded queries.

---

## 7. Active Installer Job Intent

### Primary query families

- mobile installer jobs
- telematics installer jobs
- GPS installer jobs
- ELD installer jobs
- fleet installation technician jobs
- fleet technology installer jobs
- 12-volt installer jobs
- automotive electrical installer jobs
- traveling installation technician jobs
- role plus verified location

### Searcher expectation

The user expects:

- a real opening;
- a recognizable job title;
- accurate location or territory;
- clear engagement type;
- responsibilities;
- qualifications;
- compensation where required or approved;
- travel and schedule information;
- application instructions; and
- a direct way to apply.

### Primary destination

`/careers/jobs/[job-slug]/`

### Supporting destinations

- `/careers/jobs/`
- `/careers/mobile-installers/`
- `/careers/installer-requirements/`
- `/careers/how-assignments-work/`
- `/careers/faqs/`

### Primary conversion

Completed application for the specific active opening.

### Structured-data treatment

Use `JobPosting` only when the page represents one real, active opening and the visible content matches the markup.

### Indexation rule

Index only while the opening is valid. Closing, expiration, removal, redirect, archive, and schema behavior must follow the approved job lifecycle.

---

## 8. Careers Hub Intent

### Primary query families

- SB Mobile Installations careers
- mobile installer careers
- fleet technology careers
- telematics installation careers
- vehicle electronics careers

### Searcher expectation

The user wants to understand the company as an employer or contracting organization, available career paths, role categories, current openings, and how to proceed.

### Primary destination

`/careers/`

### Content response

- Employer or opportunity proposition
- Type of installation work
- Priority role categories
- Current openings summary
- Active-opening versus installer-network distinction
- Why qualified installers may consider the company
- Requirements summary
- Assignment-process summary
- Approved proof
- FAQs
- Clear next actions

### Primary conversion

View current openings.

### Secondary conversion

Join the installer network.

### Cannibalization rule

The careers hub should not reproduce full job descriptions or become the primary target for location-specific job queries.

---

## 9. Mobile Installer Role Intent

### Primary query families

- mobile installer jobs
- mobile installation technician careers
- vehicle equipment installer jobs
- fleet installation technician
- mobile electronics installer opportunities

### Searcher expectation

The user wants a durable explanation of the role, not necessarily one current opening.

### Primary destination

`/careers/mobile-installers/`

### Content response

- Role definition
- Equipment categories
- Typical responsibilities
- Required and preferred skills
- Vehicle and field environment
- Travel and schedule distinctions
- Tools and documentation
- Career or training information when verified
- Current related openings
- Installer-network option

### Primary conversion

View current installer openings.

### Secondary conversion

Review requirements or join the network.

### Cannibalization rule

This page owns evergreen role intent. Individual job pages own exact title, location, and active-opening intent.

---

## 10. Telematics Installer Role Intent

| Query pattern | Intent | Best response | Recommended destination |
|---|---|---|---|
| telematics installer jobs | JOB / ROLE | Current openings plus role context | Role page or jobs index; validate SERP |
| what does a telematics installer do | ROLE / INFO | Direct definition and responsibilities | Recruitment resource |
| telematics installer requirements | QUAL | Skills, experience, tools, and prerequisites | Installer requirements |
| traveling telematics installer jobs | JOB / TERM | Active travel role with verified terms | Active job page |
| contract telematics installer | JOB / TERM | Real contractor opportunity and classification | Active job page |
| telematics installer training | TRAIN | Verified training or honest qualification guidance | Training or resource page |
| telematics installer near me | GEO / JOB | Real nearby opening or market need | Active local job page |

### Recommended resource

`/careers/resources/what-does-a-telematics-installer-do/`

### Boundary

The commercial telematics service page should not be optimized as a job page. It may include a discreet careers link for technicians.

---

## 11. GPS Installer Role Intent

| Query pattern | Intent | Primary URL type | Primary action |
|---|---|---|---|
| GPS installer jobs | JOB | Job index or active job | View openings |
| mobile GPS installer jobs | JOB / ROLE | Mobile installer role or active job | Apply |
| fleet GPS installer jobs | JOB / ROLE | Role or active job | Apply |
| contract GPS installer jobs | JOB / TERM | Verified contractor job | Apply |
| GPS installer requirements | QUAL | Requirements page | Check qualifications |
| how to become a GPS installer | TRAIN / INFO | Recruitment resource | Review requirements |
| GPS installer jobs in [market] | GEO / JOB | Real market-specific job | Apply |

### Boundary

The phrase “GPS installer” can carry service and career intent. Titles, descriptions, H1s, and opening paragraphs must include “jobs,” “careers,” “services,” or “installation” context clearly.

---

## 12. ELD Installer Role Intent

| Query pattern | Intent | Primary URL type | Notes |
|---|---|---|---|
| ELD installer jobs | JOB | Active job or jobs index | Use current role terminology |
| GPS and ELD installer jobs | JOB | Active combined role | Only when duties include both |
| ELD installation technician | JOB / ROLE | Role content or active job | Clarify career intent |
| ELD installer requirements | QUAL | Requirements page or resource | Distinguish mandatory and preferred |
| what does an ELD installer do | INFO / ROLE | Recruitment resource | Explain hardware and field work |
| AOBRD installer jobs | LEGACY / JOB | Research or historical-support content | Verify current relevance |
| EOBR installer jobs | LEGACY / JOB | Research or historical-support content | Verify current relevance |

### Boundary

Do not build separate legacy acronym pages unless search data, current equipment, and user value justify them.

---

## 13. 12-Volt Transfer-Skill Intent

### Primary query families

- 12-volt installer jobs
- 12v technician jobs
- automotive electrical installer jobs
- mobile electronics technician jobs
- car audio installer telematics career
- 12-volt experience for GPS installation
- vehicle wiring technician fleet jobs

### Searcher expectation

The user wants to know whether existing automotive-electrical or mobile-electronics experience qualifies for fleet technology work.

### Primary destinations

- `/careers/installer-requirements/`
- `/careers/mobile-installers/`
- `/careers/resources/12-volt-skills-for-telematics-installation/`
- verified active jobs accepting transferable experience

### Content response

- Transferable skills
- Vehicle-specific competencies
- Required diagnostic ability
- Required versus preferred equipment experience
- Tools and panel-access expectations
- Independent-work readiness
- Training availability when verified
- Direct route to suitable openings

### Primary conversion

Self-qualify and view an appropriate opening.

### Risk

Do not imply that consumer stereo experience alone qualifies a candidate for every fleet installation role.

---

## 14. Traveling Installer Intent

### Primary query families

- traveling telematics installer jobs
- traveling GPS installer jobs
- traveling installation technician jobs
- nationwide field service technician jobs
- project-based fleet installer jobs
- road technician jobs

### Searcher expectation

The user wants exact information about:

- travel area;
- trip length;
- schedule;
- transportation;
- lodging;
- mileage;
- per diem or expenses;
- compensation;
- cancellation; and
- time away from home.

### Primary destination

A verified active traveling-job page.

### Supporting destination

`/careers/how-assignments-work/`

### Primary conversion

Apply for the specific travel opportunity.

### Secondary conversion

Register travel availability in the installer network.

### Accuracy rule

Do not target “remote job” intent for work requiring physical vehicle installation.

---

## 15. Regional and Local Job Intent

### Query patterns

- mobile installer jobs near me
- telematics installer jobs in [city]
- GPS installer jobs in [state]
- 12-volt technician jobs [metro]
- fleet installation technician [region]

### Searcher expectation

The user expects a genuine opportunity connected to the named market, not a national interest form with a city swapped into the title.

### Primary destination

`/careers/jobs/[role-location-slug]/`

### Requirements

- Real active opening
- Accurate work location or territory
- Correct applicant location requirements
- Market-specific responsibilities or logistics
- Approved compensation and classification
- Named internal owner
- Review or expiration date
- Direct application path

### Alternative when no job is active

Route users to the installer network with an explicit statement that no current opening is being represented.

### Indexation rule

Do not index thin market-interest pages as jobs. Do not use false locations to gain visibility.

---

## 16. Installer Requirements Intent

### Primary query families

- mobile installer requirements
- telematics installer qualifications
- GPS installer requirements
- ELD installer qualifications
- tools needed for telematics installation
- 12-volt technician requirements
- fleet installer skills

### Primary destination

`/careers/installer-requirements/`

### Content response

- Required experience
- Preferred experience
- Electrical and diagnostic competency
- Vehicle panel and work-area expectations
- Tool requirements
- Vehicle and driver-license requirements
- Smartphone and documentation requirements
- Travel and schedule requirements
- Insurance or screening requirements
- Certification preferences
- Role-specific exceptions

### Primary conversion

View matching current openings.

### Cannibalization rule

The requirements page provides shared baseline information. Each active job must still state its exact requirements rather than relying only on a link.

---

## 17. Assignment Process Intent

### Primary query families

- how mobile installer assignments work
- how telematics installation jobs are assigned
- mobile installer schedule
- fleet installer travel process
- GPS installer documentation requirements
- mobile installer payment process

### Primary destination

`/careers/how-assignments-work/`

### Content response

Subject to verification:

1. Application and review
2. Screening and technical evaluation
3. Documentation and onboarding
4. Market, skill, and availability profile
5. Opportunity or assignment communication
6. Acceptance and preparation
7. Travel or arrival
8. Installation and testing
9. Documentation and closeout
10. Payment or employment process
11. Performance and future opportunities

### Primary conversion

Apply for an active opening or join the installer network.

### Risk

Do not imply guaranteed assignments, income, schedules, or payment timing without approval.

---

## 18. Training and Career Development Intent

### Query families

- telematics installer training
- GPS installer training
- how to become a telematics installer
- mobile installer apprenticeship
- entry-level telematics installer jobs
- fleet technology technician career path

### Primary destination

`/careers/installer-training/` only when SB Mobile has a verified training program.

### Alternative destination

An informational resource explaining industry preparation and actual company requirements without promising training.

### Primary conversion

View an eligible trainee or installer opening.

### Publication rule

Do not publish a company training page until the company confirms:

- audience eligibility;
- curriculum;
- duration;
- delivery method;
- supervision;
- compensation status;
- completion criteria;
- certification implications; and
- available roles after training.

---

## 19. Installer Network Intent

### Query families

- join installer network
- telematics installer network
- GPS installer network
- independent mobile installer opportunities
- fleet technology contractor network
- future installer opportunities

### Searcher expectation

The user wants to register skills, market, and availability for possible future opportunities.

### Primary destination

`/careers/join-our-installer-network/`

### Content response

- Who should join
- Relevant skills
- Priority markets when approved
- Information requested
- How information may be used
- Communication choices
- What may happen next
- No-work-guarantee disclosure
- Privacy and withdrawal information

### Primary conversion

Permission-based installer-network registration.

### Structured-data rule

Do not use `JobPosting` markup unless the page is converted into a specific, real opening with a direct application path.

### Cannibalization rule

The network page must not use titles or descriptions that suggest “jobs hiring now” when no active job exists.

---

## 20. Candidate FAQ Intent

### Primary destination

`/careers/faqs/`

### Appropriate questions

- Which installation experience is relevant?
- Are roles employee or contractor based?
- Is travel required?
- Are tools or a vehicle required?
- Is training available?
- How does the application process work?
- What happens after an application?
- Can I join without an opening in my market?
- Does joining the network guarantee work?
- How can I update my information?

### Intent role

The FAQ page supports consideration and conversion. It should not replace detailed job, requirements, process, privacy, or training pages.

### Structured-data note

FAQ structured data, if used, must reflect visible content and current search-engine eligibility. It does not guarantee a rich result.

---

## 21. Recruitment Resource Intent Map

| Resource topic | Primary intent | Audience | Primary conversion |
|---|---|---|---|
| What does a mobile telematics installer do? | ROLE / INFO | Career explorers and adjacent technicians | View requirements |
| GPS, ELD, and telematics installer qualifications | QUAL | Active candidates | View openings |
| 12-volt skills for fleet technology installation | QUAL / TRAIN | Mobile-electronics technicians | Check role fit |
| Traveling versus regional installer work | COMP / TERM | Experienced and traveling technicians | View suitable openings |
| Tools used by mobile installers | QUAL / INFO | Active candidates | Review requirements |
| Installation documentation expectations | PROC / QUAL | Experienced candidates | View role details |
| What happens after applying? | PROC | Conversion-ready candidates | Apply |
| How installer technical evaluations work | PROC / QUAL | Screen-stage candidates | Prepare for screening |

Resources should support—not replace—the transactional destination.

---

## 22. Commercial Service Intent: Fleet Telematics Installation

### Query families

- fleet telematics installation
- fleet telematics installation services
- telematics installation company
- vehicle telematics installation
- commercial vehicle telematics installers
- mobile telematics installation

### Searcher expectation

The buyer wants to understand scope, equipment, vehicles, geography, process, scheduling, proof, documentation, and project fit.

### Primary destination

`/services/fleet-telematics-installation/`

### Content response

- Direct service definition
- Approved equipment categories
- Appropriate vehicle categories
- Customer and industry fit
- Installation process
- Scheduling and site preparation
- Testing and documentation
- Geographic availability
- Proof
- FAQs
- Project qualification form

### Primary conversion

Request a qualified project discussion.

### Boundary

This page is conditional on service verification and should not imply software sales, platform partnership, or every-market availability.

---

## 23. Commercial Service Intent: GPS Installation

| Query pattern | Intent | Primary response |
|---|---|---|
| GPS tracking device installation | SERV | Verified GPS service page |
| fleet GPS installation | SERV / IND | GPS service with fleet context |
| mobile GPS installation service | SERV / GEO | On-site process and verified coverage |
| hardwired GPS tracker installation | TECH / SERV | Approved device and installation scope |
| GPS device replacement | SERV | Replacement page or section when verified |
| GPS equipment service | SERV / SUPPORT | Define service, troubleshooting, repair, or replacement precisely |
| GPS installer near me | GEO / MIXED | Clarify commercial service versus job intent |

### Primary destination

`/services/gps-tracking-device-installation/`

### Primary conversion

Request a GPS installation project discussion.

---

## 24. Commercial Service Intent: ELD Installation

### Query families

- ELD installation service
- electronic logging device installation
- fleet ELD installation
- commercial truck ELD installation
- mobile ELD installation
- GPS and ELD installation service

### Primary destination

`/services/eld-installation/`

### Content response

- ELD installation definition
- Approved hardware scope
- Vehicle and fleet fit
- Site and scheduling requirements
- Installation, testing, and documentation
- Replacement or service scope when verified
- Geographic availability
- FAQs

### Primary conversion

Request an ELD installation discussion.

---

## 25. Commercial Service Intent: Fleet Camera Installation

### Query families

- fleet camera installation
- fleet dash camera installation
- commercial vehicle dash cam installation
- video telematics installation
- fleet safety camera installation
- vehicle camera installer

### Primary destination

`/services/fleet-dash-camera-installation/`

### Content response

- Approved camera categories
- Mounting and vehicle considerations
- Wiring and connectivity scope
- Camera-position and functionality testing
- Documentation
- Driver, privacy, or policy boundaries
- Scheduling and deployment
- Replacement or removal when verified

### Primary conversion

Request a fleet-camera installation discussion.

### Risk

Do not promise safety, compliance, AI, insurance, video quality, or platform outcomes controlled by hardware, software, customer configuration, or policy.

---

## 26. Commercial Deployment Intent

### Query families

- nationwide fleet installation services
- multi-location fleet installation
- fleet telematics deployment
- fleet technology rollout
- mobile fleet equipment installers
- telematics installation project management
- regional fleet installation services

### Primary destination

`/solutions/multi-location-fleet-deployments/`

### Content response

- Appropriate project types
- Geographic and capacity model
- Discovery and planning
- Technician coordination
- Equipment readiness
- Site and vehicle scheduling
- Installation standards
- Testing and documentation
- Progress visibility
- Issue escalation
- Closeout
- Proof

### Primary conversion

Discuss a multi-location deployment.

### Risk

Do not use national or multi-location language until capacity, project minimums, limitations, and service availability are verified.

---

## 27. Commercial Lifecycle Intent

| Query family | Distinct user need | Page decision |
|---|---|---|
| telematics device replacement | Replace installed hardware | Standalone page only if recurring, verified service |
| GPS device removal | Remove hardware safely | Service page or section based on demand |
| equipment de-installation | Remove and document equipment | Define scope before targeting |
| device upgrade | Replace older equipment with new hardware | Solution or service page if verified |
| telematics troubleshooting | Diagnose installation or hardware issue | Separate from general repair claims |
| post-installation support | Obtain help after deployment | Describe exact support boundary |
| installation repair | Correct a failed or damaged installation | Use only if company offers repair |

### Primary conversion

Describe the equipment, issue, vehicle count, location, and desired schedule.

### Cannibalization rule

Do not create separate removal, replacement, upgrade, repair, and troubleshooting pages when the company provides one combined service and the search intent does not justify separation.

---

## 28. Technology and Platform Intent

### Query patterns

- [platform] installer jobs
- [platform] installation technician
- [platform] installation service
- [platform] hardware deployment
- [platform] device replacement

### Searcher expectation

The user wants demonstrated familiarity with a specific system, not a generic list of brand names.

### Destination decision

Use a technology page only when:

- company experience is verified;
- public use of the name is appropriate;
- the relationship is described accurately;
- the page has unique technical and process value;
- customer or candidate demand exists; and
- the content does not imply authorization or partnership without evidence.

### Potential URL

`/technology/[technology-slug]/`

### Alternative

Use a verified experience section within a role, service, or active job page when a standalone technology page would be thin.

---

## 29. Commercial Industry Intent

| Query pattern | Audience | Best destination when verified |
|---|---|---|
| telematics installation for trucking fleets | Transportation decision-maker | `/industries/transportation-logistics/` or service section |
| GPS installation for construction equipment | Construction fleet manager | `/industries/construction/` or service section |
| dash camera installation for delivery fleets | Delivery operations or safety | Approved industry or service page |
| fleet technology installation for utilities | Utility fleet stakeholder | Approved industry page |
| telematics deployment for municipalities | Public-sector procurement | Approved public-sector page |
| installation partner for telematics providers | Provider program manager | Partner or audience page |

### Page rule

Industry pages must contain distinct operating context, vehicle considerations, scheduling needs, proof, and buyer questions. Changing only the industry name is not sufficient.

---

## 30. Commercial Buyer-Education Intent

| Topic | Intent | Recommended page type | Conversion |
|---|---|---|---|
| What is fleet telematics installation? | INFO | Resource or service introduction | Explore service |
| How are GPS trackers installed? | INFO / TECH | Resource | Request project review |
| How long does fleet installation take? | PROC | FAQ or planning guide | Discuss schedule |
| How to prepare vehicles for installation | PROC | Checklist or guide | Plan a project |
| How to reduce fleet downtime during rollout | PROBLEM / PROC | Solution guide | Discuss deployment |
| What installation documentation should a fleet receive? | QUAL / TRUST | Process guide | Review project needs |
| Self-install versus professional installation | COMP | Comparison guide | Request installation |
| Single-site versus multi-location rollout | COMP / PROC | Deployment guide | Discuss rollout |

Educational pages should link to the relevant commercial service or solution without becoming thin sales pages.

---

## 31. Local Commercial Intent

### Query patterns

- fleet telematics installation [city]
- GPS tracking installation [state]
- ELD installer near me
- fleet camera installation [metro]
- mobile fleet installer [region]

### Searcher expectation

The buyer expects genuine service capability in the named location.

### Primary destination

`/service-areas/[market-slug]/`

### Requirements

- Verified current capacity
- Clear service boundary
- No false office representation
- Services available in that market
- Scheduling or project limitations
- Local or regional proof where possible
- Relevant contact and conversion path
- Ongoing maintenance owner

### Supporting ecosystem

- Eligible and accurate business profiles
- Consistent citations
- Search Console and Bing data
- Internal links from relevant service pages
- Real job pages when recruiting in the market

---

## 32. Mixed-Intent Routing

| Ambiguous query | Primary interpretation test | Recommended handling |
|---|---|---|
| mobile installer | SERP shows jobs or services | Create clearly labeled role and service paths; do not force one page to own both |
| GPS installer | Jobs versus service providers | Use “careers/jobs” and “installation services” language in titles and headings |
| telematics installer near me | Job listings versus installers for hire | Route based on landing page context; cross-link discreetly |
| fleet technician | Maintenance career versus installation role | Clarify fleet-technology installation scope |
| 12-volt installer | Consumer electronics, commercial service, or job | Use vehicle/fleet and jobs/services modifiers |
| contractor installer | Candidate seeking work versus buyer seeking contractor | Separate contractor opportunity and commercial partner paths |

### Website behavior

The main navigation should expose both “Careers” and “Services.” A user arriving on the wrong path should have a clear contextual link, not a mixed form.

---

## 33. SERP Feature Mapping

| Intent | Potential search feature | Content requirement |
|---|---|---|
| Active jobs | Google job-search experience | Valid active job page and accurate `JobPosting` data |
| Local jobs | Job search plus local modifiers | Real location and opening |
| Role definition | Featured snippet or AI answer | Concise definition followed by useful detail |
| Requirements | List snippet or PAA | Clear required-versus-preferred list |
| Process | Ordered-list snippet | Accurate step sequence |
| FAQ | PAA or answer result | Direct, visible answers |
| Commercial local | Local pack or local organic | Eligible profile and verified service location or area |
| Service | Organic result or AI answer | Clear service definition and proof |
| Comparison | Table or snippet | Direct comparison with conditions |
| Brand trust | Knowledge panel, reviews, profiles | Consistent entity information and authoritative profiles |
| Visual process | Image or video result | Original, descriptive media and metadata |

Eligibility does not guarantee appearance in any search feature.

---

## 34. Content-Format Mapping

| Intent | Best primary format | Supporting formats |
|---|---|---|
| Active job | Structured job detail | Summary card, FAQ, application form |
| Role overview | Evergreen landing page | Job cards, skills table, testimonial |
| Qualification | Checklist and explanation | FAQ, comparison table |
| Process | Ordered steps | Diagram, FAQ, downloadable checklist |
| Training | Program page or guide | Curriculum, requirements, FAQs |
| Local job | Market-specific job detail | Map context, travel expectations |
| Commercial service | Service landing page | Process, FAQ, proof, inquiry form |
| Industry | Audience landing page | Use cases, vehicle types, proof |
| Technology | Technology detail | Compatibility, process, FAQs |
| Comparison | Table and analysis | Decision checklist |
| Definition | Concise answer plus guide | Diagram, glossary, FAQs |

Use a visualization only when it materially improves understanding. Do not add diagrams or media that are decorative, inaccurate, or unsupported.

---

## 35. Conversion Mapping

| Intent group | Primary CTA | Secondary CTA | Success event |
|---|---|---|---|
| Branded careers | View Current Openings | Join Installer Network | Opening selected |
| Active job | Apply for This Opening | Review Requirements | Application completed |
| Role exploration | View Installer Opportunities | Check Requirements | Job index reached |
| Qualification | View Matching Openings | Learn How Assignments Work | Qualified path selected |
| Travel intent | Apply for Travel Opportunity | Add Travel Availability | Application or network completion |
| Training intent | View Eligible Openings | Review Requirements | Eligible action selected |
| Installer network | Join the Installer Network | View Current Openings | Consent-based registration |
| Commercial service | Discuss Your Project | Review Process | Qualified inquiry |
| Commercial deployment | Plan a Deployment | Explore Services | Qualified deployment inquiry |
| Commercial local | Request Service Information | Explore Available Services | Qualified local inquiry |
| Commercial education | Explore Relevant Service | Ask a Project Question | Service or inquiry progression |

Do not place both recruitment and commercial forms in the same component or treat their conversions as equivalent.

---

## 36. Indexation Decision Map

| Page type | Default indexation | Conditions |
|---|---|---|
| Careers hub | Index | Accurate and useful |
| Mobile installer role | Index | Evergreen role content and current pathways |
| Jobs index | Index | Useful current inventory and stable URL |
| Active job detail | Index | Real opening, complete content, direct application |
| Closed job detail | Conditional | Follow approved archive, redirect, 404, or 410 policy |
| Application form | Conditional or noindex | Avoid thin duplicate intent; preserve user flow |
| Application confirmation | Noindex | Conversion-only page |
| Installer requirements | Index | Useful evergreen content |
| Assignment process | Index | Verified and useful |
| Candidate FAQ | Index | Substantial, non-duplicative answers |
| Installer network | Index if useful | Must not imply active jobs; no JobPosting markup |
| Thin market-interest page | Noindex or do not publish | Not a substitute for a real job |
| Commercial service | Index | Verified service and unique value |
| Service area | Conditional | Verified capacity and unique content |
| Technology page | Conditional | Verified experience and distinct demand |
| Search results or filters | Noindex by default | Prevent crawl and duplication issues |
| Internal preview | Noindex and access-controlled as appropriate | Not public production content |

Development, publication, and indexation are separate states.

---

## 37. Cannibalization Decision Rules

### Careers hub versus jobs index

- Careers hub owns employer and opportunity overview.
- Jobs index owns current opening discovery.

### Role page versus active job page

- Role page owns evergreen occupation and fit intent.
- Job page owns exact active title, market, and application intent.

### Requirements versus training

- Requirements page explains current expectations.
- Training page explains a verified company program.

### Active job versus installer network

- Active job represents an available role.
- Network represents potential future contact.

### Service versus resource

- Service page owns transactional provider intent.
- Resource owns educational or comparison intent.

### Service versus service area

- Service page owns national or non-geographic service intent.
- Service-area page owns verified market intent.

### Service versus technology

- Service page explains what work is performed.
- Technology page explains verified equipment or platform-specific experience.

When two proposed pages cannot be distinguished by audience need, content, or conversion, combine them.

---

## 38. Internal Linking by Intent

### Recruitment path

Careers hub links to:

- current openings;
- mobile installer role;
- requirements;
- assignment process;
- FAQs; and
- installer network.

Role pages link to:

- related active jobs;
- requirements;
- assignment process;
- relevant resources; and
- installer network.

Active jobs link to:

- application action;
- requirements;
- assignment process;
- candidate FAQs; and
- company or careers context.

### Commercial path

Service pages link to:

- relevant industries;
- technologies when verified;
- service areas;
- process resources;
- case studies; and
- project inquiry.

Resource pages link to:

- relevant service or solution;
- related supporting resources;
- appropriate commercial action.

### Cross-audience links

- Commercial pages may link to careers with “Interested in installer opportunities?”
- Careers pages may link to services with “Learn about the installation work we support.”
- Cross-links must not compete with the page’s primary conversion.

---

## 39. Measurement by Intent

| Intent group | Visibility metric | Engagement metric | Conversion metric | Business outcome |
|---|---|---|---|---|
| Active job | Job impressions and clicks | Job-detail engagement | Application completion | Activated installer |
| Role | Organic role visibility | Opening and requirements clicks | Application or network completion | Qualified candidate |
| Qualification | Query and page engagement | Checklist and related-page use | Matching job selected | Qualified applicant rate |
| Process and terms | Informational visibility | FAQ and process engagement | Application progression | Reduced withdrawal or recruiter burden |
| Network | Future-opportunity visibility | Form start | Network registration | Market-ready pipeline |
| Commercial service | Service visibility | Proof and process engagement | Qualified inquiry | Opportunity or revenue |
| Local commercial | Local organic and profile visibility | Contact and service engagement | Qualified local inquiry | Serviceable project |
| Educational | Informational visibility | Assisted navigation | Assisted conversion | Topical authority and demand creation |

Avoid declaring an intent successful based only on rankings. Measure its contribution to qualified outcomes.

---

## 40. Validation Workflow

For each priority intent:

1. Confirm the underlying role, service, market, or fact.
2. Review the live search results by relevant geography and device.
3. Identify dominant result types and features.
4. Confirm the target audience.
5. Define the searcher’s expected answer and action.
6. Assign one canonical destination.
7. Decide whether the page should be built, published, and indexed.
8. Create a content brief.
9. Add internal links and structured data where valid.
10. Record baseline impressions, clicks, engagement, and conversions.
11. Measure candidate or commercial quality.
12. Revise, merge, redirect, noindex, or retire based on evidence.

---

## 41. Intent Map Registry Template

Use these fields for the maintained registry:

| Field | Description |
|---|---|
| Intent ID | Stable internal identifier |
| Audience | Recruitment or commercial persona |
| Funnel stage | Awareness through retention |
| Primary query | Representative query |
| Variants | Closely related phrases |
| Intent type | NAV, JOB, ROLE, QUAL, and so on |
| Geography | National, state, metro, city, or non-geographic |
| Search features | Jobs, local pack, PAA, snippet, video, image, AI, and others |
| Expected answer | What the user needs from the page |
| Target URL | Canonical destination |
| Page family | Job, role, service, resource, market, and so on |
| Primary CTA | Main next step |
| Structured data | Eligible type and conditions |
| Indexation | Proposed status |
| Business verification | Verified, conditional, or blocked |
| Page status | Proposed, drafting, built, public, indexed, retired |
| Owner | Responsible person |
| Last reviewed | Freshness date |
| Outcome metric | Qualified business result |

---

## 42. Priority Build Sequence

### Recruitment foundation

1. `/careers/`
2. `/careers/mobile-installers/`
3. `/careers/jobs/`
4. `/careers/jobs/[job-slug]/`
5. `/careers/installer-requirements/`
6. `/careers/how-assignments-work/`
7. `/careers/apply/`
8. `/careers/application-received/`
9. `/careers/faqs/`
10. `/careers/join-our-installer-network/`

### Recruitment authority

1. What a mobile telematics installer does
2. GPS, ELD, and telematics installer qualifications
3. Transferable 12-volt skills
4. Traveling versus regional work
5. Tools and documentation expectations
6. Application and screening process

### Commercial foundation after verification

1. Core company and service overview
2. Fleet telematics installation
3. GPS tracking device installation
4. ELD installation
5. Fleet dash-camera installation
6. Multi-location fleet deployments
7. Installation process
8. Verified industries and service areas
9. Commercial FAQs and proof

---

## 43. Open Decisions

- Which installer roles are active at launch?
- Which role title should own the broad “mobile installer jobs” theme?
- Which geographic markets have real openings?
- Which markets should use installer-network outreach only?
- Which engagement classifications are approved?
- Which compensation and travel terms can be displayed?
- Does SB Mobile offer verified training?
- Which commercial services are approved?
- Which equipment and platforms may be named?
- Which geographies have verified commercial capacity?
- Which application pages should be indexed?
- Which closed-job archive policy should be used?
- Which filters and search-result pages require crawl controls?
- Which cross-audience links best support credibility without diluting conversion?

---

## 44. Related Documents

- `00-project-overview.md`
- `01-business-source-of-truth.md`
- `02-business-overview.md`
- `03-audience-personas.md`
- `04-competitor-research.md`
- `05-keyword-research.md`
- `07-site-architecture.md`
- `08-url-strategy.md`
- `09-content-strategy.md`
- `10-on-page-seo-standards.md`
- `11-local-seo-plan.md`
- `12-aeo-geo-llm-optimization.md`
- `13-schema-markup-plan.md`
- `14-conversion-strategy.md`
- `15-analytics-and-measurement.md`
- `28-recruitment-strategy.md`
- `30-job-content-schema-specification.md`

---

## 45. Maintenance

Review this map:

- when keyword research changes;
- before a new page family is created;
- when a role or market opens or closes;
- when commercial services or coverage change;
- after material search-result changes;
- when Search Console or Bing data shows cannibalization;
- when candidate or commercial conversion patterns change; and
- during quarterly content and indexation reviews.

Update the keyword research, site architecture, URL strategy, content briefs, internal linking, schema, analytics, and redirect records whenever a primary intent changes ownership.
