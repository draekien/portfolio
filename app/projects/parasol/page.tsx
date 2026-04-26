import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { ButtonLink } from "@/components/button-link";
import {
  ProjectSectionDivider,
  ProjectSectionHeading,
} from "@/components/project-section";
import { Code } from "@/components/code";
import { CodeBlock } from "@/components/code-block";
import { FrameworkBadge } from "@/components/framework-badge";
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
    <div className="container mx-auto py-12 md:py-20">
      <Breadcrumb className="mb-12">
        <BreadcrumbList className="font-mono text-sm">
          <BreadcrumbItem>
            <BreadcrumbLink render={<Link href="/" />}>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <BrandMark className="text-primary" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Parasol</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <header className="mb-16 space-y-6 max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          <BrandMark className="text-primary mr-3" />
          Parasol
        </h1>
        <p className="text-lg md:text-xl text-foreground leading-relaxed">
          A private FIRE calculator that keeps your data yours — no open banking
          access required.
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
                src="/parasol-hero-dark-mobile.webp"
                alt="Parasol dashboard showing net worth target, progress toward financial independence, and portfolio allocation"
                width={375}
                height={812}
                className="hidden dark:block sm:dark:hidden w-full h-auto rounded-lg"
                priority
              />
              <Image
                src="/parasol-hero-light-mobile.webp"
                alt="Parasol dashboard showing net worth target, progress toward financial independence, and portfolio allocation"
                width={375}
                height={812}
                className="block dark:hidden sm:hidden w-full h-auto rounded-lg"
                priority
              />
              <Image
                src="/parasol-hero-dark.webp"
                alt="Parasol dashboard showing net worth target, progress toward financial independence, and portfolio allocation"
                width={2259}
                height={1316}
                className="hidden sm:dark:block w-full h-auto rounded-lg"
                priority
              />
              <Image
                src="/parasol-hero-light.webp"
                alt="Parasol dashboard showing net worth target, progress toward financial independence, and portfolio allocation"
                width={2259}
                height={1316}
                className="hidden sm:block sm:dark:hidden w-full h-auto rounded-lg"
                priority
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/parasol-feature-dark-mobile.webp"
                alt="Parasol portfolio view showing transaction history with cost basis, market value, and unrealised gain columns"
                width={375}
                height={812}
                className="hidden dark:block sm:dark:hidden w-full h-auto rounded-lg"
              />
              <Image
                src="/parasol-feature-light-mobile.webp"
                alt="Parasol portfolio view showing transaction history with cost basis, market value, and unrealised gain columns"
                width={375}
                height={812}
                className="block dark:hidden sm:hidden w-full h-auto rounded-lg"
              />
              <Image
                src="/parasol-feature-dark.webp"
                alt="Parasol portfolio view showing transaction history with cost basis, market value, and unrealised gain columns"
                width={2259}
                height={1316}
                className="hidden sm:dark:block w-full h-auto rounded-lg"
              />
              <Image
                src="/parasol-feature-light.webp"
                alt="Parasol portfolio view showing transaction history with cost basis, market value, and unrealised gain columns"
                width={2259}
                height={1316}
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
              Every FIRE calculator I found required connecting to my bank
              accounts via open banking. I didn&apos;t want a third-party app
              holding read access to my financial data just to run projections I
              could compute myself.
            </p>
            <p>
              I wanted something I owned end-to-end: my data in my database,
              behind my auth, accessible only to me.
            </p>
          </div>
        </section>

        <section>
          <ProjectSectionHeading>Solution</ProjectSectionHeading>
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-prose">
            <p>
              Parasol is a manual-entry FIRE tracker. You input your portfolio
              values, income, expenses, and target. It projects your path to
              financial independence using the 4% rule and tracks your progress
              over time.
            </p>
            <p>
              The infrastructure scales to zero when you&apos;re not using it —
              no idle costs, no maintenance overhead.
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
                "Type-safe full-stack routing with SSR and server functions. Every API boundary is typed end-to-end — no client/server mental split.",
            },
            {
              badge: "neon" as const,
              rationale:
                "Serverless Postgres that scales to zero between sessions. No idle costs for a personal project with sparse usage.",
            },
            {
              badge: "clerk" as const,
              rationale:
                "Sessions, JWTs, OAuth — handled. I focused on the FIRE logic, not the security plumbing.",
            },
            {
              badge: "typescript" as const,
              rationale:
                "Strict mode throughout. Type-safe from DB schema to UI — schema changes surface as build errors.",
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
              <BrandMark className="text-primary mr-1" /> 01 — validation
            </p>
            <div>
              <h3 className="text-lg font-semibold mb-3">Effect Schema, not Zod</h3>
              <p className="text-muted-foreground leading-relaxed max-w-prose mb-6">
                The project uses Effect for services and error handling throughout.
                Introducing Zod alongside it created dual dependency for overlapping
                concerns — parsing, error types, pipeline integration. Effect Schema
                maps <Code>ParseError</Code> directly into Effect&apos;s typed error
                channel; Zod errors required manual bridging outside it.
              </p>
              <div className="max-w-2xl">
                <CodeBlock
                  language="typescript"
                  code={`// Zod — parse error escapes the typed pipeline
const result = schema.safeParse(input)
if (!result.success) return { error: result.error }
return doWork(result.data)

// Effect Schema — parse error is a typed value in the same pipeline
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
              <BrandMark className="text-primary mr-1" /> 02 — forms
            </p>
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Explicit save for financial settings
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-prose">
                Preferences (currency, locale) use debounced auto-save. Plan
                settings — withdrawal rate, expected return, inflation — use an
                explicit save button. Numeric fields pass through intermediate
                invalid states while typing: <Code>&quot;4.&quot;</Code> mid-entry
                of <Code>&quot;4.5%&quot;</Code>. Auto-saving at that moment would
                silently corrupt every downstream FIRE projection. Stale-but-complete
                beats live-but-partial.
              </p>
            </div>
          </div>

          <div className="md:grid md:grid-cols-[11rem_1fr] md:gap-x-12">
            <p className="font-mono text-sm text-secondary mb-2 md:mb-0">
              <BrandMark className="text-primary mr-1" /> 03 — performance
            </p>
            <div>
              <h3 className="text-lg font-semibold mb-3">
                CSS :has() over React hover state
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-prose mb-6">
                Dense transaction and portfolio lists need one element to respond
                when a sibling is hovered — row highlight when an action button is
                hovered, for example. Tracking this with <Code>useState</Code> and{" "}
                <Code>onMouseEnter</Code>/<Code>onMouseLeave</Code> triggers
                re-renders on every hover event across every row. The CSS approach
                is zero JS overhead and works with React Compiler optimisations.
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
              <BrandMark className="text-primary mr-1" /> 04 — data model
            </p>
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Transaction price is a snapshot, not a reference
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-prose">
                In a trading context there are two distinct prices: what you paid
                (cost basis) and what it&apos;s worth now (market close).
                Conflating them silently corrupts unrealised gain calculations.{" "}
                <Code>transaction.pricePerUnit</Code> is the price the user paid at
                trade time — it never changes after recording.{" "}
                <Code>security_prices.adjustedClose</Code> is nightly market close
                data from Yahoo Finance. These serve different purposes and are
                never substituted: P&L uses cost basis from{" "}
                <Code>pricePerUnit</Code>; current portfolio value uses{" "}
                <Code>adjustedClose</Code>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
