"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { tierConfig } from "@/lib/reports";

type TierNum = 1 | 2 | 3 | 4 | 5;

const tierKeys = [1, 2, 3, 4, 5] as TierNum[];

export default function TierOverview() {
  const t = useTranslations("home.tierOverview");
  const [activeTier, setActiveTier] = useState<TierNum | null>(null);

  const tierLabels: Record<TierNum, string> = {
    1: t("tier1Label"),
    2: t("tier2Label"),
    3: t("tier3Label"),
    4: t("tier4Label"),
    5: t("tier5Label"),
  };

  const tierDescs: Record<TierNum, string> = {
    1: t("tier1Desc"),
    2: t("tier2Desc"),
    3: t("tier3Desc"),
    4: t("tier4Desc"),
    5: t("tier5Desc"),
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#DDE4EE] bg-[#EFF3F8]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="gov-label mb-3">CLASSIFICATION SYSTEM</p>
          <h2
            className="text-4xl md:text-6xl font-heading font-bold text-[#0C1B2E] mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {t("title")}
          </h2>
          <p className="text-[#2B3F57] max-w-2xl mx-auto text-lg leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* The Signature Tier Visualization */}
        <div className="space-y-3">
          {/* Spectrum Bar */}
          <div className="flex gap-1.5 h-16 md:h-20">
            {tierKeys.map((tier) => {
              const config = tierConfig[tier];
              const isActive = activeTier === tier;
              const isOther = activeTier !== null && !isActive;

              return (
                <button
                  key={tier}
                  className="flex-1 rounded-sm relative overflow-hidden group transition-all duration-300 cursor-pointer"
                  style={{
                    backgroundColor: config.color,
                    opacity: isOther ? 0.3 : 1,
                    transform: isActive ? "scaleY(1.05)" : "scaleY(1)",
                    boxShadow: isActive ? `0 0 30px ${config.color}50` : "none",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  onMouseEnter={() => setActiveTier(tier)}
                  onMouseLeave={() => setActiveTier(null)}
                  aria-label={`Tier ${tier}: ${tierLabels[tier]}`}
                >
                  {/* Inner glow */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%)`,
                    }}
                  />
                  {/* Tier number */}
                  <span
                    className="absolute inset-0 flex items-center justify-center font-mono font-medium text-white/80"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "clamp(0.65rem, 1.5vw, 0.875rem)",
                    }}
                  >
                    {tier}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Labels row */}
          <div className="flex gap-1.5">
            {tierKeys.map((tier) => {
              const config = tierConfig[tier];
              const isActive = activeTier === tier;
              return (
                <div
                  key={tier}
                  className="flex-1 text-center transition-all duration-200"
                  style={{ opacity: activeTier !== null && !isActive ? 0.3 : 1 }}
                >
                  <span
                    className="text-xs font-heading font-semibold block"
                    style={{
                      color: config.textColor || config.color,
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "clamp(0.6rem, 1.2vw, 0.75rem)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {tierLabels[tier].toUpperCase()}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detail Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-px bg-[#DDE4EE] border border-[#DDE4EE] rounded-sm overflow-hidden">
          {tierKeys.map((tier) => {
            const config = tierConfig[tier];
            const isActive = activeTier === tier;

            return (
              <div
                key={tier}
                className="p-4 transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: isActive ? config.bgColor : "#FFFFFF",
                  borderColor: isActive ? config.borderColor : "#C6D2E0",
                  boxShadow: isActive ? `0 0 20px ${config.color}20` : "none",
                }}
                onMouseEnter={() => setActiveTier(tier)}
                onMouseLeave={() => setActiveTier(null)}
              >
                {/* Tier badge */}
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-7 h-7 rounded-sm flex items-center justify-center font-mono text-xs font-semibold"
                    style={{
                      backgroundColor: `${config.color}20`,
                      color: config.textColor || config.color,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {tier}
                  </div>
                  <span
                    className="text-xs font-heading tracking-wider"
                    style={{
                      color: config.textColor || config.color,
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                    }}
                  >
                    TIER {tier}
                  </span>
                </div>

                {/* Legal framework tags */}
                <div className="mb-3 flex flex-wrap gap-1">
                  {tier === 1 && (
                    <>
                      <Tag label="IHRA" />
                      <Tag label="JDA" />
                    </>
                  )}
                  {tier === 2 && (
                    <>
                      <Tag label="IHRA" />
                      <Tag label="NEXUS" />
                    </>
                  )}
                  {tier === 3 && (
                    <>
                      <Tag label="IHRA" />
                      <Tag label="JDA" />
                      <Tag label="NEXUS" />
                    </>
                  )}
                  {tier === 4 && (
                    <>
                      <Tag label="137c" />
                      <Tag label="137d" />
                    </>
                  )}
                  {tier === 5 && (
                    <>
                      <Tag label="137c" />
                      <Tag label="137d" />
                      <Tag label="137e" />
                      <Tag label="URGENT" highlight />
                    </>
                  )}
                </div>

                <p className="text-xs text-[#2B3F57] leading-relaxed">
                  {tierDescs[tier]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Tag({ label, highlight }: { label: string; highlight?: boolean }) {
  return (
    <span
      className="inline-block px-1.5 py-0.5 rounded-sm text-xs font-mono"
      style={{
        backgroundColor: highlight ? "rgba(220, 38, 38, 0.15)" : "rgba(26, 82, 200, 0.1)",
        color: highlight ? "#FCA5A5" : "#1A52C8",
        border: highlight ? "1px solid rgba(220, 38, 38, 0.3)" : "1px solid rgba(26, 82, 200, 0.2)",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.6rem",
        letterSpacing: "0.05em",
      }}
    >
      {label}
    </span>
  );
}
