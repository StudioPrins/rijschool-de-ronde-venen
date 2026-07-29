/* =====================================================================
   PLACEHOLDER-DATA — vervang dit bestand voordat de site live gaat
   ---------------------------------------------------------------------
   Alle onderstaande contactgegevens en cijfers zijn VERZONNEN en staan
   hier alleen om het ontwerp te kunnen tonen. Zolang deze TODO's er
   staan blijft `robots: noindex` aan in app/layout.tsx.
===================================================================== */

export const site = {
  naam: "Rijschool De Ronde Venen",
  naamKort: "De Ronde Venen",
  instructeur: "Arash",
  tagline: "Rijles in jouw tempo, in De Ronde Venen en omstreken.",
  url: "https://rijschool-de-ronde-venen.vercel.app",
};

/** TODO: echte contactgegevens van Arash invullen. */
export const contact = {
  telefoon: "06 12 34 56 78",
  telefoonHref: "tel:+31612345678",
  whatsappHref: "https://wa.me/31612345678",
  email: "info@rijschoolderondevenen.nl",
  emailHref: "mailto:info@rijschoolderondevenen.nl",
  adres: "Hoofdweg 1",
  postcode: "3641 AA",
  plaats: "Mijdrecht",
  kvk: "00000000",
  instagram: "https://instagram.com/rijschoolderondevenen",
  facebook: "https://facebook.com/rijschoolderondevenen",
};

/** TODO: echte cijfers van Arash. Nu overgenomen van de referentiesite. */
export const cijfers = [
  {
    waarde: 60,
    achtervoegsel: "+",
    label: "geslaagde leerlingen",
    icoon: "cap" as const,
  },
  {
    waarde: 10,
    achtervoegsel: "+",
    label: "jaar ervaring",
    icoon: "wheel" as const,
  },
  {
    waarde: 80,
    achtervoegsel: "%",
    label: "slagingspercentage",
    icoon: "chart" as const,
  },
];

export const regios = [
  "Mijdrecht",
  "Wilnis",
  "Woerden",
  "Uithoorn",
  "Waverveen",
  "Vinkeveen",
  "Abcoude",
];

export type Usp = {
  titel: string;
  tekst: string;
  icoon: "hart" | "route" | "brein" | "maan" | "pin" | "klok" | "kalender" | "euro" | "auto";
  /** Groot = krijgt dubbel formaat in de bento-grid */
  groot?: boolean;
};

export const usps: Usp[] = [
  {
    titel: "Autisme, ADHD en ADD",
    tekst:
      "Ruime ervaring met leerlingen die anders leren. Duidelijke structuur, voorspelbare lessen en zoveel herhaling als jij nodig hebt — zonder dat iemand zucht.",
    icoon: "brein",
    groot: true,
  },
  {
    titel: "Persoonlijke begeleiding",
    tekst: "Je krijgt les van Arash. Altijd dezelfde instructeur, dezelfde aanpak.",
    icoon: "hart",
  },
  {
    titel: "RIS-methode",
    tekst: "Rijopleiding in Stappen: vier modules, elke stap afgerond voor je verder gaat.",
    icoon: "route",
  },
  {
    titel: "Avond- en weekendlessen",
    tekst: "Rijles na school, na je werk of op zaterdag. Jouw agenda is het uitgangspunt.",
    icoon: "maan",
  },
  {
    titel: "Ophalen waar je bent",
    tekst: "Thuis, bij school of op je werk. Zeg maar waar je staat.",
    icoon: "pin",
  },
  {
    titel: "Geen wachtlijst",
    tekst: "Vandaag aanmelden betekent deze week nog je eerste les.",
    icoon: "klok",
  },
  {
    titel: "Flexibele lestijden",
    tekst: "Eén keer per week, twee keer per week of een blok in de vakantie.",
    icoon: "kalender",
  },
  {
    titel: "Betalen in termijnen",
    tekst: "Een pakket in delen betalen kan. We spreken samen een schema af.",
    icoon: "euro",
  },
  {
    titel: "Moderne lesauto",
    tekst: "Een fijne, overzichtelijke auto met dubbele bediening en airco.",
    icoon: "auto",
  },
];

export const overArash = {
  kop: "Ik ben Arash",
  alineas: [
    "Met jarenlange ervaring in de rijschoolwereld begeleid ik leerlingen op een professionele, rustige en persoonlijke manier naar hun rijbewijs. Iedereen leert op zijn eigen tempo, daarom geloof ik in rijlessen op maat die aansluiten bij jouw leerstijl en behoeften.",
    "Ik heb ruime ervaring in het begeleiden van leerlingen met autisme, ADHD, ADD en concentratieproblemen. Door gebruik te maken van de RIS-methode bied ik structuur, duidelijkheid en stap-voor-stap begeleiding, zodat je met vertrouwen leert rijden.",
    "Tijdens de rijlessen staat een ontspannen en vertrouwde sfeer centraal. Wanneer jij je op je gemak voelt, groeit je zelfvertrouwen en leer je sneller en effectiever. Samen werken we rustig en doelgericht toe naar het behalen van jouw rijbewijs.",
    "Ook in de avonden en weekenden geef ik rijles, zodat je de lessen makkelijk combineert met werk, school of andere verplichtingen. Word je liever thuis, op school of op een andere plek opgehaald? Dat kan.",
  ],
};

export const navLinks = [
  { label: "Waarom wij", href: "#waarom" },
  { label: "Over Arash", href: "#over" },
  { label: "Aanpak", href: "#aanpak" },
  { label: "Prijzen", href: "#prijzen" },
  { label: "Reviews", href: "#reviews" },
  { label: "Vragen", href: "#vragen" },
];
