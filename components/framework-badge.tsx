import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

type FrameworkVersion =
  | "netstandard2.0"
  | "net8.0"
  | "net10.0"
  | "tanstack-start"
  | "neon"
  | "clerk"
  | "typescript"
  | "nextjs"
  | "contentful"
  | "resend";

const displayLabels: Record<FrameworkVersion, string> = {
  "netstandard2.0": ".NET Standard 2.0",
  "net8.0": ".NET 8.0",
  "net10.0": ".NET 10.0",
  "tanstack-start": "TanStack Start",
  neon: "Neon",
  clerk: "Clerk",
  typescript: "TypeScript",
  nextjs: "Next.js",
  contentful: "Contentful",
  resend: "Resend",
};

type FrameworkBadgeProps = {
  version: FrameworkVersion;
} & Omit<ComponentProps<typeof Badge>, "children">;

export function FrameworkBadge({
  version,
  className,
  variant = "outline",
  ...props
}: FrameworkBadgeProps) {
  return (
    <Badge className={cn("rounded-sm", className)} variant={variant} {...props}>
      {displayLabels[version]}
    </Badge>
  );
}
