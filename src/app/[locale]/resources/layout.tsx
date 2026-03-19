import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources - Articles & Research",
  description:
    "Articles, research, and analysis on antisemitism detection, hate speech policy, and AI-powered content moderation.",
  openGraph: {
    title: "Resources - Articles & Research | HateCheck",
    description:
      "Articles, research, and analysis on antisemitism detection, hate speech policy, and AI-powered content moderation.",
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
