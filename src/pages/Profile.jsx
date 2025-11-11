import React from "react";
import { FaCheckCircle, FaUserFriends, FaHeart } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="flex justify-center items-center my-10">
      <div className="w-80 bg-white rounded-3xl shadow-xl overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1">
        {/* Profile Image */}
        <div className="relative">
          <img
            src={
              user?.photoURL ||
              "https://i.ibb.co/Y3TjzKL/default-avatar-profile.jpg"
            }
            alt="Profile"
            className="w-full h-80 object-cover rounded-b-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition duration-500 rounded-t-3xl"></div>
        </div>

        {/* Info Section */}
        <div className="p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center justify-center gap-1">
            {user?.displayName}
            <FaCheckCircle className="text-blue-500" />
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            {user?.email}
          </p>

          <p className="mt-3 text-gray-600 text-sm">
            Collaborative learner who believes in growing through shared knowledge
          </p>

          {/* Stats */}
          <div className="flex justify-between items-center mt-5 text-gray-600">
            <div className="flex items-center gap-2">
              <FaUserFriends className="text-blue-500" />
              <span className="text-sm">312</span>
            </div>
            <div className="flex items-center gap-2">
              <FaHeart className="text-pink-500" />
              <span className="text-sm">48</span>
            </div>
            <button className="px-4 py-1.5 rounded-full bg-gray-100 hover:bg-blue-500 hover:text-white text-sm font-medium transition-all">
              Follow +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
