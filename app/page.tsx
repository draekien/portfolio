import { ButtonLink } from "@/components/button-link";
import { Code } from "@/components/code";
import { CodeBlock } from "@/components/code-block";
import { FrameworkBadge } from "@/components/framework-badge";
import {
  ProjectSummary,
  ProjectSummaryAttribute,
  ProjectSummaryAttributeList,
  ProjectSummaryAttributeValue,
  ProjectSummaryCodeBlock,
  ProjectSummaryDescription,
  ProjectSummaryHeader,
  ProjectSummaryTitle,
} from "@/components/project-summary";

export default function Page() {
  return (
    <>
      <section
        id="hero"
        className="flex flex-col justify-center h-[70dvh] container mx-auto"
      >
        <div className="select-none space-y-4">
          <h1 className="font-mono text-4xl md:text-7xl font-medium tracking-tight leading-snug">
            <span>Technical Lead</span>{" "}
            <span className="text-muted-foreground/70">at InfoTrack</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-prose">
            I set technical direction and develop the engineers who execute it
            into the ones who define it next.
          </p>
        </div>
      </section>
      <section className="container mx-auto space-y-16 min-h-[80dvh]">
        <ProjectSummary
          id="waystone-monads"
          className="grid grid-cols-1 md:grid-cols-2 gap-2  items-start"
        >
          <ProjectSummaryHeader>
            <ProjectSummaryTitle>Waystone.Monads</ProjectSummaryTitle>
            <ProjectSummaryDescription>
              A .NET implementation of functional programming patterns inspired
              by Rust&apos;s standard library, specifically the{" "}
              <Code>{"Option<T>"}</Code> and <Code>{"Result<T, E>"}</Code>{" "}
              monads. This library provides a type-safe, composable approach to
              handling nullable values and error cases.
            </ProjectSummaryDescription>
          </ProjectSummaryHeader>
          <ProjectSummaryAttributeList className="row-start-2">
            <ProjectSummaryAttribute>@frameworks</ProjectSummaryAttribute>
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
            <ProjectSummaryAttribute>@documentation</ProjectSummaryAttribute>
            <ProjectSummaryAttributeValue>
              <ButtonLink
                link={{
                  href: "https://draekien-industries.wpei.me/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                }}
                external
              >
                gitbook
              </ButtonLink>
            </ProjectSummaryAttributeValue>
          </ProjectSummaryAttributeList>
          <ProjectSummaryCodeBlock className="md:col-start-2 md:row-span-2">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-2 items-start"
        >
          <ProjectSummaryHeader>
            <ProjectSummaryTitle>Waystone.WideLogEvents</ProjectSummaryTitle>
            <ProjectSummaryDescription>
              A sophisticated logging pattern implementation designed to solve a
              fundamental challenge in modern distributed systems: context
              correlation at scale. This library enables developers to
              accumulate all relevant information throughout a logical operation
              and emit it as a single, rich log event rather than fragmented
              events across an application&apos;s lifecycle.
            </ProjectSummaryDescription>
          </ProjectSummaryHeader>
          <ProjectSummaryAttributeList className="row-start-2">
            <ProjectSummaryAttribute>@frameworks</ProjectSummaryAttribute>
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
            <ProjectSummaryAttribute>@documentation</ProjectSummaryAttribute>
            <ProjectSummaryAttributeValue>
              <ButtonLink
                link={{
                  href: "https://draekien-industries.wpei.me/waystone.widelogevents",
                  target: "_blank",
                  rel: "noopener noreferrer",
                }}
                external
              >
                gitbook
              </ButtonLink>
            </ProjectSummaryAttributeValue>
          </ProjectSummaryAttributeList>
          <ProjectSummaryCodeBlock className="md:col-start-2 md:row-span-2">
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
      </section>
      <section
        id="contact"
        className="container mx-auto py-24 md:py-32 min-h-[40dvh] flex flex-col justify-center"
      >
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
          Let&apos;s work together.
        </h2>
        <p className="max-w-prose text-muted-foreground mb-8">
          I&apos;m a Technical Lead at InfoTrack, focused on engineering culture,
          platform quality, and shipping things that matter. If you&apos;re
          looking for someone who brings both technical depth and team
          leadership, reach out.
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
