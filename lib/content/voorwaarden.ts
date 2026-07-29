export type Artikel = { nummer: number; titel: string; alineas: string[]; lijst?: string[] };

export const voorwaarden: Artikel[] = [
  {
    nummer: 1,
    titel: "Overeenkomst",
    alineas: [
      "Door inschrijving, betaling of het volgen van rijlessen gaat de leerling akkoord met deze voorwaarden. Deze voorwaarden gelden voor alle lessen, pakketten en diensten van de rijschool.",
      "Alleen schriftelijke afspraken die door beide partijen zijn bevestigd, gelden als uitzondering op deze voorwaarden.",
    ],
  },
  {
    nummer: 2,
    titel: "Rijlessen en instructie",
    alineas: [
      "De rijlessen worden gegeven door bevoegde instructeurs volgens de WRM-regels. De leerling volgt tijdens de les altijd de aanwijzingen van de instructeur op. De rijschool mag indien nodig een instructeur of planning wijzigen.",
    ],
  },
  {
    nummer: 3,
    titel: "Lesafspraken en aanwezigheid",
    alineas: [
      "De leerling moet op tijd aanwezig zijn op de afgesproken locatie. De instructeur wacht maximaal 15 minuten. Bij niet verschijnen of te laat komen zonder geldige afmelding kan de les volledig worden doorberekend.",
    ],
  },
  {
    nummer: 4,
    titel: "Annulering en ziekmelding",
    alineas: [
      "Een rijles kan tot 48 uur van tevoren kosteloos worden verzet of geannuleerd. Binnen 48 uur voor aanvang wordt de volledige les in rekening gebracht.",
      "Bij ziekmelding geldt:",
    ],
    lijst: [
      "1e keer: gratis",
      "2e keer: 50% van de lesprijs",
      "3e keer en verder: 100% van de lesprijs",
    ],
  },
  {
    nummer: 5,
    titel: "Veiligheid en stopzetten les",
    alineas: [
      "De instructeur mag een les direct stoppen als de leerling niet veilig kan deelnemen aan het verkeer, bijvoorbeeld door alcohol, drugs, medicijnen of ander risicovol gedrag. In dat geval is er geen recht op restitutie.",
    ],
  },
  {
    nummer: 6,
    titel: "Examens",
    alineas: [
      "Examens worden door de rijschool ingepland bij het CBR. Zodra een examen is vastgelegd, kunnen wijzigings- en annuleringskosten van toepassing zijn volgens de regels van het CBR en/of de rijschool.",
      "Als een examen niet doorgaat door de rijschool, het CBR of overmacht (zoals voertuigpech of slecht weer), wordt het kosteloos opnieuw ingepland.",
    ],
  },
  {
    nummer: 7,
    titel: "Betaling",
    alineas: [
      "Facturen dienen binnen 2 weken (14 dagen) na factuurdatum volledig te worden betaald, tenzij anders schriftelijk overeengekomen.",
      "Bij te late betaling mag de rijschool:",
    ],
    lijst: [
      "lessen opschorten totdat betaling is voldaan",
      "administratie- en incassokosten in rekening brengen",
      "wettelijke rente berekenen",
    ],
  },
  {
    nummer: 8,
    titel: "Overmacht",
    alineas: [
      "Bij omstandigheden zoals ziekte van de instructeur, voertuigpech, ongevallen of slechte weersomstandigheden mag een les worden verzet zonder schadevergoeding.",
    ],
  },
  {
    nummer: 9,
    titel: "Aansprakelijkheid",
    alineas: [
      "De rijschool is verzekerd tijdens rijlessen en examens. Aansprakelijkheid is beperkt tot het bedrag dat de verzekeraar uitkeert. Schade door opzet, roekeloos gedrag of middelengebruik van de leerling valt buiten de dekking.",
    ],
  },
  {
    nummer: 10,
    titel: "Toepasselijk recht",
    alineas: [
      "Op deze voorwaarden is Nederlands recht van toepassing. Geschillen worden behandeld door de bevoegde rechter in Nederland.",
    ],
  },
];

export const annuleringenNoot =
  "Annuleringen en ziekmeldingen zijn alleen geldig na bevestiging door de rijschool. Alleen bij aantoonbare overmacht kan van de ziekmeldingsregeling worden afgeweken.";
