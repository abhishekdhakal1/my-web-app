import React from "react";

function AboutMeSection() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-800 text-white p-5">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-4 text-orange-700">
          About Me
        </h2>
        <p className="text-lg mb-6">
          Hello! I'm Abhishek Dhakal, a student pursuing a Bachelor's degree in
          Electronics, Communication, and Information Engineering at the
          Institute of Engineering (IOE), Thapathali Campus. First Year.
        </p>
        <h3 className="text-2xl font-semibold mb-2 text-orange-700">
          Education
        </h3>
        <p className="mb-4">
          <strong>
            Bachelor in Electronics, Communication, and Information Engineering
          </strong>
          <br />
          Institute of Engineering (IOE), Thapathali Campus
          <br />
          Expected Graduation: 2027
        </p>
        <h3 className="text-2xl font-semibold mb-2 text-orange-700">Skills</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>JavaScript:</strong> Building interactive web applications
            and working with frameworks and libraries.
          </li>
          <li>
            <strong>React, Express, Node.js:</strong> Developing full-stack
            applications with React, Express, and Node.js.
          </li>
          <li>
            <strong>C++:</strong> Object-oriented programming and algorithm
            design.
          </li>
          <li>
            <strong>C:</strong> System programming, file handling, and data
            structures.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutMeSection;
