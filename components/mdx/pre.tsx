import type { ComponentProps } from "react";
import { isValidElement } from "react";
import type { BundledLanguage } from "shiki";
import { CodeBlock } from "@/components/code-block";

export function Pre({ children }: ComponentProps<"pre">) {
  if (!isValidElement<{ className?: string; children?: string }>(children)) {
    return <pre>{children}</pre>;
  }

  const { className, children: rawCode } = children.props;
  const language = className?.replace(/^language-/, "") ?? "text";
  const codeString = typeof rawCode === "string" ? rawCode.trimEnd() : "";

  if (!codeString) {
    return <pre>{children}</pre>;
  }

  return <CodeBlock code={codeString} language={language as BundledLanguage} />;
}
