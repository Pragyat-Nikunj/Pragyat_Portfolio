"use client";
import { useState } from "react";
import Head from "next/head";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <div className="min-h-screen px-4 py-12 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">Get in Touch</h1>
          <p className="mb-10 text-gray-400">Feel free to contact me through this form or any platform below.</p>
        </div>

        <form
          action="https://formsubmit.co/482a6a7c058fabf837a64a11507039cc"
          method="POST"
          className="max-w-3xl mx-auto bg-[#1e1e1e] p-8 rounded-xl shadow-md space-y-6"
        >
          {/* Optional: Disable CAPTCHA and redirect */}
          <input type="hidden" name="_captcha" value="false" />
         
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-gray-800 rounded-md text-white placeholder-gray-400 focus:outline-none"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-gray-800 rounded-md text-white placeholder-gray-400 focus:outline-none"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            className="w-full p-3 bg-gray-800 rounded-md text-white placeholder-gray-400 focus:outline-none"
            required
            value={formData.message}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full py-3 bg-red-500 hover:bg-red-600 rounded-md text-white font-semibold transition"
            onClick={() => toast("Thanks for reaching out! I will get back to you soon...")}
          >
            Send Message
          </button>
        </form>

        {/* Hire Me Button */}
        <div className="mt-8 text-center">
          <a
            href="mailto:pragyatnikunj@gmail.com"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition"
          >
            Hire Me!
          </a>
        </div>
      </div>
    </>
  );
}
