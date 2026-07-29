import { defineArrayMember, defineField, defineType } from "sanity";
import { sectiekop } from "./velden";

export const faq = defineType({
  name: "faq",
  title: "Veelgestelde vragen",
  type: "document",
  fields: [
    ...sectiekop({ max: 14 }),
    defineField({
      name: "intro",
      title: "Tekst naast de vragen",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(240),
    }),
    defineField({
      name: "lijst",
      title: "Vragen",
      description: "Sleep om de volgorde te wijzigen. De bovenste staat standaard open.",
      type: "array",
      validation: (Rule) => Rule.required().min(1),
      of: [
        defineArrayMember({
          type: "object",
          name: "vraag",
          fields: [
            defineField({
              name: "vraag",
              title: "Vraag",
              type: "string",
              validation: (Rule) => Rule.required().max(80),
            }),
            defineField({
              name: "antwoord",
              title: "Antwoord",
              type: "text",
              rows: 5,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: { select: { title: "vraag", subtitle: "antwoord" } },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Veelgestelde vragen" }) },
});
