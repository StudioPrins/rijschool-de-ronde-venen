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
    heroKnopPrimair, heroKnopSecundair, heroPaneelTitel,
    footerTekst, regios, url, seoOmschrijving, zoekmachinesToestaan,
    contact
  },
  "cijfers": *[_type == "cijfers"][0].lijst[]{ waarde, achtervoegsel, label, icoon },
  "usps": *[_type == "usps"][0]{
    eyebrow, kopRegel1, kopRegel2, intro, uitgelichtLink,
    lijst[]{ titel, tekst, icoon, groot }
  },
  "overArash": *[_type == "overArash"][0]{
    eyebrow, kop, knop, alineas, badge,
    portret ${afbeelding}
  },
  "aanpak": *[_type == "aanpak"][0]{
    eyebrow, kopRegel1, kopRegel2, intro, eindpunt,
    modules[]{ titel, indicatie, samenvatting, onderdelen }
  },
  "pakketten": *[_type == "pakketten"][0]{
    kopRegel1, kopRegel2, actieLabel, actieTekst, losseLesPrijs, losseLesTekst,
    lijst[]{ _key, naam, aantalUren, prijs, examensInbegrepen, bevat, uitgelicht, badge }
  },
  "reviews": *[_type == "reviews"][0]{
    eyebrow, kopRegel1, kopRegel2, gemiddelde, bron,
    "aantal": count(lijst),
    lijst[]{ naam, sterren, wanneer, tekst }
  },
  "faq": *[_type == "faq"][0]{
    eyebrow, kopRegel1, kopRegel2, intro,
    lijst[]{ vraag, antwoord }
  },
  "aanmelden": *[_type == "aanmelden"][0]{
    eyebrow, kopRegel1, kopRegel2, intro, succesKop, succesTekst
  }
}`);

/** Alleen wat de metadata en de JSON-LD nodig hebben. */
export const siteQuery = defineQuery(/* groq */ `
  *[_type == "site"][0]{
    naam, url, seoOmschrijving, zoekmachinesToestaan, regios, footerTekst,
    heroKnopPrimair, contact
  }
`);

/** De juridische subpagina's. */
export const voorwaardenQuery = defineQuery(/* groq */ `{
  "site": *[_type == "site"][0]{ naam, url, regios, footerTekst, heroKnopPrimair, contact },
  "voorwaarden": *[_type == "voorwaarden"][0]{
    intro, slotnoot,
    artikelen[]{ titel, alineas, lijst }
  }
}`);
