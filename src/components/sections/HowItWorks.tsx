import { useTranslations } from "next-intl";
import { Search, Brain, Scale, Tags, Zap } from "lucide-react";

const steps = [
  { number: "01", icon: Search, title: "Content Ingestion", desc: "URL, text, image, or live feed" },
  { number: "02", icon: Brain, title: "AI Multi-Model Analysis", desc: "Semantic, contextual, visual" },
  { number: "03", icon: Scale, title: "Legal Framework Mapping", desc: "IHRA, JDA, Nexus, Dutch law" },
  { number: "04", icon: Tags, title: "Tier Classification", desc: "5-tier severity assignment" },
  { number: "05", icon: Zap, title: "Action Engine", desc: "Reports, referrals, documentation" },
];

export default function HowItWorks() {
  const t = useTranslations("home.howItWorks");

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#DDE4EE] bg-[#EFF3F8]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="gov-label mb-3">METHODOLOGY</p>
          <h2
            className="text-4xl md:text-5xl font-heading font-bold text-[#0C1B2E] mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {t("title")}
          </h2>
          <p className="text-[#2B3F57] max-w-2xl text-lg leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div
            className="absolute top-5 left-0 right-0 h-px hidden md:block pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent 3%, rgba(26,82,200,0.2) 20%, rgba(26,82,200,0.2) 80%, transparent 97%)",
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center group">
                {/* Number bubble */}
                <div
                  className="relative w-10 h-10 rounded-sm flex items-center justify-center z-10 mb-5 font-mono text-sm font-medium border transition-all group-hover:border-[#1A52C8] group-hover:bg-[#1A52C8]/10"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#C6D2E0",
                    color: "#1A52C8",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.75rem",
                  }}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  className="w-9 h-9 rounded-sm flex items-center justify-center mb-3 transition-all group-hover:bg-[#1A52C8]/10"
                  style={{ backgroundColor: "rgba(26, 82, 200, 0.05)", border: "1px solid rgba(26, 82, 200, 0.15)" }}
                >
                  <step.icon size={16} className="text-[#1A52C8]" />
                </div>

                <h3
                  className="font-heading font-semibold text-[#0C1B2E] mb-1.5 leading-tight"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem" }}
                >
                  {step.title}
                </h3>
                <p className="text-xs text-[#8099B3]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
