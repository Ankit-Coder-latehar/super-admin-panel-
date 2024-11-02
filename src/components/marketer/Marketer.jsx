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

  const [activePopup, setActivePopup] = useState(null);

  const toggleActive = (index) => {
    const updatedData = businessData.map((item, idx) =>
      idx === index ? { ...item, active: !item.active } : item
    );
    setBusinessData(updatedData);
  };

  const togglePopup = (index) => {
    setActivePopup(activePopup === index ? null : index);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
      {/* Search and New Button Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
        {/* Search Bar */}
        <div className="relative w-full sm:w-1/2">
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
        <a href="/desktop23">
          <button className="w-full sm:w-auto flex items-center bg-[#5546A0] text-white py-2 px-4 rounded-full hover:bg-[#5546A0]">
            + New
          </button>
        </a>
      </div>

      {/* Table for larger screens */}
      <div className="hidden sm:block overflow-x-auto rounded-2xl border border-[#EB5F8C] shadow-lg">
        <table className="w-full border-separate border-spacing-0 rounded-lg text-sm sm:text-base">
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
                <td className="px-4 py-2 flex space-x-2 relative">
                  <button className="text-black" onClick={() => togglePopup(index)}>
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

      {/* Mobile View as Cards */}
      <div className="block sm:hidden space-y-4">
        {businessData.map((row, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 border border-[#EB5F8C] mb-2">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">{row.businessName}</h3>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={row.active}
                  onChange={() => toggleActive(index)}
                  className="sr-only"
                />
                <div className="relative">
                  <div
                    className={`block w-8 h-5 rounded-full transition ${
                      row.active ? 'bg-green-400' : 'bg-gray-300'
                    }`}
                  ></div>
                  <div
                    className={`absolute left-1 top-1 w-3 h-3 bg-white rounded-full shadow transition transform ${
                      row.active ? 'translate-x-4' : ''
                    }`}
                  ></div>
                </div>
              </label>
            </div>
            <p className="text-sm">Branches: {row.branches}</p>
            <p className="text-sm">Subscription: {row.subscription}</p>
            <p className="text-sm">Expire Date: {row.expireDate}</p>
            <div className="flex justify-end space-x-2 mt-2">
              <button className="text-black">
                <FaPen />
              </button>
              <button className="text-black" onClick={() => togglePopup(index)}>
                <FaEllipsisV />
              </button>
              {activePopup === index && (
                <div className="absolute right-0 top-8 w-32 bg-white shadow-lg border rounded-md z-10">
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    Edit
                  </button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketer;

