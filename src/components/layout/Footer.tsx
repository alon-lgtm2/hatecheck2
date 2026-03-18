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

  const pageLinks = [
    { key: "home", href: `/${locale}` },
    { key: "product", href: `/${locale}/product` },
    { key: "standards", href: `/${locale}/standards` },
    { key: "about", href: `/${locale}/about` },
    { key: "organizations", href: `/${locale}/organizations` },
    { key: "resources", href: `/${locale}/resources` },
    { key: "reports", href: `/${locale}/reports` },
    { key: "contact", href: `/${locale}/contact` },
  ];

  const linkStyle: React.CSSProperties = {
    fontSize: "14px",
    color: "rgba(255,255,255,0.65)",
    textDecoration: "none",
    transition: "color 0.2s",
    display: "block",
    padding: "4px 0",
  };

  return (
    <footer
      style={{
        background: "#0F1B2E",
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div
        className="footer-main"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "64px 64px 40px",
          display: "flex",
          gap: "64px",
        }}
      >
        {/* Left column */}
        <div style={{ flex: "1 1 400px", minWidth: 0 }}>
          <div
            style={{
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#FFFFFF",
              marginBottom: "12px",
            }}
          >
            HATECHECK
          </div>
          <div
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.65)",
              marginBottom: "20px",
              letterSpacing: "0.05em",
            }}
          >
            {t("tagline")}
          </div>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.65)",
              marginBottom: "20px",
              maxWidth: "400px",
            }}
          >
            {t("description")}
          </p>
          <Link
            href={`/${locale}/about`}
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#3B82F6",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#3B82F6";
            }}
          >
            Learn More &rarr;
          </Link>
        </div>

        {/* Right column */}
        <div
          className="footer-right"
          style={{
            flex: "1 1 500px",
            minWidth: 0,
            display: "flex",
            gap: "48px",
          }}
        >
          {/* Contact info */}
          <div style={{ flex: "1 1 200px" }}>
            <h4
              style={{
                fontSize: "11px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.25em",
                color: "#FFFFFF",
                marginBottom: "16px",
              }}
            >
              Contact
            </h4>
            <a
              href="mailto:info@israelis.nl"
              style={{
                ...linkStyle,
                marginBottom: "8px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.65)";
              }}
            >
              info@israelis.nl
            </a>
            <p
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.6,
                margin: "8px 0",
              }}
            >
              {t("location")} &middot; European Union
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              Not-for-profit initiative
            </p>

            <div style={{ marginTop: "20px" }}>
              <FooterLanguageSwitcher />
            </div>
          </div>

          {/* Page links - column 1 */}
          <div style={{ flex: "1 1 120px" }}>
            <h4
              style={{
                fontSize: "11px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.25em",
                color: "#FFFFFF",
                marginBottom: "16px",
              }}
            >
              Pages
            </h4>
            {pageLinks.slice(0, 4).map((item) => (
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
          </div>

          {/* Page links - column 2 */}
          <div style={{ flex: "1 1 120px" }}>
            <h4
              style={{
                fontSize: "11px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.25em",
                color: "#FFFFFF",
                marginBottom: "16px",
                visibility: "hidden",
              }}
            >
              More
            </h4>
            {pageLinks.slice(4).map((item) => (
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
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="footer-bottom"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "24px 64px",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <span
          style={{
            fontSize: "12px",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          &copy; {new Date().getFullYear()} HateCheck. A not-for-profit
          initiative.
        </span>
        <span
          style={{
            fontSize: "12px",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          Design adapted from{" "}
          <a
            href="https://html5up.net/stellar"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgba(255,255,255,0.4)",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            Stellar
          </a>{" "}
          by HTML5 UP
        </span>
      </div>

      <style jsx global>{`
        @media (max-width: 900px) {
          .footer-main {
            flex-direction: column !important;
            gap: 40px !important;
            padding: 48px 32px 32px !important;
          }
          .footer-right {
            flex-wrap: wrap !important;
            gap: 32px !important;
          }
          .footer-bottom {
            padding: 20px 32px !important;
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
        @media (max-width: 639px) {
          .footer-main {
            padding: 40px 24px 24px !important;
          }
          .footer-bottom {
            padding: 16px 24px !important;
          }
        }
      `}</style>
    </footer>
  );
}
