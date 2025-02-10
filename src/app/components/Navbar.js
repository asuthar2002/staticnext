"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#FF5733] to-[#C70039]
 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand */}
        <h1 className="text-2xl font-bold text-[#ECF0F1] tracking-wider">
          Joshi Event Decor
        </h1>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#ECF0F1] hover:text-[#3498DB] transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation - Single Line */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <a 
              href="" 
              onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}
              className="text-[#ECF0F1] px-3 py-2 rounded-md transition-all duration-300 
                         hover:bg-[#3498DB] hover:text-white hover:shadow-lg"
            >
              Contact Us
            </a>
          </li>
          <li>
            <a 
              href="" 
              onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}
              className="text-[#ECF0F1] px-3 py-2 rounded-md transition-all duration-300 
                         hover:bg-[#3498DB] hover:text-white hover:shadow-lg"
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="" 
              onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}
              className="text-[#ECF0F1] px-3 py-2 rounded-md transition-all duration-300 
                         hover:bg-[#3498DB] hover:text-white hover:shadow-lg"
            >
              Services
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#2C3E50] pb-4 shadow-md" id="home">
          <ul className="space-y-2 px-4">
            <li>
              <a 
                href="#home" 
                onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}
                className="block px-3 py-2 text-[#ECF0F1] hover:bg-[#3498DB] 
                           hover:text-white rounded-md transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}
                className="block px-3 py-2 text-[#ECF0F1] hover:bg-[#3498DB] 
                           hover:text-white rounded-md transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}
                className="block px-3 py-2 text-[#ECF0F1] hover:bg-[#3498DB] 
                           hover:text-white rounded-md transition-colors duration-300"
              >
                Services
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
