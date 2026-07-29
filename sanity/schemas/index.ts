import type { SchemaTypeDefinition } from "sanity";

import { aanpak } from "./aanpak";
import { cijfers } from "./cijfers";
import { faq } from "./faq";
import { overArash } from "./overArash";
import { pakketten } from "./pakketten";
import { reviews } from "./reviews";
import { site } from "./site";
import { usps } from "./usps";
import { voorwaarden } from "./voorwaarden";

/**
 * Elk type is een singleton: precies één document, met de lijsten als arrays
 * erin. Zo volgt het menu in de Studio de volgorde van de pagina.
 */
export const schemaTypes: SchemaTypeDefinition[] = [
  site,
  cijfers,
  usps,
  overArash,
  aanpak,
  pakketten,
  reviews,
  faq,
  voorwaarden,
];

/** Volgorde van het Studio-menu = volgorde van de secties op de pagina. */
export const singletons = [
  { type: "site", titel: "Algemeen & contact", icoon: "⚙️" },
  { type: "cijfers", titel: "Cijferbalk", icoon: "📊" },
  { type: "usps", titel: "Waarom wij", icoon: "✅" },
  { type: "overArash", titel: "Over Arash", icoon: "👤" },
  { type: "aanpak", titel: "Aanpak (RIS)", icoon: "🛣️" },
  { type: "pakketten", titel: "Prijzen", icoon: "💶" },
  { type: "reviews", titel: "Reviews", icoon: "⭐" },
  { type: "faq", titel: "Veelgestelde vragen", icoon: "❓" },
  { type: "voorwaarden", titel: "Algemene voorwaarden", icoon: "📄" },
] as const;
