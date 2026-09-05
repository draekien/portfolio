---
name: William Pei — Portfolio
description: A technical lead's portfolio built like a deliverable: curated, authoritative, built to be read twice.
colors:
  signal-amber: "oklch(0.6823 0.176 46.72)"
  circuit-purple: "oklch(0.74 0.0909 318.07)"
  circuit-purple-light: "oklch(0.38 0.09 318.07)"
  console-blue: "oklch(0.8877 0.0288 218.97)"
  deep-void: "oklch(0.21 0.004 318)"
  paper-white: "oklch(0.9911 0.0055 211.04)"
  ink: "oklch(0.2178 0 0)"
  card-surface: "oklch(0.216 0.006 56.043)"
  muted-surface: "oklch(0.268 0.007 34.298)"
  muted-surface-light: "oklch(0.97 0.001 106.424)"
  muted-text: "oklch(0.709 0.01 56.259)"
  muted-text-light: "oklch(0.52 0.013 58.071)"
  border-subtle: "oklch(1 0 0 / 10%)"
  border-subtle-light: "oklch(0.923 0.003 48.717)"
  signpost-surface: "oklch(0.268 0.007 34.298 / 15%)"
  signpost-surface-light: "oklch(0.97 0.001 106.424 / 50%)"
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
  eyebrow:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.7rem"
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
  "3xl": "1.2rem"
  "4xl": "1.45rem"
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
  signpost:
    backgroundColor: "{colors.signpost-surface}"
    textColor: "{colors.muted-text}"
    rounded: "{rounded.lg}"
    padding: "1.25rem"
  source-callout:
    backgroundColor: "{colors.muted-surface}"
    textColor: "{colors.muted-text}"
    rounded: "{rounded.lg}"
    padding: "1.5rem"
  popover-card:
    backgroundColor: "{colors.card-surface}"
    textColor: "{colors.console-blue}"
    rounded: "{rounded.lg}"
    width: "18rem"
  define-trigger:
    textColor: "{colors.console-blue}"
    typography: "{typography.body}"
---

# Design System: William Pei — Portfolio

## Overview

**Creative North Star: "The Technical Brief"**

This system is built around the idea of a deliverable: structured, authoritative, and designed to reward both a 30-second skim and a careful read. It is not a showcase — it is a document that happens to run in a browser. Every element earns its placement the same way a well-structured architecture decision record earns its bullet points: by carrying information, not decoration.

The system ships two full themes and follows the operating system by default. Dark is where the identity was designed and where it reads best: the audience (engineers, technical recruiters, hiring managers) arrives from a focused working context, and the dark surface with high-contrast reading text meets them where they are. Light is not a downgrade of it — the neutrals invert to paper and ink while the three foreground voices hold their roles — and every new element must be checked in both. Monospace headings signal technical precision before a word is read. Density is calibrated above sparse but below overwhelming — the goal is substance, not noise.

What this system explicitly rejects: blocky card grids that flatten everything to the same visual weight, résumé-dump chronology without editorial selection, scroll-hijacking or motion that exists to demonstrate capability rather than convey information, glassmorphism, and the leerob.com-style bareness that reads as stripped rather than curated. The reference sites are Brittany Chiang (visual interest earned through interactivity) and Emil Kowalski (content quality and presentation) — but denser than Kowalski, more curated than Chiang.

**Key Characteristics:**
- Monospace display type announces technical authority; humanist body type explains it
- Three-voice color system: amber draws the eye, purple structures the page, blue carries the content
- The `\\` double backslash is structural punctuation — it marks where sections begin and ends
- Interactivity is purposeful: hover states convey state, nothing animates without meaning
- Code blocks are first-class visual elements, not afterthoughts
- Every surface is designed twice: the dark identity and its paper-and-ink inversion

## Colors

Three foreground voices share the surface. Each has one job. No voice trespasses on another's territory. The voices keep their roles across both themes; only the neutrals invert.

### Primary
- **Signal Amber**: The eye-catcher. Used for the `\\` brand mark, primary CTAs, and primary display text that must be noticed first. Warm, saturated, impossible to miss against Deep Void. The only color that competes for attention — its rarity is what makes it work. The single theme-invariant colour in the system: identical in light and dark.

### Secondary
- **Circuit Purple**: The structural color. Used for section labels, attribute names (`@published`, `@frameworks`, `@live`), metadata, and the "at InfoTrack" qualifier in the hero heading. Recedes against the surface while remaining readable; it organizes without shouting. This is the one voice that shifts value between themes rather than merely inverting: it lightens against the void and darkens against paper, holding the same hue so the structural role reads the same either way.

