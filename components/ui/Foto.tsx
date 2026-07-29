import Image from "next/image";
import { cn } from "@/lib/cn";
import { urlVoor } from "@/sanity/image";
import type { SanityAfbeelding } from "@/sanity/types";

type FotoProps = {
  bron: SanityAfbeelding;
  /** Wat hier hoort te staan — ook de tekst in de placeholder */
  label: string;
  breedte: number;
  hoogte: number;
  className?: string;
  tone?: "dark" | "light";
  sizes?: string;
};

/**
 * Toont de foto uit Sanity zodra Arash er een uploadt. Zolang die er niet is
 * blijft de gearceerde plaatshouder staan, zodat de layout niet inzakt.
 */
export function Foto({
  bron,
  label,
  breedte,
  hoogte,
  className,
  tone = "dark",
  sizes,
}: FotoProps) {
  const dark = tone === "dark";
  const ratio = `${breedte} / ${hoogte}`;

  if (bron?.asset) {
    return (
      <div
        className={cn("relative overflow-hidden rounded-[28px]", className)}
        style={{ aspectRatio: ratio }}
      >
        <Image
          src={urlVoor(bron).width(breedte).height(hoogte).url()}
          alt={bron.alt ?? label}
          fill
          sizes={sizes ?? "(max-width: 1024px) 90vw, 400px"}
          className="object-cover"
          placeholder={bron.asset.metadata?.lqip ? "blur" : "empty"}
          blurDataURL={bron.asset.metadata?.lqip ?? undefined}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative grid place-items-center overflow-hidden rounded-[28px]",
        dark ? "bg-ink-raised" : "bg-[#dfe5ee]",
        className,
      )}
      style={{ aspectRatio: ratio }}
    >
      {/* Diagonale arcering: leest direct als "hier komt nog iets" */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `repeating-linear-gradient(135deg, ${
            dark ? "rgba(255,255,255,0.07)" : "rgba(10,16,32,0.07)"
          } 0 2px, transparent 2px 11px)`,
        }}
      />
      <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center">
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke={dark ? "#7c89a0" : "#46536b"}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <rect x="3" y="4" width="18" height="16" rx="3" />
          <circle cx="8.5" cy="9.5" r="1.6" />
          <path d="M21 15.5 16 11l-9 9" />
        </svg>
        <span
          className={cn(
            "font-mono text-[0.65rem] tracking-[0.2em] uppercase",
            dark ? "text-slate" : "text-graphite",
          )}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
