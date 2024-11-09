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
    <div className="p-4 sm:p-6 md:p-8 ml-10 sm:ml-20 lg:ml-10">
      {/* Search and New Button Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0 sm:ml-0">
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
        <a href="/desktop9">
          <button className="w-full sm:w-auto flex items-center bg-[#5546A0] text-white py-2 px-4 rounded-md hover:bg-[#5546A0]">
            + New
          </button>
        </a>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl shadow-lg sm:w-[98%] ml-2 sm:ml-4">
        <table className="w-full border-separate border-spacing-0 rounded-lg text-sm sm:text-base hidden sm:table">
          <thead className="bg-[#EB5F8C] text-white">
            <tr>
              <th className="px-4 py-2 text-left">Business Name</th>
              <th className="px-4 py-2 text-left hidden sm:table-cell">Branches Count</th>
              <th className="px-4 py-2 text-left hidden lg:table-cell">Subscription</th>
              <th className="px-4 py-2 text-left hidden sm:table-cell">Expire Date</th>
              <th className="px-4 py-2 text-left hidden lg:table-cell">M-Credit</th>
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
                <td className="px-4 py-2 hidden sm:table-cell">{row.branches}</td>
                <td className="px-4 py-2 hidden lg:table-cell">{row.subscription}</td>
                <td className="px-4 py-2 hidden sm:table-cell">{row.expireDate}</td>
                <td className="px-4 py-2 hidden lg:table-cell">{row.mCredit}</td>
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
                        className={`block w-8 sm:w-10 h-5 sm:h-6 rounded-full transition ${
                          row.active ? 'bg-green-400' : 'bg-gray-300'
                        }`}
                      ></div>
                      <div
                        className={`absolute left-1 top-1 w-3 sm:w-4 h-3 sm:h-4 bg-white rounded-full shadow transition transform ${
                          row.active ? 'translate-x-4 sm:translate-x-5' : ''
                        }`}
                      ></div>
                    </div>
                  </label>
                </td>
                <td className="px-4 py-2 flex space-x-2 relative">
                  <button className="text-black">
                    <FaPen />
                  </button>
                  <button
                    className="text-black"
                    onClick={() => togglePopup(index)}
                  >
                    <FaEllipsisV />
                  </button>
                  {activePopup === index && (
                    <div className="absolute right-0 top-8 w-32 bg-white shadow-lg border rounded-md z-10">
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                        Edit
                      </button>
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                        Subscription
                      </button>
                      <a href='/desktop6'><button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                       MarketCredit
                      </button></a>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile View as Cards */}
        <div className="block sm:hidden space-y-4 ml-2">
          {businessData.map((row, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 mb-2 w-[90%] mx-auto" // Adjusted width and removed border
            >
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
                <button
                  className="text-black"
                  onClick={() => togglePopup(index)}
                >
                  <FaEllipsisV />
                </button>
              </div>
              {activePopup === index && (
                <div className="absolute right-0 top-8 w-32 bg-white shadow-lg border rounded-md z-10">
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    Edit
                  </button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    Subscription
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessTable;

