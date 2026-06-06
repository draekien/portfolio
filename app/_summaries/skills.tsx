import { ButtonLink } from "@/components/button-link";
import { Code } from "@/components/code";
import { CodeBlock } from "@/components/code-block";
import { ExpandableInstallCommand } from "@/components/expandable-install-command";
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

export function SkillsSummary() {
  return (
    <ProjectSummary
      id="skills"
      className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-start"
    >
      <div className="space-y-6">
        <ProjectSummaryHeader>
          <ProjectSummaryTitle>Skills</ProjectSummaryTitle>
          <ProjectSummaryHook>
            I kept re-explaining the same workflows to my coding agents every
            session. These skills capture the intent and judgment once, so any
            agent runs them the way I would.
          </ProjectSummaryHook>
          <ProjectSummaryDescription>
            A collection of AI agent skills built on the Agent Skills open
            standard and organised into domain buckets: drafting, engineering,
            productivity, and output styles. Each is a <Code>SKILL.md</Code>{" "}
            that teaches a complete workflow. Install them as Claude Code
            plugins, or add them to any of 40+ agents with the{" "}
            <Code>npx skills</Code> CLI.
          </ProjectSummaryDescription>
        </ProjectSummaryHeader>
        <ExpandableInstallCommand
          variants={[
            {
              label: "# claude code marketplace",
              command: "/plugin marketplace add draekien/skills",
            },
            {
              label: "# install everything",
              command: "/plugin install everything@draekien-skills",
            },
            {
              label: "# any agent, via npx",
              command: "npx skills add draekien/skills",
            },
          ]}
        />
        <ProjectSummaryAttributeList>
          <ProjectSummaryAttribute>@runs-on</ProjectSummaryAttribute>
          <ProjectSummaryAttributeValue className="flex gap-2 flex-wrap">
            <FrameworkBadge version="claude-code" />
            <FrameworkBadge version="agent-skills" />
          </ProjectSummaryAttributeValue>
          <ProjectSummaryAttribute>@repository</ProjectSummaryAttribute>
          <ProjectSummaryAttributeValue>
            <ButtonLink
              link={{
                href: "https://github.com/draekien/skills",
                target: "_blank",
                rel: "noopener noreferrer",
              }}
              external
            >
              github/skills
            </ButtonLink>
          </ProjectSummaryAttributeValue>
        </ProjectSummaryAttributeList>
        <ButtonLink internal link={{ href: "/projects/skills" }}>
          View skill docs →
        </ButtonLink>
      </div>
      <ProjectSummaryCodeBlock>
        <CodeBlock
          language="markdown"
          code={`---
name: vet-skill-idea
description: Evaluates whether a concept should become an
  agent skill before one is written, gating it against
  worthiness criteria and routing it to build, split,
  redirect, or drop.
compatibility: Designed for Claude Code (or similar
  products with Agent Skills support)
---

Every skill's description loads into context for every
session in its scope. An unworthy skill is permanent tax
that also dilutes activation for the skills that earn
their place — so the default answer is no.`}
        />
      </ProjectSummaryCodeBlock>
    </ProjectSummary>
  );
}
