import { defineLive } from "next-sanity/live";
import { client } from "./client";

/**
 * `sanityFetch` haalt content op, `<SanityLive />` houdt de pagina bij.
 * In productie ververst de Live Content API de pagina zodra Arash publiceert,
 * dus er is geen revalidatie-webhook nodig. In conceptmodus zie je zijn
 * wijzigingen terwijl hij typt.
 */
export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: process.env.SANITY_API_READ_TOKEN,
  browserToken: process.env.SANITY_API_READ_TOKEN,
});
