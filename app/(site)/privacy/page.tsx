import type { Metadata } from "next";
import { LegalPagina } from "@/components/LegalPagina";
import { metLinks } from "@/lib/contact";
import { sanityFetch } from "@/sanity/live";
import { siteQuery } from "@/sanity/queries";
import type { SiteData } from "@/sanity/types";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description: "Hoe Rijschool De Ronde Venen omgaat met je persoonsgegevens.",
};

/**
 * Vaste tekst, bewust niet in de Studio: dit is een juridisch document dat
 * meebeweegt met de code (welke gegevens het formulier verwerkt), niet met
 * de redactie.
 */
function blokken(email: string) {
  return [
    {
      titel: "Welke gegevens ik verwerk",
      tekst:
        "Als je je aanmeldt via de website verwerk ik je naam, e-mailadres, telefoonnummer, ophaaladres, gewenste startdatum en de voorkeuren die je zelf invult. Tijdens de opleiding komen daar lesgegevens en, waar nodig voor het CBR, je geboortedatum en BSN bij.",
    },
    {
      titel: "Waarvoor ik ze gebruik",
      tekst:
        "Om contact met je op te nemen, rijlessen in te plannen, examens aan te vragen bij het CBR en facturen te sturen. Ik gebruik je gegevens niet voor advertenties en verkoop ze niet door.",
    },
    {
      titel: "Hoe lang ik ze bewaar",
      tekst:
        "Lesgegevens bewaar ik tot twee jaar na afronding van je opleiding. Facturen en administratie bewaar ik zeven jaar, omdat de Belastingdienst dat voorschrijft.",
    },
    {
      titel: "Met wie ik ze deel",
      tekst:
        "Alleen met partijen die nodig zijn om je opleiding te kunnen geven: het CBR voor examens, en mijn boekhouder voor de administratie. Zij mogen je gegevens uitsluitend voor dat doel gebruiken.",
    },
    {
      titel: "Je rechten",
      tekst: `Je mag je gegevens opvragen, laten corrigeren of laten verwijderen. Stuur daarvoor een mail naar ${email}. Je krijgt binnen vier weken antwoord. Ben je het niet eens met hoe ik met je gegevens omga, dan kun je een klacht indienen bij de Autoriteit Persoonsgegevens.`,
    },
    {
      titel: "Cookies",
      tekst:
        "Deze website plaatst geen tracking- of advertentiecookies en gebruikt geen analytics die je persoonlijk volgen.",
    },
  ];
}

export default async function PrivacyPagina() {
  const { data } = await sanityFetch({ query: siteQuery, stega: false });
  const site = data as SiteData;
  const contact = metLinks(site.contact);

  return (
    <LegalPagina
      titel="Privacyverklaring"
      intro="Je geeft me gegevens omdat je rijles wilt. Ik gebruik ze alleen daarvoor. Hieronder staat precies wat ik verwerk en hoe lang."
      site={site}
      contact={contact}
    >
      {blokken(contact.email).map((blok, index) => (
        <section key={blok.titel} className="border-t border-ink/10 pt-8">
          <span className="font-mono text-[0.7rem] tracking-[0.18em] text-ember uppercase">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h2 className="display mt-3 text-[1.5rem] text-ink">{blok.titel}</h2>
          <p className="mt-4 leading-relaxed text-graphite">{blok.tekst}</p>
        </section>
      ))}

      <p className="rounded-2xl bg-mist p-6 text-[0.9375rem] leading-relaxed text-graphite">
        Verwerkingsverantwoordelijke: {site.naam}
        {contact.adres && `, ${contact.adres}, ${contact.postcode} ${contact.plaats}`}. KvK{" "}
        {contact.kvk}. Vragen? Mail naar{" "}
        <a href={contact.emailHref} className="text-ember underline underline-offset-4">
          {contact.email}
        </a>
        .
      </p>
    </LegalPagina>
  );
}
