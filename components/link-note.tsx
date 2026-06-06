"use client";

import type { ReactNode } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

type LinkNoteProps = {
  /** Destination URL (external source). */
  href: string;
  /** One-line summary shown on hover, so readers grasp where the link leads without clicking through. */
  note: string;
  /** The inline link text the reader sees. */
  children: ReactNode;
};

/**
 * External link with an on-hover card summarising where it leads. The trigger
 * renders as a real anchor, so clicking still navigates; hovering (or focusing)
 * reveals the summary. For internal article cross-links use `ArticleLink`.
 */
export function LinkNote({ href, note, children }: LinkNoteProps) {
  return (
    <HoverCard>
      <HoverCardTrigger
        render={
          <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        }
      />
      <HoverCardContent className="w-72 leading-relaxed">
        {note}
      </HoverCardContent>
    </HoverCard>
  );
}
