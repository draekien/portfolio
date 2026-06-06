import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { BrandMark } from "@/components/brand-mark";
import { ButtonLink } from "@/components/button-link";
import { Code } from "@/components/code";
import { CodeBlock } from "@/components/code-block";
import { Colophon } from "@/components/colophon";
import { Define } from "@/components/define";
import { FrameworkBadge } from "@/components/framework-badge";
import { JsonLd } from "@/components/json-ld";
import { ProjectSectionHeading } from "@/components/project-section";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import structuredData from "./structured-data.json" with { type: "json" };

export const metadata: Metadata = {
  title: "Skills | William Pei",
  description:
    "A collection of AI agent skills built on the Agent Skills open standard: 17 skills across drafting, engineering, productivity, and output styles, installable as Claude Code plugins or via npx skills.",
  alternates: {
    canonical: "/projects/skills",
  },
  openGraph: {
    siteName: "William Pei",
    url: "/projects/skills",
    type: "website",
  },
};

function AtAGlanceRow({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-border py-2.5">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="text-foreground">{children}</dd>
    </div>
  );
}

function InstallCommand({ command }: { command: string }) {
  return (
    <div className="flex items-center gap-3 bg-muted rounded-md px-4 py-2.5 font-mono text-sm overflow-x-auto">
      <span className="text-secondary select-none shrink-0" aria-hidden="true">
        $
      </span>
      <span className="text-foreground whitespace-nowrap">{command}</span>
    </div>
  );
}

function InstallStep({ label, command }: { label: string; command: string }) {
  return (
    <div>
      <p className="font-mono text-sm text-muted-foreground mb-3">
        <BrandMark className="text-primary mr-1" />
        {label}
      </p>
      <InstallCommand command={command} />
    </div>
  );
}

const buckets = [
  {
    name: "drafting",
    count: "3 skills",
    detail:
      "draft-a-prd, skill-writing, and vet-skill-idea: turning fuzzy intent into a spec, and building well-formed skills themselves.",
  },
  {
    name: "engineering",
    count: "5 skills",
    detail:
      "break-down-prd, module-design, react-composition-rules, configure-claude-rules, and get-specific: planning work, reviewing design, and pinning down a codebase's conventions.",
  },
  {
    name: "productivity",
    count: "7 skills",
    detail:
      "get-aligned, deep-research, round-table, steelman, devils-advocate, transcribe-video, and visualise: the thinking work of alignment, research, and structured debate.",
  },
  {
    name: "output-styles",
    count: "2 skills",
    detail:
      "cte-mode and eli10-mode: shifting Claude's tone for accessibility and plain explanation.",
  },
] as const;