### Tertiary
- **Console Blue**: The reading surface in dark. The dominant body text color — cool, slightly blue-shifted, legible at high contrast against Deep Void. This is the color the visitor's eyes rest on. Not white (too clinical), not warm (that belongs to amber). Console Blue is what a terminal foreground looks like after decades of refinement. In light it hands off to Ink, a near-black neutral, because a blue-shifted foreground on paper reads as a tint rather than as text.

### Neutral
- **Deep Void**: Dark-theme background. Near-black with a barely perceptible purple cast inherited from Circuit Purple's hue family. The cast is intentional: it ties the background to the secondary voice and keeps the palette from reading as generic dark-mode gray.
- **Paper White**: Light-theme background. Near-white with a faint cool cast, the counterpart to Deep Void's purple one.
- **Ink**: Light-theme reading text. A true neutral near-black; it takes Console Blue's role when the surface flips.
- **Card Surface**: Card and popover background. In dark, almost identical to Deep Void — the distinction is tonal, not structural. Cards sit at the same visual altitude as the page; they are containers, not elevated surfaces. In light, card and page background are the same value, so a card is defined by its border alone.
- **Muted Surface**: Code blocks, install commands, and muted containers. Visible as a step above the background without competing with content.
- **Muted Text**: Supporting prose, secondary descriptions. Lower contrast than the reading voice; used when text should be present but not primary.
- **Border Subtle**: Dividers, card edges, input outlines. In dark, white at 10% opacity. Low enough to disappear at a glance; present enough to separate regions when needed.

### Named Rules

**The Three-Voice Rule.** Every foreground element speaks in one of three voices: Signal Amber (look here), Circuit Purple (this is structure), the reading voice (this is content). A fourth foreground color requires explicit justification — not aesthetic variety, but a functional distinction that the three voices cannot express.

**The Amber Scarcity Rule.** Signal Amber appears on no more than 15% of any given screen. Its rarity is what makes it work as an eye-catcher. When amber is everywhere, the signal is noise.

**The No-Purple-Brandmark Rule.** The `\\` mark always renders in Signal Amber. Never Circuit Purple. Purple is for labels; amber is the mark.

**The Both-Themes Rule.** No visual element ships checked in one theme only. A surface tuned against Deep Void is frequently invisible against Paper White — the Signpost needs 15% muted surface in dark and 50% in light to read as the same weight — so per-theme opacity is expected, not a smell.

## Typography

**Display Font:** JetBrains Mono (variable weight, Google Fonts)
**Body Font:** Figtree (variable weight, Google Fonts)

**Character:** The pairing inverts the conventional hierarchy. Large statements — headlines, hero text, section labels — are set in a developer monospace. Explanations, descriptions, prose — everything meant to be read continuously — are set in a warm humanist sans. The message: technical precision is the brand's identity; human clarity is how it communicates.

### Hierarchy

- **Display** (JetBrains Mono, 500, `clamp(2.5rem, 6vw, 4.5rem)`, leading 1.1, tracking -0.02em): Hero heading only. Never used for more than two short lines. The font choice at this size is the loudest design statement on the site.
- **Headline** (JetBrains Mono, 500, `clamp(1.875rem, 4vw, 3rem)`, leading 1.2, tracking -0.02em): Section and page-level headings. Maintains the mono voice while stepping down from hero scale.
- **Title** (Figtree, 600, 1.25rem, leading 1.4): Project names and sub-section titles. The transition from mono to sans signals a shift from announcement to content.
- **Body** (Figtree, 400, 1rem–1.125rem, leading 1.75): Hooks, descriptions, prose. Maximum 65–75ch line length. This is where the reader spends most of their time; line length and leading are generous.
- **Label** (JetBrains Mono, 400, 0.875rem, tracking +0.05em): Section metadata, attribute names (`@frameworks`), framework badges, the `$` prompt prefix in install commands. Uppercase tracking is used only for this role — never for prose.
- **Eyebrow** (JetBrains Mono, 400, 0.7rem, tracking wider, uppercase): The kicker inside popover cards — the glossary term above a definition, the reading time above an article excerpt. A step below Label, used only where a card needs to name its own type in the smallest legible voice.

### Named Rules

**The Inversion Rule.** Display and all labels are mono; prose is humanist. This is a deliberate architectural decision, not a default. A Figtree headline is the wrong signal. A JetBrains Mono body paragraph is unreadable at length and defeats the point of the pairing.

**The One-Pair Rule.** This system uses exactly two typefaces. No display serif, no third typeface for special callouts. The weight range within each variable font provides sufficient hierarchy.

## Layout

The site is multi-page with a single centred column and no sidebar chrome. Width is set per surface rather than globally: prose measure (`max-w-prose`) for article and case-study body text, 42rem–48rem (`max-w-2xl` / `max-w-3xl`) for home-page section copy, and 56rem (`max-w-4xl`) for the article shell that has to hold a code block and a table of contents at once. Article body text overrides the prose container's own cap and inherits the measure from the shell.

