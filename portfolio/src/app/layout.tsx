// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alex Johnson - Full Stack Developer & UI/UX Enthusiast",
  description:
    "I craft digital experiences that blend beautiful design with powerful functionality. Passionate about creating scalable solutions that make a difference.",
  keywords: [
    "full stack developer",
    "react developer",
    "ui/ux designer",
    "web developer",
    "javascript",
    "typescript",
    "node.js",
    "portfolio",
  ],
  openGraph: {
    title: "Alex Johnson - Full Stack Developer & UI/UX Enthusiast",
    description:
      "I craft digital experiences that blend beautiful design with powerful functionality.",
    url: "https://alexjohnson.dev",
    siteName: "Alex Johnson Portfolio",
    images: [{ url: "/og-image.jpg" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Johnson - Full Stack Developer & UI/UX Enthusiast",
    description:
      "I craft digital experiences that blend beautiful design with powerful functionality.",
    images: ["/og-image.jpg"],
    creator: "@alexjohnson",
  },
  authors: [{ name: "Alex Johnson" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3B82F6"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // JSON-LD schema (structured data)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alex Johnson",
    jobTitle: "Full Stack Developer",
    description:
      "Full Stack Developer & UI/UX Enthusiast specializing in React, Node.js, and modern web technologies",
    url: "https://alexjohnson.dev",
    sameAs: [
      "https://github.com/alexjohnson",
      "https://linkedin.com/in/alexjohnson",
      "https://twitter.com/alexjohnson",
    ],
    knowsAbout: ["React", "TypeScript", "Node.js", "Python", "GraphQL", "AWS", "UI/UX Design", "Web Development"],
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        {children}
        {/* JSON-LD injected safely for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
