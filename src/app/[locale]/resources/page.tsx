"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { articles, articleCategories } from "@/lib/articles";
import ArticleCard from "@/components/ui/ArticleCard";

export default function ResourcesPage() {
  const t = useTranslations("resources");
  const locale = useLocale();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <div className="pt-[88px]">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#DDE4EE] bg-[#F8FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="w-10 h-[2px] bg-[#1A52C8] mb-4" />
            <p className="gov-label mb-3">KNOWLEDGE BASE</p>
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

      {/* Filter + Articles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#EFF3F8]">
        <div className="max-w-7xl mx-auto">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {articleCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-sm text-sm font-heading tracking-wider transition-all"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  letterSpacing: "0.08em",
                  backgroundColor: activeCategory === cat ? "#1A52C8" : "transparent",
                  color: activeCategory === cat ? "#FFFFFF" : "#2B3F57",
                  border: activeCategory === cat ? "1px solid #1A52C8" : "1px solid #C6D2E0",
                  cursor: "pointer",
                }}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Article grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((article) => (
              <ArticleCard key={article.slug} article={article} locale={locale} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-[#8099B3]">
              No articles found in this category.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
