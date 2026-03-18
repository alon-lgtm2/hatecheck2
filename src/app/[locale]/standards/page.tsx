import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";

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
    <div className="pt-[73px]">
      {/* Page Header */}
      <section className="py-[120px] px-16 border-b border-[#E5E7EB] bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl">
            <p className="swiss-label mb-4">METHODOLOGY</p>
            <h1
              className="font-bold text-[#0A1628] mb-6"
              style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.1 }}
            >
              {t("title")}
            </h1>
            <p className="text-[17px] text-[#374151] leading-relaxed max-w-3xl">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-[120px] px-16 border-b border-[#E5E7EB] bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl space-y-5">
            <p className="text-[15px] text-[#374151] leading-relaxed">
              HateCheck does not rely on a single definition of antisemitism or hate speech. Each of the primary international frameworks has strengths and limitations. Rather than choosing one and discarding others, our methodology applies all applicable frameworks in a layered approach — surfacing the most defensible classification for each piece of content.
            </p>
            <p className="text-[15px] text-[#374151] leading-relaxed">
              For Dutch-specific cases, we apply the Dutch Penal Code frameworks on top of the international standards to assess criminal liability thresholds. This layered approach produces Tier 4 and Tier 5 classifications for content that not only meets antisemitism definitions but may also constitute criminal speech under Dutch law.
            </p>
          </div>
        </div>
      </section>

      {/* IHRA */}
      <section className="py-[120px] px-16 border-b border-[#E5E7EB] bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="border border-[#E5E7EB] p-12 mb-0">
            <p className="swiss-label mb-3">{t("ihra.badge").toUpperCase()}</p>
            <h2 className="text-[32px] font-bold text-[#0A1628] mb-3">
              {t("ihra.title")}
            </h2>
            <p className="text-[13px] text-[#9CA3AF] mb-6">
              International Holocaust Remembrance Alliance — Adopted 2016. Endorsed by 35+ countries including the Netherlands.
            </p>
            <a
              href="https://www.holocaustremembrance.com/resources/working-definitions-charters/working-definition-antisemitism"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-[#0A1628] underline underline-offset-4 hover:text-[#374151] transition-colors"
            >
              Official Source
            </a>
            <div className="mt-10 space-y-8">
              <div className="border-b border-[#E5E7EB] pb-8">
                <h3 className="text-[16px] font-bold text-[#0A1628] mb-3">Core Definition</h3>
                <p className="text-[15px] text-[#374151] leading-relaxed italic">
                  &ldquo;Antisemitism is a certain perception of Jews, which may be expressed as hatred toward Jews. Rhetorical and physical manifestations of antisemitism are directed toward Jewish or non-Jewish individuals and/or their property, toward Jewish community institutions and religious facilities.&rdquo;
                </p>
              </div>
              <div>
                <h3 className="text-[16px] font-bold text-[#0A1628] mb-4">Contemporary Examples (11 Total)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                    <div key={i} className="text-[13px] text-[#374151]">
                      <span className="text-[#9CA3AF] mr-2">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {ex}
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t border-[#E5E7EB] pt-8">
                <p className="swiss-label mb-2">ROLE IN HATECHECK</p>
                <p className="text-[15px] text-[#374151] leading-relaxed">
                  IHRA serves as the primary framework for all cases not directly related to Israel. Its broad adoption makes it the most institutionally recognized baseline for classification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nexus Document */}
      <section className="py-[120px] px-16 border-b border-[#E5E7EB] bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="border border-[#E5E7EB] p-12">
            <p className="swiss-label mb-3">{t("nexus.badge").toUpperCase()}</p>
            <h2 className="text-[32px] font-bold text-[#0A1628] mb-3">
              {t("nexus.title")}
            </h2>
            <p className="text-[13px] text-[#9CA3AF] mb-6">
              Nexus Task Force — 2021. Focuses specifically on Israel-Palestine discourse and the antisemitism boundary.
            </p>
            <a
              href="https://israelandantisemitism.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-[#0A1628] underline underline-offset-4 hover:text-[#374151] transition-colors"
            >
              Official Source
            </a>
            <div className="mt-10 space-y-8">
              <div className="border-b border-[#E5E7EB] pb-8">
                <h3 className="text-[16px] font-bold text-[#0A1628] mb-3">The Two-Part Nexus Test</h3>
                <p className="text-[15px] text-[#374151] leading-relaxed mb-4">
                  Speech about Israel is antisemitic when it:
                </p>
                <div className="space-y-3">
                  <div className="text-[15px] text-[#374151]">
                    <span className="text-[#9CA3AF] mr-2">A.</span>
                    Targets Israel <em>because it is Jewish</em> — i.e., applies standards not required of other states due to Jewish identity
                  </div>
                  <div className="text-[15px] text-[#374151]">
                    <span className="text-[#9CA3AF] mr-2">B.</span>
                    Applies classic antisemitic tropes (conspiracy, dual loyalty, dehumanization) to Israeli or Jewish conduct
                  </div>
                </div>
              </div>
              <div className="border-b border-[#E5E7EB] pb-8">
                <h3 className="text-[16px] font-bold text-[#0A1628] mb-3">Explicitly Protected Speech</h3>
                <p className="text-[15px] text-[#374151] leading-relaxed">
                  The Nexus Document explicitly states that criticism of Israeli government policies, support for Palestinian rights, and opposition to occupation are not antisemitic — even when strongly stated. The &ldquo;because it is Jewish&rdquo; test separates political discourse from hatred.
                </p>
              </div>
              <div>
                <p className="swiss-label mb-2">ROLE IN HATECHECK</p>
                <p className="text-[15px] text-[#374151] leading-relaxed">
                  Nexus analysis is applied specifically to cases where the Israel-antisemitism boundary is contested, providing a structured test for distinguishing political criticism from antisemitic speech.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JDA */}
      <section className="py-[120px] px-16 border-b border-[#E5E7EB] bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="border border-[#E5E7EB] p-12">
            <p className="swiss-label mb-3">{t("jda.badge").toUpperCase()}</p>
            <h2 className="text-[32px] font-bold text-[#0A1628] mb-3">
              {t("jda.title")}
            </h2>
            <p className="text-[13px] text-[#9CA3AF] mb-6">
              Jerusalem Declaration — 2021. Developed by 200+ international scholars. Provides academic rigor and Israel-specific nuance.
            </p>
            <a
              href="https://jerusalemdeclaration.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-[#0A1628] underline underline-offset-4 hover:text-[#374151] transition-colors"
            >
              Official Source
            </a>
            <div className="mt-10 space-y-8">
              <div className="border-b border-[#E5E7EB] pb-8">
                <h3 className="text-[16px] font-bold text-[#0A1628] mb-3">What is Antisemitic (JDA)</h3>
                <ul className="space-y-2">
                  {[
                    "Calling for harm to Jews or treating them as less than human",
                    "Conspiracy theories (Jewish control of media, finance, government)",
                    "Denying or trivializing the Holocaust",
                    "Discriminatory double standards applied to Jews",
                    "Attributing Israeli conduct to Jewish identity globally",
                  ].map((item, i) => (
                    <li key={i} className="text-[14px] text-[#374151]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-b border-[#E5E7EB] pb-8">
                <h3 className="text-[16px] font-bold text-[#0A1628] mb-3">What is Not Antisemitic (JDA)</h3>
                <ul className="space-y-2">
                  {[
                    "Criticism of Israeli policies comparable to criticism of other states",
                    "Holding that Israel's founding involved ethnic displacement",
                    "Boycott, divestment, sanctions (BDS) advocacy",
                    "Comparing Israeli policies to other historical examples (context-dependent)",
                  ].map((item, i) => (
                    <li key={i} className="text-[14px] text-[#374151]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="swiss-label mb-2">ROLE IN HATECHECK</p>
                <p className="text-[15px] text-[#374151] leading-relaxed">
                  JDA guidance is applied as a secondary check for Israel-related content, providing more granular boundaries for grey-zone cases that IHRA alone cannot resolve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dutch Penal Code */}
      <section className="py-[120px] px-16 border-b border-[#E5E7EB] bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="border border-[#E5E7EB] p-12">
            <p className="swiss-label mb-3">{t("dutch.badge").toUpperCase()}</p>
            <h2 className="text-[32px] font-bold text-[#0A1628] mb-3">
              {t("dutch.title")}
            </h2>
            <p className="text-[15px] text-[#374151] mb-10 max-w-2xl leading-relaxed">
              The Netherlands&apos; criminal provisions governing hate speech are concentrated in Articles 137c-e of the Wetboek van Strafrecht (WvSr). These are the legal thresholds that determine Tier 4 and 5 classifications.
            </p>

            <div className="space-y-10">
              {dutchArticles.map((article) => (
                <div
                  key={article.code}
                  className="border-b border-[#E5E7EB] pb-10 last:border-b-0 last:pb-0"
                >
                  <p className="swiss-label mb-2">{article.code.toUpperCase()}</p>
                  <h3 className="text-[18px] font-bold text-[#0A1628] mb-3">
                    {article.title}
                  </h3>
                  <p className="text-[15px] text-[#374151] mb-4 leading-relaxed">
                    {article.description}
                  </p>
                  <ul className="space-y-1">
                    {article.elements.map((el, i) => (
                      <li key={i} className="text-[13px] text-[#9CA3AF]">
                        {el}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-[#E5E7EB]">
              <p className="swiss-label mb-2">ROLE IN HATECHECK</p>
              <p className="text-[15px] text-[#374151] leading-relaxed">
                Dutch law is applied on top of international standards to assess criminal liability thresholds, producing Tier 4 and Tier 5 classifications for content that may constitute criminal speech.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How They Work Together */}
      <section className="py-[120px] px-16 border-b border-[#E5E7EB] bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <p className="swiss-label mb-4">INTEGRATED METHODOLOGY</p>
            <h2 className="text-[36px] font-bold text-[#0A1628] mb-4">
              How They Work Together
            </h2>
            <p className="text-[15px] text-[#374151] max-w-2xl leading-relaxed">
              The layered methodology integrates all frameworks at the appropriate analytical stage.
            </p>
          </div>

          <div className="space-y-10">
            {[
              {
                label: "Layer 1: International Definitions",
                frameworks: "IHRA, JDA, NEXUS",
                desc: "Applied first to determine whether content meets any antisemitism threshold.",
              },
              {
                label: "Layer 2: Context Analysis",
                frameworks: "Satire Check, Intent Signals, Audience Context",
                desc: "Contextual modifiers that can affect tier assignment in borderline cases.",
              },
              {
                label: "Layer 3: Dutch Legal Assessment",
                frameworks: "Art. 137c, Art. 137d, Art. 137e",
                desc: "Applied to determine criminal law applicability for Tier 4/5 assignments.",
              },
              {
                label: "Layer 4: Tier Assignment",
                frameworks: "Tier 1, Tier 2, Tier 3, Tier 4, Tier 5",
                desc: "Final classification produced with full reasoning chain.",
              },
            ].map((layer, i) => (
              <div
                key={i}
                className="border-b border-[#E5E7EB] pb-10 last:border-b-0 last:pb-0"
              >
                <h3 className="text-[18px] font-bold text-[#0A1628] mb-2">
                  {layer.label}
                </h3>
                <p className="swiss-label mb-2">{layer.frameworks}</p>
                <p className="text-[15px] text-[#374151] leading-relaxed">{layer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[120px] px-16 bg-white">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-[36px] font-bold text-[#0A1628] mb-4">
            See the Standards in Practice
          </h2>
          <p className="text-[15px] text-[#374151] mb-10">
            Review our anonymized case studies to see how these frameworks are applied.
          </p>
          <Link
            href={`/${locale}/reports`}
            className="text-[15px] text-[#0A1628] underline underline-offset-4 hover:text-[#374151] transition-colors"
          >
            View case studies
          </Link>
        </div>
      </section>
    </div>
  );
}
