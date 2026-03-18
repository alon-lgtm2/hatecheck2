import { Monitor } from "lucide-react";

interface ScreenshotPlaceholderProps {
  label: string;
  description?: string;
  height?: string;
  aspectRatio?: string;
}

export default function ScreenshotPlaceholder({
  label,
  description,
  height = "320px",
  aspectRatio,
}: ScreenshotPlaceholderProps) {
  return (
    <div
      className="relative rounded-xl border border-[#D0DCE8] bg-[#F4F7FB] overflow-hidden flex items-center justify-center"
      style={{ height: aspectRatio ? undefined : height, aspectRatio }}
    >
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #D0DCE8 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          opacity: 0.5,
        }}
      />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#2563EB]/50 rounded-tl-xl" />
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#2563EB]/50 rounded-tr-xl" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#2563EB]/50 rounded-bl-xl" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#2563EB]/50 rounded-br-xl" />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-3 text-center px-6">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: "#1D4ED820", border: "1px solid #2563EB30" }}
        >
          <Monitor size={22} className="text-[#7A90A6]" />
        </div>
        <div>
          <p
            className="text-sm font-heading font-semibold text-[#7A90A6] tracking-widest"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.12em" }}
          >
            {label.toUpperCase()}
          </p>
          {description && (
            <p className="text-xs text-[#7A90A6]/70 mt-1">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
