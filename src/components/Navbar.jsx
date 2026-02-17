import React from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="w-full px-8 py-6 flex items-center justify-between">

      {/* Left Logo */}
      <div>
        <img src={logo} alt="Logo" className="h-12 ml-16" />
      </div>

      {/* Center Menu */}
      <ul className="hidden md:flex space-x-10 text-black font-medium">
        <li className="hover:text-black cursor-pointer">How It Works</li>
        <li className="hover:text-black cursor-pointer">Features</li>
        <li className="hover:text-black cursor-pointer">Pricing</li>
        <li className="hover:text-black cursor-pointer">Playbook</li>
      </ul>

      {/* Right Button */}
      <div>
        <button className="bg-black text-white px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition">
        Book a Demo
        </button>
      </div>
    </nav>
  );
}
