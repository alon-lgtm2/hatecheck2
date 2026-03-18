import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home.hero" });
  return {
    title: "HateCheck — AI-Powered Antisemitism Detection Platform",
    description: t("subtitle"),
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  const features = [
    {
      step: 1,
      title: t("howItWorks.step1Title"),
      desc: t("howItWorks.step1Desc"),
    },
    {
      step: 2,
      title: t("howItWorks.step2Title"),
      desc: t("howItWorks.step2Desc"),
    },
    {
      step: 3,
      title: t("howItWorks.step3Title"),
      desc: t("howItWorks.step3Desc"),
    },
    {
      step: 4,
      title: t("howItWorks.step4Title"),
      desc: t("howItWorks.step4Desc"),
    },
    {
      step: 5,
      title: t("howItWorks.step5Title"),
      desc: t("howItWorks.step5Desc"),
    },
  ];

  const tiers = [
    {
      num: 1,
      cls: t("tiers.tier1Class"),
      desc: t("tiers.tier1Desc"),
      response: t("tiers.tier1Response"),
      color: "#10B981",
    },
    {
      num: 2,
      cls: t("tiers.tier2Class"),
      desc: t("tiers.tier2Desc"),
      response: t("tiers.tier2Response"),
      color: "#F59E0B",
    },
    {
      num: 3,
      cls: t("tiers.tier3Class"),
      desc: t("tiers.tier3Desc"),
      response: t("tiers.tier3Response"),
      color: "#F97316",
    },
    {
      num: 4,
      cls: t("tiers.tier4Class"),
      desc: t("tiers.tier4Desc"),
      response: t("tiers.tier4Response"),
      color: "#EF4444",
    },
    {
      num: 5,
      cls: t("tiers.tier5Class"),
      desc: t("tiers.tier5Desc"),
      response: t("tiers.tier5Response"),
      color: "#991B1B",
    },
  ];

  const stats = [
    { value: "97.3%", label: t("hero.stat1Label") },
    { value: "84,000+", label: t("hero.stat2Label") },
    { value: "4", label: "Legal Standards" },
    { value: "5", label: "Severity Tiers" },
    { value: "2", label: t("hero.stat3Label") },
  ];

  const frameworks = [
    {
      title: "IHRA Working Definition",
      role: "The internationally recognized baseline for identifying antisemitism across institutional, media, and public discourse.",
    },
    {
      title: "The Nexus Document",
      role: "Distinguishes legitimate criticism of Israel from antisemitism through contextual analysis.",
    },
    {
      title: "Jerusalem Declaration (JDA)",
      role: "Academic framework providing nuanced guidelines for complex edge cases.",
    },
    {
      title: "Dutch Penal Code",
      role: "Articles 137c, 137d, and 137e — the legal basis for criminal hate speech prosecution in the Netherlands.",
    },
  ];

  return (
    <>
      {/* ── SECTION 1: HERO ── */}
      <section
        id="intro"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "120px 24px 80px",
        }}
      >
        <Image
          src="/hatecheck-logo.svg"
          alt="HateCheck"
          width={240}
          height={80}
          priority
          style={{
            filter: "brightness(0) invert(1)",
            marginBottom: "48px",
            width: "240px",
            height: "auto",
          }}
        />
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 300,
            color: "#FFFFFF",
            maxWidth: "800px",
            lineHeight: 1.3,
            marginBottom: "24px",
          }}
        >
          Turn Online Hate into Enforceable Action
        </h1>
        <p
          style={{
            fontSize: "17px",
            color: "rgba(255,255,255,0.65)",
            maxWidth: "640px",
            lineHeight: 1.7,
            marginBottom: "40px",
          }}
        >
          {t("hero.subtitle")}
        </p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "48px",
          }}
        >
          <a href="#platform" className="btn-primary">
            {t("hero.cta1")}
          </a>
          <Link href={`/${locale}/contact`} className="btn-outline">
            {t("hero.cta2")}
          </Link>
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.3)",
            fontSize: "24px",
            animation: "pulse 2s ease-in-out infinite",
          }}
        >
          &#9660;
        </div>
      </section>

      {/* ── SECTION 2: INTRODUCTION SPOTLIGHT ── */}
      <section
        id="intro-detail"
        style={{
          padding: "120px 24px",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <div className="spotlight">
          <div className="content">
            <p className="section-label" style={{ marginBottom: "16px" }}>
              THE PLATFORM
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 36px)",
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: "24px",
                lineHeight: 1.2,
              }}
            >
              Detect, Classify, and Act on Antisemitism
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.7,
                marginBottom: "16px",
              }}
            >
              HateCheck is an AI-powered OSINT intelligence platform that helps
              individuals and organizations detect, classify, document, and
              respond to antisemitism — with a specific focus on Dutch legal
              jurisdiction.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.7,
                marginBottom: "32px",
              }}
            >
              Paste any URL. The system scans, verifies, and cross-references
              against Dutch and European sources, then classifies content through
              four international standards.
            </p>
            <Link
              href={`/${locale}/product`}
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#3B82F6",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              Learn More &rarr;
            </Link>
          </div>
          <div className="image">
            <div className="screenshot-frame">
              <Image
                src="/images/screenshot1.png"
                alt="HateCheck Source Intake"
                width={640}
                height={400}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: FEATURES GRID ── */}
      <section
        id="platform"
        style={{
          padding: "120px 24px",
          maxWidth: "1280px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p className="section-label" style={{ marginBottom: "16px" }}>
          5-STEP INVESTIGATION
        </p>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 36px)",
            fontWeight: 700,
            color: "#FFFFFF",
            marginBottom: "64px",
          }}
        >
          From Detection to Enforcement
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginBottom: "48px",
          }}
        >
          {features.map((f) => (
            <div
              key={f.step}
              className="glass-card"
              style={{ padding: "32px", textAlign: "center" }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                }}
              >
                {f.step}
              </div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginBottom: "12px",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.6,
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
        <Link
          href={`/${locale}/product`}
          style={{
            fontSize: "14px",
            fontWeight: 600,
            color: "#3B82F6",
            textDecoration: "none",
          }}
        >
          View Full Platform &rarr;
        </Link>
      </section>

      {/* ── SECTION 4: STATS BAR ── */}
      <section
        style={{
          background: "rgba(255,255,255,0.03)",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div
          className="stats-bar"
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="stat-item"
              style={{
                flex: "1 1 160px",
                borderRight:
                  i < stats.length - 1
                    ? "1px solid rgba(255,255,255,0.1)"
                    : "none",
              }}
            >
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 5: SCREENSHOT SHOWCASE ── */}
      <section
        id="showcase"
        style={{
          padding: "120px 24px",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <p className="section-label" style={{ marginBottom: "16px" }}>
            SEE IT IN ACTION
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 36px)",
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            A Complete Investigation in Five Steps
          </h2>
        </div>

        {/* Spotlight 1: Verify */}
        <div className="spotlight" style={{ marginBottom: "100px" }}>
          <div className="content">
            <p className="section-label" style={{ marginBottom: "12px" }}>
              STEP 2
            </p>
            <h3
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: "16px",
              }}
            >
              Verify &amp; Corroborate
            </h3>
            <p
              style={{
                fontSize: "17px",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.7,
              }}
            >
              Review corroborated intelligence from multiple sources. Confirm
              event details, refine scope, and lock in the analysis before
              classification begins.
            </p>
          </div>
          <div className="image">
            <div className="screenshot-frame">
              <Image
                src="/images/screenshot3.png"
                alt="HateCheck Verify Step"
                width={640}
                height={400}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </div>

        {/* Spotlight 2: Classification (reverse) */}
        <div className="spotlight reverse" style={{ marginBottom: "100px" }}>
          <div className="content">
            <p className="section-label" style={{ marginBottom: "12px" }}>
              STEP 4
            </p>
            <h3
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: "16px",
              }}
            >
              Forensic Classification
            </h3>
            <p
              style={{
                fontSize: "17px",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.7,
              }}
            >
              The system produces a full incident summary with tier assignment,
              confidence score, evidence mapping, and an executive summary
              suitable for institutional reporting.
            </p>
          </div>
          <div className="image">
            <div className="screenshot-frame">
              <Image
                src="/images/screenshot5.png"
                alt="HateCheck Classification"
                width={640}
                height={400}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </div>

        {/* Spotlight 3: Action */}
        <div className="spotlight">
          <div className="content">
            <p className="section-label" style={{ marginBottom: "12px" }}>
              STEP 5
            </p>
            <h3
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: "16px",
              }}
            >
              Take Enforceable Action
            </h3>
            <p
              style={{
                fontSize: "17px",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.7,
              }}
            >
              Prioritized next steps with one-click letter drafting for every
              relevant authority — from platform abuse teams to Dutch law
              enforcement and the public prosecutor.
            </p>
          </div>
          <div className="image">
            <div className="screenshot-frame">
              <Image
                src="/images/screenshot6.png"
                alt="HateCheck Action Engine"
                width={640}
                height={400}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: TIER SYSTEM ── */}
      <section
        id="tiers"
        style={{
          padding: "120px 24px",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="section-label" style={{ marginBottom: "16px" }}>
            {t("tiers.label")}
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 36px)",
              fontWeight: 700,
              color: "#FFFFFF",
              marginBottom: "16px",
            }}
          >
            The HateCheck Index
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.65)",
              maxWidth: "640px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            A 5-tier severity scale. One shared framework for triage,
            documentation, and response.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {tiers.map((tier) => (
            <div
              key={tier.num}
              className="glass-card tier-row"
              style={{
                padding: "20px 28px",
                display: "flex",
                alignItems: "center",
                gap: "24px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  minWidth: "80px",
                }}
              >
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: tier.color,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    whiteSpace: "nowrap",
                  }}
                >
                  Tier {tier.num}
                </span>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    marginBottom: "4px",
                  }}
                >
                  {tier.cls}
                </div>
                <div
                  className="tier-desc"
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.5,
                  }}
                >
                  {tier.desc}
                </div>
              </div>
              <div
                className="tier-response"
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.4)",
                  textAlign: "right",
                  minWidth: "200px",
                  flexShrink: 0,
                }}
              >
                {tier.response}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 7: STANDARDS ── */}
      <section
        id="standards"
        style={{
          padding: "120px 24px",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="section-label" style={{ marginBottom: "16px" }}>
            METHODOLOGY
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 36px)",
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            Grounded in International Standards
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginBottom: "48px",
          }}
        >
          {frameworks.map((fw) => (
            <div
              key={fw.title}
              className="glass-card"
              style={{ padding: "32px" }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginBottom: "12px",
                }}
              >
                {fw.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.6,
                }}
              >
                {fw.role}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            fontSize: "15px",
            color: "rgba(255,255,255,0.4)",
            marginBottom: "24px",
            fontStyle: "italic",
          }}
        >
          IHRA anchors &rarr; Nexus checks &rarr; JDA refines &rarr; Dutch law
          maps
        </p>
        <div style={{ textAlign: "center" }}>
          <Link
            href={`/${locale}/standards`}
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#3B82F6",
              textDecoration: "none",
            }}
          >
            Read the Standards &rarr;
          </Link>
        </div>
      </section>

      {/* ── SECTION 8: CTA ── */}
      <section
        id="contact"
        style={{
          padding: "120px 24px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 36px)",
            fontWeight: 700,
            color: "#FFFFFF",
            marginBottom: "20px",
            maxWidth: "700px",
            margin: "0 auto 20px",
          }}
        >
          Interested in What HateCheck Can Do?
        </h2>
        <p
          style={{
            fontSize: "17px",
            color: "rgba(255,255,255,0.65)",
            marginBottom: "40px",
            maxWidth: "580px",
            margin: "0 auto 40px",
            lineHeight: 1.7,
          }}
        >
          Request a demo, explore partnership opportunities, or learn more about
          our approach.
        </p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link href={`/${locale}/contact`} className="btn-primary">
            Get in Touch
          </Link>
          <a
            href="https://app.hatecheck.org"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Open Live Platform
          </a>
        </div>
      </section>

      {/* ── SECTION 9: QUOTE ── */}
      <section
        style={{
          padding: "80px 24px",
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <blockquote
          style={{
            fontSize: "18px",
            fontStyle: "italic",
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.7,
            marginBottom: "16px",
          }}
        >
          &ldquo;{t("quote.text")}&rdquo;
        </blockquote>
        <cite
          style={{
            fontSize: "13px",
            color: "rgba(255,255,255,0.3)",
            fontStyle: "normal",
            fontWeight: 600,
            letterSpacing: "0.05em",
          }}
        >
          {t("quote.attribution")}
        </cite>
      </section>

      {/* ── SECTION 10: LEGAL DISCLAIMER ── */}
      <section
        style={{
          padding: "40px 24px 80px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            color: "rgba(255,255,255,0.4)",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          HateCheck provides general information and is not a substitute for
          legal advice.
        </p>
      </section>

      {/* Responsive styles for tier rows and stats */}
      <style>{`
        @media (max-width: 768px) {
          .tier-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 8px !important;
          }
          .tier-response {
            text-align: left !important;
            min-width: 0 !important;
          }
          .stats-bar {
            flex-direction: column !important;
          }
          .stats-bar .stat-item {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }
          .stats-bar .stat-item:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </>
  );
}
