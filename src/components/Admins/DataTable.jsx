import React from 'react';
import { FiSearch, FiMoreHorizontal } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';

const DataTable = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Search bar and New button */}
        <div className="flex justify-between items-center mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name..."
              className="w-72 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <button className="absolute right-0 top-0 text-white bg-[#5546A0] p-3 rounded-md">
              <FiSearch size={20} />
            </button>
          </div>
          <button className="flex items-center bg-[#5546A0] text-white px-4 py-2 rounded-md hover:bg-purple-700">
            <AiOutlinePlus className="mr-2" />
            New
          </button>
        </div>

        {/* Table */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="min-w-full table-auto">
            {/* Table Header */}
            <thead className="bg-pink-500">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-white">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-white">
                  Type
                </th>
                <th className="px-6 py-3 text-right text-sm font-medium text-white">
                  {/* Placeholder for more actions */}
                </th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              <tr className="bg-white">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  Nastaran Dehghan
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Admin
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-gray-500 hover:text-gray-700">
                    <FiMoreHorizontal size={20} />
                  </button>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-1">
            <button className="px-3 py-1 border rounded-md text-sm text-gray-500 hover:bg-gray-100">
              &lt;&lt;
            </button>
            <button className="px-3 py-1 border rounded-md text-sm text-gray-500 hover:bg-gray-100">
              1
            </button>
            <button className="px-3 py-1 border rounded-md text-sm text-gray-500 hover:bg-gray-100">
              2
            </button>
            <button className="px-3 py-1 border rounded-md text-sm text-gray-500 hover:bg-gray-100">
              3
            </button>
            <button className="px-3 py-1 border rounded-md text-sm text-gray-500 hover:bg-gray-100">
              &gt;&gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
