"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";
import type { ContactLinks } from "@/lib/contact";
import type { FaqData } from "@/sanity/types";

export function Faq({ faq, contact }: { faq: FaqData; contact: ContactLinks }) {
  const [open, setOpen] = useState<number | null>(0);
  const reduced = usePrefersReducedMotion();

  return (
    <section id="vragen" className="hairline-amber section-pad relative bg-mist">
      <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <p className="eyebrow text-ember">Veelgestelde vragen</p>
            <h2 className="display h-section mt-5 text-ink">
              Even<br />
              navragen.
            </h2>
            <p className="mt-6 max-w-sm leading-relaxed text-graphite">{faq.intro}</p>
            <a
              href={contact.telefoonHref}
              className="display mt-6 inline-block text-[1.5rem] text-ink underline decoration-amber decoration-2 underline-offset-[6px] transition-colors hover:text-ember"
            >
              {contact.telefoon}
            </a>
          </Reveal>
        </div>

        <ul className="flex flex-col">
          {faq.lijst.map((item, index) => {
            const isOpen = open === index;
            return (
              <Reveal as="li" key={item.vraag} delay={Math.min(index * 0.04, 0.24)}>
                <div className="border-b border-ink/12">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span
                        className={cn(
                          "display text-[1.125rem] transition-colors duration-300 sm:text-[1.3rem]",
                          isOpen ? "text-ember" : "text-ink",
                        )}
                      >
                        {item.vraag}
                      </span>
                      <span
                        aria-hidden
                        className={cn(
                          "relative grid size-9 shrink-0 place-items-center rounded-full border transition-colors duration-300",
                          isOpen ? "border-ember bg-ember text-white" : "border-ink/15 text-ink",
                        )}
                      >
                        <span className="absolute h-px w-3.5 bg-current" />
                        <motion.span
                          className="absolute h-3.5 w-px bg-current"
                          animate={{ scaleY: isOpen ? 0 : 1 }}
                          transition={{ duration: reduced ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
                        />
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${index}`}
                        key="panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: reduced ? 0 : 0.42, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: reduced ? 0 : 0.28 },
                        }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-7 pr-2 leading-relaxed text-graphite sm:pr-10">
                          {item.antwoord}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
