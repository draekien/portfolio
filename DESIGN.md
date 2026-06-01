---
name: William Pei — Portfolio
description: A technical lead's portfolio built like a deliverable: curated, authoritative, built to be read twice.
colors:
  signal-amber: "oklch(0.6823 0.176 46.72)"
  circuit-purple: "oklch(0.5579 0.0909 318.07)"
  console-blue: "oklch(0.8877 0.0288 218.97)"
  deep-void: "oklch(0.21 0.004 318)"
  card-surface: "oklch(0.216 0.006 56.043)"
  muted-surface: "oklch(0.268 0.007 34.298)"
  muted-text: "oklch(0.709 0.01 56.259)"
  border-subtle: "oklch(1 0 0 / 10%)"
typography:
  display:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Figtree, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Figtree, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    letterSpacing: "0.05em"
  code:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "0.2rem"
  md: "0.325rem"
  lg: "0.45rem"
  xl: "0.7rem"
  "2xl": "0.95rem"
spacing:
  xs: "1rem"
  sm: "1.5rem"
  md: "2rem"
  lg: "3rem"
  xl: "4rem"
  "2xl": "6rem"
components:
  button-link:
    textColor: "{colors.signal-amber}"
    typography: "{typography.body}"
    padding: "0"
  brand-mark:
    textColor: "{colors.signal-amber}"
    typography: "{typography.label}"
  install-command:
    backgroundColor: "{colors.muted-surface}"
    textColor: "{colors.console-blue}"
    rounded: "{rounded.md}"
    padding: "0.625rem 1rem"
  framework-badge:
    backgroundColor: "{colors.muted-surface}"
    textColor: "{colors.console-blue}"
    rounded: "{rounded.md}"
    padding: "0.25rem 0.5rem"
  project-attr:
    textColor: "{colors.circuit-purple}"
    typography: "{typography.label}"
---

# Design System: William Pei — Portfolio

## 1. Overview

**Creative North Star: "The Technical Brief"**

This system is built around the idea of a deliverable: structured, authoritative, and designed to reward both a 30-second skim and a careful read. It is not a showcase — it is a document that happens to run in a browser. Every element earns its placement the same way a well-structured architecture decision record earns its bullet points: by carrying information, not decoration.

The aesthetic is dark by necessity, not by trend. The audience (engineers, technical recruiters, hiring managers) arrives from a focused working context. The site meets them where they are: dark surface, high-contrast reading text, monospace headings that signal technical precision before a word is read. Density is calibrated above sparse but below overwhelming — the goal is substance, not noise.

What this system explicitly rejects: blocky card grids that flatten everything to the same visual weight, résumé-dump chronology without editorial selection, scroll-hijacking or motion that exists to demonstrate capability rather than convey information, glassmorphism, and the leerob.com-style bareness that reads as stripped rather than curated. The reference sites are Brittany Chiang (visual interest earned through interactivity) and Emil Kowalski (content quality and presentation) — but denser than Kowalski, more curated than Chiang.

**Key Characteristics:**
- Monospace display type announces technical authority; humanist body type explains it
- Three-voice color system: amber draws the eye, purple structures the page, blue carries the content
- The `\\` double backslash is structural punctuation — it marks where sections begin and ends
- Interactivity is purposeful: hover states convey state, nothing animates without meaning
- Code blocks are first-class visual elements, not afterthoughts

## 2. Colors: The Three-Voice Palette

Three foreground voices share the dark void. Each has one job. No voice trespasses on another's territory.

### Primary
- **Signal Amber** (`oklch(0.6823 0.176 46.72)`): The eye-catcher. Used for the `\\` brand mark, primary CTAs, and primary display text that must be noticed first. Warm, saturated, impossible to miss against Deep Void. The only color that competes for attention — its rarity is what makes it work.

### Secondary
- **Circuit Purple** (`oklch(0.5579 0.0909 318.07)`): The structural color. Used for section labels, attribute names (`@frameworks`, `@live`), metadata, and the "at InfoTrack" qualifier in the hero heading. Recedes against the void while remaining readable; it organizes without shouting.

### Tertiary
- **Console Blue** (`oklch(0.8877 0.0288 218.97)`): The reading surface. The dominant body text color — cool, slightly blue-shifted, legible at high contrast against Deep Void. This is the color the visitor's eyes rest on. Not white (too clinical), not warm (that belongs to amber). Console Blue is what a terminal foreground looks like after decades of refinement.

