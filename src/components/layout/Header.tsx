"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { useNavItems, useIsActive } from "./Navigation";

function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const switchLocale = (l: string) =>
    router.push(pathname.replace(`/${locale}`, `/${l}`));

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {["en", "nl", "de", "fr"].map((l, i) => (
        <span key={l} style={{ display: "flex", alignItems: "center" }}>
          {i > 0 && (
            <span
              style={{
                margin: "0 8px",
                color: "#D1D5DB",
                fontSize: "11px",
              }}
            >
              |
            </span>
          )}
          <button
            onClick={() => switchLocale(l)}
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: locale === l ? "#1B1A2B" : "#6B7280",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => {
              if (locale !== l) e.currentTarget.style.color = "#2563EB";
            }}
            onMouseLeave={(e) => {
              if (locale !== l) e.currentTarget.style.color = "#6B7280";
            }}
          >
            {l.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}

interface AnchorLinkProps {
  href: string;
  label: string;
}

function AnchorLink({ href, label }: AnchorLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      style={{
        fontSize: "12px",
        fontWeight: 600,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "#6B7280",
        textDecoration: "none",
        padding: "0 16px",
        transition: "color 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#2563EB";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "#6B7280";
      }}
    >
      {label.toUpperCase()}
    </a>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const isActive = useIsActive(href);
  return (
    <Link
      href={href}
      style={{
        fontSize: "12px",
        fontWeight: 600,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: isActive ? "#2563EB" : "#6B7280",
        textDecoration: "none",
        padding: "0 16px",
        transition: "color 0.2s",
      }}
      onMouseEnter={(e) => {
        if (!isActive) e.currentTarget.style.color = "#2563EB";
      }}
      onMouseLeave={(e) => {
        if (!isActive) e.currentTarget.style.color = "#6B7280";
      }}
    >
      {label.toUpperCase()}
    </Link>
  );
}

function MobileAnchorLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      style={{
        display: "block",
        fontSize: "14px",
        fontWeight: 600,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "#6B7280",
        textDecoration: "none",
        padding: "16px 0",
        borderBottom: "1px solid #E5E7EB",
        transition: "color 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#2563EB";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "#6B7280";
      }}
    >
      {label.toUpperCase()}
    </a>
  );
}

function MobileNavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  const isActive = useIsActive(href);
  return (
    <Link
      href={href}
      onClick={onClick}
      style={{
        display: "block",
        fontSize: "14px",
        fontWeight: 600,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: isActive ? "#2563EB" : "#6B7280",
        textDecoration: "none",
        padding: "16px 0",
        borderBottom: "1px solid #E5E7EB",
        transition: "color 0.2s",
      }}
      onMouseEnter={(e) => {
        if (!isActive) e.currentTarget.style.color = "#2563EB";
      }}
      onMouseLeave={(e) => {
        if (!isActive) e.currentTarget.style.color = "#6B7280";
      }}
    >
      {label.toUpperCase()}
    </Link>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const navItems = useNavItems();

  const isHomepage =
    pathname === `/${locale}` || pathname === `/${locale}/`;

  const anchorLinks = [
    { href: "#intro", label: "Introduction" },
    { href: "#platform", label: "Platform" },
    { href: "#tiers", label: "Tiers" },
    { href: "#standards", label: "Standards" },
    { href: "#contact", label: "Contact" },
  ];

  const labels: Record<string, string> = {
    home: t("home"),
    product: t("product"),
    standards: t("standards"),
    academy: t("academy"),
    about: t("about"),
    contact: t("contact"),
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: scrolled ? "#FFFFFF" : "transparent",
          boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.08)" : "none",
          borderBottom: scrolled
            ? "1px solid #E5E7EB"
            : "1px solid transparent",
          transition: "background 0.3s, box-shadow 0.3s, border-color 0.3s",
        }}
      >
        <div
          className="header-inner"
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 64px",
            height: "70px",
          }}
        >
          {/* Logo */}
          <Link
            href={`/${locale}`}
            style={{
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#1B1A2B",
              textDecoration: "none",
            }}
          >
            HATECHECK
          </Link>

          {/* Desktop nav */}
          <nav
            className="desktop-nav"
            style={{ display: "flex", alignItems: "center" }}
          >
            {isHomepage
              ? anchorLinks.map((item) => (
                  <AnchorLink
                    key={item.href}
                    href={item.href}
                    label={item.label}
                  />
                ))
              : navItems.map((item) => (
                  <NavLink
                    key={item.key}
                    href={item.href}
                    label={labels[item.key] || item.key}
                  />
                ))}
          </nav>

          {/* Desktop language switcher */}
          <div className="desktop-nav">
            <LanguageSwitcher />
          </div>

          {/* Mobile hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "22px",
              color: "#1B1A2B",
              padding: "4px",
            }}
          >
            {mobileOpen ? "\u2715" : "\u2630"}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 49,
            background: "#FFFFFF",
            paddingTop: "72px",
          }}
          className="mobile-overlay"
        >
          <div style={{ padding: "24px" }}>
            <nav>
              {isHomepage
                ? anchorLinks.map((item) => (
                    <MobileAnchorLink
                      key={item.href}
                      href={item.href}
                      label={item.label}
                      onClick={() => setMobileOpen(false)}
                    />
                  ))
                : navItems.map((item) => (
                    <MobileNavLink
                      key={item.key}
                      href={item.href}
                      label={labels[item.key] || item.key}
                      onClick={() => setMobileOpen(false)}
                    />
                  ))}
            </nav>
            <div style={{ paddingTop: "32px" }}>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}

      {/* Responsive styles */}
      <style jsx global>{`
        .desktop-nav {
          display: flex;
          align-items: center;
        }
        .mobile-menu-btn {
          display: none !important;
        }
        .mobile-overlay {
          display: block;
        }

        @media (max-width: 1023px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .header-inner {
            padding: 0 32px !important;
          }
        }

        @media (max-width: 639px) {
          .header-inner {
            padding: 0 24px !important;
          }
        }
      `}</style>
    </>
  );
}
