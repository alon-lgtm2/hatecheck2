export interface Report {
  id: string;
  title: string;
  date: string;
  platform: string;
  tier: 1 | 2 | 3 | 4 | 5;
  excerpt: string;
  category: string;
  content: {
    summary: string;
    incidentDescription: string;
    analysisNotes: string;
    applicableStandards: string[];
    legalAssessment: string;
    recommendedActions: string[];
    keywords: string[];
  };
}

export const reports: Report[] = [
  {
    id: "HC-2025-001",
    title: "Social Media Post — Conspiracy Content re: Jewish Financial Control",
    date: "2025-01-28",
    platform: "Facebook",
    tier: 3,
    category: "Financial Conspiracy Trope",
    excerpt:
      "A public post on Facebook depicting a classic antisemitic trope suggesting Jewish control of global financial systems. Content does not reach the criminal threshold under 137c but clearly qualifies as antisemitic under IHRA.",
    content: {
      summary:
        "A post shared publicly on Facebook in the Netherlands contained imagery and text evoking classical antisemitic tropes about Jewish financial domination. The content was accompanied by a meme format with derogatory characterization. Total reach estimated at approximately 1,200 views before being flagged.",
      incidentDescription:
        "The incident involves a public post combining an image of a caricatured figure with text stating that 'they control everything from Frankfurt to Wall Street.' The combination of the image — visually evoking historical antisemitic caricatures — with explicit references to financial institutions and a winking emoji constitutes a recognizable deployment of the Rothschild/international banking conspiracy trope.",
      analysisNotes:
        "The content was analyzed across three dimensions: visual (image resemblance to known antisemitic caricatures), linguistic (coded references to financial institutions), and contextual (poster's history of similar content). All three vectors converge on antisemitic classification. The plausible deniability claim that the image is 'just a cartoon' is not persuasive given the linguistic context.",
      applicableStandards: [
        "IHRA Example 7: Making mendacious, dehumanizing, demonizing, or stereotypical allegations about Jews as such or the power of Jews as collective — such as, especially but not exclusively, the myth about a world Jewish conspiracy or of Jews controlling the media, economy, government or other societal institutions.",
        "JDA: Clearly antisemitic — repeats conspiratorial canards about Jewish power over finance.",
      ],
      legalAssessment:
        "This content likely meets the threshold for Group Defamation under Article 137c WvSr (deliberately insulting a group of persons based on race/religion). However, prosecution under 137c requires intentionality, which may be contested. A formal legal opinion and police consultation would be required to assess prosecutorial viability. The content does not appear to reach the incitement threshold of Article 137d. Classified as Tier 3.",
      recommendedActions: [
        "Report to Facebook/Meta via official hate speech reporting channel",
        "Preserve evidence: screenshots with metadata, URL, share count",
        "Document in organizational incident database",
        "Consider referral to CIDI (Center for Information and Documentation on Israel) for national tracking",
        "Do not publicly share or amplify the content",
      ],
      keywords: [
        "financial conspiracy",
        "Rothschild trope",
        "IHRA example 7",
        "caricature",
        "Facebook",
      ],
    },
  },
  {
    id: "HC-2025-002",
    title: "Forum Post — Direct Incitement with Threatening Language",
    date: "2025-02-14",
    platform: "Telegram Channel",
    tier: 4,
    category: "Incitement / Threat",
    excerpt:
      "A post in a Dutch-language Telegram channel containing explicit threatening language directed at the Jewish community in Amsterdam. Content meets threshold for potential criminal liability under Articles 137c and 137d WvSr.",
    content: {
      summary:
        "A message posted in a Dutch-language Telegram channel with approximately 3,400 members contained explicit calls for action against Jewish community institutions in Amsterdam. The message identified two specific institutions by name and used language that could be interpreted as incitement to violence. The channel has a documented history of antisemitic content.",
      incidentDescription:
        "The message stated, in substance, that named Amsterdam synagogues 'deserve what is coming' and that 'real Dutch patriots know what to do.' This language, particularly given the channel's established context of radicalizing content and the identification of specific targets, meets multiple analytical thresholds for threatened or incited violence.",
      analysisNotes:
        "The combination of: (1) specific named targets, (2) implicit call to action, (3) historically resonant threatening framing ('know what to do'), and (4) channel audience that includes known extremist accounts elevates this beyond generic hate speech into potentially actionable threat territory. Analysis was conducted by two independent reviewers and both reached Tier 4 classification.",
      applicableStandards: [
        "IHRA Example 1: Calling for, aiding, or justifying the killing or harming of Jews.",
        "IHRA Example 9: Holding Jews collectively responsible for actions of the state of Israel.",
        "Article 137d WvSr: Public incitement to hatred against or discrimination of a group on account of religion.",
        "Article 285 WvSr: Threat/intimidation (may also apply given specific target identification).",
      ],
      legalAssessment:
        "This content potentially violates Articles 137c and 137d of the Dutch Penal Code. The specific targeting of named institutions may additionally trigger Article 285 (threat). The threshold for Article 137d prosecution — that the expression be likely to provoke hostile action — appears met given the channel's audience and established intent. Urgent referral to Politie (Dutch Police) is recommended. Classified as Tier 4.",
      recommendedActions: [
        "URGENT: Report to Politie via M. (anonymous reporting) or direct complaint",
        "Report to Telegram through official channel with evidence package",
        "Notify targeted institutions immediately for security assessment",
        "Contact NCTV (National Coordinator for Security and Counterterrorism) if physical threat appears credible",
        "Preserve all evidence with timestamp authentication",
        "Do not engage with or respond to the content",
      ],
      keywords: [
        "incitement",
        "threat",
        "137d",
        "Telegram",
        "Amsterdam",
        "synagogue",
        "specific targeting",
      ],
    },
  },
  {
    id: "HC-2025-003",
    title: "News Comment Section — Borderline Israel-Related Content",
    date: "2025-03-01",
    platform: "Online News Platform (Comments)",
    tier: 2,
    category: "Israel-Related / Borderline",
    excerpt:
      "A comment posted on a major Dutch news platform's article about Israeli policy applies terminology that may or may not constitute antisemitism depending on analytical framework applied. Illustrates the challenge of Israel-adjacent content.",
    content: {
      summary:
        "A comment on a Dutch mainstream news platform's article about Israeli government policy used language asserting that 'all Israeli politicians are ultimately directed by the international Jewish lobby in Washington.' This statement represents a contested case: it combines criticism of Israeli government with an attribution to a transnational Jewish network.",
      incidentDescription:
        "The commenter, responding to an article about Israeli foreign policy, wrote a multi-paragraph comment asserting that Israeli political decisions reflect not Israeli national interest but the dictates of a 'global Jewish political machine.' The comment did not include explicit slurs or calls for violence. It attracted 47 upvotes and was not removed by platform moderators.",
      analysisNotes:
        "This case presents a genuine analytical challenge. Under IHRA Example 5 ('Accusing the Jews as a people... of being responsible for real or imagined wrongdoing committed by... the state of Israel'), the attribution of Israeli government decisions to a global Jewish network would qualify as antisemitic. Under the JDA framework, however, some forms of criticism of Jewish political organizations are explicitly protected. The critical question is whether this comment targets a Jewish political lobby as a legitimate political actor or invokes the antisemitic canard of a secret, controlling 'international Jewish conspiracy.' Our analysis finds it closer to the latter.",
      applicableStandards: [
        "IHRA Example 5: Accusation that Jews collectively bear responsibility for Israeli state actions.",
        "IHRA Example 7: Myth of Jews controlling political institutions.",
        "JDA Section H: Allowing criticism of specific Jewish political organizations while prohibiting conspiratorial framing.",
        "Nexus Document: The 'because it is Jewish' test — is Israel being criticized for specific policies, or because of its alleged connection to global Jewish control?",
      ],
      legalAssessment:
        "This content is unlikely to meet the criminal threshold under Articles 137c or 137d. The language, while antisemitic in our assessment, does not rise to the level of deliberate group defamation or incitement that Dutch courts have required for prosecution. This is precisely the type of content that occupies the grey zone that the law does not resolve — antisemitic in substance, protected in expression. Classified as Tier 2: Borderline — Context Needed.",
      recommendedActions: [
        "Document the comment for trend analysis — Israel-related conspiracy content is significant in volume",
        "Consider whether to report to platform — outcome uncertain but worth attempting",
        "Use as a case study for training moderators on Israel-adjacent antisemitism",
        "Do not recommend criminal complaint — would likely be unsuccessful and could discredit future legitimate complaints",
        "Monitor poster for pattern of escalating content",
      ],
      keywords: [
        "Israel",
        "lobby",
        "conspiracy",
        "borderline",
        "IHRA example 7",
        "JDA",
        "news comments",
        "Tier 2",
      ],
    },
  },
];

