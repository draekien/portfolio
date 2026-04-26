import Image from "next/image";
import { BrandMark } from "@/components/brand-mark";
import { ButtonLink } from "@/components/button-link";
import { Code } from "@/components/code";
import { CodeBlock } from "@/components/code-block";
import { ExpandableInstallCommand } from "@/components/expandable-install-command";
import { FrameworkBadge } from "@/components/framework-badge";
import {
  ProjectSummary,
  ProjectSummaryAttribute,
  ProjectSummaryAttributeList,
  ProjectSummaryAttributeValue,
  ProjectSummaryCodeBlock,
  ProjectSummaryDescription,
  ProjectSummaryHeader,
  ProjectSummaryHook,
  ProjectSummaryTitle,
} from "@/components/project-summary";
import { SectionNav } from "@/components/section-nav";
import {
  Carousel,
  CarouselContent,
  CarouselControls,
  CarouselItem,
} from "@/components/ui/carousel";

function InstallCommand({ command }: { command: string }) {
  return (
    <div className="flex items-center gap-3 bg-muted rounded-md px-4 py-2.5 font-mono text-sm">
      <span className="text-secondary select-none" aria-hidden="true">
        $
      </span>
      <span className="text-foreground">{command}</span>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <section
        id="hero"
        className="flex flex-col justify-center h-[calc(100svh-var(--header-height)-4rem)] container mx-auto"
      >
        <div>
          <Image
            src="/mark.svg"
            alt=""
            width={80}
            height={54}
            className="h-8 w-auto mb-4 md:h-12 md:mb-6"
            aria-hidden="true"
          />
          <h1 className="font-mono text-4xl md:text-7xl font-medium tracking-tight leading-tight mb-8 md:mb-12">
            <span>Technical Lead</span>{" "}
            <span className="text-secondary">at InfoTrack</span>
          </h1>
          <div className="space-y-3 max-w-prose">
            <p className="text-lg md:text-xl">
              I set technical direction and develop the engineers who execute it
              into the ones who define it next.
            </p>
            <p className="text-base text-muted-foreground">
              Shipping full-stack systems and open-source libraries used in
              production across distributed .NET services.
            </p>
          </div>
        </div>
      </section>

      <SectionNav />

      <section id="applications" className="container mx-auto pt-16 pb-24">
        <div className="flex items-center gap-4 mb-16">
          <BrandMark className="text-primary shrink-0" />
          <hr className="flex-1 border-border" />
          <p className="font-mono text-sm text-secondary tracking-wider shrink-0">
            applications
          </p>
          <BrandMark className="text-primary shrink-0" />
        </div>
        <div className="space-y-24">
          <ProjectSummary
            id="parasol"
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-start"
          >
            <div className="space-y-6">
              <ProjectSummaryHeader>
                <ProjectSummaryTitle>Parasol</ProjectSummaryTitle>
                <ProjectSummaryHook>
                  I wanted to track my path to financial independence without
                  handing a fintech app open banking access. Parasol is a
                  private FIRE calculator that keeps your data yours.
                </ProjectSummaryHook>
                <ProjectSummaryDescription>
                  A SaaS application for tracking Financial Independence, Retire
                  Early (FIRE) progress. Built with TanStack Start for type-safe
                  full-stack routing, Neon for serverless Postgres, and Clerk
                  for auth — so the infrastructure scales to zero when
                  you&apos;re not using it.
                </ProjectSummaryDescription>
              </ProjectSummaryHeader>
              <ProjectSummaryAttributeList>
                <ProjectSummaryAttribute>@frameworks</ProjectSummaryAttribute>
                <ProjectSummaryAttributeValue className="flex gap-2 flex-wrap">
                  <FrameworkBadge version="tanstack-start" />
                  <FrameworkBadge version="neon" />
                  <FrameworkBadge version="clerk" />
                  <FrameworkBadge version="typescript" />
                </ProjectSummaryAttributeValue>
                <ProjectSummaryAttribute>@live</ProjectSummaryAttribute>
                <ProjectSummaryAttributeValue>
                  <ButtonLink
                    link={{
                      href: "https://parasol.wpei.me",
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }}
                    external
                  >
                    parasol.wpei.me
                  </ButtonLink>
                </ProjectSummaryAttributeValue>
              </ProjectSummaryAttributeList>
              <ButtonLink internal link={{ href: "/projects/parasol" }}>
                Read case study →
              </ButtonLink>
            </div>
            <ProjectSummaryCodeBlock>
              <Carousel opts={{ loop: true }}>
                <CarouselContent>
                  <CarouselItem>
                    <Image
                      src="/parasol-hero-dark-mobile.webp"
                      alt="Parasol — FIRE tracking dashboard"
                      width={375}
                      height={812}
                      className="hidden dark:block sm:dark:hidden w-full h-auto rounded-lg"
                      priority
                    />
                    <Image
                      src="/parasol-hero-light-mobile.webp"
                      alt="Parasol — FIRE tracking dashboard"
                      width={375}
                      height={812}
                      className="block dark:hidden sm:hidden w-full h-auto rounded-lg"
                      priority
                    />
                    <Image
                      src="/parasol-hero-dark.webp"
                      alt="Parasol — FIRE tracking dashboard"
                      width={2259}
                      height={1316}
                      className="hidden sm:dark:block w-full h-auto rounded-lg"
                      priority
                    />
                    <Image
                      src="/parasol-hero-light.webp"
                      alt="Parasol — FIRE tracking dashboard"
                      width={2259}
                      height={1316}
                      className="hidden sm:block sm:dark:hidden w-full h-auto rounded-lg"
                      priority
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="/parasol-feature-dark-mobile.webp"
                      alt="Parasol — portfolio and progress features"
                      width={375}
                      height={812}
                      className="hidden dark:block sm:dark:hidden w-full h-auto rounded-lg"
                    />
                    <Image
                      src="/parasol-feature-light-mobile.webp"
                      alt="Parasol — portfolio and progress features"
                      width={375}
                      height={812}
                      className="block dark:hidden sm:hidden w-full h-auto rounded-lg"
                    />
                    <Image
                      src="/parasol-feature-dark.webp"
                      alt="Parasol — portfolio and progress features"
                      width={2259}
                      height={1316}
                      className="hidden sm:dark:block w-full h-auto rounded-lg"
                    />
                    <Image
                      src="/parasol-feature-light.webp"
                      alt="Parasol — portfolio and progress features"
                      width={2259}
                      height={1316}
                      className="hidden sm:block sm:dark:hidden w-full h-auto rounded-lg"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselControls />
              </Carousel>
            </ProjectSummaryCodeBlock>
          </ProjectSummary>

          <ProjectSummary
            id="north-shore-meditation"
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-start"
          >
            <div className="space-y-6">
              <ProjectSummaryHeader>
                <ProjectSummaryTitle>
                  North Shore Meditation
                </ProjectSummaryTitle>
                <ProjectSummaryHook>
                  The owner wanted to publish events and articles without filing
                  a ticket. I built them a CMS-driven site where they own their
                  content end-to-end.
                </ProjectSummaryHook>
                <ProjectSummaryDescription>
                  A marketing site for a Transcendental Meditation centre on
                  Sydney&apos;s North Shore. Built with Next.js and Contentful
                  so the owner can schedule events, publish practitioner notes,
                  and manage page content without touching code. Contact form
                  submissions are delivered via Resend.
                </ProjectSummaryDescription>
              </ProjectSummaryHeader>
              <ProjectSummaryAttributeList>
                <ProjectSummaryAttribute>@frameworks</ProjectSummaryAttribute>
                <ProjectSummaryAttributeValue className="flex gap-2 flex-wrap">
                  <FrameworkBadge version="nextjs" />
                  <FrameworkBadge version="contentful" />
                  <FrameworkBadge version="resend" />
                  <FrameworkBadge version="typescript" />
                </ProjectSummaryAttributeValue>
                <ProjectSummaryAttribute>@live</ProjectSummaryAttribute>
                <ProjectSummaryAttributeValue>
                  <ButtonLink
                    link={{
                      href: "https://www.northshoremeditation.au/en",
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }}
                    external
                  >
                    northshoremeditation.au
                  </ButtonLink>
                </ProjectSummaryAttributeValue>
              </ProjectSummaryAttributeList>
              <ButtonLink
                internal
                link={{ href: "/projects/north-shore-meditation" }}
              >
                Read case study →
              </ButtonLink>
            </div>
            <ProjectSummaryCodeBlock>
              <Carousel opts={{ loop: true }}>
                <CarouselContent>
                  <CarouselItem>
                    <Image
                      src="/north-shore-meditation-hero-dark-mobile.webp"
                      alt="North Shore Meditation — homepage hero"
                      width={375}
                      height={812}
                      className="hidden dark:block sm:dark:hidden w-full h-auto rounded-lg"
                      priority
                    />
                    <Image
                      src="/north-shore-meditation-hero-light-mobile.webp"
                      alt="North Shore Meditation — homepage hero"
                      width={375}
                      height={812}
                      className="block dark:hidden sm:hidden w-full h-auto rounded-lg"
                      priority
                    />
                    <Image
                      src="/north-shore-meditation-hero-dark.webp"
                      alt="North Shore Meditation — homepage hero"
                      width={2259}
                      height={1316}
                      className="hidden sm:dark:block w-full h-auto rounded-lg"
                      priority
                    />
                    <Image
                      src="/north-shore-meditation-hero-light.webp"
                      alt="North Shore Meditation — homepage hero"
                      width={2259}
                      height={1316}
                      className="hidden sm:block sm:dark:hidden w-full h-auto rounded-lg"
                      priority
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="/north-shore-meditation-science-dark-mobile.webp"
                      alt="North Shore Meditation — backed by science section"
                      width={375}
                      height={812}
                      className="hidden dark:block sm:dark:hidden w-full h-auto rounded-lg"
                    />
                    <Image
                      src="/north-shore-meditation-science-light-mobile.webp"
                      alt="North Shore Meditation — backed by science section"
                      width={375}
                      height={812}
                      className="block dark:hidden sm:hidden w-full h-auto rounded-lg"
                    />
                    <Image
                      src="/north-shore-meditation-science-dark.webp"
                      alt="North Shore Meditation — backed by science section"
                      width={2259}
                      height={1316}
                      className="hidden sm:dark:block w-full h-auto rounded-lg"
                    />
                    <Image
                      src="/north-shore-meditation-science-light.webp"
                      alt="North Shore Meditation — backed by science section"
                      width={2259}
                      height={1316}
                      className="hidden sm:block sm:dark:hidden w-full h-auto rounded-lg"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselControls />
              </Carousel>
            </ProjectSummaryCodeBlock>
          </ProjectSummary>
        </div>
      </section>

      <section id="libraries" className="container mx-auto pt-16 pb-24">
        <div className="flex items-center gap-4 mb-16">
          <BrandMark className="text-primary shrink-0" />
          <hr className="flex-1 border-border" />
          <p className="font-mono text-sm text-secondary tracking-wider shrink-0">
            libraries
          </p>
          <BrandMark className="text-primary shrink-0" />
        </div>
        <div className="space-y-24">
          <ProjectSummary
            id="waystone-monads"
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-start"
          >
            <div className="space-y-6">
              <ProjectSummaryHeader>
                <ProjectSummaryTitle>Waystone.Monads</ProjectSummaryTitle>
                <ProjectSummaryHook>
                  Null reference exceptions were costing my team production
                  incidents. I built idiomatic .NET monads to make impossible
                  states impossible at the type level.
                </ProjectSummaryHook>
                <ProjectSummaryDescription>
                  A .NET implementation of functional programming patterns
                  inspired by Rust&apos;s standard library, specifically the{" "}
                  <Code>{"Option<T>"}</Code> and <Code>{"Result<T, E>"}</Code>{" "}
                  monads. This library provides a type-safe, composable approach
                  to handling nullable values and error cases.
                </ProjectSummaryDescription>
              </ProjectSummaryHeader>
              <InstallCommand command="dotnet add package Waystone.Monads" />
              <ProjectSummaryAttributeList>
                <ProjectSummaryAttribute>@targets</ProjectSummaryAttribute>
                <ProjectSummaryAttributeValue className="flex gap-2">
                  <FrameworkBadge version="netstandard2.0" />
                </ProjectSummaryAttributeValue>
                <ProjectSummaryAttribute>@repository</ProjectSummaryAttribute>
                <ProjectSummaryAttributeValue>
                  <ButtonLink
                    link={{
                      href: "https://github.com/draekien-industries/waystone-dotnet",
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }}
                    external
                  >
                    github/waystone-dotnet
                  </ButtonLink>
                </ProjectSummaryAttributeValue>
              </ProjectSummaryAttributeList>
              <ButtonLink internal link={{ href: "/projects/waystone-monads" }}>
                View package docs →
              </ButtonLink>
            </div>
            <ProjectSummaryCodeBlock>
              <CodeBlock
                language="csharp"
                code={`// A user may or may not exist for a given id
Option<User> user = repository.Find(id);

// If a user is found, return it; otherwise return a 404 Not Found response
return user.Match(
    onSome: u => Results.Ok(u),
    onNone: () => Results.NotFound()
);`}
              />
            </ProjectSummaryCodeBlock>
          </ProjectSummary>

          <ProjectSummary
            id="waystone-wide-log-events"
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-start"
          >
            <div className="space-y-6">
              <ProjectSummaryHeader>
                <ProjectSummaryTitle>
                  Waystone.WideLogEvents
                </ProjectSummaryTitle>
                <ProjectSummaryHook>
                  Debugging distributed systems meant correlating dozens of
                  fragmented log entries per request. WideLogEvents flushes all
                  context as a single structured event, making traces trivial to
                  reason about.
                </ProjectSummaryHook>
                <ProjectSummaryDescription>
                  A sophisticated logging pattern implementation designed to
                  solve a fundamental challenge in modern distributed systems:
                  context correlation at scale. This library enables developers
                  to accumulate all relevant information throughout a logical
                  operation and emit it as a single, rich log event rather than
                  fragmented events across an application&apos;s lifecycle.
                </ProjectSummaryDescription>
              </ProjectSummaryHeader>
              <ExpandableInstallCommand />
              <ProjectSummaryAttributeList>
                <ProjectSummaryAttribute>@targets</ProjectSummaryAttribute>
                <ProjectSummaryAttributeValue className="flex gap-2 flex-wrap">
                  <FrameworkBadge version="netstandard2.0" />
                  <FrameworkBadge version="net8.0" />
                  <FrameworkBadge version="net10.0" />
                </ProjectSummaryAttributeValue>
                <ProjectSummaryAttribute>@repository</ProjectSummaryAttribute>
                <ProjectSummaryAttributeValue>
                  <ButtonLink
                    link={{
                      href: "https://github.com/draekien-industries/waystone-dotnet",
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }}
                    external
                  >
                    github/waystone-dotnet
                  </ButtonLink>
                </ProjectSummaryAttributeValue>
              </ProjectSummaryAttributeList>
              <ButtonLink
                internal
                link={{ href: "/projects/waystone-wide-log-events" }}
              >
                View package docs →
              </ButtonLink>
            </div>
            <ProjectSummaryCodeBlock>
              <CodeBlock
                language="csharp"
                code={`// Configure Serilog to use WideLogEventsContext
builder.Host.UseSerilog((context, config) => config
    .Enrich.FromWideLogEventsContext()
    .Filter.WithWideLogEventsSampling()
    .ReadFrom.Configuration(context.Configuration));

// One structured log entry per request
app.UseWideLogEventsContext();
app.UseSerilogRequestLogging();

// Push properties — all flush together at request end
WideLogEventContext.PushProperty("userId", userId);
WideLogEventContext.PushProperty("action", "checkout");`}
              />
            </ProjectSummaryCodeBlock>
          </ProjectSummary>
        </div>
      </section>

      <section id="contact" className="container mx-auto pt-16 pb-24">
        <div className="flex items-center gap-4 mb-16">
          <BrandMark className="text-primary shrink-0" />
          <hr className="flex-1 border-border" />
          <p className="font-mono text-sm text-secondary tracking-wider shrink-0">
            contact
          </p>
          <BrandMark className="text-primary shrink-0" />
        </div>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
          Let&apos;s work together.
        </h2>
        <p className="max-w-prose text-muted-foreground mb-8">
          I take on consulting and contract work alongside my role at InfoTrack
          — distributed .NET systems, TypeScript, developer tooling, and
          architecture. Open to open-source collaborations too. If what I build
          is relevant to your problem, reach out.
        </p>
        <ProjectSummaryAttributeList>
          <ProjectSummaryAttribute>@email</ProjectSummaryAttribute>
          <ProjectSummaryAttributeValue>
            <ButtonLink link={{ href: "mailto:hello@wpei.me" }} external>
              hello@wpei.me
            </ButtonLink>
          </ProjectSummaryAttributeValue>
          <ProjectSummaryAttribute>@linkedin</ProjectSummaryAttribute>
          <ProjectSummaryAttributeValue>
            <ButtonLink
              link={{
                href: "https://www.linkedin.com/in/wpei",
                target: "_blank",
                rel: "noopener noreferrer",
              }}
              external
            >
              linkedin/wpei
            </ButtonLink>
          </ProjectSummaryAttributeValue>
          <ProjectSummaryAttribute>@github</ProjectSummaryAttribute>
          <ProjectSummaryAttributeValue>
            <ButtonLink
              link={{
                href: "https://github.com/draekien",
                target: "_blank",
                rel: "noopener noreferrer",
              }}
              external
            >
              github/draekien
            </ButtonLink>
          </ProjectSummaryAttributeValue>
        </ProjectSummaryAttributeList>
      </section>
    </>
  );
}
