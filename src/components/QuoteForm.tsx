"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const environmentOptions = [
  "Condominio",
  "Ufficio",
  "Negozio / attività commerciale",
  "Abitazione",
  "Altro",
];

const serviceOptions = [
  "Pulizia ordinaria",
  "Pulizia straordinaria",
  "Post-trasloco",
  "Intervento urgente",
  "Non so ancora",
];

const frequencyOptions = [
  "Una tantum",
  "Settimanale",
  "Più volte a settimana",
  "Mensile",
  "Da definire",
];

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/preventivo", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-forest/20 bg-mist-soft p-8 text-center">
        <h3 className="text-xl font-bold text-charcoal">Grazie!</h3>
        <p className="mt-3 text-charcoal/70">
          Abbiamo ricevuto la tua richiesta. Ti ricontatteremo per capire le
          tue esigenze e definire il servizio.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-charcoal/10 bg-white p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nome e cognome" name="nome" required />
        <Field label="Azienda / condominio" name="azienda" />
        <Field label="Email" name="email" type="email" required />
        <Field label="Telefono" name="telefono" type="tel" required />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <SelectField label="Tipo di ambiente" name="ambiente" options={environmentOptions} />
        <SelectField label="Tipo di servizio" name="servizio" options={serviceOptions} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <SelectField label="Frequenza" name="frequenza" options={frequencyOptions} />
        <Field label="Comune / zona" name="zona" />
      </div>

      <div>
        <label
          htmlFor="messaggio"
          className="mb-1.5 block text-sm font-semibold text-charcoal"
        >
          Messaggio / esigenze
        </label>
        <textarea
          id="messaggio"
          name="messaggio"
          rows={4}
          className="w-full rounded-xl border border-charcoal/15 bg-cream px-4 py-3 text-sm text-charcoal outline-none focus:border-forest"
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-charcoal/70">
        <input
          type="checkbox"
          name="privacy"
          required
          className="mt-0.5 h-4 w-4 rounded border-charcoal/30 text-forest focus:ring-forest"
        />
        <span>
          Ho letto l&apos;{" "}
          <a
            href={site.privacyLink}
            className="font-semibold text-forest underline"
          >
            informativa privacy
          </a>
          .
        </span>
      </label>

      {status === "error" ? (
        <p className="text-sm font-medium text-red-700">
          Si è verificato un errore. Riprova o contattaci direttamente al{" "}
          {site.phone}.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex w-full items-center justify-center rounded-full bg-forest px-6 py-4 text-base font-semibold text-cream transition-colors hover:bg-forest-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Invio in corso…" : site.ctaPrimary}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-semibold text-charcoal"
      >
        {label}
        {required ? <span className="text-forest"> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-charcoal/15 bg-cream px-4 py-3 text-sm text-charcoal outline-none focus:border-forest"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-semibold text-charcoal"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="w-full rounded-xl border border-charcoal/15 bg-cream px-4 py-3 text-sm text-charcoal outline-none focus:border-forest"
      >
        <option value="" disabled>
          Seleziona
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
