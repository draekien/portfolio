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

export function ParasolSummary() {
  return (
    <ProjectSummary
      id="parasol"
      className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-start"
    >
      <div className="space-y-6">
        <ProjectSummaryHeader>
          <ProjectSummaryTitle>Parasol</ProjectSummaryTitle>
          <ProjectSummaryHook>
            I wanted to track my path to financial independence without handing
            a fintech app open banking access. Parasol is a private FIRE
            calculator that keeps your data yours.
          </ProjectSummaryHook>
          <ProjectSummaryDescription>
            A SaaS application for tracking Financial Independence, Retire Early
            (FIRE) progress. Built with TanStack Start for type-safe full-stack
            routing, Neon for serverless Postgres, and Clerk for auth, so the
            infrastructure scales to zero when you&apos;re not using it.
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
        <Carousel opts={{ loop: true }} keyboard={false}>
          <CarouselContent>
            <CarouselItem>
              <Image
                src="/parasol-hero-dark-mobile.png"
                alt="Parasol: FIRE tracking dashboard"
                width={1179}
                height={2556}
                className="hidden dark:block sm:dark:hidden w-full h-auto rounded-lg"
                priority
              />
              <Image
                src="/parasol-hero-light-mobile.png"
                alt="Parasol: FIRE tracking dashboard"
                width={1179}
                height={2556}
                className="block dark:hidden sm:hidden w-full h-auto rounded-lg"
                priority
              />
              <Image
                src="/parasol-hero-dark.png"
                alt="Parasol: FIRE tracking dashboard"
                width={1920}
                height={1080}
                className="hidden sm:dark:block w-full h-auto rounded-lg"
                priority
              />
              <Image
                src="/parasol-hero-light.png"
                alt="Parasol: FIRE tracking dashboard"
                width={1920}
                height={1080}
                className="hidden sm:block sm:dark:hidden w-full h-auto rounded-lg"
                priority
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/parasol-feature-dark-mobile.png"
                alt="Parasol: portfolio and progress features"
                width={1179}
                height={2556}
                className="hidden dark:block sm:dark:hidden w-full h-auto rounded-lg"
              />
              <Image
                src="/parasol-feature-light-mobile.png"
                alt="Parasol: portfolio and progress features"
                width={1179}
                height={2556}
                className="block dark:hidden sm:hidden w-full h-auto rounded-lg"
              />
              <Image
                src="/parasol-feature-dark.png"
                alt="Parasol: portfolio and progress features"
                width={1920}
                height={1080}
                className="hidden sm:dark:block w-full h-auto rounded-lg"
              />
              <Image
                src="/parasol-feature-light.png"
                alt="Parasol: portfolio and progress features"
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
