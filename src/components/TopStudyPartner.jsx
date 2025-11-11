import React from 'react';
import { Link } from 'react-router';

const TopStudyPartner = ({partner}) => {
    console.log(partner);

    const {_id,name, profileimage, experienceLevel, subject, rating} = partner;
    
      const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="text-yellow-400 text-xl">★</span>);
    }
    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-400 text-xl">☆</span>); // You can replace with a half star SVG if needed
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300 text-xl">★</span>);
    }
    return stars;
  };
    
    
    
return (
    <div className="bg-linear-to-r from-[#8ABEB9] to-[#427A76] text-white rounded-2xl shadow-2xl p-6 hover:scale-104 transform transition duration-300">
      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        <img
          src={profileimage}
          alt={name}
          className="w-[200px] h-[200px] rounded-full border-4 border-white object-cover shadow-lg"
        />
      </div>
      {/* Name */}
      <h3 className="top-partner-title font-bold text-center mb-2">{name}</h3>
      {/* Subject and Skill */}
      <p className="text-center mb-3 text-[14px] md:text-[16px]">
        <span className="font-semibold ">Subject:</span> {subject} | {experienceLevel}
      </p>
      {/* Ratings */}
      <div className="flex justify-center items-center mb-5 space-x-1">
        {renderStars(rating)}
        <span className="ml-2 text-white font-semibold">{rating}</span>
      </div>
      {/* View Profile Button */}
      <Link to={`/DetailsPage/${_id}`}
        className=" btn-primary w-full btn text-white font-semibold py-2 rounded-lg hover:bg-gray-100 hover:text-[#1A3D64] cursor-pointer transition-colors duration-300"
      >
        View Profile
      </Link>
    </div>
  );
};


export default TopStudyPartner;