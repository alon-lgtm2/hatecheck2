import { useTranslations } from "next-intl";

export default function CredibilityBar() {
  const t = useTranslations("home.credibility");

  return (
    <section
      className="py-16 px-6 md:py-20 md:px-8 lg:py-[120px] lg:px-16 bg-white"
      style={{ borderTop: "1px solid #E5E7EB" }}
    >
      <div className="max-w-[1400px] mx-auto">
        <p className="swiss-label mb-10">{t("label")}</p>

        <p
          className="text-[#9CA3AF] mb-8"
          style={{
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.1em",
          }}
        >
          IHRA &middot; Nexus Document &middot; Jerusalem Declaration &middot; Dutch Penal Code
        </p>

        <p
          className="text-[#374151]"
          style={{ fontSize: "15px", lineHeight: 1.7 }}
        >
          {t("description")}
        </p>
      </div>
    </section>
  );
}
