import { Hero } from "@/components/hero";
import { IndustryMarquee } from "@/components/marquee";
import {
  StatsBar,
  BentoServices,
  IndustriesSection,
  PinnedProjects,
  ProcessSection,
  SafetyTeaser,
  TestimonialWall,
  ClientStrip,
  CtaBand,
  NapsSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientStrip />
      <StatsBar />
      <BentoServices />
      <IndustryMarquee />
      <PinnedProjects />
      <ProcessSection />
      <IndustriesSection />
      <SafetyTeaser />
      <TestimonialWall />
      <NapsSection />
      <CtaBand />
    </>
  );
}