export default async function SkillsPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <div className="container mx-auto py-12 md:py-20">
        <Breadcrumb className="mb-12">
          <BreadcrumbList className="font-mono text-sm">
            <BreadcrumbItem>
              <BreadcrumbLink render={<Link href="/" />}>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink render={<Link href="/#libraries" />}>
                libraries
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Skills</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <header className="mb-16 lg:grid lg:grid-cols-[3fr_2fr] lg:gap-12 lg:items-start">
          <div className="space-y-6 max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              <BrandMark className="text-primary mr-3" />
              Skills
            </h1>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Reusable agent skills that teach a complete workflow, not a
              one-off prompt. Built on the{" "}
              <Define term="agent-skill">Agent Skills open standard</Define>,
              installable as Claude Code plugins or across 40+ other agents.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <FrameworkBadge version="claude-code" />
              <FrameworkBadge version="agent-skills" />
            </div>
            <InstallCommand command="/plugin marketplace add draekien/skills" />
            <div className="flex gap-4">
              <ButtonLink
                link={{
                  href: "https://github.com/draekien/skills",
                  target: "_blank",
                  rel: "noopener noreferrer",
                }}
                external
              >
                GitHub →
              </ButtonLink>
            </div>
          </div>
          <aside className="mt-12 lg:mt-2">
            <p className="font-mono text-sm text-secondary mb-4">
              <BrandMark className="text-primary mr-1" />
              at a glance
            </p>
            <dl className="font-mono text-sm border-t border-border">
              <AtAGlanceRow label="@standard">
                <a
                  href="https://agentskills.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:underline"
                >
                  Agent Skills
                  <ArrowUpRightIcon className="size-3.5" aria-hidden="true" />
                </a>
              </AtAGlanceRow>
              <AtAGlanceRow label="@skills">17</AtAGlanceRow>
              <AtAGlanceRow label="@buckets">4</AtAGlanceRow>
              <AtAGlanceRow label="@agents">40+</AtAGlanceRow>
              <AtAGlanceRow label="@license">MIT</AtAGlanceRow>
            </dl>
          </aside>
        </header>

        <section className="mb-16 max-w-prose">
          <ProjectSectionHeading>Why this exists</ProjectSectionHeading>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I kept re-explaining the same multi-step workflows to my coding
              agents: how to break a PRD into tracer bullets, how I want a
              design review run, how a debate should be structured. The
              explanation was good for one session and then gone, and the next
              session started from scratch.
            </p>
            <p>
              A skill writes that down once. The frontmatter tells the agent
              when to reach for it; the body teaches the workflow step by step;
              bundled scripts and templates handle the parts that should not be
              improvised. Because they follow the Agent Skills open standard,
              the same files work in Claude Code and across the other agents
              that read them.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="lg:grid lg:grid-cols-[2fr_3fr] lg:gap-12 lg:items-start">
            <div>
              <ProjectSectionHeading>What a skill is</ProjectSectionHeading>
              <p className="text-muted-foreground mb-6 lg:mb-0 max-w-prose">
                Every skill is a{" "}
                <Define term="skill-md" code>
                  SKILL.md
                </Define>{" "}
                file: YAML frontmatter plus a Markdown body. The frontmatter{" "}
                <Code>description</Code> is the activation contract: it loads
                into context every session and decides when the agent pulls the
                skill in. Full instructions stay out until then; the standard
                calls this{" "}
                <Define term="progressive-disclosure">
                  progressive disclosure
                </Define>
                , loading detail only when a task needs it. The body is the
                instruction set, and a skill can bundle scripts, reference docs,
                and templates it calls on as it runs.
              </p>
            </div>
            <div className="space-y-6 max-w-3xl">
              <div>
                <p className="font-mono text-sm text-muted-foreground mb-3">
                  <BrandMark className="text-primary mr-1" />
                  round-table/SKILL.md
                </p>
                <CodeBlock
                  language="markdown"
                  code={`---
name: round-table
description: Assembles an adversarial agent team to compare
  competing options, approaches, or technologies. Champions
  debate via direct messaging — each builds a case and
  actively challenges the others — then a synthesizer
  subagent analyses the debate and delivers a recommendation.
compatibility: Requires Claude Code with agent teams enabled.
  Champions run on a fast mid-tier model; the synthesizer
  subagent runs on the highest-capability model available.
---

Runs an adversarial debate: N champion teammates argue and
challenge each other via direct messaging, then a synthesizer
subagent analyses the settled debate and delivers a
recommendation.`}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <ProjectSectionHeading>What&apos;s inside</ProjectSectionHeading>
          <p className="text-muted-foreground mb-8 max-w-prose leading-relaxed">
            Seventeen skills, grouped into four buckets you can install together
            or one bucket at a time.
          </p>
          <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {buckets.map((bucket) => (
              <div key={bucket.name}>
                <p className="font-mono text-sm text-secondary mb-1">
                  <BrandMark className="text-primary mr-1" />
                  {bucket.name}
                  <span className="text-muted-foreground">
                    {" "}
                    · {bucket.count}
                  </span>
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {bucket.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="lg:grid lg:grid-cols-[2fr_3fr] lg:gap-12 lg:items-start">
            <div>
              <ProjectSectionHeading>Install it</ProjectSectionHeading>
              <p className="text-muted-foreground mb-6 lg:mb-0 max-w-prose leading-relaxed">
                Add the marketplace once, then install everything or pick the
                buckets you want. For other agents, the <Code>npx skills</Code>{" "}
                CLI reads the same repository.
              </p>
            </div>
            <div className="space-y-6 max-w-2xl">
              <InstallStep
                label="claude code: add the marketplace"
                command="/plugin marketplace add draekien/skills"
              />
              <InstallStep
                label="then install everything"
                command="/plugin install everything@draekien-skills"
              />
              <InstallStep
                label="or one bucket at a time"
                command="/plugin install drafting-skills@draekien-skills"
              />
              <InstallStep
                label="or any agent, via npx"
                command="npx skills add draekien/skills"
              />
            </div>
          </div>
        </section>

        <div className="mt-20">
          <Colophon>
            <p>
              Skills is an open-source project I built. Claude helped me draft
              this write-up, but the design of each skill and the account of how
              they work are my own, checked back against the repository.
            </p>
          </Colophon>
        </div>
      </div>
    </>
  );
}
