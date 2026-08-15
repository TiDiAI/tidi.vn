import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import Process from "@/components/Process";
import DashboardDemo from "@/components/DashboardDemo";
import UseCases from "@/components/UseCases";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import ROICalculator from "@/components/ROICalculator";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Process />
        <DashboardDemo />
        <UseCases />
        <Benefits />
        <Pricing />
        <ROICalculator />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
