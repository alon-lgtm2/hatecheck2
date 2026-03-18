export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const articles: Article[] = [
  {
    slug: "understanding-ihra-definition",
    title: "Understanding the IHRA Working Definition of Antisemitism",
    excerpt:
      "A practical guide to applying the International Holocaust Remembrance Alliance working definition — its scope, its examples, and why it matters for digital monitoring.",
    category: "Standards",
    date: "2025-01-15",
    readTime: "8 min read",
    tags: ["IHRA", "Definitions", "Standards", "Policy"],
    content: `
The IHRA (International Holocaust Remembrance Alliance) Working Definition of Antisemitism, adopted in 2016, has become the most widely cited standard for identifying antisemitism in policy, law enforcement, and platform moderation contexts. Thirty-five countries have formally adopted it, including the Netherlands, making it a cornerstone of Europe's institutional response to Jew-hatred.

## What the Definition Says

At its core, the IHRA definition states: "Antisemitism is a certain perception of Jews, which may be expressed as hatred toward Jews. Rhetorical and physical manifestations of antisemitism are directed toward Jewish or non-Jewish individuals and/or their property, toward Jewish community institutions and religious facilities."

This deliberately broad framing is not a weakness — it is designed to capture the protean nature of modern antisemitism, which constantly mutates to evade simple pattern-matching.

## The Contemporary Examples

The definition's real utility lies in its 11 contemporary examples, which translate abstract principle into concrete recognition criteria. These include:

**Israel-related antisemitism**: Denying the Jewish people their right to self-determination; applying double standards to Israel not required of any other democratic state; using symbols and imagery associated with classic antisemitism to characterize Israel or Israelis.

**Holocaust denial and distortion**: Denying the fact, scope, mechanisms, or intentionality of the Holocaust; accusing Jews as a people of being responsible for real or imagined wrongdoing committed by a single Jewish person or group.

**Classic tropes modernized**: Accusing Jews of controlling media, economy, government, or other societal institutions; drawing comparisons of contemporary Israeli policy to that of the Nazis.

## Why It Matters for Digital Intelligence

In the context of automated monitoring and AI-assisted classification, the IHRA definition provides a structured taxonomy that can be operationalized. Each of the 11 examples can be mapped to linguistic patterns, semantic clusters, and contextual markers that AI systems can detect.

However, the IHRA definition is explicitly not a legal definition. It does not establish criminal liability, and it explicitly states it should not be read to prohibit criticism of Israel. This distinction is critical for any classification system: meeting the IHRA threshold for antisemitism does not automatically mean content is criminal.

## Complementary Frameworks

No single definition suffices. The Jerusalem Declaration on Antisemitism (JDA) and the Nexus Document provide important complementary frameworks, particularly for cases involving Israel-related discourse where the line between political criticism and antisemitic incitement is contested.

HateCheck's methodology integrates all three frameworks alongside Dutch legal standards to produce nuanced, defensible classifications that can withstand scrutiny in both institutional and legal contexts.
    `.trim(),
  },
  {
    slug: "coded-language-detection",
    title: "Coded Language and Dog Whistles: The Challenge for AI Detection",
    excerpt:
      "How antisemitism hides in plain sight using historical codes, memes, and plausible deniability — and what modern AI systems must do to detect it effectively.",
    category: "Technology",
    date: "2025-02-08",
    readTime: "10 min read",
    tags: ["AI", "Detection", "Coded Language", "Methodology"],
    content: `
One of the most persistent challenges in automated hate speech detection is the use of coded language — expressions that carry recognizable meaning to their intended audience while remaining opaque or plausibly innocent to outsiders. This deniability is not accidental; it is by design.

## The Architecture of Plausible Deniability

Antisemitic coded language operates on multiple levels simultaneously. At the surface level, a statement may appear to be innocuous commentary about finance, media, or politics. At a deeper level, the same statement activates a reservoir of historical stereotypes and conspiratorial frameworks familiar to those steeped in antisemitic discourse.

Consider the triple parentheses notation ((( ))), used to tag Jewish names online. To an uninformed observer, it appears meaningless. To its creators and users, it signals Jewish identity for targeting purposes. By the time platforms understood and began moderating it, the practice had already mutated into adjacent forms.

## Numeric Codes and Symbols

The (((echo))) symbol is one example of a broader phenomenon: the use of numeric codes, symbols, and memes to communicate antisemitic content while evading keyword-based detection. Other examples include references to "the happy merchant," the "14 words" (a white supremacist slogan), the use of "globalist" as a synonym for Jewish influence, and the deployment of the hand-rubbing emoji in specific contexts.

These codes are contextually dependent. The same word, symbol, or image may be entirely benign in one context and deeply hateful in another. This context-dependence poses a fundamental challenge for lexicon-based filtering approaches.

## Why Traditional NLP Fails

First-generation hate speech detection models relied heavily on keyword matching and bag-of-words approaches. These fail systematically against coded language because:

1. The harmful content is conveyed semantically, not lexically
2. The same lexical items appear in both hateful and non-hateful contexts
3. Codes are updated faster than static lexicons can be maintained
4. Multimodal hate speech (images + text) requires visual understanding

## What Works Better

Modern detection systems must combine multiple approaches: contextual embeddings that capture semantic relationships beyond individual words; community-level behavioral signals that track propagation patterns; knowledge graphs that encode the structure of antisemitic conspiracy theories; and human-in-the-loop review for borderline cases.

HateCheck's approach layers these methods, using large language models for initial classification, specialized fine-tuned models for antisemitism-specific trope detection, and legal framework mapping to produce tier assignments that are both technically grounded and legally defensible.

The goal is not to produce a perfect automated classifier — no such thing exists. The goal is to produce a reliable triage system that surfaces the cases most in need of human review while providing structured, documented reasoning for every classification decision.
    `.trim(),
  },
  {
    slug: "dutch-penal-code-hate-speech",
    title: "Dutch Penal Code and Hate Speech: Articles 137c, 137d, and 137e Explained",
    excerpt:
      "A practical legal guide to the Dutch criminal provisions that govern hate speech — how they work, what they cover, and where the enforcement challenges lie.",
    category: "Legal",
    date: "2025-02-22",
    readTime: "12 min read",
    tags: ["Dutch Law", "Legal", "137c", "137d", "137e", "Netherlands"],
    content: `
The Netherlands maintains a relatively robust set of criminal provisions targeting hate speech and group defamation, concentrated in Articles 137c through 137e of the Dutch Penal Code (Wetboek van Strafrecht). Understanding these provisions is essential for anyone involved in documenting, reporting, or responding to antisemitism and hate speech in a Dutch legal context.

## Article 137c: Group Defamation (Groepsbelediging)

Article 137c criminalizes deliberately insulting a group of persons on account of their race, religion or belief, hetero- or homosexual orientation, or physical, psychological, or mental disability. The maximum sentence is one year of imprisonment or a Category 3 fine.

Several elements require careful analysis in any potential 137c case:

**Intentionality**: The insult must be deliberate (opzettelijk). Reckless or negligent speech generally falls outside the provision's scope.

**Public context**: The statement must be made publicly — in a public space, via media, or in print. Private communications are not covered.

**Group identity**: The group must be defined by one of the listed protected characteristics. Antisemitic speech targeting Jews as a religious or ethnic group clearly falls within scope.

**Insult threshold**: Not all critical or offensive speech meets the insult threshold. Courts have repeatedly held that robust political debate, including strong criticism of groups' religious practices or beliefs, is protected.

## Article 137d: Incitement (Aanzetten tot Haat)

Article 137d goes further, criminalizing public incitement to hatred against, discrimination of, or violence against persons or goods on account of their race, religion, sexual orientation, or disability. Maximum sentence: two years of imprisonment or a Category 4 fine.

The incitement element requires that the expression be likely to provoke hostile action against the targeted group, not merely express a hostile attitude. This higher threshold has made prosecutions under 137d more demanding than under 137c.

## Article 137e: Distribution of Hate Materials

Article 137e addresses the distribution, publicly exhibited, or having in possession for distribution of objects containing expressions that group-defame (137c) or incite (137d). This provision is particularly relevant in the digital context — sharing, reposting, or hosting hateful content can trigger liability even if the sharer did not create the content.

## Enforcement Challenges

Despite these provisions, enforcement remains spotty. The Public Prosecution Service (OM) has traditionally applied a high threshold for prosecution, preferring to reserve criminal law for the most severe cases. Resource constraints, evidentiary requirements for online speech, and the cross-border nature of much online content create practical barriers.

Additionally, the Netherlands' commitment to freedom of expression, enshrined in Article 7 of the Dutch Constitution and Article 10 of the ECHR, means courts routinely apply proportionality analysis that requires the most serious cases to justify criminal intervention.

## Implications for Classification

For HateCheck's tier system, the Dutch Penal Code thresholds inform Tiers 4 and 5. Tier 4 content potentially meets the threshold for one or more of Articles 137c-137e and should be evaluated with professional legal judgment. Tier 5 content involves immediate threats or incitement to imminent violence requiring urgent referral to law enforcement.

Tiers 1-3 involve content below the criminal threshold — but this does not mean it is unimportant. Antisemitic content that does not meet criminal standards may still warrant institutional responses including platform reporting, documentation, and community notification.
    `.trim(),
  },
  {
    slug: "jerusalem-declaration-nexus-comparison",
    title: "JDA vs. Nexus vs. IHRA: Which Definition Should You Use?",
    excerpt:
      "A comparative analysis of the three major definitional frameworks for antisemitism and how HateCheck integrates them into a coherent, layered methodology.",
    category: "Analysis",
    date: "2025-03-05",
    readTime: "9 min read",
    tags: ["JDA", "Nexus", "IHRA", "Analysis", "Methodology"],
    content: `
The debate over how to define antisemitism — particularly in the context of Israel-related discourse — has produced three major frameworks that differ significantly in their approach, scope, and political reception. Understanding the differences between them is essential for anyone designing a classification methodology that must be both accurate and defensible.

## The Three Frameworks at a Glance

The **IHRA Working Definition** (2016) is the most institutionally adopted, with backing from 35+ countries. It provides a broad core definition supported by 11 contemporary examples, several of which address Israel-related speech. Critics argue that some examples conflate political criticism of Israel with antisemitism in ways that could suppress legitimate discourse.

The **Jerusalem Declaration on Antisemitism (JDA)** (2021) emerged partly as a response to IHRA, developed by a group of predominantly academic scholars. It explicitly separates "criticism of Israel similar to that leveled at other countries" from antisemitism and provides more granular guidance on the Israel-antisemitism boundary. Its institutional adoption has been more limited.

The **Nexus Document** (2021), developed by the Nexus Task Force, takes yet another approach, focusing specifically on Israel-related antisemitism. It offers a two-part test: speech is antisemitic when it targets Israel because it is Jewish, or when it applies antisemitic tropes to Israeli/Jewish actions. The Nexus document explicitly preserves wide latitude for anti-Israel political expression.

## Key Differences in Practice

**On Israel-related speech**: The IHRA definition's example stating that "Denying the Jewish people their right to self-determination, e.g., by claiming that the existence of a State of Israel is a racist endeavor" is antisemitic has been the most contested. JDA and Nexus both explicitly allow this view to be held as political opinion, however objectionable, without automatically being antisemitic.

**On Holocaust analogies**: IHRA prohibits "Drawing comparisons of contemporary Israeli policy to that of the Nazis." JDA takes a more nuanced position, holding that comparisons depend on context and what specifically is being compared.

**On accountability**: IHRA explicitly notes that "criticism of Israel similar to that leveled at other countries cannot be regarded as antisemitic." JDA and Nexus provide more detailed frameworks for applying this principle.

## HateCheck's Integrated Approach

Rather than selecting one framework and discarding others, HateCheck's methodology uses all three in a layered manner:

1. **IHRA** provides the primary framework for all cases not directly related to Israel
2. **JDA guidance** is applied as a secondary check for Israel-related content
3. **Nexus** analysis is applied specifically to cases where the Israel-antisemitism boundary is contested

This approach produces more defensible classifications, particularly for Tier 2 (borderline/context-needed) cases. A piece of content might meet IHRA's threshold under one example while falling into JDA's explicitly protected category — this nuance is precisely what Tier 2 is designed to capture.

## Practical Implications

For institutions adopting one of these frameworks as policy, the choice carries significant implications. Organizations bound by Dutch law should note that none of these frameworks directly maps to legal standards — criminal liability under Articles 137c-e requires separate analysis.

For HateCheck users, tier assignments always specify which frameworks were applied and how, creating an auditable, contestable record rather than a black-box verdict.
    `.trim(),
  },
  {
    slug: "building-incident-database",
    title: "Building an Incident Database: Best Practices for Antisemitism Monitoring Organizations",
    excerpt:
      "Practical guidance for organizations documenting antisemitic incidents — from initial intake to database architecture, legal considerations, and reporting standards.",
    category: "Guides",
    date: "2025-03-12",
    readTime: "11 min read",
    tags: ["Documentation", "Organizations", "Best Practices", "Database"],
    content: `
For organizations tasked with monitoring and documenting antisemitic incidents — whether Jewish community organizations, civil society groups, academic researchers, or government bodies — establishing a rigorous, consistent incident database is foundational to effective advocacy, research, and policy intervention.

## Why Consistency Matters

Inconsistent documentation produces data that cannot be aggregated, compared over time, or used for credible policy advocacy. The European Union Agency for Fundamental Rights (FRA) has repeatedly highlighted the fragmentation of hate crime data across member states as a critical barrier to effective response.

A well-designed incident database serves multiple functions: it creates an evidentiary record usable in legal proceedings; it enables trend analysis that can identify escalating threat environments before they culminate in violence; it supports funding applications by demonstrating the scale and nature of the problem; and it provides the raw material for public reporting and research.

## Core Data Fields

Regardless of the specific focus area, every incident record should capture:

**Incident metadata**: Date, time, location (jurisdiction, city, specific venue if relevant), platform (for online incidents).

**Classification fields**: Type of incident (verbal, written, physical, vandalism, online), targeted group characteristic, incident category (slur, trope, threat, violence, etc.), severity tier.

**Evidence documentation**: Screenshots, URLs, witness statements, physical evidence descriptions. All evidence should be captured at the point of reporting since online content is frequently deleted.

**Source and reporter information**: Whether the report comes from a victim, witness, law enforcement referral, media monitoring, or other source. Reporter identity should be stored separately from incident records for privacy protection.

**Legal assessment fields**: Whether the incident has been reported to police, the reference number if so, and the outcome of any criminal proceedings.

## Privacy and Legal Considerations

Incident databases containing personal information are subject to GDPR in the Netherlands and across the EU. Organizations must ensure they have a lawful basis for processing personal data, maintain appropriate security measures, and establish retention policies.

A particular consideration: databases containing information about perpetrators implicate Article 10 of the GDPR, which imposes strict conditions on processing data relating to criminal convictions and offenses. Legal advice should be sought before capturing or retaining perpetrator-identifying information.

For online incident documentation, intellectual property and evidence integrity considerations apply. Screenshots should be captured with metadata intact, and original URLs recorded even if the content is subsequently deleted.

## Integration with Classification Standards

Organizations should adopt a consistent classification taxonomy aligned with recognized standards — ideally the IHRA framework for antisemitism specifically, supplemented by the national legal framework (in the Netherlands, Articles 137c-e). HateCheck's five-tier system provides a ready-made, internationally grounded taxonomy that organizations can adopt directly.

Adopting a shared taxonomy enables cross-organizational data sharing and aggregation, which is particularly valuable for small organizations that individually lack the data volume for meaningful trend analysis.

## Reporting and Accountability

Raw data must be translated into actionable intelligence. Regular internal review of incident data — monthly or quarterly — enables organizations to identify emerging trends, assess whether response protocols are effective, and adapt monitoring strategies accordingly.

Annual public reports, even if high-level, build credibility with funders, policymakers, and media, and contribute to the collective knowledge base on antisemitism trends.
    `.trim(),
  },
  {
    slug: "osint-for-good",
    title: "OSINT for Good: How Open-Source Intelligence Fights Hatred",
    excerpt:
      "Open-source intelligence techniques can be a powerful force against hate — but only when deployed with transparency, ethical guardrails, and respect for civil liberties.",
    category: "Technology",
    date: "2025-03-01",
    readTime: "6 min read",
    tags: ["OSINT", "Technology", "Ethics"],
    content: `
Open-source intelligence — commonly known as OSINT — refers to the collection and analysis of information from publicly available sources. This includes social media posts, public records, news articles, forum discussions, and any other data that is freely accessible without requiring unauthorized access to private systems.

In the context of hate speech monitoring, OSINT techniques allow organizations to systematically track, document, and analyze antisemitic content across the digital landscape. But the power of these techniques comes with serious ethical responsibilities that any credible organization must address head-on.

<h2>What OSINT Means in Practice</h2>

<p>For HateCheck, OSINT means monitoring publicly posted content on social media platforms, public forums, news comment sections, and other open digital spaces. We do not access private messages, hack accounts, or use deceptive methods to obtain information. Every piece of content we analyze was posted publicly by its author, accessible to anyone with an internet connection.</p>

<p>The technical methods involved include structured search queries, public API access where platforms permit it, and systematic documentation of content that may be removed by platforms or authors. This last point is particularly important: antisemitic content is frequently deleted after being reported, making contemporaneous documentation essential for legal proceedings and trend analysis.</p>

<h2>The Ethical Line: Investigation vs. Surveillance</h2>

<p>The distinction between legitimate monitoring and invasive surveillance is not merely academic — it is the foundation of ethical OSINT practice. Surveillance implies watching individuals. Monitoring, as HateCheck practices it, means tracking public expressions of hatred that target communities.</p>

<p>We apply several principles to maintain this boundary. First, we focus on content, not individuals. Our classification system evaluates what was said, not who said it. Personally identifying information about content authors is not part of our analytical output unless the content constitutes a credible threat requiring law enforcement referral. Second, we never create fake accounts or personas to infiltrate closed groups. If a community is private, it is outside our scope. Third, we do not build profiles or dossiers on individuals based on aggregated public posts.</p>

<h2>How HateCheck Uses OSINT Responsibly</h2>

<p>HateCheck's OSINT methodology is designed to produce structured, classified incident data — not to target people. Content enters our pipeline, receives a tier classification based on the IHRA, JDA, Nexus, and Dutch legal frameworks, and is stored as an anonymized, classified record. The analytical output focuses on patterns, trends, and severity distributions rather than individual actors.</p>

<p>When content reaches Tier 4 or Tier 5 — indicating potential criminal liability or immediate threat — the documentation package is prepared for referral to law enforcement or platform safety teams. Even in these cases, the referral contains only the minimum necessary information: the content itself, its classification reasoning, and the platform metadata needed to locate it.</p>

<h2>Why Transparency Matters</h2>

<p>Perhaps the most important ethical commitment an OSINT-based organization can make is transparency about its methods. HateCheck addresses this directly by making our AI classification prompts visible to users. When our system classifies a piece of content, users can see exactly what instructions the AI received, what frameworks were applied, and how the classification was produced.</p>

<p>This transparency serves multiple purposes. It makes our methodology auditable by external parties. It allows users to contest classifications they believe are incorrect. And it establishes a standard of openness that we believe all organizations using AI for content classification should adopt. In an era of algorithmic opacity, showing your work is not optional — it is an ethical obligation.</p>
    `.trim(),
  },
  {
    slug: "from-detection-to-action",
    title: "From Detection to Action: Closing the Gap in Antisemitism Response",
    excerpt:
      "Detecting antisemitism is only the first step. The real challenge is turning detection into structured, timely, and effective institutional response.",
    category: "Analysis",
    date: "2025-02-15",
    readTime: "5 min read",
    tags: ["Analysis", "Response", "Workflow"],
    content: `
Every organization that monitors antisemitism faces the same frustrating pattern: incidents are detected, documented, and then — nothing happens. Reports sit in inboxes. Platform complaints disappear into queues. Police reports are filed but never followed up. The gap between detection and meaningful response is where most anti-hate efforts quietly fail.

<h2>The Current Problem</h2>

<p>Detection capabilities have improved dramatically in recent years. AI systems can now identify antisemitic content with reasonable accuracy, social media monitoring tools can surface relevant posts in near-real-time, and community reporting networks have become more organized. The bottleneck is no longer finding the content — it is knowing what to do with it once found.</p>

<p>Consider a typical scenario: a monitoring organization identifies a social media post containing explicit antisemitic incitement. The post is documented and classified. But then what? Should it be reported to the platform? To the police? To the affected community? All three? In what order? Using what format? Who is responsible for each step? And how does the organization track whether any of these actions produced a result?</p>

<h2>Why the Gap Exists</h2>

<p>Three structural problems perpetuate the detection-to-action gap. First, fragmented tooling. Most organizations use separate systems for monitoring, documentation, classification, and reporting. Content is discovered in one tool, copied to a spreadsheet, manually classified, and then reformatted for each reporting destination. Every handoff introduces delay, error, and friction.</p>

<p>Second, unclear thresholds. Without a consistent classification framework, organizations struggle to determine which incidents warrant which responses. Is this post merely offensive, or does it cross a legal threshold? Should it be escalated immediately, or documented for a quarterly report? Different staff members answer these questions differently, producing inconsistent responses.</p>

<p>Third, reporting friction. Filing a police report for online hate speech in the Netherlands requires specific documentation formats. Platform complaints require different formats. DSA-compliant trusted flagger submissions require yet another format. The administrative burden of reformatting the same incident for multiple destinations is a significant deterrent to action.</p>

<h2>How Structured Workflows Change the Game</h2>

<p>The solution is not more detection — it is structured response workflows that connect detection directly to action. A structured workflow defines, for each severity level, exactly what actions should be taken, by whom, in what timeframe, and using what documentation format.</p>

<p>This transforms response from an ad hoc judgment call into a repeatable process. When a Tier 3 incident is classified, the workflow automatically specifies: document for internal records, submit platform complaint using template A, flag for inclusion in quarterly report. When a Tier 5 incident is classified: immediate law enforcement referral using template B, notify community security, submit emergency platform takedown request.</p>

<h2>HateCheck's Five-Step Pipeline</h2>

<p>HateCheck's approach integrates detection and response into a single pipeline with five stages. Stage one is intake — content enters the system via direct submission, API integration, or manual entry. Stage two is classification — the AI engine applies IHRA, JDA, Nexus, and Dutch legal frameworks to produce a tier assignment with full reasoning. Stage three is verification — human reviewers confirm or adjust the AI classification for Tier 3 and above. Stage four is routing — the classified incident is automatically routed to the appropriate response channels based on its tier. Stage five is tracking — every action taken is logged, and outcomes are recorded when available.</p>

<p>This pipeline eliminates the handoffs that cause delay and the ambiguity that causes inaction. Every incident that enters the system exits with a documented response — or a documented reason why no response was warranted. The gap between detection and action closes not through heroic individual effort, but through systematic process design.</p>
    `.trim(),
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((a) => a.category === category);
}

export const articleCategories = [
  "All",
  "Standards",
  "Technology",
  "Legal",
  "Analysis",
  "Guides",
];
