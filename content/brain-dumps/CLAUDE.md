# content/brain-dumps/ — raw thinking before an article

Pre-writing workspace. One `.md` per idea, named for the working slug it might become (`<slug>.md`). Not `.mdx`, not under `articles/` — the build only reads `content/articles/*.mdx` (`lib/articles.ts`), so nothing here renders on the site. Checked into git as an article's provenance.

These files are developed through the `/brain-dump` skill: dump unstructured thinking into a file, the skill interrogates you to fill the gaps in your reasoning, and folds your answers back in. The skill maintains the files, but you can create or hand-edit any of them — it re-reads fresh each session and treats whatever is there as authoritative, integrating additively rather than overwriting.

A trailing `## Open threads` section (marked skill-maintained) tracks unresolved gaps; it's disposable and rebuilt each session.

No imposed structure — the body is your thinking in whatever shape it took. Turning it into an article is a later, separate stage.
