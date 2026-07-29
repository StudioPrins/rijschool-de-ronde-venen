import { defineArrayMember, defineField, defineType } from "sanity";

/** Iconen die in components/ui/Icons.tsx bestaan voor de tegels. */
const USP_ICONEN = [
  { title: "Hart", value: "hart" },
  { title: "Route", value: "route" },
  { title: "Brein", value: "brein" },
  { title: "Maan (avond)", value: "maan" },
  { title: "Locatiespeld", value: "pin" },
  { title: "Klok", value: "klok" },
  { title: "Kalender", value: "kalender" },
  { title: "Euro", value: "euro" },
  { title: "Auto", value: "auto" },
];

export const usps = defineType({
  name: "usps",
  title: "Waarom wij",
  type: "document",
  fields: [
    defineField({
      name: "lijst",
      title: "Tegels",
      description:
        "Sleep om de volgorde te wijzigen. Eén tegel mag je uitlichten: die wordt dubbel zo groot en donker.",
      type: "array",
      validation: (Rule) => Rule.required().min(3),
      of: [
        defineArrayMember({
          type: "object",
          name: "usp",
          fields: [
            defineField({
              name: "titel",
              title: "Titel",
              type: "string",
              validation: (Rule) => Rule.required().max(40),
            }),
            defineField({
              name: "tekst",
              title: "Tekst",
              type: "text",
              rows: 3,
              validation: (Rule) => Rule.required().max(220),
            }),
            defineField({
              name: "icoon",
              title: "Icoon",
              type: "string",
              options: { list: USP_ICONEN },
              initialValue: "hart",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "groot",
              title: "Uitlichten",
              description:
                "Maakt deze tegel dubbel zo groot met een donkere achtergrond. Zet dit bij maximaal één tegel aan.",
              type: "boolean",
              initialValue: false,
            }),
          ],
          preview: {
            select: { title: "titel", subtitle: "tekst", groot: "groot" },
            prepare: ({ title, subtitle, groot }) => ({
              title: groot ? `★ ${title}` : title,
              subtitle,
            }),
          },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Waarom wij" }) },
});
