"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success";

const fields = [
  { name: "name", label: "Your name", type: "text", required: true },
  { name: "company", label: "Company", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone", type: "tel", required: false },
  {
    name: "project",
    label: "Project name or location",
    type: "text",
    required: false,
  },
] as const;

const scopes = [
  "Soft Demolition",
  "Hard Demolition",
  "Interior Strip-Out",
  "Saw Cutting",
  "Breaking & Removal",
  "Concrete & Asphalt",
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const body = Object.entries(data)
      .map(([k, v]) => `${k}:\n${v}\n`)
      .join("\n");
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
      `Bid request — ${data.company || data.name || "GD Heil"}`,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setTimeout(() => setStatus("success"), 500);
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="border border-safety/40 bg-safety/5 p-8 text-center"
      >
        <div className="inline-flex items-center justify-center size-12 bg-safety text-ink rounded-full mb-4">
          <Check className="size-6" />
        </div>
        <p className="display text-3xl">Email opened.</p>
        <p className="mt-3 text-bone/70">
          We&apos;ll reply from {site.email} within one business day. If
          it&apos;s urgent, call {site.phone}.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-5">
        {fields.map((f) => (
          <label key={f.name} className="block">
            <span className="mono text-xs text-concrete-2 block mb-2">
              {f.label}
              {f.required && <span className="text-safety"> *</span>}
            </span>
            <input
              name={f.name}
              type={f.type}
              required={f.required}
              className="w-full bg-ink border border-white/10 px-4 py-3 text-bone focus:border-safety focus:outline-none transition-colors"
            />
          </label>
        ))}
      </div>

      <fieldset>
        <legend className="mono text-xs text-concrete-2 mb-3">
          Scope (check all that apply)
        </legend>
        <div className="grid sm:grid-cols-3 gap-2">
          {scopes.map((s) => (
            <label
              key={s}
              className="flex items-center gap-3 border border-white/10 px-4 py-3 text-sm text-bone/85 hover:border-safety/60 cursor-pointer transition-colors has-[:checked]:border-safety has-[:checked]:bg-safety/5"
            >
              <input
                type="checkbox"
                name="scope"
                value={s}
                className="size-4 accent-safety"
              />
              {s}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="block">
        <span className="mono text-xs text-concrete-2 block mb-2">
          Project details
        </span>
        <textarea
          name="details"
          rows={5}
          placeholder="Square footage, schedule, special conditions, drawings link…"
          className="w-full bg-ink border border-white/10 px-4 py-3 text-bone focus:border-safety focus:outline-none transition-colors"
        />
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-safety text-ink px-6 py-4 font-semibold hover:bg-bone transition-colors disabled:opacity-60"
      >
        Send bid request
        <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  );
}
