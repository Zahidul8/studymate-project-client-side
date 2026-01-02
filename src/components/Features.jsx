import React from 'react';
import { FaUsers, FaClock, FaBook, FaShareAlt } from 'react-icons/fa';

const featuresData = [
  {
    icon: <FaUsers className="text-4xl text-primary mb-3" />,
    title: 'Personalized Partner Matching',
    desc: 'Find study partners who match your goals, subjects, and schedule for effective collaboration.',
  },
  {
    icon: <FaClock className="text-4xl text-primary mb-3" />,
    title: 'Schedule Sync & Reminders',
    desc: 'Sync study sessions with your partners and get timely reminders to stay on track.',
  },
  {
    icon: <FaBook className="text-4xl text-primary mb-3" />,
    title: 'Share & Discover Resources',
    desc: 'Access curated study materials and share your favorite resources with your study partners.',
  },
  {
    icon: <FaShareAlt className="text-4xl text-primary mb-3" />,
    title: 'Collaborative Learning',
    desc: 'Form study groups, collaborate on projects, and motivate each other to achieve more.',
  },
];

const Features = () => {
  return (
    <section className="bg-base-100">
      <div className="">
        <h2 className="text-3xl font-bold text-center text-primary mb-3">
          Why Choose StudyMate?
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          StudyMate helps you connect with like-minded learners, stay organized, and grow together.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, idx) => (
            <div
              key={idx}
              className="bg-base-200 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              {feature.icon}
              <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
