# Portfolio Content Improvements Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve the hero and project cards so a technical visitor immediately understands the owner's .NET open source specialisation.

**Architecture:** Two isolated changes — a new `CodeBlock` UI component, and content updates in `app/page.tsx`. No structural changes to existing components or layout.

**Tech Stack:** Next.js 16, React 19, TypeScript 5, Tailwind CSS 4, Biome (lint/format). No unit test framework — verification via `pnpm build` (TypeScript) and visual check in `pnpm dev`.

---

## Chunk 1: CodeBlock Component

### Task 1: Create `components/code-block.tsx`

**Files:**
- Create: `components/code-block.tsx`

- [ ] **Step 1.1: Create the file**

```tsx
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  children: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ children, language, className }: CodeBlockProps) {
  return (
    <pre
      data-language={language}
      className={cn("bg-muted rounded-md p-4 overflow-x-auto", className)}
    >
      <code className="font-mono text-sm">{children}</code>
    </pre>
  );
}
```

- [ ] **Step 1.2: Run TypeScript check to verify the file compiles**

```bash
pnpm build
```

Expected: build completes with no TypeScript errors related to `code-block.tsx`.

- [ ] **Step 1.3: Run linter**

```bash
pnpm lint
```

Expected: no errors. If formatting issues are flagged, run `pnpm lint:fix` and re-check.

- [ ] **Step 1.4: Commit**

```bash
git add components/code-block.tsx
git commit -m "feat: add CodeBlock component"
```

---

## Chunk 2: Page Content Updates

### Task 2: Update hero rotating phrases and add static specialism line

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 2.1: Replace rotating phrases in `TextLoopRotatingText`**

In `app/page.tsx`, locate the `rotatingTexts` prop on `<TextLoopRotatingText>` (currently lines ~31–44). Replace the array with:

```tsx
rotatingTexts={[
  "Monadic error handling for .NET",
  "Option<T> and Result<T, E> for C#",
  "Type-safe railway-oriented programming",
  "Wide log events for distributed systems",
  "Structured logging at scale",
  "Open source for the .NET ecosystem",
]}
```

- [ ] **Step 2.2: Add static specialism line inside `<TextLoop>`**

In `app/page.tsx`, between the closing `</h1>` tag and the opening `<div>` of the rotating text row, insert:

```tsx
<p className="text-base md:text-xl text-muted-foreground font-sans">
  I build open source .NET libraries for distributed systems.
</p>
```

The resulting `<TextLoop>` block should look like:

```tsx
<TextLoop className="select-none">
  <h1 className="font-mono">
    <span>Technical Lead</span>{" "}
    <span className="text-muted-foreground/70">at InfoTrack</span>
  </h1>
  <p className="text-base md:text-xl text-muted-foreground font-sans">
    I build open source .NET libraries for distributed systems.
  </p>
  <div className="flex items-center gap-2 md:gap-3 lg:gap-4 font-mono text-xl md:text-3xl lg:text-5xl">
    <Mark className="h-5 md:h-7.5 lg:h-12 text-primary" />
    <TextLoopRotatingText
      rotatingTexts={[
        "Monadic error handling for .NET",
        "Option<T> and Result<T, E> for C#",
        "Type-safe railway-oriented programming",
        "Wide log events for distributed systems",
        "Structured logging at scale",
        "Open source for the .NET ecosystem",
      ]}
    />
  </div>
</TextLoop>
```

- [ ] **Step 2.3: Verify hero visually**

Start dev server:
```bash
pnpm dev
```

Open `http://localhost:3000`. Verify:
- [ ] Static line "I build open source .NET libraries for distributed systems." is visible below the h1
- [ ] Rotating text animation cycles through the 6 new technical phrases
- [ ] Cursor blink still works
- [ ] Layout looks correct in both light and dark mode

- [ ] **Step 2.4: Commit**

```bash
git add app/page.tsx
git commit -m "feat: update hero with specialism statement and focused rotating phrases"
```

---

### Task 3: Update Waystone.Monads project card

**Files:**
- Modify: `app/page.tsx`
- Import: `components/code-block.tsx`

- [ ] **Step 3.1: Add `CodeBlock` import to `app/page.tsx`**

At the top of `app/page.tsx`, add:

