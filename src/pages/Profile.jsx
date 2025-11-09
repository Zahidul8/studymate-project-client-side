import React from 'react';
import { FaEnvelope, FaUserCircle, FaCheckCircle, FaUsers, FaHeart } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth()

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="w-80 bg-white rounded-2xl shadow-lg overflow-hidden text-center p-6 ">
        {/* Profile Image */}
        <div className="bg-gray-100">
          {
            <img
              src={user?.photoURL}
              alt="Profile"
              className="w-full h-64 object-cover rounded-2xl"
            />
           }
        </div>

        {/* Info Section */}
        <div className="py-6">
          <h2 className="text-lg font-semibold flex items-center justify-center gap-1">
            {user?.displayName}
            <FaCheckCircle className="text-blue-500" />
          </h2>
          <p>
            {user?.email}
          </p>
         
            
        </div>
      </div>
    </div>
  );
};

export default Profile;
