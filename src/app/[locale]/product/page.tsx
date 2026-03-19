import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/sections/Hero";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Platform — The HateCheck Investigation Workflow",
    description:
      "A structured 5-step intelligence workflow: source intake, verification, protocol analysis, tier classification, and enforcement action.",
  };
}

const screenshotSteps = [
  {
    number: "01",
    label: "SOURCE",
    title: "Paste Any URL",
    description:
      "Submit a link to any online content — a tweet, article, social post, or statement. HateCheck scans, verifies, and cross-references it against Dutch and European sources in seconds.",
    image: "/images/screenshot6.png",
    alt: "Step 1: URL intake screen — investigation start",
    caption: "Real-time OSINT scanning: domain verification, source corroboration, entity extraction, and legal protocol loading.",
  },
  {
    number: "02",
    label: "VERIFY",
    title: "Review & Lock Intelligence",
    description:
      "Multiple sources are corroborated automatically. Review the extracted intelligence, refine the analytical scope, then lock in the analysis with a deliberate human checkpoint.",
    image: "/images/screenshot4.png",
    alt: "Step 2: Verify screen — intercepted sources and extracted intelligence",
    caption: "Human-in-the-loop checkpoint: inspect all corroborated sources and extracted evidence before proceeding.",
  },
  {
    number: "03",
    label: "PROTOCOL",
    title: "Four Standards Applied",
    description:
      "The content passes sequentially through IHRA, Nexus Document, Jerusalem Declaration, and Dutch Penal Code — each adding precision to the analysis.",
    image: "/images/protocol.png",
    alt: "Step 3: Protocol analysis — IHRA, Nexus, JDA, Dutch Penal Code applied to incident",
    caption: "Sequential cascade: IHRA anchors, Nexus checks Israel/Zionism, JDA refines grey zones, Dutch law maps criminal thresholds.",
  },
  {
    number: "04",
    label: "CLASSIFY",
    title: "Forensic Classification Report",
    description:
      "A complete forensic report: tier assignment, confidence score with reasoning, evidence-to-standard mapping, and executive summary — ready for institutional use.",
    image: "/images/assessment.png",
    alt: "Step 4: Classification report — Tier 3, 75% confidence with forensic analysis",
    caption: "Every classification backed by three complementary frameworks plus Dutch criminal law.",
  },
  {
    number: "05",
    label: "ACT",
    title: "Prioritised Action Engine",
    description:
      "Structured next steps generated from the tier classification. One-click letter drafting for every relevant authority — police, CIDI, municipality, legal counsel.",
    image: "/images/action.png",
    alt: "Step 5: Action engine — Report to Local Authorities with Draft Letter",
    caption: "AI drafts, humans decide. Every action letter is editable before sending and archived automatically.",
  },
];

const moduleFeatures = [
  {
    title: "Deep Research Module",
    description:
      "OSINT-grade investigation tool. Enter a topic, review the AI-generated search prompt (full transparency), and receive structured findings from Police/OM, CIDI, major outlets, and municipal records.",
  },
  {
    title: "Investigations Dashboard",
    description:
      "Persistent, searchable record of all cases. Full-text search, tier filters, status filters (open / in progress / closed / archived). Every investigation links to its complete evidence record.",
  },
  {
    title: "Severity Barometer",
    description:
      "Real-time visual distribution of incidents across tiers. Weekly digest reports. Trend data for institutional reporting to boards, funders, and government stakeholders.",
  },
  {
    title: "Correspondence Archive",
    description:
      "All generated letters — Dutch and English — stored with draft/sent/archived status. Full editing capability. Formatted for police submission, CIDI notification, and municipal correspondence.",
  },
  {
    title: "Organisation Workspaces",
    description:
      "Shared workspace with role-based access (admin/member). Full audit trail of every action. Custom AI tone/voice per organisation. GDPR-conscious data isolation between organisations.",
  },
  {
    title: "Profiles & Pattern Tracking",
    description:
      "Track individuals and organisations of interest with assigned risk levels. Link multiple incidents to a single profile — critical for identifying repeat offenders and systemic patterns.",
  },
];

