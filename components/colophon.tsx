import type { ReactNode } from "react";
import { BrandMark } from "@/components/brand-mark";
import { ButtonLink } from "@/components/button-link";
import { cn } from "@/lib/utils";

type ColophonProps = {
  /** Override the mono `@`-kicker. Defaults to `@colophon`. */
  label?: string;
  /**
   * The method note. Defaults to the article phrasing; case studies and other
   * surfaces pass their own truthful split.
   */
  children?: ReactNode;
  className?: string;
};

export function Colophon({
  label = "@colophon",
  children,
  className,
}: ColophonProps) {
  return (
    <aside
      className={cn(
        "not-prose rounded-lg border border-border bg-muted p-6",
        className,
      )}
    >
      <p className="flex items-center gap-2 font-mono text-sm text-secondary">
        <BrandMark className="text-primary" />
        {label}
      </p>
      <div className="mt-3 text-muted-foreground leading-relaxed">
        {children ?? (
          <p>
            The thinking here is mine; I co-wrote the prose with Claude and
            checked every claim against its source.
          </p>
        )}
      </div>
      <div className="mt-4">
        <ButtonLink internal link={{ href: "/colophon" }}>
          How this site is made →
        </ButtonLink>
      </div>
    </aside>
  );
}
