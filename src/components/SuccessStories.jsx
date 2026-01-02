import React from "react";

const successStories = [
  {
    name: "Amina Rahman",
    subject: "Mathematics",
    story: "I found a study partner through StudyMate and improved my calculus scores by 20%! We now regularly quiz each other.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rafiq Hossain",
    subject: "Programming",
    story: "Collaborating with a partner helped me finish my first React project faster and more confidently.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Nusrat Jahan",
    subject: "Languages",
    story: "Having a language partner motivated me to practice daily, and I finally passed my French speaking exam!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Tanvir Alam",
    subject: "Science",
    story: "We shared resources and explained concepts to each other. Learning together made science so much easier.",
    avatar: "https://randomuser.me/api/portraits/men/21.jpg",
  },
];

const SuccessStories = () => {
  return (
    <section className="min-h-[600px] px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-4">
          Study Partner Success Stories
        </h2>
        <p className="text-base-content/70 mb-12 max-w-2xl mx-auto">
          Real learners, real results! See how our StudyMate community achieves more together.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {successStories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-500"
            >
              {/* Avatar */}
              <img
                src={story.avatar}
                alt={story.name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-primary"
              />
              {/* Name */}
              <h3 className="text-xl font-semibold text-gray-600 mb-1">
                {story.name}
              </h3>
              {/* Subject */}
              <p className="text-primary font-medium mb-3">{story.subject}</p>
              {/* Story */}
              <p className="text-gray-600 text-sm">{story.story}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
