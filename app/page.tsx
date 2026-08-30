import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import CtaBand from "@/components/cta-band";
import SocialProof from "@/components/social-proof";
import HowItWorks from "@/components/how-it-works";
import WhoItsFor from "@/components/who-its-for";
import RoiCalculator from "@/components/roi-calculator";
import CaseStudyHighlight from "@/components/case-study-highlight";
import AboutFounder from "@/components/about-founder";
import PilotOffer from "@/components/pilot-offer";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import { loadCaseStudies } from "@/lib/case-studies";

export default function Home() {
  const { social_proof, highlights } = loadCaseStudies();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CtaBand title="Get qualified meetings on your calendar" />
        <SocialProof
          headline={social_proof.headline}
          subheadline={social_proof.subheadline}
          highlights={highlights}
        />
        <HowItWorks />
        <WhoItsFor />
        <RoiCalculator />
        <CaseStudyHighlight />
        <AboutFounder />
        <PilotOffer />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
