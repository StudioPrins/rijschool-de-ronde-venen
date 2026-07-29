import { defineCliConfig } from "sanity/cli";
import { dataset, projectId } from "./sanity/env";

export default defineCliConfig({
  api: { projectId, dataset },
  studioHost: "rijschool-de-ronde-venen",
  autoUpdates: true,
});
