import type { Route } from "next";
import type { ReactNode } from "react";
import { BrandMark } from "@/components/brand-mark";
import { ButtonLink } from "@/components/button-link";

type SourceCalloutBase = {
  /** Override the mono `@`-kicker. Defaults to `@project` / `@source`. */
  label?: string;
  /** Name of the project or source, rendered as the callout title. */
  title: string;
  /** One-line description of what the reader finds by following the link. */
  children: ReactNode;
  /** Override the CTA text. */
  cta?: string;
};

type SourceCalloutProps =
  | (SourceCalloutBase & { internal: true; external?: false; href: Route })
  | (SourceCalloutBase & { external: true; internal?: false; href: string });

export function SourceCallout(props: SourceCalloutProps) {
  const { title, children } = props;
  const label = props.label ?? (props.internal ? "@project" : "@source");
  const cta =
    props.cta ?? (props.internal ? "Read the case study →" : "View source →");

  return (
    <aside className="not-prose my-8 rounded-lg border border-border bg-muted p-6">
      <p className="flex items-center gap-2 font-mono text-sm text-secondary">
        <BrandMark className="text-primary" />
        {label}
      </p>
      <p className="mt-3 text-lg font-medium text-foreground">{title}</p>
      <div className="mt-1 text-muted-foreground leading-relaxed">
        {children}
      </div>
      <div className="mt-4">
        {props.internal ? (
          <ButtonLink internal link={{ href: props.href }}>
            {cta}
          </ButtonLink>
        ) : (
          <ButtonLink
            external
            link={{
              href: props.href,
              target: "_blank",
              rel: "noopener noreferrer",
            }}
          >
            {cta}
          </ButtonLink>
        )}
      </div>
    </aside>
  );
}
