import React from "react";
import rea from "../assets/crm/rea.png";
import domain from "../assets/crm/Domain.avif";
import forms from "../assets/crm/Website Form.webp";
import facebook from "../assets/crm/facebooklead.png";
import email from "../assets/crm/email.jpg";
import reapit from "../assets/crm/Reapit.png";
import rex from "../assets/crm/rex.svg";
import boxdice from "../assets/crm/Boxdice.png";
import mrivault from "../assets/crm/mrivault.jpeg";
import hubspot from "../assets/crm/hubspot.png";
import salesforce from "../assets/crm/salesforce.webp";

/* Row 1 */
const ROW_ONE = [
  { name: "REA Group", src: rea },
  { name: "Domain", src: domain },
  { name: "Website Forms", src: forms },
  { name: "Facebook Leads", src: facebook },
  { name: "Email Inbox", src: email},
];

/* Row 2 */
const ROW_TWO = [
  { name: "Reapit", src: reapit },
  { name: "Rex", src: rex },
  { name: "Box+Dice", src: boxdice },
  { name: "MRI Vault", src: mrivault },
  { name: "HubSpot", src: hubspot },
  { name: "Salesforce", src: salesforce },
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
    <section className="relative py-14 sm:py-16 lg:py-20 overflow-hidden">

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
            <div className="flex gap-10 animate-marquee-right w-max">
              {[...ROW_ONE, ...ROW_ONE].map((logo, index) => (
                <LogoCard key={index} logo={logo} />
              ))}
            </div>
          </div>

          {/* Row 2 – Reverse Using CSS Property */}
          <div className="overflow-hidden">
            <div className="flex gap-10 animate-marquee-left w-max">
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
