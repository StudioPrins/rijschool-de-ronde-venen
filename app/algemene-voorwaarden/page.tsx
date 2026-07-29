import type { Metadata } from "next";
import { LegalPagina } from "@/components/LegalPagina";
import { annuleringenNoot, voorwaarden } from "@/lib/content/voorwaarden";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description: `De algemene voorwaarden van ${site.naam}: lesafspraken, annuleren, examens, betaling en aansprakelijkheid.`,
};

export default function AlgemeneVoorwaardenPagina() {
  return (
    <LegalPagina
      titel="Algemene voorwaarden"
      intro={`Deze voorwaarden gelden voor alle lessen, pakketten en diensten van ${site.naam}.`}
    >
      {voorwaarden.map((artikel) => (
        <section key={artikel.nummer} className="border-t border-ink/10 pt-8">
          <span className="font-mono text-[0.7rem] tracking-[0.18em] text-ember uppercase">
            Artikel {String(artikel.nummer).padStart(2, "0")}
          </span>
          <h2 className="display mt-3 text-[1.5rem] text-ink">{artikel.titel}</h2>
          <div className="mt-4 flex flex-col gap-4">
            {artikel.alineas.map((alinea, index) => (
              <p key={index} className="leading-relaxed text-graphite">
                {alinea}
              </p>
            ))}
            {artikel.lijst && (
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

      <p className="rounded-2xl bg-mist p-6 text-[0.9375rem] leading-relaxed text-graphite">
        {annuleringenNoot}
      </p>
    </LegalPagina>
  );
}
