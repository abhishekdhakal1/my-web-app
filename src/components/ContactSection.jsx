import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gray-800 text-white flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Page Available Soon</h2>
          <p className="text-lg mb-4">
            Due to exams, I cannot give time to this page at the moment. Please
            check back later.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
