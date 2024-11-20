import React from "react";

const AboutMeSection = () => {
  return (
    <section className="bg-gray-800 flex flex-col md:flex-row items-center justify-between p-8 md:p-16 rounded-lg shadow-lg">
      <div className="md:w-2/3 text-white">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-orange-700">—</span> A Frontend Developer.
          <br />
          Problem Solver.
        </h1>
        <p className="text-lg mb-4">
          Hi! I'm Abhishek Dhakal, a second-year student pursuing a Bachelor's
          in Electronics, Communication, and Information Engineering at IOE,
          Thapathali Campus.
        </p>
        <p className="text-lg mb-4">
          I specialize in creating clean, responsive designs and seamless user
          experiences using React and Tailwind CSS.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-orange-700">Skills</h2>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>
            <strong>JavaScript:</strong> Proficient in building dynamic and
            interactive web applications.
          </li>
          <li>
            <strong>React:</strong> Expertise in developing frontend user
            interfaces and single-page applications.
          </li>
          <li>
            <strong>Node.js & Express:</strong> Skilled in building backend APIs
            and full-stack applications.
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
        <h2 className="text-2xl font-semibold mb-2 text-orange-700">
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
          Expected Graduation: 2027
        </p>
      </div>
      <div className="mt-8 md:mt-0 md:w-1/3">
        <img
          className="rounded-lg shadow-md object-cover w-full"
          src=""
          alt="Abhishek Dhakal"
        />
      </div>
    </section>
  );
};

export default AboutMeSection;
