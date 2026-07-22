import Image from "next/image";
import { ArticleRow } from "@/components/article-row";
import { BrandMark } from "@/components/brand-mark";
import { ButtonLink } from "@/components/button-link";
import { JsonLd } from "@/components/json-ld";
import {
  ProjectSummaryAttribute,
  ProjectSummaryAttributeList,
  ProjectSummaryAttributeValue,
} from "@/components/project-summary";
import { SectionNav } from "@/components/section-nav";
import { getAllArticles } from "@/lib/articles";
import { NorthShoreMeditationSummary } from "./_summaries/north-shore-meditation";
import { ParasolSummary } from "./_summaries/parasol";
import { SkillsSummary } from "./_summaries/skills";
import { WaystoneMonadsSummary } from "./_summaries/waystone-monads";
import { WaystoneWideLogEventsSummary } from "./_summaries/waystone-wide-log-events";
import structuredData from "./structured-data.json" with { type: "json" };

export default async function Page() {
  const latestArticles = (await getAllArticles()).slice(0, 3);

  return (
    <>
      <JsonLd data={structuredData} />
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
            <span>Solution Architect</span>{" "}
            <span className="text-secondary">at InfoTrack</span>
          </h1>
          <div className="space-y-3 max-w-prose">
            <p className="text-lg md:text-xl">
              I design the systems teams build on, and develop the engineers who
              execute the direction into the ones who define it next.
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
          <ParasolSummary />
          <NorthShoreMeditationSummary />
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
          <SkillsSummary />
          <WaystoneMonadsSummary />
          <WaystoneWideLogEventsSummary />
        </div>
      </section>

      <section id="writing" className="container mx-auto pt-16 pb-24">
        <div className="flex items-center gap-4 mb-16">
          <BrandMark className="text-primary shrink-0" />
          <hr className="flex-1 border-border" />
          <p className="font-mono text-sm text-secondary tracking-wider shrink-0">
            writing
          </p>
          <BrandMark className="text-primary shrink-0" />
        </div>
        <div>
          {latestArticles.map((article) => (
            <ArticleRow key={article.slug} article={article} />
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink internal link={{ href: "/articles" }}>
            Read all articles →
          </ButtonLink>
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
          I take on consulting and contract work alongside my role at InfoTrack:
          distributed .NET systems, TypeScript, developer tooling, and
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
