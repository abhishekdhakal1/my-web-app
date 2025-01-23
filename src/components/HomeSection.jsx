import React, { useState } from "react";
import Terminal from "./Terminal";
import profilePic from "../assets/ad.jpg";

function HomeSection() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl animate-pulse"></div>
      
      <section 
        id="home"
        className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-16 text-center md:text-left w-full max-w-5xl"
      >
        <div className="md:w-2/3 space-y-6 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4">
            Hello, I'm <span className="text-orange-500">Abhishek Dhakal</span>
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Crafting innovative solutions with passion and precision.
          </p>
          <div className="flex space-x-4 justify-center md:justify-start">
            <button
              onClick={() => setIsTerminalOpen(true)}
              className="flex items-center gap-2 font-semibold px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
            >
              <span>{'> '}</span>
              Help
            </button>
            <a
              href="#projects"
              className="flex items-center gap-2 font-semibold px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition transform hover:scale-105"
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="md:w-1/3 flex justify-center mt-8 md:mt-0 animate-fade-in-right">
          <div className="bg-gray-800/60 backdrop-blur-lg p-6 rounded-xl shadow-2xl w-full max-w-md text-center">
            <div className="relative mb-6">
              <img
                src={profilePic}
                alt="Abhishek Dhakal"
                className="rounded-full w-40 h-40 object-cover object-top mx-auto border-4 border-blue-500 shadow-lg"
              />
              <div className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Abhishek Dhakal
            </h3>
            <p className="text-gray-300 mb-6">
              Innovative developer transforming ideas into digital reality.
            </p>
            <a
              href="mailto:abhishekdhakal1826@gmail.com"
              className="block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {isTerminalOpen && <Terminal onClose={() => setIsTerminalOpen(false)} />}
    </div>
  );
}

export default HomeSection;