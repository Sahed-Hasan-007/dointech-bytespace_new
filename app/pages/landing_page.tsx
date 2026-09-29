import { Hero } from "@/components/landingpage/Hero";
import { LogoSection } from "@/components/landingpage/LogoSection";
import { DiscoverSection } from "@/components/landingpage/DiscoverSection";
import { ExploreSection } from "@/components/landingpage/ExploreSection";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <LogoSection />
      <DiscoverSection />
      <ExploreSection />
    </>
  );
}
