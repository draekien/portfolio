import { CaretRightIcon } from "@phosphor-icons/react/ssr";
import type { Route } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { ComponentProps } from "react";
import rehypeSlug from "rehype-slug";
import { ArticleLink } from "@/components/article-link";
import { BrandMark } from "@/components/brand-mark";
import { ButtonLink } from "@/components/button-link";
import { Code } from "@/components/code";
import { CodeBlock } from "@/components/code-block";
import { Define } from "@/components/define";
import { FrameworkBadge } from "@/components/framework-badge";
import { LinkNote } from "@/components/link-note";
import { SourceCallout } from "@/components/source-callout";
import { Pre } from "./pre";

function MdxLink({ href, children }: ComponentProps<"a">) {
  if (!href) return <span>{children}</span>;

  const isExternal = href.startsWith("http") || href.startsWith("//");

  if (isExternal) {
    return (
      <a href={href} rel="noopener noreferrer" target="_blank">
        {children}
      </a>
    );
  }

  return <Link href={href as Route}>{children}</Link>;
}

function SequenceArrow() {
  return (
    <CaretRightIcon
      aria-label="then"
      className="inline align-[-0.1em] text-muted-foreground"
      size="0.85em"
      weight="bold"
    />
  );
}

const components = {
  pre: Pre,
  code: Code,
  a: MdxLink,
  ArticleLink,
  BrandMark,
  ButtonLink,
  CodeBlock,
  Define,
  FrameworkBadge,
  LinkNote,
  SequenceArrow,
  SourceCallout,
};

export function MdxContent({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{ mdxOptions: { rehypePlugins: [rehypeSlug] } }}
    />
  );
}
