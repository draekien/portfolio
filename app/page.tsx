import { ButtonLink } from "@/components/button-link";
import { FrameworkBadge } from "@/components/framework-badge";
import Mark from "@/components/mark";
import {
  ProjectSummary,
  ProjectSummaryAttribute,
  ProjectSummaryAttributeList,
  ProjectSummaryAttributeValue,
  ProjectSummaryDescription,
  ProjectSummaryHeader,
  ProjectSummaryTitle,
} from "@/components/project-summary";
import { TextLoop, TextLoopRotatingText } from "@/components/text-loop";

export default function Page() {
  return (
    <>
      <section
        id="hero"
        className="flex flex-col justify-center h-[70dvh] container mx-auto"
      >
        <TextLoop className="select-none">
          <h1 className="font-mono">
            <span>Technical Lead</span>{" "}
            <span className="text-muted-foreground/70">at InfoTrack</span>
          </h1>
          <div className="flex items-center gap-2 md:gap-3 lg:gap-4 font-mono  text-xl md:text-3xl lg:text-5xl">
            <Mark className="h-5 md:h-7.5 lg:h-12 text-primary" />
            <TextLoopRotatingText
              rotatingTexts={[
                "Elevating Quality",
                "Improving Delivery",
                "Raising Standards",
                "Boosting Output",
                "Mentoring Engineers",
                "Coaching Growth",
                "Building Leaders",
                "Scaling Practices",
                "Improving Reliability",
                "Streamlining Delivery",
                "Setting Best Practices",
                "Growing Skills",
              ]}
            />
          </div>
        </TextLoop>
      </section>
      <section className="container mx-auto space-y-16">
        <ProjectSummary id="waystone-monads">
          <ProjectSummaryHeader>
            <ProjectSummaryTitle>Waystone.Monads</ProjectSummaryTitle>
            <ProjectSummaryDescription>
              A .NET implementation of functional programming patterns inspired
              by Rust's standard library, specifically the{" "}
              <code>{"Option<T>"}</code> and <code>{"Result<T, E>"}</code>{" "}
              monads. This library provides a type-safe, composable approach to
              handling nullable values and error cases.
            </ProjectSummaryDescription>
          </ProjectSummaryHeader>
          <ProjectSummaryAttributeList>
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
        </ProjectSummary>
        <ProjectSummary id="waystone-wide-log-events">
          <ProjectSummaryHeader>
            <ProjectSummaryTitle>Waystone.WideLogEvents</ProjectSummaryTitle>
            <ProjectSummaryDescription>
              A sophisticated logging pattern implementation designed to solve a
              fundamental challenge in modern distributed systems: context
              correlation at scale. This library enables developers to
              accumulate all relevant information throughout a logical operation
              and emit it as a single, rich log event rather than fragmented
              events across an application's lifecycle.
            </ProjectSummaryDescription>
          </ProjectSummaryHeader>
          <ProjectSummaryAttributeList>
            <ProjectSummaryAttribute>@frameworks</ProjectSummaryAttribute>
            <ProjectSummaryAttributeValue className="flex gap-2">
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
        </ProjectSummary>
      </section>
    </>
  );
}
