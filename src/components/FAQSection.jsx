import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
   {
    question: "Does Harbour replace my CRM?",
    answer: "No. Harbour sits on top of your existing CRM — Reapit, Rex, Box+Dice, MRI Vault, HubSpot, or Salesforce. It enriches records, logs activities, and keeps your pipeline current. No migration, no disruption.",
  },
  {
    question: "Is this compliant with Australian Spam Act and Privacy Act requirements?",
    answer: "Harbour is designed with Australian compliance in mind. Automated messages include compliant opt-out mechanisms. Consent is logged per channel. Data handling is aligned to the Australian Privacy Principles (APPs). We recommend all customers review our privacy documentation and engage their own legal counsel for specific advice.",
  },
 
  {
    question: "How long does onboarding take?",
    answer: "Most agencies are live within 48 hours. Our concierge onboarding team connects your CRM, configures portal integrations, and sets up your first follow-up templates.",
  },
  
  {
    question: "What messaging channels does Harbour support?",
    answer: "SMS and email are the default channels, supported out of the box for Australian numbers. WhatsApp Business API is available as an additional channel for agencies where that suits their client base.",
  },
 
  {
    question: "We already pay for REA and a CRM. Why add another tool?",
    answer: "Harbour turns the leads you're already paying for into conversations, appraisals, and listings — instead of letting them expire in your inbox. For most agencies, recovering even one missed commission per month more than covers the cost.",
  },

];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-5xl font-semibold text-gray-900 mb-14">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur rounded-2xl border border-gray-200 transition-all"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left px-6 py-5 md:px-8 md:py-6"
              >
                <span className="text-base md:text-lg text-gray-900">
                  {faq.question}
                </span>

                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                )}
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 md:px-8 pb-6 text-sm md:text-base text-gray-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
