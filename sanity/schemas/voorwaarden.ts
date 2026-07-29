import { defineArrayMember, defineField, defineType } from "sanity";

export const voorwaarden = defineType({
  name: "voorwaarden",
  title: "Algemene voorwaarden",
  type: "document",
  fields: [
    defineField({
      name: "intro",
      title: "Introtekst",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: "artikelen",
      title: "Artikelen",
      description: "De nummering loopt automatisch mee met de volgorde. Sleep om te herordenen.",
      type: "array",
      validation: (Rule) => Rule.required().min(1),
      of: [
        defineArrayMember({
          type: "object",
          name: "artikel",
          fields: [
            defineField({
              name: "titel",
              title: "Titel",
              type: "string",
              validation: (Rule) => Rule.required().max(60),
            }),
            defineField({
              name: "alineas",
              title: "Alinea's",
              type: "array",
              of: [{ type: "text", rows: 4 }],
              validation: (Rule) => Rule.required().min(1),
            }),
            defineField({
              name: "lijst",
              title: "Opsomming",
              description: "Optioneel. Komt onder de alinea's te staan met bolletjes ervoor.",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
          preview: { select: { title: "titel", subtitle: "alineas.0" } },
        }),
      ],
    }),
    defineField({
      name: "slotnoot",
      title: "Slotnoot",
      description: "Het grijze blok onderaan de pagina.",
      type: "text",
      rows: 3,
    }),
  ],
  preview: { prepare: () => ({ title: "Algemene voorwaarden" }) },
});
