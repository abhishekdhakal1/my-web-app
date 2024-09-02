import React from "react";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <p className="text-lg mb-2">Get in Touch</p>
      <div className="flex justify-center mb-2">
        <a
          href="https://www.facebook.com/avishekdhakal.26"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-3xl mx-2 hover:text-blue-400 transition-colors duration-300"
        >
          <FaFacebookF />
        </a>
      </div>
      <p className="text-sm">&copy; 2024 All rights reserved</p>
    </footer>
  );
}

export default Footer;
