import React from "react";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <p className="text-lg mb-2">Get in Touch</p>
      <div className="flex justify-center mb-2">
        <a
          href="https://www.facebook.com/avishekdhakal.26"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl mx-2 hover:text-blue-400 transition-colors duration-300"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.linkedin.com/in/abhishekdhakal1/"
          target="_blank"
          className="text-3xl mx-2 hover:text-blue-400 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/abhishekdhakal1"
          target="_blank"
          className="text-3xl mx-2 hover:text-blue-400 transition-colors duration-300"
        >
          <FaGithub />
        </a>
      </div>
      <p className="text-sm">&copy; 2024 All rights reserved</p>
    </footer>
  );
}

export default Footer;
