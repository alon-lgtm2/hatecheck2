import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";

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
    <div className="pt-32">
      {/* Page Header */}
      <section className="pt-40 pb-16 px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl">
            <p className="section-label mb-4">CONTACT</p>
            <h1
              className="font-bold text-white mb-6"
              style={{ fontSize: "48px", lineHeight: 1.1 }}
            >
              {t("title")}
            </h1>
            <p className="text-[17px] text-[rgba(255,255,255,0.65)] leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 px-16 border-b border-white/10">
        <div className="max-w-[680px] mx-auto">
          <ContactForm />
          <p className="text-[13px] text-[rgba(255,255,255,0.4)] mt-12">
            You can also reach us directly at{" "}
            <a
              href="mailto:info@hatecheck.eu"
              className="text-white hover:text-[#3B82F6] transition-colors"
            >
              info@hatecheck.eu
            </a>
          </p>
        </div>
      </section>

      {/* Urgency notice */}
      <section className="py-24 px-16">
        <div className="max-w-[680px] mx-auto">
          <p className="section-label mb-4">URGENT MATTERS</p>
          <h2 className="text-[24px] font-bold text-white mb-6">
            Urgent Threat or Criminal Incident?
          </h2>
          <div className="space-y-4">
            <p className="text-[15px] text-[rgba(255,255,255,0.65)] leading-relaxed">
              If you are aware of an immediate threat to physical safety, contact Dutch emergency services (112) or the Politie directly. For serious antisemitic threats that may constitute criminal speech under Art. 137c-e, contact the Politie via{" "}
              <a href="https://www.politie.nl" className="text-white hover:text-[#3B82F6]" target="_blank" rel="noopener noreferrer">
                politie.nl
              </a>{" "}
              or call 0900-8844.
            </p>
            <p className="text-[13px] text-[rgba(255,255,255,0.4)] leading-relaxed">
              HateCheck can assist with documentation and evidence packaging for law enforcement referrals. Contact us via the form above and mark the subject as &quot;Urgent.&quot;
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
