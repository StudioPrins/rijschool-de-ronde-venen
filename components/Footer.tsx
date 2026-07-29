import Link from "next/link";
import {
  FacebookMark,
  Icon,
  InstagramMark,
  WhatsappMark,
} from "@/components/ui/Icons";
import type { ContactLinks } from "@/lib/contact";
import { navLinks } from "@/lib/navigatie";

export function Footer({
  naam,
  tekst,
  regios,
  contact,
}: {
  naam: string;
  tekst: string;
  regios: string[];
  contact: ContactLinks;
}) {
  return (
    <footer className="relative border-t border-white/[0.07] bg-[#070c18] pb-10 pt-20">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_0.9fr]">
          <div>
            <span className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-lg bg-amber font-display text-[1.3rem] font-bold leading-none text-ink">
                L
              </span>
              <span className="display text-[1.15rem] text-white">{naam}</span>
            </span>

            <p className="mt-6 max-w-sm leading-relaxed text-slate">{tekst}</p>

            {/* Het nummer zoals het op de auto staat */}
            <a
              href={contact.telefoonHref}
              className="mt-8 inline-flex overflow-hidden rounded-[6px] border-2 border-[#0b0b0b] bg-[#f5c518] shadow-[0_10px_30px_-14px_rgba(245,197,24,0.9)] transition-transform duration-300 hover:-translate-y-0.5"
              aria-label={`Bel ${contact.telefoon}`}
            >
              <span className="flex w-6 flex-col items-center justify-center gap-1 bg-[#0d3a9e] py-2 text-[0.5rem] font-bold text-white">
                <span className="text-[0.6rem] leading-none">★</span>
                NL
              </span>
              <span className="px-4 py-2 font-display text-[1.35rem] font-bold tracking-[0.06em] text-[#0b0b0b]">
                {contact.telefoon.replace(/\s/g, "-")}
              </span>
            </a>
          </div>

          <nav aria-label="Footermenu">
            <h2 className="eyebrow text-slate">Op deze pagina</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.9375rem] text-white/80 transition-colors hover:text-amber"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#aanmelden"
                  className="text-[0.9375rem] text-white/80 transition-colors hover:text-amber"
                >
                  Aanmelden
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-slate">Contact</h2>
            <ul className="mt-5 flex flex-col gap-3 text-[0.9375rem]">
              <li>
                <a
                  href={contact.telefoonHref}
                  className="flex items-center gap-2.5 text-white/80 transition-colors hover:text-amber"
                >
                  <Icon name="telefoon" className="size-4 text-amber" />
                  {contact.telefoon}
                </a>
              </li>
              <li>
                <a
                  href={contact.emailHref}
                  className="flex items-center gap-2.5 text-white/80 transition-colors hover:text-amber"
                >
                  <Icon name="mail" className="size-4 text-amber" />
                  {contact.email}
                </a>
              </li>
              {contact.plaats && (
                <li className="flex items-start gap-2.5 text-white/80">
                  <Icon name="pin" className="mt-0.5 size-4 shrink-0 text-amber" />
                  <span>
                    {contact.adres}
                    <br />
                    {contact.postcode} {contact.plaats}
                  </span>
                </li>
              )}
            </ul>

            <div className="mt-6 flex gap-2.5">
              <Sociaal href={contact.whatsappHref} label="WhatsApp">
                <WhatsappMark className="size-[18px]" />
              </Sociaal>
              <Sociaal href={contact.instagram} label="Instagram">
                <InstagramMark className="size-[18px]" />
              </Sociaal>
              <Sociaal href={contact.facebook} label="Facebook">
                <FacebookMark className="size-[18px]" />
              </Sociaal>
            </div>
          </div>
        </div>

        <p className="mt-14 flex flex-wrap gap-x-2 gap-y-1 border-t border-white/[0.07] pt-8 text-[0.8125rem] text-slate">
          <span className="font-mono text-[0.7rem] tracking-[0.14em] uppercase">Lesgebied</span>
          {regios.map((regio, index) => (
            <span key={regio}>
              {regio}
              {index < regios.length - 1 && <span className="text-slate/40"> ·</span>}
            </span>
          ))}
        </p>

        <div className="mt-6 flex flex-col gap-4 text-[0.8125rem] text-slate sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {naam} · KvK {contact.kvk}
          </p>
          <div className="flex gap-6">
            <Link href="/algemene-voorwaarden" className="transition-colors hover:text-amber">
              Algemene voorwaarden
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-amber">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/** Laat het icoon weg als Arash die link niet heeft ingevuld. */
function Sociaal({
  href,
  label,
  children,
}: {
  href: string | null;
  label: string;
  children: React.ReactNode;
}) {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="grid size-10 place-items-center rounded-full border border-white/12 text-white/70 transition-colors hover:border-amber hover:text-amber"
    >
      {children}
    </a>
  );
}
