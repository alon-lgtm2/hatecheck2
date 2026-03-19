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
    title: `${report.id} - ${report.title}`,
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
    <div>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "160px 24px 100px" }}>
        {/* Back */}
        <Link
          href={`/${locale}/reports`}
          style={{ fontSize: "13px", color: "#9CA3AF", marginBottom: "48px", display: "inline-block", transition: "color 0.2s", textDecoration: "none" }}
        >
          Back to Reports
        </Link>

        {/* Header */}
        <div style={{ marginBottom: "48px", paddingBottom: "48px", borderBottom: "1px solid #E5E7EB" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", marginBottom: "24px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span className={`tier-bg-${report.tier}`} style={{ width: "12px", height: "12px", borderRadius: "50%", display: "inline-block" }} />
              <span className={`tier-${report.tier}`} style={{ fontSize: "13px", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.15em" }}>
                TIER {report.tier} - {config.label.toUpperCase()}
              </span>
            </span>
            <span style={{ fontSize: "13px", color: "#9CA3AF" }}>
              {report.id}
            </span>
          </div>

          <h1 style={{ fontSize: "32px", fontWeight: 400, color: "#1B1A2B", marginBottom: "24px", lineHeight: 1.3 }}>
            {report.title}
          </h1>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "24px" }}>
            <span style={{ fontSize: "13px", color: "#9CA3AF" }}>
              {new Date(report.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span style={{ fontSize: "13px", color: "#9CA3AF" }}>
              {report.platform}
            </span>
            <span style={{ fontSize: "13px", color: "#9CA3AF" }}>
              {report.category}
            </span>
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{ borderBottom: "1px solid #E5E7EB", paddingBottom: "40px", marginBottom: "40px" }}>
          <p style={{ fontSize: "13px", color: "#9CA3AF", lineHeight: 1.7 }}>
            This is an anonymized case study for educational and methodological illustration purposes. All identifying information - including names, locations, specific platform URLs, and any personal data - has been removed or altered. This report should not be relied upon as legal advice.
          </p>
        </div>

        <div>
          {/* Summary */}
          <ReportSection title="Executive Summary">
            <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.8 }}>{report.content.summary}</p>
          </ReportSection>

          {/* Incident */}
          <ReportSection title="Incident Description">
            <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.8 }}>{report.content.incidentDescription}</p>
          </ReportSection>

          {/* Analysis */}
          <ReportSection title="Analysis Notes">
            <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.8 }}>{report.content.analysisNotes}</p>
          </ReportSection>

          {/* Applicable Standards */}
          <ReportSection title="Applicable Standards">
            <ul style={{ display: "flex", flexDirection: "column", gap: "16px", listStyle: "none", padding: 0 }}>
              {report.content.applicableStandards.map((s, i) => (
                <li key={i} style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.7 }}>
                  <span style={{ color: "#9CA3AF", marginRight: "8px" }}>
                    [{String(i + 1).padStart(2, "0")}]
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </ReportSection>

          {/* Legal Assessment */}
          <ReportSection title="Legal Assessment">
            <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.8 }}>{report.content.legalAssessment}</p>
          </ReportSection>

          {/* Recommended Actions */}
          <ReportSection title="Recommended Actions">
            <ul style={{ display: "flex", flexDirection: "column", gap: "8px", listStyle: "none", padding: 0 }}>
              {report.content.recommendedActions.map((action, i) => (
                <li key={i} style={{ fontSize: "14px", color: "#6B7280" }}>
                  {action}
                </li>
              ))}
            </ul>
          </ReportSection>

          {/* Keywords */}
          <ReportSection title="Classification Keywords">
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
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
        <div style={{ marginTop: "64px", paddingTop: "40px", borderTop: "1px solid #E5E7EB" }}>
          <Link
            href={`/${locale}/reports`}
            style={{ fontSize: "15px", color: "#2563EB", textDecoration: "none", transition: "color 0.2s" }}
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
    <div className="glass-card" style={{ padding: "32px", marginBottom: "16px" }}>
      <h2 style={{ fontSize: "18px", fontWeight: 400, color: "#1B1A2B", marginBottom: "24px" }}>
        {title}
      </h2>
      {children}
    </div>
  );
}
