import React from 'react';
import { FaStar, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router';

const FindPartnerCard = ({ data }) => {
  console.log(data);
  const { _id,profileimage, name, subject, studyMode, experienceLevel } = data;

  return (
    <div className="bg-secondary w-full shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden mx-auto">
      <div className="relative">
        <img
          src={profileimage}
          alt={name}
          className=" w-full max-h-[336px] object-cover"
        />
        <div className="absolute top-4 right-3 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {experienceLevel}
        </div>
      </div>
      <div className="p-6">
        <h2 className="top-partner-title text-black font-bold mb-2">{name}</h2>
        <p className="text-gray-500 mb-1 font-semibold">Subject: <span className='text-orange-500 text-sm'>{subject}</span></p>
        <p className="text-gray-500 mb-4 font-semibold">Study Mode: <span className='text-sky-400 text-sm'>{studyMode}</span></p>

       

        <Link to={`/DetailsPage/${_id}`} className="btn btn-primary w-full hover:scale-104 transition-transform duration-200">
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default FindPartnerCard;
