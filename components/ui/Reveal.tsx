"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

type RevealProps = {
  children: ReactNode;
  /** Vertraging in seconden — gebruik voor stagger binnen een sectie */
  delay?: number;
  /** Afstand waarover het element omhoog komt */
  y?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article" | "header";
};

/**
 * Scroll-reveal met één consistente curve door de hele site.
 * Bij reduced motion wordt het een pure fade zonder verplaatsing.
 */
export function Reveal({ children, delay = 0, y = 28, className, as = "div" }: RevealProps) {
  const reduced = usePrefersReducedMotion();
  const Component = motion[as];

  const variants: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : y, filter: reduced ? "none" : "blur(6px)" },
    shown: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: reduced ? 0.2 : 0.8,
        delay: reduced ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <Component
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </Component>
  );
}
