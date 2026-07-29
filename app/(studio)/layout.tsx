/**
 * Aparte root layout voor de Studio. Laadt bewust géén globals.css: de
 * Tailwind-preflight en de donkere body-achtergrond van de site zouden de
 * Sanity Studio slopen.
 *
 * Titel en viewport komen uit next-sanity/studio, doorgegeven in de page.
 */
export const metadata = {
  robots: { index: false, follow: false },
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
