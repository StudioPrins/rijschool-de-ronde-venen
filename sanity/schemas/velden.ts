import { defineField } from "sanity";

/**
 * De sectiekoppen op de pagina breken over twee regels. Daarom twee losse
 * velden in plaats van één: zo blijft de typografische compositie heel,
 * ook als de tekst verandert.
 */
export function sectiekop({ groep, max = 20 }: { groep?: string; max?: number } = {}) {
  const kort = "Houd het kort, anders loopt de regel uit beeld.";

  return [
    defineField({
      name: "eyebrow",
      title: "Klein label boven de kop",
      type: "string",
      group: groep,
      validation: (Rule) => Rule.required().max(28),
    }),
    defineField({
      name: "kopRegel1",
      title: "Kop, regel 1",
      type: "string",
      group: groep,
      validation: (Rule) => Rule.required().max(max).warning(kort),
    }),
    defineField({
      name: "kopRegel2",
      title: "Kop, regel 2",
      type: "string",
      group: groep,
      validation: (Rule) => Rule.required().max(max).warning(kort),
    }),
  ];
}
