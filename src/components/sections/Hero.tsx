/**
 * Reusable sub-page header component.
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
        <p className="section-label" style={{ marginBottom: "16px" }}>
          {label}
        </p>
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.2,
            marginBottom: "20px",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: "17px",
            color: "rgba(255,255,255,0.65)",
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
