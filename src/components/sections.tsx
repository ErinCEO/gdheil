"use client";

import Link from "next/link";
import { ArrowUpRight, Hammer, ShieldCheck, Recycle, HardHat, Clock4, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";
import { Reveal, Stagger, StaggerItem } from "./motion";

export function SectionHeader({
  eyebrow,
  title,
  blurb,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  blurb?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <Reveal>
        <p className="mono text-xs text-safety">{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="display text-5xl lg:text-7xl mt-4">{title}</h2>
      </Reveal>
      {blurb && (
        <Reveal delay={0.1}>
          <p className="mt-6 text-lg text-bone/70">{blurb}</p>
        </Reveal>
      )}
    </div>
  );
}

export function StatsBar() {
  return (
    <section className="relative border-y border-white/5">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10 grid grid-cols-2 md:grid-cols-4">
        {site.stats.map((s, idx) => (
          <Reveal
            key={s.label}
            delay={idx * 0.06}
            className={`py-10 md:py-14 ${
              idx !== 0 ? "md:border-l border-white/5" : ""
            } ${idx % 2 === 1 ? "border-l border-white/5 md:border-l" : ""}`}
          >
            <div className="px-2 md:px-6">
              <p className="display text-5xl lg:text-7xl text-bone">
                {s.value}
              </p>
              <p className="mono text-xs text-concrete-2 mt-3">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function ServicesGrid() {
  const icons = [Hammer, HardHat, ShieldCheck, Recycle, Clock4, MapPin];
  return (
    <section className="relative py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Capabilities"
              title="Six core disciplines. One disciplined crew."
              blurb="From a single saw cut to the takedown of an entire structure, every scope is led by superintendents with decades of field time and backed by an in-house equipment fleet."
            />
          </div>
          <div className="lg:col-span-5 lg:pt-10">
            <Reveal delay={0.1}>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 mono text-xs border border-white/15 px-5 py-3 hover:border-safety hover:text-safety transition-colors"
              >
                All services <ArrowUpRight className="size-4" />
              </Link>
            </Reveal>
          </div>
        </div>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {site.services.map((s, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <StaggerItem key={s.title}>
                <div className="group relative bg-ink-2 p-8 lg:p-10 h-full hover:bg-ink-3 transition-colors">
                  <div className="flex items-start justify-between">
                    <Icon className="size-7 text-safety" />
                    <span className="mono text-xs text-concrete-2">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="display text-3xl lg:text-4xl mt-10">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-bone/70 text-sm">{s.blurb}</p>
                  <div className="absolute inset-x-0 bottom-0 h-px bg-safety scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

export function IndustriesSection() {
  return (
    <section className="relative py-24 lg:py-36 bg-ink-2">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Industries Served"
              title="Eight industries. One playbook for safe, sequenced work."
              blurb="Whether we're working inside a Class A hospital corridor or a live casino floor, the work is sequenced around your operation — not the other way around."
            />
          </div>
        </div>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {site.industries.map((i, idx) => (
            <StaggerItem key={i.name}>
              <div className="group bg-ink p-8 h-full relative overflow-hidden">
                <span className="mono text-xs text-concrete-2">
                  0{idx + 1}
                </span>
                <h3 className="display text-3xl mt-6">{i.name}</h3>
                <p className="mt-3 text-sm text-bone/65">{i.blurb}</p>
                <div className="absolute inset-0 bg-safety/0 group-hover:bg-safety/[0.03] transition-colors pointer-events-none" />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function FeaturedProjects() {
  return (
    <section className="relative py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="flex items-end justify-between gap-6 mb-16">
          <SectionHeader
            eyebrow="Selected Projects"
            title="A short list of landmarks we helped take apart."
          />
          <Reveal>
            <Link
              href="/projects"
              className="hidden md:inline-flex items-center gap-2 mono text-xs border border-white/15 px-5 py-3 hover:border-safety hover:text-safety transition-colors"
            >
              All projects <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>

        <Stagger className="grid lg:grid-cols-3 gap-6">
          {site.projects.map((p) => (
            <StaggerItem key={p.slug}>
              <article className="group h-full bg-ink-2 border border-white/5 hover:border-safety/40 transition-colors">
                <div className="relative aspect-[4/3] overflow-hidden bg-ink-3">
                  <PlaceholderArt slug={p.slug} />
                  <div className="absolute top-4 left-4 mono text-xs text-bone bg-ink/70 backdrop-blur px-2 py-1">
                    {p.year}
                  </div>
                </div>
                <div className="p-7">
                  <p className="mono text-xs text-concrete-2">{p.location}</p>
                  <h3 className="display text-3xl mt-3">{p.name}</h3>
                  <p className="mt-4 text-sm text-bone/65">{p.summary}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function PlaceholderArt({ slug }: { slug: string }) {
  const variants: Record<string, string> = {
    "hollywood-bowl":
      "from-safety/40 via-safety-hot/30 to-ink",
    "1100-wilshire": "from-steel-2 via-steel to-ink",
    "marriott-desert-springs": "from-rust/60 via-safety-hot/30 to-ink",
  };
  const grad = variants[slug] ?? "from-safety/30 to-ink";
  return (
    <>
      <div
        className={`absolute inset-0 bg-gradient-to-br ${grad}`}
        aria-hidden
      />
      <div className="absolute inset-0 grid-noise opacity-30" aria-hidden />
      <svg
        viewBox="0 0 400 300"
        className="relative w-full h-full opacity-60"
        aria-hidden
      >
        <g stroke="currentColor" strokeWidth="1" fill="none" className="text-bone">
          <path d="M0 220 L80 220 L80 150 L160 150 L160 90 L240 90 L240 180 L320 180 L320 120 L400 120 L400 300 L0 300 Z" />
          <path d="M0 240 L400 240" opacity="0.4" />
          <path d="M0 260 L400 260" opacity="0.3" />
        </g>
      </svg>
    </>
  );
}

export function ValuesSection() {
  return (
    <section className="relative py-24 lg:py-36 bg-ink-2">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <SectionHeader
          eyebrow="Operating Principles"
          title="Six values. Followed in the field, not framed on a wall."
        />
        <Stagger className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {site.values.map((v, idx) => (
            <StaggerItem key={v.name}>
              <div className="bg-ink p-8 lg:p-10 h-full">
                <p className="mono text-xs text-safety">0{idx + 1}</p>
                <h3 className="display text-3xl lg:text-4xl mt-6">{v.name}</h3>
                <p className="mt-4 text-bone/70 text-sm">{v.blurb}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function SafetyTeaser() {
  const reduce = useReducedMotion();
  return (
    <section className="relative py-24 lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <SectionHeader
            eyebrow="Safety & Training"
            title="Zero compromises on the way home."
            blurb="A continuous training program, in-house safety leadership, and a culture that empowers every crew member to stop work for the right reason — that's what keeps our EMR low and our clients calling back."
          />
          <Reveal delay={0.15}>
            <Link
              href="/safety"
              className="mt-8 inline-flex items-center gap-2 bg-safety text-ink px-6 py-3 font-semibold hover:bg-bone transition-colors"
            >
              How we train <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>
        <div className="lg:col-span-6 relative">
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-square bg-ink-2 border border-white/5 p-10 overflow-hidden"
          >
            <div className="absolute inset-0 grid-noise opacity-40" />
            <div className="relative h-full flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <ShieldCheck className="size-12 text-safety" />
                <span className="mono text-xs text-concrete-2">
                  Safety First
                </span>
              </div>
              <div>
                <p className="display text-7xl lg:text-8xl text-bone">100%</p>
                <p className="mt-4 text-bone/70 max-w-xs">
                  of crews trained on site-specific hazards, lockout/tagout, and
                  silica exposure controls before mobilization.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="relative py-24 lg:py-32 bg-safety text-ink overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8">
          <p className="mono text-xs">For Owners, Developers & GCs</p>
          <h2 className="display text-5xl lg:text-7xl mt-3">
            Have a teardown on the boards? Let&apos;s scope it.
          </h2>
        </div>
        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:justify-end gap-3">
          <Link
            href="/contact"
            className="inline-flex justify-center items-center gap-2 bg-ink text-bone px-6 py-4 font-semibold hover:bg-ink-2 transition-colors"
          >
            Request a bid <ArrowUpRight className="size-4" />
          </Link>
          <a
            href={`tel:${site.phoneE164}`}
            className="inline-flex justify-center items-center gap-2 border border-ink/30 px-6 py-4 hover:bg-ink hover:text-bone transition-colors"
          >
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

export function NapsSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-ink">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Name · Address · Phone · Services"
            title="Find us. Call us. Bid us in."
            blurb="Local to Placentia. Trusted across California. Reach the estimating desk weekdays — bids return fast."
          />
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-10">
          <Reveal>
            <div>
              <p className="mono text-xs text-concrete-2 mb-3">Name</p>
              <p className="display text-3xl">{site.name}</p>
              <p className="text-bone/60 mt-2 text-sm">
                California demolition contractor
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div>
              <p className="mono text-xs text-concrete-2 mb-3">Address</p>
              <p className="text-bone text-lg">{site.address.street}</p>
              <p className="text-bone/70">
                {site.address.city}, {site.address.region}{" "}
                {site.address.postalCode}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <p className="mono text-xs text-concrete-2 mb-3">Phone</p>
              <a
                href={`tel:${site.phoneE164}`}
                className="display text-3xl text-safety hover:text-bone transition-colors"
              >
                {site.phone}
              </a>
              <p className="text-bone/60 mt-2 text-sm">
                {site.email}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div>
              <p className="mono text-xs text-concrete-2 mb-3">Services</p>
              <ul className="text-bone/85 space-y-1 text-sm">
                {site.services.map((s) => (
                  <li key={s.title}>· {s.title}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
