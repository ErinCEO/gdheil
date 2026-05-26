import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import {
  FeaturedProjects,
  CtaBand,
  NapsSection,
} from "@/components/sections";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected GD Heil demolition projects — the Hollywood Bowl, 1100 Wilshire, Marriott Desert Springs, and other landmarks across California.",
};

const detail: Record<
  string,
  { scope: string; partner?: string; highlights: string[] }
> = {
  "hollywood-bowl": {
    scope:
      "Demolition for the fifth amphitheater shell renovation, completed in the off-season window.",
    partner: "City of Los Angeles / LA Phil",
    highlights: [
      "Selective demolition of acoustic shell and stage structure",
      "Coordinated work inside an active landmark venue",
      "Recycling-first material handling",
    ],
  },
  "1100-wilshire": {
    scope:
      "Selective and structural demolition across floors 17–38 during an office-to-residential conversion.",
    partner: "Confidential developer",
    highlights: [
      "Phased high-rise demolition above an occupied building",
      "MEP demising and slab penetrations",
      "Tight downtown logistics window",
    ],
  },
  "marriott-desert-springs": {
    scope:
      "Phased concrete demolition and interior strip-out inside a live destination resort.",
    partner: "Marriott Hotels & Resorts",
    highlights: [
      "Sequenced around guest occupancy",
      "Saw cutting and core drilling for new openings",
      "Dust and noise mitigation plan",
    ],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected Work"
        title="Landmarks we helped take apart."
        blurb="A short list from hundreds of projects. The full portfolio includes hospitals, office towers, distribution facilities, retail centers, and venues across California."
      />

      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 space-y-px bg-white/5 border border-white/5">
          <Stagger>
            {site.projects.map((p, idx) => {
              const d = detail[p.slug];
              return (
                <StaggerItem key={p.slug}>
                  <article className="bg-ink-2 px-6 lg:px-12 py-10 lg:py-16 grid lg:grid-cols-12 gap-8 group hover:bg-ink-3 transition-colors">
                    <div className="lg:col-span-1">
                      <span className="mono text-sm text-safety">
                        0{idx + 1}
                      </span>
                    </div>
                    <div className="lg:col-span-5">
                      <p className="mono text-xs text-concrete-2">
                        {p.location} · {p.year}
                      </p>
                      <h2 className="display text-4xl lg:text-6xl mt-3">
                        {p.name}
                      </h2>
                      {d?.partner && (
                        <p className="mono text-xs text-concrete-2 mt-4">
                          Partner: {d.partner}
                        </p>
                      )}
                    </div>
                    <div className="lg:col-span-6 space-y-5 text-bone/75">
                      <p>{p.summary}</p>
                      {d && (
                        <>
                          <p className="text-bone/85">{d.scope}</p>
                          <ul className="space-y-2 text-sm">
                            {d.highlights.map((h) => (
                              <li
                                key={h}
                                className="flex items-start gap-3 border-t border-white/5 pt-3"
                              >
                                <span className="mt-2 size-1.5 bg-safety shrink-0" />
                                {h}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>

        <div className="mt-20">
          <Reveal>
            <p className="mono text-xs text-concrete-2 max-w-2xl mx-auto text-center">
              Want a deeper portfolio for a specific market? Reach the
              estimating desk and we&apos;ll send sector-specific case studies.
            </p>
          </Reveal>
        </div>
      </section>

      <FeaturedProjects />
      <NapsSection />
      <CtaBand />
    </>
  );
}
