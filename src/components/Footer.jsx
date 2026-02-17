import React from "react";
import { Linkedin } from "lucide-react";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <section className="w-full bg-[#f5f3ef] px-4 md:px-8 pb-10">
      <div className="bg-black text-white rounded-[32px] px-6 md:px-16 py-12 md:py-16 max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10 relative">

          {/* Logo */}
          <div>
            <img
              src= {logo}   // <-- your dcluttr logo image here
              alt="aievoked"
              className="h-24 md:h-10 object-contain"
            />
            <p>The AI Copilot for Australian Real Estate</p>
          </div>

          {/* Use Cases */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Use Cases
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer"> Stop Lead Leakage</li>
              <li className="hover:text-white cursor-pointer">Automate Follow-Ups</li>
              <li className="hover:text-white cursor-pointer">CRM Sync & Hygiene</li>
              <li className="hover:text-white cursor-pointer">Team Dashboard & SLA</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Playbook</li>
           

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>hello@harbourhq.ai</li>
              <li>Book a Demo</li>
              <li>LinkedIn</li>
              <li>Support</li>

            </ul>
          </div>

          {/* LinkedIn Icon */}
          <div className="absolute top-0 right-0 md:static">
            <div className="bg-white text-black rounded-full p-2 w-9 h-9 flex items-center justify-center cursor-pointer hover:scale-105 transition">
              <Linkedin size={18} />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-10"></div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-6 text-gray-500 text-sm">

          <p>
           Harbour AI Pty Ltd   • Copyright © 2026
          </p>

          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms of Service
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
