import { tracks, getLessonBySlug } from "@/lib/academy";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/sections/Hero";

export async function generateStaticParams() {
  const params: { track: string; lesson: string }[] = [];
  for (const track of tracks) {
    for (const lesson of track.lessons) {
      params.push({ track: track.slug, lesson: lesson.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ track: string; lesson: string }>;
}): Promise<Metadata> {
  const { track, lesson } = await params;
  const result = getLessonBySlug(track, lesson);
  if (!result) return { title: "Lesson Not Found" };
  return {
    title: `${result.lesson.title} | HateCheck Academy`,
    description: `${result.track.title} - ${result.lesson.title}`,
  };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ track: string; lesson: string; locale: string }>;
}) {
  const { track: trackSlug, lesson: lessonSlug, locale } = await params;
  const result = getLessonBySlug(trackSlug, lessonSlug);

  if (!result) notFound();

  const { track, lesson } = result;
  const currentIdx = track.lessons.findIndex((l) => l.slug === lessonSlug);
  const prevLesson = currentIdx > 0 ? track.lessons[currentIdx - 1] : null;
  const nextLesson =
    currentIdx < track.lessons.length - 1 ? track.lessons[currentIdx + 1] : null;

  // Convert markdown-like content to paragraphs
  const paragraphs = lesson.content.split("\n\n").filter(Boolean);

  return (
    <div>
      <PageHeader
        label={`TRACK ${track.num} \u2022 ${track.title.toUpperCase()}`}
        title={lesson.title}
        subtitle={lesson.readTime}
      />

      <section style={{ padding: "80px 0 120px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px" }}>
          <Link
            href={`/${locale}/academy/${track.slug}`}
            style={{
              fontSize: "13px",
              color: "#9CA3AF",
              marginBottom: "48px",
              display: "inline-block",
              textDecoration: "none",
            }}
          >
            &larr; Back to {track.title}
          </Link>

          {/* Content */}
          <div style={{ lineHeight: 1.9 }}>
            {paragraphs.map((p, i) => {
              if (p.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    style={{
                      fontSize: "24px",
                      fontWeight: 400,
                      color: "#1B1A2B",
                      marginTop: "64px",
                      marginBottom: "16px",
                    }}
                  >
                    {p.replace("## ", "")}
                  </h2>
                );
              }
              if (p.startsWith("### ")) {
                return (
                  <h3
                    key={i}
                    style={{
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "#1B1A2B",
                      marginTop: "40px",
                      marginBottom: "12px",
                    }}
                  >
                    {p.replace("### ", "")}
                  </h3>
                );
              }
              if (p.startsWith("**") && p.includes("**:")) {
                const parts = p.split("**:");
                const label = parts[0].replace(/\*\*/g, "");
                const rest = parts.slice(1).join("**:");
                return (
                  <p
                    key={i}
                    style={{
                      fontSize: "15px",
                      color: "#6B7280",
                      lineHeight: 1.8,
                      marginBottom: "16px",
                    }}
                  >
                    <strong style={{ color: "#1B1A2B" }}>{label}:</strong>
                    {rest}
                  </p>
                );
              }
              if (p.startsWith("**") && p.endsWith("**")) {
                return (
                  <h3
                    key={i}
                    style={{
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "#1B1A2B",
                      marginTop: "32px",
                      marginBottom: "8px",
                    }}
                  >
                    {p.replace(/\*\*/g, "")}
                  </h3>
                );
              }
              if (p.startsWith("1. ") || p.startsWith("- ")) {
                const items = p.split("\n").filter(Boolean);
                return (
                  <ul
                    key={i}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      padding: "0 0 0 20px",
                      marginBottom: "24px",
                    }}
                  >
                    {items.map((item, j) => (
                      <li
                        key={j}
                        style={{
                          fontSize: "15px",
                          color: "#6B7280",
                          lineHeight: 1.8,
                        }}
                      >
                        {item.replace(/^[0-9]+\.\s|-\s/, "")}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p
                  key={i}
                  style={{
                    fontSize: "15px",
                    color: "#6B7280",
                    lineHeight: 1.8,
                    marginBottom: "24px",
                  }}
                >
                  {p}
                </p>
              );
            })}
          </div>

          {/* Navigation */}
          <div
            style={{
              marginTop: "80px",
              paddingTop: "40px",
              borderTop: "1px solid #E5E7EB",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {prevLesson ? (
              <Link
                href={`/${locale}/academy/${track.slug}/${prevLesson.slug}`}
                style={{
                  fontSize: "14px",
                  color: "#2563EB",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                &larr; {prevLesson.title}
              </Link>
            ) : (
              <span />
            )}
            {nextLesson ? (
              <Link
                href={`/${locale}/academy/${track.slug}/${nextLesson.slug}`}
                style={{
                  fontSize: "14px",
                  color: "#2563EB",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                {nextLesson.title} &rarr;
              </Link>
            ) : (
              <Link
                href={`/${locale}/academy`}
                style={{
                  fontSize: "14px",
                  color: "#2563EB",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Back to Academy &rarr;
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
