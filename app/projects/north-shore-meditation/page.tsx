import type { Metadata } from "next";
import Image from "next/image";
import { BrandMark } from "@/components/brand-mark";
import { ButtonLink } from "@/components/button-link";
import { Code } from "@/components/code";
import { CodeBlock } from "@/components/code-block";
import { Colophon } from "@/components/colophon";
import { FrameworkBadge } from "@/components/framework-badge";
import { JsonLd } from "@/components/json-ld";
import { ProjectBreadcrumb } from "@/components/project-breadcrumb";
import {
  ProjectSectionDivider,
  ProjectSectionHeading,
} from "@/components/project-section";
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
        <ProjectBreadcrumb
          section="applications"
          current="North Shore Meditation"
        />

        <header className="mb-16 space-y-6 max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            <BrandMark className="text-primary mr-3" />
            North Shore Meditation
          </h1>
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            A site the client can actually maintain - they publish events,
            articles, and page content from their own dashboard.
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
                developer, so every date change and every new article waited on
                somebody else&apos;s queue.
              </p>
              <p>
                They needed to publish events on their own schedule, write
                articles when they wanted to, and change page copy without
                asking anyone first.
              </p>
            </div>
          </section>

          <section>
            <ProjectSectionHeading>Solution</ProjectSectionHeading>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-prose">
              <p>
                Contentful holds all the content and Next.js renders it, so the
                client works entirely in Contentful&apos;s dashboard and never
                touches code, a deployment, or a ticket.
              </p>
              <p>
                Pages are served statically through ISR, and a publish in
                Contentful triggers revalidation, so the site stays fast and
                nothing stale sits on it for long.
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
                  "App Router with ISR, so pages ship static and revalidate on each Contentful publish. The first load is fast and the content is still current.",
              },
              {
                badge: "contentful" as const,
                rationale:
                  "Headless CMS with a typed content model, so events, articles, and page sections are all structured entries the client manages without me.",
              },
              {
                badge: "resend" as const,
                rationale:
                  "Sends the transactional email behind contact form submissions. Its API is a few lines, it delivers, and there's no SMTP configuration to keep working.",
              },
              {
                badge: "typescript" as const,
                rationale:
                  "Typed Contentful content models, so a schema change surfaces as a build error rather than as something breaking in production.",
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
                  React Compiler over manual memoisation
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-prose">
                  The app turns on React Compiler with{" "}
                  <Code>reactCompiler: true</Code> in{" "}
                  <Code>next.config.mjs</Code> rather than scattering{" "}
                  <Code>React.memo</Code>, <Code>useMemo</Code>, and{" "}
                  <Code>useCallback</Code> through component files. The compiler
                  analyses the component tree at build time and memoises only
                  where it works out a re-render would be redundant, so nobody
                  has to make that call by hand, and there are no annotations to
                  drift out of date and no dependency arrays to get wrong.
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
                  <Code>cache()</Code>. TanStack Query deduplicates on the
                  client, and <Code>cache()</Code> covers the server, so two
                  Server Components asking for the same article during one
                  render cycle share a single Contentful response. Without it,
                  every branch of the tree that reads the same entry makes its
                  own network call.
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
                  UI strings - navigation, buttons, labels - come from
                  statically-imported JSON files behind a{" "}
                  <Code>server-only</Code> directive, so no i18n runtime reaches
                  the client at all. Libraries like <Code>next-intl</Code> or{" "}
                  <Code>i18next</Code> add bundle weight and want hydration,
                  whereas these dictionaries can&apos;t be imported into a
                  client component in the first place - TypeScript rejects it at
                  build time.
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
                  fully-typed React Query hooks, so there are no wrappers to
                  write by hand. A custom fetcher is injected into every
                  generated hook, and authentication tokens, cache tags, and
                  draft-mode flags flow through it automatically. Change the
                  Contentful schema and the types regenerate, and anything that
                  no longer lines up is a build error before it reaches
                  production.
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

        <div className="mt-20">
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
