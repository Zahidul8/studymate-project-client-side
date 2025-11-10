import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';

const MyConnections = () => {

    const {user} = useAuth()
    const [partnerData, setPartnerData] = useState([]);
 
    useEffect(() => {

        axios.get(`https://studymate-project-server.vercel.app/partnerCount?email=${user?.email}`)
        .then(data => {
            console.log(data.data);
            setPartnerData(data.data)
            
        })

    },[user])



    const handleDeleteRequest = (id) => {
      console.log(id);

      axios.delete(`https://studymate-project-server.vercel.app/partnerCount/${id}`)
      .then(data => {
        console.log(data.data);
        if (data.data.deletedCount) {
            Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Request deleted successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
          const remainingData = partnerData.filter(data => data._id !== id);
          setPartnerData(remainingData);
          
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
    partnerData.map(data =>  <tbody className="bg-white divide-y divide-gray-100 rounded-b-xl">
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
          <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-semibold transition-colors duration-200">
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
</div>

        </div>
    );
};

export default MyConnections;