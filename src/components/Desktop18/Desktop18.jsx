import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai'; // Importing calendar icon

const Desktop18Form = () => {
  return (
    <div className="flex items-center justify-left bg-gray-100 mt-5">
      <div className="bg-white shadow-lg rounded-lg p-8 w-2/5 ml-20">
        <h2 className="text-lg font-semibold mb-6 text-gray-800">New Seo Content</h2>

        {/* Type Dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
          <select className="border rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
            <option value="article">select type</option>
            <option value="blog" className='bg-[#D5D1E8]'>Branch</option>
            <option value="product" className='hover:bg-[#D5D1E8]'>FakeBranch</option>
            <option value="service" className='hover:bg-[#D5D1E8]'>Category</option>
          </select>
        </div>

        {/* Link Slug Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Link Slug</label>
          <input
            type="text"
            placeholder="Enter link slug"
            className="border rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        {/* Title Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            placeholder="Enter title"
            className="border rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        {/* Canonical Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Canonical</label>
          <input
            type="text"
            placeholder="Enter canonical URL"
            className="border rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        {/* Description Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            rows="3"
            placeholder="Enter description"
            className="border rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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

export default Desktop18Form;
