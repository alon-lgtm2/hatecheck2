import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Organizations — HateCheck for Institutions",
    description:
      "How Jewish community organizations, civil society groups, academic institutions, and media outlets use HateCheck.",
  };
}

const useCases = [
  {
    title: "Jewish Community Organizations",
    desc: "Monitor social media for antisemitic content targeting your community, document incidents for annual reports, and generate referral packages for platform complaints and police reporting.",
    uses: ["Incident intake and triage", "Annual report data", "Police referral packages", "Board-level risk briefings"],
  },
  {
    title: "Academic & Research Institutions",
    desc: "Access structured, classified incident data for research on antisemitism trends, discourse analysis, and the effectiveness of legal and platform interventions.",
    uses: ["Longitudinal trend analysis", "Content corpus annotation", "Methodology validation studies", "Cross-border comparative research"],
  },
  {
    title: "Legal & Advocacy Organizations",
    desc: "Build legally defensible documentation packages for court cases, platform complaints, and regulatory submissions. Our tier system maps directly to Dutch and EU legal frameworks.",
    uses: ["Court documentation support", "Platform complaints (DSA)", "Regulatory submissions", "Expert opinion support"],
  },
  {
    title: "Media & Journalism",
    desc: "Verify and contextualize reported antisemitic incidents with independent classification. Use our resources and case studies for informed, accurate reporting.",
    uses: ["Incident verification", "Context and classification", "Background research", "Source documentation"],
  },
];

const features = [
  "End-to-End Encryption — All submissions and stored incident data are encrypted at rest and in transit.",
  "GDPR Compliant — Full compliance with EU General Data Protection Regulation. Data processed in EU infrastructure.",
  "Data Isolation — Each organization's data is fully isolated. No cross-organization data sharing without explicit consent.",
  "Audit Logging — Complete audit trail of all access, classifications, and exports for compliance purposes.",
];

export default async function OrganizationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "organizations" });

  return (
    <div className="pt-32">
      {/* Page Header */}
      <section className="pt-40 pb-16 px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl">
            <p className="section-label mb-4">ORGANISATIONS</p>
            <h1
              className="font-bold text-white mb-6"
              style={{ fontSize: "48px", lineHeight: 1.1 }}
            >
              {t("title")}
            </h1>
            <p className="text-[17px] text-[rgba(255,255,255,0.65)] leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Why Organizations Use HateCheck */}
      <section className="py-24 px-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="section-label mb-4">OVERVIEW</p>
          <h2 className="text-[36px] font-bold text-white mb-10">
            {t("why")}
          </h2>
          <div className="max-w-3xl space-y-5">
            <p className="text-[15px] text-[rgba(255,255,255,0.65)] leading-relaxed">
              Organizations dealing with antisemitism face a common set of challenges: how to respond to incidents consistently across staff, how to document cases in formats that work for police and platforms, and how to produce credible aggregate data for funders and policymakers.
            </p>
            <p className="text-[15px] text-[rgba(255,255,255,0.65)] leading-relaxed">
              HateCheck provides the classification infrastructure that makes all of this possible — without requiring each organization to develop its own methodology from scratch.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="section-label mb-4">USE CASES</p>
          <h2 className="text-[36px] font-bold text-white mb-16">
            {t("useCases")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="glass-card p-8">
                <h3 className="text-[20px] font-bold text-white mb-3">
                  {uc.title}
                </h3>
                <p className="text-[15px] text-[rgba(255,255,255,0.65)] mb-5 leading-relaxed">{uc.desc}</p>
                <ul className="space-y-1">
                  {uc.uses.map((use, j) => (
                    <li key={j} className="text-[13px] text-[rgba(255,255,255,0.4)]">
                      {use}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data & Security */}
      <section className="py-24 px-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="section-label mb-4">SECURITY</p>
          <h2 className="text-[36px] font-bold text-white mb-10">
            {t("security")}
          </h2>
          <div className="max-w-3xl space-y-4">
            {features.map((f, i) => (
              <div key={i} className="glass-card p-6">
                <p className="text-[15px] text-[rgba(255,255,255,0.65)] leading-relaxed">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-16">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-[36px] font-bold text-white mb-4">
            {t("cta")}
          </h2>
          <p className="text-[15px] text-[rgba(255,255,255,0.65)] mb-10 max-w-xl mx-auto">
            See how HateCheck can support your organization&apos;s work. We offer tailored demos for different use cases.
          </p>
          <Link
            href={`/${locale}/contact`}
            className="btn-primary"
          >
            Request a demo
          </Link>
        </div>
      </section>
    </div>
  );
}
