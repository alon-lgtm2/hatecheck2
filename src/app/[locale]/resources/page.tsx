"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { articles, articleCategories } from "@/lib/articles";
import PageHeader from "@/components/sections/Hero";

export default function ResourcesPage() {
  const t = useTranslations("resources");
  const locale = useLocale();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <div>
      <PageHeader
        label="RESOURCES"
        title={t("title")}
        subtitle={t("subtitle")}
      />

      {/* Filter + Articles */}
      <section style={{ padding: "100px 0" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px" }}>
          {/* Category filter */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "64px", paddingBottom: "32px", borderBottom: "1px solid #E5E7EB" }}>
            {articleCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "8px 16px",
                  borderRadius: "4px",
                  fontSize: "11px",
                  fontWeight: 600,
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.15em",
                  cursor: "pointer",
                  border: activeCategory === cat ? "1px solid #2563EB" : "1px solid #E5E7EB",
                  backgroundColor: activeCategory === cat ? "#2563EB" : "#FFFFFF",
                  color: activeCategory === cat ? "#FFFFFF" : "#6B7280",
                  transition: "all 0.2s",
                }}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Article grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {filtered.map((article) => (
              <Link
                key={article.slug}
                href={`/${locale}/resources/${article.slug}`}
                className="glass-card"
                style={{ display: "block", padding: "32px", transition: "box-shadow 0.2s" }}
              >
                <h3 style={{ fontSize: "20px", fontWeight: 400, color: "#1B1A2B", marginBottom: "12px", lineHeight: 1.3 }}>
                  {article.title}
                </h3>
                <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.7, marginBottom: "24px" }}>
                  {article.excerpt}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.15em", color: "#9CA3AF" }}>
                    {new Date(article.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    }).toUpperCase()}
                  </span>
                  <span className="section-label">
                    {article.category.toUpperCase()}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "80px 0", color: "#9CA3AF", fontSize: "15px" }}>
              No articles found in this category.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
