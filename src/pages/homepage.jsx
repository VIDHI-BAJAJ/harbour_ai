import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Logo from "../components/logosection.jsx";
import DataIntegrationSection from "../components/DataIntegrationSection.jsx";
import AiQuestionsSection from "../components/AiQuestionsSection.jsx";
import TestimonialSection from "../components/TestimonialSlider.jsx";
import FAQSection from "../components/FAQSection.jsx";
import Footer from "../components/Footer.jsx";
import DitchSection from "../components/DitchSection.jsx";
import AgentSection from "../components/AgentSection.jsx";
import MobileShowcase from "../components/MobileShowcase.jsx";

function App() {
  return (
    <div className="bg-[#eae7df] min-h-screen">
      <div className="bg-[#f6f5f2] rounded-3xl min-h-screen relative overflow-hidden">
        <Navbar />
        <Hero />
      </div>
    <Logo/>
    <DataIntegrationSection/>
    <AiQuestionsSection/>
    <TestimonialSection/>
    <MobileShowcase/>
    <AgentSection/>
    <DitchSection/>
    <FAQSection/>
    <Footer/>

    </div>
  );
}

export default App;
