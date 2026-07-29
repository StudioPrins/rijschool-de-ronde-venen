import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import { SanityLive, sanityFetch } from "@/sanity/live";
import { siteQuery } from "@/sanity/queries";
import type { SiteData } from "@/sanity/types";
import "../globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

/** Zonder stega: onzichtbare tekens horen niet in <meta>-tags of JSON-LD. */
async function haalSite(): Promise<SiteData> {
  const { data } = await sanityFetch({ query: siteQuery, stega: false });
  return data as SiteData;
}

export async function generateMetadata(): Promise<Metadata> {
  const site = await haalSite();

  return {
    metadataBase: new URL(site.url),
    title: {
      default: `${site.naam} — rijles in ${site.regios.slice(0, 3).join(", ")}`,
      template: `%s · ${site.naam}`,
    },
    description: site.seoOmschrijving,
    openGraph: {
      type: "website",
      locale: "nl_NL",
      url: site.url,
      siteName: site.naam,
      title: `${site.naam} — rijles in jouw tempo`,
      description: site.seoOmschrijving,
    },
    // Arash zet dit aan in de Studio zodra alle echte content erin staat.
    robots: site.zoekmachinesToestaan
      ? { index: true, follow: true }
      : { index: false, follow: false },
  };
}

export const viewport: Viewport = {
  themeColor: "#0a1020",
};

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const site = await haalSite();
  const { isEnabled: concept } = await draftMode();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DrivingSchool",
    name: site.naam,
    description: site.seoOmschrijving,
    url: site.url,
    telephone: site.contact.telefoon,
    email: site.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.adres,
      postalCode: site.contact.postcode,
      addressLocality: site.contact.plaats,
      addressCountry: "NL",
    },
    areaServed: site.regios,
  };

  return (
    <html lang="nl">
      <body
        className={`${bricolage.variable} ${instrument.variable} ${jetbrains.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <SanityLive />
        {concept && <VisualEditing />}
      </body>
    </html>
  );
}
