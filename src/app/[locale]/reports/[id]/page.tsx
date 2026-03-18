import { getReportById, reports } from "@/lib/reports";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Monitor, AlertTriangle } from "lucide-react";
import TierBadge from "@/components/ui/TierBadge";
import TierScale from "@/components/ui/TierScale";

export async function generateStaticParams() {
  return reports.map((r) => ({ id: r.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const report = getReportById(id);
  if (!report) return { title: "Report Not Found" };
  return {
    title: `${report.id} — ${report.title}`,
    description: report.excerpt,
  };
}

export default async function ReportDetailPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id, locale } = await params;
  const report = getReportById(id);

  if (!report) notFound();

  return (
    <div className="pt-[88px] bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back */}
        <Link
          href={`/${locale}/reports`}
          className="inline-flex items-center gap-2 text-sm text-[#8099B3] hover:text-[#2B3F57] mb-8 transition-colors"
        >
          <ArrowLeft size={14} />
          Back to Reports
        </Link>

        {/* Header */}
        <div className="mb-8 pb-8 border-b border-[#C6D2E0]">
          <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
            <TierBadge tier={report.tier} size="lg" />
            <span
              className="font-mono text-sm text-[#8099B3]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {report.id}
            </span>
          </div>

          <h1
            className="text-3xl md:text-4xl font-heading font-bold text-[#0C1B2E] mb-4 leading-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {report.title}
          </h1>

          <div className="flex flex-wrap items-center gap-5 mb-5">
            <div className="flex items-center gap-1.5 text-sm text-[#8099B3]">
              <Calendar size={13} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem" }}>
                {new Date(report.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-[#8099B3]">
              <Monitor size={13} />
              <span>{report.platform}</span>
            </div>
            <span
              className="text-xs px-2 py-0.5 rounded-sm"
              style={{
                backgroundColor: "rgba(26, 82, 200, 0.08)",
                border: "1px solid rgba(26, 82, 200, 0.15)",
                color: "#2B3F57",
              }}
            >
              {report.category}
            </span>
          </div>

          {/* Tier Scale */}
          <div className="max-w-lg">
            <TierScale activeTier={report.tier} />
          </div>
        </div>

        {/* Disclaimer */}
        <div
          className="flex items-start gap-3 p-4 rounded-sm mb-8"
          style={{
            backgroundColor: "rgba(26, 82, 200, 0.05)",
            border: "1px solid rgba(26, 82, 200, 0.15)",
          }}
        >
          <AlertTriangle size={16} className="text-[#1A52C8] flex-shrink-0 mt-0.5" />
          <p className="text-xs text-[#2B3F57] leading-relaxed">
            This is an anonymized case study for educational and methodological illustration purposes. All identifying information — including names, locations, specific platform URLs, and any personal data — has been removed or altered. This report should not be relied upon as legal advice.
          </p>
        </div>

        <div className="space-y-8">
          {/* Summary */}
          <ReportSection title="Executive Summary">
            <p className="text-[#2B3F57] leading-relaxed">{report.content.summary}</p>
          </ReportSection>

          {/* Incident */}
          <ReportSection title="Incident Description">
            <p className="text-[#2B3F57] leading-relaxed">{report.content.incidentDescription}</p>
          </ReportSection>

          {/* Analysis */}
          <ReportSection title="Analysis Notes">
            <p className="text-[#2B3F57] leading-relaxed">{report.content.analysisNotes}</p>
          </ReportSection>

          {/* Applicable Standards */}
          <ReportSection title="Applicable Standards">
            <ul className="space-y-3">
              {report.content.applicableStandards.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="font-mono text-xs text-[#1A52C8] flex-shrink-0 mt-0.5"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    [{String(i + 1).padStart(2, "0")}]
                  </span>
                  <span className="text-sm text-[#2B3F57] leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </ReportSection>

          {/* Legal Assessment */}
          <ReportSection title="Legal Assessment">
            <p className="text-[#2B3F57] leading-relaxed">{report.content.legalAssessment}</p>
          </ReportSection>

          {/* Recommended Actions */}
          <ReportSection title="Recommended Actions">
            <ul className="space-y-2">
              {report.content.recommendedActions.map((action, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-[#1A52C8] flex-shrink-0 mt-0.5">▸</span>
                  <span className="text-sm text-[#2B3F57]">{action}</span>
                </li>
              ))}
            </ul>
          </ReportSection>

          {/* Keywords */}
          <ReportSection title="Classification Keywords">
            <div className="flex flex-wrap gap-2">
              {report.content.keywords.map((kw) => (
                <span
                  key={kw}
                  className="text-xs px-2 py-1 rounded-sm"
                  style={{
                    backgroundColor: "rgba(26, 82, 200, 0.06)",
                    border: "1px solid rgba(26, 82, 200, 0.12)",
                    color: "#8099B3",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {kw}
                </span>
              ))}
            </div>
          </ReportSection>
        </div>

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-[#C6D2E0]">
          <Link
            href={`/${locale}/reports`}
            className="inline-flex items-center gap-2 text-sm text-[#1A52C8] hover:text-[#1440A3] transition-colors"
          >
            <ArrowLeft size={14} />
            Back to all reports
          </Link>
        </div>
      </div>
    </div>
  );
}

function ReportSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-6 rounded-sm border border-[#C6D2E0] bg-white shadow-gov">
      <h2
        className="text-lg font-heading font-semibold text-[#0C1B2E] mb-4 pb-3 border-b border-[#DDE4EE]"
        style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.03em" }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}
