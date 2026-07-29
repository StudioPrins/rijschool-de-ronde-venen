import { defineField, defineType } from "sanity";
import { sectiekop } from "./velden";

export const aanmelden = defineType({
  name: "aanmelden",
  title: "Aanmeldformulier",
  type: "document",
  fields: [
    ...sectiekop({ max: 14 }),
    defineField({
      name: "intro",
      title: "Tekst onder de kop",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: "succesKop",
      title: "Kop na het versturen",
      description: "Gebruik {naam} om de voornaam van de aanmelder in te voegen.",
      type: "string",
      initialValue: "Bedankt, {naam}.",
      validation: (Rule) => Rule.required().max(40),
    }),
    defineField({
      name: "succesTekst",
      title: "Tekst na het versturen",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
    }),
  ],
  preview: { prepare: () => ({ title: "Aanmeldformulier" }) },
});
