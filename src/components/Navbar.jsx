import React, { useState } from "react";
import logo from "../assets/navbarlogo.png";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full top-0 left-0 z-50">
      <div className="flex items-center justify-between px-6 md:px-16 py-5">
        
        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Logo" className="h-10 cursor-pointer" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-black font-medium">

          {/* How It Works */}
          <li>
            <a
              href="https://calendly.com/pragundass-ai/10min?month=2026-02"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600"
            >
              How It Works
            </a>
          </li>

          {/* Features */}
          <li>
            <Link
              to="/#features"
              className="hover:text-gray-600"
            >
              Features
            </Link>
          </li>

          {/* Pricing */}
          <li>
            <Link
              to="/pricing"
              className="hover:text-gray-600"
            >
              Pricing
            </Link>
          </li>
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <a
            href="https://calendly.com/pragundass-ai/10min?month=2026-02"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition inline-block"
          >
            Book a Demo
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pt-4 pb-6 shadow-lg">
          <ul className="flex flex-col space-y-6 text-black font-medium">
            
            <li className="border-b pb-3">
              <a
                href="https://calendly.com/pragundass-ai/10min?month=2026-02"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                How It Works
              </a>
            </li>

            <li className="border-b pb-3">
              <Link
                to="/#features"
                onClick={closeMenu}
              >
                Features
              </Link>
            </li>

            <li className="border-b pb-3">
              <Link
                to="/pricing"
                onClick={closeMenu}
              >
                Pricing
              </Link>
            </li>
          </ul>

          <a
            href="https://calendly.com/pragundass-ai/10min?month=2026-02"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 w-full bg-black text-white py-3 rounded-xl shadow-lg block text-center"
            onClick={closeMenu}
          >
            Book a Demo
          </a>
        </div>
      )}
    </nav>
  );
}
