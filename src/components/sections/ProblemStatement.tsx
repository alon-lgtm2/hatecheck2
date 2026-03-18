import { useTranslations } from "next-intl";
import { Activity, FileQuestion, Scale, TrendingDown } from "lucide-react";

const icons = [Activity, FileQuestion, Scale, TrendingDown];

export default function ProblemStatement() {
  const t = useTranslations("home.problem");

  const cards = [
    { titleKey: "card1Title", descKey: "card1Desc", icon: icons[0] },
    { titleKey: "card2Title", descKey: "card2Desc", icon: icons[1] },
    { titleKey: "card3Title", descKey: "card3Desc", icon: icons[2] },
    { titleKey: "card4Title", descKey: "card4Desc", icon: icons[3] },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-14">
          <p className="gov-label mb-3">THE PROBLEM</p>
          <h2
            className="text-4xl md:text-5xl font-heading font-bold text-[#0C1B2E] mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {t("title")}
          </h2>
          <p className="text-[#2B3F57] max-w-2xl text-lg leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#DDE4EE] border border-[#DDE4EE] rounded-sm overflow-hidden">
          {cards.map(({ titleKey, descKey, icon: Icon }, index) => (
            <div
              key={index}
              className="group p-6 bg-white hover:bg-[#F8FAFB] transition-colors"
            >
              {/* Accent line at top */}
              <div
                className="w-full h-0.5 mb-5 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "linear-gradient(90deg, #1A52C8, transparent)" }}
              />

              <div
                className="w-9 h-9 rounded-sm flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(26, 82, 200, 0.1)", border: "1px solid rgba(26, 82, 200, 0.2)" }}
              >
                <Icon size={18} className="text-[#1A52C8]" />
              </div>

              <h3
                className="text-lg font-heading font-semibold text-[#0C1B2E] mb-2"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {t(titleKey as "card1Title")}
              </h3>
              <p className="text-sm text-[#2B3F57] leading-relaxed">
                {t(descKey as "card1Desc")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
