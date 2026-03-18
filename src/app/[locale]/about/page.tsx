import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About — HateCheck",
    description:
      "Learn about HateCheck's mission, origin, and commitment to fighting antisemitism as a not-for-profit initiative.",
  };
}

const values = [
  {
    title: "Evidence-Based",
    desc: "Every classification is grounded in documented methodology. No black boxes — full reasoning chains for every decision.",
  },
  {
    title: "Legally Grounded",
    desc: "We work within legal frameworks, not around them. Criminal speech thresholds are assessed seriously and cautiously.",
  },
  {
    title: "Transparent",
    desc: "Our methodology is publicly documented. We welcome scrutiny, academic critique, and methodological debate.",
  },
  {
    title: "Community-Centered",
    desc: "Built for the communities most affected by antisemitism. We listen to lived experience alongside academic analysis.",
  },
  {
    title: "Precise",
    desc: "Over-classification harms free expression. Under-classification harms communities. We work hard to get this right.",
  },
  {
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
    <div className="pt-[73px]">
      {/* Page Header */}
      <section className="py-[120px] px-16 border-b border-[#E5E7EB] bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl">
            <p className="swiss-label mb-4">ABOUT</p>
            <h1
              className="font-bold text-[#0A1628] mb-6"
              style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.1 }}
            >
              {t("title")}
            </h1>
            <p className="text-[17px] text-[#374151] leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-[120px] px-16 border-b border-[#E5E7EB] bg-white">
        <div className="max-w-[1400px] mx-auto">
          <p className="swiss-label mb-4">MISSION</p>
          <h2 className="text-[36px] font-bold text-[#0A1628] mb-10">
            {t("mission")}
          </h2>
          <div className="max-w-3xl space-y-5">
            <p className="text-[15px] text-[#374151] leading-relaxed">
              HateCheck exists to make antisemitism and hate speech detection rigorous, consistent, and actionable. We believe that communities, institutions, and authorities deserve better tools than keyword filters and gut feelings.
            </p>
            <p className="text-[15px] text-[#374151] leading-relaxed">
              Our mission is to provide a trusted, evidence-based classification system that integrates international standards and Dutch law — enabling organizations to respond to hate speech with confidence, documentation, and legal defensibility.
            </p>
            <p className="text-[15px] text-[#374151] leading-relaxed">
              We operate as a not-for-profit initiative because we believe that commercial incentives are incompatible with the precision this work requires.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-[120px] px-16 border-b border-[#E5E7EB] bg-white">
        <div className="max-w-[1400px] mx-auto">
          <p className="swiss-label mb-4">ORIGIN</p>
          <h2 className="text-[36px] font-bold text-[#0A1628] mb-10">
            {t("origin")}
          </h2>
          <div className="max-w-3xl space-y-5">
            <p className="text-[15px] text-[#374151] leading-relaxed">
              HateCheck was born from a documented failure. In 2023, a series of antisemitic incidents in Amsterdam — incidents that were minimized, misclassified, or ignored by the platforms on which they occurred — illustrated the gap between what organizations knew was happening and what they could prove, document, and act upon.
            </p>
            <p className="text-[15px] text-[#374151] leading-relaxed">
              The pattern was clear: without a consistent, authoritative classification methodology, organizations were reporting the same incidents differently, platforms were applying inconsistent standards, and authorities lacked the structured documentation needed to justify enforcement action.
            </p>
            <p className="text-[15px] text-[#374151] leading-relaxed">
              HateCheck was designed to address this directly — not by replacing human judgment, but by providing the infrastructure that makes human judgment consistent, documented, and legally defensible.
            </p>
            <p className="text-[15px] text-[#374151] leading-relaxed">
              We launched in beta in early 2024 in partnership with three Dutch Jewish community organizations. Their real-world feedback shaped every aspect of the platform&apos;s design — from the five-tier classification system to the report output formats.
            </p>
          </div>
        </div>
      </section>

      {/* Vision / Roadmap */}
      <section className="py-[120px] px-16 border-b border-[#E5E7EB] bg-white">
        <div className="max-w-[1400px] mx-auto">
          <p className="swiss-label mb-4">VISION</p>
          <h2 className="text-[36px] font-bold text-[#0A1628] mb-10">
            {t("roadmap")}
          </h2>
          <div className="max-w-3xl space-y-10">
            {phases.map((phase, i) => (
              <div key={i} className="border-b border-[#E5E7EB] pb-10 last:border-b-0 last:pb-0">
                <div className="flex items-baseline gap-4 mb-4">
                  <p className="swiss-label">{phase.phase}</p>
                  <span className="text-[13px] text-[#9CA3AF]">{phase.status}</span>
                </div>
                <h3 className="text-[20px] font-bold text-[#0A1628] mb-4">
                  {phase.title}
                </h3>
                <ul className="space-y-2">
                  {phase.items.map((item, j) => (
                    <li key={j} className="text-[15px] text-[#374151]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-[120px] px-16 border-b border-[#E5E7EB] bg-white">
        <div className="max-w-[1400px] mx-auto">
          <p className="swiss-label mb-4">VALUES</p>
          <h2 className="text-[36px] font-bold text-[#0A1628] mb-16">
            {t("values")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12">
            {values.map((v, i) => (
              <div key={i} className="border-b border-[#E5E7EB] pb-8">
                <h3 className="text-[18px] font-bold text-[#0A1628] mb-2">
                  {v.title}
                </h3>
                <p className="text-[15px] text-[#374151] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not-for-Profit */}
      <section className="py-[120px] px-16 border-b border-[#E5E7EB] bg-white">
        <div className="max-w-[1400px] mx-auto">
          <p className="swiss-label mb-4">STRUCTURE</p>
          <h2 className="text-[36px] font-bold text-[#0A1628] mb-10">
            {t("notForProfit")}
          </h2>
          <div className="max-w-3xl space-y-5">
            <p className="text-[15px] text-[#374151] leading-relaxed">
              HateCheck operates as a not-for-profit initiative. This is not incidental — it is fundamental to our credibility and methodology.
            </p>
            <p className="text-[15px] text-[#374151] leading-relaxed">
              Commercial content moderation platforms have a structural incentive to over-classify: more flags mean more apparent value. We reject this incentive. Our only metric is whether our classifications are accurate, defensible, and useful to the communities and organizations we serve.
            </p>
            <p className="text-[15px] text-[#374151] leading-relaxed">
              We are funded through grants from Jewish community foundations, civil society organizations, and research institutions. All platform access for community organizations is provided at cost or free of charge.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[120px] px-16 bg-white">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-[36px] font-bold text-[#0A1628] mb-4">
            Work With Us
          </h2>
          <p className="text-[15px] text-[#374151] mb-10">
            Partner organizations, researchers, and funders — we want to hear from you.
          </p>
          <Link
            href={`/${locale}/contact`}
            className="text-[15px] text-[#0A1628] underline underline-offset-4 hover:text-[#374151] transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
