import { createImageUrlBuilder } from "@sanity/image-url";
import { dataset, projectId } from "./env";
import type { SanityAfbeelding } from "./types";

// Alleen projectId en dataset, geen client: zo kan dit ook in een
// client-component zonder de hele Sanity-client mee te slepen.
const builder = createImageUrlBuilder({ projectId, dataset });

/** Respecteert de hotspot die Arash in de Studio instelt. */
export function urlVoor(bron: NonNullable<SanityAfbeelding>) {
  return builder.image(bron).auto("format").fit("crop");
}
