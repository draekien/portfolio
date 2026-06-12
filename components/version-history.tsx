"use client";

import { ClockCounterClockwiseIcon } from "@phosphor-icons/react";
import type { ComponentProps } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

/**
 * Compound component for an article's post-publication edit history. The
 * trigger shows the latest edit date inline; the popover lists one item per
 * revision, newest first. Dates arrive pre-formatted as children - the
 * caller owns formatting.
 *
 * ```tsx
 * <VersionHistory>
 *   <VersionHistoryTrigger>12 June 2026</VersionHistoryTrigger>
 *   <VersionHistoryContent>
 *     <VersionHistoryItem>
 *       <VersionHistoryItemDate dateTime="2026-06-12">12 June 2026</VersionHistoryItemDate>
 *       <VersionHistoryItemDescription>Redrafted the prose.</VersionHistoryItemDescription>
 *     </VersionHistoryItem>
 *   </VersionHistoryContent>
 * </VersionHistory>
 * ```
 */
export function VersionHistory(props: ComponentProps<typeof Popover>) {
  return <Popover {...props} />;
}

export function VersionHistoryTrigger({
  className,
  children,
  ...props
}: ComponentProps<typeof PopoverTrigger>) {
  return (
    <PopoverTrigger
      data-slot="version-history-trigger"
      className={cn(
        "inline-flex items-center gap-1.5 underline decoration-dotted decoration-secondary underline-offset-4 transition-colors hover:decoration-foreground",
        className,
      )}
      {...props}
    >
      {children}
      <span className="sr-only">(view edit history)</span>
      <ClockCounterClockwiseIcon
        className="size-3.5 text-secondary"
        aria-hidden="true"
      />
    </PopoverTrigger>
  );
}

export function VersionHistoryContent({
  className,
  ...props
}: ComponentProps<typeof PopoverContent>) {
  return (
    <PopoverContent
      data-slot="version-history-content"
      className={cn(
        "w-80 gap-3 border border-border shadow-none ring-0 motion-reduce:animate-none",
        className,
      )}
      {...props}
    />
  );
}

export function VersionHistoryItem({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      data-slot="version-history-item"
      className={cn("flex flex-col gap-1", className)}
      {...props}
    />
  );
}

export function VersionHistoryItemDate({
  className,
  ...props
}: ComponentProps<"time">) {
  return (
    <time
      data-slot="version-history-item-date"
      className={cn(
        "font-mono text-[0.7rem] uppercase tracking-wider text-secondary",
        className,
      )}
      {...props}
    />
  );
}

export function VersionHistoryItemDescription({
  className,
  ...props
}: ComponentProps<"p">) {
  return (
    <p
      data-slot="version-history-item-description"
      className={cn(
        "text-sm leading-relaxed text-popover-foreground",
        className,
      )}
      {...props}
    />
  );
}
