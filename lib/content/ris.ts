/**
 * De vier modules van de RIS-methode (Rijopleiding in Stappen).
 * Dit is de inhoudelijke ruggengraat van de "route"-sectie: elke module
 * is een waypoint op de lijn die zich tekent terwijl je scrollt.
 */

export type RisModule = {
  marker: string;
  titel: string;
  samenvatting: string;
  onderdelen: string[];
  /** Ruwe indicatie, helpt leerlingen de opbouw te plaatsen */
  indicatie: string;
};

export const risModules: RisModule[] = [
  {
    marker: "M01",
    titel: "De auto de baas",
    samenvatting:
      "Voordat er verkeer bij komt kijken, leer je de auto kennen. Rustig, op een plek waar niets kan misgaan.",
    onderdelen: [
      "Instellen, starten en wegrijden",
      "Schakelen, sturen en remmen",
      "Achteruit rijden en keren",
      "Parkeren in een rustige straat",
    ],
    indicatie: "Les 1 – 6",
  },
  {
    marker: "M02",
    titel: "Eenvoudig verkeer",
    samenvatting:
      "Je gaat de weg op waar het overzichtelijk is. Voorrang, kijken en op tijd anticiperen worden een gewoonte.",
    onderdelen: [
      "Voorrang en voorrangsborden",
      "Kruisingen binnen de bebouwde kom",
      "Afslaan en van rijstrook wisselen",
      "Kijkgedrag en spiegelgebruik",
    ],
    indicatie: "Les 6 – 14",
  },
  {
    marker: "M03",
    titel: "Complexe situaties",
    samenvatting:
      "Nu wordt het druk. Rotondes, invoegen op de provinciale weg en situaties waarin je meerdere dingen tegelijk moet lezen.",
    onderdelen: [
      "Rotondes en meerstrooks kruispunten",
      "Invoegen en uitvoegen op N-wegen",
      "Rijden in het donker en bij regen",
      "Gevaarherkenning in de praktijk",
    ],
    indicatie: "Les 14 – 24",
  },
  {
    marker: "M04",
    titel: "Zelfstandig rijden",
    samenvatting:
      "Ik zeg steeds minder. Jij rijdt op navigatie en op eigen inzicht — precies zoals op het examen, en daarna.",
    onderdelen: [
      "Rijden op navigatie en routeborden",
      "Zelfstandig een rit plannen",
      "Tussentijdse toets bij het CBR",
      "Examenroutes en de laatste puntjes",
    ],
    indicatie: "Les 24 – examen",
  },
];
