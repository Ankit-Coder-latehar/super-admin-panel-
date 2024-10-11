import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai'; // Importing calendar icon

const Desktop7Form = () => {
  return (
    <div className="flex items-center justify-left bg-gray-100 mt-5">
      <div className="bg-white shadow-lg rounded-lg p-8 w-2/5 ml-20">
        <h2 className="text-lg font-semibold mb-6 text-gray-800">Charge Marketing Credit</h2>

        {/* Business Name Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
          <input
            type="text"
            placeholder="Enter business name"
            className="border rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        {/* Expires At Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Expires At</label>
          <div className="relative">
            <input
              type="text"
              placeholder="mm/dd/yy"
              className="border rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <span className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
              <AiOutlineCalendar className="h-5 w-5 text-gray-400" />
            </span>
          </div>
        </div>

        {/* Period Dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Period</label>
          <select className="border rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>

        {/* Plan Dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Plan</label>
          <select className="border rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
            <option value="basic">Basic</option>
            <option value="premium">Premium</option>
            <option value="enterprise">Enterprise</option>
          </select>
        </div>

        {/* Total Price Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Total Price</label>
          <input
            type="text"
            placeholder="Enter total price"
            className="border rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button className="border border-[#5546A0] text-[#5546A0] px-4 py-2 rounded-md hover:bg-purple-50">
            Cancel
          </button>
          <button className="bg-[#5546A0] text-white px-4 py-2 rounded-md hover:bg-purple-700">
            Renew
          </button>
        </div>
      </div>
    </div>
  );
};

export default Desktop7Form;
