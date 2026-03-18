import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, ChevronRight } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return {
    title: "Standards — Legal & Definitional Frameworks",
    description:
      "HateCheck's classification methodology integrates IHRA, JDA, Nexus, and Dutch Penal Code frameworks.",
  };
}

const dutchArticles = [
  {
    code: "Art. 137c",
    title: "Group Defamation (Groepsbelediging)",
    description:
      "Criminalizes deliberately insulting a group of persons based on race, religion or belief, sexual orientation, or disability. Maximum: 1 year imprisonment or Category 3 fine.",
    elements: [
      "Deliberate (opzettelijk) intention required",
      "Must be made publicly",
      "Group defined by protected characteristic",
      "Insult threshold — not all offensive speech qualifies",
    ],
  },
  {
    code: "Art. 137d",
    title: "Incitement (Aanzetten tot Haat)",
    description:
      "Criminalizes public incitement to hatred against, discrimination of, or violence against persons based on race, religion, sexual orientation, or disability. Maximum: 2 years imprisonment or Category 4 fine.",
    elements: [
      "Higher threshold than 137c",
      "Must be likely to provoke hostile action",
      "Context and likely effect are critical",
      "Most relevant for antisemitic incitement online",
    ],
  },
  {
    code: "Art. 137e",
    title: "Distribution of Hate Materials",
    description:
      "Addresses distribution, public exhibition, or possession for distribution of materials containing group defamation (137c) or incitement (137d). Critical for social media sharing.",
    elements: [
      "Covers sharing/reposting — not just creation",
      "Hosting hateful content may trigger liability",
      "Platform-level obligations under DSA intersect here",
      "Intent to distribute required",
    ],
  },
];

