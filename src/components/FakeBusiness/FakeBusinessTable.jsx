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
  ]);

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Table */}
      <div className="overflow-x-auto border-[#EB5F8C] rounded-2xl shadow-md">
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
