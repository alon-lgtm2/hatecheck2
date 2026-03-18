import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accentColor?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  accentColor = "#1A52C8",
}: FeatureCardProps) {
  return (
    <div
      className="relative p-6 rounded-sm border border-[#C6D2E0] bg-white shadow-gov card-hover group cursor-default hover:border-[#1A52C8] transition-colors"
    >
      {/* Icon */}
      <div
        className="w-10 h-10 rounded-sm flex items-center justify-center mb-4"
        style={{
          backgroundColor: `${accentColor}15`,
          border: `1px solid ${accentColor}30`,
        }}
      >
        <Icon size={20} style={{ color: accentColor }} />
      </div>

      {/* Content */}
      <h3
        className="text-lg font-heading font-semibold text-[#0C1B2E] mb-2"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        {title}
      </h3>
      <p className="text-sm text-[#2B3F57] leading-relaxed">{description}</p>

      {/* Hover border */}
      <div
        className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 0 1px ${accentColor}40`,
        }}
      />
    </div>
  );
}
