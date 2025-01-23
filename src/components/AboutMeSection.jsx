import React, { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiKubernetes,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import profilePic from "../assets/ad.jpg";

function AboutMeSection() {
  const [language, setLanguage] = useState("en");

  const content = {
    en: {
      heading: "Software Engineer & Tech Innovator",
      introduction:
        "Transforming ideas into scalable digital solutions with cutting-edge technologies.",
      skillsTitle: "Technology Stack",
      timelineTitle: "Professional Journey",
      contactTitle: "Connect With Me",
      contactButton: "Get In Touch",
    },
    de: {
      heading: "Software-Entwickler & Tech-Innovator",
      introduction:
        "Umwandlung von Ideen in skalierbare digitale Lösungen mit modernsten Technologien.",
      skillsTitle: "Technologie-Stack",
      timelineTitle: "Beruflicher Weg",
      contactTitle: "Kontaktieren Sie mich",
      contactButton: "Kontakt aufnehmen",
    },
  };

  const technologies = [
    { icon: SiTypescript, name: "TypeScript" },
    { icon: FaReact, name: "React.js" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: FaNodeJs, name: "Node.js" },
    { icon: FaDocker, name: "Docker" },
    { icon: SiKubernetes, name: "Kubernetes" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: FaAws, name: "AWS" },
  ];

  const timeline = [
    {
      date: "2022",
      title: "Engineering Initiation",
      description:
        "Commenced Bachelor's in Electronics and Information Engineering in IOE",
    },
    {
      date: "2023",
      title: "Web Development Mastery Frontend",
      description:
        "Advanced React skills, building complex web applications particullary Frontend",
    },
    {
      date: "2024",
      title: "Full Stack Web Development Cloud & DevOps Focus along",
      description:
        "Deep dive into MERN stack along with cloud technologies and DevOps practices",
    },
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/abhishekdhakal1/",
      color: "text-blue-500",
    },
    {
      icon: FaGithub,
      url: "https://github.com/abhishekdhakal1",
      color: "text-gray-200",
    },
    {
      icon: FaEnvelope,
      url: "mailto:abhishekdhakal1826@gmail.com",
      color: "text-red-500",
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen p-6 md:p-12 overflow-hidden mt-16">
      <div className="absolute top-4 right-4 z-10">
        <div className="flex space-x-2">
          {["en", "de"].map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`px-3 py-1 rounded-full text-sm transition ${
                language === lang
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-500 animate-fade-in">
              {content[language].heading}
            </h1>
            <p className="text-lg text-gray-300">
              {content[language].introduction}
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative group">
              <img
                src={profilePic}
                alt="Profile"
                className="rounded-full w-48 md:w-64 h-48 md:h-64 object-top object-cover border-4 border-blue-500 transition transform group-hover:scale-105 group-hover:rotate-3"
              />
              <div className="absolute bottom-0 right-0 flex space-x-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} text-xl md:text-2xl hover:opacity-75 transition transform hover:scale-125`}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold text-blue-500 mb-6">
              {content[language].skillsTitle}
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 hover:scale-105 transition transform"
                >
                  <tech.icon className="text-3xl md:text-4xl text-blue-500 mb-2" />
                  <span className="text-xs md:text-sm text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-blue-500 mb-6">
              {content[language].timelineTitle}
            </h2>
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="border-l-4 border-blue-500 pl-4 py-3 hover:bg-gray-800 transition rounded-r-lg"
                >
                  <h3 className="text-xl font-bold text-blue-500">
                    {item.date}
                  </h3>
                  <h4 className="text-lg font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-semibold text-blue-500 mb-6">
            {content[language].contactTitle}
          </h2>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition transform hover:scale-110 shadow-lg">
            {content[language].contactButton}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutMeSection;
