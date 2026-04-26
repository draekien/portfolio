"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const sections = [
  { id: "applications", label: "Applications" },
  { id: "libraries", label: "Libraries" },
] as const;

type SectionId = (typeof sections)[number]["id"];

export function SectionNav() {
  const [active, setActive] = useState<SectionId>("applications");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        { rootMargin: "0px 0px -60% 0px", threshold: 0 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

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
            onClick={() => scrollToSection(id)}
            className={cn(
              "font-mono text-sm transition-colors duration-150",
              active === id
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {active === id && (
              <span className="text-primary mr-1" aria-hidden="true">
                \\
              </span>
            )}
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
