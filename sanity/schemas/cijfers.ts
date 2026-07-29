import { defineArrayMember, defineField, defineType } from "sanity";

/** Iconen die in components/ui/Icons.tsx bestaan voor de cijferbalk. */
const CIJFER_ICONEN = [
  { title: "Diploma", value: "cap" },
  { title: "Stuur", value: "wheel" },
  { title: "Grafiek", value: "chart" },
];

export const cijfers = defineType({
  name: "cijfers",
  title: "Cijferbalk",
  type: "document",
  fields: [
    defineField({
      name: "lijst",
      title: "Cijfers",
      description: "De balk onder het openingsscherm. Drie cijfers passen het mooist.",
      type: "array",
      validation: (Rule) => Rule.required().min(2).max(4),
      of: [
        defineArrayMember({
          type: "object",
          name: "cijfer",
          fields: [
            defineField({
              name: "waarde",
              title: "Getal",
              description: "Alleen het getal. Het telt vanzelf omhoog als de bezoeker erlangs scrollt.",
              type: "number",
              validation: (Rule) => Rule.required().integer().min(0),
            }),
            defineField({
              name: "achtervoegsel",
              title: "Teken erachter",
              description: "Bijvoorbeeld + of %. Leeg laten mag.",
              type: "string",
              validation: (Rule) => Rule.max(2),
            }),
            defineField({
              name: "label",
              title: "Omschrijving",
              type: "string",
              validation: (Rule) => Rule.required().max(40),
            }),
            defineField({
              name: "icoon",
              title: "Icoon",
              type: "string",
              options: { list: CIJFER_ICONEN, layout: "radio" },
              initialValue: "cap",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { waarde: "waarde", achtervoegsel: "achtervoegsel", label: "label" },
            prepare: ({ waarde, achtervoegsel, label }) => ({
              title: `${waarde ?? "?"}${achtervoegsel ?? ""}`,
              subtitle: label,
            }),
          },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Cijferbalk" }) },
});
