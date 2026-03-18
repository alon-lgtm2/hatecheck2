import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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
    image: "/images/screenshot3.png",
    alt: "Step 3: Protocol analysis — IHRA, Nexus, JDA, Dutch Penal Code",
    caption: "Sequential cascade: IHRA anchors, Nexus checks Israel/Zionism, JDA refines grey zones, Dutch law maps criminal thresholds.",
  },
  {
    number: "04",
    label: "CLASSIFY",
    title: "Forensic Classification Report",
    description:
      "A complete forensic report: tier assignment, confidence score with reasoning, evidence-to-standard mapping, and executive summary — ready for institutional use.",
    image: "/images/screenshot2.png",
    alt: "Step 4: Classification report — Tier 4, 95% confidence",
    caption: "Every classification backed by three complementary frameworks plus Dutch criminal law.",
  },
  {
    number: "05",
    label: "ACT",
    title: "Prioritised Action Engine",
    description:
      "Structured next steps generated from the tier classification. One-click letter drafting for every relevant authority — police, CIDI, municipality, legal counsel.",
    image: "/images/screenshot1.png",
    alt: "Step 5: Action engine — prioritised cards with Draft Letter",
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
    <div className="pt-[73px]">

      {/* Page Header */}
      <section className="py-[120px] px-16 border-b border-[#E5E7EB] bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl">
            <p className="swiss-label mb-4">PLATFORM</p>
            <h1
              className="font-bold text-[#0A1628] mb-6"
              style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.1 }}
            >
              The Investigation Workflow
            </h1>
            <p className="text-[17px] text-[#374151] leading-relaxed max-w-2xl">
              HateCheck compresses the full chain from &ldquo;that feels wrong&rdquo; to &ldquo;something is
              being done about it&rdquo; into a single guided workflow — backed by AI, grounded in recognised
              international standards, and calibrated to Dutch legal thresholds.
            </p>
          </div>
        </div>
      </section>

      {/* 5-Step Pipeline with Real Screenshots */}
      <section className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-[1400px] mx-auto">

          {/* Section header */}
          <div className="px-16 pt-[120px] pb-16 border-b border-[#E5E7EB]">
            <p className="swiss-label mb-4">5-STEP INVESTIGATION PIPELINE</p>
            <h2 className="text-[36px] font-bold text-[#0A1628]">
              From Source to Action
            </h2>
          </div>

          {/* Steps with screenshots */}
          {screenshotSteps.map((step, index) => (
            <div
              key={step.number}
              className="grid grid-cols-1 lg:grid-cols-[120px_1fr_1fr] border-b border-[#E5E7EB]"
            >
              {/* Number column */}
              <div className="hidden lg:flex items-start justify-center pt-16 border-r border-[#E5E7EB]">
                <span className="text-[48px] font-bold text-[#0A1628]">
                  {step.number}
                </span>
              </div>

              {/* Text side */}
              <div
                className={`p-16 flex flex-col justify-center bg-white ${
                  index % 2 !== 0 ? "lg:order-3" : "lg:order-2"
                }`}
              >
                <p className="swiss-label mb-3">{step.label}</p>
                <h3 className="text-[28px] font-bold text-[#0A1628] mb-4">
                  {step.title}
                </h3>
                <p className="text-[15px] text-[#374151] leading-relaxed mb-6">{step.description}</p>
                <p className="text-[13px] text-[#9CA3AF] leading-relaxed">
                  {step.caption}
                </p>
              </div>

              {/* Screenshot side */}
              <div
                className={`flex items-center justify-center p-12 bg-white border-l border-[#E5E7EB] ${
                  index % 2 !== 0 ? "lg:order-2" : "lg:order-3"
                }`}
              >
                <div className="relative w-full max-w-[520px] border border-[#E5E7EB]">
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
      <section className="py-[120px] px-16 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <p className="swiss-label mb-4">INTELLIGENCE GATHERING</p>
            <h2 className="text-[36px] font-bold text-[#0A1628] mb-4">
              Real-Time OSINT Scanning
            </h2>
            <p className="text-[15px] text-[#374151] max-w-2xl leading-relaxed">
              When a URL is submitted, a terminal-style panel shows live scanning activity — domain
              authority verification, entity extraction, Dutch source cross-referencing, and legal
              protocol loading.
            </p>
          </div>
          <div className="border border-[#E5E7EB] max-w-3xl">
            <Image
              src="/images/screenshot5.png"
              alt="Real-time OSINT scanning panel — terminal-style activity display"
              width={1200}
              height={800}
              className="w-full h-auto block"
              quality={90}
            />
          </div>
          <p className="text-[13px] text-[#9CA3AF] mt-4 max-w-xl">
            The scanning interface signals both Dutch Legal Standards compliance and AI model sophistication.
          </p>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-[120px] px-16 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <p className="swiss-label mb-4">DESIGN PRINCIPLES</p>
            <h2 className="text-[36px] font-bold text-[#0A1628]">
              What Sets HateCheck Apart
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12">
            {principles.map((p, i) => (
              <div key={i} className="border-b border-[#E5E7EB] pb-8">
                <h3 className="text-[18px] font-bold text-[#0A1628] mb-2">
                  {p.label}
                </h3>
                <p className="text-[15px] text-[#374151] leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Modules */}
      <section className="py-[120px] px-16 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <p className="swiss-label mb-4">PLATFORM MODULES</p>
            <h2 className="text-[36px] font-bold text-[#0A1628] mb-4">
              Beyond Classification
            </h2>
            <p className="text-[15px] text-[#374151] max-w-2xl leading-relaxed">
              HateCheck is a complete intelligence platform — not just a classifier.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">
            {moduleFeatures.map((f, i) => (
              <div key={i} className="border-b border-[#E5E7EB] pb-8">
                <h3 className="text-[18px] font-bold text-[#0A1628] mb-2">
                  {f.title}
                </h3>
                <p className="text-[15px] text-[#374151] leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <div className="px-16 py-8 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[13px] text-[#9CA3AF] leading-relaxed max-w-3xl">
            <strong className="text-[#374151] font-medium">Disclaimer:</strong> HateCheck provides general information
            and is not a substitute for legal advice. Classification results reflect AI analysis against
            published standards and should be reviewed by qualified professionals before any legal action.
          </p>
        </div>
      </div>

      {/* CTA */}
      <section className="py-[120px] px-16 bg-white">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="swiss-label mb-4">NEXT STEPS</p>
          <h2 className="text-[36px] font-bold text-[#0A1628] mb-4">
            Request a Demonstration
          </h2>
          <p className="text-[15px] text-[#374151] mb-10 max-w-xl mx-auto leading-relaxed">
            Contact us to discuss how HateCheck can serve your organisation — or access the live platform directly.
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
