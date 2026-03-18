import { useTranslations } from "next-intl";

const steps = [
  { number: "01", titleKey: "step1Title", descKey: "step1Desc" },
  { number: "02", titleKey: "step2Title", descKey: "step2Desc" },
  { number: "03", titleKey: "step3Title", descKey: "step3Desc" },
  { number: "04", titleKey: "step4Title", descKey: "step4Desc" },
  { number: "05", titleKey: "step5Title", descKey: "step5Desc" },
];

export default function HowItWorks() {
  const t = useTranslations("home.howItWorks");

  return (
    <section
      className="py-16 px-6 md:py-20 md:px-8 lg:py-[120px] lg:px-16 bg-white"
      style={{ borderTop: "1px solid #E5E7EB" }}
    >
      <div className="max-w-[1400px] mx-auto">
        <p className="swiss-label mb-20">{t("label")}</p>

        <div>
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-0 py-10"
              style={{
                borderTop: i === 0 ? "1px solid #E5E7EB" : undefined,
                borderBottom: "1px solid #E5E7EB",
              }}
            >
              <span
                className="text-[#0A1628]"
                style={{
                  fontSize: "48px",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                {step.number}
              </span>
              <div>
                <h3
                  className="text-[#0A1628] mb-3"
                  style={{ fontSize: "20px", fontWeight: 700 }}
                >
                  {t(step.titleKey as "step1Title")}
                </h3>
                <p
                  className="text-[#9CA3AF] max-w-[560px]"
                  style={{ fontSize: "15px", lineHeight: 1.7 }}
                >
                  {t(step.descKey as "step1Desc")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
