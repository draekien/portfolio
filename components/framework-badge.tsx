import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

type FrameworkBadgeProps = {
  version:
    | "netstandard2.0"
    | "net8.0"
    | "net10.0"
    | "tanstack-start"
    | "neon"
    | "clerk"
    | "typescript";
} & Omit<ComponentProps<typeof Badge>, "children">;

export function FrameworkBadge({
  version,
  className,
  variant = "outline",
  ...props
}: FrameworkBadgeProps) {
  return (
    <Badge className={cn("rounded-sm", className)} variant={variant} {...props}>
      {version}
    </Badge>
  );
}
