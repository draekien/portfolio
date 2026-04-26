"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "@/components/brand-mark";
import { cn } from "@/lib/utils";

const sections = [
  { id: "applications", label: "Applications" },
  { id: "libraries", label: "Libraries" },
  { id: "contact", label: "Contact" },
] as const;

type SectionId = (typeof sections)[number]["id"];

function getActiveSection(): SectionId {
  // Near bottom of page → last section is active regardless of scroll position
  const scrollBottom = window.scrollY + window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;
  if (docHeight - scrollBottom < 50) {
    return sections[sections.length - 1].id;
  }

  // Last section whose top has scrolled to or past the nav (≈60px)
  const threshold = 60;
  for (const { id } of [...sections].reverse()) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.getBoundingClientRect().top <= threshold) {
      return id;
    }
  }

  return sections[0].id;
}

export function SectionNav() {
  const [active, setActive] = useState<SectionId>("applications");

  useEffect(() => {
    function onScroll() {
      setActive(getActiveSection());
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
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