export function getReportById(id: string): Report | undefined {
  return reports.find((r) => r.id === id);
}

export const tierConfig = {
  1: {
    label: "Not Antisemitic",
    color: "#16A34A",
    bgColor: "rgba(22, 163, 74, 0.1)",
    borderColor: "rgba(22, 163, 74, 0.3)",
    textColor: "#16A34A",
  },
  2: {
    label: "Borderline / Context Needed",
    color: "#CA8A04",
    bgColor: "rgba(202, 138, 4, 0.1)",
    borderColor: "rgba(202, 138, 4, 0.3)",
    textColor: "#CA8A04",
  },
  3: {
    label: "Antisemitic / Non-Criminal",
    color: "#EA580C",
    bgColor: "rgba(234, 88, 12, 0.1)",
    borderColor: "rgba(234, 88, 12, 0.3)",
    textColor: "#EA580C",
  },
  4: {
    label: "Potentially Criminal",
    color: "#DC2626",
    bgColor: "rgba(220, 38, 38, 0.1)",
    borderColor: "rgba(220, 38, 38, 0.3)",
    textColor: "#DC2626",
  },
  5: {
    label: "Urgent Risk",
    color: "#7F1D1D",
    bgColor: "rgba(127, 29, 29, 0.2)",
    borderColor: "rgba(127, 29, 29, 0.5)",
    textColor: "#FCA5A5",
  },
};
