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

      {/* Divider */}
      <div className="section-divider mx-4 sm:mx-8 lg:mx-16" />

      <ProblemStatement />

      <div className="section-divider mx-4 sm:mx-8 lg:mx-16" />

      <HowItWorks />

      <div className="section-divider mx-4 sm:mx-8 lg:mx-16" />

      <TierOverview />

      <div className="section-divider mx-4 sm:mx-8 lg:mx-16" />

      <CredibilityBar />

      {/* Quote / Epigraph */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#DDE4EE] bg-[#EFF3F8]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <span
              className="absolute -top-8 left-0 text-[120px] text-[#C6D2E0] leading-none font-serif select-none"
            >
              "
            </span>
            <blockquote
              className="relative z-10 text-xl md:text-2xl text-[#2B3F57] italic leading-relaxed mb-6"
              style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}
            >
              {t("quote.text")}
            </blockquote>
            <cite
              className="text-sm text-[#8099B3] not-italic font-heading tracking-wider"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em" }}
            >
              — {t("quote.attribution")}
            </cite>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#DDE4EE] bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-heading font-bold text-[#0C1B2E] mb-5"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {t("cta.title")}
          </h2>
          <p className="text-lg text-[#2B3F57] mb-10 max-w-2xl mx-auto leading-relaxed">
            {t("cta.subtitle")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/${locale}/contact`}
              className="px-8 py-4 bg-[#1A52C8] hover:bg-[#1440A3] text-white rounded-sm font-heading tracking-wider text-sm transition-all shadow-gov"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.12em" }}
            >
              {t("cta.primary").toUpperCase()}
            </Link>
            <Link
              href={`/${locale}/product`}
              className="px-8 py-4 text-[#0C1B2E] rounded-sm font-heading tracking-wider text-sm transition-colors border border-[#C6D2E0] hover:border-[#1A52C8] hover:bg-[#EFF3F8]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.12em" }}
            >
              {t("cta.secondary").toUpperCase()}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
