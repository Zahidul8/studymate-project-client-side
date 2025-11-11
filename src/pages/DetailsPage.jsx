import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { FaMapMarkerAlt, FaStar, FaUserFriends } from "react-icons/fa";
import { MdOutlineSchool, MdAccessTimeFilled, MdEmail } from "react-icons/md";
import { GiLevelEndFlag } from "react-icons/gi";
// import axios from 'axios';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import LoadingSpinner from '../components/LoadingSpinner';
import useAxiosSecure from '../hooks/useAxiosSecure';

const DetailsPage = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [refetch, setRefetch] = useState(false);
  const modalRef = useRef();
  const messageRef = useRef();
  const [partnerData, setPartnerData] = useState({});
  const { _id, availabilityTime, email, experienceLevel, location, name, patnerCount, profileimage, rating, studyMode, subject } = partnerData;

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
    axiosSecure.get(`/partners/${id}`)
      .then(data => {
        setPartnerData(data.data)
        setLoading(false)
      })

  }, [id, refetch,axiosSecure])

  const handleSendRequest = (e) => {
    e.preventDefault();
    setSuccess(true);
    axiosSecure.patch(`/partners/${_id}`, newPartner)
      .then(data => {
        console.log(data.data);
        if (data.data.matchedCount) {
          messageRef.current.value = "";
          modalRef.current.close();
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


    if (success) {
      messageRef.current.value = "";
      modalRef.current.close();
      Swal.fire({
        icon: "error",
        text: "You have already sent a request to this partner.",
      });



    }



    axiosSecure.post('/partnerCount', newPartner)
      .then(data => {
        console.log(data.data);

      })





  }


  if (loading) {
    return <LoadingSpinner></LoadingSpinner>

  }


  return (

    <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-md p-8 my-10 ">
      <title>StudyMate-Details</title>
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
          <button onClick={() => modalRef.current.showModal()} className="btn  bg-indigo-600 hover:bg-indigo-700 border-none px-6 rounded-full text-white transition-all duration-200">
            Send Partner Request
          </button>

         {/* message modal  */}
          <dialog ref={modalRef} className="modal  modal-bottom sm:modal-middle">
            <div className="modal-box bg-white">
              <h3 className="text-xl font-semibold mb-2">Send a Message to {partnerData.name}</h3>
              <form onSubmit={handleSendRequest}>
                <textarea
                  ref={messageRef}
                  className="textarea textarea-bordered w-full resize-none "
                  placeholder="Write a short message..."
                  required
                ></textarea>
                <button className='btn btn-primary mt-6 mx-auto block'>Send</button>
              </form>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
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