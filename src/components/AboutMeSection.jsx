import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import profilePic from "../assets/ad.jpg";

function AboutMeSection() {
  const [language, setLanguage] = useState("en");
  const [toggleState, setToggleState] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "de" : "en"));
    setToggleState((prev) => !prev);
  };

  const content = {
    en: {
      heading: "— A Frontend Developer.",
      subHeading: "Problem Solver.",
      introduction:
        "Hi! I'm Abhishek Dhakal, a second-year student pursuing a Bachelor's in Electronics, Communication, and Information Engineering at IOE, Thapathali Campus.",
      skills: "Skills & Tools",
      education: "Education",
      contact: "Want to collaborate or learn more?",
      button: "Contact Me",
    },
    de: {
      heading: "— Ein Frontend-Entwickler.",
      subHeading: "Problemlöser.",
      introduction:
        "Hallo! Ich bin Abhishek Dhakal, ein Student im zweiten Jahr, der einen Bachelor in Elektronik-, Kommunikations- und Informationstechnik am IOE, Thapathali Campus absolviert.",
      skills: "Fähigkeiten & Werkzeuge",
      education: "Ausbildung",
      contact: "Möchten Sie zusammenarbeiten oder mehr erfahren?",
      button: "Kontaktiere mich",
    },
  };

  const currentContent = content[language];

  return (
    <section className="bg-gray-800 flex flex-col md:flex-row items-center justify-between p-8 md:p-16 rounded-lg shadow-lg animate-zoomIn">
      <div className="md:w-2/3 text-white space-y-6">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-orange-700">{currentContent.heading}</span>
          <br />
          <span className="text-orange-700">{currentContent.subHeading}</span>
        </h1>
        <p className="text-lg">{currentContent.introduction}</p>

        <div>
          <h2 className="text-2xl font-semibold text-orange-700 mb-2">
            {currentContent.skills}
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Languages:</strong> JavaScript, TypeScript, C++, C,
              Assembly Language (ASM)
            </li>
            <li>
              <strong>Frontend Frameworks:</strong> React.js, Next.js, Tailwind
              CSS
            </li>
            <li>
              <strong>Backend & Tools:</strong> Node.js, Express.js, Redis,
              Docker, Kubernetes
            </li>
            <li>
              <strong>Cloud & DevOps:</strong> AWS, Google Cloud Platform (GCP),
              CI/CD Pipelines (basics)
            </li>
            <li>
              <strong>Database:</strong> MongoDB, PostgreSQL (currently
              learning)
            </li>
            <li>
              <strong>Version Control:</strong> Git, GitHub
            </li>
            <li>
              <strong>Testing & Monitoring:</strong> Jest (learning)
            </li>
            <li>
              <strong>Other Tools:</strong> Vite
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-orange-700 mb-2">
            {currentContent.education}
          </h2>
          <p className="text-lg">
            <strong>
              Bachelor's in Electronics, Communication, and Information
              Engineering
            </strong>
            <br />
            Institute of Engineering (IOE), Thapathali Campus
            <br />
            <span className="text-gray-400">Expected Graduation: 2027</span>
          </p>
        </div>

        <div className="mt-6">
          <p className="text-lg text-gray-400">{currentContent.contact}</p>
          <button className="mt-2 px-6 py-3 bg-orange-700 hover:bg-orange-600 text-white font-semibold rounded-md shadow-lg">
            {currentContent.button}
          </button>
        </div>
      </div>

      <div className="md:w-1/3 flex justify-center relative">
        <div className="absolute top-[-120px]">
          <button
            className="flex items-center space-x-2 px-3 py-1 bg-orange-700 text-white text-sm font-semibold rounded-md shadow hover:bg-orange-600"
            onClick={toggleLanguage}
          >
            <FaReact className="text-xl" />
            <span>{toggleState ? "Deutsch" : "English"}</span>
          </button>
        </div>
        <img
          src={profilePic}
          alt="Abhishek Dhakal"
          className="rounded-full w-96 h-96 object-cover object-top mx-auto mb-4"
        />
      </div>
    </section>
  );
}

export default AboutMeSection;
