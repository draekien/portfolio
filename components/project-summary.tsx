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
}: ComponentProps<"h1">) {
  return (
    <h1
      className={cn("text-2xl font-semibold text-secondary mb-4", className)}
      {...rest}
    >
      <span className="text-primary mr-1 font-mono text-xl">\\</span>
      {children}
    </h1>
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
