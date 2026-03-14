# Portfolio v3 — Phase 1 Improvements Design

**Date:** 2026-03-14
**Scope:** Polish existing content (hero + project cards). No new sections.
**Aesthetic:** Minimalist, clean, sleek, professional.

---

## Context

The portfolio currently has two content areas: a hero section and two project cards (Waystone.Monads, Waystone.WideLogEvents). Both areas have a content problem — the hero doesn't communicate the owner's specialisation, and the project cards don't give enough context for a visitor to understand what the projects do or why they matter.

This spec covers surgical content improvements only. Structure and layout are not changed.

---

## 1. Hero

### Problem

The hero leads with a job title ("Technical Lead at InfoTrack") and a rotating text animation cycling through 12 generic phrases ("Elevating Quality", "Improving Delivery", "Raising Standards", etc.). A visitor cannot tell what the person builds or what they specialise in.

The owner's name is already in the header — it does not need to appear in the hero.

### Changes

**1a. Add a static specialism statement**

Insert a single static line that declares the owner's craft and domain. Positioned near the existing heading. No animation.

Proposed copy:
> I build open source .NET libraries for distributed systems.

This line is the new primary message of the hero. It is short, specific, and attributable to a real body of work.

**1b. Replace the rotating text phrases**

The animation mechanism stays. The 12 existing phrases are replaced with specific, technical phrases tied to the owner's actual projects and specialisms:

- "Monadic error handling for .NET"
- "Option&lt;T&gt; and Result&lt;T, E&gt; for C#"
- "Type-safe railway-oriented programming"
- "Wide log events for distributed systems"
- "Structured logging at scale"
- "Open source for the .NET ecosystem"

Six phrases, all concrete. The visitor immediately understands the domain.

### What does not change

- Layout and positioning of the hero
- The animation mechanism and cursor blink
- Typography scale
- The job title / company line

---

## 2. Project Cards

### Problem

Each project card has a one-sentence description that names the pattern but doesn't explain the problem it solves, who it's for, or how it works. A visitor skimming the page cannot evaluate whether the project is relevant to them.

### Changes

**2a. Expand descriptions**

Replace single-sentence descriptions with short paragraphs (3–4 sentences max) that cover:
1. What problem the library solves
2. The approach it takes
3. Who it is for

*Waystone.Monads:*
> Waystone.Monads brings functional error handling to .NET — `Option<T>` for values that may not exist, and `Result<T, E>` for operations that may fail. Eliminates null checks and exception-driven control flow, replacing them with composable, type-safe pipelines. Targets .NET Standard 2.0 and above.

*Waystone.WideLogEvents:*
> Waystone.WideLogEvents implements the wide event logging pattern for .NET — a single structured log entry per request that captures the full context of what happened, rather than a stream of fragmented messages. Built on Serilog with ASP.NET Core middleware integration. Designed for distributed systems where correlation and observability matter.

**2b. Add code snippet per project**

Each card gets one inline code block showing the core API at a glance. This is more persuasive than prose for a technical audience.

The existing `<Code>` component handles inline code. A block variant is needed for multi-line snippets — this will be a new `<CodeBlock>` component using the same styling (JetBrains Mono, existing token colours). No syntax highlighting library is introduced; styling is CSS-only.

*Waystone.Monads snippet:*
```csharp
Option<User> user = repository.Find(id);

return user.Match(
    onSome: u => Results.Ok(u),
    onNone: () => Results.NotFound()
);
```

*Waystone.WideLogEvents snippet:*
```csharp
// One structured log entry per request
app.UseWideLogEventsContext();
app.UseSerilogRequestLogging();

// Push properties — all flush together at request end
WideLogEventContext.PushProperty("userId", userId);
WideLogEventContext.PushProperty("action", "checkout");
```

### What does not change

- The `\Project.Name` title convention
- Framework badges
- GitHub and Gitbook links
- Overall card layout and structure

---

## 3. New Component: `<CodeBlock>`

A multi-line code display component.

**Requirements:**
- Renders a `<pre><code>` block using JetBrains Mono (already configured as `--font-mono`)
- Matches the visual language of the existing `<Code>` inline component
- Accepts a `language` prop (e.g. `"csharp"`) for future syntax highlighting, but rendering is plain text for now
- Supports light and dark mode via existing CSS variables
- No external syntax highlighting dependency

**Placement:** `components/ui/code-block.tsx`

---

## 4. Out of Scope

The following are noted for future phases but are explicitly excluded from this spec:

- About, Blog, Contact sections
- Navigation changes
- Command menu wiring
- CMS or data layer
- Syntax highlighting
- New projects

---

## Success Criteria

1. A technical visitor landing on the page can identify within 5 seconds that this is a .NET open source portfolio
2. Each project card communicates the problem it solves without requiring the visitor to click through to docs
3. The code snippets are accurate — they reflect the real public API of each library
4. No visual regressions in light or dark mode
5. The hero animation continues to function with the new phrases
