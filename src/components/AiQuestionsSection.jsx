import React from "react";

const QUESTIONS = [
  {
    icon: "💬",
    text: "Which agents have stalled leads older than 7 days?",
  },
  {
    icon: "💬",
    text: "How many REA enquiries did we respond to in under 5 minutes this week?",
  },
  {
    icon: "💬",
    text: "Who are our hottest buyer leads right now  ready to appraise?",
  },
  {
    icon: "💬",
    text: "Send a follow-up SMS to all buyer leads who attended Saturday's open home.",
  },
];

export default function AskAISection() {
  return (
    <section className="bg-[#0a0a0f] rounded-3xl p-10 lg:p-20 relative overflow-hidden">

      {/* Blue Glow Bottom Right */}
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-[#004f98] opacity-30 blur-[120px]"></div>

      {/* Star background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.05),transparent_40%)]"></div>

      <div className="relative grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="text-white">
          <h2 className="text-4xl lg:text-5xl font-semibold leading-tight">
            Any Questions?
            <br />
            Just Ask AI
          </h2>

          <p className="mt-6 text-gray-400 max-w-md">
          Chat with your lead data in plain English. Harbour AI is trained on your pipeline, your listings, and your follow-up history.
          </p>

          <button className="mt-8 bg-white text-black px-6 py-3 rounded-xl font-medium hover:opacity-90 transition">
            Get Started for free →
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">

        {QUESTIONS.map((q, index) => (
  <div
    key={index}
    className={`
      relative
      rounded-2xl
      px-8 py-6
      bg-[#2a2a2f]
      text-gray-200
      flex items-start gap-4
      transition-all duration-300 ease-out
      cursor-pointer
      hover:bg-[#004f98]
      hover:text-white
      hover:-translate-y-1
    `}
    style={{
      transform:
        index === 2
          ? "rotate(-2deg)"
          : index === 3
          ? "rotate(-3deg)"
          : "rotate(0deg)",
    }}
  >
    <span className="text-xl opacity-80">
      {q.icon}
    </span>

    <p className="text-sm lg:text-base font-medium">
      {q.text}
    </p>
  </div>
))}


        </div>

      </div>
    </section>
  );
}
