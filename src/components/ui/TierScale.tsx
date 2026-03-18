interface TierScaleProps {
  activeTier?: 1 | 2 | 3 | 4 | 5;
  compact?: boolean;
}

const tiers = [1, 2, 3, 4, 5] as const;

export default function TierScale({ activeTier, compact = false }: TierScaleProps) {
  return (
    <div className="flex items-center gap-0">
      {tiers.map((tier, index) => (
        <span key={tier} className="flex items-center">
          <span
            className={`text-[13px] tracking-[0.05em] ${
              activeTier === tier
                ? "font-bold text-[#0A1628]"
                : "font-medium text-[#9CA3AF]"
            }`}
          >
            {tier}
          </span>
          {index < tiers.length - 1 && (
            <span className="text-[#9CA3AF] mx-2 text-[13px]">{"\u00B7"}</span>
          )}
        </span>
      ))}
      {!compact && activeTier && (
        <span className="ml-4 text-[10px] font-medium uppercase tracking-[0.15em] text-[#9CA3AF]">
          Tier {activeTier} selected
        </span>
      )}
    </div>
  );
}
