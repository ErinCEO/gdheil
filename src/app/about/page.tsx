import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import {
  ValuesSection,
  StatsBar,
  CtaBand,
  NapsSection,
} from "@/components/sections";
import { Reveal } from "@/components/motion";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founded in 1992, GD Heil is a California demolition contractor delivering soft and hard demolition, interior strip-outs, and concrete services on landmark projects throughout the West.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About GD Heil · Since 1992"
        title="Three decades of careful, sequenced demolition."
        blurb="A California corporation founded in 1992. A repeat-client business built on integrity, excellence, service, safety, leadership, and environmental responsibility."
        image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=2400&q=85&auto=format&fit=crop"
        alt="Industrial structure"
      />

      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="mono text-xs text-safety">The Company</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display text-5xl lg:text-6xl mt-4">
                A demolition contractor with a long memory.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 text-bone/75 space-y-6 text-lg leading-relaxed">
            <Reveal delay={0.1}>
              <p>
                GD Heil, Inc. was formed in 1992 as a California Corporation
                specializing in soft and hard demolition, interior strip-outs,
                saw cutting, breaking, and removals. From a single Placentia
                yard, the company has completed hundreds of projects across
                California — from Orange County tenant improvements to
                high-rise conversions in downtown Los Angeles and venues as far
                north as the Bay Area.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                The bulk of our work comes from repeat clients — general
                contractors, owners, and developers who value a partner that
                shows up on schedule, communicates early, and leaves a site
                ready for the next trade. Our annual revenue averages around
                $10 million, kept steady by a deep bench of superintendents and
                a fleet of owned equipment.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                We have stayed deliberately mid-sized so that the people who
                bid your job are the people who plan it, run it, and answer the
                phone when something changes. That continuity is the quiet
                advantage of working with us.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <StatsBar />
      <ValuesSection />

      <section className="relative py-24 lg:py-32 bg-ink">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <Reveal>
            <div>
              <p className="mono text-xs text-safety">Service Area</p>
              <h2 className="display text-5xl lg:text-6xl mt-4">
                Headquartered in Placentia. At home all over California.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-bone/85">
              {site.serviceArea.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-3 py-2 border-b border-white/5"
                >
                  <span className="size-1.5 bg-safety" />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <NapsSection />
      <CtaBand />
    </>
  );
}
