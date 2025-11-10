import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FaMapMarkerAlt, FaStar, FaUserFriends } from "react-icons/fa";
import { MdOutlineSchool, MdAccessTimeFilled, MdEmail } from "react-icons/md";
import { GiLevelEndFlag } from "react-icons/gi";
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';

const DetailsPage = () => {
  const {user} = useAuth();
     const {id} = useParams();
     const [refetch, setRefetch] = useState(false)
    const [partnerData, setPartnerData] = useState({});
    const {_id,availabilityTime, email, experienceLevel, location, name, patnerCount,profileimage, rating, studyMode,subject} = partnerData;

    const newPartner = {
        name,
        profileimage,
        subject, 
        studyMode,
        availabilityTime,
        location,
        experienceLevel,
        rating,
        patnerCount,
        email,
        requesterEmail: user?.email
        
      }

   
      
      useEffect(() => {
          axios.get(`https://studymate-project-server.vercel.app/partners/${id}`)
          .then(data => {
            setPartnerData(data.data)
          })

      }, [id, refetch])
   
    const handleSendRequest = () => {

      axios.patch(`https://studymate-project-server.vercel.app/partners/${_id}`)
      .then(data => {
        console.log(data.data);
        if (data.data.matchedCount) {
             Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Request sent successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  setRefetch(!refetch);
          
        }
        
      })

      axios.post('https://studymate-project-server.vercel.app/partnerCount', newPartner)
      .then(data => {
        console.log(data.data);
        
      })

      



    }

    
    return (
        
    <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-md p-8 mt-10 ">
      {/* Header section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Profile image */}
        <img
          src={profileimage}
          alt={name}
          className="w-32 h-32 rounded-full object-cover shadow-md border-4 border-gray-100"
        />

        {/* Name and rating */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
          <div className="flex items-center justify-center md:justify-start mt-2">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < rating ? "text-yellow-400" : "text-gray-300"}
              />
            ))}
            <span className="ml-2 text-sm text-gray-500">{rating}.0 / 5</span>
          </div>
          <p className="mt-3 text-gray-500 flex items-center justify-center md:justify-start gap-2">
            <FaMapMarkerAlt className="text-indigo-600" />
            {location}
          </p>
          <p className='flex gap-2 items-center text-gray-500'> <MdEmail className='text-indigo-600' /> {email}</p>
        </div>

        {/* Button */}
        <div className="mt-4 md:mt-0">
          <button onClick={handleSendRequest} className="btn btn-primary bg-indigo-600 hover:bg-indigo-700 border-none px-6 rounded-full text-white transition-all duration-200">
            Send Partner Request
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-8"></div>

      {/* Details section */}
      <div className="grid md:grid-cols-3 gap-6 text-gray-700">
        <div className="flex items-start gap-3">
          <MdOutlineSchool className="text-indigo-600 text-2xl" />
          <div>
            <p className="text-sm text-gray-500">Subject</p>
            <p className="font-semibold">{subject}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MdAccessTimeFilled className="text-indigo-600 text-2xl" />
          <div>
            <p className="text-sm text-gray-500">Study Mode</p>
            <p className="font-semibold">{studyMode}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <FaUserFriends className="text-indigo-600 text-2xl" />
          <div>
            <p className="text-sm text-gray-500">Partner Count</p>
            <p className="font-semibold">{patnerCount}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <GiLevelEndFlag className="text-indigo-600 text-2xl" />
          <div>
            <p className="text-sm text-gray-500">Experience Level</p>
            <p className="font-semibold">{experienceLevel}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MdAccessTimeFilled className="text-indigo-600 text-2xl" />
          <div>
            <p className="text-sm text-gray-500">Availability</p>
            <p className="font-semibold">{availabilityTime}</p>
          </div>
        </div>
      </div>
    </div>
    
  );
};


export default DetailsPage;