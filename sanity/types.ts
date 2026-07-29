import type { IconName } from "@/components/ui/Icons";

/**
 * De vormen die sanity/queries.ts teruggeeft. Handgeschreven zodat de
 * componenten getypt blijven; `npm run types:sanity` genereert daarnaast
 * sanity.types.ts uit de schema's als controle.
 */

export type SanityAfbeelding = {
  alt: string | null;
  hotspot?: { x: number; y: number; height: number; width: number } | null;
  crop?: { top: number; bottom: number; left: number; right: number } | null;
  asset: {
    _id: string;
    url: string;
    metadata: {
      lqip: string | null;
      dimensions: { width: number; height: number } | null;
    } | null;
  } | null;
} | null;

export type Contact = {
  telefoon: string;
  email: string;
  adres: string | null;
  postcode: string | null;
  plaats: string | null;
  kvk: string | null;
  instagram: string | null;
  facebook: string | null;
};

export type SiteData = {
  naam: string;
  heroRegel1: string;
  heroRegel2: string;
  heroRegel3: string;
  heroAccent: string;
  heroIntro: string;
  heroPunten: string[];
  footerTekst: string;
  regios: string[];
  url: string;
  seoOmschrijving: string;
  zoekmachinesToestaan: boolean | null;
  contact: Contact;
};

export type CijferData = {
  waarde: number;
  achtervoegsel: string | null;
  label: string;
  icoon: Extract<IconName, "cap" | "wheel" | "chart">;
};

export type UspData = {
  titel: string;
  tekst: string;
  icoon: IconName;
  groot: boolean | null;
};

export type OverArashData = {
  kop: string;
  alineas: string[];
  badge: string | null;
  portret: SanityAfbeelding;
};

export type ModuleData = {
  titel: string;
  indicatie: string;
  samenvatting: string;
  onderdelen: string[];
};

export type AanpakData = {
  intro: string;
  eindpunt: string;
  modules: ModuleData[];
};

export type PakketData = {
  /** Sanity's array-sleutel. Dit is de waarde in het aanmeldformulier. */
  _key: string;
  naam: string;
  aantalUren: number;
  prijs: number;
  examensInbegrepen: boolean | null;
  bevat: string[];
  uitgelicht: boolean | null;
  badge: string | null;
};

export type PakkettenData = {
  actieLabel: string | null;
  actieTekst: string;
  losseLesPrijs: number;
  losseLesTekst: string;
  lijst: PakketData[];
};

export type ReviewData = {
  naam: string;
  sterren: number;
  wanneer: string;
  tekst: string;
};

export type ReviewsData = {
  gemiddelde: number;
  bron: string;
  aantal: number;
  lijst: ReviewData[];
};

export type FaqData = {
  intro: string;
  lijst: Array<{ vraag: string; antwoord: string }>;
};

export type ArtikelData = {
  titel: string;
  alineas: string[];
  lijst: string[] | null;
};

export type VoorwaardenData = {
  intro: string;
  slotnoot: string | null;
  artikelen: ArtikelData[];
};

export type PaginaData = {
  site: SiteData;
  cijfers: CijferData[];
  usps: UspData[];
  overArash: OverArashData;
  aanpak: AanpakData;
  pakketten: PakkettenData;
  reviews: ReviewsData;
  faq: FaqData;
};
