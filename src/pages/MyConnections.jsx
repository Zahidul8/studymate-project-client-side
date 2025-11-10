import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';

const MyConnections = () => {

  const { user } = useAuth()
  const modalRef = useRef();
  const [partnerData, setPartnerData] = useState([]);
  const [selectedPartner, setSelectedPartner] = useState({});
  const [refecth, setRefetch] = useState(false);

  useEffect(() => {

    axios.get(`https://studymate-project-server.vercel.app/partnerCount?email=${user?.email}`)
      .then(data => {
        console.log(data.data);
        setPartnerData(data.data)

      })

  }, [user,refecth])



  const handleDeleteRequest = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://studymate-project-server.vercel.app/partnerCount/${id}`)
          .then(data => {
            console.log(data.data);
            if (data.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your request had been deleted.",
                icon: "success"
              });
              const remainingData = partnerData.filter(data => data._id !== id);
              setPartnerData(remainingData);

            }

          })



      }
    });




  }


  const handleUpdate = (e) => {
    e.preventDefault();
    const subject = e.target.subject.value;
    const studyMode = e.target.studyMode.value;
    console.log(subject, studyMode);
    const updatedData = {subject, studyMode};

    axios.patch(`https://studymate-project-server.vercel.app/partnerCount/${selectedPartner._id}`, updatedData)
    .then(data => {
      console.log(data.data);
      if (data.data.matchedCount) {
          Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "Changes saved successfully",
                  showConfirmButton: false,
                  timer: 1500
                });

                modalRef.current.close();
                setRefetch(!refecth);
        
      }
      
    })
    
  }


  return (
    <div className='my-10'>
      <div className="overflow-x-auto p-6 bg-[#f9faff] rounded-3xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-[#0C2B4E]">My Partner Requests</h2>
        <table className="min-w-full divide-y divide-gray-200">
          {/* Table Head */}
          <thead className="bg-[#0C2B4E] text-white rounded-t-xl">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Partner</th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Subject</th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Study Mode</th>
              <th className="px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider">Update</th>
              <th className="px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider">Delete</th>
            </tr>
          </thead>

          {/* Table Body */}

          {
            partnerData.map(data => <tbody key={data._id} className="bg-white divide-y divide-gray-100 rounded-b-xl">
              <tr className="hover:bg-[#e6f0ff] transition-colors duration-200">
                <td className="px-6 py-4 flex items-center gap-4">
                  <img
                    src={data.profileimage}
                    alt="Partner"
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#0C2B4E]"
                  />
                  <span className="font-medium text-gray-900">{data.name}</span>
                </td>
                <td className="px-6 py-4 text-gray-800 font-medium">{data.subject}</td>
                <td className="px-6 py-4 text-gray-800 font-medium">{data.studyMode}</td>
                <td className="px-6 py-4 text-center">
                  <button onClick={() => {
                    modalRef.current.showModal()
                    setSelectedPartner(data);
                  }} className="px-4 py-2 cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-semibold transition-colors duration-200">
                    Update
                  </button>
                 
                </td>
                <td className="px-6 py-4 text-center">
                  <button onClick={() => handleDeleteRequest(data._id)} className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg cursor-pointer font-semibold transition-colors duration-200">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>)
          }

          
        </table>
         <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                      <form
                        onSubmit={handleUpdate}
                        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto space-y-6 border border-gray-100"
                      >
                        <h2 className="text-2xl font-bold text-[#0C2B4E] mb-6 text-center">
                          Update Partner Request
                        </h2>

                        {/* Subject Field */}
                        <div className="flex flex-col text-left">
                          <label className="text-[18px] font-semibold text-gray-700 mb-2">
                            Subject
                          </label>
                          <input
                            name="subject"
                            defaultValue={selectedPartner?.subject}
                             onChange={(e)=> {
                              setSelectedPartner({...selectedPartner, subject: e.target.value})
                            }}
                            placeholder="Enter subject"
                            className="input input-bordered w-full bg-gray-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0C2B4E] rounded-lg p-3 text-gray-800"
                            required
                          />
                        </div>

                        {/* Study Mode Field */}
                        <div className="flex flex-col text-left">
                          <label className="text-[18px] font-semibold text-gray-700 mb-2">
                            Study Mode
                          </label>
                          <select
                            name="studyMode"
                            value={selectedPartner?.studyMode}
                            onChange={(e)=> {
                              setSelectedPartner({...selectedPartner, studyMode: e.target.value})
                            }}
                            className="select select-bordered w-full bg-gray-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0C2B4E] rounded-lg p-3 text-gray-800"
                            required
                          >
                            <option value="Online">Online</option>
                            <option value="Offline">Offline</option>
                          </select>
                        </div>

                        {/* Save Button */}
                        <button
                          type="submit"
                          className="w-full py-3 bg-[#0C2B4E] text-white font-semibold rounded-lg hover:bg-[#103865] transition duration-200 shadow-md cursor-pointer"
                        >
                          Save Changes
                        </button>
                      </form>

                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn">Cancel</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
      </div>

    </div>
  );
};

export default MyConnections;