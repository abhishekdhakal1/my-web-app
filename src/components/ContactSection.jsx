import React from "react";
import { FaLocationPin, FaPhone, FaEnvelope } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact" className="section py-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
      <form
        action="https://formspree.io/f/{your-form-id}"
        method="POST"
        className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        <label htmlFor="name" className="block font-semibold mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

        <label htmlFor="email" className="block font-semibold mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

        <label htmlFor="message" className="block font-semibold mb-2">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        ></textarea>

        <button
          type="submit"
          className="bg-orangered text-white py-2 px-4 rounded hover:bg-darkred"
        >
          Send Message
        </button>
      </form>
      <div className="contact-info mt-8 text-gray-700">
        <p className="flex items-center mb-4">
          <FaLocationPin className="text-xl mr-2" /> Gaindakot, Nawalpur, Nepal
        </p>
        <p className="flex items-center mb-4">
          <FaPhone className="text-xl mr-2" /> +977 9864569197
        </p>
        <p className="flex items-center">
          <FaEnvelope className="text-xl mr-2" /> abhishekdhakal1826@gmail.com
        </p>
      </div>
    </section>
  );
};

export default Contact;
