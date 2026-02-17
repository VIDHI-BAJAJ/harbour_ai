import React, { useEffect, useRef, useState } from "react";

import img1 from "../assets/side1.avif";
import img2 from "../assets/side2.avif";
import img3 from "../assets/side3.avif";
import img4 from "../assets/Logo.png";

const steps = [
  {
    id: 1,
    step: "STEP 1",
    title: "CRM Sync & Team Visibility",
    description:
      "Enquiries from REA, Domain, your website, and Facebook are captured the moment they arrive — instantly routed to the right agent with zero manual triage.",
    image: img1,
  },
  {
    id: 2,
    step: "STEP 2",
    title: "AI Enrichment & Qualification",
    description:
      "Harbour AI reads every enquiry and extracts what matters: intent, suburb preference, budget range, timeline, and finance readiness — so your agent enters every conversation prepared.",
    image: img2,
  },
  {
    id: 3,
    step: "STEP 3",
    title: "Automated Follow-Up Sequences",
    description:
      "Every lead gets a follow-up plan, automatically. SMS and email sequences run in the background, with consent logging and Spam Act-compliant opt-outs built in.",
    image: img3,
  },
  {
    id: 4,
    step: "STEP 4",
    title: "CRM Sync & Team Visibility",
    description:
      "Every message, summary, task, and stage update writes back to your CRM — Reapit, Rex, Box+Dice, or HubSpot. Your manager dashboard stays accurate without anyone lifting a finger.",
    image: img4,
  },
];

export default function AgentSection() {
  const [activeStep, setActiveStep] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    const observers = [];

    refs.current.forEach((el, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep(index);
          }
        },
        { threshold: 0.5 }
      );

      if (el) observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <section className="bg-[#f5f3ef] py-24 px-4 md:px-40">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Agent-powered intelligence.
            <br /> Built to work for you.
          </h2>
          <p className="text-gray-600">
            Dcluttr connects the dots, so you don’t have to.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-16">

          {/* LEFT SIDE (Scrolling Content) */}
          <div className="md:w-1/2 space-y-40">
            {steps.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => (refs.current[index] = el)}
                className="min-h-[60vh]"
              >
                <div className="bg-black w-14 h-14 rounded-xl mb-6"></div>
                <p className="text-sm text-gray-500 mb-2">{item.step}</p>
                <h3 className="text-3xl font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 max-w-md">
                  {item.description}
                </p>

                {/* Mobile Image */}
                <div className="mt-8 md:hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="rounded-3xl"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE (Sticky Image Desktop Only) */}
          <div className="hidden md:block md:w-1/2">
            <div className="sticky top-32">
              <img
                src={steps[activeStep].image}
                alt=""
                className="rounded-3xl transition-all duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
