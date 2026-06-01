# Product

## Register

brand

## Users

Recruiters screening candidates, hiring managers, and engineers — arriving from LinkedIn or GitHub where they see a link. Two modes of consumption: quick scanners (recruiters/hiring managers skimming for signal) and deeper readers (engineers evaluating project quality). The site must reward both modes without compromising for either.

## Product Purpose

A personal portfolio for William Pei — Technical Lead at InfoTrack — that demonstrates technical depth through the quality of what it ships, not through a résumé dump. Projects are presented as curated case studies with working demos, code samples, and package docs. Consulting and contract work is a secondary goal: the contact section invites relevant outreach for distributed .NET systems, TypeScript, and architecture work.

Success looks like: a visitor who arrives skeptical leaves thinking "this person knows what they're doing."

## Brand Personality

**Driven. Systematic. Thorough.**

Not flashy. Not humble. Purposeful, not performative. Every element earns its place. Emotional goal: confidence and quiet authority.

## Brand Mark

The `\\` (double backslash) is the site's structural mark — used as a prefix for section labels, page titles, subsection labels, and navigation indicators. Always two characters, never one. Renders in `text-primary` (warm amber `oklch(0.6823 0.176 46.72)`) and `font-mono`, always `aria-hidden="true"` when decorative.

## Anti-references

- leerob.com — too bare; lacks visual substance
- liveblocks.io/blog — too blocky; card-grid overload
- rauno.me — scroll hijacking; gimmicky over purposeful
- Generic: résumé-dump work history, blocky card grids, glassmorphism, generic shadows

## Design Principles

1. **Curated over comprehensive** — fewer things presented with more depth. Quality of presentation over quantity of content.
2. **Earned interactivity** — every animation and hover state conveys information or confirms action. Nothing decorative-only.
3. **Hierarchy through contrast** — purple for structure and labels, amber to draw attention, blue to be read.
4. **Code as content** — syntax-highlighted code blocks are a first-class design element, not an afterthought.
5. **Dark and deliberate** — the dark theme is the right environment for the audience and the content, not a style choice.

## Aesthetic Direction

- **Theme**: Dark primary. Audience sits at a screen in a focused context.
- **Visual richness**: Denser than Emil Kowalski, not as sparse as Lee Rob or Paco. Content feels substantial.
- **Interactivity**: Present and purposeful — like Brittany Chiang's site. Not scroll-jacking, not gimmicky.
- **Hero**: Static. No rotating text. The current statement ("Technical Lead at InfoTrack" + positioning line) is the final direction. Future hero work builds on this foundation; don't reintroduce animation for its own sake.
- **Architecture**: Multi-page. Navigation patterns, page transitions, and layout shells are built for a multi-page site, not a single-page scroll.

**References**: Brittany Chiang (visual interest + interactivity level, but more curated); Emil Kowalski (content quality and presentation, but more visual substance).

## Accessibility & Inclusion

- **Target**: WCAG AAA
- **Color contrast**: 7:1 minimum for normal text, 4.5:1 for large text. Verify all foreground/background combinations.
- **Reduced motion**: Always respect `prefers-reduced-motion`. Every animation must have a non-animated fallback.
- **Typography**: Sufficient size, line-height, and letter-spacing for readability at all breakpoints.
