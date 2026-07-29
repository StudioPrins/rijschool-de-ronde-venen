import { defineEnableDraftMode } from "next-sanity/draft-mode";
import { client } from "@/sanity/client";

/**
 * Zet de conceptmodus aan zodat Arash in de Studio ziet wat hij typt voordat
 * hij publiceert. De token bepaalt of iemand dat mag — zonder geldige sessie
 * gebeurt er niets.
 */
export const { GET } = defineEnableDraftMode({
  client: client.withConfig({ token: process.env.SANITY_API_READ_TOKEN }),
});
