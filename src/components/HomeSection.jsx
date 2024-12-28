import React, { useState } from "react";
import Terminal from "./Terminal";
import profilePic from "../assets/ad.jpg";

function HomeSection() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gray-800 text-white flex items-center justify-center">
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 text-center md:text-left w-full max-w-5xl"
      >
        <div className="md:w-2/3 animate-zoomIn">
          <h1 className="text-5xl font-bold mb-6">
            Hello, I'm <span className="text-orange-700">Abhishek Dhakal</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Let's build something exceptional together!
          </p>
          <button
            onClick={() => setIsTerminalOpen(true)}
            className="font-semibold px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            {`> Help`}
          </button>
        </div>

        <div className="md:w-1/3 flex justify-center mt-8 md:mt-0 animate-zoomIn">
          <div className="bg-gray-700 p-8 rounded-lg shadow-lg w-full max-w-md text-center opacity-100">
            <img
              src={profilePic}
              alt="Abhishek Dhakal"
              className="rounded-full w-40 h-40 object-cover object-top mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold text-white mb-4">
              Abhishek Dhakal
            </h3>
            <p className="text-gray-300 mb-6">
              A passionate developer ready to help you achieve your goals.
            </p>
            <a
              href="mailto:abhishekdhakal1826@gmail.com"
              className="block px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {isTerminalOpen && <Terminal onClose={() => setIsTerminalOpen(false)} />}
    </div>
  );
}

export default HomeSection;
