import React from "react";
import { FaFacebookF, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  const socialLinks = [
    {
      icon: FaFacebookF,
      url: "https://www.facebook.com/avishekdhakal.26",
      color: "text-blue-600 hover:text-blue-700",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/abhishekdhakal1/",
      color: "text-blue-500 hover:text-blue-600",
    },
    {
      icon: FaGithub,
      url: "https://github.com/abhishekdhakal1",
      color: "text-gray-300 hover:text-grey-800",
    },
    {
      icon: FaEnvelope,
      url: "mailto:abhishekdhakal1826@gmail.com",
      color: "text-red-500 hover:text-red-600",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <h3 className="text-2xl font-semibold text-center text-blue-500 mb-6">
          Let's Connect
        </h3>

        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-3xl transition-all duration-300 transform hover:scale-125 ${social.color}`}
            >
              <social.icon />
            </a>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-400 mb-2">
            &copy; {new Date().getFullYear()} Abhishek Dhakal. All Rights
            Reserved.
          </p>
          <p className="text-xs text-gray-500">
            Crafted with passion and precision
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
