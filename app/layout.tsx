import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { CursorBlob } from "@/components/ui/CursorBlob";
import { siteConfig } from "@/lib/site";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  keywords: [
    "Akshat Gupta",
    "Full-Stack Developer",
    "BMSCE",
    "Orange Taxi",
    "Supabase",
    "React",
    "Robotics",
    "Computer Vision",
    "Bengaluru",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Person schema for search engines
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "Full-Stack Developer",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "BMS College of Engineering",
      location: "Bengaluru, India",
    },
    email: `mailto:${siteConfig.email}`,
    telephone: siteConfig.phone,
    url: siteConfig.url,
    sameAs: [siteConfig.github, siteConfig.linkedin],
    knowsAbout: [
      "Full-Stack Web Development",
      "React",
      "TypeScript",
      "Supabase",
      "IoT",
      "Robotics",
      "Cybersecurity",
      "Computer Vision",
    ],
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-cream dark:bg-[#121212] text-ink dark:text-cream min-h-screen flex flex-col font-body transition-colors duration-200">
        <CursorBlob />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
