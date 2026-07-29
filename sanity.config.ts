import { nlNLLocale } from "@sanity/locale-nl-nl";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";

import { apiVersion, dataset, projectId, studioUrl } from "./sanity/env";
import { schemaTypes, singletons } from "./sanity/schemas";
import { structure } from "./sanity/structure";

const singletonTypes = new Set<string>(singletons.map((item) => item.type));

export default defineConfig({
  basePath: studioUrl,
  projectId,
  dataset,
  title: "Rijschool De Ronde Venen",

  schema: {
    types: schemaTypes,
    // Singletons horen niet in het "maak nieuw document"-menu.
    templates: (prev) => prev.filter((template) => !singletonTypes.has(template.schemaType)),
  },

  document: {
    // Van een singleton kun je er niet nog een maken of hem weggooien.
    actions: (prev, { schemaType }) =>
      singletonTypes.has(schemaType)
        ? prev.filter(({ action }) => action && !["duplicate", "delete", "unpublish"].includes(action))
        : prev,
  },

  plugins: [
    structureTool({ structure }),
    presentationTool({
      previewUrl: {
        previewMode: { enable: "/api/draft-mode/enable" },
      },
    }),
    visionTool({ defaultApiVersion: apiVersion }),
    // Nederlandse Studio-interface voor Arash.
    nlNLLocale(),
  ],
});
