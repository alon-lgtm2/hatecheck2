import { getArticleBySlug, articles } from "@/lib/articles";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

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

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  // Convert markdown-like content to paragraphs
  const paragraphs = article.content.split("\n\n").filter(Boolean);

  // Get related articles (same category, excluding current)
  const related = articles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  return (
    <div className="pt-32">
      <div className="max-w-[1400px] mx-auto px-16 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[680px_1fr] gap-24">
          {/* Main content */}
          <div>
            {/* Back */}
            <Link
              href={`/${locale}/resources`}
              className="text-[13px] text-[rgba(255,255,255,0.4)] hover:text-[#3B82F6] mb-12 inline-block transition-colors"
            >
              Back to Resources
            </Link>

            {/* Category */}
            <div className="mb-6">
              <span className="section-label">
                {article.category.toUpperCase()}
              </span>
            </div>

            {/* Title */}
            <h1
              className="font-bold text-white mb-6 leading-tight"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.15 }}
            >
              {article.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-6 mb-10 pb-10 border-b border-white/10">
              <span className="text-[13px] text-[rgba(255,255,255,0.4)]">
                {new Date(article.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="text-[13px] text-[rgba(255,255,255,0.4)]">
                {article.readTime}
              </span>
            </div>

            {/* Excerpt */}
            <p className="text-[18px] text-[rgba(255,255,255,0.75)] mb-12 leading-relaxed">
              {article.excerpt}
            </p>

            {/* Content */}
            <div className="space-y-6 max-w-3xl" style={{ lineHeight: 1.9 }}>
              {paragraphs.map((p, i) => {
                if (p.startsWith("## ")) {
                  return (
                    <h2
                      key={i}
                      className="text-[24px] font-bold text-white mt-16 mb-4"
                    >
                      {p.replace("## ", "")}
                    </h2>
                  );
                }
                if (p.startsWith("**") && p.endsWith("**")) {
                  return (
                    <h3
                      key={i}
                      className="text-[18px] font-bold text-white mt-8 mb-2"
                    >
                      {p.replace(/\*\*/g, "")}
                    </h3>
                  );
                }
                if (p.startsWith("1. ") || p.startsWith("- ")) {
                  const items = p.split("\n").filter(Boolean);
                  return (
                    <ul key={i} className="space-y-2 pl-0">
                      {items.map((item, j) => (
                        <li key={j} className="text-[15px] text-[rgba(255,255,255,0.75)] leading-[1.8]">
                          {item.replace(/^[0-9]+\.\s|-\s/, "")}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={i} className="text-[15px] text-[rgba(255,255,255,0.75)] leading-[1.8]">
                    {p}
                  </p>
                );
              })}
            </div>

            {/* Tags */}
            <div className="mt-16 pt-10 border-t border-white/10">
              <div className="flex flex-wrap gap-3">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="section-label"
                  >
                    {tag.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>

            {/* Back link */}
            <div className="mt-16">
              <Link
                href={`/${locale}/resources`}
                className="text-[15px] text-white hover:text-[#3B82F6] transition-colors"
              >
                Back to all resources
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-[120px]">
              {related.length > 0 && (
                <div className="glass-card p-8">
                  <p className="section-label mb-6">RELATED ARTICLES</p>
                  <div className="space-y-8">
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        href={`/${locale}/resources/${r.slug}`}
                        className="block border-b border-white/10 pb-8 last:border-b-0 last:pb-0 hover:opacity-70 transition-opacity"
                      >
                        <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[rgba(255,255,255,0.4)] mb-2 block">
                          {new Date(r.date).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          }).toUpperCase()}
                        </span>
                        <h4 className="text-[16px] font-bold text-white mb-2 leading-tight">
                          {r.title}
                        </h4>
                        <p className="text-[13px] text-[rgba(255,255,255,0.65)] leading-relaxed">
                          {r.excerpt.slice(0, 120)}...
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
