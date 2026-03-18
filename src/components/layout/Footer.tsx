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

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      style={{
        display: "block",
        fontSize: "13px",
        color: "#374151",
        textDecoration: "none",
        transition: "color 0.15s",
        marginBottom: "8px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#0A1628";
        e.currentTarget.style.textDecoration = "underline";
        e.currentTarget.style.textUnderlineOffset = "4px";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "#374151";
        e.currentTarget.style.textDecoration = "none";
      }}
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer
      style={{
        background: "#FFFFFF",
        borderTop: "1px solid #E5E7EB",
        marginTop: "auto",
      }}
    >
      {/* Top section */}
      <div
        className="footer-top"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "80px 64px 40px",
        }}
      >
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
            gap: "48px",
          }}
        >
          {/* Col 1: Brand */}
          <div>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.2em",
                color: "#0A1628",
                marginBottom: "12px",
              }}
            >
              HATECHECK
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "#9CA3AF",
                marginBottom: "8px",
              }}
            >
              {t("tagline")}
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "#9CA3AF",
                lineHeight: 1.6,
              }}
            >
              A not-for-profit initiative based in the Netherlands
            </p>
          </div>

          {/* Col 2: Platform */}
          <div>
            <p className="swiss-label" style={{ marginBottom: "16px" }}>
              {t("platform").toUpperCase()}
            </p>
            <FooterLink href={`/${locale}/product`}>
              {nav("product")}
            </FooterLink>
            <FooterLink href={`/${locale}/standards`}>
              {nav("standards")}
            </FooterLink>
            <FooterLink href={`/${locale}/organizations`}>
              {nav("organizations")}
            </FooterLink>
          </div>

          {/* Col 3: Resources */}
          <div>
            <p className="swiss-label" style={{ marginBottom: "16px" }}>
              RESOURCES
            </p>
            <FooterLink href={`/${locale}/resources`}>
              {nav("resources")}
            </FooterLink>
            <FooterLink href={`/${locale}/reports`}>
              {nav("reports")}
            </FooterLink>
            <FooterLink href={`/${locale}/about`}>
              {nav("about")}
            </FooterLink>
          </div>

          {/* Col 4: Contact & Legal */}
          <div>
            <p className="swiss-label" style={{ marginBottom: "16px" }}>
              {t("contactUs").toUpperCase()}
            </p>
            <a
              href="mailto:info@israelis.nl"
              style={{
                display: "block",
                fontSize: "13px",
                color: "#374151",
                textDecoration: "none",
                marginBottom: "24px",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#0A1628";
                e.currentTarget.style.textDecoration = "underline";
                e.currentTarget.style.textUnderlineOffset = "4px";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#374151";
                e.currentTarget.style.textDecoration = "none";
              }}
            >
              info@israelis.nl
            </a>

            <p className="swiss-label" style={{ marginBottom: "16px" }}>
              {t("legal").toUpperCase()}
            </p>
            <FooterLink href={`/${locale}/privacy`}>
              {t("privacy")}
            </FooterLink>
            <FooterLink href={`/${locale}/terms`}>
              {t("terms")}
            </FooterLink>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="footer-bottom"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "20px 64px",
          borderTop: "1px solid #E5E7EB",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontSize: "11px",
            color: "#9CA3AF",
            letterSpacing: "0.05em",
          }}
        >
          &copy; 2025 HateCheck
        </span>
        <FooterLanguageSwitcher />
      </div>

      <style jsx global>{`
        @media (max-width: 767px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .footer-top {
            padding: 48px 24px 32px !important;
          }
          .footer-bottom {
            padding: 16px 24px !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
          .footer-top {
            padding: 64px 32px 32px !important;
          }
          .footer-bottom {
            padding: 16px 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}
