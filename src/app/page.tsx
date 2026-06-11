import { BusinessTypesSection } from "@/components/BusinessTypesSection";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { FinalCTA } from "@/components/FinalCTA";
import { FitnessGrowthSection } from "@/components/FitnessGrowthSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { PackagesSection } from "@/components/PackagesSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ProcessSection } from "@/components/ProcessSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionsSection />
        <FitnessGrowthSection />
        <BusinessTypesSection />
        <ProcessSection />
        <CapabilitiesSection />
        <PackagesSection />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
