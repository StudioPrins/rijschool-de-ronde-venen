"use client";

import { NextStudio } from "next-sanity/studio/client-component";
import config from "@/sanity.config";

/**
 * Client-boundary om de Studio heen. Zonder deze grens belandt sanity.config
 * in de server-graph, en daar breekt de Studio-code (die is client-only).
 */
export default function Studio() {
  return <NextStudio config={config} />;
}
