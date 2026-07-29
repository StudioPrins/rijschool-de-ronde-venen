import { defineArrayMember, defineField, defineType } from "sanity";

export const aanpak = defineType({
  name: "aanpak",
  title: "Aanpak (RIS)",
  type: "document",
  fields: [
    defineField({
      name: "intro",
      title: "Introtekst",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required().max(400),
    }),
    defineField({
      name: "modules",
      title: "Modules",
      description:
        "De stappen op de weg. Sleep om de volgorde te wijzigen — de markering op de weg telt automatisch mee.",
      type: "array",
      validation: (Rule) => Rule.required().min(2),
      of: [
        defineArrayMember({
          type: "object",
          name: "module",
          fields: [
            defineField({
              name: "titel",
              title: "Titel",
              type: "string",
              validation: (Rule) => Rule.required().max(40),
            }),
            defineField({
              name: "indicatie",
              title: "Wanneer",
              description: "Bijvoorbeeld “Les 1 – 6”.",
              type: "string",
              validation: (Rule) => Rule.required().max(24),
            }),
            defineField({
              name: "samenvatting",
              title: "Samenvatting",
              type: "text",
              rows: 3,
              validation: (Rule) => Rule.required().max(280),
            }),
            defineField({
              name: "onderdelen",
              title: "Wat je leert",
              description: "Een even aantal werkt het mooist, want ze staan in twee kolommen.",
              type: "array",
              of: [{ type: "string" }],
              validation: (Rule) => Rule.required().min(2),
            }),
          ],
          preview: {
            select: { title: "titel", subtitle: "indicatie" },
          },
        }),
      ],
    }),
    defineField({
      name: "eindpunt",
      title: "Tekst bij het eindpunt",
      description: "Staat achter het groene vinkje onderaan de weg.",
      type: "string",
      initialValue: "Rijbewijs op zak.",
      validation: (Rule) => Rule.required().max(30),
    }),
  ],
  preview: { prepare: () => ({ title: "Aanpak (RIS)" }) },
});
