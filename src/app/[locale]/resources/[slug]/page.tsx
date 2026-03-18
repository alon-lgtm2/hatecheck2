import { getArticleBySlug, articles } from "@/lib/articles";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

const categoryColors: Record<string, string> = {
  Standards: "#1A52C8",
  Technology: "#0891B2",
  Legal: "#7C3AED",
  Analysis: "#D97706",
  Guides: "#16A34A",
};

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const color = categoryColors[article.category] || "#1A52C8";

  // Convert markdown-like content to paragraphs
  const paragraphs = article.content.split("\n\n").filter(Boolean);

  return (
    <div className="pt-[88px] bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back */}
        <Link
          href={`/${locale}/resources`}
          className="inline-flex items-center gap-2 text-sm text-[#8099B3] hover:text-[#2B3F57] mb-8 transition-colors"
        >
          <ArrowLeft size={14} />
          Back to Resources
        </Link>

        {/* Category badge */}
        <div className="mb-5">
          <span
            className="text-xs px-2 py-1 rounded-sm font-heading tracking-widest"
            style={{
              color: color,
              backgroundColor: `${color}15`,
              border: `1px solid ${color}30`,
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.12em",
              fontSize: "0.65rem",
            }}
          >
            {article.category.toUpperCase()}
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-heading font-bold text-[#0C1B2E] mb-5 leading-tight"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          {article.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-5 mb-8 pb-8 border-b border-[#C6D2E0]">
          <div className="flex items-center gap-1.5 text-sm text-[#8099B3]">
            <Calendar size={13} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem" }}>
              {new Date(article.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-[#8099B3]">
            <Clock size={13} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem" }}>
              {article.readTime}
            </span>
          </div>
        </div>

        {/* Excerpt */}
        <p
          className="text-lg text-[#2B3F57] mb-10 leading-relaxed"
          style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}
        >
          {article.excerpt}
        </p>

        {/* Content */}
        <div className="prose-custom space-y-6">
          {paragraphs.map((p, i) => {
            if (p.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="text-2xl font-heading font-bold text-[#0C1B2E] mt-10 mb-4"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {p.replace("## ", "")}
                </h2>
              );
            }
            if (p.startsWith("**") && p.endsWith("**")) {
              return (
                <h3
                  key={i}
                  className="text-lg font-heading font-semibold text-[#1A52C8] mt-6 mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {p.replace(/\*\*/g, "")}
                </h3>
              );
            }
            if (p.startsWith("1. ") || p.startsWith("- ")) {
              const items = p.split("\n").filter(Boolean);
              return (
                <ul key={i} className="space-y-2 pl-4">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-[#2B3F57]">
                      <span className="text-[#1A52C8] flex-shrink-0 mt-0.5">▸</span>
                      {item.replace(/^[0-9]+\.\s|-\s/, "")}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-[#2B3F57] leading-relaxed">
                {p}
              </p>
            );
          })}
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-[#C6D2E0]">
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-sm"
                style={{
                  backgroundColor: "rgba(26, 82, 200, 0.08)",
                  border: "1px solid rgba(26, 82, 200, 0.15)",
                  color: "#8099B3",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Back link */}
        <div className="mt-12">
          <Link
            href={`/${locale}/resources`}
            className="inline-flex items-center gap-2 text-sm text-[#1A52C8] hover:text-[#1440A3] transition-colors"
          >
            <ArrowLeft size={14} />
            Back to all resources
          </Link>
        </div>
      </div>
    </div>
  );
}
