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
    <div className="pt-[73px]">
      {/* Page Header */}
      <section className="py-[120px] px-16 border-b border-[#E5E7EB] bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl">
            <p className="swiss-label mb-4">RESOURCES</p>
            <h1
              className="font-bold text-[#0A1628] mb-6"
              style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.1 }}
            >
              {t("title")}
            </h1>
            <p className="text-[17px] text-[#374151] leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Filter + Articles */}
      <section className="py-[120px] px-16 bg-white">
        <div className="max-w-[1400px] mx-auto">
          {/* Category filter */}
          <div className="flex flex-wrap gap-4 mb-16 border-b border-[#E5E7EB] pb-8">
            {articleCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="text-[10px] font-medium uppercase tracking-[0.2em] transition-colors cursor-pointer"
                style={{
                  color: activeCategory === cat ? "#0A1628" : "#9CA3AF",
                  borderBottom: activeCategory === cat ? "1px solid #0A1628" : "1px solid transparent",
                  paddingBottom: "4px",
                  background: "none",
                  border: "none",
                  borderBottomWidth: "1px",
                  borderBottomStyle: "solid",
                  borderBottomColor: activeCategory === cat ? "#0A1628" : "transparent",
                }}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Article grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {filtered.map((article) => (
              <Link
                key={article.slug}
                href={`/${locale}/resources/${article.slug}`}
                className="block border border-[#E5E7EB] p-8 hover:bg-[#FAFAFA] transition-colors -ml-px -mt-px"
              >
                <h3 className="text-[20px] font-bold text-[#0A1628] mb-3 leading-tight">
                  {article.title}
                </h3>
                <p className="text-[15px] text-[#374151] leading-relaxed mb-6">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <span className="swiss-label">
                    {new Date(article.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    }).toUpperCase()}
                  </span>
                  <span className="swiss-label">
                    {article.category.toUpperCase()}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-[#9CA3AF] text-[15px]">
              No articles found in this category.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
