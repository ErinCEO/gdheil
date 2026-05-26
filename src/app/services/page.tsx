import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import {
  BentoServices,
  CtaBand,
  IndustriesSection,
  ProcessSection,
  NapsSection,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Soft and hard demolition, interior strip-outs, saw cutting, breaking and removals, and concrete services — delivered safely by GD Heil throughout California.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Demolition, sequenced for what comes next."
        blurb="Every scope is led by a superintendent with decades of field time and supported by an in-house equipment fleet — so we own the schedule from preconstruction through final sweep."
        image="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=2400&q=85&auto=format&fit=crop"
        alt="Heavy demolition equipment"
      />
      <BentoServices />
      <ProcessSection />
      <IndustriesSection />
      <NapsSection />
      <CtaBand />
    </>
  );
}
