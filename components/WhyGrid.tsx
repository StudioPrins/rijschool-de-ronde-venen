"use client";

import { motion } from "motion/react";
import { Icon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";
import type { UspData } from "@/sanity/types";

export function WhyGrid({ usps }: { usps: UspData[] }) {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="waarom" className="hairline-amber section-pad relative bg-mist">
      <div className="shell">
        <header className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-ember">Waarom hier</p>
            <h2 className="display h-section mt-5 text-ink">
              Wat rijles hier<br />
              anders maakt.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-graphite">
              Geen lopende band, geen wisselende instructeurs en geen pakket dat je wordt
              aangepraat. Wel een aanpak die zich aanpast aan jou.
            </p>
          </Reveal>
        </header>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {usps.map((usp, index) => (
            <motion.article
              key={usp.titel}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-[22px] p-7 transition-shadow duration-500",
                usp.groot
                  ? "bg-ink text-white sm:col-span-2 lg:row-span-2 lg:p-9"
                  : "bg-paper text-ink shadow-[0_2px_10px_-6px_rgba(10,16,32,0.2)] hover:shadow-[0_22px_50px_-30px_rgba(10,16,32,0.55)]",
              )}
              initial={{ opacity: 0, y: reduced ? 0 : 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: reduced ? 0.2 : 0.7,
                delay: reduced ? 0 : Math.min(index * 0.06, 0.42),
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={reduced ? undefined : { y: -4 }}
            >
              {usp.groot && (
                <>
                  <span className="grain absolute inset-0" aria-hidden />
                  <span
                    aria-hidden
                    className="absolute -right-16 -top-16 size-56 rounded-full blur-[70px]"
                    style={{
                      background:
                        "radial-gradient(closest-side, rgba(255,176,32,0.4), transparent)",
                    }}
                  />
                </>
              )}

              <span
                className={cn(
                  "relative grid size-11 place-items-center rounded-xl transition-colors duration-300",
                  usp.groot
                    ? "bg-amber text-ink"
                    : "bg-mist text-ember group-hover:bg-ink group-hover:text-amber",
                )}
              >
                <Icon name={usp.icoon} className="size-[22px]" />
              </span>

              <h3
                className={cn(
                  "display relative mt-6",
                  usp.groot ? "text-[1.75rem] leading-tight lg:text-[2.25rem]" : "h-card",
                )}
              >
                {usp.titel}
              </h3>
              <p
                className={cn(
                  "relative mt-3 leading-relaxed",
                  usp.groot ? "max-w-md text-[1.0625rem] text-slate" : "text-[0.9375rem] text-graphite",
                )}
              >
                {usp.tekst}
              </p>

              {usp.groot && (
                <p className="relative mt-auto pt-8">
                  <a
                    href="#aanpak"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-amber"
                  >
                    Zo werkt de RIS-methode
                    <Icon
                      name="pijl"
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </p>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
