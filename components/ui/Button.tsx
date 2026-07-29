"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import type { MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

type Variant = "amber" | "outline-light" | "outline-dark";

const base =
  "group relative inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[0.95rem] font-semibold tracking-tight transition-colors duration-300 will-change-transform";

const variants: Record<Variant, string> = {
  amber:
    "bg-amber text-ink shadow-[0_14px_40px_-12px_rgba(255,176,32,0.7)] hover:bg-[#ffc247]",
  "outline-light":
    "border border-white/25 text-white hover:border-amber hover:text-amber",
  "outline-dark":
    "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-white",
};

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  /** Volgt subtiel de cursor. Alleen voor de hoofd-CTA gebruiken. */
  magnetic?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function Button({
  children,
  href,
  variant = "amber",
  className,
  magnetic = false,
  onClick,
  type = "button",
}: ButtonProps) {
  const reduced = usePrefersReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 260, damping: 18, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 260, damping: 18, mass: 0.4 });

  const pull = magnetic && !reduced;

  function handleMove(event: MouseEvent<HTMLElement>) {
    if (!pull) return;
    const rect = event.currentTarget.getBoundingClientRect();
    rawX.set((event.clientX - (rect.left + rect.width / 2)) * 0.22);
    rawY.set((event.clientY - (rect.top + rect.height / 2)) * 0.3);
  }

  function handleLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2.5">{children}</span>
      {variant === "amber" && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-60"
          style={{ background: "linear-gradient(90deg,#ffb020,#ff7a2f)" }}
        />
      )}
    </>
  );

  const shared = {
    className: cn(base, variants[variant], className),
    style: pull ? { x, y } : undefined,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
  };

  if (href) {
    return (
      <motion.a href={href} {...shared} onClick={onClick}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} {...shared} onClick={onClick}>
      {content}
    </motion.button>
  );
}
