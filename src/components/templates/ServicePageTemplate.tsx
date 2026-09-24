import Link from "next/link";

import { FaqGroup } from "@/components/content/FaqGroup";
import { InstallerQuestions } from "@/components/content/InstallerQuestions";
import { InstallCategoryCard } from "@/components/content/WhatWeInstallGrid";
import { ServicesHero } from "@/components/content/ServicesHero";
import { SplitFeature } from "@/components/content/SplitFeature";
import { CommercialInquiryForm } from "@/components/forms/CommercialInquiryForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CardGrid } from "@/components/layout/CardGrid";
import { PhoneButton } from "@/components/layout/PhoneButton";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/schema/JsonLd";
import { business } from "@/data/site/business";
import { Card } from "@/components/ui/Card";
import { CtaButton } from "@/components/ui/CtaButton";
import { servicePageSchema } from "@/lib/schema/service-page";
import type { ServicePageBundle } from "@/types/service-content";

interface ServicePageTemplateProps {
  readonly bundle: ServicePageBundle;
}

/**
 * Shared layout for the five individual service pages: a commercial answer
 * page with a direct quote path. Every section is rendered from typed data,
 * so no copy, phone number, or route lives in this file.
 *
 * Order: hero, definition, scope, vehicle context, fit guide, optional
 * mid-page quote CTA, nationwide project-location context, documentation,
 * related services, the installer-questions block, FAQ, quote form, and
 * resources. The installer block sits directly before the FAQ on every service
 * page (stakeholder direction, 2026-09-23); no recruitment form appears here.
 *
 * Schema: WebPage + Service + BreadcrumbList via `servicePageSchema`, with
 * only the `serviceType` values the page's content supplies and no
 * `areaServed`. FAQPage is not emitted.
 */
