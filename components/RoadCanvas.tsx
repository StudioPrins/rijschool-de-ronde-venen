"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

/**
 * De achtergrond van de hero: een nachtelijke polderweg, volledig in CSS.
 * Er is nog geen fotografie van Arash of de lesauto, en dit staat sterker
 * dan een stockfoto zou doen.
 */
export function RoadCanvas() {
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll();

  // De weg zakt iets weg terwijl je de hero uit scrollt — geen parallax-truc,
  // maar het effect van wegrijden.
  const y = useTransform(scrollYProgress, [0, 0.18], ["0%", "14%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.16], [1, 0.35]);

  return (
    <motion.div
      className="road-stage grain"
      aria-hidden
      style={reduced ? undefined : { y, opacity }}
    >
      {/* Nachtlucht boven de horizon */}
      <div
        className="absolute inset-x-0 top-0 h-[52%]"
        style={{
          background:
            "linear-gradient(to bottom, #070c18 0%, #0a1122 52%, #14203a 88%, #1b2a48 100%)",
        }}
      />

      <div className="road-plane">
        <div className="road-layer road-dash" style={reduced ? { animation: "none" } : undefined} />
        <div className="road-layer road-edge-left" />
        <div className="road-layer road-edge-right" />
      </div>

      {/* Koplampen: twee zachte kegels vanaf de onderrand */}
      <div
        className="absolute -bottom-[18vh] left-1/2 h-[60vh] w-[70vw] max-w-[900px] -translate-x-1/2 blur-[70px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,236,200,0.3), rgba(255,176,32,0.1) 60%, transparent)",
          animation: reduced ? "none" : "headlight-drift 9s ease-in-out infinite",
        }}
      />

      <div className="road-fade" />
    </motion.div>
  );
}
