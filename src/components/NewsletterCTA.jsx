import React, { useState } from "react";
import newsletterImage from "../assets/newslaer.avif"; // replace with your image

const NewsletterCTA = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      // Here you could connect to a backend or email service
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="min-h-[400px] flex items-center justify-center px-4 py-16  bg-blue-50">
      <div className=" w-full bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
        {/* Left side: text & form */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Stay Updated!
          </h2>
          <p className="text-gray-700 mb-6">
            Get study tips & partner suggestions directly to your inbox.
          </p>

          {!submitted ? (
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 text-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-500 transition"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <p className="text-green-600 font-medium mt-4">
              🎉 Thank you for subscribing! You’ll hear from us soon.
            </p>
          )}
        </div>

        {/* Right side: image */}
        <div className="flex-1">
          <img
            src={newsletterImage}
            alt="Newsletter illustration"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
