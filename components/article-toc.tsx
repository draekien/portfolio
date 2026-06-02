"use client";

import { useMemo } from "react";
import type { ArticleHeading } from "@/lib/articles";
import { useScrollSpy } from "@/lib/use-scroll-spy";
import { cn } from "@/lib/utils";

type ArticleTocProps = {
  headings: ArticleHeading[];
};

export function ArticleToc({ headings }: ArticleTocProps) {
  const ids = useMemo(() => headings.map((heading) => heading.id), [headings]);
  const activeId = useScrollSpy(ids);

  if (headings.length === 0) return null;

  return (
    <aside className="hidden lg:block">
      <nav className="sticky top-8 relative pl-3 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-border">
        <p className="font-mono text-xs text-muted-foreground mb-3 tracking-widest uppercase">
          On this page
        </p>
        <ul className="space-y-1.5">
          {headings.map(({ id, text, level }) => (
            <li key={id} className={cn(level === 3 && "ml-3")}>
              <a
                href={`#${id}`}
                className={cn(
                  "block font-mono text-xs leading-snug transition-colors",
                  activeId === id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
