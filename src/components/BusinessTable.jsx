import React, { useState } from 'react';
import { FaSearch, FaPen, FaEllipsisV } from 'react-icons/fa';

const BusinessTable = () => {
  const [businessData, setBusinessData] = useState([
    {
      businessName: 'Beauty Minds Salon',
      branches: 10,
      subscription: 'Unlimited(299AED)',
      expireDate: '2025-07-09',
      mCredit: 0,
      active: true,
    },
    {
      businessName: 'Beauty Minds Salon',
      branches: 5,
      subscription: 'Essentials(99AED)',
      expireDate: '2025-07-09',
      mCredit: 0,
      active: false,
    },
    {
      businessName: 'Beauty Minds Salon',
      branches: 1,
      subscription: 'Essentials(99AED)',
      expireDate: '2025-07-09',
      mCredit: 0,
      active: false,
    },
    {
      businessName: 'Beauty Minds Salon Business Bay',
      branches: 1,
      subscription: 'Standard(199AED)',
      expireDate: '2025-07-09',
      mCredit: 0,
      active: true,
    },
  ]);

  // Toggle active state for a row
  const toggleActive = (index) => {
    const updatedData = businessData.map((item, idx) =>
      idx === index ? { ...item, active: !item.active } : item
    );
    setBusinessData(updatedData);
  };

  return (
    <div className="p-4 sm:p-8">
      {/* Search and New Button Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
        {/* Search Bar */}
        <div className="relative w-full sm:w-1/3">
          <input
            type="text"
            placeholder="Search by business name..."
            className="w-full py-2 pl-4 pr-10 border rounded-md border-gray-300 focus:outline-none"
          />
          <button className="absolute right-0 top-0 text-white bg-[#5546A0] p-3 rounded-md">
            <FaSearch />
          </button>
        </div>
        {/* New Button */}
        <button className="w-full sm:w-auto flex items-center bg-[#5546A0] text-white py-2 px-4 rounded-full hover:bg-[#5546A0]">
          + New
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border-[#EB5F8C] rounded-2xl">
        <table className="w-full border-separate border-spacing-0 border-[#EB5F8C] rounded-lg text-sm sm:text-base">
          <thead className="bg-[#EB5F8C] text-white">
            <tr>
              <th className="px-2 sm:px-4 py-2 text-left">Business Name</th>
              <th className="px-2 sm:px-4 py-2 text-left hidden sm:table-cell">Branches Count</th>
              <th className="px-2 sm:px-4 py-2 text-left hidden lg:table-cell">Subscription</th>
              <th className="px-2 sm:px-4 py-2 text-left hidden sm:table-cell">Expire Date</th>
              <th className="px-2 sm:px-4 py-2 text-left hidden lg:table-cell">M-Credit</th>
              <th className="px-2 sm:px-4 py-2 text-left">Active</th>
              <th className="px-2 sm:px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {businessData.map((row, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                } text-gray-700 border-b hover:bg-gray-100`}
              >
                <td className="px-2 sm:px-4 py-2">{row.businessName}</td>
                <td className="px-2 sm:px-4 py-2 hidden sm:table-cell">{row.branches}</td>
                <td className="px-2 sm:px-4 py-2 hidden lg:table-cell">{row.subscription}</td>
                <td className="px-2 sm:px-4 py-2 hidden sm:table-cell">{row.expireDate}</td>
                <td className="px-2 sm:px-4 py-2 hidden lg:table-cell">{row.mCredit}</td>
                <td className="px-2 sm:px-4 py-2">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={row.active}
                      onChange={() => toggleActive(index)}
                      className="sr-only"
                    />
                    <div className="relative">
                      <div
                        className={`block w-8 sm:w-10 h-5 sm:h-6 rounded-full transition ${
                          row.active ? 'bg-green-400' : 'bg-gray-300'
                        }`}
                      ></div>
                      <div
                        className={`absolute left-1 top-1 w-3 sm:w-4 h-3 sm:h-4 bg-white rounded-full shadow transition transform ${
                          row.active ? 'translate-x-4 sm:translate-x-4' : ''
                        }`}
                      ></div>
                    </div>
                  </label>
                </td>
                <td className="px-2 sm:px-4 py-4 flex space-x-2">
                  <button className="text-black">
                    <FaPen />
                  </button>
                  <button className="text-black">
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

export default BusinessTable;


