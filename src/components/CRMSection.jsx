import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import tabletMockup from "../assets/dashboard.png";

export default function CRMSection() {

  const sectionRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // 🔥 Scroll based on THIS section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"], 
  });

  const rotateX = useTransform(
    scrollYProgress,
    [0, 1],
    isDesktop ? [18, 0] : [0, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    isDesktop ? [150, 0] : [0, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    isDesktop ? [1.05, 1] : [1, 1]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3],
    isDesktop ? [0, 1] : [1, 1]
  );

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#f5f6f8] py-24 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl md:text-6xl font-semibold text-[#1f2937] leading-tight max-w-4xl mx-auto">
          Have an existing CRM that you want to make smarter?
        </h2>

        <p className="mt-6 text-gray-500 text-lg max-w-3xl mx-auto">
        Kendal AI is the first voice-activated real estate assistant that can plug into your existing technology and make it smarter! From qualifying leads to managing deals and scheduling follow-ups, Kendal works harder so you don’t have to. Your next deal could be one command away. 
        </p>

        {/* <div className="mt-2 relative flex justify-center">

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
            <img
              src={tabletMockup}
              alt="Tablet Mockup"
              className="w-full"
            />
            <div className="
              hidden lg:block
              absolute
              top-[12%]
              right-[5%]
              bg-white
              rounded-xl
              shadow-2xl
              p-4
              w-64
              transition-all duration-500
              hover:-translate-y-2
            ">
              <h4 className="text-sm font-semibold mb-2">
                Ask me anything
              </h4>
              <div className="bg-blue-500 text-white text-xs p-3 rounded-lg mb-2">
                Which competitor gained highest share?
              </div>
              <div className="text-xs text-gray-500">
                Superyou gained highest share last weekend.
              </div>
            </div>

            <div className="
              hidden lg:block
              absolute
              bottom-[12%]
              left-[5%]
              bg-white
              rounded-xl
              shadow-2xl
              p-4
              w-56
              transition-all duration-500
              hover:-translate-y-2
            ">
              <h4 className="text-sm font-semibold mb-2">
                Competitor Trends
              </h4>
              <div className="h-16 bg-gray-100 rounded-md flex items-center justify-center text-xs text-gray-400">
                Chart Preview
              </div>
            </div>

          </motion.div>

        </div> */}

      </div>
    </section>
  );
}
