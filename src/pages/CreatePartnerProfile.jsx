import React from 'react';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const CreatePartnerProfile = () => {
    const {user} = useAuth();

    const handleCreatePartner = (e) => {

        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const profileimage = form.profileimage.value;
        const subject = form.subject.value;
        const studyMode = form.studyMode.value;
        const availabilityTime = form.availability.value;
        const location = form.location.value;
        const experienceLevel = form.experienceLevel.value;
        const rating = form.rating.value;
        const partnerCount = form.partnerCount.value;
        const email = form.email.value;
    
        console.log('partner created',name, profileimage, subject, studyMode, availabilityTime, location, experienceLevel, rating, partnerCount, email);
        
        const newPartner = {
            name,
            profileimage,
            subject,
            studyMode,
            availabilityTime, 
            location,
            experienceLevel,
            rating,
            partnerCount,
            email
        }

        axios.post('http://localhost:3000/partners',newPartner)
        .then(data => {
            console.log(data.data);
            if (data.data.insertedId) {
                  Swal.fire({
                          position: "top-center",
                          icon: "success",
                          title: "Profile created successfully",
                          showConfirmButton: false,
                          timer: 2000
                        });
                        e.target.reset();
                
            }
            
        })


    }
    

     return (
    <div className="max-w-4xl mx-auto bg-[#F8F9F7] shadow-xl rounded-2xl p-8 my-10 border border-[#E0E0E0]">
      {/* Header */}
      <h2 className="text-3xl font-bold text-center text-[#1A1A1A] mb-2">
        Create Study Partner Profile
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Fill out the form below to create your study partner profile.
      </p>

      {/* Form */}
      <form onSubmit={handleCreatePartner} className="space-y-6">
        {/* Name & Profile Image */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Profile Image URL
            </label>
            <input
              type="text"
              name="profileimage"
              placeholder="Paste your profile image link"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] outline-none"
            />
          </div>
        </div>

        {/* Subject & Study Mode */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="e.g. English, Math, Programming"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Study Mode
            </label>
            <select
              name="studyMode"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] outline-none"
            >
              <option value="">Select mode</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>
        </div>

        {/* Availability & Location */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Availability Time
            </label>
            <input
              type="text"
              name="availability"
              placeholder="e.g. Evening 6–9 PM"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="e.g. Dhaka, Mirpur"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] outline-none"
            />
          </div>
        </div>

        {/* Experience & Rating */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Experience Level
            </label>
            <select
              name="experienceLevel"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] outline-none"
            >
              <option value="">Select level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rating
            </label>
            <input
              type="number"
              name="rating"
              placeholder="1–5"
              min="1"
              max="5"
              step="0.1"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] outline-none"
            />
          </div>
        </div>

        {/* Partner Count & Email */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Partner / Connections Count
            </label>
            <input
              type="number"
              name="partnerCount"
              value={0}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-lg text-gray-600 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email (Your Account)
            </label>
            <input
              type="email"
              name="email"
              value={user?.email}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-lg text-gray-600 cursor-not-allowed"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#DAA520] hover:bg-[#C4971D] text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
          >
            Create Profile
          </button>
        </div>
      </form>
    </div>
  );
};


export default CreatePartnerProfile;