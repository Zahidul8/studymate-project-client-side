import React, { useEffect, useState } from "react";
import partnerimage1 from '../assets/partnerimage1.jpg'
import partnerimage2 from '../assets/partnerimage2.jpg'
import partnerimage3 from '../assets/partnerimage3.jpg'

const Testimonials = () => {
    
    

    // const [partnerData, setPartnerData] = useState([]);
    // console.log(partnerData);

    // useEffect(() => {
    //     fetch('https://studymate-project-server.vercel.app/reviewPartner')
    //     .then(res => res.json())
    //     .then(data => {
    //         setPartnerData(data);
    //     })
    // },[])
  return (
    <section className="bg-[#D6F4ED] py-12 px-6 rounded-2xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A1A] mb-3">
        TESTIMONIALS
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Hear what our learners say about their study partners and experience.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Testimonial 1 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition duration-300 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-10">
            <img
              src={partnerimage1}
              alt="User"
              className="w-[100px] h-[100px] object-cover rounded-full border-4 border-[#F8F9F7]"
            />
          </div>
          <div className="pt-12">
            <p className="text-gray-600 italic mb-4">
              “Studying with my partner helped me stay consistent and motivated.
              We shared goals, practiced quizzes, and improved together.”
            </p>
            <h3 className="text-lg font-semibold text-[#DAA520]">
             Taslima Haque
            </h3>
            <p className="text-sm text-gray-500">Political Science Enthusiast</p>
          </div>
        </div>
        {/* Testimonial 2 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition duration-300 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-10">
            <img
              src={partnerimage2}
              alt="User"
              className="w-[100px] h-[100px] object-cover rounded-full border-4 border-[#F8F9F7]"
            />
          </div>
          <div className="pt-12">
            <p className="text-gray-600 italic mb-4">
            “Finding a study partner through StudyMate made learning so much more fun! We kept each other accountable and celebrated every little progress together.”
            </p>
            <h3 className="text-lg font-semibold text-[#DAA520]">
            Sakib Alamin
            </h3>
            <p className="text-sm text-gray-500">Accounting Enthusiast</p>
          </div>
        </div>
        {/* Testimonial 3 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition duration-300 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-10">
            <img
              src={partnerimage3}
              alt="User"
              className="w-[100px] h-[100px] object-cover rounded-full border-4 border-[#F8F9F7]"
            />
          </div>
          <div className="pt-12">
            <p className="text-gray-600 italic mb-4">
              “I used to struggle staying focused alone, but with my StudyMate partner, studying feels easier and more organized. We plan sessions, share notes, and keep each other on track.”
            </p>
            <h3 className="text-lg font-semibold text-[#DAA520]">
              Mehjabin Chowdhury
            </h3>
            <p className="text-sm text-gray-500">Economics Enthusiast</p>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Testimonials;
