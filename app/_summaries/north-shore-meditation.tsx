import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
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
import {
  Carousel,
  CarouselContent,
  CarouselControls,
  CarouselItem,
} from "@/components/ui/carousel";

export function NorthShoreMeditationSummary() {
  return (
    <ProjectSummary
      id="north-shore-meditation"
      className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-start"
    >
      <div className="space-y-6">
        <ProjectSummaryHeader>
          <ProjectSummaryTitle>North Shore Meditation</ProjectSummaryTitle>
          <ProjectSummaryHook>
            The owner wanted to publish events and articles without filing a
            ticket. I built them a CMS-driven site where they own their content
            end-to-end.
          </ProjectSummaryHook>
          <ProjectSummaryDescription>
            A marketing site for a Transcendental Meditation centre on
            Sydney&apos;s North Shore. Built with Next.js and Contentful so the
            owner can schedule events, publish practitioner notes, and manage
            page content without touching code. Contact form submissions are
            delivered via Resend.
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
        <Carousel opts={{ loop: true }} keyboard={false}>
          <CarouselContent>
            <CarouselItem>
              <Image
                src="/north-shore-meditation-hero-dark-mobile.png"
                alt="North Shore Meditation: homepage hero"
                width={1179}
                height={2556}
                className="hidden dark:block sm:dark:hidden w-full h-auto rounded-lg"
                priority
              />
              <Image
                src="/north-shore-meditation-hero-light-mobile.png"
                alt="North Shore Meditation: homepage hero"
                width={1179}
                height={2556}
                className="block dark:hidden sm:hidden w-full h-auto rounded-lg"
                priority
              />
              <Image
                src="/north-shore-meditation-hero-dark.png"
                alt="North Shore Meditation: homepage hero"
                width={1920}
                height={1080}
                className="hidden sm:dark:block w-full h-auto rounded-lg"
                priority
              />
              <Image
                src="/north-shore-meditation-hero-light.png"
                alt="North Shore Meditation: homepage hero"
                width={1920}
                height={1080}
                className="hidden sm:block sm:dark:hidden w-full h-auto rounded-lg"
                priority
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/north-shore-meditation-science-dark-mobile.png"
                alt="North Shore Meditation: backed by science section"
                width={1179}
                height={2556}
                className="hidden dark:block sm:dark:hidden w-full h-auto rounded-lg"
              />
              <Image
                src="/north-shore-meditation-science-light-mobile.png"
                alt="North Shore Meditation: backed by science section"
                width={1179}
                height={2556}
                className="block dark:hidden sm:hidden w-full h-auto rounded-lg"
              />
              <Image
                src="/north-shore-meditation-science-dark.png"
                alt="North Shore Meditation: backed by science section"
                width={1920}
                height={1080}
                className="hidden sm:dark:block w-full h-auto rounded-lg"
              />
              <Image
                src="/north-shore-meditation-science-light.png"
                alt="North Shore Meditation: backed by science section"
                width={1920}
                height={1080}
                className="hidden sm:block sm:dark:hidden w-full h-auto rounded-lg"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselControls />
        </Carousel>
      </ProjectSummaryCodeBlock>
    </ProjectSummary>
  );
}
