"use client";

import { CaretDownIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type InstallVariant = {
  label: string;
  command: string;
};

export function ExpandableInstallCommand({
  variants,
}: {
  variants: readonly InstallVariant[];
}) {
  const [expanded, setExpanded] = useState(false);

  const [primary, ...rest] = variants;
  if (!primary) return null;

  return (
    <div className="space-y-1">
      <div className="flex items-center gap-3 bg-muted rounded-md px-4 py-2.5 font-mono text-sm">
        <span
          className="text-secondary select-none shrink-0"
          aria-hidden="true"
        >
          $
        </span>
        <div className="flex-1 min-w-0 overflow-x-auto">
          <span className="text-foreground whitespace-nowrap">
            {primary.command}
          </span>
        </div>
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-label="Show installation variants"
          className="text-muted-foreground hover:text-foreground transition-colors shrink-0 cursor-pointer"
        >
          <CaretDownIcon
            className={cn(
              "size-4 transition-transform duration-200 motion-reduce:transition-none",
              expanded && "rotate-180",
            )}
            aria-hidden="true"
          />
        </button>
      </div>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none",
          expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden space-y-1">
          {rest.map((v) => (
            <div
              key={v.label}
              className="flex flex-col bg-muted rounded-md px-4 py-2.5 font-mono text-sm gap-1"
            >
              <span className="text-secondary select-none" aria-hidden="true">
                {v.label}
              </span>
              <div className="flex items-center gap-3 overflow-x-auto">
                <span
                  className="text-secondary select-none shrink-0"
                  aria-hidden="true"
                >
                  $
                </span>
                <span className="text-foreground whitespace-nowrap">
                  {v.command}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
