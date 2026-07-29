# Rijschool De Ronde Venen

One-pager voor de rijschool van Arash in Mijdrecht, Wilnis, Woerden, Uithoorn en Waverveen.
Gebouwd door [Studio Prins](https://studioprins.nl).

Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · Motion · Sanity · TypeScript.

## Aan de slag

```bash
npm install
npm run dev            # site op /, Studio op /studio
npm run build
npx eslint .
npm run types:sanity   # genereert sanity.types.ts uit de schema's
```

Kopieer de Sanity-variabelen uit `.env.local` van een collega, of haal ze op met
`vercel env pull`.

| Variabele | Waarvoor |
| --- | --- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `l01c25ho` |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| `NEXT_PUBLIC_SANITY_API_VERSION` | vaste datum, niet zomaar ophogen |
| `SANITY_API_READ_TOKEN` | Viewer-token, alleen nodig voor de conceptpreview |

De dataset is publiek, dus de site rendert ook zonder token. Zonder token werkt alleen
het live meekijken met onopgeslagen wijzigingen niet.

## Content

Alles wat op de site staat komt uit Sanity. Arash beheert het op `/studio`; het menu daar
volgt de volgorde van de pagina:

Algemeen & contact · Cijferbalk · Waarom wij · Over Arash · Aanpak (RIS) · Prijzen ·
Reviews · Veelgestelde vragen · Algemene voorwaarden

Negen singletons, elk met de lijsten als array erin. Schema's staan in `sanity/schemas/`,
het menu in `sanity/structure.ts`. Er is bewust geen "nieuw document"- of verwijderknop.

**Afgeleid, niet ingevuld** — zodat er niets uit de pas kan lopen:

- bel-, WhatsApp- en mailkoppelingen uit het telefoonnummer en e-mailadres (`lib/contact.ts`)
- prijs per lesuur uit prijs ÷ lesuren (`components/Pricing.tsx`)
- de routemarkering `M01`–`M04` uit de volgorde van de modules
- de initialen in de reviewrondjes uit de naam
- het aantal reviews onder het Google-cijfer uit de lijst

**Niet in Sanity**, met opzet: de menu-links (`lib/navigatie.ts`, verwijzen naar section-id's),
de tweeregelige sectiekoppen, en de privacyverklaring — die beschrijft wat de code met
gegevens doet.

### Zichtbaarheid in Google

Staat in de Studio onder *Algemeen & contact → Vindbaarheid*. Zolang **Zichtbaar in Google**
uit staat, stuurt de site `noindex` mee. Aanzetten zodra de echte foto's, contactgegevens
en reviews erin staan — geen deploy nodig.

### Content terugzetten

`scripts/seed.ndjson` is de eerste vulling. Opnieuw importeren kan met `npm run seed:push`
(overschrijft de negen documenten). Een verse export maak je met `sanity dataset export`.

## Ontwerp

**"Nachtrit door de polder."** Inktblauw asfalt, een amber die van de richtingaanwijzer en
het natriumlicht boven de N201 komt, en mint voor alles wat veilig of gehaald betekent.
Het ritme wisselt donker en licht af; elke overgang van donker naar licht krijgt een amber
hairline.

Tokens staan in `app/globals.css` onder `@theme`; de eigen klassen staan in
`@layer components` zodat Tailwind-utilities er altijd overheen gaan. Lettertypes:
Bricolage Grotesque (display), Instrument Sans (body), JetBrains Mono (routemarkers).

De kernsectie is de **route**: de RIS-methode is een opleiding in stappen, dus is die sectie
letterlijk een weg met kantstrepen en een onderbroken middenstreep die zich in amber vult
tijdens het scrollen (`components/RisRoute.tsx`). De hero-achtergrond is een perspectivisch
wegdek in pure CSS (`components/RoadCanvas.tsx` plus `.road-*` in `globals.css`), zodat de
site ook zonder fotografie staat.

Alle beweging respecteert `prefers-reduced-motion` via
`lib/hooks/usePrefersReducedMotion.ts` en een globale media query.

## Twee dingen om te weten bij het aanpassen

**Stega.** Visual editing codeert onzichtbare tekens in strings. Dat is prima voor lopende
tekst, maar breekt elke string die als wáárde dient. Haal die daarom door `stegaClean()`:
zie `lib/contact.ts` (hrefs) en `app/(site)/page.tsx` (icoonnamen). Metadata en JSON-LD
worden opgehaald met `stega: false`.

**Route groups.** `app/(site)` en `app/(studio)` hebben elk een eigen root layout. De
Studio laadt bewust geen `globals.css` — Tailwind-preflight sloopt anders de Sanity-
interface. De Studio zit achter een client-boundary (`Studio.tsx`), want `sanity.config.ts`
mag niet in de server-graph belanden.

## Structuur

```
app/(site)/     layout, one-pager, /algemene-voorwaarden, /privacy
app/(studio)/   Sanity Studio op /studio
app/api/        draft-mode route voor de conceptpreview
components/     secties in volgorde van de pagina + ui/ voor primitieven
sanity/         schemas, structure, client, live, queries, types, image
lib/            contact-afleiding, navigatie, cn, hooks
docs/           bronmateriaal van de klant
```

## Nog te doen

Foto's van Arash en de lesauto · echte contactgegevens en KvK · echte Google Reviews ·
echte cijfers · verzending van het aanmeldformulier aansluiten (`handleSubmit` in
`components/SignupForm.tsx` doet nu niets) · **Zichtbaar in Google** aanzetten.
