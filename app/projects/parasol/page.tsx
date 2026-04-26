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
  title: "Parasol | William Pei",
  description:
    "A private FIRE tracking SaaS built with TanStack Start, Neon, and Clerk.",
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-semibold mb-6">
      <BrandMark className="text-primary mr-2" />
      {children}
    </h2>
  );
}

export default function ParasolPage() {
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
            <BreadcrumbPage>Parasol</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <header className="mb-16 space-y-6 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          <BrandMark className="text-primary mr-3" />
          Parasol
        </h1>
        <p className="text-lg md:text-xl text-foreground leading-relaxed">
          A private FIRE calculator that keeps your data yours — no open banking
          access required.
        </p>
        <div className="flex items-center gap-3 flex-wrap">
          <FrameworkBadge version="tanstack-start" />
          <FrameworkBadge version="neon" />
          <FrameworkBadge version="clerk" />
          <FrameworkBadge version="typescript" />
        </div>
        <div className="flex gap-4">
          <ButtonLink
            link={{
              href: "https://parasol.wpei.me",
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
                src="/parasol-hero-dark-mobile.webp"
                alt="Parasol — FIRE tracking dashboard"
                width={375}
                height={812}
                className="hidden dark:block sm:dark:hidden w-full h-auto rounded-lg"
                priority
              />
              <Image
                src="/parasol-hero-light-mobile.webp"
                alt="Parasol — FIRE tracking dashboard"
                width={375}
                height={812}
                className="block dark:hidden sm:hidden w-full h-auto rounded-lg"
                priority
              />
              <Image
                src="/parasol-hero-dark.webp"
                alt="Parasol — FIRE tracking dashboard"
                width={2259}
                height={1316}
                className="hidden sm:dark:block w-full h-auto rounded-lg"
                priority
              />
              <Image
                src="/parasol-hero-light.webp"
                alt="Parasol — FIRE tracking dashboard"
                width={2259}
                height={1316}
                className="hidden sm:block sm:dark:hidden w-full h-auto rounded-lg"
                priority
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/parasol-feature-dark-mobile.webp"
                alt="Parasol — portfolio and progress features"
                width={375}
                height={812}
                className="hidden dark:block sm:dark:hidden w-full h-auto rounded-lg"
              />
              <Image
                src="/parasol-feature-light-mobile.webp"
                alt="Parasol — portfolio and progress features"
                width={375}
                height={812}
                className="block dark:hidden sm:hidden w-full h-auto rounded-lg"
              />
              <Image
                src="/parasol-feature-dark.webp"
                alt="Parasol — portfolio and progress features"
                width={2259}
                height={1316}
                className="hidden sm:dark:block w-full h-auto rounded-lg"
              />
              <Image
                src="/parasol-feature-light.webp"
                alt="Parasol — portfolio and progress features"
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
              Every FIRE calculator I found required connecting to my bank
              accounts via open banking. I didn&apos;t want a third-party app
              holding read access to my financial data just to run projections I
              could compute myself.
            </p>
            <p>
              I wanted something I owned end-to-end: my data in my database,
              behind my auth, accessible only to me.
            </p>
          </div>
        </section>

        <section>
          <SectionHeading>Solution</SectionHeading>
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-prose">
            <p>
              Parasol is a manual-entry FIRE tracker. You input your portfolio
              values, income, expenses, and target. It projects your path to
              financial independence using the 4% rule and tracks your progress
              over time.
            </p>
            <p>
              The infrastructure scales to zero when you&apos;re not using it —
              no idle costs, no maintenance overhead.
            </p>
          </div>
        </section>
      </div>

      <section className="mb-20">
        <SectionHeading>Tech stack</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 max-w-3xl">
          {[
            {
              badge: "tanstack-start" as const,
              rationale:
                "Type-safe full-stack routing with SSR and server functions. Every API boundary is typed end-to-end — no client/server mental split.",
            },
            {
              badge: "neon" as const,
              rationale:
                "Serverless Postgres that scales to zero between sessions. No idle costs for a personal project with sparse usage.",
            },
            {
              badge: "clerk" as const,
              rationale:
                "Sessions, JWTs, OAuth — handled. I focused on the FIRE logic, not the security plumbing.",
            },
            {
              badge: "typescript" as const,
              rationale:
                "Strict mode throughout. Type-safe from DB schema to UI — schema changes surface as build errors.",
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
