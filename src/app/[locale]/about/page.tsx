import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Target, Eye, Shield, Scale, Users } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About — HateCheck",
    description:
      "Learn about HateCheck's mission, origin, and commitment to fighting antisemitism as a not-for-profit initiative.",
  };
}

const values = [
  {
    icon: Scale,
    title: "Evidence-Based",
    desc: "Every classification is grounded in documented methodology. No black boxes — full reasoning chains for every decision.",
  },
  {
    icon: Shield,
    title: "Legally Grounded",
    desc: "We work within legal frameworks, not around them. Criminal speech thresholds are assessed seriously and cautiously.",
  },
  {
    icon: Eye,
    title: "Transparent",
    desc: "Our methodology is publicly documented. We welcome scrutiny, academic critique, and methodological debate.",
  },
  {
    icon: Users,
    title: "Community-Centered",
    desc: "Built for the communities most affected by antisemitism. We listen to lived experience alongside academic analysis.",
  },
  {
    icon: Target,
    title: "Precise",
    desc: "Over-classification harms free expression. Under-classification harms communities. We work hard to get this right.",
  },
  {
    icon: Heart,
    title: "Not-for-Profit",
    desc: "No commercial incentive to maximize flags or inflate severity. Our only incentive is accuracy and impact.",
  },
];

