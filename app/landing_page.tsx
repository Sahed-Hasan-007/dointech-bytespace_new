import { Hero } from "@/components/landingpage/Hero";
import { LogoSection } from "@/components/landingpage/LogoSection";
import { DiscoverSection } from "@/components/landingpage/DiscoverSection";
import { ExploreSection } from "@/components/landingpage/ExploreSection";
import { ProfessionalSection } from "@/components/landingpage/ProfessionalSection";
import { UnlockSection } from "@/components/landingpage/UnlockSection";
import { CommunitySection } from "@/components/landingpage/CommunitySection";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <LogoSection />
      <DiscoverSection />
      <ExploreSection />
      <ProfessionalSection />
      <UnlockSection />
      <CommunitySection />
    </>
  );
}
