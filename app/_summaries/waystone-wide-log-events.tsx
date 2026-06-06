import { ButtonLink } from "@/components/button-link";
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

export function WaystoneWideLogEventsSummary() {
  return (
    <ProjectSummary
      id="waystone-wide-log-events"
      className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-start"
    >
      <div className="space-y-6">
        <ProjectSummaryHeader>
          <ProjectSummaryTitle>Waystone.WideLogEvents</ProjectSummaryTitle>
          <ProjectSummaryHook>
            Debugging distributed systems meant correlating dozens of fragmented
            log entries per request. WideLogEvents flushes all context as a
            single structured event, making traces trivial to reason about.
          </ProjectSummaryHook>
          <ProjectSummaryDescription>
            A sophisticated logging pattern implementation designed to solve a
            fundamental challenge in modern distributed systems: context
            correlation at scale. This library enables developers to accumulate
            all relevant information throughout a logical operation and emit it
            as a single, rich log event rather than fragmented events across an
            application&apos;s lifecycle.
          </ProjectSummaryDescription>
        </ProjectSummaryHeader>
        <ExpandableInstallCommand
          variants={[
            {
              label: "# core",
              command: "dotnet add package Waystone.WideLogEvents",
            },
            {
              label: "# serilog",
              command:
                "dotnet add package Serilog.Enrichers.Waystone.WideLogEvents",
            },
            {
              label: "# serilog + aspnetcore",
              command:
                "dotnet add package Serilog.Enrichers.Waystone.WideLogEvents.AspNetCore",
            },
          ]}
        />
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

// Push properties, all flush together at request end
WideLogEventContext.PushProperty("userId", userId);
WideLogEventContext.PushProperty("action", "checkout");`}
        />
      </ProjectSummaryCodeBlock>
    </ProjectSummary>
  );
}