const phases = [
  {
    phase: "Phase 1",
    title: "Foundation",
    status: "Active",
    items: [
      "Core classification platform (5-tier system)",
      "Integration with IHRA, JDA, Nexus, Dutch law",
      "Beta partnerships with 3 Dutch Jewish community organizations",
      "Incident database and reporting module",
      "Public-facing resources and standards documentation",
    ],
  },
  {
    phase: "Phase 2",
    title: "Scale",
    status: "2025-2026",
    items: [
      "API access for external organizations",
      "Expanded language support (Arabic, Russian, German, French)",
      "Integration with EU DSA reporting obligations",
      "Academic research partnerships",
      "Belgian and German market adaptation",
    ],
  },
  {
    phase: "Phase 3",
    title: "European Network",
    status: "2026+",
    items: [
      "Pan-European incident tracking network",
      "Policy advocacy intelligence product",
      "Law enforcement liaison program",
      "Open-source methodology publication",
      "EU FRA (Fundamental Rights Agency) collaboration",
    ],
  },
];

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return (
    <div className="pt-[88px]">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#DDE4EE] bg-[#F8FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="w-10 h-[2px] bg-[#1A52C8] mb-4" />
            <p className="gov-label mb-3">ABOUT HATECHECK</p>
            <h1
              className="text-5xl md:text-6xl font-heading font-bold text-[#0C1B2E] mb-5"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {t("title")}
            </h1>
            <p className="text-xl text-[#2B3F57] leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#DDE4EE] bg-[#EFF3F8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                className="text-3xl md:text-4xl font-heading font-bold text-[#0C1B2E] mb-6"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {t("mission")}
              </h2>
              <div className="space-y-4">
                <p className="text-[#2B3F57] leading-relaxed">
                  HateCheck exists to make antisemitism and hate speech detection rigorous, consistent, and actionable. We believe that communities, institutions, and authorities deserve better tools than keyword filters and gut feelings.
                </p>
                <p className="text-[#2B3F57] leading-relaxed">
                  Our mission is to provide a trusted, evidence-based classification system that integrates international standards and Dutch law — enabling organizations to respond to hate speech with confidence, documentation, and legal defensibility.
                </p>
                <p className="text-[#2B3F57] leading-relaxed">
                  We operate as a not-for-profit initiative because we believe that commercial incentives are incompatible with the precision this work requires.
                </p>
              </div>
            </div>
            <div className="p-8 rounded-sm border border-[#C6D2E0] bg-white shadow-gov">
              <h3
                className="text-xl font-heading font-bold text-[#1A52C8] mb-4"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.05em" }}
              >
                VERIFY. CLASSIFY. PROTECT.
              </h3>
              <div className="space-y-4">
                {[
                  { word: "VERIFY", desc: "Establish the factual record of what was said, by whom, where, and in what context." },
                  { word: "CLASSIFY", desc: "Apply rigorous, documented standards to determine severity and applicable legal frameworks." },
                  { word: "PROTECT", desc: "Generate actionable intelligence that enables institutional response and community protection." },
                ].map((item) => (
                  <div key={item.word} className="border-l-2 border-[#1A52C8]/30 pl-4">
                    <span
                      className="text-sm font-heading font-semibold text-[#1A52C8] block mb-1"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em" }}
                    >
                      {item.word}
                    </span>
                    <p className="text-xs text-[#8099B3] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#DDE4EE] bg-white">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-heading font-bold text-[#0C1B2E] mb-8"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {t("origin")}
          </h2>
          <div className="max-w-3xl space-y-5">
            <p className="text-[#2B3F57] leading-relaxed">
              HateCheck was born from a documented failure. In 2023, a series of antisemitic incidents in Amsterdam — incidents that were minimized, misclassified, or ignored by the platforms on which they occurred — illustrated the gap between what organizations knew was happening and what they could prove, document, and act upon.
            </p>
            <p className="text-[#2B3F57] leading-relaxed">
              The pattern was clear: without a consistent, authoritative classification methodology, organizations were reporting the same incidents differently, platforms were applying inconsistent standards, and authorities lacked the structured documentation needed to justify enforcement action.
            </p>
            <p className="text-[#2B3F57] leading-relaxed">
              HateCheck was designed to address this directly — not by replacing human judgment, but by providing the infrastructure that makes human judgment consistent, documented, and legally defensible.
            </p>
            <p className="text-[#2B3F57] leading-relaxed">
              We launched in beta in early 2024 in partnership with three Dutch Jewish community organizations. Their real-world feedback shaped every aspect of the platform&apos;s design — from the five-tier classification system to the report output formats.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#DDE4EE] bg-[#EFF3F8]">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-heading font-bold text-[#0C1B2E] mb-10"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {t("values")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#DDE4EE] border border-[#DDE4EE] rounded-sm overflow-hidden">
            {values.map((v, i) => (
              <div
                key={i}
                className="p-6 bg-white hover:bg-[#F8FAFB] transition-colors"
              >
                <div
                  className="w-9 h-9 rounded-sm flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(26, 82, 200, 0.1)", border: "1px solid rgba(26, 82, 200, 0.2)" }}
                >
                  <v.icon size={18} className="text-[#1A52C8]" />
                </div>
                <h3
                  className="text-lg font-heading font-semibold text-[#0C1B2E] mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm text-[#2B3F57] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#DDE4EE] bg-white">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-heading font-bold text-[#0C1B2E] mb-10"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {t("roadmap")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#DDE4EE] border border-[#DDE4EE] rounded-sm overflow-hidden">
            {phases.map((phase, i) => (
              <div
                key={i}
                className="p-6 bg-white"
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-mono text-[#8099B3]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {phase.phase}
                  </span>
                  <span
                    className="text-xs font-heading tracking-wider px-2 py-0.5 rounded-sm"
                    style={{
                      backgroundColor: phase.status === "Active" ? "rgba(22, 163, 74, 0.15)" : "rgba(26, 82, 200, 0.1)",
                      color: phase.status === "Active" ? "#16A34A" : "#1A52C8",
                      border: phase.status === "Active" ? "1px solid rgba(22, 163, 74, 0.3)" : "1px solid rgba(26, 82, 200, 0.2)",
                      fontFamily: "'Barlow Condensed', sans-serif",
                      letterSpacing: "0.1em",
                      fontSize: "0.65rem",
                    }}
                  >
                    {phase.status.toUpperCase()}
                  </span>
                </div>
                <h3
                  className="text-xl font-heading font-bold text-[#0C1B2E] mb-4"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {phase.title}
                </h3>
                <ul className="space-y-2">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-[#2B3F57]">
                      <span
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: phase.status === "Active" ? "#16A34A" : "#1A52C8" }}
                      >
                        ▸
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not-for-Profit */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#DDE4EE] bg-[#EFF3F8]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2
              className="text-3xl md:text-4xl font-heading font-bold text-[#0C1B2E] mb-6"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {t("notForProfit")}
            </h2>
            <div className="space-y-4">
              <p className="text-[#2B3F57] leading-relaxed">
                HateCheck operates as a not-for-profit initiative. This is not incidental — it is fundamental to our credibility and methodology.
              </p>
              <p className="text-[#2B3F57] leading-relaxed">
                Commercial content moderation platforms have a structural incentive to over-classify: more flags mean more apparent value. We reject this incentive. Our only metric is whether our classifications are accurate, defensible, and useful to the communities and organizations we serve.
              </p>
              <p className="text-[#2B3F57] leading-relaxed">
                We are funded through grants from Jewish community foundations, civil society organizations, and research institutions. All platform access for community organizations is provided at cost or free of charge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-heading font-bold text-[#0C1B2E] mb-5"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Work With Us
          </h2>
          <p className="text-[#2B3F57] mb-8">
            Partner organizations, researchers, and funders — we want to hear from you.
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A52C8] hover:bg-[#1440A3] text-white rounded-sm font-heading tracking-wider text-sm transition-all shadow-gov"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.12em" }}
          >
            GET IN TOUCH
          </Link>
        </div>
      </section>
    </div>
  );
}
