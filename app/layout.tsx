import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { contact, site } from "@/lib/content/site";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.naam} — rijles in Mijdrecht, Wilnis en Uithoorn`,
    template: `%s · ${site.naam}`,
  },
  description:
    "Rijles in jouw tempo bij Arash. Persoonlijke begeleiding volgens de RIS-methode, ervaring met autisme, ADHD en ADD, avond- en weekendlessen en geen wachtlijst.",
  keywords: [
    "rijschool Mijdrecht",
    "rijles De Ronde Venen",
    "rijschool Wilnis",
    "rijles Uithoorn",
    "RIS-methode",
    "rijles autisme ADHD",
  ],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: site.url,
    siteName: site.naam,
    title: `${site.naam} — rijles in jouw tempo`,
    description:
      "Persoonlijke rijlessen volgens de RIS-methode in Mijdrecht, Wilnis, Woerden, Uithoorn en Waverveen.",
  },
  // TODO: weghalen zodra de echte content, reviews en contactgegevens erin staan.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#0a1020",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  name: site.naam,
  description:
    "Rijschool in De Ronde Venen. Persoonlijke rijlessen volgens de RIS-methode, met ervaring in het begeleiden van leerlingen met autisme, ADHD en ADD.",
  url: site.url,
  telephone: contact.telefoon,
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.adres,
    postalCode: contact.postcode,
    addressLocality: contact.plaats,
    addressCountry: "NL",
  },
  areaServed: ["Mijdrecht", "Wilnis", "Woerden", "Uithoorn", "Waverveen", "Vinkeveen", "Abcoude"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
      </body>
    </html>
  );
}
