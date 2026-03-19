import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hatecheck.eu"),
  title: {
    default: "HateCheck - AI-Powered Antisemitism Detection Platform",
    template: "%s | HateCheck",
  },
  description:
    "HateCheck is Europe's leading AI-powered platform for detecting, classifying, and responding to antisemitism and hate speech across the Netherlands and Europe.",
  keywords: [
    "antisemitism detection",
    "hate speech AI",
    "Netherlands",
    "IHRA",
    "content moderation",
  ],
  openGraph: {
    title: "HateCheck - AI-Powered Antisemitism Detection Platform",
    description:
      "AI-powered detection, classification, and enforcement of antisemitism and hate speech. Four legal standards. One structured workflow.",
    url: "https://hatecheck.eu",
    images: [
      {
        url: "/images/oglogo.png",
        width: 1200,
        height: 630,
        alt: "HateCheck - AI-Powered Antisemitism Detection Platform",
      },
    ],
    locale: "en_US",
    type: "website",
    siteName: "HateCheck",
  },
  twitter: {
    card: "summary_large_image",
    title: "HateCheck - AI-Powered Antisemitism Detection Platform",
    description:
      "AI-powered detection, classification, and enforcement of antisemitism and hate speech.",
    images: [
      {
        url: "/images/oglogo.png",
        width: 1200,
        height: 630,
        alt: "HateCheck - AI-Powered Antisemitism Detection Platform",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Barlow:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
