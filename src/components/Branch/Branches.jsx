import React from 'react';

const BusinessForm = () => {
  return (
    <div className="flex items-start justify-start p-6  h-screen mr-20">
      {/* Business form with larger width */}
      <form className="bg-white shadow-md rounded-md w-full max-w-xl p-6 space-y-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Business Name</label>
          <div className="flex items-center space-x-6 mt-1">
            <select className="border border-gray-300 rounded-md p-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 flex-1">
              <option value="" disabled selected>Select business</option>
              <option value="business1">Business 1</option>
              <option value="business2">Business 2</option>
            </select>
            <button className="bg-[#5546A0] text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-all">
              Generate
            </button>
          </div>
        </div>
      </form>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center text-center mt-60 mr-60">
        <div className="mb-6">
          {/* Add your icon component or image here */}
          <img src="/empty-image.png" alt="" />
        </div>
        <p className="text-lg text-gray-700">
          Select a <span className="text-purple-600 cursor-pointer">business</span> to view branches.
        </p>
      </div>
    </div>
  );
};

export default BusinessForm;


