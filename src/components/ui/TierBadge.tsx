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
      className={`inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] tier-${tier} ${className}`}
    >
      <span className={`w-2 h-2 rounded-full tier-bg-${tier}`} />
      TIER {tier}
    </span>
  );
}
