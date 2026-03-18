"use client";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#FFFFFF",
        borderTop: "1px solid #E5E7EB",
        marginTop: "auto",
      }}
    >
      <div
        className="footer-inner"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "40px 64px",
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

        <a
          href="mailto:info@israelis.nl"
          style={{
            fontSize: "11px",
            color: "#9CA3AF",
            letterSpacing: "0.05em",
            textDecoration: "underline",
            textUnderlineOffset: "4px",
            textDecorationThickness: "1px",
            transition: "color 0.15s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#0A1628";
            e.currentTarget.style.textDecorationThickness = "2px";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#9CA3AF";
            e.currentTarget.style.textDecorationThickness = "1px";
          }}
        >
          info@israelis.nl
        </a>
      </div>

      <style jsx global>{`
        @media (max-width: 639px) {
          .footer-inner {
            flex-direction: column !important;
            gap: 12px !important;
            align-items: flex-start !important;
            padding: 32px 24px !important;
          }
        }
      `}</style>
    </footer>
  );
}
