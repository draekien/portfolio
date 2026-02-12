import { ButtonLink } from "@/components/button-link";
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
import { Button } from "@/components/ui/button";

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
      <section className="container mx-auto">
        <ProjectSummary id="waystone-monads">
          <ProjectSummaryHeader>
            <ProjectSummaryTitle>Waystone.Monads</ProjectSummaryTitle>
            <ProjectSummaryDescription>
              A C# library that provides an implementation of the{" "}
              <code>Option</code> and <code>Result</code> monads. This library
              was born out of a desire to bring the elegance and safety of
              Rust's monadic types to the C# ecosystem.
            </ProjectSummaryDescription>
          </ProjectSummaryHeader>
          <ProjectSummaryAttributeList>
            <ProjectSummaryAttribute>@framework</ProjectSummaryAttribute>
            <ProjectSummaryAttributeValue>
              netstandard2.0
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
