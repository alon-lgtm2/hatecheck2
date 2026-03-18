"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { useTranslations } from "next-intl";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/placeholder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", organization: "", role: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-sm bg-white border border-[#C6D2E0] text-[#0C1B2E] placeholder-[#8099B3] text-sm focus:outline-none focus:border-[#1A52C8] focus:ring-1 focus:ring-[#1A52C8]/30 transition-colors";

  const labelClass =
    "block text-xs font-heading tracking-widest text-[#2B3F57] mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass} style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.12em" }}>
            {t("nameLabel").toUpperCase()} *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="Jan de Vries"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass} style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.12em" }}>
            {t("emailLabel").toUpperCase()} *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="jan@example.nl"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="organization" className={labelClass} style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.12em" }}>
            {t("orgLabel").toUpperCase()}
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            value={formData.organization}
            onChange={handleChange}
            className={inputClass}
            placeholder="Organization name"
          />
        </div>
        <div>
          <label htmlFor="role" className={labelClass} style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.12em" }}>
            {t("roleLabel").toUpperCase()}
          </label>
          <input
            id="role"
            name="role"
            type="text"
            value={formData.role}
            onChange={handleChange}
            className={inputClass}
            placeholder="Director / Researcher / etc."
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className={labelClass} style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.12em" }}>
          {t("subjectLabel").toUpperCase()} *
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className={inputClass}
          style={{ cursor: "pointer" }}
        >
          <option value="" disabled>Select a subject...</option>
          <option value="demo">Request a Demo</option>
          <option value="partnership">Partnership Inquiry</option>
          <option value="research">Research Collaboration</option>
          <option value="media">Media / Press</option>
          <option value="report">Report an Incident</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass} style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.12em" }}>
          {t("messageLabel").toUpperCase()} *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className={inputClass}
          placeholder="Describe your inquiry..."
          style={{ resize: "vertical" }}
        />
      </div>

      {/* Status Messages */}
      {status === "success" && (
        <div className="flex items-center gap-3 p-4 rounded-sm bg-[#16A34A]/10 border border-[#16A34A]/30 text-[#16A34A]">
          <CheckCircle size={16} />
          <span className="text-sm">{t("success")}</span>
        </div>
      )}
      {status === "error" && (
        <div className="flex items-center gap-3 p-4 rounded-sm bg-[#DC2626]/10 border border-[#DC2626]/30 text-[#DC2626]">
          <AlertCircle size={16} />
          <span className="text-sm">{t("error")}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="flex items-center gap-2 px-8 py-3 bg-[#1A52C8] hover:bg-[#1440A3] disabled:bg-[#C6D2E0] text-white rounded-sm font-heading tracking-wider text-sm transition-colors shadow-gov"
        style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em" }}
      >
        <Send size={14} />
        {status === "sending" ? t("sending").toUpperCase() : t("submit").toUpperCase()}
      </button>
    </form>
  );
}
