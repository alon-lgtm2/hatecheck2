interface TierBadgeProps {
  tier: number;
  className?: string;
}

export default function TierBadge({
  tier,
  className = "",
}: TierBadgeProps) {
  return (
    <span
      className={`inline-block text-[10px] font-bold uppercase tracking-[0.15em] text-[#0A1628] ${className}`}
    >
      TIER {tier}
    </span>
  );
}
