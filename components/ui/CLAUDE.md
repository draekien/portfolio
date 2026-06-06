# components/ui/ — shadcn primitives

**Generated code — do not hand-edit.** Add or update primitives with the `shadcn` CLI (`pnpm dlx shadcn add <component>`). This directory has its own `biome.json` that relaxes rules for generated code.

These primitives are built on **Base UI (`@base-ui/react`), not Radix.** The component API and props differ from Radix equivalents — e.g. `Popover.Positioner` / `Popover.Popup`. Consult Base UI docs, not Radix, when composing them.

The shadcn **MCP** tools (`view`/`search_items_in_registries`) report deps as `radix-ui`, but the CLI install honours this project's `base-vega` style and emits the **Base UI** variant. Trust the installed file, not the MCP's dependency note.
