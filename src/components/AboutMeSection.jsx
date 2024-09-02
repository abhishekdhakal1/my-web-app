import React from "react";

function AvailableSoonSection() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-800 text-white text-center p-5">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-orange-500">
          Page Available Soon
        </h2>
        <p className="mb-6 text-lg">
          Due to exams, I cannot give time to this page right now. I am working
          hard to bring new content and features as soon as possible.
        </p>
        <p className="text-sm">
          Stay tuned for updates! If you have any questions, feel free to{" "}
          <a
            href="mailto:abhishekdhakal1826@gmail.com"
            className="text-orange-500 underline"
          >
            contact us
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default AvailableSoonSection;
