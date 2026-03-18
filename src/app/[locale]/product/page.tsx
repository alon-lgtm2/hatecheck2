import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Database, Shield, AlertTriangle, BarChart3,
  FileText, Search, CheckCircle
} from "lucide-react";

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
    caption: "Sequential cascade: IHRA anchors → Nexus checks Israel/Zionism → JDA refines grey zones → Dutch law maps criminal thresholds.",
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
    icon: Search,
    title: "Deep Research Module",
    description:
      "OSINT-grade investigation tool. Enter a topic, review the AI-generated search prompt (full transparency), and receive structured findings from Police/OM, CIDI, major outlets, and municipal records.",
  },
  {
    icon: Database,
    title: "Investigations Dashboard",
    description:
      "Persistent, searchable record of all cases. Full-text search, tier filters, status filters (open / in progress / closed / archived). Every investigation links to its complete evidence record.",
  },
  {
    icon: BarChart3,
    title: "Severity Barometer",
    description:
      "Real-time visual distribution of incidents across tiers. Weekly digest reports. Trend data for institutional reporting to boards, funders, and government stakeholders.",
  },
  {
    icon: FileText,
    title: "Correspondence Archive",
    description:
      "All generated letters — Dutch and English — stored with draft/sent/archived status. Full editing capability. Formatted for police submission, CIDI notification, and municipal correspondence.",
  },
  {
    icon: Shield,
    title: "Organisation Workspaces",
    description:
      "Shared workspace with role-based access (admin/member). Full audit trail of every action. Custom AI tone/voice per organisation. GDPR-conscious data isolation between organisations.",
  },
  {
    icon: AlertTriangle,
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
    <div className="pt-[88px]">

      {/* Page Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#DDE4EE] bg-[#F8FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="w-10 h-[2px] bg-[#1A52C8] mb-4" />
            <p className="gov-label mb-3">PLATFORM</p>
            <h1
              className="text-5xl md:text-6xl font-heading font-bold text-[#0C1B2E] mb-5"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              The Investigation Workflow
            </h1>
            <p className="text-lg text-[#2B3F57] leading-relaxed max-w-2xl">
              HateCheck compresses the full chain from &ldquo;that feels wrong&rdquo; to &ldquo;something is
              being done about it&rdquo; into a single guided workflow — backed by AI, grounded in recognised
              international standards, and calibrated to Dutch legal thresholds.
            </p>
          </div>
        </div>
      </section>

      {/* 5-Step Pipeline with Real Screenshots */}
      <section className="bg-white border-b border-[#DDE4EE]">
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <div className="px-4 sm:px-6 lg:px-8 pt-14 pb-10 border-b border-[#DDE4EE]">
            <p className="gov-label mb-3">5-STEP INVESTIGATION PIPELINE</p>
            <h2
              className="text-3xl md:text-4xl font-heading font-bold text-[#0C1B2E]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              From Source to Action
            </h2>
          </div>

          {/* Step tracker bar */}
          <div className="hidden md:flex border-b border-[#DDE4EE]">
            {screenshotSteps.map((step, i) => (
              <div
                key={step.number}
                className={`flex-1 px-5 py-3 flex items-center gap-2.5 bg-[#F8FAFB] ${i < screenshotSteps.length - 1 ? "border-r border-[#DDE4EE]" : ""}`}
              >
                <span
                  className="text-[11px] font-mono text-[#1A52C8] font-medium"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {step.number}
                </span>
                <span
                  className="text-[10px] text-[#4D6680] tracking-widest"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.14em" }}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>

          {/* Steps with screenshots */}
          {screenshotSteps.map((step, index) => (
            <div
              key={step.number}
              className="grid grid-cols-1 lg:grid-cols-2 border-b border-[#DDE4EE]"
            >
              {/* Text side */}
              <div
                className={`p-10 lg:p-14 flex flex-col justify-center bg-white ${
                  index % 2 !== 0 ? "lg:order-2" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="text-[11px] font-mono font-medium text-white bg-[#1A52C8] px-2 py-0.5 rounded-sm"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {step.number}
                  </span>
                  <span className="gov-label">{step.label}</span>
                </div>
                <h3
                  className="text-3xl md:text-4xl font-heading font-bold text-[#0C1B2E] mb-4"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-[#2B3F57] leading-relaxed mb-6">{step.description}</p>
                <p
                  className="text-xs text-[#8099B3] border-l-2 border-[#C6D2E0] pl-3 leading-relaxed"
                  style={{ fontFamily: "'Barlow', sans-serif" }}
                >
                  {step.caption}
                </p>
              </div>

              {/* Screenshot side */}
              <div
                className={`bg-[#EFF3F8] flex items-center justify-center p-8 min-h-[320px] ${
                  index % 2 !== 0
                    ? "lg:order-1 border-r border-[#DDE4EE]"
                    : "border-l border-[#DDE4EE]"
                }`}
              >
                <div className="relative w-full max-w-[520px] rounded-sm overflow-hidden shadow-gov-lg border border-[#C6D2E0]">
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

      {/* Processing screenshot (overview) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#EFF3F8] border-b border-[#DDE4EE]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="gov-label mb-3">INTELLIGENCE GATHERING</p>
            <h2
              className="text-3xl font-heading font-bold text-[#0C1B2E] mb-3"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Real-Time OSINT Scanning
            </h2>
            <p className="text-[#2B3F57] max-w-2xl">
              When a URL is submitted, a terminal-style panel shows live scanning activity — domain
              authority verification, entity extraction, Dutch source cross-referencing, and legal
              protocol loading.
            </p>
          </div>
          <div className="rounded-sm overflow-hidden shadow-gov-lg border border-[#C6D2E0] max-w-3xl">
            <Image
              src="/images/screenshot5.png"
              alt="Real-time OSINT scanning panel — terminal-style activity display"
              width={1200}
              height={800}
              className="w-full h-auto block"
              quality={90}
            />
          </div>
          <p className="text-xs text-[#8099B3] mt-3 max-w-xl">
            The scanning interface signals both Dutch Legal Standards compliance and AI model sophistication.
          </p>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#DDE4EE]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="gov-label mb-3">DESIGN PRINCIPLES</p>
            <h2
              className="text-3xl font-heading font-bold text-[#0C1B2E] mb-3"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              What Sets HateCheck Apart
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#DDE4EE] border border-[#DDE4EE] rounded-sm overflow-hidden">
            {principles.map((p, i) => (
              <div key={i} className="bg-white p-7">
                <div className="flex items-start gap-3">
                  <CheckCircle size={15} className="text-[#1A52C8] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3
                      className="text-base font-heading font-bold text-[#0C1B2E] mb-1.5"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {p.label}
                    </h3>
                    <p className="text-sm text-[#4D6680] leading-relaxed">{p.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Modules */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#EFF3F8] border-b border-[#DDE4EE]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="gov-label mb-3">PLATFORM MODULES</p>
            <h2
              className="text-3xl font-heading font-bold text-[#0C1B2E] mb-3"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Beyond Classification
            </h2>
            <p className="text-[#2B3F57] max-w-2xl">
              HateCheck is a complete intelligence platform — not just a classifier.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#DDE4EE] border border-[#DDE4EE] rounded-sm overflow-hidden">
            {moduleFeatures.map((f, i) => (
              <div key={i} className="bg-white p-7 hover:bg-[#F8FAFB] transition-colors group">
                <div className="w-8 h-8 flex items-center justify-center mb-4 border border-[#C6D2E0] rounded-sm bg-[#EFF3F8] group-hover:border-[#1A52C8] transition-colors">
                  <f.icon size={15} className="text-[#1A52C8]" />
                </div>
                <h3
                  className="text-base font-heading font-bold text-[#0C1B2E] mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {f.title}
                </h3>
                <p className="text-sm text-[#4D6680] leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <div className="px-4 sm:px-6 lg:px-8 py-5 bg-[#F8FAFB] border-b border-[#DDE4EE]">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs text-[#8099B3] leading-relaxed max-w-3xl">
            <strong className="text-[#4D6680]">Disclaimer:</strong> HateCheck provides general information
            and is not a substitute for legal advice. Classification results reflect AI analysis against
            published standards and should be reviewed by qualified professionals before any legal action.
          </p>
        </div>
      </div>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="border border-[#C6D2E0] rounded-sm p-10 md:p-14 bg-[#F8FAFB] shadow-gov">
            <p className="gov-label mb-4">NEXT STEPS</p>
            <h2
              className="text-3xl md:text-4xl font-heading font-bold text-[#0C1B2E] mb-4"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Request a Demonstration
            </h2>
            <p className="text-[#2B3F57] mb-8 max-w-xl leading-relaxed">
              Contact us to discuss how HateCheck can serve your organisation — or access the live platform directly.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/${locale}/contact`}
                className="px-7 py-3 bg-[#1A52C8] hover:bg-[#1440A3] text-white font-heading tracking-widest text-xs transition-all rounded-sm shadow-gov"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.12em" }}
              >
                REQUEST DEMO
              </Link>
              <Link
                href={`/${locale}/standards`}
                className="px-7 py-3 text-[#0C1B2E] bg-white border border-[#C6D2E0] hover:border-[#1A52C8] font-heading tracking-widest text-xs transition-all rounded-sm shadow-gov"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.12em" }}
              >
                VIEW STANDARDS
              </Link>
              <a
                href="https://hate-check-03870d15.base44.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 text-[#1A52C8] border border-[#1A52C8]/40 hover:border-[#1A52C8] hover:bg-[#EFF3F8] font-heading tracking-widest text-xs transition-all rounded-sm"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.12em" }}
              >
                OPEN LIVE PLATFORM ↗
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
