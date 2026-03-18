import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home.hero" });

  return {
    title: {
      default: "HateCheck — AI-Powered Antisemitism Detection Platform",
      template: "%s | HateCheck",
    },
    description: t("subtitle"),
    alternates: {
      languages: {
        en: "/en",
        nl: "/nl",
      },
    },
    openGraph: {
      type: "website",
      locale: "en_NL",
      url: "https://hatecheck.nl",
      siteName: "HateCheck",
      title: "HateCheck — AI-Powered Antisemitism Detection Platform",
      description:
        "Detect, classify, and respond to antisemitism with AI-powered intelligence grounded in IHRA standards and Dutch law.",
    },
    twitter: {
      card: "summary_large_image",
      title: "HateCheck — AI-Powered Antisemitism Detection Platform",
      description:
        "Detect, classify, and respond to antisemitism with AI-powered intelligence grounded in IHRA standards and Dutch law.",
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "nl")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "HateCheck",
            url: "https://hatecheck.nl",
            description:
              "AI-powered intelligence platform for detecting and classifying antisemitism and hate speech.",
            email: "info@israelis.nl",
            foundingDate: "2024",
            areaServed: "Europe",
            nonprofitStatus: "NonprofitType",
          }),
        }}
      />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
