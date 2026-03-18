import { useTranslations } from "next-intl";

export default function ProblemStatement() {
  const t = useTranslations("home.problem");

  return (
    <section
      className="py-16 px-6 md:py-20 md:px-8 lg:py-[120px] lg:px-16 bg-white"
      style={{ borderTop: "1px solid #E5E7EB" }}
    >
      <div className="max-w-[1400px] mx-auto">
        <p className="swiss-label mb-16">{t("label")}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Column 1 */}
          <div>
            <p
              className="mb-5 text-[#0A1628]"
              style={{
                fontSize: "10px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
              }}
            >
              {t("col1Title")}
            </p>
            <p
              className="text-[#374151]"
              style={{ fontSize: "15px", lineHeight: 1.8 }}
            >
              {t("col1Desc")}
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <p
              className="mb-5 text-[#0A1628]"
              style={{
                fontSize: "10px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
              }}
            >
              {t("col2Title")}
            </p>
            <p
              className="text-[#374151]"
              style={{ fontSize: "15px", lineHeight: 1.8 }}
            >
              {t("col2Desc")}
            </p>
          </div>

          {/* Column 3 */}
          <div>
            <p
              className="mb-5 text-[#0A1628]"
              style={{
                fontSize: "10px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
              }}
            >
              {t("col3Title")}
            </p>
            <p
              className="text-[#374151]"
              style={{ fontSize: "15px", lineHeight: 1.8 }}
            >
              {t("col3Desc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
