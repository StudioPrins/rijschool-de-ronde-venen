import type { SVGProps } from "react";

/**
 * Eén lijnstijl voor de hele site: 24-grid, stroke 1.5, ronde uiteinden.
 * Alle iconen erven `currentColor`, dus kleur komt van de context.
 */
function Line(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    />
  );
}

export const icons = {
  hart: (p: SVGProps<SVGSVGElement>) => (
    <Line {...p}>
      <path d="M12 20.2c-.4 0-.8-.15-1.1-.42C6.3 15.8 3.5 13.3 3.5 9.9 3.5 7.2 5.6 5.2 8.2 5.2c1.5 0 2.9.7 3.8 1.8.9-1.1 2.3-1.8 3.8-1.8 2.6 0 4.7 2 4.7 4.7 0 3.4-2.8 5.9-7.4 9.88-.3.27-.7.42-1.1.42Z" />
    </Line>
  ),
  route: (p: SVGProps<SVGSVGElement>) => (
    <Line {...p}>
      <circle cx="6" cy="18.5" r="2.3" />
      <circle cx="18" cy="5.5" r="2.3" />
      <path d="M8.3 18.5h5.2a3.4 3.4 0 0 0 0-6.8h-3a3.4 3.4 0 0 1 0-6.2h5.2" />
    </Line>
  ),
  brein: (p: SVGProps<SVGSVGElement>) => (
    <Line {...p}>
      <path d="M12 5.2a3 3 0 0 0-5.6-1.1A2.9 2.9 0 0 0 3.6 8a3 3 0 0 0 .4 4.6A3 3 0 0 0 6.2 18a3 3 0 0 0 5.8-1V5.2Z" />
      <path d="M12 5.2a3 3 0 0 1 5.6-1.1A2.9 2.9 0 0 1 20.4 8a3 3 0 0 1-.4 4.6 3 3 0 0 1-2.2 5.4 3 3 0 0 1-5.8-1" />
      <path d="M9 9.5h1.6M13.4 13.6H15" />
    </Line>
  ),
  maan: (p: SVGProps<SVGSVGElement>) => (
    <Line {...p}>
      <path d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.4 8.4 0 1 0 10.2 10.2Z" />
      <path d="M17.2 3.2v2.4M20.8 5.4h-2.4" />
    </Line>
  ),
  pin: (p: SVGProps<SVGSVGElement>) => (
    <Line {...p}>
      <path d="M19 10.3c0 5.1-7 11-7 11s-7-5.9-7-11a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="10.2" r="2.6" />
    </Line>
  ),
  klok: (p: SVGProps<SVGSVGElement>) => (
    <Line {...p}>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 7.2V12l3.2 1.9" />
    </Line>
  ),
  kalender: (p: SVGProps<SVGSVGElement>) => (
    <Line {...p}>
      <rect x="3.4" y="5.2" width="17.2" height="15.4" rx="3" />
      <path d="M3.4 10h17.2M8.4 3.4v3.4M15.6 3.4v3.4" />
      <path d="M8 14h2M14 14h2M8 17.4h2" />
    </Line>
  ),
  euro: (p: SVGProps<SVGSVGElement>) => (
    <Line {...p}>
      <path d="M17.4 6.6a6.6 6.6 0 0 0-9.6 2.2 7.6 7.6 0 0 0 0 6.4 6.6 6.6 0 0 0 9.6 2.2" />
      <path d="M4.4 10.4h8M4.4 13.6h8" />
    </Line>
  ),
  auto: (p: SVGProps<SVGSVGElement>) => (
    <Line {...p}>
      <path d="M4 15.4h16v3.2a1 1 0 0 1-1 1h-1.8a1 1 0 0 1-1-1v-.6H7.8v.6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3.2Z" />
      <path d="M5.2 15.4 6.8 9a2 2 0 0 1 1.94-1.5h6.52A2 2 0 0 1 17.2 9l1.6 6.4" />
      <path d="M7 12.4h2.4M14.6 12.4H17" />
    </Line>
  ),
  cap: (p: SVGProps<SVGSVGElement>) => (
    <Line {...p}>
      <path d="M12 3.6 22 8.4 12 13.2 2 8.4l10-4.8Z" />
      <path d="M6.4 10.7v4.6c0 1.7 2.5 3.1 5.6 3.1s5.6-1.4 5.6-3.1v-4.6" />
      <path d="M20.4 9.2v5.4" />
    </Line>
  ),
  wheel: (p: SVGProps<SVGSVGElement>) => (
    <Line {...p}>
      <circle cx="12" cy="12" r="8.8" />
      <circle cx="12" cy="12" r="3.1" />
      <path d="M12 3.2v5.7M4.4 16.4l4.9-2.9M19.6 16.4l-4.9-2.9" />
    </Line>
  ),
  chart: (p: SVGProps<SVGSVGElement>) => (
    <Line {...p}>
      <path d="M3.4 20.4h17.2" />
      <path d="M6.6 20.4v-6.2M12 20.4V6.2M17.4 20.4v-9.4" />
    </Line>
  ),
  check: (p: SVGProps<SVGSVGElement>) => (
    <Line strokeWidth={2} {...p}>
      <path d="m4.6 12.6 4.8 4.8L19.4 7.2" />
    </Line>
  ),
  pijl: (p: SVGProps<SVGSVGElement>) => (
    <Line {...p}>
      <path d="M4.6 12h14.2M13.4 6.4 19 12l-5.6 5.6" />
    </Line>
  ),
  telefoon: (p: SVGProps<SVGSVGElement>) => (
    <Line {...p}>
      <path d="M8.2 3.6H5.6a2 2 0 0 0-2 2.2c.5 6.9 5.7 12.1 12.6 12.6a2 2 0 0 0 2.2-2v-2.6a1.4 1.4 0 0 0-1.2-1.4l-2.5-.4a1.4 1.4 0 0 0-1.4.7l-.6 1.1a11 11 0 0 1-4.4-4.4l1.1-.6a1.4 1.4 0 0 0 .7-1.4l-.4-2.5a1.4 1.4 0 0 0-1.5-1.3Z" />
    </Line>
  ),
  mail: (p: SVGProps<SVGSVGElement>) => (
    <Line {...p}>
      <rect x="2.8" y="5" width="18.4" height="14" rx="3" />
      <path d="m3.6 7.6 7.3 5a2 2 0 0 0 2.2 0l7.3-5" />
    </Line>
  ),
} as const;

