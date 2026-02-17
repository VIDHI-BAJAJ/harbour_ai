import React from "react";

/* Row 1 */
const ROW_ONE = [
  { name: "REA Group", src: "/logos/rea.png" },
  { name: "Domain", src: "/logos/domain.png" },
  { name: "Website Forms", src: "/logos/forms.png" },
  { name: "Facebook Leads", src: "/logos/facebook.png" },
  { name: "Email Inbox", src: "/logos/email.png" },
];

/* Row 2 */
const ROW_TWO = [
  { name: "Reapit", src: "/logos/reapit.png" },
  { name: "Rex", src: "/logos/rex.png" },
  { name: "Box+Dice", src: "/logos/boxdice.png" },
  { name: "MRI Vault", src: "/logos/mrivault.png" },
  { name: "HubSpot", src: "/logos/hubspot.png" },
  { name: "Salesforce", src: "/logos/salesforce.png" },
];

function LogoCard({ logo }) {
  return (
    <div className="flex flex-col items-center min-w-[110px]">
      <div className="w-20 h-20 rounded-2xl shadow-sm flex items-center justify-center bg-white">
        <img
          src={logo.src}
          alt={logo.name}
          className="max-h-10 object-contain"
          draggable={false}
        />
      </div>
      <p className="mt-3 text-sm text-gray-600 text-center">
        {logo.name}
      </p>
    </div>
  );
}

export default function LeadsIntegrationSection() {
  return (
    <section className="relative py-24 overflow-hidden">

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl lg:text-5xl font-semibold text-black">
          All your leads in one place
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Connects to the portals and CRMs your team already uses
        </p>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:block">

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 mt-16 justify-items-center">
            {ROW_ONE.map((logo, index) => (
              <LogoCard key={index} logo={logo} />
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 mt-14 justify-items-center">
            {ROW_TWO.map((logo, index) => (
              <LogoCard key={index} logo={logo} />
            ))}
          </div>

        </div>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden mt-16 space-y-12 overflow-hidden">

          {/* Row 1 – Normal Direction */}
          <div className="overflow-hidden">
            <div className="flex gap-10 animate-marquee w-max">
              {[...ROW_ONE, ...ROW_ONE].map((logo, index) => (
                <LogoCard key={index} logo={logo} />
              ))}
            </div>
          </div>

          {/* Row 2 – Reverse Using CSS Property */}
          <div className="overflow-hidden">
            <div className="flex gap-10 animate-marquee w-max [animation-direction:reverse]">
              {[...ROW_TWO, ...ROW_TWO].map((logo, index) => (
                <LogoCard key={index} logo={logo} />
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
