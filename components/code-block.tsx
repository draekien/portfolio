import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { Fragment } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { type BundledLanguage, codeToHast, type SpecialLanguage } from "shiki";
import { cn } from "@/lib/utils";
import { CopyButton } from "./copy-button";

export type CodeBlockProps = {
  code: string;
  language?: BundledLanguage | SpecialLanguage;
  className?: string;
};

export async function CodeBlock({
  code,
  language = "text",
  className,
}: CodeBlockProps) {
  const hast = await codeToHast(code, {
    lang: language,
    themes: {
      light: "catppuccin-latte",
      dark: "catppuccin-mocha",
    },
  });

  const rendered = toJsxRuntime(hast, {
    Fragment,
    jsx,
    jsxs,
    components: {
      pre: (props) => (
        <pre
          {...props}
          className={cn(
            "rounded-lg p-4 overflow-x-auto",
            className,
            props.className,
          )}
        />
      ),
      code: (props) => (
        <code {...props} className={cn("font-mono text-sm", props.className)} />
      ),
    },
  });

  return (
    <div className="relative group">
      {rendered}
      <CopyButton code={code} />
    </div>
  );
}
