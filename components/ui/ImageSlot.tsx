import { cn } from "@/lib/cn";

type ImageSlotProps = {
  /** Wat hier uiteindelijk komt te staan — ook zichtbaar in de placeholder */
  label: string;
  ratio?: string;
  className?: string;
  tone?: "dark" | "light";
};

/**
 * Gereserveerde plek voor beeld dat Arash nog moet aanleveren.
 * Vervangen door <Image> zodra de foto's er zijn — de omliggende layout
 * hoeft dan niet te wijzigen.
 */
export function ImageSlot({ label, ratio = "4 / 5", className, tone = "dark" }: ImageSlotProps) {
  const dark = tone === "dark";

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
