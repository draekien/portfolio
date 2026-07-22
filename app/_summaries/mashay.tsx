import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
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
import {
  Carousel,
  CarouselContent,
  CarouselControls,
  CarouselItem,
} from "@/components/ui/carousel";

export function MashaySummary() {
  return (
    <ProjectSummary
      id="mashay"
      className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-start"
    >
      <div className="space-y-6">
        <ProjectSummaryHeader>
          <ProjectSummaryTitle>mashay</ProjectSummaryTitle>
          <ProjectSummaryHook>
            I had a pile of Markdown notes and no desire to pay an LLM to
            reformat text that never changes. So I built a converter that turns
            them into polished, self-contained HTML for free.
          </ProjectSummaryHook>
          <ProjectSummaryDescription>
            A CLI that renders Markdown into a single HTML document with every
            style, logo, and image inlined into one file. A pluggable template
            and theme system, GitHub- and Obsidian-flavoured Markdown, automatic
            heading numbering, and Mermaid diagrams all come out of plain
            frontmatter and syntax.
          </ProjectSummaryDescription>
        </ProjectSummaryHeader>
        <InstallCommand command="npx @draekien/mashay process ./docs" />
        <ProjectSummaryAttributeList>
          <ProjectSummaryAttribute>@targets</ProjectSummaryAttribute>
          <ProjectSummaryAttributeValue className="flex gap-2 flex-wrap">
            <FrameworkBadge version="node" />
            <FrameworkBadge version="typescript" />
          </ProjectSummaryAttributeValue>
          <ProjectSummaryAttribute>@repository</ProjectSummaryAttribute>
          <ProjectSummaryAttributeValue>
            <ButtonLink
              link={{
                href: "https://github.com/draekien/mashay",
                target: "_blank",
                rel: "noopener noreferrer",
              }}
              external
            >
              github/mashay
            </ButtonLink>
          </ProjectSummaryAttributeValue>
        </ProjectSummaryAttributeList>
        <ButtonLink internal link={{ href: "/projects/mashay" }}>
          View case study →
        </ButtonLink>
      </div>
      <ProjectSummaryCodeBlock>
        <Carousel opts={{ loop: true }} keyboard={false} className="w-full">
          <CarouselContent>
            <CarouselItem>
              <Image
                src="/mashay-hero.png"
                alt="A mashay-rendered document with a navy masthead, status badge, metadata grid, and a numbered table of contents"
                width={1440}
                height={900}
                className="w-full h-auto rounded-lg border border-border"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/mashay-feature.png"
                alt="A mashay-rendered document showing a Mermaid flowchart and a code block with a language label and filename"
                width={1440}
                height={900}
                className="w-full h-auto rounded-lg border border-border"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselControls />
        </Carousel>
      </ProjectSummaryCodeBlock>
    </ProjectSummary>
  );
}
