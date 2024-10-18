import React, { useState } from "react";
import "@fontsource/inter"; // Import Inter font
import { FaEllipsisV } from "react-icons/fa"; // Import icon for three dots

const SeoTable = () => {
  const [activePopup, setActivePopup] = useState(null); // Track which row's popup is open

  // Toggle popup visibility for a row
  const togglePopup = (index) => {
    setActivePopup(activePopup === index ? null : index); // Toggle between open/close
  };

  return (
    <div className="overflow-x-auto rounded-lg font-inter">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-pink-500 text-white">
            <th className="px-6 py-3 text-left">Type</th>
            <th className="px-6 py-3 text-left">Link</th>
            <th className="px-6 py-3 text-left">Title</th>
            <th className="px-6 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr>
            <td className="px-6 py-4 text-gray-900">Branch</td>
            <td className="px-6 py-4 text-gray-900">Test</td>
            <td className="px-6 py-4 text-gray-900">Salon</td>
            <td className="px-6 py-4 text-right text-gray-900 relative">
              <button
                className="text-gray-900"
                onClick={() => togglePopup(0)} // Index 0 for this row
              >
                <FaEllipsisV />
              </button>
              {activePopup === 0 && (
                <div className="absolute top-10 right-0 w-32 bg-white shadow-lg border rounded-md z-10">
                 <a href="/desktop15"> <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    Edit
                  </button></a>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    Delete
                  </button>
                </div>
              )}
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-gray-900">Service</td>
            <td className="px-6 py-4 text-gray-900">Test Service</td>
            <td className="px-6 py-4 text-gray-900">Spa</td>
            <td className="px-6 py-4 text-right text-gray-900 relative">
              <button
                className="text-gray-900"
                onClick={() => togglePopup(1)} // Index 1 for this row
              >
                <FaEllipsisV />
              </button>
              {activePopup === 1 && (
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
          <tr>
            <td className="px-6 py-4 text-gray-900">Product</td>
            <td className="px-6 py-4 text-gray-900">Test Product</td>
            <td className="px-6 py-4 text-gray-900">Shampoo</td>
            <td className="px-6 py-4 text-right text-gray-900 relative">
              <button
                className="text-gray-900"
                onClick={() => togglePopup(2)} // Index 2 for this row
              >
                <FaEllipsisV />
              </button>
              {activePopup === 2 && (
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
        </tbody>
      </table>
    </div>
  );
};

export default SeoTable;
