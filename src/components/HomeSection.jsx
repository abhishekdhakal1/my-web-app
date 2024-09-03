import React, { useState } from "react";
import Terminal from "./Terminal";

function HomeSection() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gray-800 text-white">
      <section
        id="home"
        className="flex flex-col items-center justify-center p-5 text-center"
      >
        <h1 className="text-4xl font-bold mb-4 animate-zoomIn">Welcome</h1>
        <p className="text-2xl text-red-600 mb-4 animate-zoomIn">
          Let's get connected!
        </p>
        <button
          onClick={() => setIsTerminalOpen(true)}
          className="absolute bottom-5 right-5 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Help
        </button>
      </section>
      {isTerminalOpen && <Terminal onClose={() => setIsTerminalOpen(false)} />}
    </div>
  );
}

export default HomeSection;
