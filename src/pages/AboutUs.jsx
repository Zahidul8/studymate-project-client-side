import React from "react";
import aboutImage from "../assets/about-us.jpg"; // Add a relevant image

const AboutUs = () => {
  return (
    <section className="min-h-screen bg-base-100 py-20 transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Image */}
        <div className="lg:w-1/2 w-full">
          <img
            src={aboutImage}
            alt="About StudyMate"
            className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
          />
        </div>

        {/* Right: Text content */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h1 className="text-4xl font-bold text-primary mb-4 transition-colors duration-500">
            About StudyMate
          </h1>
          <p className="text-base-content/80 mb-6 transition-colors duration-500">
            StudyMate is a platform dedicated to helping students find compatible study partners, share resources, and improve learning outcomes. We believe that studying together can be more effective, motivating, and enjoyable.
          </p>

          <h2 className="text-2xl font-semibold text-primary mb-2 transition-colors duration-500">
            Our Mission
          </h2>
          <p className="text-base-content/80 mb-4 transition-colors duration-500">
            To connect learners with like-minded study partners and provide tools and resources that make studying smarter and more collaborative.
          </p>

          <h2 className="text-2xl font-semibold text-primary mb-2 transition-colors duration-500">
            Our Vision
          </h2>
          <p className="text-base-content/80 mb-4 transition-colors duration-500">
            To create a global community of motivated learners who support and inspire each other to achieve their academic goals.
          </p>

          <h2 className="text-2xl font-semibold text-primary mb-2 transition-colors duration-500">
            Our Values
          </h2>
          <ul className="text-base-content/80 list-disc list-inside space-y-2">
            <li>Collaboration: Learning is better together.</li>
            <li>Motivation: Encourage consistent growth.</li>
            <li>Inclusivity: Open to learners of all backgrounds.</li>
            <li>Innovation: Use tools and techniques to make studying effective.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