### Neutral
- **Deep Void** (`oklch(0.21 0.004 318)`): Site background. Near-black with a barely perceptible purple cast inherited from Circuit Purple's hue family. The cast is intentional: it ties the background to the secondary voice and keeps the palette from reading as generic dark-mode gray.
- **Card Surface** (`oklch(0.216 0.006 56.043)`): Card and popover background. Almost identical to Deep Void — the distinction is tonal, not structural. Cards sit at the same visual altitude as the page; they are containers, not elevated surfaces.
- **Muted Surface** (`oklch(0.268 0.007 34.298)`): Code blocks, install commands, and muted containers. Visible as a step above the void without competing with content.
- **Muted Text** (`oklch(0.709 0.01 56.259)`): Supporting prose, secondary descriptions. Lower contrast than Console Blue; used when text should be present but not primary.
- **Border Subtle** (`oklch(1 0 0 / 10%)`): Dividers, card edges, input outlines. White at 10% opacity. Low enough to disappear at a glance; present enough to separate regions when needed.

### Named Rules

**The Three-Voice Rule.** Every foreground element speaks in one of three voices: Signal Amber (look here), Circuit Purple (this is structure), Console Blue (this is content). A fourth foreground color requires explicit justification — not aesthetic variety, but a functional distinction that the three voices cannot express.

**The Amber Scarcity Rule.** Signal Amber appears on no more than 15% of any given screen. Its rarity is what makes it work as an eye-catcher. When amber is everywhere, the signal is noise.

**The No-Purple-Brandmark Rule.** The `\\` mark always renders in Signal Amber. Never Circuit Purple. Purple is for labels; amber is the mark.

## 3. Typography: The Inversion

**Display Font:** JetBrains Mono (variable weight, Google Fonts)
**Body Font:** Figtree (variable weight, Google Fonts)

**Character:** The pairing inverts the conventional hierarchy. Large statements — headlines, hero text, section labels — are set in a developer monospace. Explanations, descriptions, prose — everything meant to be read continuously — are set in a warm humanist sans. The message: technical precision is the brand's identity; human clarity is how it communicates.

### Hierarchy

- **Display** (JetBrains Mono, 500, `clamp(2.5rem, 6vw, 4.5rem)`, leading 1.1, tracking -0.02em): Hero heading only. Never used for more than two short lines. The font choice at this size is the loudest design statement on the site.
- **Headline** (JetBrains Mono, 500, `clamp(1.875rem, 4vw, 3rem)`, leading 1.2, tracking -0.02em): Section and page-level headings. Maintains the mono voice while stepping down from hero scale.
- **Title** (Figtree, 600, 1.25rem, leading 1.4): Project names and sub-section titles. The transition from mono to sans signals a shift from announcement to content.
- **Body** (Figtree, 400, 1rem–1.125rem, leading 1.75): Hooks, descriptions, prose. Maximum 65–75ch line length. This is where the reader spends most of their time; line length and leading are generous.
- **Label** (JetBrains Mono, 400, 0.875rem, tracking +0.05em): Section metadata, attribute names (`@frameworks`), framework badges, the `$` prompt prefix in install commands. Uppercase tracking is used only for this role — never for prose.

### Named Rules

**The Inversion Rule.** Display and all labels are mono; prose is humanist. This is a deliberate architectural decision, not a default. A Figtree headline is the wrong signal. A JetBrains Mono body paragraph is unreadable at length and defeats the point of the pairing.

**The One-Pair Rule.** This system uses exactly two typefaces. No display serif, no third typeface for special callouts. The weight range within each variable font provides sufficient hierarchy.

## 4. Elevation

This system is flat. Depth is conveyed through tonal surface steps and spatial rhythm — never through box shadows.

Card Surface (`oklch(0.216 0.006 56.043)`) differs from Deep Void background (`oklch(0.21 0.004 318)`) by approximately 0.6% lightness. This is intentional: cards do not float above the page, they sit within it. The site has a single visual altitude; hierarchy comes from content density and spacing, not from shadow-based elevation metaphors.

The only ambient depth is the canvas-rendered dot grid (`BackgroundFx`): a 48px grid of Circuit Purple dots at 10% opacity that swell near the cursor using a lerp-smoothed mouse position. This provides texture without visual weight. It pauses automatically under `prefers-reduced-motion`.

### Named Rules

**The No-Shadow Rule.** Box shadows are prohibited throughout the system. If something needs to appear "above" the page, it belongs in a dialog or a fixed overlay — and those are handled by z-index stacking and a scrim, not shadow depth. A shadow here would read as a design mistake, not a feature.

## 5. Components

### Brand Mark (`\\`)

The site's structural punctuation. A `<span>` rendered in Signal Amber, JetBrains Mono at label size, `aria-hidden="true"` when decorative. It marks section openings and closings, appears in the navigation, and is used as a prefix on page titles. It always renders in amber. It never renders in Circuit Purple. It never sits alone — it is always part of a structural pattern.

### Section Divider

