import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Article } from "@/lib/articles";

interface ArticleCardProps {
  article: Article;
  locale: string;
}

const categoryColors: Record<string, string> = {
  Standards: "#1A52C8",
  Technology: "#0891B2",
  Legal: "#7C3AED",
  Analysis: "#D97706",
  Guides: "#16A34A",
};

export default function ArticleCard({ article, locale }: ArticleCardProps) {
  const color = categoryColors[article.category] || "#1A52C8";

  return (
    <Link
      href={`/${locale}/resources/${article.slug}`}
      className="block group"
    >
      <article className="h-full p-6 rounded-sm border border-[#C6D2E0] bg-white shadow-gov card-hover flex flex-col hover:border-[#1A52C8] transition-colors">
        {/* Category + Date */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="label-caps px-2 py-0.5 rounded-sm"
            style={{
              color: color,
              backgroundColor: `${color}15`,
              border: `1px solid ${color}30`,
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.12em",
            }}
          >
            {article.category.toUpperCase()}
          </span>
          <div className="flex items-center gap-1 text-xs text-[#8099B3]">
            <Clock size={11} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              {article.readTime}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3
          className="text-lg font-heading font-semibold text-[#0C1B2E] mb-3 leading-tight group-hover:text-[#1A52C8] transition-colors"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-[#2B3F57] leading-relaxed flex-1 mb-4">
          {article.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-[#DDE4EE]">
          <span
            className="text-xs text-[#8099B3]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {new Date(article.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1 text-xs text-[#1A52C8] group-hover:text-[#1440A3] transition-colors font-heading tracking-wide">
            Read More
            <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </article>
    </Link>
  );
}