export default async function StandardsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "standards" });

  return (
    <div className="pt-[88px]">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#DDE4EE] bg-[#F8FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="w-10 h-[2px] bg-[#1A52C8] mb-4" />
            <p className="gov-label mb-3">METHODOLOGY</p>
            <h1
              className="text-5xl md:text-6xl font-heading font-bold text-[#0C1B2E] mb-5"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {t("title")}
            </h1>
            <p className="text-lg text-[#2B3F57] leading-relaxed max-w-3xl">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#DDE4EE] bg-[#EFF3F8]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-[#2B3F57] leading-relaxed mb-4">
              HateCheck does not rely on a single definition of antisemitism or hate speech. Each of the primary international frameworks has strengths and limitations. Rather than choosing one and discarding others, our methodology applies all applicable frameworks in a layered approach — surfacing the most defensible classification for each piece of content.
            </p>
            <p className="text-[#2B3F57] leading-relaxed">
              For Dutch-specific cases, we apply the Dutch Penal Code frameworks on top of the international standards to assess criminal liability thresholds. This layered approach produces Tier 4 and Tier 5 classifications for content that not only meets antisemitism definitions but may also constitute criminal speech under Dutch law.
            </p>
          </div>
        </div>
      </section>

      {/* IHRA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#DDE4EE] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <span
                className="inline-block px-3 py-1.5 rounded-sm text-xs font-heading tracking-widest mb-4"
                style={{
                  backgroundColor: "rgba(26, 82, 200, 0.1)",
                  border: "1px solid rgba(26, 82, 200, 0.3)",
                  color: "#1A52C8",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  letterSpacing: "0.15em",
                }}
              >
                {t("ihra.badge").toUpperCase()}
              </span>
              <h2
                className="text-3xl font-heading font-bold text-[#0C1B2E] mb-3"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {t("ihra.title")}
              </h2>
              <p className="text-sm text-[#8099B3] mb-4">
                International Holocaust Remembrance Alliance — Adopted 2016. Endorsed by 35+ countries including the Netherlands.
              </p>
              <a
                href="https://www.holocaustremembrance.com/resources/working-definitions-charters/working-definition-antisemitism"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#1A52C8] hover:text-[#1440A3] transition-colors"
              >
                Official Source <ExternalLink size={12} />
              </a>
            </div>
            <div className="lg:col-span-2 space-y-4">
              <div className="p-5 rounded-sm border border-[#C6D2E0] bg-white shadow-gov">
                <h3 className="text-sm font-heading font-semibold text-[#0C1B2E] mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Core Definition
                </h3>
                <p className="text-sm text-[#2B3F57] leading-relaxed italic">
                  &ldquo;Antisemitism is a certain perception of Jews, which may be expressed as hatred toward Jews. Rhetorical and physical manifestations of antisemitism are directed toward Jewish or non-Jewish individuals and/or their property, toward Jewish community institutions and religious facilities.&rdquo;
                </p>
              </div>
              <div className="p-5 rounded-sm border border-[#C6D2E0] bg-white shadow-gov">
                <h3 className="text-sm font-heading font-semibold text-[#0C1B2E] mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Contemporary Examples (11 Total)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Calling for harm to Jews",
                    "Making mendacious, dehumanizing allegations about Jews",
                    "Accusing Jews of being responsible for Israeli state actions",
                    "Denying the Holocaust",
                    "Accusing Jews of dual loyalty",
                    "Applying double standards to Israel",
                    "Drawing comparisons to Nazi policy",
                    "Holding Jews collectively responsible",
                    "Calling Jewish self-determination racist",
                    "Dehumanizing stereotypes",
                    "Targeting Jewish community institutions",
                  ].map((ex, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#2B3F57]">
                      <span
                        className="font-mono text-[#1A52C8] flex-shrink-0"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {ex}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nexus Document */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#DDE4EE] bg-[#EFF3F8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <span
                className="inline-block px-3 py-1.5 rounded-sm text-xs font-heading tracking-widest mb-4"
                style={{
                  backgroundColor: "rgba(8, 145, 178, 0.1)",
                  border: "1px solid rgba(8, 145, 178, 0.3)",
                  color: "#0891B2",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  letterSpacing: "0.15em",
                }}
              >
                {t("nexus.badge").toUpperCase()}
              </span>
              <h2
                className="text-3xl font-heading font-bold text-[#0C1B2E] mb-3"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {t("nexus.title")}
              </h2>
              <p className="text-sm text-[#8099B3] mb-4">
                Nexus Task Force — 2021. Focuses specifically on Israel-Palestine discourse and the antisemitism boundary.
              </p>
              <a
                href="https://israelandantisemitism.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#0891B2] hover:text-[#0C7FA0] transition-colors"
              >
                Official Source <ExternalLink size={12} />
              </a>
            </div>
            <div className="lg:col-span-2 space-y-4">
              <div className="p-5 rounded-sm border border-[#C6D2E0] bg-white shadow-gov">
                <h3 className="text-sm font-heading font-semibold text-[#0C1B2E] mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  The Two-Part Nexus Test
                </h3>
                <p className="text-sm text-[#2B3F57] leading-relaxed mb-3">
                  Speech about Israel is antisemitic when it:
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2.5 text-sm text-[#2B3F57]">
                    <span className="text-[#0891B2] flex-shrink-0">A.</span>
                    Targets Israel <em>because it is Jewish</em> — i.e., applies standards not required of other states due to Jewish identity
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-[#2B3F57]">
                    <span className="text-[#0891B2] flex-shrink-0">B.</span>
                    Applies classic antisemitic tropes (conspiracy, dual loyalty, dehumanization) to Israeli or Jewish conduct
                  </div>
                </div>
              </div>
              <div className="p-5 rounded-sm border border-[#C6D2E0] bg-white shadow-gov">
                <h3 className="text-sm font-heading font-semibold text-[#0C1B2E] mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Explicitly Protected Speech
                </h3>
                <p className="text-sm text-[#2B3F57] leading-relaxed">
                  The Nexus Document explicitly states that criticism of Israeli government policies, support for Palestinian rights, and opposition to occupation are not antisemitic — even when strongly stated. The &ldquo;because it is Jewish&rdquo; test separates political discourse from hatred.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JDA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#DDE4EE] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <span
                className="inline-block px-3 py-1.5 rounded-sm text-xs font-heading tracking-widest mb-4"
                style={{
                  backgroundColor: "rgba(124, 58, 237, 0.1)",
                  border: "1px solid rgba(124, 58, 237, 0.3)",
                  color: "#7C3AED",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  letterSpacing: "0.15em",
                }}
              >
                {t("jda.badge").toUpperCase()}
              </span>
              <h2
                className="text-3xl font-heading font-bold text-[#0C1B2E] mb-3"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {t("jda.title")}
              </h2>
              <p className="text-sm text-[#8099B3] mb-4">
                Jerusalem Declaration — 2021. Developed by 200+ international scholars. Provides academic rigor and Israel-specific nuance.
              </p>
              <a
                href="https://jerusalemdeclaration.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#7C3AED] hover:text-[#6D28D9] transition-colors"
              >
                Official Source <ExternalLink size={12} />
              </a>
            </div>
            <div className="lg:col-span-2 space-y-4">
              <div className="p-5 rounded-sm border border-[#C6D2E0] bg-white shadow-gov">
                <h3 className="text-sm font-heading font-semibold text-[#0C1B2E] mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  What is Antisemitic (JDA)
                </h3>
                <ul className="space-y-1">
                  {[
                    "Calling for harm to Jews or treating them as less than human",
                    "Conspiracy theories (Jewish control of media, finance, government)",
                    "Denying or trivializing the Holocaust",
                    "Discriminatory double standards applied to Jews",
                    "Attributing Israeli conduct to Jewish identity globally",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#2B3F57]">
                      <span className="text-[#7C3AED] flex-shrink-0 mt-0.5">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-5 rounded-sm border border-[#C6D2E0] bg-white shadow-gov">
                <h3 className="text-sm font-heading font-semibold text-[#0C1B2E] mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  What is Not Antisemitic (JDA)
                </h3>
                <ul className="space-y-1">
                  {[
                    "Criticism of Israeli policies comparable to criticism of other states",
                    "Holding that Israel&apos;s founding involved ethnic displacement",
                    "Boycott, divestment, sanctions (BDS) advocacy",
                    "Comparing Israeli policies to other historical examples (context-dependent)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#2B3F57]">
                      <span className="text-[#16A34A] flex-shrink-0 mt-0.5">▸</span>
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dutch Penal Code */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#DDE4EE] bg-[#EFF3F8]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <span
              className="inline-block px-3 py-1.5 rounded-sm text-xs font-heading tracking-widest mb-4"
              style={{
                backgroundColor: "rgba(217, 119, 6, 0.1)",
                border: "1px solid rgba(217, 119, 6, 0.3)",
                color: "#D97706",
                fontFamily: "'Barlow Condensed', sans-serif",
                letterSpacing: "0.15em",
              }}
            >
              {t("dutch.badge").toUpperCase()}
            </span>
            <h2
              className="text-3xl md:text-4xl font-heading font-bold text-[#0C1B2E] mb-3"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {t("dutch.title")}
            </h2>
            <p className="text-[#2B3F57] max-w-2xl">
              The Netherlands&apos; criminal provisions governing hate speech are concentrated in Articles 137c-e of the Wetboek van Strafrecht (WvSr). These are the legal thresholds that determine Tier 4 and 5 classifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#DDE4EE] border border-[#DDE4EE] rounded-sm overflow-hidden">
            {dutchArticles.map((article) => (
              <div
                key={article.code}
                className="p-6 bg-white hover:bg-[#F8FAFB] transition-colors"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="text-lg font-mono font-semibold"
                    style={{ color: "#D97706", fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {article.code}
                  </span>
                </div>
                <h3
                  className="text-lg font-heading font-semibold text-[#0C1B2E] mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {article.title}
                </h3>
                <p className="text-sm text-[#2B3F57] mb-4 leading-relaxed">
                  {article.description}
                </p>
                <ul className="space-y-1.5">
                  {article.elements.map((el, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#8099B3]">
                      <span className="text-[#D97706] flex-shrink-0 mt-0.5">▸</span>
                      {el}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How They Work Together */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#DDE4EE] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h2
              className="text-3xl md:text-4xl font-heading font-bold text-[#0C1B2E] mb-3"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              How They Work Together
            </h2>
            <p className="text-[#2B3F57] max-w-2xl">
              The layered methodology integrates all frameworks at the appropriate analytical stage.
            </p>
          </div>

          <div className="relative">
            {/* Layers */}
            {[
              {
                label: "Layer 1: International Definitions",
                frameworks: ["IHRA", "JDA", "NEXUS"],
                desc: "Applied first to determine whether content meets any antisemitism threshold",
                color: "#1A52C8",
              },
              {
                label: "Layer 2: Context Analysis",
                frameworks: ["Satire Check", "Intent Signals", "Audience Context"],
                desc: "Contextual modifiers that can affect tier assignment in borderline cases",
                color: "#0891B2",
              },
              {
                label: "Layer 3: Dutch Legal Assessment",
                frameworks: ["Art. 137c", "Art. 137d", "Art. 137e"],
                desc: "Applied to determine criminal law applicability for Tier 4/5 assignments",
                color: "#D97706",
              },
              {
                label: "Layer 4: Tier Assignment",
                frameworks: ["Tier 1", "Tier 2", "Tier 3", "Tier 4", "Tier 5"],
                desc: "Final classification produced with full reasoning chain",
                color: "#16A34A",
              },
            ].map((layer, i) => (
              <div
                key={i}
                className="relative pl-8 pb-8 last:pb-0"
                style={{ borderLeft: `2px solid ${layer.color}30` }}
              >
                <div
                  className="absolute left-0 top-0 w-4 h-4 rounded-full -translate-x-2"
                  style={{ backgroundColor: layer.color }}
                />
                <div className="ml-4">
                  <h3
                    className="text-base font-heading font-semibold mb-2"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", color: layer.color }}
                  >
                    {layer.label}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {layer.frameworks.map((fw) => (
                      <span
                        key={fw}
                        className="text-xs font-mono px-2 py-0.5 rounded-sm"
                        style={{
                          backgroundColor: `${layer.color}15`,
                          border: `1px solid ${layer.color}30`,
                          color: layer.color,
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {fw}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-[#8099B3]">{layer.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#EFF3F8]">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-heading font-bold text-[#0C1B2E] mb-5"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            See the Standards in Practice
          </h2>
          <p className="text-[#2B3F57] mb-8">
            Review our anonymized case studies to see how these frameworks are applied.
          </p>
          <Link
            href={`/${locale}/reports`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A52C8] hover:bg-[#1440A3] text-white rounded-sm font-heading tracking-wider text-sm transition-all shadow-gov"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.12em" }}
          >
            VIEW CASE STUDIES <ChevronRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
