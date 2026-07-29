import { stegaClean } from "next-sanity";
import type { Contact } from "@/sanity/types";

export type ContactLinks = Contact & {
  telefoonHref: string;
  whatsappHref: string;
  emailHref: string;
};

/**
 * Arash vult alleen een telefoonnummer en e-mailadres in; de bel-, WhatsApp-
 * en mail-links leiden we hier af.
 *
 * `stegaClean` is hier niet optioneel: in conceptmodus zitten er onzichtbare
 * tekens in de tekst voor visual editing, en die maken een `tel:`- of
 * `mailto:`-link stuk.
 */
export function metLinks(contact: Contact): ContactLinks {
  const telefoon = stegaClean(contact.telefoon) ?? "";
  const email = stegaClean(contact.email) ?? "";

  // 06 12 34 56 78 → +31612345678
  const cijfers = telefoon.replace(/\D/g, "");
  const internationaal = cijfers.startsWith("31")
    ? cijfers
    : `31${cijfers.replace(/^0/, "")}`;

  return {
    ...contact,
    instagram: stegaClean(contact.instagram),
    facebook: stegaClean(contact.facebook),
    telefoonHref: `tel:+${internationaal}`,
    whatsappHref: `https://wa.me/${internationaal}`,
    emailHref: `mailto:${email}`,
  };
}
