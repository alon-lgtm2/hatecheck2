interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({
  title,
  description,
  className = "",
}: FeatureCardProps) {
  return (
    <div className={className}>
      <h3
        className="text-[15px] font-bold text-[#0A1628] mb-2"
        style={{ letterSpacing: "-0.01em" }}
      >
        {title}
      </h3>
      <p className="text-[15px] text-[#374151] leading-[1.75]">
        {description}
      </p>
    </div>
  );
}
