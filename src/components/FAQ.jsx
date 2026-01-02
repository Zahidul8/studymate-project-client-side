import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { faqData } from "../utils";

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div
      className="border-b border-gray-400 py-4 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
        <span className="text-blue-600">{isOpen ? <FiChevronUp /> : <FiChevronDown />}</span>
      </div>
      {isOpen && (
        <p className="mt-2 text-gray-700">{faq.answer}</p>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen px-4">
      <div className="">
        <h2 className="text-3xl font-bold text-primary text-center mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-700 mb-10">
          Find answers to common questions about StudyMate and how to make the most out of your study sessions.
        </p>

        {/* Fixed background FAQ container */}
        <div className="bg-gray-200 rounded-xl shadow p-6">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
