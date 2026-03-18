import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Mail, MapPin, Clock, Shield } from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact — HateCheck",
    description:
      "Get in touch with HateCheck for demos, partnerships, research inquiries, or general questions.",
  };
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@hatecheck.eu",
    href: "mailto:info@hatecheck.eu",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Amsterdam, Netherlands",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 2 business days",
    href: null,
  },
  {
    icon: Shield,
    label: "Encrypted",
    value: "All communications are confidential",
    href: null,
  },
];

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return (
    <div className="pt-[88px]">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#DDE4EE] bg-[#F8FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="w-10 h-[2px] bg-[#1A52C8] mb-4" />
            <p className="gov-label mb-3">CONTACT</p>
            <h1
              className="text-5xl md:text-6xl font-heading font-bold text-[#0C1B2E] mb-5"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {t("title")}
            </h1>
            <p className="text-lg text-[#2B3F57] leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#EFF3F8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2
                  className="text-2xl font-heading font-bold text-[#0C1B2E] mb-5"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Contact Information
                </h2>
                <div className="space-y-3">
                  {contactInfo.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4 rounded-sm border border-[#C6D2E0] bg-white shadow-gov"
                    >
                      <div
                        className="w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "rgba(26, 82, 200, 0.1)", border: "1px solid rgba(26, 82, 200, 0.2)" }}
                      >
                        <item.icon size={15} className="text-[#1A52C8]" />
                      </div>
                      <div>
                        <p
                          className="text-xs font-heading tracking-wider text-[#8099B3] mb-0.5"
                          style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.12em" }}
                        >
                          {item.label.toUpperCase()}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm text-[#1A52C8] hover:text-[#1440A3] transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-[#2B3F57]">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry Types */}
              <div className="p-5 rounded-sm border border-[#C6D2E0] bg-white shadow-gov">
                <h3
                  className="text-base font-heading font-semibold text-[#0C1B2E] mb-4"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  We Welcome Inquiries From
                </h3>
                <ul className="space-y-2">
                  {[
                    "Jewish community organizations",
                    "Civil society and advocacy groups",
                    "Academic researchers",
                    "Journalists and media",
                    "Law enforcement (referrals)",
                    "Government and policy bodies",
                    "Platform trust & safety teams",
                    "Funders and philanthropists",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#2B3F57]">
                      <span className="text-[#1A52C8] text-xs">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="p-8 rounded-sm border border-[#C6D2E0] bg-white shadow-gov">
                <h2
                  className="text-2xl font-heading font-bold text-[#0C1B2E] mb-6"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Send a Message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency notice */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[#DDE4EE] bg-white">
        <div className="max-w-7xl mx-auto">
          <div
            className="p-6 rounded-sm border"
            style={{
              backgroundColor: "rgba(220, 38, 38, 0.05)",
              borderColor: "rgba(220, 38, 38, 0.2)",
            }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(220, 38, 38, 0.1)", border: "1px solid rgba(220, 38, 38, 0.3)" }}
              >
                <Shield size={18} className="text-[#DC2626]" />
              </div>
              <div>
                <h3
                  className="text-lg font-heading font-semibold text-[#0C1B2E] mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Urgent Threat or Criminal Incident?
                </h3>
                <p className="text-sm text-[#2B3F57] leading-relaxed mb-3">
                  If you are aware of an immediate threat to physical safety, contact Dutch emergency services (112) or the Politie directly. For serious antisemitic threats that may constitute criminal speech under Art. 137c-e, contact the Politie via{" "}
                  <a href="https://www.politie.nl" className="text-[#DC2626] hover:text-[#EF4444] transition-colors" target="_blank" rel="noopener noreferrer">
                    politie.nl
                  </a>{" "}
                  or call 0900-8844.
                </p>
                <p className="text-xs text-[#8099B3]">
                  HateCheck can assist with documentation and evidence packaging for law enforcement referrals. Contact us via the form above and mark the subject as &quot;Urgent.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
