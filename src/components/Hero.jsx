import React from "react";
import dashboard from "../assets/dashboard.png";

export default function Hero() {
  return (
    <section className="relative pt-16 pb-20 text-center overflow-hidden">

      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute left-0 top-20 w-40 h-40 border-l border-t border-[#d6d1c4] rounded-tl-3xl"></div>
        <div className="absolute right-0 top-40 w-40 h-40 border-r border-t border-[#d6d1c4] rounded-tr-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-medium leading-tight text-black">
          AI Copilot for <br />
          <span className="text-[#004f98]">Real</span> Estate
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          Never lose another REA or Domain enquiry. Harbour AI responds instantly,
          follows up consistently, and keeps your CRM clean. Without replacing it.
        </p>

        {/* Button */}
        <div className="mt-8">
          <button className="bg-black text-white px-8 py-3 rounded-xl shadow-2xl hover:scale-105 transition duration-300">
            Book a Demo
          </button>
        </div>

        {/* Dashboard Wrapper */}
        {/* Dashboard Wrapper */}
<div className="relative mt-20 flex justify-center">

{/* Dashboard */}
<img
  src={dashboard}
  alt="Dashboard"
  className="w-full max-w-5xl rounded-2xl shadow-2xl relative z-10"
/>

{/* ================= LEFT CARD ================= */}
<div
  className="
    hidden lg:block
    absolute
    left-1/2
    -translate-x-[150%]
    top-[38%]   /* moved down */
    -rotate-6
    z-20
  "
>
  <div
    className="
      bg-white
      rounded-2xl
      px-6 py-4
      shadow-[0_20px_50px_rgba(0,0,0,0.08)]
      border border-gray-100
      w-72
      transition-all duration-300
      hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]
    "
  >
    <p className="text-sm font-medium text-gray-800">
      Plan Inventory for the next 3 months
    </p>

    <div className="mt-3 flex justify-end">
      <div className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center text-white shadow-md">
        ↑
      </div>
    </div>
  </div>
</div>

{/* ================= RIGHT CHAT CARD ================= */}
<div
  className="
    hidden lg:block
    absolute
    right-1/2
    translate-x-[145%]
    top-[28%]
    z-20
  "
>
  <div
    className="
      bg-white
      rounded-3xl
      p-6
      w-96
      shadow-[0_30px_70px_rgba(0,0,0,0.12)]
      border border-gray-100
      backdrop-blur-xl
      transition-all duration-300
      hover:-translate-y-1
    "
  >
    <h4 className="text-base font-semibold text-gray-900">
      Good Afternoon, Harsh!
    </h4>

    <p className="text-sm text-gray-500 mt-1">
      May I help you with anything?
    </p>

    <div className="mt-5 relative">
      <input
        type="text"
        placeholder="What can I do to improve my profits?"
        className="
          w-full
          rounded-full
          bg-gray-50
          px-5 py-3
          text-sm
          text-gray-700
          outline-none
          border border-gray-200
          focus:ring-2 focus:ring-green-500
          pr-14
        "
      />

      <button
        className="
          absolute right-2 top-1/2 -translate-y-1/2
          w-10 h-10
          bg-green-600
          rounded-full
          flex items-center justify-center
          text-white
          shadow-lg
          hover:bg-green-700
          transition
        "
      >
        →
      </button>
    </div>
  </div>
</div>

</div>

      </div>
    </section>
  );
}
