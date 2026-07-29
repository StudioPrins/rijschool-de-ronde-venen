import { CountUp } from "@/components/ui/CountUp";
import { Icon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import type { CijferData } from "@/sanity/types";

export function StatsBar({ cijfers }: { cijfers: CijferData[] }) {
  return (
    <section className="relative border-y border-white/[0.07] bg-ink">
      <div className="shell grid gap-px sm:grid-cols-3">
        {cijfers.map((cijfer, index) => (
          <Reveal
            key={cijfer.label}
            delay={index * 0.09}
            className="relative flex items-center gap-5 py-9 sm:flex-col sm:gap-4 sm:py-14 sm:text-center"
          >
            {index > 0 && (
              <span
                aria-hidden
                className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent sm:block"
              />
            )}
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white/[0.04] text-amber ring-1 ring-inset ring-white/[0.08]">
              <Icon name={cijfer.icoon} className="size-6" />
            </span>
            <div className="sm:contents">
              <p className="display text-[2.75rem] leading-none text-white sm:text-[3.5rem]">
                <CountUp to={cijfer.waarde} suffix={cijfer.achtervoegsel ?? ""} />
              </p>
              <p className="text-sm text-slate">{cijfer.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
