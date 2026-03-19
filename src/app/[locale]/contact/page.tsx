import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";
import PageHeader from "@/components/sections/Hero";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact — HateCheck",
    description:
      "Get in touch with HateCheck for demos, partnerships, research inquiries, or general questions.",
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return (
    <div>
      <PageHeader
        label="CONTACT"
        title={t("title")}
        subtitle={t("subtitle")}
      />

      {/* Form */}
      <section style={{ padding: "100px 0", borderBottom: "1px solid #E5E7EB" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", padding: "0 24px" }}>
          <ContactForm />
          <p style={{ fontSize: "13px", color: "#9CA3AF", marginTop: "48px" }}>
            You can also reach us directly at{" "}
            <a
              href="mailto:info@hatecheck.eu"
              style={{ color: "#2563EB", textDecoration: "none", transition: "color 0.2s" }}
            >
              info@hatecheck.eu
            </a>
          </p>
        </div>
      </section>

      {/* Urgency notice */}
      <section style={{ padding: "100px 0", backgroundColor: "#F8F9FA" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", padding: "0 24px" }}>
          <p className="section-label" style={{ marginBottom: "16px" }}>URGENT MATTERS</p>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#1B1A2B", marginBottom: "24px" }}>
            Urgent Threat or Criminal Incident?
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.7 }}>
              If you are aware of an immediate threat to physical safety, contact Dutch emergency services (112) or the Politie directly. For serious antisemitic threats that may constitute criminal speech under Art. 137c-e, contact the Politie via{" "}
              <a href="https://www.politie.nl" style={{ color: "#2563EB", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                politie.nl
              </a>{" "}
              or call 0900-8844.
            </p>
            <p style={{ fontSize: "13px", color: "#9CA3AF", lineHeight: 1.7 }}>
              HateCheck can assist with documentation and evidence packaging for law enforcement referrals. Contact us via the form above and mark the subject as &quot;Urgent.&quot;
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