The full pattern: `[BrandMark] [hr rule] [Circuit Purple mono label] [BrandMark]`. The hr fills the available horizontal space as a 1px Border Subtle line. The mono label is Circuit Purple, label-size, tracking +0.05em, lowercase. Both marks are Signal Amber. This pattern opens each major section (applications, libraries, contact) and is the most recognizable structural component on the site.

### Buttons / Links
- **Shape:** No visible container. `ButtonLink` uses `variant="link"` — text-only, no background, no border radius at rest.
- **Primary CTA:** Signal Amber text, Figtree body size, zero padding. Hover adds underline.
- **External links:** Same treatment, with an external indicator in the link text.
- **No filled buttons** appear in the primary content flow. The link affordance carries all navigation intent without chrome.

### Install Command
- **Shape:** Muted Surface background, rounded-md (0.325rem)
- **Layout:** Flex row, 0.75rem gap between prompt and command
- **Prompt (`$`):** Circuit Purple, JetBrains Mono label size, `user-select: none`, `aria-hidden="true"`
- **Command text:** Console Blue, JetBrains Mono label size
- **Padding:** 0.625rem vertical, 1rem horizontal

### Code Block (Shiki)
- **Background:** Muted Surface, rounded-lg
- **Syntax:** Shiki dual-theme (separate light/dark tokens via CSS custom properties). The block inherits the current color scheme automatically.
- **Treatment:** First-class visual content. Code blocks are presented at the same visual weight as prose — they are part of the argument, not supplementary material.

### Framework Badges
- **Shape:** Muted Surface bg, Border Subtle outline, rounded-md
- **Typography:** Console Blue, JetBrains Mono, 0.75rem
- **Padding:** 0.25rem × 0.5rem
- **Inline:** Rendered in a flex-wrap row within the `@frameworks` attribute row

### Project Summary
- **Layout:** Two-column grid (`grid-cols-1 md:grid-cols-2`), gap-x-12 gap-y-8, items-start
- **Left column:** `ProjectSummaryHeader` (title → hook → description) + attribute list + CTA
- **Right column:** `ProjectSummaryCodeBlock` — either a Shiki `CodeBlock` or a carousel of project screenshots
- **Vertical rhythm between projects:** 6rem (space-y-24)
- **Attribute list:** `@label-name` in Circuit Purple mono; value in Console Blue Figtree

### Project Attribute Label (`@name`)
- The `@` prefix is structural — it signals metadata, not prose. Always Circuit Purple, JetBrains Mono, label size. The value that follows uses Figtree at body size.

## 6. Do's and Don'ts

### Do:
- **Do** use Signal Amber exclusively for the `\\` brand mark, primary CTAs, and primary display headings. If in doubt about whether something needs amber, it probably needs Circuit Purple instead.
- **Do** set all display headings and section labels in JetBrains Mono — even when the label feels "too technical" for the context. The mono voice is the brand voice.
- **Do** write project hooks in first person: "I built this because…", "I wanted to…". The voice is specific and personal, not third-person professional.
- **Do** treat code blocks as first-class visual content. A Shiki code block in a project summary is doing as much persuasive work as the prose beside it.
- **Do** respect `prefers-reduced-motion` on every custom animation. The canvas background handles this automatically; any new animation must as well.
- **Do** prefix section labels with the `\\` brand mark on both sides of the divider rule. The pattern is [mark] [rule] [label] [mark] — all four elements, always.
- **Do** keep the `@label` attribute convention for project metadata: `@frameworks`, `@live`, `@repository`, `@targets`. Lowercase, mono, Circuit Purple.

### Don't:
- **Don't** use glassmorphism, blurred card surfaces, or frosted overlays. The system is flat; depth comes from tonal steps, not blur.
- **Don't** introduce blocky card grids with identical cards at the same visual weight. Project summaries are asymmetric two-column layouts, not card grids.
- **Don't** add scroll-hijacking, parallax layers, or entrance animations that gate content visibility. Per liveblocks.io and rauno.me as anti-references — interactivity must be earned, not performed.
- **Don't** use Circuit Purple for the `\\` brand mark. The No-Purple-Brandmark Rule is absolute.
- **Don't** introduce a third typeface. Figtree + JetBrains Mono is complete. A display serif is not a natural extension of this system.
- **Don't** treat the site as a résumé dump. Fewer projects presented with more depth beats a comprehensive list. Every project shown is editorially selected, not exhaustively listed.
- **Don't** use filled button containers in the primary content flow. ButtonLink at `variant="link"` is the affordance. A filled amber button would read as the wrong register.
- **Don't** add decorative horizontal rules, section dividers, or gradient overlays outside the established Section Divider pattern. One structural divider pattern per site.
- **Don't** use leerob.com-style bareness — content density and visual substance are part of this site's voice. An empty viewport is a missed opportunity, not restraint.
- **Don't** add box shadows. The No-Shadow Rule is system-wide and absolute.
