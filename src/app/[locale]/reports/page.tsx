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
    <div className="pt-32">
      {/* Page Header */}
      <section className="pt-40 pb-16 px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl">
            <p className="section-label mb-4">CASE STUDIES</p>
            <h1
              className="font-bold text-white mb-6"
              style={{ fontSize: "48px", lineHeight: 1.1 }}
            >
              {t("title")}
            </h1>
            <p className="text-[17px] text-[rgba(255,255,255,0.65)] leading-relaxed mb-6">
              {t("subtitle")}
            </p>
            <p className="text-[13px] text-[rgba(255,255,255,0.4)]">
              All reports are fully anonymized. No identifying information about individuals or specific organizations is included.
            </p>
          </div>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="py-24 px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.map((report) => {
              const config = tierConfig[report.tier];
              return (
                <Link
                  key={report.id}
                  href={`/${locale}/reports/${report.id}`}
                  className="glass-card block p-8 hover:border-white/20 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full tier-bg-${report.tier}`} />
                      <span className={`text-[11px] font-semibold uppercase tracking-[0.15em] tier-${report.tier}`}>
                        TIER {report.tier} — {config.label.toUpperCase()}
                      </span>
                    </span>
                    <span className="text-[13px] text-[rgba(255,255,255,0.4)]">
                      {report.id}
                    </span>
                  </div>
                  <h3 className="text-[18px] font-bold text-white mb-3 leading-tight">
                    {report.title}
                  </h3>
                  <p className="text-[15px] text-[rgba(255,255,255,0.65)] leading-relaxed mb-6">
                    {report.excerpt}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-[13px] text-[rgba(255,255,255,0.4)]">
                      {new Date(report.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="text-[13px] text-[rgba(255,255,255,0.4)]">
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
