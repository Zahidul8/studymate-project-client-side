import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useAuth from '../hooks/useAuth';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { FaStar, FaMapMarkerAlt, FaBook } from 'react-icons/fa';

const COLORS = ['#3B82F6'];

const DashboardHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [loading, setLoading] = useState(true);
  const [partnerRequests, setPartnerRequests] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    setLoading(true);
    axiosSecure
      .get(`/partnerCount?email=${user.email}`)
      .then(res => {
        setPartnerRequests(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [user, axiosSecure]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const pieData = [
    {
      name: 'Partner Requests',
      value: partnerRequests.length,
    },
  ];

  return (
    <div className="p-6 space-y-8">

      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          Partner Requests Dashboard
        </h2>
        <p className="text-gray-500">
          Overview of incoming study partner requests
        </p>
      </div>

      {/* PIE CHART */}
      <div className="bg-white rounded-2xl shadow p-6 w-full md:w-1/2">
        <h3 className="text-lg font-semibold mb-4">
          Total Partner Requests
        </h3>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={3}
                label={({ value }) => `${value}`}
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <p className="text-center text-sm text-gray-500 mt-2">
          Total Requests: <span className="font-semibold">{partnerRequests.length}</span>
        </p>
      </div>

      {/* Partner Request List */}
      {partnerRequests.length === 0 ? (
        <div className="bg-white rounded-2xl shadow p-10 text-center text-gray-500">
          No partner requests found
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {partnerRequests.map(partner => (
            <div
              key={partner._id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition p-5 flex gap-4"
            >
              {/* Image */}
              <img
                src={partner.profileimage}
                alt={partner.name}
                className="w-20 h-20 rounded-full object-cover border"
              />

              {/* Info */}
              <div className="flex-1 space-y-1">
                <h3 className="text-lg font-semibold">
                  {partner.name}
                </h3>

                <p className="text-sm text-gray-600 flex items-center gap-1">
                  <FaBook /> {partner.subject}
                </p>

                <p className="text-sm text-gray-600">
                  {partner.studyMode} • {partner.availabilityTime}
                </p>

                <p className="text-sm text-gray-600 flex items-center gap-1">
                  <FaMapMarkerAlt /> {partner.location}
                </p>

                <p className="text-sm text-gray-600">
                  Level: {partner.experienceLevel}
                </p>

                <p className="flex items-center gap-1 text-sm text-yellow-500">
                  <FaStar /> {partner.rating}
                </p>
              </div>

            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default DashboardHome;
