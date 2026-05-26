import { Hero } from "@/components/hero";
import { IndustryMarquee } from "@/components/marquee";
import {
  StatsBar,
  ServicesGrid,
  IndustriesSection,
  FeaturedProjects,
  SafetyTeaser,
  CtaBand,
  NapsSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <IndustryMarquee />
      <StatsBar />
      <ServicesGrid />
      <IndustriesSection />
      <FeaturedProjects />
      <SafetyTeaser />
      <NapsSection />
      <CtaBand />
    </>
  );
}