The header is fixed-height and steps up with the viewport: 5.5rem below 768px, 6rem from 768px, 6.5rem from 1024px, exposed as `--header-height` so anchored scrolling and sticky offsets read one value.

**Breakpoints.** Tailwind defaults, but the system is effectively two-breakpoint. `md` (768px) carries the great majority of responsive behaviour and is where single-column layouts become two-column; `sm` (640px) handles type and spacing adjustments; `lg` (1024px) appears only where a third column or the article TOC needs room. Design mobile-first and treat `md` as the one real layout change.

**Spacing rhythm.** A coarse scale, deliberately: 0.25–0.5rem (`gap-1` / `gap-2`) inside a component, 0.75–1rem (`gap-3` / `gap-4`) between related elements, 1.5rem (`space-y-6`) between blocks in a section, and 4–6rem (`space-y-16` / `space-y-24`) between major sections. The jump from 1.5rem to 4rem is intentional — there is no mid-tier, so section boundaries are unambiguous.

**Article rhythm.** Headings buy their space from the content above them: `h2` takes 3.5em of top margin and `h3` takes 2.5em, set in the `prose-article` utility. This is much wider than typographic defaults and is what lets a long article stay skimmable.

## Elevation & Depth

This system is flat. Depth is conveyed through tonal surface steps and spatial rhythm — never through box shadows.

In dark, Card Surface differs from the Deep Void background by approximately 0.6% lightness. This is intentional: cards do not float above the page, they sit within it. The site has a single visual altitude; hierarchy comes from content density and spacing, not from shadow-based elevation metaphors. In light the two are the same value, so the border does the work the tonal step does in dark.

Popovers and hover cards are the one place a shadow would be conventional, and they explicitly opt out with `shadow-none ring-0`. They are distinguished by their border and background alone.

The only ambient depth is the canvas-rendered dot grid (`BackgroundFx`): a 48px grid of Circuit Purple dots at 10% opacity that swell near the cursor using a lerp-smoothed mouse position. This provides texture without visual weight. It pauses automatically under `prefers-reduced-motion`.

### Named Rules

**The No-Shadow Rule.** Box shadows are prohibited throughout the system. If something needs to appear "above" the page, it belongs in a dialog or a fixed overlay — and those are handled by z-index stacking and a scrim, not shadow depth. A shadow here would read as a design mistake, not a feature.

## Shapes

Corners are gently curved and quiet. The whole radius scale derives from a single 0.45rem base (`--radius`), stepping down 2px and 4px for the tighter sizes and up in 4px increments for the larger ones, so nothing in the system carries a radius that was chosen independently.

Three sizes carry nearly all the work. `rounded-lg` (0.45rem) is the default for any container that holds content: code blocks, callouts, the Signpost, popover cards. `rounded-md` (0.325rem) is for inline chrome that sits inside a container: framework badges, tags, install commands. `rounded-sm` (0.2rem) is for the smallest interactive targets. `rounded-full` is reserved for genuinely circular elements — avatars, dots, icon buttons — and never for pill-shaped text containers.

Borders are 1px and always Border Subtle. There is no second border weight and no accent-coloured border; when a container needs emphasis it gets a tonal background step, not a louder edge. Nothing in the system is clipped to a non-rectangular silhouette.

### Named Rules

**The One-Base Rule.** Every radius derives from `--radius`. A hardcoded corner value in a component means the scale was bypassed, which is a bug rather than a variation.

## Components

### Brand Mark (`\\`)

The site's structural punctuation. A `<span>` rendered in Signal Amber, JetBrains Mono at label size, `aria-hidden="true"` when decorative. It marks section openings and closings, appears in the navigation, and is used as a prefix on page titles. It always renders in amber. It never renders in Circuit Purple. It never sits alone — it is always part of a structural pattern.

**It never pairs with an `@tag`.** The mark and the `@` prefix are alternative kickers, not a pair. `\\` prefixes a plain-language label (`\\ In this article`, `\\ Project`, `\\ Colophon`); an `@tag` stands alone with no mark (`@published`, `@reading-time`, `@frameworks`).

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
- The `@` prefix is structural — it signals metadata, not prose. Always Circuit Purple, JetBrains Mono, label size. The value that follows uses Figtree at body size. It carries no brand mark.

### Popover Card (Define / ArticleLink / LinkNote)

The article surface's one interactive pattern, and the same card three times over: a bordered Card Surface panel at 18rem (`Define`, `LinkNote`) or 20rem (`ArticleLink`), `shadow-none ring-0`, opening on hover or click without moving the text under it.