```tsx
import { CodeBlock } from "@/components/code-block";
```

The import block should now look like:

```tsx
import { ButtonLink } from "@/components/button-link";
import { CodeBlock } from "@/components/code-block";
import { Code } from "@/components/code";
import { FrameworkBadge } from "@/components/framework-badge";
import Mark from "@/components/mark";
import {
  ProjectSummary,
  ProjectSummaryAttribute,
  ProjectSummaryAttributeList,
  ProjectSummaryAttributeValue,
  ProjectSummaryDescription,
  ProjectSummaryHeader,
  ProjectSummaryTitle,
} from "@/components/project-summary";
import { TextLoop, TextLoopRotatingText } from "@/components/text-loop";
```

- [ ] **Step 3.2: Replace Waystone.Monads description and add code snippet**

Locate the `<ProjectSummaryHeader>` block for `id="waystone-monads"`. Replace its contents with:

```tsx
<ProjectSummaryHeader>
  <ProjectSummaryTitle>Waystone.Monads</ProjectSummaryTitle>
  <ProjectSummaryDescription>
    Waystone.Monads brings functional error handling to .NET —{" "}
    <Code>{"Option<T>"}</Code> for values that may not exist, and{" "}
    <Code>{"Result<T, E>"}</Code> for operations that may fail. Eliminates
    null checks and exception-driven control flow, replacing them with
    composable, type-safe pipelines.
  </ProjectSummaryDescription>
  <CodeBlock language="csharp">{`Option<User> user = repository.Find(id);

return user.Match(
    onSome: u => Results.Ok(u),
    onNone: () => Results.NotFound()
);`}</CodeBlock>
</ProjectSummaryHeader>
```

- [ ] **Step 3.3: Run TypeScript check**

```bash
pnpm build
```

Expected: no TypeScript errors.

- [ ] **Step 3.4: Verify Monads card visually**

With dev server running at `http://localhost:3000`, check:
- [ ] New description is visible and reads clearly
- [ ] `Option<T>` and `Result<T, E>` render as inline code
- [ ] Code snippet block is visible with correct monospace font
- [ ] Card layout is not broken in light and dark mode

- [ ] **Step 3.5: Commit**

```bash
git add app/page.tsx
git commit -m "feat: expand Waystone.Monads description and add API snippet"
```

---

### Task 4: Update Waystone.WideLogEvents project card

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 4.1: Replace Waystone.WideLogEvents description and add code snippet**

Locate the `<ProjectSummaryHeader>` block for `id="waystone-wide-log-events"`. Replace its contents with:

```tsx
<ProjectSummaryHeader>
  <ProjectSummaryTitle>Waystone.WideLogEvents</ProjectSummaryTitle>
  <ProjectSummaryDescription>
    Waystone.WideLogEvents implements the wide event logging pattern for
    .NET — a single structured log entry per request that captures the
    full context of what happened, rather than a stream of fragmented
    messages. Built on Serilog with ASP.NET Core middleware. Designed for
    distributed systems where correlation and observability matter.
  </ProjectSummaryDescription>
  <CodeBlock language="csharp">{`// One structured log entry per request
app.UseWideLogEventsContext();
app.UseSerilogRequestLogging();

// Push properties — all flush together at request end
WideLogEventContext.PushProperty("userId", userId);
WideLogEventContext.PushProperty("action", "checkout");`}</CodeBlock>
</ProjectSummaryHeader>
```

- [ ] **Step 4.2: Run TypeScript check and linter**

```bash
pnpm build && pnpm lint
```

Expected: no errors. If linting flags formatting, run `pnpm lint:fix`.

- [ ] **Step 4.3: Verify WideLogEvents card visually**

With dev server running at `http://localhost:3000`, check:
- [ ] New description is visible and reads clearly
- [ ] Code snippet block is visible with correct monospace font
- [ ] Both project cards look visually consistent with each other
- [ ] No layout issues in light and dark mode

- [ ] **Step 4.4: Final build check**

```bash
pnpm build
```

Expected: clean build with no errors or warnings.

- [ ] **Step 4.5: Commit**

```bash
git add app/page.tsx
git commit -m "feat: expand Waystone.WideLogEvents description and add API snippet"
```
