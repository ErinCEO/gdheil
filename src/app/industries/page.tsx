import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import {
  IndustriesSection,
  CtaBand,
  NapsSection,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Healthcare, hospitality, aerospace, industrial, commercial, retail, distribution, and gaming — sectors GD Heil has demolished and rebuilt across California.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Markets We Serve"
        title="Eight industries. One disciplined approach."
        blurb="Sector experience matters most when the building stays open during the work. From live hospital corridors to active casino floors, we sequence demolition around your operation."
      />
      <IndustriesSection />
      <NapsSection />
      <CtaBand />
    </>
  );
}
