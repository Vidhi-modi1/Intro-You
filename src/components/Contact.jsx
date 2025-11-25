import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../styles/swiper-custom.css";

import FooterApp from "./FooterApp";
import HeaderApp from "./HeaderApp";

// ✅ Environment variable usage
// const API_URL = `${import.meta.env.VITE_NEXT_PUBLIC_API_URL || "https://lvpro.live/introyou/api/"}contact-us`;
const API_URL = `${import.meta.env.VITE_NEXT_PUBLIC_API_URL || "https://console.intro-you.com/api/"}contact-us`;

export default function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");
    setError("");

    try {
      const form = new FormData();
      Object.keys(formData).forEach((key) => {
        form.append(key, formData[key]);
      });

      const res = await fetch(API_URL, {
        method: "POST",
        body: form,
      });

      const data = await res.json();

      if (data.status) {
        setResponseMsg(data.message || "Thank you for contacting us!");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <HeaderApp />

      {/* Contact Section */}
      <section className="flex-grow flex justify-center items-center py-16 px-4 bg-gray-50">
        <div className="contact-container max-w-4xl w-full bg-white shadow-lg rounded-2xl p-6">
          <div className="close-btn">
          <a href="/"
              className=""
            >
            <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 329.26933 329" width="16"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg>
            </a>
          </div>
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-4 main-title">
            Get In Touch
          </h2>
          <p className="text-center text-gray-600 mb-8">
            If you have any inquiries, get in touch with us. We’ll be happy to help you.
          </p>

          <form autoComplete="off" onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 contact-row">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                required
                value={formData.first_name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                required
                value={formData.last_name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email ID"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone No (optional)"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 text-white font-medium rounded-lg transition-all duration-300 text-lg btn-main w-full"
              style={{ backgroundColor: "#820080" }}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>

          {/* ✅ Success & Error Messages */}
          {responseMsg && (
            <p className="text-center mt-6 text-green-600 font-medium">
              {responseMsg}
            </p>
          )}
          {error && (
            <p className="text-center mt-6 text-red-600 font-medium">
              {error}
            </p>
          )}
        </div>
      </section>

      {/* Footer */}
      <FooterApp />
    </div>
  );
}
