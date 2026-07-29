import { defineArrayMember, defineField, defineType } from "sanity";

export const reviews = defineType({
  name: "reviews",
  title: "Reviews",
  type: "document",
  fields: [
    defineField({
      name: "gemiddelde",
      title: "Gemiddelde beoordeling",
      description: "Het cijfer dat naast het Google-logo staat, bijvoorbeeld 4.9.",
      type: "number",
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({
      name: "bron",
      title: "Bron",
      type: "string",
      initialValue: "Google",
      validation: (Rule) => Rule.required().max(20),
    }),
    defineField({
      name: "lijst",
      title: "Reviews",
      description:
        "Deze schuiven in een lus voorbij en stoppen zodra de bezoeker er met de muis op staat. Het aantal onder het cijfer telt automatisch mee.",
      type: "array",
      validation: (Rule) => Rule.required().min(3),
      of: [
        defineArrayMember({
          type: "object",
          name: "review",
          fields: [
            defineField({
              name: "naam",
              title: "Naam",
              description: "De initialen in het rondje worden hier automatisch van gemaakt.",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "sterren",
              title: "Sterren",
              type: "number",
              options: {
                list: [
                  { title: "★★★★★", value: 5 },
                  { title: "★★★★", value: 4 },
                  { title: "★★★", value: 3 },
                  { title: "★★", value: 2 },
                  { title: "★", value: 1 },
                ],
                layout: "radio",
              },
              initialValue: 5,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "wanneer",
              title: "Wanneer",
              description: "Zoals Google het toont, bijvoorbeeld “2 weken geleden”.",
              type: "string",
              validation: (Rule) => Rule.required().max(30),
            }),
            defineField({
              name: "tekst",
              title: "Review",
              type: "text",
              rows: 4,
              validation: (Rule) => Rule.required().max(400),
            }),
          ],
          preview: {
            select: { title: "naam", subtitle: "tekst", sterren: "sterren" },
            prepare: ({ title, subtitle, sterren }) => ({
              title: `${"★".repeat(sterren ?? 0)} ${title}`,
              subtitle,
            }),
          },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Reviews" }) },
});
