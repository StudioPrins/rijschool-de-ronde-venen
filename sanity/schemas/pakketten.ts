import { defineArrayMember, defineField, defineType } from "sanity";

export const pakketten = defineType({
  name: "pakketten",
  title: "Prijzen",
  type: "document",
  fields: [
    defineField({
      name: "kopRegel1",
      title: "Kop, regel 1",
      type: "string",
      validation: (Rule) => Rule.required().max(20).warning("Houd het kort, anders loopt de regel uit beeld."),
    }),
    defineField({
      name: "kopRegel2",
      title: "Kop, regel 2",
      type: "string",
      validation: (Rule) => Rule.required().max(20).warning("Houd het kort, anders loopt de regel uit beeld."),
    }),
    defineField({
      name: "actieLabel",
      title: "Label op de actiebalk",
      description: "Leeg laten verbergt de balk.",
      type: "string",
      initialValue: "Introductieactie",
      validation: (Rule) => Rule.max(30),
    }),
    defineField({
      name: "actieTekst",
      title: "Tekst naast de kop",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
    }),

    defineField({
      name: "lijst",
      title: "Pakketten",
      description: "Sleep om de volgorde te wijzigen. Drie pakketten passen naast elkaar.",
      type: "array",
      validation: (Rule) => Rule.required().min(1).max(3),
      of: [
        defineArrayMember({
          type: "object",
          name: "pakket",
          fields: [
            defineField({
              name: "naam",
              title: "Naam",
              type: "string",
              validation: (Rule) => Rule.required().max(24),
            }),
            defineField({
              name: "aantalUren",
              title: "Aantal lesuren",
              description: "Alleen het getal. De prijs per lesuur wordt hier automatisch uit berekend.",
              type: "number",
              validation: (Rule) => Rule.required().integer().min(1),
            }),
            defineField({
              name: "prijs",
              title: "Prijs in euro's",
              description: "Alleen het getal, zonder euroteken en zonder punt.",
              type: "number",
              validation: (Rule) => Rule.required().min(0),
            }),
            defineField({
              name: "examensInbegrepen",
              title: "Examens inbegrepen",
              description: "Zet erbij dat de tussentijdse toets en het praktijkexamen in de prijs zitten.",
              type: "boolean",
              initialValue: false,
            }),
            defineField({
              name: "bevat",
              title: "Wat er in zit",
              type: "array",
              of: [{ type: "string" }],
              validation: (Rule) => Rule.required().min(1),
            }),
            defineField({
              name: "uitgelicht",
              title: "Uitlichten",
              description:
                "Geeft deze kaart de donkere achtergrond met amber gloed. Zet dit bij maximaal één pakket aan.",
              type: "boolean",
              initialValue: false,
            }),
            defineField({
              name: "badge",
              title: "Tekst op het strookje",
              description: "Bijvoorbeeld “Meest gekozen”. Leeg laten verbergt het strookje.",
              type: "string",
              validation: (Rule) => Rule.max(20),
            }),
          ],
          preview: {
            select: { naam: "naam", prijs: "prijs", uren: "aantalUren", uitgelicht: "uitgelicht" },
            prepare: ({ naam, prijs, uren, uitgelicht }) => ({
              title: uitgelicht ? `★ ${naam}` : naam,
              subtitle: `${uren ?? "?"} uur · € ${prijs ?? "?"}`,
            }),
          },
        }),
      ],
    }),

    defineField({
      name: "losseLesPrijs",
      title: "Prijs van een losse les",
      description: "Per uur, alleen het getal.",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "losseLesTekst",
      title: "Tekst bij de losse les",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
    }),
  ],
  preview: { prepare: () => ({ title: "Prijzen" }) },
});
