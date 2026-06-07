# Voice review: skills-that-teach.mdx

## 1. Verdict

Reads convincingly as William's voice. Conclusion-first structure, certainty gradient, inline cause-effect, and concrete examples are all intact. The deviations are mechanical, not tonal: scattered bold mid-sentence and a habit of italic emphasis where his style relies on word choice instead.

## 2. What works

- Opens on the verdict, not a wind-up: "A coding agent ran my skill and did something useless, perfectly." That is the answer first, reasoning after.
- Motive disclosed plainly - the broken skill was his own, stated flatly ("the skill was one of my own, from an earlier draft").
- Concedes the strongest counterpoint in full ("When rigidity is right anyway" and the paragraph on the real cost of principle-first skills). This is principle 12 done well.
- Australian English where it is his prose: "centre", "artefacts", "parameterised", "Recognise".
- No em dashes anywhere. Hyphens and `...` carry the asides. Clean on the banned-connector rule.
- Cause, effect and trade-off ride in the same sentence repeatedly ("Terseness saves tokens; it does not transfer intent").

## 3. Voice deviations

- **Scattered bold mid-sentence (multiple).** Bold should be section labels only, never emphasis inside running prose.
  - "They call it **degrees of freedom**" (line 33) - bold wraps a `<Define>` mid-sentence.
  - "- **High freedom**: prose heuristics..." / "- **Medium freedom**:..." / "- **Low freedom**:..." (lines 35-37) - inline bold lead-ins inside a dash list.
  - "**Step 1 · Gather requirements...**" and "**Question 1 · Purpose**" (lines 16, 19) - these quote the old skill's own text, so they are arguably defensible as reproduction, but they still read as scattered bold to a reader.
  - "**Workflow scripting**:" (line 85) and "**Code review process**" exists only inside a code block (fine).
  - Fix: drop the bold. Let the `<Define>` component carry the visual weight for "degrees of freedom". For the freedom-dial list, write "High freedom - prose heuristics, for when many approaches are valid." Bold belongs on `##`/`###` headings, which the article already uses correctly.

- **Italic emphasis as a tic (multiple).** His warmth and emphasis come from action words and sentence shape, not from italicising the operative word. Several are quotation/term italics (fine), but the emphasis italics are assistant-flavoured.
  - "as if that path *were* the task" - cut italics; the contrast is already in the words.
  - "it does not transfer intent. A clipped imperative is *more* brittle" (line 58) - cut.
  - "say what good looks like and *why*" (line 70) - cut.
  - "no degree of freedom on the 'interview' step would have helped" / "the runbook that *feels* safe" (line 95), "a skill *for writing skills*" (lines 16, 31), "Anthropic's *own* example" (line 39), "is *none*" (line 83), "the form of *maximum freedom*" (line 50, "*maximum freedom*").
  - Fix: delete the emphasis italics. Keep italics only for genuine quotation of source text (e.g. the quoted instruction "*Number steps sequentially...*", "*trust violation*", "*do not modify this*", "*interview, then write*") where they mark reported speech. Trim the rest; the sentences stand without them.

- **Aphoristic two-beat cadence (strip per public-prose register).** A few lines land as polished aphorism rather than plain statement.
  - "the structure was a costume." (line 87) and "the structure was a costume" echoes the earlier "looks thorough" beat.
  - "The version that stops changing is the one that has quietly become a runbook again." (line 97) - closing aphorism.
  - "So it executes, and fails politely." (line 25) and "it interviewed, invented questions, waited for answers it did not need, and produced a spec nobody wanted. It followed the letter and missed the point." (line 8).
  - Assessment: these are borderline. They are vivid and earned by the surrounding argument, not filler, so most can stay. The one to watch is "the structure was a costume" (line 87), which is the most ornamental and adds nothing the preceding sentence ("Delete the headings. If the skill collapses...") has not already said. Fix: consider cutting "the structure was a costume" as a recap of its own prior sentence.

- **Mild closing-recap risk (line 95-97).** The final two paragraphs restate "the honest rule" after the body has already made the case. The "So the honest rule is not..." construction is a summary move. It is short and adds the per-instruction framing, so it earns its place, but verify it changes what the reader knows rather than recapping. No change required if it is doing work; tighten if it is echoing.

- **Em-dash glyph check - clean.** No `—` present. The `·` middle dots (lines 16, 19) come from the quoted old-skill text, not his connective punctuation, so they do not violate the hyphen rule.

- **American spelling - clean in his prose.** "Analyze", "organization", "maintainability" appear only inside the quoted Anthropic code block (lines 44-47). Those are reproduction of source, correctly left as-is. His own prose is Australian throughout.

## 4. Priority fixes (ordered)

1. Remove scattered bold from running prose and the freedom-dial list (lines 33, 35-37). This is the clearest mechanical violation and the easiest win.
2. Cut emphasis italics that are not quoting source text (lines 25, 50, 58, 70, 83, 95 and the "*for writing skills*" / "*own*" instances). Keep only reported-speech italics.
3. Cut "the structure was a costume" (line 87) as an ornamental recap of the sentence before it.
4. Pressure-test the "So the honest rule is not..." closer (line 95) against the no-recap rule; keep only if it adds the per-instruction test rather than restating the body.
