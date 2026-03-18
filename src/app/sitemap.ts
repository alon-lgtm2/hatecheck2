import { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { reports } from "@/lib/reports";

const BASE_URL = "https://hatecheck.eu";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["en", "nl"];

  const staticPages = [
    "",
    "/product",
    "/standards",
    "/about",
    "/organizations",
    "/resources",
    "/reports",
    "/contact",
  ];

  const staticEntries = locales.flatMap((locale) =>
    staticPages.map((page) => ({
      url: `${BASE_URL}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page === "" ? 1 : 0.8,
    }))
  );

  const articleEntries = locales.flatMap((locale) =>
    articles.map((a) => ({
      url: `${BASE_URL}/${locale}/resources/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    }))
  );

  const reportEntries = locales.flatMap((locale) =>
    reports.map((r) => ({
      url: `${BASE_URL}/${locale}/reports/${r.id}`,
      lastModified: new Date(r.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    }))
  );

  return [...staticEntries, ...articleEntries, ...reportEntries];
}
