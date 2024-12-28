import React from "react";
import { useNavigate } from "react-router-dom";
import profilePic from "../assets/ad.jpg";

function AboutMeSection() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <section className="bg-gray-800 flex flex-col md:flex-row items-center justify-between p-8 md:p-16 rounded-lg shadow-lg animate-fadeIn">
      <div className="md:w-2/3 text-white space-y-6">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-orange-700">—</span> A Frontend Developer.{" "}
          <br />
          <span className="text-orange-700">Problem Solver.</span>
        </h1>
        <p className="text-lg">
          Hi! I'm{" "}
          <span className="text-orange-500 font-semibold">Abhishek Dhakal</span>
          , a second-year student pursuing a Bachelor's in Electronics,
          Communication, and Information Engineering at
          <span className="text-orange-500 font-semibold">
            {" "}
            IOE, Thapathali Campus
          </span>
          .
        </p>
        <p className="text-lg">
          I specialize in creating clean, responsive designs and seamless user
          experiences using <strong>React</strong> and{" "}
          <strong>Tailwind CSS</strong>.
        </p>
        <div>
          <h2 className="text-2xl font-semibold text-orange-700 mb-2">
            Skills
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>JavaScript:</strong> Proficient in building dynamic and
              interactive web applications.
            </li>
            <li>
              <strong>React:</strong> Expertise in developing frontend user
              interfaces and single-page applications.
            </li>
            <li>
              <strong>Node.js & Express:</strong> Skilled in building backend
              APIs and full-stack applications.
            </li>
            <li>
              <strong>C++:</strong> Knowledge of object-oriented programming and
              algorithms.
            </li>
            <li>
              <strong>C:</strong> Experienced in system programming and file
              handling.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-orange-700 mb-2">
            Education
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
          <p className="text-lg text-gray-400">
            Want to collaborate or learn more?
          </p>
          <button
            className="mt-2 px-6 py-3 bg-orange-700 hover:bg-orange-600 text-white font-semibold rounded-md shadow-lg"
            onClick={handleContactClick}
          >
            Contact Me
          </button>
        </div>
      </div>
      <div className="md:w-1/3 flex justify-center">
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
