import type { Metadata } from "next";
import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { ButtonLink } from "@/components/button-link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Colophon | William Pei",
  description:
    "How this site, its articles, and its case studies are made, and where AI helped, where it didn't, and what stays mine.",
  alternates: {
    canonical: "/colophon",
  },
  openGraph: {
    siteName: "William Pei",
    url: "/colophon",
    type: "article",
  },
};

function Section({
  label,
  heading,
  children,
}: {
  label: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <BrandMark className="text-primary shrink-0" />
        <p className="font-mono text-sm text-secondary tracking-wider">
          {label}
        </p>
      </div>
      <h2 className="text-2xl md:text-3xl font-mono font-medium tracking-tight text-balance">
        {heading}
      </h2>
      <div className="space-y-4 text-muted-foreground leading-relaxed max-w-prose">
        {children}
      </div>
    </section>
  );
}

export default function ColophonPage() {
  return (
    <article className="container mx-auto pt-16 pb-24 max-w-3xl">
      <Breadcrumb className="mb-12">
        <BreadcrumbList className="font-mono text-sm">
          <BreadcrumbItem>
            <BreadcrumbLink render={<Link href="/" />}>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Colophon</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <header className="mb-12 space-y-4">
        <h1 className="font-mono font-medium tracking-tight leading-tight text-balance text-[clamp(1.875rem,1rem+3vw,3rem)]">
          <BrandMark className="text-primary mr-2" />
          Colophon
        </h1>
        <p className="text-lg text-foreground leading-relaxed text-pretty max-w-prose">
          I work with AI, and I would rather say so plainly than leave you
          guessing. What follows is an honest account of how the site, the
          articles, and the case studies come together.
        </p>
      </header>

      <div className="space-y-12">
        <Section
          label="principle"
          heading="Credit goes to the role, not the keystroke"
        >
          <p className="text-pretty">
            Three things sit behind anything published here, and they come from
            genuinely different places: the experience and judgment driving a
            piece, the words and code that express it, and the accountability
            for putting it out. Rather than collapse those into a single claim,
            I name each one.
          </p>
          <p className="text-pretty">
            Why not tag individual sentences as &ldquo;mine&rdquo; or &ldquo;the
            AI&apos;s&rdquo;? Because the work is braided, and that kind of
            labelling would claim a precision that does not exist. The line that
            matters most:{" "}
            <span className="text-foreground">
              AI can draft the telling of a true story. It never invents the
              story.
            </span>
          </p>
        </Section>

        <Section
          label="articles"
          heading="Co-written, fully verified, mine to answer for"
        >
          <p className="text-pretty">
            The incidents, opinions, and technical judgment in my writing are
            real and my own. The production failures happened to me; the design
            decisions were mine to make. The prose itself is co-written with
            Claude, through a writing process I built and keep refining.
          </p>
          <p className="text-pretty">
            Nothing publishes until every factual claim has been checked against
            its source, whether that is the real repository, the actual type
            signatures, or the published docs, and when a draft and its source
            disagree, the source wins. I read every line, and whoever typed the
            first version, the final words are mine to answer for.
          </p>
        </Section>

        <Section
          label="case studies"
          heading="Real projects, co-written write-ups"
        >
          <p className="text-pretty">
            The projects showcased in my portfolio are my own work: designed,
            built, and shipped by me. The case-study pages describing them were
            co-written with Claude, and every claim about how the projects
            actually work is mine and verified before it goes up.
          </p>
        </Section>

        <Section
          label="this site"
          heading="A hand-authored original, rebuilt with AI"
        >
          <p className="text-pretty">
            The first version of this portfolio, both the original design and
            the site it produced, was authored entirely by hand, with no AI
            involved. What you are reading now grew out of that earlier version:
            I rebuilt it with heavy AI assistance, leaning on{" "}
            <span className="text-foreground">Claude Code</span> for the
            engineering and a design process I drive for the interface.
          </p>
          <p className="text-pretty">
            The architecture, the design decisions, the content, and the final
            review remain mine throughout. The original is the foundation; this
            is its AI-assisted descendant.
          </p>
        </Section>

        <Section label="why" heading="Honesty is the easy call here">
          <p className="text-pretty">
            This is a portfolio about ideas and judgment, and those parts are
            unambiguously mine. Saying where AI helped takes nothing away from
            that, and anyone wondering how the work was made deserves a straight
            answer rather than a guess. It is also simply the consistent thing
            to do: I already credit the lineage of an idea when I write, and
            crediting the tools that help produce the words is that same
            standard, one layer down.
          </p>
        </Section>
      </div>

      <footer className="mt-16 pt-8 border-t border-border">
        <ButtonLink internal link={{ href: "/" }}>
          ← Back home
        </ButtonLink>
      </footer>
    </article>
  );
}
