import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

// Geometry sourced from public/mark.svg — left two diagonal bars only.
// viewBox clips at y=54; paths extend to y=58 by design to avoid edge gaps.
export function BrandMark({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 53 54"
      fill="currentColor"
      aria-hidden="true"
      className={cn("inline-block h-[0.85em] align-[-0.1em] w-auto", className)}
      {...props}
    >
      <path d="M0,0 H6.012 L29.023,58 H22.911 Z" />
      <path d="M22.852,0 H28.864 L51.875,58 H45.763 Z" />
    </svg>
  );
}
