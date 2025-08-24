import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import PainPoints from "../components/PainPoints";
import Solution from "../components/Solution";
import Benefits from "../components/Benefits";
import HowItWorks from "../components/HowItWorks";
// import SocialProof from "../components/SocialProof";
// import Pricing from "../components/Pricing";
import FinalCTA from "../components/FinalCTA";
import ConsentBlock from "../components/ConsentBlock";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden pb-32">
      <Navigation />
      <div className="flex flex-col space-y-8 max-w-7xl mx-auto">
        <div className="w-full px-4 lg:px-0">
          <Hero />
        </div>
        <div className="flex flex-col lg:space-x-8 lg:space-y-0 space-y-8 px-4 lg:px-0">
          {/* <Pricing /> */}
          <PainPoints />
          <Solution />
        </div>
        <div className="w-full px-4 lg:px-0">
          <Benefits />
        </div>
        <div className="w-full px-4 lg:px-0">
          <HowItWorks />
        </div>
        {/* <SocialProof /> */}
        <div className="flex flex-col lg:space-x-8 lg:space-y-0 space-y-8 px-4 lg:px-0">
          {/* <Pricing /> */}
          <FinalCTA />
        </div>
      </div>
      <div className="w-full px-4 lg:px-0 max-w-7xl mx-auto">
        <Footer />
      </div>
      <ConsentBlock />
    </div>
  );
}
