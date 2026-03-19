import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/sections/Hero";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "academy" });
  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default async function AcademyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "academy" });

  const tracks = [
    { num: 1, slug: "recognizing-antisemitism", icon: "01" },
    { num: 2, slug: "osint-basics", icon: "02" },
    { num: 3, slug: "platform-reporting", icon: "03" },
    { num: 4, slug: "institutional-response", icon: "04" },
    { num: 5, slug: "history-context", icon: "05" },
  ];

  const audiences = [
    { emoji: "\uD83C\uDFDB", text: t("whoProfessionals") },
    { emoji: "\uD83C\uDF93", text: t("whoStudents") },
    { emoji: "\uD83D\uDC64", text: t("whoCitizens") },
  ];

  return (
    <div>
      <PageHeader
        label="ACADEMY"
        title={t("title")}
        subtitle={t("subtitle")}
      />

      {/* Intro */}
      <section style={{ padding: "80px 0 0", background: "#FFFFFF" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <p style={{ fontSize: "17px", color: "#555", lineHeight: 1.8 }}>
            {t("intro")}
          </p>
        </div>
      </section>

      {/* Who It's For */}
      <section style={{ padding: "60px 0", background: "#FFFFFF" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: "48px", flexWrap: "wrap" }}>
            {audiences.map((a) => (
              <div key={a.text} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "20px" }}>{a.emoji}</span>
                <span style={{ fontSize: "14px", color: "#6B7280", fontWeight: 500 }}>{a.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Tracks Grid */}
      <section style={{ padding: "80px 0 100px", background: "#F8F9FA" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p className="section-label" style={{ marginBottom: "12px" }}>
              {t("tracksTitle").toUpperCase()}
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "28px",
            }}
          >
            {tracks.map((track) => (
              <div
                key={track.num}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  borderRadius: "12px",
                  padding: "36px 32px",
                  position: "relative",
                  transition: "box-shadow 0.2s",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "20px",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    color: "#D1D5DB",
                  }}
                >
                  {track.icon}
                </span>
                <div
                  style={{
                    display: "inline-block",
                    padding: "4px 12px",
                    background: "#EFF6FF",
                    borderRadius: "4px",
                    fontSize: "10px",
                    fontWeight: 700,
                    color: "#2563EB",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginBottom: "20px",
                  }}
                >
                  TRACK {track.num}
                </div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#1B1A2B",
                    marginBottom: "12px",
                  }}
                >
                  {t(`track${track.num}Title`)}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#6B7280",
                    lineHeight: 1.7,
                    marginBottom: "20px",
                  }}
                >
                  {t(`track${track.num}Desc`)}
                </p>
                <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "24px" }}>
                  <span style={{ fontSize: "12px", color: "#9CA3AF", fontWeight: 600 }}>
                    {t(`track${track.num}Guides`)}
                  </span>
                  <span style={{ fontSize: "12px", color: "#D1D5DB" }}>|</span>
                  <span style={{ fontSize: "12px", color: "#9CA3AF", fontWeight: 600 }}>
                    {t(`track${track.num}Time`)}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#2563EB",
                    letterSpacing: "0.05em",
                  }}
                >
                  {t("startLearning")} &rarr;
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section style={{ padding: "80px 0", background: "#FFFFFF" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <p className="section-label" style={{ marginBottom: "16px" }}>
            {t("whyTitle").toUpperCase()}
          </p>
          <p style={{ fontSize: "17px", color: "#555", lineHeight: 1.8 }}>
            {t("whyText")}
          </p>
        </div>
      </section>

      {/* Coming Soon CTA */}
      <section
        style={{
          padding: "100px 0",
          background: "linear-gradient(135deg, #1B1A2B 0%, #2D2B3E 50%, #1B1A2B 100%)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "640px", margin: "0 auto", padding: "0 24px" }}>
          <p
            className="section-label"
            style={{ marginBottom: "16px", color: "rgba(255,255,255,0.6)" }}
          >
            {t("comingSoon").toUpperCase()}
          </p>
          <h2
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#FFFFFF",
              marginBottom: "24px",
            }}
          >
            {t("comingSoonDesc")}
          </h2>
          <Link
            href={`/${locale}/contact`}
            className="btn-white"
          >
            {t("notify")}
          </Link>
        </div>
      </section>
    </div>
  );
}
