"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { articles, articleCategories } from "@/lib/articles";

export default function ResourcesPage() {
  const t = useTranslations("resources");
  const locale = useLocale();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <div className="pt-32">
      {/* Page Header */}
      <section className="pt-40 pb-16 px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl">
            <p className="section-label mb-4">RESOURCES</p>
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

      {/* Filter + Articles */}
      <section className="py-24 px-16">
        <div className="max-w-[1400px] mx-auto">
          {/* Category filter */}
          <div className="flex flex-wrap gap-3 mb-16 pb-8 border-b border-white/10">
            {articleCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors cursor-pointer border ${
                  activeCategory === cat
                    ? "bg-[#2563EB] text-white border-[#2563EB]"
                    : "bg-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.65)] border-transparent hover:bg-[#2563EB]/20 hover:text-white"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Article grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <Link
                key={article.slug}
                href={`/${locale}/resources/${article.slug}`}
                className="glass-card block p-8 hover:border-white/20 transition-colors"
              >
                <h3 className="text-[20px] font-bold text-white mb-3 leading-tight">
                  {article.title}
                </h3>
                <p className="text-[15px] text-[rgba(255,255,255,0.65)] leading-relaxed mb-6">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[rgba(255,255,255,0.4)]">
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
            <div className="text-center py-20 text-[rgba(255,255,255,0.4)] text-[15px]">
              No articles found in this category.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
