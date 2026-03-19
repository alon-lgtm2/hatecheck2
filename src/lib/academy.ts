export interface Lesson {
  slug: string;
  title: string;
  readTime: string;
  content: string;
}

export interface Track {
  num: number;
  slug: string;
  title: string;
  desc: string;
  guides: string;
  time: string;
  lessons: Lesson[];
}

export const tracks: Track[] = [
  {
    num: 1,
    slug: "recognizing-antisemitism",
    title: "Recognizing Antisemitism",
    desc: "Learn to identify antisemitism in its many forms - from ancient tropes to modern coded language.",
    guides: "5 guides",
    time: "45 min total",
    lessons: [
      {
        slug: "what-is-antisemitism",
        title: "What Is Antisemitism?",
        readTime: "8 min",
        content: `
Antisemitism is hatred of, prejudice against, or discrimination toward Jews as individuals or as a group. It is one of the oldest and most persistent forms of bigotry in human history, spanning more than two thousand years and adapting to every era's dominant ideology.

## A Shape-Shifting Hatred

What makes antisemitism unique among prejudices is its capacity to mutate. In the medieval period, it took the form of religious hatred - Jews were blamed for the death of Christ, accused of ritual murder, and expelled from country after country. In the Enlightenment era, religious antisemitism gave way to racial antisemitism - the pseudo-scientific claim that Jews constituted a biologically inferior or dangerous race.

In the 20th century, antisemitism became the organizing principle of a genocidal state ideology. The Holocaust murdered six million Jews - two thirds of European Jewry - in a systematic, industrialized campaign of extermination.

## Modern Forms

Today, antisemitism manifests in several distinct but overlapping forms:

**Classical antisemitism** draws on centuries-old tropes: Jews as greedy, Jews as disloyal, Jews as secretly powerful. These tropes circulate in memes, conspiracy theories, and political rhetoric.

**Secondary antisemitism** involves Holocaust distortion - minimizing, denying, or inverting the Holocaust. Common forms include claiming Jews exaggerate the Holocaust for political gain, comparing Israeli policies to Nazism, or accusing Jews of "weaponizing" their suffering.

**Israel-related antisemitism** uses the State of Israel as a proxy for antisemitic expression. Not all criticism of Israel is antisemitic - but when criticism deploys classical antisemitic tropes, denies Jewish self-determination, or holds all Jews collectively responsible for Israeli government actions, it crosses the line.

**Structural antisemitism** targets perceived "elites," "globalists," or hidden puppet-masters controlling world events - without explicitly naming Jews. These conspiracy frameworks map directly onto classical antisemitic narratives even when the word "Jew" never appears.

## Why Recognition Matters

You cannot report what you cannot recognize. You cannot classify what you do not understand. The first step in any effective response to antisemitism - whether personal, institutional, or legal - is the ability to identify it in all its forms.

This is not about policing speech. It is about building the literacy required to distinguish between legitimate political discourse and the oldest hatred in new clothing.
        `.trim(),
      },
      {
        slug: "classical-tropes",
        title: "Classical Tropes and Their Modern Variants",
        readTime: "10 min",
        content: `
Antisemitic tropes are recurring motifs - stereotypes, conspiracy theories, and narratives - that have been used to dehumanize Jews for centuries. Understanding these tropes is essential because they form the building blocks of modern antisemitic expression, even when the language has been updated.

## The Conspiracy Trope

The most persistent antisemitic trope is the claim that Jews secretly control world events. This takes many forms: Jews control the banks, Jews control the media, Jews control governments, Jews orchestrate wars for profit. The "Protocols of the Elders of Zion," a fabricated text first published in 1903, codified this conspiracy into a narrative of global Jewish domination.

Modern variants replace "Jews" with coded terms: "globalists," "international bankers," "the cabal," "those who shall not be named," or simply (((triple parentheses))). The structure of the conspiracy remains identical - only the vocabulary changes.

## The Dual Loyalty Trope

Jews have historically been accused of being loyal to each other rather than to the countries where they live. This trope positions Jews as perpetual foreigners, never truly belonging. Modern versions include questioning whether Jewish politicians have divided loyalties, accusing Jewish citizens of being "more loyal to Israel," or using the term "fifth column."

## The Blood Libel

The medieval accusation that Jews murder Christian children to use their blood in religious rituals - the "blood libel" - was responsible for pogroms and massacres across Europe. Modern variants include accusations that Israel deliberately targets Palestinian children, framed not as a political critique but as evidence of inherent Jewish bloodthirstiness.

## The Money Trope

The stereotype of Jewish greed - the hook-nosed moneylender, the penny-pinching merchant - has roots in medieval restrictions that barred Jews from most professions, forcing many into money-lending. The stereotype survived long after its economic context disappeared. Modern versions appear in memes, cartoons, and political commentary about "Jewish wealth" or Jewish influence in finance.

## The Deicide Trope

The charge that Jews killed Jesus - collectively and in perpetuity - was the foundation of Christian antisemitism for nearly two millennia. While the Catholic Church formally repudiated this charge in 1965 (Nostra Aetate), it persists in some evangelical and Orthodox Christian contexts and in popular culture.

## Recognizing Updated Versions

The key skill is pattern recognition. When you encounter claims about shadowy elites controlling world events, ask: does this map onto the conspiracy trope? When you see accusations of dual loyalty directed at Jewish individuals, recognize the historical pattern. When financial stereotypes are applied specifically to Jewish people or institutions, identify the trope.

The language changes. The structure does not.
        `.trim(),
      },
      {
        slug: "coded-language",
        title: "Coded Language and Dog Whistles",
        readTime: "9 min",
        content: `
Coded language is the primary mechanism through which antisemitism evades detection on modern platforms. Understanding how it works is essential for anyone documenting or reporting online hate.

## What Is Coded Language?

Coded language uses terms, symbols, or references that carry a specific meaning to an in-group while appearing innocuous to outsiders. This plausible deniability is the point - it allows antisemitic ideas to circulate on platforms that moderate explicit hate speech.

## Common Codes

**Lexical substitution**: "Zionist" used as a direct replacement for "Jew" in conspiracy contexts. "Globalist," "elitist," "the 1%," or "international bankers" used to invoke Jewish control narratives without naming Jews explicitly.

**Numeric codes**: 88 (HH - Heil Hitler), 14 (the "14 words" white supremacist slogan), 109 (the number of countries Jews have allegedly been expelled from), 6MWE ("6 million wasn't enough").

**Symbols and imagery**: The triple parentheses (((echo))), the "happy merchant" meme, the "early life" check (searching Wikipedia to identify someone as Jewish), the nose emoji in specific contexts.

**Historical references**: "Weimar conditions," "degeneracy," "cultural Marxism" - terms drawn from Nazi-era propaganda repackaged for contemporary discourse.

**Emoji combinations**: Specific emoji sequences used to communicate antisemitic ideas: the rat emoji directed at Jewish individuals, rubbing hands, the octopus (tentacles of control).

## Context Is Everything

The word "Zionist" is not inherently antisemitic - it describes a political ideology. But when someone writes "Zionists control the media," they are deploying the Jewish media control conspiracy trope with a vocabulary swap. Context determines meaning.

Similarly, "globalist" can be a legitimate descriptor in economic or political discussions. But when used in conspiracy frameworks about secret elites manipulating world events, it functions as an antisemitic dog whistle.

## Detection Strategies

1. **Look for trope mapping**: Does the statement, with the coded term replaced by "Jew," reproduce a classical antisemitic trope?
2. **Check the source**: Is the speaker or platform associated with known extremist networks?
3. **Examine the context**: What is the surrounding discourse? What audience is being addressed?
4. **Track patterns**: Single instances may be ambiguous. Repeated use across multiple posts reveals intent.
5. **Note platform-specific codes**: Each platform develops its own coded vocabulary. TikTok codes differ from Twitter codes differ from Telegram codes.

The goal is not to flag every ambiguous statement as antisemitic. The goal is to develop the literacy to distinguish genuine coded hate from legitimate discourse that happens to use similar vocabulary.
        `.trim(),
      },
      {
        slug: "israel-related-antisemitism",
        title: "Israel-Related Antisemitism vs. Political Criticism",
        readTime: "10 min",
        content: `
The intersection of Israel-related discourse and antisemitism is the most contested area in hate speech classification. Getting it right requires understanding both what is and what is not antisemitic.

## The Core Distinction

Criticism of Israeli government policies, military actions, or political positions is not antisemitic. Israel is a state, and like all states, it is subject to critique. Holding Israel to the same standards applied to other democracies is legitimate political discourse.

Antisemitism enters when:
- Classical antisemitic tropes are applied to Israel or Israelis
- All Jews worldwide are held collectively responsible for Israeli actions
- Israel's right to exist as a state is denied while no other state's existence is similarly challenged
- Israeli actions are compared to the Holocaust or Nazism in ways designed to hurt rather than illuminate
- The word "Zionist" is used as a direct substitute for "Jew" in conspiracy narratives

## Three Frameworks for Assessment

**IHRA** provides 7 of its 11 examples related to Israel. These include denying Jewish self-determination, applying double standards, and using Nazi comparisons. Critics note that some examples could chill legitimate criticism.

**The Jerusalem Declaration (JDA)** explicitly protects: supporting BDS, comparing Israel to other historical cases of settler colonialism, describing the situation as apartheid, and criticizing Zionism as a political project. It defines antisemitism as applying antisemitic tropes to Israel or treating Jews everywhere as agents of Israel.

**The Nexus Document** offers a two-part test: Is Israel being targeted because it is Jewish? Are antisemitic tropes being applied to Israeli actions?

## Practical Examples

**Not antisemitic**: "Israel's settlement policy violates international law." This is a political and legal claim, assessable on its merits.

**Borderline - context needed**: "Zionists control American foreign policy." This maps onto the dual loyalty and conspiracy tropes, but could also be read as a political claim about lobbying. Context determines classification.

**Antisemitic**: "Jews in Amsterdam should pay for what Israel does in Gaza." This holds diaspora Jews collectively responsible for the actions of a foreign state - a clear antisemitic pattern.

**Antisemitic**: "Hitler was right about the Zionists." The substitution of "Zionists" for "Jews" does not change the genocidal endorsement.

## Why This Matters for Classification

HateCheck applies all three frameworks simultaneously. Content that meets IHRA criteria but falls within JDA's protected categories is flagged as Tier 2 (context-dependent) rather than automatically classified as antisemitic. This layered approach produces more defensible, nuanced assessments that can withstand scrutiny from all sides of the debate.
        `.trim(),
      },
      {
        slug: "secondary-antisemitism",
        title: "Holocaust Distortion and Secondary Antisemitism",
        readTime: "8 min",
        content: `
Secondary antisemitism refers to hostility toward Jews not despite the Holocaust, but because of it. It takes several forms, all of which are increasingly prevalent online.

## Forms of Holocaust Distortion

**Denial**: Claiming the Holocaust did not happen, that the death toll is fabricated, or that gas chambers were not used for mass murder. Since October 2024, Holocaust denial is explicitly criminalized in the Netherlands.

**Minimization**: Acknowledging the Holocaust occurred but dramatically understating its scale, systematic nature, or intentionality. Common forms include claiming the deaths were primarily from disease rather than deliberate murder, or that the number of victims is exaggerated.

**Inversion**: Comparing Jews or Israel to Nazis, framing Palestinians as "the new Jews," or accusing Jews of perpetrating a "genocide" while minimizing the actual genocide committed against them. This form is designed to inflict maximum psychological harm by weaponizing Jewish trauma.

**Instrumentalization**: Accusing Jews of "exploiting" the Holocaust for political advantage, financial gain, or to silence criticism. The phrase "playing the Holocaust card" is a common expression of this form.

**Trivialization**: Using Holocaust imagery, language, or comparisons for unrelated issues - comparing vaccine mandates to the Holocaust, calling political opponents "Nazis" for trivial reasons, or using concentration camp aesthetics as fashion or humor.

## Why Secondary Antisemitism Persists

Secondary antisemitism serves a psychological function for societies that participated in or failed to prevent the Holocaust. If the Holocaust can be minimized, denied, or turned against Jews themselves, then the moral burden is reduced. Guilt is deflected. Responsibility is evaded.

This dynamic is particularly acute in Europe, where virtually every country has a Holocaust history that generates ongoing discomfort. The Netherlands, which had the highest deportation rate of any Western European country (roughly 75% of Dutch Jews were murdered), has its own complex reckoning with this history.

## Online Prevalence

Holocaust distortion is among the most common forms of antisemitism encountered online. It appears in:
- YouTube comment sections under Holocaust-related content
- Social media posts around Holocaust Remembrance Day
- Memes and image macros distributed through messaging apps
- Academic-sounding blogs and websites that present denial as "revisionism"

## Classification Implications

Under HateCheck's tier system:
- **Tier 3**: Holocaust trivialization, inappropriate comparisons in non-hateful contexts
- **Tier 4**: Deliberate Holocaust denial or inversion, potentially criminal under Dutch law (Article 137c extended provisions, effective October 2024)
- **Tier 5**: Holocaust denial combined with incitement to violence
        `.trim(),
      },
    ],
  },
  {
    num: 2,
    slug: "osint-basics",
    title: "OSINT - Open Source Intelligence Basics",
    desc: "Understand how public, verifiable information from the open web can be used responsibly to document hate.",
    guides: "5 guides",
    time: "40 min total",
    lessons: [
      {
        slug: "what-is-osint",
        title: "What Is OSINT and Why Does It Matter?",
        readTime: "7 min",
        content: `
Open Source Intelligence (OSINT) refers to the collection and analysis of information from publicly available sources. In the context of antisemitism monitoring, OSINT provides the evidentiary backbone that transforms anecdotal observations into documented, verifiable incidents.

## Why OSINT for Antisemitism Monitoring

Traditional approaches to monitoring antisemitism rely primarily on victim reporting. While essential, this approach has a critical limitation: an estimated 74% of antisemitic incidents go unreported. OSINT fills this gap by proactively identifying incidents that victims do not report.

OSINT sources for antisemitism monitoring include:
- **Social media platforms**: Twitter/X, Facebook, Instagram, TikTok, YouTube
- **Messaging platforms**: Public Telegram channels and groups
- **Forums and imageboards**: Reddit, 4chan, specialized extremist forums
- **News and media**: Online news outlets, blogs, podcasts
- **Government sources**: Court records, parliamentary proceedings, police reports
- **Academic and NGO sources**: Research publications, incident databases

## Core OSINT Principles

**Legality**: OSINT uses only publicly available information. It does not involve hacking, unauthorized access, or surveillance. If information requires a password, subscription, or deception to access, it is not open source.

**Verifiability**: Every piece of information collected should be independently verifiable. Screenshots can be fabricated. URLs can be spoofed. Verification requires cross-referencing across multiple sources.

**Proportionality**: The scope of investigation should be proportionate to the purpose. Documenting a public antisemitic statement on social media is legitimate. Building comprehensive dossiers on private individuals based on their political views is not.

**Ethics**: OSINT practitioners must consider the impact of their work. Publishing the identity of an individual who made an antisemitic statement can lead to harassment. Sharing graphic content without context can cause secondary trauma.

## The OSINT Cycle

1. **Requirements**: Define what you need to know and why
2. **Collection**: Gather relevant publicly available data
3. **Processing**: Organize, translate, and format raw data
4. **Analysis**: Evaluate, cross-reference, and draw conclusions
5. **Dissemination**: Share findings with appropriate stakeholders
6. **Feedback**: Assess whether findings met requirements

This structured approach distinguishes professional OSINT from casual internet searching.
        `.trim(),
      },
      {
        slug: "evidence-preservation",
        title: "Evidence Preservation and Documentation",
        readTime: "8 min",
        content: `
Online content is ephemeral. Posts are deleted, accounts are suspended, pages are modified. If antisemitic content is not properly documented at the point of discovery, the evidence may be permanently lost. Effective evidence preservation is a critical OSINT skill.

## Why Preservation Matters

Evidence serves multiple downstream purposes:
- **Legal proceedings**: Courts require authenticated evidence that demonstrates chain of custody
- **Platform reporting**: Detailed reports with evidence are more likely to result in content removal
- **Institutional complaints**: Employers, universities, and other institutions need documented evidence to act
- **Trend analysis**: Preserved evidence enables longitudinal research on antisemitism patterns
- **Public accountability**: Documented evidence supports journalism and public awareness

## What to Capture

For each piece of online content, capture:

**The content itself**: Full screenshot of the post, comment, or page. Include surrounding context - the thread, the profile, the timestamp. Do not crop selectively.

**Metadata**: URL, date and time of capture, platform, account name, account creation date (if visible), follower/subscriber count, engagement metrics (likes, shares, comments).

**Context**: What prompted the content? Is it a reply to another post? Part of a coordinated campaign? Related to a current event? Context transforms a screenshot into usable intelligence.

**Technical details**: Use your browser's developer tools to capture page source if relevant. Note whether the content was behind age restrictions or content warnings.

## Tools and Methods

**Screenshots**: The most basic but essential tool. Use full-page screenshot extensions to capture entire threads. Always include the browser URL bar in screenshots to prove the source.

**Web archiving**: Submit URLs to the Wayback Machine (archive.org) or archive.today to create timestamped, third-party verified copies. These carry more evidentiary weight than personal screenshots.

**Screen recording**: For video content or content that requires scrolling, screen recordings preserve more context than static screenshots.

**Hash verification**: Generate SHA-256 hashes of saved files to prove they have not been modified after capture.

## Legal Considerations

In the Netherlands and across the EU, evidence gathered from public sources is generally admissible in legal proceedings, provided it was obtained lawfully. However, the manner of collection and the chain of custody can affect its weight.

GDPR applies to personal data even when that data is publicly available. Storing personal information about identified or identifiable individuals requires a lawful basis under Article 6 GDPR.
        `.trim(),
      },
      {
        slug: "social-media-monitoring",
        title: "Social Media Monitoring Techniques",
        readTime: "9 min",
        content: `
Social media platforms are the primary vector for antisemitic expression in the digital age. Effective monitoring requires platform-specific knowledge and systematic approaches.

## Platform Landscape

Each platform has distinct characteristics that affect how antisemitism manifests:

**Twitter/X**: The most publicly accessible platform for monitoring. Public posts are indexable and searchable. Advanced search operators enable precise queries. The platform's real-time nature makes it a primary venue for event-driven antisemitism spikes.

**Telegram**: Increasingly the platform of choice for organized extremist activity. Public channels and groups are monitorable; private groups are not. Telegram's minimal moderation means explicit antisemitic content often remains available for extended periods.

**TikTok**: Short-form video presents unique monitoring challenges. Antisemitic content is often embedded in audio, visual elements, or comment sections rather than searchable text. The platform's algorithmic amplification can rapidly spread coded content.

**Facebook/Instagram (Meta)**: Closed groups and private accounts limit monitoring capabilities. Public pages and profiles remain accessible. Meta's moderation is more aggressive than some platforms but inconsistent.

**YouTube**: Comment sections under news videos, documentaries, and political content are frequent sites of antisemitic expression. Video content itself may contain antisemitic material embedded in longer presentations.

## Monitoring Strategies

**Keyword monitoring**: Establish searches for known antisemitic terms, tropes, and coded language. Update keyword lists regularly as vocabulary evolves. Include terms in multiple languages relevant to your monitoring area.

**Account tracking**: Identify and monitor accounts that consistently produce or amplify antisemitic content. Track their networks and amplification patterns.

**Event-driven monitoring**: Increase monitoring intensity around predictable trigger events: Israeli-Palestinian conflict escalations, Holocaust Remembrance Day, Jewish holidays, high-profile incidents.

**Hashtag analysis**: Track hashtags associated with antisemitic campaigns. Monitor trending hashtags for antisemitic content being injected into mainstream discourse.

## Practical Workflow

1. Define monitoring scope (platforms, languages, geography)
2. Establish keyword and account watchlists
3. Set regular monitoring schedules (daily at minimum during heightened periods)
4. Document all findings using standardized evidence preservation procedures
5. Classify findings using established frameworks (IHRA, JDA, legal thresholds)
6. Report findings to appropriate channels (platforms, law enforcement, institutional bodies)
7. Archive all evidence securely

## Avoiding Burnout

Continuous exposure to antisemitic content takes a psychological toll. Monitoring teams should implement rotation schedules, limit continuous exposure periods, and provide access to support resources. This is not optional - it is an operational necessity.
        `.trim(),
      },
      {
        slug: "verification-techniques",
        title: "Verification and Fact-Checking",
        readTime: "8 min",
        content: `
Not everything that appears antisemitic is antisemitic, and not everything presented as evidence is authentic. Verification is the process that separates reliable intelligence from noise, misinformation, and fabrication.

## Why Verification Is Critical

False or unverified reports of antisemitism cause real harm:
- They undermine the credibility of legitimate monitoring
- They can lead to wrongful accusations against innocent individuals
- They provide ammunition to those who claim antisemitism is exaggerated
- They waste limited enforcement and institutional resources

## Verification Framework

**Source verification**: Is the source what it claims to be? Check account creation dates, posting histories, and network connections. New accounts with no history posting inflammatory content may be bots, trolls, or fabrications.

**Content verification**: Is the content authentic? Has the screenshot been manipulated? Does the URL resolve to the claimed content? Are timestamps consistent?

**Context verification**: Does the content mean what it appears to mean? Is it satire, parody, or ironic commentary? Is the speaker actually expressing their own views, or quoting someone else? Has the content been taken out of context?

**Cross-referencing**: Can the content be confirmed through independent sources? If a post is alleged to be antisemitic, can other examples from the same account confirm a pattern?

## Common Verification Challenges

**Satire and irony**: Some antisemitic content is presented as "humor" or "satire." The question is not whether it is funny but whether it normalizes or amplifies antisemitic ideas. Genuine satire punches up at power; antisemitic "humor" punches down at a minority group.

**Out-of-context screenshots**: A screenshot of a single statement, stripped of its conversational context, may appear antisemitic when the full conversation reveals a different intent. Always seek the original source.

**Coordinated inauthenticity**: State actors and organized groups sometimes create fake antisemitic content attributed to their opponents, or fake reports of antisemitism to discredit monitoring organizations. Cross-reference claims against known patterns.

**Language barriers**: Content in languages you do not speak requires translation. Machine translation can miss nuance, cultural references, and coded language. Use human translators for critical assessments.

## Red Flags for Fabrication

- Screenshots with inconsistent fonts, formatting, or timestamps
- URLs that do not resolve or resolve to different content
- Accounts with no history that suddenly produce inflammatory content
- Claims that cannot be independently verified through any other source
- Content that perfectly confirms existing narratives (too good to be true)

The standard should be: if you cannot verify it, do not report it as confirmed. Flag it as unverified and note the specific verification gaps.
        `.trim(),
      },
      {
        slug: "responsible-osint",
        title: "Responsible OSINT: Ethics and Legal Boundaries",
        readTime: "8 min",
        content: `
OSINT is a powerful tool. Like all powerful tools, it can cause harm when used irresponsibly. Ethical OSINT practice requires understanding both legal boundaries and moral obligations.

## Legal Framework

**GDPR compliance**: The EU General Data Protection Regulation applies to the processing of personal data, including data obtained from public sources. Key requirements:
- You must have a lawful basis for processing (legitimate interest is most commonly applicable for monitoring organizations)
- Data minimization: collect only what is necessary for your stated purpose
- Storage limitation: do not retain data longer than needed
- Security: protect stored data with appropriate technical measures

**Right to be forgotten**: Individuals can request deletion of their personal data. Monitoring organizations should have procedures for handling such requests while preserving the integrity of incident documentation.

**Dutch-specific law**: The Dutch GDPR Implementation Act (UAVG) adds additional requirements, particularly around the processing of criminal offense data (Article 10 GDPR). Organizations processing data about alleged hate speech should seek legal counsel.

## Ethical Principles

**Proportionality**: The intrusiveness of your investigation should be proportionate to the seriousness of the matter. Documenting a public antisemitic statement requires minimal intrusion. Building comprehensive profiles of individuals requires significant justification.

**Do no harm**: Consider the consequences of your work. Publishing personal information about individuals can lead to harassment, threats, or violence - even when those individuals have engaged in antisemitic behavior. The goal is accountability through proper channels, not vigilante justice.

**Transparency**: Be transparent about your methods, your purpose, and your organizational affiliation. Do not misrepresent yourself to gain access to information.

**Accuracy**: Never present unverified information as fact. Clearly distinguish between confirmed findings, probable assessments, and unverified leads.

**Minimization**: Collect and retain only the information necessary for your purpose. Do not build databases of personal information beyond what is required for incident documentation.

## When to Involve Authorities

Some findings require immediate referral to law enforcement:
- Direct threats of violence against Jewish individuals or institutions
- Evidence of planned attacks or coordinated harassment campaigns
- Content that meets the threshold for criminal prosecution under Dutch law
- Situations involving minors, either as perpetrators or targets

Do not attempt to handle urgent threats independently. Contact local police or the national terrorism hotline when appropriate.

## Organizational Safeguards

- Establish clear policies for data handling, retention, and sharing
- Train all team members on legal and ethical requirements
- Implement access controls for sensitive data
- Conduct regular audits of stored data
- Maintain relationships with legal counsel for complex cases
- Document your decision-making processes for accountability
        `.trim(),
      },
    ],
  },
  {
    num: 3,
    slug: "platform-reporting",
    title: "Platform Reporting",
    desc: "Step-by-step guides for reporting antisemitism and hate speech on every major platform.",
    guides: "7 guides",
    time: "35 min total",
    lessons: [
      {
        slug: "reporting-overview",
        title: "How Platform Reporting Works",
        readTime: "5 min",
        content: `
Every major social media platform has mechanisms for reporting content that violates its terms of service. Understanding how these mechanisms work - and their limitations - is essential for effective antisemitism reporting.

## The Reporting Ecosystem

Platform reporting is one channel in a multi-channel response. Effective action typically requires:
1. **Platform reporting**: Requesting content removal or account action
2. **Evidence preservation**: Documenting the content before it is removed
3. **Institutional reporting**: Notifying relevant monitoring organizations (CIDI, police)
4. **Legal channels**: For content that meets criminal thresholds

## How Platforms Make Decisions

Platforms assess reported content against their community guidelines or terms of service, not against legal standards. This means:
- Content that is criminal under Dutch law may not violate platform rules
- Content that violates platform rules may not be criminal
- Platform moderation is inconsistent, under-resourced, and often automated
- Appeals are possible but slow

## General Reporting Best Practices

**Be specific**: When filing a report, identify exactly which rule the content violates. "Hate speech" is less effective than "antisemitic content targeting Jews as a group, violating your policy against attacks on protected characteristics."

**Provide context**: If the antisemitism is coded or contextual, explain the code. Moderators may not recognize that "early life check" is an antisemitic practice or that specific emoji combinations carry hateful meaning.

**Report the right content**: Report the specific post, comment, or message - not the entire account (unless the account exists solely to spread hate). Mass-reporting campaigns can backfire, as platforms may flag them as coordinated abuse of reporting tools.

**Follow up**: If your report is rejected, appeal. Provide additional context. Rejected reports can often be overturned on appeal with better-explained reasoning.

**Document everything**: Screenshot your report confirmation, the original content, and any response from the platform. This documentation may be needed for institutional or legal follow-up.

## Managing Expectations

Platform reporting is necessary but insufficient. Content removal rates for antisemitism reports are generally low. Response times are slow. Automated moderation catches explicit content but misses coded and contextual antisemitism. This is not a reason to stop reporting - it is a reason to pursue multiple channels simultaneously.
        `.trim(),
      },
      {
        slug: "reporting-twitter-x",
        title: "Reporting on Twitter/X",
        readTime: "5 min",
        content: `
Twitter/X has undergone significant policy changes since its acquisition in 2022. Understanding the current reporting landscape is essential for effective antisemitism reporting on the platform.

## Current Policies

Twitter/X's hateful conduct policy prohibits content that "promotes violence against, threatens, or harasses other people on the basis of race, ethnicity, national origin, caste, sexual orientation, gender, gender identity, religious affiliation, age, disability, or serious disease."

Antisemitic content falls under protections for religious affiliation and ethnicity/national origin.

## How to Report

1. Click the three-dot menu on the tweet
2. Select "Report post"
3. Choose "Hateful conduct"
4. Select the most specific applicable category
5. Add additional context if prompted
6. Submit the report

## Reporting Tips for Twitter/X

**Thread context**: If the antisemitic content is part of a thread, report the specific tweet(s) that contain the violation but reference the thread context in your description.

**Quote tweets**: If someone has quote-tweeted antisemitic content to amplify it (rather than to criticize it), report the quote tweet as well as the original.

**Profile content**: Antisemitic usernames, display names, and bio text can be reported separately from individual tweets via the profile's three-dot menu.

**Trusted Reporter programs**: Some monitoring organizations have trusted reporter status, which gives their reports higher priority in the moderation queue. If your organization does not have this status, consider applying.

## Common Challenges

- Reports of coded antisemitism are frequently rejected because moderators do not recognize the codes
- Response times vary from hours to weeks
- Content may be found "not in violation" even when it clearly violates policy
- Appeals sometimes succeed where initial reports fail - always appeal rejected reports for clear violations
        `.trim(),
      },
      {
        slug: "reporting-meta",
        title: "Reporting on Facebook and Instagram",
        readTime: "5 min",
        content: `
Meta platforms (Facebook and Instagram) use shared community standards and a unified reporting infrastructure. Understanding this system improves reporting effectiveness.

## Meta's Hate Speech Policy

Meta's Community Standards prohibit attacks on people based on protected characteristics including race, ethnicity, national origin, religious affiliation, and others. "Attacks" include violent or dehumanizing speech, harmful stereotypes, statements of inferiority, and calls for exclusion or segregation.

Meta uses a three-tier severity system for hate speech:
- **Tier 1**: Dehumanizing speech, statements of inferiority, calls for violence
- **Tier 2**: Statements of contempt, dismissal, disgust
- **Tier 3**: Calls for segregation, slurs, stereotypes

## How to Report on Facebook

1. Click the three-dot menu on the post
2. Select "Report post" or "Find support or report"
3. Follow the prompted categories
4. Select "Hate speech" and specify the protected characteristic
5. Submit

## How to Report on Instagram

1. Tap the three-dot menu on the post
2. Select "Report"
3. Choose "Hate speech or symbols"
4. Follow the prompts to specify the type of hate speech
5. Submit

## Reporting Groups and Pages

Antisemitic content often concentrates in Facebook groups. You can:
- Report individual posts within groups
- Report the group itself if its primary purpose is spreading hate
- Report group administrators who enable or participate in hate speech

## Tips for Effective Meta Reporting

**Use the Oversight Board**: For significant cases, consider submitting to Meta's Oversight Board, which reviews content moderation decisions and sets precedents.

**Report ads**: Antisemitic content sometimes appears in paid advertising. Report these through the ad-specific reporting mechanism for faster action.

**Provide translations**: For content in languages other than English, include a translation in your report to assist moderators.

**Document rejection patterns**: If Meta consistently rejects reports for a specific type of antisemitic content, document this pattern for advocacy purposes.
        `.trim(),
      },
      {
        slug: "reporting-tiktok",
        title: "Reporting on TikTok",
        readTime: "5 min",
        content: `
TikTok presents unique challenges for antisemitism monitoring and reporting due to its video-first format, algorithmic amplification, and younger user demographic.

## TikTok's Policies

TikTok's Community Guidelines prohibit content that attacks, threatens, or incites violence against people based on protected attributes including race, ethnicity, and religion. The platform also prohibits hateful ideologies, including antisemitism and Holocaust denial.

## How to Report

1. Long-press the video or tap the share arrow
2. Select "Report"
3. Choose "Hate and harassment"
4. Select "Hate speech or hateful behaviors"
5. Specify the protected characteristic
6. Submit

## Unique TikTok Challenges

**Video content**: Antisemitic messages may be conveyed through audio, text overlays, visual imagery, or combinations of all three. Text-based moderation tools may miss content that is primarily visual or audio.

**Sounds and music**: Antisemitic audio clips are sometimes attached to otherwise innocuous videos, spreading through TikTok's sound-sharing feature. Report the sound as well as the video.

**Comments**: TikTok comment sections under Jewish-related content frequently contain antisemitic expressions. Report individual comments through the comment's long-press menu.

**Duets and stitches**: Users can create response videos that add antisemitic commentary to Jewish creators' content. Report these through the standard video reporting flow.

**Algorithmic amplification**: TikTok's algorithm can rapidly amplify coded antisemitic content to large audiences. Speed of reporting matters more on TikTok than on other platforms.

## Reporting Tips

- When reporting video content, specify the timestamp where the violation occurs
- If antisemitism is conveyed through coded language or symbols, explain the code in your report
- Report accounts that consistently post antisemitic content, not just individual videos
- For urgent content (threats of violence), use TikTok's "Someone is in immediate danger" reporting option
        `.trim(),
      },
      {
        slug: "reporting-telegram",
        title: "Reporting on Telegram",
        readTime: "5 min",
        content: `
Telegram has become a primary vector for organized antisemitic activity due to its minimal moderation and strong privacy features. Reporting antisemitism on Telegram requires a different approach than on mainstream platforms.

## Telegram's Moderation Landscape

Telegram's approach to content moderation is fundamentally different from mainstream platforms. The platform positions itself as a free speech platform and intervenes only in limited circumstances:
- ISIS/terrorist content (following EU pressure)
- Child sexual abuse material
- Some categories of illegal content in specific jurisdictions

Antisemitic content, even when explicit, is generally not moderated by Telegram unless it constitutes a direct incitement to violence.

## How to Report

1. Open the message, channel, or group
2. Tap the three-dot menu
3. Select "Report"
4. Choose the most relevant category
5. Add description with specific details
6. Submit

For channels and groups: you can report the entire entity through its profile page.

## Realistic Expectations

Content removal rates on Telegram for antisemitism reports are extremely low. Telegram generally does not remove antisemitic content unless it constitutes direct, credible threats of violence.

This does not make reporting useless:
- Reports create a record that can support legal action
- Patterns of reported content can inform law enforcement investigations
- Report data, in aggregate, demonstrates the scale of the problem for advocacy

## Alternative Strategies for Telegram

Since platform reporting is largely ineffective, prioritize:

**Evidence preservation**: Document antisemitic content in Telegram channels systematically. These channels are primary sources for monitoring organized antisemitism.

**Law enforcement referral**: Content that meets criminal thresholds should be reported directly to Dutch police, with Telegram evidence included in the report.

**ISP-level action**: In extreme cases, national authorities can request ISPs to block specific Telegram channels. This is a legal process requiring court orders.

**Cross-platform tracking**: Telegram content is often shared to other platforms. Reporting the redistributed content on platforms with better moderation may achieve removal even when Telegram does not act.
        `.trim(),
      },
      {
        slug: "reporting-youtube",
        title: "Reporting on YouTube",
        readTime: "5 min",
        content: `
YouTube's unique combination of long-form video content and active comment sections creates distinct challenges for antisemitism reporting.

## YouTube's Hate Speech Policy

YouTube prohibits content promoting violence or hatred against individuals or groups based on protected attributes including race, ethnicity, and religion. This covers:
- Content promoting antisemitic conspiracy theories
- Holocaust denial or minimization
- Content that dehumanizes Jewish people
- Calls for violence against Jews

## How to Report Videos

1. Click the three-dot menu below the video
2. Select "Report"
3. Choose "Hateful or abusive content"
4. Select "Promotes hatred or violence"
5. Specify the protected group
6. Add timestamps and description
7. Submit

## How to Report Comments

1. Hover over the comment
2. Click the three-dot menu
3. Select "Report"
4. Choose "Hate speech or graphic violence"
5. Submit

## Reporting Tips

**Timestamps matter**: YouTube videos can be hours long. Specify exactly where antisemitic content appears (e.g., "Antisemitic conspiracy theory stated at 14:32-15:45").

**Descriptions are critical**: For coded content, explain to moderators why the content is antisemitic. Reference specific tropes or codes being used.

**Comment sections**: Under videos about Jewish topics, Holocaust content, or Israeli-Palestinian conflict, comment sections frequently contain antisemitic content. Report systematically - prioritize the most severe violations.

**Live streams**: Antisemitic content in live streams should be reported immediately using the live chat reporting feature. Live stream content is harder to preserve, so screen record first.

**Channels vs. videos**: If a channel consistently produces antisemitic content, report the channel itself through its About page in addition to individual videos.
        `.trim(),
      },
      {
        slug: "when-reporting-fails",
        title: "When Platform Reporting Fails: Next Steps",
        readTime: "5 min",
        content: `
Platform reporting frequently fails. Reports are rejected, content stays up, and accounts continue operating. When this happens, alternative channels exist.

## Why Reports Fail

- **Automated moderation**: Initial review is often automated. AI systems miss coded and contextual antisemitism
- **Moderator knowledge gaps**: Human moderators may not recognize antisemitic tropes, codes, or historical references
- **Policy gaps**: Platform policies may not explicitly cover the specific form of antisemitism encountered
- **Volume**: Platforms receive millions of reports daily and cannot thoroughly review each one

## Escalation Paths

**Appeal**: Always appeal rejected reports. Appeals receive human review and often succeed where initial automated review failed. Provide additional context explaining why the content violates platform rules.

**Trusted flaggers**: Organizations with trusted flagger status on platforms have their reports prioritized. Partner with established monitoring organizations (CIDI, CST, ADL) that may have this status.

**DSA complaints**: Under the EU Digital Services Act (effective February 2024), platforms operating in the EU must provide transparent reporting mechanisms, respond to reports within reasonable timeframes, and offer appeal mechanisms. If a platform fails these requirements, complaints can be filed with the national Digital Services Coordinator.

**National authorities**: In the Netherlands, the Authority for Consumers and Markets (ACM) serves as the Digital Services Coordinator. Systemic failures by platforms to address antisemitic content can be reported to ACM.

## Legal Channels

**Criminal complaints**: If content meets the threshold for Articles 137c-e of the Dutch Penal Code, file a police report regardless of platform action. Include all preserved evidence.

**Civil action**: Victims of online antisemitism may pursue civil remedies, including injunctions requiring content removal and damages claims.

**Anti-discrimination bureaus**: Local anti-discrimination bureaus (antidiscriminatievoorzieningen) can assist with complaints and referrals to appropriate authorities.

## Institutional Channels

**CIDI**: Report antisemitic incidents to CIDI (Centrum Informatie en Documentatie Israel) for inclusion in their monitoring database, regardless of platform action.

**Meldpunt Internetdiscriminatie (MiND)**: The Dutch internet discrimination hotline accepts reports of online discrimination and works directly with platforms on removal.

**Police online reporting**: The Dutch police accept online reports of discrimination and hate speech through their website.

The key principle: platform reporting is one tool in a multi-channel strategy. When one channel fails, activate others. Document everything for cumulative impact.
        `.trim(),
      },
    ],
  },
  {
    num: 4,
    slug: "institutional-response",
    title: "Institutional Response",
    desc: "What municipalities, universities, employers, and organizations should do when antisemitism is reported.",
    guides: "6 guides",
    time: "50 min total",
    lessons: [
      {
        slug: "institutional-responsibility",
        title: "Why Institutions Must Respond",
        readTime: "8 min",
        content: `
When antisemitism is reported to an institution - a university, municipality, employer, or organization - the response (or lack of response) sends a powerful signal. Institutional silence in the face of antisemitism is not neutrality. It is complicity through inaction.

## The Legal Obligation

Dutch institutions have legal obligations to address discrimination and create safe environments:

**Employers**: Under the Dutch Equal Treatment Act (Algemene wet gelijke behandeling) and the Working Conditions Act (Arbowet), employers must protect employees from discrimination and harassment, including antisemitism. Failure to act on reports can result in liability.

**Educational institutions**: Universities and schools have a duty of care toward students. The Higher Education and Research Act (WHW) requires institutions to provide a safe learning environment.

**Municipalities**: Local governments have obligations under the Municipal Act (Gemeentewet) to maintain public order and safety, including addressing hate-motivated incidents.

## The Practical Case

Beyond legal obligations, there are compelling practical reasons for institutional response:

**Deterrence**: Visible institutional action against antisemitism deters future incidents. Visible inaction encourages them.

**Trust**: Jewish community members - employees, students, residents - need to trust that institutions will protect them. Each unreported or unaddressed incident erodes that trust.

**Accuracy**: Early institutional response when incidents are fresh yields better evidence and more accurate fact-finding. Delayed responses face faded memories and deleted evidence.

**Escalation prevention**: Unaddressed antisemitism tends to escalate. What begins as graffiti can progress to threats and eventually to violence if no institutional boundary is set.

## Common Institutional Failures

**Handelingsverlegenheid**: The Dutch term for institutional paralysis - the inability to act due to uncertainty about what constitutes antisemitism, fear of being perceived as suppressing political speech, or lack of clear protocols.

**Both-sides framing**: Treating antisemitism as a "both sides" issue by equating the experience of Jewish targets with the grievances of those expressing antisemitism.

**Deferral**: Waiting for legal resolution before taking institutional action. Institutions can and should act under their own codes of conduct without waiting for criminal proceedings.

**Minimization**: Dismissing incidents as "jokes," "misunderstandings," or "isolated events" without investigation.

Every institution needs clear protocols, trained personnel, and the organizational will to act. The following guides provide frameworks for building this capacity.
        `.trim(),
      },
      {
        slug: "response-protocol",
        title: "Building an Antisemitism Response Protocol",
        readTime: "9 min",
        content: `
An effective institutional response to antisemitism requires pre-established protocols. Developing these during a crisis is too late. Institutions should build response capacity before incidents occur.

## Protocol Components

### 1. Reporting Mechanism

Establish a clear, accessible mechanism for reporting antisemitic incidents:
- Multiple reporting channels (online form, email, in-person, phone)
- Option for anonymous reporting
- Clear communication about what happens after a report is filed
- Designated intake personnel trained in antisemitism recognition

### 2. Initial Assessment

Within 24-48 hours of receiving a report:
- Acknowledge receipt to the reporter
- Preserve all available evidence
- Conduct preliminary assessment of severity
- Determine immediate safety measures if needed
- Assign a case handler

### 3. Classification

Apply a structured classification framework:
- Is the incident antisemitic? (Apply IHRA, JDA, and contextual analysis)
- What is the severity? (Use a tier system like HateCheck's 1-5 scale)
- What institutional policies were violated?
- Does the incident potentially meet criminal thresholds?

### 4. Response Actions

Response should be proportionate to severity:

**Tier 1-2 (Ambiguous/Borderline)**: Education and dialogue. Meet with the person responsible. Provide information about why the behavior was problematic. Document the conversation.

**Tier 3 (Clear antisemitism, non-criminal)**: Formal institutional action. Written warning, mandatory training, restricted access to facilities or platforms, public statement by leadership.

**Tier 4 (Potentially criminal)**: All Tier 3 actions plus referral to law enforcement. Coordinate with legal counsel on institutional obligations.

**Tier 5 (Urgent/violent)**: Immediate security response. Law enforcement engagement. Victim protection measures. Crisis communication.

### 5. Support for Affected Individuals

- Offer support services to those targeted
- Provide regular updates on the investigation and response
- Respect privacy while maintaining transparency about actions taken
- Follow up after initial response to assess ongoing safety

### 6. Documentation and Review

- Document every report and response action
- Conduct periodic reviews of response effectiveness
- Publish anonymized aggregate data on incidents and responses
- Use data to identify patterns and inform prevention strategies

## Training Requirements

Protocol documents are useless without trained personnel. Key training needs:
- Antisemitism recognition (what it looks like, including coded forms)
- Reporting procedures and evidence handling
- Classification frameworks and their application
- Communication skills for sensitive conversations
- Legal obligations and boundaries
        `.trim(),
      },
      {
        slug: "universities",
        title: "Antisemitism on Campus: A Guide for Universities",
        readTime: "9 min",
        content: `
Dutch universities have become significant sites of antisemitic activity since October 2023. Campus encampments, protest actions, and online harassment have created hostile environments for Jewish students and staff. Universities have legal and moral obligations to respond.

## The Campus Landscape

Since 2024, multiple Dutch universities have experienced:
- Pro-Palestinian encampments with antisemitic elements (slogans, symbols, intimidation)
- Disruption of academic events related to Israel or Jewish topics
- Online harassment of Jewish students and faculty on university platforms
- Graffiti and vandalism targeting Jewish symbols on campus
- Social exclusion and hostile environments in student organizations

## Legal Framework

Universities have specific legal obligations:
- **WHW (Higher Education and Research Act)**: Duty to provide a safe learning environment
- **Equal Treatment Act**: Prohibition on discrimination in education
- **Arbowet**: Employee protection against harassment and discrimination
- **GDPR**: Privacy obligations in investigation and documentation

## Balancing Free Speech and Safety

The most challenging aspect of campus antisemitism is the intersection with political expression. Key principles:

**Protected**: Criticism of Israeli policies, advocacy for Palestinian rights, calls for boycott, divestment, and sanctions (BDS), academic debate about Zionism.

**Not protected**: Targeting Jewish students for their identity, using antisemitic tropes in political expression, intimidation or threats directed at individuals, exclusion of Jewish students from academic or social activities.

**The test**: Would the same behavior directed at any other ethnic or religious minority be considered harassment? If yes, it is not rendered acceptable by wrapping it in political language.

## Practical Steps for Universities

1. **Appoint an antisemitism coordinator** with authority and resources to act
2. **Train security staff** to recognize antisemitic incidents during protests
3. **Update codes of conduct** to explicitly address antisemitism with examples
4. **Establish rapid response** capability for protest situations
5. **Create safe reporting** channels specifically for discrimination complaints
6. **Engage Jewish student organizations** as partners in prevention and response
7. **Conduct climate surveys** to assess the experience of Jewish students and staff
8. **Publish transparency reports** on discrimination complaints and responses
        `.trim(),
      },
      {
        slug: "municipalities",
        title: "Municipal Response: A Framework for Local Government",
        readTime: "8 min",
        content: `
Dutch municipalities are often the first institutional responders to antisemitic incidents in public spaces, schools, and community settings. Yet many lack the frameworks and training to respond effectively.

## Municipal Responsibilities

Under Dutch law, municipalities have several relevant obligations:
- Maintaining public order and safety (Gemeentewet)
- Anti-discrimination policy (national anti-discrimination legislation)
- Operating local anti-discrimination bureaus (antidiscriminatievoorzieningen)
- Coordinating with police on hate crimes
- Managing public spaces where antisemitism may occur (demonstrations, public events)

## The Integrated Response Model

Effective municipal response integrates multiple departments:

**Public order**: Mayor's office, police liaison, demonstration management
**Social affairs**: Anti-discrimination bureau, community relations, social workers
**Education**: School oversight, youth programs, prevention initiatives
**Communications**: Public statements, community engagement, media relations

## Response Framework by Context

**Public demonstrations**: Municipalities can impose conditions on demonstrations under the Wet openbare manifestaties (Public Manifestations Act). When demonstrations include antisemitic elements, the mayor can:
- Impose conditions requiring removal of antisemitic signage or speech
- Deploy observers to document violations
- End demonstrations that violate imposed conditions
- Refer criminal violations to police

**Schools**: Municipal education departments should:
- Ensure schools have anti-discrimination protocols
- Support schools in addressing antisemitic incidents
- Facilitate cooperation between schools and anti-discrimination bureaus
- Fund educational programs on antisemitism

**Public spaces**: When antisemitic graffiti, vandalism, or incidents occur:
- Rapid removal of antisemitic graffiti (within 24 hours)
- Police report for every incident
- Community notification and reassurance
- Investigation and follow-up

## Building Municipal Capacity

1. Designate a discrimination coordinator with cross-departmental authority
2. Train municipal staff in antisemitism recognition
3. Establish reporting protocols between departments and with police
4. Engage local Jewish communities in safety planning
5. Publish annual reports on discrimination incidents and responses
6. Participate in national networks for best practice sharing
        `.trim(),
      },
      {
        slug: "employers",
        title: "Workplace Antisemitism: Employer Obligations",
        readTime: "8 min",
        content: `
Antisemitism in the workplace is both a legal violation and a management failure. Dutch employers have clear obligations to prevent and address it.

## Legal Framework

**Equal Treatment Act (AWGB)**: Prohibits direct and indirect discrimination on the basis of religion, belief, political opinion, race, sex, nationality, sexual orientation, and civil status. Antisemitism constitutes discrimination on the basis of religion and/or race.

**Working Conditions Act (Arbowet)**: Requires employers to pursue a policy aimed at preventing or limiting psychosocial work stress, which explicitly includes discrimination and harassment.

**Civil Code (BW 7:658)**: Employers have a duty of care toward employees. Failure to address known antisemitism can result in employer liability.

## Recognizing Workplace Antisemitism

Workplace antisemitism may manifest as:
- "Jokes" or comments about Jewish stereotypes
- Exclusion from social activities or professional opportunities
- Hostile comments about Israel directed at Jewish colleagues
- Conspiracy-themed remarks about Jewish influence in the organization
- Refusal to work with Jewish colleagues
- Antisemitic graffiti or imagery in the workplace
- Online harassment of Jewish colleagues on work-related platforms

## Employer Response Protocol

### Immediate Response
- Take every report seriously
- Separate the parties if needed for safety
- Preserve evidence
- Assess whether immediate measures are needed (suspension, reassignment)

### Investigation
- Assign an impartial investigator (internal or external)
- Interview reporter, accused, and witnesses
- Review relevant documentation (emails, messages, CCTV)
- Apply antisemitism frameworks (IHRA) to assess the behavior
- Document findings

### Action
- Disciplinary measures proportionate to severity (warning, suspension, dismissal)
- Support for the affected employee
- Review of workplace culture and conditions
- Training or awareness measures for the team/organization
- Follow-up to ensure the behavior has stopped

### Prevention
- Include antisemitism explicitly in anti-discrimination policies
- Conduct regular training on recognizing and reporting discrimination
- Create a culture where reporting is safe and expected
- Monitor workplace climate through anonymous surveys
- Celebrate diversity and inclusion proactively, not just reactively
        `.trim(),
      },
      {
        slug: "crisis-communication",
        title: "Crisis Communication After an Antisemitic Incident",
        readTime: "8 min",
        content: `
How an institution communicates after an antisemitic incident matters as much as what it does. Poor communication can compound the harm; effective communication can demonstrate leadership and begin healing.

## Principles of Crisis Communication

**Speed**: The first statement should come within hours, not days. Silence is interpreted as indifference.

**Clarity**: Name what happened. "An antisemitic incident" is clearer than "an incident of concern." Avoiding the word "antisemitism" when it is warranted signals reluctance to acknowledge the problem.

**Empathy**: Center the impact on affected individuals and communities. Avoid bureaucratic language that distances the institution from the harm.

**Action**: State what the institution is doing in response. Vague promises of "looking into it" are insufficient. Specific actions - investigation, security measures, support services - demonstrate seriousness.

**Accountability**: If the institution's own failures contributed to the incident, acknowledge them. Defensive postures undermine credibility.

## What to Communicate

### Internal Communication (employees, students, members)
- Acknowledge the incident
- Express unequivocal condemnation of antisemitism
- Describe immediate actions being taken
- Provide reporting channels for additional information
- Offer support resources
- Outline next steps and timeline

### External Communication (media, public)
- Confirm the incident without compromising investigation
- State institutional values and commitments
- Describe response actions
- Provide contact information for media inquiries
- Avoid speculation about perpetrators or motives pending investigation

### Communication with Affected Community
- Direct, personal outreach to Jewish community leaders
- Listen before speaking - ask what is needed
- Provide regular updates on investigation and response
- Follow through on commitments made

## Common Communication Failures

**"Both sides" framing**: Presenting antisemitism as a conflict between equal parties rather than as an attack on a vulnerable minority

**Passive voice**: "An incident occurred" rather than "Our campus experienced an antisemitic attack"

**Minimization**: "An isolated incident" when patterns exist, or "a misunderstanding" when intent is clear

**Deflection**: Redirecting attention to other forms of discrimination rather than addressing antisemitism specifically

**Delayed response**: Waiting for "all the facts" before acknowledging the harm and condemning the behavior

The standard is simple: respond quickly, name the problem clearly, act decisively, and follow through consistently.
        `.trim(),
      },
    ],
  },
  {
    num: 5,
    slug: "history-context",
    title: "History & Context",
    desc: "Why antisemitism persists, how it evolves, and what makes it different from other forms of hatred.",
    guides: "6 guides",
    time: "55 min total",
    lessons: [
      {
        slug: "two-thousand-years",
        title: "Two Thousand Years: A Brief History of Antisemitism",
        readTime: "10 min",
        content: `
Antisemitism is not a modern phenomenon. It is a form of hatred with roots stretching back over two millennia, and understanding this history is essential for recognizing how ancient patterns continue to shape modern expressions of Jew-hatred.

## Ancient Origins

Anti-Jewish hostility predates Christianity. In the ancient world, Jewish monotheism and distinctive cultural practices (dietary laws, Sabbath observance, circumcision) set Jews apart from surrounding polytheistic cultures. This distinctiveness generated suspicion and periodic violence, including the destruction of the Jerusalem Temple by the Babylonians (586 BCE) and the Romans (70 CE).

## Christian Antisemitism

The most consequential development in the history of antisemitism was the emergence of Christian anti-Judaism. The charge of deicide - that Jews were collectively and eternally guilty for the death of Jesus - became embedded in Christian theology, liturgy, and culture. This theological hostility produced centuries of persecution: forced conversions, ghettoization, expulsions, and massacres.

The blood libel accusation - that Jews murdered Christian children to use their blood in religious rituals - first appeared in 12th-century England and spread across Europe, triggering pogroms for centuries. The accusation has no basis in fact but proved remarkably durable.

## The Enlightenment and Racial Antisemitism

The European Enlightenment brought Jewish emancipation - legal equality and civil rights - but also new forms of hostility. As religious authority declined, antisemitism adapted. In the 19th century, pseudo-scientific racial theories replaced theological justifications. Jews were no longer hated for what they believed but for what they allegedly were - a biologically distinct and inferior (or dangerous) race.

This racial antisemitism proved more lethal than its religious predecessor because it offered no escape. Religious antisemitism could theoretically be resolved by conversion. Racial antisemitism defined Jewishness as immutable and hereditary.

## The Holocaust

The logical endpoint of racial antisemitism was genocide. The Nazi regime systematically murdered six million Jews - approximately two thirds of European Jewry - in a campaign of industrial-scale killing unprecedented in human history. The Holocaust was not an aberration. It was the culmination of centuries of dehumanization, conspiracy thinking, and institutional persecution.

## Postwar and Contemporary Antisemitism

After 1945, antisemitism became socially unacceptable in most Western societies - but it did not disappear. It adapted once again. Key developments:

**Left-wing antisemitism**: Anti-Zionism became a vehicle for antisemitic expression in parts of the political left, particularly after 1967.

**Islamist antisemitism**: Drawing on both European antisemitic traditions and selective readings of Islamic texts, Islamist movements incorporated virulent antisemitism into their ideology.

**Internet antisemitism**: The digital age democratized antisemitic expression, enabling rapid global dissemination of conspiracy theories, memes, and coordinated harassment campaigns.

**The current crisis**: Since October 2023, antisemitism has surged globally, with the Netherlands experiencing some of the sharpest increases in Europe.

The history matters because antisemitism is not a series of disconnected incidents. It is a continuous tradition that adapts its language and justifications to each era while maintaining the same core structure: Jews as alien, Jews as powerful, Jews as dangerous, Jews as collectively guilty.
        `.trim(),
      },
      {
        slug: "antisemitism-netherlands",
        title: "Antisemitism in the Netherlands: A National History",
        readTime: "10 min",
        content: `
The Netherlands has a complex relationship with antisemitism - one that includes both a tradition of relative tolerance and some of the darkest chapters of the Holocaust.

## Pre-War: The Myth of Tolerance

The Dutch national narrative emphasizes tolerance. Jews did enjoy relatively greater freedoms in the Netherlands than in many other European countries, particularly during the Dutch Golden Age. Amsterdam became known as the "Jerusalem of the West," and Portuguese Sephardic Jews built the magnificent Esnoga synagogue in 1675.

However, this tolerance was always conditional and incomplete. Jews faced legal restrictions, social exclusion, and periodic hostility throughout Dutch history. Full legal emancipation came only with the Napoleonic period in the early 19th century.

## The Holocaust in the Netherlands

The Holocaust struck the Dutch Jewish community with devastating force. Of approximately 140,000 Jews living in the Netherlands in 1940, roughly 102,000 were murdered - a destruction rate of approximately 73%, the highest of any Western European country.

Multiple factors contributed to this catastrophic outcome: the efficiency of Dutch civil administration (which maintained detailed population registries), the flat geography that made hiding difficult, active collaboration by Dutch police and civil servants, and a relatively small resistance movement in the early years of occupation.

The story of Anne Frank is the most internationally known Dutch Holocaust narrative, but it represents only one of 102,000 stories of destruction.

## Postwar Recovery and Denial

The postwar period was marked by what historians call "the great silence." Dutch society was slow to acknowledge the extent of collaboration and the failure to protect Jewish citizens. The dominant narrative emphasized Dutch resistance and victimhood, minimizing both collaboration and the specific targeting of Jews.

It was not until the 1960s and 1970s that serious public reckoning began, prompted by television documentaries, historical research, and survivor testimony. Even then, the process was painful and contested.

## Contemporary Challenges

The current Dutch Jewish community numbers approximately 30,000-50,000 (estimates vary depending on definition). This community faces antisemitism from multiple sources:

**Far-right antisemitism**: Traditional neo-Nazi and white supremacist movements, though smaller than in some neighboring countries.

**Islamist antisemitism**: Particularly in urban areas with large Muslim populations, where Israeli-Palestinian conflict serves as a catalyst for antisemitic expression.

**Left-wing antisemitism**: In academic institutions and activist networks, where anti-Zionism sometimes serves as a vehicle for antisemitic tropes.

**Mainstream antisemitism**: Conspiracy theories, stereotypes, and casual prejudice that circulate in mainstream Dutch society.

The Netherlands is not unique in facing these challenges. But its specific history - the scale of Holocaust destruction, the myth of tolerance, and the diversity of contemporary antisemitic sources - creates a particular context that any effective response must understand.
        `.trim(),
      },
      {
        slug: "why-antisemitism-persists",
        title: "Why Antisemitism Persists",
        readTime: "9 min",
        content: `
Antisemitism has survived for over two thousand years, adapting to every historical era and political system. Understanding why it persists is essential for developing effective responses.

## The Conspiracy Framework

At its core, antisemitism offers a comprehensive explanatory framework for complex social, economic, and political phenomena. When things go wrong - economic crises, social upheaval, military defeats, pandemics - antisemitism provides a simple answer: the Jews did it.

This conspiracy framework is remarkably flexible. Jews can be simultaneously blamed for capitalism and communism, for assimilation and separatism, for being too powerful and too weak. The contradiction does not weaken the framework; it strengthens it, because Jews become the universal scapegoat for any grievance.

## Social Functions of Antisemitism

Antisemitism serves several social functions that help explain its persistence:

**Scapegoating**: Blaming a visible minority for society's problems redirects anger away from structural causes and toward a tangible target.

**Group cohesion**: Defining an out-group (Jews) strengthens in-group identity and solidarity. Antisemitism can unite otherwise divided groups against a common "enemy."

**Simplification**: Complex global phenomena (financial systems, media landscapes, political dynamics) are difficult to understand. Antisemitic conspiracy theories offer simple, emotionally satisfying explanations.

**Power justification**: Antisemitism has been used by both oppressors and the oppressed to justify their positions - by elites to redirect popular anger, and by marginalized groups to identify a supposedly more powerful enemy.

## The Adaptation Mechanism

What makes antisemitism uniquely persistent is its ability to adapt. When religious antisemitism became untenable in the Enlightenment, racial antisemitism emerged. When racial antisemitism became taboo after the Holocaust, it mutated into anti-Zionism. When explicit Jew-hatred became socially unacceptable, coded language and structural antisemitism emerged.

Each adaptation preserves the core structure while updating the vocabulary and justifications for the current era. The conspiracy framework remains constant; only the specific claims change.

## Digital Amplification

The internet has accelerated the adaptation and spread of antisemitism in several ways:
- **Algorithmic amplification**: Social media algorithms promote engaging content, and conspiracy theories are highly engaging
- **Community formation**: Online spaces allow geographically dispersed antisemites to form communities and reinforce each other's beliefs
- **Rapid mutation**: New antisemitic memes, codes, and narratives spread globally within hours
- **Plausible deniability**: Online anonymity and coded language enable antisemitic expression with reduced social consequences

## Implications for Response

Understanding persistence helps shape effective response:
- **Education alone is insufficient** because antisemitism is not primarily a knowledge deficit
- **Legal frameworks matter** because social norms need institutional enforcement
- **Monitoring must be continuous** because antisemitism adapts faster than response systems
- **Multiple approaches are needed** because antisemitism serves multiple social functions
- **Vigilance is permanent** because antisemitism does not have a final solution - it requires ongoing, sustained response
        `.trim(),
      },
      {
        slug: "antisemitism-vs-other-hatred",
        title: "What Makes Antisemitism Different?",
        readTime: "8 min",
        content: `
Antisemitism shares characteristics with other forms of racism and bigotry, but it also has distinctive features that require specific understanding and response. Recognizing these differences is not about creating a hierarchy of hatreds - all forms of bigotry cause harm. It is about developing accurate, effective responses.

## Shared Characteristics

Like all forms of prejudice, antisemitism involves:
- Stereotyping: Attributing characteristics to all members of a group
- Dehumanization: Denying the full humanity of targeted individuals
- Scapegoating: Blaming a group for problems they did not cause
- Discrimination: Unequal treatment based on group identity
- Violence: Physical harm motivated by group hatred

## Distinctive Features

### "Punching Up"

Most forms of racism position the targeted group as inferior - less intelligent, less capable, less civilized. Antisemitism uniquely positions Jews as too powerful - controlling banks, media, governments, and world events from the shadows. This "punching up" dynamic means antisemitism can appeal to people across the political spectrum, including those who see themselves as fighting against oppression.

### The Conspiracy Dimension

While conspiracy theories exist about many groups, no other form of bigotry has a conspiracy framework as comprehensive and adaptable as antisemitism. The idea that Jews secretly control world events has no equivalent in anti-Black racism, Islamophobia, or anti-Asian prejudice.

### Shape-Shifting

Antisemitism adapts to its host ideology more readily than other prejudices. It has thrived under Christianity, Islam, secular nationalism, communism, fascism, and liberal democracies. It has been deployed by the political right and the political left. No other form of hatred has demonstrated this ideological versatility.

### Historical Depth

While all forms of bigotry have histories, antisemitism's two-thousand-year continuity is distinctive. This deep history means antisemitic tropes are embedded in cultural traditions, literary references, religious texts, and national narratives in ways that are often invisible to those who are not their target.

### Genocide

The Holocaust represents the only attempt in human history to systematically murder every member of a specific ethnic group across an entire continent using industrial methods. This historical fact shapes contemporary Jewish identity, community security concerns, and responses to antisemitism in ways that must be understood.

## Why These Differences Matter

Understanding what makes antisemitism distinctive improves response:

- **Detection tools** must be calibrated to identify "punching up" hatred, not just "punching down" hatred
- **Education programs** must address the conspiracy dimension specifically
- **Monitoring systems** must track adaptation and mutation across ideological contexts
- **Legal frameworks** must account for forms of hatred that do not fit the standard racism template
- **Coalition building** with other targeted communities requires honest acknowledgment of both shared experiences and genuine differences

Antisemitism is both a form of racism and something more than racism. Effective response requires understanding both dimensions.
        `.trim(),
      },
      {
        slug: "october-7-impact",
        title: "After October 7: The Current Crisis",
        readTime: "9 min",
        content: `
The Hamas attack on Israel on October 7, 2023, and the subsequent war in Gaza triggered the largest global surge in antisemitism since the Second World War. Understanding this crisis is essential context for anyone working on antisemitism today.

## The Immediate Spike

Within hours of the October 7 attacks, antisemitic incidents surged worldwide. In the Netherlands, CIDI recorded a 145% increase in antisemitic incidents in 2023 compared to 2022, with the overwhelming majority occurring after October 7.

The spike was not a response to Israeli military operations in Gaza, which had not yet begun. It was a response to a massacre of Jews - celebrated, justified, or used as a pretext for attacks on diaspora Jewish communities.

## Patterns of Post-October 7 Antisemitism

**Celebration and justification**: Open celebration of the October 7 attacks, including the murder of civilians and the taking of hostages. Signs reading "Resistance is justified" and "By any means necessary" appeared at demonstrations worldwide.

**Collective responsibility**: Attacks on diaspora Jewish individuals, businesses, and institutions based on the actions of the Israeli government. Dutch Jews were verbally and physically attacked for events in a country many have never visited.

**Campus hostility**: University encampments and protests created hostile environments for Jewish students. Slogans like "From the river to the sea" were experienced by many Jewish students as calls for the elimination of Israel.

**Online escalation**: Social media saw an explosion of antisemitic content, including Holocaust inversion, conspiracy theories about Jewish/Israeli responsibility for world events, and coordinated harassment of Jewish users.

**The Amsterdam pogrom**: On November 7, 2024, organized mobs attacked Israeli football supporters after a Maccabi Tel Aviv match in Amsterdam. The violence, coordinated through social media, was widely described as a pogrom - organized anti-Jewish violence reminiscent of historical European patterns.

## The Scale in the Netherlands

The numbers are stark:
- CIDI: 155 incidents (2022) to 379 (2023) to 421 (2024)
- Police registrations: 549 (2022) to 880 (2023)
- Prosecutions: 94 (2022) to 181 (2023)
- National threat level raised to "Substantial" (level 4 of 5)

## The Reporting Gap

Despite these dramatic increases, the data understates the problem. FRA survey data indicates that approximately 74% of antisemitic incidents go unreported. Reasons include:
- Belief that reporting will not lead to action
- Fear of retaliation
- Normalization of low-level antisemitism
- Lack of knowledge about reporting channels
- Reporting fatigue

## Implications

The post-October 7 crisis has demonstrated several things:
- Antisemitism is not a historical relic but an active, present danger
- Diaspora Jewish communities are targeted for events they do not control
- Existing monitoring and response infrastructure is insufficient
- The gap between incident volume and institutional response capacity is widening
- AI-powered monitoring and classification tools are no longer optional

This is the context in which HateCheck operates. The platform exists because the current crisis has made the need for scalable, legally grounded antisemitism monitoring undeniable.
        `.trim(),
      },
      {
        slug: "what-you-can-do",
        title: "What You Can Do: A Call to Action",
        readTime: "9 min",
        content: `
Understanding antisemitism is necessary but not sufficient. Knowledge must translate into action. This final guide provides concrete steps for individuals, organizations, and institutions to contribute to the fight against antisemitism.

## For Individuals

### Recognize and Report
- Use the knowledge from this Academy to identify antisemitism in its various forms
- Report antisemitic content on social media platforms using the techniques in Track 3
- Report serious incidents to CIDI and to the police
- Document what you encounter - preservation of evidence matters

### Educate Yourself and Others
- Share resources from HateCheck Academy with your network
- Challenge antisemitic statements when you encounter them - silence implies acceptance
- Learn about Jewish history, culture, and contemporary experience from Jewish sources
- Understand the difference between legitimate political criticism and antisemitic expression

### Support Jewish Communities
- Attend Jewish cultural events and commemoration ceremonies
- Stand with Jewish community members when they face hostility
- Amplify Jewish voices rather than speaking over them
- Ask Jewish organizations what support they need rather than assuming

### Be a Critical Consumer
- Question conspiracy theories that identify shadowy elites controlling world events
- Verify information before sharing - misinformation fuels antisemitism
- Be aware of coded language and how it operates
- Recognize when political criticism crosses into antisemitic territory

## For Organizations

### Build Institutional Capacity
- Adopt a clear antisemitism definition (IHRA is the most widely accepted institutional standard)
- Develop response protocols using the frameworks in Track 4
- Train staff in antisemitism recognition and response
- Establish reporting mechanisms and ensure they are accessible

### Monitor and Document
- Implement systematic monitoring for antisemitic incidents in your domain
- Use standardized classification frameworks for consistency
- Share data with national monitoring organizations
- Publish transparency reports on incidents and responses

### Engage and Collaborate
- Partner with Jewish community organizations
- Join national and European networks for combating antisemitism
- Share best practices with peer organizations
- Advocate for policy improvements at local and national levels

## For Policymakers

### Strengthen Legal Frameworks
- Ensure hate crime legislation is applied consistently
- Resource law enforcement for effective investigation of antisemitic crimes
- Support the independence and capacity of anti-discrimination bodies
- Implement the EU Strategy on Combating Antisemitism

### Fund Prevention
- Support educational programs on antisemitism in schools
- Fund monitoring organizations and their digital infrastructure
- Invest in research on antisemitism trends and effective interventions
- Support Jewish community security measures

### Lead by Example
- Condemn antisemitism swiftly and specifically when it occurs
- Avoid equivocation, minimization, or "both sides" framing
- Engage with Jewish communities as partners in policy development
- Hold institutions accountable for their responses to antisemitism

## The Bigger Picture

Combating antisemitism is not only a Jewish concern. It is a test of democratic society's commitment to equal dignity, rule of law, and protection of minorities. History shows that societies that tolerate antisemitism do not stop there - the erosion of norms spreads to other groups and eventually to democratic institutions themselves.

Every action matters. Every report filed, every incident documented, every conversation held, every institution that builds capacity to respond - all of these contribute to a collective defense against the oldest hatred.

The tools exist. The knowledge is available. The only question is whether we choose to act.
        `.trim(),
      },
    ],
  },
];

export function getTrackBySlug(slug: string): Track | undefined {
  return tracks.find((t) => t.slug === slug);
}

export function getLessonBySlug(
  trackSlug: string,
  lessonSlug: string
): { track: Track; lesson: Lesson } | undefined {
  const track = getTrackBySlug(trackSlug);
  if (!track) return undefined;
  const lesson = track.lessons.find((l) => l.slug === lessonSlug);
  if (!lesson) return undefined;
  return { track, lesson };
}
