---
name: article-review
description: Review a draft article through five independent reviewer perspectives and synthesise prioritised, actionable feedback. Use when reviewing or critiquing an article before publishing, or when the user says "review the article", "get feedback on this draft", "have reviewers look at this", or "critique this piece".
---

# Article Review

A single reviewer reads with a single set of blind spots. The value here is five readers who fail differently: each lens catches a class of problem the others are built to miss, and a flaw that surfaces under two lenses independently is both real and worth fixing first. The deliverable is not five opinions stapled together - it is one prioritised list the author can act on.

## Run the five reviews in isolation

Conduct five reviews of the same article, each with no knowledge of the others. Independence is the whole point: when two reviewers flag the same passage without having seen each other's notes, that convergence is signal rather than coincidence, and it is the clearest guide to where the author should spend effort first. Letting reviewers see each other's work collapses them toward one consensus voice and destroys that signal, so keep them separate until synthesis.

Give each reviewer the full article. When a house style guide exists (such as the [article-writing](../article-writing/SKILL.md) skill), brief every reviewer with it so their feedback targets the established voice and standards rather than offering generic writing advice the author has already decided against.

Each reviewer returns structured findings. For every issue: where it is, what the problem is, why it matters, and a concrete fix. "This could be clearer" is not a finding. "The paragraph on derived state uses the term before defining it, which loses a reader outside the niche - introduce it in one plain sentence at first use" is.

The five lenses are distinct readers, not five passes of the same critique. Hold each one to its perspective:

### The newcomer

A sharp developer from outside the article's specific domain. They catch what familiarity hides: jargon used before it is defined, a missing on-ramp into an unfamiliar concept, a reasoning leap the author no longer notices, the first sentence a non-specialist cannot parse. Their test is whether someone competent but new to the niche can follow the argument end to end without getting stranded.

### The domain engineer

A peer fluent in the article's actual subject. They catch technical inaccuracy: a claim that would not compile, an API used wrongly, a mechanism waved through without explanation, a failure mode described imprecisely ("causes bugs" instead of naming exactly what breaks). This is the reader most likely to hit the one wrong detail that forfeits a technical audience's trust, so weight their factual corrections heavily.

### The engineering manager

A reader who judges the argument's stakes and structure. They catch sag and weak support: repetitive or overlong sections, claims about teams, organisations, or the industry asserted without grounding, a thesis that never pays off, a missing "so what", headings that label rather than carry the argument so a skimmer learns nothing from the table of contents. Their question is whether the piece earns a busy reader's time and whether its claims about practice hold up.

### The structural editor

A developmental editor who reads for the spine rather than the sentence. They catch the failure that hides when every paragraph is individually sound but the whole does not cohere: a thesis that cannot be stated in one line, sections ordered so the argument doubles back or arrives before the ground it stands on, weight misallocated so a minor beat is over-built while the load-bearing turn is rushed past. Their job is to state the single controlling claim, then walk the headings as a logic chain and check that each step follows from the last and earns its length - and when the structure itself is what is broken, to hand back the thesis and the order the argument should take, a rebuild brief rather than a line edit, because no amount of sentence polish rescues a piece that is sound in its parts and incoherent as a whole.

### The devil's advocate

An adversary trying to break the argument. They catch what the author is too close to see: a thesis the conclusion quietly contradicts, overclaiming, an obvious counterargument left unaddressed, a logical gap, the single weakest link in the chain. Their job is to name where the piece is most attackable before a hostile reader does it for them.

## Synthesise into one prioritised list

Collation is where the five reviews become useful. Do not hand back five raw reviews - that pushes the sorting work onto the author, which is the job the skill is meant to do.

Group findings that point at the same underlying problem, even when reviewers phrased them differently. Then order the list by two factors together:

- **Convergence** - how many lenses raised it independently. A flaw two or more reviewers found without coordinating is both confirmed and high-leverage; lead with these.
- **Severity** - what the flaw costs. Breaking reader trust, losing the audience, or contradicting the thesis outranks a missing definition, which outranks a polish-level nit.

Keep every distinct finding worth acting on, including the small ones, but make the priority order explicit so the author knows what to fix first and what can wait. Each item states the problem, its location, why it matters, and a concrete change - the same actionability bar the reviewers were held to.

Surface the convergent findings explicitly as the headline. In practice the two or three problems multiple lenses caught are where revising the article does the most good, and they are easy to lose in a long flat list.

## Gotchas

- **Sycophancy collapses the value.** A reviewer that opens with praise and softens every criticism produces a review that flatters rather than improves. Instruct each lens to lead with problems and state judgments plainly; the author asked for review, not reassurance.
- **Generic writing advice is noise.** Feedback the author could get from any style guide ("vary your sentence length") wastes the pass. Each finding must be specific to this article and this passage.
- **A long unranked list is a non-answer.** Twenty findings with no priority order is barely more useful than the raw reviews. The ranking is the product.
