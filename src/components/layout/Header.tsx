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
    <div className="flex items-center">
      {["en", "nl"].map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && (
            <span
              className="mx-2"
              style={{ color: "#E5E7EB", fontSize: "11px" }}
            >
              |
            </span>
          )}
          <button
            onClick={() => switchLocale(l)}
            style={{
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: locale === l ? "#0A1628" : "#9CA3AF",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => {
              if (locale !== l) e.currentTarget.style.color = "#0A1628";
            }}
            onMouseLeave={(e) => {
              if (locale !== l) e.currentTarget.style.color = "#9CA3AF";
            }}
          >
            {l.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const isActive = useIsActive(href);
  return (
    <Link
      href={href}
      style={{
        fontSize: "11px",
        fontWeight: 500,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: isActive ? "#0A1628" : "#9CA3AF",
        textDecoration: "none",
        padding: "0 16px",
        transition: "color 0.15s",
      }}
      onMouseEnter={(e) => {
        if (!isActive) e.currentTarget.style.color = "#0A1628";
      }}
      onMouseLeave={(e) => {
        if (!isActive) e.currentTarget.style.color = "#9CA3AF";
      }}
    >
      {label.toUpperCase()}
    </Link>
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
        fontWeight: 500,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: isActive ? "#0A1628" : "#9CA3AF",
        textDecoration: "none",
        padding: "16px 0",
        borderBottom: "1px solid #E5E7EB",
        transition: "color 0.15s",
      }}
      onMouseEnter={(e) => {
        if (!isActive) e.currentTarget.style.color = "#0A1628";
      }}
      onMouseLeave={(e) => {
        if (!isActive) e.currentTarget.style.color = "#9CA3AF";
      }}
    >
      {label.toUpperCase()}
    </Link>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useTranslations("nav");
  const locale = useLocale();
  const navItems = useNavItems();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const labels: Record<string, string> = {
    home: t("home"),
    product: t("product"),
    standards: t("standards"),
    about: t("about"),
    contact: t("contact"),
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "#FFFFFF",
          borderBottom: "1px solid #E5E7EB",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 64px",
            height: "56px",
          }}
          className="header-inner"
        >
          {/* Logo */}
          <Link
            href={`/${locale}`}
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#0A1628",
              textDecoration: "none",
            }}
          >
            HATECHECK
          </Link>

          {/* Desktop nav */}
          <nav className="desktop-nav" style={{ display: "flex", alignItems: "center" }}>
            {navItems.map((item) => (
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
              color: "#0A1628",
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
              {navItems.map((item) => (
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
