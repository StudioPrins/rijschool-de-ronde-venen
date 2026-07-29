"use client";

import { motion } from "motion/react";
import { RoadCanvas } from "@/components/RoadCanvas";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icons";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";
import type { SiteData } from "@/sanity/types";

export function Hero({ site }: { site: SiteData }) {
  const reduced = usePrefersReducedMotion();
  const regios = site.regios;
  const kopregels = [site.heroRegel1, site.heroRegel2, site.heroRegel3];

  /** Eén sequentie: eyebrow → kopregels → tekst → knoppen → paneel. */
  const stap = (index: number) => ({
    initial: { opacity: 0, y: reduced ? 0 : 22, filter: reduced ? "none" : "blur(10px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: {
      duration: reduced ? 0.25 : 0.95,
      delay: reduced ? 0 : 0.12 + index * 0.11,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  });

  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden bg-ink">
      <RoadCanvas />

      <div className="shell relative z-10 flex min-h-[100svh] flex-col justify-center pb-24 pt-32 lg:pb-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <motion.p
              className="eyebrow flex flex-wrap items-center gap-x-2 gap-y-1 text-amber"
              {...stap(0)}
            >
              {regios.slice(0, 5).map((regio, index) => (
                <span key={regio} className="flex items-center gap-2">
                  {index > 0 && <span className="text-amber/40">/</span>}
                  {regio}
                </span>
              ))}
            </motion.p>

            <h1 className="display h-hero mt-7 text-white">
              {kopregels.map((regel, index) => (
                <span key={index} className="block overflow-hidden pb-[0.08em]">
                  <motion.span
                    className="block"
                    initial={{ y: reduced ? 0 : "108%", opacity: reduced ? 0 : 1 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{
                      duration: reduced ? 0.25 : 1.05,
                      delay: reduced ? 0 : 0.22 + index * 0.09,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {regel}
                    {/* Het accentwoord sluit aan op de laatste regel */}
                    {index === kopregels.length - 1 && (
                      <> <span className="text-amber">{site.heroAccent}</span></>
                    )}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              className="mt-8 max-w-[36rem] text-[1.0625rem] leading-relaxed text-slate sm:text-lg"
              {...stap(5)}
            >
              {site.heroIntro}
            </motion.p>

            <motion.div className="mt-10 flex flex-wrap items-center gap-3" {...stap(6)}>
              <Button href="#aanmelden" magnetic>
                Meld je aan
                <Icon name="pijl" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button href="#prijzen" variant="outline-light">
                Bekijk de pakketten
              </Button>
            </motion.div>
          </div>

          {/* Zwevend paneel met de vier sterkste punten */}
          <motion.aside
            className="glass relative rounded-[28px] p-7 sm:p-8"
            initial={{ opacity: 0, y: reduced ? 0 : 34, filter: reduced ? "none" : "blur(14px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: reduced ? 0.25 : 1.1, delay: reduced ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              aria-hidden
              className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-amber to-transparent"
            />
            <p className="eyebrow text-slate">Waarom hier</p>
            <ul className="mt-6 flex flex-col gap-4">
              {site.heroPunten.map((punt, index) => (
                <motion.li
                  key={punt}
                  className="flex items-start gap-3.5 text-[0.9375rem] leading-snug text-white/90"
                  initial={{ opacity: 0, x: reduced ? 0 : -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: reduced ? 0.2 : 0.6,
                    delay: reduced ? 0 : 0.72 + index * 0.09,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-mint/15 text-mint">
                    <Icon name="check" className="size-3" />
                  </span>
                  {punt}
                </motion.li>
              ))}
            </ul>
          </motion.aside>
        </div>
      </div>

      {/* Zachte overgang naar de cijferbalk */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-ink to-transparent" />
    </section>
  );
}
