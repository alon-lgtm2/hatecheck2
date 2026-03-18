import { tierConfig } from "@/lib/reports";

interface TierBadgeProps {
  tier: 1 | 2 | 3 | 4 | 5;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export default function TierBadge({
  tier,
  size = "md",
  showLabel = true,
}: TierBadgeProps) {
  const config = tierConfig[tier];

  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-xs px-3 py-1",
    lg: "text-sm px-4 py-1.5",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded font-heading font-semibold tracking-widest ${sizeClasses[size]} tier-badge`}
      style={{
        backgroundColor: config.bgColor,
        border: `1px solid ${config.borderColor}`,
        color: config.textColor,
        fontFamily: "'Barlow Condensed', sans-serif",
        letterSpacing: "0.12em",
      }}
    >
      <span
        className="inline-block w-2 h-2 rounded-full flex-shrink-0"
        style={{ backgroundColor: config.color }}
      />
      {showLabel ? (
        <span>TIER {tier} — {config.label.toUpperCase()}</span>
      ) : (
        <span>TIER {tier}</span>
      )}
    </span>
  );
}
