import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/sections/Hero";

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

const whyStandardsCards = [
  {
    title: "Real threats are missed",
    desc: "Coded language, dog whistles, and semantic drift evade keyword filters. Without structured frameworks, dangerous content slips through.",
  },
  {
    title: "Legitimate speech is mislabelled",
    desc: "Sharp political critique is not the same as antisemitism. Over-classification erodes trust and chills academic freedom.",
  },
  {
    title: "Actions don\u2019t hold up",
    desc: "Reports built on weak analysis fail in courts, boardrooms, and public discourse. Defensibility requires rigorous methodology.",
  },
];

const governanceCards = [
  {
    title: "No automatic external actions",
    desc: "HateCheck never sends emails or forms to authorities automatically. AI drafts text; humans control the send button.",
  },
  {
    title: "Careful legal language",
    desc: "We say \u2018Potentially criminal\u2019, never \u2018This is a crime\u2019. The app is a reference tool, not a court.",
  },
  {
    title: "Data isolation",
    desc: "Every organisation\u2019s data is siloed. No organisation can see another\u2019s incidents. No tracking or analytics.",
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
    <div>
      <PageHeader
        label="METHODOLOGY"
        title={t("title")}
        subtitle={t("subtitle")}
      />

      {/* Why Standards Matter */}
      <section style={{ padding: "100px 0", backgroundColor: "#F8F9FA" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px" }}>
          <p className="section-label" style={{ marginBottom: "16px" }}>
            WHY STANDARDS MATTER
          </p>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: 400,
              color: "#1B1A2B",
              marginBottom: "40px",
            }}
          >
            Without Clear Standards, Three Things Go Wrong
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
          >
            {whyStandardsCards.map((card, i) => (
              <div key={i} className="glass-card" style={{ padding: "32px" }}>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 400,
                    color: "#1B1A2B",
                    marginBottom: "8px",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#6B7280",
                    lineHeight: 1.7,
                  }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "100px 0" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ maxWidth: "768px" }}>
            <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.7, marginBottom: "20px" }}>
              HateCheck does not rely on a single definition of antisemitism or hate speech. Each of the primary international frameworks has strengths and limitations. Rather than choosing one and discarding others, our methodology applies all applicable frameworks in a layered approach — surfacing the most defensible classification for each piece of content.
            </p>
            <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.7 }}>
              For Dutch-specific cases, we apply the Dutch Penal Code frameworks on top of the international standards to assess criminal liability thresholds. This layered approach produces Tier 4 and Tier 5 classifications for content that not only meets antisemitism definitions but may also constitute criminal speech under Dutch law.
            </p>
          </div>
        </div>
      </section>

      {/* IHRA */}
      <section style={{ padding: "100px 0", backgroundColor: "#F8F9FA" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px" }}>
          <div className="glass-card" style={{ padding: "48px" }}>
            <p className="section-label" style={{ marginBottom: "12px" }}>{t("ihra.badge").toUpperCase()}</p>
            <h2 style={{ fontSize: "32px", fontWeight: 400, color: "#1B1A2B", marginBottom: "12px" }}>
              {t("ihra.title")}
            </h2>
            <p style={{ fontSize: "13px", color: "#9CA3AF", marginBottom: "24px" }}>
              International Holocaust Remembrance Alliance — Adopted 2016. Endorsed by 35+ countries including the Netherlands.
            </p>
            <a
              href="https://www.holocaustremembrance.com/resources/working-definitions-charters/working-definition-antisemitism"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#2563EB" }}
            >
              Official Source
            </a>
            <div style={{ marginTop: "40px" }}>
              <div style={{ borderBottom: "1px solid #E5E7EB", paddingBottom: "32px", marginBottom: "32px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 400, color: "#1B1A2B", marginBottom: "12px" }}>Core Definition</h3>
                <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.7, fontStyle: "italic" }}>
                  &ldquo;Antisemitism is a certain perception of Jews, which may be expressed as hatred toward Jews. Rhetorical and physical manifestations of antisemitism are directed toward Jewish or non-Jewish individuals and/or their property, toward Jewish community institutions and religious facilities.&rdquo;
                </p>
              </div>
              <div style={{ marginBottom: "32px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 400, color: "#1B1A2B", marginBottom: "16px" }}>Contemporary Examples (11 Total)</h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}>
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
                    <div key={i} style={{ fontSize: "13px", color: "#6B7280" }}>
                      <span style={{ color: "#9CA3AF", marginRight: "8px" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {ex}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ borderTop: "1px solid #E5E7EB", paddingTop: "32px", marginBottom: "32px" }}>
                <p className="section-label" style={{ marginBottom: "8px" }}>ROLE IN HATECHECK</p>
                <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.7 }}>
                  IHRA serves as the primary framework for all cases not directly related to Israel. Its broad adoption makes it the most institutionally recognized baseline for classification.
                </p>
              </div>
              {/* How HateCheck Uses This */}
              <div
                className="glass-card"
                style={{
                  padding: "24px",
                  backgroundColor: "#F8F9FA",
                }}
              >
                <h4
                  style={{
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#1B1A2B",
                    marginBottom: "8px",
                  }}
                >
                  How HateCheck Uses This
                </h4>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#6B7280",
                    lineHeight: 1.7,
                  }}
                >
                  Provides the primary test for whether content is antisemitic at all. Reasoning logs reference IHRA-style patterns (demonisation, dehumanisation) for Tier 3&ndash;5 classifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nexus Document */}
      <section style={{ padding: "100px 0" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px" }}>
          <div className="glass-card" style={{ padding: "48px" }}>
            <p className="section-label" style={{ marginBottom: "12px" }}>{t("nexus.badge").toUpperCase()}</p>
            <h2 style={{ fontSize: "32px", fontWeight: 400, color: "#1B1A2B", marginBottom: "12px" }}>
              {t("nexus.title")}
            </h2>
            <p style={{ fontSize: "13px", color: "#9CA3AF", marginBottom: "24px" }}>
              Nexus Task Force — 2021. Focuses specifically on Israel-Palestine discourse and the antisemitism boundary.
            </p>
            <a
              href="https://israelandantisemitism.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#2563EB" }}
            >
              Official Source
            </a>
            <div style={{ marginTop: "40px" }}>
              <div style={{ borderBottom: "1px solid #E5E7EB", paddingBottom: "32px", marginBottom: "32px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 400, color: "#1B1A2B", marginBottom: "12px" }}>The Two-Part Nexus Test</h3>
                <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.7, marginBottom: "16px" }}>
                  Speech about Israel is antisemitic when it:
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ fontSize: "15px", color: "#6B7280" }}>
                    <span style={{ color: "#9CA3AF", marginRight: "8px" }}>A.</span>
                    Targets Israel <em>because it is Jewish</em> — i.e., applies standards not required of other states due to Jewish identity
                  </div>
                  <div style={{ fontSize: "15px", color: "#6B7280" }}>
                    <span style={{ color: "#9CA3AF", marginRight: "8px" }}>B.</span>
                    Applies classic antisemitic tropes (conspiracy, dual loyalty, dehumanization) to Israeli or Jewish conduct
                  </div>
                </div>
              </div>
              <div style={{ borderBottom: "1px solid #E5E7EB", paddingBottom: "32px", marginBottom: "32px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 400, color: "#1B1A2B", marginBottom: "12px" }}>Explicitly Protected Speech</h3>
                <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.7 }}>
                  The Nexus Document explicitly states that criticism of Israeli government policies, support for Palestinian rights, and opposition to occupation are not antisemitic — even when strongly stated. The &ldquo;because it is Jewish&rdquo; test separates political discourse from hatred.
                </p>
              </div>
              <div style={{ marginBottom: "32px" }}>
                <p className="section-label" style={{ marginBottom: "8px" }}>ROLE IN HATECHECK</p>
                <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.7 }}>
                  Nexus analysis is applied specifically to cases where the Israel-antisemitism boundary is contested, providing a structured test for distinguishing political criticism from antisemitic speech.
                </p>
              </div>
              {/* How HateCheck Uses This */}
              <div
                className="glass-card"
                style={{
                  padding: "24px",
                  backgroundColor: "#F8F9FA",
                }}
              >
                <h4
                  style={{
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#1B1A2B",
                    marginBottom: "8px",
                  }}
                >
                  How HateCheck Uses This
                </h4>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#6B7280",
                    lineHeight: 1.7,
                  }}
                >
                  When an incident involves Israel/Palestine, Zionism or boycotts, HateCheck asks: Is the content relying on classic antisemitic myths? Is it blaming Jews as Jews for actions of Israel? Is Israel being singled out by standards not applied to any other state?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JDA */}
      <section style={{ padding: "100px 0", backgroundColor: "#F8F9FA" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px" }}>
          <div className="glass-card" style={{ padding: "48px" }}>
            <p className="section-label" style={{ marginBottom: "12px" }}>{t("jda.badge").toUpperCase()}</p>
            <h2 style={{ fontSize: "32px", fontWeight: 400, color: "#1B1A2B", marginBottom: "12px" }}>
              {t("jda.title")}
            </h2>
            <p style={{ fontSize: "13px", color: "#9CA3AF", marginBottom: "24px" }}>
              Jerusalem Declaration — 2021. Developed by 200+ international scholars. Provides academic rigor and Israel-specific nuance.
            </p>
            <a
              href="https://jerusalemdeclaration.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#2563EB" }}
            >
              Official Source
            </a>
            <div style={{ marginTop: "40px" }}>
              <div style={{ borderBottom: "1px solid #E5E7EB", paddingBottom: "32px", marginBottom: "32px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 400, color: "#1B1A2B", marginBottom: "12px" }}>What is Antisemitic (JDA)</h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "8px", listStyle: "none", padding: 0 }}>
                  {[
                    "Calling for harm to Jews or treating them as less than human",
                    "Conspiracy theories (Jewish control of media, finance, government)",
                    "Denying or trivializing the Holocaust",
                    "Discriminatory double standards applied to Jews",
                    "Attributing Israeli conduct to Jewish identity globally",
                  ].map((item, i) => (
                    <li key={i} style={{ fontSize: "14px", color: "#6B7280" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ borderBottom: "1px solid #E5E7EB", paddingBottom: "32px", marginBottom: "32px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 400, color: "#1B1A2B", marginBottom: "12px" }}>What is Not Antisemitic (JDA)</h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "8px", listStyle: "none", padding: 0 }}>
                  {[
                    "Criticism of Israeli policies comparable to criticism of other states",
                    "Holding that Israel's founding involved ethnic displacement",
                    "Boycott, divestment, sanctions (BDS) advocacy",
                    "Comparing Israeli policies to other historical examples (context-dependent)",
                  ].map((item, i) => (
                    <li key={i} style={{ fontSize: "14px", color: "#6B7280" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ marginBottom: "32px" }}>
                <p className="section-label" style={{ marginBottom: "8px" }}>ROLE IN HATECHECK</p>
                <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.7 }}>
                  JDA guidance is applied as a secondary check for Israel-related content, providing more granular boundaries for grey-zone cases that IHRA alone cannot resolve.
                </p>
              </div>
              {/* How HateCheck Uses This */}
              <div
                className="glass-card"
                style={{
                  padding: "24px",
                  backgroundColor: "#F8F9FA",
                }}
              >
                <h4
                  style={{
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#1B1A2B",
                    marginBottom: "8px",
                  }}
                >
                  How HateCheck Uses This
                </h4>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#6B7280",
                    lineHeight: 1.7,
                  }}
                >
                  Useful for borderline cases in campus debates or academic speech. Helps avoid over-classification when criticism is sharp but not antisemitic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dutch Penal Code */}
      <section style={{ padding: "100px 0" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px" }}>
          <div className="glass-card" style={{ padding: "48px" }}>
            <p className="section-label" style={{ marginBottom: "12px" }}>{t("dutch.badge").toUpperCase()}</p>
            <h2 style={{ fontSize: "32px", fontWeight: 400, color: "#1B1A2B", marginBottom: "12px" }}>
              {t("dutch.title")}
            </h2>
            <p style={{ fontSize: "15px", color: "#6B7280", marginBottom: "40px", maxWidth: "640px", lineHeight: 1.7 }}>
              The Netherlands&apos; criminal provisions governing hate speech are concentrated in Articles 137c-e of the Wetboek van Strafrecht (WvSr). These are the legal thresholds that determine Tier 4 and 5 classifications.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              {dutchArticles.map((article, idx) => (
                <div
                  key={article.code}
                  style={{
                    borderBottom: idx < dutchArticles.length - 1 ? "1px solid #E5E7EB" : "none",
                    paddingBottom: idx < dutchArticles.length - 1 ? "40px" : "0",
                  }}
                >
                  <p className="section-label" style={{ marginBottom: "8px" }}>{article.code.toUpperCase()}</p>
                  <h3 style={{ fontSize: "18px", fontWeight: 400, color: "#1B1A2B", marginBottom: "12px" }}>
                    {article.title}
                  </h3>
                  <p style={{ fontSize: "15px", color: "#6B7280", marginBottom: "16px", lineHeight: 1.7 }}>
                    {article.description}
                  </p>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "4px", listStyle: "none", padding: 0 }}>
                    {article.elements.map((el, i) => (
                      <li key={i} style={{ fontSize: "13px", color: "#9CA3AF" }}>
                        {el}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "40px", paddingTop: "32px", borderTop: "1px solid #E5E7EB" }}>
              <p className="section-label" style={{ marginBottom: "8px" }}>ROLE IN HATECHECK</p>
              <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.7 }}>
                Dutch law is applied on top of international standards to assess criminal liability thresholds, producing Tier 4 and Tier 5 classifications for content that may constitute criminal speech.
              </p>
            </div>

            {/* How HateCheck Uses This */}
            <div
              className="glass-card"
              style={{
                padding: "24px",
                backgroundColor: "#F8F9FA",
                marginTop: "32px",
              }}
            >
              <h4
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#1B1A2B",
                  marginBottom: "8px",
                }}
              >
                How HateCheck Uses This
              </h4>
              <p
                style={{
                  fontSize: "15px",
                  color: "#6B7280",
                  lineHeight: 1.7,
                }}
              >
                Maps verified incidents to the specific statutory requirements of Articles 137c, 137d, and 137e. Generates structured evidentiary dossiers for the Public Prosecution Service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How They Work Together */}
      <section style={{ padding: "100px 0", backgroundColor: "#F8F9FA" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ marginBottom: "64px" }}>
            <p className="section-label" style={{ marginBottom: "16px" }}>INTEGRATED METHODOLOGY</p>
            <h2 style={{ fontSize: "36px", fontWeight: 400, color: "#1B1A2B", marginBottom: "16px" }}>
              How They Work Together
            </h2>
            <p style={{ fontSize: "15px", color: "#6B7280", maxWidth: "640px", lineHeight: 1.7 }}>
              The layered methodology integrates all frameworks at the appropriate analytical stage.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
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
            ].map((layer, i, arr) => (
              <div
                key={i}
                className="glass-card"
                style={{ padding: "32px", position: "relative" }}
              >
                <h3 style={{ fontSize: "18px", fontWeight: 400, color: "#1B1A2B", marginBottom: "8px" }}>
                  {layer.label}
                </h3>
                <p className="section-label" style={{ marginBottom: "8px" }}>{layer.frameworks}</p>
                <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.7 }}>{layer.desc}</p>
                {i < arr.length - 1 && (
                  <div style={{ position: "absolute", bottom: "-16px", left: "50%", transform: "translateX(-50%)", color: "#2563EB", fontSize: "24px", zIndex: 10 }}>
                    &#x2193;
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety, Privacy & Governance */}
      <section style={{ padding: "100px 0" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px" }}>
          <p className="section-label" style={{ marginBottom: "16px" }}>
            GOVERNANCE
          </p>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: 400,
              color: "#1B1A2B",
              marginBottom: "40px",
            }}
          >
            Safety, Privacy &amp; Governance
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
          >
            {governanceCards.map((card, i) => (
              <div key={i} className="glass-card" style={{ padding: "32px" }}>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 400,
                    color: "#1B1A2B",
                    marginBottom: "8px",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#6B7280",
                    lineHeight: 1.7,
                  }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 0", backgroundColor: "#F8F9FA" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 400, color: "#1B1A2B", marginBottom: "16px" }}>
            See the Standards in Practice
          </h2>
          <p style={{ fontSize: "15px", color: "#6B7280", marginBottom: "40px" }}>
            Review our anonymized case studies to see how these frameworks are applied.
          </p>
          <Link
            href={`/${locale}/reports`}
            className="btn-main"
          >
            View case studies
          </Link>
        </div>
      </section>
    </div>
  );
}
