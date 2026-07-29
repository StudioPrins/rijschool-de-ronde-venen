"use client";

import { GoogleMark, Ster } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import type { ReviewData, ReviewsData } from "@/sanity/types";

export function Reviews({ reviews }: { reviews: ReviewsData }) {
  return (
    <section id="reviews" className="section-pad overflow-hidden bg-paper">
      <div className="shell">
        <header className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-xl">
            <p className="eyebrow text-ember">Reviews</p>
            <h2 className="display h-section mt-5 text-ink">
              Wat leerlingen<br />
              erover zeggen.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex items-center gap-5 rounded-[22px] border border-ink/10 bg-mist px-6 py-5">
              <GoogleMark className="size-8 shrink-0" />
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="display text-[1.75rem] leading-none text-ink">
                    {reviews.gemiddelde.toLocaleString("nl-NL", {
                      minimumFractionDigits: 1,
                    })}
                  </span>
                  <span className="flex gap-0.5 text-amber">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Ster key={i} className="size-4" />
                    ))}
                  </span>
                </div>
                <p className="mt-1 text-[0.8125rem] text-graphite">
                  {reviews.aantal} beoordelingen op {reviews.bron}
                </p>
              </div>
            </div>
          </Reveal>
        </header>
      </div>

      {/* Doorlopende band die pauzeert zodra je er met muis of toetsenbord in zit.
          Twee identieke helften, zodat -50% precies op een naadloze lus uitkomt. */}
      <div className="relative mt-14">
        <div className="marquee-track flex w-max">
          {[0, 1].map((helft) => (
            <div key={helft} className="flex gap-5 pr-5" aria-hidden={helft === 1 || undefined}>
              {reviews.lijst.map((review) => (
                <ReviewKaart key={`${helft}-${review.naam}`} review={review} />
              ))}
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-paper via-paper/70 to-transparent sm:w-36" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-paper via-paper/70 to-transparent sm:w-36" />
      </div>
    </section>
  );
}

/** Initialen uit de naam: "Lisa van Kouwen" → "LK". */
function initialen(naam: string) {
  const woorden = naam.trim().split(/\s+/);
  const eerste = woorden[0]?.[0] ?? "";
  const laatste = woorden.length > 1 ? (woorden[woorden.length - 1][0] ?? "") : "";
  return (eerste + laatste).toUpperCase();
}

function ReviewKaart({ review }: { review: ReviewData }) {
  return (
    <figure className="flex w-[19rem] shrink-0 flex-col rounded-[22px] border border-ink/10 bg-mist p-7 sm:w-[22rem]">
      <div className="flex items-center justify-between">
        <span className="flex gap-0.5 text-amber">
          {Array.from({ length: 5 }).map((_, i) => (
            <Ster key={i} gevuld={i < review.sterren} className="size-4" />
          ))}
        </span>
        <GoogleMark className="size-4 opacity-70" />
      </div>

      <blockquote className="mt-5 grow text-[0.9375rem] leading-relaxed text-graphite">
        {review.tekst}
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/8 pt-5">
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-ink font-mono text-[0.7rem] text-amber">
          {initialen(review.naam)}
        </span>
        <span className="leading-tight">
          <span className="block text-[0.875rem] font-semibold text-ink">{review.naam}</span>
          <span className="block text-[0.75rem] text-graphite/80">{review.wanneer}</span>
        </span>
      </figcaption>
    </figure>
  );
}
