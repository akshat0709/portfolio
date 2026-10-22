import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { CursorBlob } from "@/components/ui/CursorBlob";

export const metadata: Metadata = {
  title: "Akshat Gupta | Full-Stack Developer & CS Undergrad",
  description:
    "Portfolio of Akshat Gupta. CS undergrad at BMSCE Bengaluru (IoT, Cybersecurity & Blockchain) who builds real systems—from the live Orange Taxi EV platform to an autonomous rescue robot.",
  authors: [{ name: "Akshat Gupta" }],
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
  metadataBase: new URL("https://akshat-gupta.dev"),
  openGraph: {
    title: "Akshat Gupta | Full-Stack Developer & CS Undergrad",
    description:
      "Full-stack developer and CS undergrad who builds real systems, from a live ride-hailing platform to an autonomous rescue robot.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshat Gupta | Full-Stack Developer & CS Undergrad",
    description:
      "Full-stack developer and CS undergrad who builds real systems, from a live ride-hailing platform to an autonomous rescue robot.",
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
    name: "Akshat Gupta",
    jobTitle: "Full-Stack Developer",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "BMS College of Engineering",
      location: "Bengaluru, India",
    },
    email: "mailto:akshat070906@gmail.com",
    telephone: "+91-7360911966",
    url: "https://github.com/akshat0709",
    sameAs: [
      "https://github.com/akshat0709",
      "https://linkedin.com/in/akshat-gupta-957084317",
    ],
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
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
