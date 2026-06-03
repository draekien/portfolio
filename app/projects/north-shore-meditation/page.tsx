import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { ButtonLink } from "@/components/button-link";
import { Code } from "@/components/code";
import { CodeBlock } from "@/components/code-block";
import { Colophon } from "@/components/colophon";
import { FrameworkBadge } from "@/components/framework-badge";
import { JsonLd } from "@/components/json-ld";
import {
  ProjectSectionDivider,
  ProjectSectionHeading,
} from "@/components/project-section";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Carousel,
  CarouselContent,
  CarouselControls,
  CarouselItem,
} from "@/components/ui/carousel";
import structuredData from "./structured-data.json" with { type: "json" };

export const metadata: Metadata = {
  title: "North Shore Meditation | William Pei",
  description:
    "A CMS-driven marketing site built with Next.js and Contentful for a Sydney meditation centre.",
  alternates: {
    canonical: "/projects/north-shore-meditation",
  },
  openGraph: {
    siteName: "William Pei",
    url: "/projects/north-shore-meditation",
    type: "website",
  },
};

export default function NorthShoreMeditationPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <div className="container mx-auto py-12 md:py-20">
        <Breadcrumb className="mb-12">
          <BreadcrumbList className="font-mono text-sm">
            <BreadcrumbItem>
              <BreadcrumbLink render={<Link href="/" />}>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink render={<Link href="/#applications" />}>
                applications
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>North Shore Meditation</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <header className="mb-16 space-y-6 max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            <BrandMark className="text-primary mr-3" />
            North Shore Meditation
          </h1>
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            A site the client can actually maintain: events, articles, and page
            content managed entirely from their dashboard.
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <FrameworkBadge version="nextjs" />
            <FrameworkBadge version="contentful" />
            <FrameworkBadge version="resend" />
            <FrameworkBadge version="typescript" />
          </div>
          <div className="flex gap-4">
            <ButtonLink
              link={{
                href: "https://www.northshoremeditation.au/en",
                target: "_blank",
                rel: "noopener noreferrer",
              }}
              external
            >
              View live →
            </ButtonLink>
          </div>
        </header>

        <section className="mb-20">
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              <CarouselItem>
                <Image
                  src="/north-shore-meditation-hero-dark-mobile.png"
                  alt="North Shore Meditation homepage showing the hero section with navigation, headline, and call to action"
                  width={1179}
                  height={2556}
                  className="hidden dark:block sm:dark:hidden w-full h-auto rounded-lg"
                  priority
                />
                <Image
                  src="/north-shore-meditation-hero-light-mobile.png"
                  alt="North Shore Meditation homepage showing the hero section with navigation, headline, and call to action"
                  width={1179}
                  height={2556}
                  className="block dark:hidden sm:hidden w-full h-auto rounded-lg"
                  priority
                />
                <Image
                  src="/north-shore-meditation-hero-dark.png"
                  alt="North Shore Meditation homepage showing the hero section with navigation, headline, and call to action"
                  width={1920}
                  height={1080}
                  className="hidden sm:dark:block w-full h-auto rounded-lg"
                  priority
                />
                <Image
                  src="/north-shore-meditation-hero-light.png"
                  alt="North Shore Meditation homepage showing the hero section with navigation, headline, and call to action"
                  width={1920}
                  height={1080}
                  className="hidden sm:block sm:dark:hidden w-full h-auto rounded-lg"
                  priority
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/north-shore-meditation-science-dark-mobile.png"
                  alt="North Shore Meditation: backed by science section"
                  width={1179}
                  height={2556}
                  className="hidden dark:block sm:dark:hidden w-full h-auto rounded-lg"
                />
                <Image
                  src="/north-shore-meditation-science-light-mobile.png"
                  alt="North Shore Meditation: backed by science section"
                  width={1179}
                  height={2556}
                  className="block dark:hidden sm:hidden w-full h-auto rounded-lg"
                />
                <Image
                  src="/north-shore-meditation-science-dark.png"
                  alt="North Shore Meditation: backed by science section"
                  width={1920}
                  height={1080}
                  className="hidden sm:dark:block w-full h-auto rounded-lg"
                />
                <Image
                  src="/north-shore-meditation-science-light.png"
                  alt="North Shore Meditation: backed by science section"
                  width={1920}
                  height={1080}
                  className="hidden sm:block sm:dark:hidden w-full h-auto rounded-lg"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselControls />
          </Carousel>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 mb-20">
          <section>
            <ProjectSectionHeading>Problem</ProjectSectionHeading>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-prose">
              <p>
                The centre ran events regularly and published practitioner
                notes, but updating the site meant filing a request with a
                developer. Every content change was a bottleneck.
              </p>
              <p>
                The client needed to own their content: publish events on their
                schedule, write articles when the moment was right, and update
                page copy without friction.
              </p>
            </div>
          </section>

          <section>
            <ProjectSectionHeading>Solution</ProjectSectionHeading>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-prose">
              <p>
                A headless CMS architecture where Contentful handles all content
                authoring and Next.js renders it. The client works entirely in
                Contentful&apos;s dashboard: no code, no deployments, no
                tickets.
              </p>
              <p>
                ISR keeps the site fast without sacrificing freshness. New
                Contentful publishes trigger revalidation; stale content is
                never served for long.
              </p>
            </div>
          </section>
        </div>

        <section className="mb-20">
          <ProjectSectionHeading>Tech stack</ProjectSectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 max-w-3xl">
            {[
              {
                badge: "nextjs" as const,
                rationale:
                  "App Router with ISR. Static for performance, revalidated on each Contentful publish. Fast initial load, always fresh content.",
              },
              {
                badge: "contentful" as const,
                rationale:
                  "Headless CMS with a typed content model. Events, articles, and page sections are all structured entries the client manages independently.",
              },
              {
                badge: "resend" as const,
                rationale:
                  "Reliable transactional email for contact form submissions. Simple API with strong deliverability, no SMTP configuration.",
              },
              {
                badge: "typescript" as const,
                rationale:
                  "Typed Contentful content models. Schema changes surface as build errors before they can cause runtime surprises in production.",
              },
            ].map(({ badge, rationale }) => (
              <div key={badge} className="space-y-2">
                <FrameworkBadge version={badge} />
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[45ch]">
                  {rationale}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <ProjectSectionDivider>key decisions</ProjectSectionDivider>
          <div className="space-y-16 max-w-3xl md:max-w-none">
            <div className="md:grid md:grid-cols-[11rem_1fr] md:gap-x-12">
              <p className="font-mono text-sm text-secondary mb-2 md:mb-0">
                <BrandMark className="text-primary mr-1" /> 01 · performance
              </p>
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  React Compiler over manual memoization
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-prose">
                  The app enables React Compiler via{" "}
                  <Code>reactCompiler: true</Code> in{" "}
                  <Code>next.config.mjs</Code> rather than scattering{" "}
                  <Code>React.memo</Code>, <Code>useMemo</Code>, and{" "}
                  <Code>useCallback</Code> through component files. The compiler
                  analyses the component tree at build time and memoizes only
                  where it determines re-renders would be redundant: no manual
                  decisions, no annotation drift, no incorrect dependency
                  arrays.
                </p>
              </div>
            </div>

            <div className="md:grid md:grid-cols-[11rem_1fr] md:gap-x-12">
              <p className="font-mono text-sm text-secondary mb-2 md:mb-0">
                <BrandMark className="text-primary mr-1" /> 02 · data fetching
              </p>
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  React cache() for within-request deduplication
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-prose mb-6">
                  Every Contentful fetcher wraps its{" "}
                  <Code>queryClient.fetchQuery()</Code> call in React&apos;s{" "}
                  <Code>cache()</Code>. TanStack Query deduplicates client-side;{" "}
                  <Code>cache()</Code> handles the server side: two Server
                  Components requesting the same article during a single render
                  cycle share one Contentful response. Without it, each
                  component tree branch that reads the same entry makes its own
                  network call.
                </p>
                <div className="max-w-2xl">
                  <CodeBlock
                    language="typescript"
                    code={`// lib/contentful-api.ts
export const getArticles = cache(async (options) => {
  return queryClient.fetchQuery({ ...options });
});

// Two Server Components can both call getArticles()
// in the same render: Contentful is only hit once`}
                  />
                </div>
              </div>
            </div>

            <div className="md:grid md:grid-cols-[11rem_1fr] md:gap-x-12">
              <p className="font-mono text-sm text-secondary mb-2 md:mb-0">
                <BrandMark className="text-primary mr-1" /> 03 · i18n
              </p>
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Server-only JSON dictionaries instead of an i18n library
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-prose mb-6">
                  UI strings (navigation, buttons, labels) are served from
                  statically-imported JSON files behind a{" "}
                  <Code>server-only</Code> directive. This ships zero i18n
                  runtime to the client. Libraries like <Code>next-intl</Code>{" "}
                  or <Code>i18next</Code> add bundle weight and require
                  hydration; the JSON approach simply can&apos;t be imported in
                  a client component; TypeScript will reject it at build time.
                </p>
                <div className="max-w-2xl">
                  <CodeBlock
                    language="typescript"
                    code={`// app/[lang]/dictionaries.ts
import 'server-only'

export async function getDictionary(locale: Locale) {
  return {
    en: () => import('./dictionaries/en.json').then((m) => m.default),
  }[locale]?.()
}`}
                  />
                </div>
              </div>
            </div>

            <div className="md:grid md:grid-cols-[11rem_1fr] md:gap-x-12">
              <p className="font-mono text-sm text-secondary mb-2 md:mb-0">
                <BrandMark className="text-primary mr-1" /> 04 · data layer
              </p>
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Generated React Query hooks from the GraphQL schema
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-prose mb-6">
                  GraphQL Code Generator reads the Contentful schema and emits
                  fully-typed React Query hooks. No manual wrapper writing. A
                  custom fetcher function is injected into every generated hook,
                  so authentication tokens, cache tags, and draft-mode flags
                  flow through automatically. Contentful schema changes
                  regenerate types; mismatches become build errors before they
                  reach production.
                </p>
                <div className="max-w-2xl">
                  <CodeBlock
                    language="typescript"
                    code={`// codegen.ts: custom fetcher injected into every generated hook
config:
  fetcher: "@/lib/fetcher#fetcher"
  addSuspenseQuery: true

// Generated usage: fully typed, no hand-written wrapper
const { data } = useSuspenseGetArticlesQuery({ preview: isPreview })`}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-3xl">
          <Colophon>
            <p>
              I designed and shipped North Shore Meditation for a real client.
              Claude and I wrote this case study together, though everything it
              says about how the site works comes from me, verified against what
              I built.
            </p>
          </Colophon>
        </div>
      </div>
    </>
  );
}
