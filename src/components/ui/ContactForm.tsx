"use client";

import { useState } from "react";
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
    "w-full py-3 px-4 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg text-[15px] text-white placeholder-[rgba(255,255,255,0.3)] focus:outline-none focus:border-[#2563EB] transition-colors";

  const labelClass =
    "text-[11px] font-semibold uppercase tracking-[0.2em] text-[rgba(255,255,255,0.4)] block mb-3";

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div>
          <label htmlFor="name" className={labelClass}>
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
          <label htmlFor="email" className={labelClass}>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div>
          <label htmlFor="organization" className={labelClass}>
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
          <label htmlFor="role" className={labelClass}>
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
        <label htmlFor="subject" className={labelClass}>
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
        <label htmlFor="message" className={labelClass}>
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
        <div className="glass-card p-4">
          <p className="text-[15px] text-[#10B981]">{t("success")}</p>
        </div>
      )}
      {status === "error" && (
        <div className="glass-card p-4">
          <p className="text-[15px] text-[#EF4444]">{t("error")}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? t("sending") : "Send Message"}
      </button>
    </form>
  );
}
