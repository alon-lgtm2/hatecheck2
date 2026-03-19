/**
 * Reusable sub-page header component - Airspace style.
 * Dark background with overlay, centered white text.
 * Used by product, standards, about, contact, etc. pages.
 * The homepage builds its own hero inline.
 */

interface PageHeaderProps {
  label: string;
  title: string;
  subtitle: string;
}

export default function PageHeader({ label, title, subtitle }: PageHeaderProps) {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #1B1A2B 0%, #2D2B3E 100%)",
        paddingTop: "160px",
        paddingBottom: "80px",
        paddingLeft: "24px",
        paddingRight: "24px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <p
          className="section-label"
          style={{
            marginBottom: "16px",
            color: "rgba(255,255,255,0.6)",
            fontSize: "11px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.25em",
          }}
        >
          {label}
        </p>
        <h2
          style={{
            fontSize: "clamp(28px, 5vw, 40px)",
            fontWeight: 400,
            color: "#FFFFFF",
            lineHeight: 1.3,
            marginBottom: "20px",
            letterSpacing: "1px",
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.7,
            maxWidth: "640px",
            margin: "0 auto",
          }}
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
}
