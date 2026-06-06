import { ButtonLink } from "@/components/button-link";
import { Code } from "@/components/code";
import { CodeBlock } from "@/components/code-block";
import { FrameworkBadge } from "@/components/framework-badge";
import { InstallCommand } from "@/components/install-command";
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

export function WaystoneMonadsSummary() {
  return (
    <ProjectSummary
      id="waystone-monads"
      className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-start"
    >
      <div className="space-y-6">
        <ProjectSummaryHeader>
          <ProjectSummaryTitle>Waystone.Monads</ProjectSummaryTitle>
          <ProjectSummaryHook>
            Null reference exceptions were costing my team production incidents.
            I built idiomatic .NET monads to make impossible states impossible
            at the type level.
          </ProjectSummaryHook>
          <ProjectSummaryDescription>
            A .NET implementation of functional programming patterns inspired by
            Rust&apos;s standard library, specifically the{" "}
            <Code>{"Option<T>"}</Code> and <Code>{"Result<T, E>"}</Code> monads.
            This library provides a type-safe, composable approach to handling
            nullable values and error cases.
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
  );
}
