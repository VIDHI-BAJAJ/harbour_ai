import React from "react";

export default function DitchSection() {
  return (
    <section className="w-full bg-white py-20 px-30">
      <div className="max-w-7xl ">

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-semibold text-gray-900 mb-16">
          Ditch the Point Solutions
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* 1️⃣ WIDE CARD */}
          <div className="md:col-span-2 bg-[#ece9e4] rounded-[32px] p-12 min-h-[360px]">
            <img
              src="/images/notifications.png"
              alt=""
              className="mb-10 max-w-[320px]"
            />
            <h3 className="text-lg font-semibold mb-4">
            SMS and email are your default channels. WhatsApp is supported where your clients prefer it. Harbour meets buyers and sellers where they already are.
            </h3>
          </div>

          {/* 2️⃣ NORMAL CARD */}
          <div className="md:col-span-1 bg-[#ece9e4] rounded-[32px] p-10 min-h-[360px]">
            <img
              src="/images/insights.png"
              alt=""
              className="mb-8"
            />
            <h3 className="text-lg font-semibold mb-3">
            Harbour is not a CRM replacement. It's the AI operator layer on top enriching records, logging activities, and keeping your pipeline honest. Works with Reapit, Rex, Box+Dice, MRI Vault, HubSpot and more.
            </h3>
          </div>

          {/* 3️⃣ NORMAL CARD */}
          <div className="md:col-span-1 bg-[#ece9e4] rounded-[32px] p-10 min-h-[360px]">
            <img
              src="/images/speed.png"
              alt=""
              className="mb-8"
            />
            <h3 className="text-lg font-semibold mb-3">
            REA Group and Domain enquiries arrive via official partner APIs not email parsing hacks. Every lead is delivered instantly, attributed correctly, and actioned automatically. </h3>
          </div>

          {/* 4️⃣ WIDE CARD */}
          <div className="md:col-span-2 bg-[#ece9e4] rounded-[32px] p-12 min-h-[360px]">
            <img
              src="/images/team.png"
              alt=""
              className="mb-10 max-w-[320px]"
            />
            <h3 className="text-lg font-semibold mb-4">
            Harbour handles Spam Act unsubscribes, Privacy Act data practices, and consent evidence logging automatically. Run clean, stay compliant, and sleep soundly.
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
}
