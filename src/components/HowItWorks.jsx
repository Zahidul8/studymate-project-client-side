import React from 'react';
import groupImage from '../assets/groupImage.jpg';
import { FaUserPlus, FaSearch, FaComments, FaChartLine } from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <section className="bg-[#A8BBA3] p-8 rounded-2xl shadow-lg">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* Left: Image */}
        <div className="md:w-1/2">
          <figure>
            <img
              className="rounded-2xl shadow-xl object-cover w-full"
              src={groupImage}
              alt="Study group"
            />
          </figure>
        </div>

        {/* Right: Steps */}
        <div className="bg-[#EFECE3] rounded-2xl flex-1 p-8">
          <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center md:text-left">
            How It Works
          </h2>

          <div className="space-y-5">
            {/* Step 1 */}
            <div className="flex items-start gap-4 hover:bg-white hover:shadow-md transition-all duration-300 p-3 rounded-xl">
              <div className="bg-white p-3 rounded-full shadow-md">
                <FaUserPlus className="text-3xl text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">1. Create Your Profile</h3>
                <p className="text-gray-600 text-sm">
                  Sign up, add your subjects, skills, and preferred study time to let others find you easily.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4 hover:bg-white hover:shadow-md transition-all duration-300 p-3 rounded-xl">
              <div className="bg-white p-3 rounded-full shadow-md">
                <FaSearch className="text-3xl text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">2. Find Study Partners</h3>
                <p className="text-gray-600 text-sm">
                  Explore profiles by subject, rating, and experience level to find your ideal match.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4 hover:bg-white hover:shadow-md transition-all duration-300 p-3 rounded-xl">
              <div className="bg-white p-3 rounded-full shadow-md">
                <FaComments className="text-3xl text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">3. Connect & Collaborate</h3>
                <p className="text-gray-600 text-sm">
                  Start chatting, share notes, and schedule online or offline study sessions together.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-4 hover:bg-white hover:shadow-md transition-all duration-300 p-3 rounded-xl">
              <div className="bg-white p-3 rounded-full shadow-md">
                <FaChartLine className="text-3xl text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">4. Learn & Grow</h3>
                <p className="text-gray-600 text-sm">
                  Track progress, exchange feedback, and grow your knowledge with your partner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
