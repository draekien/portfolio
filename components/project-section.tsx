import type { ComponentProps } from "react";
import { BrandMark } from "@/components/brand-mark";
import { cn } from "@/lib/utils";

export function ProjectSectionHeading({
  children,
  className,
  ...rest
}: ComponentProps<"h2">) {
  return (
    <h2 className={cn("text-xl font-semibold mb-6", className)} {...rest}>
      <BrandMark className="text-primary mr-3" />
      {children}
    </h2>
  );
}

export function ProjectSectionDivider({
  children,
  className,
  ...rest
}: ComponentProps<"div">) {
  return (
    <div className={cn("flex items-center gap-4 mb-8", className)} {...rest}>
      <BrandMark className="text-primary shrink-0" />
      <hr className="flex-1 border-border" />
      <h2 className="font-mono text-sm text-secondary tracking-wider shrink-0">
        {children}
      </h2>
      <BrandMark className="text-primary shrink-0" />
    </div>
  );
}
