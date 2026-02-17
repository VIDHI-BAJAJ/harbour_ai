import React, { useEffect, useRef, useState } from "react";

import screen1 from "../assets/mobile1.avif";
import screen2 from "../assets/mobil2.avif";
import screen3 from "../assets/mobil3.avif";
import screen4 from "../assets/mobil4.avif";

const sections = [
  {
    title: "Track combined performance across all your ecom channels",
    desc: "We standardise data from every platform - so you get one clean, consistent view that actually makes sense.",
    image: screen1,
  },
  {
    title: "AI-driven Recommendations",
    desc: "Make smarter decisions with actionable insights from AI",
    image: screen2,
  },
  {
    title: "Deep Store-Level Insights",
    desc: "Drill down into SKU and locality-level performance.",
    image: screen3,
  },
  {
    title: "No nonsense alerts",
    desc: "Push notifications for critical reports and insights - no noise, just signals.",
    image: screen4,
  },
];

export default function MobileFixedSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const triggers = useRef([]);

  useEffect(() => {
    const observers = [];

    triggers.current.forEach((el, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        { threshold: 0.6 }
      );

      if (el) observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <section className="bg-[#f5f3ef] py-24 relative">
  
      {/* SECTION HEADER */}
      <div className="text-center mb-16 px-6">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">
          Analyse it all right from your pocket
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Our iOS and Android Mobile app helps you access AI-driven insights - in a matter of seconds
        </p>
      </div>
  
      {/* ========================= */}
      {/* DESKTOP VERSION */}
      {/* ========================= */}
      <div className="hidden md:block relative h-[400vh]">
  
        <div className="sticky top-32 h-screen flex items-center justify-center">
  
          <div className="grid grid-cols-3 max-w-6xl w-full">
  
            {/* LEFT TEXT */}
            <div className="flex items-center justify-end pr-12">
              {activeIndex % 2 !== 0 && (
                <div className="max-w-sm text-right transition-all duration-500">
                  <div className="h-[2px] bg-green-500 mb-6 w-full"></div>
                  <h3 className="text-2xl font-semibold mb-4">
                    {sections[activeIndex].title}
                  </h3>
                  <p className="text-gray-600">
                    {sections[activeIndex].desc}
                  </p>
                </div>
              )}
            </div>
  
            {/* CENTER PHONE */}
            <div className="flex justify-center">
              <img
                src={sections[activeIndex].image}
                alt=""
                className="w-[340px] transition-all duration-500"
              />
            </div>
  
            {/* RIGHT TEXT */}
            <div className="flex items-center justify-start pl-12">
              {activeIndex % 2 === 0 && (
                <div className="max-w-sm transition-all duration-500">
                  <div className="h-[2px] bg-green-500 mb-6 w-full"></div>
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
  
        </div>
  
        {/* Desktop Scroll Triggers */}
        <div className="absolute inset-0">
          {sections.map((_, index) => (
            <div
              key={index}
              ref={(el) => (triggers.current[index] = el)}
              className="h-screen"
            />
          ))}
        </div>
  
      </div>
  
      {/* ========================= */}
      {/* MOBILE VERSION (UNCHANGED) */}
      {/* ========================= */}
      <div className="md:hidden relative h-[400vh]">
  
        <div className="sticky top-24 flex flex-col items-center">
  
          <img
            src={sections[activeIndex].image}
            alt=""
            className="w-[260px] transition-all duration-500 mb-8"
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
  
        {/* Mobile Scroll Triggers */}
        <div className="absolute inset-0">
          {sections.map((_, index) => (
            <div
              key={index}
              ref={(el) => (triggers.current[index] = el)}
              className="h-screen"
            />
          ))}
        </div>
  
      </div>
  
    </section>
  );
  
}
