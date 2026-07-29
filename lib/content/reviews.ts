/* =====================================================================
   TIJDELIJKE REVIEWS — vervang dit bestand door de echte Google Reviews
   ---------------------------------------------------------------------
   Deze reviews zijn VERZONNEN placeholders om de sectie te kunnen tonen.
   Zodra Arash de echte reviews aanlevert: dit bestand vervangen en de
   `noindex` in app/layout.tsx uitzetten. Verder hoeft er niets te wijzigen.
===================================================================== */

export type Review = {
  naam: string;
  initialen: string;
  sterren: 1 | 2 | 3 | 4 | 5;
  wanneer: string;
  tekst: string;
};

/** TODO: vervangen door echte Google Reviews. */
export const reviews: Review[] = [
  {
    naam: "Lisa van Kouwen",
    initialen: "LK",
    sterren: 5,
    wanneer: "2 weken geleden",
    tekst:
      "Ik was echt bang om te beginnen met rijles. Arash bleef altijd rustig en legde alles drie keer uit als dat nodig was. In één keer geslaagd.",
  },
  {
    naam: "Youssef el Amrani",
    initialen: "YA",
    sterren: 5,
    wanneer: "1 maand geleden",
    tekst:
      "Werd elke keer opgehaald op mijn werk in Uithoorn, superhandig. Duidelijke lessen, geen gedoe, en je weet precies waar je staat.",
  },
  {
    naam: "Sanne Bakker",
    initialen: "SB",
    sterren: 5,
    wanneer: "1 maand geleden",
    tekst:
      "Mijn zoon heeft ADHD en had bij een andere rijschool al opgegeven. Arash pakte het compleet anders aan, met vaste tijden en korte lessen. Hij heeft zijn rijbewijs.",
  },
  {
    naam: "Daan Verhoeven",
    initialen: "DV",
    sterren: 5,
    wanneer: "2 maanden geleden",
    tekst:
      "Fijne auto, prettige sfeer, en Arash zegt gewoon eerlijk wat er beter kan. Geen verkooppraatjes over extra lessen die je niet nodig hebt.",
  },
  {
    naam: "Fenna de Groot",
    initialen: "FG",
    sterren: 5,
    wanneer: "3 maanden geleden",
    tekst:
      "Kon dankzij de avondlessen mijn rijbewijs halen naast een fulltime baan. Plannen ging altijd soepel via de app.",
  },
  {
    naam: "Milan Hoekstra",
    initialen: "MH",
    sterren: 4,
    wanneer: "3 maanden geleden",
    tekst:
      "Goede rijschool met een duidelijke opbouw in stappen. Soms wat lastig inplannen op zaterdag, verder niks op aan te merken.",
  },
  {
    naam: "Aylin Demir",
    initialen: "AD",
    sterren: 5,
    wanneer: "4 maanden geleden",
    tekst:
      "Rustige instructeur die je echt de tijd geeft. De rotondes in Mijdrecht heb ik zo vaak geoefend dat ik ze droom, maar het werkte.",
  },
  {
    naam: "Thijs Molenaar",
    initialen: "TM",
    sterren: 5,
    wanneer: "5 maanden geleden",
    tekst:
      "Binnen een week na aanmelden mijn eerste les. Geen wachtlijst was voor mij de reden om hier te beginnen, de lessen zelf waren de reden om te blijven.",
  },
];

export const reviewsSamenvatting = {
  gemiddelde: 4.9,
  aantal: reviews.length,
  bron: "Google",
};
