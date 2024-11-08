import React, { useState } from "react";
import "@fontsource/inter"; // Import Inter font
import { FaEllipsisV } from "react-icons/fa"; // Import icon for three dots

const SeoTable = () => {
  const [activePopup, setActivePopup] = useState(null); // Track which row's popup is open

  // Toggle popup visibility for a row
  const togglePopup = (index) => {
    setActivePopup(activePopup === index ? null : index); // Toggle between open/close
  };

  // Sample data (replace with your actual data)
  const seoData = [
    { type: "Branch", link: "Test", title: "Salon" },
    { type: "Service", link: "Test Service", title: "Spa" },
    { type: "Product", link: "Test Product", title: "Shampoo" },
  ];

  return (
    <div className="p-4 lg:ml-20 ">
      {/* Table for larger screens */}
      <div className="hidden sm:block overflow-x-auto rounded-lg font-inter">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-[#EB5F8C] text-white">
              <th className="px-6 py-3 text-left">Type</th>
              <th className="px-6 py-3 text-left">Link</th>
              <th className="px-6 py-3 text-left">Title</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100">
            {seoData.map((row, index) => (
              <tr key={index}>
                <td className="px-6 py-4 text-gray-900">{row.type}</td>
                <td className="px-6 py-4 text-gray-900">{row.link}</td>
                <td className="px-6 py-4 text-gray-900">{row.title}</td>
                <td className="px-6 py-4 text-right text-gray-900 relative">
                  <button
                    className="text-gray-900"
                    onClick={() => togglePopup(index)} // Index for this row
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

      {/* Mobile View as Cards */}
      <div className="block sm:hidden space-y-4">
        {seoData.map((row, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 border border-[#EB5F8C] mb-2"
          >
            <h3 className="font-semibold">{row.type}</h3>
            <p className="text-sm">Link: {row.link}</p>
            <p className="text-sm">Title: {row.title}</p>
            <div className="flex justify-end mt-2 relative">
              <button className="text-black" onClick={() => togglePopup(index)}>
                <FaEllipsisV />
              </button>

              {/* Popup for Edit and Delete */}
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

export default SeoTable;

