import { AboutArash } from "@/components/AboutArash";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Pricing } from "@/components/Pricing";
import { Reviews } from "@/components/Reviews";
import { RisRoute } from "@/components/RisRoute";
import { SignupForm } from "@/components/SignupForm";
import { StatsBar } from "@/components/StatsBar";
import { WhyGrid } from "@/components/WhyGrid";
import { stegaClean } from "next-sanity";
import { metLinks } from "@/lib/contact";
import { sanityFetch } from "@/sanity/live";
import { paginaQuery } from "@/sanity/queries";
import type { PaginaData } from "@/sanity/types";

export default async function Home() {
  const { data } = await sanityFetch({ query: paginaQuery });
  const pagina = data as PaginaData;

  // Leidt de bel-, WhatsApp- en mail-links af, en haalt daarbij de onzichtbare
  // visual-editing-tekens uit alles wat als waarde en niet als tekst dient.
  const contact = metLinks(pagina.site.contact);

  // Icoonnamen zijn sleutels in components/ui/Icons.tsx, geen leestekst: met
  // stega-tekens erin vindt de lookup niets en verdwijnt het icoon.
  const cijfers = pagina.cijfers.map((c) => ({ ...c, icoon: stegaClean(c.icoon) }));
  const usps = pagina.usps.map((u) => ({ ...u, icoon: stegaClean(u.icoon) }));

  return (
    <>
      <Nav contact={contact} />
      <main>
        <Hero site={pagina.site} />
        <StatsBar cijfers={cijfers} />
        <WhyGrid usps={usps} />
        <AboutArash overArash={pagina.overArash} regios={pagina.site.regios} />
        <RisRoute aanpak={pagina.aanpak} />
        <Pricing pakketten={pagina.pakketten} />
        <Reviews reviews={pagina.reviews} />
        <Faq faq={pagina.faq} contact={contact} />
        <SignupForm pakketten={pagina.pakketten} contact={contact} />
      </main>
      <Footer
        naam={pagina.site.naam}
        tekst={pagina.site.footerTekst}
        regios={pagina.site.regios}
        contact={contact}
      />
    </>
  );
}
