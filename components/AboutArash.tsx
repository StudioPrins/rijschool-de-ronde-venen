"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Reveal } from "@/components/ui/Reveal";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";
import { overArash, regios } from "@/lib/content/site";

export function AboutArash() {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <section id="over" className="section-pad bg-paper">
      <div className="shell grid items-center gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
        <div ref={ref} className="relative mx-auto w-full max-w-[400px] lg:mx-0">
          {/* Amber kader dat achter de foto uit steekt */}
          <span
            aria-hidden
            className="absolute -bottom-4 -left-4 -right-4 -top-4 rounded-[34px] border border-amber/60"
          />
          <motion.div className="relative" style={reduced ? undefined : { y }}>
            <ImageSlot label="Foto van Arash" ratio="4 / 5" tone="light" />
          </motion.div>

          <div className="glow-amber absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full bg-ink px-5 py-3">
            <span className="relative flex size-2">
              <span
                className="absolute inline-flex size-full rounded-full bg-mint"
                style={{ animation: "blink-indicator 2.4s steps(1) infinite" }}
              />
            </span>
            <span className="font-mono text-[0.65rem] tracking-[0.16em] whitespace-nowrap text-white uppercase">
              Rijinstructeur · WRM
            </span>
          </div>
        </div>

        <div className="lg:pt-4">
          <Reveal>
            <p className="eyebrow text-ember">Over de instructeur</p>
            <h2 className="display h-section mt-5 text-ink">{overArash.kop}</h2>
          </Reveal>

          <div className="mt-7 flex flex-col gap-5">
            {overArash.alineas.map((alinea, index) => (
              <Reveal key={index} delay={0.06 + index * 0.05}>
                <p className="max-w-[46rem] text-[1.0625rem] leading-relaxed text-graphite">
                  {alinea}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.28}>
            <div className="mt-9">
              <p className="eyebrow text-graphite/70">Lesgebied</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {regios.map((regio) => (
                  <li
                    key={regio}
                    className="rounded-full border border-ink/12 bg-mist px-4 py-2 text-sm font-medium text-ink"
                  >
                    {regio}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.34}>
            <div className="mt-10">
              <Button href="#aanmelden">Plan je eerste les</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
