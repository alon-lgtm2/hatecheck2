import { getArticleBySlug, articles } from "@/lib/articles";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/sections/Hero";

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
    <div>
      <PageHeader
        label={article.category.toUpperCase()}
        title={article.title}
        subtitle={article.excerpt}
      />

      <section style={{ padding: "100px 0" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "680px 1fr", gap: "96px" }}>
            {/* Main content */}
            <div>
              {/* Back */}
              <Link
                href={`/${locale}/resources`}
                style={{ fontSize: "13px", color: "#9CA3AF", marginBottom: "48px", display: "inline-block", transition: "color 0.2s", textDecoration: "none" }}
              >
                Back to Resources
              </Link>

              {/* Meta */}
              <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "40px", paddingBottom: "40px", borderBottom: "1px solid #E5E7EB" }}>
                <span style={{ fontSize: "13px", color: "#9CA3AF" }}>
                  {new Date(article.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span style={{ fontSize: "13px", color: "#9CA3AF" }}>
                  {article.readTime}
                </span>
              </div>

              {/* Content */}
              <div style={{ lineHeight: 1.9 }}>
                {paragraphs.map((p, i) => {
                  if (p.startsWith("## ")) {
                    return (
                      <h2
                        key={i}
                        style={{ fontSize: "24px", fontWeight: 400, color: "#1B1A2B", marginTop: "64px", marginBottom: "16px" }}
                      >
                        {p.replace("## ", "")}
                      </h2>
                    );
                  }
                  if (p.startsWith("**") && p.endsWith("**")) {
                    return (
                      <h3
                        key={i}
                        style={{ fontSize: "18px", fontWeight: 400, color: "#1B1A2B", marginTop: "32px", marginBottom: "8px" }}
                      >
                        {p.replace(/\*\*/g, "")}
                      </h3>
                    );
                  }
                  if (p.startsWith("1. ") || p.startsWith("- ")) {
                    const items = p.split("\n").filter(Boolean);
                    return (
                      <ul key={i} style={{ display: "flex", flexDirection: "column", gap: "8px", padding: 0, listStyle: "none", marginBottom: "24px" }}>
                        {items.map((item, j) => (
                          <li key={j} style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.8 }}>
                            {item.replace(/^[0-9]+\.\s|-\s/, "")}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={i} style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.8, marginBottom: "24px" }}>
                      {p}
                    </p>
                  );
                })}
              </div>

              {/* Tags */}
              <div style={{ marginTop: "64px", paddingTop: "40px", borderTop: "1px solid #E5E7EB" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
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
              <div style={{ marginTop: "64px" }}>
                <Link
                  href={`/${locale}/resources`}
                  style={{ fontSize: "15px", color: "#2563EB", textDecoration: "none", transition: "color 0.2s" }}
                >
                  Back to all resources
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div style={{ position: "sticky", top: "120px" }}>
                {related.length > 0 && (
                  <div className="glass-card" style={{ padding: "32px" }}>
                    <p className="section-label" style={{ marginBottom: "24px" }}>RELATED ARTICLES</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                      {related.map((r, idx) => (
                        <Link
                          key={r.slug}
                          href={`/${locale}/resources/${r.slug}`}
                          style={{
                            display: "block",
                            borderBottom: idx < related.length - 1 ? "1px solid #E5E7EB" : "none",
                            paddingBottom: idx < related.length - 1 ? "32px" : "0",
                            textDecoration: "none",
                            transition: "opacity 0.2s",
                          }}
                        >
                          <span style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.15em", color: "#9CA3AF", marginBottom: "8px", display: "block" }}>
                            {new Date(r.date).toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            }).toUpperCase()}
                          </span>
                          <h4 style={{ fontSize: "16px", fontWeight: 400, color: "#1B1A2B", marginBottom: "8px", lineHeight: 1.3 }}>
                            {r.title}
                          </h4>
                          <p style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.7 }}>
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
      </section>
    </div>
  );
}
