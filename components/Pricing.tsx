"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";
import type { PakkettenData } from "@/sanity/types";

const euro = new Intl.NumberFormat("nl-NL");

/** "€ 76 per lesuur" — afgeleid, zodat prijs en uurtarief nooit uit de pas lopen. */
function perUur(prijs: number, uren: number, examensInbegrepen: boolean | null) {
  const tarief = euro.format(Math.round(prijs / uren));
  return examensInbegrepen
    ? `€ ${tarief} per lesuur, examens inbegrepen`
    : `€ ${tarief} per lesuur`;
}

export function Pricing({ pakketten }: { pakketten: PakkettenData }) {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="prijzen" className="hairline-amber section-pad relative bg-mist">
      <div className="shell">
        <header className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-xl">
            {pakketten.actieLabel && (
              <span className="inline-flex items-center gap-2 rounded-full bg-ember/12 px-3.5 py-1.5">
                <span className="size-1.5 rounded-full bg-ember" />
                <span className="eyebrow text-ember">{pakketten.actieLabel}</span>
              </span>
            )}
            <h2 className="display h-section mt-5 text-ink">
              {pakketten.kopRegel1}<br />
              {pakketten.kopRegel2}
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="max-w-md">
            <p className="text-[1.0625rem] leading-relaxed text-graphite">
              {pakketten.actieTekst}
            </p>
          </Reveal>
        </header>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {pakketten.lijst.map((pakket, index) => (
            <motion.article
              key={pakket._key}
              className={cn(
                "relative flex flex-col rounded-[26px] p-8",
                pakket.uitgelicht
                  ? "glow-amber bg-ink text-white lg:-my-4 lg:p-9"
                  : "bg-paper text-ink shadow-[0_2px_12px_-8px_rgba(10,16,32,0.3)]",
              )}
              initial={{ opacity: 0, y: reduced ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{
                duration: reduced ? 0.2 : 0.75,
                delay: reduced ? 0 : index * 0.09,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {pakket.uitgelicht && <span className="grain absolute inset-0 rounded-[26px]" aria-hidden />}

              {pakket.badge && (
                <span className="absolute -top-3 left-8 rounded-full bg-amber px-3.5 py-1 font-mono text-[0.6rem] tracking-[0.16em] text-ink uppercase">
                  {pakket.badge}
                </span>
              )}

              <div className="relative">
                <h3
                  className={cn(
                    "display text-[1.5rem]",
                    pakket.uitgelicht ? "text-white" : "text-ink",
                  )}
                >
                  {pakket.naam}
                </h3>
                <p
                  className={cn(
                    "font-mono text-[0.7rem] tracking-[0.14em] uppercase",
                    pakket.uitgelicht ? "text-amber" : "text-ember",
                  )}
                >
                  {pakket.aantalUren} lesuren
                </p>

                <p className="mt-7 flex items-baseline gap-1.5">
                  <span
                    className={cn(
                      "display text-[1.6rem]",
                      pakket.uitgelicht ? "text-white/50" : "text-graphite",
                    )}
                  >
                    €
                  </span>
                  <span
                    className={cn(
                      "display text-[3.25rem] leading-none tracking-[-0.04em]",
                      pakket.uitgelicht ? "text-amber" : "text-ink",
                    )}
                  >
                    {euro.format(pakket.prijs)}
                  </span>
                </p>
                <p
                  className={cn(
                    "mt-2 text-[0.8125rem]",
                    pakket.uitgelicht ? "text-slate" : "text-graphite/80",
                  )}
                >
                  {perUur(pakket.prijs, pakket.aantalUren, pakket.examensInbegrepen)}
                </p>

                <ul className="mt-8 flex flex-col gap-3.5">
                  {pakket.bevat.map((regel) => (
                    <li key={regel} className="flex items-start gap-3 text-[0.9375rem] leading-snug">
                      <span
                        className={cn(
                          "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full",
                          pakket.uitgelicht ? "bg-mint/15 text-mint" : "bg-mint/20 text-[#1c8f68]",
                        )}
                      >
                        <Icon name="check" className="size-3" />
                      </span>
                      <span className={pakket.uitgelicht ? "text-white/85" : "text-graphite"}>
                        {regel}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* mt-auto lijnt de knoppen van alle drie de kaarten onderaan uit */}
              <div className="relative mt-auto pt-9">
                <Button
                  href="#aanmelden"
                  variant={pakket.uitgelicht ? "amber" : "outline-dark"}
                  className="w-full"
                >
                  Kies {pakket.naam}
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        <Reveal delay={0.12}>
          <div className="mt-6 flex flex-col items-start justify-between gap-6 rounded-[26px] border border-ink/10 bg-paper p-8 sm:flex-row sm:items-center">
            <div className="max-w-2xl">
              <h3 className="display text-[1.35rem] text-ink">Liever eerst één losse les?</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-graphite">
                {pakketten.losseLesTekst}
              </p>
            </div>
            <div className="flex shrink-0 items-baseline gap-2">
              <span className="display text-[2.5rem] leading-none text-ink">
                € {euro.format(pakketten.losseLesPrijs)}
              </span>
              <span className="text-sm text-graphite">per uur</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
