import Link from "next/link";

import { FaqGroup } from "@/components/content/FaqGroup";
import { ServicesHero } from "@/components/content/ServicesHero";
import { SplitFeature } from "@/components/content/SplitFeature";
import { CommercialInquiryForm } from "@/components/forms/CommercialInquiryForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CardGrid } from "@/components/layout/CardGrid";
import { PhoneButton } from "@/components/layout/PhoneButton";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/schema/JsonLd";
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
 * related services, FAQ, quote form, resources, and a single low-emphasis
 * careers text link after the form. The recruiting link is never above the
 * form, and no recruitment form appears on these commercial pages.
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
  const handoff = shared.handoff;
  const guide = content.quoteGuide;
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/" },
    { label: content.breadcrumbLabel },
  ];

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
        h1={page.h1}
        intro={page.intro}
        eyebrow={shared.heroEyebrow}
        primaryCta={primaryCta}
        qualifier={shared.heroQualifier}
        phone={phone}
        phoneLocation="service-hero"
        scopeItems={content.scopeItems}
        image={heroImage}
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
          h2: shared.vehicles.h2,
          body: [content.vehiclesBody],
          lists: [
            {
              heading: shared.vehicles.listHeading,
              items: shared.vehicles.examples,
            },
          ],
          footnotes: [shared.vehicles.note],
        }}
        slot={contextImage}
        mediaSide="left"
      />

      <SplitFeature
        id={`${id}-fit`}
        tone="subtle"
        content={content.fit}
        slot={fitImage}
        mediaSide="right"
      />

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
          <p className="mt-3 text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted">
            {content.midCtaBody ?? shared.heroQualifier}
          </p>
          <div className="mt-6 flex justify-center">
            <CtaButton cta={primaryCta} emphasis="primary" blockOnMobile />
          </div>
        </Section>
      ) : null}

      <SplitFeature
        id={`${id}-nationwide`}
        tone="dark"
        content={{
          h2: shared.nationwide.h2,
          body: [shared.nationwide.lead, content.nationwideExtra],
          links: shared.nationwide.links,
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
            body: [shared.documentation.sentence],
            links: shared.documentation.links,
          }}
        />
      )}

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

      <FaqGroup
        id={`${id}-faq`}
        accessibleHeading={content.faqHeading}
        content={{ h2: content.faqHeading, items: page.faq ?? [] }}
        layout={content.faqLayout}
      />

      <div id="request-quote" className="scroll-mt-24">
        <Section
          tone="default"
          density="spacious"
          width={guide ? "site" : "reading"}
          labelledBy={`${id}-quote-heading`}
        >
          <div
            className={
              guide
                ? "grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16"
                : ""
            }
          >
            <div>
              <h2
                id={`${id}-quote-heading`}
                className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
              >
                {content.quoteH2}
              </h2>
              <p className="mt-4 text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink-muted">
                {guide ? guide.intro : shared.quote.intro}
              </p>
              {guide ? (
                <>
                  <p className="mt-4 text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted">
                    {guide.support}
                  </p>
                  <h3 className="mt-8 text-[length:var(--text-h4)] font-bold text-ink">
                    {guide.includeHeading}
                  </h3>
                  <ul className="mt-3 flex list-none flex-col gap-2 p-0 text-[length:var(--text-body)] text-ink">
                    {guide.includeItems.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden="true" className="shrink-0 font-bold">
                          &bull;
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <h3 className="mt-8 text-[length:var(--text-h4)] font-bold text-ink">
                    {guide.nextHeading}
                  </h3>
                  <ol className="mt-3 flex list-decimal flex-col gap-2 pl-6 text-[length:var(--text-body)] text-ink marker:font-bold">
                    {guide.nextSteps.map((step) => (
                      <li key={step} className="pl-1">
                        {step}
                      </li>
                    ))}
                  </ol>
                </>
              ) : null}
            </div>
            <div className={guide ? "" : "mt-8"}>
              <CommercialInquiryForm />
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
        density="compact"
        labelledBy={`${id}-resources-heading`}
      >
        <h2
          id={`${id}-resources-heading`}
          className="text-[length:var(--text-h4)] font-bold text-ink"
        >
          {shared.resources.h2}
        </h2>
        <ul className="mt-3 flex list-none flex-col gap-1 p-0">
          {shared.resources.links.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="inline-flex min-h-11 items-center gap-2 font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4"
              >
                {item.label}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="default" density="compact">
        <p className="text-[length:var(--text-body)] text-ink-muted">
          {handoff.question}{" "}
          <Link
            href={handoff.link.href}
            data-journey="recruitment"
            data-event="cta_installer_network_click"
            className="font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4"
          >
            {handoff.link.label}
          </Link>
        </p>
      </Section>
    </>
  );
}
