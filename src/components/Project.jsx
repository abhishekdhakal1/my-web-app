import React from "react";
import { FaGamepad, FaLink, FaGithub } from "react-icons/fa";
import thumbnail from "../assets/dwnld.png";

function ProjectSection() {
  const projects = [
    {
      title: "Tic Tac Toe",
      description: "Interactive browser-based Tic Tac Toe game",
      thumbnail: thumbnail,
      liveLink: "https://tic-tac-toe-wine-six.vercel.app/",
      githubLink: "https://github.com/abhishekdhakal1/tic-tac-toe",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 mt-6"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-500 mb-12">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden transform transition hover:scale-105"
            >
              <div className="relative">
                <img
                  src={project.thumbnail}
                  alt={`${project.title} Thumbnail`}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition"
                  >
                    <FaLink className="text-white" />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition"
                  >
                    <FaGithub className="text-white" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-500 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition"
                >
                  <FaGamepad />
                  Play Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
