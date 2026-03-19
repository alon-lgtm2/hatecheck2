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
    slug: "strategic-briefing-antisemitism-netherlands",
    title: "Strategic Intelligence Briefing: Antisemitism in the Netherlands (2023\u20132026)",
    excerpt:
      "Comprehensive analysis of the escalation timeline, the 5-tier threat matrix, competing analytical frameworks, and the Action Gap requiring AI-powered intelligence infrastructure.",
    category: "Analysis",
    date: "2026-03-15",
    readTime: "14 min read",
    tags: ["Netherlands", "Intelligence", "OSINT", "CIDI", "Analysis", "Threat Assessment"],
    content: `
Antisemitism in the Netherlands has entered a structural escalation phase. The data is unambiguous. CIDI recorded 155 incidents in 2022. That number surged to 379 in 2023 \u2014 a 145% increase. By 2024, the figure reached 421, placing the annual count 305% above the decade average. These are not statistical anomalies. They represent a sustained shift in the threat environment.

## The Escalation Timeline

The catalyst was October 7, 2023. Within 72 hours of the Hamas attack on Israel, antisemitic incidents across the Netherlands spiked. Online hate surged first. Street-level incidents followed within days. The pattern mirrored previous Gaza-related escalation cycles but exceeded all prior peaks in both volume and severity.

2024 brought campus protests. Pro-Palestinian encampments at Dutch universities generated friction points that frequently crossed from political protest into antisemitic expression. Jewish students reported feeling unsafe. University administrators lacked frameworks to distinguish protected political speech from actionable hate.

November 2024 marked a turning point. The Amsterdam attacks on Israeli football supporters after the Maccabi Tel Aviv match produced international shockwaves. Mobs targeted individuals identified as Israeli or Jewish across central Amsterdam. The incident exposed critical gaps in threat assessment, early warning, and rapid response capabilities.

By early 2026, the Rotterdam arson attack against a Jewish-owned business confirmed that the threat had not receded. The escalation cycle was no longer event-driven. It had become self-sustaining.

## The Data Landscape

Three primary data sources track antisemitism in the Netherlands. Each measures differently. None captures the full picture.

CIDI monitors civil society reports. Their count moved from 155 (2022) to 379 (2023) to 421 (2024). Police registrations tell a parallel story: 549 incidents in 2023, rising to 880 in 2024. The Public Prosecution Service (OM) recorded 94 discrimination cases in 2023 and 181 in 2024. Every dataset points in the same direction. Every dataset is incomplete.

The gaps between these numbers reveal systemic dysfunction. CIDI captures community-reported incidents. Police data reflects formal complaints. OM figures represent prosecutorial intake. At each stage, cases fall through. The funnel narrows dramatically from lived experience to legal action.

## The Action Gap

An estimated 74% of antisemitic incidents go unreported. This non-reporting rate is not apathy. It reflects rational calculation by victims who perceive the reporting process as burdensome, ineffective, or potentially exposing.

Dutch institutions suffer from what researchers term handelingsverlegenheid \u2014 institutional paralysis in the face of complex social tensions. Administrators, municipal officials, and law enforcement lack structured frameworks for assessing, categorizing, and responding to antisemitic incidents. They default to inaction not from indifference but from the absence of operational protocols.

The result is a compounding intelligence deficit. Incidents occur. They go undocumented. Patterns remain invisible. Resources cannot be allocated to threats that are not measured. The cycle reinforces itself.

## Competing Analytical Frameworks

The Netherlands operates within multiple overlapping definitional frameworks. The IHRA Working Definition provides the broadest lens. The Jerusalem Declaration offers narrower criteria for Israel-related cases. Dutch criminal law under Articles 137c-e sets the prosecutorial threshold. None of these frameworks was designed for operational deployment at scale.

The consequence is classification inconsistency. The same incident may be antisemitic under IHRA, debatable under JDA, and sub-criminal under Dutch law. Without a structured system to apply all three frameworks simultaneously, institutions produce contradictory assessments. This inconsistency undermines credibility and delays response.

## The Strategic Imperative

The current monitoring infrastructure cannot scale. Manual review of social media, intake of citizen reports, cross-referencing of databases, and production of analytical outputs all depend on human capacity that is already exceeded. The volume of online antisemitic content alone exceeds what any team of analysts can process.

AI-powered OSINT infrastructure addresses this bottleneck directly. Automated ingestion of social media streams. Natural language processing calibrated to antisemitism-specific tropes and coded language. Structured classification against multiple frameworks simultaneously. Automated generation of dossiers, correspondence, and institutional reports.

This is not a technology solution searching for a problem. The problem is documented, quantified, and escalating. The gap between incident volume and institutional response capacity widens each quarter. HateCheck exists to close that gap \u2014 providing the intelligence infrastructure that transforms raw data into actionable institutional output.

The question is no longer whether AI-powered monitoring is needed. The data answers that. The question is how fast institutions can deploy it.
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
