import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/sections/Hero";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Organizations — HateCheck for Institutions",
    description:
      "How Jewish community organizations, civil society groups, academic institutions, and media outlets use HateCheck.",
  };
}

const useCases = [
  {
    title: "Jewish Community Organisations",
    desc: "Monitor, document, and respond to incidents systematically. Link cases to profiles. Generate correspondence for police, CIDI, and municipal authorities.",
  },
  {
    title: "Academic & Research Institutions",
    desc: "Handle campus incidents with documentation and legal awareness. Differentiate protected speech from actionable hate. Support diversity officers with structured frameworks.",
  },
  {
    title: "Municipalities & Law Enforcement",
    desc: "Assess citizen reports, prioritise response, maintain records. Real-time OSINT monitoring of localised social media ecosystems. Generate structured dossiers for prosecution.",
  },
  {
    title: "Media & Watchdog Organisations",
    desc: "Research and verify claims with OSINT backing. Produce evidence-based reports. Track patterns across individuals and organisations.",
  },
];

const features = [
  { title: "Shared Workspace", desc: "Team collaboration with role-based access (admin/member)." },
  { title: "Full Audit Trail", desc: "Every action logged. Complete accountability for institutional reporting." },
  { title: "Custom AI Voice", desc: "Adjust tone and formality of AI-generated content per organisation." },
  { title: "Credit-Based System", desc: "Transparent usage tracking. Scale as your needs grow." },
  { title: "Data Isolation", desc: "GDPR-conscious. Complete data separation between organisations." },
  { title: "Multilingual", desc: "Full support for English and Dutch. Additional languages planned." },
];

const ecosystemCentralInstitutional = [
  { name: "ENMA", desc: "Internationally comparable incident data across Europe" },
  { name: "EU FRA", desc: "Definitive antisemitism surveys and rights monitoring" },
  { name: "European Commission", desc: "EU Strategy coordinator (Katharina von Schnurbein)" },
  { name: "OSCE ODIHR", desc: "Comprehensive hate crime database for 57 states" },
];

const ecosystemTechnicalAI = [
  { name: "TEV (Hungary)", desc: "AI-based web scraping across France, Germany, Sweden" },
  { name: "Decoding Antisemitism", desc: "AI research on implicit antisemitism across platforms" },
  { name: "FOA", desc: "Proprietary AI detecting thousands of instances in real-time" },
  { name: "INACH", desc: "Global network for systematic cyber-hate reporting" },
];

const ecosystemNationalDocumentation = [
  { name: "RIAS (Germany)", desc: "Standardized IHRA-aligned nationwide database" },
  { name: "CST (UK)", desc: "Global leader in incident documentation" },
  { name: "CIDI (Netherlands)", desc: "Central Dutch documentation body" },
  { name: "CDEC (Italy)", desc: "Primary Italian antisemitism observatory" },
  { name: "IKG Wien (Austria)", desc: "Institutional reporting with annual reports" },
  { name: "AKVAH (Denmark)", desc: "Systematic incident mapping" },
];

const ecosystemPolicyLegal = [
  { name: "CEJI (Belgium)", desc: "NOA project, National Report Cards" },
  { name: "Antisemitism Policy Trust (UK)", desc: "Research for parliamentarians" },
  { name: "CRIF (France)", desc: "Representative body for French Jews" },
  { name: "World Jewish Congress", desc: "Global institutional coordination" },
  { name: "NEVER AGAIN (Poland)", desc: "Eastern European extremism watchdog" },
];

const dataSecurity = [
  { title: "End-to-End Security", desc: "Session-only data handling. No persistent tracking." },
  { title: "GDPR Alignment", desc: "EU-minded data practices. Privacy by design." },
  { title: "Organisation Isolation", desc: "Complete data separation. No cross-visibility." },
  { title: "Audit Logging", desc: "Full trail of all actions for compliance." },
];

function EcosystemGrid({ label, items }: { label: string; items: { name: string; desc: string }[] }) {
  return (
    <div style={{ marginBottom: "48px" }}>
      <p className="section-label" style={{ marginBottom: "16px" }}>{label}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <div key={i} className="glass-card p-6">
            <h4 className="text-[16px] font-bold text-white mb-2">{item.name}</h4>
            <p className="text-[14px] text-[rgba(255,255,255,0.65)] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function OrganizationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div>
      <PageHeader
        label="ORGANIZATIONS"
        title="For Organisations"
        subtitle="HateCheck provides structured intelligence infrastructure for institutions combating antisemitism across Europe."
      />

      {/* Why Organizations */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="section-label" style={{ marginBottom: "16px" }}>THE CHALLENGE</p>
          <h2 className="text-[36px] font-bold text-white mb-10">
            Why Organisations Need HateCheck
          </h2>
          <div className="max-w-3xl space-y-5">
            <p className="text-[15px] text-[rgba(255,255,255,0.65)] leading-relaxed">
              Institutions across Europe face an unprecedented surge in antisemitic incidents. University administrators, municipal authorities, and NGOs are overwhelmed by the volume and complexity of reports. Manual tracking cannot process the current threat matrix. HateCheck provides the structured intelligence infrastructure to close this gap.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="section-label" style={{ marginBottom: "16px" }}>USE CASES</p>
          <h2 className="text-[36px] font-bold text-white mb-16">
            Who Uses HateCheck
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="glass-card p-8">
                <h3 className="text-[20px] font-bold text-white mb-3">
                  {uc.title}
                </h3>
                <p className="text-[15px] text-[rgba(255,255,255,0.65)] leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="section-label" style={{ marginBottom: "16px" }}>FEATURES</p>
          <h2 className="text-[36px] font-bold text-white mb-16">
            Organisation Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="glass-card p-8">
                <h3 className="text-[18px] font-bold text-white mb-3">
                  {f.title}
                </h3>
                <p className="text-[15px] text-[rgba(255,255,255,0.65)] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The European Ecosystem */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="section-label" style={{ marginBottom: "16px" }}>ECOSYSTEM</p>
          <h2 className="text-[36px] font-bold text-white mb-4">
            Part of a European Network
          </h2>
          <p className="text-[17px] text-[rgba(255,255,255,0.65)] leading-relaxed mb-16 max-w-3xl">
            HateCheck operates within the established network of European antisemitism monitoring bodies.
          </p>

          <EcosystemGrid label="CENTRAL INSTITUTIONAL" items={ecosystemCentralInstitutional} />
          <EcosystemGrid label="TECHNICAL & AI MONITORING" items={ecosystemTechnicalAI} />
          <EcosystemGrid label="NATIONAL DOCUMENTATION" items={ecosystemNationalDocumentation} />
          <EcosystemGrid label="POLICY & LEGAL" items={ecosystemPolicyLegal} />
        </div>
      </section>

      {/* Data & Security */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="section-label" style={{ marginBottom: "16px" }}>SECURITY</p>
          <h2 className="text-[36px] font-bold text-white mb-10">
            Data &amp; Security
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {dataSecurity.map((item, i) => (
              <div key={i} className="glass-card p-8">
                <h3 className="text-[18px] font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-[15px] text-[rgba(255,255,255,0.65)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-[36px] font-bold text-white mb-10">
            Bring HateCheck to Your Organisation
          </h2>
          <Link
            href={`/${locale}/contact`}
            className="btn-primary"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
