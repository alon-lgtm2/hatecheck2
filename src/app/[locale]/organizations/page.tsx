import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2, GraduationCap, Scale, Newspaper,
  Lock, Shield, Database, FileCheck
} from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Organizations — HateCheck for Institutions",
    description:
      "How Jewish community organizations, civil society groups, academic institutions, and media outlets use HateCheck.",
  };
}

const useCases = [
  {
    icon: Building2,
    title: "Jewish Community Organizations",
    desc: "Monitor social media for antisemitic content targeting your community, document incidents for annual reports, and generate referral packages for platform complaints and police reporting.",
    uses: ["Incident intake and triage", "Annual report data", "Police referral packages", "Board-level risk briefings"],
  },
  {
    icon: GraduationCap,
    title: "Academic & Research Institutions",
    desc: "Access structured, classified incident data for research on antisemitism trends, discourse analysis, and the effectiveness of legal and platform interventions.",
    uses: ["Longitudinal trend analysis", "Content corpus annotation", "Methodology validation studies", "Cross-border comparative research"],
  },
  {
    icon: Scale,
    title: "Legal & Advocacy Organizations",
    desc: "Build legally defensible documentation packages for court cases, platform complaints, and regulatory submissions. Our tier system maps directly to Dutch and EU legal frameworks.",
    uses: ["Court documentation support", "Platform complaints (DSA)", "Regulatory submissions", "Expert opinion support"],
  },
  {
    icon: Newspaper,
    title: "Media & Journalism",
    desc: "Verify and contextualize reported antisemitic incidents with independent classification. Use our resources and case studies for informed, accurate reporting.",
    uses: ["Incident verification", "Context and classification", "Background research", "Source documentation"],
  },
];

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    desc: "All submissions and stored incident data are encrypted at rest and in transit.",
  },
  {
    icon: Shield,
    title: "GDPR Compliant",
    desc: "Full compliance with EU General Data Protection Regulation. Data processed in EU infrastructure.",
  },
  {
    icon: Database,
    title: "Data Isolation",
    desc: "Each organization's data is fully isolated. No cross-organization data sharing without explicit consent.",
  },
  {
    icon: FileCheck,
    title: "Audit Logging",
    desc: "Complete audit trail of all access, classifications, and exports for compliance purposes.",
  },
];

export default async function OrganizationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "organizations" });

  return (
    <div className="pt-[88px]">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#DDE4EE] bg-[#F8FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="w-10 h-[2px] bg-[#1A52C8] mb-4" />
            <p className="gov-label mb-3">FOR ORGANIZATIONS</p>
            <h1
              className="text-5xl md:text-6xl font-heading font-bold text-[#0C1B2E] mb-5"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {t("title")}
            </h1>
            <p className="text-lg text-[#2B3F57] leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Why Organizations Use HateCheck */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#DDE4EE] bg-[#EFF3F8]">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-heading font-bold text-[#0C1B2E] mb-8"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {t("why")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#DDE4EE] border border-[#DDE4EE] rounded-sm overflow-hidden mb-10">
            {[
              {
                metric: "3x",
                label: "Faster Incident Processing",
                desc: "Automated triage reduces time from submission to classified record from hours to minutes.",
              },
              {
                metric: "100%",
                label: "Documented Methodology",
                desc: "Every classification includes a complete reasoning chain — defensible in any forum.",
              },
              {
                metric: "5",
                label: "Integrated Frameworks",
                desc: "IHRA, JDA, Nexus, Art. 137c-e — all applied in a single workflow.",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white text-center">
                <div
                  className="text-5xl font-mono font-medium text-[#1A52C8] mb-2"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {item.metric}
                </div>
                <div
                  className="text-lg font-heading font-semibold text-[#0C1B2E] mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {item.label}
                </div>
                <p className="text-sm text-[#2B3F57]">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl">
            <p className="text-[#2B3F57] leading-relaxed mb-4">
              Organizations dealing with antisemitism face a common set of challenges: how to respond to incidents consistently across staff, how to document cases in formats that work for police and platforms, and how to produce credible aggregate data for funders and policymakers.
            </p>
            <p className="text-[#2B3F57] leading-relaxed">
              HateCheck provides the classification infrastructure that makes all of this possible — without requiring each organization to develop its own methodology from scratch.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#DDE4EE] bg-white">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-heading font-bold text-[#0C1B2E] mb-10"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {t("useCases")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#DDE4EE] border border-[#DDE4EE] rounded-sm overflow-hidden">
            {useCases.map((uc, i) => (
              <div
                key={i}
                className="p-6 bg-white hover:bg-[#F8FAFB] transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center"
                    style={{ backgroundColor: "rgba(26, 82, 200, 0.1)", border: "1px solid rgba(26, 82, 200, 0.2)" }}
                  >
                    <uc.icon size={20} className="text-[#1A52C8]" />
                  </div>
                  <h3
                    className="text-xl font-heading font-semibold text-[#0C1B2E]"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {uc.title}
                  </h3>
                </div>
                <p className="text-sm text-[#2B3F57] mb-4 leading-relaxed">{uc.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {uc.uses.map((use, j) => (
                    <span
                      key={j}
                      className="text-xs px-2 py-1 rounded-sm"
                      style={{
                        backgroundColor: "rgba(26, 82, 200, 0.08)",
                        border: "1px solid rgba(26, 82, 200, 0.15)",
                        color: "#2B3F57",
                        fontFamily: "'Barlow', sans-serif",
                      }}
                    >
                      {use}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data & Security */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#DDE4EE] bg-[#EFF3F8]">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-heading font-bold text-[#0C1B2E] mb-8"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {t("security")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#DDE4EE] border border-[#DDE4EE] rounded-sm overflow-hidden">
            {securityFeatures.map((f, i) => (
              <div
                key={i}
                className="p-5 bg-white"
              >
                <div
                  className="w-9 h-9 rounded-sm flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(26, 82, 200, 0.08)", border: "1px solid rgba(26, 82, 200, 0.15)" }}
                >
                  <f.icon size={18} className="text-[#1A52C8]" />
                </div>
                <h3
                  className="text-base font-heading font-semibold text-[#0C1B2E] mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {f.title}
                </h3>
                <p className="text-xs text-[#2B3F57] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-heading font-bold text-[#0C1B2E] mb-5"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {t("cta")}
          </h2>
          <p className="text-[#2B3F57] mb-10 max-w-xl mx-auto">
            See how HateCheck can support your organization&apos;s work. We offer tailored demos for different use cases.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/${locale}/contact`}
              className="px-8 py-4 bg-[#1A52C8] hover:bg-[#1440A3] text-white rounded-sm font-heading tracking-wider text-sm transition-all shadow-gov"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.12em" }}
            >
              REQUEST A DEMO
            </Link>
            <Link
              href={`/${locale}/product`}
              className="px-8 py-4 text-[#0C1B2E] rounded-sm font-heading tracking-wider text-sm border border-[#C6D2E0] hover:border-[#1A52C8] hover:bg-[#EFF3F8] transition-colors"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.12em" }}
            >
              PLATFORM OVERVIEW
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
