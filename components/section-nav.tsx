"use client";

import { BrandMark } from "@/components/brand-mark";
import { useScrollSpy } from "@/lib/use-scroll-spy";
import { cn } from "@/lib/utils";

const sections = [
  { id: "applications", label: "Applications" },
  { id: "libraries", label: "Libraries" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
] as const;

type SectionId = (typeof sections)[number]["id"];

const sectionIds: readonly SectionId[] = sections.map((section) => section.id);

export function SectionNav() {
  const active = useScrollSpy(sectionIds);

  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav
      className="-mx-4 px-4 sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b border-border"
      aria-label="Project sections"
    >
      <div className="container mx-auto flex gap-8 py-3">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            onClick={() => scrollToSection(id)}
            className={cn(
              "font-mono text-sm transition-colors duration-150",
              active === id
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {active === id && <BrandMark className="text-primary mr-1" />}
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
