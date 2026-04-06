import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dashboard from "../assets/images/dashboard.png";

export default function Hero() {
  const { scrollY } = useScroll();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const rotateX = useTransform(scrollY, [0, 500], isDesktop ? [20, 0] : [0, 0]);
  const y = useTransform(scrollY, [0, 500], isDesktop ? [150, 0] : [0, 0]);
  const scale = useTransform(scrollY, [0, 500], isDesktop ? [1.05, 1] : [1, 1]);
  const opacity = useTransform(scrollY, [0, 200], isDesktop ? [0, 1] : [1, 1]);

  return (
    <section className="relative pt-10 md:pt-15 md:pb-32 pb-8 text-center bg-[#f5f3ef] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h1 className="text-5xl md:text-8xl font-medium leading-tight text-black">
          AI Copilot for <br />
          <span className="text-[#004f98]">Real</span> Estate Growth
        </h1>

        <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          Never lose another enquiry. Harbour AI responds instantly,
          follows up consistently, and keeps your CRM clean.
        </p>

        <div className="mt-8">
          <button className="bg-black text-white px-8 py-3 rounded-xl shadow-xl hover:scale-105 transition duration-300">
          <a
              href="https://calendly.com/pragundass-ai/10min?month=2026-02"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600"
            > Book a Demo
            </a>
          </button>
        </div>

        {/* DASHBOARD WRAPPER */}
        <div className="relative mt-10 flex justify-center">

          <motion.div
            style={{
              rotateX,
              y,
              scale,
              opacity,
              transformPerspective: 1200,
            }}
            className="relative w-full max-w-5xl"
          >
            {/* Dashboard Image */}
            <img
              src={dashboard}
              alt="Dashboard"
              className="w-full rounded-2xl shadow-2xl"
            />

            {/* ================= LEFT CARD ================= */}
            {/* ================= LEFT CARD ================= */}
<div className="hidden lg:block absolute -left-16 top-80 z-80">
  <div className="relative w-[370px] rounded-[32px] px-8 py-6
      bg-gradient-to-r from-[#0f4c75] to-[#1177c3]
      shadow-[0_40px_100px_rgba(0,0,0,0.35)]
      transition-all duration-500 hover:-translate-y-2">

    {/* Glow */}
    <div className="absolute -inset-1 rounded-[36px] 
        bg-gradient-to-r from-cyan-400/20 via-transparent to-green-400/20 
        blur-2xl -z-10"></div>

    {/* ONE LINE FLEX */}
    <div className="flex items-center gap-6">

{/* Avatars */}
<div className="flex items-center -space-x-4">
  <img
    src="https://randomuser.me/api/portraits/men/32.jpg"
    alt=""
    className="w-12 h-12 rounded-full border-3 border-[#0f4c75]"
  />
  <img
    src="https://randomuser.me/api/portraits/women/44.jpg"
    alt=""
    className="w-12 h-12 rounded-full border-3 border-[#0f4c75]"
  />
  <img
    src="https://randomuser.me/api/portraits/men/65.jpg"
    alt=""
    className="w-12 h-12 rounded-full border-3 border-[#0f4c75]"
  />
</div>

{/* Number + Text (Column) */}
<div className="flex flex-col items-start">
  <h3 className="text-3xl font-bold text-white leading-tight">
    +1000
  </h3>

  <p className="text-white text-sm opacity-90">
    Leads Qualified Today
  </p>
</div>

</div>

  </div>
</div>


            {/* ================= RIGHT CARD ================= */}
            <div className="hidden lg:block absolute -right-20 top-28 z-20">
              <div className="bg-white/95 backdrop-blur-xl rounded-[28px] p-7 w-[320px] border border-white/40 shadow-[0_40px_80px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-500">

                <h4 className="text-lg font-semibold text-gray-900">
                  Good Afternoon, Jordan!
                </h4>

                <p className="text-sm text-gray-500 mt-1">
                  3 new enquiries overnight. I've qualified 2 as hot.
                </p>

                <div className="mt-6 relative">
                  <input
                    type="text"
                    placeholder="What can I do to improve my profits?"
                    className="w-full rounded-full bg-white px-6 py-3.5 text-sm text-gray-700 outline-none border border-gray-200 focus:border-[#004f98] pr-16 shadow-sm"
                  />

                  <button className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 bg-[#004f98] rounded-full flex items-center justify-center text-white hover:scale-105 transition-all duration-300">
                    →
                  </button>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
