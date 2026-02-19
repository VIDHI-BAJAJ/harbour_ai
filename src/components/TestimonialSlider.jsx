import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    logo: "/logos/oyehappy.png",
    text: `“We were losing 30% of our leads to slow response times. Harbour changed that overnight. Every enquiry gets a reply within minutes and my CRM is actually up to date for the first time in years.”`,
    name: "Sarah M.",
  },
  {
    logo: "/logos/goodbug.png",
    text: `"As a sales manager I used to spend Monday mornings chasing agents for follow-up notes. Now Harbour does it automatically I just check the dashboard and deal with the exceptions."`,
    name: " James K.",   
  },
  {
    logo: "/logos/oyehappy.png",
    text: `"I was skeptical about 'another tool' but Harbour sits on top of Box+Dice, not beside it. My pipeline is cleaner, my response rate is up, and I close more appraisals."`,
    name: "Lisa T", 
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const testimonial = testimonials[current];

  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-5xl mx-auto text-center relative">

        {/* Left Arrow (Desktop Only) */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:scale-105 transition"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right Arrow (Desktop Only) */}
        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:scale-105 transition"
        >
          <ChevronRight size={20} />
        </button>

        {/* Logo */}
        {/* <div className="mb-8 flex justify-center">
          <img
            src={testimonial.logo}
            alt="Company Logo"
            className="h-8 md:h-10 object-contain"
          />
        </div> */}

        {/* Testimonial Text */}
        <p className="text-gray-800 text-lg md:text-2xl leading-relaxed max-w-4xl mx-auto">
          {testimonial.text}
        </p>

        {/* User Info */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <div className="text-left">
            <p className="font-semibold text-gray-900">
              {testimonial.name}
            </p>
            <p className="text-sm text-gray-500">
              {testimonial.role}
            </p>
          </div>
        </div>

        {/* Mobile Arrows */}
        <div className="flex justify-center gap-4 mt-8 md:hidden">
          <button
            onClick={prevSlide}
            className="bg-white p-3 rounded-full shadow"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white p-3 rounded-full shadow"
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
