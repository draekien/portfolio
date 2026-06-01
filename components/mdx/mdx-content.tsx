import type { Route } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { ComponentProps } from "react";
import { BrandMark } from "@/components/brand-mark";
import { ButtonLink } from "@/components/button-link";
import { Code } from "@/components/code";
import { CodeBlock } from "@/components/code-block";
import { FrameworkBadge } from "@/components/framework-badge";
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

const components = {
  pre: Pre,
  code: Code,
  a: MdxLink,
  BrandMark,
  ButtonLink,
  CodeBlock,
  FrameworkBadge,
};

export function MdxContent({ source }: { source: string }) {
  return <MDXRemote source={source} components={components} />;
}
