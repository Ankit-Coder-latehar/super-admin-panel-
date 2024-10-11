import React from 'react';

const NewSEOContentForm = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <div className="bg-white p-10 rounded-lg shadow-lg w-[500px]">
        <h2 className="text-xl font-semibold mb-6">New SEO Content</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5546A0] focus:border-transparent">
              <option>Select type</option>
              <option>Blog</option>
              <option>Product</option>
              <option>Landing Page</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Link Slug</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5546A0] focus:border-transparent"
              placeholder="Link Slug"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5546A0] focus:border-transparent"
              placeholder="Title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Canonical</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5546A0] focus:border-transparent"
              placeholder="Canonical"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5546A0] focus:border-transparent"
              rows="3"
              placeholder="Description"
            ></textarea>
          </div>
          <div className="flex justify-between mt-6">
            <button
              type="button"
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#5546A0] text-white rounded-md hover:bg-[#5546A0]"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewSEOContentForm;

