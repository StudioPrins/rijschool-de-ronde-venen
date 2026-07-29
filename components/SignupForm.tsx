"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";
import type { ContactLinks } from "@/lib/contact";
import type { AanmeldenData, PakkettenData } from "@/sanity/types";

type Velden = {
  naam: string;
  email: string;
  telefoon: string;
  adres: string;
  lessenPerWeek: string;
  urenPerLes: string;
  startdatum: string;
  pakket: string;
  opmerkingen: string;
};

const stappen = [
  { titel: "Wie ben je?", hint: "Zodat ik je kan bereiken" },
  { titel: "Waar en wanneer?", hint: "Ophaaladres en je voorkeuren" },
  { titel: "Welk pakket?", hint: "Nog niet definitief — we praten erover" },
];

export function SignupForm({
  aanmelden,
  pakketten,
  contact,
}: {
  aanmelden: AanmeldenData;
  pakketten: PakkettenData;
  contact: ContactLinks;
}) {
  const reduced = usePrefersReducedMotion();

  // Het uitgelichte pakket staat voorgeselecteerd; anders het eerste.
  const leeg: Velden = {
    naam: "",
    email: "",
    telefoon: "",
    adres: "",
    lessenPerWeek: "1",
    urenPerLes: "2",
    startdatum: "",
    pakket: (pakketten.lijst.find((p) => p.uitgelicht) ?? pakketten.lijst[0])?._key ?? "advies",
    opmerkingen: "",
  };

  const [stap, setStap] = useState(0);
  const [velden, setVelden] = useState<Velden>(leeg);
  const [fouten, setFouten] = useState<Partial<Record<keyof Velden, string>>>({});
  const [verzonden, setVerzonden] = useState(false);

  function zet<K extends keyof Velden>(veld: K, waarde: Velden[K]) {
    setVelden((vorige) => ({ ...vorige, [veld]: waarde }));
    setFouten((vorige) => ({ ...vorige, [veld]: undefined }));
  }

  function controleer(huidige: number) {
    const nieuwe: Partial<Record<keyof Velden, string>> = {};

    if (huidige === 0) {
      if (velden.naam.trim().length < 2) nieuwe.naam = "Vul je naam in.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(velden.email))
        nieuwe.email = "Dit e-mailadres klopt nog niet.";
      if (velden.telefoon.replace(/\D/g, "").length < 9)
        nieuwe.telefoon = "Vul een telefoonnummer in waarop je bereikbaar bent.";
    }

    if (huidige === 1) {
      if (velden.adres.trim().length < 4)
        nieuwe.adres = "Waar mag ik je ophalen? Straat en plaats is genoeg.";
      if (!velden.startdatum) nieuwe.startdatum = "Kies een datum waarop je wilt starten.";
    }

    setFouten(nieuwe);
    return Object.keys(nieuwe).length === 0;
  }

  function volgende() {
    if (!controleer(stap)) return;
    setStap((s) => Math.min(s + 1, stappen.length - 1));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!controleer(stap)) return;

    // TODO: hier de daadwerkelijke verzending aansluiten (Resend-route of
    // e-mailservice). Nu toont het formulier alleen de bevestiging.
    setVerzonden(true);
  }

  const voortgang = ((stap + 1) / stappen.length) * 100;

  return (
    <section id="aanmelden" className="grain section-pad relative overflow-hidden bg-ink">
      <span
        aria-hidden
        className="absolute -left-40 top-1/3 size-[520px] rounded-full blur-[130px]"
        style={{ background: "radial-gradient(closest-side, rgba(255,122,47,0.18), transparent)" }}
      />

      <div className="shell relative grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow text-amber">{aanmelden.eyebrow}</p>
            <h2 className="display h-section mt-5 text-white">
              {aanmelden.kopRegel1}<br />
              {aanmelden.kopRegel2}
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-slate">{aanmelden.intro}</p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-10 flex flex-col gap-3">
              <a
                href={contact.telefoonHref}
                className="flex items-center gap-3.5 text-white transition-colors hover:text-amber"
              >
                <span className="grid size-10 place-items-center rounded-full bg-white/[0.06] text-amber">
                  <Icon name="telefoon" className="size-[18px]" />
                </span>
                {contact.telefoon}
              </a>
              <a
                href={contact.emailHref}
                className="flex items-center gap-3.5 text-white transition-colors hover:text-amber"
              >
                <span className="grid size-10 place-items-center rounded-full bg-white/[0.06] text-amber">
                  <Icon name="mail" className="size-[18px]" />
                </span>
                {contact.email}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className="glass relative overflow-hidden rounded-[28px] p-7 sm:p-10">
            <AnimatePresence mode="wait">
              {verzonden ? (
                <motion.div
                  key="klaar"
                  className="flex min-h-[26rem] flex-col items-center justify-center text-center"
                  initial={{ opacity: 0, scale: reduced ? 1 : 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: reduced ? 0.2 : 0.55, ease: [0.16, 1, 0.3, 1] }}
                >
                  <motion.span
                    className="grid size-16 place-items-center rounded-full bg-mint text-ink"
                    initial={{ scale: reduced ? 1 : 0.4 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.08 }}
                  >
                    <Icon name="check" className="size-7" />
                  </motion.span>
                  <h3 className="display mt-7 text-[1.75rem] text-white">
                    {aanmelden.succesKop.replace(
                      "{naam}",
                      velden.naam.trim().split(/\s+/)[0] || "tot snel",
                    )}
                  </h3>
                  <p className="mt-3 max-w-sm leading-relaxed text-slate">
                    {aanmelden.succesTekst}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setVerzonden(false);
                      setStap(0);
                      setVelden(leeg);
                    }}
                    className="mt-8 text-sm font-medium text-amber underline underline-offset-4"
                  >
                    Nog iemand aanmelden
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="formulier"
                  onSubmit={handleSubmit}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <div>
                      <h3 className="display text-[1.35rem] text-white">{stappen[stap].titel}</h3>
                      <p className="mt-1 text-[0.8125rem] text-slate">{stappen[stap].hint}</p>
                    </div>
                    <span className="font-mono text-[0.7rem] tracking-[0.16em] text-slate">
                      {String(stap + 1).padStart(2, "0")} / {String(stappen.length).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mt-5 h-[3px] overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-amber to-ember"
                      animate={{ width: `${voortgang}%` }}
                      transition={{ duration: reduced ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>

                  <div className="mt-8 min-h-[16rem]">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={stap}
                        initial={{ opacity: 0, x: reduced ? 0 : 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: reduced ? 0 : -24 }}
                        transition={{ duration: reduced ? 0.15 : 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col gap-5"
                      >
                        {stap === 0 && (
                          <>
                            <Veld
                              id="naam"
                              label="Naam"
                              waarde={velden.naam}
                              fout={fouten.naam}
                              onChange={(v) => zet("naam", v)}
                              autoComplete="name"
                            />
                            <div className="grid gap-5 sm:grid-cols-2">
                              <Veld
                                id="email"
                                label="E-mailadres"
                                type="email"
                                waarde={velden.email}
                                fout={fouten.email}
                                onChange={(v) => zet("email", v)}
                                autoComplete="email"
                              />
                              <Veld
                                id="telefoon"
                                label="Telefoonnummer"
                                type="tel"
                                waarde={velden.telefoon}
                                fout={fouten.telefoon}
                                onChange={(v) => zet("telefoon", v)}
                                autoComplete="tel"
                              />
                            </div>
                          </>
                        )}

                        {stap === 1 && (
                          <>
                            <Veld
                              id="adres"
                              label="Waar mag ik je ophalen?"
                              waarde={velden.adres}
                              fout={fouten.adres}
                              onChange={(v) => zet("adres", v)}
                              placeholder="Straat en plaats, of je school of werk"
                              autoComplete="street-address"
                            />
                            <div className="grid gap-5 sm:grid-cols-2">
                              <Keuze
                                id="lessenPerWeek"
                                label="Lessen per week"
                                waarde={velden.lessenPerWeek}
                                onChange={(v) => zet("lessenPerWeek", v)}
                                opties={[
                                  ["1", "1 keer per week"],
                                  ["2", "2 keer per week"],
                                  ["3", "3 keer of meer"],
                                  ["flexibel", "Wisselend"],
                                ]}
                              />
                              <Keuze
                                id="urenPerLes"
                                label="Duur per les"
                                waarde={velden.urenPerLes}
                                onChange={(v) => zet("urenPerLes", v)}
                                opties={[
                                  ["1", "1 uur"],
                                  ["1.5", "1,5 uur"],
                                  ["2", "2 uur"],
                                  ["weetniet", "Weet ik nog niet"],
                                ]}
                              />
                            </div>
                            <Veld
                              id="startdatum"
                              label="Wanneer wil je beginnen?"
                              type="date"
                              waarde={velden.startdatum}
                              fout={fouten.startdatum}
                              onChange={(v) => zet("startdatum", v)}
                            />
                          </>
                        )}

                        {stap === 2 && (
                          <>
                            <fieldset>
                              <legend className="text-[0.8125rem] font-medium text-slate">
                                Welk pakket heeft je voorkeur?
                              </legend>
                              <div className="mt-3 flex flex-col gap-2.5">
                                {[
                                  ...pakketten.lijst.map((p) => ({
                                    id: p._key,
                                    naam: p.naam,
                                    detail: `${p.aantalUren} uur · € ${p.prijs.toLocaleString("nl-NL")}`,
                                  })),
                                  {
                                    id: "losse",
                                    naam: "Losse lessen",
                                    detail: `€ ${pakketten.losseLesPrijs} per uur`,
                                  },
                                  { id: "advies", naam: "Ik weet het nog niet", detail: "Adviseer me" },
                                ].map((optie) => {
                                  const gekozen = velden.pakket === optie.id;
                                  return (
                                    <label
                                      key={optie.id}
                                      className={cn(
                                        "flex cursor-pointer flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-2xl border px-5 py-4 transition-colors duration-200",
                                        gekozen
                                          ? "border-amber bg-amber/10"
                                          : "border-white/12 hover:border-white/25",
                                      )}
                                    >
                                      <span className="flex items-center gap-3.5">
                                        <input
                                          type="radio"
                                          name="pakket"
                                          value={optie.id}
                                          checked={gekozen}
                                          onChange={() => zet("pakket", optie.id)}
                                          className="sr-only"
                                        />
                                        <span
                                          aria-hidden
                                          className={cn(
                                            "grid size-5 shrink-0 place-items-center rounded-full border transition-colors",
                                            gekozen ? "border-amber bg-amber" : "border-white/30",
                                          )}
                                        >
                                          {gekozen && <span className="size-1.5 rounded-full bg-ink" />}
                                        </span>
                                        <span className="text-[0.9375rem] font-medium text-white">
                                          {optie.naam}
                                        </span>
                                      </span>
                                      <span className="shrink-0 font-mono text-[0.7rem] text-slate">
                                        {optie.detail}
                                      </span>
                                    </label>
                                  );
                                })}
                              </div>
                            </fieldset>

                            <Veld
                              id="opmerkingen"
                              label="Iets wat ik moet weten?"
                              waarde={velden.opmerkingen}
                              onChange={(v) => zet("opmerkingen", v)}
                              placeholder="Bijvoorbeeld: ik heb ADHD en werk het best met vaste lestijden"
                              tekstvak
                            />
                          </>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
                    <button
                      type="button"
                      onClick={() => setStap((s) => Math.max(s - 1, 0))}
                      disabled={stap === 0}
                      className="text-sm font-medium text-slate transition-colors hover:text-white disabled:pointer-events-none disabled:opacity-0"
                    >
                      Terug
                    </button>

                    {stap < stappen.length - 1 ? (
                      <Button onClick={volgende}>
                        Volgende
                        <Icon name="pijl" className="size-4" />
                      </Button>
                    ) : (
                      <Button type="submit">Aanmelding versturen</Button>
                    )}
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

type VeldProps = {
  id: string;
  label: string;
  waarde: string;
  onChange: (waarde: string) => void;
  type?: string;
  fout?: string;
  placeholder?: string;
  autoComplete?: string;
  tekstvak?: boolean;
};

function Veld({
  id,
  label,
  waarde,
  onChange,
  type = "text",
  fout,
  placeholder,
  autoComplete,
  tekstvak,
}: VeldProps) {
  const basis = cn(
    "w-full rounded-2xl border bg-white/[0.04] px-5 py-3.5 text-[0.9375rem] text-white transition-colors duration-200 placeholder:text-slate/60",
    fout ? "border-ember" : "border-white/12 focus:border-amber",
  );

  return (
    <div>
      <label htmlFor={id} className="text-[0.8125rem] font-medium text-slate">
        {label}
      </label>
      <div className="mt-2">
        {tekstvak ? (
          <textarea
            id={id}
            rows={3}
            value={waarde}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            className={cn(basis, "resize-none")}
          />
        ) : (
          <input
            id={id}
            type={type}
            value={waarde}
            placeholder={placeholder}
            autoComplete={autoComplete}
            aria-invalid={fout ? true : undefined}
            aria-describedby={fout ? `${id}-fout` : undefined}
            onChange={(e) => onChange(e.target.value)}
            className={cn(basis, "[color-scheme:dark]")}
          />
        )}
      </div>
      {fout && (
        <p id={`${id}-fout`} className="mt-2 text-[0.8125rem] text-ember">
          {fout}
        </p>
      )}
    </div>
  );
}

function Keuze({
  id,
  label,
  waarde,
  onChange,
  opties,
}: {
  id: string;
  label: string;
  waarde: string;
  onChange: (waarde: string) => void;
  opties: Array<[string, string]>;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-[0.8125rem] font-medium text-slate">
        {label}
      </label>
      <select
        id={id}
        value={waarde}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full appearance-none rounded-2xl border border-white/12 bg-white/[0.04] bg-[length:14px] bg-[right_1.25rem_center] bg-no-repeat px-5 py-3.5 text-[0.9375rem] text-white transition-colors focus:border-amber"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237c89a0' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
        }}
      >
        {opties.map(([value, tekst]) => (
          <option key={value} value={value} className="bg-ink-raised">
            {tekst}
          </option>
        ))}
      </select>
    </div>
  );
}
