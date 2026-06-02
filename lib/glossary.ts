export type GlossaryEntry = {
  /** Short category shown as the popover's label, in the Circuit Purple voice. */
  label: string;
  /** The definition or summary. One or two tight sentences. */
  summary: string;
  /** Optional outbound link for reference cards (people, libraries, specs). */
  href?: string;
  /** Link text. Defaults to "Learn more" when an href is present. */
  hrefLabel?: string;
};

export const glossary = {
  "null-reference-exception": {
    label: "Runtime error",
    summary:
      "Thrown when code uses a reference that points to nothing (null) as if it pointed to a real object, by calling a method or reading a property on it. One of the most common crashes in .NET.",
  },
  "sum-type": {
    label: "Type theory",
    summary:
      "A type whose value is exactly one of a fixed set of shapes, where the type spells out which shapes are allowed. Option is a sum type: every value is either Some or None, never both and never a secret third state.",
  },
  "pattern-matching": {
    label: "Language feature",
    summary:
      "Reading a value by writing a branch for each shape it can take, then letting the compiler check that every shape is covered. In Rust, forgetting a branch is a compile error, not a warning.",
  },
  "tony-hoare": {
    label: "Computer scientist",
    summary:
      'British computer scientist who introduced the null reference in ALGOL W in 1965. He later called it his "billion-dollar mistake" for the decades of bugs it caused.',
    href: "https://en.wikipedia.org/wiki/Tony_Hoare",
    hrefLabel: "Wikipedia",
  },
  "waystone-monads": {
    label: ".NET library",
    summary:
      "A direct port of Rust's std::option to .NET: the same Option type, the same Some and None states, the same rule that absence must be handled before you can reach a value.",
    href: "https://github.com/draekien-industries/waystone-dotnet/tree/main/src/Waystone.Monads",
    hrefLabel: "View on GitHub",
  },
  map: {
    label: "Method",
    summary:
      "Transforms the value inside an Option when it exists, and leaves None untouched. The lambda never runs on an absent value, so there is no null to guard against. Rust spells it map too.",
  },
  "flat-map": {
    label: "Method",
    summary:
      "Chains a step that itself returns an Option, flattening a box-inside-a-box into one Option instead of nesting. Each step either produces a value or short-circuits to None. Rust calls this and_then.",
  },
  "match-method": {
    label: "Method",
    summary:
      "Takes one callback for the Some case and one for the None case, then runs whichever applies. There is no overload that accepts only one, so handling absence is not something you can skip.",
  },
} satisfies Record<string, GlossaryEntry>;

export type GlossaryTerm = keyof typeof glossary;
