import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

function FooterLogo() {
  return (
    <div className="flex items-center">
      <Image
        src="/hatecheck-logo.svg"
        alt="HateCheck"
        width={160}
        height={20}
        className="h-5 w-auto"
        style={{ filter: "brightness(0) invert(1)" }}
      />
    </div>
  );
}

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const locale = useLocale();

  const quickLinks = [
    { label: nav("home"), href: `/${locale}` },
    { label: nav("about"), href: `/${locale}/about` },
    { label: nav("contact"), href: `/${locale}/contact` },
    { label: nav("resources"), href: `/${locale}/resources` },
  ];

  const platformLinks = [
    { label: nav("product"), href: `/${locale}/product` },
    { label: nav("standards"), href: `/${locale}/standards` },
    { label: nav("organizations"), href: `/${locale}/organizations` },
    { label: nav("reports"), href: `/${locale}/reports` },
  ];

  const legalLinks = [
    { label: t("privacy"), href: `/${locale}/privacy` },
    { label: t("terms"), href: `/${locale}/terms` },
  ];

  return (
    <footer className="bg-[#06111F] border-t border-[#0F2035] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <FooterLogo />
            <p
              className="mt-3 text-xs font-heading tracking-widest text-[#1A52C8]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.2em" }}
            >
              {t("tagline").toUpperCase()}
            </p>
            <p className="mt-4 text-sm text-[#3D5470] leading-relaxed">
              {t("description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-xs font-heading tracking-widest text-[#3D5470] mb-4"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.15em" }}
            >
              {t("quickLinks").toUpperCase()}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#6B87A3] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h3
              className="text-xs font-heading tracking-widest text-[#3D5470] mb-4"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.15em" }}
            >
              {t("platform").toUpperCase()}
            </h3>
            <ul className="space-y-2">
              {platformLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#6B87A3] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3
              className="text-xs font-heading tracking-widest text-[#3D5470] mb-4"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.15em" }}
            >
              {t("legal").toUpperCase()}
            </h3>
            <ul className="space-y-2 mb-6">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#6B87A3] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3
              className="text-xs font-heading tracking-widest text-[#3D5470] mb-3"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.15em" }}
            >
              {t("contactUs").toUpperCase()}
            </h3>
            <a
              href="mailto:info@israelis.nl"
              className="text-sm text-[#1A52C8] hover:text-[#4A7FD4] transition-colors"
            >
              info@israelis.nl
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#0F2035] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#3D5470]">
            {t("copyright")}
          </p>
          <div className="flex items-center gap-4 text-xs text-[#3D5470]">
            <span>🇳🇱 {t("location")}</span>
            <span className="text-[#0F2035]">|</span>
            <Link href={`/${locale}/privacy`} className="hover:text-[#6B87A3] transition-colors">
              {t("privacy")}
            </Link>
            <span className="text-[#0F2035]">|</span>
            <Link href={`/${locale}/terms`} className="hover:text-[#6B87A3] transition-colors">
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
