
import Hero from "@/components/Hero";
import CommunitySection from "@/components/CommunitySection";
import NetworkDiagram from "@/components/NetworkDiagram";
import RewardsSection from "@/components/RewardsSection";
import CreatingSection from "@/components/CreatingSection";
import HostingFeature from "@/components/HostingFeature";
import StepsSection from "@/components/StepsSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import ValueProps from "@/components/ValueProps";
import DecentralizedStorage from "@/components/DecentralizedStorage";
import PricingSection from "@/components/PricingSection";
import WhySettle from "@/components/WhySettle";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <CommunitySection />
      <NetworkDiagram />
      <RewardsSection />
      <HostingFeature />
      <StepsSection />
      <CreatingSection />
      <IntegrationsSection />
      <ValueProps />
      <DecentralizedStorage />
      <PricingSection />
      <WhySettle />
      <FAQ />
    </>
  );
}
