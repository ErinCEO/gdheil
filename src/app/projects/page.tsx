import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import {
  PinnedProjects,
  CtaBand,
  TestimonialWall,
  NapsSection,
} from "@/components/sections";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected GD Heil demolition projects — the Hollywood Bowl, 1100 Wilshire, Marriott Desert Springs, and other landmarks across California.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected Work"
        title="Landmarks we helped take apart."
        blurb="A short list from hundreds of projects. The full portfolio includes hospitals, office towers, distribution facilities, retail centers, and venues across California."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2400&q=85&auto=format&fit=crop"
        alt="High-rise construction view"
      />
      <PinnedProjects />
      <TestimonialWall />
      <section className="relative py-16">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
          <Reveal>
            <p className="mono text-xs text-concrete-2 max-w-2xl mx-auto text-center">
              Want a deeper portfolio for a specific market? Reach the
              estimating desk and we&apos;ll send sector-specific case studies.
            </p>
          </Reveal>
        </div>
      </section>
      <NapsSection />
      <CtaBand />
    </>
  );
}
