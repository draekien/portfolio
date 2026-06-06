"use client";

import { ArrowUpRightIcon } from "@phosphor-icons/react";
import type { Route } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

type ArticleLinkPopoverProps = {
  /** Destination article route. */
  href: string;
  /** Linked article's title. */
  title: string;
  /** Linked article's one-line excerpt. */
  description: string;
  /** Pre-formatted reading time, e.g. "5 min read". */
  readingTime: string;
  /** The inline text the reader sees and clicks. */
  children: ReactNode;
};

export function ArticleLinkPopover({
  href,
  title,
  description,
  readingTime,
  children,
}: ArticleLinkPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger className="underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary">
        {children}
      </PopoverTrigger>
      <PopoverContent className="w-80 gap-3 border border-border shadow-none ring-0 motion-reduce:animate-none">
        <PopoverTitle className="font-mono text-sm font-medium leading-snug text-foreground">
          {title}
        </PopoverTitle>
        <span className="font-mono text-[0.7rem] uppercase tracking-wider text-secondary">
          {readingTime}
        </span>
        <p className="text-sm leading-relaxed text-popover-foreground">
          {description}
        </p>
        <Link
          href={href as Route}
          className="inline-flex w-fit items-center gap-1 text-sm text-primary hover:underline"
        >
          Read the article
          <ArrowUpRightIcon className="size-3.5" aria-hidden="true" />
        </Link>
      </PopoverContent>
    </Popover>
  );
}