export type IconName = keyof typeof icons;

export function Icon({ name, ...props }: { name: IconName } & SVGProps<SVGSVGElement>) {
  const Component = icons[name];
  return <Component {...props} />;
}

/** Merkiconen — massief, want dat is hoe ze horen te staan. */
export function GoogleMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <path
        fill="#4285F4"
        d="M23.5 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.45a5.5 5.5 0 0 1-2.39 3.61v3h3.86c2.26-2.08 3.58-5.15 3.58-8.8Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.08 7.94-2.91l-3.87-3a7.2 7.2 0 0 1-10.72-3.78H1.4v3.09A12 12 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.35 14.3a7.1 7.1 0 0 1 0-4.59V6.62H1.4a12 12 0 0 0 0 10.77l3.95-3.08Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.2 15.24 0 12 0A12 12 0 0 0 1.4 6.62l3.95 3.09A7.15 7.15 0 0 1 12 4.75Z"
      />
    </svg>
  );
}

export function Ster({ gevuld = true, ...props }: { gevuld?: boolean } & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <path
        fill={gevuld ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={gevuld ? 0 : 1.6}
        strokeLinejoin="round"
        d="m12 2.8 2.9 5.88 6.5.95-4.7 4.58 1.11 6.46L12 17.62l-5.81 3.05 1.1-6.46-4.69-4.58 6.5-.95L12 2.8Z"
      />
    </svg>
  );
}

export function WhatsappMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm5.83 14.06c-.24.68-1.42 1.32-1.96 1.36-.5.05-1.14.07-1.84-.11a16.7 16.7 0 0 1-1.67-.62c-2.94-1.27-4.86-4.23-5.01-4.43-.14-.2-1.2-1.59-1.2-3.03s.76-2.15 1.03-2.45c.27-.29.58-.37.78-.37h.56c.18 0 .42-.07.66.5.24.59.83 2.03.9 2.18.08.15.13.32.02.51-.1.2-.16.32-.31.5l-.47.54c-.15.15-.31.31-.13.61.18.3.79 1.3 1.7 2.11 1.16 1.04 2.14 1.36 2.44 1.51.3.15.48.13.66-.08l.94-1.1c.21-.24.39-.19.65-.11.27.1 1.7.8 1.99.95.29.15.48.22.55.34.07.13.07.72-.17 1.4Z" />
    </svg>
  );
}

export function InstagramMark(props: SVGProps<SVGSVGElement>) {
  return (
    <Line {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </Line>
  );
}

export function FacebookMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.54-1.5h1.66V3.63c-.29-.04-1.28-.13-2.43-.13-2.4 0-4.05 1.47-4.05 4.17V9.9H7.5V13h2.72v8h3.28Z" />
    </svg>
  );
}
