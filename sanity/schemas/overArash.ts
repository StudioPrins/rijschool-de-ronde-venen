import { defineField, defineType } from "sanity";

export const overArash = defineType({
  name: "overArash",
  title: "Over Arash",
  type: "document",
  fields: [
    defineField({
      name: "kop",
      title: "Kop",
      type: "string",
      validation: (Rule) => Rule.required().max(30),
    }),
    defineField({
      name: "alineas",
      title: "Tekst",
      description: "Elke regel wordt een eigen alinea. Sleep om de volgorde te wijzigen.",
      type: "array",
      of: [{ type: "text", rows: 5 }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "portret",
      title: "Foto van Arash",
      description:
        "Staand beeld werkt het best (verhouding 4:5). Sleep de cirkel om te bepalen wat er altijd zichtbaar moet blijven bij het bijsnijden.",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Omschrijving van de foto",
          description: "Voor bezoekers die de foto niet kunnen zien, en voor Google.",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: "badge",
      title: "Tekst op het zwarte label",
      description: "Het labeltje onder de foto.",
      type: "string",
      initialValue: "Rijinstructeur · WRM",
      validation: (Rule) => Rule.max(30),
    }),
  ],
  preview: {
    select: { title: "kop", media: "portret" },
    prepare: ({ title, media }) => ({ title: "Over Arash", subtitle: title, media }),
  },
});
