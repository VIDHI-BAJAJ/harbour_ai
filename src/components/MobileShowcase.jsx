import React, { useEffect, useState } from "react";

import screen1 from "../assets/images/mockupmobile.png";
// import screen2 from "../assets/Images/mockupmobile3.png";

const sections = [
  {
    title: "Never miss a lead again",
    desc: "Harbour AI captures every buyer and seller inquiry from Facebook Ads, portals, and referrals and instantly qualifies, scores, and routes them to the right agent. No manual follow-up. No dropped leads.",
    image: screen1,
  },
  // {
  //   title: "AI-driven Recommendations",
  //   desc: "Make smarter decisions with actionable insights from AI.",
  //   image: screen2,
  // },
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-14 sm:py-16 lg:py-20">

      {/* HEADER */}
      <div className="text-center px-6">
        <h2 className="text-3xl md:text-5xl font-semibold mb-14">
          Analyse it all right from your pocket
        </h2>
      </div>

      {/* SCROLL SECTION */}
      <div
        id="scroll-section"
        className="relative"
        style={{ height: `${sections.length * 100}vh` }}
      >

        {/* STICKY WRAPPER */}
        <div className="sticky top-20 md:top-24 h-[70svh] md:h-[90vh] flex items-center justify-center">

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

            {/* PHONE IMAGE */}
            <div className="flex justify-center">
              <img
                key={activeIndex}
                src={sections[activeIndex].image}
                alt=""
                className="h-[105vh] w-auto object-contain transition-all duration-500"
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="flex justify-start pl-16">
              {activeIndex % 2 === 0 && (
                <div className="max-w-sm relative">

                  <div className="absolute top-6 left-[-100px] w-[100px] h-[2px] bg-green-500"></div>

                  <h3 className="text-2xl font-semibold mb-2 pl-3 mt-3">
                    {sections[activeIndex].title}
                  </h3>
                  <p className="text-gray-600 pl-3">
                    {sections[activeIndex].desc}
                  </p>
                </div>
              )}
            </div>

          </div>

          {/* ================= MOBILE ================= */}
          <div className="md:hidden flex flex-col items-center justify-center text-center px-6">

            <img
              key={activeIndex}
              src={sections[activeIndex].image}
              alt=""
              className="w-[85%] max-w-[360px] h-auto transition-all duration-500"
            />

            <div className="mt-6 max-w-sm">
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