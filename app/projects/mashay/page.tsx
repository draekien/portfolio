import type { Metadata } from "next";
import Image from "next/image";
import { BrandMark } from "@/components/brand-mark";
import { ButtonLink } from "@/components/button-link";
import { Code } from "@/components/code";
import { CodeBlock } from "@/components/code-block";
import { Colophon } from "@/components/colophon";
import { FrameworkBadge } from "@/components/framework-badge";
import { InstallCommand } from "@/components/install-command";
import { JsonLd } from "@/components/json-ld";
import { ProjectBreadcrumb } from "@/components/project-breadcrumb";
import {
  ProjectSectionDivider,
  ProjectSectionHeading,
} from "@/components/project-section";
import {
  Carousel,
  CarouselContent,
  CarouselControls,
  CarouselItem,
} from "@/components/ui/carousel";
import structuredData from "./structured-data.json" with { type: "json" };

export const metadata: Metadata = {
  title: "mashay | William Pei",
  description:
    "A CLI that converts Markdown into a single, self-contained HTML document, with a pluggable template and theme system, Obsidian syntax support, and Mermaid diagrams.",
  alternates: {
    canonical: "/projects/mashay",
  },
  openGraph: {
    siteName: "William Pei",
    url: "/projects/mashay",
    type: "website",
  },
};

