import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { reports } from "@/lib/reports";
import ReportCard from "@/components/ui/ReportCard";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Reports — Anonymized Case Studies",
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
    <div className="pt-[88px]">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#DDE4EE] bg-[#F8FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="w-10 h-[2px] bg-[#1A52C8] mb-4" />
            <p className="gov-label mb-3">CASE STUDIES</p>
            <h1
              className="text-5xl md:text-6xl font-heading font-bold text-[#0C1B2E] mb-5"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {t("title")}
            </h1>
            <p className="text-lg text-[#2B3F57] leading-relaxed mb-4">
              {t("subtitle")}
            </p>
            <div
              className="inline-flex items-center gap-2 text-xs px-3 py-2 rounded-sm"
              style={{
                backgroundColor: "rgba(26, 82, 200, 0.08)",
                border: "1px solid rgba(26, 82, 200, 0.2)",
                color: "#2B3F57",
              }}
            >
              <span className="text-[#1A52C8]">ℹ</span>
              All reports are fully anonymized. No identifying information about individuals or specific organizations is included.
            </div>
          </div>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#EFF3F8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reports.map((report) => (
              <ReportCard key={report.id} report={report} locale={locale} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
