---
name: brain-dump
description: Develop a raw, unstructured brain dump into complete, honest thinking by interrogating the author to fill the gaps in their reasoning - before any drafting. Use to capture and develop an article idea in content/brain-dumps/, or when the user says "brain dump", "let me dump my thoughts", "develop this idea", "fill in the gaps in my notes", or "interrogate my brain dump".
---

# Brain Dump

A brain dump is unfiltered thinking, captured fast and out of order. This skill develops that thinking into something whole - not by writing it up, but by questioning it. It finds where the reasoning is incomplete and asks the author to fill the holes, one at a time, until the author judges the thinking done.

It imposes no shape, edits no prose, and never invents the substance the author didn't supply. What happens to the thinking afterward - structuring it, drafting it, refining the prose, reviewing it - is the job of later, separate stages. This stage owns one thing: making sure the author actually knows what they think and why, before a single sentence gets drafted.

## The contract: extract, never fabricate

The thinking has to be the author's. If you supply the idea, the missing step, the example, or the conclusion, the work stops being theirs and everything built on it downstream is built on invention. Your job is to ask the question that makes the author say the thing - not to say it for them. When you can see the obvious answer to your own gap question, that is exactly when you must hold it and ask anyway.

Reflect, probe, and organise what is there. Do not add what is not.

## The files

Brain dumps live in `content/brain-dumps/`, one `.md` file per idea, named for the working slug it might become (`<slug>.md`). They are not `.mdx` and not under `articles/`, so the site build never renders them; they are checked into git as an article's provenance.

You manage these files - create them, fold answers into them, keep them legible. But the author may also create a file or hand-edit one between sessions. So:

- **Read the file fresh at the start of every session.** Never act on your last-known state; it may have changed.
- **Treat whatever is there as authoritative,** whoever wrote it. A file that arrives with three lines and a file you've developed over five rounds get the same respect.
- **Integrate additively. Never clobber the author's words.** Fold new answers in where they belong, in the author's phrasing. If a change would overwrite or discard something you didn't write, ask first.

## The loop

1. **Read** the current file in full.
2. **Reflect the through-line back** as you hear it - a few sentences on what you understand the author to be getting at - so they can correct your read before you dig. A misread caught here saves a round of wrong questions.
3. **Surface the gaps**, grouped and prioritised by what most changes the piece. A few at a time. Never a wall of thirty questions.
4. **Fold the answers in** - whether the author speaks them or types them into the file - placing each where it belongs in their thinking, in their words.
5. **Repeat** until the author calls it done. Completeness is their judgment, not yours.

Keep a short, clearly-marked `## Open threads` section at the foot of the file listing the gaps still unresolved. Mark it as skill-maintained and disposable - it's a status line across sessions and hand edits, not part of the thinking. Rebuild it each session from what's actually still open.

## The gaps to hunt for

These are the holes worth finding in raw thinking. Name them to yourself as you read; ask the author to close them.

- **The leap** - a jump from A to C with the connecting step left out. "What's the move between these two?"
- **The hand-wave** - an assertion resting on nothing stated. "Is this measured, remembered, or assumed?"
- **The dropped thread** - a thought started and abandoned mid-stream. "You began on this and let it go - where was it heading?"
- **The vague term** - "cleaner", "better", "faster" with no referent. "Better than what, and how would you know?"
- **The buried lede** - the most interesting thing said in passing and walked straight past. "This aside is more alive than the rest - is *this* the piece?"
- **The missing tension** - the counter-case the author isn't engaging. "Where would a sharp reader push back, and what's your answer?"
- **The absent so-what** - no stated stakes. "If you're right, what changes for the reader?"
- **The unowned moment** - an event referenced without the lived detail only the author has. "What actually happened? Walk me through it."

## Anti-patterns

- **Supplying the substance** - answering your own gap question, inventing the story, naming the claim the author was groping for. The thinking stops being theirs.
- **Premature structuring** - turning the dump into an outline, a thesis template, or article headings. That narrows the thinking before it's whole and belongs to a later stage.
- **The question avalanche** - surfacing every gap at once. Pick the few that most change the piece this round.
- **Overwriting by hand** - rewriting or deleting what the author wrote because your version reads better. Integrate additively; re-read before each session.
- **Calling it done** - deciding the thinking is complete on the author's behalf. They make that call.
