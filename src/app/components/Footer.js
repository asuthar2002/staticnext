"use client";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#FF5733] to-[#C70039]
 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo & Brand Name */}
          <div className="w-full sm:w-1/4 text-center sm:text-left mb-6 sm:mb-0">
            <h1 className="text-2xl font-bold">Joshi Event Decor</h1>
            <p className="mt-2 text-sm text-gray-300">
              Decorating Your Special Moments
            </p>
          </div>

          {/* Contact Info */}
          <div className="w-full sm:w-1/4 text-center sm:text-left mb-6 sm:mb-0">
            <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
            <p className="text-sm text-gray-300">Phone: +91 8882723081</p>
          </div>

          {/* Social Media Links */}
          <div className="w-full sm:w-1/4 text-center sm:text-left mb-6 sm:mb-0">
            <h3 className="font-semibold text-lg mb-2">Chat With Us</h3>
            <div className="flex justify-center sm:justify-start space-x-4">
              {/* WhatsApp Link */}
              <a
                href="https://wa.me/918882723081?text=Hi%21%20I%27m%20interested%20in%20booking%20a%20balloon%20decoration%20for%20my%20event.%20Can%20you%20help%20me%20with%20the%20details%3F"
                target="_blank"
                className="text-gray-300 hover:text-[#3498DB] transition-colors duration-300"
              >
                <div className="flex items-center" id="home">
                  <FaWhatsapp size={24} />
                  <h2 className="ml-2">Chat on What's App</h2>
                </div>
              </a>
            </div>

            <div className="flex justify-center sm:justify-start space-x-4 mt-4">
              {/* Instagram Link */}
              <a
                href="https://www.instagram.com/ballon_decortion_bangalore?utm_source=qr&igsh=ZXRoOHYxOWdnd2Ju"
                target="_blank"
                className="text-gray-300 hover:text-[#3498DB] transition-colors duration-300"
              >
                <div className="flex items-center">
                  {/* You can add an Instagram icon here if you want */}
                  <FaInstagram size={24} />
                  <h2 className="ml-2">Follow us on Instagram</h2>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Joshi Event Decor. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
