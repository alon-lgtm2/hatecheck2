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
      const res = await fetch("https://formspree.io/f/xreyjzrn", {
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

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    fontSize: "15px",
    color: "#1B1A2B",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "11px",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.2em",
    color: "#9CA3AF",
    display: "block",
    marginBottom: "12px",
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
        <div>
          <label htmlFor="name" style={labelStyle}>
            {t("nameLabel").toUpperCase()} *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Jan de Vries"
            onFocus={(e) => { e.currentTarget.style.borderColor = "#2563EB"; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = "#E5E7EB"; }}
          />
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>
            {t("emailLabel").toUpperCase()} *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            placeholder="jan@example.nl"
            onFocus={(e) => { e.currentTarget.style.borderColor = "#2563EB"; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = "#E5E7EB"; }}
          />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
        <div>
          <label htmlFor="organization" style={labelStyle}>
            {t("orgLabel").toUpperCase()}
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            value={formData.organization}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Organization name"
            onFocus={(e) => { e.currentTarget.style.borderColor = "#2563EB"; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = "#E5E7EB"; }}
          />
        </div>
        <div>
          <label htmlFor="role" style={labelStyle}>
            {t("roleLabel").toUpperCase()}
          </label>
          <input
            id="role"
            name="role"
            type="text"
            value={formData.role}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Director / Researcher / etc."
            onFocus={(e) => { e.currentTarget.style.borderColor = "#2563EB"; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = "#E5E7EB"; }}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" style={labelStyle}>
          {t("subjectLabel").toUpperCase()} *
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          style={{ ...inputStyle, cursor: "pointer" }}
          onFocus={(e) => { e.currentTarget.style.borderColor = "#2563EB"; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = "#E5E7EB"; }}
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
        <label htmlFor="message" style={labelStyle}>
          {t("messageLabel").toUpperCase()} *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          style={{ ...inputStyle, resize: "vertical" }}
          placeholder="Describe your inquiry..."
          onFocus={(e) => { e.currentTarget.style.borderColor = "#2563EB"; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = "#E5E7EB"; }}
        />
      </div>

      {/* Status Messages */}
      {status === "success" && (
        <div className="glass-card" style={{ padding: "16px" }}>
          <p style={{ fontSize: "15px", color: "#10B981" }}>{t("success")}</p>
        </div>
      )}
      {status === "error" && (
        <div className="glass-card" style={{ padding: "16px" }}>
          <p style={{ fontSize: "15px", color: "#EF4444" }}>{t("error")}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-main"
        style={{ opacity: status === "sending" ? 0.5 : 1, cursor: status === "sending" ? "not-allowed" : "pointer" }}
      >
        {status === "sending" ? t("sending") : "Send Message"}
      </button>
    </form>
  );
}
