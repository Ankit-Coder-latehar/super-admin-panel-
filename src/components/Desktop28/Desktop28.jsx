import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai'; // Importing calendar icon
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // Importing styles for phone input

const Desktop28Form = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 mt-5 p-4 sm:p-8">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
        <h2 className="text-lg font-semibold mb-6 text-gray-800">Edit Admins</h2>

        {/* First Name Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
          <input
            type="text"
            placeholder="Enter first name"
            className="border rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        {/* Last Name Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
          <input
            type="text"
            placeholder="Enter last name"
            className="border rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        {/* Type Dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
          <select className="border rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
            <option value="admin" className='hover:bg-[#D5D1E8]'>Select Type</option>
            <option value="editor" className='bg-[#D5D1E8]'>Seo</option>
            <option value="viewer" className='hover:bg-[#D5D1E8]'>Business Manager</option>
            <option value="viewer" className='hover:bg-[#D5D1E8]'>Admin</option>
            <option value="viewer" className='hover:bg-[#D5D1E8]'>Full Access</option>
          </select>
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="border rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button className="border border-[#5546A0] text-[#5546A0] px-4 py-2 rounded-md hover:bg-purple-50">
            Cancel
          </button>
          <button className="bg-[#5546A0] text-white px-4 py-2 rounded-md hover:bg-purple-700">
            Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default Desktop28Form;
