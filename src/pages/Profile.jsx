import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import { imageUploadCloudinary } from "../utils";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const Profile = () => {
  const { user, updataUserProfile } = useAuth();
  const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
   const imageFile = e.target.photo.files[0];
    try {
       setLoading(true);
   
       // 1️⃣ Upload image to Cloudinary (if user selected one)
       let photoURL = "";
       if (imageFile) {
         photoURL = await imageUploadCloudinary(imageFile);
       }
   
       // 3️⃣ Update profile
       await updataUserProfile(name, photoURL);
   
       // 4️⃣ Optional sign out
    
   
       e.target.reset();
   
       Swal.fire({
         position: "top-center",
         icon: "success",
         title: "User updated successfully",
         showConfirmButton: false,
         timer: 2000,
       });
   
     } catch (error) {
       console.error(error.message);
   
      
     } finally {
       setLoading(false);
     }
    
    }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex justify-center items-center px-4">
      <title>StudyMate | Profile</title>

      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl grid md:grid-cols-2 overflow-hidden">
        
        {/* LEFT – Profile Preview */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 text-white flex flex-col items-center justify-center">
          <img
            src={user?.photoURL}
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
          />

          <h2 className="mt-4 text-2xl font-semibold">{user?.displayName}</h2>
          <p className="text-sm opacity-80">{user?.email}</p>

          <div className="flex gap-6 mt-6 text-center">
            <div>
              <p className="text-xl font-bold">312</p>
              <p className="text-xs opacity-80">Followers</p>
            </div>
            <div>
              <p className="text-xl font-bold">48</p>
              <p className="text-xs opacity-80">Following</p>
            </div>
          </div>
        </div>

        {/* RIGHT – Edit Form */}
        <div className="p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Edit Profile
          </h3>

          <form onSubmit={handleUpdate} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl border border-base-300 focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Image URL */}
          <div>
            <label className="label">
              <span className="label-text text-gray-800 font-semibold">Photo URL</span>
            </label>
            <input
              type="file"
              name='photo'
              placeholder="Enter your photo URL"
              className="file-input input-bordered w-full border-gray-600 text-gray-800 bg-white"
            />
          </div>

            {/* Email (readonly) */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                value={user?.email || ""}
                readOnly
                className="w-full px-4 py-3 rounded-xl border bg-gray-100 text-gray-500 cursor-not-allowed"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:opacity-90 transition disabled:opacity-60"
            >
              {loading ? "Updating..." : "Update Profile"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
