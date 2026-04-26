"use client";

import { useState } from "react";
import { CaretDownIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const variants = [
  {
    label: "core",
    command: "dotnet add package Waystone.WideLogEvents",
  },
  {
    label: "serilog",
    command: "dotnet add package Serilog.Enrichers.Waystone.WideLogEvents",
  },
  {
    label: "aspnetcore",
    command:
      "dotnet add package Serilog.Enrichers.Waystone.WideLogEvents.AspNetCore",
  },
] as const;

export function ExpandableInstallCommand() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="space-y-1">
      <div className="flex items-center gap-3 bg-muted rounded-md px-4 py-2.5 font-mono text-sm">
        <span className="text-secondary select-none" aria-hidden="true">
          $
        </span>
        <span className="text-foreground flex-1">{variants[0].command}</span>
        <button
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
          {variants.slice(1).map((v) => (
            <div
              key={v.label}
              className="flex items-center gap-3 bg-muted rounded-md px-4 py-2.5 font-mono text-sm"
            >
              <span
                className="text-secondary select-none w-[5.5ch] shrink-0"
                aria-hidden="true"
              >
                {v.label}
              </span>
              <span className="text-foreground">{v.command}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
