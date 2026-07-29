"use client";

import { motion, useInView, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { Icon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";
import type { AanpakData, ModuleData } from "@/sanity/types";

/**
 * De signature-sectie. De RIS-methode is een route in vier stappen, dus is
 * deze sectie letterlijk een weg: een rail met kantstrepen en een onderbroken
 * middenstreep, die zich in amber vult naarmate je verder scrollt.
 */
export function RisRoute({ aanpak }: { aanpak: AanpakData }) {
  const reduced = usePrefersReducedMotion();
  const routeRef = useRef<HTMLDivElement>(null);
  const modules = aanpak.modules;

  const { scrollYProgress } = useScroll({
    target: routeRef,
    offset: ["start 0.7", "end 0.62"],
  });
  const gereden = useSpring(scrollYProgress, { stiffness: 90, damping: 26, restDelta: 0.001 });
  const scaleY = useTransform(gereden, (value) => (reduced ? 1 : value));

  return (
    <section id="aanpak" className="grain section-pad relative overflow-hidden bg-ink">
      <span
        aria-hidden
        className="absolute left-1/2 top-0 h-[420px] w-[820px] max-w-[120vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px]"
        style={{ background: "radial-gradient(closest-side, rgba(255,176,32,0.16), transparent)" }}
      />

      <div className="shell relative">
        <header className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-amber">De aanpak</p>
            <h2 className="display h-section mt-5 text-white">
              Vier modules.<br />
              Eén route.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-slate">
              {aanpak.intro}
            </p>
          </Reveal>
        </header>

        <div ref={routeRef} className="relative mt-16 pl-11 sm:pl-16 lg:mt-20 lg:pl-24">
          {/* De weg zelf */}
          <div
            aria-hidden
            className="absolute bottom-10 left-0 top-2 w-9 sm:w-10"
          >
            {/* Kantstrepen */}
            <span className="absolute inset-y-0 left-0 w-px bg-white/12" />
            <span className="absolute inset-y-0 right-0 w-px bg-white/12" />
            {/* Onderbroken middenstreep */}
            <span
              className="absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, rgba(255,255,255,0.22) 0 14px, transparent 14px 30px)",
              }}
            />
            {/* Het stuk dat je al gereden hebt */}
            <motion.span
              className="absolute inset-x-0 top-0 h-full origin-top"
              style={{ scaleY }}
            >
              <span className="absolute inset-y-0 left-0 w-px bg-amber/70" />
              <span className="absolute inset-y-0 right-0 w-px bg-amber/70" />
              <span
                className="absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, rgba(255,176,32,0.95) 0 14px, transparent 14px 30px)",
                }}
              />
              <span
                className="absolute inset-x-[-14px] bottom-0 h-24 blur-xl"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(255,176,32,0.5), transparent)",
                }}
              />
            </motion.span>
          </div>

          <ol className="flex flex-col gap-5 sm:gap-6">
            {modules.map((module, index) => (
              <Waypoint
                key={module.titel}
                module={module}
                index={index}
                totaal={modules.length}
                reduced={reduced}
              />
            ))}
          </ol>

          {/* Eindpunt van de route */}
          <div className="relative mt-6 flex items-center gap-4 pl-1">
            <span className="absolute -left-11 grid size-9 place-items-center rounded-full bg-mint text-ink sm:-left-16 sm:size-10 lg:-left-24">
              <Icon name="check" className="size-4" />
            </span>
            <p className="display text-[1.35rem] text-white sm:text-[1.6rem]">
              {aanpak.eindpunt}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Waypoint({
  module,
  index,
  totaal,
  reduced,
}: {
  module: ModuleData;
  index: number;
  totaal: number;
  reduced: boolean;
}) {
  // De markering op de weg telt mee met de volgorde in Sanity.
  const marker = `M${String(index + 1).padStart(2, "0")}`;
  const ref = useRef<HTMLLIElement>(null);
  const actief = useInView(ref, { once: true, margin: "-45% 0px -35% 0px" });

  return (
    <motion.li
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: reduced ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: reduced ? 0.2 : 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Markering op de weg */}
      <motion.span
        aria-hidden
        className={cn(
          "absolute -left-11 top-7 z-10 grid size-9 place-items-center rounded-full border font-mono text-[0.6rem] transition-colors duration-500 sm:-left-16 sm:size-10 sm:text-[0.65rem] lg:-left-24",
          actief
            ? "border-amber bg-amber text-ink"
            : "border-white/15 bg-ink-raised text-slate",
        )}
        animate={
          reduced ? undefined : { scale: actief ? 1 : 0.86 }
        }
        transition={{ type: "spring", stiffness: 320, damping: 20 }}
      >
        {marker}
      </motion.span>

      <div
        className={cn(
          "rounded-[22px] border p-6 transition-all duration-500 sm:p-8",
          actief
            ? "border-white/12 bg-ink-raised"
            : "border-white/[0.06] bg-white/[0.02]",
        )}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <h3 className="display text-[1.5rem] text-white sm:text-[1.9rem]">{module.titel}</h3>
          <span className="font-mono text-[0.65rem] tracking-[0.16em] text-slate uppercase">
            {module.indicatie}
          </span>
        </div>

        <p className="mt-3 max-w-2xl leading-relaxed text-slate">{module.samenvatting}</p>

        <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {module.onderdelen.map((onderdeel, i) => (
            <motion.li
              key={onderdeel}
              className="flex items-start gap-3 text-[0.9375rem] text-white/75"
              initial={{ opacity: 0, x: reduced ? 0 : -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: reduced ? 0.2 : 0.5,
                delay: reduced ? 0 : 0.1 + i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-amber/70" />
              {onderdeel}
            </motion.li>
          ))}
        </ul>
      </div>

      <span className="sr-only">Module {index + 1} van {totaal}</span>
    </motion.li>
  );
}
