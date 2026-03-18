"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X } from "lucide-react";
import { useNavItems, useIsActive } from "./Navigation";

function Logo() {
  const locale = useLocale();
  return (
    <Link href={`/${locale}`} className="flex items-center group">
      <Image
        src="/hatecheck-logo.svg"
        alt="HateCheck"
        width={152}
        height={18}
        className="h-[18px] w-auto opacity-90 group-hover:opacity-100 transition-opacity"
        priority
      />
    </Link>
  );
}

function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const switchLocale = (l: string) => router.push(pathname.replace(`/${locale}`, `/${l}`));

  return (
    <div className="flex items-center gap-0 border border-[#C6D2E0] rounded-sm overflow-hidden">
      {["en", "nl"].map((l, i) => (
        <button
          key={l}
          onClick={() => switchLocale(l)}
          className={`px-2.5 py-1 text-[11px] font-mono transition-colors ${
            locale === l
              ? "bg-[#1A52C8] text-white"
              : "text-[#4D6680] hover:bg-[#EFF3F8] hover:text-[#0C1B2E]"
          } ${i === 0 ? "border-r border-[#C6D2E0]" : ""}`}
          style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.05em" }}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useTranslations("nav");
  const navItems = useNavItems();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const labels: Record<string, string> = {
    home: t("home"), product: t("product"), standards: t("standards"),
    organizations: t("organizations"), resources: t("resources"),
    reports: t("reports"), about: t("about"), contact: t("contact"),
  };

  return (
    <>
      {/* Institutional accent stripe */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-[#1A52C8] z-50" />

      <header
        className={`fixed top-[3px] left-0 right-0 z-40 transition-all duration-200 ${
          scrolled
            ? "bg-white/97 backdrop-blur-sm shadow-gov border-b border-[#DDE4EE]"
            : "bg-[#F8FAFB] border-b border-[#DDE4EE]"
        }`}
      >
        {/* Sub-header: jurisdiction bar */}
        <div className="hidden lg:block border-b border-[#DDE4EE] bg-[#EFF3F8]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 h-7 flex items-center justify-between">
            <span
              className="text-[10px] text-[#8099B3] tracking-widest"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.14em" }}
            >
              🇳🇱 NETHERLANDS · EUROPEAN UNION — NOT-FOR-PROFIT INITIATIVE
            </span>
            <div className="flex items-center gap-4">
              <a
                href="mailto:info@israelis.nl"
                className="text-[10px] text-[#8099B3] hover:text-[#1A52C8] transition-colors"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em" }}
              >
                INFO@ISRAELIS.NL
              </a>
              <span className="text-[#DDE4EE]">|</span>
              <a
                href="https://hate-check-03870d15.base44.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-[#1A52C8] font-medium hover:text-[#1440A3] transition-colors"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em" }}
              >
                OPEN PLATFORM ↗
              </a>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <Logo />

            <nav className="hidden lg:flex items-center">
              {navItems.map((item) => (
                <NavLink key={item.key} href={item.href} label={labels[item.key] || item.key} />
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <LanguageSwitcher />
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-[#8099B3] hover:text-[#0C1B2E]"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#F8FAFB] lg:hidden pt-20">
          <div className="flex flex-col h-full px-6 pb-8">
            <nav className="flex flex-col gap-0.5 flex-1 pt-4">
              {navItems.map((item) => (
                <MobileNavLink
                  key={item.key} href={item.href}
                  label={labels[item.key] || item.key}
                  onClick={() => setMobileOpen(false)}
                />
              ))}
            </nav>
            <div className="pt-6 border-t border-[#DDE4EE]">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const isActive = useIsActive(href);
  return (
    <Link
      href={href}
      className={`px-3 py-1.5 text-[11px] font-heading tracking-widest relative transition-colors ${
        isActive ? "text-[#1A52C8]" : "text-[#4D6680] hover:text-[#0C1B2E]"
      }`}
      style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em" }}
    >
      {label.toUpperCase()}
      {isActive && (
        <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#1A52C8]" />
      )}
    </Link>
  );
}

function MobileNavLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  const isActive = useIsActive(href);
  return (
    <Link
      href={href} onClick={onClick}
      className={`px-4 py-3 text-base font-heading tracking-wider border-l-2 transition-all ${
        isActive
          ? "text-[#1A52C8] border-[#1A52C8] bg-[#EFF3F8]"
          : "text-[#4D6680] border-transparent hover:text-[#0C1B2E] hover:bg-[#EFF3F8]"
      }`}
      style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em" }}
    >
      {label.toUpperCase()}
    </Link>
  );
}
