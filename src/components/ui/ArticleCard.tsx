import Link from "next/link";
import { Article } from "@/lib/articles";

interface ArticleCardProps {
  article: Article;
  locale: string;
}

export default function ArticleCard({ article, locale }: ArticleCardProps) {
  return (
    <Link
      href={`/${locale}/resources/${article.slug}`}
      className="block group"
    >
      <article className="py-8 border-b border-[#E5E7EB]">
        {/* Date + Category */}
        <div
          className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#9CA3AF] mb-3"
        >
          {new Date(article.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
          {" \u00B7 "}
          {article.category}
        </div>

        {/* Title */}
        <h3
          className="text-[20px] font-bold text-[#0A1628] mb-2 group-hover:underline"
          style={{ letterSpacing: "-0.02em" }}
        >
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-[15px] text-[#374151] leading-[1.75] line-clamp-3">
          {article.excerpt}
        </p>
      </article>
    </Link>
  );
}
