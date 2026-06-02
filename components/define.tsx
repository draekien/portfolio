"use client";

import { ArrowUpRightIcon } from "@phosphor-icons/react";
import type { ReactNode } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  type GlossaryEntry,
  type GlossaryTerm,
  glossary,
} from "@/lib/glossary";
import { cn } from "@/lib/utils";

type DefineProps = {
  /** Glossary key to look up. */
  term: GlossaryTerm;
  /** Render the inline trigger as a code chip (for type, method, and symbol names). */
  code?: boolean;
  /** The inline text the reader sees and clicks. */
  children: ReactNode;
};

export function Define({ term, code, children }: DefineProps) {
  const entry: GlossaryEntry | undefined = glossary[term];

  if (!entry) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`<Define>: no glossary entry for term "${term}"`);
    }
    return <>{children}</>;
  }

  return (
    <Popover>
      <PopoverTrigger
        className={cn(
          "underline decoration-secondary decoration-dotted underline-offset-4 transition-colors hover:decoration-foreground",
          code &&
            "rounded-sm bg-muted px-[0.4em] py-[0.1em] font-mono text-[0.85em]",
        )}
      >
        {children}
      </PopoverTrigger>
      <PopoverContent className="w-72 gap-3 border border-border shadow-none ring-0 motion-reduce:animate-none">
        <PopoverTitle className="font-mono text-[0.7rem] uppercase tracking-wider text-secondary">
          {entry.label}
        </PopoverTitle>
        <p className="text-sm leading-relaxed text-popover-foreground">
          {entry.summary}
        </p>
        {entry.href ? (
          <a
            href={entry.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-1 text-sm text-primary hover:underline"
          >
            {entry.hrefLabel ?? "Learn more"}
            <ArrowUpRightIcon className="size-3.5" aria-hidden="true" />
          </a>
        ) : null}
      </PopoverContent>
    </Popover>
  );
}
