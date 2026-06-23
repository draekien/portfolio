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
  "agent-skill": {
    label: "Agent capability",
    summary:
      "A folder of instructions (a SKILL.md file plus optional scripts and reference docs) that an AI agent loads on demand to gain a specific capability. Defined by the open standard at agentskills.io.",
    href: "https://agentskills.io/specification",
    hrefLabel: "The specification",
  },
  "skill-md": {
    label: "File format",
    summary:
      "The single Markdown file at the heart of a skill. Its frontmatter declares the name and the description that decides when the skill activates; the body holds the instructions the agent reads once it does.",
  },
  "progressive-disclosure": {
    label: "Design principle",
    summary:
      "Loading detail only when it is needed: a short, always-loaded body that links out to heavier reference files, so the agent spends its limited context on what the task actually requires.",
  },
  "degrees-of-freedom": {
    label: "Authoring concept",
    summary:
      "How much latitude a skill gives the agent. Tight, exact steps when one wrong move breaks things; loose direction when many paths work and judgment picks the route. Anthropic frames the choice as a narrow bridge versus an open field.",
    href: "https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices",
    hrefLabel: "Anthropic's best practices",
  },
  "context-window": {
    label: "LLM constraint",
    summary:
      "The fixed budget of text a language model can hold in mind at once. The system prompt, the conversation, every loaded skill, and the task itself all compete for the same finite space.",
  },
  "goodharts-law": {
    label: "Management adage",
    summary:
      "When a measure becomes a target, it ceases to be a good measure. Charles Goodhart noted the effect in 1975; Marilyn Strathern gave it this phrasing in 1997. Optimise the proxy hard enough and it stops tracking the thing it was meant to stand for.",
    href: "https://en.wikipedia.org/wiki/Goodhart%27s_law",
    hrefLabel: "Wikipedia",
  },
  "pull-request": {
    label: "Version control",
    summary:
      "A proposed set of code changes submitted for review before it merges into the shared codebase. It is the gate where a teammate reads your work and can request changes before it ships.",
  },
  "use-effect": {
    label: "React hook",
    summary:
      "React's tool for synchronising a component with something outside React: a network request, a subscription, the document title. It is widely misused to compute values that should simply be derived while the component renders.",
    href: "https://react.dev/reference/react/useEffect",
    hrefLabel: "React docs",
  },
  memoisation: {
    label: "Performance technique",
    summary:
      "Caching the result of an expensive computation so it only re-runs when its inputs change. In React, useMemo and useCallback apply this at the component level, preventing redundant work on every render.",
    href: "https://react.dev/reference/react/useMemo",
    hrefLabel: "React docs",
  },
  sdlc: {
    label: "Engineering process",
    summary:
      "Software development lifecycle: the end-to-end process of shipping software - gathering requirements, designing, building, testing, releasing, and maintaining it.",
  },
  prd: {
    label: "Product artefact",
    summary:
      "Product requirements document: the written specification of what a feature must do and why it matters, handed from product to engineering as the starting point for a build.",
  },
  afk: {
    label: "Automation shorthand",
    summary:
      "Away from keyboard: work an agent can complete end to end with nobody watching. Agentic workflows sort tasks into AFK and human-in-the-loop, and try to grow the first pile.",
  },
  agent: {
    label: "AI tooling",
    summary:
      "An LLM wired up with tools - file access, a terminal, a browser - so it can carry out multi-step work on its own, checking in with a human at decision points rather than answering one prompt at a time.",
  },
  sprint: {
    label: "Agile cadence",
    summary:
      "The fixed cycle agile teams plan work in - conventionally one or two weeks of committed work ending in a review. The 'one-day sprint' slogan compresses that whole cycle into a day.",
  },
  "human-in-the-loop": {
    label: "Automation pattern",
    summary:
      "A workflow step that pauses for a human decision before the automation continues. The machine does the legwork; a person makes the call.",
  },
  "product-owner": {
    label: "Agile role",
    summary:
      "The person on a product team accountable for what gets built and in what order. They own the requirements and the priorities, and in most organisations the role is non-technical.",
  },
  "backlog-refinement": {
    label: "Agile ritual",
    summary:
      "The recurring session where engineers and product walk through upcoming work, asking questions until a vague feature request becomes something buildable. Where requirements actually get extracted.",
  },
  "ci-cd": {
    label: "Delivery automation",
    summary:
      "Continuous integration and continuous delivery: the automated pipeline that builds, tests, and ships each code change, so work merges and reaches production in small, frequent steps rather than a big-bang release.",
  },
  uat: {
    label: "Release gate",
    summary:
      "User acceptance testing: the final check where the people who asked for a feature confirm it does what they needed before it goes live. The gate that runs on human judgement, not automation.",
  },
  "cognitive-debt": {
    label: "AI risk",
    summary:
      "A term from a 2025 MIT Media Lab study: leaning on an LLM saves effort now but accrues a long-term cost in weaker recall, less original thought, and shallower grasp of work you nominally produced. Modelled on technical debt.",
    href: "https://www.media.mit.edu/projects/your-brain-on-chatgpt/",
    hrefLabel: "MIT Media Lab",
  },
  "large-language-model": {
    label: "AI model",
    summary:
      "A program trained on a vast amount of text to predict the next chunk of text, one piece at a time. Everything it produces - answers, code, the appearance of reasoning - is that one prediction repeated. ChatGPT and Claude are interfaces built on top of one.",
  },
  token: {
    label: "LLM unit",
    summary:
      "The chunk of text a language model reads and writes in - usually a word-piece rather than a whole word. The model works one token at a time, never with a whole sentence at once.",
  },
  hallucination: {
    label: "LLM failure",
    summary:
      "When a model states something false with the same fluency it states something true. The word frames it as a glitch, but producing plausible text is the model's normal mode - a true statement and a convincing fabrication are made the same way.",
  },
  "chain-of-thought": {
    label: "Prompting technique",
    summary:
      "Having a model generate intermediate steps before its final answer. It measurably improves accuracy on multi-step problems, which is why 'reasoning' models produce it - but the steps are generated text, not a record of how the answer was actually reached.",
    href: "https://arxiv.org/abs/2201.11903",
    hrefLabel: "Wei et al., 2022",
  },
  "stochastic-parrot": {
    label: "AI critique",
    summary:
      "From a 2021 paper by Bender and colleagues: a system that stitches language together by statistical likelihood with no access to meaning. Often borrowed loosely as 'it's just autocomplete', though the paper's own argument was subtler than the slogan.",
    href: "https://dl.acm.org/doi/10.1145/3442188.3445922",
    hrefLabel: "The paper",
  },
  "eliza-effect": {
    label: "Cognitive bias",
    summary:
      "The tendency to read far more understanding into a computer's output than is there. Named by Douglas Hofstadter in 1995, after a 1960s chatbot whose users confided in it knowing full well it was a program.",
    href: "https://en.wikipedia.org/wiki/ELIZA_effect",
    hrefLabel: "Wikipedia",
  },
  rag: {
    label: "LLM architecture",
    summary:
      "Retrieval-augmented generation: bolting a search step onto a model so it fetches relevant documents and reads them before answering, rather than relying on what it absorbed in training. A workaround for the model having no reliable store of facts.",
  },
} satisfies Record<string, GlossaryEntry>;

export type GlossaryTerm = keyof typeof glossary;
