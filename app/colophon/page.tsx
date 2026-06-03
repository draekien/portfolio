import type { Metadata } from "next";
import { BrandMark } from "@/components/brand-mark";
import { ButtonLink } from "@/components/button-link";

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
      <h2 className="text-2xl md:text-3xl font-mono font-medium tracking-tight">
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
      <header className="mb-12 space-y-4">
        <h1 className="font-mono font-medium tracking-tight leading-tight text-[clamp(1.875rem,1rem+3vw,3rem)]">
          <BrandMark className="text-primary mr-2" />
          Colophon
        </h1>
        <p className="text-lg text-foreground leading-relaxed max-w-prose">
          I work with AI, and I&apos;d rather say so plainly than let you guess.
          This page is the honest account of how the site, the articles, and the
          case studies get made, drawn at the level where the truth actually
          lives.
        </p>
      </header>

      <div className="space-y-12">
        <Section
          label="principle"
          heading="Credit goes to the role, not the keystroke"
        >
          <p>
            For anything here there are three separable things, and they have
            genuinely different origins: the experience and judgment behind a
            piece, the words and code that express it, and the accountability
            for publishing it. I name all three rather than collapse them.
          </p>
          <p>
            Tagging individual sentences as &ldquo;mine&rdquo; or &ldquo;the
            AI&apos;s&rdquo; would claim a precision that does not exist; the
            work is braided. So I attribute by role instead. The line that
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
          <p>
            The incidents, opinions, and technical judgment in my writing are
            real and my own: the production failures happened to me, the design
            decisions were mine to make. I co-write the prose with Claude,
            working through a writing process I built and keep refining.
          </p>
          <p>
            Before anything publishes, every factual claim is checked against
            its source: the real repository, the actual type signatures, the
            published docs. When the source contradicts a draft, the source
            wins. I read every line and I stand behind all of it, regardless of
            who typed the first version.
          </p>
        </Section>

        <Section
          label="case studies"
          heading="Real projects, co-written write-ups"
        >
          <p>
            Parasol, North Shore Meditation, Waystone.Monads, and
            Waystone.WideLogEvents are my own work, designed, built, and shipped
            by me. The case-study pages that describe them were co-written with
            Claude, and every claim about how the projects work is mine and
            verified.
          </p>
        </Section>

        <Section
          label="this site"
          heading="A hand-authored original, rebuilt with AI"
        >
          <p>
            The first version of this portfolio (the original design and the
            site it produced) was authored entirely by hand, no AI involved. The
            version you are reading now grew out of that one: I rebuilt it with
            heavy AI assistance, using{" "}
            <span className="text-foreground">Claude Code</span> for the
            engineering and a design process I drive for the interface.
          </p>
          <p>
            The architecture, the design decisions, the content, and the final
            review are mine. The original is the foundation; this is its
            AI-assisted descendant.
          </p>
        </Section>

        <Section label="why" heading="Honesty is the easy call here">
          <p>
            This is a portfolio about ideas and judgment, and those are the
            parts that are unambiguously mine. Saying where AI helped costs me
            nothing and earns the trust of the people most likely to assume the
            worst if I stayed quiet. It is also just the consistent thing to do:
            I already credit the lineage of an idea when I write; crediting the
            tools that help produce the words is the same standard, one layer
            down.
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
