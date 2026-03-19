import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import { reports } from "@/lib/reports";
import { tierConfig } from "@/lib/reports";
import PageHeader from "@/components/sections/Hero";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Reports - Anonymized Case Studies",
    description:
      "Anonymized incident reports demonstrating HateCheck's five-tier classification system in action.",
  };
}

export default async function ReportsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "reports" });

  return (
    <div>
      <PageHeader
        label="CASE STUDIES"
        title={t("title")}
        subtitle={t("subtitle")}
      />

      {/* Disclaimer */}
      <section style={{ padding: "40px 0 0" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px" }}>
          <p style={{ fontSize: "13px", color: "#9CA3AF" }}>
            All reports are fully anonymized. No identifying information about individuals or specific organizations is included.
          </p>
        </div>
      </section>

      {/* Reports Grid */}
      <section style={{ padding: "100px 0" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {reports.map((report) => {
              const config = tierConfig[report.tier];
              return (
                <Link
                  key={report.id}
                  href={`/${locale}/reports/${report.id}`}
                  className="glass-card"
                  style={{ display: "block", padding: "32px", transition: "box-shadow 0.2s", textDecoration: "none" }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span className={`tier-bg-${report.tier}`} style={{ width: "10px", height: "10px", borderRadius: "50%", display: "inline-block" }} />
                      <span className={`tier-${report.tier}`} style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.15em" }}>
                        TIER {report.tier} - {config.label.toUpperCase()}
                      </span>
                    </span>
                    <span style={{ fontSize: "13px", color: "#9CA3AF" }}>
                      {report.id}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "18px", fontWeight: 400, color: "#1B1A2B", marginBottom: "12px", lineHeight: 1.3 }}>
                    {report.title}
                  </h3>
                  <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.7, marginBottom: "24px" }}>
                    {report.excerpt}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <span style={{ fontSize: "13px", color: "#9CA3AF" }}>
                      {new Date(report.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span style={{ fontSize: "13px", color: "#9CA3AF" }}>
                      {report.platform}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
