import React from "react";
import thumbnail from "../assets/dwnld.png";

function Project() {
  return (
    <section
      id="project"
      className="min-h-screen bg-gray-800 text-white flex items-start justify-start animate-zoomIn"
    >
      <div className="bg-gray-900 p-4 rounded-lg shadow-lg text-center w-1/3 sm:w-1/4 md:w-1/5 flex flex-col items-center justify-start mt-16 ml-4">
        <h3 className="text-lg font-semibold mb-2">Tic Tac Toe</h3>
        <img
          src={thumbnail}
          alt="Project Thumbnail"
          className="w-3/4 h-auto mx-auto rounded mb-3"
        />
        <p className="text-sm mb-3">Want to play TTC</p>
        <a
          href="https://tic-tac-toe-wine-six.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded"
        >
          Play
        </a>
      </div>
    </section>
  );
}

export default Project;
