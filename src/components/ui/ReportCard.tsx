import Link from "next/link";
import { Report } from "@/lib/reports";

interface ReportCardProps {
  report: Report;
  locale: string;
}

export default function ReportCard({ report, locale }: ReportCardProps) {
  return (
    <Link href={`/${locale}/reports/${report.id}`} className="block group">
      <article className="glass-card p-8">
        {/* Tier + Date */}
        <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.15em] text-[rgba(255,255,255,0.4)] mb-3">
          <span className={`w-2 h-2 rounded-full tier-bg-${report.tier}`} />
          <span className={`font-bold tier-${report.tier}`}>TIER {report.tier}</span>
          {" \u00B7 "}
          {new Date(report.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </div>

        {/* Title */}
        <h3
          className="text-[20px] font-bold text-white mb-2 group-hover:text-[#3B82F6] transition-colors"
          style={{ letterSpacing: "-0.02em" }}
        >
          {report.title}
        </h3>

        {/* Excerpt */}
        <p className="text-[15px] text-[rgba(255,255,255,0.65)] leading-[1.75]">
          {report.excerpt}
        </p>
      </article>
    </Link>
  );
}
