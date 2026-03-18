import { useTranslations } from "next-intl";

const tiers = [
  { tier: "1", classKey: "tier1Class", descKey: "tier1Desc", responseKey: "tier1Response" },
  { tier: "2", classKey: "tier2Class", descKey: "tier2Desc", responseKey: "tier2Response" },
  { tier: "3", classKey: "tier3Class", descKey: "tier3Desc", responseKey: "tier3Response" },
  { tier: "4", classKey: "tier4Class", descKey: "tier4Desc", responseKey: "tier4Response" },
  { tier: "5", classKey: "tier5Class", descKey: "tier5Desc", responseKey: "tier5Response" },
];

export default function TierOverview() {
  const t = useTranslations("home.tiers");

  return (
    <section
      className="py-16 px-6 md:py-20 md:px-8 lg:py-[120px] lg:px-16 bg-white"
      style={{ borderTop: "1px solid #E5E7EB" }}
    >
      <div className="max-w-[1400px] mx-auto">
        <p className="swiss-label mb-16">{t("label")}</p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[700px]">
            <thead>
              <tr style={{ borderBottom: "1px solid #0A1628" }}>
                <th
                  className="text-left pb-4 pr-8 text-[#9CA3AF]"
                  style={{
                    fontSize: "10px",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                  }}
                >
                  {t("colTier")}
                </th>
                <th
                  className="text-left pb-4 pr-8 text-[#9CA3AF]"
                  style={{
                    fontSize: "10px",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                  }}
                >
                  {t("colClassification")}
                </th>
                <th
                  className="text-left pb-4 pr-8 text-[#9CA3AF]"
                  style={{
                    fontSize: "10px",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                  }}
                >
                  {t("colDescription")}
                </th>
                <th
                  className="text-left pb-4 text-[#9CA3AF]"
                  style={{
                    fontSize: "10px",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                  }}
                >
                  {t("colResponse")}
                </th>
              </tr>
            </thead>
            <tbody>
              {tiers.map((row) => (
                <tr
                  key={row.tier}
                  className="hover:bg-[#FAFAFA] transition-colors"
                  style={{ borderBottom: "1px solid #E5E7EB" }}
                >
                  <td
                    className="py-5 pr-8 text-[#0A1628] align-top"
                    style={{ fontSize: "14px", fontWeight: 700 }}
                  >
                    {row.tier}
                  </td>
                  <td
                    className="py-5 pr-8 text-[#0A1628] align-top"
                    style={{ fontSize: "15px", fontWeight: 500 }}
                  >
                    {t(row.classKey as "tier1Class")}
                  </td>
                  <td
                    className="py-5 pr-8 text-[#374151] align-top"
                    style={{ fontSize: "15px", lineHeight: 1.7 }}
                  >
                    {t(row.descKey as "tier1Desc")}
                  </td>
                  <td
                    className="py-5 text-[#9CA3AF] align-top"
                    style={{ fontSize: "14px", lineHeight: 1.7 }}
                  >
                    {t(row.responseKey as "tier1Response")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
