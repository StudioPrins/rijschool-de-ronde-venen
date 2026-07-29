# Rijschool De Ronde Venen

One-pager voor de rijschool van Arash in Mijdrecht, Wilnis, Woerden, Uithoorn en Waverveen.
Gebouwd door [Studio Prins](https://studioprins.nl).

Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · Motion · TypeScript. Geen database,
geen CMS — alle content staat als typed data in `lib/content/`.

## Aan de slag

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npx eslint .
```

## Ontwerp

**"Nachtrit door de polder."** Inktblauw asfalt, een amber die van de richtingaanwijzer en
het natriumlicht boven de N201 komt, en mint voor alles wat veilig of gehaald betekent.
Het ritme van de pagina wisselt donker en licht af; elke overgang van donker naar licht
krijgt een amber hairline.

Tokens staan in `app/globals.css` onder `@theme`. Lettertypes: Bricolage Grotesque (display),
Instrument Sans (body), JetBrains Mono (routemarkers en labels).

De kernsectie is de **route**: de RIS-methode is een opleiding in vier stappen, dus is die
sectie letterlijk een weg met kantstrepen en een onderbroken middenstreep, die zich in amber
vult naarmate je scrollt (`components/RisRoute.tsx`). De hero-achtergrond is een
perspectivisch wegdek in pure CSS (`components/RoadCanvas.tsx` + `.road-*` in `globals.css`),
zodat de site zonder fotografie overeind staat.

Alle beweging respecteert `prefers-reduced-motion` via `lib/hooks/usePrefersReducedMotion.ts`
en een globale media query in `globals.css`.

## Nog te vervangen voor livegang

Alle placeholder-data staat in twee bestanden. Zoek op `TODO:`.

| Wat | Waar |
| --- | --- |
| Contactgegevens, KvK, socials | `lib/content/site.ts` → `contact` |
| Cijfers (geslaagden, jaren, slagingspercentage) | `lib/content/site.ts` → `cijfers` |
| Google Reviews | `lib/content/reviews.ts` |
| Foto van Arash en de lesauto | `<ImageSlot>` in `components/AboutArash.tsx` |
| Verzending van het aanmeldformulier | `handleSubmit` in `components/SignupForm.tsx` |
| `robots: noindex` uitzetten | `app/layout.tsx` |

De site staat op `noindex` zolang bovenstaande placeholders erin zitten. Zet dat pas uit
zodra de echte gegevens en reviews erin staan.

## Structuur

```
app/          layout, one-pager, /algemene-voorwaarden, /privacy
components/   secties in volgorde van de pagina + ui/ voor primitieven
lib/content/  alle teksten, prijzen, FAQ, RIS-modules, voorwaarden
lib/hooks/    usePrefersReducedMotion
docs/         bronmateriaal van de klant
```
