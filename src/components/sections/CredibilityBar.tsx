import { useTranslations } from "next-intl";
import { ExternalLink } from "lucide-react";

const standards = [
  {
    abbr: "IHRA",
    full: "International Holocaust Remembrance Alliance",
    desc: "Working Definition of Antisemitism (2016)",
    color: "#1A52C8",
    url: "https://www.holocaustremembrance.com/resources/working-definitions-charters/working-definition-antisemitism",
  },
  {
    abbr: "NEXUS",
    full: "Nexus Document",
    desc: "On Antisemitism and the Israel–Palestine Conflict",
    color: "#0891B2",
    url: "https://israelandantisemitism.com/",
  },
  {
    abbr: "JDA",
    full: "Jerusalem Declaration on Antisemitism",
    desc: "Academic Framework (2021)",
    color: "#7C3AED",
    url: "https://jerusalemdeclaration.org/",
  },
  {
    abbr: "WvSr",
    full: "Dutch Penal Code",
    desc: "Articles 137c, 137d, 137e",
    color: "#D97706",
    url: "https://wetten.overheid.nl/",
  },
];

const europeanOrgs = [
  {
    abbr: "EC",
    name: "European Commission",
    location: "Brussels, Belgium",
    role: "EU executive body — Digital Services Act and hate speech regulatory framework",
  },
  {
    abbr: "FRA",
    name: "EU Agency for Fundamental Rights",
    location: "Vienna, Austria",
    role: "Annual antisemitism data collection and rights monitoring across EU member states",
  },
  {
    abbr: "OSCE ODIHR",
    name: "OSCE Office for Democratic Institutions",
    location: "Warsaw, Poland",
    role: "Hate crime data, tolerance education, and antisemitism monitoring for 57 states",
  },
  {
    abbr: "CIDI",
    name: "Centrum Informatie en Documentatie Israël",
    location: "The Hague, Netherlands",
    role: "Primary Dutch antisemitism monitoring and incident reporting organisation",
  },
  {
    abbr: "RIAS",
    name: "Recherche- und Informationsstelle Antisemitismus",
    location: "Berlin, Germany",
    role: "German antisemitism documentation network — statistical and qualitative reporting",
  },
  {
    abbr: "CST",
    name: "Community Security Trust",
    location: "London, United Kingdom",
    role: "UK antisemitic incident monitoring and community security advisory body",
  },
  {
    abbr: "INACH",
    name: "International Network Against Cyber Hate",
    location: "Amsterdam, Netherlands",
    role: "Cross-border online hate speech counter-notification and removal coordination",
  },
  {
    abbr: "CEJI",
    name: "A Jewish Contribution to an Inclusive Europe",
    location: "Brussels, Belgium",
    role: "EU-level civil society advocacy on Jewish inclusion and antisemitism policy",
  },
];

export default function CredibilityBar() {
  const t = useTranslations("home.credibility");

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-[#DDE4EE] bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Standards row */}
        <div className="mb-12">
          <div className="mb-8">
            <p className="gov-label mb-2">STANDARDS &amp; FRAMEWORKS</p>
            <h2
              className="text-3xl md:text-4xl font-heading font-bold text-[#0C1B2E] mb-2"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {t("title")}
            </h2>
            <p className="text-[#2B3F57] max-w-xl">
              {t("subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#DDE4EE] border border-[#DDE4EE] rounded-sm overflow-hidden">
            {standards.map((s) => (
              <a
                key={s.abbr}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-5 bg-white hover:bg-[#F8FAFB] transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-2xl font-heading font-bold"
                    style={{ color: s.color, fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {s.abbr}
                  </span>
                  <ExternalLink size={13} className="text-[#C6D2E0] group-hover:text-[#4D6680] transition-colors" />
                </div>
                <p className="text-sm font-semibold text-[#0C1B2E] mb-1 font-heading" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {s.full}
                </p>
                <p className="text-xs text-[#8099B3]">{s.desc}</p>
              </a>
            ))}
          </div>
        </div>

        {/* European Institutional Ecosystem row */}
        <div>
          <div className="mb-6">
            <p className="gov-label mb-2">EUROPEAN INSTITUTIONAL ECOSYSTEM</p>
            <p className="text-sm text-[#4D6680] max-w-2xl">
              HateCheck operates within the established European network of antisemitism monitoring bodies, legal frameworks, and civil society organisations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#DDE4EE] border border-[#DDE4EE] rounded-sm overflow-hidden">
            {europeanOrgs.map((org) => (
              <div key={org.abbr} className="bg-white p-5 hover:bg-[#F8FAFB] transition-colors">
                <div className="flex items-start gap-3 mb-2">
                  <span
                    className="inline-block text-[10px] font-mono font-semibold text-[#1A52C8] bg-[#EFF3F8] border border-[#C6D2E0] px-1.5 py-0.5 rounded-sm flex-shrink-0 mt-0.5"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {org.abbr}
                  </span>
                  <p className="text-sm font-semibold text-[#0C1B2E] leading-snug font-heading" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    {org.name}
                  </p>
                </div>
                <p
                  className="text-[10px] text-[#8099B3] mb-1.5 font-mono"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {org.location}
                </p>
                <p className="text-xs text-[#4D6680] leading-relaxed">{org.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