export function ServicePageTemplate({ bundle }: ServicePageTemplateProps) {
  const {
    page,
    content,
    shared,
    primaryCta,
    phone,
    heroImage,
    contextImage,
    definitionImage,
    scopeImage,
    fitImage,
    nationwideImage,
  } = bundle;
  const id = content.slug;
  const guide = content.quoteGuide;
  /**
   * The quote section always sits on a dark surface: a darkened background
   * image when `quoteBackground` is set, otherwise the dark fallback until an
   * approved image is wired in.
   */
  const onOverlay = true;
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/" },
    { label: content.breadcrumbLabel },
  ];

  const installerBlock = (
    <InstallerQuestions
      content={bundle.installerQuestions.content}
      image={bundle.installerQuestions.image}
      headingId={`${id}-installer-questions-heading`}
      phoneLocation="service-installer-questions"
    />
  );

  return (
    <>
      <JsonLd
        schema={servicePageSchema({
          pathname: content.pathname,
          content: page,
          serviceTypes: content.serviceTypes,
          breadcrumbs,
        })}
      />
      <Breadcrumbs items={breadcrumbs} />

      <ServicesHero
        id={id}
        h1={content.hero?.h1 ?? page.h1}
        intro={content.hero?.intro ?? page.intro}
        eyebrow={content.hero?.eyebrow ?? shared.heroEyebrow}
        primaryCta={
          content.hero?.ctaLabel
            ? { ...primaryCta, label: content.hero.ctaLabel }
            : primaryCta
        }
        qualifier={content.hero?.qualifier ?? shared.heroQualifier}
        phone={phone}
        phoneLocation="service-hero"
        scopeItems={content.scopeItems}
        image={content.heroVideo || content.heroBackgroundImage ? undefined : heroImage}
        backgroundImage={content.heroBackgroundImage}
        backgroundVideo={content.heroVideo}
      />

      <SplitFeature
        id={`${id}-definition`}
        content={content.definition}
        slot={definitionImage}
        mediaSide="left"
        mediaFirstOnMobile
      />

      <SplitFeature
        id={`${id}-scope`}
        tone="subtle"
        content={content.scope}
        slot={scopeImage}
        mediaSide="right"
      />

      <SplitFeature
        id={`${id}-vehicles`}
        content={{
          h2: content.vehicleContext?.h2 ?? shared.vehicles.h2,
          body: [content.vehiclesBody],
          lists: [
            {
              heading:
                content.vehicleContext?.listHeading ?? shared.vehicles.listHeading,
              items: shared.vehicles.examples,
            },
          ],
          footnotes: [content.vehicleContext?.note ?? shared.vehicles.note],
        }}
        slot={contextImage}
        mediaSide="left"
      />

      {content.fitBackground && content.fitRelated ? (
        <Section
          tone="default"
          density="spacious"
          width="site"
          backgroundImage={content.fitBackground}
          labelledBy={`${id}-fit-heading`}
        >
          <div className="mx-auto max-w-[960px] rounded-lg bg-white p-6 shadow-lg md:p-10">
            <h2
              id={`${id}-fit-heading`}
              className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
            >
              {content.fit.h2}
            </h2>
            <div className="mt-6 grid gap-8 md:grid-cols-2 md:gap-12">
              {content.fit.lists?.[0] ? (
                <div>
                  <h3 className="text-[length:var(--text-body)] font-bold text-ink">
                    {content.fit.lists[0].heading}
                  </h3>
                  <ul className="mt-2 flex list-none flex-col gap-2 p-0 text-[length:var(--text-body)] text-ink">
                    {content.fit.lists[0].items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden="true" className="mt-[0.15rem] shrink-0 font-bold text-ink">
                          &bull;
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <div>
                <h3 className="text-[length:var(--text-body)] font-bold text-ink">
                  {content.fitRelated.heading}
                </h3>
                <ul className="mt-2 flex list-none flex-col gap-3 p-0 text-[length:var(--text-body)]">
                  {content.fitRelated.items.map((item) => (
                    <li key={item.link.href} className="flex flex-col">
                      <span className="text-ink-muted">{item.context}</span>
                      <Link
                        href={item.link.href}
                        className="inline-flex min-h-11 items-center gap-2 font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4"
                      >
                        {item.link.label}
                        <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {content.fit.footnotes?.map((note) => (
              <p
                key={note}
                className="mt-6 text-[length:var(--text-small)] leading-relaxed text-pretty text-ink-muted"
              >
                {note}
              </p>
            ))}
          </div>
        </Section>
      ) : (
        <SplitFeature
          id={`${id}-fit`}
          tone="subtle"
          content={content.fit}
          slot={fitImage}
          mediaSide="right"
        />
      )}

      {content.midCtaHeading ? (
        <Section
          tone="default"
          density="tight"
          center
          labelledBy={`${id}-mid-cta-heading`}
        >
          <h2
            id={`${id}-mid-cta-heading`}
            className="text-[length:var(--text-h3)] leading-[1.15] font-bold text-balance text-ink"
          >
            {content.midCtaHeading}
          </h2>
          {(content.midCtaBody ?? shared.heroQualifier)
            .split("\n\n")
            .map((paragraph, index) => (
              <p
                key={paragraph}
                className={`${index === 0 ? "mt-3" : "mt-4"} mx-auto max-w-[720px] text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted`}
              >
                {paragraph}
              </p>
            ))}
          <div className="mt-6 flex justify-center">
            <CtaButton
              cta={
                content.midCtaLabel
                  ? { ...primaryCta, label: content.midCtaLabel }
                  : primaryCta
              }
              emphasis="primary"
              blockOnMobile
            />
          </div>
        </Section>
      ) : null}

      <SplitFeature
        id={`${id}-nationwide`}
        tone="dark"
        content={{
          h2: content.nationwideContext?.h2 ?? shared.nationwide.h2,
          body: content.nationwideContext?.body ?? [
            shared.nationwide.lead,
            content.nationwideExtra,
          ],
          links: content.nationwideContext?.links ?? shared.nationwide.links,
          linksAsButtons: content.nationwideContext?.linksAsButtons,
        }}
        slot={nationwideImage}
        mediaSide="left"
      />

      {content.documentationCards ? (
        <Section
          tone="subtle"
          width="site"
          labelledBy={`${id}-documentation-heading`}
        >
          <h2
            id={`${id}-documentation-heading`}
            className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
          >
            {shared.documentation.h2}
          </h2>
          <p className="mt-5 max-w-[720px] text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted">
            {content.documentationCards.intro}
          </p>
          <div className="mt-8">
            <CardGrid columns={3}>
              {content.documentationCards.cards.map((card) => (
                <Card key={card.title} padding="compact" className="flex flex-col">
                  <h3 className="text-[length:var(--text-h4)] font-bold text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[length:var(--text-body)] text-ink-muted">
                    {card.body}
                  </p>
                </Card>
              ))}
            </CardGrid>
          </div>
          <ul className="mt-6 flex list-none flex-col gap-1 p-0">
            {shared.documentation.links.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center gap-2 text-[length:var(--text-body)] font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4"
                >
                  {item.label}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ) : (
        <SplitFeature
          id={`${id}-documentation`}
          tone="subtle"
          content={{
            h2: shared.documentation.h2,
            body: [content.documentationText ?? shared.documentation.sentence],
            links: shared.documentation.links,
          }}
        />
      )}

      {bundle.installCatalog ? (
        <Section tone="default" width="site" labelledBy={`${id}-related-heading`}>
          <h2
            id={`${id}-related-heading`}
            className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
          >
            {shared.related.h2}
          </h2>
          <div className="mt-10">
            <CardGrid columns={3}>
              {business.serviceTypes
                .filter((service) => !content.serviceTypes.includes(service))
                .map((service) => (
                <InstallCategoryCard
                  key={service}
                  service={service}
                  content={bundle.installCatalog!}
                  id={`${id}-related`}
                />
              ))}
            </CardGrid>
          </div>
        </Section>
      ) : content.relatedSection ? (
        <Section tone="default" width="site" labelledBy={`${id}-related-heading`}>
          <h2
            id={`${id}-related-heading`}
            className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
          >
            {content.relatedSection.h2}
          </h2>
          <p className="mt-4 max-w-[720px] text-[length:var(--text-body)] leading-relaxed text-ink-muted">
            {content.relatedSection.intro}
          </p>
          <div className="mt-10">
            <CardGrid columns={3}>
              {content.relatedSection.cards.map((card) => (
                <Card
                  key={card.href}
                  as="div"
                  tone="light"
                  padding="none"
                  hover
                  className="relative flex h-full flex-col"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.image.src}
                    alt={card.image.alt}
                    width={card.image.width}
                    height={card.image.height}
                    loading="lazy"
                    decoding="async"
                    className="card-image-zoom aspect-[4/3] h-auto w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-[length:var(--text-h4)] font-semibold text-ink">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-[length:var(--text-body)] leading-relaxed text-ink-muted">
                      {card.description}
                    </p>
                    <Link
                      href={card.href}
                      className="mt-auto inline-flex min-h-11 items-center gap-2 pt-4 font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4 after:absolute after:inset-0 after:content-['']"
                    >
                      {card.linkLabel}
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </Card>
              ))}
            </CardGrid>
          </div>
        </Section>
      ) : (
      <Section tone="default" width="site" labelledBy={`${id}-related-heading`}>
        <h2
          id={`${id}-related-heading`}
          className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
        >
          {shared.related.h2}
        </h2>
        <div className="mt-8">
          <CardGrid columns={3}>
            {[...bundle.relatedCards, shared.related.allCard].map((card) => (
              <Card
                key={card.href}
                as="div"
                hover
                padding="compact"
                className="relative flex flex-col"
              >
                <h3 className="text-[length:var(--text-h4)] font-bold text-ink">
                  {card.title}
                </h3>
                <p className="mt-2 text-[length:var(--text-body)] text-ink-muted">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="mt-auto inline-flex min-h-11 items-center gap-2 pt-4 font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4 after:absolute after:inset-0 after:content-['']"
                >
                  {card.linkLabel}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </Card>
            ))}
          </CardGrid>
        </div>
      </Section>
      )}

      {installerBlock}

      <FaqGroup
        id={`${id}-faq`}
        accessibleHeading={content.faqHeading}
        content={{ h2: content.faqHeading, items: page.faq ?? [] }}
        layout={content.faqLayout}
      />


      <div id="request-quote" className="scroll-mt-24">
        <Section
          tone={content.quoteBackground ? "default" : "dark"}
          density="spacious"
          width="site"
          backgroundImage={content.quoteBackground}
          backgroundOverlay={Boolean(content.quoteBackground)}
          labelledBy={`${id}-quote-heading`}
        >
          {process.env.NODE_ENV !== "production" && !content.quoteBackground ? (
            <p className="mb-4 text-[length:var(--text-small)] text-white/70">
              {id}-quote-background placeholder (development only)
            </p>
          ) : null}
          <div
            className={`grid gap-10 lg:grid-cols-2 lg:gap-16 ${content.quoteAlignTop ? "lg:items-start" : "lg:items-center"}`}
          >
            <div className={onOverlay ? "text-white" : ""}>
              <h2
                id={`${id}-quote-heading`}
                className={`text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance ${onOverlay ? "text-white" : "text-ink"}`}
              >
                {content.quoteH2}
              </h2>
              <p className={`mt-4 text-[length:var(--text-body-lg)] leading-relaxed text-pretty ${onOverlay ? "text-white" : "text-ink-muted"}`}>
                {guide ? guide.intro : (content.quoteIntro ?? shared.quote.intro)}
              </p>
              {guide ? (
                <>
                  <p className={`mt-4 text-[length:var(--text-body)] leading-relaxed text-pretty ${onOverlay ? "text-white" : "text-ink-muted"}`}>
                    {guide.support}
                  </p>
                  <h3 className={`mt-8 text-[length:var(--text-h4)] font-bold ${onOverlay ? "text-white" : "text-ink"}`}>
                    {guide.includeHeading}
                  </h3>
                  <ul className={`mt-3 flex list-none flex-col gap-2 p-0 text-[length:var(--text-body)] ${onOverlay ? "text-white" : "text-ink"}`}>
                    {guide.includeItems.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden="true" className="shrink-0 font-bold">
                          &bull;
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {guide.nextHeading && guide.nextSteps ? (
                    <>
                      <h3 className={`mt-8 text-[length:var(--text-h4)] font-bold ${onOverlay ? "text-white" : "text-ink"}`}>
                        {guide.nextHeading}
                      </h3>
                      <ol className={`mt-3 flex list-decimal flex-col gap-2 pl-6 text-[length:var(--text-body)] marker:font-bold ${onOverlay ? "text-white" : "text-ink"}`}>
                        {guide.nextSteps.map((step) => (
                          <li key={step} className="pl-1">
                            {step}
                          </li>
                        ))}
                      </ol>
                    </>
                  ) : null}
                </>
              ) : null}
            </div>
            <div
              data-tone="light"
              className={`${onOverlay ? "rounded-[var(--radius-lg)] bg-surface p-6 text-ink md:p-8" : ""}`}
            >
              <CommercialInquiryForm
                copy={
                  content.quoteServiceNeedLabel
                    ? { serviceNeed: content.quoteServiceNeedLabel }
                    : undefined
                }
              />
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
                <p className="text-[length:var(--text-body)] text-ink-muted">
                  {shared.quote.phoneLead}
                </p>
                <PhoneButton
                  href={phone.href}
                  label={phone.numberLabel}
                  location="service-quote"
                  className="shrink-0 border-ink bg-surface px-5 whitespace-nowrap text-ink hover:bg-surface-subtle"
                />
              </div>
            </div>
          </div>
        </Section>
      </div>

      <Section
        tone="subtle"
        width="site"
        labelledBy={`${id}-resources-heading`}
      >
        <h2
          id={`${id}-resources-heading`}
          className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
        >
          {shared.resources.h2}
        </h2>
        <div className="mt-10">
          <CardGrid columns={3}>
            {shared.resources.links.map((item) => (
              <Card
                key={item.href}
                as="div"
                tone="light"
                padding="none"
                hover
                className="relative flex h-full flex-col"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                  loading="lazy"
                  decoding="async"
                  className="card-image-zoom aspect-[4/3] h-auto w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-[length:var(--text-h4)] font-semibold text-ink">
                    <Link
                      href={item.href}
                      className="inline-flex min-h-11 items-center gap-2 text-[var(--color-accent-blue-strong)] underline underline-offset-4 after:absolute after:inset-0 after:content-['']"
                    >
                      {item.label}
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </h3>
                </div>
              </Card>
            ))}
          </CardGrid>
        </div>
      </Section>
    </>
  );
}
