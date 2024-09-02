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
        <h1 className="text-4xl font-bold mb-4">Welcome</h1>
        <p className="text-xl text-red-600 mb-4 animate-fadeInOut">
          Hi, I'm Abhishek. I'm a continuous learner and innovator.
        </p>
        <p className="text-lg mb-2">
          Hi, I'm <span className="text-red-500">Abhishek Dhakal</span>, an
          Electronics and Communication student with a passion for technology
          and innovation.
        </p>
        <p className="text-lg mb-2">
          Currently pursuing my Bachelor's in Electronics, Communication, and
          Information Engineering.
        </p>
        {!isTerminalOpen && (
          <button
            onClick={() => setIsTerminalOpen(true)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Open Terminal
          </button>
        )}
      </section>
      {isTerminalOpen && <Terminal onClose={() => setIsTerminalOpen(false)} />}
    </div>
  );
}

export default HomeSection;
