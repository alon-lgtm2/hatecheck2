import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ui/ContactForm";
import { tracks as academyTracks } from "@/lib/academy";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home.hero" });
  return {
    title: "HateCheck - AI-Powered Antisemitism Detection Platform",
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
  const ta = await getTranslations({ locale, namespace: "academy" });

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
    { value: "421", label: "INCIDENTS IN 2024" },
    { value: "305%", label: "ABOVE DECADE AVG" },
    { value: "4", label: "LEGAL STANDARDS" },
    { value: "5", label: "SEVERITY TIERS" },
    { value: "20+", label: "PARTNER ORGS" },
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
      role: "Articles 137c, 137d, and 137e - the legal basis for criminal hate speech prosecution in the Netherlands.",
    },
  ];

  const platformCards = [
    {
      num: "01",
      title: t("platform.card1Title"),
      desc: t("platform.card1Desc"),
    },
    {
      num: "02",
      title: t("platform.card2Title"),
      desc: t("platform.card2Desc"),
    },
    {
      num: "03",
      title: t("platform.card3Title"),
      desc: t("platform.card3Desc"),
    },
    {
      num: "04",
      title: t("platform.card4Title"),
      desc: t("platform.card4Desc"),
    },
  ];

  const cidiYearlyData = [
    { year: "2012-22", incidents: 138, label: "138/yr avg.", change: "", context: "Ten-year baseline", isAvg: true },
    { year: "2022", incidents: 155, label: "155", change: "", context: "Pre-October 7 baseline", isAvg: false },
    { year: "2023", incidents: 379, label: "379", change: "+145%", context: "October 7 aftermath; 60% of incidents occurred Oct-Dec", isAvg: false },
    { year: "2024", incidents: 421, label: "421", change: "+11%", context: "All-time record; highest in 40 years of CIDI monitoring", isAvg: false },
    { year: "2025 Q1", incidents: 440, label: "Trend continuing", change: "", context: "CIDI warns 2025 will likely break the record again", isAvg: false },
  ];

  const policeData = [
    { source: "Police-registered antisemitism cases", y2022: "549", y2023: "880", change: "+60%" },
    { source: "Cases involving violence", y2022: "28", y2023: "43", change: "+54%" },
    { source: "Cases involving threats", y2022: "54", y2023: "80", change: "+48%" },
    { source: "Cases advanced to prosecution (OM)", y2022: "94", y2023: "181", change: "+93%" },
  ];

  const broaderMetrics = [
    { metric: "Rise in public-space antisemitism (2024 vs. 2023)", figure: "+45%", source: "CIDI 2024 Monitor" },
    { metric: "Rise in vandalism against Jewish targets", figure: "+44%", source: "CIDI 2024 Monitor" },
    { metric: "Two-year increase above 10-year average", figure: "+305%", source: "CIDI 2024 Monitor" },
    { metric: "Jewish Europeans who encountered antisemitism in past year", figure: "96%", source: "EU FRA Survey, 2024" },
    { metric: "Victims who do not report antisemitic harassment", figure: "~72%", source: "EU FRA Survey, 2024" },
    { metric: "Jewish Dutch who considered emigrating (past 5 years)", figure: "30%", source: "EU FRA Netherlands, 2018" },
  ];

  const timelineEvents = [
    { date: "2022", title: "The Baseline", color: "#F59E0B", desc: "155 verified antisemitic incidents recorded by CIDI - roughly in line with the ten-year average of 138. Police register 549 cases. The threat level sits at 3 (Significant). A deceptive calm before what comes next." },
    { date: "2023", title: "The Inflection Point", color: "#EF4444", desc: "October 7 triggers a global surge. In the Netherlands, 60% of the year's incidents occur in the final three months alone. CIDI records 379 verified incidents (+145%). Police cases jump to 880 (+60%). The NCTV raises the threat level to 4 (Substantial) for the first time since 2019." },
    { date: "2024", title: "The Record Year", color: "#991B1B", desc: "CIDI registers 421 verified incidents - the highest in 40 years of monitoring. In March, the opening of the National Holocaust Museum is disrupted by 2,000 protesters. In November, coordinated attacks target Jewish citizens across Amsterdam after an Ajax-Maccabi match - organized via Telegram, openly called a \"Jodenjacht.\" Dozens injured, 60+ arrests." },
    { date: "2025", title: "No Sign of Slowing", color: "#EF4444", desc: "Preliminary data from CIDI indicates the upward trend is continuing. Public-space antisemitism rose 45% year-on-year. Vandalism against Jewish targets up 44%. CIDI warns that 2025 will likely break the record again." },
    { date: "2026", title: "Explosives at Synagogues and Schools", color: "#991B1B", desc: "March 13: an explosive device detonates at a Rotterdam synagogue at 3:40 AM. Four suspects arrested near a second synagogue. March 14: a bomb hits the Cheider, the Netherlands' only Orthodox Jewish school. Part of a broader European wave including attacks in Liege, Detroit, Toronto, Norway, and Greece." },
  ];

  const actionGapPoints = [
    { title: "Detection is slow", desc: "Signals of antisemitism are scattered across platforms, languages, and jurisdictions. Patterns that should trigger institutional response go unnoticed until they escalate." },
    { title: "Classification is uncertain", desc: "Without structured frameworks, every incident becomes a debate. Is it hateful speech or criminal incitement? Who decides? Against which standard?" },
    { title: "Action stalls", desc: "Even when an incident is clearly antisemitic, the path to the right authority - platform, police, municipality, prosecution, CIDI - is unclear, bureaucratic, and slow." },
    { title: "Documentation is lost", desc: "Without systematic record-keeping, patterns never surface. Repeat offenders go undetected. Institutional memory evaporates between cases." },
  ];

  const ecosystemCategories = [
    {
      label: "Central Institutional",
      orgs: [
        { name: "ENMA", desc: "Internationally comparable incident data across Europe", url: "https://www.european-network-against-antisemitism.eu/" },
        { name: "EU FRA", desc: "Definitive antisemitism surveys and rights monitoring", url: "https://fra.europa.eu/en/themes/antisemitism" },
        { name: "European Commission", desc: "EU Strategy coordinator, led by Katharina von Schnurbein", url: "https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/combatting-discrimination/racism-and-xenophobia/combating-antisemitism_en" },
        { name: "OSCE ODIHR", desc: "Comprehensive hate crime database for 57 states", url: "https://hatecrime.osce.org/" },
      ],
    },
    {
      label: "Technical & AI Monitoring",
      orgs: [
        { name: "TEV (Hungary)", desc: "AI-based web scraping across France, Germany, Sweden", url: "https://tyveszelyeztetett.hu/en/" },
        { name: "Decoding Antisemitism", desc: "AI research on implicit antisemitism across platforms", url: "https://decoding-antisemitism.eu/" },
        { name: "FOA", desc: "Proprietary AI algorithm detecting thousands of instances in real-time", url: "https://www.combatantisemitism.org/" },
        { name: "INACH", desc: "Global network for systematic cyber-hate reporting and removal", url: "https://www.inach.net/" },
      ],
    },
    {
      label: "National Documentation",
      orgs: [
        { name: "RIAS (Germany)", desc: "Standardized IHRA-aligned nationwide database", url: "https://report-antisemitism.de/en/" },
        { name: "CST (UK)", desc: "Global leader in incident documentation and communal security", url: "https://cst.org.uk/" },
        { name: "CIDI (Netherlands)", desc: "Central Dutch documentation and reporting body", url: "https://www.cidi.nl/" },
        { name: "CDEC (Italy)", desc: "Primary Italian antisemitism observatory", url: "https://www.cdec.it/" },
        { name: "IKG Wien (Austria)", desc: "Institutional reporting point with granular annual reports", url: "https://www.ikg-wien.at/" },
        { name: "AKVAH (Denmark)", desc: "Systematic mapping of antisemitic incidents", url: "https://telefonraadgivningen.dk/" },
      ],
    },
    {
      label: "Policy & Legal",
      orgs: [
        { name: "CEJI (Belgium)", desc: "NOA project producing National Report Cards", url: "https://www.ceji.org/" },
        { name: "Antisemitism Policy Trust (UK)", desc: "Evidence-based research for parliamentarians", url: "https://antisemitism.org.uk/" },
        { name: "CRIF (France)", desc: "Main representative body for French Jews", url: "https://www.crif.org/" },
        { name: "World Jewish Congress", desc: "Global institutional coordination", url: "https://www.worldjewishcongress.org/" },
        { name: "NEVER AGAIN (Poland)", desc: "Independent watchdog monitoring Eastern European extremism", url: "https://www.nigdywiecej.org/" },
      ],
    },
  ];

  return (
    <>
      {/* ── SECTION 1: HERO (Airspace slider style) ── */}
      <section
        id="intro"
        className="slider"
        style={{
          background: "linear-gradient(135deg, #1B1A2B 0%, #2D2B3E 50%, #1B1A2B 100%)",
          padding: "160px 24px 80px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div className="overly" />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "1140px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "clamp(36px, 5.5vw, 56px)",
              fontWeight: 700,
              color: "#FFFFFF",
              textTransform: "uppercase",
              letterSpacing: "3px",
              maxWidth: "900px",
              margin: "0 auto 24px",
              lineHeight: 1.2,
            }}
          >
            {t("hero.title")}
          </h1>
          <p
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              color: "rgba(255,255,255,0.85)",
              maxWidth: "640px",
              margin: "0 auto 16px",
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            AI-powered detection, classification, and enforcement of antisemitism and hate speech. Four legal standards. One structured workflow.
          </p>
          <p
            style={{
              fontSize: "13px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.45)",
              textTransform: "uppercase",
              letterSpacing: "2px",
              margin: "0 auto 36px",
            }}
          >
            {t("hero.global")}
          </p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: "64px",
            }}
          >
            <a href="#platform" className="btn-white">
              Explore Platform
            </a>
            <Link href={`/${locale}/contact`} className="btn-white">
              Get in Touch
            </Link>
          </div>

          {/* App Screenshot Showcase */}
          <div
            className="hero-screenshot"
            style={{
              maxWidth: "960px",
              margin: "0 auto",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 25px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)",
            }}
          >
            <Image
              src="/images/screenshot-hero.png"
              alt="HateCheck platform interface"
              width={1920}
              height={1080}
              priority
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE CRISIS (Intelligence Briefing) ── */}
      <section
        id="crisis"
        style={{ background: "#0F0E1A", paddingTop: "100px" }}
      >
        {/* 2A: Opening */}
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px 80px", textAlign: "center" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#EF4444", marginBottom: "24px" }}>
            THE CRISIS
          </p>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 700, color: "rgba(255,255,255,0.95)", lineHeight: 1.35, marginBottom: "32px" }}>
            Antisemitism in the Netherlands has reached crisis levels. The data is unambiguous.
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginBottom: "20px" }}>
            The Netherlands is experiencing the worst surge in antisemitism since the Second World War. What was once measured in dozens of incidents per year is now measured in hundreds - and the trajectory is still climbing.
          </p>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
            For a decade, antisemitic incidents held at an average of 138 per year. In two years, that number has risen by 305%. The national threat level has been raised to its second-highest setting. Synagogues are being firebombed. Jewish students are skipping lectures out of fear. And the vast majority of incidents are never reported at all.
          </p>
        </div>

        {/* 2B: Bar Chart - CIDI Data */}
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px 80px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "32px" }}>
            CIDI VERIFIED ANTISEMITIC INCIDENTS (NETHERLANDS)
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {cidiYearlyData.map((d) => (
              <div key={d.year} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.5)", width: "80px", textAlign: "right", flexShrink: 0 }}>
                  {d.year}
                </span>
                <div style={{ flex: 1, position: "relative", height: "36px", background: "rgba(255,255,255,0.04)", borderRadius: "4px", overflow: "hidden" }}>
                  {/* Average baseline */}
                  <div style={{ position: "absolute", left: `${(138 / 450) * 100}%`, top: 0, bottom: 0, width: "1px", borderLeft: "2px dashed rgba(255,255,255,0.15)", zIndex: 2 }} />
                  {/* Bar */}
                  <div style={{
                    height: "100%",
                    width: `${(d.incidents / 450) * 100}%`,
                    background: d.isAvg ? "rgba(255,255,255,0.15)" : d.incidents >= 400 ? "#DC2626" : d.incidents >= 300 ? "#EF4444" : "rgba(255,255,255,0.2)",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    paddingRight: "12px",
                    transition: "width 0.3s",
                  }}>
                    <span style={{ fontSize: "13px", fontWeight: 700, color: "#FFFFFF", whiteSpace: "nowrap" }}>
                      {d.label}
                    </span>
                  </div>
                </div>
                {d.change && (
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "#EF4444", width: "60px", flexShrink: 0 }}>
                    {d.change}
                  </span>
                )}
              </div>
            ))}
          </div>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)", marginTop: "16px", lineHeight: 1.6 }}>
            Dashed line = 138/yr ten-year average (2012-2022). Source: CIDI Monitor Antisemitische Incidenten. Social media incidents tracked separately and not included in these figures.
          </p>
        </div>

        {/* 2C: Police & Prosecution Table */}
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px 80px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "24px" }}>
            DUTCH POLICE &amp; PROSECUTION DATA
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  {["", "2022", "2023", "Change"].map((h) => (
                    <th key={h} style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", textAlign: h === "" ? "left" : "right", padding: "12px 16px 12px 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {policeData.map((row, i) => (
                  <tr key={i}>
                    <td style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", padding: "14px 16px 14px 0", borderBottom: i < policeData.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>{row.source}</td>
                    <td style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", textAlign: "right", padding: "14px 16px 14px 0", borderBottom: i < policeData.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>{row.y2022}</td>
                    <td style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)", fontWeight: 600, textAlign: "right", padding: "14px 16px 14px 0", borderBottom: i < policeData.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>{row.y2023}</td>
                    <td style={{ fontSize: "14px", color: "#EF4444", fontWeight: 700, textAlign: "right", padding: "14px 0", borderBottom: i < policeData.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>{row.change}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)", marginTop: "16px" }}>
            Source: Dutch Public Prosecution Service (OM) and Netherlands Police (ECAD-P), as reported in the U.S. State Department 2024 Country Report.
          </p>
        </div>

        {/* 2D: Broader Picture - Stat Cards */}
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px 100px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "32px", textAlign: "center" }}>
            THE BROADER PICTURE
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
            {broaderMetrics.map((m) => (
              <div key={m.metric} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", padding: "24px" }}>
                <p style={{ fontSize: "28px", fontWeight: 700, color: "#EF4444", marginBottom: "8px" }}>{m.figure}</p>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", lineHeight: 1.5, marginBottom: "8px" }}>{m.metric}</p>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>{m.source}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2E: Timeline of Escalation */}
        <div style={{ background: "#13121F", padding: "100px 0" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "48px", textAlign: "center" }}>
              TIMELINE OF ESCALATION
            </p>
            <div style={{ position: "relative", paddingLeft: "40px" }}>
              {/* Vertical line */}
              <div style={{ position: "absolute", left: "11px", top: "8px", bottom: "8px", width: "2px", background: "rgba(255,255,255,0.08)" }} />
              {timelineEvents.map((ev, i) => (
                <div key={i} style={{ position: "relative", marginBottom: i < timelineEvents.length - 1 ? "48px" : "0" }}>
                  {/* Dot */}
                  <div style={{ position: "absolute", left: "-34px", top: "6px", width: "14px", height: "14px", borderRadius: "50%", background: ev.color, border: "3px solid #13121F" }} />
                  <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", color: ev.color, textTransform: "uppercase", marginBottom: "6px" }}>
                    {ev.date}
                  </p>
                  <h4 style={{ fontSize: "18px", fontWeight: 700, color: "rgba(255,255,255,0.95)", marginBottom: "10px" }}>
                    {ev.title}
                  </h4>
                  <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
                    {ev.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2F: The Action Gap */}
        <div style={{ background: "#0F0E1A", padding: "100px 0" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "24px", textAlign: "center" }}>
              THE ACTION GAP
            </p>
            <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, textAlign: "center", marginBottom: "16px" }}>
              The numbers tell only part of the story. Behind every recorded incident are dozens more that never enter any system.
            </p>
            <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, textAlign: "center", marginBottom: "48px" }}>
              According to the EU Agency for Fundamental Rights, only about 28% of Jewish Europeans who experience antisemitic harassment report it to any authority. The primary reason? They believe nothing will happen.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", marginBottom: "48px" }}>
              {actionGapPoints.map((p) => (
                <div key={p.title} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", padding: "28px" }}>
                  <h4 style={{ fontSize: "16px", fontWeight: 700, color: "rgba(255,255,255,0.9)", marginBottom: "10px" }}>
                    {p.title}
                  </h4>
                  <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)", textAlign: "center" }}>
              This is the gap HateCheck was built to close.
            </p>
          </div>
        </div>

        {/* 2G: Closing Line */}
        <div style={{ background: "#0F0E1A", padding: "0 0 60px", textAlign: "center" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontSize: "clamp(18px, 3vw, 22px)", fontWeight: 600, color: "rgba(255,255,255,0.85)", lineHeight: 1.6, fontStyle: "italic" }}>
              &ldquo;The tools to fight antisemitism should be as structured, as fast, and as persistent as the hatred they confront.&rdquo;
            </p>
          </div>
        </div>

        {/* 2H: Sources */}
        <div style={{ background: "#0F0E1A", padding: "0 0 100px" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px" }}>
            <details style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "24px" }}>
              <summary style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", listStyle: "none" }}>
                Sources &amp; Attribution
              </summary>
              <ol style={{ marginTop: "20px", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  "CIDI - Monitor Antisemitische Incidenten 2023, 2024. Centrum Informatie en Documentatie Israel, The Hague. cidi.nl",
                  "EU Agency for Fundamental Rights (FRA) - \"Jewish People's Experiences and Perceptions of Antisemitism,\" Third EU Survey (2024). fra.europa.eu",
                  "U.S. Department of State - 2024 Country Reports on Human Rights Practices: Netherlands. state.gov",
                  "NCTV - Dreigingsbeeld Terrorisme Nederland (DTN). National Coordinator for Counterterrorism and Security. english.nctv.nl",
                  "Dutch Police / Openbaar Ministerie - Discrimination case statistics, 2022-2023.",
                  "NL Times, Washington Post, JTA, Times of Israel - News reporting on Rotterdam synagogue arson (March 13, 2026) and Amsterdam Cheider school attack (March 14, 2026).",
                ].map((src, i) => (
                  <li key={i} style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", lineHeight: 1.6 }}>
                    {src}
                  </li>
                ))}
              </ol>
            </details>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: FEATURE (Airspace dark feature section) ── */}
      <section
        id="platform"
        className="section bg-dark"
        style={{
          position: "relative",
          background: "linear-gradient(135deg, #1B1A2B 0%, #2D2B3E 50%, #1B1A2B 100%)",
        }}
      >
        <div className="overly" />
        <div
          className="platform-flex"
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1140px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            gap: "48px",
          }}
        >
          <div style={{ flex: "1 1 0%", display: "flex", justifyContent: "center" }}>
            <div style={{ borderRadius: "8px", overflow: "hidden", boxShadow: "0 15px 50px rgba(0,0,0,0.3)" }}>
              <Image
                src="/images/homepage-newsbar.png"
                alt="HateCheck platform - Identify. Assess. Act."
                width={600}
                height={500}
                style={{ maxWidth: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
          <div style={{ flex: "1 1 0%", maxWidth: "600px" }}>
            <p className="section-label" style={{ marginBottom: "12px" }}>
              THE PLATFORM
            </p>
            <h3
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: "24px",
              }}
            >
              Identify. Assess. Act.
            </h3>
            {platformCards.map((card) => (
              <div key={card.num} style={{ marginBottom: "24px" }}>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    marginBottom: "8px",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.8)",
                    lineHeight: 1.7,
                  }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
            <Link href={`/${locale}/product`} className="btn-white" style={{ marginTop: "16px" }}>
              Learn More &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: SERVICES (Airspace service grid) ── */}
      <section
        className="section"
        style={{ background: "#FFFFFF" }}
      >
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <p className="section-label" style={{ marginBottom: "12px" }}>
            5-STEP INVESTIGATION
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 36px)",
              fontWeight: 700,
              color: "#222",
              marginBottom: "16px",
            }}
          >
            From Detection to Enforcement
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#666",
              maxWidth: "600px",
              margin: "0 auto 64px",
              lineHeight: 1.7,
            }}
          >
            A complete pipeline from scanning to legal action.
          </p>
          <div
            className="services-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "24px",
              marginBottom: "48px",
            }}
          >
            {features.map((f) => (
              <div
                key={f.step}
                className="service-item"
                style={{ padding: "32px 20px", textAlign: "center" }}
              >
                <div
                  style={{
                    fontSize: "36px",
                    fontWeight: 700,
                    color: "#3B82F6",
                    lineHeight: 1,
                    marginBottom: "20px",
                  }}
                >
                  {f.step}
                </div>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#222",
                    marginBottom: "12px",
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#666",
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
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            View Full Platform &rarr;
          </Link>
        </div>
      </section>

      {/* ── SECTION 5: CTA (Airspace call-to-action) ── */}
      <section
        className="section"
        style={{
          background: "linear-gradient(135deg, #1B1A2B 0%, #2D2B3E 50%, #1B1A2B 100%)",
          position: "relative",
          textAlign: "center",
        }}
      >
        <div className="overly" />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "1140px", margin: "0 auto", padding: "0 24px" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 36px)",
              fontWeight: 700,
              color: "#FFFFFF",
              marginBottom: "20px",
            }}
          >
            A Complete Investigation in Five Steps
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.8)",
              maxWidth: "600px",
              margin: "0 auto 40px",
              lineHeight: 1.7,
            }}
          >
            See how HateCheck transforms a single URL into a fully documented, legally
            grounded investigation.
          </p>
          <Link href={`/${locale}/product`} className="btn-white">
            See Screenshots
          </Link>
        </div>
      </section>

      {/* ── SECTION 6: SCREENSHOTS (Airspace spotlight layouts) ── */}
      <section
        id="showcase"
        className="section bg-gray"
      >
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px" }}>
          {/* Spotlight 1: Protocol Analysis */}
          <div className="spotlight" style={{ marginBottom: "100px" }}>
            <div className="content">
              <p className="section-label" style={{ marginBottom: "12px" }}>
                STEP 2
              </p>
              <h3
                style={{
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "#222",
                  marginBottom: "16px",
                }}
              >
                Verify &amp; Corroborate
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: "#555",
                  lineHeight: 1.8,
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
                  src="/images/protocol.png"
                  alt="HateCheck Protocol Analysis - IHRA, Nexus, JDA applied"
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
                  color: "#222",
                  marginBottom: "16px",
                }}
              >
                Forensic Classification
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: "#555",
                  lineHeight: 1.8,
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
                  src="/images/assessment.png"
                  alt="HateCheck Tier 3 Classification Report - 75% confidence"
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
                  color: "#222",
                  marginBottom: "16px",
                }}
              >
                Take Enforceable Action
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: "#555",
                  lineHeight: 1.8,
                }}
              >
                Prioritized next steps with one-click letter drafting for every
                relevant authority - from platform abuse teams to Dutch law
                enforcement and the public prosecutor.
              </p>
            </div>
            <div className="image">
              <div className="screenshot-frame">
                <Image
                  src="/images/action.png"
                  alt="HateCheck Action Engine - Report to Local Authorities"
                  width={640}
                  height={400}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: STATS (Airspace counter style) ── */}
      <section
        className="section"
        style={{
          background: "#FFFFFF",
          borderTop: "1px solid #eee",
          borderBottom: "1px solid #eee",
        }}
      >
        <div
          className="stats-bar"
          style={{
            maxWidth: "1140px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            padding: "0 24px",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="stat-item"
              style={{
                flex: "1 1 160px",
                textAlign: "center",
                padding: "20px 16px",
                borderRight:
                  i < stats.length - 1
                    ? "1px solid #eee"
                    : "none",
              }}
            >
              <div className="stat-value" style={{ color: "#222" }}>{s.value}</div>
              <div className="stat-label" style={{ color: "#888" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 8: TIERS (The HateCheck Index) ── */}
      <section
        id="tiers"
        className="section bg-gray"
      >
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p className="section-label" style={{ marginBottom: "16px" }}>
              {t("tiers.label")}
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 36px)",
                fontWeight: 700,
                color: "#222",
                marginBottom: "16px",
              }}
            >
              The HateCheck Index
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#555",
                maxWidth: "740px",
                margin: "0 auto",
                lineHeight: 1.8,
              }}
            >
              The HateCheck Index provides a structured framework for triaging
              threats - from lawful speech to urgent risk. Each tier maps to
              specific institutional and legal response mechanisms, ensuring
              proportionate action. The index bridges the gap between raw
              detection and structured enforcement.
            </p>
            <div style={{ marginTop: "40px" }}>
              <div className="screenshot-frame" style={{ maxWidth: "360px", margin: "0 auto" }}>
                <Image
                  src="/images/scale.png"
                  alt="The HateCheck Index - Tiers 1 to 5 severity scale"
                  width={360}
                  height={280}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginTop: "64px",
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
                      color: "#222",
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
                      color: "#222",
                      marginBottom: "4px",
                    }}
                  >
                    {tier.cls}
                  </div>
                  <div
                    className="tier-desc"
                    style={{
                      fontSize: "14px",
                      color: "#666",
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
                    color: "#999",
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
        </div>
      </section>

      {/* ── SECTION 9: STANDARDS ── */}
      <section
        id="standards"
        className="section"
        style={{ background: "#FFFFFF" }}
      >
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p className="section-label" style={{ marginBottom: "16px" }}>
              METHODOLOGY
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 36px)",
                fontWeight: 700,
                color: "#222",
                marginBottom: "20px",
              }}
            >
              Grounded in International Standards
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#555",
                maxWidth: "740px",
                margin: "0 auto",
                lineHeight: 1.8,
              }}
            >
              Antisemitism often sits at the intersection of law, politics, speech
              and safety. Without clear standards, real threats are missed,
              legitimate speech is mislabelled, and actions taken on weak analysis
              don&apos;t hold up. HateCheck relies on a layered set of well-known
              external frameworks - not to replace human judgment, but to support
              it with consistent, explainable structure.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
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
                    color: "#222",
                    marginBottom: "12px",
                  }}
                >
                  {fw.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#666",
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
              color: "#999",
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
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Read the Standards &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: ECOSYSTEM ── */}
      <section
        id="ecosystem"
        className="section bg-gray"
      >
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p className="section-label" style={{ marginBottom: "16px" }}>
              ECOSYSTEM
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 36px)",
                fontWeight: 700,
                color: "#222",
                marginBottom: "20px",
              }}
            >
              Part of a European Network
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#555",
                maxWidth: "700px",
                margin: "0 auto",
                lineHeight: 1.8,
              }}
            >
              HateCheck operates within the established European network of
              antisemitism monitoring bodies, legal frameworks, and civil society
              organisations.
            </p>
          </div>

          {ecosystemCategories.map((cat) => (
            <div key={cat.label} style={{ marginBottom: "48px" }}>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#999",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "16px",
                }}
              >
                {cat.label}
              </p>
              <div
                className="ecosystem-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "16px",
                }}
              >
                {cat.orgs.map((org) => (
                  <a
                    key={org.name}
                    href={org.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card"
                    style={{ padding: "20px", textDecoration: "none", display: "block", transition: "box-shadow 0.2s" }}
                  >
                    <div
                      style={{
                        fontSize: "15px",
                        fontWeight: 700,
                        color: "#222",
                        marginBottom: "6px",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      {org.name}
                      <span style={{ fontSize: "12px", color: "#9CA3AF" }}>{"\u2197"}</span>
                    </div>
                    <div
                      style={{
                        fontSize: "13px",
                        color: "#666",
                        lineHeight: 1.5,
                      }}
                    >
                      {org.desc}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ACADEMY (FULL) ── */}
      <section
        id="academy"
        style={{
          padding: "100px 0 0",
          background: "#FFFFFF",
          borderBottom: "1px solid #E5E7EB",
        }}
      >
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <p className="section-label" style={{ marginBottom: "12px" }}>
              OPEN KNOWLEDGE
            </p>
            <h2 className="section-title" style={{ marginBottom: "16px" }}>
              {ta("title")}
            </h2>
            <p style={{ fontSize: "16px", color: "#666", maxWidth: "600px", margin: "0 auto" }}>
              {ta("subtitle")}
            </p>
          </div>

          {/* Intro */}
          <div style={{ maxWidth: "760px", margin: "0 auto 40px", textAlign: "center" }}>
            <p style={{ fontSize: "17px", color: "#555", lineHeight: 1.8 }}>
              {ta("intro")}
            </p>
          </div>

          {/* Who It's For */}
          <div style={{ display: "flex", justifyContent: "center", gap: "48px", flexWrap: "wrap", marginBottom: "56px" }}>
            {[
              { emoji: "\uD83C\uDFDB", key: "whoProfessionals" },
              { emoji: "\uD83C\uDF93", key: "whoStudents" },
              { emoji: "\uD83D\uDC64", key: "whoCitizens" },
            ].map((a) => (
              <div key={a.key} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "20px" }}>{a.emoji}</span>
                <span style={{ fontSize: "14px", color: "#6B7280", fontWeight: 500 }}>{ta(a.key)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Tracks Grid */}
        <div style={{ padding: "80px 0 100px", background: "#F8F9FA" }}>
          <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <p className="section-label" style={{ marginBottom: "12px" }}>
                {ta("tracksTitle").toUpperCase()}
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                gap: "28px",
              }}
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <Link
                  key={num}
                  href={`/${locale}/academy/${academyTracks[num - 1].slug}`}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E5E7EB",
                    borderRadius: "12px",
                    padding: "36px 32px",
                    position: "relative",
                    transition: "box-shadow 0.2s",
                    textDecoration: "none",
                    display: "block",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "20px",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      color: "#D1D5DB",
                    }}
                  >
                    {String(num).padStart(2, "0")}
                  </span>
                  <div
                    style={{
                      display: "inline-block",
                      padding: "4px 12px",
                      background: "#EFF6FF",
                      borderRadius: "4px",
                      fontSize: "10px",
                      fontWeight: 700,
                      color: "#2563EB",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      marginBottom: "20px",
                    }}
                  >
                    TRACK {num}
                  </div>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#1B1A2B",
                      marginBottom: "12px",
                    }}
                  >
                    {ta(`track${num}Title`)}
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "#6B7280",
                      lineHeight: 1.7,
                      marginBottom: "20px",
                    }}
                  >
                    {ta(`track${num}Desc`)}
                  </p>
                  <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "24px" }}>
                    <span style={{ fontSize: "12px", color: "#9CA3AF", fontWeight: 600 }}>
                      {ta(`track${num}Guides`)}
                    </span>
                    <span style={{ fontSize: "12px", color: "#D1D5DB" }}>|</span>
                    <span style={{ fontSize: "12px", color: "#9CA3AF", fontWeight: 600 }}>
                      {ta(`track${num}Time`)}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#2563EB",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {ta("startLearning")} &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Why This Matters */}
        <div style={{ padding: "80px 0", background: "#FFFFFF" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
            <p className="section-label" style={{ marginBottom: "16px" }}>
              {ta("whyTitle").toUpperCase()}
            </p>
            <p style={{ fontSize: "17px", color: "#555", lineHeight: 1.8 }}>
              {ta("whyText")}
            </p>
          </div>
        </div>

        {/* Academy CTA */}
        <div
          style={{
            padding: "100px 0",
            background: "linear-gradient(135deg, #1B1A2B 0%, #2D2B3E 50%, #1B1A2B 100%)",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "640px", margin: "0 auto", padding: "0 24px" }}>
            <p
              className="section-label"
              style={{ marginBottom: "16px", color: "rgba(255,255,255,0.6)" }}
            >
              FREE &amp; OPEN
            </p>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: "24px",
              }}
            >
              All Academy content is available now. No login. No paywall.
            </h2>
            <Link href={`/${locale}/academy`} className="btn-white">
              {ta("startLearning")} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: CTA ── */}
      <section
        id="contact"
        className="section"
        style={{
          background: "linear-gradient(135deg, #1B1A2B 0%, #2D2B3E 50%, #1B1A2B 100%)",
          position: "relative",
          textAlign: "center",
        }}
      >
        <div className="overly" />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "1140px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 36px)",
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              Get in Touch
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: "rgba(255,255,255,0.7)",
                marginBottom: "48px",
                textAlign: "center",
                lineHeight: 1.7,
              }}
            >
              Request a demo, explore partnership opportunities, or report an incident.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── SECTION 12: QUOTE (Prominent Brandeis) ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #1B1A2B 0%, #2D2B3E 50%, #1B1A2B 100%)",
          textAlign: "center",
          padding: "120px 24px",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div
            style={{
              fontSize: "64px",
              color: "rgba(255,255,255,0.1)",
              lineHeight: 1,
              marginBottom: "24px",
              fontFamily: "Georgia, serif",
            }}
          >
            &ldquo;
          </div>
          <blockquote
            style={{
              fontSize: "clamp(22px, 3vw, 30px)",
              fontStyle: "italic",
              color: "#FFFFFF",
              lineHeight: 1.6,
              marginBottom: "24px",
              fontWeight: 300,
            }}
          >
            Sunlight is said to be the best of disinfectants; electric light the most efficient policeman.
          </blockquote>
          <cite
            style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.6)",
              fontStyle: "normal",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "32px",
            }}
          >
            Supreme Court Justice Louis D. Brandeis, 1913
          </cite>
          <p
            style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.5)",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Transparency, publicity, and public exposure are the most effective
            remedies for corruption and social ills. This is the founding
            principle behind HateCheck.
          </p>
        </div>
      </section>

      {/* ── SECTION 13: DISCLAIMER ── */}
      <section
        style={{
          padding: "40px 24px 80px",
          textAlign: "center",
          background: "#FFFFFF",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            color: "#999",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          HateCheck provides general information and is not a substitute for
          legal advice.
        </p>
      </section>

      {/* Responsive styles */}
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
            border-bottom: 1px solid #eee;
          }
          .stats-bar .stat-item:last-child {
            border-bottom: none;
          }
          .ecosystem-grid {
            grid-template-columns: 1fr !important;
          }
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          .platform-flex {
            flex-direction: column !important;
            gap: 32px !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .ecosystem-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .services-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .platform-flex {
            flex-direction: column !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </>
  );
}
