import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';

const DataTable = () => {
  const data = [
    { name: 'Nastaran Dehghan', type: 'Admin', link: '/desktop28' },
    { name: 'Nastaran Dehghan', type: 'Admin', link: '/desktop28' },
    { name: 'Nastaran Dehghan', type: 'Admin', link: '/desktop28' },
    // Add more rows as needed
  ];

  return (
    <div className="min-h-screen bg-white p-4 sm:p-8 lg:ml-10">
      <div className="max-w-7xl mx-auto">
        {/* Search bar and New button */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <div className="relative w-full mb-4 sm:mb-0">
            <input
              type="text"
              placeholder="Search by name..."
              className="w-full sm:w-72 px-4 py-2 pl-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
          </div>
          <a href='/desktop27'>
            <button className="flex items-center bg-[#5546A0] text-white px-4 py-2 rounded-md hover:bg-purple-700">
              <AiOutlinePlus className="mr-2" />
              New
            </button>
          </a>
        </div>

        {/* Table for larger screens */}
        <div className="hidden sm:block bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="min-w-full table-auto">
            {/* Table Header */}
            <thead className="bg-pink-500">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-white">Name</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-white">Type</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-white"></th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {data.map((item, index) => (
                <tr className="bg-white" key={index}>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{item.name}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.type}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href={item.link}>
                      <button className="hover:text-gray-700 rounded-md bg-gray-300 text-white px-4 py-2">Edit</button>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Card layout for mobile screens */}
        <div className="block sm:hidden">
          {data.map((item, index) => (
            <div key={index} className="bg-white border border-[#5546A0] shadow-lg rounded-lg p-4 mb-4">
              <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.type}</p>
              <div className="flex justify-end mt-2">
                <a href={item.link}>
                  <button className="hover:text-gray-700 rounded-md bg-[#5546A0] text-white px-4 py-2">Edit</button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-1">
            <button className="px-3 py-1 border border-[#5546A0] rounded-md text-sm text-gray-500 hover:bg-gray-100">&lt;&lt;</button>
            <button className="px-3 py-1 border border-[#5546A0] rounded-md text-sm text-gray-500 hover:bg-gray-100">1</button>
            <button className="px-3 py-1 border border-[#5546A0] rounded-md text-sm text-gray-500 hover:bg-gray-100">2</button>
            <button className="px-3 py-1 border border-[#5546A0] rounded-md text-sm text-gray-500 hover:bg-gray-100">3</button>
            <button className="px-3 py-1 border border-[#5546A0] rounded-md text-sm text-gray-500 hover:bg-gray-100">&gt;&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;



