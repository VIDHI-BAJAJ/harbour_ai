import React, { useEffect, useState } from "react";

import screen1 from "../assets/Images/mobilemockup.png";
import screen2 from "../assets/Images/mobilemockup2.png";


const sections = [
  {
    title: "Track combined performance across all your ecom channels",
    desc: "We standardise data from every platform - so you get one clean, consistent view that actually makes sense.",
    image: screen1,
  },
  {
    title: "AI-driven Recommendations",
    desc: "Make smarter decisions with actionable insights from AI.",
    image: screen2,
  },
];

export default function MobileFixedSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("scroll-section");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollHeight = section.offsetHeight - window.innerHeight;

      if (scrollHeight <= 0) return;

      const progress = Math.min(
        Math.max(-rect.top / scrollHeight, 0),
        1
      );

      const total = sections.length;
      const segment = 1 / total;

      let newIndex = 0;

      for (let i = 0; i < total; i++) {
        if (progress >= segment * i && progress < segment * (i + 1)) {
          newIndex = i;
          break;
        }
      }

      if (progress >= 1) {
        newIndex = total - 1;
      }

      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-14 sm:py-16 lg:py-20 ">

      {/* HEADER */}
      <div className="text-center px-6">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">
          Analyse it all right from your pocket
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Our iOS and Android Mobile app helps you access AI-driven insights.
        </p>
      </div>

      {/* SCROLL SECTION */}
      <div
        id="scroll-section"
        className="relative h-[400vh]"
      >

        {/* STICKY WRAPPER */}
        <div className="sticky top-0 md:top-24 h-screen md:h-[80vh] flex items-center justify-center">

          {/* ================= DESKTOP ================= */}
          <div className="hidden md:grid grid-cols-3 items-center max-w-6xl w-full px-8">

            {/* LEFT TEXT */}
            <div className="flex justify-end pr-16">
              {activeIndex % 2 === 1 && (
                <div className="max-w-sm text-right relative">

                  <div className="absolute top-6 right-[-100px] w-[100px] h-[2px] bg-green-500"></div>

                  <h3 className="text-2xl font-semibold mb-4">
                    {sections[activeIndex].title}
                  </h3>
                  <p className="text-gray-600">
                    {sections[activeIndex].desc}
                  </p>
                </div>
              )}
            </div>

            {/* PHONE */}
            <div className="flex justify-center">
              <img
                key={activeIndex}
                src={sections[activeIndex].image}
                alt=""
                className="h-[80vh] w-auto object-contain transition-all duration-300"
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="flex justify-start pl-16">
              {activeIndex % 2 === 0 && (
                <div className="max-w-sm relative">

                  <div className="absolute top-6 left-[-100px] w-[100px] h-[2px] bg-green-500"></div>

                  <h3 className="text-2xl font-semibold mb-4">
                    {sections[activeIndex].title}
                  </h3>
                  <p className="text-gray-600">
                    {sections[activeIndex].desc}
                  </p>
                </div>
              )}
            </div>

          </div>

          {/* ================= MOBILE ================= */}
          <div className="md:hidden flex flex-col items-center">

            <img
              key={activeIndex}
              src={sections[activeIndex].image}
              alt=""
              className="w-[260px] mb-8 transition-all duration-300 h-full"
            />

            <div className="text-center px-6 max-w-md">
              <h3 className="text-xl font-semibold mb-3">
                {sections[activeIndex].title}
              </h3>
              <p className="text-gray-600 text-sm">
                {sections[activeIndex].desc}
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
