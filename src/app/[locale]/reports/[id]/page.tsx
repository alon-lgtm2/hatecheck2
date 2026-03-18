import { getReportById, reports, tierConfig } from "@/lib/reports";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

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

  const config = tierConfig[report.tier];

  return (
    <div className="pt-32">
      <div className="max-w-[900px] mx-auto px-16 py-24">
        {/* Back */}
        <Link
          href={`/${locale}/reports`}
          className="text-[13px] text-[rgba(255,255,255,0.4)] hover:text-[#3B82F6] mb-12 inline-block transition-colors"
        >
          Back to Reports
        </Link>

        {/* Header */}
        <div className="mb-12 pb-12 border-b border-white/10">
          <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
            <span className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full tier-bg-${report.tier}`} />
              <span className={`text-[13px] font-semibold uppercase tracking-[0.15em] tier-${report.tier}`}>
                TIER {report.tier} — {config.label.toUpperCase()}
              </span>
            </span>
            <span className="text-[13px] text-[rgba(255,255,255,0.4)]">
              {report.id}
            </span>
          </div>

          <h1 className="text-[32px] font-bold text-white mb-6 leading-tight">
            {report.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6">
            <span className="text-[13px] text-[rgba(255,255,255,0.4)]">
              {new Date(report.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="text-[13px] text-[rgba(255,255,255,0.4)]">
              {report.platform}
            </span>
            <span className="text-[13px] text-[rgba(255,255,255,0.4)]">
              {report.category}
            </span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-b border-white/10 pb-10 mb-10">
          <p className="text-[13px] text-[rgba(255,255,255,0.4)] leading-relaxed">
            This is an anonymized case study for educational and methodological illustration purposes. All identifying information — including names, locations, specific platform URLs, and any personal data — has been removed or altered. This report should not be relied upon as legal advice.
          </p>
        </div>

        <div className="space-y-0">
          {/* Summary */}
          <ReportSection title="Executive Summary">
            <p className="text-[15px] text-[rgba(255,255,255,0.75)] leading-[1.8]">{report.content.summary}</p>
          </ReportSection>

          {/* Incident */}
          <ReportSection title="Incident Description">
            <p className="text-[15px] text-[rgba(255,255,255,0.75)] leading-[1.8]">{report.content.incidentDescription}</p>
          </ReportSection>

          {/* Analysis */}
          <ReportSection title="Analysis Notes">
            <p className="text-[15px] text-[rgba(255,255,255,0.75)] leading-[1.8]">{report.content.analysisNotes}</p>
          </ReportSection>

          {/* Applicable Standards */}
          <ReportSection title="Applicable Standards">
            <ul className="space-y-4">
              {report.content.applicableStandards.map((s, i) => (
                <li key={i} className="text-[14px] text-[rgba(255,255,255,0.65)] leading-relaxed">
                  <span className="text-[rgba(255,255,255,0.4)] mr-2">
                    [{String(i + 1).padStart(2, "0")}]
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </ReportSection>

          {/* Legal Assessment */}
          <ReportSection title="Legal Assessment">
            <p className="text-[15px] text-[rgba(255,255,255,0.75)] leading-[1.8]">{report.content.legalAssessment}</p>
          </ReportSection>

          {/* Recommended Actions */}
          <ReportSection title="Recommended Actions">
            <ul className="space-y-2">
              {report.content.recommendedActions.map((action, i) => (
                <li key={i} className="text-[14px] text-[rgba(255,255,255,0.65)]">
                  {action}
                </li>
              ))}
            </ul>
          </ReportSection>

          {/* Keywords */}
          <ReportSection title="Classification Keywords">
            <div className="flex flex-wrap gap-3">
              {report.content.keywords.map((kw) => (
                <span
                  key={kw}
                  className="section-label"
                >
                  {kw.toUpperCase()}
                </span>
              ))}
            </div>
          </ReportSection>
        </div>

        {/* Back link */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <Link
            href={`/${locale}/reports`}
            className="text-[15px] text-white hover:text-[#3B82F6] transition-colors"
          >
            Back to all reports
          </Link>
        </div>
      </div>
    </div>
  );
}

function ReportSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass-card p-8 mb-4">
      <h2 className="text-[18px] font-bold text-white mb-6">
        {title}
      </h2>
      {children}
    </div>
  );
}
