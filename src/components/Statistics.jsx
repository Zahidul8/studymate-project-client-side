import React from "react";

const stats = [
  { label: "Active Study Partners", value: "1,250+" },
  { label: "Study Sessions Completed", value: "4,800+" },
  { label: "Subjects Covered", value: "50+" },
  { label: "Resources Shared", value: "2,300+" },
];

const Statistics = () => {
  return (
    <section className="min-h-[300px] px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">Our Impact</h2>
        <p className="text-white mb-10">
          See how StudyMate is helping students collaborate and succeed.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-3xl text-gray-800 font-bold mb-2">{stat.value}</h3>
              <p className="text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
