import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SITE_URL, profile } from "@/lib/site";

const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: "400", variable: "--font-archivo-black" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const description = "Full-stack graduate developer in Pretoria. React Native, TypeScript, Python and Flask.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: profile.name, template: `%s | ${profile.name}` },
  description,
  alternates: { canonical: "/" },
  openGraph: { title: profile.name, description, url: SITE_URL, siteName: profile.name, locale: "en_ZA", type: "website" },
  twitter: { card: "summary_large_image", title: profile.name, description },
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: SITE_URL,
  sameAs: [profile.github, profile.linkedin],
  alumniOf: "University of Pretoria",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivoBlack.variable} ${inter.variable}`}>
      <head>
        {/* Without JavaScript the scroll reveals never run, so show everything. */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] btn btn-solid">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      </body>
    </html>
  );
}
