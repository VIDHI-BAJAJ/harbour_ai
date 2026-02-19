// import React from "react";

// export default function DitchSection() {
//   return (
//     <section className="w-full bg-white py-20 px-6 md:px-30">
//       <div className="max-w-7xl ">

//         {/* Heading */}
//         <h2 className="text-center text-4xl md:text-5xl font-semibold text-gray-900 mb-16">
//           Ditch the Point Solutions
//         </h2>

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

//           {/* 1️⃣ WIDE CARD */}
//           <div className="md:col-span-2 bg-[#ece9e4] rounded-[32px] p-12 min-h-[360px]">
//             <img
//               src="/images/notifications.png"
//               alt=""
//               className="mb-10 max-w-[320px]"
//             />
//             <h3 className="text-lg font-semibold mb-4">
//             SMS and email are your default channels. WhatsApp is supported where your clients prefer it. Harbour meets buyers and sellers where they already are.
//             </h3>
//           </div>

//           {/* 2️⃣ NORMAL CARD */}
//           <div className="md:col-span-1 bg-[#ece9e4] rounded-[32px] p-10 min-h-[360px]">
//             <img
//               src="/images/insights.png"
//               alt=""
//               className="mb-8"
//             />
//             <h3 className="text-lg font-semibold mb-3">
//             Harbour is not a CRM replacement. It's the AI operator layer on top enriching records, logging activities, and keeping your pipeline honest. Works with Reapit, Rex, Box+Dice, MRI Vault, HubSpot and more.
//             </h3>
//           </div>

//           {/* 3️⃣ NORMAL CARD */}
//           <div className="md:col-span-1 bg-[#ece9e4] rounded-[32px] p-10 min-h-[360px]">
//             <img
//               src="/images/speed.png"
//               alt=""
//               className="mb-8"
//             />
//             <h3 className="text-lg font-semibold mb-3">
//             REA Group and Domain enquiries arrive via official partner APIs not email parsing hacks. Every lead is delivered instantly, attributed correctly, and actioned automatically. </h3>
//           </div>

//           {/* 4️⃣ WIDE CARD */}
//           <div className="md:col-span-2 bg-[#ece9e4] rounded-[32px] p-12 min-h-[360px]">
//             <img
//               src="/images/team.png"
//               alt=""
//               className="mb-10 max-w-[320px]"
//             />
//             <h3 className="text-lg font-semibold mb-4">
//             Harbour handles Spam Act unsubscribes, Privacy Act data practices, and consent evidence logging automatically. Run clean, stay compliant, and sleep soundly.
//             </h3>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";

export default function DitchSection() {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-semibold text-gray-900 mb-20">
          Built for agents, by agents.
        </h2>

        {/* MAIN GRID */}
      {/* MAIN GRID */}
<div className="grid grid-cols-1 md:grid-cols-5 gap-10">

{/* LEFT COLUMN (2 CARDS STACKED) */}
<div className="md:col-span-2 flex flex-col gap-8">

  {/* Card 1 */}
  <div className="bg-[#ece9e4] rounded-[32px] p-10 min-h-[240px]">
    <h3 className="text-xl font-semibold text-gray-900 mb-4">
      Never miss a lead again.
    </h3>
    <p className="text-gray-600 leading-relaxed">
      Harbour responds instantly to enquiries, follows up consistently,
      qualifies buyers automatically and updates your CRM 24/7.
      No manual chasing.
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-[#ece9e4] rounded-[32px] p-10 min-h-[240px]">
    <h3 className="text-xl font-semibold text-gray-900 mb-4">
      Built-In Compliance & Clean Data.
    </h3>
    <p className="text-gray-600 leading-relaxed">
      Handles consent tracking, unsubscribes, data logging and
      compliance automatically — keeping your pipeline clean
      and audit-ready.
    </p>
  </div>

</div>

{/* RIGHT BIG CARD (REDUCED WIDTH + MORE CONTENT) */}
<div className="md:col-span-3">
  <div className="bg-[#ece9e4] rounded-[32px] p-14 min-h-[520px] flex flex-col justify-center">

    <h3 className="text-3xl font-semibold text-gray-900 mb-6">
      Stop Switching Between Tools.
    </h3>

    <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl">
      Qualifies leads on WhatsApp, updates your CRM, connects to top
      property portals and your website — all while running a built-in
      AI assistant in the background.
    </p>

    {/* Feature Points */}
    <div className="space-y-4 text-gray-700">

      <div className="flex items-start gap-3">
        <span className="mt-1 w-2 h-2 bg-black rounded-full"></span>
        <p>Automatic lead qualification & smart follow-ups</p>
      </div>

      <div className="flex items-start gap-3">
        <span className="mt-1 w-2 h-2 bg-black rounded-full"></span>
        <p>Instant CRM logging without manual admin</p>
      </div>

      <div className="flex items-start gap-3">
        <span className="mt-1 w-2 h-2 bg-black rounded-full"></span>
        <p>Portal + website enquiry sync in real-time</p>
      </div>

      <div className="flex items-start gap-3">
        <span className="mt-1 w-2 h-2 bg-black rounded-full"></span>
        <p>Built-in AI assistant to nurture buyers automatically</p>
      </div>

    </div>

  </div>
</div>

</div>
      </div>
    </section>
  );
}
