import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/sections/Hero";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About - HateCheck",
    description:
      "Learn about HateCheck's mission, origin, and commitment to fighting antisemitism as a not-for-profit initiative.",
  };
}

const platformCards = [
  {
    title: "Assess Incidents",
    desc: "Helps users assess incidents such as posts, statements and events against recognised standards for antisemitism and hate.",
  },
  {
    title: "Organise Evidence",
    desc: "Organises evidence and patterns so that concerns can be raised with employers, institutions, regulators, platforms and authorities in a structured way.",
  },
  {
    title: "Draft Responses",
    desc: "Drafts careful, lawful letters and memos that users can adapt and send themselves, always under human control.",
  },
];

const phases = [
  {
    phase: "Phase 1",
    title: "Netherlands",
    desc: "Foundation. Active. Full Dutch legal framework, OSINT sources, bilingual platform.",
  },
  {
    phase: "Phase 2",
    title: "Europe",
    desc: "2025\u20132026. Expansion across EU member states. Multi-jurisdiction legal mapping.",
  },
  {
    phase: "Phase 3",
    title: "Global",
    desc: "2026+. Worldwide deployment. Additional languages, legal frameworks, and monitoring networks.",
  },
];

const values = [
  {
    title: "Evidence-Based",
    desc: "Every classification backed by verifiable sources and documented reasoning.",
  },
  {
    title: "Legally Grounded",
    desc: "Mapped to Dutch Penal Code and international frameworks. Careful language always.",
  },
  {
    title: "Transparent",
    desc: "Users see the AI prompts. Every classification includes full reasoning chain.",
  },
  {
    title: "Human Control",
    desc: "AI drafts, humans decide. Nothing is sent or published automatically.",
  },
  {
    title: "Privacy by Design",
    desc: "No tracking, no analytics. Session-only data. Data isolation between organisations.",
  },
  {
    title: "Not-for-Profit",
    desc: "Open to institutional partnerships and sponsorship. No commercial agenda.",
  },
];

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div>
      <PageHeader
        label="ABOUT"
        title="About HateCheck"
        subtitle="An independent initiative to democratise the fight against antisemitism using legal, legitimate, and transparent means."
      />

      {/* Mission */}
      <section style={{ padding: "100px 0" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px" }}>
          <p className="section-label" style={{ marginBottom: "16px" }}>
            OUR MISSION
          </p>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: 400,
              color: "#1B1A2B",
              marginBottom: "40px",
            }}
          >
            Turn Sunlight and Clarity into Action
          </h2>
          <div style={{ maxWidth: "768px" }}>
            <p
              style={{
                fontSize: "15px",
                color: "#6B7280",
                lineHeight: 1.7,
              }}
            >
              Make it easy for anyone to recognise antisemitism, document it
              properly, and respond through the right channels. HateCheck
              leverages Open Source Intelligence and AI to fight hatred, bigotry,
              and antisemitism. We believe that light is the best disinfectant
              &mdash; bringing hidden threats into view to stop them.
            </p>
          </div>
        </div>
      </section>

      {/* What the Platform Does */}
      <section style={{ padding: "100px 0", backgroundColor: "#F8F9FA" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px" }}>
          <p className="section-label" style={{ marginBottom: "16px" }}>
            WHAT THE PLATFORM DOES
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
              marginBottom: "40px",
            }}
          >
            {platformCards.map((card, i) => (
              <div key={i} className="glass-card" style={{ padding: "32px" }}>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 400,
                    color: "#1B1A2B",
                    marginBottom: "8px",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#6B7280",
                    lineHeight: 1.7,
                  }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
          <p
            style={{
              fontSize: "15px",
              color: "#6B7280",
              lineHeight: 1.7,
              maxWidth: "768px",
            }}
          >
            HateCheck runs in the browser and works on both desktop and mobile,
            so people and organisations can use it wherever they are.
          </p>
        </div>
      </section>

      {/* Why This Matters */}
      <section style={{ padding: "100px 0" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px" }}>
          <p className="section-label" style={{ marginBottom: "16px" }}>
            THE IMPERATIVE
          </p>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: 400,
              color: "#1B1A2B",
              marginBottom: "40px",
            }}
          >
            Why This Matters
          </h2>
          <div style={{ maxWidth: "768px" }}>
            <p
              style={{
                fontSize: "15px",
                color: "#6B7280",
                lineHeight: 1.7,
                marginBottom: "20px",
              }}
            >
              The operational environment regarding antisemitic threats in the
              Netherlands has undergone a fundamental transformation. Antisemitic
              incidents surged 145% in 2023 and hit a historic high of 421 in
              2024 &mdash; a 305% increase above the decade average. The
              November 2024 Amsterdam riots saw coordinated physical attacks
              organised via Telegram. In March 2026, a synagogue in Rotterdam
              was targeted in an arson attack. The NCTV maintains the national
              threat level at Level 4.
            </p>
            <p
              style={{
                fontSize: "15px",
                color: "#6B7280",
                lineHeight: 1.7,
              }}
            >
              Meanwhile, 74% of Jewish Dutch citizens who experience
              antisemitism do not report it. Of the 880 police cases in 2023,
              only 181 advanced to prosecution. Manual methodologies are
              fundamentally inadequate. The resolution requires AI-powered,
              legally calibrated intelligence infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section style={{ padding: "100px 0", backgroundColor: "#F8F9FA" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px" }}>
          <p className="section-label" style={{ marginBottom: "16px" }}>
            ORIGIN
          </p>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: 400,
              color: "#1B1A2B",
              marginBottom: "40px",
            }}
          >
            Who We Are
          </h2>
          <div style={{ maxWidth: "768px" }}>
            <p
              style={{
                fontSize: "15px",
                color: "#6B7280",
                lineHeight: 1.7,
              }}
            >
              HateCheck was created by Dutch and Israeli entrepreneurs as a
              not-for-profit effort to support the wider community: giving
              communities and institutions better tools, keeping the response
              within democratic and legal boundaries, and helping more people
              participate in keeping public life free from bigotry and
              incitement.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section style={{ padding: "100px 0" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px" }}>
          <p className="section-label" style={{ marginBottom: "16px" }}>
            VISION
          </p>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: 400,
              color: "#1B1A2B",
              marginBottom: "40px",
            }}
          >
            Roadmap
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
          >
            {phases.map((phase, i) => (
              <div
                key={i}
                className="glass-card"
                style={{ padding: "32px", position: "relative" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "24px",
                  }}
                >
                  <span
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      backgroundColor: "#2563EB",
                      display: "inline-block",
                    }}
                  />
                  <p className="section-label">{phase.phase}</p>
                </div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 400,
                    color: "#1B1A2B",
                    marginBottom: "16px",
                  }}
                >
                  {phase.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#6B7280",
                    lineHeight: 1.7,
                  }}
                >
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "100px 0", backgroundColor: "#F8F9FA" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px" }}>
          <p className="section-label" style={{ marginBottom: "16px" }}>
            VALUES
          </p>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: 400,
              color: "#1B1A2B",
              marginBottom: "64px",
            }}
          >
            What We Stand For
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "24px",
            }}
          >
            {values.map((v, i) => (
              <div key={i} className="glass-card" style={{ padding: "32px" }}>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 400,
                    color: "#1B1A2B",
                    marginBottom: "8px",
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#6B7280",
                    lineHeight: 1.7,
                  }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 0" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: 400,
              color: "#1B1A2B",
              marginBottom: "16px",
            }}
          >
            Work With Us
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "#6B7280",
              marginBottom: "40px",
            }}
          >
            Partner organizations, researchers, and funders &mdash; we want to
            hear from you.
          </p>
          <Link href={`/${locale}/contact`} className="btn-main">
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
