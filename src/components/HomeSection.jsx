import React, { useState } from "react";
import Terminal from "./Terminal";

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
      </section>
      {isTerminalOpen && <Terminal onClose={() => setIsTerminalOpen(false)} />}
    </div>
  );
}

export default HomeSection;
