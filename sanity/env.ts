function vereist(waarde: string | undefined, naam: string): string {
  if (!waarde) {
    throw new Error(
      `Ontbrekende omgevingsvariabele ${naam}. Zet hem in .env.local en in de Vercel-projectinstellingen.`,
    );
  }
  return waarde;
}

export const projectId = vereist(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "NEXT_PUBLIC_SANITY_PROJECT_ID",
);

export const dataset = vereist(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "NEXT_PUBLIC_SANITY_DATASET",
);

/** Vaste datum: Sanity bevriest het API-gedrag op deze versie. Niet zomaar ophogen. */
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-07-29";

export const studioUrl = "/studio";