export default function MashayPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <div className="container mx-auto py-12 md:py-20">
        <ProjectBreadcrumb section="libraries" current="mashay" />

        <header className="mb-16 space-y-6 max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            <BrandMark className="text-primary mr-3" />
            mashay
          </h1>
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            A CLI that turns Markdown into a single, self-contained HTML
            document. Every style, logo, and image is inlined into one file you
            can email, archive, or open offline — no stylesheet, no asset
            folder, no build server.
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <FrameworkBadge version="typescript" />
            <FrameworkBadge version="unified" />
            <FrameworkBadge version="tailwind" />
          </div>
          <InstallCommand command="npx @draekien/mashay process ./docs" />
          <div className="flex gap-4">
            <ButtonLink
              link={{
                href: "https://github.com/draekien/mashay",
                target: "_blank",
                rel: "noopener noreferrer",
              }}
              external
            >
              GitHub →
            </ButtonLink>
            <ButtonLink
              link={{
                href: "https://www.npmjs.com/package/@draekien/mashay",
                target: "_blank",
                rel: "noopener noreferrer",
              }}
              external
              className="text-muted-foreground"
            >
              npm →
            </ButtonLink>
          </div>
        </header>

        <section className="mb-20">
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              <CarouselItem>
                <Image
                  src="/mashay-hero-mobile.png"
                  alt="A mashay-rendered document: a navy masthead with the title, a DRAFT status badge, and a metadata grid, above a numbered table of contents and numbered section headings"
                  width={414}
                  height={896}
                  className="block sm:hidden w-full h-auto rounded-lg border border-border"
                  priority
                />
                <Image
                  src="/mashay-hero.png"
                  alt="A mashay-rendered document: a navy masthead with the title, a DRAFT status badge, and a metadata grid, above a numbered table of contents and numbered section headings"
                  width={1440}
                  height={900}
                  className="hidden sm:block w-full h-auto rounded-lg border border-border"
                  priority
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/mashay-feature-mobile.png"
                  alt="A mashay-rendered document showing a Mermaid flowchart and a TypeScript code block with a language label and filename in its header bar"
                  width={414}
                  height={896}
                  className="block sm:hidden w-full h-auto rounded-lg border border-border"
                />
                <Image
                  src="/mashay-feature.png"
                  alt="A mashay-rendered document showing a Mermaid flowchart and a TypeScript code block with a language label and filename in its header bar"
                  width={1440}
                  height={900}
                  className="hidden sm:block w-full h-auto rounded-lg border border-border"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselControls />
          </Carousel>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 mb-20">
          <section>
            <ProjectSectionHeading>Problem</ProjectSectionHeading>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-prose">
              <p>
                I had a pile of Markdown notes I wanted to turn into
                presentable, shareable HTML documents. The obvious route was to
                ask an LLM to convert each one, but paying inference costs to
                reformat text that never changes is the wrong tool for a
                deterministic job.
              </p>
              <p>
                I wanted a converter I could run locally and for free: feed it
                Markdown, get back a polished document that looks the same every
                time and travels as a single file.
              </p>
            </div>
          </section>

          <section>
            <ProjectSectionHeading>Solution</ProjectSectionHeading>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-prose">
              <p>
                mashay is a Node CLI built on the unified/remark/rehype
                pipeline. Point it at a file or a directory and it renders each
                document into standalone HTML — styles, logo, and embedded
                images all inlined — using a pluggable template and theme.
              </p>
              <p>
                The output is designed to read like a prepared briefing, not a
                rendered README: a titled masthead, a numbered table of
                contents, auto-numbered headings, alert callouts, and
                collapsible appendices, all from plain Markdown frontmatter and
                syntax.
              </p>
            </div>
          </section>
        </div>

        <section className="mb-20">
          <ProjectSectionHeading>Tech stack</ProjectSectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 max-w-3xl">
            {[
              {
                badge: "unified" as const,
                rationale:
                  "The remark/rehype ecosystem does the parsing. The interesting work lives in custom plugins for alerts, Obsidian syntax, heading numbering, and Mermaid — ordered carefully so each transform sees the tree it expects.",
              },
              {
                badge: "tailwind" as const,
                rationale:
                  "Tailwind v4 is driven programmatically to compile the exact CSS each page uses, then inlined. It is what makes the output self-contained rather than dependent on an external stylesheet.",
              },
              {
                badge: "commander" as const,
                rationale:
                  "Structures the CLI into process and docs subcommands. A no-argument run drops into an interactive file picker built with @clack/prompts.",
              },
              {
                badge: "zod" as const,
                rationale:
                  "Validates document frontmatter before rendering, so a malformed header fails with a clear, classified error instead of producing a broken document.",
              },
              {
                badge: "typescript" as const,
                rationale:
                  "Strict throughout, bundled to a single executable with Rolldown. The pipeline's node types keep the plugin transforms honest.",
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
          <ProjectSectionDivider>key decisions</ProjectSectionDivider>
          <div className="space-y-16 max-w-3xl md:max-w-none">
            <div className="md:grid md:grid-cols-[11rem_1fr] md:gap-x-12">
              <p className="font-mono text-sm text-secondary mb-2 md:mb-0">
                <BrandMark className="text-primary mr-1" /> 01 · rendering
              </p>
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  A fresh Tailwind compiler per document
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-prose mb-6">
                  To make output self-contained, mashay compiles Tailwind at
                  build time: it assembles the page, scans it for the classes
                  actually used, and inlines only that CSS. The catch is that
                  Tailwind&apos;s compiler accumulates candidates across calls,
                  so reusing one instance across a batch leaks every earlier
                  document&apos;s utilities into later pages. Each document gets
                  its own compiler.
                </p>
                <div className="max-w-2xl">
                  <CodeBlock
                    language="typescript"
                    code={`// Reusing a compiler across documents leaks earlier pages'
// classes into later ones — the candidate set is cumulative.
// So build a fresh compiler and scanner for every page.
async function compilePageCss(html: string): Promise<string> {
  const compiler = await compile(baseCss, { base: cwd });
  const scanner = new Scanner({});
  const candidates = scanner.scanFiles([
    { content: html, extension: "html" },
  ]);
  return compiler.build(candidates);
}`}
                  />
                </div>
              </div>
            </div>

            <div className="md:grid md:grid-cols-[11rem_1fr] md:gap-x-12">
              <p className="font-mono text-sm text-secondary mb-2 md:mb-0">
                <BrandMark className="text-primary mr-1" /> 02 · architecture
              </p>
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Themes are colour; templates are everything else
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-prose mb-6">
                  A theme is nothing but a set of standardised{" "}
                  <Code>--color-*</Code> tokens. A template owns the layout,
                  chrome, typography, and component rules, written against that
                  token contract. Because every template consumes the same
                  colour names, any theme pairs with any template: a new theme
                  is a palette, a new template is a new document format. Only
                  the <Code>academic</Code> pair ships today, but the seam is
                  where the tool is built to grow.
                </p>
                <div className="max-w-2xl">
                  <CodeBlock
                    language="css"
                    code={`/* themes/<name>/theme.css — a theme is only colour tokens */
:root {
  --color-surface: #fdfdfc;
  --color-ink: #1a1a1a;
  --color-accent: #0e2a47;
  /* every template is written against this token contract */
}`}
                  />
                </div>
              </div>
            </div>

            <div className="md:grid md:grid-cols-[11rem_1fr] md:gap-x-12">
              <p className="font-mono text-sm text-secondary mb-2 md:mb-0">
                <BrandMark className="text-primary mr-1" /> 03 · portability
              </p>
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Self-contained, with one honest exception
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-prose">
                  Styles are inlined, logos are embedded (SVG inline, raster
                  formats as base64), and Obsidian image embeds are resolved and
                  inlined too, so a mashay document opens correctly with no
                  network and no sidecar files. The one exception is Mermaid:
                  rendering diagrams in a truly self-contained way would mean
                  shipping the whole Mermaid runtime in every file, so mashay
                  instead injects a CDN <Code>&lt;script&gt;</Code> tag — and
                  only on pages that actually contain a diagram. That page needs
                  the internet to draw its diagram; everything else works
                  offline. Naming the trade-off beat pretending it wasn&apos;t
                  there.
                </p>
              </div>
            </div>

            <div className="md:grid md:grid-cols-[11rem_1fr] md:gap-x-12">
              <p className="font-mono text-sm text-secondary mb-2 md:mb-0">
                <BrandMark className="text-primary mr-1" /> 04 · markdown
              </p>
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Vault-aware Obsidian embeds
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-prose">
                  Obsidian embeds like <Code>![[diagram.png]]</Code> don&apos;t
                  carry a path, and vaults tend to keep attachments in a central
                  folder rather than next to the note. So the resolver searches
                  down from the note first, then walks up the ancestor
                  directories — checking each one and its{" "}
                  <Code>attachments/</Code> subfolder — until it finds the file
                  or runs out of vault. Resolved images are inlined as data
                  URIs; anything it can&apos;t resolve degrades to plain text
                  rather than a broken link. Wikilinks render as text too, since
                  there is no vault graph to link into.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-20">
          <Colophon>
            <p>
              mashay is an open-source tool I designed and built. Claude helped
              me draft this write-up, but the explanations of how it works are
              my own, each one checked back against the source.
            </p>
          </Colophon>
        </div>
      </div>
    </>
  );
}
