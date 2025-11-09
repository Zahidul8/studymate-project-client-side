import React, { useEffect, useState } from "react";

const Testimonials = () => {
    
    

    const [partnerData, setPartnerData] = useState([]);
    console.log(partnerData);

    

    useEffect(() => {
        fetch('http://localhost:3000/reviewPartner')
        .then(res => res.json())
        .then(data => {
            setPartnerData(data);
        })
    },[])
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

        {
            partnerData?.map(data => <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition duration-300 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-10">
            <img
              src={data.profileimage}
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
              {data.name}
            </h3>
            <p className="text-sm text-gray-500">{data.subject}</p>
          </div>
        </div>)
        }
     

        {/* <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition duration-300 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-10">
            <img
              src="https://i.ibb.co/6m6szxD/profile2.jpg"
              alt="User"
              className="w-20 h-20 rounded-full border-4 border-[#F8F9F7]"
            />
          </div>
          <div className="pt-12">
            <p className="text-gray-600 italic mb-4">
              “My study partner explained complex concepts simply. The
              collaboration boosted my confidence before exams!”
            </p>
            <h3 className="text-lg font-semibold text-[#DAA520]">
              Imran Hossain
            </h3>
            <p className="text-sm text-gray-500">Physics Major</p>
          </div>
        </div> */}

        {/* Testimonial 3 */}
        {/* <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition duration-300 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-10">
            <img
              src="https://i.ibb.co/p2GvQH7/profile3.jpg"
              alt="User"
              className="w-20 h-20 rounded-full border-4 border-[#F8F9F7]"
            />
          </div>
          <div className="pt-12">
            <p className="text-gray-600 italic mb-4">
              “I love how this platform connected me with people who share the
              same passion for learning. A great experience!”
            </p>
            <h3 className="text-lg font-semibold text-[#DAA520]">
              Tasnim Akter
            </h3>
            <p className="text-sm text-gray-500">Computer Science Student</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;
