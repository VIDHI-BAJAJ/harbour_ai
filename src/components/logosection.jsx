import React from "react";

/* Your 5 logos */
const LOGOS = [
  { id: 1, alt: "Amazon", src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { id: 2, alt: "Google", src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { id: 3, alt: "Apple", src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { id: 4, alt: "Netflix", src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { id: 5, alt: "Microsoft", src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
];

export default function LogoSection() {
  const doubled = [...LOGOS, ...LOGOS]; // for smooth mobile loop

  return (
    <section className="w-full py-14 sm:py-16 lg:py-20">

      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-sm tracking-widest text-gray-500 uppercase">
          Trusted by leading brands
        </p>
      </div>

      {/* ───────────────────────────── */}
      {/* Desktop & Tablet (Static Grid) */}
      {/* ───────────────────────────── */}
      <div className="hidden md:block max-w-6xl mx-auto px-6">
        <div className="
          grid grid-cols-3 lg:grid-cols-5
          items-center
          gap-10 lg:gap-14
          justify-items-center
        ">
          {LOGOS.map((logo) => (
            <img
              key={logo.id}
              src={logo.src}
              alt={logo.alt}
              className="max-h-10 lg:max-h-12 object-contain"
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
