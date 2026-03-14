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

### Current structure (`app/page.tsx`)

```tsx
<TextLoop className="select-none">
  <h1 className="font-mono">
    <span>Technical Lead</span>{" "}
    <span className="text-muted-foreground/70">at InfoTrack</span>
  </h1>
  <div className="flex items-center gap-2 ... font-mono text-xl md:text-3xl lg:text-5xl">
    <Mark ... />
    <TextLoopRotatingText rotatingTexts={[ ...12 generic phrases ]} />
  </div>
</TextLoop>
```

`TextLoop` is a wrapper `div` with `text-4xl md:text-7xl font-medium tracking-tight leading-snug`. Its children inherit that size unless they override it explicitly.

### Changes

**1a. Add a static specialism statement**

Add a new `<p>` element inside `<TextLoop>`, between the `<h1>` and the rotating text `<div>`. The element should override the inherited typography with smaller classes so it reads as a supporting line, not a headline.

Placement in `app/page.tsx`:
```tsx
<TextLoop className="select-none">
  <h1 className="font-mono">
    <span>Technical Lead</span>{" "}
    <span className="text-muted-foreground/70">at InfoTrack</span>
  </h1>
  {/* NEW — static specialism line */}
  <p className="text-base md:text-xl text-muted-foreground font-sans">
    I build open source .NET libraries for distributed systems.
  </p>
  <div className="flex items-center gap-2 ... font-mono text-xl md:text-3xl lg:text-5xl">
    ...
  </div>
</TextLoop>
```

Do not use the `staticText` prop — it is declared in `TextLoopProps` but is never destructured or rendered by `TextLoopRotatingText`. The static line is a plain JSX element in `page.tsx`.

**1b. Replace the rotating text phrases**

Update the `rotatingTexts` array passed to `<TextLoopRotatingText>` in `page.tsx`. Replace all 12 existing strings with:

```ts
[
  "Monadic error handling for .NET",
  "Option<T> and Result<T, E> for C#",
  "Type-safe railway-oriented programming",
  "Wide log events for distributed systems",
  "Structured logging at scale",
  "Open source for the .NET ecosystem",
]
```

The animation mechanism, cursor blink, gradient styling, and interval timing are unchanged.

### What does not change

- Layout and positioning of the hero section
- The `TextLoop` wrapper and its typography classes
- The `TextLoopRotatingText` component internals
- The job title / company line in the `<h1>`

---

## 2. Project Cards

### Problem

Each project card has a one-paragraph description that names the pattern but doesn't explain the problem it solves, who it's for, or how it works. A visitor skimming the page cannot evaluate whether the project is relevant to them.

### Changes

**2a. Rewrite descriptions**

Replace the content of each `<ProjectSummaryDescription>` block. Type names (`Option<T>`, `Result<T, E>`) must be wrapped in `<Code>` components, consistent with the existing card content.

*Waystone.Monads:*
```tsx
<ProjectSummaryDescription>
  Waystone.Monads brings functional error handling to .NET —{" "}
  <Code>{"Option<T>"}</Code> for values that may not exist, and{" "}
  <Code>{"Result<T, E>"}</Code> for operations that may fail. Eliminates
  null checks and exception-driven control flow, replacing them with
  composable, type-safe pipelines.
</ProjectSummaryDescription>
```

*Waystone.WideLogEvents:*
```tsx
<ProjectSummaryDescription>
  Waystone.WideLogEvents implements the wide event logging pattern for
  .NET — a single structured log entry per request that captures the full
  context of what happened, rather than a stream of fragmented messages.
  Built on Serilog with ASP.NET Core middleware. Designed for distributed
  systems where correlation and observability matter.
</ProjectSummaryDescription>
```

**2b. Add a code snippet per project**

Add a `<CodeBlock>` component (see Section 3) inside `<ProjectSummaryHeader>`, immediately after `<ProjectSummaryDescription>`. (`ProjectSummaryHeader` is a `<header>` element; `ProjectSummaryAttributeList` is a sibling `<dl>` at the `<ProjectSummary>` level and is not affected.)

Add the import to `page.tsx`:
```tsx
import { CodeBlock } from "@/components/code-block";
```

*Waystone.Monads snippet:*
```csharp
Option<User> user = repository.Find(id);

return user.Match(
    onSome: u => Results.Ok(u),
    onNone: () => Results.NotFound()
);
```

Note: `Match<TResult>` is generic on return type. Both `Results.Ok(u)` and `Results.NotFound()` return `IResult`, so the type is inferred correctly. This matches the real public API.

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
- `ProjectSummaryAttributeList` structure

---

## 3. New Component: `<CodeBlock>`

A multi-line code display component for use in project cards.

**File:** `components/code-block.tsx` (alongside the existing `components/code.tsx`)

**Props interface:**
```ts
interface CodeBlockProps {
  children: string;        // the code string to display
  language?: string;       // e.g. "csharp" — stored as data-language, not rendered
  className?: string;
}
```

**Rendering:**
```tsx
<pre
  data-language={language}
  className={cn("bg-muted rounded-md p-4 overflow-x-auto", className)}
>
  <code className="font-mono text-sm">{children}</code>
</pre>
```

Tokens used:
- `bg-muted` — same background as `<Code>`, works in light and dark mode via the existing CSS variable
- `rounded-md` — consistent with the design system's base radius
- `p-4` — comfortable padding for multi-line content
- `overflow-x-auto` — prevents layout breakage on long lines
- `font-mono text-sm` — matches `<Code>` exactly

No external syntax highlighting library is introduced.

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

1. The hero section contains a visible static `<p>` element that is not wrapped in `AnimatePresence` or any `motion.*` component, and includes the words ".NET" and "distributed systems"
2. Each project card description communicates the problem the library solves without requiring the visitor to click through to docs
3. The Monads snippet compiles: `Option<T>.Match` is called with two `Func<>` delegates returning the same type
4. The WideLogEvents snippet matches the real `WideLogEventContext` API: `public static void PushProperty(string name, object? value)` and `public static IServiceCollection UseWideLogEventsContext(this IApplicationBuilder app)` are public surface from the library source
5. No visual regressions in light or dark mode
6. The hero animation continues to function with the six new phrases
