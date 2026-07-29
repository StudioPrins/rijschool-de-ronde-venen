import { defineField, defineType } from "sanity";

export const site = defineType({
  name: "site",
  title: "Algemeen & contact",
  type: "document",
  groups: [
    { name: "hero", title: "Openingsscherm", default: true },
    { name: "lesgebied", title: "Lesgebied" },
    { name: "contact", title: "Contactgegevens" },
    { name: "seo", title: "Vindbaarheid" },
  ],
  fields: [
    defineField({
      name: "naam",
      title: "Naam van de rijschool",
      type: "string",
      group: "hero",
      validation: (Rule) => Rule.required(),
    }),

    // De kop is drie losse regels omdat elke regel apart in beeld schuift.
    // Langere regels breken die animatie en lopen op mobiel uit beeld.
    defineField({
      name: "heroRegel1",
      title: "Kop, regel 1",
      type: "string",
      group: "hero",
      validation: (Rule) => Rule.required().max(18).warning("Houd het kort, anders past de regel niet."),
    }),
    defineField({
      name: "heroRegel2",
      title: "Kop, regel 2",
      type: "string",
      group: "hero",
      validation: (Rule) => Rule.required().max(18).warning("Houd het kort, anders past de regel niet."),
    }),
    defineField({
      name: "heroRegel3",
      title: "Kop, regel 3",
      description: "Zonder het accentwoord hieronder. Bijvoorbeeld: “in je”.",
      type: "string",
      group: "hero",
      validation: (Rule) => Rule.required().max(14).warning("Houd het kort, anders past de regel niet."),
    }),
    defineField({
      name: "heroAccent",
      title: "Accentwoord",
      description: "Het laatste woord van regel 3. Krijgt de amberkleur.",
      type: "string",
      group: "hero",
      validation: (Rule) => Rule.required().max(12),
    }),
    defineField({
      name: "heroIntro",
      title: "Introtekst onder de kop",
      type: "text",
      rows: 3,
      group: "hero",
      validation: (Rule) => Rule.required().max(240),
    }),
    defineField({
      name: "heroPunten",
      title: "Punten in het zwevende paneel",
      description: "Vier korte punten. Meer past niet in het paneel.",
      type: "array",
      of: [{ type: "string" }],
      group: "hero",
      validation: (Rule) => Rule.required().min(3).max(4),
    }),

    defineField({
      name: "footerTekst",
      title: "Tekst onderaan de pagina",
      description: "Het korte stukje naast het logo in de footer.",
      type: "text",
      rows: 3,
      group: "hero",
      validation: (Rule) => Rule.required().max(300),
    }),

    defineField({
      name: "regios",
      title: "Plaatsen waar je lesgeeft",
      description:
        "Verschijnt op drie plekken: boven de kop, als knopjes bij Over Arash, en onderaan in de footer. De eerste vijf staan boven de kop.",
      type: "array",
      of: [{ type: "string" }],
      group: "lesgebied",
      validation: (Rule) => Rule.required().min(5),
    }),

    defineField({
      name: "contact",
      title: "Contactgegevens",
      type: "object",
      group: "contact",
      options: { collapsible: false },
      fields: [
        defineField({
          name: "telefoon",
          title: "Telefoonnummer",
          description: "Zoals je het getoond wilt hebben, bijvoorbeeld 06 12 34 56 78. De bel- en WhatsApp-links worden hier automatisch van gemaakt.",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "email",
          title: "E-mailadres",
          type: "string",
          validation: (Rule) => Rule.required().email(),
        }),
        defineField({ name: "adres", title: "Straat en huisnummer", type: "string" }),
        defineField({ name: "postcode", title: "Postcode", type: "string" }),
        defineField({ name: "plaats", title: "Plaats", type: "string" }),
        defineField({ name: "kvk", title: "KvK-nummer", type: "string" }),
        defineField({
          name: "instagram",
          title: "Instagram",
          type: "url",
          description: "Volledige link. Leeg laten verbergt het icoon.",
        }),
        defineField({
          name: "facebook",
          title: "Facebook",
          type: "url",
          description: "Volledige link. Leeg laten verbergt het icoon.",
        }),
      ],
    }),

    defineField({
      name: "url",
      title: "Adres van de website",
      type: "url",
      group: "seo",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "seoOmschrijving",
      title: "Omschrijving voor Google",
      description: "Wat er onder de titel in de zoekresultaten staat. Ongeveer 150 tekens.",
      type: "text",
      rows: 3,
      group: "seo",
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "zoekmachinesToestaan",
      title: "Zichtbaar in Google",
      description:
        "Zet dit pas aan als alle echte teksten, foto's, contactgegevens en reviews erin staan. Zolang het uit staat vraagt de site aan Google om de pagina niet op te nemen.",
      type: "boolean",
      initialValue: false,
      group: "seo",
    }),
  ],
  preview: {
    select: { title: "naam" },
    prepare: ({ title }) => ({ title: "Algemeen & contact", subtitle: title }),
  },
});
