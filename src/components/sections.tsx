"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  ArrowUpRight,
  Hammer,
  ShieldCheck,
  Recycle,
  HardHat,
  Clock4,
  MapPin,
  Quote,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { site } from "@/lib/site";
import { Counter, Magnetic, Reveal, Stagger, StaggerItem, WordReveal } from "./motion";

export function SectionHeader({
  eyebrow,
  title,
  blurb,
  align = "left",
  kicker,
}: {
  eyebrow: string;
  title: string;
  blurb?: string;
  align?: "left" | "center";
  kicker?: string;
}) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <Reveal>
        <p className="mono text-[11px] text-safety flex items-center gap-3">
          <span className="inline-block h-px w-8 bg-safety" />
          {eyebrow}
          {kicker && (
            <span className="text-concrete-2 ml-4">· {kicker}</span>
          )}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="display text-5xl lg:text-7xl mt-5">{title}</h2>
      </Reveal>
      {blurb && (
        <Reveal delay={0.1}>
          <p className="mt-6 text-lg text-bone/70 max-w-2xl">{blurb}</p>
        </Reveal>
      )}
    </div>
  );
}

export function ClientStrip() {
  return (
    <section className="relative border-y border-white/5 bg-ink-2/60">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-10 py-10 lg:py-12 grid lg:grid-cols-12 gap-6 items-center">
        <p className="lg:col-span-3 mono text-[11px] text-concrete-2 lg:border-r lg:border-white/10 lg:pr-6">
          Trusted by owners,
          <br />
          developers & GCs across CA
        </p>
        <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4">
          {site.clients.map((c, i) => (
            <Reveal key={c} delay={i * 0.04}>
              <span className="display text-xl lg:text-2xl text-bone/55 hover:text-bone transition-colors">
                {c}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatsBar() {
  return (
    <section className="relative border-b border-white/5 concrete-texture">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-10 grid grid-cols-2 lg:grid-cols-4">
        {site.stats.map((s, idx) => (
          <Reveal
            key={s.label}
            delay={idx * 0.06}
            className={`py-14 lg:py-20 ${
              idx > 0 ? "lg:border-l border-white/5" : ""
            } ${idx >= 2 ? "border-t lg:border-t-0 border-white/5" : ""} ${
              idx === 1 ? "border-l border-white/5" : ""
            } ${idx === 3 ? "border-l border-white/5" : ""}`}
          >
            <div className="px-2 lg:px-8">
              <p className="mono text-[10px] text-safety mb-5">
                0{idx + 1} / 04
              </p>
              <p className="display text-5xl lg:text-7xl xl:text-8xl text-bone">
                <Counter
                  to={s.value}
                  prefix={"prefix" in s ? s.prefix : ""}
                  suffix={s.suffix}
                  isYear={"isYear" in s ? s.isYear : false}
                />
              </p>
              <p className="mono text-[11px] text-concrete-2 mt-4">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function BentoServices() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const icons = [Hammer, HardHat, ShieldCheck, Recycle, Clock4, MapPin];

  const layout = [
    "lg:col-span-7 lg:row-span-2",
    "lg:col-span-5 lg:row-span-2",
    "lg:col-span-5",
    "lg:col-span-4",
    "lg:col-span-3",
    "lg:col-span-12",
  ];

  return (
    <section ref={ref} className="relative py-28 lg:py-40">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16 items-end">
          <div className="lg:col-span-8">
            <SectionHeader
              eyebrow="Capabilities · 01"
              title="Six disciplines. One disciplined crew."
              blurb="Every scope is led by a superintendent with decades of field time and supported by an in-house equipment fleet — so we own the schedule from preconstruction through final sweep."
            />
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Reveal>
              <Magnetic strength={10}>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 mono text-xs border border-white/15 px-5 py-3 hover:border-safety hover:text-safety transition-colors"
                >
                  All services <ArrowUpRight className="size-4" />
                </Link>
              </Magnetic>
            </Reveal>
          </div>
        </div>

        <motion.div
          style={reduce ? undefined : { y }}
          className="grid grid-cols-1 lg:grid-cols-12 lg:auto-rows-[16rem] gap-4"
        >
          {site.services.map((s, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <Reveal
                key={s.title}
                delay={idx * 0.05}
                className={`relative group overflow-hidden border border-white/5 bg-ink-2 ${layout[idx]}`}
              >
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-700 group-hover:scale-105 will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-ink via-ink/60 to-transparent" />
                <div className="relative h-full flex flex-col justify-between p-7 lg:p-10 min-h-[18rem]">
                  <div className="flex items-start justify-between">
                    <Icon className="size-7 text-safety" />
                    <span className="mono text-[10px] text-concrete-2">
                      0{idx + 1} / 06
                    </span>
                  </div>
                  <div>
                    <h3 className="display text-3xl lg:text-5xl text-bone">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-bone/75 text-sm lg:text-base max-w-md">
                      {s.blurb}
                    </p>
                  </div>
                </div>
                <span className="absolute inset-x-0 bottom-0 h-px bg-safety scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </Reveal>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export function IndustriesSection() {
  return (
    <section className="relative py-28 lg:py-40 bg-ink-2">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-8">
            <SectionHeader
              eyebrow="Industries · 02"
              title="Eight markets. One playbook for safe, sequenced work."
              blurb="Sector experience matters most when the building stays open during the work. From live hospital corridors to active casino floors, we sequence demolition around your operation."
            />
          </div>
        </div>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {site.industries.map((i, idx) => (
            <StaggerItem key={i.name}>
              <div className="group relative aspect-[4/5] overflow-hidden border border-white/5">
                <Image
                  src={i.image}
                  alt={i.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute top-5 left-5 flex items-center gap-2">
                  <span className="size-1.5 bg-safety" />
                  <span className="mono text-[10px] text-bone/70">
                    0{idx + 1} / 08
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="display text-3xl lg:text-4xl text-bone">
                    {i.name}
                  </h3>
                  <p className="mt-2 text-xs text-bone/60 max-w-[20ch] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {i.blurb}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function PinnedProjects() {
  return (
    <section className="relative bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16 items-end">
          <div className="lg:col-span-8">
            <SectionHeader
              eyebrow="Selected Work · 03"
              title="Landmarks we helped take apart."
            />
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Reveal>
              <Magnetic strength={10}>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 mono text-xs border border-white/15 px-5 py-3 hover:border-safety hover:text-safety transition-colors"
                >
                  All projects <ArrowUpRight className="size-4" />
                </Link>
              </Magnetic>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {site.projects.map((p, idx) => (
          <PinnedProject key={p.slug} project={p} index={idx} />
        ))}
      </div>
    </section>
  );
}

function PinnedProject({
  project,
  index,
}: {
  project: (typeof site.projects)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const tilt = useTransform(scrollYProgress, [0, 1], [3, -3]);

  return (
    <article
      ref={ref}
      className="relative mx-auto max-w-[1500px] px-5 lg:px-10 grid lg:grid-cols-12 gap-8 lg:gap-12 py-10 lg:py-20 border-y border-white/5"
    >
      <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
        <Reveal>
          <p className="mono text-[11px] text-safety">
            0{index + 1} / 0{site.projects.length}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mono text-[11px] text-concrete-2 mt-4">
            {project.location} · {project.year}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className="display text-5xl lg:text-7xl xl:text-8xl mt-3 leading-[0.9]">
            {project.name}
          </h3>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 text-bone/75 max-w-md">{project.summary}</p>
        </Reveal>
        <Reveal delay={0.2}>
          <dl className="mt-10 grid grid-cols-3 gap-4 max-w-md text-sm">
            {Object.entries(project.meta).map(([k, v]) => (
              <div key={k} className="border-t border-white/10 pt-3">
                <dt className="mono text-[10px] text-concrete-2 capitalize">
                  {k}
                </dt>
                <dd className="mt-1 text-bone">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <Reveal delay={0.25}>
          <ul className="mt-10 space-y-3 max-w-md">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-3 text-sm text-bone/85 border-t border-white/5 pt-3"
              >
                <span className="mt-2 size-1.5 bg-safety shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="lg:col-span-7 space-y-6">
        {project.images.map((img, i) => (
          <motion.div
            key={img}
            style={
              reduce
                ? undefined
                : i === 0
                  ? { y: imageY, rotate: tilt }
                  : undefined
            }
            className={`relative overflow-hidden border border-white/5 ${
              i === 0 ? "aspect-[4/3]" : "aspect-[16/10]"
            }`}
          >
            <Image
              src={img}
              alt={`${project.name} — view ${i + 1}`}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
            <div className="absolute top-4 left-4 mono text-[10px] text-bone bg-ink/70 backdrop-blur px-2.5 py-1.5">
              {project.name} · {i + 1}/{project.images.length}
            </div>
          </motion.div>
        ))}
      </div>
    </article>
  );
}

export function FeaturedProjects() {
  return <PinnedProjects />;
}

export function ProcessSection() {
  return (
    <section className="relative py-28 lg:py-40 bg-ink-2">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-8">
            <SectionHeader
              eyebrow="The Approach · 04"
              title="Four steps. No surprises."
              blurb="A repeatable, transparent process that has kept our clients calling back for three decades. Every project — landmark or tenant improvement — runs the same way."
            />
          </div>
        </div>

        <Stagger className="grid lg:grid-cols-4 border-t border-l border-white/10" gap={0.1}>
          {site.process.map((p) => (
            <StaggerItem key={p.step}>
              <div className="border-r border-b border-white/10 p-8 lg:p-10 h-full bg-ink hover:bg-ink-3 transition-colors group">
                <p className="display text-7xl lg:text-8xl text-safety/15 group-hover:text-safety/30 transition-colors">
                  {p.step}
                </p>
                <h3 className="display text-2xl lg:text-3xl mt-6">{p.title}</h3>
                <p className="mt-4 text-sm text-bone/70">{p.blurb}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function ValuesSection() {
  return (
    <section className="relative py-28 lg:py-40">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
        <SectionHeader
          eyebrow="Operating Principles"
          title="Followed in the field. Not framed on a wall."
        />
        <Stagger className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {site.values.map((v, idx) => (
            <StaggerItem key={v.name}>
              <div className="bg-ink-2 p-8 lg:p-10 h-full hover:bg-ink-3 transition-colors">
                <p className="mono text-[11px] text-safety">0{idx + 1}</p>
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
  return (
    <section className="relative py-28 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <SectionHeader
            eyebrow="Safety & Training · 05"
            title="Zero compromises on the way home."
            blurb="Continuous training, in-house safety leadership, and a culture that empowers every crew member to stop work for the right reason — that's what keeps our EMR low and clients calling back."
          />
          <Reveal delay={0.15}>
            <Magnetic>
              <Link
                href="/safety"
                className="mt-8 inline-flex items-center gap-2 bg-safety text-ink px-6 py-3 font-semibold hover:bg-bone transition-colors"
              >
                How we train <ArrowUpRight className="size-4" />
              </Link>
            </Magnetic>
          </Reveal>
        </div>
        <div className="lg:col-span-6 relative">
          <Reveal y={40}>
            <div className="relative aspect-[4/5] overflow-hidden border border-white/5">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&q=85&auto=format&fit=crop"
                alt="Safety training and PPE"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <ShieldCheck className="size-10 text-safety" />
                  <span className="mono text-[10px] text-bone/70">
                    SAFETY · FIRST
                  </span>
                </div>
                <div>
                  <p className="display text-6xl lg:text-8xl text-bone">
                    <Counter to={100} suffix="%" />
                  </p>
                  <p className="mt-4 text-bone/85 max-w-xs">
                    of crews trained on site-specific hazards, LOTO, and silica
                    exposure controls before mobilization.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function TestimonialWall() {
  const items = [...site.testimonials, ...site.testimonials];
  return (
    <section className="relative py-24 lg:py-36 bg-ink-2 border-y border-white/5 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-10 mb-12">
        <SectionHeader
          eyebrow="Repeat Clients · 06"
          title="The work speaks. Our clients confirm."
        />
      </div>
      <div className="relative">
        <div
          aria-hidden
          className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-ink-2 to-transparent z-10"
        />
        <div
          aria-hidden
          className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-ink-2 to-transparent z-10"
        />
        <div className="flex gap-6 animate-marquee">
          {items.map((t, idx) => (
            <figure
              key={idx}
              className="shrink-0 w-[420px] lg:w-[520px] bg-ink border border-white/10 p-8 lg:p-10"
            >
              <Quote className="size-7 text-safety" />
              <blockquote className="mt-6 text-lg lg:text-xl text-bone/90 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 mono text-[11px] text-concrete-2 border-t border-white/10 pt-5">
                {t.attribution}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="relative py-28 lg:py-36 bg-safety text-ink overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-25" aria-hidden />
      <div className="relative mx-auto max-w-[1500px] px-5 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <p className="mono text-[11px]">For Owners · Developers · GCs</p>
            <h2 className="display text-5xl lg:text-8xl mt-3 leading-[0.9]">
              <WordReveal text="Have a teardown" />
              <br />
              <WordReveal text="on the boards?" delay={0.1} />
              <br />
              <WordReveal text="Let's scope it." delay={0.2} />
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col lg:justify-end gap-3">
            <Magnetic>
              <Link
                href="/contact"
                className="inline-flex justify-center items-center gap-2 bg-ink text-bone px-6 py-4 font-semibold hover:bg-ink-2 transition-colors w-full"
              >
                Request a bid <ArrowUpRight className="size-4" />
              </Link>
            </Magnetic>
            <a
              href={`tel:${site.phoneE164}`}
              className="inline-flex justify-center items-center gap-2 border border-ink/30 px-6 py-4 hover:bg-ink hover:text-bone transition-colors"
            >
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function NapsSection() {
  return (
    <section className="relative py-28 lg:py-32 bg-ink">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="N · A · P · S"
            title="Find us. Call us. Bid us in."
            blurb="Local to Placentia. Trusted across California. Reach the estimating desk weekdays — bids return fast."
          />
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-10">
          <Reveal>
            <div>
              <p className="mono text-[11px] text-concrete-2 mb-3">Name</p>
              <p className="display text-3xl">{site.name}</p>
              <p className="text-bone/60 mt-2 text-sm">
                California demolition contractor
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div>
              <p className="mono text-[11px] text-concrete-2 mb-3">Address</p>
              <p className="text-bone text-lg">{site.address.street}</p>
              <p className="text-bone/70">
                {site.address.city}, {site.address.region}{" "}
                {site.address.postalCode}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <p className="mono text-[11px] text-concrete-2 mb-3">Phone</p>
              <a
                href={`tel:${site.phoneE164}`}
                className="display text-3xl text-safety hover:text-bone transition-colors"
              >
                {site.phone}
              </a>
              <p className="text-bone/60 mt-2 text-sm">{site.email}</p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div>
              <p className="mono text-[11px] text-concrete-2 mb-3">Services</p>
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

export function ServicesGrid() {
  return <BentoServices />;
}
