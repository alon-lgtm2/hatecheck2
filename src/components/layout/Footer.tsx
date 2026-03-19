"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";

function FooterLanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const switchLocale = (l: string) =>
    router.push(pathname.replace(`/${locale}`, `/${l}`));

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      {["en", "nl"].map((l, i) => (
        <span key={l} style={{ display: "flex", alignItems: "center" }}>
          {i > 0 && (
            <span
              style={{
                marginRight: "8px",
                color: "rgba(255,255,255,0.3)",
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
              color: locale === l ? "#FFFFFF" : "rgba(255,255,255,0.65)",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => {
              if (locale !== l) e.currentTarget.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              if (locale !== l)
                e.currentTarget.style.color = "rgba(255,255,255,0.65)";
            }}
          >
            {l.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const locale = useLocale();

  const footerLinks = [
    { key: "about", href: `/${locale}/about` },
    { key: "product", href: `/${locale}/product` },
    { key: "standards", href: `/${locale}/standards` },
    { key: "contact", href: `/${locale}/contact` },
  ];

  const linkStyle: React.CSSProperties = {
    fontSize: "13px",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.65)",
    textDecoration: "none",
    transition: "color 0.2s",
    padding: "0 16px",
  };

  return (
    <footer
      style={{
        background: "#1B1A2B",
      }}
    >
      {/* Main footer content */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "50px 64px 30px",
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "0.2em",
            color: "#FFFFFF",
            marginBottom: "24px",
          }}
        >
          HATECHECK
        </div>

        {/* Footer nav links */}
        <nav
          className="footer-nav"
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "24px",
          }}
        >
          {footerLinks.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              style={linkStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.65)";
              }}
            >
              {tNav(item.key)}
            </Link>
          ))}
        </nav>

        {/* Language switcher */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <FooterLanguageSwitcher />
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "20px 64px",
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontSize: "13px",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          &copy; {new Date().getFullYear()} HateCheck. A not-for-profit
          initiative.
        </span>
      </div>

      <style jsx global>{`
        @media (max-width: 639px) {
          .footer-nav {
            flex-direction: column !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </footer>
  );
}
