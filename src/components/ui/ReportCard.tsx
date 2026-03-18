import Link from "next/link";
import { Report } from "@/lib/reports";

interface ReportCardProps {
  report: Report;
  locale: string;
}

export default function ReportCard({ report, locale }: ReportCardProps) {
  return (
    <Link href={`/${locale}/reports/${report.id}`} className="block group">
      <article className="py-8 border-b border-[#E5E7EB]">
        {/* Tier + Date */}
        <div className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#9CA3AF] mb-3">
          <span className="text-[#0A1628] font-bold">TIER {report.tier}</span>
          {" \u00B7 "}
          {new Date(report.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </div>

        {/* Title */}
        <h3
          className="text-[20px] font-bold text-[#0A1628] mb-2 group-hover:underline"
          style={{ letterSpacing: "-0.02em" }}
        >
          {report.title}
        </h3>

        {/* Excerpt */}
        <p className="text-[15px] text-[#9CA3AF] leading-[1.75]">
          {report.excerpt}
        </p>
      </article>
    </Link>
  );
}
