import { defineQuery } from "next-sanity";

const afbeelding = /* groq */ `{
  alt,
  hotspot,
  crop,
  asset->{ _id, url, metadata { lqip, dimensions { width, height } } }
}`;

/** Alles voor de one-pager in één request. */
export const paginaQuery = defineQuery(/* groq */ `{
  "site": *[_type == "site"][0]{
    naam, heroRegel1, heroRegel2, heroRegel3, heroAccent, heroIntro, heroPunten,
    footerTekst, regios, url, seoOmschrijving, zoekmachinesToestaan,
    contact
  },
  "cijfers": *[_type == "cijfers"][0].lijst[]{ waarde, achtervoegsel, label, icoon },
  "usps": *[_type == "usps"][0].lijst[]{ titel, tekst, icoon, groot },
  "overArash": *[_type == "overArash"][0]{
    kop, alineas, badge,
    portret ${afbeelding}
  },
  "aanpak": *[_type == "aanpak"][0]{
    intro, eindpunt,
    modules[]{ titel, indicatie, samenvatting, onderdelen }
  },
  "pakketten": *[_type == "pakketten"][0]{
    actieLabel, actieTekst, losseLesPrijs, losseLesTekst,
    lijst[]{ _key, naam, aantalUren, prijs, examensInbegrepen, bevat, uitgelicht, badge }
  },
  "reviews": *[_type == "reviews"][0]{
    gemiddelde, bron,
    "aantal": count(lijst),
    lijst[]{ naam, sterren, wanneer, tekst }
  },
  "faq": *[_type == "faq"][0]{ intro, lijst[]{ vraag, antwoord } }
}`);

/** Alleen wat de metadata en de JSON-LD nodig hebben. */
export const siteQuery = defineQuery(/* groq */ `
  *[_type == "site"][0]{
    naam, url, seoOmschrijving, zoekmachinesToestaan, regios, footerTekst, contact
  }
`);

/** De juridische subpagina's. */
export const voorwaardenQuery = defineQuery(/* groq */ `{
  "site": *[_type == "site"][0]{ naam, url, regios, footerTekst, contact },
  "voorwaarden": *[_type == "voorwaarden"][0]{
    intro, slotnoot,
    artikelen[]{ titel, alineas, lijst }
  }
}`);
