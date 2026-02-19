import React from "react";
import { FaTag } from "react-icons/fa";
import Navbar from "../components/Navbar";
import FixedFooter from "../components/Footer";

const Pricing = () => {
  return (
    <div className="relative min-h-screen bg-[#F6F5F2] overflow-hidden">

      <Navbar />

      {/* Hero Wrapper */}
      <div className="relative py-16 mb-5"> {/* <-- THIS FIX */}

        {/* Top Line */}
        <div className="absolute top-20 left-0 right-0 h-px bg-[#d6d2c8]"></div>

        {/* Bottom Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#d6d2c8]"></div>

        {/* Left Line */}
        <div className="absolute top-20 bottom-0 left-[100px] w-px bg-[#d6d2c8]"></div>

        {/* Right Line */}
        <div className="absolute top-20 bottom-0 right-[100px] w-px bg-[#d6d2c8]"></div>

        {/* Hero Section */}
        <section className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] text-center px-6">

          {/* Icon */}
          <div className="bg-white p-4 rounded-2xl mb-8 shadow-md border border-gray-200">
            <FaTag className="text-[#004f98] text-2xl" />
          </div>

          {/* Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-6">
            Master pricing
          </h1>

          {/* Subtext */}
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
            Track SKU-level pricing trends across localities and pin codes.
          </p>

          {/* Button */}
          <a
            href="https://calendly.com/pragundass-ai/10min?month=2026-02"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-black text-white text-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get Started for free
          </a>

        </section>
      </div>

      <FixedFooter />
    </div>
  );
};

export default Pricing;
