"use client";

import { tierConfig } from "@/lib/reports";

interface TierScaleProps {
  activeTier?: 1 | 2 | 3 | 4 | 5;
  compact?: boolean;
}

const tierData = [
  { tier: 1 as const, shortLabel: "TIER 1", description: "Not Antisemitic" },
  { tier: 2 as const, shortLabel: "TIER 2", description: "Context Needed" },
  { tier: 3 as const, shortLabel: "TIER 3", description: "Antisemitic" },
  { tier: 4 as const, shortLabel: "TIER 4", description: "Potentially Criminal" },
  { tier: 5 as const, shortLabel: "TIER 5", description: "Urgent Risk" },
];

export default function TierScale({ activeTier, compact = false }: TierScaleProps) {
  return (
    <div className="w-full">
      {/* Bar visualization */}
      <div className="flex w-full h-3 rounded-full overflow-hidden gap-0.5">
        {tierData.map(({ tier }) => {
          const config = tierConfig[tier];
          const isActive = activeTier === tier;
          return (
            <div
              key={tier}
              className="flex-1 transition-all duration-300"
              style={{
                backgroundColor: config.color,
                opacity: activeTier ? (isActive ? 1 : 0.25) : 0.8,
              }}
            />
          );
        })}
      </div>

      {/* Labels */}
      {!compact && (
        <div className="flex w-full mt-3">
          {tierData.map(({ tier, shortLabel, description }) => {
            const config = tierConfig[tier];
            const isActive = activeTier === tier;
            return (
              <div
                key={tier}
                className="flex-1 flex flex-col items-center gap-1"
                style={{ opacity: activeTier ? (isActive ? 1 : 0.4) : 1 }}
              >
                <span
                  className="text-xs font-heading font-semibold"
                  style={{
                    color: config.textColor || config.color,
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                  }}
                >
                  {shortLabel}
                </span>
                <span
                  className="text-center leading-tight"
                  style={{
                    color: "#4A6080",
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "0.65rem",
                  }}
                >
                  {description}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
