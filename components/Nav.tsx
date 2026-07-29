"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import type { ContactLinks } from "@/lib/contact";
import { navLinks } from "@/lib/navigatie";

export function Nav({ contact, ctaLabel }: { contact: ContactLinks; ctaLabel: string }) {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 });

  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const [actief, setActief] = useState<string>("");

  useMotionValueEvent(scrollYProgress, "change", () => {
    setCompact(window.scrollY > 24);
  });

  // Scrollspy: de sectie die het dichtst bij de bovenkant van het scherm zit wint.
  useEffect(() => {
    const secties = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((el): el is HTMLElement => el !== null);

    const zichtbaar = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) zichtbaar.add(entry.target.id);
          else zichtbaar.delete(entry.target.id);
        }
        // Boven de eerste sectie hoort niets actief te zijn, dus lege string.
        const eerste = navLinks.find((link) => zichtbaar.has(link.href.slice(1)));
        setActief(eerste ? eerste.href : "");
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );

    secties.forEach((sectie) => observer.observe(sectie));
    return () => observer.disconnect();
  }, []);

  // Achtergrond vastzetten zolang het mobiele menu open staat.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          compact ? "py-2" : "py-4",
        )}
      >
        <div className="shell">
          <div
            className={cn(
              "relative flex items-center justify-between gap-6 rounded-full pl-5 pr-2 transition-all duration-500",
              compact
                ? "glass h-14 shadow-[0_18px_50px_-24px_rgba(0,0,0,0.9)]"
                : "h-16 border border-transparent",
            )}
          >
            <a href="#top" className="flex items-center gap-3" aria-label="Naar boven">
              <Wordmark />
            </a>

            {/* Zes links plus telefoon plus CTA passen pas vanaf xl naast elkaar */}
            <nav className="hidden items-center gap-1 xl:flex" aria-label="Hoofdmenu">
              {navLinks.map((link) => {
                const isActief = actief === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-[0.875rem] font-medium transition-colors",
                      isActief ? "text-white" : "text-slate hover:text-white",
                    )}
                  >
                    {isActief && (
                      <motion.span
                        layoutId="nav-actief"
                        className="absolute inset-0 rounded-full bg-white/10"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={contact.telefoonHref}
                className="hidden text-[0.875rem] font-medium whitespace-nowrap text-slate transition-colors hover:text-amber xl:block"
              >
                {contact.telefoon}
              </a>
              <Button
                href="#aanmelden"
                className="hidden px-5 py-2.5 text-sm whitespace-nowrap sm:inline-flex"
              >
                {ctaLabel}
              </Button>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="grid size-11 place-items-center rounded-full text-white xl:hidden"
                aria-label="Menu openen"
                aria-expanded={open}
              >
                <span className="flex flex-col gap-[5px]">
                  <span className="block h-[1.5px] w-5 bg-current" />
                  <span className="block h-[1.5px] w-5 bg-current" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Voortgang van de pagina — dezelfde amber als de route hieronder */}
        <motion.div
          className="mx-auto mt-2 h-[2px] max-w-[1240px] origin-left bg-gradient-to-r from-amber to-ember"
          style={{ scaleX: progress }}
        />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-ink xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="shell flex h-full flex-col overflow-y-auto pb-10 pt-6">
              <div className="flex items-center justify-between">
                <Wordmark />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="grid size-11 place-items-center rounded-full text-white"
                  aria-label="Menu sluiten"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden>
                    <path d="M6 6l12 12M18 6 6 18" />
                  </svg>
                </button>
              </div>

              <nav className="mt-14 flex flex-col" aria-label="Mobiel menu">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="display border-b border-white/10 py-4 text-[1.75rem] text-white sm:py-5 sm:text-[2rem]"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-3 pt-10">
                <Button href="#aanmelden" onClick={() => setOpen(false)} className="w-full">
                  {ctaLabel}
                </Button>
                <a
                  href={contact.telefoonHref}
                  className="text-center text-sm text-slate"
                >
                  Of bel {contact.telefoon}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/** Woordmerk met het L-plaatje als enige beeldelement — geen los logo nodig. */
function Wordmark() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="grid size-8 place-items-center rounded-[7px] bg-amber font-display text-[1.15rem] font-bold leading-none text-ink">
        L
      </span>
      <span className="flex flex-col leading-none">
        <span className="display text-[0.95rem] text-white">De Ronde Venen</span>
        <span className="font-mono text-[0.55rem] tracking-[0.24em] text-slate uppercase">
          Rijschool
        </span>
      </span>
    </span>
  );
}
