import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function ProjectSummary({
  children,
  className,
  ...rest
}: ComponentProps<"article">) {
  return (
    <article className={cn("space-y-4", className)} {...rest}>
      {children}
    </article>
  );
}

export function ProjectSummaryHeader({
  children,
  className,
  ...rest
}: ComponentProps<"header">) {
  return (
    <header className={className} {...rest}>
      {children}
    </header>
  );
}

export function ProjectSummaryFooter({
  children,
  className,
  ...rest
}: ComponentProps<"footer">) {
  return (
    <footer className={className} {...rest}>
      {children}
    </footer>
  );
}

export function ProjectSummaryTitle({
  children,
  className,
  ...rest
}: ComponentProps<"h2">) {
  return (
    <h2
      className={cn("text-2xl font-semibold text-secondary mb-2", className)}
      {...rest}
    >
      <span className="text-primary mr-1 font-mono text-xl">\\</span>
      {children}
    </h2>
  );
}

export function ProjectSummaryHook({
  children,
  className,
  ...rest
}: ComponentProps<"p">) {
  return (
    <p
      className={cn("text-sm font-medium text-foreground/80 mb-3", className)}
      {...rest}
    >
      {children}
    </p>
  );
}

export function ProjectSummaryDescription({
  children,
  className,
  ...rest
}: ComponentProps<"p">) {
  return (
    <p className={cn("max-w-prose", className)} {...rest}>
      {children}
    </p>
  );
}

export function ProjectSummaryAttributeList({
  className,
  children,
  ...props
}: ComponentProps<"dl">) {
  return (
    <dl
      className={cn("grid grid-cols-[auto_1fr] gap-x-2 gap-y-0.5", className)}
      {...props}
    >
      {children}
    </dl>
  );
}

export function ProjectSummaryAttribute({
  children,
  className,
  ...rest
}: ComponentProps<"dt">) {
  return (
    <dt className={cn("font-mono text-secondary", className)} {...rest}>
      {children}
    </dt>
  );
}

export function ProjectSummaryAttributeValue({
  children,
  className,
  ...rest
}: ComponentProps<"dd">) {
  return (
    <dd className={cn("font-mono", className)} {...rest}>
      {children}
    </dd>
  );
}

export function ProjectSummaryCodeBlock({
  className,
  children,
  ...rest
}: ComponentProps<"figure">) {
  return (
    <figure className={className} {...rest}>
      {children}
    </figure>
  );
}

export function ProjectSummaryCodeBlockCaption({
  children,
  className,
  ...rest
}: ComponentProps<"figcaption">) {
  return (
    <figcaption className={className} {...rest}>
      {children}
    </figcaption>
  );
}
