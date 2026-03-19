import { tracks, getTrackBySlug } from "@/lib/academy";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/sections/Hero";

export async function generateStaticParams() {
  return tracks.map((t) => ({ track: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ track: string }>;
}): Promise<Metadata> {
  const { track: slug } = await params;
  const track = getTrackBySlug(slug);
  if (!track) return { title: "Track Not Found" };
  return {
    title: `${track.title} | HateCheck Academy`,
    description: track.desc,
  };
}

export default async function TrackPage({
  params,
}: {
  params: Promise<{ track: string; locale: string }>;
}) {
  const { track: slug, locale } = await params;
  const track = getTrackBySlug(slug);

  if (!track) notFound();

  return (
    <div>
      <PageHeader
        label={`TRACK ${track.num}`}
        title={track.title}
        subtitle={track.desc}
      />

      <section style={{ padding: "80px 0 120px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
          <Link
            href={`/${locale}/academy`}
            style={{
              fontSize: "13px",
              color: "#9CA3AF",
              marginBottom: "48px",
              display: "inline-block",
              textDecoration: "none",
            }}
          >
            &larr; Back to Academy
          </Link>

          <div
            style={{
              display: "flex",
              gap: "16px",
              marginBottom: "48px",
              paddingBottom: "32px",
              borderBottom: "1px solid #E5E7EB",
            }}
          >
            <span style={{ fontSize: "13px", color: "#9CA3AF", fontWeight: 600 }}>
              {track.guides}
            </span>
            <span style={{ fontSize: "13px", color: "#D1D5DB" }}>|</span>
            <span style={{ fontSize: "13px", color: "#9CA3AF", fontWeight: 600 }}>
              {track.time}
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {track.lessons.map((lesson, idx) => (
              <Link
                key={lesson.slug}
                href={`/${locale}/academy/${track.slug}/${lesson.slug}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "24px",
                  padding: "28px 0",
                  borderBottom: idx < track.lessons.length - 1 ? "1px solid #F3F4F6" : "none",
                  textDecoration: "none",
                  transition: "background 0.15s",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#D1D5DB",
                    letterSpacing: "0.1em",
                    minWidth: "32px",
                  }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "#1B1A2B",
                      marginBottom: "4px",
                    }}
                  >
                    {lesson.title}
                  </h3>
                  <span style={{ fontSize: "13px", color: "#9CA3AF" }}>
                    {lesson.readTime}
                  </span>
                </div>
                <span style={{ fontSize: "14px", color: "#2563EB", fontWeight: 600 }}>
                  Read &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
