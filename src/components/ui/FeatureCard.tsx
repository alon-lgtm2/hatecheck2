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
    <div className={`glass-card p-8 ${className}`}>
      <h3
        className="text-[15px] font-bold text-white mb-2"
        style={{ letterSpacing: "-0.01em" }}
      >
        {title}
      </h3>
      <p className="text-[15px] text-[rgba(255,255,255,0.65)] leading-[1.75]">
        {description}
      </p>
    </div>
  );
}
