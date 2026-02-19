import React from "react";
import ClientLogo from "../assets/ClientLogo/logo.jpeg";
import Clientlogo2 from "../assets/ClientLogo/logo2.jpeg";
import Clientlogo3 from "../assets/ClientLogo/logo3.jpeg";
import Clientlogo4 from "../assets/ClientLogo/logo4.jpeg";

/* Your 5 logos */
const LOGOS = [
  { id: 1, alt: "Amazon", src: ClientLogo },
  { id: 2, alt: "Google", src: Clientlogo2 },
  { id: 3, alt: "Apple", src: Clientlogo3 },
  { id: 4, alt: "Netflix", src: Clientlogo4 },
];

export default function LogoSection() {
  const doubled = [...LOGOS, ...LOGOS]; // for smooth mobile loop

  return (
    <section className="w-full mt-14 sm:mt-16 lg:mt-20">

      {/* Heading */}
      {/* <div className="text-center mb-10">
        <p className="text-sm tracking-widest text-gray-500 uppercase">
          Trusted by leading brands
        </p>
      </div> */}

      {/* ───────────────────────────── */}
      {/* Desktop & Tablet (Static Grid) */}
      {/* ───────────────────────────── */}
      <div className="hidden md:block max-w-6xl mx-auto">
        <div className="
          grid grid-cols-3 lg:grid-cols-4
          items-center
          gap-10 lg:gap-14
          justify-items-center
        ">
          {LOGOS.map((logo) => (
            <img
              key={logo.id}
              src={logo.src}
              alt={logo.alt}
              className="max-h-10 lg:max-h-20 object-contain"
              draggable={false}
            />
          ))}
        </div>
      </div>

      {/* ───────────────────────────── */}
      {/* Mobile (Auto Scroll Animation) */}
      {/* ───────────────────────────── */}
      <div className="md:hidden overflow-hidden relative">
        <div className="flex animate-marquee gap-10 w-max">
          {doubled.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-8 object-contain"
              draggable={false}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
