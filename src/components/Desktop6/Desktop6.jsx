import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai'; // Importing calendar icon

const Desktop6Form = () => {
  return (
    <div className="flex items-center justify-left bg-gray-100 mt-5">
      <div className="bg-white shadow-lg rounded-lg p-8 w-2/5 ml-20">
        <h2 className="text-lg font-semibold mb-6 text-gray-800">Charge Marketing Credit</h2>

        {/* Date Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
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

        {/* Type Dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
          <select className="border rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
            <option value="refund">Refund</option>
          </select>
        </div>

        {/* Amount Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
          <input
            type="text"
            placeholder="Enter amount"
            className="border rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        {/* Description Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            rows="3"
            className="border rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Enter description"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button className="border border-[#5546A0] text-[#5546A0] px-4 py-2 rounded-md hover:bg-purple-50">
            Cancel
          </button>
          <button className="bg-[#5546A0] text-white px-4 py-2 rounded-md hover:bg-purple-700">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Desktop6Form;

