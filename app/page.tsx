import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import WhoItsFor from "@/components/who-its-for";
import PilotOffer from "@/components/pilot-offer";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <WhoItsFor />
        <PilotOffer />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
