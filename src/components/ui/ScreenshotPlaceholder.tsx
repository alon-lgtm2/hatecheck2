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
      className="flex items-center justify-center border border-[#E5E7EB] bg-[#FAFAFA]"
      style={{
        height: aspectRatio ? undefined : height,
        aspectRatio: aspectRatio || undefined,
      }}
    >
      <div className="text-center px-6">
        <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#9CA3AF]">
          {label}
        </p>
        {description && (
          <p className="text-[13px] text-[#9CA3AF] mt-1">{description}</p>
        )}
      </div>
    </div>
  );
}
