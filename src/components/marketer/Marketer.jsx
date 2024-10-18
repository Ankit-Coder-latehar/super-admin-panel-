import React, { useState } from 'react';
import { FaSearch, FaPen, FaEllipsisV } from 'react-icons/fa';

const Marketer = () => {
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

  const [activePopup, setActivePopup] = useState(null); // To track which row's popup is open

  // Toggle active state for a row
  const toggleActive = (index) => {
    const updatedData = businessData.map((item, idx) =>
      idx === index ? { ...item, active: !item.active } : item
    );
    setBusinessData(updatedData);
  };

  // Toggle popup visibility for a row
  const togglePopup = (index) => {
    setActivePopup(activePopup === index ? null : index); // Toggle between opening and closing
  };

  return (
    <div className="p-8">
      {/* Search and New Button Section */}
      <div className="flex justify-between items-center mb-6">
        {/* Search Bar */}
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search by business name..."
            className="w-full py-2 pl-4 pr-10 border rounded-md border-gray-300 focus:outline-none"
          />
          <button className="absolute right-0 top-0 text-white bg-[#5546A0] rounded-md p-3">
            <FaSearch />
          </button>
        </div>
        {/* New Button */}
        <a href="/desktop23">
          <button className="flex items-center bg-[#5546A0] text-white py-2 px-4 rounded-md hover:bg-[#5546A0]">
            + New
          </button>
        </a>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border-[#EB5F8C] rounded-2xl">
        <table className="w-full border-separate border-spacing-0 border-[#EB5F8C] rounded-lg">
          <thead className="bg-[#EB5F8C] text-white">
            <tr>
              <th className="px-4 py-2 text-left">Business Name</th>
              <th className="px-4 py-2 text-left">Branches Count</th>
              <th className="px-4 py-2 text-left">Subscription</th>
              <th className="px-4 py-2 text-left">Expire Date</th>
              <th className="px-4 py-2 text-left">M-Credit</th>
              <th className="px-4 py-2 text-left">Active</th>
              <th className="px-4 py-2 text-left">Actions</th>
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
                <td className="px-4 py-2">{row.businessName}</td>
                <td className="px-4 py-2">{row.branches}</td>
                <td className="px-4 py-2">{row.subscription}</td>
                <td className="px-4 py-2">{row.expireDate}</td>
                <td className="px-4 py-2">{row.mCredit}</td>
                <td className="px-4 py-2">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={row.active}
                      onChange={() => toggleActive(index)}
                      className="sr-only"
                    />
                    <div className="relative">
                      <div
                        className={`block w-10 h-6 rounded-full transition ${
                          row.active ? 'bg-green-400' : 'bg-gray-300'
                        }`}
                      ></div>
                      <div
                        className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition transform ${
                          row.active ? 'translate-x-4' : ''
                        }`}
                      ></div>
                    </div>
                  </label>
                </td>
                <td className="relative px-4 py-4 flex space-x-2 mt-4">
                  <button
                    className="text-black"
                    onClick={() => togglePopup(index)}
                  >
                    <FaEllipsisV />
                  </button>
                  {activePopup === index && (
                    <div className="absolute top-10 right-0 w-32 bg-white shadow-lg border rounded-md z-10">
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                        Edit
                      </button>
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Marketer;

