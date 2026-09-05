import type { ReactNode } from "react";
import { BrandMark } from "@/components/brand-mark";

type SignpostProps = {
  /** Override the mono kicker. Defaults to `In this article`. */
  label?: string;
  /** One sentence on what the article is about. */
  about: string;
  /**
   * A markdown ordered list of what the article covers, in the order it
   * covers it. Separate it from the tags with blank lines so MDX parses it as
   * markdown. Array props do not survive MDX expression attributes here.
   */
  children: ReactNode;
};

export function Signpost({
  label = "In this article",
  about,
  children,
}: SignpostProps) {
  return (
    <aside className="not-prose mb-10 border-border border-b pb-6">
      <p className="flex items-center gap-2 font-mono text-secondary text-sm">
        <BrandMark className="text-primary" />
        {label}
      </p>
      <p className="mt-3 text-foreground leading-relaxed">{about}</p>
      <div className="mt-3 text-muted-foreground leading-relaxed [&_li::marker]:font-mono [&_li::marker]:text-secondary [&_li::marker]:text-sm [&_li]:mt-1 [&_ol]:list-decimal [&_ol]:pl-6">
        {children}
      </div>
    </aside>
  );
}
