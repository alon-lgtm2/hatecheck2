"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "97.3%", label: "stat1Label" },
  { value: "84,000+", label: "stat2Label" },
  { value: "12", label: "stat3Label" },
  { value: "27", label: "stat4Label" },
];

export default function Hero() {
  const t = useTranslations("home.hero");
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden bg-[#F8FAFB]">
      {/* Very subtle grid — barely visible */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#DDE4EE 1px, transparent 1px), linear-gradient(90deg, #DDE4EE 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          opacity: 0.35,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20">
        <div className="max-w-5xl">

          {/* Classification badge — government-style */}
          <div className="inline-flex items-center gap-3 mb-10 animate-fade-in">
            <div className="flex items-center gap-2 px-3 py-1.5 border border-[#C6D2E0] bg-white rounded-sm shadow-gov">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A52C8] inline-block" />
              <span
                className="text-[10px] text-[#4D6680] tracking-widest"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.18em" }}
              >
                {t("badge").toUpperCase()}
              </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 border border-[#C6D2E0] bg-white rounded-sm shadow-gov">
              <span
                className="text-[10px] text-[#4D6680] tracking-widest"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.18em" }}
              >
                🇳🇱 NETHERLANDS · EUROPE
              </span>
            </div>
          </div>

          {/* Main heading */}
          <h1
            className="font-heading font-bold text-[#0C1B2E] mb-6 animate-fade-in-up"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(3rem, 7.5vw, 6.5rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.015em",
            }}
          >
            Detect.{" "}
            <span style={{ color: "#1A52C8" }}>Classify.</span>{" "}
            Act.
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg text-[#2B3F57] max-w-2xl mb-3 leading-relaxed animate-fade-in-up animate-delay-200"
            style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 400 }}
          >
            {t("subtitle")}
          </p>

          {/* Legal disclaimer inline */}
          <p
            className="text-xs text-[#8099B3] max-w-2xl mb-10 animate-fade-in-up animate-delay-200"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            General information only — not a substitute for legal advice.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 animate-fade-in-up animate-delay-300">
            <Link
              href={`/${locale}/product`}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-[#1A52C8] hover:bg-[#1440A3] text-white font-heading tracking-widest text-xs transition-all shadow-gov rounded-sm"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.12em" }}
            >
              {t("cta1").toUpperCase()}
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-6 py-3 text-[#0C1B2E] bg-white border border-[#C6D2E0] hover:border-[#1A52C8] hover:bg-[#EFF3F8] font-heading tracking-widest text-xs transition-all rounded-sm shadow-gov"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.12em" }}
            >
              {t("cta2").toUpperCase()}
            </Link>
            <a
              href="https://hate-check-03870d15.base44.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-[#1A52C8] bg-transparent border border-[#1A52C8]/40 hover:border-[#1A52C8] hover:bg-[#EFF3F8] font-heading tracking-widest text-xs transition-all rounded-sm"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.12em" }}
            >
              OPEN LIVE PLATFORM ↗
            </a>
          </div>
        </div>

        {/* Stats bar — document-style */}
        <div className="mt-16 animate-fade-in-up animate-delay-500">
          <div className="inline-grid grid-cols-2 sm:grid-cols-4 border border-[#C6D2E0] rounded-sm overflow-hidden shadow-gov bg-white">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`px-6 py-4 flex flex-col ${
                  i < stats.length - 1 ? "border-r border-[#DDE4EE]" : ""
                } ${i >= 2 ? "border-t border-[#DDE4EE] sm:border-t-0" : ""}`}
              >
                <span
                  className="text-xl font-mono font-medium text-[#0C1B2E]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-[10px] text-[#8099B3] mt-1 tracking-widest"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.12em" }}
                >
                  {t(stat.label as keyof ReturnType<typeof useTranslations<"home.hero">>).toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="border-b border-[#DDE4EE]" />
    </section>
  );
}
