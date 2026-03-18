import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import { reports } from "@/lib/reports";
import { tierConfig } from "@/lib/reports";

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
    <div className="pt-[73px]">
      {/* Page Header */}
      <section className="py-[120px] px-16 border-b border-[#E5E7EB] bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl">
            <p className="swiss-label mb-4">CASE STUDIES</p>
            <h1
              className="font-bold text-[#0A1628] mb-6"
              style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.1 }}
            >
              {t("title")}
            </h1>
            <p className="text-[17px] text-[#374151] leading-relaxed mb-6">
              {t("subtitle")}
            </p>
            <p className="text-[13px] text-[#9CA3AF]">
              All reports are fully anonymized. No identifying information about individuals or specific organizations is included.
            </p>
          </div>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="py-[120px] px-16 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {reports.map((report) => {
              const config = tierConfig[report.tier];
              return (
                <Link
                  key={report.id}
                  href={`/${locale}/reports/${report.id}`}
                  className="block border border-[#E5E7EB] p-8 hover:bg-[#FAFAFA] transition-colors -ml-px -mt-px"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="swiss-label">
                      TIER {report.tier} — {config.label.toUpperCase()}
                    </span>
                    <span className="text-[13px] text-[#9CA3AF]">
                      {report.id}
                    </span>
                  </div>
                  <h3 className="text-[18px] font-bold text-[#0A1628] mb-3 leading-tight">
                    {report.title}
                  </h3>
                  <p className="text-[15px] text-[#374151] leading-relaxed mb-6">
                    {report.excerpt}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-[13px] text-[#9CA3AF]">
                      {new Date(report.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="text-[13px] text-[#9CA3AF]">
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
