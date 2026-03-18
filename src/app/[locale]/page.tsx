import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ProblemStatement from "@/components/sections/ProblemStatement";
import HowItWorks from "@/components/sections/HowItWorks";
import TierOverview from "@/components/sections/TierOverview";
import CredibilityBar from "@/components/sections/CredibilityBar";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home.hero" });
  return {
    title: "HateCheck — AI-Powered Antisemitism Detection Platform",
    description: t("subtitle"),
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  return (
    <>
      <Hero />
      <ProblemStatement />
      <HowItWorks />
      <TierOverview />
      <CredibilityBar />

      {/* CTA Section */}
      <section
        className="py-16 md:py-20 lg:py-[160px] px-6 md:px-8 lg:px-16 bg-white"
        style={{ borderTop: "1px solid #E5E7EB" }}
      >
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="swiss-label mb-10">{t("cta.label")}</p>
          <Link
            href={`/${locale}/contact`}
            className="text-[#0A1628] hover:text-[#374151] transition-colors"
            style={{
              fontSize: "18px",
              fontWeight: 500,
              textDecoration: "underline",
              textUnderlineOffset: "6px",
            }}
          >
            {t("cta.text")} &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
