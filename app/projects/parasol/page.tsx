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
  title: "Parasol | William Pei",
  description:
    "A private FIRE tracking SaaS built with TanStack Start, Neon, and Clerk.",
  alternates: {
    canonical: "/projects/parasol",
  },
  openGraph: {
    siteName: "William Pei",
    url: "/projects/parasol",
    type: "website",
  },
};

export default function ParasolPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <div className="container mx-auto py-12 md:py-20">
        <ProjectBreadcrumb section="applications" current="Parasol" />

        <header className="mb-16 space-y-6 max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            <BrandMark className="text-primary mr-3" />
            Parasol
          </h1>
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            A private FIRE calculator that keeps your data yours, no open
            banking access required.
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <FrameworkBadge version="tanstack-start" />
            <FrameworkBadge version="neon" />
            <FrameworkBadge version="clerk" />
            <FrameworkBadge version="typescript" />
          </div>
          <div className="flex gap-4">
            <ButtonLink
              link={{
                href: "https://parasol.wpei.me",
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
                  src="/parasol-hero-dark-mobile.png"
                  alt="Parasol dashboard showing net worth target, progress toward financial independence, and portfolio allocation"
                  width={1179}
                  height={2556}
                  className="hidden dark:block sm:dark:hidden w-full h-auto rounded-lg"
                  priority
                />
                <Image
                  src="/parasol-hero-light-mobile.png"
                  alt="Parasol dashboard showing net worth target, progress toward financial independence, and portfolio allocation"
                  width={1179}
                  height={2556}
                  className="block dark:hidden sm:hidden w-full h-auto rounded-lg"
                  priority
                />
                <Image
                  src="/parasol-hero-dark.png"
                  alt="Parasol dashboard showing net worth target, progress toward financial independence, and portfolio allocation"
                  width={1920}
                  height={1080}
                  className="hidden sm:dark:block w-full h-auto rounded-lg"
                  priority
                />
                <Image
                  src="/parasol-hero-light.png"
                  alt="Parasol dashboard showing net worth target, progress toward financial independence, and portfolio allocation"
                  width={1920}
                  height={1080}
                  className="hidden sm:block sm:dark:hidden w-full h-auto rounded-lg"
                  priority
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/parasol-feature-dark-mobile.png"
                  alt="Parasol portfolio view showing transaction history with cost basis, market value, and unrealised gain columns"
                  width={1179}
                  height={2556}
                  className="hidden dark:block sm:dark:hidden w-full h-auto rounded-lg"
                />
                <Image
                  src="/parasol-feature-light-mobile.png"
                  alt="Parasol portfolio view showing transaction history with cost basis, market value, and unrealised gain columns"
                  width={1179}
                  height={2556}
                  className="block dark:hidden sm:hidden w-full h-auto rounded-lg"
                />
                <Image
                  src="/parasol-feature-dark.png"
                  alt="Parasol portfolio view showing transaction history with cost basis, market value, and unrealised gain columns"
                  width={1920}
                  height={1080}
                  className="hidden sm:dark:block w-full h-auto rounded-lg"
                />
                <Image
                  src="/parasol-feature-light.png"
                  alt="Parasol portfolio view showing transaction history with cost basis, market value, and unrealised gain columns"
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
                Every FIRE calculator I found wanted open banking access to my
                bank accounts, and I wasn&apos;t handing a third-party app read
                access to my financial data just to run projections I could
                compute myself.
              </p>
              <p>
                So I built something I own end-to-end - my data in my database,
                behind my auth, reachable only by me.
              </p>
            </div>
          </section>

          <section>
            <ProjectSectionHeading>Solution</ProjectSectionHeading>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-prose">
              <p>
                Parasol is a manual-entry FIRE tracker. You enter your portfolio
                values, income, expenses, and target, and it projects your path
                to financial independence using the 4% rule and tracks your
                progress over time.
              </p>
              <p>
                The infrastructure scales to zero when you&apos;re not using it,
                so there are no idle costs and no maintenance to keep up with.
              </p>
            </div>
          </section>
        </div>

        <section className="mb-20">
          <ProjectSectionHeading>Tech stack</ProjectSectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 max-w-3xl">
            {[
              {
                badge: "tanstack-start" as const,
                rationale:
                  "Type-safe full-stack routing with SSR and server functions, so every API boundary is typed end-to-end and I never have to hold a client/server split in my head.",
              },
              {
                badge: "neon" as const,
                rationale:
                  "Serverless Postgres that scales to zero between sessions, so a personal project with sparse usage costs nothing while it sits idle.",
              },
              {
                badge: "clerk" as const,
                rationale:
                  "Sessions, JWTs and OAuth all come handled, so I spent my time on the FIRE logic instead of the security plumbing.",
              },
              {
                badge: "typescript" as const,
                rationale:
                  "Strict mode throughout, and types run from the database schema to the UI, so changing the schema surfaces as a build error rather than a broken page.",
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
                <BrandMark className="text-primary mr-1" /> 01 · validation
              </p>
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Effect Schema, not Zod
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-prose mb-6">
                  Parasol uses Effect for services and error handling
                  throughout, so putting Zod alongside it meant two dependencies
                  covering the same ground - parsing, error types, pipeline
                  integration. Effect Schema maps <Code>ParseError</Code>{" "}
                  straight into Effect&apos;s typed error channel, where Zod
                  errors had to be bridged by hand outside it.
                </p>
                <div className="max-w-2xl">
                  <CodeBlock
                    language="typescript"
                    code={`// Zod: parse error escapes the typed pipeline
const result = schema.safeParse(input)
if (!result.success) return { error: result.error }
return doWork(result.data)

// Effect Schema: parse error is a typed value in the same pipeline
yield* Schema.decodeUnknown(InputSchema)(input).pipe(
  Effect.mapError((e) => new DbError({ cause: e })),
  Effect.flatMap(doWork)
)`}
                  />
                </div>
              </div>
            </div>

            <div className="md:grid md:grid-cols-[11rem_1fr] md:gap-x-12">
              <p className="font-mono text-sm text-secondary mb-2 md:mb-0">
                <BrandMark className="text-primary mr-1" /> 02 · forms
              </p>
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Explicit save for financial settings
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-prose">
                  Preferences (currency, locale) use debounced auto-save, but
                  plan settings (withdrawal rate, expected return, inflation)
                  wait for an explicit save button, because a numeric field
                  passes through invalid states while you type it -{" "}
                  <Code>&quot;4.&quot;</Code> on the way to{" "}
                  <Code>&quot;4.5%&quot;</Code>. Auto-saving at that moment
                  would quietly corrupt every downstream FIRE projection, so a
                  stale-but-complete value beats a live-but-partial one.
                </p>
              </div>
            </div>

            <div className="md:grid md:grid-cols-[11rem_1fr] md:gap-x-12">
              <p className="font-mono text-sm text-secondary mb-2 md:mb-0">
                <BrandMark className="text-primary mr-1" /> 03 · performance
              </p>
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  CSS :has() over React hover state
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-prose mb-6">
                  Dense transaction and portfolio lists need one element to
                  respond when a sibling is hovered - a row highlighting when
                  its action button is hovered, for example. Track that with{" "}
                  <Code>useState</Code> and <Code>onMouseEnter</Code>/
                  <Code>onMouseLeave</Code> and every hover event re-renders
                  every row, so the rule lives in CSS instead, where it costs no
                  JS at all and works with React Compiler optimisations.
                </p>
                <div className="max-w-2xl">
                  <CodeBlock
                    language="css"
                    code={`/* Dim all rows in the group when any row is hovered */
.row-group:has([data-row-id]:hover) [data-row-id] {
  opacity: 0.5;
}

/* Keep the hovered row at full opacity */
.row-group [data-row-id]:hover {
  opacity: 1;
}`}
                  />
                </div>
              </div>
            </div>

            <div className="md:grid md:grid-cols-[11rem_1fr] md:gap-x-12">
              <p className="font-mono text-sm text-secondary mb-2 md:mb-0">
                <BrandMark className="text-primary mr-1" /> 04 · data model
              </p>
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Transaction price is a snapshot, not a reference
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-prose">
                  A holding carries two prices - what you paid for it (cost
                  basis) and what it&apos;s worth now (market close) - and
                  conflating them quietly corrupts every unrealised gain
                  calculation. <Code>transaction.pricePerUnit</Code> is the
                  price you paid at trade time and it never changes once
                  recorded, while <Code>security_prices.adjustedClose</Code> is
                  nightly market close data from Yahoo Finance. Neither ever
                  stands in for the other, so P&L takes its cost basis from{" "}
                  <Code>pricePerUnit</Code> and current portfolio value comes
                  from <Code>adjustedClose</Code>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-20">
          <Colophon>
            <p>
              Parasol is something I designed and built. I co-wrote the write-up
              with Claude, and any description of how it works is mine, checked
              against the source before it went up.
            </p>
          </Colophon>
        </div>
      </div>
    </>
  );
}
