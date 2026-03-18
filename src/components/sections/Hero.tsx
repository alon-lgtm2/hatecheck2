"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("home.hero");
  const locale = useLocale();

  return (
    <section className="bg-white">
      <div
        className="max-w-[1400px] mx-auto pt-[240px] pb-[160px] px-6 md:px-8 lg:px-16"
      >
        <h1
          className="text-[#0A1628] mb-10"
          style={{
            fontSize: "clamp(48px, 8vw, 140px)",
            lineHeight: 0.95,
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
        >
          Detect.<br />
          Classify.<br />
          Act.
        </h1>

        <p
          className="text-[#374151] max-w-[480px] mb-10"
          style={{ fontSize: "18px", lineHeight: 1.7 }}
        >
          {t("subtitle")}
        </p>

        <Link
          href={`/${locale}/product`}
          className="text-[#0A1628] hover:text-[#374151] transition-colors"
          style={{
            fontSize: "15px",
            fontWeight: 500,
            textDecoration: "underline",
            textUnderlineOffset: "6px",
          }}
        >
          {t("cta1")} &rarr;
        </Link>
      </div>
    </section>
  );
}
