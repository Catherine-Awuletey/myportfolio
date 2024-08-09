"use client"; // Add this line at the top
import React, { useState } from "react";
import emailjs from "emailjs-com";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send('service_ni4l838', 'template_ks56k31', formData, 'RNADQ1D-NDjr_7Q5F')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert(`Failed to send the message: ${err.text || 'Unknown error'}`);
      });

    // Clear form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-white py-[4rem] px-5" id="Contact">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-6 bg-pink-50 rounded-lg shadow-2xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-pink-500">
          Let&apos;s Connect
        </h2>
        <div className="mb-4">
          <label className="block text-purple-700 mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="text-purple-700 w-full px-3 py-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-purple-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="text-purple-700 w-full px-3 py-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-purple-700 mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="text-purple-700 w-full px-3 py-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 border border-purple-700 text-purple-800 font-semibold rounded hover:bg-purple-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
