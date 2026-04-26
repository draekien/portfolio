import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { ButtonLink } from "@/components/button-link";
import { FrameworkBadge } from "@/components/framework-badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const metadata: Metadata = {
  title: "North Shore Meditation | William Pei",
  description:
    "A CMS-driven marketing site built with Next.js and Contentful for a Sydney meditation centre.",
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-semibold mb-6">
      <BrandMark className="text-primary mr-2" />
      {children}
    </h2>
  );
}

export default function NorthShoreMeditationPage() {
  return (
    <div className="container mx-auto py-12 md:py-20">
      <Breadcrumb className="mb-12">
        <BreadcrumbList className="font-mono text-sm">
          <BreadcrumbItem>
            <BreadcrumbLink render={<Link href="/" />}>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <BrandMark className="text-primary" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>North Shore Meditation</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <header className="mb-16 space-y-6 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          <BrandMark className="text-primary mr-3" />
          North Shore Meditation
        </h1>
        <p className="text-lg md:text-xl text-foreground leading-relaxed">
          A site the client can actually maintain — events, articles, and page
          content managed entirely from their dashboard.
        </p>
        <div className="flex items-center gap-3 flex-wrap">
          <FrameworkBadge version="nextjs" />
          <FrameworkBadge version="contentful" />
          <FrameworkBadge version="resend" />
          <FrameworkBadge version="typescript" />
        </div>
        <div className="flex gap-4">
          <ButtonLink
            link={{
              href: "https://www.northshoremeditation.au/en",
              target: "_blank",
              rel: "noopener noreferrer",
            }}
            external
            variant="outline"
            className="h-9 px-4"
          >
            View live →
          </ButtonLink>
        </div>
      </header>

      <section className="mb-20">
        <Carousel opts={{ loop: true }} className="w-full">
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
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 mb-20">
        <section>
          <SectionHeading>Problem</SectionHeading>
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-prose">
            <p>
              The centre ran events regularly and published practitioner notes,
              but updating the site meant filing a request with a developer.
              Every content change was a bottleneck.
            </p>
            <p>
              The client needed to own their content — publish events on their
              schedule, write articles when the moment was right, and update
              page copy without friction.
            </p>
          </div>
        </section>

        <section>
          <SectionHeading>Solution</SectionHeading>
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-prose">
            <p>
              A headless CMS architecture where Contentful handles all content
              authoring and Next.js renders it. The client works entirely in
              Contentful&apos;s dashboard — no code, no deployments, no tickets.
            </p>
            <p>
              ISR keeps the site fast without sacrificing freshness. New
              Contentful publishes trigger revalidation; stale content is never
              served for long.
            </p>
          </div>
        </section>
      </div>

      <section className="mb-20">
        <SectionHeading>Tech stack</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 max-w-3xl">
          {[
            {
              badge: "nextjs" as const,
              rationale:
                "App Router with ISR. Static for performance, revalidated on each Contentful publish. Fast initial load, always fresh content.",
            },
            {
              badge: "contentful" as const,
              rationale:
                "Headless CMS with a typed content model. Events, articles, and page sections are all structured entries the client manages independently.",
            },
            {
              badge: "resend" as const,
              rationale:
                "Reliable transactional email for contact form submissions. Simple API with strong deliverability — no SMTP configuration.",
            },
            {
              badge: "typescript" as const,
              rationale:
                "Typed Contentful content models. Schema changes surface as build errors before they can cause runtime surprises in production.",
            },
          ].map(({ badge, rationale }) => (
            <div key={badge} className="space-y-2">
              <FrameworkBadge version={badge} />
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[45ch]">
                {rationale}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading>Key decisions</SectionHeading>
        <p className="text-sm text-muted-foreground font-mono">
          — coming soon
        </p>
      </section>
    </div>
  );
}
