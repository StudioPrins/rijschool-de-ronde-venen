import type { Metadata } from "next";
import { LegalPagina } from "@/components/LegalPagina";
import { metLinks } from "@/lib/contact";
import { sanityFetch } from "@/sanity/live";
import { voorwaardenQuery } from "@/sanity/queries";
import type { SiteData, VoorwaardenData } from "@/sanity/types";

type Data = { site: SiteData; voorwaarden: VoorwaardenData };

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description: "Lesafspraken, annuleren, ziekmelden, examens, betaling en aansprakelijkheid.",
};

export default async function AlgemeneVoorwaardenPagina() {
  const { data } = await sanityFetch({ query: voorwaardenQuery });
  const { site, voorwaarden } = data as Data;

  return (
    <LegalPagina
      titel="Algemene voorwaarden"
      intro={voorwaarden.intro}
      site={site}
      contact={metLinks(site.contact)}
    >
      {voorwaarden.artikelen.map((artikel, index) => (
        <section key={artikel.titel} className="border-t border-ink/10 pt-8">
          <span className="font-mono text-[0.7rem] tracking-[0.18em] text-ember uppercase">
            Artikel {String(index + 1).padStart(2, "0")}
          </span>
          <h2 className="display mt-3 text-[1.5rem] text-ink">{artikel.titel}</h2>
          <div className="mt-4 flex flex-col gap-4">
            {artikel.alineas.map((alinea, i) => (
              <p key={i} className="leading-relaxed text-graphite">
                {alinea}
              </p>
            ))}
            {artikel.lijst && artikel.lijst.length > 0 && (
              <ul className="flex flex-col gap-2 pl-1">
                {artikel.lijst.map((regel) => (
                  <li key={regel} className="flex items-start gap-3 text-graphite">
                    <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-amber" />
                    {regel}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

      {voorwaarden.slotnoot && (
        <p className="rounded-2xl bg-mist p-6 text-[0.9375rem] leading-relaxed text-graphite">
          {voorwaarden.slotnoot}
        </p>
      )}
    </LegalPagina>
  );
}
