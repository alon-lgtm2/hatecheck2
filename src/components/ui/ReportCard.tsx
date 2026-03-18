import Link from "next/link";
import { ArrowRight, Calendar, Monitor } from "lucide-react";
import { Report } from "@/lib/reports";
import TierBadge from "./TierBadge";

interface ReportCardProps {
  report: Report;
  locale: string;
}

export default function ReportCard({ report, locale }: ReportCardProps) {
  return (
    <Link href={`/${locale}/reports/${report.id}`} className="block group">
      <article className="h-full p-6 rounded-sm border border-[#C6D2E0] bg-white shadow-gov card-hover flex flex-col hover:border-[#1A52C8] transition-colors">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <TierBadge tier={report.tier} size="sm" />
          <span
            className="text-xs text-[#8099B3] font-mono flex-shrink-0"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {report.id}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-base font-heading font-semibold text-[#0C1B2E] mb-3 leading-tight group-hover:text-[#1A52C8] transition-colors"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          {report.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-[#2B3F57] leading-relaxed flex-1 mb-4">
          {report.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 pt-4 border-t border-[#DDE4EE]">
          <div className="flex items-center gap-1.5 text-xs text-[#8099B3]">
            <Calendar size={11} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              {new Date(report.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[#8099B3]">
            <Monitor size={11} />
            <span>{report.platform}</span>
          </div>
          <div className="ml-auto flex items-center gap-1 text-xs text-[#1A52C8] group-hover:text-[#1440A3] transition-colors font-heading tracking-wide">
            View
            <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </article>
    </Link>
  );
}