const principles = [
  { label: "Human control at every step", detail: "AI drafts and suggests. Humans review, decide, and act. Nothing is sent automatically." },
  { label: "Full transparency", detail: "Users see the exact AI prompts used in Deep Research. Every classification includes full reasoning." },
  { label: "Legal precision", detail: "The platform says \"potentially criminal\" — never \"this is a crime\". A reference tool, not a prosecutor." },
  { label: "Defensibility", detail: "Three complementary frameworks plus Dutch law. Layered approach reduces false positives." },
  { label: "Privacy by design", detail: "No user tracking or analytics. Session-only data. Optional PII redaction. Data isolation between organisations." },
  { label: "Proportionate response", detail: "The tier system ensures response matches severity. The right channel for the right situation." },
];

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div>
      <PageHeader
        label="PLATFORM"
        title="The Investigation Workflow"
        subtitle="HateCheck compresses the full chain from &ldquo;that feels wrong&rdquo; to &ldquo;something is being done about it&rdquo; into a single guided workflow — backed by AI, grounded in recognised international standards, and calibrated to Dutch legal thresholds."
      />

      {/* 5-Step Pipeline with Real Screenshots */}
      <section style={{ padding: "100px 0", backgroundColor: "#F8F9FA" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px" }}>

          {/* Section header */}
          <div style={{ marginBottom: "64px", paddingBottom: "32px", borderBottom: "1px solid #E5E7EB" }}>
            <p className="section-label" style={{ marginBottom: "16px" }}>5-STEP INVESTIGATION PIPELINE</p>
            <h2 style={{ fontSize: "36px", fontWeight: 400, color: "#1B1A2B" }}>
              From Source to Action
            </h2>
          </div>

          {/* Steps with screenshots */}
          {screenshotSteps.map((step, index) => (
            <div
              key={step.number}
              style={{
                display: "grid",
                gridTemplateColumns: index % 2 !== 0 ? "1fr 1fr" : "1fr 1fr",
                gap: "48px",
                alignItems: "center",
                paddingTop: "48px",
                paddingBottom: "48px",
                borderBottom: index < screenshotSteps.length - 1 ? "1px solid #E5E7EB" : "none",
              }}
            >
              {/* Text side */}
              <div className="glass-card" style={{ padding: "40px", order: index % 2 !== 0 ? 2 : 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
                  <span style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "#2563EB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "18px",
                  }}>
                    {step.number}
                  </span>
                  <p className="section-label">{step.label}</p>
                </div>
                <h3 style={{ fontSize: "28px", fontWeight: 400, color: "#1B1A2B", marginBottom: "16px" }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.7, marginBottom: "24px" }}>{step.description}</p>
                <p style={{ fontSize: "13px", color: "#9CA3AF", lineHeight: 1.7 }}>
                  {step.caption}
                </p>
              </div>

              {/* Screenshot side */}
              <div style={{ order: index % 2 !== 0 ? 1 : 2 }}>
                <div style={{ border: "1px solid #E5E7EB", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
                  <Image
                    src={step.image}
                    alt={step.alt}
                    width={1080}
                    height={720}
                    className="w-full h-auto block"
                    quality={90}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Intelligence Gathering screenshot */}
      <section style={{ padding: "100px 0" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ marginBottom: "48px" }}>
            <p className="section-label" style={{ marginBottom: "16px" }}>INTELLIGENCE GATHERING</p>
            <h2 style={{ fontSize: "36px", fontWeight: 400, color: "#1B1A2B", marginBottom: "16px" }}>
              Real-Time OSINT Scanning
            </h2>
            <p style={{ fontSize: "15px", color: "#6B7280", maxWidth: "640px", lineHeight: 1.7 }}>
              When a URL is submitted, a terminal-style panel shows live scanning activity — domain
              authority verification, entity extraction, Dutch source cross-referencing, and legal
              protocol loading.
            </p>
          </div>
          <div style={{ maxWidth: "768px", border: "1px solid #E5E7EB", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
            <Image
              src="/images/screenshot5.png"
              alt="Real-time OSINT scanning panel — terminal-style activity display"
              width={1200}
              height={800}
              className="w-full h-auto block"
              quality={90}
            />
          </div>
          <p style={{ fontSize: "13px", color: "#9CA3AF", marginTop: "16px", maxWidth: "560px" }}>
            The scanning interface signals both Dutch Legal Standards compliance and AI model sophistication.
          </p>
        </div>
      </section>

      {/* Design Principles */}
      <section style={{ padding: "100px 0", backgroundColor: "#F8F9FA" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ marginBottom: "64px" }}>
            <p className="section-label" style={{ marginBottom: "16px" }}>DESIGN PRINCIPLES</p>
            <h2 style={{ fontSize: "36px", fontWeight: 400, color: "#1B1A2B" }}>
              What Sets HateCheck Apart
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
            {principles.map((p, i) => (
              <div key={i} className="glass-card" style={{ padding: "32px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: 400, color: "#1B1A2B", marginBottom: "8px" }}>
                  {p.label}
                </h3>
                <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.7 }}>{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Modules */}
      <section style={{ padding: "100px 0" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ marginBottom: "64px" }}>
            <p className="section-label" style={{ marginBottom: "16px" }}>PLATFORM MODULES</p>
            <h2 style={{ fontSize: "36px", fontWeight: 400, color: "#1B1A2B", marginBottom: "16px" }}>
              Beyond Classification
            </h2>
            <p style={{ fontSize: "15px", color: "#6B7280", maxWidth: "640px", lineHeight: 1.7 }}>
              HateCheck is a complete intelligence platform — not just a classifier.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {moduleFeatures.map((f, i) => (
              <div key={i} className="glass-card" style={{ padding: "32px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: 400, color: "#1B1A2B", marginBottom: "8px" }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.7 }}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <div style={{ padding: "32px 0", borderTop: "1px solid #E5E7EB" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px" }}>
          <p style={{ fontSize: "13px", color: "#9CA3AF", lineHeight: 1.7, maxWidth: "768px" }}>
            <strong style={{ color: "#6B7280", fontWeight: 500 }}>Disclaimer:</strong> HateCheck provides general information
            and is not a substitute for legal advice. Classification results reflect AI analysis against
            published standards and should be reviewed by qualified professionals before any legal action.
          </p>
        </div>
      </div>

      {/* CTA */}
      <section style={{ padding: "100px 0", backgroundColor: "#F8F9FA" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <p className="section-label" style={{ marginBottom: "16px" }}>NEXT STEPS</p>
          <h2 style={{ fontSize: "36px", fontWeight: 400, color: "#1B1A2B", marginBottom: "16px" }}>
            Request a Demonstration
          </h2>
          <p style={{ fontSize: "15px", color: "#6B7280", marginBottom: "40px", maxWidth: "560px", margin: "0 auto 40px", lineHeight: 1.7 }}>
            Contact us to discuss how HateCheck can serve your organisation — or access the live platform directly.
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <Link href={`/${locale}/contact`} className="btn-main">
              Get in touch
            </Link>
            <Link href={`/${locale}/organizations`} className="btn-outline">
              For organisations
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
