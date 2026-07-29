import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, studioUrl } from "./env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // De Live Content API zorgt zelf voor verse data, dus de CDN-cache zit
  // er alleen maar tussen.
  useCdn: false,
  perspective: "published",
  // Zet de verwijzingen in de tekst die visual editing gebruikt om te weten
  // welk veld je aanklikt. Alleen actief in conceptmodus.
  stega: { studioUrl },
});
