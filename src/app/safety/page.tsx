import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand, NapsSection } from "@/components/sections";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import {
  ShieldCheck,
  HardHat,
  ClipboardCheck,
  GraduationCap,
  Wind,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Safety & Training",
  description:
    "Safety is GD Heil's first priority. A continuous training program, in-house safety leadership, and a culture that empowers every crew member to stop work for the right reason.",
};

const programs = [
  {
    icon: ShieldCheck,
    title: "Daily JHA & Pre-Task Planning",
    blurb:
      "Every crew starts the shift with a job hazard analysis specific to that day's scope, sequenced with the GC and adjacent trades.",
  },
  {
    icon: HardHat,
    title: "Site-Specific Orientation",
    blurb:
      "Every worker — including subs and visitors — completes a site-specific safety orientation before stepping onto the job.",
  },
  {
    icon: Wind,
    title: "Silica & Air-Quality Controls",
    blurb:
      "Wet methods, HEPA vacs, and exposure monitoring per OSHA 1926.1153 on every saw cut, core, or break.",
  },
  {
    icon: ClipboardCheck,
    title: "Lockout / Tagout & Energy Isolation",
    blurb:
      "Documented LOTO procedures for every energized system encountered — electrical, mechanical, hydraulic, and stored energy.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Training",
    blurb:
      "OSHA 10/30, competent-person training, equipment certifications, first aid/CPR, and quarterly refreshers are tracked per employee.",
  },
  {
    icon: AlertTriangle,
    title: "Stop-Work Authority",
    blurb:
      "Every employee — regardless of title — has the authority and the responsibility to stop work when conditions aren't right.",
  },
];

export default function SafetyPage() {
  return (
    <>
      <PageHero
        eyebrow="Safety & Training"
        title="Zero compromises on the way home."
        blurb="Safety is the top priority on every jobsite, every shift, every day. It is not a poster on the trailer — it's the way we plan, sequence, and run the work."
      />

      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <Reveal>
              <div>
                <p className="mono text-xs text-safety">Our Commitment</p>
                <h2 className="display text-5xl lg:text-6xl mt-4">
                  A culture, not a checklist.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5 text-bone/75 text-lg leading-relaxed">
                <p>
                  Demolition is among the highest-risk scopes on a
                  jobsite — falling objects, energized systems, dust and
                  silica, working at heights, heavy equipment, and rapidly
                  changing conditions are part of every shift.
                </p>
                <p>
                  Our response is to over-plan and over-train. Crews are led by
                  competent persons, supported by an in-house safety team, and
                  empowered to stop work for the right reason without
                  consequence.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32 bg-ink-2">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <Reveal>
            <p className="mono text-xs text-safety">Programs</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display text-5xl lg:text-6xl mt-4 max-w-3xl">
              The programs running quietly under every project.
            </h2>
          </Reveal>

          <Stagger className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {programs.map((p, idx) => {
              const Icon = p.icon;
              return (
                <StaggerItem key={p.title}>
                  <div className="bg-ink p-8 lg:p-10 h-full">
                    <div className="flex items-start justify-between">
                      <Icon className="size-7 text-safety" />
                      <span className="mono text-xs text-concrete-2">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="display text-2xl mt-8">{p.title}</h3>
                    <p className="mt-4 text-bone/70 text-sm">{p.blurb}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 grid lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {[
            { v: "100%", l: "Crews orientation on day one" },
            { v: "24/7", l: "Safety leadership on call" },
            { v: "OSHA", l: "10 & 30 trained workforce" },
          ].map((s) => (
            <Reveal key={s.l} className="bg-ink-2 p-10 lg:p-12">
              <p className="display text-7xl lg:text-8xl text-bone">{s.v}</p>
              <p className="mono text-xs text-concrete-2 mt-4">{s.l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <NapsSection />
      <CtaBand />
    </>
  );
}
