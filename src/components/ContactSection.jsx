import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 10000);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gray-800 text-white flex items-center justify-center"
    >
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-left mb-1 font-semibold"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 bg-gray-700 text-white rounded"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-left mb-1 font-semibold"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 bg-gray-700 text-white rounded"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-left mb-1 font-semibold"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-2 bg-gray-700 text-white rounded"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div>
            <h3 className="text-lg font-bold mb-2 text-green-500">
              सन्देश पठाइयो
            </h3>
            <p className="text-sm">धन्यवाद</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
