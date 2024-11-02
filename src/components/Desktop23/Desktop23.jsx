import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai'; // Importing calendar icon
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // Importing styles for phone input

const Desktop23Form = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 mt-5">
      <div className="bg-white shadow-lg rounded-lg p-8 w-4/5 sm:w-2/5 mx-4">
        <h2 className="text-lg font-semibold mb-6 text-gray-800">New Marketer</h2>

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

        {/* Email Address Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            placeholder="Enter email address"
            className="border rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        {/* Phone Number Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <PhoneInput
            country={'us'}
            inputStyle={{
              width: '100%',
              borderRadius: '8px',
              padding: '10px',
              border: '1px solid #d1d5db',
            }}
            dropdownStyle={{
              borderRadius: '8px',
              border: '1px solid #d1d5db',
            }}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button className="border border-[#5546A0] text-[#5546A0] px-4 py-2 rounded-md hover:bg-purple-50">
            Cancel
          </button>
          <button className="bg-[#5546A0] text-white px-4 py-2 rounded-md hover:bg-purple-700">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Desktop23Form;