- **Eyebrow:** mono 0.7rem, uppercase, tracking wider, Circuit Purple — the glossary term, or the target article's reading time.
- **Body:** Figtree 0.875rem, relaxed leading, popover foreground.
- **Action:** Signal Amber link with a 0.875rem `ArrowUpRight`, underlining on hover.
- **Trigger:** inline in running prose, marked with a Signal Amber underline at 40% opacity that reaches full opacity on hover. It must never shift layout.
- **Motion:** `motion-reduce:animate-none` on every one.

### Signpost

The contents notice at the top of every article, and the counterpart to the Colophon that closes one. A faint tonal panel with no border at all: Muted Surface at 15% in dark, 50% in light, `rounded-lg`, 1.25rem padding. The per-theme opacity is required — 15% is invisible on paper, 50% is a grey slab against the void.

Header is `\\ In this article` (Signal Amber mark, Circuit Purple mono label), then the article's purpose in one sentence at body colour, then a numbered list of what it covers with Circuit Purple mono markers. Type sits one step below the article body throughout, so the block reads as apparatus rather than as the opening paragraph.

### Colophon / Source Callout

Two closing asides sharing one shell. `Colophon` is a top-bordered block with no background; `SourceCallout` is a Muted Surface panel at `rounded-lg` with 1.5rem padding and a `ButtonLink` CTA. Both open with `\\ <plain label>` — `Colophon`, `Project`, `Source` — in Signal Amber mark plus Circuit Purple mono label.

### Article Shell
- **Container:** 56rem (`max-w-4xl`), 4rem top and 6rem bottom padding
- **Header:** Display-scale mono title prefixed with the brand mark, then an `@published` / `@reading-time` / `@tags` definition list in Circuit Purple mono at 0.875rem
- **Tags:** mono 0.75rem chips, Muted Surface, Border Subtle, `rounded-md`, 0.5rem × 0.125rem padding
- **Body:** `prose prose-article`, prose colours remapped so headings and links take Signal Amber and body text takes the reading voice

## Do's and Don'ts

### Do:
- **Do** use Signal Amber exclusively for the `\\` brand mark, primary CTAs, and primary display headings. If in doubt about whether something needs amber, it probably needs Circuit Purple instead.
- **Do** set all display headings and section labels in JetBrains Mono — even when the label feels "too technical" for the context. The mono voice is the brand voice.
- **Do** write project hooks in first person: "I built this because…", "I wanted to…". The voice is specific and personal, not third-person professional.
- **Do** treat code blocks as first-class visual content. A Shiki code block in a project summary is doing as much persuasive work as the prose beside it.
- **Do** respect `prefers-reduced-motion` on every custom animation. The canvas background handles this automatically; any new animation must as well.
- **Do** prefix section labels with the `\\` brand mark on both sides of the divider rule. The pattern is [mark] [rule] [label] [mark] — all four elements, always.
- **Do** keep the `@label` attribute convention for project metadata: `@frameworks`, `@live`, `@repository`, `@targets`. Lowercase, mono, Circuit Purple, no brand mark.
- **Do** check every new element in both themes before calling it done, and expect to tune opacity per theme rather than finding one value that works in both.
- **Do** derive every corner from `--radius`. Reach for `rounded-lg` on containers, `rounded-md` on inline chrome.

### Don't:
- **Don't** use glassmorphism, blurred card surfaces, or frosted overlays. The system is flat; depth comes from tonal steps, not blur.
- **Don't** introduce blocky card grids with identical cards at the same visual weight. Project summaries are asymmetric two-column layouts, not card grids.
- **Don't** add scroll-hijacking, parallax layers, or entrance animations that gate content visibility. Per liveblocks.io and rauno.me as anti-references — interactivity must be earned, not performed.
- **Don't** use Circuit Purple for the `\\` brand mark. The No-Purple-Brandmark Rule is absolute.
- **Don't** pair the `\\` mark with an `@tag`. One or the other, never both.
- **Don't** introduce a third typeface. Figtree + JetBrains Mono is complete. A display serif is not a natural extension of this system.
- **Don't** treat the site as a résumé dump. Fewer projects presented with more depth beats a comprehensive list. Every project shown is editorially selected, not exhaustively listed.
- **Don't** use filled button containers in the primary content flow. ButtonLink at `variant="link"` is the affordance. A filled amber button would read as the wrong register.
- **Don't** add decorative horizontal rules, section dividers, or gradient overlays outside the established Section Divider pattern. One structural divider pattern per site. A left border on a callout reads as a blockquote; use a tonal panel instead.
- **Don't** use leerob.com-style bareness — content density and visual substance are part of this site's voice. An empty viewport is a missed opportunity, not restraint.
- **Don't** add box shadows. The No-Shadow Rule is system-wide and absolute.
