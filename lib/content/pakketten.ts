export type Pakket = {
  id: string;
  naam: string;
  uren: string;
  prijs: number;
  /** Getoond onder de prijs, bv. "€ 63 per lesuur" */
  perUur?: string;
  bevat: string[];
  uitgelicht?: boolean;
  badge?: string;
};

export const pakketten: Pakket[] = [
  {
    id: "start",
    naam: "Startpakket",
    uren: "25 lesuren",
    prijs: 1899,
    perUur: "€ 76 per lesuur",
    bevat: [
      "25 rijlessen van 60 minuten",
      "Persoonlijk lesplan volgens de RIS-methode",
      "Ophalen op je eigen adres",
      "Tussentijdse voortgangsgesprekken",
    ],
  },
  {
    id: "compleet",
    naam: "Compleet",
    uren: "30 lesuren",
    prijs: 2499,
    perUur: "€ 83 per lesuur, examens inbegrepen",
    badge: "Meest gekozen",
    uitgelicht: true,
    bevat: [
      "30 rijlessen van 60 minuten",
      "Tussentijdse toets (TTT) inbegrepen",
      "CBR-praktijkexamen inbegrepen",
      "Persoonlijk lesplan volgens de RIS-methode",
      "Ophalen op je eigen adres",
      "Betalen in termijnen mogelijk",
    ],
  },
  {
    id: "zeker",
    naam: "Ruim de tijd",
    uren: "40 lesuren",
    prijs: 3149,
    perUur: "€ 79 per lesuur, examens inbegrepen",
    bevat: [
      "40 rijlessen van 60 minuten",
      "Tussentijdse toets (TTT) inbegrepen",
      "CBR-praktijkexamen inbegrepen",
      "Extra ruimte voor herhaling en gewenning",
      "Aanbevolen bij faalangst of prikkelgevoeligheid",
      "Betalen in termijnen mogelijk",
    ],
  },
];

export const losseLes = {
  prijs: 67,
  tekst:
    "Liever eerst één les om te kijken of het klikt? Dat kan. Een losse rijles duurt 60 minuten en je zit nergens aan vast.",
};

export const actie = {
  label: "Introductieactie",
  tekst: "Alle pakketprijzen hieronder zijn introductieprijzen. Vraag naar de voorwaarden.",
};
