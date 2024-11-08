import React, { useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa';

const FakeBusinessTable = () => {
  const [businessData, setBusinessData] = useState([
    {
      businessName: 'Beauty Minds Salon',
      website: 'example.com',
      phone: '0501234567',
      address: 'Dubai, Sheikh Zayed Road',
    },
    // Add more entries for better testing on mobile view
    {
      businessName: 'Glamour Spa',
      website: 'glamourspa.com',
      phone: '0509876543',
      address: 'Abu Dhabi, Al Maryah Island',
    },
  ]);

  return (
    <div className="p-4 sm:p-6 lg:p-8 lg:ml-20">
      {/* Mobile View as Cards */}
      <div className="block sm:hidden space-y-4">
        {businessData.map((row, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 border border-[#EB5F8C] mb-2"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">{row.businessName}</h3>
              <button className="text-black">
                <FaEllipsisV />
              </button>
            </div>
            <p className="text-sm">Website: {row.website}</p>
            <p className="text-sm">Phone: {row.phone}</p>
            <p className="text-sm">Address: {row.address}</p>
            <div className="flex justify-end mt-2">
              <button className="text-black hover:text-indigo-600 transition-all">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Table for larger screens */}
      <div className="hidden sm:block overflow-x-auto border-[#EB5F8C] rounded-2xl shadow-md">
        <table className="w-full border-separate border-spacing-0 border-[#EB5F8C] rounded-lg">
          <thead className="bg-[#EB5F8C] text-white">
            <tr>
              <th className="px-4 py-2 text-left">Business Name</th>
              <th className="px-4 py-2 text-left">Website</th>
              <th className="px-4 py-2 text-left">Phone Number</th>
              <th className="px-4 py-2 text-left">Address</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {businessData.map((row, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                } text-gray-700 border-b hover:bg-gray-100 transition-all`}
              >
                <td className="px-4 py-2">{row.businessName}</td>
                <td className="px-4 py-2">{row.website}</td>
                <td className="px-4 py-2">{row.phone}</td>
                <td className="px-4 py-2">{row.address}</td>
                <td className="px-2 py-2 flex space-x-2 justify-end">
                  <button className="text-black p-2 hover:text-indigo-600 transition-all">
                    <FaEllipsisV />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FakeBusinessTable;

