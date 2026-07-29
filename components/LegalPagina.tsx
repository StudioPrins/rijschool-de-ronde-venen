import Link from "next/link";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/ui/Icons";
import type { ContactLinks } from "@/lib/contact";

type LegalPaginaProps = {
  titel: string;
  intro: string;
  children: ReactNode;
  site: { naam: string; footerTekst: string; regios: string[] };
  contact: ContactLinks;
};

/** Gedeeld frame voor de juridische subpagina's — rustig, licht, goed leesbaar. */
export function LegalPagina({ titel, intro, children, site, contact }: LegalPaginaProps) {
  // "Rijschool De Ronde Venen" → "De Ronde Venen"
  const kort = site.naam.replace(/^Rijschool\s+/i, "");

  return (
    <>
      <header className="bg-ink pb-16 pt-12">
        <div className="shell">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 text-sm font-medium text-slate transition-colors hover:text-amber"
          >
            <Icon name="pijl" className="size-4 rotate-180" />
            Terug naar {kort}
          </Link>
          <h1 className="display mt-10 text-[clamp(2.25rem,5.5vw,3.75rem)] text-white">{titel}</h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-slate">{intro}</p>
        </div>
      </header>

      <main className="hairline-amber relative bg-paper py-20">
        <div className="shell">
          <div className="flex max-w-3xl flex-col gap-10">{children}</div>
        </div>
      </main>

      <Footer
        naam={site.naam}
        tekst={site.footerTekst}
        regios={site.regios}
        contact={contact}
      />
    </>
  );
}
